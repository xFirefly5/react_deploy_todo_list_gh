import {format} from "date-fns"

function Footer() {
    const today = format(new Date(), "EEEE do MMMM yyyy");

    return (
        <footer className="Footer">
            {today}
        </footer>
    )
}

export default Footer