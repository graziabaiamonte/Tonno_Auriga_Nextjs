import Image from "next/image";
import Link from "next/link";

// components/Modal.js
export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999999999999999999]">
      <div className=" bg-yellowLight relative p-2 w-[90%] md:w-[45%] flex-col  rounded-lg  shadow-lg flex items-center justify-center">
        <button
          onClick={onClose}
          className="mb-4 text-right text-red-500 absolute top-2 right-2"
        >
          <Image
            alt="close"
            src="/concorso-2025/close.svg"
            width={20}
            height={20}
          />
        </button>

        <Image
          src="/concorso-2025/popup_def.webp"
          alt="popup"
          width={300}
          height={400}
          className="w-[90%] md:w-[80%] h-auto "
        />

        <Link
          title="Scopri i nostri Prodotti"
          href="/concorso-2025"
          className="uppercase text-center fontPrimary bg-red text-yellowLight rounded-full px-4 py-2 text-base text-wrap lg:text-2xl hover:text-yellowLight transition duration-500 ease-in-out mt-[5%]"
        >
          Scopri di più
        </Link>
      </div>
    </div>
  );
}
