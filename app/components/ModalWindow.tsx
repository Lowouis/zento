import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
} from "@heroui/react";
import React from "react";
import {IoCloseOutline} from "react-icons/io5";


export default function ModalWindow({ isOpen, onOpenChange, children }: { isOpen: boolean, onOpenChange: (open: boolean) => void, children : React.ReactNode }) {


    return (
        <>
            <Drawer
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="bottom"
                size="full"
                backdrop={"blur"}
                scrollBehavior="outside"
                hideCloseButton
                isDismissable={false}
                motionProps={{
                    initial: { opacity: 0, y: 100 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 100, transition: { ease: "easeOut", duration: .2 } },
                    transition: { ease: "easeIn", duration: .3 }
                }}
            >
                <DrawerContent>
                    {(onClose) => (
                        <div className="rounded-2xl p-3">
                            <div className="bg-noise w-full border border-slate-600 border-opacity-20 dark:border-opacity-25 dark:bg-neutral-900 rounded-2xl">
                                <DrawerHeader className="flex flex-col gap-1">
                                    <div className="w-full justify-center items-center flex">
                                        <h1
                                            onClick={onClose}
                                            className="text-2xl hover:bg-neutral-800 dark:hover:bg-neutral-800 border-neutral-400 border-2 dark:border-white  dark:border-opacity-20 hover:bg-opacity-5 rounded-full transition p-2 ">
                                            <IoCloseOutline className="text-neutral-500 dark:text-white"/>
                                        </h1>
                                    </div>
                                </DrawerHeader>
                                <DrawerBody className="flex justify-start items-center">
                                    {children}
                                </DrawerBody>
                            </div>
                        </div>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
}
