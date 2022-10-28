<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    # data animals
    private $animals = ['Kucing', 'Ayam', 'Ikan'];

    # method index - menampilkan data animals
    public function index()
    {
        # gunakan foreach untuk menampilkan data animals (array)
        foreach ($this->animals as $animal) {
            echo $animal;
            echo "<br>";
        }
    }

    # method store - menambahkan hewan baru
    # parameter: hewan baru
    public function store(Request $request)
    {
        # gunakan method array_push untuk menambahkan data baru
        array_push($this->animals, $request->animal);
        echo "Berhasil menambahkan data $request->animal";
        echo "<br>";
        echo "<br>";
        echo "Data animals saat ini: ";
        echo "<br>";
        $this->index();
    }

    # method update - mengupdate hewan
    # parameter: index dan hewan baru
    public function update($id, Request $request)
    {
        echo "Mengubah data " . $this->animals[$id] .  " menjadi $request->animal";
        array_splice($this->animals, $id, 1, $request->animal);
        echo "<br>";
        echo "<br>";
        echo "Data animals saat ini: ";
        echo "<br>";
        $this->index();
    }

    # method delete - menghapus hewan
    # parameter: index
    public function destroy(Request $request, $id)
    {
        echo "Menghapus data " . $this->animals[$id];
        # gunakan method unset atau array_splice untuk menghapus data array
        array_splice($this->animals, $id, 1);
        echo "<br>";
        echo "<br>";
        echo "Data animals saat ini: ";
        echo "<br>";
        $this->index();
    }
}
