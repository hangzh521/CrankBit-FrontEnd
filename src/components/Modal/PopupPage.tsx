import { FC } from 'react'
import CheckRounded from '@mui/icons-material/CheckRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import Container from '@/layouts/Container'

// popup的入口文件是create-account /auth/signup/create-account，目前还没有写出的页面
// import PopupPage from "@/components/Modal";
// const CreateAccount: FC = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(false)
  // const togglePopup = (): void => {
   // setIsOpen(!isOpen);
  // };
  // const closePopup = ():void =>{
   // setIsOpen(false)
  // }
  // return (
    // <Container>
     // <div>
     // ...
       // <Button onClick={togglePopup}/>
     // </div>
      // {isOpen &&< PopupPage onClose={closePopup}/>}
    // </Container>
 // )
// }
// export default CreateAccount

const PopupPage: FC<{onClose:()=>void}> = ({onClose}) =>
( <Container>
      <div className="fixed top-0 left-0 w-full h-full bg-[#03111B] bg-opacity-40 flex items-center justify-center z-50">
        <div className="rounded-[10px] w-[494px] h-[405px] pt-5 text-end bg-white shadow-md border-solid border-[#03111B] border-opacity-40">
              <CloseRoundedIcon onClick={onClose} className="cursor-pointer mb-10 mr-5" />
          <div className="flex justify-center">
                <CheckRounded className="text-white bg-[#0EA739] w-[99px] h-[99px] rounded-full" />
          </div>
          <div className="text-center font-semi-bold text-xl mt-12">
           Sign Up Successfully
          </div>
        </div>
      </div>
    </Container>
  )

export default PopupPage
