import Link from 'next/link';
export default function Services({ data }) {
    return (
        <div className="services" id="services">
            <h1>บริการของเรา</h1>

            <div className="container">
                {
                    data && Array.from(data).map(i => {
                        return <div key={i.id} className="containerItem">
                            <span>{i.title}</span>
                            <Link href={`/services/${i.id}`} >
                                <a  className="item">
                                    <img src={i.img}></img>
                                    <h3>ประกันภัย</h3>
                                </a>
                            </Link >
                        </div>
                    })
                }

            </div>

        </div>
    )
}
