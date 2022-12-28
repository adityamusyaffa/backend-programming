// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM students WHERE id = ?`;
      db.query(sql, id, (err, results) => {
        const [student] = results;
        resolve(student);
      });
    });
  }

  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      const created_at = "now()";
      const sql = `INSERT INTO students SET ?, created_at = ${created_at}, updated_at = ${created_at}`;
      db.query(sql, data, (err, results) => {
        resolve(results.insertId);
      });
    });

    return await Student.find(id);
  }

  static async update(data, id) {
    await new Promise((resolve, reject) => {
      const updated_at = "now()"
      const sql = `UPDATE students SET ?, updated_at = ${updated_at}  WHERE id = ?`;
      db.query(sql, [data, id], (err, result) => {
        resolve(result);
      });
    });

    return await this.find(id);
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM students WHERE id = ?`;
      db.query(sql, id, (err, result) => {
        resolve(result);
      });
    });
  }
}

// export class Student
module.exports = Student;