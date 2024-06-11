import Image from 'next/image';
import FourTIcon from "../../public/svg/4T Icon.svg";


export default async function Home() {

  return (
    <main>
      <div className={"icon-bar-box"}>
        <div className={"trigger-icon-box"}>
          <div className={"title-box"}>
            <span className="title-box-text">TRIGGER</span>
          </div>
          <div className="icon-row">
            <Image className={"icon"}
              priority
              src={FourTIcon}
              alt={"4T Icon"}
            />
            <Image className={"icon icon.inactive"}
               priority
               src={FourTIcon}
               alt={"4T Icon"}
            />
            <Image className={"icon icon.inactive"}
               priority
               src={FourTIcon}
               alt={"4T Icon"}
            />
            <Image className={"icon"}
               priority
               src={FourTIcon}
               alt={"4T Icon"}
            />            
          </div>
        </div>
        <div className={"sequence-icon-box"}>
          <div className={"title-box"}>
            <span className="title-box-text">SEQUENCE</span>
          </div>
        </div>
      </div>
    </main>
  );
}
