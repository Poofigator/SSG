import Link from "next/link"
import { Content, Item } from "./styles";

const Menu = () => {
    return(
        <Content>
            <div style={{marginLeft:'36px'}}/>
            <Link href="/">
                <Item>Главная</Item>
            </Link>
            <Link href="/AboutUS">
                <Item>О компании</Item>
            </Link>
        </Content>
    )
}

export default Menu;