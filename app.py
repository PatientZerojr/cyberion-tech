from flask import Flask, render_template


def create_app():
    app = Flask(__name__)

    @app.route("/")
    def home():
        return render_template("index.html", active_page="home")

    @app.route("/about")
    def about():
        return render_template("about.html", active_page="about")

    @app.route("/services")
    def services():
        return render_template("services.html", active_page="services")

    @app.route("/credentials")
    def credentials():
        return render_template("credentials.html", active_page="credentials")

    @app.route("/contact")
    def contact():
        return render_template("contact.html", active_page="contact")

    return app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
