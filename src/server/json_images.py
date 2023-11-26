import json

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