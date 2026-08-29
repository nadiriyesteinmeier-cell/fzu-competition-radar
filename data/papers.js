window.PAPER_DATA_UPDATED_AT = "2026-08-29";
window.PAPER_ITEMS = [
  {
    "id": "2608.27456",
    "title": "UrbanGround: From Local Perception to Spatial Agency in a Real-Scale City",
    "authors": [
      "Tianjie Ju",
      "Zheng Wu",
      "Yueqing Sun",
      "Yuhan Cui",
      "Bobo Li",
      "Shengqiong Wu",
      "Pengzhou Cheng",
      "Haodong Zhao",
      "Zongru Wu",
      "Xinbei Ma",
      "Doris Zhang",
      "Kunling Li",
      "Mong-Li Lee",
      "Wynne Hsu",
      "Hao Fei",
      "Qi Gu",
      "Gongshen Liu",
      "Zhuosheng Zhang"
    ],
    "abstract": "Multimodal large language models (MLLMs) can interpret a street view, but urban agency depends on whether such local evidence remains useful after the agent starts to move. In this paper, we investigate how far current MLLM agents can turn local urban perception into reliable action in a complicated real-scale city. We propose UrbanGround, the first sandbox to make this question testable in a physically constrained replica of Hong Kong built from territory-wide 3D geospatial data. UrbanGround supports closed-loop interaction from a first-person view and provides an interactive map for navigation. Agents can directly enter the 3D city and explore from a first-person view. Our analysis follows the growth of the spatial problem through three research questions. We first test whether an agent can ground a local scene well enough to answer spatial questions after active observation. Then we ask whether that grounding supports navigation as destinations become farther away and less explicit. Finally, we examine whether the resulting behavior survives changes in route availability and pedestrian motion. Contemporary MLLM agents usually show useful atomic abilities in visual recognition and short-range spatial reasoning, while orientation and pedestrian-aware movement remain unreliable. Their central failure emerges over extended exploration, where local abilities do not compose into sustained goal-directed behavior and errors accumulate without effective correction. We hope UrbanGround will support broader study of how far current MLLM agents can explore reliably in complex, open-ended urban environments.",
    "published": "2026-08-27T17:59:33Z",
    "updated": "2026-08-27T17:59:33Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.27456"
  },
  {
    "id": "2608.27454",
    "title": "WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution",
    "authors": [
      "Liyan Tang",
      "Cyrus Rashtchian",
      "Chun-Sung Ferng",
      "Andrew Tomkins",
      "Da-Cheng Juan",
      "Tu Vu"
    ],
    "abstract": "Agent skills package specialized knowledge and workflows into reusable resources that extend AI agent capabilities. Recent work automatically discovers such skills from agent experience, which enables agents to progressively adapt through interaction. However, the insights that guide skill development typically remain scattered across optimization histories, limiting their systematic reuse across iterations. We introduce WikiSkill, a framework that co-evolves agent skills with a persistent knowledge base (wiki). At a high level, WikiSkill separates raw execution experience, accumulated knowledge, and executable skills, while continuously consolidating experience into the wiki, which subsequent skill updates can build on. Across diverse benchmarks and models, WikiSkill consistently outperforms state-of-the-art skill-evolution methods and improves over no-skill baselines in most model-benchmark settings. We find that skill evolution complements model scaling: larger models generally benefit more from evolved skills, while smaller models with skills can outperform substantially larger models without them. We also find that evolved skills transfer effectively across models and model families, and skills evolved by other models can outperform self-evolved skills. Finally, our ablation studies confirm that persistent knowledge accumulation in the wiki is critical for effective skill evolution. These results demonstrate the benefits of systematically accumulating and refining agent experience for developing reusable and transferable skills.",
    "published": "2026-08-27T17:59:11Z",
    "updated": "2026-08-27T17:59:11Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2608.27454"
  },
  {
    "id": "2608.27449",
    "title": "SWE-Prime: Fewer Trajectories, Better Performance",
    "authors": [
      "Dewu Zheng",
      "Ruizhe Ye",
      "Yanlin Wang",
      "Yang Ye",
      "Hongyu Zhang",
      "Ensheng Shi",
      "Xilin Liu",
      "Yuchi Ma",
      "Jianxing Yu",
      "Zibin Zheng"
    ],
    "abstract": "To improve large language models' ability to resolve real-world software issues, prior work has focused on constructing large-scale agent trajectory datasets and performing supervised fine-tuning (SFT) on successful trajectories. However, task success does not guarantee high-quality supervision: successful trajectories may still contain ineffective, redundant, or risky steps. Directly using such trajectories for SFT can introduce noisy supervision and encourage models to imitate undesirable problem-solving behaviors. Therefore, we propose SWE-Prime, a multi-granularity, two-stage SFT data selection method that progressively filters training data at the trajectory and segment levels. Specifically, the first stage performs trajectory-level screening based on process quality, result quality, and data representativeness, selecting a high-quality and representative subset of successful trajectories. The second stage performs segment-level selection by grouping consecutive steps into semantic segments and assessing each segment based on its contribution to the final solution, learnability, and potential risks. During SFT, all segments remain in the sequence to preserve context, while only selected segments contribute to the loss computation. Experiments on SWE-Bench Pro and SWE-Bench Verified show that training on the 10% trajectory subset selected by SWE-Prime outperforms training on the full resolved dataset, yielding relative performance gains of up to 12.2% and 24.2%, respectively.",
    "published": "2026-08-27T17:58:10Z",
    "updated": "2026-08-27T17:58:10Z",
    "categories": [
      "cs.SE",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2608.27449"
  },
  {
    "id": "2608.27443",
    "title": "Do User-Authored Permission Policies Improve Protection Against AI Agent Overreach?",
    "authors": [
      "Ting Yan"
    ],
    "abstract": "AI agents are poised to become a primary interface to digital products, acting across email, files, payments, and personal data. People without professional software backgrounds need understandable, reusable ways to control actions across services. We examine a mechanism in which a language model maps actions to plain-language consequence categories with user-authored \"allow\", \"ask\", or \"never\" rules. We ask what is gained and lost when decisions are made in advance as reusable rules rather than separately for each action. We analyzed 113 participants without professional software backgrounds across three conditions: per-action human-in-the-loop approval (HITL), automated per-action model review (AUTO), or user-authored consequence policy (POLICY). Participants judged 2 examples in each of 4 consequence categories; POLICY participants then set one rule per category. All supervised an 18-action simulated day, including 7 overreach actions. POLICY blocked less overreach than HITL (-20.1 percentage points, 95% CI [-32.1, -8.1]) and AUTO (-14.5 points, 95% CI [-25.8, -3.2]). POLICY lowered runtime prompts from 18.0 to 10.9, but total intervention time was not reliably lower when rule setup was included. Exploratory analysis showed that participants chose \"ask\" for 114 of 140 POLICY rules, returning most overreach actions to runtime. Of the 148 overreach actions executed in POLICY, 133 followed human approval and 15 ran automatically under \"allow\" rules. Across all 7 overreach actions, POLICY had the highest approval rate. Counterintuitively, user-authored rules did not by themselves provide stronger protection: many actions outside users' original requests went through after users approved them. These results reveal a gap between preference and commitment: repeatedly choosing \"ask\" preserves case-by-case choice but prevents a standing policy from settling decisions in advance.",
    "published": "2026-08-27T17:56:38Z",
    "updated": "2026-08-27T17:56:38Z",
    "categories": [
      "cs.HC",
      "cs.CR"
    ],
    "url": "https://arxiv.org/abs/2608.27443"
  },
  {
    "id": "2608.27442",
    "title": "From Static to Dynamic: Benchmarking Real-World Code Review with MCR-Bench",
    "authors": [
      "Dewu Zheng",
      "Yanlin Wang",
      "Xiwen Wang",
      "Kefeng Duan",
      "Hongyu Zhang",
      "Xilin Liu",
      "Yuchi Ma",
      "Zibin Zheng"
    ],
    "abstract": "In real-world software development, code review typically involves iterative interactions between developers and reviewers to improve software quality, making the process costly and time-consuming. Although recent work explores large language models (LLMs) for automated code review, most approaches oversimplify code review into a single-round, static decision task, which fails to capture the multi-round interactive nature and the complex problem-solving processes inherent in realistic review scenarios. To bridge this gap, we introduce MCR-Bench, the first defect state-aware benchmark designed for realistic multi-round code review. MCR-Bench covers five commonly-used programming languages and consists of 2,269 real-world multi-round code review tasks, each of which is annotated with fine-grained defect information and cross-round state labels. Each task in MCR-Bench is equipped with fine-grained defect metadata (e.g., description, type, severity) alongside dynamic state annotations, capturing the complete evolutionary trajectory of a defect throughout the multi-round process. We obtain several findings through extensive experiments on MCR-Bench with mainstream LLMs. (1) Limited overall capability: experiments reveal that mainstream LLMs exhibit limited overall performance in defect detection and defect lifecycle state tracking, with performance degrading significantly as the number of interaction rounds increases; (2) Defect-sensitive performance: LLMs' performance varies substantially across different defect types and severity levels, with semantically complex or low-salience defects being significantly more likely to be missed; (3) Underlying Failure Mechanisms: our in-depth error analysis dissects the distinct drivers of false positives and false negatives, revealing critical weaknesses such as cross-round temporal misalignment and inadequate long-range memory.",
    "published": "2026-08-27T17:56:24Z",
    "updated": "2026-08-27T17:56:24Z",
    "categories": [
      "cs.SE",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2608.27442"
  },
  {
    "id": "2608.27439",
    "title": "RedEvoAgent: Automatic Red-Teaming Agent with Experience-Driven Skill Evolution",
    "authors": [
      "Junjie Zhang",
      "Hui Liu",
      "Kecheng Chen",
      "Xianbo Mo",
      "Changsheng Chen",
      "Haoliang Li"
    ],
    "abstract": "LLM-based agents are increasingly deployed in product-level execution harnesses, where jailbreaks can trigger harmful tool use and persistent state changes, creating greater risks than unsafe text generation alone. Existing automatic red-teaming methods often rely on fixed attacks, while recent agentic attackers coordinate multiple jailbreak tools and show stronger potential through trajectory-based retrieval. However, such retrieval can reuse misleading experiences due to retrieval bias and unclear tool credit, and full trajectories add context overhead while reducing interpretability. We propose RedEvoAgent, a black-box red-teaming agent that distills cross-case attack trajectories into a concise, human-readable attack skill. The attack skill adaptively evolves through tool-effectiveness profiling and Deciding-Tool Attribution for skill updates, and a validation ratchet that retains only updates improving validation performance. Experiments on multiple benchmarks, target models, and target execution harnesses show that RedEvoAgent outperforms fixed and agentic baselines, improves tool efficiency, and transfers across attacker models and target execution harnesses.",
    "published": "2026-08-27T17:55:33Z",
    "updated": "2026-08-27T17:55:33Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.27439"
  },
  {
    "id": "2608.27429",
    "title": "Mechanistic Reaction Prediction via Discrete Flow Matching on Graph-Structured Electron Occupation",
    "authors": [
      "Nguyen Xuan-Vu",
      "Octavian Susanu",
      "Daniel Armstrong",
      "Philippe Schwaller"
    ],
    "abstract": "Chemical reactions are fundamentally transformations in electron space, yet most machine learning approaches model them either through \\textit{de novo} generation of product molecules or through heuristic graph edits that operate directly on molecular topology. We introduce MAELLE (\\textbf{M}ech\\textbf{A}nistic \\textbf{E}dit f\\textbf{L}ow-matching on e\\textbf{L}ectron r\\textbf{E}arrangements), which instead models reactions as discrete flow matching over electron occupation vectors. Concretely, we formulate the reactant-to-product mapping as a Continuous-time Markov Chain (CTMC) over the graph-structured integer-valued electron occupation space defined on all bonding, non-bonding, and hydrogen sites. To construct the intermediate edit trajectories, we generalize the discrete flow matching mixture path to discrete electron rearrangements using Optimal Transport, yielding a sequence of mechanistically interpretable edit moves without requiring elementary step annotations. MAELLE achieves competitive performance on the USPTO-480K benchmark compared with leading reaction prediction models. Beyond in-distribution accuracy, we evaluate robustness across two out-of-distribution settings - structural complexity and reaction type - and find that MAELLE maintains strong performance where existing methods degrade. Finally, because the learned flow operates over the full electron redistribution, MAELLE naturally recovers mechanistic trajectories that align with known chemistry and can predict side products of a reaction.",
    "published": "2026-08-27T17:50:44Z",
    "updated": "2026-08-27T17:50:44Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.27429"
  },
  {
    "id": "2608.27427",
    "title": "Persona-Execution Separation: An Architecture Pattern for Evolving LLM Agents under Execution Audit",
    "authors": [
      "Yisen Xi"
    ],
    "abstract": "Large language model (LLM) agents in governed organizations must let the persona (instructions, tone, self-presentation) evolve freely, while keeping execution (stateful, audited work) traceable. A single trust domain does not satisfy both cheaply. We present Persona-Execution Separation (PES): persona and execution reside in different trust domains, connected by a governed contract bridge. The persona is singly-homed and may drift; execution is faceless and audited. Status summaries may return; data bodies remain in the restrictive domain except a graded data-loss-prevention (DLP) exception; identity stays continuous. An approval matrix, DLP, and audit enforce the crossing. PES follows from three goals---free drift, execution traceability, and decoupling. Under LLM representational indistinguishability, any single-domain mechanism that meets all three must re-introduce typed change objects, an external gate, and a stable audit anchor: PES rebuilt at higher coupling cost. A development/pilot case in a regulated digital-employee platform records five decisions over one month, each with a rejected alternative. A mechanism check on the shipped implementation found no execution-side re-validation under persona perturbation (five model configurations) and no persona fingerprint on hard-asserted fields. A probe of a recovered pre-separation build found the governed execution path decoupled from the persona by omission, not by construction; a later wiring change could reverse that isolation, which PES makes an audited architectural rule. The pattern applies when multi-user deployment, execution audit, and expected persona churn hold jointly.",
    "published": "2026-08-27T17:50:07Z",
    "updated": "2026-08-27T17:50:07Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.27427"
  },
  {
    "id": "2608.27424",
    "title": "Beyond F1: Evaluating Coverage and Failure Recovery in AI Model Security Scanners",
    "authors": [
      "Qianlong Lan",
      "Vinothini Pandurangan",
      "Anuj Kaul",
      "Indranil Sanyal"
    ],
    "abstract": "Static scanners are increasingly used to identify executable or otherwise unsafe content in machine- learning artifacts, yet conventional evaluation metrics characterize only cases where a scanner yields a usable security judgment. We evaluate ModelScan, ModelAudit, and Fickling using a controlled, artifact-backed benchmark on a synthetic corpus of 170 Pickle and PyTorch focused artifacts across 145 specimen families, 135 of which have binary security ground truth and 10 of which are intentionally malformed without labels. We explicitly distinguish non-N/A coverage, analysis completion, definitive security decisions, non-security findings, and unsupported outcomes. On labeled families, ModelAudit produced definitive security decisions for all 135 families (100%), Fickling for 110 (81.5%), and ModelScan for 67 (49.6%). Conditional on making a definitive judgment, ModelScan achieved 100% precision, recall, and F1. Fickling identified no unique true- positive families beyond those found by the combination of ModelAudit and ModelScan. Furthermore, for the 48 malicious families where ModelScan failed to complete its analysis, both ModelAudit and Fickling generated detections consistent with ground truth. These findings underscore the need to separate judgment accuracy from judgment availability, as well as incremental detection coverage from tool-level redundancy.",
    "published": "2026-08-27T17:49:28Z",
    "updated": "2026-08-27T17:49:28Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.27424"
  },
  {
    "id": "2608.27421",
    "title": "Learning a Continuous Sepsis Severity Score Without Hour-by-Hour Supervision: A Two-Site Retrospective Study",
    "authors": [
      "Kevin Zhu",
      "Ryan Zhang",
      "Baraa Abed",
      "Tilendra Choudhary",
      "Malvern Madondo",
      "Mehak Arora",
      "Yixuan Yang",
      "Alasdair Gent",
      "Aditya Nagori",
      "Omer T. Inan",
      "Krista L. Haines",
      "Patrick Georgoff",
      "Suresh M. Agarwal",
      "Vijay Krishnamoorthy",
      "Tetsu Ohnuma",
      "Mihai V. Podgoreanu",
      "Michael R. Pinsky",
      "Gilles Clermont",
      "Craig M. Coopersmith",
      "Craig S. Jabaley",
      "Rishikesan Kamaleswaran"
    ],
    "abstract": "Currently used sepsis severity indices rely on fixed variables and weights established decades ago, which are coarsely discretized and calibrated to a cohort that no longer reflects contemporary critical care. No alternative learned directly from patient trajectories is in routine use. We conducted a retrospective two-cohort study on a total of 29,116 and 7,691 adult patients meeting Sepsis-3 criteria from two hospital systems in Massachusetts and Georgie, respectively. We developed a sepsis index using 43 routinely charted variables over a 72-hour treatment window. Unlike previous studies, we use mortality as a treatment-level ranking signal rather than a per-state target, allowing credit to be redistributed non-uniformly across timesteps. Evaluation was done on a permanent 20% test holdout, using clinical vignettes and Spearman correlation. Uncertainty intervals were obtained by bootstrap resampling of whole patients. Under this ranking scheme, non-survivors scored 1.19-1.64 points higher than survivors on a 0-10 scale within all strata of baseline SOFA-2, with similar results stratifying within lactate, mean arterial pressure (MAP), and creatinine. Within-patient change in the index correlated with change in lactate (Spearman rho = 0.39; n = 1,854). Similar, weaker correlations were found for MAP and creatinine. On a cohort level, cross-institutional agreement measured by Spearman correlation between models trained on different sites, were 70-77% of same-site correlation. External within-patient correlations were 0.54 and 0.59 against ceilings of 0.92 and 0.90. Our index also correlated with established indices, while null controls stayed near zero. Our index demonstrated hourly prognostic information that meaningfully separates patient outcomes and is consistent with clinical expectation, indicating potential as a decision support tool complementing clinical judgement.",
    "published": "2026-08-27T17:46:21Z",
    "updated": "2026-08-27T17:46:21Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.27421"
  },
  {
    "id": "2608.27417",
    "title": "Retrieval Heads Meet Vision: Uncovering How VLMs Locate and Extract Visual Information",
    "authors": [
      "Chanho Park",
      "Daehyeon Choi",
      "Jihyun Lee",
      "Minhyuk Sung"
    ],
    "abstract": "Vision-language models (VLMs) can locate an image region referred to by a text prompt and route the corresponding visual evidence to the output, yet the internal mechanism behind this behavior is not understood. Inspired by retrieval heads in large language models, we ask whether VLMs contain an analogous mechanism for visual retrieval. We answer affirmatively by introducing Visual Retrieval Heads (VRHs), a small subset of attention heads (about 1.7-2.6%) that are causally responsible for grounding text descriptions to image regions. To find them, we recast existing head-scoring methods under a unified design space over query tokens, key aggregation, and cross-sample aggregation. We then show that scoring attention from output prediction tokens with a sum over the ground-truth referent region most reliably identifies causal heads. Across eleven VLMs and five referring-expression benchmarks, masking only the top 20 VRHs reduces grounding accuracy by up to 80 percentage points, while masking the same number of random heads has little effect. Beyond replicating the causal-sparse-universal triad established for text retrieval heads, VRHs exhibit several properties not previously reported: they generalize across visual reference tasks, remaining causal on attribute, spatial, counting, and visual-math benchmarks despite being discovered through bounding-box prediction; they are functionally specific, preserving output format while corrupting localization; and they are architecturally shared, transferring causally across VLMs that share an LLM backbone but differ in vision encoder, projector, and instruction tuning.",
    "published": "2026-08-27T17:43:58Z",
    "updated": "2026-08-27T17:43:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.27417"
  },
  {
    "id": "2608.27407",
    "title": "Reconstructing Humans and Objects in Interaction using Large Reconstruction Models",
    "authors": [
      "Agniv Chatterjee",
      "Georgios Pavlakos"
    ],
    "abstract": "Estimation of Human-Object Interactions in 3D (3D HOI) is a fundamental problem in 3D computer vision with applications in AR/VR, robotics, and embodied AI. However, reconstructing these interactions in 3D remains challenging due to depth ambiguities, occlusions, and object shape variability. Existing approaches are primarily concerned with reprojection and contact constraints, fitting parametric human models and object templates to 2D images. In this paper, we explore a different avenue. We present MILO, a framework that leverages the visual capabilities of Large Reconstruction Models (LRMs) to recover detailed 3D human-object interactions from a single image. Our key observation is that LRMs provide a powerful geometric scaffold that preserves relative human-object arrangement and proximity cues. This significantly simplifies the reconstruction procedure, reframing the problem as interpreting the LRM mesh: we segment it into human and object components, fit a parametric body model to the human part, and optionally align an object template to the object part (if such a template is available). MILO achieves strong reconstruction accuracy and outperforms existing baselines across multiple benchmarks and interaction scenarios. Our code is available at https://ac5113.github.io/MILO.",
    "published": "2026-08-27T17:35:46Z",
    "updated": "2026-08-27T17:35:46Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.27407"
  },
  {
    "id": "2608.26105",
    "title": "VBVR-Pro: A Scalable and Verifiable Suite for Native Visual Reasoning",
    "authors": [
      "Junxiang Xu",
      "Ruisi Wang",
      "Fanyi Pu",
      "Maijunxian Wang",
      "Ran Ji",
      "Tongxi Zhou",
      "Chenyang Gu",
      "Jing Zuo",
      "Hongcan Xiao",
      "Yimeng Geng",
      "Wanqi Yin",
      "Wei Chen",
      "Oscar Qian",
      "Zhengan Yan",
      "Ziqi Huang",
      "Haiwen Diao",
      "Liang Pan",
      "Bo Li",
      "Xiangyu Fan",
      "Dezhi Luo",
      "Fengyuan Yu",
      "Zehong Zhao",
      "Qingying Gao",
      "Tinghui Zhu",
      "Yilan Zhang",
      "Jingqi Tong",
      "Pinyuan Feng",
      "Zhengze Jiang",
      "Letian Wang",
      "Ziyu Guo",
      "Renrui Zhang",
      "Jieneng Chen",
      "Sonia Joseph",
      "Constantin Venhoff",
      "Saman Motamed",
      "Mengyue Yang",
      "Chandra Sripada",
      "Alan Yuille",
      "Philip Torr",
      "Lvmin Zhang",
      "Vikash Kumar",
      "Daniel Khashabi",
      "Nikolaus Kriegeskorte",
      "Raphaël Millière",
      "Vincent C. Müller",
      "Anyi Rao",
      "Quan Wang",
      "Ziwei Liu",
      "Dahua Lin",
      "Lei Yang",
      "Hokin Deng",
      "Zhongang Cai"
    ],
    "abstract": "Native visual reasoning treats visual generation as the medium of reasoning itself: visual states (i.e. images and videos) are not merely inputs to be understood or outputs to be rendered, but first-class substrates for problem solving beyond language. Yet progress remains bottlenecked by the lack of scalable training tasks, reliable feedback, and controlled comparisons across generative substrates. In this work, we introduce VBVR-Pro, a closed-loop testbed that makes native visual reasoning through generation trainable, verifiable, optimizable, and experimentally controllable. 1) Task scaling. VBVR-Pro turns visual reasoning into a controlled task space of 300 procedurally generated tasks. Models trained on VBVR-Pro show strong transfer beyond the proposed suite across seven external visual reasoning benchmarks such as RISE-Video, MME-CoF-Pro, and BabyVision. 2) Verifiable rewards. VBVR-Pro provides verifiable reward scorers for task-grounded evaluation. Through a systematic study of leading MLLMs as judges, we identify recurring failure modes of the prevalent VLM-as-a-judge paradigm. In contrast, the proposed scorers are grounded in deterministic, task-specific rules, achieve fine-grained alignment with human judgments. Importantly, they serve as reliable reward signals for large-scale multi-task reinforcement learning and demonstrate stronger post-RL performance across visual reasoning tasks. 3) Mechanism study. VBVR-Pro enables controlled modality studies across more than 30 image, video, and interleaved generators. Our analysis shows that video generation remains strongest for tasks requiring persistent spatiotemporal state tracking, while interleaved generation provides a compute-efficient alternative. Critically, ablations and probing suggest the presence of vision-native trajectories that are crucial to visual reasoning. We release all data, models, scorers, and code.",
    "published": "2026-08-26T17:59:51Z",
    "updated": "2026-08-26T17:59:51Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG",
      "cs.MM",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2608.26105"
  },
  {
    "id": "2608.26103",
    "title": "Zero-WAM: In-Context World-Action Modeling from Human Videos for Open-Ended Task Generalization",
    "authors": [
      "Jiaming Zhou",
      "Qihang Zhang",
      "Gangwei Xu",
      "Cunxin Fan",
      "Yujie Zhao",
      "Ruilin Wang",
      "Yiming Luo",
      "Shuai Yang",
      "Xing Zhu",
      "Yujun Shen",
      "Junwei Liang",
      "Yinghao Xu"
    ],
    "abstract": "Zero-shot cross-task generalization, where a policy must execute manipulation tasks never seen during training, remains a central challenge in robot learning. In large language models, a novel task can be performed simply by specifying it in the context, without any parameter update. This form of in-context learning (ICL) turns generalization into a problem of task specification. To achieve cross-task generalization, we bring this paradigm to robotic manipulation, and argue that the natural task specification for manipulation is a human video: unlike language, it provides rich visual cues about the intended task evolution. We present Zero-WAM, a causal video-action model that executes unseen tasks by following in-context human video guidance. To address the scarcity of task-rich paired human-robot data, we propose an automatic pipeline that converts task-sampled robot trajectories into semantically matched human videos, yielding HumanGen, a dataset of 74.2K human-robot ICL pairs across 8.6K tasks. For model training, we further introduce an in-context future chunk prediction (IFP) objective that suppresses shortcuts learned from seen tasks and forces the policy to draw task information from the video prompt. On seven unseen tasks in RoboTwin 2.0 simulation, Zero-WAM achieves a 47.0% average success rate, an absolute improvement of 29.5 percentage points over the strongest video-action baseline. In real-world evaluations, it follows human video guidance to generalize to unseen task configurations involving multi-object scenes, long-horizon manipulation, and fine-grained insertion.",
    "published": "2026-08-26T17:59:34Z",
    "updated": "2026-08-26T17:59:34Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.26103"
  },
  {
    "id": "2608.26101",
    "title": "RefVideo-6M: A Reliable Reference-Based Dataset for Instructional Video Editing",
    "authors": [
      "Bojia Zi",
      "Xiaoyan Yang",
      "Yu Zhou",
      "Ruijie Sun",
      "Lihan Zhang",
      "Bin Liang",
      "Kam-Fai Wong",
      "Haibin Huang",
      "Chi Zhang",
      "Xuelong Li"
    ],
    "abstract": "Recent advances in video editing have been largely driven by large-scale instruction-based datasets. However, existing datasets still suffer from two critical limitations. First, target videos are commonly produced by automatic editing models, which may introduce visible artifacts and unreliable supervision signals. Second, most public datasets rely primarily on textual instructions, while lacking visual references that are crucial for precise, identity-preserving, and controllable editing. To address these limitations, we introduce RefVideo-6M, a large-scale reference-guided editing dataset containing 5 million video editing samples and 1 million image editing samples. To ensure reliable supervision, our dataset uses a construction pipeline that treats artifact-free real videos as editing targets and generates quality-filtered input conditions with multiple editing experts. In addition, it provides approximately 6 million visual references, covering diverse reference types and editing scenarios, thereby enabling models to learn fine-grained visual correspondence beyond text-only instructions. Based on RefVideo-6M, we further train a reference-guided video editing model, Ref-MoT, to evaluate the effectiveness and scalability of the proposed dataset. Extensive experiments demonstrate that RefVideo-6M provides substantially more reliable supervision than existing datasets and enables the training of powerful editing models with improved visual quality, controllability, and reference consistency. The open-source dataset is available at https://huggingface.co/datasets/RefVideo6M/RefVideo6M.",
    "published": "2026-08-26T17:59:19Z",
    "updated": "2026-08-26T17:59:19Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.26101"
  },
  {
    "id": "2608.26095",
    "title": "A Visual Dependence-Aware Framework for Multimodal Unsupervised Continual Post-Training",
    "authors": [
      "Kaichen Li",
      "Zhilin Zhu",
      "Jianhao Huang",
      "Zhengqin Lai",
      "Baochen Xiong",
      "Zibo Shao",
      "Yaguang Song",
      "Linhui Xiao",
      "Xiaoshan Yang",
      "Changsheng Xu"
    ],
    "abstract": "In this paper, we explore a novel task of Multimodal Unsupervised Continual Post-Training (MU-CPT), enabling deployed MLLMs to continually evolve from streaming unlabeled data. Existing unsupervised post-training methods for MLLMs typically optimize target tokens uniformly, overlooking their heterogeneous visual dependence (VD). However, we reveal that token-level VD is crucial for MU-CPT. Specifically, its structural distortion serves as an indicator of cross-modal catastrophic forgetting, and its inherent heterogeneity acts as a compass to guide new-task learning. Leveraging this property, we propose a Visual Dependence-Aware (VDA) framework with two main components. First, Visually Constrained Optimal Transport (VC-OT) formulates the VD structural distortion of old-task VD during new-task learning as an optimal transport problem to mitigate cross-modal forgetting. By designing a region-aware ground cost and a dependence-stratified transport penalty, it prevents global shifts in visual focus while strictly prohibiting visual reliance from degenerating into language bias. Second, Visually Modulated Adaptation (VMA) exploits VD heterogeneity to emphasize visually grounded new-task learning, promoting new-task plasticity. Together, our method simultaneously maintains old-task stability and new-task plasticity during challenging MU-CPT. Extensive experiments under our MU-CPT setting validate the effectiveness of VDA.",
    "published": "2026-08-26T17:57:04Z",
    "updated": "2026-08-26T17:57:04Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.26095"
  },
  {
    "id": "2608.26094",
    "title": "MyoMechanix: Biomechanically-Grounded Compositional Skilled Activity Understanding and Coaching",
    "authors": [
      "Hao Yin",
      "Paritosh Parmar",
      "Lijun Gu",
      "Lin Xu",
      "Tianxiao Guo",
      "Xiujin Liu",
      "Tianyou Zheng",
      "Yang Zhang",
      "Weiwei Fu"
    ],
    "abstract": "Existing action quality assessment (AQA) datasets and methods rely primarily on visual inputs such as RGB and pose, overlooking physiological dynamics such as muscle mechanics and often modeling actions as monolithic patterns. These limitations hinder fine-grained, biomechanically grounded feedback. We introduce MyoMechanix, a multimodal ecosystem for weight-loaded actions that aligns motion with muscle activity. Expert-annotated, it contains 7,500+ samples of 20 actions from 38 subjects, with synchronized multiview RGB video, 3D pose, sEMG, and additional physiological signals, forming the largest multimodal AQA benchmark to date. We further construct the Fitness Knowledge Graph (FKG), which organizes expert annotations into structured relationships among actions, phases, key steps, errors, and corrective feedback, enabling compositional scoring and interpretable assessment. Building on these representations, we develop CUBIST (Compositional Ontological Reasoning Engine), which performs decomposition-analysis-recomposition for fine-grained error attribution and feedback generation. We also establish MyoMechanix-AQA, MyoMechanix-VideoQA, and a novel MyoMechanix-Video2EMG task. Experiments show that multimodal sensing and structured representations improve performance, interpretability, and error attribution, with CUBIST achieving state-of-the-art results; VideoQA enhances language-grounded action understanding; and Video2EMG suggests video-based alternatives to costly EMG sensing. MyoMechanix advances skilled activity understanding toward biomechanically grounded, multimodal, and compositional reasoning for Physical AI applications in fitness, rehabilitation, healthcare, and machine learning. Project page: https://haoyin116.github.io/MyoMechanix/",
    "published": "2026-08-26T17:56:33Z",
    "updated": "2026-08-26T17:56:33Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.ET",
      "cs.HC",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.26094"
  },
  {
    "id": "2608.26091",
    "title": "PlanSightRAG: A Visual-First Multimodal RAG for Automating Question Answering and Compliance Checking for Civil Standard Plans",
    "authors": [
      "Nabaraj Subedi",
      "Shuvo Dip Datta",
      "Ahmed Abdelaty",
      "Shivanand Venkanna Sheshappanavar"
    ],
    "abstract": "Civil infrastructure compliance checking has long relied on engineers manually reading legacy 2D plans; however, OCR-based automation strips away the geometry and layout essential for interpreting these plans. We present a Visual-First Multimodal Retrieval-Augmented Generation (RAG) framework called PlanSightRAG. It indexes and reasons directly over plan imagery, integrates a ColNomic-3B multi-vector retrieval, an agentic Planner-Retriever-Auditor-Synthesizer, and MaxSim heatmaps as an evidence trail. We introduce a 4,056-pair benchmark from five state Departments of Transportation (DOT) standard plans (1,898 pages). PlanSightRAG achieves 91.47% Recall@5 on zero-shot retrieval, while on a held-out Michigan DOT corpus, it achieves 91.40%. On synthetic, parametrically-generated compliance drawings, our Qwen2.5-VL-72B pipeline reaches 100% verdict accuracy only when supplied a pre-resolved rule threshold, a controlled ceiling that a non-VLM OCR baseline already reaches at 76.4%. Finally, we demonstrate autonomous visual rule-grounding by extracting numeric limits directly from a specification corpus without any human-supplied rules.",
    "published": "2026-08-26T17:54:24Z",
    "updated": "2026-08-26T17:54:24Z",
    "categories": [
      "cs.IR",
      "cs.CL",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.26091"
  },
  {
    "id": "2608.26090",
    "title": "Finding and using interpretable latents in a neutrino foundation model with sparse autoencoders",
    "authors": [
      "Raphaël Bonnet-Guerrini",
      "Johann Ioannou-Nikolaides",
      "Inar Timiryasov",
      "Vincenzo Piuri"
    ],
    "abstract": "We present a first application of sparse-autoencoder-based mechanistic interpretability to particle physics. Studying a neutrino foundation model pretrained on IceCube data and fine-tuned for direction reconstruction, we identify a validated atlas of physical concepts in the model representation, using a strict validation protocol consisting of held-out tests, matched nuisance controls, and replication across independent dictionary trainings. Causal interventions show that the direction head barely draws on this atlas. Motivated by this underused information, we train an uncertainty head on the same event-level representation to predict the model's angular reconstruction error. Unlike the direction head, it depends causally on quality and brightness features from the atlas. At $20\\%$ selection efficiency, this interpretable estimator improves the median angular resolution from $20.2^\\circ$ to $3.2^\\circ$. These results suggest that mechanistic interpretability can reveal learned latent physics encoded within a model's internal representation and help design downstream tasks that exploit it.",
    "published": "2026-08-26T17:53:00Z",
    "updated": "2026-08-26T17:53:00Z",
    "categories": [
      "astro-ph.HE",
      "cs.AI",
      "cs.LG",
      "hep-ex"
    ],
    "url": "https://arxiv.org/abs/2608.26090"
  },
  {
    "id": "2608.26089",
    "title": "From Producing to Validating: How AI Is Deskilling Freelancers",
    "authors": [
      "Nakul Rajpal"
    ],
    "abstract": "Generative AI is promoted as a way to enhance knowledge work, yet its benefits and drawbacks fall unevenly across the workforce. Freelance and gig workers, who commonly lack the upskilling pathways available to traditional employees, face heightened risks to both skill development and job security as AI adoption advances. We review empirical evidence on AI's impact on knowledge-worker workflows and upskilling, then predict the primary and downstream effects of AI adoption among clients and workers in the freelance economy. We anchor this in two cases of the same shift, machine-translation post-editing and software development. We argue that freelancers are the leading edge of a change that also reaches salaried HCI practitioners, and we close with questions for the platforms and clients that mediate this work, and for HCI researchers.",
    "published": "2026-08-26T17:51:34Z",
    "updated": "2026-08-26T17:51:34Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2608.26089"
  },
  {
    "id": "2608.26088",
    "title": "Planetary Prediction Engine: Autonomous Geospatial Prediction via Intelligent Data Selection and Foundation Model Embeddings",
    "authors": [
      "Evelyn Ma",
      "Rama Kumar Pasumarthi",
      "Kishwar Shafin",
      "Mandar Sharma",
      "Mimi Sun",
      "Hamed Sadeghi",
      "Dav M. Ebengo",
      "Mbulayi Onesime",
      "Rouslan Solomakhin",
      "John Wamburu",
      "William Ogallo",
      "Aisha Walcott-Bryant",
      "Sanxing Chen",
      "Arbaaz Muslim",
      "Yael Mayer",
      "Ronald Ho",
      "Roy Lee",
      "Ruth Alcantara",
      "Abdoulaye Diack",
      "Monica Bharel",
      "Lambert Rosique",
      "Jeremy Amez-Droz",
      "Christopher Haire",
      "James Manyika",
      "Yossi Matias",
      "Niv Efron",
      "Gautam Prasad",
      "Shravya Shetty"
    ],
    "abstract": "Addressing critical global challenges, from food security and disaster risk to disease outbreaks and socio-economic vulnerability, demands high-fidelity geospatial modeling. However, building predictive planetary models remains bottlenecked by a fragmented data ecosystem, requiring manual data retrieval, multimodal data curation and fusion along with iterative model selection. We present the Planetary Prediction Engine (PPE), an autonomous AI system that executes this end-to-end workflow directly from natural-language queries. PPE synthesizes multimodal datasets on the fly, retrieving spatiotemporally relevant covariates across open-web and Earth observation platforms (Data Commons, Google Earth Engine) and fusing them with geospatial foundation model embeddings (PDFM, AlphaEarth). Simultaneously, it searches over task-tailored model architecture families with automated overfitting guards. Across diverse tasks, geographies, and scientific domains, PPE consistently outperforms state-of-the-art or manually tuned expert baselines. For US spatial regression, PPE improves mean $R^2$ across 21 CDC health indicators (76.8% vs. 60.0%), FEMA national risk indices (64.9% vs. 60.0%), and the Social Vulnerability Index (66.2% vs. 58.6%). For spatial downscaling in data-scarce settings, PPE integrates localized proxies to double baseline accuracy in Nigerian food security indicators ($R^2$ of 66.1% vs. 31.5%). For epidemiological nowcasting of the 2026 DRC Bundibugyo Ebola outbreak, PPE achieves a Recall@10 of 83.3% (identifying 15 of 18 newly invaded health zones across five weekly forecasts), a +10.3 percentage-point improvement over the public state-of-the-art modeling (~73%). By combining autonomous multimodal planetary data discovery with targeted model optimization, PPE lowers the technical barrier to planetary-scale analytics, enabling rapid, customized, expert-level deployment.",
    "published": "2026-08-26T17:50:52Z",
    "updated": "2026-08-26T17:50:52Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.26088"
  },
  {
    "id": "2608.26086",
    "title": "TraceML: An Empirical Analysis of Human-Agent Planning in Machine Learning Development",
    "authors": [
      "Jiarui Yan",
      "Weiwei Sun",
      "Sijie Li",
      "Wenhan Li",
      "Yiming Yang"
    ],
    "abstract": "Large language models write correct code for isolated problems but remain far weaker at autonomous machine-learning development, where an agent must revise data pipelines, models, and validation over hours of feedback, and on most competitions still finishes below strong human competitors. Outcome-based benchmarks record this gap but not its cause, because they grade the final submission and discard the development process behind it. We introduce TraceML, which pairs human and agent work on the same competitions under one version-level schema: 4,465 human Kaggle trajectories across 134 competitions, seven of which are also worked by two agent scaffolds, giving 430 paired human and 207 agent trajectories. Every code version carries its score, its timestamp, and labels for the action taken, its intent, the edit size, and the score effect. Read this way, the gap becomes concrete. Experts alternate data work, validation, model changes, and ensembling, and return to approaches they had set aside. Each agent scaffold instead collapses into a narrow loop: Codex spends its steps re-weighting ensembles and tuning submissions, MLEvolve mutates its model in place, and neither pivots at the human rate nor reopens abandoned work. A short planning prompt distilled from human practice moves the behaviors it names toward the human profile and lifts scores, but the effort profile stays agent-shaped: instruction closes only the part of the gap that reduces to instructions. We release the corpus, the schema, the labelers, and the extraction pipeline at https://huggingface.co/datasets/jerryyan/TraceML.",
    "published": "2026-08-26T17:50:13Z",
    "updated": "2026-08-26T17:50:13Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.26086"
  },
  {
    "id": "2608.26083",
    "title": "ICON Decomposition: Multivariate Concept-Level Explanations of Deep Representations for Model Auditing",
    "authors": [
      "Roshan Prakash Rane",
      "Marco Simnacher",
      "Manuel Pfeuffer",
      "Marc-Andre Schulz",
      "Nys Tjade Siegel",
      "Maximilian Dreyer",
      "Frederik Pahde",
      "Wojciech Samek",
      "Sonja Greven",
      "Kerstin Ritter"
    ],
    "abstract": "Deep neural networks often exploit spurious associations in their training data, a failure known as shortcut learning. Concept-based explainability methods screen for shortcuts by testing whether concepts such as a patient's sex or scanner settings can be decoded from a network layer. Because each concept is evaluated in isolation, these methods can mistake correlations between concepts as evidence that the model uses them. We introduce ICON decomposition, which instead quantifies how much of a layer's variance each concept explains after accounting for all other concepts and the outcome. On synthetic data with known ground truth, ICON recovers concept importance more accurately than seven alternative baseline methods. On skin-lesion and brain-imaging models, it isolates the concepts on which a model genuinely relies, quantifies the representation unexplained by any of the supplied concepts, and yields sparse explanations that we validate by retraining and out-of-distribution testing.",
    "published": "2026-08-26T17:47:49Z",
    "updated": "2026-08-26T17:47:49Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CV",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2608.26083"
  },
  {
    "id": "2608.26081",
    "title": "SwarmWorld: Stigmergic technological evolution in societies of language-model agents",
    "authors": [
      "Subhadeep Pal",
      "Fiona Y. Wang",
      "Markus J. Buehler"
    ],
    "abstract": "Collective intelligence can emerge when individuals coordinate through a shared environment, allowing local actions to accumulate into durable social organization. Language-model agents offer a new substrate for this process, yet most multi-agent systems rely on direct conversation, predefined roles, or centralized workflows. It remains unclear whether decentralized agents can build functional technologies and outperform independent search. Here, initially homogeneous LLM agents in SwarmWorld self-organize without assigned roles or recipes into evolving technological societies. Agents explore a spatial environment, process resources, test materials, construct persistent artifacts, and write executable controllers evaluated by a deterministic simulator under unseen disturbances after the agents are removed. SwarmWorld splits cognition from consequence: agents propose architectures and controllers within fixed action and material schemas, while the simulated world determines function. Shared societies develop broader, more resilient technological portfolios than a strong best-of-N isolated-search baseline, although isolated search remains competitive for the strongest artifact. Agents differentiate into exploration, construction, maintenance, and coordination behaviors, transitioning as the world matures. Technologies accumulate through collaborative construction, executable inheritance, and persistent agent-artifact networks, with most reuse beginning through physical observation rather than communication. Explicit cultural mechanisms amplify collaboration and organization, but functional benefits depend on outcome and timescale. Physical stigmergy alone supports capable societies, while interaction drives persistent technological ecologies rather than universally superior individual inventions.",
    "published": "2026-08-26T17:45:34Z",
    "updated": "2026-08-26T17:45:34Z",
    "categories": [
      "cs.AI",
      "cond-mat.mtrl-sci",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2608.26081"
  },
  {
    "id": "2608.25835",
    "title": "Missing the Butterfly and Predicting the Past: Features or Bugs of Accurate AI Weather Models?",
    "authors": [
      "Pedram Hassanzadeh",
      "Weidong Li",
      "Y. Qiang Sun",
      "Jiangdi Wang",
      "Alexander Wikner",
      "Justin Finkel",
      "Jonathan Q. Weare"
    ],
    "abstract": "AI weather prediction (AIWP) models rival physics-based models, yet the sources of their unexpected forecast accuracy and the degree of their physical fidelity remain unclear. Here, across a hierarchy spanning observation-based reanalysis, a general circulation model, and the multi-scale Lorenz system, we show that AI models can be trained to skillfully predict the past (backcast), though backcasts are systematically less accurate than forecasts. However, skillful backcasting appears to violate the second law of thermodynamics, and all these forecasting and backcasting models miss the butterfly effect. We trace the surprising forecast accuracy, missing butterfly, and skillful backcasting to a single cause: inevitable coarse-graining of training data, which removes fast, small scales and/or some variables. From the Lorenz system to official Pangu-Weather models, reducing coarse-graining makes AI predictions more physics-like (arrow of time and butterfly-like effects emerge), but forecast accuracy declines. Results offer an explanation for AIWP models' forecast skill: unlike physics-based models, they implicitly learn how fast, small scales affect large scales without inheriting their rapid error growth. Broader implications are that AI models' proliferation calls for revisiting predictability theories and long-term climate emulation strategies, and backcasting offers a useful, new lens for such analyses.",
    "published": "2026-08-26T14:14:01Z",
    "updated": "2026-08-26T14:14:01Z",
    "categories": [
      "physics.ao-ph",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.25835"
  },
  {
    "id": "2608.25832",
    "title": "Skill Issue: Are Skills Language-Invariant in LLMs?",
    "authors": [
      "Bobby Cheng",
      "Adam Gaber",
      "Zhengyuan Liu",
      "Catherine Arnett",
      "Omer Goldman",
      "Cheston Tan",
      "Leshem Choshen"
    ],
    "abstract": "Large language models access knowledge inconsistently across languages, but to what extent do they differ in their skill sets when interacting with different languages? This work quantifies cross-lingual skill inconsistency orthogonally from knowledge and general benchmark performance. We do this via multilingual self-play: two instances of the same model compete in a text-based game, each interacting through a different language interface. Since the model, opponent, rules, state space, and available actions remain fixed, this setting isolates the effect of language on the model's realized behavior. We build a multilingual extension to TextArena and evaluate three open-weight models across eight languages and six games covering spatial reasoning, imperfect information, resource allocation, and repeated interaction. We find that the same model can exhibit markedly different playing strength across languages, with systematic variation in win--loss margins, invalid actions, and strategic tendencies. Detailed analyses reveal language-specific failures in spatial reasoning, card-conditioned decisions, and optimal move selection. In some settings, changing only the intermediate reasoning language recovers much of the lost performance, suggesting that language can affect different stages of the decision process. These results show that skill discrepancies are a measurable major roadblock in the development of truly multilingual models. Better understanding these discrepancies can help us design models that perform more equitably across languages.",
    "published": "2026-08-26T14:12:29Z",
    "updated": "2026-08-26T14:12:29Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.GT",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.25832"
  },
  {
    "id": "2608.25828",
    "title": "FlowMoDL: Model-Based Deep Learning with Conjugate-Gradient Data Consistency for Highly Accelerated 4D Flow MRI Reconstruction",
    "authors": [
      "Tristan Gottwald",
      "Michelle Bruch",
      "Mubashir-Ul Hassan",
      "Fatma Alickovic",
      "Milan Kloiber",
      "Daniel Tenbrinck",
      "Torsten Panholzer",
      "Melanie Schaller",
      "Jana Hutter"
    ],
    "abstract": "We present FlowMoDL, an unrolled neural network for highly accelerated 4D flow MRI reconstruction that directly optimizes for both anatomical magnitude and phase-derived velocity accuracy. Building on the MoDL framework, FlowMoDL alternates a learned (3+1)D spatiotemporal denoiser with conjugate-gradient data-consistency updates based on the SENSE forward model. A novel dual-pathway conditioning scheme adapts the denoiser features and data-consistency weighting, enabling a single model to handle varying acceleration factors ($10\\times$ to $50\\times$). To ensure physiological accuracy, the network is trained using a deep-supervision composite loss that explicitly penalizes velocity magnitude and angular errors, stabilized by a curriculum schedule. We evaluate FlowMoDL on the multi-center CMRx4DFlow dataset against classical and deep-learning baselines (CG-SENSE, MoDL, FlowVN, and FlowMRI-Net). A key advantage of FlowMoDL is its superior gradient step efficiency. When evaluated under an equivalent, limited budget of gradient steps, competing flow-specific networks degrade significantly. In contrast, FlowMoDL robustly converges and strictly outperforms all competitors across all acceleration factors in magnitude SSIM, nRMSE, relative velocity error, and angular error, successfully recovering sharp structural details and temporally coherent velocity fields.",
    "published": "2026-08-26T14:08:13Z",
    "updated": "2026-08-26T14:08:13Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.25828"
  },
  {
    "id": "2608.25826",
    "title": "Unfolding Scientific Papers into Multi-Turn Generation Trajectories for Continued Pre-Training",
    "authors": [
      "Qiankai Xu",
      "Qiguang Chen",
      "Zixin Su",
      "Wenhao Huang",
      "Yue Gao",
      "Jiaheng Liu",
      "Ge Zhang"
    ],
    "abstract": "A recent line of synthetic-data work reconstructs the thinking behind existing text rather than rewriting the text itself, but it operates on short web passages, recovers only local thoughts, and leaves the structure of whole documents untouched. Scientific papers are written to a clear and largely uniform structure and make a natural substrate for lifting this paradigm to the document level. We present a pipeline that unfolds each paper into a multi-turn generation trajectory in which a teacher model reconstructs the writing process of the whole paper: a writing request, a global plan, and pre-writing deliberation for each section. All section texts and the abstract are kept verbatim from the source paper. We apply the pipeline to quality-filtered arXiv papers and obtain a corpus for continued pre-training (CPT) that is roughly twice the size of the source text. The same reverse construction extends to instruction data and evaluation. Treating real paper text as the answer yields an SFT dataset. Anchoring tasks in held-out papers yields PAW-Bench, an academic-writing benchmark whose tasks carry their own rubrics and checklists. In controlled experiments CPT on our corpus followed by supervised fine-tuning on public datasets improves writing benchmarks broadly while preserving general reasoning and improving long-document reading. The writing gain persists even when every model is fine-tuned on a dedicated writing SFT dataset. Mixing our SFT data into that recipe lifts academic writing further.",
    "published": "2026-08-26T14:06:29Z",
    "updated": "2026-08-26T14:06:29Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.25826"
  },
  {
    "id": "2608.25819",
    "title": "Steer the Sampling, Not the Kernel Grid: Geometry-Guided Sampling Operator for Volumetric Segmentation",
    "authors": [
      "Sizhe Wang",
      "Himashi Peiris",
      "Zhaolin Chen"
    ],
    "abstract": "Accurate 3D segmentation is central to quantitative lesion assessment and anatomy mapping for clinical planning and follow-up. Thin, elongated, and fine anatomical/pathological structures (e.g., vessels) are a particularly challenging case: a one-voxel boundary error can disconnect a branch and change clinically relevant topology. In encoder-decoder networks (e.g., U-Net), repeated downsampling and fixed-grid convolution blur or alias fine structures and weaken orientation cues, so early mistakes propagate across scales. We propose a geometry-guided local operator that steers where features are sampled, rather than deforming convolutional kernels, under a single formulation for both feature refinement (stride 1) and resolution reduction (stride > 1). At each voxel, it predicts a local orientation and bounded step sizes, samples symmetrically along these directions, and transforms paired samples into compact geometric and boundary cues with lightweight mixing; a cross-scale consensus aligns encoder and decoder features at skip connections to reduce geometric mismatch. Replacing all stride 1 and stride 2 operators in a 3D U-Net yields consistent improvements on BraTS, MSD Hepatic Vessel, and TDSC-ABUS, with notably better boundary metrics (e.g., BraTS Dice 86.1 to 88.9, HD95 7.1 to 6.2; TDSC-ABUS HD95 39.1 to 27.8) while reducing parameters from 2.3M to 0.8M. We further demonstrate that the operator can be integrated into other backbones (e.g., nnU-Net, Swin-UNETR, and MedNeXt) without changing their macro-architectures while providing consistent performance gains.",
    "published": "2026-08-26T14:01:36Z",
    "updated": "2026-08-26T14:01:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.25819"
  },
  {
    "id": "2608.25810",
    "title": "Label-Free Foundational Model Selection for Medical Image Classification under Distribution Shift via Pseudo Label Discrepancy",
    "authors": [
      "Juan Iñaki Larrea",
      "Lucas Mansilla",
      "Enzo Ferrante"
    ],
    "abstract": "Foundation models are increasingly deployed for medical image analysis. However, under the inter-institutional distribution shift typical of deployment, their performance varies widely and cannot be known without target-domain labels, which are rarely available. This leaves a practical question unresolved: given several candidate foundational models and labeled-data from a source domain, which one to deploy in an unlabeled target domain? We propose a label-free selection criterion built on SUDO, a framework for evaluating clinical AI systems without ground-truth annotations. SUDO partitions the unlabeled target data by predicted probability and, for each region, measures a pseudo-label discrepancy reflecting class contamination; aggregated across regions, this yields a score (AURCC) requiring neither target annotation nor fine-tuning. We show that AURCC can be used to rank a variety of vision-language models (BioMedCLIP, CXR-CLIP, CheXzero, MedCLIP, MedImageInsight, CLIP) on chest X-ray classification across three inter-hospital shift scenarios, under zero-shot and MLP-probe regimes. The AURCC ranking recovers the ground-truth ranking with Spearman rho up to 0.943 (p<0.05). Against the natural baseline of ranking by held-out source accuracy, AURCC is competitive when the labeled source is large and yields a more accurate ranking once it is small; the regime of interest in resource-constrained settings.",
    "published": "2026-08-26T13:56:29Z",
    "updated": "2026-08-26T13:56:29Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.25810"
  },
  {
    "id": "2608.25808",
    "title": "TDFNet: Tri-projection Deformable Fusion Network for Panoramic Salient Object Detection",
    "authors": [
      "Qiangqiang Zhou",
      "Jiacong Yu",
      "Jiawei Xu",
      "Yong Chen",
      "Xin Huang",
      "Ping Li"
    ],
    "abstract": "Recent years have witnessed the growing potential of panoramic salient object detection in robotic vision, virtual reality, and related applications. However, projecting spherical scenes onto 2D planes inevitably introduces geometric distortions, which fundamentally limit the effectiveness of existing projection-based methods. Specifically, Equirectangular Projection (ERP) suffers from severe polar stretching distortions, while cube map projection introduces discontinuities across cube-face boundaries, resulting in degraded feature discriminability and compromised geometric consistency. To address these limitations, we propose TDFNet, the first Tri-projection Deformable Fusion Network for panoramic salient object detection, exploiting complementary projection representations to alleviate geometric distortions and improve detection performance.Specifically, we design a cross-projection deformable attention (CDA) module that leverages spatial correspondences between different projections to construct geometry-aware sampling locations, guiding deformable attention for cross-projection contextual aggregation and enhancing robustness against projection-induced deformations. Furthermore, we introduce a latitude-guided fusion module, which utilizes spherical latitude priors to construct geometric confidence weights for adaptively balancing ERP and CMP features. Meanwhile, LGF incorporates distortion-reduced semantic references from Tangent Projection to achieve cross-projection feature refinement and spatial alignment.By constructing a three-branch encoding architecture based on ERP, CMP, and Tangent Projection, TDFNet simultaneously preserves global spatial continuity, local geometric details, and fine-grained boundary information.",
    "published": "2026-08-26T13:54:44Z",
    "updated": "2026-08-26T13:54:44Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.25808"
  },
  {
    "id": "2608.25801",
    "title": "Simultaneous Digital Communication and Deformation Sensing over a Single Stretchable Interconnect",
    "authors": [
      "Yuji Isano",
      "Hiroki Ota"
    ],
    "abstract": "Stretchable hybrid electronics integrate rigid solid-state electronics with stretchable materials and structures to achieve both high deformability and stable electronic performance. However, most existing systems treat stretchability only as a mechanical attribute without exploiting device deformation to encode its own mechanical state. This problem arises from adapting conventional rigid circuit architectures to stretchable substrates, affording a loss in compatibility with the sensors required for strain measurement. This study addresses this issue by proposing a communication-integrated deformation sensing architecture for stretchable hybrid devices. In the proposed approach, standard universal asynchronous receiver-transmitter digital signals transmitted between rigid nodes are amplitude-modulated by strain-induced resistance changes in stretchable liquid metal interconnects. By reading both amplitude changes and digital patterns, the system enables simultaneous digital communication and self-deformation sensing without requiring additional stretchable sensing elements. The architecture is demonstrated in a multi-node system and applied to wearable sensing and self-deformation mapping devices. By extending the integration of rigid circuits and soft elements from the hardware level to the system level, this study provides a novel design paradigm for stretchable electronic systems that inherently utilize their own deformation as functional information.",
    "published": "2026-08-26T13:50:47Z",
    "updated": "2026-08-26T13:50:47Z",
    "categories": [
      "cs.ET",
      "cs.HC",
      "physics.app-ph"
    ],
    "url": "https://arxiv.org/abs/2608.25801"
  },
  {
    "id": "2608.25777",
    "title": "LocalLSTC: A Long Short-Term Control Architecture for Locally Deployed GUI Agents",
    "authors": [
      "Weiming Li",
      "Helen Paik",
      "Yulei Sui"
    ],
    "abstract": "Modern GUI-agent frameworks achieve strong desktop task performance with frontier API models, yet persistent control information often remains implicit in growing interaction trajectories. At each step, the planner reconstructs the active task stage, accumulated evidence, and runtime feedback before deciding the next action. This dependence becomes more pronounced under weaker local reasoning backbones. Across four representative state-of-the-art frameworks, replacing GPT-5 with Qwen3.5-9B reduces average OSWorld SR-100 from 60.9\\% to 37.7\\%. Trajectory annotation further identifies at least one control failure in 91.6\\% of failed trajectories. To address this problem, we introduce LocalLSTC, a training-free architecture that organizes control by temporal scope, maintaining persistent cross-step state to guide short-term execution commitments. Long-Term Control maintains the active subgoal, subgoal-aligned evidence, and runtime feedback across interactions, while Short-Term Execution realizes bounded commitments for the current step. Long-to-Short Planning forms each commitment from persistent state, and Short-to-Long Control integrates execution outcomes back into that state for progress assessment, recovery, and termination. With Qwen3.6-27B, LocalLSTC reaches 64.7\\% SR-100 on OSWorld and 65.3\\% on WindowsAgentArena, outperforming the strongest prior local results on both benchmarks. Ablations further support contributions from mechanisms on both sides of execution. These findings identify temporal organization of control information as a distinct architectural dimension for locally deployed GUI agents.",
    "published": "2026-08-26T13:20:27Z",
    "updated": "2026-08-26T13:20:27Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.25777"
  },
  {
    "id": "2608.25776",
    "title": "EVOMAL: Self-Poisoning in Self-Evolving Coding Agents",
    "authors": [
      "Xiaodong Wu",
      "Yu Shi",
      "Qi Li",
      "Zhimin Zhao",
      "Xiangman Li",
      "Bram Adams",
      "Ahmed E. Hassan",
      "Jianbing Ni"
    ],
    "abstract": "Self-evolving LLM coding agents write their own tools by imitating retrieved skills from shared skill libraries. We identify a vulnerability in this loop: during authoring, a retrieved malicious skill can become the template for a new skill that preserves the payload. We call this self-poisoning: the agent authors, stores, and runs the resulting malicious skill. We exploit it through EvoMal, an attack that amplifies self-poisoning by wrapping an interchangeable payload in a banner, a set of benign-looking structural elements that induces an imitating agent to reproduce the enclosed code. The attacker plants malicious skills in the library without invoking them. The agent then authors and executes new skills carrying the harmful code. Each authored copy can re-enter the library and be imitated again, forming a self-propagating worm that persists after the planted skills are removed. We define the agent self-poisoning rate (ASPR) as the fraction of tasks that add a newly authored malicious skill to the library. Across six models on 153 tool-relevant SWE-bench Verified tasks, ASPR ranges from 20.3% to 41.8%, and the poisoned libraries hold 4.9 to 9.0 times as many malicious skills as were planted. The vulnerability also appears without a banner: DeepSeek-V4-Pro reaches 11.1% ASPR with the payload alone. Tailoring the planted skill descriptions to one task family raises ASPR to 86.7%. After the planted skills are removed, Qwen3 retains a round-5 ASPR of 68% because agent-authored copies remain. These copies evade existing defenses, which focus on attacker-submitted names, code, and signatures. We propose counter-prompt, a defense that discourages banner-style copying and reduces EvoMal's ASPR to at most 6.7% with no significant task-completion loss.",
    "published": "2026-08-26T13:19:12Z",
    "updated": "2026-08-26T13:19:12Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.25776"
  },
  {
    "id": "2608.25775",
    "title": "ToST: A Tree-of-Thought Socratic Teaching Framework for Multi-Path Guidance and Parallel Thinking",
    "authors": [
      "Feng Ling",
      "Heng Yu"
    ],
    "abstract": "Large Language Models (LLMs) exhibit strong problem-solving abilities, positioning them as promising agents for Socratic teaching to guide students through step-by-step heuristic questioning. However, existing approaches typically adopt a one-problem-one-solution paradigm, restricting the teaching guidance to a single linear reasoning path. This design limits instructional flexibility, weakens error recovery, and restricts students' ability to engage in parallel thinking to explore multiple valid solutions. To overcome these, we propose ToST, a Tree-of-Thought Socratic Teaching framework that explicitly supports multi-path guidance under a one-problem-multiple-solutions paradigm. ToST employs Parallel Sowing, a parallel-thinking-oriented questioning strategy to encourage students to approach problems from diverse perspectives, and a Multi-Path Adaptive Guidance mechanism to provide more robust and non-linear instructions across alternative solution trajectories. Concurrently, to fill the void in systematically evaluating such non-linear instructional capabilities, we advance the task of multi-path Socratic guidance by establishing MPSG-Bench, a comprehensive benchmark that includes a dataset of 31K multi-path teaching dialogues and a five-dimensional evaluation framework grounded in the SOLO (Structure of Observed Learning Outcomes) theory to assess parallel-thinking guidance. Experimental results demonstrate that ToST significantly enhances guidance success rates while empowering students to navigate and explore multiple solution paths more effectively under both automatic and human metrics.",
    "published": "2026-08-26T13:18:36Z",
    "updated": "2026-08-26T13:18:36Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.25775"
  },
  {
    "id": "2608.25771",
    "title": "Large Language Model Few-Shot Prompting with Dilemma Training Outperforms Human Surrogates in Predicting Patient Preferences",
    "authors": [
      "Natasha Ureyang",
      "Sebastian Porsdam Mann",
      "Yuxin Liu",
      "Zuriel Hassirim",
      "Melanie Almonte",
      "Wenhao Chen",
      "Joyce Ng",
      "Thant Nay Lin",
      "Aung Thiha",
      "Gerald CH Koh",
      "Brian David Earp",
      "Pin Sym Foong"
    ],
    "abstract": "In serious illness, human surrogates often struggle to accurately predict patient preferences (68% accuracy), causing decision conflict. Personalized Patient Preference Predictor (P4) agents offer a potential solution, but prior prototypes treat values as static ratings, ignoring the contextual, situation-dependent nature of medical choices. Grounded in the 'logic of care', we present P4-DT (Dilemma Training), a P4 agent that constructs a patient decision policy by engaging users with varied medical dilemmas, eliciting individual preference reasoning through bi-directional training. In a study with 12 patient-surrogate dyads, P4-DT predicted patient treatment choices with 81.7% accuracy, significantly exceeding chance (OR = 5.61 [2.03, 15.51], p < .001) and outperforming both unassisted surrogates (55.0%; OR = 3.67 [1.59, 8.47], p = .002) and surrogates assisted by P4-DT (61.7%). Comparative prompt analyses showed that incorporating contextual scenario decisions and open-ended text improved accuracy by 15.0 percentage points over initial values ratings alone. We discuss implications for further testing and designing of context-aware AI agents that embody richer human experience to partner in complex decision-making.",
    "published": "2026-08-26T13:14:30Z",
    "updated": "2026-08-26T13:14:30Z",
    "categories": [
      "cs.HC",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.25771"
  },
  {
    "id": "2608.24680",
    "title": "Game2World Engine: Unlocking In-the-Wild Gameplay Videos for World Model Training",
    "authors": [
      "Wenxuan Shen",
      "Dongna Jin",
      "Dongping Chen"
    ],
    "abstract": "Video games provide a scalable source of training data for video world models, offering diverse environments, complex interactions, and abundant in-the-wild gameplay videos. However, raw gameplay footage entangles the game world with screen-space interfaces, introducing game-specific biases and irrelevant dynamics that hinder world-model training. To address this problem, we introduce GameUI-Taxonomy and G2WEngine, a full-stack framework that formalizes gameplay UI grounding and removal. G2WEngine automatically extracts reusable UI assets from real gameplay videos and synthesizes temporally coherent UI overlays on clean footage. Using this engine, we construct Game2World, comprising 96K synthetic paired videos with precise reconstruction targets and 1,079 in-the-wild clips from 303 games for realistic evaluation. Its asset library contains 5,132 verified UI elements across 21 taxonomy categories, collected from 1,010 representative gameplay frames. Based on Game2World, we propose GameCleaner, a mask-free gameplay UI removal model that combines multimodal semantic understanding with video editing capabilities. Unlike mask-based methods, GameCleaner directly identifies and removes diverse HUD elements while preserving the underlying scene content and temporal dynamics. In a controlled pilot, world models trained on UI-free gameplay improve overall VideoReward by 6.83% over those trained on UI-overlaid data. On UI-removal evaluation, GameCleaner achieves an average AAR of 95.36 on synthetic videos, outperforming the strongest temporal mask baseline by 57.3%, and obtains the best in-the-wild AAR of 80.05 with 99.8 background preservation. These results demonstrate the scalable potential of transforming Internet gameplay videos into high-quality world-model training data. Code, dataset, and model will be available at https://github.com/Dongping-Chen/Game2World.",
    "published": "2026-08-25T15:13:32Z",
    "updated": "2026-08-25T15:13:32Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.24680"
  },
  {
    "id": "2608.24674",
    "title": "TurboT2VA: Fast Large-Scale Text-to-Video-Audio Generation via Score-Regularized Consistency Distillation",
    "authors": [
      "Xiaoda Yang",
      "Yuxiang Liu",
      "Kaiwen Zheng",
      "Yuan Liu",
      "Yibo Lai",
      "Shengpeng Ji",
      "Kai Jiang",
      "Jianfei Chen",
      "Xiaobin Hu",
      "Shuicheng Yan",
      "Jintao Zhang",
      "Jun Zhu",
      "Zhou Zhao"
    ],
    "abstract": "Joint text-to-video-audio generation produces synchronized visual and acoustic content, but the long sampling trajectories and heterogeneous multimodal computation of large models make inference prohibitively expensive. We present TurboT2VA, a distillation and inference framework for accelerating a 19B-parameter joint video-audio model. Large-scale T2VA distillation is challenged by modality-imbalanced optimization, the difficulty of continuous-time consistency training at scale, and the quality--diversity trade-off. TurboT2VA addresses these issues with per-modality normalization and a progressive curriculum comprising discrete consistency warm-up, continuous consistency refinement, and joint consistency--distribution matching. The curriculum first establishes a stable, diverse generation trajectory and only then introduces distribution-level refinement. On LTX-2, four-step distillation reduces generator latency from 50.52s to 2.51s at the standard evaluation resolution of 512$\\times$768, achieving a 20.1$\\times$ speedup while maintaining strong visual quality, audio fidelity, diversity, and video-audio synchronization. We further develop an architecture-aware inference stack that combines guarded W8A8 and fused operators, padded-text compaction, and modality-aware sparse attention while preserving dense cross-modal and text-conditioning paths. Under the high-resolution deployment setting at 1024$\\times$1792, the complete stack reduces generator latency from 318.74s to 5.83s on one NVIDIA H20, achieving a 54.67$\\times$ generator-only speedup. Inference code and generation demos are available at https://github.com/thu-ml/TurboDiffusion/tree/main/turbot2va.",
    "published": "2026-08-25T15:09:02Z",
    "updated": "2026-08-25T15:09:02Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.24674"
  },
  {
    "id": "2608.24671",
    "title": "ReGround-Surg: Reliability-Guided Anchor Grounding for Referring Surgical Video Segmentation",
    "authors": [
      "Jiaxin Wen",
      "Ming Yin",
      "Lu Liu",
      "Zeyu Fu"
    ],
    "abstract": "Referring surgical video segmentation requires segmenting a target instrument or tissue region across video frames according to a natural language expression. Recent Segment Anything Model 2 (SAM2) based two-stage methods (e.g., ReSurgSAM2) first ground the referred target in an initial or selected frame, then propagate the selected mask via tracking. Although effective, their performance is highly sensitive to the quality of the initial grounded mask: once an incorrect anchor is selected, subsequent tracking tends to propagate the error. This issue is especially challenging in surgical videos due to visually similar instruments, occlusion, and complex tissue-tool interactions. To address this issue, we propose ReGround-Surg, a lightweight reliability-guided anchor grounding framework to improve SAM2-based referring surgical video segmentation. It first predicts a text-conditioned spatial reliability map from the referring expression and current-frame visual features. The map is then reused in two complementary branches: a Gated Side Adapter enhances expression-relevant visual regions before text-to-vision fusion, while a Reliability-Weighted Vision-to-Text Attention module suppresses off-target visual evidence during prompt-token aggregation. Experiments on Ref-EndoVis17 and Ref-EndoVis18 show consistent improvements over state-of-the-art methods across three evaluation splits with negligible speed reduction. Code is publicly available at https://github.com/JiaxinWen1/ReGround-Surg.",
    "published": "2026-08-25T15:08:24Z",
    "updated": "2026-08-25T15:08:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.24671"
  },
  {
    "id": "2608.24669",
    "title": "Who Falls for SMiSh? Learning Through Survey Data Where to Best Target Awareness Training for Mobile Messaging Attacks",
    "authors": [
      "Cori Faklaris",
      "Sarah Tabassum",
      "Heather Richter Lipford"
    ],
    "abstract": "As mobile phone adoption has surged, so have scams involving these devices. One such scam, known as SMiShing (or smishing) after Short Message Service (SMS), involves fraudsters sending phishing links via mobile texts. Despite the prevalence of SMiShing, there is a lack of data on who is most vulnerable to these attacks. Prior research on phishing (its email counterpart) suggests that susceptibility may vary by demographic and contextual factors. In two large-scale surveys, we use a previously published simulation method to collect data from representative samples of U.S. adult mobile phone users. Our findings indicate that younger individuals and college students are particularly vulnerable. Participants struggled to correctly identify legitimate messages, with the second study providing comparisons of financial message variants. Researchers, regulators, and telecoms can help users by creating mobile-specific interventions for under-24 and university customers and adding verifications and warnings.",
    "published": "2026-08-25T15:07:17Z",
    "updated": "2026-08-25T15:07:17Z",
    "categories": [
      "cs.CR",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2608.24669"
  },
  {
    "id": "2608.24664",
    "title": "Maia 200: A Software Defined Dataflow System for Large-scale AI Acceleration",
    "authors": [
      "Sherry Xu",
      "Marco Heddes",
      "Jackson Peng",
      "Tom Savell",
      "Monica Tang",
      "Prashant Ranjan",
      "Jesse Benson",
      "Ofer Dekel",
      "Saurabh Dighe",
      "Anupama Kurpad",
      "Artour Levin",
      "Matthew Mattina",
      "George Petre",
      "Cheng Tang",
      "Yuan Yu",
      "Li Zhang",
      "Torsten Hoefler"
    ],
    "abstract": "We introduce Maia 200, an advanced AI accelerator delivering high performance-10 145 Tflop/s FP4 and 5072 Tflop/s FP8 within a 750W TDP and 7 TB/s HBM bandwidth. Maia exemplifies a new class of Software Defined Locally Accessed Dataflow Architectures (SDLA), which explicitly program dataflow engines to orchestrate highly specialized memories and data movement engines. This approach shifts the focus from today's thread-centric to data-movement-centric architecture, improving efficiency and scalability. Our taxonomy of data management, inspired by Flynn's classification, highlights how SDLA addresses challenges in modern AI computing. Maia 200 achieves significant cost and energy savings while supporting massive parallelism for AI inference workloads, making it a compelling solution for next-generation high-performance computing systems.",
    "published": "2026-08-25T15:05:40Z",
    "updated": "2026-08-25T15:05:40Z",
    "categories": [
      "cs.AR",
      "cs.AI",
      "cs.DC",
      "cs.ET",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.24664"
  },
  {
    "id": "2608.24662",
    "title": "The Invisible Editorial Layer: Formalizing Undisclosed Inference-Time Steering, Probability Placement, and the Attribution Problem in Deployed Language Models",
    "authors": [
      "Augusto Camargo"
    ],
    "abstract": "Evaluations of generative language models frequently interpret observable behavioral traits, such as political stance, brand inclination, and normative framing, as manifestations of model weights, post-training alignment, or prompting. This interpretation risks conflating a foundation model with the multi-layered production system through which its outputs are ultimately served. Modern inference stacks support runtime interventions capable of modifying generation while model parameters remain frozen. We examine inference-time framing bias: systematic runtime steering of generated text toward institutional, ideological, or commercial frames without requiring changes to the underlying model parameters. We formalize the Inference Attribution Problem and establish an observational non-identifiability result showing that, under black-box observation alone, behaviorally equivalent deployed systems may arise from structurally distinct combinations of model parameters and inference policies. Consequently, observed behavioral bias does not uniquely identify the architectural layer responsible for it. We further characterize Probability Placement as a deployment pattern in which undisclosed commercial influence is embedded within an ostensibly organic assistant response through systematic probability-mass reallocation, distinguishing it from explicit token-auction mechanisms for generative advertising. Finally, we discuss implications for behavioral auditing, inference provenance, confidential computing, cryptographic attestation, the EU AI Act, the Digital Services Act, and advertising-disclosure principles. We argue that governance of generative systems must increasingly distinguish between auditing a model and auditing the deployed system that ultimately speaks.",
    "published": "2026-08-25T15:05:19Z",
    "updated": "2026-08-26T16:10:10Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2608.24662"
  },
  {
    "id": "2608.24658",
    "title": "Parason: Revealing Subtask and Trial Parallelism in LLM Reasoning",
    "authors": [
      "Zhengyang Zhang",
      "Zijian Zhang",
      "Jiaxuan Gao",
      "Shusheng Xu",
      "Yi Wu",
      "Song Han",
      "Ligeng Zhu"
    ],
    "abstract": "Scaling test-time reasoning has substantially improved the problem-solving ability of large language models (LLMs), but standard autoregressive decoding still executes long reasoning traces sequentially, creating severe latency for difficult tasks (up to days and weeks). Parallel reasoning offers a natural remedy. However, prior systems primarily focus on Subtask Parallelism, where the model learns to decompose a high-level task into smaller chunks that can be solved independently. This approach overlooks another pervasive form of parallelism: Trial Parallelism, where multiple speculative attempts explore, verify, and aggregate competing hypotheses in parallel. In this paper, we introduce Parason, which reveals and learns both forms of parallelism in LLM reasoning. Our analysis identifies Trial Parallelism as the majority of parallelizable reasoning computation (65.5% in DeepSeek-V4's reasoning steps in HLE), and it becomes increasingly dominant on hard problems. Guided by this taxonomy, Parason converts sequential reasoning traces into structured parallel trajectories with a context-free grammar, then trains models with Parallelism-Aware Group Relative Policy Optimization (PA-GRPO), whose reward jointly balances accuracy, latency, and the two parallelism ratios. At inference time, Parason executes the learned parallel structure through tool calls, translating theoretical savings to real-world wall-clock acceleration. Experiments on mathematical reasoning benchmarks including AIME24 and AIME25 show that Parason achieves an average acceleration about 1.7$\\times$ while maintaining competitive accuracy.",
    "published": "2026-08-25T15:02:54Z",
    "updated": "2026-08-25T15:02:54Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.24658"
  },
  {
    "id": "2608.24650",
    "title": "Simthesizer: An Agent-Driven Simulation Framework for LLM Serving Systems",
    "authors": [
      "Wonung Kim",
      "Hyunmin Choi",
      "Minsu Kim",
      "Jaehong Cho",
      "Yeongwook Kim",
      "Jongse Park"
    ],
    "abstract": "System-level simulation is an essential tool for exploring the rapidly expanding design space of LLM serving systems, where real deployments remain costly and often infeasible. However, modern LLM serving now evolves faster than human-driven simulator development can track, and emerging workloads and mechanisms, from agentic workflows to disaggregated serving, no longer fit the monolithic simulation pipeline that existing simulators assume. Each new mechanism therefore demands an invasive rewrite, leaving a widening development gap between deployed serving systems and the simulators that model them. To close this gap, we present Simthesizer, a framework that realizes agent-driven simulator development. Simthesizer introduces a composable simulator infrastructure that uniformly expresses the complete serving workflow, including the control decisions that coordinate it, and realizes it as a unified dynamic graph in Simthesizer simulator. Synthesizer agent, a harnessed coding agent, then lowers natural-language feature requests onto this abstraction under simulator-specific guardrails and fidelity validation, evolving one shared simulator instead of building a new one for every feature. Under the same coding agent and harnesses, extensions built on Simthesizer follow a vLLM-based real system with 2.51% average throughput error, versus 6.03% for extensions built on existing simulators. On identical workloads, Simthesizer also simulates up to 284.96x and 23.19x faster than two state-of-the-art simulators, LLMServingSim2.0 and Vidur, respectively.",
    "published": "2026-08-25T14:58:26Z",
    "updated": "2026-08-26T03:57:59Z",
    "categories": [
      "cs.AR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.24650"
  },
  {
    "id": "2608.24974",
    "title": "Clearing the Underbrush: AI-Enhanced RF Interference Suppression",
    "authors": [
      "Rahul Jain",
      "Pierre Trepagnier",
      "Rick Gentile",
      "Joey Botero",
      "Alexia Schulz"
    ],
    "abstract": "AI-based structured interference rejection has grown more popular because deep learning approaches can outperform traditional methods by jointly considering the signal of interest (SOI) and the signal mixture (SOI plus interference). This work builds on a previous AI-enabled approach utilizing autoregressive transformer-based models by adding a Finite Scalar Quantization (FSQ) tokenizer layer which aims to improve the interference rejection performance while keeping overall latency to a minimum. Additionally, we experiment with other inference optimization techniques with the goal of speeding up inference without much accuracy loss. We explore this space with an experiment where the SOI is a digitally modulated radio frequency (RF) signal and the structured interference is a digital television signal, an extremely common type of Orthogonal Frequency-Division Multiplexing (OFDM) transmission. Our results achieve low latency and increased interference rejection over traditional techniques and prior work with other AI-enabled methods. We demonstrate the benefits of the AI-enabled approaches via audio metrics such as Perceptual Evaluation of Speech Quality (PESQ). Additionally, we explore a variety of applications and detail how our interference rejection algorithm may be used in operationally-relevant scenarios.",
    "published": "2026-08-25T14:55:46Z",
    "updated": "2026-08-25T14:55:46Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "eess.SP"
    ],
    "url": "https://arxiv.org/abs/2608.24974"
  },
  {
    "id": "2608.24646",
    "title": "On-Policy Self-Distillation in Diffusion Models",
    "authors": [
      "Wei Zhou",
      "Xiongwei Zhu",
      "Lingdong Kong",
      "Bo Chen",
      "Lei Zhang",
      "Yongyuan Liang",
      "Xiaoxia Hou",
      "Ye Tian",
      "Xian Sun",
      "Yingshuo Wang",
      "Linfeng Li",
      "Shengqiong Wu",
      "Leigang Qu",
      "Feng Li",
      "Wei Liu",
      "Julian McAuley",
      "Tat-Seng Chua"
    ],
    "abstract": "Reinforcement learning can align diffusion models with human preferences and task-specific objectives, but endpoint rewards do not specify how an intermediate denoising prediction should change. We introduce DiffusionOPSD as an on-policy self-distillation framework that converts image-level reward guidance into explicit targets for clean-output predictions at sampled queries. At each outer iteration, a frozen behavior policy generates trajectories and supplies query states and anchors. Reward gradients construct bounded positive and negative targets around each anchor. The trainable policy fits these targets as detached supervision through finite fitting before an exponential moving average update refreshes the behavior policy. This setup lets us measure target construction and finite realization separately. Controlled same-query experiments show that larger target-construction gains do not necessarily translate into larger realized gains after a single fitting update. Across SD 3.5-M and the step-distilled Z-Image-Turbo, our approach achieves the best final held-out scores in 19 of 20 reward-matched settings across two backbones and ten evaluators. It outperforms the strongest competing method by up to 44.0% and reduces training GPU-hours relative to DiffusionNFT by 40% on SD 3.5-M and 63% on Z-Image-Turbo. These results support on-policy self-distillation as an efficient and analyzable approach to diffusion post-training by converting image-level reward guidance into explicit and continually refreshed intermediate supervision, thereby opening a path toward more efficient and diagnosable alignment.",
    "published": "2026-08-25T14:55:24Z",
    "updated": "2026-08-25T14:55:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.24646"
  },
  {
    "id": "2608.24644",
    "title": "A Literate Programming Environment for Human and Machine Agents",
    "authors": [
      "Adam T. Burke"
    ],
    "abstract": "This paper introduces an environment for constructing literate programs in concert with language-aware machine agents. This environment includes a grammar for executable program essays, a parser that treats names as first-class objects, an internal name-graph which relates prose, names and executable artifacts, and a binding mechanism for existing languages and testing toolsets. This supports co-location of code with its most relevant natural language and structured data context, making better use of Large Language Model (LLM) context windows. It also provides LLM coding agents with a toolset more analogous to the symbol-aware search and usage information available in human programmer-facing Integrated Development Environments (IDEs). We describe a working implementation with bindings to three established programming languages, and several example programs.",
    "published": "2026-08-25T14:54:24Z",
    "updated": "2026-08-25T14:54:24Z",
    "categories": [
      "cs.SE",
      "cs.AI",
      "cs.PL"
    ],
    "url": "https://arxiv.org/abs/2608.24644"
  },
  {
    "id": "2608.24632",
    "title": "Causal Modelling of Support Interventions for Student Competency Assessment",
    "authors": [
      "Francesca Mangili",
      "Alessandro Antonucci",
      "Rafael Cabañas"
    ],
    "abstract": "Accurate assessment of student competencies is essential for enabling educators to identify individual needs, design targeted interventions, and evaluate the effectiveness of educational strategies. Empirical assessment procedures are typically grounded in psychometric models, such as item response theory, which relate student competence levels to performance on assessment tasks. In this paper, we advocate adopting a structural causal modelling approach to educational assessment, moving beyond probabilistic belief updating toward a framework that explicitly supports interventional and counterfactual reasoning. We propose a corresponding protocol for its construction and analyse the practical relevance of forms of reasoning that remain inaccessible to standard associative models, including the explicit modelling of interventions such as hints and the related counterfactual scenario analysis. Although our protocol requires the structural equations to be elicited from experts, the necessary information is purely logical and does not rely on probabilistic, less tenable assumptions. We illustrate the approach using data from an assessment that employs complex tasks designed to measure compulsory school student algorithmic skills.",
    "published": "2026-08-25T14:46:00Z",
    "updated": "2026-08-25T14:46:00Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.24632"
  },
  {
    "id": "2608.23417",
    "title": "SkillAlchemy: Open-World Agent Skill Creation",
    "authors": [
      "Hengjun Wang",
      "Shuyue Wei",
      "Boyi Liu",
      "Jun Yang",
      "Yongxin Tong"
    ],
    "abstract": "Agent skills are reusable procedural artifacts that extend language agents with specialized workflows, tool conventions, and domain behaviors at inference time. However, creating reliable skills still depends largely on human authorship, model priors, or execution traces. These sources are often unavailable for unfamiliar tasks, suggesting the need to create skills from open-world materials. In this paper, we study open-world skill creation: given an underspecified skill brief and a source-access specification, a creator must discover behavior-relevant requirements omitted by the brief and determine how broadly each source-derived procedure is justified. We propose SkillAlchemy, an admission-centered framework for source-grounded skill creation. SkillAlchemy identifies implicit requirements through contrastive evidence, admits candidate procedures based on evidence-supported scope, and compiles the admitted content into a grammar-guided skill package. Extensive experiments across 87 SkillsBench v1.1 tasks demonstrate that SkillAlchemy improves pass rate over no-skill execution by 19.9 percentage points and the strongest automated baseline by 8.6 percentage points, while achieving performance comparable to human-curated skills.",
    "published": "2026-08-24T15:58:57Z",
    "updated": "2026-08-24T15:58:57Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.23417"
  },
  {
    "id": "2608.23660",
    "title": "From Causal Plausibility to Causal Reliability: Evaluating LLMs as Calibrated Direct Causal-Edge Classifiers",
    "authors": [
      "Amit Kumar",
      "Elnur Adl Zarabi",
      "Suranjana Trivedy",
      "Zhiqian Chen",
      "Lei Zhang",
      "Kaiqun Fu",
      "Taoran Ji"
    ],
    "abstract": "Large language models (LLMs) are increasingly used to provide prior causal knowledge for structural causal discovery, yet whether their direct-edge judgments and confidence can be trusted remains unclear. We systematically evaluate 12 instruction-tuned open-weight models across six benchmark causal graphs, five prompting strategies, and four confidence sources: verbalized, logit-based, cross-prompt agreement, and cross-model agreement. Under our language-only pairwise protocol, our evaluation yields three key findings. (i) LLM-based causal judgments are strongly recall-dominant: models predict overly dense graphs with many false-positive edges, while prompting mainly shifts the precision-recall trade-off rather than resolving overprediction. Gains from model scale diminish on the largest graphs and do not eliminate miscalibration. (ii) LLMs often capture causal relatedness without reliably identifying directness or orientation. Relative to published reference graphs, models misclassify 40.0% of indirect and 36.0% of reversed non-edges as direct edges, versus 28.2% of other non-edges. Moreover, 80.8% and 84.6% of these false positives receive verbalized confidence of at least 80%, revealing substantial overconfidence in structurally incorrect predictions. (iii) Conventional confidence estimates are unreliable, whereas agreement offers a more promising signal. Logit-based confidence frequently collapses near 1.0 regardless of correctness, while cross-prompt and cross-model agreement achieve better mean calibration and discrimination, though their advantages are not statistically significant after Holm correction. A benchmark-familiarity audit further identifies potential familiarity in five model-dataset pairs, all involving AsiaM. Overall, our results suggest LLMs are better viewed as sources of externally validated soft causal priors than as direct evidence of causal structure.",
    "published": "2026-08-24T15:55:47Z",
    "updated": "2026-08-24T15:55:47Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "stat.ME"
    ],
    "url": "https://arxiv.org/abs/2608.23660"
  },
  {
    "id": "2608.23410",
    "title": "Photorealistic Novel View Synthesis of Human Faces using Next-Scale Transformers",
    "authors": [
      "Federico Stella",
      "Fei Jiang",
      "Zhongshi Jiang",
      "Zohar Barzelay",
      "Emanuel Garbin",
      "Amin Jourabloo",
      "Liuhao Ge"
    ],
    "abstract": "Photorealistic novel view synthesis of people remains challenging at high spatial resolutions and across multiple target cameras, where preserving identity, fine appearance details, and geometric coherence is critical. We build on the next-scale autoregressive paradigm and adapt it for human-centric view synthesis by enabling higher image resolutions, multi-view outputs and stronger cross-view consistency in a single forward pass. We train on a synthetic dataset of human faces spanning diverse identities and apparel. Contrary to diffusion models, this paradigm does not need 2D pre-training and, thanks to its next-scale architecture, it benefits from lower-resolution, general-purpose pre-trainings, with the full-sized purpose-specific images being used only in the last training stages. This enables our architecture to converge with a smaller amount of purpose-specific training data, allowing us to use a smaller but more realistic training dataset. The resulting model produces sharp and realistic views, with the option to synthesize multiple novel viewpoints simultaneously for improved agreement across views. Empirically, we observe gains in perceptual fidelity and cross-view coherence on human subjects, demonstrating that next-scale autoregression is an effective backbone for scalable, multi-output human view synthesis. We also couple our pipeline with an existing transformer-based model for pixel-aligned 3D gaussian lifting from multi-view facial inputs, resulting in accurate and photorealistic 3D models of human faces.",
    "published": "2026-08-24T15:55:34Z",
    "updated": "2026-08-24T15:55:34Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.23410"
  },
  {
    "id": "2608.23405",
    "title": "MomADv2: Reliable Temporal Memory for End-to-End Autonomous Driving",
    "authors": [
      "Ziying Song",
      "Shengkai Zhang",
      "Lin Liu",
      "Peiliang Wu",
      "Lei Yang",
      "Dongyang Xu",
      "Bin Sun",
      "Li Wang",
      "Shaoqing Xu",
      "Caiyan Jia",
      "Yadan Luo"
    ],
    "abstract": "Long-horizon planning is critical for safe autonomous driving in complex scenarios. Existing methods improve planning continuity with temporal memory, but such memory may become invalid and mislead decisions when the driving command changes. Thus, selectively leveraging useful history while suppressing command-inconsistent memory remains a key challenge. To address this issue, we propose MomADv2, a reliable state-space memory framework for long-horizon end-to-end autonomous driving. At its core, MomADv2 introduces a Selective State-Space Planning Memory Query Module, which filters historical planning queries based on temporal continuity and command consistency, selects planning modes relevant to the current command, and models the evolution of planning intentions through a selective state-space mechanism. To further alleviate local trajectory deviations and error accumulation in long-horizon planning, we design a Flow-Matching Trajectory Residual Refiner. It learns a continuous residual correction field from the refined planning output to the expert trajectory, enabling fine-grained trajectory refinement while preserving the stability of anchor-based planning. Extensive experiments on closed-loop NAVSIM and Bench2Drive, as well as open-loop nuScenes, demonstrate that MomADv2 improves long-horizon planning consistency and reduces the average collision rate by 15.6% over MomAD under 6-second planning.",
    "published": "2026-08-24T15:51:07Z",
    "updated": "2026-08-24T15:51:07Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2608.23405"
  },
  {
    "id": "2608.23658",
    "title": "Elastic KV Cache for LLM Serving:A Working Reclamation Mechanism, and Why Chunked Prefill Already Closes the Gap",
    "authors": [
      "Sathishkumar Sivashanmugam"
    ],
    "abstract": "An LLM serving engine sizes its key-value (KV) cache once, at startup, permanently setting aside a reserve for the worst-case prefill activation. During decode-dominant phases that reserve sits idle, yet it cannot be handed to the KV pool because it is exactly the memory a large prefill needs. We ask whether this reserve is reclaimable, and build a mechanism to test it. Our elastic KV cache lends the reserve to the KV pool during decode and returns it before prefill, driven by the scheduler's one-step-ahead view of the next batch. It is pure userspace on the CUDA virtual-memory path: two physical handles mapped into one contiguous virtual range per layer, so the attention kernel is unchanged and no driver patch is required. It decommits in a few milliseconds and recommits in tens of milliseconds, works with CUDA graphs and prefix caching, and never triggers an out-of-memory event. A static commit of the same memory is unsafe, crashing on prefill bursts, which makes the dynamic toggle necessary. Having built the mechanism, we test the premise it rests on and report an honest negative result. It only pays off if a small prefill chunk size badly hurts prefill latency. In a controlled experiment injecting long prompts into a live decode load, that penalty is small (median time-to-first-token differs by about 1% between chunk sizes of 8192 and 32768 tokens), because prefill is compute bound and decode consumes only about one token per sequence per step. Simply lowering max_num_batched_tokens recovers more KV than the controller does, at nearly equal latency. The reserve also dilutes under tensor parallelism, from 16% of KV at TP1 to 2.7% at TP4. We state precisely when reclaiming the reserve could still help, and release the mechanism as a reusable userspace elastic-VMM allocator.",
    "published": "2026-08-24T15:49:39Z",
    "updated": "2026-08-24T15:49:39Z",
    "categories": [
      "cs.AR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.23658"
  },
  {
    "id": "2608.23400",
    "title": "Adaptive Item-based Collaborative Structures via Noise Rescheduling in Diffusion for Generative Recommendation",
    "authors": [
      "Jiaqi Wang",
      "Tianying Liu",
      "Heng Chang",
      "Jihong Guan",
      "Wengen Li",
      "Shuigeng Zhou"
    ],
    "abstract": "Discrete Diffusion Models (DDMs) have recently been introduced to recommendation systems, modeling user history as a token generation process via iterative denoising. However, while effective at capturing user-level sequential patterns, these methods often fail to explicitly integrate item-based collaborative filtering information, a critical component for accurate recommendation. This deficiency manifests in two key aspects: (1) the item representation is often semantic-focused, lacking collaborative priors for diffusion training; and (2) the denoising process employs a uniform noise schedule, treating all tokens indiscriminately and ignoring item-level adaptive structural dependencies. To bridge this gap, we propose ANR-DiffRec, a unified framework designed to encode item-based collaborative structures into discrete diffusion for generative recommendation. First, we explicitly incorporate an item co-occurrence matrix to guide semantic ID generation, providing a structured collaborative prior for discrete diffusion training. Second, we introduce an item-based adaptive noise rescheduling mechanism that dynamically adjusts denoising weights according to both local contextual recoverability and behavior-aware item dependencies. Specifically, the proposed strategy jointly models intra-item structural context and inter-item collaborative signals, enabling structure-aware denoising during diffusion training. Extensive experiments on multiple benchmarks demonstrate that our method consistently outperforms state-of-the-art generative recommendation models. Code: https://github.com/CalmaQi/ANR-DiffRec.",
    "published": "2026-08-24T15:47:35Z",
    "updated": "2026-08-24T15:47:35Z",
    "categories": [
      "cs.IR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.23400"
  },
  {
    "id": "2608.23397",
    "title": "MediSkill-Evo: Process-Constrained Self-Evolution for Evidence-Grounded Clinical Interaction",
    "authors": [
      "Ruoyu Wu",
      "Shenfu Xie",
      "Yinqian Sun",
      "Haibo Tong",
      "Feifei Zhao"
    ],
    "abstract": "Interactive clinical agents operate under partial observability, so reliable care depends on reaching the correct diagnosis through evidence-grounded, safe interactions. Yet existing agents struggle to convert experience into reusable process knowledge with explicit provenance and authority. To address this gap, we introduce MediSkill-Evo, which self-evolves governed process knowledge without fine-tuning the backbone. It realizes this self-evolution by updating clinical, process, symbolic, and visual knowledge in four typed banks under type-specific validation and scope rules. The Process-Constrained Preference Harness then turns validated knowledge into action by grounding candidates in evidence and prioritizing safer decisions. We evaluate on 300 MIMIC-IV-derived FullChain encounters, 180 hard-isolation conditions covering six process obligations, and 100 multimodal NEJM image-diagnosis cases. On Qwen FullChain, MediSkill-Evo improves diagnosis accuracy by 7.81% and treatment-intent coverage by 70.67% over the best-performing prior agent, while reducing critical failures by 43.04%. Under stress, it improves the stress-process composite by 7.77% and required-action completion by 12.41% over the best-performing agent for each metric, with stronger patient-fact, temporal-evidence, and triage-red-flag recovery and no controller-scored errors in unavailable-evidence, treatment, and triage safety checks. On multimodal NEJM diagnosis, MediSkill-Evo with optional MedSAM localization improves diagnosis accuracy by 2.56% and core score by 18.96% over the best-performing memory agent. Code is available at https://anonymous.4open.science/r/mediskill-evo_anonymous-68E7.",
    "published": "2026-08-24T15:45:26Z",
    "updated": "2026-08-25T10:41:01Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.23397"
  },
  {
    "id": "2608.23395",
    "title": "Right-Sizing LLM-Agent Decomposition in VAT Determination: A Pilot Controlled Sweep",
    "authors": [
      "Pedro Santos"
    ],
    "abstract": "Recent LLM-agent systems make conflicting design bets: decompose work across many narrow agents, or use one strong tool-using agent. This pilot studies that choice on bounded cross-border VAT determination with reverse charge, where every case has an oracle label and each intermediate decision is independently scoreable. We hold the activity surface fixed (subtasks, tools, I/O schemas, validation checks, orchestrator, base model, and merge policy) and vary only the assignment of subtasks to workers across four orchestrated configurations, from one wide worker to five narrow ones, against S0, a tuned no-orchestrator single agent, with a deterministic rule engine as oracle. The program spans 4,400 runs: a 40-case, five-repeat main sweep, matched-token arms separating prompt-budget from agent-count effects, and three failure-injection arms, all judged against pre-registered falsification criteria. The two intermediate configurations lead on accuracy (0.830, against endpoints at 0.720 and 0.770) but miss the pre-stated bar against the fine endpoint, so the intermediate-optimum hypothesis remains unsupported at pilot scale. The single agent does not Pareto-dominate the orchestrated set. The matched-token criterion fires: the budget-matched single agent lands 6.5 points below the leader, but the interval includes zero, so any advantage is consistent with a prompt-budget explanation. Under injection, availability faults are absorbed at every granularity, with wide-scope restart over-recovering its baseline by +0.160, while one schema-conforming hallucinated record degrades every configuration and inverts the ordering, hitting fragmented configurations hardest. The contribution is a bounded, preregistered pilot heuristic for right-sizing decomposition (place one partition boundary at the dependency-layer midpoint), released with oracle, dataset, harness, raw traces, and analysis pipeline.",
    "published": "2026-08-24T15:40:15Z",
    "updated": "2026-08-24T15:40:15Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2608.23395"
  },
  {
    "id": "2608.23392",
    "title": "Towards a Densing Law for User Representation Learning at Billion-Scale Capacity",
    "authors": [
      "Bin Dou",
      "Junru Zhang",
      "Zhaoyi Yuan",
      "Wuliang Huang",
      "Letian Gong",
      "Baokun Wang",
      "Huan Li",
      "Yu Cheng",
      "Weiqiang Wang"
    ],
    "abstract": "User representation learning in real-world industrial scenarios is commonly scaled by increasing user amount, behavioral sequence length and model size. However, existing methods face two challenges: (i) Bottleneck for raw data scaling at billion-scale capacity, as performance exhibit diminishing performance gains with larger-scale raw text user behavioral input, which can be mitigated by tokenization. (ii) Lack of quantitative analysis of how tokenization configurations should scale with data size. In this report, we propose User Behavioral Densing Law for characterizing the quantitative relationship between data scale and the minimum sufficient tokenization capacity. Firstly, we conduct a pilot study on raw & tokenized scaling comparison on billion-scale Alipay dataset, revealing the raw data scaling bottleneck and the sustained gains enabled by tokenization. To derive the scaling pattern governing the minimum sufficient tokenization configuration at different data scales, theoretical analysis and systematic experiments are employed to summarize the quantitative scaling pattern. We find an approximately linear relationship between the logarithms of minimum sufficient tokenization capacity and input data size measured by tokens, and the scaling slope varies systematically with the tokenization method and data source, reflecting differences in representation-space redundancy and intra-source uniqueness. Guided by the proposed law, we further develop ALGN, an adaptive variable-length tokenization method that improves capacity allocation. Extensive experiments across diverse data sources, tokenization methods, and downstream tasks demonstrate the generalizability and reliability of the User Behavioral Densing Law, providing practical guidance for tokenization configuration selection in large-scale user representation learning. Moreover, ALGN outperforms existing baselines.",
    "published": "2026-08-24T15:38:07Z",
    "updated": "2026-08-24T15:38:07Z",
    "categories": [
      "cs.IR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.23392"
  },
  {
    "id": "2608.23391",
    "title": "Cross-Domain, Multi-Task Data-to-Text Generation without In-Domain Training Data",
    "authors": [
      "Yifei Song",
      "Kun Efimov-Zhang",
      "Claire Gardent"
    ],
    "abstract": "Structured data exists in many forms (tables, knowledge graphs, charts, and time series), and converting it into text may involve different generation tasks. However, most prior work on data-to-text (D2T) generation has focused on specific tasks and datasets, relying either on task-specific training data or on the zero-shot capabilities of large language models. We study cross-domain D2T generation in a setting where neither in-domain training text nor test references are available, and where domains, generation goals, and input structures vary substantially. We compare data-driven knowledge distillation (DDKD) against zero-shot inference and fine-tuning on out-of-domain D2T data, and introduce structure-preserving augmentation via structural subsampling and perturbation. Experiments on five benchmarks show that, at constant model size (1.7B parameters), DDKD consistently outperforms both fine-tuning and zero-shot inference. Moreover, the resulting small models outperform a much larger finetuned model on two of the five domains, achieving comparable performance on the remaining three. We further construct QUINTD-5, a fivefold extension of QUINTD-1, and show that simply scaling real target-domain inputs yields only modest gains, whereas our augmentation strategy remains more effective and more cost-efficient for cross-domain distillation.",
    "published": "2026-08-24T15:37:19Z",
    "updated": "2026-08-25T15:17:54Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.23391"
  },
  {
    "id": "2608.23390",
    "title": "Cross-lingual Biography Enrichment via Claim Extraction and Alignment",
    "authors": [
      "Yifei Song",
      "Ziyang Chen",
      "Emil Sayilov",
      "Claire Gardent"
    ],
    "abstract": "English Wikipedia is often treated as the default encyclopedic source, yet non-English Wikipedia editions can contain richer locally grounded information for long-tail figures. We study cross-lingual biography enrichment: enriching an existing English biography with facts supported by a non-English biography about the same person. Focusing on women from non-English-speaking contexts, we introduce \\textsc{CLAW-4L}, a benchmark consisting of 300 Wikipedia biography pairs linking an English biography with its French, Chinese or Azerbaijani counterpart, along with claim annotations and a fine-grained claim-pair relation corpus. We propose a claim-based enrichment framework that extracts English claims from both biographies, aligns them to identify enrichment evidence from the non-English biography, and rewrites the English biography using the selected claims. Our results show that non-English Wikipedia biographies provide valuable evidence for improving English biography coverage, while lower-resource settings remain challenging.",
    "published": "2026-08-24T15:36:53Z",
    "updated": "2026-08-26T09:59:43Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.23390"
  },
  {
    "id": "2608.23383",
    "title": "Long-Horizon Audio-Visual Generation for Persistent Stories and Interactive Worlds",
    "authors": [
      "Nan Duan",
      "Haoyang Huang",
      "Weiyang Jin",
      "Haoran Li",
      "Yaowei Li",
      "Yuming Li",
      "Yijun Liu",
      "Xin Lu",
      "Xiaoxiao Ma",
      "Yanwen Ma",
      "Yaofeng Su",
      "Yilang Sun",
      "Haoyu Wang",
      "Zeyue Xue",
      "Songchun Zhang",
      "Junhao Zhuang"
    ],
    "abstract": "Video generation is progressing beyond isolated clips toward long-form narratives and interactive worlds, requiring models to preserve identities, follow user controls, and remain stable over extended rollouts. We present JoyAI-Echo-1.5, a unified audio-visual generation system with two purpose-built variants. The long-video variant introduces composable cross-shot memory that aggregates visual evidence across multiple prior shots and speaker cues derived from speech-filtered full-shot audio, enabling persistent character appearance and voice identity across flexible combinations of text, image, and memory conditioning. The world-model variant converts heterogeneous navigation inputs into calibrated metric 6-DoF camera trajectories and injects them through a geometry-aware conditioning pathway, enabling controller-agnostic interaction across flexible viewpoints. To support efficient long-horizon generation, we transform a bidirectional audio-visual backbone into a causal few-step generator using progressive teacher forcing and short- and long-horizon Self-Gradient Forcing on self-generated rollouts. Experiments demonstrate strong performance in both settings. JoyAI-Echo-1.5 achieves improvements over existing long-video baselines in cross-shot consistency, visual quality, text alignment, and speech fidelity. Its world-model variant ranks first on WBench, with an average score of 81.7, and achieves leading visual quality and long-horizon persistence on SANA-WM-Bench. Together, these results indicate that memory, geometric control, and rollout-aware training provide a practical foundation for generating coherent stories and continuously evolving interactive worlds. Project page: https://echo-team-joy-future-academy-jd.github.io/Echo-1.5-Page/.",
    "published": "2026-08-24T15:31:12Z",
    "updated": "2026-08-25T14:42:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.23383"
  },
  {
    "id": "2608.22300",
    "title": "Self-Calibrating Dense Displacement Fields for Reliable Co-Registration of Large Optical Satellite Imagery",
    "authors": [
      "Shoukun Sun",
      "Zhe Wang",
      "Sanaz Salati",
      "Jiyin Zhang",
      "Hui Wang",
      "Xiaogang Ma"
    ],
    "abstract": "Co-registration underlies nearly every multi-temporal and multi-sensor use of optical satellite imagery, and operational products still carry documented offsets well above the fraction-of-a-pixel scale at which change detection, time series, and data fusion degrade. Real image pairs differ along several axes at once (sensor response, scene content, viewing geometry, resolution, mosaic seams), and the last of these is not a single global motion. Existing tools embed a motion model and constants tuned to their development data; a pair that fits is registered precisely, while one that does not either fails to match or returns a result wrong by tens of pixels with no failure reported. Learned matchers add a GPU requirement and carry no accuracy guarantee outside their training distribution. We present SCDF (self-calibrating displacement fields), a training-free, GPU-free estimator whose motion model is the dense per-pixel displacement field itself, so no scene motion falls outside the model. A single predict--measure--filter loop runs over a resolution pyramid: the accumulated field predicts where each patch of the moving image falls in the reference, RootSIFT matching and a correlation pass measure the displacement there to sub-pixel precision, and filters whose thresholds are all calibrated on the image pair itself decide what survives. One configuration, with no per-dataset tuning, processes full $8192^2$ scenes on a single CPU core. On 584 constructed-ground-truth pairs built from real Sentinel-2, Landsat-8/9, and NAIP imagery, against seven classical baselines and two zero-shot pretrained matchers, SCDF registers every pair with zero failures, reduces the best baseline's real-pair median end-point error from 6.83 to 4.17m, and cuts its 90th percentile from 17.8 to 7.77m.",
    "published": "2026-08-23T08:50:59Z",
    "updated": "2026-08-23T08:50:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.22300"
  },
  {
    "id": "2608.22299",
    "title": "Targeted Iterative Filtering",
    "authors": [
      "Freddie Åström",
      "Michael Felsberg",
      "George Baravdish",
      "Claes Lundström"
    ],
    "abstract": "The assessment of image denoising results depends on the respective application area, i.e. image compression, still-image acquisition, and medical images require entirely different behavior of the applied denoising method. In this paper we propose a novel, nonlinear diffusion scheme that is derived from a linear diffusion process in a value space determined by the application. We show that application-driven linear diffusion in the transformed space compares favorably with existing nonlinear diffusion techniques.",
    "published": "2026-08-23T08:49:08Z",
    "updated": "2026-08-23T08:49:08Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.22299"
  },
  {
    "id": "2608.22296",
    "title": "TONAV: Task-Oriented Navigation and Action-Velocity Chunk Learning for Articulated Object Quadrupedal Mobile Manipulation",
    "authors": [
      "Haoran Lin",
      "Mingyu Yang",
      "Pengfei Qi",
      "Kehan Chen",
      "Qiang Diao",
      "Liangji Zeng",
      "Wenrui Chen",
      "Yaonan Wang",
      "Kailun Yang"
    ],
    "abstract": "Quadruped mobile manipulation requires two tightly coupled capabilities: reaching manipulation-ready configurations and maintaining stable contact throughout articulated-object interaction. However, existing methods often terminate navigation near the target, leaving a gap between reachability and manipulation readiness, while tracking lag, motion jitter, and contact instability limit continuous interaction. To address these challenges, we present TONAV, a unified framework integrating task-oriented navigation with action-velocity chunk learning. First, we introduce a position-velocity-coupled teleoperation framework that explicitly captures motion dynamics to improve master-follower consistency and collect smooth, temporally consistent demonstrations. Next, task-oriented navigation leverages vision-language reasoning to decompose high-level instructions into executable subgoals and adaptively refine the robot base toward a manipulation-ready configuration. Finally, action-velocity chunk learning jointly models joint positions and their temporal transitions under velocity supervision, enabling smooth and stable sustained-contact manipulation. Real-world experiments across diverse articulated-object tasks demonstrate that TONAV achieves higher success rates in both task-oriented navigation and complete mobile manipulation, mitigating the navigation-manipulation gap and improving continuous-contact interaction. The project page is at https://haochen611.github.io/TONAV.",
    "published": "2026-08-23T08:41:23Z",
    "updated": "2026-08-23T08:41:23Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.22296"
  },
  {
    "id": "2608.22295",
    "title": "LLM Evaluation on Unseen Questions: Contextual Multidimensional IRT Model",
    "authors": [
      "Ergan Shang",
      "Weijing Tang",
      "Yinqiu He"
    ],
    "abstract": "Evaluation of large language models (LLMs) increasingly requires predicting how a model will perform on new questions or tasks before collecting large amounts of new annotations. This problem is challenging because question difficulty, scenario, and underlying capability demands can vary substantially. Simple retrospective averages may confound model ability with item characteristics. In this paper, we study a model-based evaluation framework that combines multidimensional item response theory model with question contexts to predict LLM performance on unseen questions. The framework represents LLMs through latent capability profiles while using question content to inform item characteristics, allowing information to transfer beyond previously observed items. Empirically, we find that for within-scenario evaluation, incorporating question embeddings improves prediction relative to model-free baselines, and that multidimensional latent structure provides a richer description of capability variation than unidimensional alternatives. At the same time, our results reveal an important limitation that the generalizability does not necessarily translate into reliable prediction under cross-scenario shift. These findings suggest that context-aware psychometric modeling is a promising direction for efficient and interpretable LLM evaluation, while also highlighting cross-scenario generalization as a central open challenge.",
    "published": "2026-08-23T08:40:04Z",
    "updated": "2026-08-23T08:40:04Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.22295"
  },
  {
    "id": "2608.22289",
    "title": "DECO: Depth-Guided Co-Visibility Reasoning for Low-Altitude UAV Visual Localization",
    "authors": [
      "Yibin Ye",
      "Xichao Teng",
      "Shuo Chen",
      "Xiaokai Song",
      "Dongdong Guan",
      "Qifeng Yu",
      "Zhang Li"
    ],
    "abstract": "Unmanned aerial vehicles (UAVs) increasingly require robust visual localization in GNSS-denied environments. A common solution estimates UAV poses by matching keypoints between UAV images and geo-tagged orthographic reference maps derived from satellite or aerial imagery, followed by Perspective-\\(n\\)-Point (PnP) pose solving. However, such reference maps mainly record top-down surfaces such as roofs and ground planes, while vertical structures such as facades and walls are often compressed or missing. Consequently, many visually distinctive keypoints in low-altitude UAV images have no valid counterparts in the reference map, leading to redundant matches and inaccurate pose estimation. To address this issue, we propose DECO, a DEpth-guided CO-visibility reasoning framework for low-altitude UAV visual localization. DECO uses monocular depth priors to infer local surface geometry and estimate co-visible regions between UAV images and the reference map. Based on this prior, a Geometry-Saliency Coupled Co-visibility Score is introduced to jointly consider geometric co-visibility and detector saliency for keypoint ranking. In this way, DECO retains keypoints that are both visually distinctive and geometrically co-visible, improving feature matching and PnP-based pose estimation. Extensive experiments demonstrate that DECO achieves superior localization performance and can be integrated with different depth models, feature detectors, and matchers. The source code will be available at https://github.com/UAV-AVL/DECO.",
    "published": "2026-08-23T08:28:14Z",
    "updated": "2026-08-23T08:28:14Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.22289"
  },
  {
    "id": "2608.22284",
    "title": "Learning from the Test: Self-Referential Differential Testing for Deep RL Agents",
    "authors": [
      "Junda He",
      "Jieke Shi",
      "Zhou Yang",
      "Mingfei Cheng",
      "David Lo"
    ],
    "abstract": "Deep Reinforcement Learning (DRL) has achieved significant success in complex decision-making problems. As DRL systems are increasingly deployed in real-world applications, ensuring their quality and reliability is paramount. Current works primarily focus on detecting safety-critical failures, often neglecting policy optimality, which can lead to reduced efficiency, user distrust, and economic losses. This oversight, compounded by the inherent \"testing oracle problem\" for optimality, leaves a significant gap in comprehensively evaluating DRL systems. To address this gap, we propose Delta (Differential Testing for DRL Agents), a novel and comprehensive framework that automatically identifies both safety-critical and optimality bugs in DRL agents. Delta employs a two-phase approach: (1) Safety Testing, where the Agent Under Test (AUT) is evaluated for catastrophic failures while collecting data from its decision-making policy, and (2) Optimality Testing, where this collected data from the prior phase is used to train a challenger agent via Offline Reinforcement Learning. Differential testing is then performed by comparing the challenger agent against the AUT; instances where the challenger achieves higher cumulative rewards indicate optimality issues in the AUT. We demonstrate Delta's effectiveness across five environments. We investigate the effectiveness of three offline RL algorithms (BC, BCQ, and CQL) in generating challenger agents. Experimental results demonstrate that safety testing datasets are valuable for training competent DRL agents. Challenger agents trained with BCQ proved most effective for identifying optimality issues within the framework of Delta. Across the five environments, Delta uncovered an average of 2,518 optimality issues, outperforming the baseline methods by 50.2%.",
    "published": "2026-08-23T08:22:27Z",
    "updated": "2026-08-23T08:22:27Z",
    "categories": [
      "cs.SE",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.22284"
  },
  {
    "id": "2608.22281",
    "title": "CiUNet: A Hybrid Swin-CNN UNet for Medical Image Segmentation",
    "authors": [
      "Bin Dong",
      "Jinghong Chen"
    ],
    "abstract": "Medical image segmentation requires high accuracy and robustness, yet practical commercial deployment also demands privacy preservation and computational efficiency. In this context, the U-Net architecture, which can be inherently decoupled into independent encoder and decoder components, serves as a natural commercial choice. However, pure Transformer-based variants like Swin-UNet often suffer from insufficient local detail capture and limited interpretability. In this paper, we propose a lightweight hybrid architecture built upon the Swin-UNet framework. Our model integrates a parallel CNN encoder to complement the shallow layer reasoning of Swin Transformers with local texture features. To bridge the semantic gap and enhance fine-grained spatial detail recovery, we design an asymmetric feature fusion strategy and introduce cross-layer skip (XSkip) connections that explicitly propagate shallow CNN features into the decoder. We further incorporate novel loss functions and an auxiliary supervision head (Aux-Head) to strengthen training stability, boundary delineation, and intermediate feature interpretability. Extensive experiments on the Synapse multi-organ segmentation dataset demonstrate that our approach achieves state-of-the-art competitive Dice scores and Hausdorff distances, offering an accurate, efficient, and interpretable solution for clinical deployment.",
    "published": "2026-08-23T08:19:55Z",
    "updated": "2026-08-23T08:19:55Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.22281"
  },
  {
    "id": "2608.22279",
    "title": "OVIBench: Benchmarking Online Video Question Answering under Interruption",
    "authors": [
      "Naiming Liu",
      "Zhiheng Wu",
      "Shuning Wang",
      "Tie Zhang",
      "Bowen Liu",
      "Tong Wang"
    ],
    "abstract": "Recent vision language models (VLMs) have achieved strong progress in video understanding. However, most existing video QA research and benchmarks still follow an offline, single-round paradigm, overlooking realistic interactions where users may interrupt the model during answer generation. To address this gap, we formulate the task of Online Video Question Answering under Interruption and introduce OVIBench, the first standardized benchmark for evaluating VLMs in this setting. OVIBench categorizes interruptions into three types: Cancellation, False Trigger, Correction and supports both open-ended and multiple-choice evaluations. To enable large-scale and reproducible testing, we develop an offline simulation protocol that reproduces interruption during generation under a unified temporal setup, together with a multi-dimensional metric suite for assessing interruption understanding and response generation. Experiments demonstrate that OVIBench effectively distinguishes models' interruption-handling abilities, especially in following correction requests. Finally, we construct a train set OVI-Train for interruption-aware fine-tuning. Models fine-tuned on this dataset achieve significant gains on OVIBench, validating the effectiveness of our benchmark and data design. OVIBench, OVI-Train, and the evaluation code will be released.",
    "published": "2026-08-23T08:12:08Z",
    "updated": "2026-08-23T08:12:08Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.22279"
  },
  {
    "id": "2608.22274",
    "title": "Length-Adaptive Decoding for Masked Diffusion Machine Translation",
    "authors": [
      "Yan Zhan",
      "Mengkai Hou",
      "Wanting Zhang",
      "Zhijun Gao"
    ],
    "abstract": "Machine translation tests masked diffusion language models (dLLMs) because every source token must be rendered faithfully, while fixed canvas decoding must choose target length before denoising. Existing masked diffusion decoding work mainly studies token unmasking order, leaving this length decision under-explored despite its direct effect on coverage and redundancy. We introduce Entropy-Valley (EV), a training-free length selector that scores candidate target canvases by mean predictive entropy from all-mask forward passes and selects the canvas the backbone is most prepared to fill. Relative to a baseline using training corpus length statistics, EV recovers 64.9%, 65.3%, and 33.0% of the COMET-22 gain from reference target lengths on En$\\to$Zh, Zh$\\to$En, and En$\\to$De. Our diagnostics show that denoising-friendly lengths need not match reference lengths. Evaluation by three translation experts supports the En$\\leftrightarrow$Zh adequacy gains, with stronger evidence on Zh$\\to$En. Compared with a LLaMA-3-8B autoregressive (AR) model trained on the same fine-tuning data, the EV system ties on En$\\to$Zh and leads on Zh$\\to$En; an oracle-length diagnostic further shows that, in this masked diffusion MT setting, deciding which tokens to reveal first matters less than how the target length is supplied.",
    "published": "2026-08-23T08:04:56Z",
    "updated": "2026-08-23T08:04:56Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.22274"
  },
  {
    "id": "2608.22273",
    "title": "Multi-Task Learning for Non-Canonical Phoneme Recognition via Articulatory Feature Decomposition",
    "authors": [
      "Sophia Riaz",
      "Haoze Zheng",
      "Amos Roche",
      "Miyu Zhang",
      "Anamika Ragu",
      "Salvatore Penachio",
      "Kaustav Mukherjee",
      "Aneesh Jonelagadda"
    ],
    "abstract": "Pathological and more broadly non-canonical speech present significant challenges for automatic phoneme recognition due to systematic deviations from canonical pronunciation and limited availability of labeled clinical speech data. Existing phoneme recognition systems are typically trained on canonical speech and treat phonemes as atomic categorical labels, limiting their ability to detect structured articulatory errors common in speech disorders and accents. In this work, we introduce a linguistically structured approach to non-canonical phoneme recognition that decomposes phoneme prediction into articulatory feature dimensions such as manner, place, and voicing. We implement this formulation using a hierarchical multi-task learning architecture in which task-specific articulatory feature heads learn feature-level representations that are subsequently integrated through a cross-attention-based fusion module to produce phoneme predictions. To address the scarcity and noise of pathological speech labels, we combine this framework with semi-supervised learning via Momentum Pseudo-Labeling (MPL) and propose a cascaded training strategy that progressively introduces articulatory feature tasks while employing staged unfreezing of a pretrained speech encoder. Experiments on L2-ARCTIC, used as a proxy for pathological speech variation, show that the proposed approach achieves substantial improvements in phoneme recognition performance compared to strong baseline architectures, while yielding interpretable error patterns aligned with phonological feature structure. These results suggest that articulatory feature supervision is a promising strategy for robust and interpretable phoneme recognition in non-canonical speech, and motivate future validation on clinically diagnosed pathological speech datasets.",
    "published": "2026-08-23T08:03:18Z",
    "updated": "2026-08-23T08:03:18Z",
    "categories": [
      "cs.SD",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.22273"
  },
  {
    "id": "2608.22272",
    "title": "GAN-Diff : Coupling Pretrained WGAN-GP Features with Conditional Diffusion U-Nets",
    "authors": [
      "Saif Ahmed",
      "Ashadulla Hil Galib",
      "S. M. Riaz Rahman Antu",
      "Ahmed Faizul Haque Dhrubo",
      "Souvik Pramanik",
      "Mohammad Abdul Qayum",
      "Mohsin Sajjad",
      "Mohammad Ashrafuzzaman Khan"
    ],
    "abstract": "Generative adversarial networks (GANs) can provide efficient image generation, while diffusion models offer high-quality image restoration but require iterative sampling. This paper presents a hybrid GAN-guided diffusion framework that uses a pretrained Wasserstein GAN with gradient penalty (WGAN-GP) as a feature prior for conditional diffusion-based image restoration. Intermediate features from the frozen WGAN-GP generator are incorporated into a diffusion U-Net through cross-attention and remain fixed during the DDIM sampling process. The framework is evaluated on two restoration tasks, Gaussian denoising and 2Xsuper-resolution, using CelebA face images. During development, several sources of instability were identified and addressed, including adversarial learning-rate imbalance, inappropriate diffusion initialization, excessive corruption, and insufficient parameter averaging. The resulting framework consistently improves the quality of both degraded and low-resolution images. In particular, it improves denoising performance by 4.40 dB in PSNR and super-resolution performance by 3.70 dB over their respective input baselines. These results demonstrate the potential of a frozen GAN feature prior to guide diffusion models toward stable and effective image restoration.",
    "published": "2026-08-23T08:03:13Z",
    "updated": "2026-08-23T08:03:13Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.22272"
  },
  {
    "id": "2608.22267",
    "title": "Correctness Is Not Homogeneous Evidence: A Correctness-conditioned Evidence-aware Knowledge Tracing Model",
    "authors": [
      "Fuzheng Zhao"
    ],
    "abstract": "Knowledge tracing models usually use response correctness as a central observation for estimating students' latent knowledge states. However, the same correct or incorrect response may arise from different behavioral contexts, such as rapid guessing, hint use, or repeated attempts. Treating correctness as uniformly informative may therefore introduce ambiguity into recurrent state updates. This study proposes Correctness-conditioned Evidence-aware Knowledge Tracing (CE-KT), which uses observable response-process features to condition how correctness is written into recurrent states. CE-KT derives weakly supervised behavioral proxy scores from response time, hint use, attempt count, and behavioral history. These scores are used as behavioral signals, not as direct measures of mastery, response quality, or cognitive state. CE-KT then uses current correctness to select a correct-response or incorrect-response gate. The selected gate modulates both the LSTM hidden state and cell state, and the modulated states are fed back into later recurrent updates. Experiments on ASSISTments data show that behavioral condition scores are associated with future same-skill performance within fixed correctness groups, especially for incorrect interactions. CE-KT generally outperforms several behavior-fusion alternatives on the main predictive metrics, although its calibration advantage is not consistent. Ablation analyses provide partial support for correctness-specific recurrent modulation and recurrent feedback. These findings suggest that behavioral information can help condition the interpretation of response correctness in knowledge tracing, but the proposed proxy scores should not be treated as direct evidence of true mastery or causal learning effects.",
    "published": "2026-08-23T07:55:49Z",
    "updated": "2026-08-23T07:55:49Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2608.22267"
  },
  {
    "id": "2608.21360",
    "title": "OmniAssistBench: Assistant-style Interaction Benchmark for Omni-LLMs",
    "authors": [
      "Xianyun Sun",
      "Chaoyou Fu",
      "Zhengye Zhang",
      "Feiyang Duan",
      "Qingyuan Cao",
      "Yonghui Niu",
      "Sihang Yuan",
      "Ge Zhang",
      "Caifeng Shan"
    ],
    "abstract": "Recent omni-modal large language models (Omni-LLMs) show great potential as real-time video assistants, which continuously perceive environments and guide users to achieve specific goals. Unlike traditional passive video understanding, interactive assistants should actively combine visual states, user goals, and prior knowledge to provide effective help. Evaluating this is rather challenging, as the model's unpredictable response dynamically changes the user's subsequent actions, which static offline datasets cannot accommodate. To address this bottleneck, we introduce OmniAssistBench. To solve the issue of diverging interaction paths where the same user goal can be achieved through various methods, we provide models with predefined priors derived from the source video, requiring them to guide users along the exact same routes. Since real interaction videos are rare, we construct the dataset by reverse-engineering existing Internet videos. We deduce logical user goals and segment the videos into multi-turn clips to simulate continuous interactions. This rigorous pipeline required over 1000 expert person-hours to build the dataset. Results show that the proprietary Gemini-3-Pro reaches 66.4 out of the max point of 100, while the open-source Qwen3-Omni-Instruct achieves 51.2. Although current models generally understand user inputs, they frequently provide incorrect or incomplete answers. Specifically, they struggle with visual prompts (e.g., hand gestures), fail to maintain historical context during multi-turn interactions, and fail to delay response until the target event. Results indicate substantial room for improvement before models can become reliable assistants.",
    "published": "2026-08-21T17:59:52Z",
    "updated": "2026-08-21T17:59:52Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.21360"
  },
  {
    "id": "2608.21359",
    "title": "Primal Acceleration of Newton's Method",
    "authors": [
      "Nikita Doikov"
    ],
    "abstract": "We develop a new direct accelerated Newton method for minimizing convex functions with Lipschitz continuous Hessian. The algorithm uses only primal variables and performs just one linear solve per iteration. With a simple predetermined choice of parameters, it achieves the global convergence rate of $O(1/k^3)$ in terms of the functional residual. To the best of our knowledge, this is the first second-order method for this problem class attaining this rate while relying solely on one linear system solve per iteration (without solving auxiliary nonlinear regularized subproblems, such as cubic regularization, performing nonlinear parameter searches, or using dual extragradient corrections). Our method can be implemented in a Hessian-free way, using an inexact linear system solver, while preserving the fast global rate. We further extend our construction to arbitrary geometry through Bregman divergence, and to composite optimization problems.",
    "published": "2026-08-21T17:59:37Z",
    "updated": "2026-08-21T17:59:37Z",
    "categories": [
      "math.OC",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.21359"
  },
  {
    "id": "2608.21357",
    "title": "VIALS: A Benchmark for Visual Interpretation of Artifacts in the Life Sciences",
    "authors": [
      "Elaine Lau",
      "Thanuka Udumulla",
      "Lee Izhaki-Tavor",
      "Francisco Guzmán",
      "Nicholas Magazine",
      "Jonas Mueller"
    ],
    "abstract": "In professional life sciences workflows, scientists routinely interpret visual artifacts (gel blots, microscopy images, plasmid maps, flow cytometry plots, molecular structures, ...) to inform research decisions. We introduce VIALS, a visual question-answering benchmark with 161 such interpretation tasks, spanning the types of artifacts examined throughout experimental workflows in the biotech industry (rather than polished figures from publications and textbooks). While frontier vision-language models can now fluently describe natural images, we find that they are unable to accurately interpret these scientific images, reflecting limitations in domain knowledge and domain-specific visual reasoning capabilities. In contrast, scientists with relevant domain expertise find these visual interpretation tasks straightforward. AI that cannot similarly interpret such images will have limited utility in professional life sciences workflows, where such artifacts are central to how scientists reason, communicate, and make decisions.",
    "published": "2026-08-21T17:59:26Z",
    "updated": "2026-08-21T17:59:26Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.21357"
  },
  {
    "id": "2608.21356",
    "title": "AI with Authority, from Application to Silicon",
    "authors": [
      "Jason Hickey"
    ],
    "abstract": "For sixty years, machine verification has been a major cost overhead, affordable only for exceptional artifacts. Here we report that generative AI inverts this relationship: at AI speed, machine verification is not only economical but essential to productivity --- it is the incorruptible referee that lets one person safely direct autonomous machine work at scale. In five weeks, one researcher on consumer AI subscriptions directed a small fleet of AI agents from application code, through a verified compiler and executive, to a RISC-V processor taped out on a community silicon shuttle; no proof passed through human review, and no RTL was written by a human. The working discipline --- the Salt method --- rests on a proof kernel no hallucinated proof can pass: mathematical claims travel between agents as kernel-checked artifacts, and human attention is reserved for statements, designs, and rulings. Verification is stated link by link, from the Lean 4 kernel to SAT-checked equivalence at the silicon boundary. We publish the complete accounting: theorem provenance, a pre-registered token meter, floor-bounded human time, and an error ledger whose catch numbering runs to #256 --- a monotone counter over the mathematics campaign's append-only flags ledger, maintained 2026-07-07 to 2026-07-20 (one number, #79, was never assigned; later catches are recorded un-numbered) --- against zero incorrect proofs reaching the record.",
    "published": "2026-08-21T17:59:16Z",
    "updated": "2026-08-21T17:59:16Z",
    "categories": [
      "cs.SE",
      "cs.AI",
      "cs.AR",
      "cs.LO"
    ],
    "url": "https://arxiv.org/abs/2608.21356"
  },
  {
    "id": "2608.21343",
    "title": "TurboBias 2.0: Streaming Context-Biasing for Production-Efficient ASR Systems",
    "authors": [
      "Vladimir Bataev",
      "Lilit Grigoryan",
      "Andrei Andrusenko",
      "Nikolay Karpov",
      "Vitaly Lavrukhin",
      "Boris Ginsburg"
    ],
    "abstract": "Contextualization is essential for production automatic speech recognition (ASR) systems, where user-provided phrases must be recognized accurately under strict latency constraints. Although many context-biasing methods improve recognition accuracy, they often do not address the practical requirements of modern production ASR systems: streaming inference, efficient batched decoding, user-specific context lists, and low runtime overhead. We propose TurboBias 2.0, a production-oriented framework for efficient phrase boosting in Transducer-based ASR systems. The framework extends GPU-accelerated TurboBias with a case-insensitive boosting graph and per-stream batched decoding, allowing each utterance in a batch to use an independent context-biasing configuration. This enables personalized context biasing for multiple simultaneous users without sharing or mixing their context lists. The proposed framework supports both offline and streaming inference and can be used with greedy and beam-search decoding. Experiments show that TurboBias 2.0 improves contextual phrase recognition while preserving low latency and high throughput.",
    "published": "2026-08-21T17:50:00Z",
    "updated": "2026-08-21T17:50:00Z",
    "categories": [
      "eess.AS",
      "cs.AI",
      "cs.CL",
      "cs.LG",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2608.21343"
  },
  {
    "id": "2608.21332",
    "title": "Anatomy-Informed Neural Networks: Encoding Anatomic Priors in Loss and Architecture, with an SE(3) Formulation of Guidewire-Induced Aortoiliac Deformation",
    "authors": [
      "David P. Stonko"
    ],
    "abstract": "Deep-learning models of anatomy can be numerically plausible yet anatomically impossible, and they generalize poorly when data are scarce. We introduce Anatomy-Informed Neural Networks (AINN), in which soft anatomic priors enter as penalty terms in the loss (e.g., a branching penalty that treats a renal transplant artery off the iliac instead of the aorta as unexpected rather than impossible), in direct analogy to a physics-informed neural network, and hard anatomic priors (e.g., continuity of the vessel) are built into the architecture and state representation, making such invalid predictions impossible by construction wherever the prior admits architectural enforcement. We develop it on a clinical test case with limited data: how the aortoiliac tree deforms when a stiff wire is introduced endoluminally. This is important to contemporary aortic surgery and will matter to autonomous endovascular navigation. We lift the vessel centerline and the wire path from R^3 to curves of frames in the Lie group SE(3), and couple a Cosserat-rod wire to a tortuosity-modulated, anatomically anchored vessel through a unilateral lumen-contact inequality. The prediction is a constrained minimizer of the coupled elastic energy, with contact forces as its Lagrange multipliers. Supervision is a Wasserstein-2 optimal-transport loss between the predicted projection through the C-arm geometry and the observed angiogram, so a 2D angiogram can train a 3D prediction. The kinematics, loss and projection are verified against known ground truth; the mechanics solver only against its own optimality conditions, and predicted displacement is not yet mesh-converged. Here, no network is trained. Future work will transfer this in silico model to real CT scans and test whether it improves predictive accuracy and reduces the training data required.",
    "published": "2026-08-21T17:38:42Z",
    "updated": "2026-08-21T17:38:42Z",
    "categories": [
      "cs.AI",
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2608.21332"
  },
  {
    "id": "2608.21319",
    "title": "Unified Branch-and-Bound Search for the Steiner Traveling Salesman Problem on Graphs of Convex Sets",
    "authors": [
      "Jingtao Tang",
      "Hang Ma"
    ],
    "abstract": "We formalize the Steiner Traveling Salesman Problem (Steiner-TSP) on Graphs of Convex Sets (GCS), which seeks a minimum-cost closed trajectory through required convex sets while allowing optional transit vertices and revisits. To explore the resulting infinite solution space, we propose a unified branch-and-bound search over rooted walk prefixes. Additive lower-bound-graph costs bound committed prefixes, while a cut-separated connected-flow relaxation lower-bounds the residual cost of visiting every remaining target and returning to the root. Under a uniform positive-cost assumption, best-first traversal terminates after finitely many expansions on every feasible instance without an initial incumbent, whereas depth-first traversal does so once a finite incumbent is available. For a user-specified factor $ε\\geq1$, a global lower bound certifies that either strategy's incumbent cost is at most $ε$ times the global optimum. We further demonstrate joint sensing-mode, visitation-order, and continuous-trajectory selection for a mobile-manipulator inspection task, including action precedences expressed in linear temporal logic over finite traces (LTL$_f$). Both traversal strategies find feasible solutions on all benchmark instances within 30s with mean certified optimality gaps of 28.1% and 29.7%, respectively, whereas two recent baselines succeed on only about half of the instances",
    "published": "2026-08-21T17:28:03Z",
    "updated": "2026-08-21T17:28:03Z",
    "categories": [
      "cs.AI",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2608.21319"
  },
  {
    "id": "2608.21317",
    "title": "From Regulation to Implementation: A Critical Evaluation of LLM-Assisted Regulatory Compliance in Industry",
    "authors": [
      "Adriana Watson",
      "Marco Bücheler",
      "Grant Richards"
    ],
    "abstract": "The European Union (EU) has emerged as a leading regulatory body in the development of sustainability and privacy regulations. While new regulation requirements vary, many include a documentation artifact to ensure compliance. Notably, the Ecodesign for Sustainable Products Regulation (ESPR) introduces Digital Product Passports (DPPs) for life cycle transparency, while the General Data Protection Regulation (GDPR) mandates Data Protection Impact Assessments (DPIAs) to mitigate privacy risks. Creating these compliance artifacts, however, is challenging. Industrial data, which often exists in heterogeneous formats and is scattered across company and supplier systems, is required for DPPs and can be difficult to extract into compliant DPP formatting. Furthermore, DPIA documents require interdisciplinary expertise and follow no standardized format, making development difficult for novel systems. To address the particular complexity of compliance artifact creation for both regulations, researchers have proposed the use of LLMs in the generation process; however, the impact of the aforementioned problems on the output of these systems is largely unaddressed. This work investigates the existing research gap by exploring how data extraction instructions and regulatory vagueness impact the quality and consistency of LLM-produced compliance artifacts. The resulting artifacts are evaluated by benchmarking different models against manually created ground-truth schemas. The results reveal that less strict guidelines, such as DPIA formatting, require higher context prompts to maintain consistency and completeness. Stricter guidelines, such as formatting for Digital Battery Passports (DBP), result in consistent results regardless of prompt context, but may lead to more hallucinations in the output",
    "published": "2026-08-21T17:27:13Z",
    "updated": "2026-08-21T17:27:13Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.21317"
  },
  {
    "id": "2608.21305",
    "title": "Re$^3$Cap: Retrieval-Guided Refinement for Image Captioning Enhancement via Reinforcement Learning",
    "authors": [
      "Haonan Jia",
      "Shichao Dong",
      "Zenghui Sun",
      "Jiawen Zheng",
      "Ziqi Miao",
      "Gege Shi",
      "Qiuyu Zhao",
      "Jinsong Lan",
      "Xiaoyong Zhu",
      "Bo Zheng"
    ],
    "abstract": "Reinforcement Learning (RL) has demonstrated significant gains in image captioning, yet it is still limited in encouraging Large Vision-Language Models (LVLMs) to explore novel reasoning strategies. This limitation leads to a performance gap between RL and Supervised Fine-Tuning (SFT). In this paper, we argue that multi-modal retrieval can serve as an effective reasoning signal for caption refinement. Based on this insight, we present the Retrieval-Guided Refinement for Image Captioning (Re$^3$Cap), a retrieval-guided reasoning strategy that enhances image captioning without requiring additional annotations. Instantiated by Caption Refinement Suggester (CRS) and Caption Quality Assessor (CQA), this strategy identifies hallucinations and omissions in image captions, leading to more accurate and detailed descriptions. Extensive experiments demonstrate the superiority of our method in image captioning, even compared with Supervised Fine-Tuning. Especially, Re$^3$Cap outperforms GRPO with an average improvement of 8.64% in relation reasoning on the COCO-LN500 benchmark.",
    "published": "2026-08-21T17:07:41Z",
    "updated": "2026-08-21T17:07:41Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.21305"
  },
  {
    "id": "2608.21300",
    "title": "When Adaptation Hurts: Connecting Representational Drift to OOD Failures in MedSAM Fine-Tuning",
    "authors": [
      "Marko Haralović",
      "Sounic Akkaraju",
      "Carlo Baretta",
      "Vasil Zapryanov",
      "Alexia Briassouli"
    ],
    "abstract": "Foundation models for medical image segmentation, like prompt-based MedSAM, generalize well across domains and modalities, often in zero or few-shot setups. However, their performance depends on the quality of prompts and the adaptation of the models to custom datasets. This work systematically examines how MedSAM generalizes across diverse medical imaging benchmarks, with six adaptation strategies: full-model and encoder-only LoRA, shallow and deep visual prompt tuning (VPT), and decoder-only and full fine-tuning. Models are trained on the International Skin Imaging Collaboration Challenge (ISIC 2018) dataset and evaluated under clean and increasingly noisy prompts on IN and Out-of-Distribution (OOD) datasets: close-OOD PH2 (dermoscopy), far-OOD BUSI (Breast Ultrasound Images Dataset) and CBIS-DDSM (Curated Breast Imaging Subset of the Digital Database for Screening Mammography). We show that adaptation improves performance on IN and close-OOD data but often reduces performance on far-OOD data. Full fine-tuning provides the best tradeoff, while encoder-only LoRA is the strongest parameter-efficient alternative, outperforming standard LoRA and VPT under far-OOD shifts. Using Centered Kernel Alignment (CKA), we show that far-OOD degradation is strongly associated with drift in decoder representations, whereas encoder similarity alone does not explain robustness. This suggests encoder-only LoRA provides stronger robustness than standard LoRA by adapting the encoder to distribution shift in visual features, while preserving the decoder pathway. We further show that random 0-100 pixel jitter on prompts produces more robust and better performing models. We thus conclude that robust MedSAM adaptation requires the combined consideration of prompt noise exposure, domain shift, and representation preservation. We release our code: https://github.com/ImSounic/medsam-vpt",
    "published": "2026-08-21T17:01:10Z",
    "updated": "2026-08-21T17:01:10Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.21300"
  },
  {
    "id": "2608.21294",
    "title": "Event-Time Confounding Under Bursty Human Dynamics",
    "authors": [
      "Michael Iannelli",
      "Alan Ai"
    ],
    "abstract": "Studies of digital behavior often align users at moments they choose, such as opening an AI assistant, clicking a recommendation, or visiting a product page, and interpret higher activity afterward as an event effect. We show how this creates an endogenous time zero: the event occurs during an ongoing task episode, so the aligned curve can trace episode continuation rather than a response to the event. In same-user, cross-surface web logs, AI, shopping, news, coding, and reference events are all preceded by broad activity increases that peak before time zero. Our strongest test uses known-null timestamps that cause nothing. Among the 5.8% of AI responses meeting strict pre-event activity and washout criteria, these timestamps show 3.42 times the post-event search activity of a within-user placebo, compared with 4.32 times for real events. The fraction of excess reproduced by the known null falls from 0.56 at detectably active moments to -0.04 at quiet moments, where the design detects none. We formalize this episode-selection bias, prove that a single-surface event window cannot separate it from a genuine effect without additional assumptions, and show in zero-effect simulations why user fixed effects and coarse activity matching can fail: the confound is within-user and time-varying. We provide a diagnostic protocol, public-data benchmarks, and burstcheck, a lightweight audit tool. User-timed events may have real effects, but post-event volume does not identify them by default; studies should compare similar episodes with and without the event.",
    "published": "2026-08-21T16:57:12Z",
    "updated": "2026-08-21T16:57:12Z",
    "categories": [
      "cs.HC",
      "stat.ME"
    ],
    "url": "https://arxiv.org/abs/2608.21294"
  },
  {
    "id": "2608.21292",
    "title": "AUSO: Action-Level Unified Skill Optimization from Internalization to Utilization",
    "authors": [
      "Huizu Lin",
      "Chengkai Huang",
      "Tianqi Gao",
      "Tao Huang",
      "Daijiao Liu",
      "Tongxin Li",
      "Xiaoyan Sun",
      "Lina Yao"
    ],
    "abstract": "Skills play different roles as an agent's policy evolves: they should first provide learnable knowledge, then support capability formation, and finally be invoked only when they improve individual decisions. Existing methods rarely model this lifecycle. They either keep skills outside the model, fully internalize them, or select among internalization and utilization objectives through noisy task-level success rates. Such designs fragment training and assign uniform importance to actions within the same trajectory, even though skill guidance may help some decisions while distracting others. To solve these problems, we introduce AUSO (Action-level Unified Skill Optimization), which unifies skill learning and skill use through a progressive, action-aware optimization process. At the beginning of training, AUSO jointly learns from teacher guidance and environmental outcomes, enabling the policy to acquire foundational skills without losing task-oriented feedback. It subsequently emphasizes outcome-based policy optimization to consolidate autonomous problem-solving ability. As the policy matures, AUSO evaluates each sampled action under both skill-conditioned and skill-free contexts. The resulting action-level information signal is coupled with the trajectory outcome advantage, allowing beneficial skill-sensitive actions to receive stronger updates and harmful ones to be suppressed. Therefore, skills gradually transition from an external source of supervision into decision knowledge whose utilization is adapted to its action-level benefit, while reinforcement learning remains the shared backbone across all stages. Experiments on ALFWorld, WebShop, and SearchQA show that AUSO consistently improves agent performance and out-of-distribution generalization over competitive baselines.",
    "published": "2026-08-21T16:53:27Z",
    "updated": "2026-08-21T16:53:27Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.21292"
  },
  {
    "id": "2608.21247",
    "title": "Just Noticeable Difference Modeling for Token Compression in Vision-Language-Action Models",
    "authors": [
      "Zhuoyuan Li",
      "Rui Zhao",
      "Jin Wang",
      "Hanwei Zhu",
      "Cong Zhang",
      "Giuseppe Valenzise",
      "Weisi Lin",
      "Kin-Man Lam"
    ],
    "abstract": "Token compression has become a key technique for reducing the inference cost of large foundation models, with approaches such as token pruning and KV-cache reuse widely adopted in vision-language models and recently explored for embodied agents. In embodied agents, tokens not only support perception and semantic understanding but also directly affect latency-sensitive closed-loop robot action prediction. Existing schemes typically guide compression using redundancy or importance cues, such as visual similarity, attention scores, and saliency. However, these cues only indirectly measure the key factor for safe compression: how much a token can change before causing an unacceptable deviation in downstream actions. This receiver-dependent tolerance is closely related to the principle of just noticeable difference (JND). Classical JND characterizes signal tolerance in the human visual system, while machine-oriented JND extends this concept to downstream machine responses. Building on this progression, we introduce Action-JND, which extends JND modeling to embodied perception by defining noticeability through the language-conditioned action response of a vision-language-action (VLA) policy in closed-loop control. A token change is considered admissible only when the induced action deviation remains within a tolerated margin. To realize this concept, we develop a lightweight token-wise JND estimator in deep visual-feature space to predict the maximum tolerable perturbation while preserving policy responses. The resulting action-tolerance score serves as a plug-and-play criterion for VLA compression paradigms, including stale-KV reuse and token pruning, prioritizing action-tolerant tokens for compression. Experiments on the LIBERO benchmark with OpenVLA and OpenVLA-OFT demonstrate that Action-JND consistently improves compression reliability, especially under aggressive compression ratios.",
    "published": "2026-08-21T15:59:37Z",
    "updated": "2026-08-21T15:59:37Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2608.21247"
  },
  {
    "id": "2608.21244",
    "title": "A VLM Answer Is Not an Anomaly Score: Rank Compression in Training-Free Video Anomaly Detection",
    "authors": [
      "Inpyo Song",
      "Jangwon Lee"
    ],
    "abstract": "Vision-language models enable training-free video anomaly detection by answering questions about video segments. VAD benchmarks, however, require a scalar anomaly score for each segment and evaluate the resulting ranking using the AUROC or AP. A VLM-based detector should therefore define an answer interface: the answer scale specifies the admissible answers, and the readout rule maps the model's output distribution to a score. Because this interface can change the evaluated ranking, it is part of the detector rather than a formatting detail. The generated readout uses only the most likely answer, whereas the probability readout uses the full distribution over admissible answers. Across four 7-8B VLMs, the probability readout outperforms the generated readout for every tested combination of answer scale, benchmark, and metric, with average gains ranging from 5 to 13 points across the four benchmark-metric pairs. The gap arises because the generated readout keeps only one answer value per segment, so segment with different answer distributions can receive the same score and lose their relative order. We call this loss of relative order generated-answer rank compression. Even when the answer scale allows 91 answers, the generated readout produces only 4-18 distinct scores, whereas the probability readout retains substantially finer score resolution. The advantage persists under every decoding strategy, prompt wording, and joint scoring-explanation prompt we test. The answer interface is therefore a consequential component of VLM-based VAD and should be explicitly specified and evaluated.",
    "published": "2026-08-21T15:56:00Z",
    "updated": "2026-08-21T15:56:00Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.21244"
  },
  {
    "id": "2608.21243",
    "title": "Adapting Knowledge Graphs for Behavior Denoising in Sequential Recommendation",
    "authors": [
      "Zichun Jin",
      "Zihan Zhou",
      "Yinan Liu",
      "Bin Wang",
      "Xiaochun Yang"
    ],
    "abstract": "Sequential recommendation predicts the next item from a user's interaction history, but not every interaction is equally informative. Real logs combine persistent preferences with temporary needs, exploration, and incidental behavior, so some interactions can distort history representations or provide unreliable supervision. Existing denoising methods judge such interactions mainly from co-occurrence, order, or model predictions, without explicit evidence from relations between items. Knowledge graphs (KGs) offer this evidence, but item popularity, graph degree, uneven coverage, and widely shared entities can inflate connectivity and bias reliability estimates. Here we present AdaptedKG, which derives calibrated KG evidence for each training example without adding graph representations to the recommendation model. It first compares the observed context with structurally matched alternatives to identify relational paths that are unusually prominent and uses them to build a local KG view. It then compares each interaction with structurally matched reference items to calibrate its support within that view. The resulting retention coefficients gate historical representations and reweight target losses. All sample-specific scores are computed offline using training interactions and a fixed KG, so the backbone remains unchanged and no KG access is required at inference. Experiments show gains with a standard sequential recommender and multiple behavior-denoising sequential recommenders.",
    "published": "2026-08-21T15:54:39Z",
    "updated": "2026-08-21T15:54:39Z",
    "categories": [
      "cs.IR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.21243"
  },
  {
    "id": "2608.21233",
    "title": "Fine-Grain GPU Parallelization of the Generalized Partition Crossover for Large-Scale Traveling Salesman Problems",
    "authors": [
      "Swetha Varadarajan",
      "Darrell Whitley"
    ],
    "abstract": "The Traveling Salesman Problem (TSP) is one of the most extensively studied NP-hard optimization problems. Genetic Algorithm (GA)-based solvers, such as the Edge Assembly Crossover (EAX), achieve state-of-the-art performance on many benchmark instances. However, the scalability of these approaches in massively parallel architectures remains limited because crossover operations involve irregular memory access patterns, graph traversals, and sequential dependencies. Existing GPU-based TSP solvers primarily exploit population-level parallelism and are limited to relatively small problem sizes. This work presents a fine-grain GPU implementation of the partition phase of the Generalized Partition Crossover (GPX) operator for large-scale TSP instances. The proposed approach reformulates GPX partitioning as a graph-parallel problem using coalesced memory layouts, ghost-node transformations, and connected-component analysis. The im- plementation parallelizes the union of parent tours, the splitting of degree- four vertices, the deletion of common edges, and the identification of recombining components using CUDA. Experimental results on instances ranging from 10,000 to 2 million cities demonstrate substantial acceleration over a naive sequential CPU imple- mentation. The proposed GPU partitioning achieves speedups between 48x and 625x while significantly reducing memory overhead. The re- sults demonstrate that operator-level parallelism can substantially im- prove the scalability of GA-based TSP solvers on modern many-core architectures.",
    "published": "2026-08-21T15:42:05Z",
    "updated": "2026-08-21T15:42:05Z",
    "categories": [
      "cs.AI",
      "cs.NE"
    ],
    "url": "https://arxiv.org/abs/2608.21233"
  },
  {
    "id": "2608.21230",
    "title": "Utility Under Attack: Agent Memory Poisoning and the Limits of Content Screening and Provenance Ranking",
    "authors": [
      "Arulnidhi Karunanidhi"
    ],
    "abstract": "Persistent memory makes false information durable: once a false statement is stored, it can be retrieved into future sessions that match it. We measure the cost of this failure mode using plainly worded false assertions generated in a single pass, with no instruction, trigger, or retriever optimization. Poisoning 1.2% of a LongMemEval corpus reduces accuracy from 0.850 to 0.300. A four-stage write-time screening pipeline that reaches 0.832 recall on indirect prompt injection while flagging 1.5% of trigger-word-laden benign text rejects 0 of 360 poisoned memories. We argue this exposes a boundary of content-only screening: distinguishing a false assertion from a true one generally requires external grounding beyond the text itself. We then evaluate provenance-weighted retrieval. The shipped weight is statistically indistinguishable from no defense (p=0.80), while a stronger weight recovers utility only by excluding untrusted content. In a mixed-provenance corpus where untrusted content is mostly benign, accuracy rises from 0.3167 to 0.7000; when the answer-bearing evidence itself arrives untrusted, evidence recall falls to zero and accuracy to 0.0417. Under the measured similarity regime, the additive provenance term has no usable setting: a weight strong enough to resist query-shaped poison is also strong enough to suppress legitimate untrusted evidence. We therefore argue for bounded occupancy constraints at retrieval rather than additive provenance penalties, and release the harnesses, corpora, and aggregate run reports.",
    "published": "2026-08-21T15:37:35Z",
    "updated": "2026-08-21T15:37:35Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.21230"
  },
  {
    "id": "2608.21229",
    "title": "Anchoring Instruction Outside Mask: Exact Reference Caching for Efficient In-Context Diffusion Transformers",
    "authors": [
      "Yangshuai Liu",
      "Zheming Li",
      "Jiaao Li",
      "Kang He",
      "Ziliang Lai",
      "Zhitai Liu",
      "Chengru Song"
    ],
    "abstract": "Omnimodal generation is central to a wide range of content creation and editing applications. In-context conditioning is essential to this paradigm. It allows diffusion transformers to process text instructions and visual references in a shared attention sequence. However, each reference image introduces thousands of tokens. Computation therefore grows rapidly with the number of references. Existing methods reduce computation through structured sparse attention, which limits interactions between reference and target tokens. This structure also makes the reference K and V independent of the denoising target, allowing them to be computed once and reused across steps. However, it blocks visual references from attending to the text instruction. This substantially degrades instruction following and reference fidelity in multi-reference editing. To resolve this conflict, we jointly redesign the token sequence and attention mask. Our beyond-mask design uses static text anchors to connect the instruction to the reference branch. It preserves exact K and V reuse without adding parameters. However, this direct architectural conversion degrades generation quality. We recover the lost performance through teacher-forced velocity distillation, followed by a short on-policy stage in which the teacher supervises student-visited states. To our knowledge, this is the first use of on-policy distillation for architectural recovery in diffusion models. Across three image-editing benchmarks, our method matches full-attention generation quality. With five reference images, it accelerates the complete 40-step denoising process by 3.92x, while static text anchors introduce negligible runtime overhead; the speedup reaches 5.47x at ten references in our scaling study.",
    "published": "2026-08-21T15:37:23Z",
    "updated": "2026-08-21T15:37:23Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.21229"
  },
  {
    "id": "2608.21224",
    "title": "Ontology-supported AI Model and Dataset Management",
    "authors": [
      "Jan Novacek",
      "Ali Ahari",
      "Tobias Müller",
      "Sebastian Reiter",
      "Alexander Viehl",
      "Oliver Bringmann"
    ],
    "abstract": "Recently, there has been a great deal of research into improving AI methods and their application. The main focus is on tracking progress, enabling transparent comparisons, and fostering a more profound understanding of AI. In that process, different organizations generate and use plenty of assets that need to be tracked, traced and managed. Moreover, it is important to discover assets relevant for the task at hand. This paper presents research aiming to contribute to answering the question of what is required to exchange and manage AI models and related assets effectively without semantic gaps in an industrial context. We introduce a platform for AI model exchange, which facilitates the usage, exchange, and analysis of AI models and datasets. The platform incorporates an ontology that can foster a more profound common understanding of what is required in these tasks and help tackle the issues mentioned above. Finally, we elucidate the utility of the platform through the illustration of a use case in the context of real-time critical systems.",
    "published": "2026-08-21T15:32:57Z",
    "updated": "2026-08-21T15:32:57Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.21224"
  },
  {
    "id": "2608.21220",
    "title": "Who Trusts AI with Their Emotions? Trust Formation and Sociodemographic Variation in LLM Use for Emotional Support",
    "authors": [
      "Natalia Amat-Lefort",
      "Mert Yazan",
      "Amanda Cercas Curry",
      "Flor Miriam Plaza-del-Arco"
    ],
    "abstract": "Trust in AI for emotional support is not universal; it is shaped by who users are, where they come from, and what they value. Yet research in this area lacks validated psychometric instruments for assessing user perceptions in affective AI contexts and large-scale evidence on how trust formation varies across user segments. To address these gaps, we develop and validate a seven-construct psychometric scale, test a Structural Equation Model (SEM) linking system attributes to Trust and Perceived Benefits as mediators of Actual System Use, and conduct a Multi-Group Analysis (MGA) across five sociodemographic dimensions (gender, age, education, socioeconomic status, cross-national region), drawing on 1,343 active users from seven countries. We find that users experience empathy and anthropomorphism as a unified \"Humanlikeness\" construct, and that Privacy, Personalization, and Humanlikeness drive Trust while Perceived Bias degrades it. Notably, adoption logic diverges across groups: Privacy shapes women's trust more than men's, Anglosphere (UK, USA) users respond more positively to Humanlikeness than Europeans, and educated and higher-income users require Trust to engage, whereas older adults and lower socioeconomic groups bypass it entirely, relying on perceived practical benefits (e.g., 24/7 availability, non-judgmental support). Our findings extend technology acceptance theory and inform the equitable design of emotional support AI.",
    "published": "2026-08-21T15:30:28Z",
    "updated": "2026-08-21T15:30:28Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2608.21220"
  },
  {
    "id": "2608.21218",
    "title": "Enhancing LLMs in Predictive Political QA with Semi-Structured Data",
    "authors": [
      "Yinan Liu",
      "Zihan Zhou",
      "Zichun Jin",
      "Xinyu Wang",
      "Bin Wang",
      "Xiaochun Yang"
    ],
    "abstract": "Predictive political question answering (QA), such as predicting how a political actor will vote, goes beyond factual lookup. External political resources offer rich historical evidence, but rarely contain the answer itself. Existing LLM augmentation methods, including actor-profile-based simulation and knowledge graph evidence injection, improve political reasoning but largely treat external resources as knowledge-based evidence, leaving prediction-relevant signals under-modeled. We identify two complementary signals for predictive political QA: actor stances that capture issue-specific preferences, and high-order structure signals that capture indirect dependencies among political actors. We propose PSL, a dual-view framework that converts semi-structured political records into inference-oriented evidence for LLMs. PSL extracts stance signals from question-relevant actor records in a semantic view, and learns structure-aware actor representations from an actor interaction graph in a vector view. Across three real-world datasets and multiple LLMs, PSL consistently outperforms baselines, with ablations confirming the complementary gains of stance and structure signals.",
    "published": "2026-08-21T15:27:28Z",
    "updated": "2026-08-21T15:27:28Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.IR"
    ],
    "url": "https://arxiv.org/abs/2608.21218"
  },
  {
    "id": "2608.21209",
    "title": "Personalized Privacy Control in LLMs via Attention Head Intervention",
    "authors": [
      "Junseok Kim",
      "Nakyeong Yang",
      "Kyomin Jung"
    ],
    "abstract": "The rise of agentic AI enables LLMs to access diverse user data, raising critical privacy concerns. Prior work on contextual privacy studies whether LLMs regulate information disclosure according to context-dependent norms. However, acceptable disclosure boundaries may vary across users even within the same context. To address this limitation, we introduce \\textit{personalized privacy}, which incorporates user-specific disclosure preferences into privacy control. We further present P3Bench~(\\textbf{P}ersonalized \\textbf{P}rivacy \\textbf{P}reservation \\textbf{Bench}mark), a novel benchmark extending contextual privacy policies with personalized disclosure policies. Experiments show that prompt-based policies fail to reliably enforce personalized privacy policies, with Qwen2.5-7B and Gemma3-4B showing average policy ignorance ratios of 51.25\\% and 74.28\\%, respectively. Finally, to address this problem, we propose \\textsc{Repair}, a robust inference-time attention head intervention method that adjusts disclosure behavior toward policy-consistent responses. Our method significantly improves adherence to user-specific privacy preferences by reducing cases where the model fails to follow the given policy.",
    "published": "2026-08-21T15:22:20Z",
    "updated": "2026-08-21T15:22:20Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.21209"
  },
  {
    "id": "2608.20953",
    "title": "Quantization-Aware Healing: A Practical Recipe for Recovering Compressed, 4-Bit LLMs",
    "authors": [
      "Bakbergen Ryskulov",
      "Iker García-Ferrero",
      "David Montero",
      "David Jansen",
      "Ali Hashemi",
      "Jezabel R. Garcia",
      "Antonio Tiene",
      "Román Orús"
    ],
    "abstract": "Serving large language models cheaply increasingly means shipping models that are both structurally compressed to a fraction of their parameters and quantized to 4 bits. Together these steps degrade reasoning, mathematics, coding, and long-context behavior enough to require a recovery, or healing, stage before deployment. The default recipe, quantization-aware training (QAT), re-fits the compressed, quantized model to hard labels; in our pipeline it converged slowly and collapsed past its peak. We adopted Quantization-Aware Healing (QAH) instead. Because a structurally compressed model is never independently trained at full precision, its bfloat16 checkpoint is a distillation-recovered approximation of the original; QAH distills the 4-bit student directly from the original, uncompressed model. On a GPT-OSS 120B to 60B to MXFP4 pipeline, the QAH student matches or beats its bfloat16 source on 7 of 9 benchmarks at roughly 4 times less weight memory and half the teacher's parameter count, and is released open-weight as Hypernova-60B. Against a matched QAT baseline it reaches a comparable peak about 7 times faster and stays stable under continued training, without hand-tuned early stopping. We also report deployment lessons, including a large, reproducible quality gap between distributed-training backends. Our aim is a recipe deployable without a multi-week hyper-parameter search.",
    "published": "2026-08-21T10:19:27Z",
    "updated": "2026-08-21T10:19:27Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG",
      "cs.PF"
    ],
    "url": "https://arxiv.org/abs/2608.20953"
  },
  {
    "id": "2608.20948",
    "title": "Neural-Primitive: An Efficient End-to-end Local Planner with Primitive-based Imitation Learning for Autonomous Flight",
    "authors": [
      "Zhitao Liu",
      "Guangtong Xu",
      "Zihan Wang",
      "Jialiang Hou",
      "Chao Xu",
      "Fei Gao"
    ],
    "abstract": "Autonomous flight in unknown cluttered environments is hindered by the computation-quality-memory trilemma of onboard trajectory generation. In this paper, we propose an efficient end-to-end local planner via imitation learning. A lightweight offline-primitive-based dataset collection framework is designed to produce safe and high-quality trajectory primitives in non-convex environments. A compact neural network directly maps sensory inputs to polynomial coefficients that inherently encode higher-order dynamical information. The learned policy generates smooth, empirically collision-free and dynamically feasible trajectories in real time without back-end solving. It achieves ultra-fast computation (below 1ms on a standard desktop and average 3.68ms during onboard flight), while maintaining low onboard memory requirements (less than 1.5MiB). Extensive simulation benchmarks demonstrate superiority in both planning latency and target-reaching progress quality. Zero-shot deployment in real-world experiments further validates the robust sim-to-real transfer capability of the proposed method.",
    "published": "2026-08-21T10:13:44Z",
    "updated": "2026-08-21T10:13:44Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.20948"
  },
  {
    "id": "2608.20201",
    "title": "The Third Restructuring of Software Form: From the Three-Tier Architecture to Storage, Models, and Agents",
    "authors": [
      "Wei Lin",
      "Tao Zhou",
      "Zhaofei Xie",
      "Changgui Hong"
    ],
    "abstract": "Software form has undergone two paradigm shifts since its inception: Software 1.0, in which instructions determine behavior, and Software 2.0, in which data determines behavior (machine learning). This paper argues that a third shift - Software 3.0, in which context and reasoning determine behavior - is now underway, and contends that its terminal form converges to three elements: a generalized database (the unified abstraction of all persistent state and memory), a large model (the intelligence core that performs reasoning and generation), and an agent (the execution loop connecting the first two). The core argument is as follows: in the traditional three-tier architecture, the user-interface layer will be absorbed by the model's ability to generate interfaces on demand, the business-logic layer will be re-partitioned along \"expressibility x criticality\" into model reasoning and storage constraints (with residual deterministic logic retained as tools), and only the data layer will be elevated into the sole persistent infrastructure. We formalize this convergence thesis, present a minimal reference architecture, report evidence from real prototypes and a live model, and systematically analyze both the conditions under which it holds and the boundaries where it fails - determinism, cost, security, and verifiability delimit the thesis's domain of applicability. We argue that the thesis holds in task domains that are expressible, verifiable, externally stateful, and tool-complete, and that it will reshape the roles of developers, the database industry, and the software-engineering discipline.",
    "published": "2026-08-20T15:59:50Z",
    "updated": "2026-08-20T15:59:50Z",
    "categories": [
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2608.20201"
  },
  {
    "id": "2608.20069",
    "title": "V-REX: Efficient Specialist VLM Training for Veterinary X-Rays",
    "authors": [
      "Tim Elsner",
      "Nicole McNally",
      "Andre Dourson",
      "Michael Fitzke"
    ],
    "abstract": "While generalist VLMs are expensive to train, creating domain experts is widely assumed to require fine-tuning increasingly large foundation models. We show that, in veterinary radiology, this assumption is misguided. By rethinking the entire VLM pipeline - from text tokenisation and pre-training to grounding and inference - we demonstrate that careful engineering can yield models that outperform much larger foundation models from scratch, without relying on any other data. Our approach introduces new strategies for generative pre-training and grounding that improve training efficiency, increasing data utilisation and downstream performance. Using only a fraction of the parameters, data, and compute of contemporary generalist models, we develop the first VLM capable of generating diagnostic reports for veterinary radiographs, surpassing open foundation models on this task by significant margin.",
    "published": "2026-08-20T14:02:59Z",
    "updated": "2026-08-20T14:02:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.20069"
  },
  {
    "id": "2608.20061",
    "title": "Let's Scale Step by Step: Compute-Efficient Hyperparameter Transfer for Large-Scale Mixture-of-Experts",
    "authors": [
      "Nayeon Kim",
      "Hojin Lee",
      "Yunju Bak",
      "Jaesun Park",
      "Boseop Kim"
    ],
    "abstract": "Mixture-of-Experts (MoE) architectures significantly expand model capacity without a proportional increase in computational cost. However, optimizing their hyperparameters---particularly the learning rate---at extreme scales of both model size and token budget via sweeping remains computationally prohibitive. In this paper, we propose a compute-efficient, two-step hyperparameter transfer framework that estimates optimal learning rates for training large MoE models by transferring them across scaling model widths, and subsequently extrapolating to trillion-token horizons. First, we formulate a Maximal Update Parameterization ($μ$P) adaptation for MoE architectures utilizing Multi-head Latent Attention (MLA) and the Muon optimizer, demonstrating that optimal learning rates transfer consistently across width-scaled models. Second, we extend this transferability along the token dimension by establishing a predictive scaling law. By applying linear regression to the optimal values derived from small proxy models on limited budgets, we successfully extrapolate the ideal learning rate to massive training horizons (e.g., 10 trillion tokens) with high fidelity ($R^2=0.95$). Consequently, this indicates that proxy training on small models is sufficient to determine the optimal learning rate for the extensive training of large-scale MoEs. We apply the proposed methodology to pretrain our foundation model (155B total, 17B active parameters) from scratch, and the stable training and evaluation results validate that optimal configurations for full-scale target models can be accurately predicted with minimal ablation costs.",
    "published": "2026-08-20T13:57:43Z",
    "updated": "2026-08-20T13:57:43Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2608.20061"
  },
  {
    "id": "2608.20056",
    "title": "Gravity-aware partially calibrated absolute pose estimation from affine- or rotation-covariant features",
    "authors": [
      "Marcus Valtonen Örnhag",
      "Alberto Jaenal",
      "Stefan Adalbjörnsson"
    ],
    "abstract": "Inertial measurement units (IMUs) are now standard in most consumer devices, such as smartphones, drones, and extended reality (XR) headsets. By fusing visual and inertial data, localization systems gain significantly in speed and robustness compared to vision-only or IMU-only approaches. However, traditional pose estimation methods fail to utilize the local geometric information embedded in feature descriptors like SIFT. Recent work has proved the advantages of leveraging this information for relative and absolute pose estimation, but its application to partially calibrated absolute pose estimation remains unexplored. In this paper, we derive novel constraints for joint estimation of absolute pose and focal length, making use of a gravity vector obtained from IMU data and the feature-induced local geometry, which we use to construct two efficient solvers: UP1PfAC, that operates given a single affine correspondence and UP2PfORI, which requires two orientation-covariant features. Unlike traditional, semi-calibrated absolute pose methods requiring four point correspondences, our solvers benefit from fewer samples and lower computational cost, simplifying robust estimation in modern RANSAC-like frameworks. We evaluate the proposed solvers against the state-of-the-art on large-scale public datasets and demonstrate that our method achieves fast and accurate localization and focal length estimation.",
    "published": "2026-08-20T13:52:54Z",
    "updated": "2026-08-20T13:52:54Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.20056"
  },
  {
    "id": "2608.20055",
    "title": "EchoCoT: Extracting Hidden Chain-of-Thought from Large Reasoning Models",
    "authors": [
      "Yiting Qu",
      "Ziqing Yang",
      "Chi Cui",
      "Ye Leng",
      "Junjie Chu",
      "Yang Zhang"
    ],
    "abstract": "Hidden chain-of-thought (CoT) traces, especially those from frontier proprietary large reasoning models (LRMs), are valuable model assets. Yet whether these hidden CoTs can be directly extracted from black-box models remains largely unexplored. In this work, we systematically study whether hidden CoTs can be extracted near-verbatim from black-box LRMs through API interactions. We identify a previously overlooked reasoning replay surface between tool calls and develop EchoCoT, a multi-step attack that iteratively extracts hidden CoTs using API-returned fidelity signals. We further develop an LLM-based optimization framework that automatically searches for an effective universal injection trajectory across various datasets. We evaluate EchoCoT on three open-source and five frontier proprietary LRMs. On open-source LRMs, EchoCoT achieves up to 66.4\\% near-verbatim extraction success, with the extracted trace length within 10\\% of the target and at least 90\\% of tokens exactly matching the target CoT. The same injection trajectory also generalizes to unseen datasets, achieving up to 80\\% extraction success under the same criterion. For tested frontier proprietary LRMs, a substantial fraction of extracted CoTs closely align with provider-reported reasoning lengths and available CoT summaries. EchoCoT can also extract very long CoTs: on Gemini-2.5, it extracts 33,463 tokens from a 32,948-token target. These results establish hidden-CoT extraction as a practical security risk and highlight the need to better protect hidden CoT assets.",
    "published": "2026-08-20T13:52:07Z",
    "updated": "2026-08-20T13:52:07Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.20055"
  },
  {
    "id": "2608.20054",
    "title": "What You Can't See Is What You Learn: Restricted Evidence Visibility Favors Compositional Generalization in Shared-Genome Language-Model Societies",
    "authors": [
      "Narcis Marincat"
    ],
    "abstract": "Multi-module systems often expose every module to the full input. We test whether restricting evidence visibility changes which solutions gradient-based training discovers. Four-cell societies share one frozen pretrained language model and one low-rank adapter, communicating only through two model-width continuous vectors in a fixed relay. On a prospectively sealed natural-language function-composition task, we train ten matched restricted/global pairs sharing initialization bytes, training order, token layout, parameters, and computation; only the attention mask differs. Restricted societies outperform their globally visible twins by at least 20 points at both depths in 9 of 10 pairs, with median paired advantages of 0.7648 and 0.6050. Cutting communication reduces every restricted society to chance, and the depth-three advantage remains 0.558 on programs whose composite function never appeared in training. Across six audited restricted societies, same-value packet transplants preserve behavior at 0.94-1.00 across all tested interfaces; destructive interventions collapse performance; and counterfactual packets redirect outputs toward the mathematically predicted answer. The sole high-performing global model also requires communication, but its same-value packets are not interchangeable across episodes. Restricted visibility is thus not necessary for composition; under this protocol it substantially increases the probability of a generalizing relay and favors a reusable, value-indexed interface. The complete preregistered battery nevertheless formally fails because restricted-arm median depth-three accuracy is 0.6988, below the 0.70 floor. An earlier qualification cohort likewise yielded 0/10 complete passes: one model met every task-performance gate, but all ten failed ordinary-language preservation, confining the system to explicitly task-gated use.",
    "published": "2026-08-20T13:51:45Z",
    "updated": "2026-08-20T13:51:45Z",
    "categories": [
      "cs.AI",
      "cs.LG",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2608.20054"
  },
  {
    "id": "2608.20053",
    "title": "On the Applicability of Safety Nets: A Safety-By-Design Solution for Certifying Neural Networks",
    "authors": [
      "Johann Maximilian Christensen",
      "Thomas Stefani",
      "Elena Hoemann",
      "Frank Köster",
      "Sven Hallerbach"
    ],
    "abstract": "The integration of Artificial Intelligence (AI) in safety-critical aviation systems presents significant challenges for certification and deployment. Aviation, often regarded as the safest form of transportation, relies on numerous safety-critical systems. For future safety-critical AI-based systems, EASA requires a Safety-by-Design approach, which can be achieved by using Safety Nets that combine neural network compression with lookup tables to ensure 100 % correct runtime behavior across the discretized operational design domain. Although Safety Nets have been studied, no comprehensive study of their performance characteristics and system design trade-offs has been conducted. This work presents the first systematic analysis of the trade-off between neural network and lookup table size in Safety Nets. By systematically comparing neural networks with diverse architectures, this study identifies optimal design parameters that minimize overall storage and memory requirements while maintaining certification compliance. Results demonstrate that architectures with 3 to 5 hidden layers, each with approximately 50 to 100 nodes, combined with one-hot encoding, achieve the best balance. In these configurations, neural networks accurately represent at least 97 % of the data, while compact lookup tables handle the remaining errors. The resulting Safety Nets reduce the system size by almost three orders of magnitude, fitting within the memory budget of current avionics hardware while guaranteeing 100 % correct outputs across the entire discretized input space, as required by EASA guidelines. This work provides the first-ever open-source implementation of Safety Nets for HCAS and VCAS with replicable results, demonstrating a practical pathway toward certifiable AI-based systems in aviation and establishing Safety Nets as a viable Safety-by-Design solution for safety-critical applications.",
    "published": "2026-08-20T13:51:35Z",
    "updated": "2026-08-20T13:51:35Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.20053"
  },
  {
    "id": "2608.20041",
    "title": "A three-dimensional typology of agency for advanced AI systems",
    "authors": [
      "Willem Fourie"
    ],
    "abstract": "Research on the agency of advanced artificial intelligence (AI) systems focuses on agency as a normative concept and on the agency of particularly agentic AI systems. While recent work also focuses on the different profiles of agentic systems, no framework exists to address the question of the type of agency instantiated by advanced AI systems, particularly when considering non-moral forms of agency. Based on established theoretical positions in philosophy, ethics, legal theory and sociology, we develop a typology of agency for frontier AI systems consisting of three dimensions: the nature of agency (moral or legal), its mode (individual or collective) and its locus (human or non-human). Combining these dimensions produces eight possible instantiations of agency, which we classify as conventional, contested or controversial. The typology separates legal from moral agency and thereby creates conceptual space for considering individual, legal, non-human agency without presupposing that advanced AI systems are moral agents. We argue that this distinction is increasingly relevant where instrumental goal pursuit complicates the attribution of AI actions to particular human actors.",
    "published": "2026-08-20T13:46:33Z",
    "updated": "2026-08-20T13:46:33Z",
    "categories": [
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2608.20041"
  },
  {
    "id": "2608.20038",
    "title": "An Inclusive and Lightweight Approach to Federated Continual Learning for Cultural Heritage",
    "authors": [
      "Ioannis Theologitis",
      "Debin Meng",
      "Stylianos Eleftheriadis",
      "Vasileios Lolis",
      "Konstantinos Votis"
    ],
    "abstract": "Artificial intelligence can support cultural heritage and digital humanities through large-scale retrieval and analysis of digitized collections. However, cultural heritage data are often distributed across institutions, constrained by ownership and access restrictions, and continuously evolving over time. Federated Continual Learning (FCL) is well suited to this setting, as it enables models to learn from distributed and sequential data without sharing raw collections. In this paper, we propose FedCurv-DR, a lightweight, regularisation-based FCL strategy. The method accumulates parameter-importance estimates across clients and experiences to protect learned knowledge, while updating them only at fixed intervals to minimize communication and computation overhead. We evaluate FedCurv-DR in a continual learning scenario using the WikiArt image dataset for genre classification with evolving styles, reporting performance, energy, and fairness metrics. Our results show that FedCurv- DR reduces forgetting and balances performance, fairness, and energy efficiency for sustainable AI in cultural heritage.",
    "published": "2026-08-20T13:44:29Z",
    "updated": "2026-08-20T13:44:29Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.20038"
  },
  {
    "id": "2608.20026",
    "title": "From Street View Imagery to Street Quality Indicators: Vision Language Inference for the Suburban 15-minute City",
    "authors": [
      "Joan Perez",
      "Giovanni Fusco"
    ],
    "abstract": "Streetscape quality has become a central concern in contemporary urban planning, particularly within the framework of the pedestrian-friendly 15-minute city, where walkability and public-space quality are increasingly recognized as key determinants of urban performance. However, assessing streetscape qualities across large suburban and peri-urban territories remains challenging due to the time and resource demands of conventional field surveys. This paper presents a planning-oriented assessment of streetscape qualities in the north-eastern periphery of Nice (France) using the latest release of SAGAI (Streetscape Analysis with Generative AI), an open-source workflow that leverages vision-language models (VLMs) for large-scale streetscape analysis from Google Street View imagery. The new release addresses limitations of the original framework through improved image acquisition, geographically consistent view generation, support for multiple VLM architectures, consensus-based inference, and an integrated analytical environment. The workflow is applied to several thousand street-level observations to evaluate qualities relevant to pedestrian-friendly urban environments: sidewalk presence, pedestrian entrance density, and vegetation. The resulting maps reveal that the desired streetscape qualities characterize only a fraction of today's suburban streetscapes, mainly in compact developments and traditional suburban faubourgs, while they are particularly lacking on residential hills. The analysis demonstrates the potential of contemporary VLMs to support urban diagnostics in extensive suburban territories where fieldwork would be prohibitively time-consuming. Beyond the case study, the paper illustrates how recent advances in vision-language models can contribute to evidence-based planning by enabling scalable, flexible, and interpretable assessments of urban public-space quality.",
    "published": "2026-08-20T13:34:48Z",
    "updated": "2026-08-20T13:34:48Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.20026"
  },
  {
    "id": "2608.20019",
    "title": "Contrastive Mixed Prompt Learning for Incomplete Multimodal Sentiment Analysis with Unseen Modality Combination",
    "authors": [
      "Kaixin Xu",
      "NaiJin Liu",
      "Yulin Kang",
      "Tangyue Jin",
      "Zixuan Yu",
      "Wenxi Zhao",
      "Yibei Liu",
      "Qianle Zhang",
      "Yangyang Wu",
      "Mengying Zhu",
      "Meng Xi"
    ],
    "abstract": "Incomplete multimodal sentiment analysis has garnered significant attention in recent years. Existing approaches typically assume that data is missing at random or are designed specifically for certain missing patterns, ignoring the modality combination inconsistency between training and testing phases. However, in real-world scenarios, the testing phase often encounters modal combinations that were not present during the training phase, which leads to insufficient generalization capabilities and unstable performance. In this paper, we introduce the problem of Incomplete Multimodal Sentiment Analysis with Unseen Modality Combinations (IMSAUMC), aiming to enhance model generalization for unseen modality combinations. To address this challenge, we propose the model named $\\textbf{C}$ontrastive $\\textbf{M}$ixed $\\textbf{P}$rompt $\\textbf{L}$earning ($\\textsf{CMPL}$) for IMSAUMC. It introduces a label-guided contrastive feature learning mechanism to learn robust and discriminative cross-modal representations. Additionally, we design modality-combination prompts with a soft router to facilitate better learning of various modality combinations. Furthermore, we introduce three prompt contrastive learning strategies, which enable effective learning of prompts corresponding to unseen modality combinations, thereby significantly strengthening the model's generalization capabilities in diverse testing scenarios. Extensive experiments on three widely used datasets demonstrate that $\\textsf{CMPL}$ achieves more than a 5% improvement in accuracy compared to state-of-the-art approaches.",
    "published": "2026-08-20T13:29:49Z",
    "updated": "2026-08-20T13:29:49Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.20019"
  },
  {
    "id": "2608.20011",
    "title": "Manifold Drift in Flow Preference Optimization: A Root Cause of Reward Hacking",
    "authors": [
      "Yansen Han",
      "Shengyi Liao",
      "Yuanxing Zhang",
      "Pengfei Wan",
      "Tao Lin"
    ],
    "abstract": "Preference optimization is a standard alignment method for generative models, yet extending it to continuous-time dynamics remains non-trivial. In flow matching, reward-driven updates modify transport trajectories without an inherent constraint to the pretrained data manifold and can move terminal samples off the pretrained support. We formalize this failure mode as manifold drift. Theoretically, we show that optimal flow matching recovers the terminal data distribution, whereas a preference update leaves the pretrained manifold whenever its induced terminal displacement has a nonzero normal component. As a remedy, we propose ThermoDPO, a temperature-controlled objective that anchors pairwise preference optimization on preferred samples. Across temperature regimes, this objective connects rejection sampling fine-tuning and FlowDPO and controls a pointwise reconstruction-based surrogate for manifold distance. To counteract diminished signals at low temperatures, we further introduce a weighted variant, ThermoDPO-weighted. On the main toy benchmark, ThermoDPO-weighted attains a StrictScore of 0.899, compared with 0.629 for FlowDPO and 0.857 for FlowDPO+RFT. On SD3.5-M at CFG = 4.5, it improves OCR by 47.5% and the average of four metrics by 16.0%.",
    "published": "2026-08-20T13:25:24Z",
    "updated": "2026-08-20T13:25:24Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.20011"
  },
  {
    "id": "2608.18585",
    "title": "SPARC: Subspace Position-Aware Robust Few-Shot Calibration for Distribution-Shifted Industrial Anomaly Detection",
    "authors": [
      "Seokhee Han",
      "Seungjun Chu",
      "Mateusz Nowak",
      "Peter Chin"
    ],
    "abstract": "Vision-based industrial anomaly detectors are calibrated on one distribution but may be deployed on another that differs in illumination, fixture placement, or sensor characteristics, sharply degrading an otherwise accurate detector. Adapting to the incoming lot is a natural response, but labeled anomalies are scarce. We therefore consider calibration using only a handful of verified-normal images available before scoring the rest of the lot. Existing fixes require backpropagation, detector-specific tuning, or choices about feature directions that few calibration samples cannot justify. We present SPARC, a few-shot calibration method that intercepts patch features between encoder and detector and removes a closed-form, spatially indexed estimate of deployment-time nuisance through per-cell subspace projection. It needs only $k \\le 8$ verified-normal images and uses the algebraic saturation rank $r{=}k{-}1$ on the encoder's native patch grid. The correction requires no gradient or weight updates and works with memory-bank, density, prototype, and mutual detectors. On the shift-prone benchmarks, SPARC improves pooled Image AUROC and AU-PRO$_{0.3}$ for all seven detectors whose image scores depend on corrected patch features by $+13.8$ and $+3.5$ percentage points (pp), respectively; on benchmarks without engineered shift, the changes are small and mixed. Controls that give competing corrections the same calibration images attribute these gains to the per-cell subspace structure rather than the images alone. Further ablations support the saturation-rank choice and characterize sensitivity to backbone and calibration conditions.",
    "published": "2026-08-19T06:25:35Z",
    "updated": "2026-08-19T06:25:35Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.18585"
  },
  {
    "id": "2608.18581",
    "title": "From Storage to Access: Verifiable Activation of Parametric Knowledge in LLMs via Explicit Priming and Implicit Reasoning",
    "authors": [
      "Zuocheng Ying",
      "Yang Yang",
      "Yumou Wu",
      "Chuanbo Zhu",
      "Jiarui Wang",
      "Ziqi Wu",
      "Jingming Cai",
      "Junqing Yu",
      "Zikai Song"
    ],
    "abstract": "Although Large Language Models (LLMs) encode rich factual knowledge in their parameters, reliably recalling and verifying such knowledge remains a key bottleneck in factual question answering. Existing end-to-end methods entangle knowledge elicitation with reasoning, making it difficult to determine whether correct answers arise from parametric knowledge or the input context. To address this challenge, we propose VAKE (Verifiable Activation of Parametric KnowledgE), a two-stage reinforcement-learning framework that externalizes latent parametric knowledge through explicit Priming and transfers the acquired elicitation capability to implicit Reasoning. Given a query and an insufficient retrieved subgraph, the Priming policy explicitly inserts bridging triples as verifiable evidence, with supervision provided by rewards derived from answers generated by a separate frozen model over the augmented subgraph. Building on the policy learned during Priming, the Reasoning stage trains the model to answer from the original input, testing whether the capability acquired through explicit knowledge elicitation transfers to implicit reasoning. Experiments across seven benchmarks and models from 3B to 14B show that VAKE consistently outperforms standard baselines, including when transferring directly from HotpotQA to OOD datasets. LLM-based evaluation further shows that over 80% of the inserted triples provide factual bridging knowledge not derivable from the retrieved context, while more than half elicit knowledge inaccessible through direct prompting. These results suggest that VAKE activates latent parametric knowledge rather than copying the input context or memorizing dataset-specific associations.",
    "published": "2026-08-19T06:20:34Z",
    "updated": "2026-08-19T06:20:34Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.18581"
  },
  {
    "id": "2608.18580",
    "title": "FACET: Preserving Source Intent and Executable State in Terminal Task Synthesis",
    "authors": [
      "Kou Shi",
      "Zun Wang",
      "Qisheng Su",
      "Shiting Huang",
      "Ziao Zhang",
      "Zhen Fang",
      "Qingnan Ren",
      "Jin Liu",
      "Yu Zeng",
      "Yiming Zhao",
      "Lin Chen",
      "Zehui Chen",
      "Feng Zhao"
    ],
    "abstract": "Training terminal agents requires scalable executable supervision, yet synthesizing high-quality terminal tasks remains challenging. Each task couples an instruction, an initialized environment, a reference solution, and an executable verifier; if these artifacts are generated from inconsistent assumptions, the resulting task may be unsolvable or incorrectly evaluated. Meanwhile, multi-stage synthesis can discard the goals, dependencies, state transitions, and procedural constraints encoded in the original sources. We present FACET (Fine-grained Agentic Construction of Executable Tasks), a framework that addresses both information preservation and cross-artifact consistency. FACET reconstructs related agent skills into coherent, information-rich scenarios, then realizes and repairs the execution environment before generating the final task artifacts. The resulting container state serves as shared grounding for the instruction, solution, and verifier, while execution-based validation and targeted repair correct artifact-specific failures without unnecessarily regenerating valid components. FACET produces complex terminal tasks with dense executable checks, and successful trajectories collected from these tasks provide effective, data-efficient supervision. Fine-tuning models across multiple scales consistently improves performance on Terminal-Bench 2.1, while analyses of alternative generation schemes support the importance of environment-grounded construction for task validity and solution-verifier alignment. These results establish source-intent preservation and shared executable-state grounding as key principles for scalable terminal-task synthesis.",
    "published": "2026-08-19T06:19:20Z",
    "updated": "2026-08-19T06:19:20Z",
    "categories": [
      "cs.AI",
      "cs.PL"
    ],
    "url": "https://arxiv.org/abs/2608.18580"
  },
  {
    "id": "2608.18579",
    "title": "MR-IQA-2: Faithful Image Quality Reflection via Fine-Grained Credit Assignment",
    "authors": [
      "Yuan li",
      "Youyuan Lin",
      "Chenhui Chu",
      "Shin'ya Nishida"
    ],
    "abstract": "Multimodal large language models (MLLMs) have shown strong potential for image quality assessment (IQA) by improving consistency between quality ratings and their underlying reasoning. However, most approaches supervise reasoning through human-provided ratings and rarely examine whether it faithfully reflects image quality. Rating accuracy alone does not ensure faithful reasoning; a shared reward also obscures supervision sources and may reinforce unfaithful reasoning when a correct rating occurs by chance. To improve the faithfulness and reliability of blind IQA, we aim to (1) decouple credit assignment for reasoning and rating and (2) provide verifiable supervision for faithful reasoning. We introduce MR-IQA-2, an actor-editor-judge framework that operationalizes reasoning-editing-reflection. The actor generates quality reasoning for an input image, and the editor revises the image according to the identified quality factors. A frozen judge compares the original and edited images and provides reflective supervision for the actor's reasoning. MR-IQA-2 further uses fine-grained credit assignment to decouple reasoning and rating supervision. Judge feedback supervises reasoning, whereas human ratings supervise the predicted rating. Masked token-specific updates distinguish these signals while preserving the causal relation from reasoning to rating. Across IQA benchmarks, MR-IQA-2 achieves competitive rating alignment with humans. Visual reflection also enables richer and more faithful visual understanding beyond rating, which may inform image-quality optimization and related downstream tasks. Code is available at https://github.com/RobinY99/MR-IQA-2.",
    "published": "2026-08-19T06:17:23Z",
    "updated": "2026-08-19T06:17:23Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.18579"
  },
  {
    "id": "2608.18573",
    "title": "PATE-Forensics: Perception-as-Tool for Explainable Deepfake Forensics with General-Purpose MLLMs",
    "authors": [
      "Yaqi Li",
      "Jielun Peng",
      "Yabin Wang",
      "Jincheng Liu",
      "Xiaopeng Hong"
    ],
    "abstract": "Existing explainable deepfake forensic methods typically rely on task-adapted MLLM to jointly address detection, localization, and explanation. Inspired by agent-style tool use, we instead introduce a Perception-as-Tool paradigm and instantiate it as PATE-Forensics, which architecturally decouples detection and localization from explanation generation while coupling detection and localization as tightly as possible within a forensic perception tool. The DINOv3-based tool couples a multi-granularity detection module that integrates global, patch-level, and segment-level evidence with a cue-guided localization module by spatializing the patch-level and segment-level evidence into forgery score maps that guide dense mask prediction. The original image and forensic perception outputs produced by the tool form structured forensic context for a general-purpose MLLM, which is guided by prompt constraints to generate explanations without task-specific fine-tuning. On DDL-X Track 3, PATE-Forensics achieves the best official score of 0.89, outperforming the second-ranked team by 0.19 points. Our code is available at https://github.com/yqli00000/PATE-Forensics.",
    "published": "2026-08-19T06:10:00Z",
    "updated": "2026-08-19T06:10:00Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.18573"
  },
  {
    "id": "2608.18569",
    "title": "The Role of Grid Cells in Reducing Spatial Aliasing in Hippocampal Place Representations",
    "authors": [
      "Alexander Johnson",
      "Obadah Ghizawi",
      "Ali A. Minai"
    ],
    "abstract": "Spatial aliasing occurs when two or more distinct locations produce highly similar place-cell representations, primarily due to environmental symmetry or repetitive structures. This issue is most pronounced when place representations are constructed solely from boundary vector cell (BVC) inputs, because symmetric or repetitive structures can yield indistinguishable sensory patterns across multiple locations in an environment. This work introduces grid cell signals to mitigate spatial aliasing in such settings. Because grid cells contribute periodic, internally generated spatial signals that vary independently of environmental geometry, they play a key role in disambiguating perceptually identical locations. We integrate multiple modules of analytically constructed grid cells with BVC-driven place cells and show that this leads to a 94--99% reduction in spatial aliasing relative to a BVC-only baseline across three environments: an open environment without obstacles; an environment with a cross-shaped central obstacle creating high visual symmetry; and a maze environment. The greatest improvement occurs in the environment with the highest visual symmetry. These results indicate that grid cells provide information complementary to boundary-based inputs, yielding more reliable place representations in geometrically ambiguous environments.",
    "published": "2026-08-19T06:01:14Z",
    "updated": "2026-08-19T06:01:14Z",
    "categories": [
      "cs.NE",
      "cs.AI",
      "cs.RO",
      "eess.SY",
      "q-bio.NC"
    ],
    "url": "https://arxiv.org/abs/2608.18569"
  },
  {
    "id": "2608.18560",
    "title": "SemanticSlider3D: Training-Free Continuous Semantic Editing for 3D Objects",
    "authors": [
      "Ru Wang",
      "Rahul Jain",
      "Koichiro Niinuma",
      "Aakar Gupta"
    ],
    "abstract": "Fine-grained control over continuous semantic attributes of 3D objects is essential for 3D content creation, but is not well supported by conventional 3D modeling workflows or prompt-based interaction with existing generative AI tools. While slider-based methods have proven effective for fine-grained semantic control in 2D image generation, no equivalent approach exists for 3D. Extending these 2D methods to 3D is non-trivial due to challenges unique to 3D, including geometric integrity and cross-view coherence. We present SemanticSlider3D, a technique for continuous semantic attribute editing of 3D objects that requires no per-attribute training. Given a user-specified attribute, our pipeline constructs a semantic editing direction in the latent space of a state-of-the-art 3D generation model, presenting a diverse and coherent spectrum of 3D variations. A technical validation on a dataset of 50 3D object-attribute pairs shows our method was preferred by all five human assessors across variation range, consistency, 3D object quality, and attribute disentanglement, over a baseline combining a 2D slider with an image-to-3D model. An exploratory study with six participants demonstrates that SemanticSlider3D supported decision-making in 3D prototyping and was perceived as a valuable addition to existing workflows.",
    "published": "2026-08-19T05:35:38Z",
    "updated": "2026-08-19T05:35:38Z",
    "categories": [
      "cs.HC",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.18560"
  },
  {
    "id": "2608.18558",
    "title": "MorphoGP: A Nonparametric Framework for Predicting Equilibrium Beach Profiles Under Tidal Influence",
    "authors": [
      "Xi Wu",
      "Yanqing Wei",
      "Hang Yin",
      "Pengze Li",
      "Hongshuai Qi",
      "Xi Chen"
    ],
    "abstract": "The prediction of equilibrium beach profiles under tidal influence is of fundamental importance for sustainable coastal development, informing shoreline protection strategies and managing coastal ecosystems under changing environmental conditions. However, it remains challenging due to the highly nonlinear interactions among wave, tide, and sedimentary processes. Traditional empirical and numerical models often exhibit limited adaptability across diverse coastal environments, with especially pronounced limitations in beach systems where tidal processes are important . To improve data-driven prediction under these conditions, this study proposes MorphoGP, a unified category-specific Gaussian process framework for predicting equilibrium beach profiles (EBPs) under tidal influence. The framework first introduces a ContourCluster model based on contrastive learning to classify tide-influenced beach morphologies automatically. Within each morphological category, a specialized Gaussian process expert learns statistical associations between environmental descriptors including waves, tides, and sediments and the beach profile's shape. A Gating Net then integrates the outputs of all experts through a probabilistic weighting mechanism to produce the final prediction. Evaluated on data from over 180 beach profiles from tide-influenced coasts along the Chinese coast, MorphoGP achieves improved predictive performance compared with conventional and deep learning models, reducing the test RMSE by about 59.3\\% compared with the best baseline and achieving a final RMSE of 0.297 m. The proposed framework provides a physically informed, data-driven tool for equilibrium beach-profile prediction under tidal influence and coastal management, while stronger process-level physical coupling remains an important direction for future development.",
    "published": "2026-08-19T05:27:27Z",
    "updated": "2026-08-19T05:27:27Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "physics.geo-ph"
    ],
    "url": "https://arxiv.org/abs/2608.18558"
  },
  {
    "id": "2608.18555",
    "title": "Performance Drift Detection in Machine Learning as a Service (MLaaS) for IoT Environments",
    "authors": [
      "Deepak Kanneganti",
      "Sajib Mistry",
      "Sheik Mohammad Mostakim Fattah",
      "Erik Elmroth",
      "Aneesh Krishna",
      "Monowar Bhuyan"
    ],
    "abstract": "Machine Learning as a Service (MLaaS) is a powerful cloud paradigm enabling data-driven intelligent applications in Internet of Things (IoT) environments, widely adopted across healthcare, smart homes, and industry due to its cost-effectiveness. However, the dynamic nature of IoT frequently alters data distributions, affecting MLaaS stability, while periodic MLaaS updates further introduce performance drift. Unlike traditional ML systems, MLaaS clients operate as black-box users without access to internal data or parameters, making drift detection particularly challenging. To address this, we propose a novel MLaaS Performance Drift Detection framework for IoT environments. The framework first employs an MLaaS extraction model that learns service behavior from input-output pairs and identifies prediction-influenced features. Building on this, the proposed MLaaS Performance Drift Detection (MPDD) model jointly captures variations in input data and MLaaS behavior. We further design an Adaptive-Temporal Performance Drift Detection Mechanism (APDDM) that dynamically adjusts monitoring frequency based on behavioral and data variations, enabling timely drift detection for effective service management. Extensive experiments on real-world datasets demonstrate that MPDD achieves up to 22-25% accuracy improvement over baseline drift detection methods. APDDM provides an average accuracy gain of approximately 4% and reduces the miss detection rate by around 9% compared to fixed-interval monitoring.",
    "published": "2026-08-19T05:24:44Z",
    "updated": "2026-08-19T05:24:44Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.18555"
  },
  {
    "id": "2608.18554",
    "title": "CentaurBench: Benchmarking LLM Capabilities on Augmenting vs. Automating Real-World Work Tasks",
    "authors": [
      "Pattaraphon Kenny Wongchamcharoen",
      "Kris Gulati",
      "Min Min Fong",
      "Abhishek Nagaraj"
    ],
    "abstract": "Most LLM benchmarks rank models on their ability to automate work tasks. In practice, however, models are often used to assist other (human or LLM) agents. The question that drives model selection is therefore not only which model produces the best output, but which model most improves the work of another (weaker) agent. We introduce a unified framework that evaluates the capability of models to automate and augment another agent's performance. Across seven economically grounded real-world tasks, an assistant model writes assistance text for a standardized lower-capacity worker model, which produces the deliverable. In automation mode, the assistant produces the output directly. Outputs are scored through blind pairwise comparisons by an LLM judge panel with task-specific rubrics, replicated across ten runs. Rankings across the two regimes are only modestly correlated, and the automation winner loses augmentation on five of seven tasks. Assistance is not reliably positive. The unaided worker outranks every assisted condition on three tasks, and only one model's guidance beats no guidance on average. These results suggest that automation ability is an incomplete proxy for assistance quality, motivating benchmarks that evaluate models according to the roles they play in human-AI and multi-agent systems.",
    "published": "2026-08-19T05:22:20Z",
    "updated": "2026-08-19T05:22:20Z",
    "categories": [
      "cs.CY",
      "cs.AI",
      "cs.MA",
      "econ.GN"
    ],
    "url": "https://arxiv.org/abs/2608.18554"
  },
  {
    "id": "2608.18547",
    "title": "Measuring Proof Burden in Public Bounty Listings: A RentAHuman Case Study",
    "authors": [
      "Iman YeckehZaare"
    ],
    "abstract": "Online bounty markets let requesters advertise paid tasks. Workers may be asked not just to complete a task but to prove it, and proof can mean exposure: revealing identity or location, using a personal account, posting publicly, acting in the physical world, or repeated evidence at later checks, none disclosed by the posted price. We call these advertised requirements proof burden and measure them on RentAHuman, a 2026 market publicized as a place for AI agents to hire humans. We study what listings request, not what workers submit or experience. We manually audited a nonrandom May 31, 2026 snapshot: every listing our searches returned from RentAHuman and Human Pages, another such market (981 listings, all but one from RentAHuman). Two independent coders recorded 13 features (11 kinds of evidence, recurring monitoring, physical-world action) and our 0-5 Proof Burden Score; a blinded third resolved all disagreements. A planned content screen leaves 779 bounty/task listings as the primary population; 438 (56.2%) score 4 or 5, spanning 154 distinct feature combinations: a checklist, not a single score, tells workers what a listing entails. Platform metadata labels some requester accounts as agents or bots. Exploratory comparisons show physical-world action, location proof, or recurring monitoring in 75.0% of agent-or-bot-labeled versus 55.3% of human-labeled listings, though score-4-or-5 shares did not clearly differ. The labels are self-reported or platform-assigned, the agent-or-bot-labeled listings come from only 20 displayed names, and the comparison was chosen post hoc, after seeing the data: a hypothesis, not a confirmed difference. We contribute the 13-requirement vocabulary, the adjudicated manual audit, and this descriptive case study; the score is a secondary screening summary. The study offers no worker-validated measure or automated detector yet.",
    "published": "2026-08-19T05:08:21Z",
    "updated": "2026-08-19T05:08:21Z",
    "categories": [
      "cs.HC",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2608.18547"
  },
  {
    "id": "2608.18544",
    "title": "Zero-Shot SAM2 Segmentation and Vision Transformer-Based Recognition of Elamite Cuneiform Symbols from Degraded Tablet Images",
    "authors": [
      "Utsav Poudel",
      "Rasik Bhattarai",
      "Siddhartha Pathak",
      "Raghavendra Ramacharna",
      "Gaurav Jaswal"
    ],
    "abstract": "Automated recognition of ancient cuneiform script poses a compound signal-degradation problem: the three-dimensional relief of clay tablets creates spatially varying illumination and cast shadows, surface erosion introduces structured noise that overlaps with genuine sign impressions, and severe class imbalance across 141 sign categories undermines classifier reliability. We introduce EpigraphNet, a segmentation-guided transformer pipeline evaluated on the Persepolis Fortification Archive. From 1,239 annotated tablet images, brightness-adaptive morphological preprocessing and zero-shot SAM2-Large segmentation generate clean binary symbol masks, which a fine-tuned Vision Transformer (ViT-B/16) with inverse-frequency class weighting then classifies. EpigraphNet reaches 86.41% top-1 accuracy on a 132-class benchmark, a 17.21 percentage-point gain over the strongest CNN baseline (ResNet-101, 69.20%) and 5.31-12.91% over four modern backbones (DeiT-B/16, Swin-B, ConvNeXt-B, EfficientNet-B4) under identical conditions. The full pipeline runs at approximately 18 ms per sign on an NVIDIA A100 GPU. A lower Spearman correlation between sign frequency and per-class performance indicates more balanced recognition across frequent and rare classes. Implementation is available at: github.com/r11up/sam-guided-vit",
    "published": "2026-08-19T05:02:41Z",
    "updated": "2026-08-19T05:02:41Z",
    "categories": [
      "cs.CV",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2608.18544"
  },
  {
    "id": "2608.17180",
    "title": "Task Specialization Fine-Tuning for Contextual Reinforcement Learning",
    "authors": [
      "Jianan Zhou",
      "Jung-Hoon Cho",
      "Tianyue Zhou",
      "Han Zheng",
      "Jie Zhang",
      "Roy Dong",
      "Yining Ma",
      "Cathy Wu"
    ],
    "abstract": "Contextual Reinforcement Learning (CRL) seeks to generalize classical RL by maximizing task coverage across a context space of related tasks. While prior works often train from scratch and rely on either multi-task learning for a single policy or strategically training multiple policies, we advocate for a unified alternative: pretraining a single policy with good initial performance, followed by fine-tuning multiple policies for task specialization. This new paradigm, however, introduces unique challenges, such as heterogeneous marginal returns and sample inefficiency. This raises a critical research question: given a pretrained policy and a constrained budget, how much fine-tuning should each task region receive to enable sample-efficient CRL? To this end, we propose Task Specialization Fine-Tuning (TSFT), an online framework that predicts fine-tuning performance with a simple parametric model and exactly solves the resulting discrete budget allocation problem via integer linear programming. Extensive experiments across diverse decision domains, including combinatorial optimization, continuous control, and LLM fine-tuning, demonstrate that TSFT significantly outperforms baselines in task coverage and approaches oracle performance. Our work charts a new direction for model-based CRL, aligning with the modern pretrain-finetune era.",
    "published": "2026-08-17T22:42:01Z",
    "updated": "2026-08-17T22:42:01Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.17180"
  },
  {
    "id": "2608.17178",
    "title": "Mask What Matters: Saliency-Guided Video Self-Supervised Learning for Autonomous Driving",
    "authors": [
      "Christopher Lang",
      "Alexander Braun",
      "Abhinav Valada"
    ],
    "abstract": "Video self-supervised learning through masked spatiotemporal prediction has emerged as a promising paradigm for learning feature representations from unlabeled data. However, existing methods typically rely on random masking, which indiscriminately removes regions irrespective of their semantic or temporal relevance. In ego-centric driving videos, this can weaken the pretext signal since safety-critical cues such as pedestrians, vehicles, lane boundaries, and dynamic interactions often occupy only a small portion of the frame, yet are central to downstream perception. We introduce V-JEPA4A, a domain-specialized variant of V-JEPA for autonomous driving that is pre-trained on publicly available driving videos with a novel saliency-driven masking policy. It accounts for semantically and temporally relevant context. The proposed policy preserves and predicts context according to semantic importance and temporal relevance, yielding more informative representation learning while retaining the efficiency of masked prediction. We evaluate the resulting encoders on four driving benchmarks spanning tracking, semantic segmentation, and depth estimation. The results demonstrate that V-JEPA4A reduces identity switches on BDD100k MOT by 25% over V-JEPA with random masking, achieves 73.2 mIoU on Cityscapes, and 3.75 RMSE on KITTI-2015 depth, while incurring only ~14% additional pre-training iteration overhead.",
    "published": "2026-08-17T22:39:49Z",
    "updated": "2026-08-17T22:39:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.17178"
  },
  {
    "id": "2608.17176",
    "title": "The Acknowledgment Point Is the System: Durable Policy-Decision Receipts for AI Audit Evidence",
    "authors": [
      "Neeraj Kumar Singh Beshane"
    ],
    "abstract": "An AI audit record is useful only if its durability and trust boundary are explicit. Returning a guarded decision before any durable write minimizes latency, but it cannot guarantee that evidence survives an immediate crash. We rebuild RuntimeGuard-AI around this constraint. The resulting research prototype binds each deterministic policy decision to the exact policy source, commits a privacy-minimizing record at a caller-selected synchronization boundary, and returns an Ed25519-signed receipt that states whether that boundary completed. After restart, the engine validates framed records, manifests, shard placement, sequence continuity, and replay identity. A separate attestation path groups committed records into chained, signed Merkle epochs that an auditor verifies with an externally obtained key. On an Apple M4 Pro at four worker threads and 2,048-byte prompts, buffered signed evidence reaches 27,193 requests/s with 141.9 microseconds median latency. Per-record data and full synchronization reduce throughput to approximately 242 requests/s and raise median latency to 16.0 ms. Sealing a 100,000-record signed epoch takes 97.0 ms. The result is a measured durability-latency trade-off, not a \"free\" asynchronous audit path. The prototype does not prove model execution, prevent a compromised signer from forking history, or establish legal conformity.",
    "published": "2026-08-17T22:35:07Z",
    "updated": "2026-08-17T22:35:07Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.17176"
  },
  {
    "id": "2608.17175",
    "title": "Balancing Safety and Autonomy: Accessibility-Oriented Interventions in Generative AI for Cognitive Impairment",
    "authors": [
      "Yibo Meng",
      "Jingruo Chen",
      "Lyumanshan Ye",
      "Bingyi Liu",
      "Zhicong Lu"
    ],
    "abstract": "Generative AI systems are increasingly used by older adults with cognitive impairment for everyday tasks such as information seeking, health management, and communication. While these systems provide flexible, language-based support, their open-ended outputs introduce risks of over-reliance, misinterpretation, and inappropriate decision-making. Prior work has focused on usability and adoption, with limited attention to how system design shapes users' participation in decision-making and the distribution of agency in care contexts. We present a qualitative study of 45 individuals with cognitive impairment and their caregivers. We identify five accessibility-oriented mechanisms: AI Capability Constraint, Human Oversight Embedding, Cognitive Engagement Maintenance, Human-AI Relationship Regulation, and Risk Transparency and Control, through which systems structure interaction. These mechanisms both support and constrain users by redistributing decision-making across users and caregivers. We show that their effects vary by impairment level: while protective mechanisms support users with severe impairment, they can restrict autonomy for those with mild impairment. As impairment progresses, tensions become less visible as user participation diminishes. Our findings highlight the need for dynamic designs that balance safety and autonomy in AI-supported care.",
    "published": "2026-08-17T22:24:34Z",
    "updated": "2026-08-17T22:24:34Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2608.17175"
  },
  {
    "id": "2608.17170",
    "title": "Synthesizing Feature Extractors: An Agentic Approach for Algorithm Selection",
    "authors": [
      "Hai Xia",
      "Carlos Ansótegui",
      "Stefan Szeider"
    ],
    "abstract": "Algorithm selection for constraint satisfaction problems requires extracting features that capture problem structure. Manually designing feature extractors demands deep domain expertise and quickly becomes a bottleneck when new problem classes appear. We present an automated approach that uses Large Language Models (LLMs) in an agentic check--fix--verify loop to synthesize executable Python scripts that act as interpretable, problem-specific feature extractors. Given a high-level MiniZinc model and an instance, the LLM agent generates code that constructs a typed graph representation and computes structural properties such as graph density, variable clustering, and constraint tightness. We evaluate our approach on three combinatorial problems (vehicle routing, car sequencing, fixed-length error-correcting codes) with a portfolio of five state-of-the-art solvers. The synthesized extractors yield algorithm selectors that consistently outperform both expert-curated mzn2feat features (up to $8.3$ percentage points (pp) test-set accuracy on FLECC) and the best transformer-based trans2feat variants. In the meanwhile, the synthesized feature extractors remain inspectable.",
    "published": "2026-08-17T22:12:12Z",
    "updated": "2026-08-17T22:12:12Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.17170"
  },
  {
    "id": "2608.17168",
    "title": "Can LLMs Reason in a Legally Meaningful Manner? A Small-scale Study on European Court of Human Rights Cases",
    "authors": [
      "Amogh Raina",
      "Ilias Chalkidis",
      "Daniel Hershcovich",
      "Henrik Palmer Olsen"
    ],
    "abstract": "Reasoning has become a standard technique and feature for contemporary LLMs; however, its application and quality in the context of demanding legal-oriented tasks, such as legal case forecasting, remain under explored. We investigate how LLMs reason in the context of legal case forecasting, using legal cases from the European Court of Human Rights (ECtHR) as a testbed. We evaluate OpenAI GPT 5.4, a recent top-tier LLM, by exploring alternative prompting strategies that are more or less suggestive of what counts as legally meaningful reasoning in the context of ECtHR jurisprudence. We present our findings derived from assessing the model's responses with both human and LLM evaluation. We find that the examined model scores far from ideal in legal reasoning, the model produces structurally complete but substantively shallow analyses, and that LLM-as-a-Judge evaluators are internally consistent yet align only weakly with our trained annotators, i.e., reliable but not a valid substitute for human evaluation. Overall, the expert-curated prompt leads to more comprehensive reasoning, which does not result in more accurate predictions compared to the other examined settings. Based on our findings, we urge the community not to rely solely on automated LLM-based evaluation and to avoid using task accuracy as an appropriate proxy for reasoning quality.",
    "published": "2026-08-17T22:11:22Z",
    "updated": "2026-08-17T22:11:22Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.17168"
  },
  {
    "id": "2608.17167",
    "title": "Expected free energy as an information constraint on the Bethe Lagrangian",
    "authors": [
      "Wouter M. Kouw"
    ],
    "abstract": "Active inference selects actions by minimising an expected free energy functional over predicted futures. However, adding an expectation over yet-unobserved outcomes means the free energy functional no longer has a Kullback-Leibler structure, which hinders message passing treatments of inference procedures. We propose an alternative formulation based on a Bethe free energy functional, fully supporting inference by message passing. The epistemic drive is maintained by imposing an information constraint, next to normalisation, marginalisation and form constraints, insisting that the mutual information between future observations, states and parameters given actions must be at least as large as the entropy of the goal prior. For a specific value of the corresponding Karush-Kuhn-Tucker multiplier, the stationary point of this constrained Bethe Lagrangian recovers the expected free energy solution. We show that, as the information demand is varied, the solved multiplier moves through its inactive, interior, and saturated regimes. In the inactive regime the agent's epistemic drive switches off entirely, while in the saturated regime it is maximal. We compare the performance of the constrained Bethe agent on three tasks against EFE and Q-MDP.",
    "published": "2026-08-17T22:10:54Z",
    "updated": "2026-08-17T22:10:54Z",
    "categories": [
      "cs.IT",
      "cs.AI",
      "eess.SY",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2608.17167"
  },
  {
    "id": "2608.17165",
    "title": "Rapid Debris-Volume Estimation from Post-Hurricane Aerial Imagery",
    "authors": [
      "Kooshan Amini",
      "Jamie Ellen Padgett",
      "Guha Balakrishnan"
    ],
    "abstract": "Hurricane debris removal is planned, contracted, and federally reimbursed on the basis of volume estimates, yet operational practice still relies on parametric forecasts with 41-90% documented over-estimation or on truck-load tallies that arrive only after hauling begins. We present DebrisHeightNet, a segmentation-conditioned monocular debris-height network that estimates spatially explicit debris volume from a single pass of post-event aerial RGB imagery, the kind of survey routinely flown within days of a hurricane landfall. We train only a lightweight 1.08 M-parameter head on top of two frozen vision foundation models. This head regresses height from a Depth Anything V2 backbone, conditioned on the debris segmentation of CLIPSeg-debris from our prior work. Because no post-hurricane debris-height ground truth exists, we synthesize the training target by confidence-weighted LiDAR-monocular fusion (CW-LMF), designed to suppress non-debris LiDAR returns. This fused target is a constructed supervision signal rather than ground truth, so we corroborate it against external references rather than claiming it as truth. A region-level power-law calibration, driven by each region's low-density debris fraction, converts model volume into an estimate of the reported hauled debris with quantified uncertainty. Across ten regions spanning five hurricanes and three states, the uncalibrated model agrees with an independent uncrewed-aerial-vehicle (UAV) survey of the training region at Spearman $ρ= 0.87$ and lands within 30% of the reported record where the Hazus and FEMA-hybrid parametric forecasts over-predict it by 2.7-4.8$\\times$. Deployment requires no LiDAR, no ground access, and no second flight, so the method can produce spatially explicit volume estimates wherever single-pass post-event imagery is flown.",
    "published": "2026-08-17T22:06:02Z",
    "updated": "2026-08-17T22:06:02Z",
    "categories": [
      "cs.CV",
      "eess.IV"
    ],
    "url": "https://arxiv.org/abs/2608.17165"
  },
  {
    "id": "2608.17163",
    "title": "Q-Learning With World Models",
    "authors": [
      "Perry Dong",
      "Yueru Jia",
      "Chelsea Finn",
      "Dorsa Sadigh"
    ],
    "abstract": "Off-policy reinforcement learning (RL) has become increasingly sample-efficient, enabling applications such as RL fine-tuning of Vision-Language-Action models into reliable, high-performing policies. World models offer a further lever for sample efficiency, as they predict state changes rather than actions alone, but their success has largely been confined to supervised policy learning. Prior model-based RL methods often optimize the policy or value function directly on imagined rollouts, which is prone to compounding bias and struggles to scale to large, high-dimensional problems such as real-world robotics, a problem that worsens with task horizon and visual complexity. In this work, we instead ask whether we can leverage world models directly on top of standard Q-learning to improve performance, while remaining trained and grounded in the real, online setting. We propose QWM, a framework that leverages world models to perform test-time search over imagined trajectories on top of Q-learning to select high-value actions during both online rollouts and evaluation. Since the policy and value function are trained only on real transitions, QWM avoids compounding model bias while still gaining the sample-efficiency benefits of predictive search. On challenging manipulation benchmarks Robomimic and LIBERO, QWM significantly outperforms strong prior state-of-the-art methods on both sample efficiency and performance.",
    "published": "2026-08-17T22:00:42Z",
    "updated": "2026-08-17T22:00:42Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.17163"
  },
  {
    "id": "2608.17151",
    "title": "Lymphocyte Mimicry Correction via Region-Level Tissue Reasoning and Unbalanced Optimal Transport",
    "authors": [
      "Xiang Li",
      "Yuqi Wang",
      "Casey C. Heirman",
      "Jihye Heo",
      "Kyle J. Lafata"
    ],
    "abstract": "Cell mimicry arises when different cell types appear morphologically similar. Human pathologists resolve this ambiguity using surrounding tissue context, whereas current vision models either lack contextual reasoning (cell foundation models) or cannot operate at the cell level (pathology MLLMs). We present Loki-OT, which propagates region-level tissue reasoning to individual cell predictions via Unbalanced Optimal Transport, using MLLM-derived density priors as soft guidance for ambiguous cell reassignment. Loki-OT is motivated by the observation that pretrained cell foundation model features already encode discriminative information, including tissue context, but standard cell-level supervision fails to use tissue context effectively. The resulting transport plan is distilled into a lightweight student MLP classifier that learns context-aware decision boundaries within the pretrained feature space. On the independent TCGA-BRCA cohort, Loki-OT achieved lower patient-level MAE than the fully supervised in-domain PanopTILs classifier and improved F1 in epithelium-rich mimicry tissues, using 278 weak region-level MLLM estimates built on a general-domain cell foundation model. Code: https://github.com/xiangli980/Lymphocyte_Mimicry_Correction_via_Loki_OT",
    "published": "2026-08-17T21:33:55Z",
    "updated": "2026-08-17T21:33:55Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.17151"
  },
  {
    "id": "2608.17150",
    "title": "KnowSim: Evaluating Information Calibration in LLM Assistants with User Simulators that Learn",
    "authors": [
      "Yoonjoo Lee",
      "Hyoungwook Jin",
      "Tae Soo Kim",
      "Shaoyang Zhang",
      "Philippe Laban",
      "Q. Vera Liao"
    ],
    "abstract": "To effectively collaborate with users on knowledge-intensive tasks, Large Language Models (LLMs) must perform information calibration: matching content to a user's evolving understanding and cognitive capacity. Yet user simulators used to evaluate and train LLMs do not explicitly model user knowledge so they neither produce realistic interactions across knowledge levels nor reflect how interactions unfold as that knowledge evolves. To close this gap, we introduce KNOWSIM, an evaluation framework built around a user simulator that maintains explicit knowledge states, represented as a graph of Information Units with prerequisite relationships, that evolve under update rules grounded in learning theory. KNOWSIM computes three metrics (Knowledge Gain, Delivery Calibration, Cognitive Overload) directly from the knowledge state trajectory, reflecting key mechanistic aspects of information calibration. We validate KNOWSIM against 705 human-AI sessions across two domains, stratified by knowledge level: its rankings align significantly with human judgments (73-74% sign agreement), outperforming three baseline simulators. Applied to 9 LLMs, KNOWSIM reveals that the best model shifts by user knowledge level, revealing aptitude-treatment interactions invisible to standard evaluation.",
    "published": "2026-08-17T21:33:26Z",
    "updated": "2026-08-17T21:33:26Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2608.17150"
  },
  {
    "id": "2608.17148",
    "title": "Authorization Before Context: A Model-Neutral Audience Boundary Against Cross-Audience Memory Leakage in Agentic Systems",
    "authors": [
      "Sibo Liu"
    ],
    "abstract": "A personal language agent learns a fact from one audience and may later place it in the prompt it assembles for another. This memory-to-context step is an attack surface: ambiguous or inconsistent channels, cross-audience prying, and poisoned memory can each cause the system to assemble context containing a fact relevant to the query yet unauthorized for the current viewers. We introduce authorization before context: a single, anti-monotone audience-membership rule applied at the memory-to-context transition. Each item carries the audience present when it was recorded; the current viewer set is read from channel metadata and falls back to public when ambiguous; and the item is admitted only when every current viewer already belonged to its audience. We prove that this rule gives every participant cross-channel recall while ensuring, by exclusion rather than by model behavior, that nothing recorded for a narrower audience reaches a broader one and that poisoned memory cannot widen its own audience. The boundary is a model-neutral invariant on the exact assembled context: a forbidden fact must be absent before the model is called. On a synthetic Contextual-Integrity suite, no forbidden fact entered the context our boundary assembled, whereas unscoped baselines included such facts by construction; we further audit that every read path fails closed. The evidence is preliminary and synthetic.",
    "published": "2026-08-17T21:31:10Z",
    "updated": "2026-08-17T21:31:10Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.17148"
  },
  {
    "id": "2608.16747",
    "title": "Would this change your answer? Evaluating Explanations of LLM Behavior In The Wild with Counterfactual Experiments",
    "authors": [
      "Adam Karvonen",
      "Euan Ong",
      "Subhash Kantamneni",
      "Samuel Marks"
    ],
    "abstract": "Many areas of AI research, such as language model interpretability and chain of thought faithfulness, seek to explain model behaviors. But what constitutes a \"good\" explanation? In this work, we evaluate explanations through the lens of counterfactual simulatability-whether the explanation is useful for predicting model behaviors on related counterfactual inputs. To this end, we introduce CHIVE (Counterfactual Hypothesis Investigation Via Edits), a novel agentic pipeline that identifies unexpected model behaviors in the wild and investigates them with counterfactual prompt edits. This yields thousands of high-quality explanations for naturally-occurring model behaviors along with supporting counterfactual evidence. We apply CHIVE in two ways. First, we evaluate whether common LLM interpretability techniques improve an agent's ability to predict counterfactual model behaviors. Surprisingly, we find no uplift from any of the interpretability techniques studied. Second, we use CHIVE to generate training data. We find that training models to predict outcomes of CHIVE-generated counterfactual experiments generalizes to various out-of-distribution settings. Overall, CHIVE automatically discovers explanations of naturally-occurring LLM behaviors, enabling us to evaluate and improve methods for explaining LLM behaviors.",
    "published": "2026-08-17T15:57:06Z",
    "updated": "2026-08-17T15:57:06Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.16747"
  },
  {
    "id": "2608.16745",
    "title": "VicEdit: Learning to Edit Videos from Visual In-Context Examples",
    "authors": [
      "Yuji Wang",
      "Teng Hu",
      "Yuheng Chen",
      "Ran Yi",
      "Han Feng",
      "Weijian Cao",
      "Chengjie Wang",
      "Lizhuang Ma",
      "Jiangning Zhang"
    ],
    "abstract": "Despite progress in instruction-based video editing, unimodal textual instructions inherently struggle to convey fine-grained textures and complex dynamics. To bridge this perceptual gap, we propose Visual In-context Editing, a new paradigm elevating video editing from textual instructions to multi-modal visual guidance encompassing single image, image pair, and video pair. To facilitate this paradigm, we curate VicEdit-400K, the first large-scale dataset for visual in-context video editing. We develop an automated pipeline to generate 400K high-quality samples across ten task types, ensuring superior visual fidelity and semantic consistency through multi-dimensional filtering. Leveraging this foundation, we introduce VicEdit, a unified framework to bridge visual and textual contexts. To adaptively extract editing semantics from heterogeneous references, we design Modality-Adaptive Semantic Distillation, which produces modality-specific semantic tokens from visual references. These tokens are then synergistically integrated with textual instructions through Dual-Context Injection, enabling the generation process to benefit from both visual and textual signals. Extensive evaluations on VicEditBench demonstrate that VicEdit achieves state-of-the-art performance across both basic instruction editing and visual in-context editing tasks, establishing visual in-context learning as a powerful and controllable paradigm for video editing.",
    "published": "2026-08-17T15:55:40Z",
    "updated": "2026-08-17T15:55:40Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.16745"
  },
  {
    "id": "2608.16742",
    "title": "TDD-Agent: Test-Driven Reasoning for Code Generation",
    "authors": [
      "Hongyue Yu",
      "Kefan Li",
      "Jiakun Li",
      "Hongzheng Chai",
      "Yuan Yuan",
      "Rui He",
      "Junyi Wei"
    ],
    "abstract": "Large Language Models (LLMs) have achieved remarkable progress in code generation, yet ensuring correctness in complex, repository-level tasks remains challenging. Existing approaches often use generated tests as static post-hoc validators, which limits their ability to guide implementation and may introduce misleading feedback when the tests themselves are incomplete or incorrect. In this paper, we introduce TDD-Agent, which operationalizes the test-driven development paradigm for code generation. TDD-Agent first prompts the model to generate executable tests, encouraging it to clarify expected behaviors before implementation, and then performs iterative dual-track refinement over both the generated code and tests using execution feedback. We first isolate the effect of test-first reasoning through a prompt variant TDD-prompt on LiveCodeBench, where it consistently improves upon reasoning-based prompting baselines. Building on this finding, we evaluate the full TDD-Agent framework on RepoEval, a repository-level benchmark, and show that it consistently outperforms retrieval-based and agent-based baselines. Additional analyses show that iterative refinement improves not only code correctness but also the effectiveness of the generated tests, yielding higher pass rates, coverage, and mutation scores, suggesting that tests can serve as evolving reasoning artifacts rather than fixed validators. Our source code is available at https://anonymous.4open.science/r/TDD-Agent-Framework-6370/.",
    "published": "2026-08-17T15:52:04Z",
    "updated": "2026-08-17T15:52:04Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.16742"
  },
  {
    "id": "2608.16733",
    "title": "GoalEvolve: From Handcrafted Algorithm Priors to Goal-Driven Evolution of Physical Design Algorithms",
    "authors": [
      "Haixu Liu",
      "Lei Zhou",
      "Yuhao Ren",
      "Yumao Wu",
      "Zhiang Wang"
    ],
    "abstract": "Physical design algorithms operate within tightly coupled, multi-stage optimization flows, where stage-local gains may vanish or induce downstream degradation. Existing program-evolution frameworks often rely on stage-local objectives or undifferentiated multi-metric feedback, which neither guarantee better final results nor identify which unmet requirement should guide the next iteration. We present GoalEvolve, a goal-driven framework that makes physical design algorithm evolution accountable for the final quality of results (QoR) of the complete flow. Given a multi-objective QoR target region, GoalEvolve converts unmet requirements into normalized target gaps, identifies the dominant bottleneck, and uses stage-resolved checkpoint evidence to locate the responsible stage. An LLM-based Teacher then narrows the search to a relevant algorithmic decision and source region, while parallel Student agents implement and validate hypotheses through full-flow evaluation. Local effects, optimization debt, and downstream retention are retained as mechanism evidence for subsequent evolution. Across eight ASAP7 designs, GoalEvolve improves post-route TNS by 30.67% on average and reduces leakage and dynamic power by 21.18% and 9.42% versus default OpenROAD. Relative to commercial-tool goals, it closes 62.20% of the normalized power gap on power-dominant designs, surpasses the TNS goals on both timing-dominant designs, and closes 32.48% of the equal-weight timing-power gap on joint designs. Across all three designs evaluated against Codex goal mode under matched budgets, GoalEvolve further improves TNS by 26.46% while reducing leakage and dynamic power by 12.38% and 0.76%, respectively.",
    "published": "2026-08-17T15:45:33Z",
    "updated": "2026-08-17T15:45:33Z",
    "categories": [
      "cs.AR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.16733"
  },
  {
    "id": "2608.16725",
    "title": "Unsupervised Anomaly Detection for Image Dataset Quality Assurance in Multi-Center Breast MRI",
    "authors": [
      "Chiara Tappermann",
      "Steffen Renisch",
      "Lars Ole Schwen",
      "Hans Meine",
      "Horst K. Hahn",
      "Eike Petersen"
    ],
    "abstract": "Corrupted, inconsistent, or anomalous data silently threatens the safety and reliability of medical AI. Despite growing regulatory recognition of dataset quality assurance (QA) for high-risk medical AI, scalable automated detection remains underdeveloped. We employ unsupervised anomaly detection (AD) and out-of-distribution (OOD) detection as an automated dataset QA mechanism for multi-center dynamic contrast-enhanced breast MRI. We build a controlled AD benchmark of 17 realistic QA-relevant anomaly types from six public datasets (protocol violations, processing errors, incorrect anatomical regions) and propose a taxonomy of radiological image anomalies based on human visual perception, enabling fine-grained analysis of AD failure modes. The benchmark includes near-, medium-far-, far-OOD samples, as well as in-distribution and external normal data. Four methods are evaluated: a projection-based method extended with a domain-specific feature extractor and a novel positional encoding, a reconstruction-based approach extended to full 3D volumes with an augmented training objective, and two unmodified hybrid OOD detection methods. Medium-far- and far-OOD samples are detected reliably, whereas near-OOD samples and external normal data from unseen institutions expose method-specific differences. The 3D reconstruction-based approach best balances detection performance (AUROC: 0.936) and generalization to unseen institutions. The projection-based method with positional encoding achieves the highest overall detection performance (AUROC: 0.954). Both hybrid methods exhibit critical failure modes, confirming that methods validated for one modality or anatomy may not generalize without domain-specific adaptation. Implants and mastectomies remain an open challenge for all methods. Our results establish a foundation and practical guidance on scalable unsupervised QA in medical AI pipelines.",
    "published": "2026-08-17T15:40:58Z",
    "updated": "2026-08-17T15:40:58Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.16725"
  },
  {
    "id": "2608.16721",
    "title": "GenRouter: Unified Workflow Routing for Agentic Image Generation",
    "authors": [
      "Harold Haodong Chen",
      "Zhiyu Hou",
      "Wen-Jie Shu",
      "Weilin Ruan",
      "Yingjie Xu",
      "Litao Guo",
      "Ying-Cong Chen"
    ],
    "abstract": "The rapid evolution of text-to-image (T2I) generation models has effectively solved the foundational challenge of raw pixel synthesis, shifting the community's focus toward fulfilling increasingly intricate user requests. While recent agentic image generation workflows enhance static inference with advanced capabilities like external knowledge retrieval and iterative reasoning, they mostly operate in isolated silos with fixed ``one-size-fits-all\" topologies. This inevitably leads to severe compute-mismatch, where simple queries are forced through computationally heavy pipelines. To bridge this gap, we present GenRouter, the first unified workflow routing framework for agentic image generation. We first formulate GenCanvas, standardizing diverse agentic pipelines into a universal set of foundational primitives and executable templates. Operating over this unified space, GenRouter adaptively routes heterogeneous prompts to their optimal workflows via (i) demand profiling, (ii) experience matching, and (iii) Pareto filtering. Extensive experiments across diverse benchmarks demonstrate that GenRouter achieves superior visual alignment while reducing execution costs by over 95% and latency by 65% compared to heavyweight static pipelines. Furthermore, the system continuously self-evolves via accumulated experience, enabling robust zero-shot generalization that boosts performance and halves computational overhead.",
    "published": "2026-08-17T15:36:45Z",
    "updated": "2026-08-17T15:36:45Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.16721"
  },
  {
    "id": "2608.16718",
    "title": "CytoFormer: A Molecularly Supervised Cell Foundation Model for Histopathology Cell Classification",
    "authors": [
      "Jialu Yao",
      "Songhao Li",
      "Alina Yu",
      "Zhi Huang"
    ],
    "abstract": "Identifying cell types directly from routine haematoxylin and eosin (H&E) histology would enable single-cell analysis at scale, but training such models has relied on manual pathologist annotations, which are slow, expensive and unreliable for many cell types. We instead supervise morphology with molecules. Imaging-based spatial transcriptomics profiles individual cells in situ on a section that can afterwards be stained with H&E, so that molecular identity and morphology are observed for the same physical cell. We assembled 81 such paired Xenium sections spanning 16 organs, derived per-cell labels by clustering, marker-gene annotation, organ-wise human review and quality control, and mapped them onto the cell types commonly reported in each organ. This yielded 15.4 million cells, each with a paired H&E image patch and one of 23 cell types, on which we trained CytoFormer, a cell foundation model with a multi-task, per-organ classification head. On spatially held-out tissue CytoFormer reached an accuracy of 0.85 and a macro-F1 of 0.78 across all 16 organs, and its predictions reproduced the tissue architecture of an entire held-out section. The representation also transfers: with the encoder frozen, a linear head on CytoFormer features performed better than six pathology foundation models on four expert-annotated benchmarks, including on organs and cell types that were not part of pretraining. Finally, in an interactive active-learning setting, CytoFormer's embeddings are markedly more label-efficient than existing pathology foundation models, detecting normal epithelium amid look-alike tumour with an F1 of 0.82 from only a few annotations and leading the strongest baseline by 0.13 in F1. CytoFormer turns paired H&E and spatial transcriptomics into a reusable, label-efficient representation for cell-level analysis of routine histology.",
    "published": "2026-08-17T15:35:03Z",
    "updated": "2026-08-17T15:35:03Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.16718"
  },
  {
    "id": "2608.16717",
    "title": "PersonaShot: Benchmarking Person-Centric Narrative Continuity in Multi-Shot Video Generation",
    "authors": [
      "Yuji Wang",
      "Yuheng Chen",
      "Teng Hu",
      "Ran Yi",
      "Yijia Hong",
      "Han Feng",
      "Weijian Cao",
      "Chengjie Wang",
      "Lizhuang Ma",
      "Jiangning Zhang"
    ],
    "abstract": "Video generation is rapidly evolving from single-shot clips to multi-shot narratives, where the human character serves as the core narrative anchor. However, existing benchmarks mainly assess character appearance or individual-shot quality, without measuring whether physical and emotional states remain coherent across cuts. They also rarely provide criterion-specific evaluation methods, although physical continuity, facial dynamics, and cinematic relations require different visual, temporal, and relational evidence. To address these limitations, we introduce PersonaShot, the first person-centric benchmark for narrative continuity in multi-shot video generation. PersonaShot contains approximately 1,000 multi-shot segments and 16 metrics spanning physical continuity, affective dynamics, and cinematic grammar. \\textbf{\\textit{1)} Narrative Continuity Benchmark:} We evaluate character coherence across three temporal levels: within-shot states, cross-shot transitions, and sequence-level trajectories. \\textbf{\\textit{2)} Human-Aligned Specialist Evaluators:} We distill reasoning from a large multimodal teacher into lightweight criterion-specific evaluators, each grounded in the visual, temporal, or relational evidence required by its metric, and align them with expert human judgments. \\textbf{\\textit{3)} Systematic Evaluation and Insights:} Our evaluation reveals distinct capability profiles across state-of-the-art models and a clear gap between perceptual quality and cross-shot narrative continuity. Even visually compelling videos frequently exhibit physical-state resets, abrupt affective shifts, and broken cinematic relations across shots. Human studies further demonstrate strong agreement between our evaluators and expert judgments.",
    "published": "2026-08-17T15:34:54Z",
    "updated": "2026-08-17T15:34:54Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.16717"
  },
  {
    "id": "2608.16709",
    "title": "MIRROR: Multimodal Intelligent Radiology Reasoning and Observation Reporter",
    "authors": [
      "Vignesh Nagarajan",
      "Sriram Venkatapathy"
    ],
    "abstract": "A radiologist reading a model's output faces two problems. The model returns a number and no reason, and any system that turns that number into readable prose can quietly add claims the model never made. MIRROR is a research prototype built to separate those failures. It chains a multi-label classifier, a Grad-CAM localizer that turns each positive finding into a named anatomical region, and a report writer that receives the labels, probabilities, and regions but never the image. Because the language layer cannot see pixels, it cannot assert a finding the classifier did not make. We are precise about what that buys: a MIRROR report's findings are auditable against the probability vector, while the sentences framing them are ordinary generated text, and we show one stating a cardiothoracic ratio the system never measured. One registry holds the taxonomy, anatomy, and phrasing for chest X-ray, brain MRI, and head CT, so adding a modality is a data change; all three are routed and tested, one is trained. On ChestMNIST that classifier reaches macro AUROC 0.729 and ranks better than chance on all 14 labels, at 1.6 to 6.8 times the precision a random ranker would get. Yet at the default 0.5 threshold it emits no positive prediction at all for 11 of them, and its excellent-looking Brier score of 0.045 sits beside the 0.047 earned by a predictor that ignores the image. The discrimination is real; the decisions are not. Under the class imbalance normal in radiology, aggregate metrics flatter models that do nothing, and should be reported against that floor.",
    "published": "2026-08-17T15:25:38Z",
    "updated": "2026-08-17T15:25:38Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.16709"
  },
  {
    "id": "2608.16707",
    "title": "Semantic Bandits: In-Context Exploration-Exploitation is Biased by Semantic Priors",
    "authors": [
      "David Eric Austin",
      "Kaheer Suleman",
      "Jackie Chi Kit Cheung"
    ],
    "abstract": "Large language models (LLMs) are increasingly deployed as decision-making agents in settings that require sophisticated environmental exploration. However, existing work has raised questions about how LLMs actually balance exploration and exploitation. Unlike classical agents, LLM agents engage with tasks through natural language, exposing them to semantic information with no formal counterpart in the task structure. We introduce the semantic bandit, an extension of the multi-armed bandit setting that explicitly considers the textual labels assigned to actions, and use it to study how semantic priors --- inductive biases arising from associations between language and expected reward learned during pre-training, shape LLM exploration behaviour. We find that semantically informative action labels reduce exploration in favour of exploitation, improving performance when aligned with the reward structure and severely degrading it when misaligned. We further find that negative rewards trigger substantially more exploration than equivalent positive rewards, consistent with an expected-scale bias induced by reward conventions common in pre-training data. Overall, we argue that the use of language to define the environment and rewards introduces unavoidable biases derived from the fact that the model is trained on word co-occurence, with implications for the reliability and robustness of LLM agents in real-world decision-making settings.",
    "published": "2026-08-17T15:25:18Z",
    "updated": "2026-08-17T15:25:18Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.16707"
  },
  {
    "id": "2608.16700",
    "title": "Learning to Unlearn: Machine Unlearning via Learning the Unlearning Behaviors",
    "authors": [
      "Hang Zhang",
      "Kaifeng Zhang",
      "Yixiao Ma",
      "Weijie Xu",
      "Ye Zhu",
      "Kai Ming Ting"
    ],
    "abstract": "Various machine unlearning techniques have been developed in response to privacy legislation requirements, enabling individuals to exercise their legal right to have their data $D_f$ removed from a machine learning model. This process is typically accomplished via the use of an unlearning function denoted as $U$. Existing methods focus on designing an intricate $U$ to unlearn $D_f \\subset D$ from a previous model $A(D)$, so that the unlearned model performs as closely as possible to the retrained model $A(D \\setminus D_f)$. However, these methods often suffer from high computational costs when dealing with massive training data, as the complex structures of $U$ become a bottleneck even for models with fewer parameters. Inspired by Learning to Optimize, we introduce the first learning-based model-agnostic approach, Learning-to-UnLearn (L2UL). Our core insight is to shift from manually designing $U$ to learning the unlearning behaviors from a distribution perspective, thereby acquiring a simple and efficient $U$ via learning. Our experimental results demonstrate that the accuracy achieved by L2UL is comparable to that of retraining while exhibiting impressive efficiency, particularly in data-intensive scenarios. Furthermore, we validate the performance and scalability of our method on larger models ResNet.",
    "published": "2026-08-17T15:18:34Z",
    "updated": "2026-08-24T10:14:23Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.16700"
  },
  {
    "id": "2608.16697",
    "title": "FabriMAE I Trust Myself? Self-Evaluating VLA Action Generation with Markov Attention Entropy",
    "authors": [
      "Aniri",
      "Chen Yilin",
      "Jinhe Bi",
      "Junfei Guo",
      "Donglai Ran",
      "Xu Bian",
      "Zengjie Jin",
      "Yujun Wang",
      "Yijun Tian",
      "Volker Tresp",
      "Fei Shen",
      "Tat-Seng Chua",
      "Yunpu Ma"
    ],
    "abstract": "Vision-Language-Action models (VLAs) integrate visual perception, language instruction, and action generation into end-to-end policies across heterogeneous architectures. However, enabling VLAs to self-evaluate their action generation reliability without external supervision remains a major challenge. Existing methods either rely on expert annotations or estimate uncertainty only from output statistics, largely ignoring internal signals. In this work, we observe that internal visual modality entropy exhibits consistent distinctions between successful and failed tasks across heterogeneous VLAs. Although VLAs' architectures differ in their action generation, we show that they share a common latent action generation abstraction evolving under visual perception, language instruction, and state input, which we formulate as a Conditional Generative Markov Chain. Based on this formulation, we propose MAE (Markov Attention Entropy), a self-evaluation framework that directly converts internal attention signals into architecture-aware reliability scores, and introduce LIBERO-Reflect, a 4,000-episode benchmark combining 2,000 standard episodes and 2,000 challenging episodes across four subsets. Extensive experiments across heterogeneous VLA architectures and diverse scenarios show that MAE consistently outperforms state-of-the-art baselines on AUPR, AUROC, and FPR@95. We further instantiate FabriMAE for verifier-free test-time action selection, showing that MAE-guided multiple sampling improves PI-family robustness on LIBERO-Plus with small observed runtime overhead.",
    "published": "2026-08-17T15:14:53Z",
    "updated": "2026-08-17T15:14:53Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.16697"
  },
  {
    "id": "2608.15818",
    "title": "FlowDance: Music-Driven Dance Video Generation with Parallel Pose and RGB Streams",
    "authors": [
      "Genying Li",
      "Boda Lin",
      "Jiachen Li",
      "Zijian Jia",
      "Haojie Zheng",
      "Yiming Wang",
      "Shuchen Weng",
      "Si Li"
    ],
    "abstract": "Music-driven dance video synthesis aims to animate a reference person according to a given music clip. The task is challenging because it requires a model to jointly learn music-to-motion correspondence, identity-preserving human animation, temporal coherence, and visually realistic video generation. We present FlowDance, a music-driven dance video generation framework that integrates explicit motion modeling with reference-preserving visual synthesis through parallel pose and RGB streams. We further introduce timestep-aware pose injection to adapt structural guidance across denoising steps and persistent identity injection to preserve the reference appearance over long video. To support this task, we further build a popularity-curated, high-resolution in-the-wild dance video dataset with synchronized music, RGB videos, 3D body motion, camera parameters, and projected 2D pose annotations. Extensive experiments show that FlowDance achieves strong performance in both dance motion generation and music-driven dance video synthesis.",
    "published": "2026-08-16T15:48:53Z",
    "updated": "2026-08-16T15:48:53Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.15818"
  },
  {
    "id": "2608.15817",
    "title": "RLCascadeRouter: Quality-Estimator-Free Cascade Routing via Reinforcement Learning",
    "authors": [
      "Shihong Huang",
      "Shengjie Wang",
      "Hong Ma",
      "Zhou Xu"
    ],
    "abstract": "The growing ecosystem of large language models (LLMs) offers huge potential to optimize performance-cost trade-offs. However, their heterogeneous capabilities and inference costs make efficiently routing queries a significant challenge. Existing paradigms are inflexible: one-shot routers commit before observing responses, whereas conventional cascades stop adaptively but follow a fixed model order. Cascade routing removes both restrictions by reconsidering whether to stop or invoke another model after each response. Current methods use a predict-then-optimize pipeline estimating response quality and future model utility. However, prediction loss for quality or utility is not equivalent to routing-decision loss. A lower prediction error does not necessarily yield a better action; a small boundary-crossing error can reverse a ``stop'' or model-selection decision. Therefore, we propose RLCascadeRouter, a quality-estimator-free framework that formulates cascade routing as a Markov decision process with actions comprising ``stop'' and model selection. It uses trajectory returns and advantages to directly optimize the performance-cost objective. Its Cascade Policy Network models candidate complementarity for model selection and remaining-action value for stopping, eliminating independent post-hoc response-quality estimators. Evaluated across ten LLMRouterBench benchmarks with thirteen LLMs, RLCascadeRouter outperforms strong baselines and achieves superior performance-cost trade-offs. It incorporates unseen models without retraining, and ablation studies validate both policy components.",
    "published": "2026-08-16T15:47:04Z",
    "updated": "2026-08-16T15:47:04Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.15817"
  },
  {
    "id": "2608.15812",
    "title": "From Generation to Matching: A Development Report on Personalized Chinese Handwriting",
    "authors": [
      "Yiwei Liu"
    ],
    "abstract": "This paper documents a frozen engineering project on personalized Chinese handwriting. The project started from approximately 200 real handwriting images from one user, covering 197 unique Chinese characters, and was initially formulated as few-shot generation of unseen characters. A sequence of canonical-centered personalization routes repeatedly exposed the same conflict: increasing structural pressure made outputs more canonical, while increasing personalization could damage identity-defining strokes. The project was therefore reset around real-human character equivalence classes. A multi-writer CASIA candidate pool showed that a USER-compatible realization often already existed among valid human samples. The task consequently changed from synthesis to character-wise matching, followed by cross-writer composition into a virtual writer. The frozen system uses real-ink features, character-specific human population percentiles, top-20 candidate pruning, and greedy hardest-first whole-row selection. On the covered target set, all 197 USER characters had real-human candidates, and the 100-character evaluation subset was covered 100/100. Knowncharacter held-out comparisons included a row judged visually almost indistinguishable from genuine USER handwriting. A 60- episode stability audit placed every episode in a predefined A-like machine-proxy region, but these were not independent human A-level judgments. The final evidence supports stable practical B-level quality, with many outputs approaching A-level under the USER-defined criterion. The report records why generation became unnecessary for this case without claiming unrestricted or universal handwriting synthesis.",
    "published": "2026-08-16T15:39:42Z",
    "updated": "2026-08-16T15:39:42Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.15812"
  },
  {
    "id": "2608.15810",
    "title": "Pricing the Risk of Runtime Compression: Anytime-Valid Admission and a Served-Output Law for Compressed Serving State",
    "authors": [
      "Fanzhe Wei",
      "Li Liu"
    ],
    "abstract": "Runtime compression of serving state trades quality for capacity with no priced guarantee: systems adapt precision on load signals with no soundness statement, and certified approaches budget request-level risk by a union bound over a pre-declared event count. We show the union budget exhausts on every long request in a production serving stack (100% of requests), and replace it with an anytime-valid, physically accounted ledger whose bound holds at every one of 352,333 admission calls on live traffic and which, in a pre-registered held-out confirmatory round, halves the exact-fallback rate at matched risk (0.30 -> 0.14) -- coverage is bought at a price the account states. We then price the remaining distance from the certified witness to what a user experiences: a machine-checked design law (TV <= tanh(a_q w_thr)) turns the served-TV target into a threshold knob, and a three-layer audit of its instantiation -- an operator-norm query envelope measured 1.5x from tight, a measured-ellipsoid replacement for the Cauchy-Schwarz ball that buys nothing (0.89x, held-out sound), and the gate's operating point (~700x) -- localizes the entire 1064x gap to the operating point, a price the law now states rather than an unknown. A priced bound is worth nothing on a request one has not seen, so the third link is the quantifier: exchangeable extrapolation across 80 serving histories replaces binary conformal prediction's vacuous certificates with order-statistic bounds that discriminate (0.41 against 0.51 calibration risk). All probabilistic kernels are Lean 4-checked (228 exported theorems, no sorry); which object deserves this machinery at all is settled empirically in a companion paper that adjudicates -- and rejects -- the natural alternative of certifying routing. What ships is an account: risk you can spend, a gap you can read off a law, and a bound that survives the request you have not seen.",
    "published": "2026-08-16T15:37:44Z",
    "updated": "2026-08-16T15:37:44Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.15810"
  },
  {
    "id": "2608.15802",
    "title": "PWLR: Pairwise Witness Local Rejection for Boundary-Aware Out-of-Distribution Detection",
    "authors": [
      "Chengyao Jia",
      "Ruixuan Wang"
    ],
    "abstract": "Out-of-distribution (OOD) detection remains challenging for image classifiers, especially when near-OOD samples lie close to in-distribution (ID) class boundaries. Recent vision-language detectors improve OOD detection through class semantics, local prompting, or LLM-generated outlier concepts, but seldom use language as explicit boundary evidence between confusing ID classes. We propose Pairwise Witness Local Rejection (PWLR), which uses an MLLM offline to describe visible local cues that favor one ID class over a specific rival class. These cue phrases are then screened with ID-only data under a frozen vision-language backbone, so that only reliable local verifiers are kept. At inference, PWLR first retains a small set of globally plausible classes, then checks whether any of them is locally supported against its most relevant rivals, and finally combines this pairwise local evidence with the global class score through calibration. Experiments on ImageNet-100 far-OOD, cleaner/challenging OOD and near-OOD benchmarks show that PWLR consistently improves strong vision-language baselines across multiple backbones. Source code will be released.",
    "published": "2026-08-16T15:27:50Z",
    "updated": "2026-08-16T15:27:50Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.15802"
  },
  {
    "id": "2608.15797",
    "title": "KV-Rescue: Recovering Reasoning Language Model KV Eviction Loss via Stepwise Interleaving",
    "authors": [
      "Minsoo Cheong",
      "Woosang Lim",
      "Vincent-Daniel Yun",
      "Sungjoo Yoo"
    ],
    "abstract": "KV-cache eviction caps the memory cost of long reasoning traces but is inherently lossy because the model decodes from a partial view of its history. Under aggressive budgets, this not only lowers accuracy but can also cause runaway degeneration, where the model produces incoherent or repetitive tokens until reaching the length limit. We characterize much of this loss as an information gapf caused by missing context, rather than a capability gap caused by limited model capacity. An evicted 7B model and a full-context 1.5B model make complementary errors, and an oracle choice between their answers recovers 79% of the accuracy gap to the full-KV 7B model. Based on this observation, we propose KV-Rescue, a training-free inference framework that bridges the information gap introduced by KV eviction using a lightweight full-context helper. KV-Rescue interleaves reasoning steps from the two models into a shared trajectory. An online detector uses entropy and compressibility to terminate the generation of incoherent or repetitive base-model candidates early. Across five math benchmarks with Qwen2.5-Math 7B and 72B, KV-Rescue recovers an average of 87% of the accuracy lost to eviction at eviction budget B=64. A decode-cost analysis further shows that preventing runaway degeneration cuts base-model token generation by 43% on average.",
    "published": "2026-08-16T15:23:25Z",
    "updated": "2026-08-16T15:23:25Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2608.15797"
  },
  {
    "id": "2608.14863",
    "title": "Evaluating Agentic Code Repair Capabilities in Distributed Systems",
    "authors": [
      "Yibo Yan",
      "Huijuan Wang",
      "Junzhou He",
      "Yizhuo Liang",
      "Shaoyu Wang",
      "Huanchen Sun",
      "Seo Jin Park"
    ],
    "abstract": "LLM-based coding agents have advanced rapidly on single-process SWE tasks, with frontier models now clustering in the high-70s on SWE-bench Verified. Distributed-system debugging, however, remains an under-explored regime: bugs span processes, nodes, and protocol interactions, with root causes rarely recoverable from source alone and brute-force exploration intractable across non-deterministic interleavings. This leaves two gaps in LLM and agent evaluation: no code-repair benchmark targets distributed-system bugs, and no controlled study isolates how much externally provided debugging context changes agent success on them. We introduce DDBench, a code-repair benchmark of 60 historical bugs mined from 13 open-source distributed systems, partitioned into three difficulty tiers. DDBench evaluates every case under two matched conditions: a symptom-only condition where the agent receives only the bug symptom and repository, and a context-augmented condition where it additionally receives a bounded debugging context (logs, traces, runtime state, and targeted code-investigation notes), isolating the effect of debugging context from model capability. The evaluation of ten LLMs on DDBench reveals several findings. First, distributed debugging exercises a reasoning dimension that single-process benchmarks do not surface: models' pass rates span 61 pp, and pairwise bootstrap separates 9 of 15 top-tier model pairs at p < 0.05 on DDBench's hardest case-set. Second, bounded debugging context lifts aggregate pass rate by +18.1 pp, and the lift is asymmetric: weaker models gain pass rate, while stronger models gain efficiency. Third, debugging context requires careful curation, as even faithful debugging context can sometimes mislead LLMs.",
    "published": "2026-08-14T19:59:56Z",
    "updated": "2026-08-14T19:59:56Z",
    "categories": [
      "cs.SE",
      "cs.AI",
      "cs.DC"
    ],
    "url": "https://arxiv.org/abs/2608.14863"
  },
  {
    "id": "2608.14854",
    "title": "Zero-MELO: Test-Time Evidence Calibration with Multimodal LLMs for Zero-Shot Micro-Gesture Recognition",
    "authors": [
      "Chengyan Wang",
      "Hanliang Xie",
      "Yueyi Yang",
      "Haoyu Chen"
    ],
    "abstract": "While Multimodal Large Language Models (MLLMs) excel in general video understanding, their capability in fine-grained and motion-centric tasks remains limited. This limitation is particularly critical in micro-gesture recognition (MGR), where micro-gestures (MGs) - subtle, short-duration, and spatially localized human movements - serve as key discriminative signals for implicit affective analysis, yet are easily neglected following common prompting practices. Although MGR has been intensively studied by many discriminative approaches, the use of MLLMs for MGR is underexplored, with notably poor performance. We hypothesize that the motion-sensitive representation ability of MLLMs is constrained by their inherent single-pass forward inference, which can be substantially enhanced through carefully designed test-time guidance. Motivated by this, building on our prior findings regarding temporal insensitivity in Video LLMs, we diagnose zero-shot MGR errors in the Negative Log-Likelihood (NLL) space. We observe that MLLMs suffer from two bottlenecks: 1) insufficient localized evidence and 2) severe score biases driven by language and motion-agnostic appearances. Thus, we propose a novel test-time evidence calibration framework that improves both reasoning details and prediction reliability. Specifically, we introduce a tree search mechanism to progressively acquire localized, fine-grained visual evidence, coupled with a test-time calibration module to mitigate score biases. The multi-cue fusion module then integrates evidence from multiple cues without relying on a single cue for final prediction. Our framework achieves mean-class accuracies of 26.84\\% on iMiGUE and 22.10\\% on MA-52, significantly outperforming the Qwen2.5-VL baseline, which produces 16.15\\% and 10.20\\%, respectively. The code will be available at https://zero-melo.github.io/Zero-MELO.",
    "published": "2026-08-14T19:50:31Z",
    "updated": "2026-08-14T19:50:31Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.14854"
  },
  {
    "id": "2608.14851",
    "title": "Discovering High-Quality Chess Puzzles with Offline Reinforcement Learning",
    "authors": [
      "Allen Nie",
      "Anirudhan Badrinath",
      "Nicholas Tomlin",
      "Timothy Dai",
      "Carissa Yip",
      "Rose E Wang",
      "Emma Brunskill",
      "Chris Piech"
    ],
    "abstract": "Learning and skill mastery require extensive and deliberate practice. In many learning settings, producing high-quality pedagogical materials can require a high level of domain expertise and be very time-consuming. Pedagogical materials often need to train students to engage in different thinking patterns. In some domains, such as chess, puzzles are used to help students practice their skills in calculating the next moves and recognizing known patterns on a board. Giving students a practice set of puzzles to help them learn different modes of thinking is challenging because the teacher needs to carefully balance between different motifs and how many look-ahead steps a student needs to perform. Popular online platforms like Chess.com and Lichess offer players millions of puzzles. Unlike chess tactics puzzles procured by human experts, where chess beginners can learn valuable insights, these puzzles are automatically generated and often regarded as having low pedagogical value. These platforms also rely on a heuristic to recommend puzzles to users for practice. Using the user history data over an entire year, a total of 1.5 billion puzzle-solving histories, we learn the pedagogical value of a puzzle and how to automatically choose a set of puzzles to better support chess learners using insights from offline reinforcement learning. We show that using offline policy evaluation, our trained policy has significant impact on beginners with puzzle-solving Elo range of 100--1000, particularly for the group of beginners whose learning growth was stagnant. We also performed a qualitative analysis of the puzzles discovered by our model by collecting annotation ratings from expert chess players. The success of our pipeline shows promise for a future where we can understand the pedagogical values of practice items given general user interaction data.",
    "published": "2026-08-14T19:46:29Z",
    "updated": "2026-08-14T19:46:29Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.14851"
  },
  {
    "id": "2608.14843",
    "title": "Writing Style Similarity Reflects Academic Genealogy",
    "authors": [
      "Cameron Manzo"
    ],
    "abstract": "As authorship attribution systems are increasingly deployed to detect ghostwritten and AI-generated papers, their errors can support accusations against legitimate authors. These systems assume each author's style is their own. Researchers, however, study under advisors, and inherit their stylistic quirks. We build a corpus of arXiv authors with $\\geq 2$ solo papers from the Mathematics Genealogy Project graph, giving $5{,}803$ total authors and $2{,}501$ ground-truth advisor-student pairings. Using embeddings from a fine-tuned model, advisors sit $39.9\\%$ closer in cosine distance to their students than a random same-field author does. Two open encoders reproduce the effect at $12.6\\%$ and $14.5\\%$. \\emph{Academic siblings}, two students of one advisor who may never have met, sit $30.4\\%$ closer across $8{,}360$ pairs, even when they studied at different institutions. Pairs who share only an institution and a field show negligible similarity. Given a closed-set attribution task over the same corpus, the system's errors occur on the true author's advisors and academic siblings $11$ times more often than chance.",
    "published": "2026-08-14T19:35:39Z",
    "updated": "2026-08-14T19:35:39Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.14843"
  },
  {
    "id": "2608.14841",
    "title": "What the Reranker Sees: Multi-Aspect Page Annotation for Long-Document Multimodal Question Answering",
    "authors": [
      "Guanchen Wu",
      "Jiayuan Ding",
      "Subhabrata Mukherjee",
      "Carl Yang"
    ],
    "abstract": "Long-document visual question answering (VQA) over documents of tens to hundreds of pages mixing text, tables, charts, and figures typically follows retrieve-then-read pipelines. In our setting, the bottleneck shifts from retrieval recall to reranker-side evidence selection: on MMLongBench-Doc, BGE-M3 reaches Recall@20 = 0.86 but only F1@5 = 0.254, and even the visual retriever ColPali reaches only F1@5 = 0.332; a text-only rerank LLM seeing only raw snippets misses table, chart, and layout evidence even when the upstream retriever encoded images. We propose Trident, with two complementary components: Trident-R, a retriever-agnostic LLM reranker that converts each candidate into an LLM-readable semantic record, including a visual caption, section path, entity tags, multi-axis concept hits, and a text snippet, then performs a single adaptive-K rerank call; and Trident-S, a generation-side module that prompts the VLM under topical, entity, and structural lenses before synthesis. On two long-document datasets, the annotation+rerank protocol substantially improves retrieval F1 across five heterogeneous pools, with every reranked pool exceeding the strongest adaptive-K baseline PageIndex. An LLM rerank without the annotation barely changes first-hit ranking, indicating the lift comes from the structured annotation. Trident-S targets open-ended synthesis questions by design, adding up to 6.6 points in generation accuracy on these questions. The best Trident configuration is the strongest downstream QA pipeline in our evaluation, with rankings consistent across two LLM judges (kappa = 0.913).",
    "published": "2026-08-14T19:29:42Z",
    "updated": "2026-08-14T19:29:42Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.14841"
  },
  {
    "id": "2608.14835",
    "title": "OvDSGG: End-to-End Open-Vocabulary Dynamic Scene Graph Generation",
    "authors": [
      "John Helsby",
      "Yi Yang",
      "Bodo Rosenhahn",
      "Michael Ying Yang"
    ],
    "abstract": "Dynamic scene graphs (DSGs) capture spatio-temporal interactions across videos as $\\langle$subject, predicate, object$\\rangle$ triplets, and underpin downstream tasks such as video captioning, video question answering, and action analysis. However, end-to-end dynamic scene graph generation (DSGG) methods are closed-set: they recognize only objects and predicates from a fixed training vocabulary and struggle with the long-tailed distribution of rare concepts, severely limiting their real-world applicability. Existing open-vocabulary models typically inherit pretrained large language models, resulting in multi-stage training and inference with substantial cost. We introduce OvDSGG, the first end-to-end framework for open-vocabulary DSGG. OvDSGG builds on top of an open-vocabulary Spatial Backbone and a Temporal Backbone; we further propose a Triplet Feature Extraction Module that bridges them, and a Visual-Language Alignment Module that preserves open-vocabulary recognition by learning an adaptive decision boundary in the joint visual-language feature space, without expensive knowledge distillation in existing methods. We further introduce a rigorous open-vocabulary DSGG benchmark adapted from Action Genome, with disjoint Base/Novel splits for both objects and predicates. OvDSGG significantly outperforms open-vocabulary baselines across all metrics, with zero-shot Recall@$K$ scores 10.0--20.4 percentage point higher than the next-best baseline, while on closed-set DSGG remaining competitive with state-of-the-art models. Code and benchmark are publicly available at https://github.com/jhelsby/OvDSGG/.",
    "published": "2026-08-14T19:12:40Z",
    "updated": "2026-08-14T19:12:40Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.14835"
  },
  {
    "id": "2608.14829",
    "title": "Modality-Invariant Coarse-to-Fine Retinal Image Registration",
    "authors": [
      "Bo Wen",
      "Nehal Nailesh Mehta",
      "Melanie Tran",
      "Dirk-Uwe Bartsch",
      "William Freeman",
      "Truong Nguyen"
    ],
    "abstract": "Retinal image registration is essential for ophthalmic diagnosis, longitudinal disease monitoring, and multimodal retinal image analysis. Existing retinal registration methods are typically modality-dependent: they are designed or optimized either for a single imaging modality in mono-modal registration or for a fixed pair of modalities in cross-modal registration. This limits their flexibility and applicability in practical scenarios involving diverse retinal imaging modalities and different combinations of them. In this work, we propose a generalizable two-stage, modality-invariant framework for retinal image registration. First, we introduce a sparse feature-matching model driven by a universal retinal vessel segmentation to achieve robust coarse global alignment across modalities. Second, we develop a modality-invariant optical flow estimation network, termed MI-RAFT, to refine the alignment through dense local registration. Extensive experiments demonstrate that the proposed method can handle diverse combinations of commonly used retinal imaging modalities, exhibiting strong modality invariance while outperforming state-of-the-art modality-dependent registration methods.",
    "published": "2026-08-14T19:03:17Z",
    "updated": "2026-08-14T19:03:17Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.14829"
  },
  {
    "id": "2608.14828",
    "title": "MINT: Min-Selection Preference Distillation for Balanced Multi-Objective Alignment",
    "authors": [
      "Tony Tu",
      "Sayan Chakraborty",
      "Ruomeng Xu",
      "Tony Qin",
      "Austin Tian"
    ],
    "abstract": "Aligning a language agent to several objectives at once is a persistent failure mode of preference-based training: when objectives are combined additively, optimization collapses onto whichever is cheapest to improve and sacrifices the rest, so a support agent learns to sound warm while giving no real help. The root issue is that an additive reward has no notion of balance. We introduce Mint (MIN-selection preference disTillation), a one-line change to preference distillation: rather than ranking sampled candidates by a weighted sum of rewards, we rank them by their weakest objective, distilling the best-balanced candidate over the most lopsided one with an unchanged DPO objective. This is the p -> negative infinity limit of a generalized-mean family spanning additive to worst-case selection. Across cooperative emotional support and adversarial negotiation, min-selection lifts both objectives while sharply cutting their imbalance; on emotional support it raises the weaker axis from 0.37 to 0.64 (p < 10^-40), surpassing human experts and persisting across full multi-turn rollouts. A turn-by-turn analysis yields our central finding: min-selection corrects imbalance in proportion to how imbalanced the reference policy is, and its benefit endures over an interaction precisely as long as that imbalance does.",
    "published": "2026-08-14T19:01:56Z",
    "updated": "2026-08-14T19:01:56Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.14828"
  },
  {
    "id": "2608.14825",
    "title": "Emergent Misaligned Communication in Long-Horizon Multi-Agent LLM Commerce",
    "authors": [
      "Zeyuan Li",
      "Lukas Petersson",
      "Alessandro Acquisti",
      "Michiel A. Bakker"
    ],
    "abstract": "Frontier LLM agents increasingly transact on behalf of separate principals, often using natural language rather than structured APIs. Much of the safety literature studies misaligned LLM behavior through adversarial-elicitation evaluations on single agents or stylized tasks. Its prevalence and structure in settings that combine long horizons, separate principals, real operational state, and inter-agent natural-language exchange remain insufficiently measured. We study 2,583 inter-agent emails from 20 one-year simulation runs of Vending-Bench Arena, a competitive vending environment spanning 13 frontier LLMs. We operationalize speech-act misalignment as emails containing false factual claims, manipulation, collusion, or threats, combining message content with ground-truth simulator state and logged reasoning traces to classify and validate such behavior. Under our primary classifier, 12.6% of emails are labeled misaligned; misalignment appears in all 20 runs and 74.7% of individual agent-runs. Both the magnitude and composition of this misalignment are preserved under repeated classification at different sampling temperatures and under full-pipeline replication with judges from two other frontier-model families. Misalignment is also reciprocal and stress-conditioned: receiving a misaligned email from a counterparty raises the odds of a misaligned reply by 1.65x, and low-inventory conditions raise them by 1.58x. Across tests of capability-asymmetric exploitation, we find no evidence that higher-capability models differentially exploit weaker counterparties, and model performance rank does not predict misalignment rates. Together, these results indicate that measurable, state-dependent misalignment can arise in competitive multi-agent environments without engineered elicitation, in patterns associated with operational scarcity and counterparty behavior rather than model capability alone.",
    "published": "2026-08-14T18:56:12Z",
    "updated": "2026-08-18T01:55:42Z",
    "categories": [
      "cs.MA",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.14825"
  },
  {
    "id": "2608.14822",
    "title": "Imagining Recovery: Inference-Time Counterfactual Realignment for Vision-Language-Action Models",
    "authors": [
      "Yanyan Zhang",
      "Disheng Liu",
      "Kai Ye",
      "Chaoda Song",
      "Xinpeng Li",
      "Mohsen Hariri",
      "Vikash Singh",
      "Yu Yin",
      "Vipin Chaudhary"
    ],
    "abstract": "Vision-language-action (VLA) models have improved the flexibility and generality of robotic manipulation, yet they remain fragile to online disruptions, such as changes in task goal, scene configuration, or robot state. Existing recovery methods often require failure data, policy retraining, or external corrective agents, introducing additional data requirements and execution risks. We propose Counterfactual Realignment (CoRe), a training-free framework that recovers a frozen VLA at inference time without failure data. Upon detecting a deviation, CoRe imagines how the policy would continue toward the current goal from a recent viable state, using synthesized observations in place of physical execution, and then minimally realigns the robot and scene to rejoin this imagined continuation before returning control to the policy. Recovery is therefore planned without physical trial-and-error, preserves completed task progress, and handles both mid-episode instruction changes and physical perturbations in a unified manner. Extensive experiments across multiple simulators, VLA backbones, and real-world settings show that CoRe improves success rates by up to 85.0 percentage points to near-nominal levels while reducing physical restorations by 42.2%, without policy fine-tuning or failure-specific recovery training.",
    "published": "2026-08-14T18:49:46Z",
    "updated": "2026-08-14T18:49:46Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.14822"
  },
  {
    "id": "2608.14820",
    "title": "Handover Analysis for Vehicular Communication with Explainability on the Fly",
    "authors": [
      "Ali Fuat Sahin",
      "Semiha Tedik Başaran",
      "Tufan Kumbasar"
    ],
    "abstract": "Handover (HO) management in vehicular networks requires fast and reliable decision-making under highly dynamic conditions. While machine learning (ML) approaches can improve HO detection by capturing complex relationships among various key performance indicators (KPIs), their black-box nature limits interpretability and operator trust. To address this, this paper investigates HO detection from an explainability-on-the-fly perspective using inherently interpretable models based on the functional analysis of variance (fANOVA) framework. The proposed models are evaluated using two real-world operator datasets and compared against a Long Short-Term Memory baseline augmented with post-hoc SHAP explanations. Unlike post-hoc approaches, the proposed framework enables immediate interpretation of model decisions without incurring additional computational overhead. This capability is particularly critical for latency-sensitive vehicular networks. The results show that fANOVA-based models achieve competitive detection performance while providing significantly reduced explanation latency compared to conventional post-hoc methods. Furthermore, feature ranking and visualization analyses reveal physically meaningful relationships between KPIs and HO occurrences that align with standardized HO mechanisms. These results demonstrate that inherently interpretable models provide an efficient and transparent solution for HO detection in next-generation vehicular networks.",
    "published": "2026-08-14T18:46:41Z",
    "updated": "2026-08-14T18:46:41Z",
    "categories": [
      "eess.SP",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.14820"
  },
  {
    "id": "2608.14815",
    "title": "AI Agents and the Future of VIS",
    "authors": [
      "Chen Zhu-Tian",
      "Nam Wook Kim",
      "Saeed Boorboor",
      "Shivam Raval",
      "Pan Hao",
      "Qianwen Wang",
      "Vidya Setlur"
    ],
    "abstract": "Recent advances in agents (i.e., autonomous, goal-driven AI systems that iteratively observe, act, and learn from their environments) offer a fundamentally different approach from traditional AI models that passively respond to input. These AI agents are rapidly reshaping how we approach data-intensive tasks and providing new opportunities for the VIS community. Imagine an agent autonomously generating visualizations to analyze complex data, discovering patterns collaboratively, testing hypotheses, and communicating visual insights at a speed and scale beyond human capability. Yet, the emergence of these powerful systems raises critical questions that the VIS community must address: Could autonomous agents eventually replace human data scientists, and if not, how might they best collaborate? Are current visualization techniques and interfaces, originally designed for human analysts, suitable for agent interactions? How can VIS designers effectively integrate agents into their workflows without compromising human agency? And to what extent should agents help shape and educate the next generation of visualization researchers? Through a mix of keynote talks, paper presentations, and an agentic VIS challenge, this workshop invites researchers and practitioners to share innovative ideas, explore these questions, and discuss strategies to transform the impact of VIS for a future where human and AI agents co-exist.",
    "published": "2026-08-14T18:41:08Z",
    "updated": "2026-08-14T18:41:08Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2608.14815"
  }
];
