import { useState, useEffect } from "react";

interface Kontak {
  id: number;
  kontak: string;
  name: string;
}

export const BroadcastPage: React.FC = () => {
  const [kontakList, setKontakList] = useState<Kontak[]>([]);
  const [selectedType, setSelectedType] = useState<string>("");
  const [listVisible, setListVisible] = useState<boolean>(false);
  const [buttonVisible, setButtonVisible] = useState<boolean>(false);
  const [buttonFields, setButtonFields] = useState<JSX.Element[]>([]);
  const [listFieldsVisible, setListFieldsVisible] = useState<boolean>(false);

  useEffect(() => {
    const fetchKontak = async () => {
      try {
        const response = await fetch("/api/kontak");
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setKontakList(data.kontakList);
        } else {
          throw new Error("Failed to fetch contacts");
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
        alert("Error fetching contacts. Please try again.");
      }
    };

    fetchKontak();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedType(value);
    setListVisible(value === "list");
    setButtonVisible(value === "button");
    setListFieldsVisible(value === "list");
  };

  const addButton = () => {
    const lastIndex = buttonFields.length;
    const newIndex = lastIndex + 1;
    const newButtonField = (
      <div className="mt-4" key={newIndex}>
        <label
          htmlFor={`buttonId${newIndex}`}
          className="block font-medium text-gray-700"
        >
          ID {newIndex}:
        </label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          id={`buttonId${newIndex}`}
          placeholder="Enter button ID"
        />
        <label
          htmlFor={`buttonTitle${newIndex}`}
          className="mt-2 block font-medium text-gray-700"
        >{`PILIHAN ${newIndex}:`}</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          id={`buttonTitle${newIndex}`}
          placeholder="Enter button title"
        />
      </div>
    );
    setButtonFields((prevFields) => [...prevFields, newButtonField]);
  };

  const addBagian = () => {
    console.log("Tambah Bagian diklik");
  };

  return (
    <>
      <div className="flex h-full bg-white-600 w-full border">
        {/* Sidebar */}
        <div className="w-1/4 border border-orange-500">
          <div className="p-4">
            <ul className="space-y-2">
              <li className="hover:bg-gray-300 p-2 cursor-pointer bg-opacity-50 flex items-center">
                {/* Icon */}
                List
              </li>
              <li className="hover:bg-gray-300 p-2 cursor-pointer bg-opacity-50 flex items-center">
                {/* Icon */}
                Templates
              </li>
            </ul>
          </div>
        </div>
        {/* Main Content */}
        <div className="w-3/4 p-4 border border-orange-500">
          <form id="interactiveMessageForm">
            <div className="card-body">
              <div className="col-lg-12">
                <h2 className="text-lg font-semibold mb-4">
                  BROADCAST INTERACTIVE
                </h2>
                <div className="form-group">
                  <label
                    htmlFor="phoneNumbers"
                    className="block text-sm font-medium text-gray-700"
                  >
                    NO TUJUAN
                  </label>
                  <select
                    id="to"
                    name="to"
                    multiple
                    required
                    className="form-multiselect mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    {/* Options will be added here */}
                    {kontakList.map((kontak) => (
                      <option key={kontak.id} value={kontak.kontak}>
                        {kontak.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Type:
                  </label>
                  <select
                    id="type"
                    required
                    onChange={handleChange}
                    value={selectedType}
                    className="form-multiselect p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  >
                    <option value="">PILIH TYPE</option>
                    <option value="list">List</option>
                    <option value="button">Button</option>
                  </select>
                </div>

                {/* Remaining form fields */}
                {listFieldsVisible && (
                  <div className="mt-4">
                    <div className="form-group">
                      <label
                        htmlFor="listHeaderText"
                        className="block font-medium text-gray-700"
                      >
                        BARIS ATAS PESAN:
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        id="listHeaderText"
                        placeholder="Enter header text"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="listBodyText"
                        className="mt-2 block font-medium text-gray-700"
                      >
                        BARIS KEDUA PESAN:
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        id="listBodyText"
                        placeholder="Enter body text"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="listFooterText"
                        className="mt-2 block font-medium text-gray-700"
                      >
                        BARIS TTD/FOOTER:
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        id="listFooterText"
                        placeholder="Enter footer text"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="listButtonName"
                        className="mt-2 block font-medium text-gray-700"
                      >
                        TULISAN PADA BUTTON:
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        id="listButtonName"
                        placeholder="EXP. SHOW,LIHAT,PILIH,LIHAT KATALOG"
                      />
                    </div>
                  </div>
                )}
                <div className="form-group mt-4 bodyText">
                  <label
                    htmlFor="bodyText"
                    className="block font-medium text-gray-700"
                  >
                    ISI PESAN:
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    id="bodyText"
                    placeholder="Enter body text"
                  />
                </div>
                {/* Button Fields */}
                <div id="buttonFields">
                  {buttonFields.map((buttonField, index) => (
                    <div key={index}>{buttonField}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="card-footer flex justify-between gap-4">
              {listVisible && (
                <button
                  type="button"
                  className="rounded-md btn btn-primary mt-3 text-white font-bold p-2 addBagianButton addBgn bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600"
                  onClick={addBagian}
                >
                  + BAGIAN
                </button>
              )}
              {buttonVisible && (
                <button
                  type="button"
                  className="rounded-md btn btn-primary mt-3 text-white font-bold p-2 addTbh bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  onClick={addButton}
                >
                  TAMBAH TOMBOL
                </button>
              )}
              <button type="submit" className="rounded-md btn text-white font-bold p-2 btn-success mt-3 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                Submit
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
};
