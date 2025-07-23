class User {
  #email;
  #id;

  constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    if (newEmail.includes("@")) {
      this.#email = newEmail;
    } else {
      console.log("Invalid email");
    }
  }

  get id() {
    return this.#id;
  }

  set id(newId) {
    if (newId > 0) {
      this.#id = newId;
    } else {
      console.log("Invalid ID");
    }
  }

  performTask() {
    console.log("General user task.");
  }
}

class Admin extends User {
  constructor(name, email, id) {
    super(name, email, id);
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
    console.log(`${user.name} added by Admin.`);
  }

  removeUser(userId) {
    this.users = this.users.filter((user) => user.id !== userId);
    console.log(`User with ID ${userId} removed.`);
  }

  listUsers() {
    console.log("All users managed by Admin:");
    this.users.forEach((user) => {
      console.log(`- ${user.name} (${user.constructor.name})`);
    });
  }

  performTask() {
    console.log("Admin managing users and overseeing the system.");
  }
}

class Doctor extends User {
  constructor(name, email, id, specialty) {
    super(name, email, id);
    this.specialty = specialty;
    this.patients = [];
  }

  diagnose(patientName, disease) {
    this.patients.push({ patientName, disease });
    console.log(`${patientName} diagnosed with ${disease}.`);
  }

  listPatients() {
    console.log(`Patients diagnosed by Dr. ${this.name}:`);
    this.patients.forEach((p) => {
      console.log(`- ${p.patientName}: ${p.disease}`);
    });
  }

  performTask() {
    console.log(`Doctor treating patients in ${this.specialty}.`);
  }
}

class Patient extends User {
  constructor(name, email, id) {
    super(name, email, id);
    this.appointments = [];
  }

  bookAppointment(doctorName, date) {
    this.appointments.push({ doctorName, date });
    console.log(`Appointment booked with Dr. ${doctorName} on ${date}.`);
  }

  viewAppointments() {
    console.log(`Appointments for ${this.name}:`);
    this.appointments.forEach((app) => {
      console.log(`- Dr. ${app.doctorName} on ${app.date}`);
    });
  }

  performTask() {
    console.log("Patient managing health and booking appointments.");
  }
}

////////////// Start /////////////

// Create users
const admin = new Admin("Admin1", "admin@example.com", 1);
const doctor1 = new Doctor("Dr. Ahmed", "ahmed@hospital.com", 2, "Cardiology");
const patient1 = new Patient("Sara", "sara@gmail.com", 3);

// Admin adds users
admin.addUser(doctor1);
admin.addUser(patient1);

// Doctor diagnoses a patient
doctor1.diagnose("Sara", "High Blood Pressure");

// Patient books an appointment
patient1.bookAppointment("Dr. Ahmed", "2025-08-01");

// List all users managed by Admin
admin.listUsers();

// View diagnosed patients
doctor1.listPatients();

// View appointments
patient1.viewAppointments();

// Store users in array and call shared method
const allUsers = [admin, doctor1, patient1];

console.log("\n--- Performing Tasks ---");
allUsers.forEach((user) => {
  console.log(`${user.name} says:`);
  user.performTask();
  console.log("---------------");
});
