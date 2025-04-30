import React from "react";
import "../styles/CandidatesSection.css";
import mutasa from "../img/charles mutasa kafeero.jpeg";
const candidates = [
  {
    name: "charles mutasa kafeero",
    constituency: "president of uganda",
    imageUrl: mutasa,
  },
  {
    name: "Muweebwa Betty",
    constituency: "Woman mp Mityana District",
    imageUrl:
      "https://scontent.febb9-1.fna.fbcdn.net/v/t39.30808-6/477804149_122104306670756842_6635296948665498915_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DVRDCtETb-IQ7kNvwERtuiv&_nc_oc=Adle7JUtixy5A2d7ksp7X9J7GLGrt3tw8-M2Wxo8EFEOJNpx6IVWyzEDLM0nx9xS_rA&_nc_zt=23&_nc_ht=scontent.febb9-1.fna&_nc_gid=CRdmgwIN-5FqxzJ7Q2rO5A&oh=00_AfH0s7xtHzDWW_wrEnvv158-wmjPVPnCt_pKLlhPpPcY4A&oe=681541C6",
  },
  {
    name: "Musana Jafali",
    constituency: "Bukoli south constituency",
    imageUrl:
      "https://scontent.febb9-1.fna.fbcdn.net/v/t39.30808-6/476827589_122104306736756842_8481532227175948078_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YQiaH_s712QQ7kNvwESCaAW&_nc_oc=AdmHkKx02J59Gp0TcrBaEsk6sVzLoaz_lUfrB9g5zBhdLjYBeg_5Ta5SrvyxAPw_b5g&_nc_zt=23&_nc_ht=scontent.febb9-1.fna&_nc_gid=T7D9Ll-sRr6gFZ4W_ah1aw&oh=00_AfFqY9UD1aAk5W_V4QER7uF9t0eG9DHjk2mx-QOYxlW33A&oe=681538EF",
  },
  {
    name: "ssenjako Dafala",
    constituency: "kawempe south constituency",
    imageUrl:
      "https://scontent.febb9-1.fna.fbcdn.net/v/t39.30808-6/477784006_122104306316756842_3084282881131830757_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aoi-2na-k6oQ7kNvwENYuie&_nc_oc=AdnDTSUFkCSov1yAkz4f8Gtk2pLY_dRzDDasfSzdcJ-_RVl_lGg0R3YwDRak145-qhE&_nc_zt=23&_nc_ht=scontent.febb9-1.fna&_nc_gid=LwdGu0_Uq9U1AYbQRpfHPg&oh=00_AfHX97LatSwTHXUiTqMPyfWkWZLfUP_BgtUEpKGKHx7Gsg&oe=68152897",
  },
  {
    name: "Magezi Raphael",
    constituency: "Youth Mp Eastern Region",
    imageUrl:
      "https://scontent.febb9-1.fna.fbcdn.net/v/t39.30808-6/476829676_122104306784756842_2547387633267993601_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1iuOQqNSsX8Q7kNvwEqREZ8&_nc_oc=AdksvcpYamcp6XjaBiOMIrTgQ8ZoB9Y8vkOrSUwG0wUfCcbUE10G7PLGBhgDZsul_Ys&_nc_zt=23&_nc_ht=scontent.febb9-1.fna&_nc_gid=pWJQuYFEpRKFiQnPRLWgOA&oh=00_AfGZLUpvECPvD9yv7qLuHec70S8dIO2RQfpHnyEHGi0jxw&oe=6815244A",
  },
  {
    name: "Nalugo Mercy Kabanda",
    constituency: "kimaanya kabonera Masaka city",
    imageUrl:
      "https://scontent.febb9-1.fna.fbcdn.net/v/t39.30808-6/477791407_122104306574756842_6384432826116719126_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=B1xmR5vCIQYQ7kNvwGfyiFE&_nc_oc=AdkbPPKhuv_6BlPadREv05ppwNLACh45yJMDkljI9uUk7kpr4nNnIGkB1pDY9dV8nM4&_nc_zt=23&_nc_ht=scontent.febb9-1.fna&_nc_gid=IHxZmP6lVi4AkKwEaiqX2Q&oh=00_AfFIEkI9uH3SvA4NA3EoKqsZl0Nq-UKzXtCn_XVwesC8GQ&oe=6815381F",
  },
  {
    name: "lawrence mushabe",
    constituency: "Bukanga County constituency",
    imageUrl:
      "https://scontent.febb9-1.fna.fbcdn.net/v/t39.30808-6/479183211_122104306850756842_7517092718981000675_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mz2qYbIuV3UQ7kNvwFwjjNX&_nc_oc=Adm6c8Bv14-y3ihy7t7UT9noUB_v_bs9_-Of12fntrA_TL24vZ3sHrXoKznqL5ZC96I&_nc_zt=23&_nc_ht=scontent.febb9-1.fna&_nc_gid=co5Fgv3UbA58aI0En8ZdQw&oh=00_AfE32F79YEBB3IanFHUbOA8qCw6KX1cK0yGnR77m2tXX9Q&oe=6815316A",
  },
  {
    name: "musiige ronald elvis",
    constituency: "Busiro south constituency",
    imageUrl:
      "https://scontent.febb9-1.fna.fbcdn.net/v/t39.30808-6/479191597_122104306382756842_1593588844528331747_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FSMitRQVoHcQ7kNvwH3eJjH&_nc_oc=AdlF5wnIwDYSAz36OIf87XTktUa8hfkE0mvMJv61m0LkyyYZrwQKCEr29OtQDY-Lya0&_nc_zt=23&_nc_ht=scontent.febb9-1.fna&_nc_gid=FFTC-GFNMtbzGTQUOH473g&oh=00_AfFqZnvOY2MPBPNr2GUqChazg4AT8JYluJWZVz8LaWmnuA&oe=68152566",
  },
  // Add the rest of the candidates here...
];

const CandidatesSection = () => {
  return (
    <div className="candidates-section">
      <h2 className="candidates-title">Meet Our Candidates</h2>
      <div className="candidates-grid">
        {candidates.map((candidate, index) => (
          <div key={index} className="candidate-card">
            <img
              src={candidate.imageUrl}
              alt={candidate.name}
              className="candidate-poster"
            />
            <div className="candidate-info">
              <h3>{candidate.name}</h3>
              <p>{candidate.constituency}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidatesSection;
