import ExclusiveVehicleSlots from "@/components/ExclusiveVehicleSlots/ExclusiveVehicleSlots";

export default function ExclusiveVehiclePage() {
  return (
    <main className="bg-black">

      {/* EXCLUSIVE VEHICLE SLOTS */}
      <section className="bg-black py-40">
        <ExclusiveVehicleSlots />
      </section>

      {/* OPTIONAL: NEXT SPACER */}
      <section className="bg-[#e9e9f5] h-20 w-full" />

    </main>
  );
}
