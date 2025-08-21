# Import necessary components from the Flask library.
from flask import Flask, render_template, request

# Create an instance of the Flask application.
# The __name__ argument is used to help Flask locate resources like templates.
app = Flask(__name__)

# Route for the main dashboard page.
# It checks for a 'start=dashboard' parameter to skip the intro animation.
@app.route('/')
def home():
    """
    This function renders the main dashboard page.
    It tells Flask to find and display the 'dashboard.html' file
    from the 'templates' directory.
    """
    start_dashboard = request.args.get('start') == 'dashboard'
    return render_template('dashboard.html', start_dashboard=start_dashboard)
    
# Route for the second factory page.
# We now correctly pass 'start_dashboard=True' to the template.

@app.route('/daiichikoujou')
def firstfactory():
    """
    This function renders the second factory page.
    We pass start_dashboard=True to ensure the page is displayed without the intro animation.
    """
    return render_template('daiichikoujou.html', start_dashboard=True)

@app.route('/dainikoujou')
def secondfactory():
    """
    This function renders the second factory page.
    We pass start_dashboard=True to ensure the page is displayed without the intro animation.
    """
    return render_template('dainikoujou.html', start_dashboard=True)

# Route for the third factory page (placeholder).
@app.route('/daisankoujou')
def thirdfactory():
    return render_template('daisankoujou.html', start_dashboard=True)

# Route for the Toyota factory page (placeholder).
@app.route('/toyotakoujou')
def toyotafactory():
    return render_template('toyotakoujou.html', start_dashboard=True)

# This is the standard way to run a Flask application.
# It ensures the server only starts when the script is executed directly.
if __name__ == '__main__':
    # `app.run()` starts the web server.
    # host='0.0.0.0' makes the server accessible from any device on your network.
    # debug=True enables live reloading, which is useful for development.
    app.run(host='0.0.0.0', debug=True)
