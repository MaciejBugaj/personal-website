import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import AwesomeSlider from "react-awesome-slider";
import { HobbyType } from "@/i18n/config";
import MovieClip from "../youtube/MoveClip";
import Video from "../video/Video";

interface Props {
  open: boolean;
  onClose: () => void;
  hobby?: HobbyType;
}

const HobbyDialog = ({ open, onClose, hobby }: Props) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-sm bg-white text-left shadow-xl transition-all sm:my-8 md:w-[800px]">
                <div className="flex justify-end">
                <h2 className="mx-auto mt-7 text-4xl font-bold">{hobby?.name}</h2>
                  <div className="bg-red-100 mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                    <Icon
                      icon="material-symbols:close"
                      className="cursor-pointer text-2xl"
                      onClick={onClose}
                    />
                  </div>
                </div>
                
                <div className="mt-2 p-10">
                  <div className="rounded-sm border border-[rgba(0,0,0,.125)]">
                    <div className="flex items-center gap-3 border-b border-[rgba(0,0,0,.125)] bg-[rgba(0,0,0,0.03)] px-3 py-2">
                      <Icon icon="emojione:red-circle" width={10} />
                      <Icon icon="twemoji:yellow-circle" width={10} />
                      <Icon icon="twemoji:green-circle" width={10} />
                    </div>
                    <div
                      className="h-auto p-3 text-justify"
                      style={{
                        fontSize: "132%",
                        lineHeight: "200%",
                      }}
                    >
                      {hobby?.videoId ? (
                        <MovieClip videoId={hobby?.videoId} />
                      ) : (
                        <></>
                      )}
                      {hobby?.images ? (
                        <AwesomeSlider className="w-full" organicArrows={false}>
                          {hobby?.images?.map((image) => (
                            <div data-src={image} key={image} />
                          ))}
                        </AwesomeSlider>
                      ) : (
                        <></>
                      )}
                      {hobby?.videoPath ? (
                        <Video videoPath={hobby.videoPath} />
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>

                  <p className="text-sm">{hobby?.description}</p>
                </div>

                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"></div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default HobbyDialog;
