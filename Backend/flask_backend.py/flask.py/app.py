from flask import Flask, json, jsonify, request
import requests

from flask_cors import CORS
import os
# from flask_mail import Mail
import sqlite3

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Enable CORS for all routes

@app.route('/')
def home():
    connection = sqlite3.connect("user_data.db")
    cursor = connection.cursor()

    table_creation_query = """
    CREATE TABLE IF NOT EXISTS approvedDonor (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        age INTEGER NOT NULL,
        blood_group TEXT NOT NULL,
        gender TEXT NOT NULL,
        
        organ_to_donate TEXT NOT NULL,
        donor_status BOOLEAN NOT NULL
        
    );
    """

    # Execute the query to create the table
    cursor.execute(table_creation_query)


    cursor.execute("""CREATE TABLE IF NOT EXISTS donorpatient (
                        id INTEGER PRIMARY KEY,
                        P_name TEXT NOT NULL,
                        D_name TEXT NOT NULL,
                        P_email TEXT NOT NULL,
                        D_email TEXT NOT NULL,
                        P_mobile TEXT NOT NULL,
                        D_mobile TEXT NOT NULL,
                        Blood_Group TEXT NOT NULL,
                        Organ TEXT NOT NULL
                    )""")
    
   
    
    # Recreate the 'user' table with the new structure
    cursor.execute("""CREATE TABLE IF NOT EXISTS user (
                        name TEXT,
                        phone TEXT,
                        password TEXT
                    )""")
    table_creation_query = """
    CREATE TABLE IF NOT EXISTS recepient (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        age INTEGER NOT NULL,
        blood_group TEXT NOT NULL,
        gender TEXT NOT NULL,
        address TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        contact_number TEXT NOT NULL,
        needed_organ TEXT NOT NULL,
        time_required TEXT NOT NULL,
        password TEXT NOT NULL
    );
    """

    # Execute the query to create the table
    cursor.execute(table_creation_query)

    
    table_creation_query = """
    CREATE TABLE IF NOT EXISTS donor (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        age INTEGER NOT NULL,
        blood_group TEXT NOT NULL,
        gender TEXT NOT NULL,
        address TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        contact_number TEXT NOT NULL,
        organ_to_donate TEXT NOT NULL,
        donor_status BOOLEAN NOT NULL,
        password TEXT NOT NULL,
        death_certificate TEXT
    );
    """

    # Execute the query to create the table
    cursor.execute(table_creation_query)

    return jsonify(message="Welcome to the Flask API"), 200  # HTTP 200 OKj
    

@app.route('/login', methods=['POST'])
def login_page():
    try:
        data = request.get_json()
        name = data.get('name')
        password = data.get('password')

        connection = sqlite3.connect("user_data.db")
        cursor = connection.cursor()

        # Use parameterized query to prevent SQL injection
        query = "SELECT name FROM user WHERE name=? And password=?"
        cursor.execute(query, (name,password))
        results = cursor.fetchall()

        if len(results) == 0 :
            msg = "Register yourself"
            return jsonify(message=msg), 400  # HTTP 400 Bad Request
        else:
            msg = "Login successfully"
            response_data = {'message': msg, 'user_data': results}
            return jsonify(response_data), 200  # HTTP 200 OK

    except Exception as e:
        # Log the exception or handle it as needed
        msg = f"An error occurred: {str(e)}"
        return jsonify(error=msg), 500  # HTTP 500 Internal Server Error

@app.route('/register', methods=['POST'])
def register_page():
    try:
        data = request.get_json()
        name = data.get('name')
        phone = data.get('phone')  # New field
        password = data.get('password')
        confirm_password = data.get('confirm_password')

        # Check if password and confirm_password match
        if password != confirm_password:
            msg = "Passwords do not match"
            return jsonify(message=msg), 400  # HTTP 400 Bad Request

        connection = sqlite3.connect("user_data.db")
        cursor = connection.cursor()

        # Check if the username already exists
        cursor.execute("SELECT * FROM user WHERE name=? or phone=?", (name,phone))
        existing_user = cursor.fetchone()

        if existing_user:
            msg = "Username or phone number already exists"
            return jsonify(message=msg), 400  # HTTP 400 Bad Request

        # Create the user table if it doesn't exist
        cursor.execute("""CREATE TABLE IF NOT EXISTS user (
                            name TEXT,
                            phone TEXT,  -- New field
                            password TEXT
                        )""")

        # Insert the new user into the database
        cursor.execute("INSERT INTO user (name, phone, password) VALUES (?, ?, ?)", (name, phone, password))
        connection.commit()

        # Get the user data after registration
        cursor.execute("SELECT * FROM user WHERE name=?", (name,))
        user_data = cursor.fetchone()

        msg = "Registered successfully"
        response_data = {'message': msg, 'user_data': user_data}
        return jsonify(response_data), 201  # HTTP 201 Created

    except Exception as e:
        msg = f"An error occurred: {str(e)}"
        return jsonify(error=msg), 500  # HTTP 500 Internal Server Error
    
