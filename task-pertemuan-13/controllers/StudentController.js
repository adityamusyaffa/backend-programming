// import Model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    if (students.length > 0) {
      const data = {
        message: "Menampilkkan semua students",
        data: students,
      };
      return res.json(data);
    }
    const data = {
      message: "Data students masih kosong",
    };
    return res.status(404).json(data);
  }

  async show(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      const data = {
        message: `Menampilkan detail student dengan id ${id}`,
        data: student
      }
      return res.json(data);
    }

    const data = {
      message: `Student with id ${id} doesn't exist`,
    }
    return res.status(404).json(data);
  }

  async store(req, res) {
    const { nama, nim, email, jurusan } = req.body;

    if (!nama || !nim || !email || !jurusan) {
      const data = {
        message: "Gagal menambahkan data student, semua data harus dikirim",
        data: isNaN(nim),
      };
      return res.status(422).json(data);
    }

    if (isNaN(nim)) {
      const data = {
        message: "Gagal menambahkan data student, nim harus berupa angka",
        data: isNaN(nim),
      };
      return res.status(422).json(data);
    }

    const newStudent = await Student.create(req.body);
    const data = {
      message: "Menambahkan data student",
      data: [newStudent],
    };
    return res.status(201).json(data);
  }

  async update(req, res) {
    const { id } = req.params;
    const { nama, nim, email, jurusan } = req.body;
    const student = await Student.find(id);

    if (student) {
      if (!nama || !nim || !email || !jurusan) {
        const data = {
          message: "Gagal mengedit data student, semua data harus dikirim",
          data: isNaN(nim),
        };
        return res.status(422).json(data);
      }

      if (isNaN(nim)) {
        const data = {
          message: "Gagal mengedit data student, nim harus berupa angka",
          data: isNaN(nim),
        };
        return res.status(422).json(data);
      }

      const student = await Student.update(req.body, id);
      const data = {
        message: `Mengedit student id ${id}`,
        data: student,
      };
      return res.json(data);
    }

    const data = {
      message: `Data dengan id ${id} tidak ditemukan`,
    }
    return res.status(404).json(data);
  }

  async destroy(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      await Student.delete(id);
      const data = {
        message: `Menghapus student id ${id}`,
        data: student,
      };
      return res.json(data);
    }
    const data = {
      message: `Data dengan id ${id} tidak ditemukan`,
    }
    return res.status(404).json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;