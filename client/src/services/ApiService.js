class ApiService {
  async fetchStudents() {
    const response = await fetch("/api/student");
    return await response.json();
  }
  async fetchClasses() {
    const response = await fetch("/api/classes");
    return await response.json();
  }
  async fetchTeachers() {
    const response = await fetch("/api/teachers");
    return await response.json();
  }
}

export default new ApiService();