from flask import Flask, jsonify, request
import sqlite3


@app.route('/forgot', methods=['POST'])
def forgot_password():
    try:
        data = request.get_json()
        phone = data.get('phone')
        password = data.get('password')
        confirm_password = data.get('confirm_password')

        if password != confirm_password:
            msg = "Passwords do not match"
            return jsonify(message=msg), 400  # HTTP 400 Bad Request

        connection = sqlite3.connect("user_data.db")
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM user WHERE phone=?", (phone,))
        existing_user = cursor.fetchone()

        if existing_user is not None:
            cursor.execute("UPDATE user SET password = ? WHERE phone = ?", (password, phone))
            connection.commit()
            connection.close()
            msg = "Password updated successfully"
            response_data = {'message': msg, 'newPassword': password}
            return jsonify(response_data), 200  # HTTP 200 OK

        else:
            msg = "User not found with the provided phone number"
            return jsonify(error=msg), 400  # HTTP 400 Bad Request

    except Exception as e:
        # Log the exception or handle it as needed
        msg = f"An error occurred: {str(e)}"
        return jsonify(error=msg), 500  # HTTP 500 Internal Server Error

   
@app.route("/addRecepient", methods=['POST'])
def addRecepient():
    conn = sqlite3.connect("user_data.db")
    cursor = conn.cursor()
    data = request.get_json()
    
    # Assuming you have already created the table with the right schema
    insert_query = """INSERT INTO recepient (name, age, blood_group, gender, address, email, contact_number, needed_organ, time_required, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"""
    try:
        cursor.execute(insert_query, (data['name'], data['age'], data['bloodGroup'], data['gender'], data['address'], data['email'], data['contactNumber'], data['neededOrgan'], data['timeRequired'], data['password']))
        conn.commit()
        recipient_id = cursor.lastrowid
        recipient = {'id': recipient_id}
        recipient.update(data)
        return jsonify({"message": "Successfully added", "recepient": recipient},  200)
    except Exception as e:
        return jsonify({"error": str(e)},  500)
    finally:
        cursor.close()
        conn.close()

