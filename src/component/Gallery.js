//yg trv ka import gallery sin terb brer vea ban
export function Gallery(){
    return(
        <section>
            {/* <h1 style={heading}> Yaaaaa!! It's Front End Timee </h1> */}
           <div className="apple-produce">
                <div className="card-apple">
                    <div className="airport">
                    <h1>Air Pod Pro </h1>
                    <p>Up to X2 More</p>
                    <h5>Learn More> Buy Now></h5>
                    <Profile1 />
                    </div>
                    <div className="iPad">
                    <h1>iPad Pro </h1>
                    <p>Lovable.Drawable.Magical</p>
                    <h5>Learn More> Buy Now></h5>
                    <Profile2 />
                    </div>
                </div>
                <div className="apple-card">
                    <div className="M2-pro">
                    <h1>MacBook M2</h1>
                    <p>Super Charge with M2 pro and M2 max.</p>
                    <h5>Learn More> Buy Now></h5>
                    <Profile3 />
                    </div>
                    <div className="iMac">
                    <h1>iMac</h1>
                    <p>The Best iMac Ever</p>
                    <h5>Learn More> Buy Now></h5>
                    <Profile4 />
                    </div>
                </div>
            </div>
        </section>
    )
}
export function Profile1(){
    return(
        <img
            src="https://cdn.24.co.za/files/Cms/General/d/9835/708ae87928604601875c3705aa46d0c7.png"
            alt="Air Port pro"
            style={{width:550, height:287}}
            // height={}
        />
    )
}
export function Profile2(){
    return(
        <img
            src="https://cdn.macstories.net/apple-ipad-10th-gen-hero-221018-1666117748406.jpg"
            alt="iPad pro"
            style={{width:550, height:287}}
        />
    )
}
export function Profile3(){
    return(
        <img
            src="https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/hero/hero_intro__cww8m2vra4uq_large.jpg"
            alt="MacBook M2 pro"
            style={{width:550, height:287}}
        />
    )
}
export function Profile4(){
    return(
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0C0RiLKRONaJsjRK6tckw1vLDcPcYRJQxjg&usqp=CAU"
            alt="iMac"
            style={{width:550, height:287}}
        />
    )
}
// object styleSheet
// const heading = {
//     textAlign: 'center',
//     fontSize: 50
// }