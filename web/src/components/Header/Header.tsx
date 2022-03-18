import Image from "next/image"
import logo from "../../../public/images/logo.png"
import phone from "../../../public/images/phone.png"
import {Content, Phone, PhoneNumber} from "./styles"
import Head from 'next/head'

const Header = () => {
    return(
        <div> 
            <Head>
                <title>СтаффСинтезГруппы</title>
            </Head>
            <style>{'body { background-color: #CDD7CE; }'}</style>
            <Content>
                <Image width="64px" height="64px" src={logo} alt="Logotip" />
                <div style={{marginLeft:'12px'}}>СтаффСинтезГруппы</div>
                <Phone>
                    <Image width="48px" height="48px" src={phone} alt="Phone" />
                </Phone>
                <PhoneNumber>
                    <div>Телефон:</div>
                    <div>+7-888-888-88-88</div>
                </PhoneNumber>  
            </Content>
        </div>
    )
}

export default Header