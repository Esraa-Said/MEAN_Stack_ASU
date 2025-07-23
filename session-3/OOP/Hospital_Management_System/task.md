# Task-1 🏥 Hospital Management System

## 🔹 Step 1: Create a Base Class for All Users

Define a general class named `User`.

### 👤 This class should contain:

- Common information: **name**, **email**, **ID**
- A method that each user role will **customize later**
- Use **private fields** (encapsulation) for email and ID
- Provide **getters and setters** to safely access and update those private fields

---

## 🔹 Step 2: Create the Admin Role

This class should **inherit** from the `User` class.

### 👩‍💼 Admin Responsibilities:

- Add new users (Doctors or Patients)
- Remove users
- List all managed users
- Override the general task method to describe admin-specific tasks

---

## 🔹 Step 3: Create the Doctor Role

This class should also **inherit** from the `User` class.

### 🩺 Doctor Responsibilities:

- Has a **specialty** (e.g., Dermatology, Cardiology)
- Can **diagnose patients** (save patient name and disease)
- Can list all diagnosed patients
- Overrides the task method to describe doctor behavior

---

## 🔹 Step 4: Create the Patient Role

This class should **inherit** from the `User` class.

### 👤 Patient Responsibilities:

- Can **book appointments** with a doctor on a specific date
- Can **view all booked appointments**
- Overrides the task method to describe patient activity

---

## 🔹 Step 5: Create and Use Objects

### 🎯 Actions to Simulate:

- Create instances of **Admin**, **Doctor**, and **Patient**
- Admin adds users (Doctors, Patients)
- Doctor diagnoses a patient
- Patient books an appointment
- Store all users in an array and loop through them to call a shared method like `performTask()`

