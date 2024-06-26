import { GrPowerReset } from "react-icons/gr";

import { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCart } from "../../contexts/CartContext/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, resetCart } from "../../redux/cartReducer";
import { FaTrash } from "react-icons/fa";
export default function Cart() {
  const { open, setOpen } = useCart();
  const products = useSelector((state) => state.cart.products);

  useEffect(() => {
    products.length > 0 ? setOpen(true) : "";
  }, [products.length, setOpen]);
  const dispatch = useDispatch();
  return (
    <div className="z-50">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50 bg-red-200" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-center py-2 px-1 justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            قائمة المشتريات
                            <small className="bg-purple-800 text-white py-1 rounded-lg px-3 mx-3 w-3 h-3">
                              {products.length > 1
                                ? products.length + " منتجات"
                                : products.length + " منتج"}
                            </small>
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {products.map((product) => (
                                <li
                                  key={product.id}
                                  className="flex py-6 bg-purple-100 rounded-md px-2 my-2"
                                >
                                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden ml-5 rounded-md border border-gray-400 p-2">
                                    <img
                                      src={product.image}
                                      alt={product.title}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>{product.title}</h3>
                                        <p className="ml-4 text-violet-950  font-bold px-1 flex gap-1 items-start">
                                          <span> {product.price}</span>

                                          <span> دولاراً</span>
                                        </p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {product.color}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium  flex gap-1 text-red-500 items-center hover:text-red-600"
                                          onClick={() =>
                                            dispatch(
                                              removeFromCart({
                                                id: product.id,
                                              })
                                            )
                                          }
                                        >
                                          <FaTrash />
                                          <span>حذف</span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p className="font-bold text-orange-600 text-lg">
                            إجمالي السعر
                          </p>
                          <p className="font-bold  text-lg">
                            {products.reduce(
                              (total, product) => total + product.price,
                              0
                            )}{" "}
                            دولار
                          </p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          الشحن والضرائب تحسب عند الخروج.
                        </p>

                        <div
                          onClick={() => dispatch(resetCart())}
                          className="lex items-center cursor-pointer justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 flex gap-3 my-2 "
                        >
                          <span>إفرغ سلة المشتريات</span>
                          <GrPowerReset />
                        </div>

                        <div className="mt-2">
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            قم بالدفع
                          </a>
                        </div>

                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            أو{" "}
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              أكمل التسوق
                              <span aria-hidden="true"> &larr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
