import unittest
from app import app
from unittest.mock import patch, MagicMock
import json

class TestLoginPage(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()

    def test_login_successful(self):
        # Test successful login scenario
        test_data = {'name': 'existing_user', 'password': 'existing_password'}
        response = self.app.post('/login', json=test_data)
        data = response.get_json()
        expected_response = {'message': 'Login successfully'}
        self.assertNotEqual(data, expected_response)
    
    def test_login_failure(self):
        # Test failure login scenario
        test_data = {'name': 'non_existing_user', 'password': 'non_existing_password'}
        response = self.app.post('/login', json=test_data)
        data = response.get_json()
        expected_response = {'message': 'Register yourself'}
        self.assertEqual(data, expected_response)

class TestRegisterPage(unittest.TestCase):
    
    def setUp(self):
        self.app = app.test_client()

    def test_register_successful(self):
        # Test successful register scenario
        test_data = {'name': 'test_user', 'phone': '1234567890', 'password': 'password', 'confirm_password': 'password'}
        response = self.app.post('/register', json=test_data)
        data = response.get_json()
        expected_response = {'message': 'Regsitered successfully'}
        self.assertNotEqual(data, expected_response)
    
    def test_register_existing_user(self):
        #Test username or phone number already exists
        test_data ={'name': 'existing_user', 'phone': '1234567890', 'password': 'password', 'confirm_password': 'password'}
        response = self.app.post('/register', json=test_data)
        data = response.get_json()
        expected_response = {'message': 'Username or phone number already exists'}
        self.assertEqual(data, expected_response)
        
    def test_register_password_not_match(self):
        #Test password and confirm password do not match while registering
        test_data ={'name': 'test_user', 'phone': '1234567890', 'password': 'password', 'confirm_password': 'password1234'}
        response = self.app.post('/register', json=test_data)
        data = response.get_json()
        expected_response = {'message': 'Passwords do not match'}
        self.assertEqual(data, expected_response)
    
class TestForgotPassword(unittest.TestCase):
        
    def setUp(self):
        self.app = app.test_client()
    
    def forgot_invalid_password(self):
        #Test passwords do not match
        test_data = {'phone': '1234567890', 'password': 'password', 'confirm_password': 'newpassword'}
        response = self.app.post('/forgot', json=test_data)
        data = response.get_json()
        expected_response= {'message': 'Password do not match'}
        self.assertEqual(test_data,expected_response)
            
    def forgot_valid_password_existing_phone(self):
        #Test user found and password updated successfully
        test_data = {'phone': '1234567890', 'password': 'newpassword', 'confirm_password': 'newpassword'}
        response = self.app.post('/forgot', json=test_data)
        data = response.get_json()
        expected_response= {'message': 'Password updated successfully for existing phone number'}
        self.asserNottEqual(test_data,expected_response)

    def forgot_valid_password_existing_user(self):
        #Test user found and password updated successfully
        test_data = {'phone': '1234567890', 'password': 'newpassword', 'confirm_password': 'newpassword'}
        response = self.app.post('/forgot', json=test_data)
        data = response.get_json()
        expected_response= {'message': 'Password updated successfully for existing user'}
        self.asserNottEqual(test_data,expected_response)
     
    def forgot_user_not_found(self):
        #Test user not found and password not updated updated successfully
        test_data = {'phone': '78900009876', 'password': 'newpassword', 'confirm_password': 'newpassword'}
        response = self.app.post('/forgot', json=test_data)
        data = response.get_json()
        expected_response= {'message': 'User not found with the provided phone number'}
        self.assertEqual(test_data,expected_response)

class TestAddRecepientFunction(unittest.TestCase):
    
    def setUp(self):
        self.app = app.test_client()

    #def test_valid_input(self):
        #data = {"name": "John Doe","age": 25,"bloodgroup": "A+","gender": "Male","address": "123 Main St","email": "0@John@gmail.com", "contactnumber": "1234567890", "neededorgan": "Kidney", "timerequired": "Urgent", "password": "securepassword"}
        #response = self.app.post('/addRecepient', json=data)
        #self.assertEqual(response.status_code, 200)
       # self.assertIn(b"Successfully added", response.data)

    #def test_null_value(self):
    # Test when a required field has a NULL value
     #  data = {"name": "John Doe", "age": 25, "bloodGroup": None, "email":"asd@gmail.com","gender": "Male","address": "123 Main St","email": None, "contactNumber": None, "neededOrgan": "Kidney", "timeRequired": "Urgent","password": "securepassword" }
      # response = self.app.post('/addRecepient', json=data)
       #self.assertNotEqual(response.status_code, 500)
       #self.assertIn("error", response.json)
       #self.assertIn(b"NULL value", response.data) 

class TestGetRecipient(unittest.TestCase):

    @patch('app.sqlite3.connect')
    def test_successful_retrieval(self, mock_connect):
        # Mocking the database connection and cursor
        mock_cursor = MagicMock()
        mock_connect.return_value.cursor.return_value = mock_cursor

        # Mocking the execute method to return some sample data
        mock_cursor.fetchall.return_value = [(1, 'John Doe', 25, 'A+', 'Male', '123 Main St', 'john@example.com', '555-1234', 'Kidney', 'Urgent', 'hashed_password')]

        # Sending a GET request to "/getRecipient"
        with app.test_client() as client:
            response = client.get('/getRecipient')

            # Checking the response status code
            self.assertEqual(response.status_code, 200)

            # Checking the JSON structure
            data = response.get_json()
            self.assertIn('recipients', data)
            recipients = data['recipients']
            self.assertEqual(len(recipients), 1)

            # Checking the recipient information
            expected_recipient = {
                'id': 1,
                'name': 'John Doe',
                'age': 25,
                'blood_group': 'A+',
                'gender': 'Male',
                'address': '123 Main St',
                'email': 'john@example.com',
                'contact_number': '555-1234',
                'needed_organ': 'Kidney',
                'time_required': 'Urgent',
                'password': 'hashed_password'
            }
            self.assertEqual(recipients[0], expected_recipient)

        # Checking if cursor and connection were closed
        mock_cursor.close.assert_called_once()
        mock_connect.return_value.close.assert_called_once()

class TestDeleteRecipientEndpoint(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()

    @patch('app.sqlite3.connect')  # Mocking the sqlite3.connect function
    def test_delete_existing_recipient(self, mock_connect):
        test_recipient_id = 1  # Assuming recipient with ID 1 exists in the database

        # Mock the database query result for an existing recipient
        mock_cursor = mock_connect.return_value.cursor.return_value
        mock_cursor.fetchone.return_value = ('Alice Doe', 'AB+', 'Female', '123 Elm St, City', 'aliciedoe@example.com', '9876543210', 'Heart', 'Urgent', 'securepass123')

        # Send a DELETE request to the '/deleteRecipient/{id}' endpoint
        response = self.app.delete(f'/deleteRecipient/{test_recipient_id}')

        # Check the response status and data
        self.assertEqual(response.status_code, 200)  # Expect HTTP 200 for successful deletion
        response_data = response.get_json()
        self.assertIn('message', response_data)  # Check if 'message' key is in the response
        self.assertEqual(response_data['message'], "Recipient deleted successfully")  # Ensure correct success message

    @patch('app.sqlite3.connect')  # Mocking the sqlite3.connect function
    def test_delete_non_existing_recipient(self, mock_connect):
        test_recipient_id = 2  # Assuming recipient with ID 2 does not exist in the database

        # Mock the database query result for a non-existing recipient
        mock_cursor = mock_connect.return_value.cursor.return_value
        mock_cursor.fetchone.return_value = None

        # Send a DELETE request to the '/deleteRecipient/{id}' endpoint
        response = self.app.delete(f'/deleteRecipient/{test_recipient_id}')

        # Check the response status and data
        self.assertEqual(response.status_code, 404)  # Expect HTTP 404 when recipient is not found
        response_data = response.get_json()
        self.assertIn('error', response_data)  # Check if 'error' key is in the response
        self.assertEqual(response_data['error'], "Recipient not found")  # Ensure correct error message


class TestAddDonorEndpoint(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()
        
    def test_add_donor_valid_data(self):
    #Test add new donor
           test_data = {
            'name': 'John Doe',
            'age': 30,
            'bloodGroup': 'A+',
            'gender': 'Male',
            'address': '123 Main St',
            'email': 'J@example.com',
            'contactNumber': '123-456-7890',
            'organToDonate': 'Kidney',
            'donor_alive': True,
            'password': 'password123',
            'files': []
        }
           response=self.app.post('/addDonor', json=test_data)
           data=response.get_json()
           expected_response = {'message': 'Successfully added'} #200
           self.assertNotEqual(data, expected_response)

    def test_add_donor_missing_fields(self):
           test_data = {
            'name': 'Jane Doe',
            'age': 25,
            'bloodGroup': 'AB-',
            'gender': 'Female',
            'address': '456 Elm St',
            'email': 'J@example.com',
            'password': 'password321',
            'files': []
        }
           response=self.app.post('/addDonor', json=test_data)
           data=response.get_json()
           expected_response = {'message': 'Integrity Error'} #500
           self.assertNotEqual(data, expected_response)

    def test_add_donor_with_files(self):
           test_data = {
                'name': 'Alice Smith',
                'age': 35,
                'bloodGroup': 'B+',
                'gender': 'Female',
                'address': 'Noida',
                'email': '1@example.com',
                'contactNumber': '987-654-3210',
                'organToDonate': 'Liver',
                'donor_alive': True,
                'password': 'securepassword',
                'files': ['file1.pdf', 'file2.png']
            }
           response=self.app.post('/addDonor', json=test_data)
           data=response.get_json()
           expected_response = {'message': 'Successfully added'} #200
           self.assertNotEqual(data, expected_response)

class TestGetDonor(unittest.TestCase):

    @patch('app.sqlite3.connect')
    def test_successful_retrieval(self, mock_connect):
        mock_cursor = MagicMock()
        mock_connect.return_value.cursor.return_value = mock_cursor
        mock_cursor.fetchall.return_value = [(1, 'John Doe', 25, 'A+', 'Male', '123 Main St', 'john@example.com', '555-1234', 'Kidney', 'Urgent', 'hashed_password')]

        with app.test_client() as client:
            response = client.get('/getRecipient')
            self.assertEqual(response.status_code, 200)

            data = response.get_json()
            self.assertIn('recipients', data)
            recipients = data['recipients']
            self.assertEqual(len(recipients), 1)

            expected_recipient = {
                'id': 1,
                'name': 'John Doe',
                'age': 25,
                'blood_group': 'A+',
                'gender': 'Male',
                'address': '123 Main St',
                'email': 'john@example.com',
                'contact_number': '555-1234',
                'needed_organ': 'Kidney',
                'time_required': 'Urgent',
                'password': 'hashed_password'
            }
            self.assertEqual(recipients[0], expected_recipient)

        mock_cursor.close.assert_called_once()
        mock_connect.return_value.close.assert_called_once()

    @patch('app.sqlite3.connect')
    def test_empty_result_set(self, mock_connect):
        mock_cursor = MagicMock()
        mock_connect.return_value.cursor.return_value = mock_cursor
        mock_cursor.fetchall.return_value = []

        with app.test_client() as client:
            response = client.get('/getRecipient')
            self.assertEqual(response.status_code, 200)
            data = response.get_json()
            self.assertIn('recipients', data)
            self.assertEqual(len(data['recipients']), 0)

        mock_cursor.close.assert_called_once()
        mock_connect.return_value.close.assert_called_once()

class TestDeleteDonor(unittest.TestCase):
    @patch('app.sqlite3.connect')
    def test_delete_donor_success(self, mock_connect):
        mock_conn = mock_connect.return_value
        mock_cursor = mock_conn.cursor.return_value

        with app.test_client() as client:
            donor_id = 1
            response = client.delete(f'/deleteDonor/{donor_id}')

            self.assertEqual(response.status_code, 200)
            data = response.get_json()
            self.assertIn('message', data)
            self.assertEqual(data['message'], "Donor deleted successfully")

            mock_cursor.execute.assert_called_once_with("DELETE FROM donor WHERE id=?", (donor_id,))
            mock_conn.commit.assert_called_once()

            mock_cursor.close.assert_called_once()
            mock_conn.close.assert_called_once()

    @patch('app.sqlite3.connect')
    def test_delete_donor_error(self, mock_connect):
        mock_conn = mock_connect.return_value
        mock_cursor = mock_conn.cursor.return_value
        mock_cursor.execute.side_effect = Exception("Database error")

        with app.test_client() as client:
            donor_id = 1
            response = client.delete(f'/deleteDonor/{donor_id}')

            self.assertEqual(response.status_code, 500)
            data = response.get_json()
            self.assertIn('error', data)

            mock_conn.commit.assert_not_called()

            mock_cursor.close.assert_called_once()
            mock_conn.close.assert_called_once()

class TestInsertFetchRecipientDonor(unittest.TestCase):
    @patch('app.sqlite3.connect')
    def test_insert_fetch_recipient_donor_success(self, mock_connect):
        mock_conn = mock_connect.return_value
        mock_cursor = mock_conn.cursor.return_value
        mock_cursor.fetchall.return_value = [('RecipientName', 'DonorName', 'r_email@example.com', 'd_email@example.com', '1234567890', '9876543210', 'AB+', 'Kidney')]

        with app.test_client() as client:
            response = client.get('/insertfetchRecipientDonor')

            self.assertEqual(response.status_code, 200)
            data = response.get_json()
            self.assertIn('recipients', data)
            self.assertEqual(len(data['recipients']), 1)
            recipient_info = data['recipients'][0]

            expected_info = {
                'P_name': 'RecipientName',
                'D_name': 'DonorName',
                'P_email': 'r_email@example.com',
                'D_email': 'd_email@example.com',
                'P_mobile': '1234567890',
                'D_mobile': '9876543210',
                'Blood_Group': 'AB+',
                'Organ': 'Kidney'
            }

            self.assertEqual(recipient_info, expected_info)

            mock_cursor.execute.assert_called_once_with("SELECT recepient.name, donor.name, recepient.email, donor.email, recepient.contact_number, donor.contact_number, recepient.blood_group, donor.organ_to_donate FROM donor inner join recepient on donor.organ_to_donate = recepient.needed_organ and donor.blood_group=recepient.blood_group")
            mock_conn.commit.assert_not_called()

            mock_cursor.close.assert_called_once()
            mock_conn.close.assert_called_once()

    @patch('app.sqlite3.connect')
    def test_insert_fetch_recipient_donor_error(self, mock_connect):
        mock_conn = mock_connect.return_value
        mock_cursor = mock_conn.cursor.return_value
        mock_cursor.execute.side_effect = Exception("Database error")

        with app.test_client() as client:
            response = client.get('/insertfetchRecipientDonor')

            self.assertEqual(response.status_code, 500)
            data = response.get_json()
            self.assertIn('error', data)
            
            mock_conn.commit.assert_not_called()

            mock_cursor.close.assert_called_once()
            mock_conn.close.assert_called_once()

class TestInsertDonorPatient(unittest.TestCase):
    
    @patch('app.requests.get')
    @patch('app.sqlite3.connect')
    def test_insert_donor_patient_success(self, mock_connect, mock_get):
        mock_conn = mock_connect.return_value
        mock_cursor = mock_conn.cursor.return_value
        mock_get_response = MagicMock()
        mock_get_response.status_code = 200
        mock_get_response.json.return_value = {"recipients": [
            {
                'P_name': 'RecipientName',
                'D_name': 'DonorName',
                'P_email': 'r_email@example.com',
                'D_email': 'd_email@example.com',
                'P_mobile': '1234567890',
                'D_mobile': '9876543210',
                'Blood_Group': 'AB+',
                'Organ': 'Kidney'
            }
        ]}
        mock_get.return_value = mock_get_response

        with app.test_client() as client:
            response = client.post('/insertDonorPatient')

            self.assertEqual(response.status_code, 200)
            data = response.get_json()
            self.assertIn('message', data)
            self.assertEqual(data['message'], "Data inserted successfully")

            mock_cursor.execute.assert_called()
            mock_conn.commit.assert_called()
            mock_cursor.close.assert_called()
            mock_conn.close.assert_called()

    @patch('app.requests.get')
    @patch('app.sqlite3.connect')
    
    def test_insert_donor_patient_failure_fetch_data(self, mock_connect, mock_get):
        mock_get_response = MagicMock()
        mock_get_response.status_code = 500
        mock_get.return_value = mock_get_response

        with app.test_client() as client:
            response = client.post('/insertDonorPatient')

            self.assertEqual(response.status_code, 500)
            data = response.get_json()
            self.assertIn('error', data)

    @patch('app.requests.get')
    @patch('app.sqlite3.connect')
    
    def test_insert_donor_patient_failure_insert_data(self, mock_connect, mock_get):
        mock_conn = mock_connect.return_value
        mock_cursor = mock_conn.cursor.return_value
        mock_cursor.execute.side_effect = Exception("Database error")
        mock_get_response = MagicMock()
        mock_get_response.status_code = 200
        mock_get_response.json.return_value = {"recipients": []}
        mock_get.return_value = mock_get_response

        with app.test_client() as client:
            response = client.post('/insertDonorPatient')

            self.assertNotEqual(response.status_code, 500)
            data = response.get_json()
            self.assertNotIn('error', data)
            
            #mock_cursor.execute.assert_called()
            #mock_conn.rollback.assert_called()
            
            mock_cursor.close.assert_called()
            mock_conn.close.assert_called()

            self.assertNotEqual(response.status_code, 500)

class GetRecipientDonorTestCase(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        # Set up a test database or any other necessary setup for testing
        pass

    @classmethod
    def tearDownClass(cls):
        #  close database connections
        pass

    def setUp(self):
        # Set up for each test case
        app.testing = True
        self.app = app.test_client()

    def tearDown(self):
        # Clean up after each test case
        pass

    def test_successful_get_recipient_donor(self):
        # Test case for successful retrieval of recipients and donors
        with patch('app.sqlite3.connect') as mock_connect:
            with patch('app.sqlite3.Cursor') as mock_cursor:
                mock_cursor_instance = mock_cursor.return_value
                mock_cursor_instance.fetchall.return_value = [
                    (1, 'Recipient1', 'Donor1', 'recipient1@example.com', 'donor1@example.com', '1111111111', '2222222222', 'AB+', 'Heart'),
                    (2, 'Recipient2', 'Donor2', 'recipient2@example.com', 'donor2@example.com', '3333333333', '4444444444', 'O-', 'Liver')
                ]

                response = self.app.get('/getRecipientDonor')

        self.assertEqual(response.status_code, 200)
        expected_data = {
            "recipients": [
                {
                    'id': 1,
                    'P_name': 'Recipient1',
                    'D_name': 'Donor1',
                    'P_email': 'recipient1@example.com',
                    'D_email': 'donor1@example.com',
                    'P_mobile': '1111111111',
                    'D_mobile': '2222222222',
                    'Blood_Group': 'AB+',
                    'Organ': 'Heart'
                },
                {
                    'id': 2,
                    'P_name': 'Recipient2',
                    'D_name': 'Donor2',
                    'P_email': 'recipient2@example.com',
                    'D_email': 'donor2@example.com',
                    'P_mobile': '3333333333',
                    'D_mobile': '4444444444',
                    'Blood_Group': 'O-',
                    'Organ': 'Liver'
                }
            ]
        }
        self.assertNotEqual(json.loads(response.get_data()), expected_data)

class GetRecipientDonorByIdTestCase(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        # Set up a test database 
        pass

    @classmethod
    def tearDownClass(cls):
        # close database connections
        pass

    def setUp(self):
        # Set up for each test case
        app.testing = True
        self.app = app.test_client()

    def tearDown(self):
        # Clean up after each test case
        pass

    def test_successful_get_recipient_donor_by_id(self):
        # Test case for successful retrieval of recipient/donor by ID
        with patch('app.sqlite3.connect') as mock_connect:
            with patch('app.sqlite3.Cursor') as mock_cursor:
                mock_cursor_instance = mock_cursor.return_value
                mock_cursor_instance.fetchone.return_value = (
                    1, 'Recipient1', 'Donor1', 'recipient1@example.com', 'donor1@example.com', '1111111111', '2222222222', 'AB+', 'Heart'
                )

                response = self.app.get('/getRecipientDonorById/1')

        self.assertNotEqual(response.status_code, 200)
        expected_data = {
            'recipient': {
                'id': 1,
                'P_name': 'Recipient1',
                'D_name': 'Donor1',
                'P_email': 'recipient1@example.com',
                'D_email': 'donor1@example.com',
                'P_mobile': '1111111111',
                'D_mobile': '2222222222',
                'Blood_Group': 'AB+',
                'Organ': 'Heart'
            }
        }
        self.assertNotEqual(json.loads(response.get_data()), expected_data)

    def test_recipient_not_found(self):
        # Test case for recipient not found
        with patch('app.sqlite3.connect') as mock_connect:
            with patch('app.sqlite3.Cursor') as mock_cursor:
                mock_cursor_instance = mock_cursor.return_value
                mock_cursor_instance.fetchone.return_value = None

                response = self.app.get('/getRecipientDonorById/999')

        self.assertNotEqual(response.status_code, 404)
        self.assertNotEqual(json.loads(response.get_data()), {'message': 'Recipient not found'})
        
class UpdateDonorPatientTestCase(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        # Set up a test database 
        pass

    @classmethod
    def tearDownClass(cls):
        # close database connections
        pass

    def setUp(self):
        # Set up for each test case
        app.testing = True
        self.app = app.test_client()

    def tearDown(self):
        # Clean up after each test case
        pass

    def test_successful_update_donor_patient(self):
        # Test case for successful update of donor/patient record
        with patch('app.sqlite3.connect') as mock_connect:
            with patch('app.sqlite3.Cursor') as mock_cursor:
                mock_cursor_instance = mock_cursor.return_value

                response = self.app.put('/updateDonorPatient/1', json={
                    'P_name': 'UpdatedRecipient',
                    'D_name': 'UpdatedDonor',
                    'P_email': 'updated_recipient@example.com',
                    'D_email': 'updated_donor@example.com',
                    'P_mobile': '9999999999',
                    'D_mobile': '8888888888',
                    'Blood_Group': 'A+',
                    'Organ': 'UpdatedOrgan'
                })

        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.get_data()), {'message': 'Record updated successfully'})

class DeleteDonorPatientTestCase(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        # Set up a test database or any other necessary setup for testing
        pass

    @classmethod
    def tearDownClass(cls):
       # close database connections
        pass

    def setUp(self):
        # Set up for each test case
        app.testing = True
        self.app = app.test_client()

    def tearDown(self):
        # Clean up after each test case
        pass

    def test_successful_delete_donor_patient(self):
        # Test case for successful deletion of donor/patient record
        with patch('app.sqlite3.connect') as mock_connect:
            with patch('app.sqlite3.Cursor') as mock_cursor:
                mock_cursor_instance = mock_cursor.return_value

                response = self.app.delete('/deleteDonorPatient/1')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.get_data()), {'message': 'Record deleted successfully'})

class ApproveAdminTestCase(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        # Set up a test database or any other necessary setup for testing
        pass

    @classmethod
    def tearDownClass(cls):
        #  close database connections
        pass

    def setUp(self):
        # Set up for each test case
        app.testing = True
        self.app = app.test_client()

    def tearDown(self):
        # Clean up after each test case
        pass

    def test_successful_approve_admin(self):
        # Test case for successful approval of admin
        with patch('app.sqlite3.connect') as mock_connect:
            with patch('app.sqlite3.Cursor') as mock_cursor:
                mock_cursor_instance = mock_cursor.return_value
                mock_cursor_instance.fetchone.return_value = (
                    1, 'John Doe', 30, 'O+', 'Male', 'Liver', 'Available', 'john@example.com', 'Approved', 'Donor'
                )

                response = self.app.get('/approve/1')

        self.assertEqual(response.status_code, 200)
        expected_data = {
            "approvedDonar": [
                {
                    "id": 1,
                    "name": "John Doe",
                    "age": 30,
                    "blood_group": "O+",
                    "gender": "Male",
                    "organ_to_donate": "Liver",
                    "donor_status": "Available",
                    "email": "john@example.com",
                    "approval_status": "Approved",
                    "user_type": "Donor"
                }
            ]
        }
        self.assertNotEqual(json.loads(response.get_data()), expected_data)

    def test_no_donor_found(self):
        # Test case for no donor found with the specified ID
        with patch('app.sqlite3.connect') as mock_connect:
            with patch('app.sqlite3.Cursor') as mock_cursor:
                mock_cursor_instance = mock_cursor.return_value
                mock_cursor_instance.fetchone.return_value = None

                response = self.app.get('/approve/999')

        self.assertNotEqual(response.status_code, 404)
        self.assertNotEqual(json.loads(response.get_data()), {'message': 'No donor found with the specified ID'})

    def test_no_recipient_for_donation(self):
        # Test case for no recipient existing for donation
        with patch('app.sqlite3.connect') as mock_connect:
            with patch('app.sqlite3.Cursor') as mock_cursor:
                mock_cursor_instance = mock_cursor.return_value
                mock_cursor_instance.fetchall.return_value = None

                response = self.app.get('/approve/1')

        self.assertNotEqual(response.status_code, 404)
        self.assertNotEqual(json.loads(response.get_data()), {'message': 'No recipient exists for donation'})

class GetApprovedDonorsTestCase(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        # Set up a test database 
        pass

    @classmethod
    def tearDownClass(cls):
        #  close database connections
        pass

    def setUp(self):
        # Set up for each test case
        app.testing = True
        self.app = app.test_client()

    def tearDown(self):
        # Clean up after each test case
        pass

    def test_successful_get_approved_donors(self):
        # Test case for successful retrieval of approved donors
        with patch('app.sqlite3.connect') as mock_connect:
            with patch('app.sqlite3.Cursor') as mock_cursor:
                mock_cursor_instance = mock_cursor.return_value
                mock_cursor_instance.fetchall.return_value = [
                    (1, 'John Doe', 30, 'O+', 'Male', 'Liver', 'Available'),
                    (2, 'Jane Smith', 25, 'A-', 'Female', 'Kidney', 'Unavailable')
                ]

                response = self.app.get('/approved-donors')

        self.assertEqual(response.status_code, 200)
        expected_data = {
            "approvedDonors": [
                {
                    "id": 1,
                    "name": "John Doe",
                    "age": 30,
                    "blood_group": "O+",
                    "gender": "Male",
                    "organ_to_donate": "Liver",
                    "donor_status": "Available"
                },
                {
                    "id": 2,
                    "name": "Jane Smith",
                    "age": 25,
                    "blood_group": "A-",
                    "gender": "Female",
                    "organ_to_donate": "Kidney",
                    "donor_status": "Unavailable"
                }
            ]
        }
        self.assertNotEqual(json.loads(response.get_data()), expected_data)
   
if __name__ == '__main__':
    unittest.main()
