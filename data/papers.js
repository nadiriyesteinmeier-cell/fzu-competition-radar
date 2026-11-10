window.PAPER_DATA_UPDATED_AT = "2026-11-10";
window.PAPER_ITEMS = [
  {
    "id": "2611.12886",
    "title": "Reframe: Observation-Aligned Multi-Teacher On-Policy Distillation for Agentic Visual Reasoning",
    "authors": [
      "Haozhi Yuan",
      "Handong Li",
      "Yifan Zhang",
      "Qianshan Wei"
    ],
    "abstract": "Agentic reinforcement learning (RL) and multi-teacher on-policy distillation (MOPD) offer complementary routes to post-training. For visual agents, however, tool use presents two related challenges. Models may overlook useful tool-returned observations, while poorly grounded actions can limit the evidence available for subsequent distillation. We introduce Reframe, a post-training framework that treats the observation state, rather than only the output distribution, as an object of alignment. First, Ground-Drop-GRPO (GD-GRPO) trains spatial and temporal specialists with evidence-aware rewards and stochastic removal of the original visual input, encouraging them to acquire grounded evidence and use the returned observations. Second, Observation-Gated-MOPD (OG-MOPD) replaces deficient tool actions with canonical ones mid-rollout and resumes distillation from the repaired observation. The two stages complement each other, as learning to rely on tool-returned observations can help the policy benefit from observation repair. Neither stage requires a task-specific SFT cold start. Extensive experiments over 14 image and video benchmarks demonstrate that Reframe outperforms both Mix-RL and vanilla MOPD. Ablation results show that GD-GRPO increases observation dependence and tool gain compared with outcome-based GRPO.",
    "published": "2026-11-09T18:59:54Z",
    "updated": "2026-11-09T18:59:54Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.12886"
  },
  {
    "id": "2611.12885",
    "title": "World In-Context Learning for Agentic Robot Manipulation",
    "authors": [
      "Heng Fang",
      "Zehui Guo",
      "Yuehan Zhang",
      "Mingyang Du",
      "Dingkang Liang",
      "Xiang Bai"
    ],
    "abstract": "Trained action policies write manipulation skill into network weights, tying what is learned to the distribution it is learned from. In-context learning (ICL) avoids this coupling but has not matched trained policies, because a demonstration recorded in another scene carries no feedback from the world the robot currently faces. We observe that what an agent learns in context is semantic, recording task steps and object roles rather than visual appearance, so experience gathered in one world transfers to another. Based on this insight, we propose World In-Context Learning (WICL), a paradigm in which a frozen model starts from a demonstration, rehearses the task in a world such as a simulator, and writes the feedback into its context rather than its weights. We build RoboScript, a modular infrastructure that implements WICL for agentic manipulation. From a single demonstration, RoboScript learns each task through rehearsal in simulation, freezes the learned knowledge as a Task Memory, and deploys the frozen memory on new scenes with data isolation that ensures every deployment input is available on a real robot. On all 50 tasks of RoboTwin 2.0, RoboScript reaches 83.4% mean success across clean and randomized settings with one demonstration per task and no gradient updates, exceeding the strongest trained action policy by over 20 points. The method generalizes across visual distributions, improves through reflection, scales with the foundation model, and transfers to a physical dual-arm robot through cross-embodiment memory adaptation. With a world in the loop, a robot can learn a manipulation task in its context as well as it learns one in its weights. All code is available at https://github.com/ArcheOne-AI/RoboScript",
    "published": "2026-11-09T18:59:45Z",
    "updated": "2026-11-09T18:59:45Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2611.12885"
  },
  {
    "id": "2611.12884",
    "title": "Guiding Data Allocation for Robust Subpopulation Generalization",
    "authors": [
      "Zhaoying Pan",
      "Yipei Wang",
      "Shenyu Lu",
      "Xiaoqian Wang"
    ],
    "abstract": "Machine learning models often achieve high average accuracy in the training data while performing poorly on test data due to subpopulation shift. A common data-centric solution is to enforce balanced subgroup proportions, but full balance can be costly, infeasible, and not always necessary. In this work, we study whether balanced training data is the unique optimal configuration for robust subpopulation generalization. We extend a Gaussian feature-model framework to theoretically characterize the performance landscape across general training subgroup distributions. We show that multiple configurations, including substantially imbalanced ones, can perform comparably to the balanced one. We further derive gradient-based directions for adjusting subgroup proportions to improve adjusted accuracy and worst-group accuracy more efficiently. These findings suggest that strategically allocating data offers a more flexible and principled path to robust performance than simple balancing. The code is available at https://github.com/zhaoyingpan/subpop-data-allocation.",
    "published": "2026-11-09T18:59:40Z",
    "updated": "2026-11-09T18:59:40Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.12884"
  },
  {
    "id": "2611.12883",
    "title": "Beyond Modality Preference: Controlling Multimodal Arbitration under Modality Conflict in MLLMs",
    "authors": [
      "Zhaoying Pan",
      "Shenyu Lu",
      "Jun Hui Wong",
      "Junyi Chai",
      "Xiaoqian Wang"
    ],
    "abstract": "Multimodal large language models (MLLMs) integrate information across modalities, but become unreliable when those modalities disagree. Under conflicting inputs, MLLMs may favor modalities that are not the most reliable for the task, thus motivating inference-time control of modality arbitration. We identify a small set of attention heads, termed arbitration heads, that causally influence whether predictions follow visual or textual evidence. Building on this, we introduce a lightweight, training-free intervention that biases these heads toward a designated trusted modality at inference time. The identified heads are stable across calibration set sizes and generalize across settings, and steering them enables effective bidirectional control of modality reliance across diverse benchmarks. Our findings identify an effective control mechanism to align MLLM predictions with task-specified modality priorities. The code is available at https://github.com/zhaoyingpan/modality-arbitration.",
    "published": "2026-11-09T18:59:36Z",
    "updated": "2026-11-09T18:59:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.12883"
  },
  {
    "id": "2611.12879",
    "title": "Grasping the Future: Joint 3D Hand-Object Forecasting From Internet Videos",
    "authors": [
      "Rustin Soraki",
      "Matthew Wallingford",
      "Ryan Aby",
      "Brandon Chee",
      "Jason Ren",
      "Ali Farhadi",
      "Homanga Bharadhwaj",
      "Roozbeh Mottaghi"
    ],
    "abstract": "To interact with an object, we need to anticipate both how it will move and how our hands should move with it. Human videos capture these relationships across everyday activities, offering a natural source for learning to predict future interactions. Learning from them requires recovering motion from completed interactions and using it to anticipate what could happen next. We present $\\textit{Grasping-the-Future}$, a unified generative model of joint 3D hand-object motion, including wrist motion, finger articulation, and object position and orientation. Through masked spatiotemporal completion and flow matching, we train a single model for several prediction tasks: forecasting future interactions, predicting hand motion given object motion or vice versa, generating both trajectories toward a desired final object pose, and completing partially observed interactions. We explicitly model hand-object relations and incorporate contact constraints to help preserve grasp relationships during motion. To obtain 3D supervision from internet videos, we develop a scalable pipeline that combines pretrained perception models with joint geometric optimization to reconstruct completed interactions. We combine these recovered trajectories with annotated interaction datasets as training data for all tasks. We demonstrate strong performance across all tasks, outperforming released forecasters on datasets with 3D annotations. Moreover, we show geometric and physical plausibility of the predicted trajectories by retargeting them to a robotic embodiment. Videos are available at https://grasping-the-future.github.io.",
    "published": "2026-11-09T18:59:01Z",
    "updated": "2026-11-09T18:59:01Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.12879"
  },
  {
    "id": "2611.12875",
    "title": "Click3R: Interactive Stereo 3D Reconstruction with Sparse Correspondence Clicks",
    "authors": [
      "Hao Gu",
      "Jin Yao",
      "Zezhou Cheng"
    ],
    "abstract": "Despite impressive progress, existing feed-forward large 3D reconstruction models produce a single, irrevocable prediction. When these models fail, there is no mechanism to correct their mistakes. To address this limitation, we introduce Click3R, a framework for interactive geometric correction of feed-forward models using sparse human correspondence clicks. Given an image pair and a small set of cross-view point correspondences provided by a user, Click3R injects geometric constraints into the 3D reconstruction networks through a lightweight point correspondence adapter, enabling the model to resolve ambiguities in challenging scenarios such as repetitive textures, symmetric structures, large viewpoint changes, or textureless regions. To evaluate interactive reconstruction, we curate a challenging benchmark specifically designed to expose failure modes of existing feed-forward 3D reconstruction methods. Experiments show that Click3R reduces reconstruction error with as few as a single correspondence click, improving performance on both standard and our curated benchmarks. Our results highlight that sparse human interaction provides an effective and practical mechanism for correcting geometric reconstruction errors.",
    "published": "2026-11-09T18:58:02Z",
    "updated": "2026-11-09T18:58:02Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.12875"
  },
  {
    "id": "2611.12872",
    "title": "HiVe-Mem: Interleaving Horizontal Memory Expansion and Vertical Evidence Composition for Multimodal Agents",
    "authors": [
      "Haozhen Zhang",
      "Bohan Liu",
      "Jianzhu Bao",
      "Qingyuan Liu",
      "Haodong Yue",
      "Xiao Li",
      "Zi Pong Lim",
      "Wenya Wang"
    ],
    "abstract": "As multimodal agents accumulate increasingly long interaction histories, effectively retrieving and utilizing past information becomes critical for long-term interaction. Existing memory systems typically rely on semantic retrieval over compressed memories and expose predefined representations, which may miss relevant memories and overlook heterogeneous evidence needs across queries. We introduce \\textbf{\\hivemem}, a multimodal memory framework that interleaves \\textbf{\\textsc{H}}or\\textbf{\\textsc{i}}zontal Memory Expansion with \\textbf{\\textsc{Ve}}rtical Evidence Composition. For horizontal memory expansion, \\hivemem organizes memory episodes into a relational graph using textual and visual anchors, expanding semantically retrieved seeds with related neighbors to recover complementary information. For vertical evidence composition, each retrieved memory retains multiple evidence forms, including compact summaries, captions, grounded visual views, raw images, and interaction history. A lightweight trainable selector independently composes an evidence subset for each retrieved memory, enabling query-adaptive utilization of heterogeneous multimodal information. This two-dimensional design jointly broadens memory coverage and adapts the evidence contributed by individual memories. Experiments across three multimodal memory benchmarks show that \\hivemem consistently improves task performance across base models while reducing token consumption by about 90\\% compared with the most efficient competing multimodal baselines.",
    "published": "2026-11-09T18:57:00Z",
    "updated": "2026-11-09T18:57:00Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.12872"
  },
  {
    "id": "2611.12870",
    "title": "SWAM: Scaling World Action Models with Cross-Modal Alignment",
    "authors": [
      "Yu Zhou",
      "Xinyuan Xia",
      "Xuankun Yang",
      "Yinghao Yang",
      "Wendi Chen",
      "Bowen Liu",
      "Jianhan Ma",
      "Weicheng Duan",
      "Jun Lv",
      "Cewu Lu",
      "Yanwei Li"
    ],
    "abstract": "World action models jointly predict video and actions conditioned on language. Existing studies focus primarily on architectures and training mechanisms, typically treating language-video alignment acquired through video pretraining as an established foundation. However, introducing action learning may impair this alignment. Principled guidance on data and supervision design for maintaining language-video alignment during action learning remains limited. To investigate this, we curate a pool of approximately 47,000 hours of general videos, egocentric videos, UMI demonstrations, and robot demonstrations. Building on this, we systematically study how language-video supervision, language-video-action supervision, and the joint use of these two forms affect WAM performance. In particular, we examine how language annotation quality affects pretrained language-video capabilities, and how action supervision from UMI and robot demonstrations extends these capabilities to language-video-action modeling. To better scale the model, we further conduct detailed studies on joint training recipe and model architecture. Under a fixed training budget, mixing egocentric videos and UMI demonstrations improves control generalization. Model architecture affects how effectively these experiences are used, while scaling pretraining under the selected configuration brings further gains. The resulting recipe, post-trained on RoboTwin Clean demonstrations only, achieves success rates of 88.10% and 61.56% under Easy (Clean-to-Clean) and Hard (Clean-to-Random) conditions, respectively. Our model achieves 40.00% SR across three real-world tasks, compared with 23.33% for the strongest baseline, indicating better generalization under unseen conditions. We release the curated data, training code, and model weights.",
    "published": "2026-11-09T18:55:04Z",
    "updated": "2026-11-09T18:55:04Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2611.12870"
  },
  {
    "id": "2611.12865",
    "title": "Shortcuts and Boundaries: Verifiable RL Misalignment and Contextual Safety Learning",
    "authors": [
      "Xinjie Shen"
    ],
    "abstract": "Reinforcement learning (RL) can improve an agent's task capability while reinforcing behavior that violates contextual execution requirements. We study this reward-driven misalignment, including reward hacking, through verifiable reward--context conflicts, where compliant task completion remains feasible while some executable shortcuts earn more reward than every compliant strategy. Encoding these conflicts in task dynamics lets us generate diverse interactive environments at scale and derive compliance feedback from execution histories. In resource and reporting workflows, task optimization increases real productivity through unauthorized resource use or raises reported scores while actual work declines. Controlled changes in the training distribution show that minority conflict exposure can still lead to widespread shortcut acquisition, reaching 97.9\\% certified profitable violations on an API task under a 25\\% conflict mixture after 128 updates. The same contextual checks supply a simple binary penalty that supports joint capability and compliance gains and partially mitigates acquired violations. Learned safety adapts to expanded authorization and transfers across mechanisms into workflows with evolving evidence and approval requirements. On 32 unseen changing-evidence tasks, resource-trained safety increases safe completion from 53.1\\% to 89.1\\% relative to task-only training, while both policies achieve full real work. These results connect a verifiable account of reward-driven misalignment with scalable task construction and safety learning that remains useful under changing execution requirements.",
    "published": "2026-11-09T18:52:20Z",
    "updated": "2026-11-09T18:52:20Z",
    "categories": [
      "cs.AI",
      "cs.CR"
    ],
    "url": "https://arxiv.org/abs/2611.12865"
  },
  {
    "id": "2611.12855",
    "title": "AI-based characterization of lymphoid structures and the tumor microenvironment reveals lower mature tertiary lymphoid structures, lymph-node follicles, and plasma cells after neoadjuvant therapy in lung squamous cell carcinoma",
    "authors": [
      "Arne Schmidt",
      "Justin Nieder",
      "Cornelius Boehm",
      "Julika Ribbat-Idel",
      "Marius Teodorescu",
      "Marie-Lisa Eich",
      "Simon Schallenberg",
      "Gabriel Dernbach",
      "Katja Lingelbach",
      "Miriam Haegele",
      "Timo Milbich",
      "Adam Narai",
      "Maria Stoelben",
      "Hans Pinckaers",
      "Lukas Ruff",
      "Kai Standvoss",
      "Christian Watermann",
      "Christiane Kuempers",
      "Sven Perner",
      "Verena Sailer",
      "Jasmin Tiebach",
      "Torsten Goldmann",
      "Sebastian Marwitz",
      "Johannes Braegelmann",
      "Frederick Klauschen",
      "Marija Pezer",
      "Rosemarie Krupar"
    ],
    "abstract": "Mature, germinal centre-bearing tertiary lymphoid structures (TLS) and mature lymph node follicles (secondary lymphoid structures, SLS) sustain the plasma cell response that shapes outcome and immunotherapy benefit in lung cancer. How this loco-regional axis differs between neoadjuvant-treated and therapy-naive tumors is poorly defined. We analyzed H&E whole-slide images of resected tumors and paired proximal and distal lymph nodes from matched neoadjuvant-treated (neoLUSC, n=20) and therapy-naive (naivLUSC, n=20) lung squamous cell carcinoma (LUSC) patients. Aignostics Atlas H&E Tissue Analysis (HETA) models quantified cell densities per tissue compartment and cell-cell co-localization; a dedicated deep-learning model validated against pathologist annotations detected TLS and SLS and graded their maturity. Prognostic value was tested in an independent cohort (n=458; 46 treated). In neoLUSC tumors, stromal plasma cell density was 72% (p=0.004) and stromal lymphocyte density 48% (p=0.015) lower than in naivLUSC; macrophages and granulocytes did not differ significantly. Total and immature TLS did not differ, whereas mature TLS in the tumor (p=0.034) and mature SLS in the tumor-distal lymph node (p=0.003) were lower in neoLUSC patients. Peri-TLS plasma cell density correlated with tumor lymphocyte density in naivLUSC (rho=0.54, p=0.017) but not in neoLUSC tumors (rho=0.07). In the validation cohort, stromal plasma cell density (HR 0.69, p=0.011) and lymphocyte-plasma cell co-localization (HR 0.66, p=0.004) were associated with longer survival, and neoadjuvant status with shorter survival (HR 1.50, p=0.026). Neoadjuvant therapy is thus associated with fewer mature lymphoid structures and weaker coupling of the humoral compartment to the tumor rather than uniformly lower immune readouts. The stromal plasma cell/co-localization axis is a candidate prognostic biomarker.",
    "published": "2026-11-09T18:45:06Z",
    "updated": "2026-11-09T18:45:06Z",
    "categories": [
      "cs.CV",
      "q-bio.QM"
    ],
    "url": "https://arxiv.org/abs/2611.12855"
  },
  {
    "id": "2611.12852",
    "title": "What kills $v$-prediction? A Patch-wise PCA Perspective on Pixel-Space Flow Matching",
    "authors": [
      "Tianze Luo",
      "Haofeng Huang",
      "Yuan Yao"
    ],
    "abstract": "Latent Diffusion Models dominate generative modeling but face two-stage training complexity and the inherent reconstruction limits of pre-trained autoencoders. Pixel-space Flow Matching offers a simplified end-to-end alternative yet often encounters training difficulties when using the standard $v$-prediction objective. Recent research attributes this difficulty to the off-manifold nature of noised targets, motivating a shift toward $x$-prediction. In this paper, we investigate this explanation through patch-wise Principal Component Analysis (PCA) and identify a bandwidth bottleneck. The velocity in minor components is largely determined by the raw noisy input, requiring deep backbones to preserve information that competes with principal-component modeling. Through controlled experiments and representation analysis, we further examine why $x$-prediction remains effective: its parameterization provides a raw-input bypass, while its learned input representation can spontaneously concentrate on principal directions. Under low-rank observations, our analysis of the induced flow characterizes $x$-prediction as an implicit conditional-mean decoder, reconstructing discarded components from the retained information. These observations motivate the Raw-injected Transformer (RiT), which combines a lightweight raw-conditioned decoder with an output-side shortcut to separate semantic modeling from raw-state propagation. Our method restores effective $v$-prediction and achieves competitive performance on ImageNet $256\\times256$, providing a perspective on the interaction between prediction objectives and architectural bandwidth.",
    "published": "2026-11-09T18:44:37Z",
    "updated": "2026-11-09T18:44:37Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.12852"
  },
  {
    "id": "2611.12834",
    "title": "Programming Prescience: Issues in Human Construction of Forecasting Bots",
    "authors": [
      "Priya Dhawka",
      "Benjamin Wilson",
      "Andrew Head"
    ],
    "abstract": "AI models' growing capacity for complex reasoning has made them attractive tools for forecasting, or the systematic prediction of the future based on past and present data. However, should AI forecasting systems be adopted, human builders will shoulder the work of building and evaluating them. In this paper, we explore what this work looks like with a qualitative interview study with 15 builders of forecasting bots, sampled from among successful participants in a recent AI forecasting competition. Our analysis surfaces the challenges around (1) tuning a bot to acquire factual research, (2) implementing coherent reasoning, and (3) understanding how well one's bot actually does. During their work, builders frequently introduced complexity that did not pay off, and tested in ways that were opportunistic and piecemeal. Our detailed account of their challenges helps clarify what problems should be targeted in upcoming innovations in process, tools, and human-AI teaming for forecasting.",
    "published": "2026-11-09T18:33:13Z",
    "updated": "2026-11-09T18:33:13Z",
    "categories": [
      "cs.HC",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.12834"
  },
  {
    "id": "2611.11510",
    "title": "Reaching Is Not Finding: Map-Anchored Visual Prompting for the Last Mile of Aerial Vision-Language Navigation",
    "authors": [
      "Ningbo Li",
      "Kebin Liu",
      "Jingcan Chen",
      "Weichen Zhang",
      "Rong Ding",
      "Yunhao Liu",
      "Mo Li"
    ],
    "abstract": "Aerial vision-language navigation (VLN) asks a drone to find an object described in natural language. The description usually locates the object relative to named landmarks, such as streets and buildings. We observe that current navigators often bring the drone close to the target and then stop at the wrong place: they reach the target without finding it. This gap is shared by navigators of very different designs, from imitation learners to a fine-tuned 7B vision-language model. A simple test reveals the cause. When we replace the target object in the instruction with another one next to the same landmarks, no navigator goes to it, and most stop where they did before. Navigators learn to reach the landmarks, not to identify the described object. We therefore propose MAP-VP, a plug-and-play module for the last step. After any navigator stops, MAP-VP draws the landmarks named in the instruction onto the drone's current view, using the landmark outlines that the benchmark provides on a map. A fine-tuned 4B vision-language model then locates the target relative to these landmarks. The training data are generated automatically from the benchmark annotations. Neither drawing the landmarks nor fine-tuning helps much alone, but together they are highly effective. Without retraining any navigator, MAP-VP significantly improves all six navigators we test on CityNav. It roughly doubles the success rate of the two strongest trained navigators, raising HETT from 25.9% to 54.6% and FlightGPT from 24.2% to 48.9%, whereas CityNav's official detector-based last step adds less than two points to HETT.",
    "published": "2026-11-08T17:33:37Z",
    "updated": "2026-11-08T17:33:37Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.11510"
  },
  {
    "id": "2611.11509",
    "title": "Review the Episodes, Refine the Lessons: Simple Memory Evolution for Embodied Agents",
    "authors": [
      "Yifei Yao",
      "Yude Zou",
      "Xing Gao",
      "Guanbo Jiao",
      "Yukai Wang",
      "Jianming Ma",
      "Weinan Zhang",
      "Chunhua Shen"
    ],
    "abstract": "Recent studies of embodied agents based on frontier multimodal large language models (MLLMs) develop harness engineering around the MLLM, such as harnesses with post-trained policies and recursive self-improvement loops. Yet whether these additions exceed the native capability of the MLLM remains unexplored. We introduce SimplEvo to explore how far an MLLM can improve under direct control when it retains its execution experience in self-written text memories. It requires no weight updates, post-trained policies, or privileged information. The MLLM writes a coordinate-free task memory once from a single demonstration. Under a strict train-test protocol, it then creates a bounded working memory on training episodes only and refines it after each episode with lessons on procedure, completion, and recovery. Both memories stay fixed at test time. On EBench, SimplEvo lifts the success rate (SR) of GPT-6-Astra under direct control from 46.7% to 81.7%, and tops the RoboDojo leaderboard with 69.63% SR and a score of 75.32. Compared with memories that also store past visual frames, SimplEvo reaches a similar SR with text memory alone while using fewer tokens. With its memories fixed, SimplEvo also generalizes to unseen layouts and randomized scene configurations. Moreover, the working memory transfers across models: written by GPT-6-Astra, it can be reused as is by weaker MLLMs and improve their performance without any adaptation of their own.",
    "published": "2026-11-08T17:33:29Z",
    "updated": "2026-11-08T17:33:29Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.11509"
  },
  {
    "id": "2611.11506",
    "title": "On the Relative Security of Prompt Injection: Mechanised Definitions, Defences and Verdicts for LLM Agents",
    "authors": [
      "Brijesh Dongol"
    ],
    "abstract": "An LLM agent that reads untrusted content, such as an email or a web page, may follow instructions hidden in it. Noninterference is too strong for such agents, since a useful agent lets untrusted content influence what it does and may disclose the user's data by design, and declassification needs a release policy written for each task. We instead state security relative to a reference agent, which runs the same plan under the same runtime monitor with a model that never obeys untrusted content. An agent is relatively secure if every leak it has is a leak the reference already has. Our framework, PlanTERS, instantiates relative security, a notion from speculative execution, with a small agent language in which the attacker chooses how the model follows instructions, a composition with runtime monitors, and attacker models that differ in what they observe. A fence theorem shows that revoking injectable tools at the first untrusted read, and never granting them back, makes every plan relatively secure at the event level on finite runs, for every model behaviour in which each injection is a single call and the model obeys on a schedule fixed in advance; with a fairness condition, this extends to possibly infinite runs. We prove or refute relative security for agents with fences, budgets, approvals, loops and dual LLMs, in Isabelle/HOL.",
    "published": "2026-11-08T17:20:48Z",
    "updated": "2026-11-08T17:20:48Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.11506"
  },
  {
    "id": "2611.11504",
    "title": "Data-informed Adaptation of Foundation Models for Causal Effect Estimation",
    "authors": [
      "Chunwei Ma",
      "Russell D Wolfinger"
    ],
    "abstract": "Due to the fundamental problem of causal inference -- the impossibility of observing counterfactual outcomes -- there is always a gap between the training goal (outcome, propensity) and the inference target (CATE, ATE). Traditional causal effect estimation revolves around setting assumptions, selecting identification strategies, and choosing causal estimators, while more recently, Causal Foundation Models (CFMs), built on Prior-Data-Fitted Networks (PFNs), ease this process by pretraining on massive synthetic prior datasets. Despite their success, such amortization makes causal inference less transparent, obscuring which assumptions the model implicitly relies on for a given dataset. The high diversity of real-world data-generating processes (DGPs) and Structural Causal Models (SCMs) makes it hard to know, a priori, which causal inference strategy is compatible with a given dataset. In this work, we focus on this compatibility between an observational dataset and method-specific assumptions, and find that geometric characteristics of data embeddings -- specifically, the variogram -- provide a useful signal of whether a given causal estimation strategy is appropriate. We develop MoE-Learner, a mixture-of-causal-experts framework that embeds a dataset under multiple assumption-specific views and uses the variogram as a counterfactual-free router to assess each expert's validity. Rather than eliminating causal assumptions, this shifts their validation from a fixed, a priori choice to a criterion that can be checked directly from data geometry. MoE-Learner achieves the best average rank on benchmark datasets (IHDP, ACIC, Lalonde). Being orthogonal to (causal) foundation models, our method builds a bridge from data characteristics to causal estimation strategy rather than proposing another CFM.",
    "published": "2026-11-08T17:17:20Z",
    "updated": "2026-11-08T17:17:20Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.11504"
  },
  {
    "id": "2611.11503",
    "title": "AgentCT: A Vision-Language Agent for Universal CT Imaging",
    "authors": [
      "Zhihao Chen",
      "Qi Gao",
      "Chuang Niu",
      "Qiegen Liu",
      "Yi Zhang",
      "Hongming Shan"
    ],
    "abstract": "Computed tomography (CT) restoration methods often use a single network for low-dose CT (LDCT), sparse-view CT (SVCT), and metal artifact reduction (MAR), despite the distinct physics of these degradations. We propose AgentCT, a vision-language agent that identifies the degradation and routes images to task-specific restoration models. A LoRA-adapted Qwen3-VL-4B controller predicts degradation type and severity, selects a specialist, and reassesses the restored image. The LDCT specialist uses an image-domain diffusion model, whereas the SVCT and MAR specialists combine projection-domain correction, data consistency, differentiable filtered back-projection, and image refinement. We evaluated the controller and specialists separately on patient-disjoint Mayo 2020 abdominal CT data across three severity levels for each degradation. The controller achieved 95.7% accuracy for degradation type and 93.9% for severity, with a 100% JSON parse rate. Using ground-truth degradation labels for routing, AgentCT achieved an overall PSNR/SSIM of 46.18 dB/0.984, compared with 44.93 dB/0.976 for AMIR and 44.29 dB/0.979 for TAMP, and attained the highest PSNR in all nine settings. For SVCT, its dual-domain specialist achieved 46.04 dB with 4.2 million parameters, compared with 44.43 dB for single-task AMIR and 43.57 dB for all-in-one AMIR with 23.5 million parameters. These results support degradation-specific CT restoration with controller-based model selection; evaluation under automatic routing and on independent clinical data remains necessary. Code is available at https://github.com/hao1635/AgentCT.",
    "published": "2026-11-08T17:11:45Z",
    "updated": "2026-11-08T17:11:45Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.11503"
  },
  {
    "id": "2611.11500",
    "title": "ForeAct: Geometry-Guided Action Learning from World Representations",
    "authors": [
      "Wei Lu",
      "Jiaxi Zhang",
      "Yunheng Wang",
      "Taowen Wang",
      "Yuetong Fang",
      "Zhenhui Zhang",
      "Shuning Zhang",
      "Zizhao Yuan",
      "Yixiao Feng",
      "Zecui Zeng",
      "Renjing Xu"
    ],
    "abstract": "Robotic manipulation requires representations that capture both scene geometry and its evolution during interaction. Existing approaches have largely treated these two aspects separately. World action models capture such dynamics by coupling action prediction with future video generation, but their reliance on iterative diffusion or rectified-flow inference leads to high computational cost, while their representations lack explicit spatial structure. Explicitly modeling scene geometry typically requires auxiliary modules that increase both parameter count and computational cost. Conversely, geometry-centric policies primarily recover observed spatial structure and often lack explicit supervision for anticipating future geometric changes during interaction. To address these limitations, we introduce ForeAct, which repurposes a pretrained video world model as a single-pass representation backbone for low-latency control. ForeAct directly processes the clean latent of the current observation in one forward pass, eliminating future-frame synthesis and iterative denoising while retaining the backbone's pretrained spatiotemporal priors. Rather than introducing a separate geometry backbone, ForeAct uses learnable tokens supervised by next-frame relative depth to shape the shared video representation through bidirectional self-attention. This compact interface turns the spatial knowledge already encoded in the backbone into a future-aware representation for action generation, with little parameter overhead. The lightweight geometry readout is used only during training and removed at deployment, enabling low-latency, geometry-aware control without depth input or an external geometry backbone. Without additional large-scale pretraining, ForeAct achieves 96.6% average success on LIBERO, 63.5% on SimplerEnv-Bridge, and a 74.4% success rate across 90 real-world rollouts.",
    "published": "2026-11-08T16:59:50Z",
    "updated": "2026-11-08T16:59:50Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2611.11500"
  },
  {
    "id": "2611.11499",
    "title": "JoMoHa: Joint Model--Harness Optimization with Reinforcement Learning",
    "authors": [
      "Xudong Wu",
      "Guangchen Lan",
      "Mingqi Yuan",
      "Jiayu Chen"
    ],
    "abstract": "The performance of language agents depends jointly on model weights and the harness. Optimizing either alone can be constrained by the other component, limiting overall performance gains. Our analysis of naive alternating training reveals progressive incompatibility between the model and harness, which increasingly interferes with task execution and may also undermine model training, leading to performance degradation. To coordinate the evolution of models and harnesses, we introduce JoMoHa, to our knowledge the first framework to jointly train an executable harness generation policy and a task execution policy through reinforcement learning. JoMoHa outperforms the evaluated weight-only and harness-only baselines and achieves the highest success rates among the evaluated methods on ALFWorld, WebShop, and DBBench, averaging 70.3% and reaching 97.0% on ALFWorld. By learning both task execution and runtime improvement from its own generated trajectories, JoMoHa performs recursive self-improvement (RSI).",
    "published": "2026-11-08T16:58:39Z",
    "updated": "2026-11-08T16:58:39Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.11499"
  },
  {
    "id": "2611.11497",
    "title": "TID System for Speech-COSER Challenge 2026: ASR Track",
    "authors": [
      "Fernando López",
      "Jordi Luque"
    ],
    "abstract": "We describe the system submitted by Telefónica Innovación Digital to the Speech-COSER Challenge 2026, which features spontaneous speech from elderly speakers recorded in rural Spain. For ASR, we perform CTC-based pseudo-forced alignment scores audio-text match quality to guide a two-stage LoRA curriculum, followed by post-hoc magnitude pruning of the LoRA matrices to enhance generalization. An ensemble of seven systems combined via ROVER achieves 36.25\\% unnormalized and 22.17\\% normalized WER.",
    "published": "2026-11-08T16:50:34Z",
    "updated": "2026-11-08T16:50:34Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.11497"
  },
  {
    "id": "2611.11477",
    "title": "Robust and Private Swarm Learning via Zero-Knowledge Validator Admission and Consensus Aggregation",
    "authors": [
      "Marco Arazzi",
      "Mert Cihangiroglu",
      "Antonino Nocera"
    ],
    "abstract": "Swarm Learning improves resilience and removes the need for a single trusted coordinator by distributing model aggregation and validation across participating nodes. However, it also delegates the validation of model updates to peers whose private data may be biased, unrepresentative, or adversarial, and existing Swarm Learning protocols generally do not attest that data, leaving decentralized validation as an attack surface. We present a robust, privacy-preserving Swarm Learning framework that makes verifiable data quality the condition for admission to the learning task. A validator joins only after a zero-knowledge attestation proves, without revealing any raw sample, that a reference model ran correctly on its private data. The attested outputs also yield a label-free class profile, so the network assembles a collectively IID validator pool from individually skewed validators as accurately as an oracle with the true labels (total-variation distance to uniform 0.025, against 0.021 for the oracle and 0.21 for random selection). Admitted validators score client updates and, through a Tendermint-style Byzantine Fault Tolerant consensus, agree on a gradient mask and a quality-derived aggregation weight for each submission, replacing dataset-size weighting with a quality-aware signal. Adapting the cut-layer idea of Split Learning, a challenge-based audit lets peers re-verify that a mask was computed on the attested data without an expensive end-to-end zero-knowledge proof. Across four benchmarks under non-IID partitions the framework matches FedAvg on clean data; under a gradient-scaling attack that collapses FedAvg to random chance, it retains 94% of clean accuracy on CIFAR-100 and over 99% on FashionMNIST, where FedAvg achieves only 2.1% and 11%. The result is a private, robust, and auditable foundation for decentralized learning.",
    "published": "2026-11-08T16:15:20Z",
    "updated": "2026-11-08T16:15:20Z",
    "categories": [
      "cs.CR",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.11477"
  },
  {
    "id": "2611.11470",
    "title": "GOPR-CAD: Graph-of-Operations Progressive Reasoning for CAD Generation",
    "authors": [
      "Yitian Pang",
      "Yifan Li",
      "Xiaowei Yue",
      "Li Zheng"
    ],
    "abstract": "Generating accurate CAD models requires substantial engineering expertise and careful control of geometry, topology, and mechanical constraints. Text-to-CAD aims to simplify this process, but current LLM-based methods often generate CAD programs directly. Language models remain unreliable when producing long code while coordinating coupled geometric, topological, and dimensional constraints. Consequently, executable programs may still produce structurally incorrect models, which execution rate and rendered appearance may fail to reveal. To address these limitations, we propose GOPR-CAD, an agentic Text-to-CAD pipeline based on Graph-of-Operations Progressive Reasoning. A language model acts as a decision agent over encapsulated CAD operations and progressively constructs an executable operation graph, which a deterministic compiler converts into the final CAD model. This separation requires no additional training and supports different language models. To evaluate structural fidelity, we construct MHCAD, a benchmark of 300 standard mechanical part requirements derived from Machinery's Handbook. Their explicit structures enable reference-free STEP/B-rep evaluation. GOPR-CAD achieves 82.7% Structural Yield on MHCAD, and 87.2% Structural Yield on an external CADPrompt subset.",
    "published": "2026-11-08T16:07:56Z",
    "updated": "2026-11-08T16:07:56Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.11470"
  },
  {
    "id": "2611.11469",
    "title": "RealEmbedBench: Benchmarking LLMs on Real-World Application-Layer Embedded Software Tasks",
    "authors": [
      "Yujun Huang",
      "Yuwei Zhang",
      "Yi Zhou",
      "Shanshan Wu",
      "Xiang Chen",
      "Lina Gong"
    ],
    "abstract": "Large language models (LLMs) perform well on general coding tasks, but their capabilities in application-layer embedded software development remain underexplored. Existing embedded benchmarks primarily focus on hardware-in-the-loop validation in simulated environments. We introduce RealEmbedBench, a benchmark of 5,142 samples covering three application-layer tasks: code generation and completion, state machine modeling and implementation, and cross-OS code translation. We evaluate six representative LLMs and find substantial performance differences across tasks and models. Project context, especially the local code window, significantly affects code generation and completion. Models perform reasonably well at state machine modeling but struggle to translate these models into executable code. Cross-OS translation performance varies substantially by direction. Translation from Harmony to RT-Thread is particularly challenging, with an average pass rate of 0.1667. These findings suggest that developers should consider local code context when using LLMs for code generation and completion and select models according to the translation direction. They also motivate the use of more real-world state machine implementation data in LLM training to narrow the gap between modeling and executable code.",
    "published": "2026-11-08T16:05:31Z",
    "updated": "2026-11-08T16:05:31Z",
    "categories": [
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2611.11469"
  },
  {
    "id": "2611.11464",
    "title": "Off-Policy RL with Online Inference Tuning: My Solution to the CoRL 2026 RoboEval Challenge",
    "authors": [
      "Ilia Larchenko"
    ],
    "abstract": "The CoRL 2026 RoboEval challenge has eight bimanual tasks, and it ranks a policy not only on whether it succeeds but on how: every stage of the task, done safely, efficiently and with both arms in coordination, scored against human demonstrations. My solution has two parts. The generic part, carried over from my LeHome challenge solution, is off-policy RL on a $π_{0.5}$-based policy that is also its own value function. It is trained with AWR and RECAP on advantages of the exact official score, in a loop where every rollout is at the same time a Thompson-sampling trial of about 20 inference parameters. Out of the box, it took the policy to 0.85 RDS on held-out seeds in two days (and it was still very far from convergence). The competition-specific part adds data that local exploration cannot find: generated demonstrations that reach the full reward, and recovery episodes that start from the policy's own failures. The submitted policy reaches 0.990 RDS on held-out seeds and 0.987 on the official seeds.",
    "published": "2026-11-08T15:53:59Z",
    "updated": "2026-11-08T15:53:59Z",
    "categories": [
      "cs.RO",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.11464"
  },
  {
    "id": "2611.11460",
    "title": "Identifiable alignment of unpaired representations",
    "authors": [
      "Stas Syrota",
      "Albert Lopez I Serrano",
      "Johanne Franck",
      "Søren Hauberg"
    ],
    "abstract": "Aligning two models without paired data requires a distance that both share, yet existing methods use Euclidean or spherical geometry. This is either an arbitrary choice or imposed by their loss function. We show that, under a precise form of the manifold hypothesis, the pullback of the data metric gives such a distance for any two models of one data-generating process. This holds whether the models are encoders, decoders or both, and whatever their architecture, loss, prior or training data. The alignment map preserves this distance and the distribution of representations, and is identifiable if and only if the data distribution breaks every symmetry of the data manifold. We show that this symmetry breaking holds generically. Identifiability makes the alignment coupling the unique optimum of Gromov--Wasserstein and of its weighted combinations with a linear program. The linear program alone has the same optimum if almost every data point has a distinct distribution of distances. The coupling, and with it the alignment map, is recovered exactly from permuted samples, even without identifiability, and consistently from independent ones. Our method, Neural Gromov--Monge Alignment (NGMA), uses no pairs or labels and outperforms every unpaired and label-informed baseline. It relies on pullback distances to align image models with different priors and single-cell models trained on disjoint cells, where Euclidean distances fail.",
    "published": "2026-11-08T15:49:02Z",
    "updated": "2026-11-08T15:49:02Z",
    "categories": [
      "stat.ML",
      "cs.AI",
      "cs.LG",
      "stat.ME"
    ],
    "url": "https://arxiv.org/abs/2611.11460"
  },
  {
    "id": "2611.11457",
    "title": "MOMENT-DP: Momentum Aware Evaluation of Correlated Noise for Differentially Private Training",
    "authors": [
      "Sunny Gupta",
      "Raja Viswanadha"
    ],
    "abstract": "Temporally correlated noise can substantially improve the utility of differentially private optimization, yet candidate mechanisms are commonly designed or evaluated using only partial information about the optimization process, such as workload structure, learning-rate schedules, or local curvature. We study whether persistent optimizer state provides additional information that can change the relative utility of privacy-valid correlated-noise mechanisms. We introduce MOMENT-DP, an optimizer-state-aware framework that models how temporally correlated privacy noise propagates through momentum-based optimization. For locally quadratic objectives, MOMENT-DP expresses privacy-induced final loss through an optimizer transfer operator that jointly captures curvature, learning-rate scheduling, momentum, and temporal noise covariance. NoiseCurve's curvature-aware quadratic criterion is recovered exactly as the zero-momentum, constant-learning-rate special case. Changing only momentum while holding curvature, schedule, privacy calibration, and candidate mechanisms fixed induces genuine mechanism-ranking reversals. The effect persists outside exact quadratic dynamics in per-example-clipped private logistic regression, while remaining unresolved in the neural regime we study. These results establish optimizer state as an under-modeled, decision-relevant axis in evaluating temporally correlated privacy noise.",
    "published": "2026-11-08T15:38:51Z",
    "updated": "2026-11-08T15:38:51Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.DC"
    ],
    "url": "https://arxiv.org/abs/2611.11457"
  },
  {
    "id": "2611.11452",
    "title": "Semantically Aligned KV Cache Compression for Efficient Agentic Autoregressive Video Generation",
    "authors": [
      "Weizhong Huang",
      "Huaijia Kou",
      "Tianyu Xie",
      "Xiawu Zheng",
      "Liujuan Cao"
    ],
    "abstract": "Agentic autoregressive video generation combines semantic planning, sequential generation, and visual verification for controllable synthesis. Growing visual histories enlarge the key-value (KV) cache, increasing memory use and attention costs across candidate rollouts. Existing compression methods primarily optimize individual generators without the planner's semantic constraints, risking low priority for states supporting requested attributes or actions. We introduce SemanticKV, a training-free method for semantically aligned KV cache compression. To our knowledge, SemanticKV is the first KV cache compression method for agentic autoregressive video generation that explicitly uses planner-extracted semantic constraints to guide retention. Text cross-attention identifies constraint-related video positions, whose self-attention queries are collected into separate groups. Attention weights are averaged within each group and maximized across groups, giving each cached entry a high score when strongly used by any represented constraint. A single top-k selection retains high-scoring entries under the memory budget, leaving their keys, values, and positions unchanged. For fixed query groups and equal entry costs, this selection minimizes an additive upper bound on worst-group discarded attention. The method operates independently within each candidate without retraining or additional video generations. We evaluate four AR video backbones on three benchmarks for 5-, 30-, and 60-second generation. On Causal Forcing at a compression ratio of 0.7, SemanticKV obtains a VBench Total Score of 84.10, compared with 84.05 for the strongest compressed baseline and 83.99 for Full KV. It achieves a 1.22x speedup over Full KV and reduces KV-cache memory from 6.04 GB to 1.81 GB, a 3.35x reduction.",
    "published": "2026-11-08T15:28:33Z",
    "updated": "2026-11-08T15:28:33Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.11452"
  },
  {
    "id": "2611.11450",
    "title": "How Much Training-Inference Mismatch Can On-Policy Distillation Tolerate?",
    "authors": [
      "Cong Yu",
      "Ziting Wang",
      "Songlin Jiang",
      "Sitong Zhang",
      "Chengliang Chai",
      "Youhe Jiang",
      "Eiko Yoneki",
      "Tuo Shi"
    ],
    "abstract": "On-policy distillation (OPD) trains a student language model on its own responses, guided by a fixed teacher. Generating these responses is expensive, so systems use quantized inference and asynchronous rollouts to reduce the cost. Both, however, introduce training-inference mismatch between the rollout engine and the model being trained. Such mismatch can destabilize reinforcement learning (RL), but its effects on OPD remain unclear. This paper investigates how much mismatch OPD tolerates, where its effects arise, and how training systems can use this tolerance. Measuring all mismatch sources on one scale, we examine quantization across three student-teacher pairs, with additional tests of weight staleness and injected noise on one pair. OPD tolerates substantial mismatch without meaningful loss of training quality but degrades at higher levels, revealing an empirical mismatch budget. Both the quality cost of mismatch and the mismatch introduced by quantization depend on the model, with some layers particularly sensitive to reduced precision. In controlled comparisons, OPD remains stable under rollout configurations that destabilize RL methods. Under weight noise, mismatch also shifts the prefixes reached during generation, introducing errors that per-token corrections cannot address. To put these findings into practice, we introduce a lightweight admission check that screens rollout configurations against a calibrated budget without requiring a full training run for each candidate. Model-specific FP8 recipes preserve training quality while providing capacity for at least $1.93\\times$ as many KV-cache tokens as BF16. Combining FP8 with asynchronous rollouts reaches the same training quality $1.62\\times$ sooner than synchronous BF16 training. Code is available at https://github.com/benyucong/train-inference-mismatch-opd",
    "published": "2026-11-08T15:22:47Z",
    "updated": "2026-11-08T15:22:47Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.11450"
  },
  {
    "id": "2611.11447",
    "title": "Learning to Rank Propagators in Constraint Programming",
    "authors": [
      "Matija Lojović",
      "Mladen Nikolić"
    ],
    "abstract": "The order in which propagators are executed can substantially affect the performance of constraint programming solvers, yet propagator priorities are typically determined by fixed, manually designed heuristics. In this work, we explore learning instance-dependent propagator priorities from static problem features. We formulate the task as a learning-to-rank problem, addressing the challenge that the quality of a priority assignment can be measured through solver runtime, while the desired priorities of individual propagators are not directly observable. A self-attention-based model jointly scores the propagators present in an instance and is trained using pairwise preferences derived from solver runtimes measured under randomized propagator priority assignments, with a Plackett-Luce-based ranking objective. Predicted rankings are mapped to the discrete priority levels of the Choco solver before search begins, without modifying its propagation or search procedures. We evaluate the approach on XCSP3 instances and demonstrate that propagator ordering can have a substantial impact on solving time. On a test set of 698 instances, picked out as most difficult by problem class, the learned priorities increase the number of solved instances from 634 to 654, reduce median solver runtime by 27.93%, and reduce aggregate penalized runtime (PAR1) by 12.65% compared with Choco's default priorities. We further observe that improvements vary across problem classes and show that a simple policy selecting between learned and default priorities further increases the number of solved instances. These results demonstrate the potential of learning instance-dependent propagator priorities to improve constraint programming performance, particularly on difficult instances.",
    "published": "2026-11-08T15:18:52Z",
    "updated": "2026-11-08T15:18:52Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.11447"
  },
  {
    "id": "2611.11437",
    "title": "How to \"train\" a surgeon? Benchmarking generalist agents in surgical scene understanding",
    "authors": [
      "Gengyuan Zhang",
      "Xiao Han",
      "Shijie Zhou",
      "Abdullah Koukash",
      "Jingpei Wu",
      "Jindong Gu",
      "Yuqicheng Zhu",
      "Nassir Navab",
      "Volker Tresp",
      "Ghazal Ghazaei"
    ],
    "abstract": "Evaluating general-purpose multimodal large language models (MLLMs) for surgical scene understanding remains limited due to scarce surgical data and fragmented evaluation protocols. We address these challenges through a two-stage evaluation framework for surgical scene understanding. In Stage I, we introduce SurgKnowBench, a diagnostic benchmark that harmonizes public surgical datasets across procedures and tasks and evaluates proprietary and open-source MLLMs to map the boundary of pretrained surgical competence. SurgKnowBench reveals that current models retain partial visual priors but remain weak on relational and procedural understanding and workflow assessment. Building on this failure frontier and motivated by the scaffolded nature of surgical training, we introduce SurgAgentGym, an agentic environment where general-purpose MLLM agents can use bounded knowledge search over SurgWiki and general-purpose visual grounding for surgical tasks. SurgAgentGym evaluates whether generalist agents can improve surgical understanding at inference time through tool-mediated evidence use, without additional surgical training. Our results show that agentic inference narrows the gap mainly for perception-heavy tasks, while fine-grained localization and expert-style assessment remain persistent bottlenecks. This opens a path toward future studies of agentic surgical understanding.",
    "published": "2026-11-08T15:00:44Z",
    "updated": "2026-11-08T15:00:44Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.11437"
  },
  {
    "id": "2611.11435",
    "title": "From Dialogue to Task: How Cognitive Engagement With Generative Artificial Intelligence Relates to Post-Dialogue Activity and Task Outcomes",
    "authors": [
      "Xiaoyu Zhuang",
      "Aneesha Bakharia",
      "Dragan Gašević",
      "Hassan Khosravi"
    ],
    "abstract": "Generative AI is increasingly embedded within learning tasks, yet interaction frequency reveals little about cognitive engagement in student-AI dialogue. Little is known about how such engagement is situated within task workflows or how dialogue characteristics and subsequent task activity relate to students' behaviour and task outcomes. This study examined cognitive engagement in student-AI dialogue, its position within task workflows, and associations of dialogue and task-process characteristics with post-dialogue activity and task outcomes. Data were collected from 1,681 students across 40 university courses using three AI companions embedded in resource creation, peer moderation, and practice. Cognitive engagement in 829 conversation threads was coded with a dialogue-oriented Interactive-Constructive-Active-Passive (ICAP) framework, and 2,969 task sequences were modelled with first-order Markov models. Regression models linked dialogue and task-process characteristics to behavioural re-engagement, peer-rated artefact quality, and practice performance. Passive and Active engagement predominated, although resource creation involved more Constructive and Interactive dialogue, peer moderation more Passive, and practice more Active, while higher-engagement dialogue was less often followed by session termination. In resource creation, student-composed messages were associated with more dialogue-to-task returns than template-only requests at the same Passive level, whereas deeper cognitive engagement was associated with higher final artefact quality independent of return frequency; in practice, AI dialogue after an incorrect attempt was associated with fewer further attempts but higher next-attempt correctness among continuers. Post-dialogue activity and task outcomes are distinct aspects of AI use that interaction frequency cannot capture and evaluations should assess separately.",
    "published": "2026-11-08T14:55:17Z",
    "updated": "2026-11-08T14:55:17Z",
    "categories": [
      "cs.CY",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.11435"
  },
  {
    "id": "2611.11433",
    "title": "Unlearning at Speed: Rapid Activation Dampening for Efficient Machine Unlearning in Real-World Face Recognition",
    "authors": [
      "Rouqaiah Al-Refai",
      "Leo Scheubel",
      "Philipp Terhörst"
    ],
    "abstract": "Machine unlearning has become increasingly important in face recognition, where regulations like the GDPR empower users to request the removal of their personal data from deployed models. However, most existing unlearning methods are designed for closed-set classification with small-scale models and training data, and therefore do not generalize to real-world face recognition systems, which operate in an open-set setting with large-scale models and data. In this work, we propose Rapid Activation Dampening (RAD), a fast and targeted unlearning method tailored specifically for large-scale open-set face recognition. RAD approximates differences in average neuron activations between forget and retain identities, identifying and selectively suppressing neurons that are most associated with the targeted identity through a sensitivity-controlled dampening mechanism. We further propose the Forget Score (FS), which addresses the mismatch between existing unlearning metrics and open-set problems by providing a probabilistic interpretation of forgetting directly in the representation space. Experiments across several recent large-scale face recognition architectures and datasets show that RAD achieves strong forgetting while preserving overall model utility and substantially improving unlearning speed. These findings establish RAD as a scalable and practical approach to machine unlearning in face recognition systems.",
    "published": "2026-11-08T14:53:57Z",
    "updated": "2026-11-08T14:53:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.11433"
  },
  {
    "id": "2611.11427",
    "title": "Flex-DDCM: Zero-Shot Task-Oriented Image Compression via Diffusion Trajectory Guidance",
    "authors": [
      "Yixin Gao",
      "Runsen Feng",
      "Xin Li",
      "Zhibo Chen"
    ],
    "abstract": "Recent zero-shot image compression methods exploit the powerful priors of pretrained diffusion models to produce perceptually pleasing reconstructions without compression-specific training. However, image compression serves not only human viewing but also machine analysis, while existing zero-shot codecs have limited flexibility in meeting the diverse reconstruction requirements of these applications. In this paper, we propose Flex-DDCM, a framework for zero-shot task-oriented image compression via diffusion trajectory guidance. Building on Turbo-DDCM, we adapt the coded diffusion trajectory through task-guided noise selection, embedding the effects of task guidance into the compressed representation. Guidance terms can be applied individually or combined, with timestep-dependent strengths controlling their influence throughout denoising. This design enables task adaptation without introducing additional decoding complexity. Experiments demonstrate flexible trade-offs among pixel fidelity, perceptual quality, and downstream task performance, with competitive performance against trained task-oriented codecs and faster decoding than Diff-ICMH.",
    "published": "2026-11-08T14:40:03Z",
    "updated": "2026-11-08T14:40:03Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.11427"
  },
  {
    "id": "2611.11426",
    "title": "Vietnamese Legal Ontology: Every legal answer, traced to the article that grounds it",
    "authors": [
      "Khac-Hoai Nam Bui",
      "Quan Tran Minh"
    ],
    "abstract": "A legal answer is only as good as the article it rests on. Vietnam's largest open legal corpus pairs 109,543 published questions and answers with 573,851 legal documents, yet its citations are free text: \"Khoan 3 Dieu 101 cua Bo luat nay\" (\"Clause 3, Article 101 of this Code\") names neither the code nor its version. Following the five stages of NVIDIA Auto Ontology, Discover, Ground, Validate, Expose and Learn, we turn four open datasets into a knowledge graph of 11.5 M nodes and 16.0 M edges in which every node and edge carries its source record and method, with no duplicate keys, dangling edges or schema violations. Of 67,868 cited provisions, 61,487 resolve to a dated law version, 51,694 to a parsed article, clause or point, and 19,012 are confirmed word for word. The ontology then shows what flat records hide. 36% of the 78,361 answers whose citations resolve now cite a law that is no longer in force; 2,525 verified citations point to an article number that says something else in the current law; 2,520 citations were re-versioned because their words match a different version than their date suggests; and 5,575 document numbers are shared by several local authorities, one of them by 72. Every number in this paper is computed from the graph.",
    "published": "2026-11-08T14:39:10Z",
    "updated": "2026-11-08T14:39:10Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.11426"
  },
  {
    "id": "2611.11421",
    "title": "GenRM-Flow: Generators are Process-aware Reward Models in Flow Matching",
    "authors": [
      "Siming Fu",
      "Ruizhe He",
      "Zheming Fu",
      "Zeyue Xue",
      "Fengkai Liu",
      "Yufei Jiao",
      "Jie Huang",
      "Xiaoxiao Ma",
      "Xuan Yang",
      "Lihui Luo"
    ],
    "abstract": "Aligning video generation models with human preference depends critically on the quality of the reward model that scores generated videos. Current video reward models, however, source their reward signal from a model's representational rather than generative capacity: they either repurpose vision-language models as pixel-space scorers, or train auxiliary scoring heads on top of frozen generator features. The generator's actual ability to predict velocities, denoise latents, and produce videos plays no role in scoring its own generations. We argue that this overlooks a structural property of offline preference learning. Any preference optimization objective that approximates an offline preference dataset mathematically targets a strictly defined KL-constrained optimal policy. By isolating the reward term from this analytical solution and mapping the exact generation log-likelihood to its flow-matching surrogate, the empirical reward emerges deterministically as the relative difference in continuous-time velocity-prediction errors. We formalize this equivalence into GenRM-Flow, a framework where a preference-tuned video generator inherently operates as a process-aware reward model directly in the noisy latent space. We further show theoretically that distinct fine-tuning objectives, whether contrastive like DPO and IPO or non-contrastive like RWR, are alternative optimization pathways toward the same optimal policy, each inducing a reward readout from the generator's velocity-prediction errors. Furthermore, the extracted process reward seamlessly substitutes external VLM scorers in FlowAWR. Operating purely on native latent outputs without auxiliary reward networks, this generative reward drives measurable improvements in downstream video generation.",
    "published": "2026-11-08T14:34:51Z",
    "updated": "2026-11-08T14:34:51Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.11421"
  },
  {
    "id": "2611.10370",
    "title": "ClearForm: Shared-Surface Gaussian Splatting for Transparent and Opaque Scenes",
    "authors": [
      "Hajeong Lee",
      "Jong-Il Park"
    ],
    "abstract": "Transparent-interface reconstruction must recover glass surfaces even when most observed color comes from the scene behind them. We present ClearForm, a shared-planar-Gaussian method for jointly reconstructing transparent interfaces and the appearance seen through them. We identify and analyze the Geometry-Appearance Compositing Dilemma (GACD): when the same transparency-dependent alpha controls both color and geometry, revealing the background can weaken a transparent surface's contribution to geometric reconstruction. We derive its effect on plane-based depth estimation, identify a mechanism that can weaken geometric learning, and quantify the loss of interface support through controlled comparisons. To address this conflict, we develop geometry-preserving dual-opacity surface reconstruction. Shared planar Gaussians retain interface contributions in geometry compositing while modeling transmission and sparse reflection in RGB, supported by transparency-aware geometric constraints. To manage the different primitive-visibility requirements of these compositors, we introduce Dual-Evidence Lifecycle (DEL), which retains Gaussians supported by multi-view geometry or RGB reconstruction evidence. On 3D-FRONT-T, ClearForm achieves 27.05 mm Chamfer distance (CD) and 0.928 F1, compared with 59.18 mm CD for our PGSR reproduction and the reported 34 mm CD and 0.836 F1 for GLINT. On TransLab, it achieves 1.65 mm CD, 0.963 F1, and 40.14 dB PSNR. In matched ablations, dual-opacity compositing reduces CD from 59.25 to 27.09 mm, while DEL improves PSNR by 2.06 dB. Our project page is available at https://hajeongx.github.io/clearform/.",
    "published": "2026-11-07T01:12:58Z",
    "updated": "2026-11-07T01:12:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.10370"
  },
  {
    "id": "2611.10369",
    "title": "FEROM: Frontier Endogenous Reveal-Order Marginal Policy Optimization for Masked Diffusion LMs",
    "authors": [
      "Zian Su",
      "Ziyang Huang",
      "Kaiyuan Zhang",
      "Xiangyu Zhang"
    ],
    "abstract": "Masked diffusion language models generate text by iteratively unmasking positions, with practical samplers often selecting reveal positions from the model's own logits. The reveal order is therefore an endogenous latent variable of the rollout process with an enormous discrete latent space. Policy optimization objectives relying on pre-defined schedules or sampled trajectories introduce either bias or high variance. In this paper, we propose FEROM, Frontier Endogenous Reveal-Order Marginal Policy Optimization, which approximates policy gradients for the rollout-induced marginal response policy of masked diffusion LMs. FEROM derives a Rao-Blackwellized policy-gradient identity over latent reveal orders and expresses the resulting estimator as posterior edge occupancy on a reveal-state DAG. To make marginalization practical, we introduce Frontier Reveal Marginalization, a budgeted estimator that approximates this marginal edge structure by combining CDF-based computation of local probabilities of the endogenous reveal process with frontier expansion of high-mass partial states. Integrated into a GRPO-style objective, FEROM replaces single-path log-scores with a detached token-score surrogate over posterior-relevant reveal edges. Experiments on math and coding tasks show comparable or improved results over existing methods under matched scoring-state budgets. An offline proxy study further shows improved marginal-gradient approximation with increased scoring budgets.",
    "published": "2026-11-07T01:07:18Z",
    "updated": "2026-11-07T01:07:18Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.10369"
  },
  {
    "id": "2611.10366",
    "title": "CPNav: Calibrated Vision-Language Navigation for Object-Goal Search in Unseen Environments",
    "authors": [
      "Qizhao Chen",
      "Yuanhong Zeng",
      "Shoh Nishino",
      "Anushri Dixit"
    ],
    "abstract": "Directing a robot to locate a target object in unseen environments remains a central challenge in embodied AI. Vision-Language Model (VLM)-based methods provide rich semantic reasoning but often produce uncalibrated and overconfident action decisions. We introduce CPNav, a navigation framework that combines collision-aware planning with statistically calibrated VLM action scoring for map-free object-goal navigation. From RGB-D input, CPNav constructs a navigability map, generates collision-free motion primitives, and queries two VLMs for goal detection and action scoring. The resulting scores are calibrated offline via conformal prediction (CP) using oracle actions obtained through a tree-structured exploration procedure with backtracking, providing finite-sample guarantees at a user-specified risk level. The CP layer is model-agnostic and can wrap any VLM policy. Online, calibrated VLM scores guide action selection, while a tree-structured exploration history records alternative actions and allows backtracking. We evaluate CPNav in both simulation and real-world hardware settings. In AI Habitat simulation, compared with the uncalibrated baseline method, CPNav achieves relative SR and SPL improvements of 6.2% and 11.4% on HM3D v0.2, and 12.4% and 8.8% on MP3D, respectively. In real-world deployment on a modified Hiwonder MentorPi robot, the corresponding improvements in SR and SPL are 24.9% and 15.2%, respectively. Code is available at https://github.com/practice-lab-ucla/CPnav.",
    "published": "2026-11-07T01:05:40Z",
    "updated": "2026-11-07T01:05:40Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.10366"
  },
  {
    "id": "2611.10363",
    "title": "LSRP*: Scalable and Anytime Planning for Multi-Agent Path Finding with Asynchronous Actions",
    "authors": [
      "Dachuan Liu",
      "Shuai Zhou",
      "Shizhe Zhao",
      "Zhongqiang Ren"
    ],
    "abstract": "Multi-Agent Path Finding (MAPF) seeks collision-free paths for multiple agents from their respective starting locations to their respective goal locations while minimizing path costs. Although many MAPF algorithms were developed, most of them rely on a common assumption on synchronized actions, where the actions of all agents start at the same time and always take a time unit. This assumption may limit the use of MAPF planners in practice. To get rid of this assumption, recently, an algorithm called Loosely Synchronized Rule-based Planning (LSRP) was proposed, which can find sub-optimal solutions for many agents. However, LSRP often finds poor quality solutions due to its unbounded sub-optimality. This paper develops a new anytime planner called LSRP* that can keep improving solution quality after the initial solution is obtained until the runtime budget depletes. We analyze the properties of LSRP* and test it against several baselines with up to 1000 agents on various maps. LSRP* can handle up to 25% more agents than LSRP and can reduce up to 40% of the solution cost found by LSRP.",
    "published": "2026-11-07T00:58:41Z",
    "updated": "2026-11-07T00:58:41Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2611.10363"
  },
  {
    "id": "2611.10360",
    "title": "MambaLoc: Lightweight Indoor Localization Using Cross-Modal Knowledge Distillation",
    "authors": [
      "Mohab Bahnassy",
      "Omar Saqr",
      "Hamada Rizk",
      "Moustafa Youssef"
    ],
    "abstract": "Accurate indoor localization on resource-constrained edge devices remains challenging due to the tension between modeling fidelity and computational efficiency. Wi-Fi Channel State Information (CSI) enables low-cost deployment using existing Wi-Fi infrastructure but is heavily distorted by multipath propagation. Transformer-based solutions mitigate these effects but their quadratic complexity limits real-time edge deployment. Ultra-Wideband (UWB) provides geometrically precise ranging yet requires dedicated infrastructure. We present MambaLoc, a cross-modal distillation framework that improves the accuracy-efficiency balance in CSI-based localization. MambaLoc uses a linear-time Selective State Space Model (Mamba) as a lightweight CSI student, guided during training by a UWB-Transformer teacher. A Feature Alignment Module bridges the representational gap between heterogeneous RF modalities, allowing the CSI model to inherit UWB-derived geometric structure without UWB hardware at inference. A probabilistic Gaussian Mixture regression head models multi-modal spatial ambiguity from multipath effects, avoiding the physically implausible averaging of deterministic regression. Evaluations on a real-world dataset show MambaLoc achieves a median localization error of 0.230 m, reducing error by 22.2% over a standalone Mamba baseline, while requiring 65.1% fewer FLOPs and 58% lower inference latency than Transformer-based approaches.",
    "published": "2026-11-07T00:49:08Z",
    "updated": "2026-11-07T00:49:08Z",
    "categories": [
      "cs.AI",
      "cs.NI"
    ],
    "url": "https://arxiv.org/abs/2611.10360"
  },
  {
    "id": "2611.10353",
    "title": "DAPointRWKV: Domain Adaptive Vision RWKV for Point Cloud Completion",
    "authors": [
      "Yinghui Li",
      "Qianyu Zhou",
      "Hao Yang",
      "Richard Dazeley",
      "Ye Zhu",
      "Xuequan Lu"
    ],
    "abstract": "Domain adaptive point cloud completion (DA PCC) aims to bridge the geometric discrepancy between labeled source domains and unlabeled target domains for accurate 3D shape completion. Existing methods based on CNNs, Transformers, and Mamba-like sequence models still face challenges from limited receptive fields, high computational complexity, insufficient geometric bias, and serialization sensitivity. Recently, Receptance Weighted Key Value (RWKV) provides a linear-complexity alternative for long-range sequence modeling. However, adapting RWKV to DA PCC remains challenging due to the lack of explicit geometric priors, the mismatch between recurrent modeling and coarse-to-fine generation, and unstable target-domain adaptation. To address these challenges, we propose DAPointRWKV, a novel RWKV-based framework for DA PCC. DAPointRWKV consists of three components: Geometry-Aware RWKV (GA-RWKV) Backbone, RWKV-Oriented Progressive Decoder (RWKV-PD), and Dual Structural Regularization (DSR). Specifically, GA-RWKV introduces geometry-aware recurrent representation learning, RWKV-PD bridges RWKV token representations with coarse-to-fine reconstruction through local token-guided refinement, and DSR stabilizes target-domain transfer through visible-structure anchoring and complete-shape hypothesis stabilization. Extensive experiments on synthetic and real-world benchmarks demonstrate that DAPointRWKV consistently outperforms state-of-the-art methods.",
    "published": "2026-11-07T00:31:59Z",
    "updated": "2026-11-07T00:31:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.10353"
  },
  {
    "id": "2611.10349",
    "title": "SituRecBench: Evaluating Frontier Models as Situated Recommendation Assistants in 3D Environments",
    "authors": [
      "Jingtong Yang",
      "Dongding Lin",
      "Jian Wang",
      "Wenjie Li"
    ],
    "abstract": "Recommender systems are transitioning from static retrieval engines into interactive assistants grounded in physical environments. However, current studies largely neglect the combined complexities of spatial navigation, visual grounding, and multi-turn social interaction. To bridge this gap, we introduce SituRecBench, an interactive benchmark for evaluating frontier vision-language models (VLMs) as situated recommendation assistants within high-fidelity 3D environments. We reformulate recommendation as a situated assistance process in which an assistant interacts with a user while sharing the user's egocentric view. Our benchmark simulates real-world shopping environments (e.g., supermarkets and home furnishings stores), requiring assistants to elicit preferences, ground recommendations in the environment, and guide the user to relevant locations through dialogue. The benchmark evaluates dialogue quality, recommendation utility, and navigation effectiveness through a unified interactive protocol. Extensive experiments reveal persistent challenges in spatial grounding and preference elicitation, highlighting limitations in their ability to integrate global contextual information with local observations. SituRecBench provides a rigorous foundation for advancing the development of situated assistants in the real world.",
    "published": "2026-11-07T00:29:02Z",
    "updated": "2026-11-07T00:29:02Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.CV",
      "cs.IR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.10349"
  },
  {
    "id": "2611.10348",
    "title": "Guided Co-Attention with Adaptive Gating for Multimodal Medical Data Fusion",
    "authors": [
      "Muntaqim Ahmed Raju",
      "Priyanka Siddappa",
      "Md Shifat Haider Al Amin",
      "Ruizhe Ma",
      "Md Ripon Ahammed"
    ],
    "abstract": "Multimodal fusion requires not only exchanging information across modalities but also determining which representations should participate in the interaction and how complementary cross-modal views should be combined. We introduce Guided Co-Attention with Adaptive Gating, a fusion framework that integrates token-wise guidance, bidirectional cross-attention, and sample-specific fusion. The proposed method constructs two directional representations: an image-conditioned text representation, obtained by allowing textual tokens to query visual features, and a text-conditioned image representation formed in the reverse direction. Token-wise guidance modulates the representations before cross-attention, while an adaptive gate learns the relative contribution of the two resulting directional representations for each sample. We evaluate the approach using paired chest radiographs and radiology reports as an image-text test bed for binary (normal vs. abnormal) classification. The two cross-attention directions exhibit distinct performance characteristics, demonstrating that reversing the query and source modalities does not produce interchangeable representations. Ablation experiments further show that bidirectional interaction, adaptive gating, and token guidance provide complementary benefits. The proposed model achieves 96.05% accuracy, 96.10% F1-score, 98.37% AUC, 95.60% Sens@95Spec, and 96.51% Spec@95Sens, yielding the highest mean performance across all evaluated metrics. These findings support explicitly modeling interaction direction, token relevance, and sample-dependent integration when constructing multimodal representations.",
    "published": "2026-11-07T00:28:37Z",
    "updated": "2026-11-07T00:28:37Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.10348"
  },
  {
    "id": "2611.10347",
    "title": "PoseBench: Probing Pose Awareness in Visual Foundation Models",
    "authors": [
      "Most Nilufa Yeasmin",
      "Draix Wyatt",
      "Ruyi Lian"
    ],
    "abstract": "Pose awareness characterizes the extent to which a learned feature space aligns with the underlying object-pose manifold, such that observations with similar poses exhibit greater feature similarity than those with increasingly different poses. While such structure is desirable for pose-sensitive 3D vision tasks, visual foundation models pre-trained on individual 2D images typically lack explicit 3D or pose supervision. This raises a fundamental question: Do 2D visual foundation models exhibit pose awareness after large-scale pretraining? To answer this question, we introduce PoseBench, a systematic benchmark to probe pose awareness in pretrained visual features. Our evaluation follows a progressive design: held-out rendered views probe intrinsic pose-aware structure under controlled conditions, while real-image queries evaluate how robustly this structure remains accessible under real-world variations. We further introduce pose-graph-based refinement as a complementary probe of compatibility between feature neighborhoods and the underlying pose manifold. Across 31 publicly available checkpoints from 10 pretraining families, PoseBench reveals that pose awareness is an implicit but non-uniform property of 2D visual foundation models, and consistent gains from pose-graph refinement suggest that feature spaces retain structure compatible with the underlying pose manifold. PoseBench therefore provides a systematic basis for understanding and selecting pretrained features for pose-sensitive 3D vision tasks.",
    "published": "2026-11-07T00:27:17Z",
    "updated": "2026-11-07T00:27:17Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.10347"
  },
  {
    "id": "2611.10344",
    "title": "MaRiO: Multi-agent Collaborative Reasoning via Shared Observations in MLLMs",
    "authors": [
      "Nathaniel Redmond",
      "Fidel Omar Tito Cruz",
      "Devansh Sharma",
      "Shehreen Azad",
      "Sirshapan Mitra",
      "Shruti Vyas",
      "Yogesh S. Rawat"
    ],
    "abstract": "Multimodal Large Language Models (MLLMs) show strong visual perception capabilities, but existing evaluations largely focus on single-view or multi-view settings with shared camera parameters, leaving the challenge of multi-agent collaborative scenarios underexplored. In such settings, multiple agents observe a shared environment from independent viewpoints, and reliable decisions require reasoning across these independent observations of the same environment. To study this problem, we introduce MaRiO, a benchmark for evaluating multi-agent collaborative reasoning, and evaluate 23 state-of-the-art MLLMs on it. Our analysis reveals three key findings: (1) tasks governed by static perception are generally easier than tasks that require transformational event sequences; (2) most models struggle to resolve cross-agent correspondences, with errors increasing with scene complexity; and (3) models show limited ability to leverage geometric cues present in the scene. As an initial step toward addressing these challenges, we explore geometry-guided synthetic view augmentation that generates intermediate transition frames between agent observations, providing auxiliary spatial context that improves performance in certain categories. Overall, our results highlight that multi-agent collaborative reasoning remains an open challenge and an important direction for multimodal embodied systems. The code is available on the project page: https://omarftt.github.io/MaRiO-page/.",
    "published": "2026-11-07T00:26:23Z",
    "updated": "2026-11-07T00:26:23Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.10344"
  },
  {
    "id": "2611.10341",
    "title": "Collaboration Signatures: Tracking Long-Horizon Dynamics of Cross-Meeting Collaboration Networks",
    "authors": [
      "Shengqi Zhu",
      "Sheshera Mysore",
      "Bahareh Sarrafzadeh"
    ],
    "abstract": "Enterprise platforms have received increasing attention as a core component of social networks and the Web. However, existing work mostly relies on fragmented logs of small units of work, like emails and chats, and focuses on who connects with whom without sufficient account of collaboration content and dynamics. This work systematically explores tracking collaborations across sequences of meetings as a new approach to interpreting their long-horizon dynamics. Linking 45,426 meetings in a large multinational technology company based on full transcripts and 1.6 million extracted agenda items, we establish a cross-meeting collaboration network of 6,065 collaborations. The network recovers the natural shapes of workplace collaborations: meetings, as snapshots of ongoing collaboration, link into largely tree-shaped structures, while the work content forms nested directed acyclic graphs (DAGs). Further, we explore how these networks evolve over time, examining three established perspectives: task division, team composition, and temporal continuity. Each explains part of the dynamics but does not capture the distinctness of long-horizon workplace collaboration: e.g., work flows in a consistent direction between a few pairs of subjects, yet a collaboration's subject explains little of how its meetings are conducted. Instead, accumulating the agenda, interaction, and language of meetings along each tree yields a signature of the collaboration, a distinctive profile that picks out the collaboration of a held-out meeting at 4.5 times chance. The signature models collaboration better than team or task views, individually or combined, in next-meeting prediction and tree-level fitting. We discuss the implications of these cross-meeting dynamics for designing office applications and support tools, and call for next-generation Web systems that represent collaborations over their long horizon.",
    "published": "2026-11-07T00:19:03Z",
    "updated": "2026-11-07T00:19:03Z",
    "categories": [
      "cs.SI",
      "cs.CL",
      "cs.CY",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.10341"
  },
  {
    "id": "2611.10340",
    "title": "IdealCache: Rethinking Cache Scheduling in Diffusion Transformers via Ideal Trajectories",
    "authors": [
      "Shang Xue",
      "Li Zhu",
      "Ping Chen"
    ],
    "abstract": "Feature caching accelerates Diffusion Transformers by reusing intermediate computations across denoising timesteps, yet existing methods share a fundamental blind spot: they treat the standard reference denoising trajectory as the optimisation target, approximating its per-step states and thus inheriting its output as an implicit quality ceiling. We argue that this target is arbitrary -- what truly matters is the ideal result, not the intermediate path taken to reach it. We propose IdealCache, a training-free framework that abandons step-wise imitation of the reference trajectory. Instead, it anchors caching on a per-input ensemble of ideal trajectories constructed from candidate target results, aggregates their geometry into a single graph, and discovers optimal non-uniform schedules via a constrained shortest path on this graph. By decoupling from the reference process, IdealCache breaks the performance bottleneck of trajectory-approximation; our schedules can attain near-lossless fidelity in generation and even surpass on task-specific metrics (e.g., maintaining higher semantic consistency in image editing). Without retraining, IdealCache achieves 6.35x speedup on Qwen-Image, 5.84x on Qwen-Image-Edit, and 4.32x on HunyuanVideo, with competitive or superior quality across tasks.",
    "published": "2026-11-07T00:16:47Z",
    "updated": "2026-11-07T00:16:47Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.10340"
  },
  {
    "id": "2611.08916",
    "title": "On the Incompleteness of do-calculus for Universal Identifiability",
    "authors": [
      "Yaroslav Kivva",
      "Aliaksandra Novik",
      "Negar Kiyavash"
    ],
    "abstract": "We study the problem of causal effect identification from an arbitrary set of observational and/or interventional distributions, which we call Universal Identifiability (uID). The uID problem generalizes existing classical identifiability (ID) and general identifiability (gID) problems, which considered the identification problem from either mere observational distributions or a specific type of interventional distributions. Prior research has established graphical criteria to determine when a causal effect is identifiable in ID and gID problems. Moreover, algorithms that leverage do-calculus and basic probability manipulations have been proposed to compute these effects. Consequently, it has been shown that do-calculus is both sound and complete in these problems. Despite these well-established results, a formal definition of what it means for the do-calculus to be complete does not exist. We propose a rigorous formalization for the completeness of the do-calculus and show that the completeness results in previous work remain valid. However, for more general problems, such as uID, the rules of do-calculus are no longer complete. This is perhaps the reason why the uID problem has remained open thus far.",
    "published": "2026-11-06T02:59:26Z",
    "updated": "2026-11-06T02:59:26Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG",
      "math.PR"
    ],
    "url": "https://arxiv.org/abs/2611.08916"
  },
  {
    "id": "2611.08914",
    "title": "HomeLoop: A Simulation Framework and Benchmark for Robot-IoT Coordination in Everyday Domestic Assistance and Safety",
    "authors": [
      "Ramy ElMallah",
      "Marc Bishara",
      "Hyegang Kim",
      "Yuxi Zhang",
      "Chongyu Zhu",
      "Chi-Guhn Lee"
    ],
    "abstract": "Recent progress in embodied robotics is bringing robots closer to deployment in homes, as vision-language models (VLMs) are demonstrating significant advances in reasoning, making VLM-driven robots promising home assistant agents. These agents will often be introduced into homes that already have cameras, Internet of Things (IoT) devices, and residents with wearables. To fulfill their potential, they need to integrate with existing smart infrastructure and reason through ambiguous scenarios: a smoke alarm may come from a pan about to ignite, a pan already on fire, a resident cooking or a faulty sensor, and each calls for a different response. To that end, we introduce HomeLoop, a simulation framework and benchmark built on Isaac Sim that combines robot bodies, networked devices and wearables, simulated residents and visitors, faulty sensors, and hazards that evolve over time. Our benchmark is composed of 20 tasks across five families grounded in real-world household hazards and needs, and designed so that the same alert can have different causes. A runtime monitor scores each episode with temporal-logic checks on the final outcome and the actions along the way, and every action carries a predefined cost. We evaluate six open-weight and proprietary VLMs. The best achieves a family-balanced score of 61.9%, and across models we see a pattern of over-reaction: failed episodes involving prohibited interventions outnumber those involving missed required interventions by more than two to one, with models often shutting off the stove before investigating the alarm's cause. HomeLoop is an extensible foundation intended for use in research on robot-IoT coordination, long-term memory, proactive assistance, and privacy-safety trade-offs. HomeLoop will be released with 2,100 home layouts that can be automatically furnished in diverse configurations, five robot bodies and 20 networked device types.",
    "published": "2026-11-06T02:54:11Z",
    "updated": "2026-11-06T02:54:11Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.08914"
  },
  {
    "id": "2611.08908",
    "title": "Toward LLM Self-Play Under Data Scarcity: Effectiveness, Generalizability, and Trustworthiness",
    "authors": [
      "Zhiyin Yu",
      "Yuchen Mou",
      "Bingzhe Wu",
      "Zhonghai Wu",
      "Shiyang Feng",
      "Xiao Luo"
    ],
    "abstract": "The rapid development of large language models (LLMs) has been driven largely by scaling model size and human-curated training data, yet this paradigm is increasingly constrained by data scarcity and diminishing returns from human supervision. Self-play offers a promising pathway for autonomous data generation and improvement, but current frameworks remain unsatisfactory due to a lack of a data-centric perspective, limited cross-domain generalization, and growing trustworthiness and security concerns. In this paper, we argue that real-world LLM self-play systems should achieve effectiveness, generalizability, and trustworthiness under data scarcity. To address these challenges, we outline three blue-sky research directions for future self-play systems: (1) data-centric self-play for effective experience generation, (2) generalizable self-play for open-world and unverifiable tasks, and (3) trustworthy self-play for reliable self-evolution. We further discuss research opportunities and solutions within each direction. This paradigm shift will establish a sustainable and safe AI ecosystem by transforming finite human knowledge into inexhaustible high-quality experience through self-play architectures.",
    "published": "2026-11-06T02:49:09Z",
    "updated": "2026-11-06T02:49:09Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.08908"
  },
  {
    "id": "2611.08904",
    "title": "MotionCore: A Latent Neural Simulator for Video Generation with Rigid-Body Dynamics",
    "authors": [
      "Zheng Wang",
      "Zhengwei Gong",
      "Yuanzhi Liang",
      "Haibin Huang",
      "Chi Zhang"
    ],
    "abstract": "Video generation models can produce highly realistic videos while generating physically inconsistent object motion. This limitation suggests that visual modeling alone may not provide a transferable representation of physical dynamics. We introduce MotionCore, a framework for learning physical dynamics via a learnable partial differential equation solver and focuses on rigid-body motion. We introduce a latent neural simulator learning to predict the evolution of object-level physical states from observed motion. Its predictions are then converted into spatially aligned latent controls for a controllable video diffusion model. The generator serves as a visual interface: it provides appearance and scene detail, while the learned dynamics model specifies the physical trajectory. To preserve this trajectory through the interface, MotionCore combines a diffusion-matching objective with a low-capacity decodability constraint on object identity and position. We evaluate MotionCore on public physical-consistency benchmarks and on paired data with known trajectories. Results indicate that MotionCore improves physical consistency and trajectory obedience in the evaluated rigid-body settings, while maintaining comparable visual quality. A controlled ablation protocol compares learned dynamics with an analytic prior and studies the choice of latent evolution processor.",
    "published": "2026-11-06T02:45:37Z",
    "updated": "2026-11-09T08:23:29Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.08904"
  },
  {
    "id": "2611.08897",
    "title": "Segmenting Geometric Textures of 3D Meshes",
    "authors": [
      "Weidan Xiong",
      "Kaijie Qu",
      "Shihao Feng",
      "Shunqi Fan",
      "Rongyu Xiong",
      "Hui Huang"
    ],
    "abstract": "Recognizing geometric texture patterns on 3D models is critical for applications such as heritage protection, model editing, and 3D printing. Existing 3D model segmentation methods predominantly focus on identifying high-level semantic parts, thereby failing to capture middle-level textures. While recent Vision-Language Models can perform image segmentation with appropriate text prompts, they still struggle to recognize 3D geometric textures. In this work, we present a method that segments 3D mesh models based on middle-level geometric textures. We further introduce a new geometric texture segmentation benchmark and fine-tune SAM3 accordingly. The segmented texture regions are then clustered based on DINO feature similarity and lifted from 2D to 3D. Additionally, we develop an interactive tool to enable both 3D model editing based on our segmentation results and model retrieval from the dataset based on geometric and texture similarity. Experiments demonstrate that our method significantly outperforms existing methods in segmenting geometric textures and can facilitate various applications.",
    "published": "2026-11-06T02:39:40Z",
    "updated": "2026-11-06T02:39:40Z",
    "categories": [
      "cs.GR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.08897"
  },
  {
    "id": "2611.08886",
    "title": "Computer Vision by YOLOs for Detection of Major Diseases in Vietnamese Custard Apple Using Fruit Imagery",
    "authors": [
      "Tri Nhut Do",
      "Quoc Tuan Vo"
    ],
    "abstract": "Amid Vietnam rapid digital transformation in agriculture, the integration of artificial intelligence technologies for identifying, monitoring, and predicting crop pests and diseases has emerged as an inevitable trend.",
    "published": "2026-11-06T02:23:18Z",
    "updated": "2026-11-06T02:23:18Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.08886"
  },
  {
    "id": "2611.08887",
    "title": "Decoding spatial and semantic information from large-scale visual cortical activity for natural-movie reconstruction",
    "authors": [
      "Yukai Huang",
      "Haoyu Albert Wang",
      "Jiawei Zhang",
      "Jialun Ma",
      "Jiayao Ding",
      "Yiran Lin",
      "Xingyu Chen",
      "Ziqi Gao",
      "Yuguo Yu"
    ],
    "abstract": "Reconstructing natural visual experience from cortical population activity is a central challenge in neural decoding, particularly for calcium imaging, where signals are noisy, temporally filtered, and paired neural-video data are limited. Here we present Ca2REAL (Calcium Activity to Reconstruct Events, Appearance, and Layout), a neural-to-video framework that conditions a pretrained video diffusion model through separate layout and semantic controls derived from calcium activity. Using measured responses from 7,863 V1 neurons in one mouse, Ca2REAL reconstructed held-out natural-movie clips with 81.4% all-pairs stimulus-identification accuracy, with its clearest gains over deterministic baselines in perceptual and semantic measures. We further evaluated the framework in a stimulus-aligned virtual population of 116,705 neurons assembled from encoding-model-predicted responses across 11 independently recorded datasets. Perturbation and ablation analyses showed that reconstruction depends on distributed, stimulus-specific population structure, with layout and semantic pathways providing complementary spatial and identity information. Temporal analyses further showed improved preservation of semantic dynamics across reconstructed clips. These results show that large-scale cortical population activity constrains the spatial, semantic, and temporal structure of natural visual experience, providing a generative framework for high-fidelity neural reconstruction of dynamic visual scenes.",
    "published": "2026-11-06T02:23:18Z",
    "updated": "2026-11-06T02:23:18Z",
    "categories": [
      "cs.CV",
      "q-bio.NC"
    ],
    "url": "https://arxiv.org/abs/2611.08887"
  },
  {
    "id": "2611.08884",
    "title": "Who's Asking? Audience-Conditioned Privatization",
    "authors": [
      "Daniil Filienko",
      "Anusha Bagalkotkar",
      "Xan Vongsathorn",
      "Sikha Pentyala"
    ],
    "abstract": "The abundance of user-generated conversational data makes the question of how to responsibly derive insights from confidential data without putting the individuals in it at risk ever more important. However, the majority of existing differentially private (DP) synthetic text generation (SDG) and anonymization approaches ignore the context of the data's downstream usage, which results in loss of important information. DP-SDG provides the same guarantee regardless of the recipient, and anonymization relies on predefined attribute categories. They both ignore the observation that an attribute that is harmless to one audience can be sensitive to another, and each audience typically needs only some attributes preserved. We propose Ext-Classify-Priv, a framework that (1) extracts the information types present in a corpus, (2) classifies which of them are private for a given audience following contextual integrity, and (3) protects only those attributes, using either anonymization or SDG with Feature-DP approaches. On Reddit data with 3 audiences, our audience-specific releases are more faithful than a single audience-agnostic release for every audience. On bioRxiv data, our SDG method improves MAUVE from 0.097 to 0.420 at epsilon=1 and on the proprietary real estate data, our anonymization method improves MAUVE from 0.698 to 0.959 over the best baselines.",
    "published": "2026-11-06T02:21:50Z",
    "updated": "2026-11-06T02:21:50Z",
    "categories": [
      "cs.CR",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.08884"
  },
  {
    "id": "2611.08879",
    "title": "GeoJeV: Unified Spatial Probability for Training-Free Efficient Evidence Acquisition in Ultra-High-Resolution Remote Sensing",
    "authors": [
      "Xinyi Niu",
      "Lingfeng Chen",
      "Jiehua Zhang",
      "Panhe Hu",
      "Li Liu",
      "Zhen Liu",
      "Yongxiang Liu"
    ],
    "abstract": "Ultra-high-resolution (UHR) remote sensing imagery provides rich spatial details but poses challenges for accurate and efficient multimodal understanding. Existing evidence acquisition methods selectively explore relevant image regions, yet largely rely on generative multimodal large language models (MLLMs) for intermediate search control. However, reinforcement learning from human feedback (RLHF) primarily aligns these models with human-preferred responses rather than explicitly optimizing region-level relevance judgments, while repeated autoregressive decoding introduces additional computational overhead. To address these limitations, we propose GeoJeV, a training-free method that formulates evidence acquisition as spatial probability-driven decision making. At each evaluated region, a frozen JeV model produces a probability distribution over candidate regions. Specifically, Region Rank prioritizes candidate regions, Sparse Branch adaptively determines branching width through sparse probability support, and Depth Gate controls refinement depth based on branch sparsity and distribution concentration. By coordinating search priority, branching width, and refinement depth through a shared distribution, GeoJeV reduces reliance on RLHF-aligned generation and eliminates intermediate decoding. Experiments on LRS-GRO, MME-RealWorld-RS, and LRS-VQA achieve accuracies of 60.59%, 52.79%, and 34.32%, respectively. Across the three benchmarks, GeoJeV improves the average accuracy of Qwen3-VL-8B by +5.32pp with only 1.12 additional seconds per question, while achieving a 7.8-fold inference speedup over the recent method.",
    "published": "2026-11-06T02:12:39Z",
    "updated": "2026-11-06T02:12:39Z",
    "categories": [
      "cs.CV",
      "eess.SP"
    ],
    "url": "https://arxiv.org/abs/2611.08879"
  },
  {
    "id": "2611.08877",
    "title": "The Relational Capacity Framework: A Lens for AI-Mediated Relationality",
    "authors": [
      "Emily Tseng",
      "Patrick Gage Kelley",
      "Renee Shelby",
      "Ashley M. Walker"
    ],
    "abstract": "A growing literature examines the impact of engaging with AI chatbots on our relationality: our ability to form relationships with others, maintain them through life's changes, and exit when needed. Currently, substantial work focuses on purpose-built AI companions (e.g. Replika, Character.AI), with less work investigating socioemotional uses of the more widely-used general-purpose chatbots. In this paper, we present a 100-person investigation into how people engage general-purpose AI for socioemotional needs. Participants' AI uses varied, from practicing specific social skills to seeking additional bandwidth and information as they navigated their social contexts. To explain this heterogeneity, we provide 8 states that describe how AI expands or contracts relationality for people with different levels of skills, bandwidth, and information. We then present a unified conceptual model for the role of technology in mediating human relationality, the Relational Capacity Framework, and outline future research designing appropriate roles for AI in human connection.",
    "published": "2026-11-06T02:06:04Z",
    "updated": "2026-11-06T02:06:04Z",
    "categories": [
      "cs.HC",
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2611.08877"
  },
  {
    "id": "2611.08870",
    "title": "Bidirectional Modeling of mmWave Human Signals for Enhancement & Synthesis",
    "authors": [
      "Shuntian Zheng",
      "Hoang Hai Pham",
      "Jiaqi Li",
      "Xiaoman Lu",
      "Shuai He",
      "Yu Guan"
    ],
    "abstract": "Millimeter-wave (mmWave) is attractive for human-centered robotics in smoke, darkness, and privacy-sensitive indoor spaces: it measures reflections rather than visually identifiable imagery and remains usable without light. Deployed systems, however, face two complementary needs that run in opposite directions. Enhancement starts from a raw range-angle-Doppler (RAD) heatmap, where human returns coexist with nonhuman structure, and aims to isolate the human signal by removing nonhuman returns, yielding a clean RAD input for downstream perception. Synthesis starts from denser human geometry and aims to synthesize natural RAD observations, including environmental and hardware features, thereby expanding scarce supervision data. Although the two tasks reverse direction, both require modeling how human and nonhuman reflections coexist in the same measurement. Among RAD axes, Doppler provides motion information native to the modality, with the potential to support this modeling. We therefore cast both tasks on the dual-domain RAD heatmap and propose HeatWave, which injects Doppler when it is locally reliable, and routes Doppler asymmetrically for enhancement and synthesis within one shared backbone. This design improves both tasks: enhanced observations reduce mean per-joint position error by 11.4% relative to the raw recording, and synthesized samples that replace half of the real radar labels recover most of the activity accuracy lost to the reduced budget. Relative to an unspecialized dual-task heatmap baseline, the enhancement improves motion-critical samples under metallic clutter by 2.3times more than when geometry already suffices, and synthesis follows the same ordering with a narrower spread, providing the community with a research direction more closely aligned with the signal's characteristics.",
    "published": "2026-11-06T01:53:22Z",
    "updated": "2026-11-06T01:53:22Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.08870"
  },
  {
    "id": "2611.08865",
    "title": "Rethinking Agent Trajectory Compression: A Workflow-Aware Perspective",
    "authors": [
      "Qijia Zhuang",
      "Rui Liu",
      "Wenqi Hu",
      "Yuxiang Ren"
    ],
    "abstract": "As long-horizon agents increasingly rely on multi-step tool interactions to accomplish complex tasks, their execution trajectories continuously accumulate structured outputs and intermediate artifacts, leading to growing context overhead. Existing compression methods primarily rely on text importance or fixed truncation rules, often overlooking cross-step dependencies within workflows and potentially discarding critical information required for subsequent task execution. To address this challenge, we propose WAAC, a workflow-aware framework for agent trajectory compression. WAAC structurally models successful historical trajectories to extract reusable workflow compression experience and incorporates online backward dependency analysis to dynamically identify information retention requirements. By combining current dependency constraints with historical experience, WAAC selects appropriate compression strategies for different types of historical information. Experiments on PinchBench and Odysseys demonstrate that WAAC achieves an overall score of 87.6 and a perfect completion rate of 19.0%, respectively, while reducing execution costs by 19.7% and 29.1% compared with the strongest baseline methods. These results demonstrate the effectiveness of workflow-aware trajectory compression in improving task performance and cost efficiency for long-horizon agents. Code and resources are available at https://anonymous.4open.science/r/waac-6527/.",
    "published": "2026-11-06T01:47:55Z",
    "updated": "2026-11-09T12:17:56Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.08865"
  },
  {
    "id": "2611.07633",
    "title": "Redacting Personal Data: A Speed and Accuracy Comparison of Regex, Presidio and Hybrid Designs",
    "authors": [
      "Sai Yashwant",
      "Manoj Kumar Gondimalla",
      "Arjun Sharma",
      "Shubham"
    ],
    "abstract": "Many enterprise projects now pass free text to large language models (LLMs), and that text often contains personally identifiable information (PII) such as names, phone numbers, email addresses, home addresses and dates of birth. Once a prompt is sent, this data is copied into provider systems, application logs and observability traces. Redacting PII before the call is an obvious control, yet teams seldom have numbers on what it costs in latency or what it lets through. This paper compares four redaction designs that any LLM pipeline can adopt: a pure regular-expression (regex) redactor, Microsoft Presidio running on a spaCy model, a hybrid in which Presidio finds only person names while regex handles structured identifiers, and a fast hybrid that calls spaCy's named-entity component directly. All four share a known-entity rule, which removes the person the system already knows it is handling, and a consistent placeholder scheme, so the LLM can still tell one person from another after redaction. We evaluate the designs on a sample workflow, which we call ProfileAssist, that turns resumes into structured profiles, using 100 synthetic resumes (523 characters on average, with 900 PII values and 600 business terms that must survive). Regex ran at a 0.20 ms median but caught only 88.9% of PII, because it cannot find names that are not known in advance, such as the references listed in a resume. Presidio, hybrid and fast hybrid each caught 100% of PII and kept 100% of business terms, at median latencies of 37.59 ms, 30.23 ms and 13.48 ms. Measured against a 9,120 ms median LLM call, even the slowest option adds only 0.41% to the request. We therefore recommend the fast hybrid as a default for LLM pipelines that handle personal data, with regex kept as a safety net rather than as the only control.",
    "published": "2026-11-05T08:18:36Z",
    "updated": "2026-11-05T08:18:36Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.07633"
  },
  {
    "id": "2611.07632",
    "title": "TRACEMARK: Editor-Aware Watermarking for User Attribution in Text-Guided Image Editing",
    "authors": [
      "Xiaodong Wu",
      "Xiangman Li",
      "Jianbing Ni",
      "Rongxing Lu"
    ],
    "abstract": "An image editing service records which user requests each edit, but the edited image itself does not contain this account information. Once the image is downloaded and shared, the service cannot identify the requesting user from the image alone. Embedding a user-specific watermark could enable such attribution, but semantic editing may erase the signal. We propose Tracemark, an editor-aware watermarking framework for identifying users from edited images. A shared encoder embeds a user-specific signal before editing, and a shared detector recovers the user by comparing features of the edited image with learned reference vectors. Both components are trained jointly through an editor with fixed parameters. User identification errors encourage the encoder to produce watermarks that survive editing, while fidelity losses limit changes to the input image and intended edit. Each image domain and editing instruction uses a separately trained model shared across registered users. Experiments on three image domains show that editor-aware training improves user recovery with both reference-vector matching and binary watermark decoding. Separately trained models reach 87.5% mean identification accuracy among 500 users. When tested with a different editor without retraining, the watermark modules still recover user information. These results demonstrate that learning watermarks through the editing process enables user attribution without modifying the editor.",
    "published": "2026-11-05T08:17:36Z",
    "updated": "2026-11-05T08:17:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.07632"
  },
  {
    "id": "2611.07624",
    "title": "Beneath the Surface: What We Overlook When We Talk About Agent Evolution",
    "authors": [
      "Xiaobo Wang",
      "Zimu Wang",
      "Siyu Ye",
      "Jiaqi Li",
      "Min Tang",
      "Jun Bai",
      "Yuling Shi",
      "Ruobing Wang",
      "Jingjing Zhang",
      "Chaofan Wang",
      "Kai Wu",
      "Mengnan Qi",
      "Kai Cai",
      "Xiaodong Gu",
      "Qi Liu",
      "Zilong Zheng"
    ],
    "abstract": "Agent harness evolution enables recursive self-improvement (RSI) without updating model weights. We examine whether higher benchmark scores yield reliable, efficient, and transferable improvement. We evaluate four methods across harnesses, general and coding tasks. Repeated evaluations, controlled agent expansion, component interventions, and admission replays reveal recurring patterns. All sixteen evolved agents gain previously uncovered tasks while losing previously covered ones. In one general-task case, reliability rises by 5.2 points despite losing ten previously covered tasks. Most reliability gains also increase deployment cost. Specific changes usually outperform generic reminders, but their benefits can change when combined. The highest-scoring agent does not yield the largest mean improvement in any of our four pools, and stricter admission can discard useful alternatives. Transfer selectively preserves gains: coverage usually falls on the general-task target across both harness types and paradigms, but rises on the coding target with the outer-layer-only harness. These findings motivate preservation-aware evaluation, tested decision rules, and explicit applicability conditions. As a constructive follow-up, EvoAudit turns these diagnostics into revisions of select, analyze, mutate, and gate, achieving the best performance.",
    "published": "2026-11-05T08:06:37Z",
    "updated": "2026-11-05T08:06:37Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.07624"
  },
  {
    "id": "2611.07614",
    "title": "The Popular Get More Popular: Auditing Brand Bias in Generative Search",
    "authors": [
      "Giorgio Monaco",
      "Jacopo Lenti",
      "Francesco Pierri"
    ],
    "abstract": "The shift from traditional to generative search has fundamentally transformed online product discovery. Because conversational recommendations synthesize choices into a few direct answers, subtle systemic preferences toward specific providers can exert profound commercial impacts. In this work, we audit this phenomenon through two distinct dimensions: (i) brand popularity bias, the systematic preference for market-dominant entities over long-tail alternatives, and (ii) brand familiarity bias, the ranking advantage an entity encoded in an LLM's parametric memory holds over an unfamiliar competitor. First, evaluating commercial queries across major engines, we observe persistent brand popularity bias: dominant brands in the top quintile are cited 1.4x to 2.8x more frequently than the average brand within a sample of 1,176 top market players, already present in parametric memory that external web retrieval fails to mitigate. Second, through controlled in-context experiments holding product attributes constant, we find that substituting authentic brand signatures with unfamiliar ones significantly degrades recommendation rank. Conversely, fact-preserving content rewrites yield negligible ranking gains. Taken together, our findings demonstrate that generative search engines reinforce a ``rich-get-richer'' dynamic by favoring established market leaders and imposing a parametric barrier to entry that standard content optimization cannot overcome.",
    "published": "2026-11-05T07:57:01Z",
    "updated": "2026-11-05T07:57:01Z",
    "categories": [
      "cs.CY",
      "cs.AI",
      "cs.SI"
    ],
    "url": "https://arxiv.org/abs/2611.07614"
  },
  {
    "id": "2611.07613",
    "title": "Towards Real-Time Full-Waveform LiDAR Transformers via Intensity-Guided Token Reduction and Physics-Aware Augmentation",
    "authors": [
      "Kotaro Oishi",
      "Kazuma Ikeda",
      "Ryosei Hara",
      "Ryo Yoshida",
      "Mariko Isogawa",
      "Kentaro Yoshioka"
    ],
    "abstract": "LiDAR is a critical sensor for autonomous driving and robotics, yet it remains vulnerable to adverse conditions such as fog, rain, transparent objects, and low-reflectance surfaces. Full-waveform LiDAR (FWL) addresses these limitations by capturing the complete return waveform as a histogram, preserving rich reflection characteristics including multi-path echoes and weak signals. While recent Transformer-based approaches have demonstrated promise on FWL data, two fundamental bottlenecks remain: high computational cost from redundant tokens in low-intensity background regions, and limited generalization due to scarce annotated training data. We address both bottlenecks by exploiting the physical structure inherent to FWL data. First, we propose FWL-ToPM, a token pruning and merging mechanism that leverages intensity distributions to selectively reduce tokens while retaining critical waveform content. Second, we introduce FWLAug, a data augmentation framework designed as a regularization method that preserves waveform structure, retaining the Time-of-Flight waveform of each ray and the frustum geometry, to improve generalization to unseen scenes. Evaluated on the Ghost-FWL benchmark, FWL-ToPM achieves over 8 times speedup at real-time throughput alongside a nearly 9-point F1 gain over the prior state of the art, establishing the first real-time FWL Transformer that simultaneously improves accuracy. FWLAug further improves performance on both the standard benchmark and an out-of-distribution test set of unseen scenes. Together, these methods push FWL-based perception toward practical deployment. The code and the OOD dataset are publicly available and can be accessed via the project page: https://keio-csg.github.io/FWL-ToPM",
    "published": "2026-11-05T07:56:01Z",
    "updated": "2026-11-05T07:56:01Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.07613"
  },
  {
    "id": "2611.07610",
    "title": "Embedding-Space Fingerprinting of LoRA Fine-Tunes: Recovering the Training-Data Domain from the Model Artifact Alone",
    "authors": [
      "Shivesh Rane"
    ],
    "abstract": "When a base language model is fine-tuned with Low-Rank Adaptation (LoRA), how much of the training data domain leaks into the resulting artifact? This paper studies whether a simple classifier can recover the domain of a fine-tune given only the model artifact (weight deltas, internal activations on a fixed probe set, or generated text) without ever observing the training data. Using one base model (Qwen3.5-0.8B), 36 LoRA fine-tunes are produced over 18 public datasets in five domains (medical, code, mathematics, non-English text, narrative prose), and three feature families are extracted at decreasing levels of access: white-box weights, gray-box activations, and black-box outputs. A leave-one-dataset-out (LODO) protocol, frozen before any result was seen, tests whether the domain of a fine-tune trained on a previously unseen dataset can be identified. The domain is recoverable well above chance (20%) from gray-box activations (61%) and black-box outputs (64%); white-box weight statistics reach 42%. Contrary to the pre-registered hypothesis that signal decays monotonically from weights to activations to outputs, activations and outputs were more informative than the weight-delta statistics. The black-box result holds unchanged (64%) when only generated text is used, without token probabilities. Domain accuracy is also stable when a third run per dataset is trained on an independently drawn data subsample, and black-box predictions are unaffected by the LoRA rank (8-64). All code and per-run feature vectors are released.",
    "published": "2026-11-05T07:55:05Z",
    "updated": "2026-11-05T07:55:05Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.07610"
  },
  {
    "id": "2611.07604",
    "title": "FisherDistill: Diffusion Distribution Distillation via Closed-Form Fisher Critics",
    "authors": [
      "Mahesh Bhosale",
      "Yuanhao Zhai",
      "Siwei Lyu",
      "Junsong Yuan",
      "David Doermann",
      "Defang Chen"
    ],
    "abstract": "Recent advances in diffusion distillation have enabled high-quality image generation in only one or a few network function evaluations (NFEs). Despite their efficiency, aggressively distilled generators often retain a residual distribution gap from their multi-step teachers, motivating recent methods to introduce adversarial refinement with a learned discriminator. In this work, we ask whether such refinement necessarily requires a learned adversarial discriminator. We introduce \\textbf{FisherDistill}, a simple alternative based on Fisher linear discriminant analysis. Using intermediate representations from the frozen teacher, we estimate the first- and second-order statistics of real and generated samples and derive a closed-form Fisher direction that maximally separates their feature distributions relative to within-class variation. This direction provides a lightweight refinement signal that complements the original distillation objective without requiring an additional adversarial discriminator or its optimization loop. Across multiple distillation frameworks, our approach consistently improves generation quality over their respective distilled baselines and substantially closes the gap to adversarially refined counterparts. Code: https://bhosalems.github.io/FisherDistill/",
    "published": "2026-11-05T07:53:14Z",
    "updated": "2026-11-05T07:53:14Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.07604"
  },
  {
    "id": "2611.07598",
    "title": "Align Before Aggregation: Basis-Consistent Federated LoRA under Heterogeneous Ranks",
    "authors": [
      "Pengpeng Qiao",
      "Yang Cao",
      "Lingling Zhang",
      "Guo Cheng",
      "Junwei Chen",
      "Manjiang Yu",
      "Wei Yang Bryan Lim",
      "Masatoshi Yoshikawa"
    ],
    "abstract": "Federated fine-tuning of large language models (LLMs) under heterogeneous client capacities is increasingly important, and low-rank adaptation (LoRA) with heterogeneous ranks makes it practical. Existing server-side aggregators compose local matrix updates $ΔW_i$ from client-specific LoRA factors $(A_i,B_i)$ before aggregating them. Although these matrix updates lie in the same weight space $\\mathbb{R}^{m\\times n}$ and can be averaged directly, the LoRA factors that generate them may expressed client-specific local basis. In the typical compose--aggregate--factorize--dispatch loop, this basis inconsistency can make the rank-$r_i$ reference prefix dispatched to lower-rank clients unstable after server-side refactorization. In this work, we propose \\textbf{FedAbA}, a basis-consistent federated LoRA aggregation framework for heterogeneous ranks. FedAbA first extracts each client's local basis, aligns it to the corresponding prefix of the global reference basis, and constructs a basis-consistent reconstruction of each local matrix update before aggregation. It then aggregates these reconstructions with weights that combine client data size and consistency score, followed by exact coefficient-space SVD refactorization and gauge fixing before rank-prefix dispatch. Our theoretical analysis clarifies the role of basis consistency and supports the proposed consistency-aware aggregation mechanism. Extensive experiments show that FedAbA outperforms representative federated LoRA baselines, with the largest gains under the strongest rank heterogeneity.",
    "published": "2026-11-05T07:46:29Z",
    "updated": "2026-11-05T07:46:29Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.07598"
  },
  {
    "id": "2611.07595",
    "title": "Evolver: Turning Agent Exploration into Evolving Capabilities",
    "authors": [
      "Haoyang Zhang",
      "Qumeng Sun",
      "Xiao Zhang",
      "Xiang Liu",
      "Zhidong Fan",
      "Junjie Wang"
    ],
    "abstract": "Agent exploration produces valuable procedural knowledge, yet much of this experience remains confined to transient execution traces and is not systematically reused. We introduce Evolver, an experience-driven framework that transforms agent exploration into persistent, reusable capabilities without updating foundation model parameters. Built around structured Gene assets, Evolver integrates experience acquisition, retrieval, and feedback-guided evolution to support experience-conditioned execution across existing agent harnesses. We evaluate Evolver using Claude Code and Codex, two foundation model configurations, and four benchmarks: Terminal-Bench 2.1, SWE-bench Multilingual, SWE-rebench, and GAIA. On a selected diagnostic set of 320 paired executions, Evolver improves task success from 83.13% to 87.50% (+4.38 percentage points) while reducing recorded task-execution token consumption by 24.24%. Furthermore, among 265 pairs successful under both conditions, token consumption decreases by 17.57%, demonstrating efficiency benefits even when task success is preserved. These findings suggest that persistent procedural experience can improve both task effectiveness and execution efficiency, providing a practical foundation for transforming agent exploration into evolving capabilities.",
    "published": "2026-11-05T07:44:28Z",
    "updated": "2026-11-05T07:44:28Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.07595"
  },
  {
    "id": "2611.07593",
    "title": "TACT-KV: Tri-Axis Cosine Transform for Compressing Volumetric KV Caches in Medical VLMs",
    "authors": [
      "Chongyu Qu",
      "Ritchie Zhao",
      "Yufan He",
      "Dong Yang",
      "Zhengyi Lu",
      "Junchao Zhu",
      "Tianyuan Yao",
      "Juming Xiong",
      "Junlin Guo",
      "Yanfan Zhu",
      "Yuechen Yang",
      "Daguang Xu",
      "Bennett Allan Landman",
      "Yucheng Tang",
      "Yuankai Huo"
    ],
    "abstract": "Vision-language models (VLMs) applied to 3D medical scans face a structural memory wall. A single CT or MRI volume produces tens of thousands of vision tokens, and the resulting key-value (KV) cache scales linearly with both batch and context. Existing KV compression methods operate on the cache's feature or token statistics, or apply 1D and 2D transforms, leaving the three-axis spatial structure in the cache unexploited. We propose TACT-KV (Tri-Axis Cosine Transform), a calibration-free KV compression method that exploits strong spatial correlations in visual KV states along all three anatomical axes of 3D scans. This correlation concentrates the KV cache energy under a frequency-domain transform. TACT-KV applies a separable 3D discrete cosine transform to the KV cache, allocates a per-layer bit budget across frequency bins via reverse water-filling (more bits to high-energy components), and quantizes each bin with a fixed scalar codebook. We derive a close-form relation: the distortion reduction from adaptive bit allocation is dominated by the spectral concentration of the transformed cache. Across six medical VLMs and two 3D CT benchmarks, TACT-KV achieves the lowest 1-bit prediction-flip rate on eleven of twelve model and dataset pairs in our main comparison. The same advantage reproduces on four general-purpose VLMs evaluated on video tasks, indicating that the benefit of exploiting three-axis structure generalizes beyond medical imaging. At equal high-bandwidth memory (HBM), TACT-KV scales the decoding batch size on a single GPU by up to $8\\times$.",
    "published": "2026-11-05T07:43:29Z",
    "updated": "2026-11-05T07:43:29Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.07593"
  },
  {
    "id": "2611.07589",
    "title": "Learning and Steering in Incomplete-Information Games",
    "authors": [
      "Asrın Efe Yorulmaz",
      "Tamer Başar"
    ],
    "abstract": "In many modern multi-agent systems, a mediator seeks to influence strategic decision dynamics using only outcome-level feedback and without knowing agents' utilities. In this work, we study how a mediator can learn an unknown game and steer adaptive agents toward outcomes that maximize her utility using only trajectory feedback. The mediator knows the game form and her own objective, but not the agents' utilities. Moreover, she commits to nonnegative payments and provides recommendations and contexts, but receives only a single realized terminal outcome rather than full-information feedback. We develop halving-type algorithms that learn utility differences in normal-form games and conditional continuation-value differences in extensive-form games, achieving a sample complexity of $\\widetilde O(\\varepsilon^{-2})$ that matches worst-case lower bounds up to logarithmic factors. We then combine these learning procedures with a Lagrangian formulation in an online Learn-Compute-Steer algorithm that interleaves learning, equilibrium computation, and steering toward mediator-optimal extensive-form correlated equilibria (EFCE). With high probability, the Learn-Compute-Steer algorithm achieves a directness gap and an optimality gap of $\\widetilde O(T^{-1/4})$, while time-average payments are of $\\widetilde O(T^{-1/8})$.",
    "published": "2026-11-05T07:40:05Z",
    "updated": "2026-11-05T07:40:05Z",
    "categories": [
      "cs.GT",
      "cs.AI",
      "cs.LG",
      "eess.SY",
      "math.OC"
    ],
    "url": "https://arxiv.org/abs/2611.07589"
  },
  {
    "id": "2611.07586",
    "title": "Stress Testing Chain-of-Thought Monitoring Against Covert Misalignment",
    "authors": [
      "Yao Huang",
      "Yifan Wang",
      "Yitong Sun",
      "Yichi Zhang",
      "Yinpeng Dong"
    ],
    "abstract": "As LLM agents advance rapidly in autonomy, the risk of hidden objectives that bypass safety constraints becomes increasingly plausible. Chain-of-thought (CoT) monitoring offers a key control mechanism by reading the agent's reasoning and flagging misalignment before it materializes into action, yet its reliability depends on the realism of the red-team it is stress-tested against. Existing red-teaming efforts rely on shared templates, such as casting a side task as a prerequisite, which treat the side objective as an exogenous insertion and leave task-specific, contextually grounded evasions underexplored. We therefore ask: How robust is CoT monitoring against agents that strategically conceal misalignment? To answer this, we introduce TraceMRT, an automated Trace-level Monitor Red-Teaming framework that reframes the side task as a coherent sub-goal of the primary task and searches trace-shaping strategies whose induced trajectories complete the misaligned objective while reading as natural execution. Through black-box attacks on state-of-the-art monitors such as GPT-5.2 and Claude-4.5, we reveal substantial vulnerabilities even in top models. To counter these vulnerabilities, we propose a Bayesian Trajectory Monitoring framework, integrating global context and local segment evidence to detect covert misalignment. Empirically, our method significantly consolidates monitor robustness with 0.91 AUC and 0.74 TPR@FPR=0.05.",
    "published": "2026-11-05T07:39:01Z",
    "updated": "2026-11-05T07:39:01Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.07586"
  },
  {
    "id": "2611.06105",
    "title": "XuanJian-DINOSAR: A SAR Foundation Model Based on Global and Local Semantic Consistency",
    "authors": [
      "Chunxiao Wu",
      "Huixin Huang",
      "Jialei Pan",
      "Qiang Liang",
      "Tao Wu",
      "Cheng Wu",
      "Long Huang",
      "Yuanji Li",
      "Qiang Cheng",
      "Aifang Liu",
      "Linghao Xia",
      "Rui Zhang"
    ],
    "abstract": "Self-supervised pre-training on synthetic aperture radar (SAR) imagery enables transferable representations, but the optical-SAR domain gap and speckle perturbations limit representation stability. Most SAR foundation models use masked image modeling (MIM) through pixel reconstruction or structural feature prediction, which is sensitive to speckle or relies on predefined operators. Joint modeling of cross-view semantics and perturbation stability at corresponding spatial locations remains underexplored. We propose XuanJian-DINOSAR, a SAR foundation model based on global and local semantic consistency. We curate over 360K publicly available SAR target chips, detection images, and scene images spanning diverse targets, scenes, and sensors, and adapt an optically pre-trained DINOv2 model to SAR through self-supervised learning. The framework combines DINO global semantic self-distillation, iBOT local masked modeling, and KoLeo feature-distribution regularization to learn globally discriminative and locally structure-aware representations. We introduce a local semantic consistency branch tailored to SAR intensity statistics and coherent imaging characteristics. Shared geometric transformations produce spatially aligned teacher weak views and student strong views. Intensity transformations and Gamma multiplicative speckle perturbations are applied to student views, while a cosine consistency loss aligns patch tokens at corresponding locations, promoting stability under radiometric perturbations. This objective complements the cross-region and cross-scale semantic consistency of DINOv2 multi-crop training, jointly enforcing global and local semantic consistency. Experiments on multiple downstream classification and detection datasets demonstrate state-of-the-art performance on most evaluation metrics, validating the generality and transferability of the learned representations.",
    "published": "2026-11-04T07:50:06Z",
    "updated": "2026-11-04T07:50:06Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.06105"
  },
  {
    "id": "2611.06100",
    "title": "Reconciling Privacy with Provenance for Language Model Watermarks",
    "authors": [
      "Elise L. Han",
      "Tatsunori Hashimoto"
    ],
    "abstract": "Watermarking has great potential for regulating the use of language models (LMs), but its deployment has been marred by controversy, as many users argue that fine-grained tracking of LM usage violates their privacy. This tension reduces the effectiveness of watermarks, as users engage in evasion strategies such as paraphrasing that can remove much of the watermark signal. We show that provenance and privacy can be reconciled if we shift the goal of watermark design from tracking individuals to estimating aggregate usage. We develop locally differentially private watermarks which provably limit the evidence that any individual text can contribute to detection, while still enabling accurate estimation of population frequencies. We introduce the Red-Green Sequence (RGS) watermark, a private and computationally efficient watermark that achieves accurate frequency estimation at high privacy levels across various models, sample sizes and generation entropies in settings that reflect realistic deployment scenarios. On C4 language modeling tasks, we attain $0.0019$ MSE with $0.0038$ mean absolute bias at a low $\\varepsilon$ of 1, while in more challenging settings such as an essay writing task with only 100 text samples, we still find errors on the order of $0.0113$ MSE with $0.004$ mean absolute bias at $\\varepsilon=2$.",
    "published": "2026-11-04T07:45:02Z",
    "updated": "2026-11-04T07:45:02Z",
    "categories": [
      "cs.CR",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.06100"
  },
  {
    "id": "2611.06096",
    "title": "Many Pixels, One Composition: Self-Supervised Spectra for Specimen-Level Prediction",
    "authors": [
      "Eleftheria Tetoula-Tsonga",
      "George Arvanitakis",
      "Theodoros Giannakas"
    ],
    "abstract": "Can hyperspectral (HS) imaging be used to predict the elemental composition of physical specimens found on the Earth's surface? We approach this problem as a supervised regression task, using an open dataset of specimens, each comprising a HS cube and elemental characterization. In particular, we train an encoder in a self-supervised fashion that operates on pixel-level; then freeze the encoder and train a lightweight attention-based regression head in a supervised manner, by pairing many representations of a given specimen with its corresponding elemental label. In test specimens, our approach significantly outperforms traditional spectral matching and unmixing baselines. It also outperforms supervised learning models based on the mean spectrum (of similar model capacity), while full model fine-tuning achieves the strongest performance, at substantially higher model capacity.",
    "published": "2026-11-04T07:42:25Z",
    "updated": "2026-11-04T07:42:25Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.06096"
  },
  {
    "id": "2611.06095",
    "title": "Reasoning-Trace Overflow in Code Generation: An Empirical Study of Explicit Reasoning Models",
    "authors": [
      "Lukas Twist",
      "Helen Yannakoudakis",
      "Jie M. Zhang"
    ],
    "abstract": "Explicit reasoning can help language models generate code, but it also introduces a practical risk: the model may spend so much of its output budget reasoning that it never produces usable code. We study this behaviour in relatively small open-weight reasoning models, framing it as reasoning-trace overflow. Across seven models and six code benchmark settings, we measure how much of a fixed 32k-token output budget is spent on reasoning, whether that reasoning improves pass@1, and whether lightweight inference-time controls can mitigate overflow. Our results show that the value of reasoning is highly conditional. Overflow is rare on simpler function-level tasks, but becomes common on harder code-generation benchmarks and for particular model families: on several model--benchmark pairs, more than half of generations exhaust the full 32k-token budget while still reasoning. Most complete overflow is associated with repetitive reasoning loops, although substantial long reasoning also occurs without looping. Disabling reasoning can therefore be competitive for overflow-prone models, simply because it ensures that an answer is produced. At the same time, reasoning remains valuable for stronger models on harder algorithmic and code-understanding tasks. Finally, prompt steering can substantially reduce overflow for some models but is inconsistent, while budgeted transitions provide more direct control and can improve both performance and token efficiency for overflow-prone models. These findings suggest that explicit reasoning should be treated as a controllable resource for code generation, rather than an always-on capability.",
    "published": "2026-11-04T07:42:05Z",
    "updated": "2026-11-04T07:42:05Z",
    "categories": [
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2611.06095"
  },
  {
    "id": "2611.06093",
    "title": "Drift-adaptive Representation Preservation for Domain-Incremental Learning",
    "authors": [
      "Hyunmin Kong",
      "Gyutae Oh",
      "Jitae Shin"
    ],
    "abstract": "Pretrained vision models provide strong general-purpose representations, but in Domain-Incremental Learning (DIL), where the input distribution changes sequentially, adapting to new domains often degrades performance on previously learned ones. We observe that forgetting is not uniform across domains and classes and is not explained by training order alone. This motivates us to track each past domain-class concept individually. We use representation drift, defined as the deviation of a past concept's current representation from a fixed anchor, as a measurable surrogate for forgetting risk. The measured drift then serves two complementary roles. A consolidation loss assigns stronger preservation to high-drift pairs, while prototype construction down-weights highly drifted domains to reduce their influence on the class reference. Preservation is thus allocated by measured drift rather than assumed importance. To obtain this signal during training without storing past raw data, we repurpose a Joint-Embedding Predictive Architecture (JEPA). For each domain-class pair, we store only a compact context summary in the backbone feature space and rerun it through the learned context-to-target relation to measure its drift from the fixed anchor. Across DomainNet, Office-Home, CORe50, and CDDB-Hard, our method sustains a strong accuracy-forgetting balance on every benchmark, using substantially less training memory than accuracy-competitive methods and the smallest storage among compared methods.",
    "published": "2026-11-04T07:37:56Z",
    "updated": "2026-11-04T07:37:56Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.06093"
  },
  {
    "id": "2611.06089",
    "title": "STARE: Scene Text-Aware multimodal Retrieval for Everyday objects",
    "authors": [
      "Kento Tokura",
      "Ryosuke Korekata",
      "Daichi Yashima",
      "Kei Katsumata",
      "Kanon Amemiya",
      "Miyu Goko",
      "Komei Sugiura"
    ],
    "abstract": "In this study, we focus on service robots that retrieve and transport everyday objects based on free-form instructions that may refer to visual features and scene text. This is challenging because it requires a multimodal understanding of the visual features and spatial relationships of objects, as well as scene text embedded in the environment. To address this, we propose Scene Text-Aware multimodal Retrieval for Everyday objects (STARE), which leverages visual and textual cues in response to free-form instructions. STARE introduces Crosslingual Visual Prompt to enhance scene text interpretation, and models the complex relationships between named entities in the instructions and their corresponding objects. We evaluate STARE using two novel benchmarks, GoGetIt and TextCaps-test, both of which consist of real-world indoor/outdoor images and instructions involving object manipulation and navigation. The results show that STARE outperforms all baseline methods on standard multimodal retrieval metrics. Furthermore, in physical experiments conducted under a zero-shot transfer setting, STARE achieves an overall success rate of 80%. Our project page and code are provided in the Supplementary Materials.",
    "published": "2026-11-04T07:32:37Z",
    "updated": "2026-11-04T07:32:37Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.06089"
  },
  {
    "id": "2611.06085",
    "title": "GeoBiaset: A Counterfactual Benchmark for Demographic Bias in World-Level Geolocalization",
    "authors": [
      "Niccolò Niccoli",
      "Silvia Dani",
      "Marco Mistretta",
      "Andrew D. Bagdanov",
      "Marco Bertini",
      "Lorenzo Seidenari"
    ],
    "abstract": "World-level image geolocalization is an increasingly important task, yet the biases of current models remain poorly understood. Prior work has identified coarse dataset imbalances noting, for instance, that some cities are absent from training sets and that models tend to perform better in wealthier regions. However, no one has yet examined which visual cues drive these disparities. To do so, we introduce GeoBiaset, the first benchmark designed to measure how geolocalization models are influenced by the apparent race of a person inserted into the image foreground. The dataset consists of 9,541 images, pairing existing geotagged background images with counterfactual edits spanning seven races, holding the ground-truth coordinates fixed. Controlled masking experiments show that occlusion and background drift do not fully explain geolocalization degradation. Alongside the benchmark, we introduce the Person-Origin Perturbation Indicators (POPI), novel metrics that quantify model resilience to these demographic perturbations by measuring whether predictions are pulled toward the region associated with the inserted group. Our evaluation of state-of-the-art geolocalization and multimodal large language models reveals a 16-47% drop in continent-level performance when a subject from a demographically mismatched group is inserted. A landmark versus no-landmark analysis and gradient-weighted heatmaps show that models preferentially attend to geographic landmarks when present, but shift attention to facial features in their absence.",
    "published": "2026-11-04T07:27:31Z",
    "updated": "2026-11-04T07:27:31Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.06085"
  },
  {
    "id": "2611.06083",
    "title": "SleuthVLM: Do We Really Need Audio-in-Video for Omni Video Understanding?",
    "authors": [
      "Peiran Wu",
      "Fangfei Gou",
      "Zhaoxi Mu",
      "Changhao Zhang",
      "Jian Liu",
      "Weiqiang Wang",
      "Yuntao Wang",
      "Yuanchun Shi",
      "Junxiao Shen"
    ],
    "abstract": "Omni models answer questions about videos by jointly processing sampled frames and audio in one turn, with progress driven largely by scaling model size and omni training data. We ask whether a model needs to hear the audio directly at all, and present SleuthVLM, an agent harness built on a VLM that never hears the audio directly: speech will be transcribed into text, and the VLM will sleuth the video on its own without any predefined workflow. On four omni benchmarks with videos up to 90 minutes, SleuthVLM achieves the best average accuracy: \\textbf{75.0%}, 2.6 points above Gemini 3.8 Flash, and it also tops the Video-MME-v2 leaderboard with \\textbf{77.8%}; with an open-source 27B VLM, it beats all open-source omni models. We draw three findings: SleuthVLM beats a model that glances; hearing is not the bottleneck, agentic ability is; omni understanding needs better agentic ability, not just more omni data for modality alignment. So we provide a simple but effective starting point for doing omni video understanding. Omni understanding needs better agents, not just bigger models that hear.",
    "published": "2026-11-04T07:25:06Z",
    "updated": "2026-11-04T07:25:06Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.06083"
  },
  {
    "id": "2611.06078",
    "title": "SysPilot: Cross-Library Performance Autotuning via Library Performance Contracts",
    "authors": [
      "Yineng Yan",
      "Haowei Chen",
      "Christopher J. Rossbach"
    ],
    "abstract": "Modern scientific and machine-learning applications compose many independently developed libraries. When these libraries run together, their independently managed runtimes can oversubscribe shared resources: using the same CPU cores, fighting over GPUs, or contending for memory bandwidth. Avoiding such contention requires careful configuration across library boundaries. Existing autotuners do not directly investigate what resources are shared between libraries, which runtime signals correlate with interference. As a result, they are inefficient for finding optimal configurations to mitigate contention. This paper presents SysPilot, a cross-library performance autotuning system based on Library Performance Contract (LPC). A Library Performance Contract captures a library's resource demands, assumptions, controls, and observability signals in LPCL, a specification language for describing library resource requirements. SysPilot synthesizes contracts from documentation and code artifacts, composes contracts from the libraries used by an application, derives resource-conflict hypotheses, profiles the application to validate those hypotheses, and selects candidate configurations. This design makes the Library Performance Contract a reusable unit of performance knowledge: a contract for a library can be reused across many applications that depend on that library. We evaluate SysPilot on a benchmark suite of cross-library contention scenarios. The results show that SysPilot matches the performance of autotuners that rely on application-specific manual information while retaining cross-application reuse. Compared with general-purpose autotuners such as OpenTuner and SMAC3, SysPilot improves benchmark performance metrics by up to an additional 38% over the best configuration found by these autotuners, while using 3x fewer runs.",
    "published": "2026-11-04T07:20:45Z",
    "updated": "2026-11-04T07:20:45Z",
    "categories": [
      "cs.PF",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.06078"
  },
  {
    "id": "2611.06075",
    "title": "UniCompress: From Multi-LoRA Experts to One Compact Model for Edge Intelligence",
    "authors": [
      "Mingkang Liu",
      "Peipei Jiao",
      "Weiming Meng",
      "Tianyuan Liu",
      "Lichen Pang",
      "Junyan Li"
    ],
    "abstract": "Embodied and edge systems increasingly rely on vision-language models (VLMs) to support heterogeneous skills, yet deploying a separate task adapter for each skill while retaining a high-precision backbone creates substantial memory and management costs. We present UniCompress, a deployment-oriented framework that converts multi-task expertise into one compact, adapter-free model. Starting from a consolidated BF16 Qwen3-VL-4B teacher, UniCompress constructs an asymmetric INT2 student using GPTQ initialization and teacher-guided quantization recovery. The approach jointly quantizes and recovers the projection weights in the vision encoder and language backbone, enabling aggressive compression of the complete vision-language model while preserving its multi-task behavior. We evaluate UniCompress on four heterogeneous embodied tasks: posture recognition, household-safety understanding, multimodal dialogue routing, and mobile-GUI action prediction. UniCompress reduces the approximate weight storage from 8.9 GB in BF16 to 2.1 GB in INT2, corresponding to a reduction of approximately 76%. It improves the INT2 macro task score by 34.3 percentage points over GPTQ-INT2 while remaining within 0.9 points of the consolidated BF16 teacher. These results demonstrate the potential of teacher-guided joint vision-language INT2 recovery for deploying a single multi-skill VLM on resource-constrained embodied platforms.",
    "published": "2026-11-04T07:18:55Z",
    "updated": "2026-11-04T07:18:55Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.06075"
  },
  {
    "id": "2611.06074",
    "title": "Which One Is Sounding? Binaural Sounding Instance Disambiguation for Audio-Visual Segmentation",
    "authors": [
      "Haoze Ma",
      "Yidi Li",
      "Yu Ma",
      "Pengyuan Zhao",
      "Yi Shi",
      "Bin Ren",
      "Yanwen Guo",
      "Dimitrios Kanoulas"
    ],
    "abstract": "Existing audio-visual segmentation methods mainly predict sound-related regions or category masks and often fail to identify the sounding instance when multiple same-class candidates coexist. Recent audio-visual instance segmentation methods address instance-level prediction but rely largely on motion and cross-frame association, which may become unreliable under sparse observations or inconspicuous motion. To this end, we introduce binaural audio, whose interaural differences encode source-direction information, to provide spatial constraints for distinguishing the sounding instance among same-class visual candidates. We propose Binaural Sounding Instance Disambiguation for Audio-Visual Segmentation (BiSID-AVS), which progressively refines category-level candidate responses into a mask of the true sounding instance. BiSID-AVS first grounds category-consistent candidate regions through audio prompting, then projects binaural cues into an image-plane spatial response map, and finally refines the true sounding instance through dual-level spatial conditioning at the feature and decoder levels. Experiments on the binaurally extended AVS-Synthetic benchmark and Habitat-AVS dataset for robotic indoor perception show that BiSID-AVS achieves the best performance on the multi-candidate subsets, improving instance-level mIoU by 35.19 and 41.21 percentage points, respectively, while substantially reducing false activation on non-sounding same-class regions.",
    "published": "2026-11-04T07:18:41Z",
    "updated": "2026-11-04T07:18:41Z",
    "categories": [
      "cs.AI",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2611.06074"
  },
  {
    "id": "2611.06070",
    "title": "RouTex: Multi-reference 3D Texture Generation by Reprogramming Rotary Position Encoding",
    "authors": [
      "Chengyang Li",
      "Yang Liu",
      "Jiale Zhang",
      "Qiang Rao",
      "Wei Zhang",
      "Taicheng Huang"
    ],
    "abstract": "While single-image 3D texture generation has advanced significantly, conditioning texture synthesis on multi-view reference images remains largely under-explored, despite its necessity for resolving surface ambiguity in unobserved regions. In this paper, we propose RouTex, a novel multi-reference 3D texture generation framework based on in-context Diffusion Transformers (DiT). Our key insight is that native 3D Rotary Position Encoding (RoPE) inherently possesses spatial addressing capabilities. We introduce Positional Routing (PR) to reprogram 3D RoPE along spatial and semantic dimensions, establishing explicit reference-to-view correspondence without introducing additional parameters. To execute this routing efficiently, Dual-Granularity Attention (DGA) combines per-view local attention for fine texture fidelity with global joint attention over deduplicated references for cross-view consistency. Extensive experiments demonstrate that RouTex achieves new state-of-the-art performance in multi-reference 3D texture generation.",
    "published": "2026-11-04T07:16:38Z",
    "updated": "2026-11-04T07:16:38Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.06070"
  },
  {
    "id": "2611.04300",
    "title": "CLOCs-R: Radar-Assisted Camera-LiDAR Fusion for Long-Range Object Detection",
    "authors": [
      "Richard Beuck",
      "John Nguyen",
      "Sudip Dhakal"
    ],
    "abstract": "Long-range 3D object detection remains difficult for autonomous vehicles because LiDAR returns become sparse and camera evidence weakens with distance, while automotive radar keeps returning measurements far beyond both. We present CLOCs-R, an extension of the CLOCs candidate-level fusion framework that adds radar evidence to camera-LiDAR rescoring. Radar returns are accumulated over several sweeps, compensated for ego-motion, and associated with each pre-NMS 3D candidate through a range-dependent gate. Compact features summarizing support, Doppler speed and spread, range residual, and offset are then appended to every camera-LiDAR pair before a lightweight fusion network rescores the candidates. We first verify that our fusion implementation reproduces CLOCs on KITTI. We then evaluate on the daytime clear-weather subset of the aiMotive dataset, reporting distance-binned metrics out to 200 m with frozen SECOND and Cascade R-CNN detectors. Camera-LiDAR CLOCs improves on SECOND up to 50 m but degrades beyond it. A residual scoring variant, introduced post hoc, corrects SECOND's score instead of replacing it and recovers most of this loss. Radar consistently improves BEV AP at 30-50 m (0.857 to 0.870), but beyond 50 m its gain is small (+0.003 center-distance AP), within seed variation, and CLOCs-R with residual scoring is statistically tied with LiDAR-only SECOND. Our analysis attributes the limited long-range benefit to weak separation of true and false detections by radar features, scarce far-range training positives, poor camera evidence at distance, and missing LiDAR proposals that rescoring cannot recover. We report all as-designed and post hoc results side by side.",
    "published": "2026-11-03T04:30:22Z",
    "updated": "2026-11-03T04:30:22Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.04300"
  },
  {
    "id": "2611.04296",
    "title": "SEAM: Situated Executable Associative Memory for a Co-located Community",
    "authors": [
      "Keru Wang",
      "Michael Xu",
      "Ken Perlin",
      "Nebojsa Jojic",
      "Andrzej Banburski-Fahey"
    ],
    "abstract": "In groups, knowledge is distributed among individuals, and how it is brought together depends on social ties. Taking inspiration from how a single mind recalls and reacts to memories and current stimulus, we build a shared memory that does this for a community, prototyped as a social app, SEAM. Members post arbitrary moments; SEAM works out how fragments relate, distills knowledge about the group, and replies in a situated and associative way. Some of these memories act as instructions that can alter how the system behaves, making it programmable by its members. We deployed SEAM to 46 people in a co-located community for two weeks of open-ended use, and ran a follow-up workshop with 14. Members shared their days, interrogated the memory, and instructed it to track routines and run games; replies introduced them to people and subjects they had never encountered. SEAM points towards communities where knowledge finds people.",
    "published": "2026-11-03T04:24:20Z",
    "updated": "2026-11-03T04:24:20Z",
    "categories": [
      "cs.HC",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04296"
  },
  {
    "id": "2611.04295",
    "title": "Reciprocity Can Erase Direction:tructural Boundaries and Controlled Utility of Magnetic Graph Networks",
    "authors": [
      "Dawei Han",
      "Zicheng Wang",
      "Yaoxing Ren",
      "Yi Lv",
      "Rongqian Wu",
      "Fumin Wang"
    ],
    "abstract": "Magnetic graph networks encode direction through phase, but a learned graph can erase the intended directional mechanism before prediction. We characterize this failure for support-based magnetic Laplacians. Exact identities relate imaginary energy and distance from zero phase to amplitude-weighted reciprocity. Top-$k$ selection forces complete collapse when the observed-node count satisfies $m\\leq k+1$, and dense support imposes a lower bound on reciprocal-arc fraction. We then construct paired propagation examples with identical node features and symmetric amplitudes but opposite labels, giving a provable chance-level limit for direction-erasing representations. In 72 fixed neural fits, support phase achieved test AUROC 1.0000 on a unilateral ring but 0.5000 on reciprocal ring and complete supports; continuous score phase and a real directed comparator achieved 1.0000 throughout. All models solved the direction-free control. These are oracle-direction mechanism tests, not evidence of learned clinical direction. In the preserved public DeepDRiD development study, continuous phase was active but its robustness difference from zero phase was only $+0.0036$ (descriptive 95\\% interval $-0.0014$ to $+0.0095$) on validation patients used for checkpoint selection. The contribution is a structural and experimental framework for distinguishing erased direction from unestablished task utility. It provides a precise circumstance in which magnetic phase preserves useful information, without asserting universal or clinical superiority.",
    "published": "2026-11-03T04:21:29Z",
    "updated": "2026-11-03T04:21:29Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04295"
  },
  {
    "id": "2611.04289",
    "title": "When Debate Amplifies Risk: Social-Bias Vulnerabilities in Multi-Agent Safety Deliberation",
    "authors": [
      "Qinghua Mao",
      "Xi Lin",
      "Yuxin Qi",
      "Zihao Xu",
      "Jinze Gu",
      "Yuliang Chen"
    ],
    "abstract": "Retrieval-augmented Web applications increasingly employ multi-agent debate (MAD) to aggregate conflicting, noisy, and heterogeneous information, yet deliberation is fundamentally a social process susceptible to interpersonal dynamics. When retrieved Web sources contain latent hazards alongside safe factual content, social biases such as conformity pressure and authority deference can override evidence-grounded safety boundaries. In this work, we investigate whether the social structure of deliberation can paradoxically amplify latent Web safety risks. We introduce SafeConflict-Bias, a controlled counterfactual diagnostic protocol spanning six core Web risk categories, which holds queries and retrieved evidence strictly invariant while isolating conversational majority sway, authority cues, and confidence asymmetry. Empirical evaluation across diverse proprietary and open-source backbones reveals that while isolated models reliably reject unsafe guidance, standard MAD catastrophically capitulates to social pressure---surging unsafe adoption from 0.0\\% up to 100.0\\% and systematically silencing safe minority evidence. To resolve this systemic fragility without retraining or debate regeneration, we propose RiskTrace-Debias, an inference-time auditing framework uniting evidence-first precommitment, social-metadata masking, and consistency-gated arbitration. RiskTrace-Debias suppresses worst-case unsafe adoption to $\\le 2.0\\%$ across all architectures without inducing over-refusal, while generating verifiable provenance traces to audit interpersonal manipulation in Web deliberation.",
    "published": "2026-11-03T04:16:06Z",
    "updated": "2026-11-03T04:16:06Z",
    "categories": [
      "cs.CR",
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2611.04289"
  },
  {
    "id": "2611.04287",
    "title": "Predicting protein structures at any folding stage from sequence",
    "authors": [
      "Lisheng Zhang",
      "Qingsong Li",
      "Zinan Xie",
      "Yanting Yang",
      "Qikui Yang",
      "Peng Lu",
      "Zhican Fu",
      "Wentao Cui",
      "Runtong Hou",
      "Zhengwei Xie"
    ],
    "abstract": "Protein structure prediction has largely focused on native conformations, leaving the continuum of unfolded states, folding intermediates, and native structures difficult to access. We present FoldScape, a sequence-conditioned deep learning framework for generating protein conformational ensembles at specified folding fractions $Q$. Trained on approximately one million conformations from 10,000 protein sequences, FoldScape combines coarse-grained folding and all-atom mechanical-unfolding trajectories. It reconstructs three-dimensional $C_α$ chains through hierarchical sliding-window regressions of inter-residue distances, chain-level assembly, and a rectified-flow decoder. By conditioning on folding progress, FoldScape generates conformations from unfolded states through intermediates to native-state structures without protein-specific molecular dynamics at inference. In matched-sample comparisons, FoldScape achieves median conformational-space coverage of 0.989, 0.722, and 0.877 along radius of gyration, fraction of native contacts $Q$, and secondary-structure fraction, respectively, versus 0.05, 0.05, and 0.10 for seed-varied AlphaFold 3 ensembles. Coverage advantages are consistent across the evaluated proteins and robust to binning choices. Reconstruction accuracy remains approximately stable across the evaluated stages of a folding trajectory, and stride-one crop-and-superpose inference extends predictions to chains several times longer than the single-pass limit. Analyses of mechanical-unfolding trajectories show residue-resolved pathways, reproducible extension-conditioned observables across pulling velocities, and geometrically coherent segments in partially unfolded chains. FoldScape extends sequence-based structure prediction beyond a single folded endpoint to controllable conformational-ensemble generation across protein folding.",
    "published": "2026-11-03T04:15:20Z",
    "updated": "2026-11-04T03:46:56Z",
    "categories": [
      "q-bio.BM",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04287"
  },
  {
    "id": "2611.04286",
    "title": "GroundSeek-CXR: Retrospective Evaluation-Guided Active Observation Framework for Multi-Label Chest Radiography Diagnosis",
    "authors": [
      "Yihang Fu",
      "Xinyu Liu",
      "Qing Xu",
      "Xiaofeng Yang",
      "Zhen Chen"
    ],
    "abstract": "Chest radiography (CXR) diagnosis is critical for thoracic disease assessment, yet challenged by the need to identify subtle lesions and co-occurring abnormalities across regions. While recent vision-language models can actively observe local regions, existing preference-based methods supervise each observation by its immediate effect on the current diagnosis, failing to capture how each observation and stopping decision contributes to the final diagnosis. To address this issue, we propose GroundSeek-CXR, an active CXR diagnosis framework that learns observation and stopping decisions by retrospectively evaluating them with the final diagnosis. Specifically, we first devise a Retrospective Diagnostic Evaluation (RDE) that scores observation and stop candidates from offline Monte Carlo tree search through independent continuations. Moreover, we design a Retrospective Gap-weighted Preference Optimization (RGPO) that learns from retrospective-score preferences weighted by their score gaps, prioritizing actions that improve diagnostic accuracy. Extensive experiments demonstrate that our GroundSeek-CXR framework outperforms state-of-the-art methods, and improves abnormal-image sample-F1 by 4.48% over immediate-score preference learning.",
    "published": "2026-11-03T04:14:56Z",
    "updated": "2026-11-03T04:14:56Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.04286"
  },
  {
    "id": "2611.04284",
    "title": "OmniScribble: Mixed-Initiative Authoring of Animated Sketches through Inspectable and Repairable AI Decisions",
    "authors": [
      "Hien Trinh",
      "Tan-Hiep To",
      "Trung-Nghia Le"
    ],
    "abstract": "AI-assisted creative tools reduce the effort of authoring content, but delegating creative decisions to AI can make it difficult for authors to understand, correct, or redirect work. We present OmniScribble, a system for animating multi-object sketches that treats object decomposition and motion planning as editable artifacts. Rather than generating animation end-to-end, OmniScribble presents AI proposals at verification checkpoints, where authors can accept, repair, or regenerate them. Both manual and AI-assisted authoring operate on the intermediate representation and rendering pipeline, allowing us to isolate AI delegation. In a within-subject study with eight participants, AI-assisted authoring yielded a median within-participant reduction in completion time of 71.4\\%, while perceived control and motion-intent alignment remained high. Interaction traces and interviews show that participants adapted to AI errors by repairing local issues, regenerating mismatches, and accepting proposals. These findings suggest that inspectable, repairable delegation enables generative automation while maintaining control over the outcome.",
    "published": "2026-11-03T04:13:11Z",
    "updated": "2026-11-03T04:13:11Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.04284"
  },
  {
    "id": "2611.04279",
    "title": "Bidirectional Centered Score Matching for Discrete Diffusion Distillation",
    "authors": [
      "Peng Tu",
      "Baoyou Chen",
      "Haoyuan Xia",
      "Zilong Dong",
      "Weihao Yuan",
      "Siyu Zhu"
    ],
    "abstract": "Discrete diffusion models with parallel decoding are often distilled using token-wise KL objectives. Although token-wise KL exactly matches the corresponding product-form block distributions, its probability-space optimization geometry and teacher-only candidate truncation may provide insufficient supervision under aggressive few-step distillation. Concrete Score Matching (CSM) provides an alternative within-position objective by aligning relative logit geometry, but its complete pairwise form incurs \\mathcal{O}(|\\mathcal{V}|^2) complexity. We propose Bidirectional Centered Score Matching (BCSM), an efficient within-position distillation objective that constructs an \\mathcal{O}(K) bidirectional active set, reduces pairwise comparisons to \\mathcal{O}(K^2), and factorizes them into an \\mathcal{O}(K) objective. We further introduce cross-timestep transition alignment. Experiments demonstrate strong quality--efficiency trade-offs, including up to 6\\times NFE reduction with a 16.9\\% relative HumanEval gain and a 15.1\\% relative MMMU gain at single-step inference.",
    "published": "2026-11-03T04:05:41Z",
    "updated": "2026-11-04T03:21:50Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04279"
  },
  {
    "id": "2611.04277",
    "title": "Harness-S: Learning from Sibling Harnesses for Generalizable Agent Training",
    "authors": [
      "Kangning Zhang",
      "Wenxiang Jiao",
      "Bowen Fang",
      "Shuai Shao",
      "Jiachen Zhu",
      "Rong Shan",
      "Shijian Wang",
      "Hao Wang",
      "Yuan Lu",
      "Weiwen Liu",
      "Weinan Zhang"
    ],
    "abstract": "Harness evolution from a common base exhibits Locality, Complementarity, and Nonstationarity: variants repair different failures, and their utility changes as the policy learns. Rather than seeking a universally superior harness, we introduce Harness-S to selectively rescue failures of a base execution system through sibling harnesses and transfer the resulting capabilities into a single policy that remains effective under the original harness. Directional Harness Evolution develops specialized sibling harnesses along distinct repair directions, forming a reusable Sibling Harness Pool that remains fixed during policy training. Complementary Harness Rescue Training invokes this pool only when all initial attempts under the base harness fail. The same policy generates fresh rollouts under selected auxiliary harnesses, and these trajectories replace the failed group for reinforcement learning. An Adaptive Harness Router selects the Top-k variants using Harness Behavior Profiles and voting across multiple LLMs. Policy-aware profile re-anchoring refreshes this evidence as the policy learns. Across AppWorld, SWE-Gym, and DBBench, the trained policy substantially outperforms policy-only training when returned to the original base harness. Behavioral analyses and held-out cases support the transfer of harness-elicited behaviors into the policy itself. Reusing the router for Rank-1 inference provides additional gains at the same executor rollout count.",
    "published": "2026-11-03T04:03:44Z",
    "updated": "2026-11-03T04:03:44Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04277"
  },
  {
    "id": "2611.04268",
    "title": "Weight-Space Programming for Improving Image-Restoration Diffusion Models: Technical Conjectures and a Recursive Improvement Loop",
    "authors": [
      "Zhuoran Zheng",
      "Doubao"
    ],
    "abstract": "Can an LLM directly edit the weights of a diffusion-based image-restoration model to \\emph{improve} restoration quality---without gradients, paired data, or fine-tuning? Recent experiments show frontier LLMs can fix structural bugs by modifying as little as \\(0.016\\%\\) of parameters, but cannot instill new capabilities. We ask whether weight-space programming (WSP) can move from \\emph{debugging} to \\emph{improvement} in the precise-regression setting of image restoration (deblurring, super-resolution, denoising, inpainting). Restoration diffusion UNets present a middle ground: low-level signal-processing layers are concentrated enough for targeted weight-direction edits, while high-level semantic layers remain distributed and resistant to sparse modification. We propose three technical conjectures: (C1) an LLM can localize the layer behind a quality gap (over-smoothing, color shift, hallucinated texture) within a 200 forward-pass budget; (C2) editing a small set of identified weight directions (e.g., scaling high-frequency filter norms, correcting output-bias channels) can measurably improve PSNR and perceptual quality; (C3) a recursive loop---diagnose \\(\\rightarrow\\) edit \\(\\rightarrow\\) evaluate \\(\\rightarrow\\) re-diagnose---can compound gains across rounds, forming a minimal recursive self-improvement (RSI) loop for vision. We analyze the required AI capability (arguing targeted edits need not superintelligence, while general capability generation does) and detail the challenges of precise pixel-level regression. We provide a PyTorch-style deployment pipeline and outline a benchmark. This manuscript is conjectural, intended to open a new subtopic for image restoration.",
    "published": "2026-11-03T03:56:44Z",
    "updated": "2026-11-03T03:56:44Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.04268"
  },
  {
    "id": "2611.04264",
    "title": "Reliability Stress Testing of RAG Retrieval under Query-Relevant Corpus Poisoning",
    "authors": [
      "Janet Sung",
      "Kainan Zhou",
      "Gangzhen Qian",
      "Hang Xiao",
      "Lu Yi"
    ],
    "abstract": "External text can affect a retrieval-augmented generation (RAG) system only after the retriever admits it to the model context. We stress this admission step while varying document content, attacker query information, per-target poison budget, and contamination scope. Across 623 Benchmarking Information Retrieval (BEIR) queries from SciFact and NFCorpus, five query-targeted documents per query reduce classical-retriever nDCG@10 by 40.2-61.5% in isolated-target stress. Full-query anchoring explains most Best Matching 25 (BM25) degradation, whereas appended text also shifts latent semantic analysis (LSA) and Hybrid rankings. A pretrained BGE-small validation reaches 100% target exposure for query-only P=5 on both datasets; adding the injection payload changes SciFact nDCG only from 0.269 to 0.271 and lowers NFCorpus exposure slightly to 98.8%, indicating that query anchoring remains the dominant retrieval-side factor for this dense model. Query length materially changes the interpretation of partial-information attacks: on 162 long SciFact queries, two random terms cover 19.9% of eligible terms and still yield 39.5% Hybrid target exposure. Multi-target contamination adds cross-target interference. Overlap-based admission can remove full-query poisons but may sharply reduce clean retrieval utility, and maximal marginal relevance (MMR) leaves exposure unchanged under the tested configuration. The study measures retrieval-layer failures, not downstream instruction following.",
    "published": "2026-11-03T03:52:58Z",
    "updated": "2026-11-03T03:52:58Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04264"
  },
  {
    "id": "2611.04262",
    "title": "Sketch-Omni: Instance-Level Sketch-Based Visual Prompting for Perception MLLMs",
    "authors": [
      "Dongyu Wang",
      "Dar-Yen Chen",
      "Zhiming Hong",
      "Arkaprabha Basu",
      "Yi-Zhe Song"
    ],
    "abstract": "Promptable perception, from GroundingDINO to Rex-Omni, puts one model behind one prompt interface and returns coordinates for any localisation task. Every model in that line was built for photographs; none has been given a sketch. We present Sketch-Omni, to our knowledge the first perception MLLM built to work on sketches and from them. On a sketch, the sketch is the image, and text prompts detect, point, resolve object and spatial referring expressions, and ground affordances in it. From a sketch, the sketch is the prompt, and a drawing of one object localises that object in a photograph, even among several of the same category, a query that neither a category name nor a photo exemplar can pose. Two obstacles stand in the way. A photo-trained model's attention is tuned to colour and texture, which a sketch does not have, and no dataset pairs a drawing with the one instance it depicts among others of its kind. We build the training data instead of collecting it. An edge detector turns every labelled photograph into a sketch-like drawing that keeps the photograph's labels, and two constructions produce sketch-to-photo instance pairs from existing data. On top of this, photo-guided relation alignment passes each photograph and its edge sketch through the same model and trains the sketch pass to reproduce how the photograph pass relates phrases to patches and patches to each other. Not one training label is drawn by hand. Sketch-Omni reaches 91.4 F1 on sketch-prompted localisation against 81.8 for the strongest general-purpose MLLM, with a lead that doubles when the photograph holds several instances of the queried category, and it is best in 39 of 40 evaluation cells across six tasks. Code, model, and a hand-annotated benchmark of 2754 sketch-to-photo links will be released.",
    "published": "2026-11-03T03:52:45Z",
    "updated": "2026-11-03T03:52:45Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.04262"
  },
  {
    "id": "2611.02815",
    "title": "Predictive Safety Guardrails Do Not Always Make LLM Agents Safer",
    "authors": [
      "Weixiang Zhao",
      "Zhihao Liu",
      "Guancheng Li",
      "Yanyan Zhao",
      "Bing Qin",
      "Ting Liu"
    ],
    "abstract": "Large language model agents increasingly take consequential actions in digital and physical environments, where safety risks may emerge only after multiple interaction steps. This has motivated world-model-driven predictive safety guardrails, which anticipate future consequences before execution. However, existing evaluations largely focus on end-to-end safety outcomes, leaving unclear whether safety gains arise from reliable prediction and faithful use of predicted risks. In this work, we systematically diagnose the prediction-to-action pipeline along three dimensions: how world-model predictions are integrated into decision making, whether the predictions themselves are reliable, and whether their content is faithfully used. Across seven policy models and two safety environments, we find that stronger prediction involvement does not yield monotonic safety gains and can reduce task completion while substantially increasing inference cost. We further find that world-model predictions remain insufficiently reliable, especially over longer horizons, where safety prediction degrades substantially relative to near-term forecasting. Finally, we find that safety gains can persist even under corrupted predictions, while locally verified predictions still leave subsequent safety violations, showing that predictive content is not faithfully incorporated into the decision process. Together, these findings expose a fundamental prediction-to-action gap in current predictive guardrails: producing more or seemingly accurate foresight is insufficient unless that foresight is both reliable and faithfully translated into safer decisions.",
    "published": "2026-11-02T09:19:22Z",
    "updated": "2026-11-02T09:19:22Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02815"
  },
  {
    "id": "2611.02809",
    "title": "Offline Approximate Value Iteration: A Reinforcement Learning Approach for Satellite Constellation Deployment",
    "authors": [
      "Tristan Leuridan",
      "Yiping Fang",
      "Adam Abdin"
    ],
    "abstract": "This paper introduces a reinforcement learning-based approximate dynamic programming approach to optimize the deployment of Walker-type satellite constellations under uncertainties, including launch failures and satellite malfunctions. We formulate the problem as a Markov Decision Process that incorporates low-injection orbit launches, continuous low-thrust orbit raising, and variable satellite loads. We adopt the offline approximate value iteration solution method, using linear function approximation with basis functions and action pruning strategies to substantially reduce the computational and memory requirements for finding optimal decision policies. Preliminary results demonstrate convergence to policies with low expected costs and deployment times, both of which are lower than those of a rolling-horizon baseline, showcasing a novel application of approximate dynamic programming in space logistics.",
    "published": "2026-11-02T09:17:21Z",
    "updated": "2026-11-02T09:17:21Z",
    "categories": [
      "cs.AI",
      "math.OC"
    ],
    "url": "https://arxiv.org/abs/2611.02809"
  },
  {
    "id": "2611.02807",
    "title": "Creating Hybrid Interactive Narrative Systems with LLM: From Formal Description to Evaluation",
    "authors": [
      "Jules Clerc",
      "Domitile Lourdeaux",
      "Mohamed Sallak",
      "Marc Ravaine"
    ],
    "abstract": "Interactive narratives let users shape a story while an Experience Manager (EM) keeps it coherent, balancing player freedom against authorial control. Large Language Models now enable a new generation of hybrid EMs, which combine run-time generation from free-text input with symbolic narrative control. However, their heterogeneity makes them hard to compare: A manager's behaviour is generally tied to the unique and specific scenario in which it operates, and much of its decision-making takes place outside of any explicit and verifiable structure. We address this with an LLM-based narrative platform whose managers are interchangeable modules operating over a shared symbolic world model of facts, operations, and goals. Because every applied operation carries explicit preconditions and effects, each session can be analysed as a plan through a common state-transition representation and evaluated, independently of how the manager works internally, with shared indicators of four properties: player agency, EM controllability, author intent, and robustness. We implement three contrasting managers, based respectively on open generation, Monte Carlo repair, and autonomous characters, and compare them through functional analysis on an interactive Little Red Riding Hood scenario. The results show that no manager dominates on every property, giving authors and EM designers a concrete basis to select a manager according to their priorities.",
    "published": "2026-11-02T09:15:01Z",
    "updated": "2026-11-02T09:15:01Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.02807"
  },
  {
    "id": "2611.02803",
    "title": "OmniOPD: Stable On-Policy Distillation for Joint Audio-Video Generation",
    "authors": [
      "Zihao Fan",
      "Xin Lu",
      "Jie Huang",
      "Hexin Zhang",
      "Xueyang Fu",
      "Zheng-Jun Zha"
    ],
    "abstract": "Reinforcement learning (RL) elevates joint audio-video generation, but optimizing heterogeneous, modality-specific audio and video rewards often introduces cross-modal interference. On-policy distillation (OPD) alleviates this issue by transferring the capabilities of specialized audio and video RL teachers into a single student model. However, a significant imbalance in cross-modal token counts leaves audio with sparse supervision, causing unstable distillation. We observe that naively increasing the audio loss weight fails to solve this problem since audio learning relies heavily on visual context, indicating richer visual cues are crucial to offset sparse audio signals. To address this, we propose OmniOPD, a modality-wise on-policy distillation framework designed for balanced and stable audio-video generation. First, we construct privileged visual information using asymmetric noise scheduling, allowing the audio teacher to generate more informative targets from cleaner video context. Second, we introduce grouped multi-noise sampling to expand audio supervision coverage and stabilize training. Third, we introduce timestep-wise importance weighting based on teacher-student transition divergence, preserving reliable supervision while down-weighting unreliable learning signals, to stabilize fluctuations in audio learning. Evaluated on JavisBench and VBench demonstrate OmniOPD preserves audio quality while significantly enhancing video generation, achieving effective joint distillation.",
    "published": "2026-11-02T09:11:39Z",
    "updated": "2026-11-02T09:11:39Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2611.02803"
  },
  {
    "id": "2611.02801",
    "title": "Analysing the Narrative Paradox through Formal Models and Properties in Interactive Narrative",
    "authors": [
      "Jules Clerc",
      "Mohamed Sallak",
      "Domitile Lourdeaux",
      "Marc Ravaine"
    ],
    "abstract": "Interactive narratives aim to let players influence the unfolding of a story while preserving a coherent and satisfying narrative progression. This creates a central tension, commonly described as the narrative paradox, between player autonomy and narrative control. Experience Managers (EMs) manage the story by determining how the narrative progresses in response to player behaviour. Although this paradox is widely discussed, it is rarely modelled in a way that supports systematic analysis, simulation, and comparison across management strategies. This paper proposes a formal framework for modelling and analysing the narrative paradox as a trade-off between interdependent properties shaped by EM decisions. We represent interactive narrative behaviour through an extended state-transition system in which world states are connected by player actions and system events. From this model, we formalize key properties involved in the paradox such as the player agency, EM controllability, author intent, and robustness, and define quantitative indicators derived from simulated plans. These indicators make it possible to compare EM strategies according to their ability to balance freedom, control, and narrative satisfaction. A case study compares different EM policies, showing how simulations can reveal correlations and conflicts between properties and identify compromise zones in the design space. This work contributes a reusable modelling and analysis framework for studying the narrative paradox and evaluating heterogeneous interactive narratives on shared formal grounds, with a focus on supporting the comparison and testing of EM strategies.",
    "published": "2026-11-02T09:10:17Z",
    "updated": "2026-11-02T09:10:17Z",
    "categories": [
      "cs.AI",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.02801"
  },
  {
    "id": "2611.02797",
    "title": "SelfImprove-Bench: Evaluating Generalization in Self-Improving Agents",
    "authors": [
      "Bangrui Xu",
      "Jie Yang",
      "Sidi Chen",
      "Xuanhe Zhou",
      "Jiantao Qiu",
      "Qianyu Yang",
      "Zijie Wang",
      "Fan Wu",
      "Zhoufutu Wen"
    ],
    "abstract": "Recursively self-improving (RSI) systems are increasingly viewed as a promising means of accelerating progress toward artificial general intelligence. They aim to autonomously improve their capabilities by refining their working pipelines and recursively improving the strategies that guide subsequent refinements, with gains generalizing to unseen scenarios.However, existing evaluations lack reliable metrics to distinguish capability gains from scenario fitting, sustainable and extensible protocols for unseen tasks and difficulties, and fine-grained attribution of improvement to evolution traces. To this end, we propose SelfImprove-Bench,an RSI evaluation framework that organizes tasks into three primary capabilities (i.e., Exploring, Planning, Reasoning) as scenarios for guiding model evolution. We instantiated the tasks on games for controllability and reproducibility, and pairs them with scalable generation and orchestration driven by task templates and difficulty coefficients. Beyond task-level scores, SelfImprove-Bench organizes evaluation into generalization ladder levels G0 to G4 that measure how far gains transfer from training conditions. Experiments reveal that the evolutionary gains of existing RSI methods are inconsistent across generalization levels.",
    "published": "2026-11-02T09:08:12Z",
    "updated": "2026-11-02T09:08:12Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.LG",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2611.02797"
  },
  {
    "id": "2611.02793",
    "title": "DrawOffer: Evidence-Grounded Longitudinal User-State Modeling for Career Support",
    "authors": [
      "Lele Xu",
      "Yuning Bian",
      "Yifan Yuan"
    ],
    "abstract": "Career-support assistants must distinguish user claims from evidence of current ability and withhold judgments when evidence is insufficient. DrawOffer separates language-model observation extraction from deterministic inference over source-linked records to maintain uncertain ability estimates, experience assessments, and revisable issues. We evaluate 102 fictional personas with 580 scored checkpoints, a historical full-context and Mem0 comparison, and three auxiliary knowledge-tracing datasets. On 37 test personas, DrawOffer passes 169/210 checkpoints; checkpoint-defined issue precision and recall are 0.875 and 0.636. Across three development simulations, 87.0% of checkpoint verdicts agree, including persistent failures. A cache-only development ablation replacing answer-evidence requirements with confidence-only settlement reduces majority-vote passes from 306 to 293 of 370 and issue precision from 0.927 to 0.725. Equalizing positive source weights improves predictive metrics without changing total passes; removing decay gives mixed results. These findings support an exploratory systems contribution centered on evidence sufficiency. Developer-authored scenarios, unmatched baseline models, historical test exposure, and incomplete public artifacts limit generalization and independent reproduction.",
    "published": "2026-11-02T09:05:03Z",
    "updated": "2026-11-02T09:05:03Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02793"
  },
  {
    "id": "2611.02790",
    "title": "MultiMental-IAS: A Multimodal Driver Mental State Analysis Dataset for Context-Aware Non-IID Evaluation",
    "authors": [
      "Baran Can Gül",
      "Nagendra Pal Singh",
      "Anjana Arvind Naik"
    ],
    "abstract": "Robust driver-state modelling requires synchronized physiological, behavioural, and contextual signals, yet existing open resources typically target a single cognitive state, omit continuous vehicle context, or do not define evaluation protocols that expose inter-subject heterogeneity. We present Multimental-IAS, a multimodal driver mental-state dataset collected in a cockpit-in-the-loop simulation built on CARLA. It contains vehicle telemetry with scenario-context channels, four-channel EEG and three-channel PPG from a Muse 2 headband, and cabin-facing video from 23 participants, recorded in 148 trials (11.6 hours) under six induced states: Normal, Distracted, Alerted, Stressed, Relaxed, and Drowsy. We document the acquisition pipeline in detail and provide a benchmark with one protocol for all models: chronological within-subject splits, participant-disjoint cross-subject folds, validation-based model selection, and ablations over modalities, scenario-context channels, and signal normalization. Multimodal fusion reaches a macro-F1 of 0.94 for drivers seen during training. For unseen drivers, fusing driving dynamics with per-window normalized EEG/PPG raises macro-F1 from 0.408 (telemetry alone) to 0.485, consistently across all five folds, while the gap between the two protocols quantifies the inter-driver heterogeneity that personalized models must address. Multimental-IAS thus provides a concrete testbed for non-IID generalization, personalization, and federated learning in driver monitoring.",
    "published": "2026-11-02T09:03:14Z",
    "updated": "2026-11-02T09:03:14Z",
    "categories": [
      "cs.HC",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02790"
  },
  {
    "id": "2611.02788",
    "title": "Rethinking Neural Decompilation: Candidate Selection as the Hidden Bottleneck",
    "authors": [
      "Felix Mächtle",
      "Gautham Sriram",
      "Manjil Neupane",
      "Nils Loose",
      "Thomas Eisenbarth"
    ],
    "abstract": "Reverse engineering obfuscated binaries is a core task in malware analysis and software security auditing. While neural decompilers based on Large Language Models (LLMs) have improved the readability and functional fidelity of recovered code over heuristic tools such as Ghidra and IDA Pro, a substantial gap remains between best-sample performance and practical single-output accuracy, particularly under code obfuscation. We study this gap through the lens of candidate generation and candidate selection. Using the LLM4Decompile architecture, we show that ground-truth tokens lie within the model's top-five next-token predictions in 95.6% of positions on average and that multi-sample decoding reaches a pass@100 of 93% on HumanEval-Decompile, indicating that correct reconstructions are typically already present in the model's sampling space. We then evaluate a generate-then-select pipeline that ranks 100 candidates per input with text-, syntax-, embedding-, consensus-, and likelihood-based selectors. Negative perplexity emerges as the strongest static selector on HumanEval-Decompile (73.3% pass@1), while execution-guided selection nearly closes the oracle gap on ExeBench (86.3% pass@1). Combined with one epoch of fine-tuning on our newly released ExeBench-Obfuscated dataset containing 362,647 obfuscated OLLVM samples, the same pipeline increases the pass@1 rate for obfuscated binaries to 88.8%, directly contradicting prior claims that released LLM4Decompile checkpoints are unsuitable for obfuscated inputs.",
    "published": "2026-11-02T09:02:54Z",
    "updated": "2026-11-02T09:02:54Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02788"
  },
  {
    "id": "2611.02786",
    "title": "Local-Global Joint Modeling for Point Cloud Super-Resolution Guided by Multi-Scale Spatial Priors",
    "authors": [
      "Wang Yang",
      "Wenyi Ge"
    ],
    "abstract": "Range-image-based point cloud super-resolution provides an effective way to reconstruct sparse outdoor point clouds by projecting low-resolution LiDAR scans into a regular 2D representation. However, current methods still face three challenges. First, range images exhibit pronounced vertical nonuniformity, with sparse observations in distant regions and denser observations in nearby regions. Some cross-scale fusion mechanisms do not account for the varying reliability of features at different vertical positions, allowing invalid values and noise from distant sparse regions to propagate into the decoder. Second, a single convolutional or sequence-modeling architecture often struggles to preserve both local high-frequency geometric details and global long-range dependencies, resulting in over-smoothed reconstructions. Third, smooth transition depths near foreground-background boundaries can produce spike artifacts when the 2D range image is back-projected into 3D. To address these issues, we propose a point cloud super-resolution method based on multi-scale spatial priors and joint local-global modeling. The design comprises a spatially gated fusion module, a multi-granularity local-global cooperative perception module, and 2D median-residual denoising. Experiments on KITTI-360 and nuScenes demonstrate effective reconstruction, with IoU scores of 0.4703 and 0.3593, respectively, supporting the feasibility of the proposed method for range-image super-resolution.",
    "published": "2026-11-02T09:02:26Z",
    "updated": "2026-11-02T09:02:26Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.02786"
  },
  {
    "id": "2611.02782",
    "title": "History Forcing: Distilling History-Dependent Continuations for Long-Horizon Video World Models",
    "authors": [
      "Hangyi Kuang",
      "Chengzhi Wang",
      "Yefei He",
      "Weijie Wang",
      "Yuke Zhao",
      "Zhuokun Chen",
      "Zisu Huang",
      "Yifan Yang",
      "Xiaoxuan He",
      "Feng Chen",
      "Bohan Zhuang"
    ],
    "abstract": "Few-step autoregressive video diffusion enables efficient generation, yet maintaining consistency over long rollouts remains challenging, especially when subjects or scenes reappear after going out of sight. Despite progress in fidelity and rollout robustness, existing distillation methods do not fully exploit richer historical information to constrain the student's current prediction. To address this gap, we introduce \\textbf{History Forcing}, a unified on-policy distillation framework that strengthens historical supervision for few-step autoregressive video generators. The framework uses the residual between teacher predictions with and without informative historical context to decouple this supervision. Such a historical context can be obtained using earlier generated chunks with less accumulated drift or a fixed-view teacher rollout that keeps the scene visible while the student looks away. The residual is then weighted and added to the score or velocity prediction used for distillation, forming a corrected target. By aligning the student with this corrected target through distillation, History Forcing incorporates long-range historical constraints into autoregressive generation. Our method achieves state-of-the-art performance among 1.3B models, with a VBench quality score of 85.07 for 15s video generation and a VBench-Long aggregate score of 79.82 for 60s generation. For out-of-sight world modeling, evaluations further demonstrate more plausible scene evolution and more consistent states when the camera returns, with Evolution Quality improving from 2.35 to 2.70 on PlayWorld and Object Consistency from 58.43 to 62.18 on MemoBench.",
    "published": "2026-11-02T09:00:31Z",
    "updated": "2026-11-02T09:00:31Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.02782"
  },
  {
    "id": "2611.02780",
    "title": "Lookahead Prediction-Guided Adaptive Visual Refocusing for Interleaved Multimodal Reasoning",
    "authors": [
      "Mengzhao Wang",
      "Yanli Ji",
      "Peng Ye"
    ],
    "abstract": "Interleaved multimodal chain-of-thought reasoning improves the visual reasoning capabilities of multimodal large language models by dynamically incorporating visual evidence during reasoning. However, existing methods primarily select evidence from historical context. When the reasoning focus shifts, history-guided evidence may remain focused on prior regions and fail to cover the visual information required by the next step. We refer to this lag between visual evidence and subsequent reasoning demands as Temporal Evidence Myopia. To address this issue, we propose Lookahead Prediction-guided Adaptive Visual Refocusing (LPAVR), a training-free test-time framework. LPAVR transforms Multi-Token Prediction (MTP) from a decoding acceleration mechanism into a lookahead signal for anticipating upcoming reasoning intent. During MTP decoding, the draft head generates multiple future tokens, while the target model verifies them in parallel and retains the longest prefix consistent with its decoding trajectory. This target-verified prefix contains near-future semantics, which LPAVR uses to construct lookahead-guided visual evidence and assess whether history-guided evidence covers the indicated regions. If the coverage is sufficient, the history-guided evidence is retained; otherwise, LPAVR switches to the lookahead-guided evidence. This better aligns the visual context with upcoming reasoning and improves consistency between draft predictions and target-model decoding. Experiments on multiple multimodal reasoning benchmarks show that LPAVR improves both reasoning accuracy and the acceptance rates of MTP speculative tokens, jointly enhancing visual reasoning and speculative decoding efficiency.",
    "published": "2026-11-02T08:58:28Z",
    "updated": "2026-11-06T16:52:15Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.02780"
  },
  {
    "id": "2611.03723",
    "title": "EMBERS: Empirically Motivated Robustness Testing of Deep Research Systems via Defect-Guided Fuzzing",
    "authors": [
      "Shuochuan Li",
      "Zan Wang",
      "Dong Wang",
      "Yuhang Jiang",
      "Huajin Cui",
      "Chen Zhang",
      "Gang Wang",
      "Junjie Chen"
    ],
    "abstract": "Deep Research (DR) systems extend large language models into autonomous agents that decompose complex information needs, iteratively search the web, and synthesize evidence to answer challenging questions. However, their multi-stage execution may introduce robustness risks, as variations in user questions or intermediate search inputs may propagate across research stages and lead to incorrect answers. Existing evaluations focus on task-solving capabilities or robustness against external evidence disturbances, leaving intrinsic weaknesses in DR execution insufficiently explored. Thus, we conduct an empirical study of 1,932 execution trajectories from three representative DR systems and identify nine recurring defect categories across subquestion formulation, online search, and final reasoning. Guided by these findings, we propose EMBERS, an empirically motivated, defect-guided fuzzing framework for robustness testing of DR systems. Starting from correctly answered seed questions, EMBERS generates stage-targeted test inputs using defect-guided mutation, web-search-assisted fidelity assurance, and diversity-aware seed maintenance. Experiments across 16 framework--model--dataset settings show that EMBERS achieves 3.21 times the failure-discovery throughput of the strongest baseline under identical testing budgets. Human and LLM-assisted evaluations demonstrate that most generated inputs preserve the original information need and necessary contextual constraints. Moreover, model fine-tuning experiments show consistent-answer performance improvement, highlighting their value for robustness testing and model improvement.",
    "published": "2026-11-01T06:27:23Z",
    "updated": "2026-11-01T06:27:23Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.03723"
  },
  {
    "id": "2611.01627",
    "title": "EgoMo3R: Joint Egocentric Motion and Scene Reconstruction",
    "authors": [
      "Chaitanya Patel",
      "Yusuke Kato",
      "Rin Takahira",
      "Kazuki Kozuka",
      "Juan Carlos Niebles",
      "Ehsan Adeli"
    ],
    "abstract": "Understanding holistic 3D human motion and the surrounding environment from egocentric video is fundamental for applications in AR/VR and robotics. Although these tasks are inherently coupled, existing methods treat them separately. In particular, egocentric motion reconstruction methods typically assume access to metric, gravity-aligned camera trajectories from specialized inertial sensors. Recovering such trajectories from monocular egocentric video remains a significant challenge due to rapid head movements and motion blur. We present EgoMo3R, a joint optimization framework that simultaneously reconstructs 3D human motion and scene geometry from casual egocentric video. It leverages the robustness of low-level visuo-geometric primitives, including monocular depth, optical flow, and point tracks, integrated with a diffusion-based human motion prior via first-order optimization. We propose an alternating optimization scheme that establishes a synergistic feedback loop: scene reconstruction provides physical grounding and trajectory conditioning for the motion prior, while the motion prior regularizes the camera trajectory and anchors the scene in a metric, gravity-aligned world frame. We evaluate EgoMo3R on the highly dynamic sequences of the EgoExo4D and Nymeria datasets and show that it outperforms specialized baselines in both 3D scene reconstruction and egocentric motion estimation.",
    "published": "2026-11-01T06:20:11Z",
    "updated": "2026-11-01T06:20:11Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.01627"
  },
  {
    "id": "2611.01626",
    "title": "Special and General Computational Aesthetics",
    "authors": [
      "Ganqing Luo",
      "Chuan Li",
      "Liaoruxing Zhang",
      "Xin Jin"
    ],
    "abstract": "Computational aesthetics is a field at the intersection of computer science, artificial intelligence, aesthetics, and other disciplines. As AI has developed, the field has formed relations of inclusion, intersection, or support with computational art, AI art, AI aesthetics, AI-generated content (AIGC), computational creativity, affective computing, and neuroaesthetics. Without distinguishing scope, objectives, and methods, it may be narrowed to image aesthetic quality assessment or expanded into an umbrella term for AI's involvement in art. We analyze its internal structure and its relations with neighboring concepts, and propose a two-level scope: special computational aesthetics (SCA) and general computational aesthetics (GCA). SCA centers on aesthetic measurement and aesthetic process modeling. The former primarily corresponds to \"Aesthetic Perception\": computationally identifying and representing aesthetic attributes and predicting human aesthetic evaluations; the latter primarily to \"Aesthetic Understanding\": computationally describing, testing, and explaining how human aesthetic perception and judgment are formed. GCA extends this core to include \"Aesthetic Generation,\" namely artistic generation guided by computational aesthetic models. Some computational aesthetic tasks can also use non-AI methods. Research in this scope using AI algorithms and models we define as AI aesthetics, which may involve the special core and the general extension. \"Aesthetic Generation\" intersects with AIGC, AI art, and computational creativity, but belongs to the general extension defined here only when computational aesthetic models substantively constrain, guide, or optimize artwork generation. We also draw on Feng Peng's discussion of the computability of beauty, aesthetic experience, and art as a theoretical reference for clarifying boundaries between computational aesthetics and related concepts.",
    "published": "2026-11-01T06:19:21Z",
    "updated": "2026-11-01T06:19:21Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.01626"
  },
  {
    "id": "2611.01620",
    "title": "Chain-of-Thought Oversight Requires Separate Evidence for Faithfulness and Monitorability",
    "authors": [
      "Sichao Li",
      "Sai Ma",
      "Xiyang Hu",
      "Chudi Zhong",
      "Tongliang Liu"
    ],
    "abstract": "A common assumption in chain-of-thought (CoT) oversight is that a visible reasoning trace makes model behavior easier to monitor. We argue that this assumption can conflate distinct properties along a chain linking a model's internal computation, reasoning artifacts, outputs, and monitor judgments. We identify four properties along this chain: reasoning visibility (whether a trace is accessible), mechanistic faithfulness (whether a trace reflects internal computation), mechanistic localizability (whether a compact causal mechanism can be isolated), and behavioral monitorability (whether a monitor can detect the target behavior). Two complementary case studies across three open-weight reasoning models show why these distinctions matter. In the security vulnerability reasoning study, probes and activation ablations provide evidence of internal representation and causal influence, but a monitor with access to the reference answer does not outperform the majority-class baseline in a held-out test. In authority-hint factual reasoning study, a monitor correctly distinguishes changed from unchanged answers, but seven mechanistic analyses do not isolate a compact causal mechanism. These results show that evidence for one claim does not establish the others. We therefore propose an evidential-chain reporting standard. Each claim carries a licensing statement that specifies its target property, access tier, and artifact, and labels each required link as supported, unsupported, or assumed. These assessments determine whether the conclusion is licensed, conditionally licensed, or not licensed.",
    "published": "2026-11-01T06:16:34Z",
    "updated": "2026-11-01T06:16:34Z",
    "categories": [
      "cs.AI",
      "cs.CR"
    ],
    "url": "https://arxiv.org/abs/2611.01620"
  },
  {
    "id": "2611.01617",
    "title": "Seeing What Matters, Verifying What Pays: Load-Adaptive Speculative Decoding for Vision-Language Models",
    "authors": [
      "Hong Nie",
      "Zhangchi Gao",
      "Yuqian Liang",
      "Jun Yu",
      "Bo Wang",
      "Jianqing Sun",
      "Shengping Liu"
    ],
    "abstract": "Speculative decoding accelerates vision-language model (VLM) inference without altering the output distribution, yet two factors limit its gains. Existing drafters either lack the image evidence required for visually grounded tokens or pay to condition on every visual token, although a short draft block typically depends on only a few image regions. Moreover, the value of verifying additional candidates varies with GPU load, so no fixed verification structure is efficient across serving conditions. We present Uni-LaSpec, a block-parallel speculative decoding framework that addresses both factors. To improve draft quality, Uni-LaSpec reuses the verifier's own attention: the query retained from the preceding verification ranks the cached, int8-quantized visual keys, and a cross-layer vote selects a few visual tokens that the drafter fuses through gated cross-attention. Acceptance-aware training further weights each draft position by its contribution to the accepted prefix. To allocate verification, a marginal-cost criterion selects the structure per request and per round: draft trees exploit idle verifier capacity under light load, whereas a dynamic head truncates linear drafts under heavy load. Across six VLMs from three model families and 17 text and multimodal benchmarks, selecting eight visual tokens retains at least 98.6% of the acceptance obtained from the full image at sub-millisecond selection cost. With greedy decoding at concurrency one, Uni-LaSpec achieves up to 5.11x text and 3.24x multimodal throughput over autoregressive decoding. Across six load levels and three GPU types, it outperforms autoregressive decoding in every setting and matches or exceeds the best fixed verification strategy in 123 of 144 settings; under bursty arrivals, it reduces mean end-to-end latency by 47.6% relative to linear verification.",
    "published": "2026-11-01T06:09:55Z",
    "updated": "2026-11-01T06:09:55Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01617"
  },
  {
    "id": "2611.01615",
    "title": "LLM-Enhanced Multimodal House Price Prediction using Structured, Textual, and Visual Features",
    "authors": [
      "Khandokar Md. Rahat Hossain",
      "Souvik Das",
      "Tahsina Hashem",
      "Mohammed Eunus Ali",
      "Tanzima Hashem"
    ],
    "abstract": "Accurate house price prediction is essential for real estate buyers, sellers, agents, and financial institutions. Traditional methods rely primarily on structured data, e.g., number of bedrooms, bathrooms, parkings, but they overlook rich contextual information embedded in textual descriptions and property photos. Previous deep learning approaches for house price prediction have fused multimodal data but they fall short to extract structured spatio-temporal and contextual features from texts and semantic visual information from images. In this paper, we introduce a novel multimodal framework that addresses these limitations by systematically integrating structured attributes, textual descriptions, and visual images of properties to achieve higher prediction accuracy while maintaining interpretability. We use a large language model to derive domain-specific spatio-temporal and contextual features from text, and an unsupervised vision-language approach to automatically group photos into meaningful classes like indoor, outdoor, mixed, or floorplan, that are commonly present in real-world house listings. These categories are created without manual labeling by aligning image clusters with carefully designed pseudo text prompts. We fuse all features into a unified representation and use an optimized regressor to predict prices. Experiments on a large real-world property dataset demonstrate that our method outperforms traditional methods and existing multimodal baselines. Ablation studies confirm that the novel textual feature extraction and categorized visual embeddings substantially contribute to more accurate and reliable price predictions.",
    "published": "2026-11-01T06:07:04Z",
    "updated": "2026-11-01T06:07:04Z",
    "categories": [
      "cs.LG",
      "cs.CL",
      "cs.CV",
      "cs.IR"
    ],
    "url": "https://arxiv.org/abs/2611.01615"
  },
  {
    "id": "2611.01612",
    "title": "Halal-NeSyNet: Clause-Scoped Neuro-Symbolic Cross-Attention for Automated Food Ingredient Auditing and Risk-Aware Halal Logistics Triage",
    "authors": [
      "Mochamad Rizal Fauzan",
      "Naila Nursyifa",
      "Irgi Surya"
    ],
    "abstract": "Verifying that a packaged food is Halal requires reading ingredient declarations and E-number additives before goods enter certified warehouses. Dual-origin additives such as E471, E422, E441 and E920 are Mushbooh (doubtful) unless a botanical, microbial or certified-Halal qualifier appears in the same ingredient clause, so a plant-based qualifier on one clause must not clear an unqualified additive in another. We call a failure to respect this scope cross-clause modifier confounding and build a benchmark of 3,199 items (277 Open Food Facts records and 2,922 template-generated clause-swap items, labelled by an explicit 50-code rule base rather than by a certification authority) with a 540-item counterfactual suite. We propose Halal-NeSyNet, which couples a DistilBERT encoder with a 16-dimensional rule-derived symbolic vector through cross-attention and gated fusion, trained with an asymmetric false-Halal risk loss. Over five seeds, text-only TF-IDF baselines reach 86.25-86.71 % accuracy with 13.42-21.73 % false-Halal leakage and 6.33-26.00 % counterfactual triad consistency, whereas Halal-NeSyNet reaches 97.04+/-0.34 % and 99.67+/-0.50 %. Gradient boosting given the same symbolic vector reaches 96.25+/-1.24 % (+0.59 points from Halal-NeSyNet, 95 % CI [-1.11, +2.28]), so most of the gain comes from clause-scoped symbolic features and not from the network, and the risk loss did not help. Holding out whole template families, text-only models fall to 61.91-78.35 %, Halal-NeSyNet to 90.87+/-11.76 % and logistic regression with the symbolic vector to 91.11+/-2.88 %, with far more spread for Halal-NeSyNet. A three-lane receiving simulation auto-clears 49.33 % of cargo at 0.76 % green-lane contamination. Because labels and features come from one rule engine and 91.3 % of the items are templated, the results measure fidelity to a rule policy, not religious certification.",
    "published": "2026-11-01T05:56:41Z",
    "updated": "2026-11-01T05:56:41Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.01612"
  },
  {
    "id": "2611.01607",
    "title": "NatureFusion: Rethinking Infrared and Visible Image Fusion as Natural Complementary Enhancement",
    "authors": [
      "Jianfeng Ding",
      "Linfeng Tang",
      "Hao Zhang",
      "Han Xu",
      "Xunpeng Yi",
      "Yibing Zhang",
      "Meiqi Gong",
      "Zhongyuan Wang",
      "Jiayi Ma"
    ],
    "abstract": "In the absence of ground truth, most existing infrared and visible image fusion methods pursue fidelity to the source images and directly superimpose two physically distinct modalities. As a result, salient infrared targets appear as bright patches of thermal radiation pasted onto the scene. These patches obscure the original color and texture of the targets, so the fused images look unnatural to human observers and deviate from the data distribution learned by vision models pretrained on visible images. Therefore, we redefine infrared and visible image fusion as natural complementary enhancement rather than source fidelity, and propose NatureFusion, which exploits cross-modal complementary cues to infer a clear and natural visible-style image from low-quality visible and infrared image pairs. Specifically, to address the lack of ground truth, we employ a generative foundation model as the teacher to directly generate visually natural fused images for supervision. Furthermore, to fully distill the teacher's generative capability while reducing computational cost, we fine-tune a pretrained generative model with conditional flow matching through a light-weight fusion adapter. Last but not least, to further improve downstream performance without sacrificing natural appearance, we freeze the fusion adapter and introduce a detector-supervised task adapter that strengthens the complementary contribution of infrared. Extensive comparisons with seven multi-modal fusion and seven single-modality enhancement methods demonstrate that NatureFusion generates visually natural fused images with the best perceptual quality. Detection and segmentation models pretrained on visible images achieve substantially higher accuracy on our fused images than on those of any competing method.",
    "published": "2026-11-01T05:52:10Z",
    "updated": "2026-11-01T05:52:10Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01607"
  },
  {
    "id": "2611.01605",
    "title": "MedNet and U$^2$-ViT: A Nested Vision Transformer Diffusion Framework for Diverse Medical Images Generation",
    "authors": [
      "Lakshmikar R. Polamreddy",
      "Jialu Li",
      "Youshan Zhang"
    ],
    "abstract": "The scarcity of diverse, high-quality medical images remains a significant bottleneck in advancing AI-driven medical diagnostics and treatment planning. Traditional datasets often suffer from class imbalances, limited disease coverage, and insufficient variations in imaging conditions - challenges that hinder the development of robust, generalizable models. To address this, we introduce MedNet, a large-scale, multi-modal text-to-image dataset spanning 61 disease categories with 160 classes, covering both humans and animals. We built this with images from trusted public repositories, ensuring data diversity, quality, and ethical compliance. Additionally, we propose U$^2$-ViT, a novel diffusion-based text-to-image generation architecture arranging Vision Transformers (ViTs) in a nested U-Net structure to enhance the generation of diverse, and high-fidelity medical images. Through extensive experiments, we demonstrate that our model achieves the best Fr'echet Inception Distance (FID) score compared to state-of-the-art models. The source code is available at https://github.com/LakshmikarPolamreddy/MedNet-U2-ViT.",
    "published": "2026-11-01T05:42:29Z",
    "updated": "2026-11-01T05:42:29Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01605"
  },
  {
    "id": "2611.01603",
    "title": "DyRadio: Spatiotemporal Diffusion for Dynamic Radio Map Reconstruction",
    "authors": [
      "Zhijie Fan",
      "Zhifeng Zhao",
      "Rongpeng Li"
    ],
    "abstract": "Accurate radio map (RM) reconstruction is essential for environment-aware wireless networks. Sampling-based methods, which infer radio conditions from sparse measurements, are widely adopted because they do not require explicit knowledge of transmitter configurations. However, in dynamic environments, time-varying propagation conditions cause RMs to evolve, complicating reconstruction from temporally distributed sparse observations. Although cross-frame observations provide complementary spatial information, their direct aggregation can introduce temporal state mismatch. Furthermore, unknown measurement noise adds to the reconstruction difficulties. To address these challenges, we propose DyRadio, a framework that integrates spatiotemporal RM reconstruction with unknown noise estimation. Specifically, a propagation-prior-guided, noise-conditioned spatiotemporal diffusion model (DM) jointly reconstructs consecutive RMs by capturing cross-frame dependencies, while adapting to measurement noise levels. To estimate the noise level, an iterative predictive likelihood method alternates between DM-based blind-area prediction and noise-level updates. The estimated noise level then conditions reconstruction of the complete RM sequence. Experimental results demonstrate superior reconstruction accuracy and robustness against measurement noise, with peak signal-to-noise ratio (PSNR) improvements of 1.18-5.75 dB over the best-performing baseline across all evaluated settings.",
    "published": "2026-11-01T05:39:31Z",
    "updated": "2026-11-01T05:39:31Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.01603"
  },
  {
    "id": "2611.01601",
    "title": "Accurate automated photo-identification of Near Eastern and European fire salamanders",
    "authors": [
      "Maayan Yesharim",
      "Hava Goldstein",
      "Gabi Kolodny",
      "Assaf Ben-Levy",
      "Tamar Kis-Papo",
      "Dor Gavish",
      "Rotem Vidan",
      "Nirit Lavie-Alon",
      "Olga Rybak",
      "Yoav Ram"
    ],
    "abstract": "Photo-identification underpins non-invasive capture-recapture monitoring of amphibians, but manual identification becomes slow and error-prone as reference libraries grow. Focusing on the Near Eastern fire salamander (Salamandra infraimmaculata), we developed a pipeline based on zero-shot local-feature matching (SuperPoint and LightGlue) without species-specific training and evaluated it on $2{,}440$ field photographs from Haifa and Tel Dan in northern Israel. We isolated the yellow spot pattern, scored image similarity by the number of high-confidence keypoint matches, which reduced a confound whereby many-spotted individuals accumulate spurious matches, and assigned identities across the database by two-tier clustering. Pipeline-assisted expert review corrected misidentifications, reducing the number of identities by almost a quarter. On held-out individuals, the pipeline ranked the correct individual first for $95.2\\%$ of queries and recovered identities with an ARI of $0.958$. Without modification, it reached $95.1\\%$ and $91.7\\%$ top-1 accuracy on two datasets of the European fire salamander (Salamandra salamandra) and recognised $93.7\\%$ of recaptures in one of them, compared with $38$-$77\\%$ for five established programs and $93.9\\%$ for visual inspection. Zero-shot local-feature matching thus offers amphibian monitoring a re-identification tool that needs no training data, transfers between related species, scales to databases of over a thousand individuals, and can audit existing databases before capture-recapture analysis.",
    "published": "2026-11-01T05:33:43Z",
    "updated": "2026-11-01T05:33:43Z",
    "categories": [
      "cs.CV",
      "q-bio.QM"
    ],
    "url": "https://arxiv.org/abs/2611.01601"
  },
  {
    "id": "2611.01600",
    "title": "SCOUT: Planning under Occlusion via Object-Centric World Model Rollouts",
    "authors": [
      "Amir Hossain Raj",
      "Xuesu Xiao"
    ],
    "abstract": "Robots manipulating in cluttered spaces must often plan from partial views where foreground objects occlude the target, surrounding geometry, and usable free space. Reactive policies often miss these hidden constraints, while exhaustive search becomes computationally prohibitive in dense clutter. We present SCOUT, an occlusion-aware planning framework that bridges high-level deliberation with grounded physical rollouts. SCOUT leverages an object-centric scene representation to reconstruct hidden geometry and derive a relational planning state capturing blocker hierarchies and accessibility corridors. To navigate the vast action space in clutter, an LLM proposes structured action candidates which are then rigorously evaluated via Monte Carlo Tree Search (MCTS) using a learned action-conditioned world model. Evaluations on 'Reveal' and 'Placement' tasks show that SCOUT outperforms Vision-Language-Action (VLA) policies, embodied agents, and 3D world models, with significant gains in long-horizon tasks requiring reasoning over occluded geometry. We further validate the framework's robustness through real-world robotic manipulation in a cluttered shelf environment.",
    "published": "2026-11-01T05:32:18Z",
    "updated": "2026-11-01T05:32:18Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01600"
  },
  {
    "id": "2611.00974",
    "title": "Efficient Image Denoising on Smartphone GPUs: Mobile AI 2026 Challenge Report",
    "authors": [
      "Andrey Ignatov",
      "Georgy Perevozchikov",
      "Radu Timofte",
      "HaoDong Wu",
      "Desheng Cai",
      "Nikolay Falaleev",
      "Faraz Kayani",
      "Sarmad Kayani",
      "Asad Ahmed",
      "Dmitry Ignatov",
      "Kihwan Yoon",
      "Ganzorig Gankhuyag",
      "Yoonsuk Kang",
      "The Van Le",
      "Jin Young Lee",
      "Sunzhe Yang",
      "Qiuhai Yan",
      "Kang Chen",
      "Tingting Wang",
      "Faming Fang"
    ],
    "abstract": "Image denoising is a fundamental problem in mobile photography. Despite a large number of solutions proposed for this task, the majority of them are trained on synthetically produced noisy images, and are additionally too computationally heavy for processing full-resolution images on mobile devices. This creates a need for efficient deep learning-based models that are not only performant but can also be deployed on constrained mobile hardware. In this Mobile AI challenge, we address this problem and propose the participants to design fast solutions that can denoise Full HD resolution photos while running on popular smartphone GPUs from Qualcomm and Arm. For this, the participants were provided with a large-scale dataset consisting of noisy-clean image pairs captured in the wild. The runtime of all models was evaluated on the Snapdragon 8 Elite Gen 5 and Dimensity 9500 chipsets with the Adreno and Mali GPUs, respectively. Top solutions proposed in this challenge are able to perform high-quality image denoising under 100 milliseconds on both platforms while reaching a PSNR score of over 37 dB. A comprehensive description of the models developed in the challenge is provided in this paper.",
    "published": "2026-10-31T14:18:38Z",
    "updated": "2026-10-31T14:18:38Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00974"
  },
  {
    "id": "2611.00963",
    "title": "4K Image Super-Resolution on Mobile NPUs: Mobile AI 2026 Challenge Report",
    "authors": [
      "Andrey Ignatov",
      "Georgy Perevozchikov",
      "Radu Timofte",
      "Fubin Ren",
      "Shihao Wang",
      "Liwen Zhang",
      "Zhe Xu",
      "Zhipei Lei",
      "Minjian Zhang",
      "Kailing Tang",
      "Dingyong Gou",
      "Yanlin Wu",
      "Cong Li",
      "Xiaohui Cui",
      "Kihwan Yoon",
      "Ganzorig Gankhuyag",
      "Heo MyeongCheol",
      "Yonghyun Park",
      "Juho Jung",
      "Sungjei Kim",
      "Phuong-Nam Nguyen-Pham",
      "Nam-Tien Le",
      "Tinh-Anh Nguyen-Nhu",
      "Matin Fazel",
      "Abdelhak Bentaleb",
      "Xinrui Li",
      "Xusheng He",
      "Jianlong Wu",
      "Mohsin Ikram",
      "Dmitry Ignatov",
      "Hao Chen",
      "Long Sun",
      "Jiangxin Dong",
      "Jinshan Pan",
      "Jinhui Tang",
      "Siyue Teng",
      "Yuxuan Jiang",
      "Fan Zhang",
      "David Bull",
      "Zhe Xiao",
      "Jun Xiao",
      "Zhi-Song Liu",
      "Jiayi Pei",
      "Songtao Wu",
      "Hong Shang",
      "Kuanhong Xu"
    ],
    "abstract": "Image super-resolution is widely used on mobile devices for upscaling various types of image data. This creates a need for efficient deep learning-based models that are not only performant but can also be deployed on neural processing units (NPUs) present in the majority of mobile and IoT chipsets. In this Mobile AI challenge, we address this problem and propose the participants to design fast solutions that can upsample images from Full HD to 4K resolution while running on popular mobile NPUs from Qualcomm and MediaTek. For this, the participants were provided with the DIV2K dataset and trained models to do an efficient 3X image upscaling. The competition had two tracks: in the first track, the models had to be fully quantized (INT8), and the runtime of all models was evaluated on the Qualcomm Snapdragon 8 Elite Gen 5 NPU. In the second track, the participants were developing floating-point solutions that were evaluated on the MediaTek Dimensity 9500 NPU. Top solutions proposed in this challenge are able to reconstruct 4K images under 5 milliseconds while reaching a PSNR score of 30 dB. A comprehensive description of the models developed in the challenge is provided in this paper.",
    "published": "2026-10-31T14:05:38Z",
    "updated": "2026-10-31T14:05:38Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00963"
  },
  {
    "id": "2611.00960",
    "title": "Self-Refining Prompt Induction for Streaming Text-to-SQL",
    "authors": [
      "Gaetano Rossiello",
      "Alfio Gliozzo",
      "Nandana Mihindukulasooriya",
      "Erick Lee",
      "Nabila Siregar",
      "Lisa Amini"
    ],
    "abstract": "Text-to-SQL assistants for streaming engines must handle dialect-specific types, windowing rules, and temporal semantics, including constructs poorly handled by generic prompts. We present Self-Refining Prompt Induction (SRPI), an offline method that converts generation failures into reusable dialect instructions while keeping model weights fixed. A Refiner revises the Generator's prompt using reference-conditioned feedback from three LLM judges; a sampled regression guard checks earlier successes, and a separate Compressor reduces prompt length. Inference uses the frozen prompt without retrieval or query repair. We evaluate cross-domain and cross-model transfer on Confluent Cloud Flink SQL using a controlled synthetic workload seeded by 30 expert-written examples, with 335 induction examples and 257 questions from held-out domains. The same induced prompt improves mean judge scores across seven Generators by 7.1-19.2 percentage points, including an increase from 85.3% to 97.5% for the induction model. A separate compression study reduces prompt length by 52.7% with a 0.19-percentage-point score decrease. An assistant using the induced prompt is in early access, with initial user feedback to inform subsequent refinement.",
    "published": "2026-10-31T14:02:40Z",
    "updated": "2026-10-31T14:02:40Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.DB"
    ],
    "url": "https://arxiv.org/abs/2611.00960"
  },
  {
    "id": "2611.00953",
    "title": "PSF-Informed Reconstruction: An Enhanced 2D Directional Filtered Backprojection Method for Cone-Beam Rotary Computed Laminography",
    "authors": [
      "Chengxiang Wang",
      "Wei Yu",
      "Baodong Liu"
    ],
    "abstract": "Cone-beam rotary computed laminography (CL) presents a viable alternative to cone-beam CT for imaging objects with high aspect ratios. Conventional reconstruction techniques, such as CL-FBP and CL-FDK, often yield suboptimal results charac?terized by pronounced superimposition artifacts, reduced contrast,and blurred edges, primarily due to their reliance on 1D row-wise filtering along detector rows. To address these limitations and improve reconstruction quality, we proposed a novel 2D directional filtered backprojection (DFBP) method based on the point spread function (PSF). First, an exact expression for the projection process is derived by establishing the relationship between a reconstructed pixel and its corresponding projection point on the detector. Second, a revised backprojection process incorporating two weighting factors is introduced to counteract the nonlinearity inherent in conventional backprojection, leading to a simplified PSF formulation. Third, to circumvent the computational burden of 3D image space filtering,an approximate method by linearizing the coordinate relationship in Fourier space under some assumptions is developed that transfers the 3D filtering operation to the 2D projection space. This approach facilitates the derivation of a formally simple yet effective 2D direc?tional filter, which integrates a 2D von Hann window and a 2D sinc window. Experimental results demonstrate that the proposed method produces reconstructions with superior contrast, sharper boundaries,and fewer superimposition artifacts compared to CL-FBP and CL?FDK. Moreover, it enables more accurate recovery of internal structures, such as bubble defects and electronic components.",
    "published": "2026-10-31T13:54:26Z",
    "updated": "2026-10-31T13:54:26Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.00953"
  },
  {
    "id": "2611.00945",
    "title": "HieraNTP: Structured Risk Representations for Time-Series Anomaly Detection via Hierarchical Next-Token Prediction",
    "authors": [
      "Yujie Li",
      "Zezhi Shao",
      "Boyu Diao",
      "Zhulin An",
      "Yongjun Xu",
      "Xueqi Cheng",
      "Fei Wang"
    ],
    "abstract": "Time-series anomaly detection commonly converts deviations from learned temporal regularities into anomaly scores. This practice can conflate violations of temporal regularity with task-specific anomaly judgments: the same deviation may be anomalous under one task definition and benign under another. Aggregating heterogeneous deviations into a single score before task-specific adaptation can obscure the evidence needed to distinguish these cases. We introduce HieraNTP, a Hierarchical Next-Token Prediction framework that separates self-supervised predictive modeling from task-specific risk interpretation. HieraNTP pretrains a hierarchical tokenizer and a causal next-token predictor to capture temporal regularities at multiple scales. It then organizes prediction discrepancies into a structured risk representation, preserving complementary evidence across temporal scales in token, local-statistic, and observation spaces. A task-adaptive detector uses anomaly labels to select and combine this evidence for the target task. Across anomaly detection benchmarks, HieraNTP improves VUS-PR by 12.0% on TSB-AD-U and 15.5% on TSB-AD-M relative to the strongest baselines, and achieves the highest composite score on both TAB tracks, with controlled comparisons supporting the value of retaining distinct evidence. Our code is available at https://github.com/blisky-li/HieraNTP.",
    "published": "2026-10-31T13:47:31Z",
    "updated": "2026-10-31T13:47:31Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00945"
  },
  {
    "id": "2611.00944",
    "title": "SNAPPerf: Software-Aware Tabular Foundation Model for Retraining-Free Performance Prediction of Configurable Systems",
    "authors": [
      "Amine Lbath",
      "Massih-Reza Amini",
      "Vadim Okun"
    ],
    "abstract": "Modern software systems expose hundreds of configuration options whose combinations can substantially affect execution time, memory and energy usage. Measuring software performance resulting from a configuration set requires running a realistic workload. Since the configuration space grows exponentially, exhaustive benchmarking is infeasible. Prior work therefore trains models on a small set of measured configurations to predict the performance of the rest. Yet these models are specific to a particular software version, hardware platform, and workload, so changes require new measurements and retraining, and such changes are becoming more frequent with coding agents. We challenge this per-system training assumption with SNAPPERF (Software-aware, No-retraining, Adaptive Prediction), a sample-efficient tabular foundation model specialized for configurable software. SNAPPERF is pretrained once on synthetic data. Each new update only requires a few measured configurations as context to predict the rest without any per-system training or hyperparameter tuning. Across 39,866 configurations from 12 real-world systems, spanning 6 domains and 4 performance metrics, SNAPPERF reduces prediction error by 38% over the prior state of the art at the same measurement budget, and by 25% over the best general-purpose tabular foundation model. It matches the state of the art's accuracy with 54% fewer measurements on average. These results suggest that knowledge about software can be encoded in pretraining data rather than in per-system models, opening a new research direction in software-aware pretraining.",
    "published": "2026-10-31T13:47:08Z",
    "updated": "2026-10-31T13:47:08Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00944"
  },
  {
    "id": "2611.00941",
    "title": "MarkovTS: Pretrained State-Transition Representations for Zero-Shot Time Series Generation",
    "authors": [
      "Yujie Li",
      "Zezhi Shao",
      "Jingbo Zhou",
      "Yongjun Xu",
      "Xueqi Cheng",
      "Fei Wang"
    ],
    "abstract": "Across heterogeneous real-world domains, time-series generation supports simulation, model development, and data augmentation by generating sequences that preserve target-domain statistics and temporal dependencies when real observations are scarce or costly. However, existing methods predominantly address in-domain generation, limiting their reuse in unseen domains. We study reference-conditioned zero-shot time series generation: target domains are unseen during pretraining, generation uses a single target-domain reference sequence, and no model parameters are updated. MarkovTS characterizes sequence evolution through local morphologies and their ordered transitions at multiple temporal scales. Its pretrained encoder quantizes normalized time-series patches into multiscale morphological states with a state codebook, while a transition codebook encodes contextual transitions between adjacent intervals. These transferable state-transition representations condition a pretrained flow-matching model. At generation, the frozen model combines a reference-derived condition with independent Gaussian noise to produce stochastic samples that retain the reference's temporal organization. Across 12 unseen target datasets, MarkovTS outperforms strong baselines in most distributional comparisons and generates diverse, reference-consistent sequences. As downstream augmentation, its samples yield overall gains across forecasting, classification, and anomaly detection benchmarks and diverse model families. Our code is available at https://github.com/blisky-li/MarkovTS.",
    "published": "2026-10-31T13:43:00Z",
    "updated": "2026-10-31T13:43:00Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00941"
  },
  {
    "id": "2611.00937",
    "title": "What Helps Denoising Can Hurt Memory: Rethinking History in Long Video Generation",
    "authors": [
      "Yubin Jing",
      "Ziyang Zhang",
      "Meng Chen",
      "Yuyao Li",
      "Haofan Wang",
      "Yichen Gong"
    ],
    "abstract": "Autoregressive video generators produce long videos block by block, using historical context to maintain temporal consistency. After denoising, a committing pass encodes each clean block into keys and values (KV) that later blocks read, and the same clean block can be encoded into different KV depending on the history it reads. We therefore study historical context not only as a condition for denoising but also as an input to committing. Older historical context that supports denoising can harm subsequent generation when read during committing. At fixed context size and temporal positions, older historical context lowers mean clip-to-clip Subject Consistency. Across 5 generator configurations supporting longer contexts, consistency rises, plateaus, and then declines as committing context expands. Motivated by these findings, we propose Commit Forcing, a training-free rule that organizes committing into a chain. During committing, each block reads only the preceding block's stored KV, so older historical context reaches new entries only through the chain. We apply this rule to 6 pretrained generators. On 60-second VBench, Commit Forcing improves Quality and Total on all 6 generators, by up to 1.27 Quality points and 1.10 Total points. Long-range consistency gains extend to 240-second videos. In a blinded comparison on 120-second LongLive videos, Commit Forcing achieves win rates of 83.5% for subject and scene consistency and 82.9% for overall preference against the base generator, excluding ties.",
    "published": "2026-10-31T13:39:46Z",
    "updated": "2026-10-31T13:39:46Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.00937"
  },
  {
    "id": "2611.00935",
    "title": "Labadain-MedQA: A Tetun Medical QA Dataset for Fine-Tuning and Evaluating Large Language Models",
    "authors": [
      "Gabriel de Jesus",
      "Sérgio Nunes"
    ],
    "abstract": "Advances in large language models (LLMs) have created opportunities for cross-lingual transfer of medical knowledge from high-resource to low-resource languages to support access to healthcare information. However, medical question-answering (QA) datasets for fine-tuning and evaluating LLMs remain scarce for Tetun. To address this gap, we translated MedAlpaca's Medical Flashcards and WikiDoc Patient Information collections into Tetun using Gemini 2.5 Flash, producing 39,077 medical QA pairs. Translation quality was assessed on 50 randomly sampled QA pairs (100 documents) using automatic metrics against human reference translations and evaluations by two native Tetun-speaking healthcare professionals, focusing on medical accuracy and Tetun fluency. Human translations achieved higher mean ratings than LLM-generated translations for both criteria (4.43/5 vs. 4.02/5), with statistically significant differences (Wilcoxon signed-rank test, p < 0.001). To assess downstream utility, we fine-tuned Gemma and Llama variants on the translated MedAlpaca dataset using parameter-efficient fine-tuning (PEFT) and evaluated them on 325 Tetun-translated United States Medical Licensing Examination multiple-choice questions. Gemma 4 12B fine-tuned using QLoRA achieved relative improvements in mean accuracy of 10.79% with 4-bit NormalFloat (NF4) inference and 10.42% after merging the LoRA adapters into the BF16 base model, compared with the corresponding base models. These results highlight the viability of automatic dataset translation for Tetun medical QA and the effectiveness of PEFT in enhancing model performance. The datasets, models, and evaluation resources are accessible at https://github.com/labadain/labadain-medqa to support reproducible research on Tetun medical QA and facilitate machine translation, cross lingual, and multilingual research.",
    "published": "2026-10-31T13:36:05Z",
    "updated": "2026-10-31T13:36:05Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00935"
  },
  {
    "id": "2611.00926",
    "title": "UI-UG 2: Advancing Mobile UI Understanding and Generation with Fine-Grained Supervision and Reinforcement Learning",
    "authors": [
      "Hao Yang",
      "Shuoyang Liu",
      "Xiaoyu Lin",
      "Zhou Fang",
      "Maji Huang",
      "Zhaosong Huang",
      "Ruichao Mao",
      "Teng Guo",
      "Hai Rao"
    ],
    "abstract": "Mobile UI understanding and generation require both fine-grained component perception and reliable structured synthesis. Inspired by the unified direction introduced by UI-UG, we present UI-UG 2, a compact 4B-parameter multimodal large language model (MLLM) that advances mobile UI Understanding and Generation with broader task coverage, a front-end-aligned taxonomy, and online render-aware reinforcement learning. UI-UG 2 constructs a multi-source understanding corpus from RICO, VINS, Android in the Wild, and Android Control, annotated with an 80-category two-level UI taxonomy aligned with front-end component semantics, and pairs it with over 5,000 requirement-screenshot-JSON tuples for progressive structured UI generation through a domain-specific language (DSL). For understanding, UI-UG 2 introduces decomposed rewards for category prediction, OCR fidelity, color recognition, dense grounding, and GUI grounding. Unlike the offline Direct Preference Optimization (DPO)-style generation optimization in UI-UG, UI-UG 2 optimizes generation through end-to-end online Group Relative Policy Optimization (GRPO): sampled DSL outputs are rendered with a Playwright-based server-side pipeline and evaluated using LLM-as-a-Judge and contrastive preference ranking. Experiments show that UI-UG 2 achieves the strongest referring and dense-grounding results among the evaluated models on our 80-category benchmark, and achieves the best composite generation score among compared models at a compact scale (4B). More importantly, we observe a consistent understanding-to-generation transfer: adding fine-grained UI perception supervision improves generation quality under a fixed training budget, suggesting that component-level semantics provide a shared representational foundation for both tasks.",
    "published": "2026-10-31T13:24:05Z",
    "updated": "2026-10-31T13:24:05Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.00926"
  },
  {
    "id": "2611.00923",
    "title": "Illusion: Safeguarding Topology Confidentiality in LLM Multi-Agent Systems via Behavior-Preserving Obfuscation",
    "authors": [
      "Yiu-Fai Cheung",
      "Hongzhi Guo",
      "Miao Pan",
      "Irwin King",
      "Hao Wang"
    ],
    "abstract": "The communication topology of Large Language Model Multi-Agent Systems (LLM-MASs) governs how information propagates among agents and encodes critical domain knowledge and expert workflow design. It is valuable intellectual property and plays a decisive role in system utility and safety, yet remains vulnerable to inference attacks that stealthily reconstruct it from agent outputs. Existing defenses detect or mitigate such attacks but do not proactively conceal the topology itself. We propose \\textit{Illusion}, a proactive topology obfuscation defense for LLM-MAS. \\textit{Illusion} injects fake edges and fake messages to present attackers with a deceptive topology, while selecting low-impact candidates that preserve output-distribution equivalence and task-accuracy non-inferiority. The resulting fake edges are designed to be indistinguishable from genuine messages under black-box observation. Extensive experiments show that \\textit{Illusion} reduces edge-level F1 from over 0.87 to 0.62 and graph similarity from over 0.94 to 0.71. It also largely preserves output distributions and task performance, and its fake edges resist both similarity-based and LLM-judge filtering, even under adaptive pruning.",
    "published": "2026-10-31T13:23:42Z",
    "updated": "2026-10-31T13:23:42Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00923"
  },
  {
    "id": "2611.00919",
    "title": "TreePIN$^{2}$: Tree-Prior Initialized Neural Networks",
    "authors": [
      "Yanrong Wang",
      "Qiming Sun",
      "Haoyang Chen"
    ],
    "abstract": "Fitted decision trees provide predictive knowledge for neural network initialization. We present Tree-Prior Initialized Neural Networks (TreePIN$^{2}$), a method that translates split rules, decision paths and leaf predictions into initial network weights and biases for classification and regression. Sigmoid units encode split responses, hidden units combine them along decision paths, and leaf predictions initialize the output layer. We calibrate split softness using local training margins, sample support and impurity reduction, relating the initial responses to the data at each node. All weights and biases remain trainable, allowing gradient-based optimization to refine the transferred decisions and their combinations. Across six classification and six regression tasks with twenty paired seeds, TreePIN$^{2}$ improves mean initial and early validation performance over initialization baselines on most tasks. After fifty epochs, it achieves the best or tied-best mean validation performance among the six compared methods on ten tasks. Paired ablations show how split calibration and leaf-informed output initialization contribute to the starting predictor and its subsequent learning.",
    "published": "2026-10-31T13:22:01Z",
    "updated": "2026-10-31T13:22:01Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00919"
  },
  {
    "id": "2610.41939",
    "title": "Observable-Specific Validity Tests for Scientific AI: Controlled Approximations and Intervention Response",
    "authors": [
      "Xiaoshn Nee",
      "Haobo Zhong",
      "Xiaomin Ni"
    ],
    "abstract": "An approximation can reproduce an energy while missing its response, or satisfy an error tolerance without being certified by a given bound. We formulate observable-specific validity records for scientific artificial intelligence (AI) that link a reduction to its reference model, error measure, tolerance, parameter domain, and transformations or interventions. Explicit displacement and velocity certificates for a singularly perturbed oscillator recover distinct convergence orders and provide sufficient validity guarantees. Exact Hubbard dimer relations resolve the different coupling domains accepted by energy and response criteria. Across 16 repeated neural fits, imposing dimensional homogeneity reduces energy scale transfer error from 52.3% to 0.0768% and raises the median fraction jointly satisfying gap and response tolerances from zero to 100%. Paired transformations verify the protected scaling relation, while a coupling crossover identifies the additional information needed for response transfer. A causal model recovers a positive intervention response beneath a strong negative observational association. For two mechanisms observed with Gaussian noise whose responses first differ at order $x^k$, we derive an exact fixed control query requirement scaling as $x^{-2k}$ and verify its full success curve numerically. Together with a 256-task evaluation interface, these results provide independently checkable tests of controlled approximation, physical transfer, and mechanism discrimination in scientific AI.",
    "published": "2026-10-30T15:57:51Z",
    "updated": "2026-10-30T15:57:51Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.DL"
    ],
    "url": "https://arxiv.org/abs/2610.41939"
  },
  {
    "id": "2610.41924",
    "title": "IGDA-ICMH: an Importance Guided Feature and Network Dual Adaptation Framework towards Image Compression for Machine and Human Vision",
    "authors": [
      "Yanbo Gao",
      "Xinyu Zhao",
      "Shuai Li",
      "Xun Cai",
      "Mao Ye",
      "Li Li"
    ],
    "abstract": "With the surge of machine vision applications, image compression for both machine and human vision (ICMH) has become an important research area. Existing studies mainly focus on task-specific adaptation or multi-task joint optimization, yet they often overlook the unequal contributions of different features and network layers to downstream machine vision tasks. To address this issue, we first quantitatively investigate the impact of different feature and network layers on machine vision performance, providing a principled understanding of their importance. Based on this analysis, an Importance Guided feature and network Dual Adaptation (IGDA) framework is developed for ICMH. It adopts implicit neural representation as the basic architecture and designs an efficient adaptation structure with both feature and network weight adaptation. An Importance-Guided Network Adaptation (IGNA) module is developed with a low-rank adaptation strategy to selectively adjust key network layers according to their importance in different tasks. An Importance-Guided Feature Adaptation (IGFA) module is developed with a low-rank and Kronecker product-based transform to explore the non-local property of the features in order to reduce the number of adaptation parameters. Extensive experiments on representative machine vision tasks, including image classification and object detection, demonstrate that our IGDA-ICMH framework achieves significantly better performance than the existing implicit neural representation-based methods for ICMH.",
    "published": "2026-10-30T15:54:03Z",
    "updated": "2026-10-30T15:54:03Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.41924"
  },
  {
    "id": "2610.41909",
    "title": "Structure-Aware Skill Retrieval and Arbitration for Optimization Modeling",
    "authors": [
      "Anran Liu",
      "Benzhao Hou",
      "Zongsheng Cao",
      "Daichao Wang",
      "Lang Chen",
      "Shitong Chen"
    ],
    "abstract": "Large Language Models (LLMs) can turn natural-language optimization tasks into solver-checked answers, but current agents remain brittle under narrative rewrites and often store reusable experience at the instance level. We introduce \\textsc{ArchOR}, an archetype-centric skill agent that builds on \\textsc{OptSkills} by adding two retrieval-focused modules. \\emph{Centroid-Aware Representation Learning} (CARL) refines the ordering of cached skill representations through a low-rank prototype residual. \\emph{Signature-Guided Retrieval} (S\\textsuperscript{3}R) attaches open-dimensional structural signatures to skills, prioritizes candidates by weighted Jaccard overlap, and bounds semantic re-ranking to a top-$K$ set. A baseline-preserving arbitration rule determines when the structural route should replace the original selector. With the same DeepSeek-V4.1-Flash backbone and released skill library, \\textsc{ArchOR} reaches 65.00\\% Micro-Avg.\\ Pass@1 across five benchmarks, improving over \\textsc{OptSkills} by 1.64~pp Micro-Avg.\\ and 2.68~pp Macro-Avg.",
    "published": "2026-10-30T15:45:17Z",
    "updated": "2026-10-30T15:45:17Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41909"
  },
  {
    "id": "2611.00181",
    "title": "A Rate-Distortion Optimized Skip Mode Coding Framework for Neural Video Compression in AVS",
    "authors": [
      "Yuntian Jiang",
      "Shuai Li",
      "Yanbo Gao",
      "Jinglin Zhang",
      "Hui Yuan",
      "Mao Ye"
    ],
    "abstract": "With the development of deep learning, neural video compression (NVC) is gaining increasing interest and is currently under standardization in the AVS (Audio Video Coding Standard). Skip mode coding, a crucial component in the traditional video compression, is also adopted in AVS NVC. Although the skip mode takes a large portion in encoding the motion and residual features in the NVC, there is a lack of investigation on the rate distortion performance of the skip mode coding. In this paper, we first thoroughly investigate the rate and distortion distribution in the skip mode coding within a spatial frame and under different temporal reference qualities, and demonstrate that distortion distribution changes spatially and temporally. Therefore, a rate-distortion optimized skip mode coding (RDOSkip) framework is proposed, where the rate and distortion in the skip mode coding is formulated based on a statistical distribution predicted by the hyperprior and the Bayes' theorem. An adaptive skip mode decision method based on spatial-temporal joint RD optimization is developed for the skip mode coding among channels and frames in a group of pictures. It addresses the limitation of the rigid fixed-distortion distribution assumption in skip mode coding within the existing methods that rely on a fixed skip threshold. The temporal skip mode decision method has been adopted in the ongoing AVS NVC standard and incorporated into the reference software. The proposed RDOSkip can be directly used in the inference without any training and with negligible complexity increase. Experimental results further demonstrate that the proposed RDOSkip can improve the performance by 0.90% and 1.29% on AVS and HEVC datasets, respectively, in terms of BD-rate saving.",
    "published": "2026-10-30T15:45:10Z",
    "updated": "2026-10-30T15:45:10Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.00181"
  },
  {
    "id": "2610.41901",
    "title": "ReX-GG: a LLM Ensemble Pipeline for Relation-extraction and Graph Generation",
    "authors": [
      "Giacomo Magnifico",
      "Eduard Barbu"
    ],
    "abstract": "Current LLM ensemble frameworks focus on multi-step setups with additional modules for answer ranking, often opting for token and span analysis rather than structured outputs, leading to heavyweight architectures with potential fail states along the pipeline. Faster, lighter solutions are more vulnerable to hallucination propagation and can lack output control in more complex pipelines. This paper proposes a customisable, lightweight ensemble workflow of coordinated Large Language Models that leverages JSON-structured outputs and anonymous peer-review ranking to mitigate hallucinatory outputs and single-model failure points. The pipeline is demonstrated on a relation extraction task applied to popular science articles in English, targeting four ontologically-grounded relation types (strong causation, weak causation, contrastive, and compositional), with semantic node canonicalisation and interactive, colour-coded HTML causal graphs as the final output. Performance is evaluated through an anonymous user study, achieving an average perceived accuracy of 0.778 against a human-annotated gold standard. The modular architecture supports flexible deployment across both API-based and in-house LLM setups, and the full framework is released under an open license to foster reproducibility and collaborative research.",
    "published": "2026-10-30T15:39:02Z",
    "updated": "2026-10-30T15:39:02Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41901"
  },
  {
    "id": "2610.41900",
    "title": "Using Machine Learning to Measure Self-Efficacy Belief Through Learners' Interaction Traces in Technology-Enhanced Learning",
    "authors": [
      "Maeva Somny",
      "Linda Chouati",
      "Marie Lefevre"
    ],
    "abstract": "Self-efficacy beliefs play a critical role in learners' performance, academic choices, and, more broadly, in their future career trajectories. As Technology-Enhanced Learning (TEL) environments have demonstrated strong potential for supporting both performance and motivation, investigating self-efficacy within such environments is of particular interest, especially for implementing remedial practices as early as possible to support learners' self-efficacy beliefs. Our research aims to develop a system capable of detecting low self-efficacy based on learners' interaction traces while they solve exercises in a TEL system. In this paper, we present initial results and future perspectives on a detection approach based on data mining and machine learning techniques to identify features indicative of low self-efficacy beliefs. Because the detection of learners' self-efficacy beliefs through their use of TEL systems remains largely unexplored, this work is exploratory in nature. To this end, we conducted an experiment across two universities to collect interaction traces and self-reported measures of self-efficacy. We then developed a machine learning pipeline comprising multiple classification models, enabling us to highlight the importance of closely monitoring of learners' self-efficacy beliefs for improved prediction performance, given their highly dynamic nature during learning.",
    "published": "2026-10-30T15:38:30Z",
    "updated": "2026-10-30T15:38:30Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41900"
  },
  {
    "id": "2610.41899",
    "title": "General-purpose foundation models surpass specialized ones on chemical property prediction tasks",
    "authors": [
      "Stepan N. Ostarkov",
      "Gregorii A. Semakin",
      "Ivan A. Bespalov",
      "Michael G. Medvedev"
    ],
    "abstract": "Foundation models (FMs) learn reusable representations from large collections of unlabeled data. In chemistry the corresponding data mainly consists of molecular structures, which are abundant, whereas experimental measurements are scarce. Chemical FMs such as ChemBERTa and MoLFormer were therefore trained on diverse molecular structures to enable fine-tuning on small experimental datasets (less than 100 datapoints in most realistic scenarios) and subsequent property prediction. At the same time, general-purpose FMs such as GPT-6 Astra and Claude Opus 5.5 were trained on virtually all publicly available data, including knowledge of the humankind on molecular properties and laws governing them. Here we compare accuracies of chemical and general-purpose FMs on tasks from various areas of chemistry. Strikingly, general-purpose GPT-6 Astra outperforms the currently eligible chemical FMs on five physicochemical and quantum-chemical regression tasks when only 60 experimental datapoints are available. Only when provided 10x datapoints do the best chemical FMs reach performance of GPT-6 Astra: on 1,000 and 10,000 points they show performance on par with Astra on 60 and 1,000 points, respectively. Thus, counterintuitively, frontier general-purpose FMs are better suited for guiding chemical research in data-scarce areas than specialized chemical FMs, suggesting that learning relevant primitives (e.g. chemical structures) does not substitute training on relevant humankind knowledge.",
    "published": "2026-10-30T15:37:40Z",
    "updated": "2026-10-30T15:37:40Z",
    "categories": [
      "physics.chem-ph",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41899"
  },
  {
    "id": "2610.41893",
    "title": "Automated Keyword Generation Using LLMs in a High-Volume Data Virtualization Service",
    "authors": [
      "Saiful Khan",
      "Yiwen Xing",
      "Joyraj Chakraborty",
      "Afrah Farea",
      "Philip Beaucamp",
      "Samuel Jackson",
      "Min Chen"
    ],
    "abstract": "In modern data infrastructure, a data virtualization service (DVS) allows users to create many versions of source datasets for different processing tasks. For example, a multivariate or multi-modality dataset can be used for different machine learning tasks (e.g., classification, detection, segmentation, forecasting, and so on). Data selection, participation, integration, and preprocessing in different tasks result in many virtual datasets [Khan et al., SSC 2026]. Meanwhile, different users need to discover existing virtual datasets frequently and easily to avoid duplicate efforts. To enable an effective search engine in a DVS, it is desirable to automatically generate keywords for each virtual dataset. In this work, we present a solution for generating keywords for virtual datasets using large language models (LLMs). We propose five strategies for selecting different collections of text data for processing by the LLMs. We applied the five strategies to virtual datasets created in five application case studies with different source datasets. We conducted experiments with three LLM generators and two embedding techniques. The experiments show that the performances of the five strategies depend on the quality of the text descriptions. The results help us adopt a multi-strategy implementation of a new keyword generation service (KGS) as part of an extended DVS. The work demonstrates that the capability of automated keyword generation is indispensable for a high-volume DVS that is dataset-rich and frequently accessed.",
    "published": "2026-10-30T15:34:59Z",
    "updated": "2026-10-30T15:34:59Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41893"
  },
  {
    "id": "2610.41879",
    "title": "Fuzzy selective state model for forecasting the dynamics of consumer preferences",
    "authors": [
      "P. A. Golovinski",
      "A. A. Drobyshev",
      "A. O. Shatalova"
    ],
    "abstract": "We consider forecasting the dynamics of consumer preferences of retail chain customers. A customer's preference is described by a triangular fuzzy number. The evolution of the preference over time is governed by a Mamba-type selective state space model whose hidden state is a triangular number, with computations carried out in M.G.~Matveev's two-component algebra of fuzzy numbers. The recurrence parameters are computed from crisp features, while the fuzzy part of the model remains linear with non-negative coefficients. We show that the state then always remains a proper triangular number and is a convex combination of past observations, so that the fuzziness of the forecast does not accumulate over time and the algebraic computations coincide with Zadeh's extension principle. On a synthetic example with competitor promotions and customer switching, a lightweight 107-parameter model reaches a mean absolute error of the forecast centre of 0.154 versus 0.163 for the constant-inertia evolution operator and 0.179 for the naive forecast, matches a crisp model of the same architecture and additionally provides a linguistically interpretable estimate of forecast vagueness. We also show how the linguistic readout of the forecast can be used to detect a permanent switch of a customer to a competitor.",
    "published": "2026-10-30T15:27:14Z",
    "updated": "2026-10-30T15:27:14Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41879"
  },
  {
    "id": "2610.41877",
    "title": "Movens-Zero: Scaling Humanoid Motion Foundation Models with Large-Scale Human Videos",
    "authors": [
      "Wendong Bu",
      "Tinghong Ye",
      "Qizhou Wang",
      "Jiacheng Li",
      "Zhiqi Ge",
      "Yuze Lin",
      "Zhongqi Yue",
      "Yi Su",
      "Jingyu Wang",
      "Kai Shen",
      "Jingdong Liu",
      "Chengyuan Deng",
      "Xiaoxuan Chen",
      "Xin Tan",
      "Jiaming Ji",
      "Wenqiao Zhang",
      "Chenghong Jiang",
      "Tuoyu Li",
      "Siliang Tang",
      "Jun Xiao",
      "Tat-Seng Chua",
      "Yueting Zhuang",
      "Xingxing Wang",
      "Juncheng Li"
    ],
    "abstract": "Scaling humanoid motion foundation models is constrained by the scarcity of diverse, robot-executable data and by the difficulty of jointly learning from heterogeneous multimodal inputs while supporting real-time closed-loop control. We present Movens-5M, constructed from raw Internet videos through clip generation, quality filtering, semantic annotation, motion recovery, and physical refinement with humanoid retargeting and execution verification. It contains 15 million human-motion sequences and 5 million physically executable humanoid-motion sequences spanning over 10,000 hours, aligned with text, RGB video, speech, and music. Building on this data, we introduce Movens-Zero, a scalable understanding-generation-execution architecture that supports joint learning across modalities and real-time closed-loop execution. Task-mixed flow-matching training jointly optimizes a single action expert across seven generation tasks, enabling direct motion generation from text, speech, music, and video. Multimodal Real-Time Chunking connects overlapping chunks under continuously updated instructions and robot states for continuous closed-loop execution. We further introduce Movens-Intent, a four-track benchmark with 8,192 expert-verified condition-motion pairs across text, speech, music, and video. Experiments show consistent gains across all four modalities when scaling execution-verified data from 1% to 100% and action-expert capacity from 64M to 911M parameters, while demonstrating that data quality and cross-modal supervision improve generation and execution.",
    "published": "2026-10-30T15:25:49Z",
    "updated": "2026-10-30T15:25:49Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.41877"
  },
  {
    "id": "2611.00180",
    "title": "Learning to Live: A Step Toward Lifelong Embodied Intelligence",
    "authors": [
      "Lirong Che",
      "Peidong Wang",
      "Yimeng Su",
      "Jiong Wang",
      "Yang Chen",
      "Wenbo Fu",
      "Zhenyu Huang",
      "Tiancheng Xu",
      "Yuzhe Yang",
      "Dongli Xie",
      "Xu Cao",
      "Chuang Wang",
      "Daqi Liu",
      "Jian Su"
    ],
    "abstract": "Embodied agents are usually organized around individual tasks, yet the physical world keeps changing between tasks and during execution. We introduce LIFE (Lifelong Intelligence from Experience), a framework in which a robot observes continuously, remembers selectively, and turns experience into new capabilities. RoboBeats, a family of lightweight streaming gates, tracks conditions set by the agent and discovers new events, deciding when an observation warrants a response or a memory write. Selected observations enter Plastic Memory, a flat store of images and structured records that keeps the source evidence, so new fields and indexes can be added when later questions need them. When existing tools fall short, Explore-Distill-Mount (EDM) turns solutions found during problem solving into validated, reusable tools and skills. Under matched protocols, RoboBeats substantially improves condition tracking over its base models and, at the same writing budget, retains more useful evidence for memory question answering than uniform sampling. A case study of limited scale, replaying 24 hours of continuous video recorded by a real robot, illustrates how the integrated system builds memory from a day of experience and uses it to answer everyday questions. LIFE takes a step toward robots that become more familiar with their surroundings and more capable through experience: learning not only to complete tasks, but to live in the world.",
    "published": "2026-10-30T15:23:52Z",
    "updated": "2026-10-30T15:23:52Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.00180"
  },
  {
    "id": "2610.41866",
    "title": "AI evaluators favor job applications written by certain AI models, independent of candidate quality",
    "authors": [
      "Nicolò Pagan",
      "Michael Andreas Ebling",
      "Stefania Ionescu",
      "Anikó Hannák"
    ],
    "abstract": "Job applicants increasingly use large language models (LLMs) to write cover letters, while employers deploy LLMs to screen them. In this all-AI setting, we ask whether the \\emph{choice of model} affects hiring outcomes independently of candidate qualifications. We introduce a multi-model auditing framework pairing eleven LLM writer agents with nine API-hosted evaluator agents across ten job descriptions and fifty candidates per job. Four findings emerge. First, we identify a generative preference hierarchy: a consistent global ranking of writer models by evaluator acceptance, in which locally hosted models are systematically disadvantaged regardless of their license, compounded by self-preference bias where evaluators favour their own outputs. Second, evaluator models differ substantially in how much bias they introduce based on applicants' tool choice, offering actionable guidance for fairer screening design. Third, this hierarchy has measurable competitive consequences: in the most adverse pairing, approximately two (1.8) out of twenty-five qualified candidates are filtered out purely due to model mismatch. Fourth, a common mechanism explains the patterns above: writer preference and self-preference trace to a combination of how much each writer leans on specific stylistic cues and how strongly evaluators, often unanimously, reward or penalise those same cues. A further check finds little evidence that an unmeasured \"writer fingerprint\" remains once these same features are accounted for. We discuss implications for algorithmic fairness in employment, regulation of AI-assisted screening, and the design of auditing frameworks that can be reapplied as the model landscape evolves.",
    "published": "2026-10-30T15:18:29Z",
    "updated": "2026-10-30T15:18:29Z",
    "categories": [
      "cs.CY",
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.41866"
  },
  {
    "id": "2610.40333",
    "title": "RFW-A: Agentic Procedural Generation of 400K Articulated Assets over 500 Categories",
    "authors": [
      "Yuanbo Lyu",
      "Changjian Pan",
      "Saining Zhang",
      "Yi Yang",
      "Peishuo Li",
      "Zhiheng Li",
      "Jialu Liu",
      "Junhao Chen",
      "Jiawei Weng",
      "Yupeng Gao",
      "Weiqing Xiao",
      "Wenyi Li",
      "Jiarui Guo",
      "Rui Zhang",
      "Jingrun Du",
      "Weiyi Lin",
      "Zenan Meng",
      "Hu Wei",
      "Lin Qu",
      "Zongzheng Zhang",
      "Hao Zhao",
      "Chaojian Li"
    ],
    "abstract": "High-quality articulated assets are essential for embodied perception, simulation, and manipulation, yet constructing them at scale remains difficult. Manual annotation and procedural modeling require substantial human effort. Recent agentic systems automate asset construction through program synthesis, but repeat costly reasoning and refinement for every new asset. Our key observation is that assets within a category can share construction logic despite variations in structure and appearance. Agentic synthesis and procedural generation are therefore complementary: agents can construct reusable programs, while procedural execution reuses the resulting logic across many samples. We therefore present RFW-A, which combines the two in a new articulated-asset generation paradigm. Starting from existing articulated programs, RFW-A organizes reusable components and their dependencies into category-level generators. Agents test and refine these generators across sampled configurations and motion states. Once constructed and validated, the generators produce diverse assets through procedural execution with no further model calls or token charges. The estimated API cost of generator authoring averages $10.62, amortizing to $0.05 per asset over 200 assets, versus $1.24 for the sampled per-asset agentic synthesis baseline. Using RFW-A, we built RFW-A-400K, containing over 400K sim-ready articulated assets across more than 500 categories. Experiments show high structural and kinematic validity and stable execution across physics simulators. Beyond asset validity, training with RFW-A-400K improves part-level articulation estimation on seen and unseen categories, while policies trained in simulation with retrieved and program-edited assets transfer zero-shot to real articulated objects.",
    "published": "2026-10-29T15:58:15Z",
    "updated": "2026-10-29T15:58:15Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.40333"
  },
  {
    "id": "2610.40330",
    "title": "Multistep and Multivariate Time Series Explainability with GradientSHAP: A Wind Power Case Study",
    "authors": [
      "Robbie Southam",
      "Zhong Fan",
      "Ke Li"
    ],
    "abstract": "As the effects of climate change become increasingly apparent, the demand for renewable energy sources such as wind power continues to grow. However, renewables' variable and intermittent nature presents significant challenges in their integration into energy grids. Artificial intelligence (AI) has emerged as a powerful tool to address these issues. Still, its adoption in the energy sector has been hindered by the opacity of many AI models, which often function as black boxes. This paper introduces a carefully adapted GradientSHAP approach to provide interpretability for multivariate, multistep wind power forecasting -- a largely underexplored area. This capability is critical for day-ahead grid management and, to the best of our knowledge, this is the first study to apply GradientSHAP in the context of wind power forecasting. To address the inherent dimensionality, we developed novel visualizations that deliver both local and global explanations, uncovering intricate relationships between environmental factors, site-specific conditions, and temporal dynamics. While GradientSHAP is not an out-of-the-box solution, our findings demonstrate that, with thoughtful handling of SHAP values and domain expertise, it can offer valuable insights into model behaviour, supporting more informed and trustworthy decision-making. Nevertheless, its complexity poses challenges for practical implementation. Future research should focus on streamlining these interpretability methods to make them more actionable for routine deployment in critical energy applications.",
    "published": "2026-10-29T15:57:13Z",
    "updated": "2026-10-29T15:57:13Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.40330"
  },
  {
    "id": "2610.40036",
    "title": "Hybrid AI Patterns: Thirteen Ways to Couple Language Models with Rules, and How to Choose Among Them",
    "authors": [
      "Siegfried Handschuh",
      "Götz-Henrik Wiegand",
      "Lorena Raichle"
    ],
    "abstract": "Language models handle text well, and rule engines give conclusions with proofs. Systems that combine the two are usually described by example, and the same coupling turns up under different names in agent frameworks, guardrail toolkits and neuro-symbolic research. This document defines thirteen patterns for coupling a language model with an executable rule language, in the catalogue form introduced for object-oriented design: intent, motivation, applicability, participants, collaborations, consequences, implementation, known uses and related patterns. Four patterns concern what crosses the boundary between model and rules, five who controls whom, three how the model takes part in the reasoning, and one how knowledge is kept over time. Five invariants hold for every combination, and five failure patterns name the couplings that break them. We relate the catalogue to published pattern catalogues and taxonomies of hybrid and neuro-symbolic systems and show where they overlap with it. A decision guide leads from a problem to a pattern. It rests on our measurements, including the cases in which a model alone did as well as the hybrid or better, and it reports what each design cost.",
    "published": "2026-10-29T13:37:28Z",
    "updated": "2026-10-29T13:37:28Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.40036"
  },
  {
    "id": "2610.40030",
    "title": "Cheap Retrieval and Observation Credit Assignment from One Quantity: The Value of Information",
    "authors": [
      "Daniel Strauss",
      "Nikolaos Sotirakis",
      "Zhenshan Bing",
      "Alois Knoll"
    ],
    "abstract": "Memory in reinforcement learning raises two problems. Attention finds the relevant item by scoring the whole store, which is costly for robots under latency and energy limits. When a retrieved memory pays off, credit for acquiring it must cross the whole sequence. We argue that both are governed by one quantity, the value of information, and propose to estimate it from archived rollouts with a learned world model. We obtain that, when read at the observation, it yields a provable lower bound on the optimal value of the acquiring action, which floors its TD target and attributes this floor to the observation that earned it. Read at the decision, it defines the optimal retrieval set. A pilot retrieval system, to be trained and improved with this signal, solves a memory task with reduced context.",
    "published": "2026-10-29T13:36:06Z",
    "updated": "2026-10-29T13:36:06Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.40030"
  },
  {
    "id": "2610.40029",
    "title": "Segment Anything Model Based Context Guided Mamba Unet for Medical Image Segmentation",
    "authors": [
      "Chenchen Wang"
    ],
    "abstract": "Medical image segmentation is crucial for clinical diagnosis and treatment planning, requiring both global contextual understanding and fine-grained structural precision. While the Segment Anything Model (SAM) demonstrates strong generalization capabilities, its direct application to medical images often lacks domain-specific adaptability. Meanwhile, State Space Models (SSMs)-based methods, such as Mamba, efficiently capture long-range dependencies but may struggle with preserving fine anatomical details. To address these challenges, we propose a segment anything model based context guided mamba unet, SAMBA-UNet, a novel framework that integrates SAM's context knowledge with Mamba's hierarchical feature learning to enhance both global representation and local detail refinement. Specifically, we introduce the Hierarchical Context Enhancement Module (HCEM), an attention-based fusion module that deeply incorporates the multi-level features of SAM and Mamba to improve detail perception and segmentation precision. Additionally, we employ LoRA and Adapter-based fine-tuning to adapt SAM to medical imaging tasks, further enhancing its domain-specific segmentation capability and robustness. We conducted a comprehensive study on several medical segmentation datasets, including Synapse, ISIC17, and ISIC18, evaluating our method across multiple metrics. Experimental results demonstrate that SAMBA-UNet achieves state-of-the-art performance, effectively balancing generalization, segmentation accuracy, and computational efficiency. Our code will be released upon acceptance.",
    "published": "2026-10-29T13:36:01Z",
    "updated": "2026-11-01T07:22:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.40029"
  },
  {
    "id": "2610.40023",
    "title": "HEMO: Harness Self-Evolution for Multi-Objective Combinatorial Optimization",
    "authors": [
      "Jianghan Zhu",
      "Cong Zhang",
      "Ni Zhang",
      "Yifan Yang",
      "Yew Soon Ong",
      "Zhiguang Cao"
    ],
    "abstract": "Automatic operator design (AOD) has increasingly adopted large language models (LLMs) to generate problem-specific search and variation operators for multi-objective combinatorial optimization (MOCO). Yet most methods evolve the operators while leaving the process that discovers them fixed. This limits adaptation as new Pareto trade-offs and operator interactions change where and how the search should proceed. We introduce HEMO, which makes the AOD harness itself a self-evolving optimization target. HEMO maintains a persistent harness state and updates one module at a time, revising the logic that determines which experience to retrieve, which operators to improve, which parents to select, and how to formulate the orchestration of search steps. Downstream solution quality and runtime guide these updates, while a discounted UCB scheduler directs adaptation toward promising modules as their utility changes. A persistent memory filesystem preserves candidate outcomes and diagnostic feedback across harness states, enabling successive states to build on accumulated optimization experience. Experiments across eight MOCO tasks and two structurally distinct evolutionary backbones demonstrate strong performance against conventional evolutionary, neural, and LLM-based AOD baselines, together with effective transfer to related tasks. HEMO extends automatic operator design beyond evolving individual operators to improving the search process that discovers them.",
    "published": "2026-10-29T13:32:00Z",
    "updated": "2026-10-29T13:32:00Z",
    "categories": [
      "cs.NE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.40023"
  },
  {
    "id": "2610.40018",
    "title": "DINOv2 for PET: A Pre-Training Domain Benchmark Across Classification, Segmentation, and Prognosis",
    "authors": [
      "Roxanne De Maeyer",
      "Yannick Brackenier",
      "Vicky De Ridder",
      "Simon DeKeyser",
      "Maarten Larmuseau",
      "Jef Vandemeulebroucke"
    ],
    "abstract": "DINO (self-DIstillation with NO labels) has become a stan- dard for self-supervised pre-training, producing features that generalise across datasets and downstream tasks. In medical imaging it has been adopted mainly for radiology (X-ray, CT and MRI), where even natural- image DINO features transfer well. In the literature, these features have been reported to transfer worse to functional imaging such as PET. Yet PET-specific DINO models have barely been introduced, and even less validated across multiple tasks and datasets. We present PET-DINOv2-2D, the first DINOv2 model pre-trained on 2D PET, and benchmark it against open-source encoders: the origi- nal DINOv2 (pre-trained on the LVD-142M natural-image dataset) and OmniRad (pre-trained on CT, MRI and ultrasound). Using the same lightweight heads for every backbone, and despite far less pre-training data, PET-DINOv2-2D matches or outperforms both on three down- stream PET tasks: normal/abnormal classification, lesion segmentation and recurrence-free survival prognosis. Its advantage is largest when few labels are available, suggesting that PET pre-training gives more transferable, label-efficient features. Code is made available at https://github.com/nuclivision/pet-dinov2-2d/.",
    "published": "2026-10-29T13:30:24Z",
    "updated": "2026-10-29T13:30:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.40018"
  },
  {
    "id": "2610.40007",
    "title": "Greenscapes: Optimized Vegetation Configurations in Cities",
    "authors": [
      "Patryk Bartkowiak",
      "Marcin Marlewski",
      "Paweł Wójcik",
      "Jae Joong Lee",
      "Dominik L. Michels",
      "Bedrich Benes",
      "Sören Pirk",
      "Wojciech Pałubicki"
    ],
    "abstract": "Vegetation plays a central role in cities, serving functional roles such as balancing shade and sky exposure, shaping the microclimate, carbon sequestration, and providing acoustic screening. Furthermore, aesthetic choices in landscape styles (formal, modernist, picturesque) are important for citizens' well-being and should be considered in the design of urban landscapes. In this paper, we present a novel method for placing vegetation, ranging from shrubs to large trees, in 3D urban scenes. Our method uses individual lots as input and employs a conditioned Vision-Language Model (VLM) to generate a top-down rendering of vegetation, placing large trees, small trees, and shrubs on lawn areas. This rendering is then converted into a 3D scene by detecting individual plants and selecting appropriate 3D assets. To refine the proposed configurations, we define an optimization loop that keeps the VLM-generated positions fixed after a deterministic feasibility repair and uses CMA-ES to optimize per-instance scale transformations along with discrete vegetation asset substitutions. To define the objective function for the optimization, we evaluate the generated 3D scenes with efficient surrogate models of shade and path-based acoustic exposure. Furthermore, we render in-scene views at each optimization step to compute view-dependent perceptual descriptors, enabling the generation of both aesthetic and functional vegetation layouts for urban scenes.",
    "published": "2026-10-29T13:24:24Z",
    "updated": "2026-10-29T13:24:24Z",
    "categories": [
      "cs.GR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.40007"
  },
  {
    "id": "2610.40006",
    "title": "Human--AI Interactions as First-Class Data: A Formal Interaction Model and Runtime for Explainable AI Collaboration",
    "authors": [
      "Michela Taufer",
      "Kin Ng",
      "Ian Lumsden",
      "Aashish Pandey",
      "Rajasi Gore",
      "Angelina Ju",
      "Sukanya Moudgalya",
      "Ewa Deelman",
      "Sai Swaminathan"
    ],
    "abstract": "AI assistants are increasingly embedded in computational notebooks, scientific workflows, software engineering tools, and learning systems, yet human-AI interactions are often treated as transient prompt-response exchanges rather than durable data products, hindering reproducibility, explainability, replay, behavioral analysis, and adaptive AI support. We argue that these interactions form a new data class requiring formal representation and introduce the Human-AI Interaction Description Language (HAIDL), a formal interaction model with a Backus-Naur Form-inspired concrete syntax. HAIDL encodes each interaction as a structured object capturing computational context, user request, prompt payload, AI response, feedback, problem context, provenance, and model metadata. We integrate this vision into HAIDL-X, a middleware for JupyterLab that instantiates HAIDL by capturing user-bot state, building contextualized prompts, interfacing with AI providers, collecting feedback, and storing interactions in a repository. We add a learning layer over HAIDL that maps interaction objects and notebook execution traces into reproducible measures of user behavior, including engagement, performance, help-seeking, error-oriented use, and learning personas. HAIDL-X provides a foundation for treating human-AI collaboration as structured, queryable, replayable, analyzable data.",
    "published": "2026-10-29T13:23:54Z",
    "updated": "2026-10-29T13:23:54Z",
    "categories": [
      "cs.AI",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.40006"
  },
  {
    "id": "2610.40005",
    "title": "Efficient Learning of Mechanism Designs and Compositionality",
    "authors": [
      "João Pedro Gandarela",
      "Thiago Rios",
      "Stefan Menzel",
      "André Freitas"
    ],
    "abstract": "Learning mechanism behaviour requires a representation of how connected parts jointly constrain motion. We study whether exposing reusable constraint subassemblies improves prediction from limited data. Assur-KB represents planar mechanisms through irreducible modules, boundary interfaces, and solve dependencies while retaining source geometry. Our theoretical results characterize transfer through module interfaces and establish physical limits arising from missing interface information and accumulated sensitivity. To test the representation claim directly, the experimental design compares matched mechanism-curve pairs across training budgets within the same multilayer-perceptron family. This controlled comparison establishes the utility of the complete representation in the evaluated learning setting. Assur-derived features provide a geometric-mean $1.8\\times$ advantage in sample efficiency over flattened adjacency and position inputs across budgets of 50-10,000 mechanisms. Separate experiments establish invariance under tested joint relabelings, higher valid-generation rates under dyadic composition, and a coarser structural index over 10.02 million mechanisms. In summary, the theory and experiments identify how physical constraint structure supports limited-data prediction and which interface conditions govern compositional reuse.",
    "published": "2026-10-29T13:23:44Z",
    "updated": "2026-10-29T13:23:44Z",
    "categories": [
      "cs.AI",
      "cs.CE"
    ],
    "url": "https://arxiv.org/abs/2610.40005"
  },
  {
    "id": "2610.40002",
    "title": "How Much Should a VLA Trust Its Reasoning? Step-Level Guidance as a Measured Action-Value Function",
    "authors": [
      "Dabin Seo",
      "Eunhyek Joa"
    ],
    "abstract": "Reasoning vision-language-action (VLA) policies write a reasoning trace and then decode the action from it. A wrong trace yields a wrong action, and even a correct-looking trace can mislead the plan. Existing remedies ask whether the reasoning is right. We ask how strongly it should steer. CoC-CFG applies classifier-free guidance between the policy's context and the same context without the reasoning span. One weight per Euler step attenuates or amplifies the reasoning, and w=1 recovers the original policy. We treat the choice of this weight as a Markov decision process whose action values are measured, not bootstrapped. With the expert frozen and the noise fixed, applying a weight for one step and finishing the plan under the current controller returns that weight's value exactly. Q-adaptive guidance fits these values with small critics and improves the controller conservatively. In the Alpasim driving simulator it outperforms every fixed weight and online RL (SAC, GRPO) in open loop, and in closed loop it passes 262 of 300 scenes, against 252 for the original policy. On held-out frames of the Waymo end-to-end driving benchmark, its first three stages outperform every fixed weight, four adaptive-guidance methods, SAC and GRPO. On the hidden test set, a frozen Alpamayo 1.5 with rule-based camera and vehicle conversions and Q-adaptive guidance sets a new state of the art among published methods: 8.135159 rater feedback score, against 8.079 for the best published method.",
    "published": "2026-10-29T13:20:35Z",
    "updated": "2026-10-29T13:20:35Z",
    "categories": [
      "cs.RO",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.40002"
  },
  {
    "id": "2610.39992",
    "title": "Accumulating Pruning Constraints: New Exact Polynomial-Space Algorithms for Max 2-SAT",
    "authors": [
      "Konstantin Kutzkov"
    ],
    "abstract": "We present deterministic polynomial-space algorithms that solve Max 2-SAT on $n$ variables exactly in time $\\Ostar(2^{(1-γ)n})$, for a fixed $γ>0$, on several classes of instances whose clause density may grow with $n$. Our main tool extends the classic DPLL branching algorithm. When the search gives a variable its less promising value, comparing the two values of the variable yields a pruning constraint that is satisfied by some optimal assignment. Accumulating these constraints along each branch prunes all but an exponentially small fraction of the assignments. The classes are formulas with many biased variables, semirandom 2-CNF formulas, and Max-Cut on regular expander graphs and on graphs generated by a stochastic block model. In a semirandom formula, the pairs of variables that may share a clause are arbitrary, and the clauses on these pairs are random. For semirandom formulas and block-model graphs, the algorithms are still exact on every input, and the time bound holds with high probability over the input. To our knowledge, these are the first polynomial-space algorithms with such a running time for nontrivial classes of dense Max 2-SAT instances. Beyond these classes, the pruning constraints can be added to any branching algorithm for Max 2-SAT, and we expect them to be of practical relevance for general formulas, in particular for sparse ones, where each constraint involves only a few variables.",
    "published": "2026-10-29T13:12:14Z",
    "updated": "2026-10-29T13:12:14Z",
    "categories": [
      "cs.DS",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.39992"
  },
  {
    "id": "2610.38497",
    "title": "Vision-Based Density Estimation for Adaptive Traffic Control",
    "authors": [
      "Mohammad Usaid",
      "Deepak Silaych",
      "Hrithik Mhatre",
      "Archak Mittal"
    ],
    "abstract": "Traffic congestion is becoming a critical challenge in rapidly growing urban centers, particularly in developing nations where rapid urbanization and inadequate transport infrastructure place increasing strain on transport networks. In highly heterogeneous and chaotic traffic flows, camera-based traffic-state estimation is limited by severe vehicle occlusion and overlap. In this paper, we propose a framework to optimize traffic flow directly from stochastic visual observations. The architecture is structurally decoupled into three primary components: (a) vehicle density estimation, (b) predictive dynamics modeling, and (c) policy optimization. The proposed methodology introduces a convolutional neural network (CNN) that learns the mapping from camera feeds to spatial density maps, utilizing an adaptive k-nearest-neighbor (k-NN) Gaussian kernel to handle varying congestion levels. This feeds into an ST3DNet predictive module for spatiotemporal forecasting, followed by a hierarchical Graph-Transformer Multi-Agent Reinforcement Learning (MARL) algorithm to optimize signal phases. The density estimation stage was evaluated on 40 annotated intersection images from Rambagh 4, Jaipur, India, with a reported five-fold validation mean absolute error (MAE) of $3.32 \\pm 0.95$ vehicles and a mean absolute percentage error (MAPE) of 14.5%. These results pertain to the perception component; empirical training and evaluation of the forecasting and control stages remain future work.",
    "published": "2026-10-28T09:15:54Z",
    "updated": "2026-10-28T09:15:54Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.38497"
  },
  {
    "id": "2610.38496",
    "title": "Accelerating Nonlinear MPC by Behavior Cloning with Separated Timescales: Application to Nuclear Reactor Load-Following",
    "authors": [
      "Perceval Beja-Battais",
      "Alain Grosset{ê}te",
      "Nicolas Vayatis"
    ],
    "abstract": "Behavior Cloning (BC) of expert controllers for multiscale dynamical systems is challenging: state variables evolving at widely separated timescales induce highly nonlinear couplings that a shared latent space may fail to adequately represent, degrading closed-loop generalization. We propose Structured Representation Learning for Behavior Cloning (SRLBC), an architecture designed to leverage the physical knowledge of multiscale systems in which slow state variables, fast (stiff) state variables, and predictable exogenous inputs evolve at different timescales. On 500 long-horizon roll-outs of a pressurized water reactor (PWR) load-following benchmark -a high-dimensional, stiff industrial system with challenging safety constraints -and across 20 training seeds, separated embeddings systematically outperform shared embedding baselines on cumulative cost, imitation accuracy and constraint satisfaction. The resulting standalone policies approach NMPC closed-loop performance at a computational cost 15 times lower on average. Since standalone policies still leave a few percent of trajectories infeasible, we embed the learned policies in a safety-augmented approximate NMPC framework, in which the optimizer is only called when the predicted input sequence is not certified as safe. This yields controllers still 6.8 times faster than the NMPC controller on average, with a feasibility (i.e., constraint satisfaction) of at least 99.8% for all architectures, SRLBC retaining the lowest closed-loop cost. Under distribution shift, standalone BC policies degrade sharply: SRLBC degrades the least, and once safety-augmented, it retains a feasibility above 98% with the lowest closed-loop cost. Beyond the quantitative results, Jacobian-based sensitivity analysis shows that the resulting controller relies on a sparse and less redundant set of latent features, each attributable to a single group of physical variables, and aligned with the physical timescale decomposition of the system.",
    "published": "2026-10-28T09:15:18Z",
    "updated": "2026-11-02T13:30:38Z",
    "categories": [
      "cs.AI",
      "cs.LG",
      "math.OC"
    ],
    "url": "https://arxiv.org/abs/2610.38496"
  },
  {
    "id": "2610.38494",
    "title": "Calibrating Track-Query Updates at Test Time for Multi-Object Tracking",
    "authors": [
      "Riku Inoue",
      "Shogo Sato",
      "Yu Mitsuzumi",
      "Kazuhiko Murasaki",
      "Tomoyasu Shimada",
      "Takashi Sano"
    ],
    "abstract": "Multi-Object Tracking (MOT) requires localizing multiple objects and maintaining their identities over time. Recent query-propagation trackers carry target-specific representations across frames and update them with current-frame image features, yet identity association remains difficult when visually similar targets overlap or cross. During such interactions, current-frame query updates may contain components directed toward nearby active tracks, which may affect identity association in later frames. To investigate this issue, we analyze track-query updates preceding identity switches (IDSWs), where the same target is assigned a different track ID. Our analysis shows that (i) propagated track-query representations change more abruptly before IDSWs, (ii) current-frame updates have larger positive projections along directions toward other active tracks, and (iii) bounding-box intersection over union (IoU) retrieves the counterpart track involved in a subsequent IDSW with high recall when that track remains active before the switch. Motivated by these findings, we propose Test-time Track-Query Calibration (TQC), a training-free and gradient-free method for query-propagation trackers. TQC calibrates the tracker output before propagation using a bounded correction estimated from update components directed toward nearby active tracks. It requires only track-query representations and bounding boxes available during inference, without retraining or architectural modification. Across nine DanceTrack and SportsMOT test settings, TQC improves HOTA and AssA in all settings and IDF1 in eight, with an average HOTA gain of +0.38 and limited inference overhead. Controlled variants on six validation settings further show that TQC's correction direction yields more consistent HOTA improvements than alternative directions with matched correction norms.",
    "published": "2026-10-28T09:07:44Z",
    "updated": "2026-10-28T09:07:44Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.38494"
  },
  {
    "id": "2610.38488",
    "title": "Generative AI as a Mediator in Creator Collaboration: Challenges, Design Opportunities, and Concerns",
    "authors": [
      "Hajun Kim",
      "Jini Kim",
      "Yunjae Josephine Choi"
    ],
    "abstract": "As Generative AI (GenAI) expands beyond individual workflows and becomes increasingly integrated intocollaborative creative work, its potential to address the fundamental challenge of building common groundamong creators with diverse expertise remains underexplored. Specifically, we lack empirical understandingof how GenAI can mediate collaboration asymmetries among heterogeneous creators. To address this gap,we conducted a multi-method study with narrative writers (N = 10) and visual designers (N = 10) in thecontext of game development. Our findings demonstrate that GenAI goes beyond individual assistance toserve as a collaborative mediator by aligning creative intent, sustaining shared understanding, and mitigatinginterpersonal friction among creators. At the same time, we highlight concerns that GenAI may reducecommunication among creators, undermine mutual trust, and reshape interpersonal dynamics and collaborativeprocesses. Based on these insights, we identify design opportunities for GenAI tools that nurture collaborativesynergy while preserving the creativity and values of human work.",
    "published": "2026-10-28T08:58:58Z",
    "updated": "2026-10-28T08:58:58Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.38488"
  },
  {
    "id": "2610.38482",
    "title": "Geometry-Aware Trajectory State Modeling for Few-Shot Action Recognition",
    "authors": [
      "Zhiqi Miao",
      "Marko Haralović",
      "Stanislav Levendeev",
      "Sarvesh Angadi",
      "Jannatul Ferdous",
      "Dan-Cristian Ploesteanu",
      "Jiapan Guo",
      "Estefanía Talavera"
    ],
    "abstract": "Few-shot action recognition (FSAR) requires representations that expose discriminative motion dynamics from only a few labeled videos. Recent trajectory-based methods leverage long-term point tracks for explicit temporal correspondence, but often treat trajectories as carriers of sampled visual features or summarize their motion with compact 2D displacement-based descriptors. We instead view an action as the ordered evolution of 2.5D trajectory states and their local geometric interactions. Based on this view, we introduce GeoTRAM, a geometry-aware trajectory state modeling framework for FSAR. GeoTRAM lifts sparse tracks into 2.5D trajectories, where StateMotion models ordered intra-trajectory state evolution and RelMotion captures state-conditioned local interactions through time-varying relative geometry and motion. Quality-filtered spectral sampling provides more reliable trajectory initialization; complementary semantic, motion, and depth cues are separately refined and preserved for joint spatio-temporal modeling; action-guided reweighting and top-$ρ$ trajectory selection support complementary frame- and trajectory-level matching. Experiments on five FSAR benchmarks demonstrate strong gains on the motion-centric Something-Something benchmarks while maintaining competitive performance on more appearance-driven benchmarks and a favorable accuracy--efficiency trade-off.",
    "published": "2026-10-28T08:56:33Z",
    "updated": "2026-10-28T08:56:33Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.38482"
  },
  {
    "id": "2610.38467",
    "title": "StreamStudio: Exploring Video Authoring with Streaming Autoregressive Generation",
    "authors": [
      "Boyu Li",
      "Zhe Lin",
      "Eli Shechtman",
      "Ding Li",
      "Hongbo Fu",
      "Yuqian Zhou"
    ],
    "abstract": "We present StreamStudio, a prototype system that explores a new authoring paradigm for streaming video generation. Instead of entering a prompt and waiting for a complete video before making changes, creators can interact with the generation as it unfolds: steering what comes next, returning to earlier moments, and exploring different continuations. In this way, StreamStudio shifts creative control from post-generation revision to continuous interaction with the generative process. Our contribution centers on this authoring paradigm and the interaction mechanisms that make streaming generation directly manipulable. StreamStudio is designed as a plug-and-play interface that can work with compatible generation and editing models, allowing its interaction model to evolve alongside advances in underlying video models. As streaming models become faster and easier to control in the future, such an interface may support more flexible and controllable video creation, including richer edits and multimodal interventions during generation.",
    "published": "2026-10-28T08:43:34Z",
    "updated": "2026-10-28T08:43:34Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.38467"
  },
  {
    "id": "2610.38462",
    "title": "Automatic Iconographic Annotation of Medieval Illuminations: Comparing Generative Vision-Language Models and Supervised Discriminative Classifiers",
    "authors": [
      "Vincent Jolivet",
      "Lucas Terriel",
      "Chahan Vidal-Gor{è}ne"
    ],
    "abstract": "The large-scale digitisation of medieval manuscripts creates a growing need for automated iconographic indexing. We evaluate two complementary paradigms for this task on 9,735 full-folio images annotated with 2,333 TIMEL concepts: generative Vision-Language Models (VLM) and supervised discriminative classifiers (SDC). The VLM experiments evaluate fine-tuning, structured JSON decoding, taxonomybased candidates generation, and deterministic reranking. The discriminative experiments evaluate flat, hierarchy-aware, and patch-attention heads over a frozen DINOv3 encoder. Our results highlight key functional differences: ML-Decoder (SDC) achieves the strongest overall retrieval performance (precision@1 of 0.696, MRR of 0.806), with loss calibration (Asymmetric Loss) serving as the primary performance lever. While SDCs provide superior precision and reliability within a closed vocabulary, VLMs offer strong semantic generalization and broad taxonomic coverage, particularly through structured JSON targets and verify-calibrate reranking (hierarchical F1 of 0.559). Furthermore, model behavior strongly depends on concept abstraction: SDCs excel at perceptually grounded descriptive concepts, whereas VLMs provide useful hypotheses for complex interpretative scenes. Finally, we find that enforcing explicit hierarchy within model architectures limits coverage compared to spatial feature aggregation. Overall, rather than competing approaches, SDCs and VLMs emerge as complementary components for future hybrid indexing systems combining structured retrieval with exploratory annotation assistance. As a methodological contribution, we define the soft F1 metric to provide a taxonomy-aware evaluation that credits semantically close predictions based on lowest common ancestors.",
    "published": "2026-10-28T08:38:13Z",
    "updated": "2026-10-28T08:38:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.38462"
  },
  {
    "id": "2610.38458",
    "title": "Tracekit Box: Running AI Agents in Micro-VMs Where Every Way Out Is Decided and Signed",
    "authors": [
      "Bravish Ghosh"
    ],
    "abstract": "AI agents now install packages, call model APIs with their operators' keys and change code in repositories that deploy to production. The network, credentials and write access they need are also how they can leak data, steal a key or change a system nobody approved. Sandboxes contain an agent but leave little evidence of what crossed their boundary; tracing records what happened but contains nothing. We present Tracekit Box, an open-source system (MIT, v0) that does both. Each job runs in its own Firecracker micro-VM with no network card. The only ways out are doors on the host, served over vsock: commands, outbound connections, secrets, model calls and the workspace patch. At every door a Tracekit signer the agent cannot reach decides what passes and signs it into one run per box. Names are resolved on the host; private and cloud-metadata addresses are always refused; secrets never enter the VM, which sees placeholders the host proxy swaps for real values only in one header for bound hosts; and changes come back as a patch applied file by file after the signer decides each file. Box fails closed, and each job ends as a .tkb bundle anyone can verify offline. All 13 end-to-end checks pass on a real KVM runner (the test that runs them takes 28.5 s, including image pull and boot); 15 fuzz targets on the trust boundary produced nine findings, all fixed; and the demo run's 102 signed records verify. Box does not yet run Firecracker's jailer, needs a co-located signer, and records processes inside the VM only where they cross a door.",
    "published": "2026-10-28T08:36:22Z",
    "updated": "2026-10-28T08:36:22Z",
    "categories": [
      "cs.CE",
      "cs.AI",
      "cs.CR",
      "cs.OS"
    ],
    "url": "https://arxiv.org/abs/2610.38458"
  },
  {
    "id": "2610.38448",
    "title": "Benchmarking decision models against generative large language models on medical multiple-choice questions",
    "authors": [
      "Oscar Freyer",
      "Daniel Glauert",
      "Moritz Hofmann",
      "Max Ostermann",
      "Stephen Gilbert",
      "Jakob Nikolas Kather"
    ],
    "abstract": "Medical workflows often require selecting among predefined options. We compared 13 decision models with 15 generative large language model configurations, including different reasoning settings, using 1,273 four-option MedQA questions under text-only conditions. Accuracy ranged from 67.71% to 89.08% for decision models and from 78.32% to 96.86% for generative configurations. Among the tested configurations, Mercury Decide had the lowest mean final-attempt cost (USD 0.0069 per 1,000 questions), while Clef Omni had the shortest median request duration (0.291 seconds). Decision-model probabilities distinguished correct from incorrect answers, but error rates among answers assigned probabilities of at least 0.90 ranged from 1.71% to 12.77%. Answer agreement across three runs ranged from 92.30% to 100%, while probability repeatability varied. Decision models offered resource advantages alongside lower peak accuracy; selecting models for medical workflows requires considering probability quality and repeatability together with accuracy and the resources needed to detect and correct errors.",
    "published": "2026-10-28T08:25:35Z",
    "updated": "2026-10-28T08:25:35Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.38448"
  },
  {
    "id": "2610.38445",
    "title": "DES-JEPA: Learning a Shared Vocabulary for High-Dimensional Discrete Event Sequences",
    "authors": [
      "Hugo Math",
      "Maximilian Forstenhäusler",
      "Christos Anagnostopoulos"
    ],
    "abstract": "Temporal foundation models such as Chronos and TimesFM generalize across domains through a shared numerical observation space. In contrast, discrete event sequences (DESs), including operational event logs or patient clinical-event trajectories, have domain-specific event vocabularies whose labels lack a consistent correspondence across domains. Beyond this lack of consistency, the number of distinct events in real-world settings is high enough to challenge both classical temporal point process modeling and current in-context foundation inference models such as FIM-PP. Critically, current foundation models for DESs are limited to a small, fixed number of event types, restricting their applicability to realistic, high-dimensional event streams. To address this, we propose two complementary modules: (i) DES-JEPA, a joint-embedding predictive architecture that learns a shared discrete vocabulary from synthetic stochastic processes with unaligned event vocabularies; and (ii) DES-PFN, a discrete event sequence prior-fitted network that reuses the learned vocabulary for in-context next-event prediction. Without task-specific fine-tuning, this framework achieves competitive zero-shot performance on eight unseen real-world datasets and scales up to 700 distinct event types.",
    "published": "2026-10-28T08:24:09Z",
    "updated": "2026-10-28T08:24:09Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.38445"
  },
  {
    "id": "2610.38439",
    "title": "Predict the Reward, Not the World: World Reward Models for ML Agents",
    "authors": [
      "Yuxiao Lee",
      "Zherui Yang",
      "Fan Liu",
      "Hao Liu"
    ],
    "abstract": "Search-based machine-learning (ML) agents improve a solution by writing candidate programs, executing them, and keeping the best. Execution gives the search reliable feedback, but a single run can take hours, and most runs end in programs the agent discards. Recent agents try to save these runs by letting a large language model act as a world model that predicts how each program would perform. However, a wrong prediction feeds the search false information. We argue that an agent does not need to predict the outcome of execution, only the decision that execution would support. We propose World Reward Models (WRMs), which learn from real execution results to choose directly which candidate will perform better, without predicting any intermediate outcome. We prove that a selector which predicts execution from the same inputs cannot outperform the best direct selector, that predicted outcomes add an error which can make a likelihood-trained world model prefer the worse program on every instance, and that cross-entropy on executed winners drives a WRM toward the optimum. Our WRM, ForeCritic, adapts a 9B typed decision model to 5k executed program pairs. On 12,438 held-out pairs from 26 ML tasks, it picks the better program 79.4% of the time, while general-purpose LLM judges reach 53--62%, and its probabilities are calibrated. Inside AIDE, ML-Master, and ForeAgent, it cuts mean task time by 4.4--7.5 times while keeping their mean scores within 0.01 or raising them.",
    "published": "2026-10-28T08:20:06Z",
    "updated": "2026-10-28T08:20:06Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.38439"
  },
  {
    "id": "2610.38438",
    "title": "RoleFUZZER: User-Behaviour Fuzzing for Role-Specification Adherence in Large Language Models",
    "authors": [
      "Kshitish Ghate",
      "Michael Saxon",
      "Tadayoshi Kohno",
      "Aylin Caliskan"
    ],
    "abstract": "Large language models (LLMs) are often conditioned into specific roles such as tutors, interviewers, or agents acting for an organisation, through system prompts that specify how they should behave. The extent to which they can actually adhere to these role specifications under multi-turn interactions with realistic and potentially problematic users is understudied. To address this, we propose user behaviour fuzzing, a guided search over plausible user behaviours that can lead a model to violate its role specification, and introduce RoleFUZZER, a framework that adapts coverage-guided fuzzing from software testing to operationalise the search. RoleFUZZER constructs scenarios guided by a user-behaviour coverage grid that crosses a grounded taxonomy of user interaction types and the role specification of the model under test i.e. what is under pressure. With RoleFUZZER, we evaluate LLMs across five role specifications, including tutor, financial advisor, AI interviewer, antagonistic roleplay character, and web agent under organisational policies. Across simulated and validated conversations in 15 campaigns, the framework reaches >= 89% coverage of the 64-cell behaviour grid for every model and role tested, and surfaces specification-grounded failure patterns. At an equal budget of conversations, removing the RoleFUZZER grid and asking an LLM to generate specification targeting users free-form lowers coverage to 39-69% with fewer kinds of violations. The same specification can also fail in opposite directions. For e.g., on the antagonist, open-weight target models override the player's safety signals, while Claude Haiku 4.5 breaks character instead. RoleFUZZER offers a tractable way to uncover vulnerabilities in LLMs across role specifications by testing diverse user behaviours that are likely to violate them.",
    "published": "2026-10-28T08:19:36Z",
    "updated": "2026-10-28T08:19:36Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.38438"
  },
  {
    "id": "2610.37459",
    "title": "M4Bench: Evaluating Procedural Specification for Clinical EHR Derivation Agents",
    "authors": [
      "Hannes Ill",
      "Rafi Al Attrach",
      "Rajna Fani",
      "Ahram Han",
      "Ryohei Yamamoto",
      "Marlene Louisa Moerig",
      "Dukyong Yoon",
      "Leo Anthony Celi"
    ],
    "abstract": "Clinical research over electronic health records depends on derived variables whose definitions sit outside the schema, in item codes, time windows, missingness rules, and output-grain choices that change cohorts and downstream conclusions. We introduce M4Bench, 28 clinical derivation tasks across 15 task families on MIMIC-IV and eICU, to test whether AI coding agents can reproduce such derivations and how clinician-reviewed agent skills change their results. Its controls decompose the value of skills into specification completeness, delivery format, and schema familiarity. In a Docker-isolated Codex campaign (GPT 5.4 Mini and GPT 5.5), skills raise reward by 0.136 over the no-skill baseline, with 26 of 28 tasks improving. Specification completeness accounts for most of this gain: on an eight-task control subset, an operational spec alone raises reward by 0.162, and skills add only 0.024 on top, indistinguishable from zero. On a ten-task subset, decoy skills score like no skill and raw reference SQL nearly matches targeted skills, arguing against generic context or the skill format as the explanation. Schema obfuscation and restructuring preserve 86% and 70% of the skill gain (GPT 5.4 Mini, 26 MIMIC-IV tasks), a descriptive robustness check rather than a bound on memorization. A descriptive Claude Code replication on all 28 tasks (Opus 4.7 and Sonnet 4.6, 560 runs) is directionally consistent (+0.120, 21 of 28 tasks improving). These gains are partial agreement with the reference, not completed tasks: only 25 of 280 with-skill and 13 of 280 no-skill Codex runs pass every strict check, and skills barely change which rows agents return (key F1 +0.003). Skills are released as a versioned, clinician-reviewable markdown delivery format, with a family-level reference-validity audit. M4Bench releases tasks, skills, evaluation code, and sanitized per-run evidence as an open-source benchmark.",
    "published": "2026-10-27T15:59:13Z",
    "updated": "2026-10-27T15:59:13Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.37459"
  },
  {
    "id": "2610.37448",
    "title": "Test-Time Communication in Trading Agent Swarms",
    "authors": [
      "Avid Fayaz",
      "Harry Zhang",
      "Håvard Alstadheim",
      "Erik Nordlöf",
      "Vilhelm Karlin",
      "André Silva"
    ],
    "abstract": "Communication between agents has mostly been studied on tasks with a shared objective and fast, clear feedback. Trading has neither: each agent manages its own account, with decisions being scored by markets late and noisily. A trading swarm is thus a population of independent decision-makers rather than a team, for which convergence is a risk and not the goal. We ran 200 agents from four model families in groups of ten under five communication regimes, from isolation to message boards and shared notes, over seven US trading days (1 to 9 October 2026), logging everything each agent read before every decision. In two of the four families, communicating groups came to hold far more of the same stocks than the isolated group. A group's return was largely the return on what its members held in common. Seeing a post from a groupmate made an agent 7 percentage points more likely to reuse an eight-word phrase from it. Agents that started too close together to see each other's posts shared such a phrase in 14% of cases, the rate that common inputs produce. Seeing the post did not detectably change that morning's trades. Case studies traced the adoption of positions and decision rules over subsequent days, and communicating groups sold in step more often than isolated ones. Because isolated groups also converged on the same stocks, sometimes completely, assessments of herding need to measure excess convergence relative to a no-peer baseline.",
    "published": "2026-10-27T15:54:05Z",
    "updated": "2026-10-27T15:54:05Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.37448"
  },
  {
    "id": "2610.37446",
    "title": "PolyGandr: Steering Generative Models via Spatial Navigation through Latent Space",
    "authors": [
      "Mingwei S. G. Li",
      "Susie S. Y. Li",
      "Isabel Moreira de Oliveira",
      "Ryan P. Adams",
      "Remco Chang"
    ],
    "abstract": "Generative models support content creation across text, images, videos, and design disciplines, yet their interfaces rely primarily on natural language. While effective for specifying high-level intent, language can be inefficient and imprecise for fine-grained control, iterative refinement, and open-ended exploration. We present PolyGandr, a visual interface for exploring relationships between latent representations and generated outputs, complementing natural-language model steering. PolyGandr formulates generative control as high-dimensional navigation, enabling users to define starting points, steering directions, and step sizes through a unified map-and-mixing-palette interface. Combining global exploration with local refinement supports both broad design-space navigation and fine-grained output manipulation without repeatedly translating visual intent into prompts. We evaluate PolyGandr across three use cases: StyleGAN2 face generation, Stable Diffusion chair design, and rotational kirigami engineering. A formative study indicates that PolyGandr complements existing workflows by supporting real-time editing while simultaneously providing an overview and means to explore the broader design space.",
    "published": "2026-10-27T15:52:23Z",
    "updated": "2026-10-27T15:52:23Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.37446"
  },
  {
    "id": "2610.37437",
    "title": "Representing the Unseen: Rethinking Visual Imagination for Spatial Reasoning",
    "authors": [
      "Zengqi Zhao",
      "Zun Wang",
      "Shoubin Yu",
      "Mohit Bansal",
      "Yue Zhang"
    ],
    "abstract": "Visual world models increasingly support spatial reasoning by generating RGB views of unobserved states. However, RGB has become the default interface largely because it is well suited for visual generation, rather than necessarily being the most effective representation for downstream reasoning. Different spatial questions may benefit from different representations of the same imagined state: top-down geometry can facilitate global distance comparisons, while panoramic views provide broader context for reasoning about open space. To isolate the role of representation in spatial imagination, we introduce ImagiRep, a simulator-grounded benchmark of 922 questions spanning seven question types across two settings, Viewpoint Imagination and Cross-view Integration, providing oracle RGB and six alternative representations (e.g., depth, panoramic views, and top-down geometry) of the same unobserved state. This controlled comparison reveals that even accurate imagined RGB does not guarantee accurate spatial reasoning, and different questions benefit from different representations. Similar trends hold for representations derived from world-model-estimated states. Notably, estimated RGB alone can mislead spatial reasoning, while alternative representations retain complementary benefits. Building on these findings, we introduce GEARS, a lightweight test-time strategy for adaptive representation selection, outperforming existing spatial imagination methods and showing that reasoning about unseen states requires more than generating RGB views.",
    "published": "2026-10-27T15:48:09Z",
    "updated": "2026-10-27T15:48:09Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.37437"
  },
  {
    "id": "2610.37434",
    "title": "FeatureArc: Benchmarking Coding Agents on Evolving Features",
    "authors": [
      "Yunlong Wang",
      "Alyssa Wu",
      "Cuiyun Gao",
      "Jia Feng",
      "Songyuanyi Lu",
      "Zhichao Hu"
    ],
    "abstract": "A software feature usually evolves over time: developers extend its first version as new use cases and requirements arrive, and each extension builds on code written earlier. Most feature benchmarks evaluate a single request on a fixed codebase. Feature evolution requires evaluating successive extensions on an agent's own earlier code and checking whether the feature remains correct. We introduce FeatureArc to evaluate coding agents on evolving features, together with a pipeline that constructs its tasks from repository histories. The benchmark combines dependencies between successive stages of the same feature, explicit requirements and interface contracts, and executable checks across four programming languages. The pipeline validates fail-to-pass (F2P) tests for new behavior and pass-to-pass (P2P) tests for existing behavior on the reference code before and after each stage. We evaluated 10 coding agents on 73 manually reviewed tasks of 2 to 10 stages. Each agent works in one persistent session and workspace without external test feedback or rollback. The evaluation reveals a gap between first-stage and whole-feature success: pooled success falls from 62.7% at the first stage to 28.5% when the whole feature is tested on the final code. Trajectory analysis identifies inherited defects as a common failure mechanism, present in 72.9% of failed later stages. These earlier errors often remain undetected: in stages following a failure, agents leave the earlier error unnoticed about 95% of the time, and their self-tests rarely revisit earlier stages. Evolving a feature autonomously, without human checks between stages, therefore remains a substantial challenge for current coding agents. At Tencent, the pipeline extends internal evaluations to this setting and guides the development of Hunyuan, Tencent's family of large language models.",
    "published": "2026-10-27T15:45:50Z",
    "updated": "2026-10-27T15:45:50Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.37434"
  },
  {
    "id": "2610.37431",
    "title": "Segmentation Confidence for Arbitrary CNNs",
    "authors": [
      "Baris Oguz",
      "Xing Yao",
      "Claudia Tawil",
      "Alison Pouch",
      "Brett Byram",
      "Gabriel Arenas",
      "Nadav Schwartz",
      "Ipek Oguz"
    ],
    "abstract": "Convolutional neural networks (CNN) are widely used for medical image segmentation. However, they lack an inherent measure of confidence. Existing methods for estimating prediction uncertainty often require a custom network architecture and/or dedicated training setups and need to be trained from scratch. In addition, the deduction of a single confidence score per input from the uncertainty maps is not always straightforward. In this study, we explore voxel-based uncertainty estimation methods that can be added to existing segmentation pipelines without training from scratch. We also propose a novel method to estimate a single confidence score from the uncertainty maps. Our evaluations on different ROIs and modalities suggest that our confidence score can predict segmentation performance in unseen data.",
    "published": "2026-10-27T15:42:29Z",
    "updated": "2026-10-27T15:42:29Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.37431"
  },
  {
    "id": "2610.37430",
    "title": "When Visual Evidence Is Insufficient: How Instructions, Post-Training, and Internal Activations Shape Refusal in Multimodal Language Models",
    "authors": [
      "Ananth K Suresh",
      "Aveen Dayal",
      "Gouthaman KV",
      "Aditya Pola",
      "Vineeth N Balasubramanian"
    ],
    "abstract": "For reliable deployment, multimodal large language models (MLLMs) should recognize when an image provides insufficient evidence to answer a question and withhold unsupported answers. Yet refusal alone is not necessarily evidence of such recognition: models may refuse because of unrelated safety constraints or without identifying the missing evidence. We study how refusal on visually unanswerable questions is shaped by three sources of control: inference-time instructions, post-training, and internal activation interventions. Across three MLLMs on the MoHoBench benchmark, we systematically manipulate the meaning and placement of refusal instructions, compare supervised and preference-based post-training, and intervene on a refusal-related activation direction derived from naturally answered and refused examples. We find that refusal is highly sensitive to both the meaning and placement of instructions, with model-specific changes at the sample level that are obscured by aggregate refusal rates. Evidence-aware and general refusal instructions have stronger effects than an intentionally mismatched safety instruction. Post-training produces larger increases in refusal, but can also induce responses that combine refusal language with attempted answers. In contrast, activation intervention produces smaller yet transferable changes across prompt conditions, without evidence of indiscriminate refusal on tested visually answerable samples. These findings show that refusal is jointly shaped by external instructions, post-training, and internal representations, highlighting the need to disentangle evidence recognition from a model's learned propensity to refuse.",
    "published": "2026-10-27T15:42:20Z",
    "updated": "2026-10-27T15:42:20Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.37430"
  },
  {
    "id": "2610.37429",
    "title": "Bayes-Adaptive MDPs for Rollout Allocation to Enhance GRPO Training",
    "authors": [
      "Faeze Moradi Kalarde",
      "Armin Toroghi",
      "Nam Ho Koh",
      "Doo Hwan Hwang",
      "Seungjin Kim",
      "Kee-Eung Kim",
      "Scott Sanner"
    ],
    "abstract": "Group Relative Policy Optimization (GRPO) has demonstrated strong performance in LLM post-training. However, it allocates a uniform rollout budget to every training question, ignoring variations in question difficulty. As a result, highly difficult questions may receive too few rollouts to generate informative positive reward signals, limiting their contribution to training, while moderately difficult questions often receive more rollouts than necessary. In this work, we formulate the problem of difficulty-aware rollout budget allocation to maximize training utility under the same total rollout budget as standard GRPO. We propose AdaRoll-GRPO, which reformulates rollout allocation as a sequential decision-making problem and leverages a Bayes-adaptive Markov decision process (MDP) to learn an adaptive allocation policy. The learned policy is computed offline and applied during GRPO training without introducing additional online optimization overhead. Extensive experiments on multiple reasoning datasets and LLM architectures demonstrate that AdaRoll-GRPO consistently improves GRPO training performance under a fixed rollout budget, highlighting the effectiveness of adaptive rollout allocation for GRPO in LLM post-training.",
    "published": "2026-10-27T15:41:57Z",
    "updated": "2026-10-27T15:41:57Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.37429"
  },
  {
    "id": "2610.37427",
    "title": "Time-Dynamic Semantic-Activity Entanglement: Quantifying Communication-Based Synchrony in Collaborative VR",
    "authors": [
      "Pooja Pol",
      "Jianing Zhang",
      "Qing Huang"
    ],
    "abstract": "Collaborative virtual reality (VR) produces rich multimodal traces of team behavior, yet practical methods for characterizing time-varying team communication remain limited. We present time-dynamic semantic-activity entanglement (TSAE), inspired by the entanglement concept introduced by Gloor et al. (2022), to describe communication-based team synchronization within discrete time windows. TSAE is modeled by combining relative speaking activity with contextual semantic alignment for participant pairs, which is aggregated into participant-level trajectories and summarized through the Gini coefficient to understand the distribution of team-level communication synchrony. This approach is employed with German-language transcripts from fifteen collaborative VR gameplay sessions. Transcript utterances are represented using a long-context embedding model with a late-chunking strategy and analyzed within fixed game-time windows. A representative session illustrates shifting dyadic alignment and low-to-moderate participant contributions, with sporadic periods of high entanglement. Across fifteen game sessions, the metrics indicate complementary insights, offering a qualitative contrast to the core-periphery pattern reported in the foundational work. Hence, these descriptive findings support the study of communication as a dynamic process and provide a mathematically grounded approach to analyze its evolving distribution in shared interactive VR spaces.",
    "published": "2026-10-27T15:40:51Z",
    "updated": "2026-10-27T15:40:51Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.37427"
  },
  {
    "id": "2610.37422",
    "title": "Beyond the Readout: A Latent Numerical Frame Shared Across Modality and Operation",
    "authors": [
      "Oriol Juan Sabater",
      "Alex Ferrando de las Morenas",
      "Pau Rodríguez",
      "Xavier Suau"
    ],
    "abstract": "When a multimodal model computes 17+35 from text or 91-39 from a rendered image, it produces the same answer, 52. Does it use one internal concept of number for both, or separate machinery for each path? Similarity metrics such as RSA or CKA cannot settle this question. They give the same score to identical and to rotated directions, and two representations can look alike only because both prepare the same output digits. We therefore use causal interventions. For four conditions (text or image, addition or subtraction), we learn a small subspace of Gemma4-12B-it's residual stream in which swapping coordinates swaps the model's answer. The subspaces answer three questions. First, do the conditions write numbers along the same directions? They do not. Reusing a subspace from text in an image on the same operation recovers only 53.2% of its causal effect. A single rotation and rescaling maps one subspace onto the other and raises recovery to 91.4%, so the conditions share one geometry expressed in different coordinates. Second, does this shared geometry only reflect the digit the model is about to print? To test this, we split each subspace into 9 directions that the output layer reads to choose the next digit and 13 directions that it cannot see. The 13 hidden directions still carry the number, yet changing them barely alters the digit being written. Third, what are these hidden directions for? A model must emit a multi-digit answer one digit at a time, so it can compute the full result early and keep it in reserve. When two numbers share their first digit, swapping the number in the hidden directions leaves the digit being written intact and redirects the next digit in 77.6% of cases. The model thus forms an abstract numerical concept upstream and unfolds it across time: multimodal representations share meaning through relational geometry across distinct coordinate frames.",
    "published": "2026-10-27T15:36:46Z",
    "updated": "2026-10-27T15:36:46Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.37422"
  },
  {
    "id": "2610.37738",
    "title": "Poisoned Skills: Propagating Jailbreaks Through Agent Markdown Files",
    "authors": [
      "Kashyap R Manjusha",
      "Murali Emani"
    ],
    "abstract": "Modern agent frameworks allow users to provide Markdown files containing system prompts, tool descriptions, and skill definitions (e.g., SKILL.md), which are incorporated into the agent's context during initialization. In this work, we investigate whether this configuration mechanism can also serve as an injection channel: can a jailbreak embedded in a Markdown skill file propagate through an agent and induce prohibited behavior? To answer this question, we construct a LangChain-based question-answering agent whose system prompt is assembled from a user-provided Markdown file. We embed a jailbreak combining persona manipulation with a GPTFUZZER-based attack and evaluate its effectiveness across seven contemporary open-weight models using 270 forbidden questions spanning nine harm categories. Under a benign system prompt, the models exhibit near-complete refusal behavior, with a mean attack success rate (ASR) of just 0.5%. In contrast, the injected skill file raises the mean ASR to 45%, reaching 68.9% for individual models. We further evaluate two payload obfuscation strategies: an invisible zero-width character-based stealth payload and a phonetic payload based on grapheme-to-phoneme transformations. Neither outperforms the plain-text injection; notably, the phonetic variant reduces mean ASR to 30%. These findings identify Markdown skill files as an underexplored attack surface for AI agents and suggest that vulnerability to configuration-based jailbreaks depends more strongly on the underlying model than on the specific payload obfuscation technique.",
    "published": "2026-10-27T15:29:41Z",
    "updated": "2026-10-27T15:29:41Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.37738"
  },
  {
    "id": "2610.37407",
    "title": "Constraining the Commit Boundary: A DIO/ODI-Informed Authorization Guardrail for Agentic Entity Resolution",
    "authors": [
      "Daniel Beránek"
    ],
    "abstract": "Agentic Entity Resolution (ER) systems iteratively plan actions, retrieve evidence, revise hypotheses, and propose graph mutations. An erroneous identity hypothesis may condition later retrieval and produce apparent confirmation. This paper proposes a Digital Identity Optimization (DIO) and Ontology of Digital Identity (ODI)-informed authorization boundary between evidence available for agent reasoning and evidence eligible to authorize persistent identity-changing mutations. A domain-governed constraint-binding function maps selected reconstruction-failure distinctions to explicit identity-preserving constraints. An abstract two-phase supervisor permits a commit only when claim-specific authorization-eligible evidence supports every required proposition, relevant conflicts are resolved, the operation remains within its authorized scope, and relevant state and policy versions remain valid. Admission as UNVERIFIED does not confer authorization eligibility. Separate claim-specific promotion governs evidentiary use; insufficient support or unresolved material conflict leads to deferral. The contribution is a specification connecting diagnostic-to-constraint mapping, evidence promotion, proposition coverage, conflict handling, scope binding, and commit-time version integrity. A proposed evaluation protocol is designed to assess the mapping's incremental value beyond generic authorization and conventional identifier rules. This is a conceptual architecture without implementation or empirical validation, not a theorem of semantic correctness. Its property depends on domain-policy adequacy, evidence promotion, and enforcement. It does not prevent erroneous hypotheses or hypothesis-conditioned retrieval; dependency-aware evidence flow remains future research.",
    "published": "2026-10-27T15:22:00Z",
    "updated": "2026-10-27T15:22:00Z",
    "categories": [
      "cs.AI",
      "cs.CR",
      "cs.DB"
    ],
    "url": "https://arxiv.org/abs/2610.37407"
  },
  {
    "id": "2610.34865",
    "title": "ECHOES: An Adaptive LLM-Powered AR Glasses Docent for Evidence-Grounded Urban Heritage Interpretation",
    "authors": [
      "Bang Xiao",
      "Baosheng Jin",
      "Jinhan Niu",
      "Xingchen Zhang",
      "Hua Shen"
    ],
    "abstract": "Urban heritage tours are often delivered through fixed scripts, leaving limited room for visitors' situated questions, language preferences, or requests for evidence. We present ECHOES, an adaptive LLM-powered AR glasses docent for evidence-grounded interpretation of historical buildings. Specifically, the agent adapts along three dimensions: it modifies response structure according to the type of visitor question (identification, architectural detail, evidence-seeking, or route inquiry); it accumulates session-level interest signals from repeated questions and expressed curiosity to shape later explanations; and it tracks language preference and retrieval context across turns to maintain conversational continuity. The core of ECHOES is an LLM agent initialized as a source-aware urban heritage docent that realizes this adaptation through dialogue and preference context maintained across the session. Around this agent, ECHOES integrates visual site grounding, a self-built historical knowledge base supporting retrieval-augmented generation, and concise multilingual AR output designed for glanceable use. Through a working prototype centered on Shanghai's East Nanjing Road and the Bund, we demonstrate how an adaptive LLM-powered AR docent can transform historical tours from scripted narration into situated, question-responsive, and source-aware conversations.",
    "published": "2026-10-26T05:27:57Z",
    "updated": "2026-10-26T05:27:57Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.34865"
  }
];
