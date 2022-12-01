import React from 'react'
import { HomeIcon, WalletIcon, HeartIcon, ClipboardIcon,ChatBubbleBottomCenterTextIcon,Cog8ToothIcon,ArrowRightOnRectangleIcon} from '@heroicons/react/24/outline'

function LeftSideBar() {
   const btnStyle = "rounded-full bg h-10 w-10 bg-white hover:bg-orange-500 items-center m-5 justify center flex flex-row"
   const iconStyle ="h-5 w-10 text-gray-400 hover:text-white"

  return (
    <div
      className="h-screen w-32  bg bg-white fixed shadow-md center justify-center"


    >
      <div
          className={btnStyle}
          >
            <HomeIcon className={iconStyle}/>
            

          </div>
          <div
             className={btnStyle}
             >
              <WalletIcon className={iconStyle}/>
             </div>
             <div
                className={btnStyle}
                >
                  <ChatBubbleBottomCenterTextIcon className={iconStyle}/>
                </div>
                <div
                   className={btnStyle}
                   >
                    <HeartIcon className={iconStyle}/>
                   </div>
                   <div
                      className={btnStyle}
                      >
                        <ClipboardIcon className={iconStyle}/>
                          
                      </div>
                      <div
                         className={btnStyle}
                         >
                          <Cog8ToothIcon className={iconStyle}/>
                      </div>
                      <div className="rounded-full bg h-10 w-10 bg-white hover:bg-orange-500 items-center m-5 justify center flex flex-row absolute bottom-2">
                        <ArrowRightOnRectangleIcon className="h-5 w-10 text-gray-500 hover:text-white"/>
                      </div>

    </div>
  )
}

export default LeftSideBar