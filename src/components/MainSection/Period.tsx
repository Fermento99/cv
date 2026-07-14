type PeriodProps = {
    startDate: string;
    endDate: string;
}

export default function Period({ startDate, endDate }: PeriodProps) {
    return (
        <p className="italic -mt-1 font-light">
            {startDate} - {endDate}
        </p>
    );
}