@app.route("/getRecipient", methods=['GET'])
def getRecipient():
    conn = sqlite3.connect("user_data.db")
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT * FROM recepient")
        recipients = cursor.fetchall()
        recipient_list = []
        for recipient in recipients:
            recipient_info = {
                'id': recipient[0],
                'name': recipient[1],
                'age': recipient[2],
                'blood_group': recipient[3],
                'gender': recipient[4],
                'address': recipient[5],
                'email': recipient[6],
                'contact_number': recipient[7],
                'needed_organ': recipient[8],
                'time_required': recipient[9],
                'password': recipient[10]
            }
            recipient_list.append(recipient_info)
        return jsonify({"recipients": recipient_list}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        cursor.close()
        conn.close()

@app.route("/deleteRecipient/<int:id>", methods=['DELETE'])
def deleteRecipient(id):
    conn = None
    cursor = None

    try:
        conn = sqlite3.connect("user_data.db")
        cursor = conn.cursor()

        # Check if the recipient with the given ID exists
        cursor.execute("SELECT * FROM recepient WHERE id = ?", (id,))
        recipient = cursor.fetchone()

        if recipient:
            # If recipient exists, delete it
            cursor.execute("DELETE FROM recepient WHERE id = ?", (id,))
            conn.commit()
            return jsonify({"message": "Recipient deleted successfully"}), 200
        else:
            return jsonify({"error": "Recipient not found"}), 404

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()


UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route("/addDonor", methods=['POST'])
def addDonor():
    conn = sqlite3.connect("user_data.db")
    cursor = conn.cursor()
    data = request.get_json()
    
    # Assuming you have already created the table with the right schema
    insert_query = """INSERT INTO donor (name, age, blood_group, gender, address, email, contact_number, organ_to_donate, donor_status, password, death_certificate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"""
    try:
        # Extract file names from the JSON
        # files = data.get('files', [])
        # files_json = json.dumps(files)

        # Save files to the upload folder
        # for filename in files:
        #     file = request.files.get(filename)
        #     if file:
        #         file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

        # Insert data into the database
        cursor.execute(insert_query, (data['name'], data['age'], data['bloodGroup'], data['gender'], data['address'], data['email'], data['contactNumber'], data['organToDonate'], data['donor_alive'], data['password'], data['death']))
        conn.commit()

        donor_id = cursor.lastrowid
        donor = {'id': donor_id}
        donor.update(data)
        
        return jsonify({"message": "Successfully added", "donor": donor},  200)
    except Exception as e:
        return jsonify({"error": str(e)},  500)
    finally:
        cursor.close()
        conn.close()

@app.route("/getsDonor", methods=['GET'])
def getsDonor():
    conn = sqlite3.connect("user_data.db")
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT * FROM donor")
        donors = cursor.fetchall()

        donor_list = []
        for donor in donors:
            donor_info = {
                'id': donor[0],
                'name': donor[1],
                'age': donor[2],
                'bloodGroup': donor[3],
                'gender': donor[4],
                'address': donor[5],
                'email': donor[6],
                'contactNumber': donor[7],
                'organToDonate': donor[8],
                'donor_alive': donor[9],
                'password': donor[10],
                'death': donor[11]
            }
            donor_list.append(donor_info)

        return jsonify({"donors": donor_list}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        cursor.close()
        conn.close()


@app.route("/deleteDonor/<int:donor_id>", methods=['DELETE'])
def deleteDonor(donor_id):
    conn = sqlite3.connect("user_data.db")
    cursor = conn.cursor()
    try:
        cursor.execute("DELETE FROM donor WHERE id=?", (donor_id,))
        conn.commit()
        return jsonify({"message": "Donor deleted successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        cursor.close()
        conn.close()

# @app.route("/approveDonor/<int:donor_id>", methods=['POST'])
# def approveDonor(donor_id):
#     conn = sqlite3.connect("user_data.db")
#     cursor = conn.cursor()
#     try:
#         cursor.execute("SELECT * FROM donor WHERE id=?", (donor_id,))
#         donor = cursor.fetchone()
        
#         if donor:
#             # Process approval logic here
#             cursor.execute("UPDATE donor SET approved = 1 WHERE id = ?", (donor_id,))
#             conn.commit()
#             return jsonify({"message": "Donor approved successfully"}), 200
#         else:
#             return jsonify({"message": "Donor not found"}), 404
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500
#     finally:
#         cursor.close()
#         conn.close()

# @app.route("/getApprovedDonors", methods=["GET"])
# def getApprovedDonors():
#     conn = sqlite3.connect("user_data.db")
#     cursor = conn.cursor()
#     try:
#         cursor.execute("SELECT * FROM donor WHERE approved = 1")
#         approved_donors = cursor.fetchall()
#         donor_list = []
#         for donor in approved_donors:
#             donor_dict = dict(zip([column[0] for column in cursor.description], donor))
#             donor_list.append(donor_dict)
#         return jsonify({"approved_donors": donor_list}), 200
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500
#     finally:
#         cursor.close()
#         conn.close()
# @app.route("/getMatches", methods=['POST'])
# def getMatches():
#     try:
#         data = request.get_json()
#         recipient_blood_group = data.get('recipientBloodGroup')
#         organ_needed = data.get('organNeeded')
        
#         conn = sqlite3.connect("user_data.db")
#         cursor = conn.cursor()

#         query = """SELECT * FROM donor WHERE blood_group=? AND organ_to_donate=?"""
#         cursor.execute(query, (recipient_blood_group, organ_needed))
#         donors = cursor.fetchall()

#         donor_list = []
#         for donor in donors:
#             donor_info = {
#                 'id': donor[0],
#                 'name': donor[1],
#                 'age': donor[2],
#                 'bloodGroup': donor[3],
#                 'gender': donor[4],
#                 'address': donor[5],
#                 'email': donor[6],
#                 'contactNumber': donor[7],
#                 'organToDonate': donor[8],
#                 'donorStatus': donor[9],
#                 'password': donor[10],
#                 'deathCertificate': donor[11]
#             }
#             donor_list.append(donor_info)

#         return jsonify({"donors": donor_list}), 200
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500
#     finally:
#         cursor.close()
#         conn.close()

@app.route("/insertfetchRecipientDonor", methods=['GET'])
def insertfetchRecipientDonor():
    conn = sqlite3.connect("user_data.db")
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT recepient.name, donor.name, recepient.email, donor.email, recepient.contact_number, donor.contact_number, recepient.blood_group, donor.organ_to_donate FROM donor inner join recepient on donor.organ_to_donate = recepient.needed_organ and donor.blood_group=recepient.blood_group")
        recipients = cursor.fetchall()
        recipient_list = []
        
        for recipient in recipients:

            recipient_info = {
                'P_name': recipient[0],
                'D_name': recipient[1],
                'P_email': recipient[2],
                'D_email': recipient[3],
                'P_mobile': recipient[4],
                'D_mobile': recipient[5],
                'Blood_Group': recipient[6],
                'Organ': recipient[7]
               
            }
            recipient_list.append(recipient_info)
            break
        return jsonify({"recipients": recipient_list}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        cursor.close()
        conn.close()
        
@app.route("/insertDonorPatient", methods=['POST'])
def insertDonorPatient():
    cursor = None
    conn = None

    try:
        # Call the insertfetchRecipientDonor endpoint to fetch recipient-donor data
        response = requests.get("http://127.0.0.1:5000/insertfetchRecipientDonor")
        if response.status_code != 200:
            return jsonify({"error": "Failed to fetch recipient-donor data"}), 500
        
        data = response.json()
        recipients = data.get("recipients", [])

        conn = sqlite3.connect("user_data.db")
        cursor = conn.cursor()

        # Assuming you have already created the table with the right schema
        insert_query = """
        INSERT INTO donorpatient (P_name, D_name, P_email, D_email, P_mobile, D_mobile, Blood_Group, Organ) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """

        # Iterate over each recipient and insert their data into the table
        for recipient in recipients:
            P_name = recipient.get('P_name')
            D_name = recipient.get('D_name')
            P_email = recipient.get('P_email')
            D_email = recipient.get('D_email')
            P_mobile = recipient.get('P_mobile')
            D_mobile = recipient.get('D_mobile')
            Blood_Group = recipient.get('Blood_Group')
            Organ = recipient.get('Organ')

            # Execute the query to insert data into the table
            cursor.execute(insert_query, (P_name, D_name, P_email, D_email, P_mobile, D_mobile, Blood_Group, Organ))
        
        conn.commit()

        return jsonify({"message": "Data inserted successfully"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor is not None:
            cursor.close()
        if conn is not None:
            conn.close()


@app.route("/getRecipientDonor", methods=['GET'])
def getRecipientDonor():
    conn = sqlite3.connect("user_data.db")
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT * FROM donorpatient")
        recipients = cursor.fetchall()
        recipient_list = []
        for recipient in recipients:
            recipient_info = {
                'id': recipient[0],
                'P_name': recipient[1],
                'D_name': recipient[2],
                'P_email': recipient[3],
                'D_email': recipient[4],
                'P_mobile': recipient[5],
                'D_mobile': recipient[6],
                'Blood_Group': recipient[7],
                'Organ': recipient[8]
               
            }
            recipient_list.append(recipient_info)
        return jsonify({"recipients": recipient_list}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        cursor.close()
        conn.close()

@app.route("/getRecipientDonorById/<int:id>", methods=['GET'])
def getRecipientDonorById(id):
    try:
        conn = sqlite3.connect("user_data.db")
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM donorpatient WHERE id = ?", (id,))
        recipient = cursor.fetchone()

        if recipient:
            recipient_info = {
                'id': recipient[0],
                'P_name': recipient[1],
                'D_name': recipient[2],
                'P_email': recipient[3],
                'D_email': recipient[4],
                'P_mobile': recipient[5],
                'D_mobile': recipient[6],
                'Blood_Group': recipient[7],
                'Organ': recipient[8]
            }
            return jsonify({"recipient": recipient_info}), 200
        else:
            return jsonify({"message": "Recipient not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        cursor.close()
        conn.close()


@app.route('/updateDonorPatient/<int:id>', methods=['PUT'])
def updateDonorPatient(id):
    conn = None
    cursor = None

    try:
        conn = sqlite3.connect("user_data.db")
        cursor = conn.cursor()

        # Extract updated data from request payload
        updated_data = request.json

        # Execute the SQL UPDATE statement to update the record with the specified ID
        update_query = """
        UPDATE donorpatient
        SET P_name = ?, D_name = ?, P_email = ?, D_email = ?, P_mobile = ?, D_mobile = ?, Blood_Group = ?, Organ = ?
        WHERE id = ?
        """
        cursor.execute(update_query, (
            updated_data.get('P_name'),
            updated_data.get('D_name'),
            updated_data.get('P_email'),
            updated_data.get('D_email'),
            updated_data.get('P_mobile'),
            updated_data.get('D_mobile'),
            updated_data.get('Blood_Group'),
            updated_data.get('Organ'),
            id
        ))
        conn.commit()

        return jsonify({"message": "Record updated successfully"}), 200

    except sqlite3.Error as e:
        if conn:
            conn.rollback()
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

@app.route('/deleteDonorPatient/<int:id>', methods=['DELETE'])
def deleteDonorPatient(id):
    conn = None
    cursor = None

    try:
        conn = sqlite3.connect("user_data.db")
        cursor = conn.cursor()

        # Execute the SQL DELETE statement to delete the record with the specified ID
        delete_query = "DELETE FROM donorpatient WHERE id = ?"
        cursor.execute(delete_query, (id,))
        conn.commit()

        return jsonify({"message": "Record deleted successfully"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor is not None:
            cursor.close()
        if conn is not None:
            conn.close()

@app.route("/getDonor", methods=["GET"])
def getDonor():
    recipient_id = request.args.get('id')
    conn = sqlite3.connect("user_data.db")
    cursor = conn.cursor()
    
    select_recipient_query = "SELECT * FROM recepient WHERE id = ?"
    cursor.execute(select_recipient_query, (recipient_id,))
    recipient = cursor.fetchone()
    
    if recipient is None:
        return jsonify({"message": "No recipient exists with given id"},  404)
    
    select_donor_query = """SELECT * FROM donor WHERE organ_to_donate = ? AND blood_group = ?"""
    cursor.execute(select_donor_query, (recipient[8], recipient[3]))
    donors = cursor.fetchall()
    
    donor_list = []
    for donor in donors:
        donor_dict = dict(zip([column[0] for column in cursor.description], donor))
        donor_list.append(donor_dict)
    
    return jsonify({"donors": donor_list},  200)
    cursor.close()
    conn.close()


@app.route('/approve/<id>', methods=['GET'])
def approveAdmin(id):
    conn = sqlite3.connect("user_data.db")
    cursor = conn.cursor()
    query = "SELECT * FROM donor WHERE id=?"
    cursor.execute(query, (id,))
    data = cursor.fetchone()
    
    try:
        insert_query = """INSERT INTO approvedDonor (name, age, blood_group, gender, organ_to_donate, donor_status) VALUES (?, ?, ?, ?, ?, ?)"""
        cursor.execute(insert_query, (data[1], data[2], data[3], data[4], data[8], data[9]))
        conn.commit()
        select_recipient_query = "SELECT * FROM approvedDonor"
        cursor.execute(select_recipient_query)
        donors = cursor.fetchall()
    
        if donors is None:
            return jsonify({"message": "No recipient exists for donation"},  404)

        
    
        donor_list = []
        for donor in donors:
            donor_dict = dict(zip([column[0] for column in cursor.description], donor))
            donor_list.append(donor_dict)
    
        return jsonify({"approvedDonar": donor_list},  200)
    except Exception as e:
        return jsonify({"error": str(e)},  500)
    finally:
        cursor.close()
        conn.close()
        
@app.route('/approved-donors', methods=['GET'])
def get_approved_donors():
    try:
        conn = sqlite3.connect("user_data.db")
        cursor = conn.cursor()
        
        # Fetch all data from approvedDonor table
        cursor.execute("SELECT * FROM approvedDonor")
        donors = cursor.fetchall()
        
        # Convert data to dictionary format
        donor_list = []
        for donor in donors:
            donor_dict = {
                "id": donor[0],
                "name": donor[1],
                "age": donor[2],
                "blood_group": donor[3],
                "gender": donor[4],
                "organ_to_donate": donor[5],
                "donor_status": donor[6]
            }
            donor_list.append(donor_dict)
        
        return jsonify({"approvedDonors": donor_list}), 200
    
    except sqlite3.Error as e:
        return jsonify({"error": str(e)}), 500
    
    finally:
        cursor.close()
        conn.close()
    

if __name__ == '__main__':
    app.run(debug=True)
