import Image from "next/image"
import finder from "../../../public/images/finder.png"
import query from "../../../public/images/query.png"
import Menu from './Menu/Menu'
import employer from "../../../public/images/employer.jpg"
import employer2 from "../../../public/images/employer2.jpg"
import employer3 from "../../../public/images/employer3.png"
import empFon from "../../../public/images/empFon.png"
import styled from "styled-components"
import { ForClients, FindJob, MainContainer, QueryBlock, MobileHider, SomeInfo} from "./styles"

export const hieghBlocks = "520px"
import Link from "next/link"
export const widthBlocks = "640px"

const ImageContainer = styled.div`
position: absolute;
border-radius: 40%;
overflow: hidden;
`
const ImagesContainer = styled.div`
display: flex;
position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 12px;
`

const Main = () => {

    return(
        <div>
            <Menu/>
            <MainContainer>
                <Image width={widthBlocks} height={hieghBlocks} src={employer} alt="employer1" />
                <MobileHider>
                    <Image width={widthBlocks} height={hieghBlocks} src={employer2} alt="employer2" />
                </MobileHider>
                <QueryBlock>
                <Link href="/FindJob_Anketa">
                    <FindJob>
                        <div>
                            <Image width="72px" height="72px" src={finder} alt="Logotip" />
                        </div>
                        <p>Найти Работу</p>
                    </FindJob>
                </Link>
                <Link href="/FC_Aplication">
                    <ForClients>
                        <div>
                            <Image width="72px" height="72px" src={query} alt="Logotip" />
                        </div>
                        <p style={{margin:'10px'}}>Найти рабочих</p>
                    </ForClients>
                </Link>
                </QueryBlock>
            </MainContainer>
            <SomeInfo>
                <MobileHider>
                <ImagesContainer>
                    <ImageContainer>
                       <Image width="300px" height="300px" src={empFon}/>
                    </ImageContainer>
                    <Image width="184px" height="268px" src={employer3} alt="employer3" />
                </ImagesContainer>
                </MobileHider>
                <h1>Мы рады приветствовать вас на странице<br/>ООО "СтаффСинтезГруппы"</h1>
                <p>Мы работаем с крупными промышленными предприятиями по всей России, соблюдая 2 наших основных принципа:<br/><span>1)Точно во время</span><br/><span>2)Качество превыше всего</span></p>
            </SomeInfo>
        </div>
    )
}

export default Main