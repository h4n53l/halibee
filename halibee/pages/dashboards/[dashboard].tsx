import InfoCard from "../../components/cards/infoCard";

export default function() {
    return (
        <div className="p-20">
          <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
<InfoCard 
title="Total clients" 
value="6389"
/>

<InfoCard 
title="Total Income" 
value="$ 46,760.89" 
/>

<InfoCard 
title="Average Monthly Income" 
value="$ 760.89" 
/>

<InfoCard 
title="Average Monthly Clients" 
value="89" 
/>
            </div>
        </div>
    );
}