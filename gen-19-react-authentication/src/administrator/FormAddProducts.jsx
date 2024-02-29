import React from "react";
import Button from "../components/Button";
import InputText from "../components/InputText";

export default function FormAddProducts({
    handleSubmit,
    register,
    onSubmitForm,
    gambarBaru,
    tambahGambar,
    hapusGambar,
    pratinjauGambar,
    errors,
    dataUpdate
}) {
    return (
        <div className="relative border-4 border-black h-[50rem] p-2 rounded-3xl">
            <form
                onSubmit={handleSubmit(onSubmitForm)}
                className="flex flex-col relative h-full py-1"
            >
                <div>
                    <div className="relative grid pb-5">
                        <label
                            htmlFor="Nama"
                            className="px-5 font-roboto text-xl"
                        >
                            Nama Barang:
                        </label>
                        <InputText
                            register={register}
                            placeholder={"Nama Barang"}
                            id={"nama"}
                            defaultValue={dataUpdate == undefined ? "" : dataUpdate.nama}
                        />
                        <p className="absolute top-[4.5rem] left-3 text-xs font-bold text-red-400">
                            {errors.nama?.message}
                        </p>
                    </div>
                    <div className="relative grid pb-5">
                        <label
                            htmlFor="Harga"
                            className="px-5 font-roboto text-xl"
                        >
                            Harga Barang:
                        </label>
                        <InputText
                            register={register}
                            placeholder={"Harga Barang"}
                            id={"harga"}
                            defaultValue={dataUpdate == undefined ? "" : dataUpdate.harga}
                        />
                        <p className="absolute top-[4.5rem] left-3 text-xs font-bold text-red-400">
                            {errors.harga?.message}
                        </p>
                    </div>
                    <div>
                        <div className="realtive grid pb-3">
                            <label
                                htmlFor="Deskripsi"
                                className="px-5 font-roboto text-xl"
                            >
                                Deskripsi Barang:
                            </label>
                            <InputText
                                className="h-[10rem] w-[30rem]"
                                register={register}
                                placeholder={
                                    "Deskripsi Barang"
                                }
                                id={"deskripsi"}
                                defaultValue={dataUpdate == undefined ? "" : dataUpdate.deskripsi}
                            />
                            <p className="absolute top-[23rem] left-3 text-xs font-bold text-red-400">
                                {errors.deskripsi?.message}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="realtive grid pb-3">
                            <label
                                htmlFor="Stok"
                                className="px-5 font-roboto text-xl"
                            >
                                Stok Barang:
                            </label>
                            <InputText
                                className="h-[3rem] w-[30rem]"
                                register={register}
                                placeholder={
                                    "Stok Barang"
                                }
                                id={"stok"}
                                defaultValue={dataUpdate == undefined ? "" : dataUpdate.stok}
                            />
                            <p className="absolute top-[28.5rem] left-3 text-xs font-bold text-red-400">
                                {errors.stok?.message}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="grid gap-y-2">
                        <label
                            htmlFor="Gambar"
                            className="px-5 font-roboto text-xl"
                        >
                            Gambar Barang:
                        </label>
                        {gambarBaru.map((item, index) => (
                            <div
                                key={item.id}
                                className="flex flex-row gap-x-3"
                            >
                                <InputText
                                    register={register}
                                    className="border-[2px] border-black rounded-xl px-2 py-2 w-[30rem] h-[4rem] overflow-y-visible font-roboto"
                                    placeholder={
                                        "Gambar Barang"
                                    }
                                    id={`gambar_${item.id}`}
                                    defaultValue={dataUpdate == undefined ? "" : dataUpdate.gambar?.[index]}
                                    onChange={(e) =>
                                        pratinjauGambar(
                                            e.target.value,
                                            item.id,
                                        )
                                    }
                                />
                                <Button
                                    type="button"
                                    onClick={() =>
                                        hapusGambar(item.id)
                                    }
                                >
                                    Hapus
                                </Button>
                            </div>
                        ))}
                    </div>
                    <div className="absolute bottom-0 left-0">
                        <Button type="submit">
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
            <div className="absolute top-[30.5rem] left-[12rem]">
                <Button onClick={() => tambahGambar()}>
                    Tambah Gambar
                </Button>
            </div>
        </div>
    );
}
