import { ListBulletIcon } from "@heroicons/react/24/outline";

export const BroadcastPage = () => {
  return (
    <>
      <div className="flex h-full bg-white-600  w-full border">
        {/* Sidebar */}
        <div className="w-1/1 border border-orange-500">
          <div className="p-4">
            <ul className="space-y-2">
              <li className="hover:bg-gray-300 p-2 cursor-pointer bg-opacity-50 flex items-center">
                <ListBulletIcon className="w-5 h-5 mr-2" />
                List
              </li>
              <li className="hover:bg-gray-300 p-2 cursor-pointer bg-opacity-50 flex items-center">
                <ListBulletIcon className="w-5 h-5 mr-2" />
                Templates
              </li>
            </ul>
          </div>
        </div>
        {/* Broadcast Form */}
        <div className="w-full p-4 border border-orange-500">
          <h2 className="text-lg font-semibold mb-4">
            Broadcast Message WhatsApp
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="form-textarea mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
