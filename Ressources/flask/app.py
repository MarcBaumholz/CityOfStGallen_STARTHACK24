from flask import Flask, request, render_template, redirect, url_for, abort, session
from werkzeug.utils import secure_filename

from flask import Flask, render_template, send_from_directory, abort
from werkzeug.utils import secure_filename
import os
import csv
import random
import json

app = Flask(__name__)
app.secret_key = os.urandom(24)

@app.route('/')
def index():
    # Redirect to the upload page by default
    return redirect(url_for('upload'))

@app.route('/upload')
def upload():
    # Render the upload page
    return render_template('upload.html')

@app.route('/upload_file', methods=['POST'])
def upload_file():
    if 'picture' in request.files:
        file = request.files['picture']
        if file.filename != '':
            filename = secure_filename(file.filename)
            if not os.path.exists('pictures'):
                os.makedirs('pictures')
            save_path = os.path.join('pictures', filename)
            file.save(save_path)
            return 'File uploaded successfully.'
    return 'No file uploaded.'


   
@app.route('/evaluation', methods=['GET', 'POST'])
def evaluation():
    names = ['Alexander Payne', 'Brooke Johnson', 'Charlie Smith', 'Danielle Reyes', 
            'Ethan Hawke', 'Fiona Gallagher', 'Griffin Door', 'Harper Lee',
            'Isaac Newton', 'Jasmine Rice', 'Kyle Lowry', 'Luna Lovegood', 
            'Megan Fox', 'Nathan Drake', 'Olivia Benson', 'Peter Parker', 
            'Quincy Adams', 'Rachel Green', 'Steve Jobs', 'Tina Turner']
    
    if 'counter' not in session:
        session['counter'] = 0
        session['names'] = random.sample(names, 5)  # Select 5 unique names
    
    current_name = session['names'][session['counter']]
    
    if request.method == 'POST':
        # Save submitted evaluation
        evaluations = session.get('evaluations', {})
        evaluations[current_name] = request.form.to_dict()
        session['evaluations'] = evaluations  # Update the session
        # log me evaluations
        print(evaluations)
        session['counter'] += 1  # Move to next student
        if session['counter'] >= 5:  # Completed evaluations
            # Convert evaluations to pandas DataFrame and save as a CSV
            # Define the CSV file path
            csv_file_path = 'pictures/evaluations.csv'

            with open(csv_file_path, 'w', newline='') as csv_file:
                
                # Assuming all sub-dictionaries in 'evaluations' have the same structure
                fieldnames = ['item'] + list(next(iter(evaluations.values())).keys())

                writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
                writer.writeheader()

                for item, criteria in evaluations.items():
                    row = {'item': item}
                    row.update(criteria)
                    writer.writerow(row)
            
            # Clear session and redirect to results
            session.pop('counter', None)
            session.pop('names', None)
            session.pop('evaluations', None)
            return redirect(url_for('results'))
    
    # Handling GET request or redirection after POST
    if 'counter' in session and session['counter'] < 5:
        current_name = session['names'][session['counter']]
    
    return render_template('evaluation.html', student_name=current_name)

@app.route('/results')
def results():
    # Define the path to your CSV file
    csv_file_path = 'pictures/evaluations.csv'
    
    # Initialize an empty list to store rows
    rows = []
    headers = []
    
    # Read the CSV file and store each row in the list
    with open(csv_file_path, newline='') as file:
        csv_reader = csv.reader(file)
        headers = next(csv_reader)
        for row in csv_reader:
            rows.append(row)

    # Convert rows to an HTML table
    html_table = '<table border="1">'
    html_table += '<tr><th>' + '</th><th>'.join(headers) + '</th></tr>'

    for row in rows:
        html_table += '<tr><td>' + '</td><td>'.join(row) + '</td></tr>'
    html_table += '</table>'

    # Return the HTML response
    return html_table

@app.route('/evaluate', methods=['POST'])
def evaluate():
    # Dummy function to handle form submission
    # Implement actual evaluation logic here
    print(request.form)
    return 'Evaluation Submitted!'

@app.route('/transparency')
def transparency():
    # Hier müssen Sie Ihre Logik für die Transparenzansicht hinzufügen
    return render_template('transparency.html')

@app.route('/pictures/transparency2')
def list_files():
    directory = os.path.join(app.root_path, 'pictures', 'transparency2')
    if os.path.exists(directory) and os.path.isdir(directory):
        files = [{'name': f, 'path': secure_filename(f)} for f in os.listdir(directory)]
        return render_template('list_files.html', files=files)
    else:
        abort(404)  # If the path is not a directory or not found, return 404

if __name__ == '__main__':
    app.run(debug=True)