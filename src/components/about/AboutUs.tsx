import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type Props = {
  page?: "home" | "page";
};

export default function AboutUs({ page = "home" }: Props) {
  const isHome = page === "home";

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-2">
        {/* LEFT – IMAGES */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="perspective-[1200px] flex flex-wrap justify-center gap-6"
        >
          {/* IMAGE 1 */}
          <motion.img
            src="https://cdn.discordapp.com/attachments/1387534624888066159/1451083077144154214/b3b84a458822e848b1339978439f8995.png?ex=694784ed&is=6946336d&hm=aa320cd4f330b88c76b93bbc258451f91b4e5584c7d66172e3bd272420e9b2aa&"
            className="relative z-10 h-40 w-40 rotate-[-6deg] rounded-2xl object-cover"
            whileHover={{
              scale: 1.08,
              rotateZ: -2,
              rotateX: 6,
              y: -10,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          />

          {/* IMAGE 2 */}
          <motion.img
            src="https://cdn.discordapp.com/attachments/1387534624888066159/1450849180955316316/fc5427eb807fa984e769586c55bfc154.jpg?ex=694753d8&is=69460258&hm=6ed775948f2e275c4f19002e7b5e1be77a4c84cc1e5aa10250bb655a80530392&"
            className="relative z-20 h-48 w-48 rotate-[4deg] rounded-2xl object-cover"
            whileHover={{
              scale: 1.1,
              rotateZ: 1,
              rotateX: -6,
              y: -12,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          />

          {/* IMAGE 3 */}
          <motion.img
            src="https://cdn.discordapp.com/attachments/1387534624888066159/1450845378852426000/ABS2GSkFfX2-CMC-gUdEaAC-PIdjNYhzOYCq1XrQ3ocZKFE3wYEZzdqltZxCM63Ikzz0PLlcy1DQdEoGIevrUlJcJin54yxof7UvIRc5CyHHO7995n7QouTH8eyughbzDTX7cxd-LxUGWU8hFYv7bH1DECiu0dqJXvSId0U-rvWqkdeE65Ees1024-rj.png?ex=6947504d&is=6945fecd&hm=9b127fea0fd4f4c955360df27bdaf681c60d9f890560316ff92eed2c20103dd9&"
            className="relative z-10 h-44 w-44 rotate-[-3deg] rounded-2xl object-cover"
            whileHover={{
              scale: 1.08,
              rotateZ: -1,
              rotateX: 5,
              y: -10,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          />
        </motion.div>

        {/* RIGHT – CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm">
            Who we are
          </span>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            <b>
              More Than Roleplay.<br></br> A Living State.
            </b>
          </h2>

          <p className="mt-6 leading-relaxed text-white/70">
            Reyes City is not just a server — it is a structured world reborn
            from crisis. Built on discipline, layered authority, and meaningful
            consequence, it brings creators, systems, and stories together under
            a single vision of immersive roleplay.
          </p>
          <br />
          <p className="mt-6 leading-relaxed text-white/70">
            Every institution has purpose. Every action has weight. This is a
            city designed to feel alive — shaped by its people, protected by
            structure, and guided by shadows.
          </p>

          {/* SHORT VERSION (HOME) */}
          {isHome && (
            <Link
              to="/about-us"
              className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
            >
              Show more
            </Link>
          )}
        </motion.div>
      </div>

      {/* FULL STORY (ABOUT PAGE ONLY) */}
      {!isHome && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-5xl px-6 pb-24"
        >
          <div className="mt-20 rounded-3xl bg-white/5 p-8 backdrop-blur md:p-12">
            <h3 className="mb-6 text-3xl font-bold">
              <b>REYES CITY — LORE OF A REBORN STATE</b>
            </h3>

            <p className="mb-4 leading-relaxed text-white/70">
              The ground shook, the sky darkened, bullets fell as rain and blood
              flowed like a river. The BWC launched an all-out assault on the
              city to eliminate every remnant of the old regime. Soldiers moved
              in, tanks rolled over cars, planes bombed sections of the city,
              and friends and families were displaced safely to Cayo Perico. The
              only ones left behind were the scum — those who had forced people
              into a life of crime and corruption.
            </p>

            <p className="mb-4 leading-relaxed text-white/70">
              It was a gnarly war where neither side gave quarter. The BWC,
              armed with advanced technology and ruthless battlefield
              discipline, fought systematically, pushing gangs and syndicates to
              the very edge. The same fate met corrupt police officers who had
              sold the city from within. The war ended with the total
              elimination of corruption as it once existed.
            </p>

            <p className="leading-relaxed text-white/70">
              This organisation was known as Imperium.
            </p>
            <br />

            <p className="leading-relaxed text-white/70">
              Under its unseen guidance, the shattered remains of San Andreas
              were rebuilt into a functional state. Roads were restored.
              Districts were restructured. Essential services were strengthened.
              From the wreckage rose a new city — designed with stability,
              discipline, and layered authority at its core.
            </p>
            <br />

            <p className="leading-relaxed text-white/70">
              This city was named Reyes City.
            </p>
            <br />

            <p className="leading-relaxed text-white/70">
              As the nation began to rise, a new threat surfaced — the sins of
              the past. Massive illegal smuggling operations flooded into San
              Andreas through its weakened post-war terrain. Weapons, narcotics,
              human trafficking routes, and black-market goods poured in,
              overwhelming early enforcement efforts.
            </p>
            <br />

            <p className="leading-relaxed text-white/70">
              To counter this, the newly appointed government, chosen by the
              people, constructed fortified internal borders separating Los
              Santos, Blaine County, and Paleto Bay. These borders were not
              meant to divide citizens, but to control smuggling routes,
              regulate movement, enforce checkpoints, and prevent criminal
              networks from using the rebuilt state as a transit hub.
            </p>
            <br />

            <p className="leading-relaxed text-white/70">
              Beneath the DOJ, a centralized government authority was formed —
              the Department of State Administration. This body controlled all
              government business: public infrastructure, state finances,
              licensing, records, contracts, and inter-department coordination.
              While the DOJ ensured legality, the Department of State
              Administration ensured the state itself functioned.
            </p>
            <br />

            <p className="leading-relaxed text-white/70">
              The executive face of Reyes City became the Mayor, supported by a
              fully reinstated City Council, responsible for legislation and
              democratic process under this structure. For internal security,
              policing was reorganized into three divisions:
            </p>
            <br />

            <p className="leading-relaxed text-white/70">
              <b>Los Santos Police Department (LSPD)</b>
              <br />
              <b>Blaine County Sheriff’s Office (BCSO)</b>
              <br />
              <b>Paleto Bay Sheriff’s Office (PBSO)</b>
            </p>
            <br />

            <p className="leading-relaxed text-white/70">
              Though each operated within its own jurisdiction, all three
              answered to a single authority — the Chief of Police — ensuring
              unified strategy and resistance to corruption.
            </p>
            <br />

            <p className="leading-relaxed text-white/70">
              To confront threats beyond conventional law enforcement, an elite
              tactical unit known as R.A.G.E. was established. Designed for
              high-risk raids, violent insurgencies, domestic terror incidents,
              and extreme gang warfare, R.A.G.E. became the city’s
              rapid-response strike force.
            </p>
            <br />

            <p className="leading-relaxed text-white/70">
              The most critical reform followed the Blackout Crisis of 2024. The
              fragmented medical system collapsed under pressure, costing
              countless lives. In response, the state dissolved all independent
              emergency services and formed a single organization: San Andreas
              Medical Service (SAMS).
            </p>
            <br />

            <p className="leading-relaxed text-white/70">
              Funded by the Department of Health and strategically overseen by
              the National Guard, SAMS became both a civilian medical agency and
              a reserve military medical corps. Medics held government rank,
              received disaster and combat training, and operated with limited
              police authority under Executive Order 29-B. In extreme
              emergencies, SAMS fell under full military command.
            </p>
            <br />

            <p className="leading-relaxed text-white/70">
              Alongside them, San Andreas Fire & Rescue (SAFR) handled fire
              suppression, technical rescue, hazard control, and disaster
              response — serving as the city’s frontline humanitarian force.
              <br />
              With military, legal, governmental, police, tactical, medical, and
              rescue systems finally aligned, Reyes City rose as one of the most
              structured and resilient cities in the region. Businesses
              reopened. Borders stabilized. Order returned.
            </p>
            <br />

            <p className="leading-relaxed text-white/70">
              But the truth remained buried.
            </p>
            <br />

            <p className="leading-relaxed text-white/70">
              <b>The National Guard protected the state.</b>
              <br />
              <b>The Department of Justice upheld its law.</b>
              <br />
              <b>The Department of State Administration ran its government.</b>
              <br />
              <b>The Mayor governed the city.</b>
              <br />
              <b>The Council wrote its laws.</b>
              <br />
              <b>The police enforced order.</b>
              <br />
              <b>The medical forces saved lives.</b>
              <br />
              <b>The citizens shaped its culture.</b>
            </p>
            <br />

            <p className="leading-relaxed text-white/70">
              And somewhere above them all — unseen, unnamed — Imperium
              continued to watch.
            </p>
            <br />

            <p className="leading-relaxed text-white/70">
              A city restored.
              <br />
              A chain of command perfected.
              <br />A future protected by shadows.
            </p>
            <br />

            <p className="leading-relaxed text-white/70">
              <b>This is Reyes City.</b>
            </p>
            <br />
          </div>
        </motion.div>
      )}
    </section>
  );
}
