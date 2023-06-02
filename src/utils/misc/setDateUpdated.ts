export default function setDateUpdate(updated_at: string) {
    const actualDate = new Date();
    
    const actualYear: number = +actualDate.getFullYear();
    const actualMonth: number = +actualDate.getMonth() + 1;
    const actualDay: number = actualDate.getDate();

    const yearLastUpdated: number = +updated_at.split("-")[0];
    const monthLastUpdated: number = +updated_at.split("-")[1];
    const dayLastUpdated: number = +updated_at.split("-")[2].split("T")[0];

    function getMonth(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);

        return date.toLocaleString('en-US', { month: 'short' });
    }

    if (actualYear > yearLastUpdated) {
        return `Updated on ${getMonth(monthLastUpdated)} ${dayLastUpdated}, ${yearLastUpdated}`;
    }

    if (actualMonth > monthLastUpdated) {
        return `Updated on ${getMonth(monthLastUpdated)} ${dayLastUpdated}`;
    }

    if(dayLastUpdated - actualDay < 7){
        return `Updated ${dayLastUpdated - actualDay} days ago`;
    }

    if(dayLastUpdated - actualDay > 7){
        const weeksCount = Math.round(dayLastUpdated / 7);
        return `Updated ${weeksCount} weeks ago`
    }
}