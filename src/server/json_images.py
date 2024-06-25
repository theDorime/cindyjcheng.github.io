import json
import mysql.connector


# Static site or expand to dynamic?
# ***Database may not be necessary unless hosting database and backend server for client-server features. Site 2.0 Restructure TBD...***

# Testing connection
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