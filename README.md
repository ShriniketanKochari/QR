# QR Code Generator 🌐📱

A simple and user-friendly **QR Code Generator web application** built using **HTML, CSS, JavaScript, and Python Flask**.

This application allows users to enter any valid website URL and instantly generate a QR code. The generated QR code can also be downloaded as a PNG image.

## 🚀 Features

* 🔗 Generate QR codes from website URLs
* 📱 QR code preview
* 📥 Download QR code as a PNG image
* ✅ URL validation
* 🎨 Simple and responsive user interface
* ⚡ Fast QR code generation
* 🌐 Flask-based web application
* 💻 Works on desktop and mobile browsers

## 🛠️ Technologies Used

* **HTML5** – Structure of the website
* **CSS3** – Styling and responsive design
* **JavaScript** – QR code generation and download functionality
* **Python** – Backend programming
* **Flask** – Python web framework
* **QRCode.js** – QR code generation library

## 📂 Project Structure

```text
QR-Code-Generator/
│
├── app.py
├── requirements.txt
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    └── script.js
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project folder

```bash
cd QR-Code-Generator
```

### 3. Install the required Python packages

```bash
pip install -r requirements.txt
```

### 4. Run the Flask application

```bash
python app.py
```

### 5. Open the application

Open your browser and visit:

```text
http://127.0.0.1:5000
```

## 🖥️ How to Use

1. Open the QR Code Generator website.
2. Enter a website URL, for example:

```text
https://www.google.com
```

3. Click **Generate QR Code**.
4. The QR code will appear on the screen.
5. Click **Download QR Code**.
6. The QR code will be downloaded as a PNG image.

## 🔄 How It Works

```text
Enter Website URL
        ↓
Validate URL
        ↓
Generate QR Code
        ↓
Display QR Code
        ↓
Download as PNG
```

The website uses **JavaScript and QRCode.js** to convert the entered URL into a QR code.

Flask is used to serve the web application and connect the HTML templates and static files.

## 📋 Requirements

* Python 3.x
* Flask
* Modern web browser
* Internet connection for loading the QRCode.js library

## 🌐 Deployment

The application can be deployed to a Python-compatible hosting platform and accessed through a public HTTPS URL.

## 🔮 Future Improvements

Some possible improvements for future versions include:

* 🎨 QR code color customization
* 📐 QR code size selection
* 🖼️ Add a logo to the QR code
* 🌙 Dark mode
* 📋 Copy URL button
* 📜 QR code generation history
* 📊 Download QR code in different formats
* 📱 Improved mobile interface

## 🎓 Project Purpose

This project was created as a beginner-friendly web development project to demonstrate the integration of:

**Frontend + JavaScript + Python + Flask**

It provides practical experience with web development, client-side scripting, Python backend development, and deployment.

## 👨‍💻 Author

**Shriniketan**

## 📄 License

This project is open-source and available for educational and personal use.
