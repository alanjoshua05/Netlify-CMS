import streamlit as st
import json

# Function to read data from JSON file
def read_json_file(file_path):
    try:
        # Open the JSON file for reading
        with open(file_path, 'r') as file:
            data = json.load(file)  # Load JSON data from the file
        return data
    except FileNotFoundError:
        st.error(f"File '{file_path}' not found.")
    except Exception as e:
        st.error(f"An error occurred: {e}")

# Function to write data to JSON file
def write_json_file(file_path, data):
    try:
        # Write the data to the file
        with open(file_path, 'w') as file:
            json.dump(data, file, indent=4)  # Dump JSON data to the file with indentation
        st.success("Data saved successfully.")
    except Exception as e:
        st.error(f"An error occurred: {e}")

# Streamlit UI
def main():
    st.title("JSON Data Editor")
    st.sidebar.title("File Management")

    # File path input
    file_path = st.sidebar.text_input("Enter JSON file path:", "data.json")

    # Read file data
    data = read_json_file(file_path)

    # Display file data
    st.subheader("File Data")
    if data:
        st.write(data)

    # CRUD operations
    operation = st.sidebar.radio("Select Operation:", ("Create", "Read", "Update", "Delete"))

    if operation == "Create":
        st.sidebar.subheader("Create New Data")
        new_data = st.sidebar.text_area("Enter new JSON data:")
        if st.sidebar.button("Add Data"):
            try:
                new_data_dict = json.loads(new_data)
                data.update(new_data_dict)
                write_json_file(file_path, data)
            except json.JSONDecodeError:
                st.error("Invalid JSON data. Please enter valid JSON.")

    elif operation == "Update":
        st.sidebar.subheader("Update Existing Data")
        update_key = st.sidebar.text_input("Enter key to update:")
        update_value = st.sidebar.text_input("Enter new value:")
        if st.sidebar.button("Update Data"):
            if update_key in data:
                data[update_key] = update_value
                write_json_file(file_path, data)
            else:
                st.error(f"Key '{update_key}' not found in data.")

    elif operation == "Delete":
        st.sidebar.subheader("Delete Data")
        delete_key = st.sidebar.text_input("Enter key to delete:")
        if st.sidebar.button("Delete Data"):
            if delete_key in data:
                del data[delete_key]
                write_json_file(file_path, data)
            else:
                st.error(f"Key '{delete_key}' not found in data.")

# Run the Streamlit app
if __name__ == "__main__":
    main()
