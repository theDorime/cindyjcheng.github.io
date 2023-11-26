import json
import mysql.connector

connection = mysql.connector.connect(host='localhost', user='root', password='', database='Gallery')

if connection.is_connected(): 
    print('Connected Successfully') 

     # Create a cursor to execute SQL queries
    cursor = connection.cursor()

    # Example query: Retrieve all rows from a table
    query = "SELECT * FROM graduation"
    # Execute the query
    cursor.execute(query)

    # Fetch all the rows
    rows = cursor.fetchall()

    # Process the rows
    for row in rows:
        print(row)
else: 
    print('Connection Failed')

connection.close()
data = {
    "name": "John Doe",
    "age": 30,
    "city": "Example City",
    "skills": ["Python", "JavaScript", "SQL"]
}

# Convert the Python dictionary to a JSON-formatted string
json_string = json.dumps(data, indent=2)

# Print the JSON string
print(json_string)