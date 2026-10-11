import { useState } from "react";
import { Activity, BatteryCharging, Sun, Zap } from "lucide-react";

const modes = {
  braking: {
    title: "Regenerative Braking",
    description:
      "During vehicle deceleration, the recovery system can capture available braking energy and route it through power conditioning.",
    icon: <Activity size={28} />,
    steps: [
      "Vehicle Deceleration",
      "Energy Generation",
      "Diode Protection",
      "Boost Conversion",
      "Energy Management",
      "Battery / Auxiliary Load",
    ],
  },

  solar: {
    title: "Solar Energy",
    description:
      "Lightweight solar-film technology can provide an auxiliary renewable energy source for the energy-management system.",
    icon: <Sun size={28} />,
    steps: [
      "Solar Film",
      "Electrical Generation",
      "Voltage Conditioning",
      "Charge Controller",
      "Energy Management",
      "Battery / Auxiliary Load",
    ],
  },

  vibration: {
    title: "Vibration Recovery",
    description:
      "Vehicle vibration can be explored as a supplementary mechanical energy source and converted into electrical energy.",
    icon: <Zap size={28} />,
    steps: [
      "Vehicle Vibration",
      "Energy Conversion",
      "Electrical Output",
      "Voltage Conditioning",
      "Energy Management",
      "Battery / Auxiliary Load",
    ],
  },

  combined: {
    title: "Combined Energy Recovery",
    description:
      "Multiple energy sources can be monitored and managed through a unified energy-management architecture.",
    icon: <BatteryCharging size={28} />,
    steps: [
      "Braking Energy",
      "Solar Energy",
      "Vibration Energy",
      "Power Conditioning",
      "Smart Management",
      "Battery / Load",
    ],
  },
};

type Mode = keyof typeof modes;

export default function EnergyFlow() {
  const [mode, setMode] = useState<Mode>("combined");

  const current = modes[mode];

  return (
    <section
      id="energy-flow"
      className="border-t border-white/5 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Interactive System
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            See How Energy Flows
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Select an energy source to understand how REGENIQ-EV
            conceptually routes recovered energy through the system.
          </p>

        </div>

        {/* Mode buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">

          {(Object.keys(modes) as Mode[]).map((item) => (

            <button
              key={item}
              onClick={() => setMode(item)}
              className={`rounded-full border px-5 py-3 text-sm font-medium capitalize transition ${
                mode === item
                  ? "border-cyan-400 bg-cyan-400 text-black"
                  : "border-white/10 bg-white/[0.03] text-gray-300 hover:border-cyan-400/40"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

        {/* Main card */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10">

          {/* Selected mode */}
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                {current.icon}
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  {current.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Illustrative system flow
                </p>
              </div>

            </div>

          </div>

          <p className="mt-6 max-w-3xl leading-7 text-gray-400">
            {current.description}
          </p>

          {/* Flow */}
          <div className="mt-10 grid gap-4 md:grid-cols-6">

            {current.steps.map((step, index) => (

              <div
                key={step}
                className="relative"
              >

                <div className="flex min-h-[110px] flex-col justify-center rounded-2xl border border-white/10 bg-black/20 p-4 text-center">

                  <span className="text-xs text-cyan-400">
                    STEP {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="mt-2 text-sm font-medium text-gray-200">
                    {step}
                  </span>

                </div>

                {index < current.steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 z-10 text-cyan-400">
                    →
                  </div>
                )}

              </div>

            ))}

          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-2xl border border-white/5 bg-black/20 p-4 text-xs leading-6 text-gray-500">
            Note: This visualization represents the REGENIQ-EV system
            architecture conceptually. Actual energy generation,
            conversion efficiency and battery contribution depend on
            validated hardware testing and operating conditions.
          </div>

        </div>

      </div>
    </section>
  );
}