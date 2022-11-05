<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    // Get all student data
    public function index()
    {
        $students = Student::all();

        $data = [
            'message' => 'Get all students',
            'data' => $students,
        ];

        return response()->json($data, 200);
    }

    // Add student data
    public function store(Request $request)
    {
        // Receive request data from body
        $nama = $request->nama;
        $nim = $request->nim;
        $email = $request->email;
        $jurusan = $request->jurusan;

        // Insert data to database -> students
        $student = Student::create([
            "nama" => $nama,
            "nim" => $nim,
            "email" => $email,
            "jurusan" => $jurusan
        ]);

        $data = [
            "message" => "Student data successfully created",
            "data" => $student
        ];

        return response()->json($data, 201);
    }

    // Edit student data
    public function update($id, Request $request)
    {
        // Receive request data from body
        $nama = $request->nama;
        $nim = $request->nim;
        $email = $request->email;
        $jurusan = $request->jurusan;

        // Update student data
        $student = Student::find($id);
        $student->update([
            'nama' => $nama,
            'nim' => $nim,
            'email' => $email,
            'jurusan' => $jurusan,
        ]);

        $data = [
            "message" => "Student with id $id has succesfully updated",
            "data" => $student
        ];

        return response()->json($data, 200);
    }

    // Delete student data
    public function delete($id)
    {
        $student = Student::find($id);
        $student->delete();

        $data = [
            "message" => "Student with id $id has succesfully deleted",
            "data" => $student
        ];

        return response()->json($data, 200);
    }
}