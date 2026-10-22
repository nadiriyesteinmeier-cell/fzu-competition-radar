window.PAPER_DATA_UPDATED_AT = "2026-10-22";
window.PAPER_ITEMS = [
  {
    "id": "2610.30129",
    "title": "Rethinking Video Autoencoders for Interactive World Models",
    "authors": [
      "Adrien Ramanana Rahary",
      "Yutong Bai",
      "Nicolas Dufour",
      "Patrick Pérez",
      "David Picard"
    ],
    "abstract": "Video world models predict future frames from past frames and actions. They serve as simulators in which agents train, plan or are evaluated, and that humans can control interactively. They generate in the latent space of a video autoencoder, whose compression sets their cost per frame and how long each action waits to take effect. Yet world models often reuse the autoencoders of text-to-video generators, built for offline generation with no agent waiting and, without their training data and code, not retrainable at another compression. We therefore ask how, where and how much a world model should compress. We build CADRE, an open family of causal diffusion representation autoencoders spanning multiple spatio-temporal compressions. Its members differ only in a small bottleneck on frozen features and share a diffusion decoder self-distilled to one or a few steps. We train the same world model on each autoencoder in two domains, manipulation and navigation, with two environments each. CADRE forms most of the latency-quality frontier, especially with a moving camera. Our study also leads to four findings. At strong compression, a diffusion decoder is sharper than perceptual regression. In robot manipulation, temporal compression is more effective in the autoencoder than in the world model. Manipulation and navigation call for opposite compressions: temporal compression costs little when the camera is still, and spatial compression when it moves. Surprisingly, with a still camera, coarser spatial tokens hurt motion far more than image quality. Code, models and a live demo are at https://kyutai.org/blog/2026-10-21-cadre",
    "published": "2026-10-21T17:58:11Z",
    "updated": "2026-10-21T17:58:11Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.30129"
  },
  {
    "id": "2610.30128",
    "title": "Think Harder Where It Matters: Item-Level Adaptive Recursion for Sequential Recommendation",
    "authors": [
      "Zhanshuo Cao",
      "Jiakai Tang",
      "Yuqi Zhou",
      "Sunhao Dai",
      "Jun Xu"
    ],
    "abstract": "Existing sequential recommenders usually allocate a fixed computational budget to every item in a user's interaction history, regardless of the item's contribution to the final prediction. We challenge this de facto design with two diagnostic findings. (1) Non-uniform computational need: items within the same sequence vary drastically in how much computation they require. Most converge after shallow processing while a critical minority only stabilizes at full depth. (2) Suboptimality of fixed allocation: given oracle access to the target item, a non-uniform depth assignment consistently outranks the fixed one, indicating that existing uniform computation both wastes capacity on already-converged items and sacrifices overall recommendation quality. These observations motivate a shift from fixed-depth computation to item-level adaptive reasoning. To this end, we propose LoopRec. LoopRec recursively applies a single weight-shared block and introduces a lightweight gate at each recursion boundary that makes a binary exit-or-continue decision for every item independently. Items whose representations have sufficiently matured exit early, while those requiring deeper reasoning continue to subsequent recursions. This design converts the fixed global depth into a learned, per-item property without auxiliary depth labels, and is readily adaptable to diverse backbone architectures. Extensive experiments on public benchmarks with four backbone families demonstrate that LoopRec consistently outperforms matched fixed-depth counterparts. Further analysis reveals that LoopRec's learned allocation exhibits interpretable patterns aligned with our post-hoc oracle analysis: lower-frequency items and more recent interactions naturally receive deeper computation. Our code is available at https://github.com/Elpmis117/LoopRec.",
    "published": "2026-10-21T17:58:06Z",
    "updated": "2026-10-21T17:58:06Z",
    "categories": [
      "cs.IR",
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.30128"
  },
  {
    "id": "2610.30127",
    "title": "VoxProg: 3D Spatial Reasoning through Voxel Programming",
    "authors": [
      "Zhichao Zhai",
      "Menglei Zhao",
      "Guikun Chen",
      "Zihao Yan",
      "Kanzhi Wu",
      "Wenguan Wang",
      "Jun Xiao"
    ],
    "abstract": "Language models' abilities to interpret tasks and generate programs offer a promising basis for 3D spatial reasoning. Yet following spatial instructions in 3D scenes requires programs to construct geometric references that language leaves implicit. In this work, we introduce VoxProg, which formulates 3D object placement through voxel programming: a language model translates task interpretations into executable programs over local voxel views of scene surfaces. Because these views index surface geometry on regular grids with explicit coordinates and neighborhood relations, an evidence program can isolate task-relevant regions and boundaries directly from scene meshes, and a downstream pose program can measure the resulting geometry to compute a target $SE(3)$ pose. Visual and numerical feedback from execution lets the model inspect intermediate selections and candidate placements to iteratively revise its code. To evaluate open-ended placement across functional use, geometric fit, and contextual arrangements, we introduce the 71-task VoxProg-Bench benchmark along with an evaluation suite pairing perceptual Intent Alignment and 3D Physical Validity. Across VoxProg-Bench and external benchmarks, VoxProg consistently outperforms relation-based, keypoint-based, and mesh-based baselines.",
    "published": "2026-10-21T17:58:05Z",
    "updated": "2026-10-21T17:58:05Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.30127"
  },
  {
    "id": "2610.30125",
    "title": "PhysiCalWorld: In-Context Physics Calibration for World Models",
    "authors": [
      "Yunhao Luo",
      "Wentao He",
      "Yinpei Dai",
      "Hyelin Nam",
      "Hongze Fu",
      "Joyce Chai",
      "Nima Fazeli",
      "Jeong Joon Park"
    ],
    "abstract": "Existing world models typically perceive a scene through current visual frame or a narrow history window. However, these observations may not reveal the physics properties that determine transition dynamics, such as an object's mass distribution, joint damping, or surface friction. Without calibrating these physics factors for world models, predictions tend to regress toward an empirical prior and induce severe drift in novel test scenes. To this end, we propose PhysiCalWorld, which calibrates action-conditioned world models to the instance-specific dynamics via in-context prompting, without fine-tuning or analytical physics modeling. Our method encodes an exploratory interaction clip collected within the test scene into a compact physics descriptor token, which grounds subsequent predictions in the scene's actual physical behavior. PhysiCalWorld is trained end-to-end with the latent prediction loss alone, without physics labels. At inference time, the descriptor token is extracted once and can be reused across rollouts with negligible compute overhead. We evaluate PhysiCalWorld across four environments covering diverse physics variations and show that it substantially improves rollout prediction accuracy and visual planning success rate. The learned descriptors also form a physically structured latent space and generalize beyond the physics ranges seen during training.",
    "published": "2026-10-21T17:57:59Z",
    "updated": "2026-10-21T17:57:59Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.30125"
  },
  {
    "id": "2610.30120",
    "title": "ALPS: Visual State Encoders for World Models",
    "authors": [
      "Yanqing Liu",
      "Letian Zhang",
      "Chengzhi Liu",
      "Zijun Wang",
      "Jieru Mei",
      "Hongliang Fei",
      "Yuyin Zhou",
      "Cihang Xie"
    ],
    "abstract": "World models turn visual representations into predictions and actions. We argue that their visual foundation should combine physical-state information, native language alignment, and pixel reconstruction, so that a single representation can support prediction, instruction, and inspection. However, existing encoders typically specialize in only one or two of these capabilities; we therefore introduce ALPS, a pretrained visual state encoder that unifies all three in a single set of patch tokens. Using only still images and text, we pretrain a ViT-B/16 from scratch with language, reconstruction, and spatial correspondence objectives, and then refine it via cross-view self-distillation. In a unified evaluation across fifteen public encoders, ALPS achieves the lowest aggregate LIBERO state-probe error among ViT-B models (matching the 3.5x larger V-JEPA 2-L) while maintaining strong language alignment and accurate pixel reconstruction. Downstream, frozen ALPS tokens reach the highest mean policy success on LIBERO (85.5%) when paired with our native text tower, match or exceed leading encoders on world-model planning across PushT, Wall, and Granular, and allow predicted future tokens to be decoded directly into pixels for visual inspection. We hope this work helps establish visual pretraining as a shared foundation for understanding, prediction, and action in world models.",
    "published": "2026-10-21T17:57:11Z",
    "updated": "2026-10-21T17:57:11Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.30120"
  },
  {
    "id": "2610.30116",
    "title": "Environment Duels: A Microcosm of LLM Co-Evolution",
    "authors": [
      "Shibo Jin",
      "Zhiqiu Xu",
      "Yiling Zou",
      "Shangyu Gong",
      "Mayur Naik"
    ],
    "abstract": "Through a tangle of real-world interactions, from synthetic training pipelines to data shared on the open web, frontier LLMs absorb what their predecessors and competitors create. How well does each model play its role in this ecosystem, as a creator and as a solver? We introduce Environment Duels, a dynamic agentic benchmark that evaluates both capabilities on interactive environments. Each model writes environments, each with a privileged hint, aiming for tasks that capable solvers fail without the hint and pass with it. Across nine frontier LLMs, solving and authoring prove to be distinct skills: the strongest solvers are not the strongest authors, while smaller models learn more from how others played and write the hardest environments and the most useful hints. Beyond the scores, the pairwise interactions form a microcosm of how models affect one another. Head-to-head outcomes are transitive and so yield a stable ranking; independent authors converge on the same designs; and in a reinforcement-learning study with Qwen3.8-27B, the learner's hint lift on an author's environments tracks how much training on those environments improves it on held-out reasoning and agentic benchmarks, whether the environments are its own or another model's. Each of these patterns has a counterpart in how models shape one another outside the duel. By staging these interactions under controlled conditions, Environment Duels offers a window onto how LLMs teach, challenge and learn from one another. Code is available at https://github.com/LLM-Duels/EnvDuels.",
    "published": "2026-10-21T17:55:31Z",
    "updated": "2026-10-21T17:55:31Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.30116"
  },
  {
    "id": "2610.30114",
    "title": "The End of Consensus Research?",
    "authors": [
      "Clément Burgelin",
      "Rachid Guerraoui",
      "Zicong Hong",
      "Yinan Hu",
      "Anne-Marie Kermarrec",
      "Rafael Pires",
      "Rasmus Moorits Veski",
      "Martijn de Vos"
    ],
    "abstract": "Consensus is a fundamental problem in distributed computing and at the core of state machine replication (SMR). Despite decades of active human research, discovering practical low-latency solutions to the problem is still open, as it requires combining protocol knowledge, correctness reasoning, implementation, and experimental evaluation. We report on how AI helped us discover A-greement, a new consensus protocol for geo-replicated state machines that significantly outperforms state-of-the-art solutions. Averaged across six deployments with 5 or 9 replicas, A-greement reduces the mean latency of a geo-distributed key-value store over the fastest baseline by 12.2% and 33.3% on write-heavy and read-heavy workloads, respectively, and matches the fastest baseline on read-only workloads. A-greement combines lease-authorized local reads, direct client learning for leader-ordered writes, and a fast fixed-quorum per-key write path, selected according to network topology and workload. At the heart of our discovery lies AI-greement, an agent harness for the \"autonomous\" discovery, implementation, experimentation, and verification of candidate protocols. AI-greement integrates (1) a concept-oriented protocol knowledge base, (2) a modular implementation skeleton, and (3) a Lean-based verification framework with reusable safety definitions, reference specifications, and proofs. AI-greement is of independent interest: its Lean formalization uncovers several previously unreported vulnerabilities in existing consensus protocols, and it provides guidelines on how domain-specific harnesses can turn general-purpose coding agents into effective tools for (distributed) computing research. Yet we argue that human consensus experts remain essential before, during, and after the search: agents reshape the researcher's role rather than end consensus research.",
    "published": "2026-10-21T17:55:19Z",
    "updated": "2026-10-21T17:55:19Z",
    "categories": [
      "cs.DC",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.30114"
  },
  {
    "id": "2610.30113",
    "title": "Quant-Arena: Benchmarking LLM Agents for Quantitative Trading Research",
    "authors": [
      "Houde Qian",
      "Zheng Jiang",
      "Wenyi Li",
      "Chenxi Xu",
      "Xinjie Lin",
      "Yuzhao Peng",
      "Ruoyu Han",
      "Youjie Zheng",
      "Kaisen Yang",
      "Qinhuai Na",
      "You Fu",
      "Calvin Xiao"
    ],
    "abstract": "Quantitative research is an iterative loop: a researcher proposes a market hypothesis, implements it as an executable signal, tests it on historical data, and decides what to keep. Existing benchmarks score formulas, code, or individual trading decisions, leaving open whether large language models (LLMs) can complete this loop and produce strategies that work beyond the research period. We introduce Quant-Arena, a benchmark and public leaderboard for end-to-end quantitative research on real A-share market data. A model constructs features and stock-scoring code, receives feedback only on 2022--2023, and freezes one strategy for assessment on the sealed year 2024. A cash-account evaluator applies trading constraints and costs, including market impact estimated from a simulated order book. Scores are dominated by realized excess return and complemented by signal quality and the diversity of features used by the strategy. We evaluate nine frontier models, among which GPT-6 Astra scores highest; yet no model beats the equal-weight market in 2024. Quant-Arena is open to submissions from any model or agent harness.",
    "published": "2026-10-21T17:54:01Z",
    "updated": "2026-10-21T17:54:01Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.CE"
    ],
    "url": "https://arxiv.org/abs/2610.30113"
  },
  {
    "id": "2610.30108",
    "title": "Multimodal Embodied Agents: A Unified Capability-centric Perspective from Computer-Use to Robot-Use",
    "authors": [
      "Yanzhe Chen",
      "Ziyi Yang",
      "Jifeng Zhu",
      "Qiming Huang",
      "Ruihe An",
      "Peiyao Xu",
      "Hesen Yang",
      "Runda Liu",
      "Chang Gong",
      "Zhijun Cao",
      "Zechen Bai",
      "Wenzheng Zeng",
      "Yiqi Lin",
      "Guoqiang Liang",
      "Kevin Yuchen Ma",
      "Kevin Qinghong Lin",
      "Mike Zheng Shou"
    ],
    "abstract": "Multimodal agents (MMAs) sustain interaction through reasoning, memory, tools, and feedback, most visibly as computer-use agents, while robotic systems (RSs) couple sensing and actuation under physical dynamics. We define multimodal embodied agents (MMEAs) as goal-directed systems that couple multimodal task reasoning with physical action and revise decisions from the resulting feedback. This raises a central question: what changes when a multimodal agent moves from computer-use to robot-use? We introduce PAPAV, a unified capability-centric framework of five recurring functions: Perceive the current state, Anticipate action effects, Plan a feasible course, Act through an interface or body, and Verify the outcome. Defined by function rather than architecture, these capabilities let PAPAV identify what all three share and then compare MMEAs with MMAs and with RSs. Five physical constraints, from partial observability to unverifiable outcomes, leave fewer choices fixed in advance and less room to reverse errors. Across 64 benchmarks, explicit evaluation centers on Act; only 5 assess Anticipate and 3 assess Verify, leaving both largely hidden behind task success. These constraints also frame the open challenges we identify. PAPAV therefore provides a common basis for designing reliable physical agents and measuring progress across all five capabilities rather than task success alone.",
    "published": "2026-10-21T17:52:48Z",
    "updated": "2026-10-21T17:52:48Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV",
      "cs.MA",
      "cs.MM"
    ],
    "url": "https://arxiv.org/abs/2610.30108"
  },
  {
    "id": "2610.30105",
    "title": "Asymmetric On-Policy Distillation Learns In-Context Exploration",
    "authors": [
      "Sriyash Poddar",
      "Yanda Bao",
      "Jacob Krantz",
      "Matthew Chang",
      "Xavier Puig",
      "Roozbeh Mottaghi",
      "Natasha Jaques",
      "Abhishek Gupta"
    ],
    "abstract": "Sequential decision-making under partial observability is difficult because agents must explore to infer hidden, task-relevant information before acting effectively. Learning such information-gathering behaviors tabula rasa via online reinforcement learning is sample-inefficient, whereas offline imitation averages expert actions across hidden states and fails to learn exploration. In this work, we propose ASTEROID, a simple and effective student--teacher supervised learning framework that can learn test-time exploration. Although a privileged expert never needs to explore, we demonstrate that a history-conditioned student can learn to do so when trained with on-policy contexts: the student first collects on-policy context under partial observability, and the privileged expert provides action labels conditioned on that context. By distilling expert actions directly conditioned on the student's on-policy history, the student learns to systematically resolve partial observability, i.e., search while uncertain and exploit once the hidden state is revealed. This enables efficient test-time exploration (similar to Bayesian posterior sampling) without incurring the impractical training-data costs of reinforcement learning. Across a diverse range of eleven different environments, including discrete exploration benchmarks, robotic manipulation, navigation, and Procgen environments, ASTEROID achieves ~2x higher returns under fixed exploration budgets, uses ~100x fewer interactions than RL baselines, and outperforms frontier models at exploration. Finally, our method transfers policies trained in simulation to vision-denied real-world robot manipulation, exhibiting efficient exploration and increasing success by +40% over standard distillation. Overall, it provides a simple yet surprisingly effective framework to learn efficient test-time exploration.",
    "published": "2026-10-21T17:50:31Z",
    "updated": "2026-10-21T17:50:31Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.30105"
  },
  {
    "id": "2610.30104",
    "title": "BatchBench: Benchmarking AI Robustness to Batch Effects and Domain Shift in Biomedical Images - A JUMP Cell Painting Leaderboard",
    "authors": [
      "Sonja Topf",
      "Ana Sanchez-Fernandez",
      "Günter Klambauer"
    ],
    "abstract": "Despite recent advances, current AI systems remain highly susceptible to domain shifts, particularly in biomedical imaging, where images are usually acquired under substantially different experimental conditions. Although recent domain adaptation methods have made substantial progress, significant performance gaps under domain shift persist. To measure progress in this regard, we introduce BatchBench, a leaderboard that evaluates and compares the robustness of AI systems on biomedical images from unseen experimental batches and data sources. BatchBench is built on JUMP-CP, one of the largest publicly available biomedical imaging datasets. Generated using the Cell Painting assay, JUMP-CP exhibits pronounced batch effects and domain shifts, making it a challenging testbed for evaluating robustness to distributional changes.",
    "published": "2026-10-21T17:50:22Z",
    "updated": "2026-10-21T17:50:22Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.30104"
  },
  {
    "id": "2610.30099",
    "title": "Differentially Private Sparse Reward Estimation with Preference Feedback",
    "authors": [
      "Meng Ding",
      "Mingxi Lei",
      "Jie Zhang",
      "Jinyan Liu",
      "Di Wang"
    ],
    "abstract": "Reinforcement Learning with Human Feedback (RLHF) has become a central paradigm for aligning Large Language Models with human values. However, the reliance on sensitive preference data necessitates rigorous differential privacy (DP) guarantees to prevent user information leakage. Existing private alignment methods typically assume dense reward parameterizations, resulting in estimation error bounds that scale polynomially with the ambient {model size $d$}. Such dependence is prohibitive in modern {overparameterized models} where $d$ is vast. In this work, we study \\emph{Private Sparse RLHF} problem to address this limitation, assuming that human preferences (reward model) are governed by a subset of $s^* \\ll d$ relevant features. We provide the first comprehensive theoretical framework for differentially private sparse reward estimation from pairwise preference feedback under the Bradley-Terry-Luce model, and introduce efficient algorithms for both Sample-DP and Label-DP settings. Theoretically, under the squared $\\ell_2$ parameter estimation error, we establish upper bounds of $\\widetilde{O}(s^*/n + {s^*}^2/n^2\\varepsilon^2)$ for $(\\varepsilon,δ)$-Sample-DP and $\\widetilde{O}(s^*/n + s^*/n\\varepsilon^2)$ for $\\varepsilon$-Label-DP based on randomized response, where $n$ is the training data size. For the lower bounds, we show that the Sample-DP rate is nearly optimal, and that the guarantee for our Label-DP method cannot be further improved within the randomized-response framework. We also provide a general lower bound for the problem with Label-DP. Empirically, our framework demonstrates superior efficacy over dense baselines across sentiment generation and safety alignment benchmarks, offering a significantly more favorable privacy-utility trade-off.",
    "published": "2026-10-21T17:45:42Z",
    "updated": "2026-10-21T17:45:42Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.30099"
  },
  {
    "id": "2610.28834",
    "title": "Where Should a Stuck Agent Spend Its Next Tokens? Causal Attribution of Inference-Time Resources",
    "authors": [
      "Saiyue Lyu",
      "Jerrold Huang",
      "Yunbei Zhang",
      "Janet Wang",
      "Zhenting Wang",
      "Yingqiang Ge",
      "Haibo Zhang"
    ],
    "abstract": "Inference-time scaling is often treated as a token-budget problem, but a failed coding agent can seek qualitatively different resources: computation, information, or feedback. We introduce Banzhaf Resource Attribution (BRA), a controlled factorial framework that measures each resource's marginal contribution to repair and its interactions while holding the failed state and revision protocol fixed. We evaluate six models on 194 function-level failures from MBPP+ and HumanEval+ and 126 repository-level failures from SWE-bench Verified. Task-relevant specifications consistently improve repair, whereas public-test feedback provides small gains and retrieved code little to none. The value of additional computation declines with model capability, while information remains useful; resource channels largely exhibit diminishing returns, although complementary information can reinforce itself. Yet three of four frontier models select feedback in 95-100% of cases and obtain lower gains than uniform random resource selection. BRA thus exposes a gap between the resources agents prefer and those that measurably improve repair.",
    "published": "2026-10-20T18:59:01Z",
    "updated": "2026-10-20T18:59:01Z",
    "categories": [
      "cs.SE",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.28834"
  },
  {
    "id": "2610.28830",
    "title": "Artificial Intelligence and Job Design: A Dynamic Framework",
    "authors": [
      "Amin Shirangi",
      "Todd L. Pittinsky"
    ],
    "abstract": "This study aims to deepen the understanding of artificial intelligence's (AI) impact on work by introducing and describing the AI-Job Dynamics Framework. Drawing from sociotechnical systems theory, complexity theory, and organizational learning theories, we conceptualize AI integration as a dynamic, non-linear process with three key phases. The framework, supported by theoretical propositions, identifies how this process affects organizational decision-making structures and key job characteristics over time, emphasizing the balance between centralization and decentralization of decision-making power. AI integration initially reduces job autonomy but may lead to greater autonomy in later phases as AI becomes more embedded. Throughout this process, AI reshapes skill requirements from routine to complex cognitive and adaptive skills. In the advanced phase of AI integration, we introduce the alternative paths and varied trajectories through which AI, organizational structures, and individual work experiences evolve. We conclude by discussing the implications of this framework for future research on AI and job design.",
    "published": "2026-10-20T18:55:20Z",
    "updated": "2026-10-20T18:55:20Z",
    "categories": [
      "cs.CY",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.28830"
  },
  {
    "id": "2610.28829",
    "title": "HorizonComposer: Spatiotemporally Consistent Driving Video Editing with Enriched Traffic Semantics",
    "authors": [
      "Mauricio Soroco",
      "Yuqiu Liu",
      "Zaid Tasneem",
      "Francesco Pittaluga",
      "Abhishek Aich",
      "Wuyang Chen",
      "Manmohan Chandraker",
      "Ziyu Jiang"
    ],
    "abstract": "Instruction-guided video generative models offer a scalable solution for stress-testing autonomous driving systems by simulating diverse environmental conditions. However, driving scenes operate within a dense Operational Design Domain (ODD) governed by strict traffic semantics. When applied to global driving-condition edits, general-purpose instruction-guided video editors frequently corrupt these semantics, leading to structural hallucinations and ``temporal shock.'' This work distills and protects traffic semantics during video editing at three levels. First, we construct a hybrid dataset by combining temporally aligned real-world videos with synthetic edits, balancing foundational scene structure with unambiguous appearance signals. Second, during training, we adapt advantage conditioning from offline reinforcement learning to align the model using dense rewards. We extract dense, pixel-level rewards from the hybrid data to serve as a localized signal and actively steer generation toward structurally reliable pixels. Finally, our model mitigates temporal shock by introducing thinking frames, a transition mechanism that seamlessly reconciles static image conditioning with dynamic video context. Extensive experiments demonstrate that our method prevents the corruption of multi-actor dynamics, establishing state-of-the-art spatiotemporal consistency, yielding consistent user preference (39% relative improvement in content preservation and 12% in temporal consistency), and achieving a significant 5% gain in downstream road line segmentation and 7% gain in downstream multi-object detection.",
    "published": "2026-10-20T18:51:48Z",
    "updated": "2026-10-20T18:51:48Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.28829"
  },
  {
    "id": "2610.28827",
    "title": "WorldStream: Streaming Interactive 3D Worlds with Hierarchical Planning and Persistent State",
    "authors": [
      "Xiaoxiao Ma",
      "Weiyang Jin",
      "Yanwen Ma",
      "Haoran Li",
      "Zhixiang Wei",
      "Songchun Zhang",
      "Yaowei Li",
      "Junhao Zhuang",
      "Zeyue Xue",
      "Yuming Li",
      "Zheming Fu",
      "Haoyang Huang",
      "Nan Duan",
      "Feng Zhao"
    ],
    "abstract": "We present WorldStream, an open-ended 3D world model with three simultaneous capabilities: it extends playable terrain beyond any pre-specified map, acts on open-ended language in the running world, and restores visited places with their edits. A hierarchical planner over a typed decision model emits structured decision state: Macro fixes settlement, ecology, transport, and hydrological structure across a group of tiles; Micro specializes that contract into tile semantics under measured terrain and accepted neighbor commitments. Deterministic local code compiles accepted plans into terrain, roads, settlements, vegetation, and entities. Streaming separates their reach: plans run ahead along the predicted corridor, compilation only where movement will soon need it, geometry behind the user released. One world record retains plans, seeds, object identities and mutable state, boundary commitments, and edits by attribute, revised as the user advances and edits; returning tiles recompile from it. The same record grounds interaction: the model acts on existing entities, including stateful NPCs that update as they act, edits the present region, or attaches intent to unplanned regions. Together they yield a world expanding under bounded budgets, connected across independently planned tiles, and interactive.",
    "published": "2026-10-20T18:47:26Z",
    "updated": "2026-10-20T18:47:26Z",
    "categories": [
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2610.28827"
  },
  {
    "id": "2610.28826",
    "title": "Decision language models as affordable and rapid alternatives to LLM judges of clinical generative AI",
    "authors": [
      "Rotem Gershon",
      "Seffi Cohen",
      "Dean Ariel",
      "Havatzelet Bilavsky-Yarden",
      "Amiel Sberro",
      "Shai Yitzhaki",
      "Osnat Tausky",
      "Naama Golan",
      "Maayan Rabinovitch",
      "Ariel Avraham Hasidim",
      "Itay Arianu",
      "Maya Dagan",
      "Ran Balicer",
      "Noa Dagan"
    ],
    "abstract": "Automated judges of clinical artificial intelligence (AI) outputs are necessary, but large language model (LLM) judges are costly and slow at scale. We compared Jev, a decision language model that returns structured judgments, with frontier and open-weight LLM judges in four use cases. On 118 pediatric answers, Jev's agreement with physicians' ordinal quality ratings (Gwet's AC2 0.50; expected score 0.53) matched or exceeded that of seven of 12 LLM judges, including frontier models, Claude Opus 5.5 (0.49) and GPT-6 (0.38). On physician-graded binary HealthBench criteria, Jev matched or exceeded four of six LLM judges. On MedHELM's open-ended tasks, Jev's agreement with a three-LLM jury approached or exceeded the jurors' internal agreement. On HealthBench Professional, Jev matched the benchmark's reference judge, GPT-5.4, on 91% of criteria (other judges, 91-93%). Frontier judges cost 73-294 times more than Jev and took 7-57 times longer. Jev may enable efficient clinical AI evaluation at scale.",
    "published": "2026-10-20T18:46:47Z",
    "updated": "2026-10-20T18:46:47Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.28826"
  },
  {
    "id": "2610.28821",
    "title": "Register Anything Model for Generalizable and Robust Point Cloud Registration",
    "authors": [
      "Zheng Qin",
      "Junhua Xi",
      "Yan Huang",
      "Jiahong Lai",
      "Anwen Huang",
      "Qiong Li",
      "Guangda Zhang",
      "Kai Xu"
    ],
    "abstract": "We present Register Anything Model (RAM), a unified model for generalizable 3D point cloud registration that robustly estimates 6-DoF transformations across diverse domains spanning sensors and environments. Existing registration methods are typically tailored to a single domain, with carefully tuned architectures and hyperparameters, and thus degrade markedly when applied to novel domains. We bridge this gap by training a single model on diverse data from indoor, outdoor, and object domains. A central challenge is the severe geometric discrepancy across domains, i.e., differences in scene scale, sensor noise, point density, and structural patterns, which hinders processing with a unified point-based model. To address this, we introduce a geometry-aware normalization strategy that jointly voxelizes and normalizes point clouds into a standardized geometric space, adaptively based on their geometric properties to preserve salient local structures while standardizing resolution. Built on this normalization, RAM follows a hierarchical coarse-to-fine paradigm, and employs an efficient geometric transformer that models local geometric consistency instead of globally over all points. This design mitigates discretization noise introduced by voxelization, and improves computational efficiency. Extensive experiments on 12 benchmarks demonstrate state-of-the-art performance in terms of inlier ratio and registration recall. Notably, our method outperforms the counterparts trained on each separate domain, showing superior generalization capability.",
    "published": "2026-10-20T18:40:50Z",
    "updated": "2026-10-20T18:40:50Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.28821"
  },
  {
    "id": "2610.28818",
    "title": "Brittle by Design? Multi-Scenario Reinforcement Learning for Robust Mission Coordination in Systems of Systems",
    "authors": [
      "İbrahim Oğuz Çetinkaya",
      "Sajad Khodadadian",
      "Taylan Topcu"
    ],
    "abstract": "As systems engineering (SE) shifts from monolithic systems to Systems of Systems, Mission Engineering (ME) has emerged as a new line of thinking in SE. Mission environments are uncertain and dynamic, and outcomes depend on how mission assets interact with them, rendering static architectures brittle and calling for flexible yet analytically rigorous ME approaches. We propose an intelligent mission coordination methodology integrating high-fidelity digital mission models with Reinforcement Learning (RL) for adaptive task allocation. Using a Digital Engineering (DE) infrastructure comprising a digital mission model and agent-based simulation, we formulate mission tactics management as a Markov Decision Process and train an RL coordinator with Proximal Policy Optimization to map mission states to tactical actions from realized outcomes. An aerial firefighting mission with three scenarios demonstrates the approach. First, all trained coordinators significantly outperform random and heuristic baselines. Second, single-scenario coordinators can be brittle: the coordinator trained on the more forgiving scenario degrades to random tactics performance in more demanding scenarios, whereas the demanding-scenario coordinator retains most of its advantage when transferred. Third, within the same training budget, a coordinator trained on both scenarios concurrently matches the scenario-specific coordinators in their own scenarios and significantly outperforms every other policy. Sensitivity analyses on ignition location, weather, scenario, and training curricula show that the variability represented during training shapes post-deployment performance. This proof of concept shows DE-enabled mission simulations combined with RL offer a reusable methodology for improving ME practice, which can be extended to fleet design and selection from a mission-first perspective.",
    "published": "2026-10-20T18:40:12Z",
    "updated": "2026-10-20T18:40:12Z",
    "categories": [
      "eess.SY",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.28818"
  },
  {
    "id": "2610.28815",
    "title": "Forging More Tasks into Better Harnesses: Agentic Harness Evolution via Successive Scale Racing",
    "authors": [
      "Jingzhe Liu",
      "Jiliang Tang",
      "Tong Zhao",
      "Neil Shah",
      "Clark Mingxuan Ju"
    ],
    "abstract": "Agentic harness evolution optimizes an agent's instructions, tools, and control flow by using its task execution experiences as evolving evidence. While more evolution tasks should intuitively improve performance, our preliminary study reveals a paradoxical failure mode: the performance of existing methods degrades as the task pool expands. Our further analysis demonstrates that this degradation stems from suboptimal evidence selection during optimization, as different evidence combinations lead to substantially different evolution outcomes. To address this issue, we propose Successive Scale Racing (SSR), a framework that adaptively searches for optimal evidence combinations in each evolution round. SSR constructs diverse evidence combinations based on the corresponding task quality and coverage, and efficiently races the resulting candidate harnesses under a small compute budget. Empirically, across three distinct benchmarks, SSR achieves state-of-the-art results in all six configurations. Notably, as the task pool grows from 40 to 200, SSR steadily improves the pass rate from 64.3% to 68.3%, while the baselines' performances all drop. Furthermore, its racing mechanism identifies near-optimal candidates while reducing validation executions by 60%.",
    "published": "2026-10-20T18:36:33Z",
    "updated": "2026-10-20T18:36:33Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.28815"
  },
  {
    "id": "2610.28810",
    "title": "Combining Long-Term Memory and LLMs Comes at a High Cost: From Prompt Injection to Persistent Compromise",
    "authors": [
      "Pedro H. Barcha Correia",
      "Matheus Azevedo de Sá",
      "Paulo H. Gomes de Senna",
      "Giovanni Mandel Martignago",
      "Victor Takashi Hayashi",
      "Charles Christian Miers",
      "Marcos A. Simplicio"
    ],
    "abstract": "The widespread adoption of generative artificial intelligence in recent years has brought a parallel rise in prompt injection and jailbreak attacks. By embedding malicious instructions, these exploits manipulate language models to bypass intended behavior and operational boundaries. In traditional chatbots, such attacks are confined to a single session because state memory is not preserved across conversations. However, persistent memory features in modern conversational interfaces enable cross-session attack propagation, establishing a threat vector known as memory injection. This work explores this emerging vulnerability in leading LLM-as-a-service platforms, highlighting its real-world severity and the need for countermeasures. While existing literature focuses on violations tailored to specific platform features, we present a general threat model. We demonstrate that all NIST attack goals are collectively achievable across ChatGPT Instant 5.3, Claude Sonnet 4.6, and Gemini 3 Flash under this model. We also show that memory injections can exploit multiple attack vectors, including personal memories, projects, skills, organization instructions, and Model Context Protocol (MCP)-connected resources. Our findings reveal that all evaluated services can be manipulated to persistently spread disinformation, generate harmful content, or simulate offline unresponsiveness, even in fresh sessions. In the particular case of Claude, shared-memory features allow an attacker to compromise multiple users within an organization and also exfiltrate user prompts. To address these vulnerabilities, we derive defense mechanisms from our proposed threat model and foundational cybersecurity principles. Our analysis indicates that nearly half of these mitigations remain unimplemented across the target services. Datasets and attack artifacts are available at https://github.com/PedroBarcha/Memory-injection.",
    "published": "2026-10-20T18:33:05Z",
    "updated": "2026-10-20T18:33:05Z",
    "categories": [
      "cs.CR",
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.28810"
  },
  {
    "id": "2610.28806",
    "title": "SAIL: A Learnable Generalisation of Spatial Autocorrelation over Graph-Structured Data",
    "authors": [
      "Piotr Keller",
      "Fayyaz Minhas"
    ],
    "abstract": "In vision and scientific domains involving spatial data, a key question is whether node feature values vary independently across space or form coherent spatial structures. Classical spatial autocorrelation statistics such as Moran's $I$ and Geary's $C$ quantify this phenomenon but operate on a single scalar variable with fixed neighbourhood weights, limiting their use for high-dimensional graph-like data. We introduce SAIL (Spatial Autocorrelation Index Learner), a differentiable framework that generalises spatial autocorrelation into a learnable operator by jointly learning feature projections defining candidate scalar fields and inter-node neighbourhood affinities. SAIL produces interpretable local and global spatial coherence descriptors, enabling supervised prediction and unsupervised discovery of spatial autocorrelation modes and hotspots. We show that SAIL exactly recovers classical spatial statistics under appropriate parametrisations and, for tasks driven by latent spatial autocorrelation, can approximate the Bayes-optimal predictor with an inductive bias matched to such tasks. Experiments on synthetic data and large-scale biomedical graphs demonstrate statistical correctness and discovery of spatial coherence with applications across vision, geospatial analysis, and biomedicine. The code repository is available at: https://github.com/pkeller00/SAIL.",
    "published": "2026-10-20T18:28:15Z",
    "updated": "2026-10-20T18:28:15Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.28806"
  },
  {
    "id": "2610.28803",
    "title": "Towards Realistic Models of Change: A Causal Perspective on Decision-Making and Dynamical Systems",
    "authors": [
      "Isacco Beretta"
    ],
    "abstract": "While statistical learning has made remarkable progress in recent decades, driven by large datasets and data-driven protocols that have transformed scientific practice, it still faces a key limitation: it struggles to generalize beyond the data it has seen, often failing under distribution shift. Causality offers a promising solution: causal models focus on the underlying mechanisms of change rather than surface-level associations, enabling robust reasoning under external interventions. This allows systems not only to learn from data, but also to reason about hypothetical scenarios, adapt to new environments, and inform better decisions. This thesis explores how these approaches can inform each other, in two parts. The first part examines algorithmic recourse, that is, identifying which changes an individual can make to overturn an unfavorable decision. We propose an alternative perspective to the established framework, arguing for a more realistic cost function, a reformulation of the problem in causal terms, and the inclusion of a temporal dimension in policy evaluation. The second part focuses on dynamical systems, extending the notions of causal interventions and effects to discrete and continuous stochastic processes. We show that the equilibria of these processes, and how they change following an intervention, can be linked to Structural Causal Models (SCMs), viewed as compressed representations of the underlying temporal dynamics. We argue for the relevance of such temporal causal models, since in real-world scenarios actions take time to produce their effects. The common goal of both parts is practical: the utility, robustness, and trustworthiness of these models depend critically on their ability to realistically represent the underlying phenomena.",
    "published": "2026-10-20T18:26:21Z",
    "updated": "2026-10-20T18:26:21Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.28803"
  },
  {
    "id": "2610.28801",
    "title": "JUICE: Unified Multimodal Modeling in Pretrained Representation Spaces",
    "authors": [
      "Jiahan Li",
      "Huangyuan Su",
      "Shengbang Tong",
      "Shusheng Yang",
      "Ruihan Guo",
      "Suozhi Huang",
      "Hexu Zhao",
      "Pratyusha Sharma",
      "Sherry Yang",
      "Jiatao Gu",
      "Rob Fergus",
      "Kyunghyun Cho"
    ],
    "abstract": "Most unified multimodal models treat images and text asymmetrically: a pretrained language model generates text, an attached diffusion head generates images, and outputs that contain both are produced in a fixed order, so the first output cannot adapt to the second. We ask whether both modalities can instead be generated by one process that is trained on them jointly from scratch. Pretrained encoder spaces hold both modalities in one continuous form and carry knowledge learned at scale, and recent work finds them effective as generative targets for vision and language. We therefore model the joint distribution directly in these spaces. We introduce JUICE (Joint Unified multimodal modeling In Continuous Encoder spaces), a single flow matching Transformer over frozen image and text representations, in which each modality has its own noise level. Which modalities are clean and which are generated then decides the task: image generation, captioning, visual question answering, or joint generation. Controlled pretraining runs test each design choice. At equal guidance, generating text as continuous states leaves image generation intact (48.41 GenEval, against 47.86 for a model trained only for text-to-image generation), while captions lose some exact wording. Training on joint and conditional denoising together beats either alone, and semantic encoder spaces beat VAE latents and raw pixels as targets. At 2.1B parameters, with no language model initialization and at 224x224, JUICE reaches up to 0.88 on GenEval and 73.1 on VQAv2. By sampling both modalities from the joint distribution (coupled sampling), it can also draw a route on a map while writing out the matching moves. On mazes with several valid solutions, joint success rises from 54.6% with independent sampling to 93.7%, and no modality has to go first. On visual spatial planning, JUICE solves 99.8% of maps at its training sizes.",
    "published": "2026-10-20T18:25:09Z",
    "updated": "2026-10-20T18:25:09Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.28801"
  },
  {
    "id": "2610.27605",
    "title": "DART: Scaling a Shape Representation Across Anatomical Classes and Imaging Modalities",
    "authors": [
      "Koushik Swarna",
      "Pedro R. A. S. Bassi",
      "Lam Ngo",
      "Wenxuan Li",
      "Jiancheng Yang",
      "Alan Yuille",
      "Zongwei Zhou"
    ],
    "abstract": "Current state-of-the-art segmentation models still produce anatomically implausible shapes, such as broken vessels and fragmented glands, on the structures that are hardest to segment. Learned shape representations capture what structures look like and can help correct these errors, but most cover a fixed set of anatomical classes. Extending this coverage across classes and imaging modalities is costly because it often requires new voxel-level annotations. We propose Diffusion for Anatomical Reshaping with Text (DART), which learns a shared shape representation from segmentation probabilities. It uses anatomical descriptions to correct these probabilities without receiving medical images. Across 13 public benchmarks, absolute Dice gains reach 31% for individual gallbladder cases in CT and 10% for individual prostate cases in MRI. Using existing segmentation predictions, we scale a single shape representation from 50 to 377 anatomical classes without new voxel-level annotations for correction training. The shared representation also corrects four lesion classes absent from training and transfers from CT to MRI without retraining. Corrected labels also improve segmentation models, raising one model's Dice from 57.1% to 67.5%. The same pipeline supports annotations for 45,000 CT scans. These results suggest that sharing shape information within and across classes can reduce the need for new voxel-level annotations when extending segmentation to more anatomical classes and imaging modalities. The model is available at https://huggingface.co/Koushik45/DART-Seg",
    "published": "2026-10-20T04:12:20Z",
    "updated": "2026-10-20T04:12:20Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.27605"
  },
  {
    "id": "2610.27604",
    "title": "HiQGS: Hierarchical Spatiotemporal Querying for Feed-Forward Gaussian Reconstruction",
    "authors": [
      "Qiaowei Miao",
      "Qifeng Cheng",
      "Yijing Guo",
      "Yuru Xiao",
      "Ziqian Ni",
      "Sheng Yang"
    ],
    "abstract": "Feed-forward Gaussian reconstruction from sparse posed monocular frames requires reasoning over observations that vary jointly in viewpoint and time. Existing methods either predict Gaussian primitives from observation-aligned features or aggregate multi-frame information through compact latent queries. However, the former tightly couples Gaussian allocation to individual frames, while the latter does not explicitly structure observed evidence according to its temporal relation to the requested timestamp. Consequently, evidence across spatial scales, viewpoints, and timestamps can be difficult to align and integrate. We present \\textbf{HiQGS}, a query-based hierarchical framework for feed-forward Gaussian scene reconstruction from sparse monocular frames. HiQGS introduces a \\textbf{Hierarchical Spatiotemporal Encoder} that organizes multi-resolution geometry-appearance visual features according to image location, observation time, and camera pose, thereby preserving complementary appearance and structural cues. Our \\textbf{Time-Adaptive Decoder} use target timestamp queries the resulting hierarchical representation to retrieve relevant spatiotemporal evidence and predicts the corresponding Gaussian scene state. Experiments on static and dynamic scene reconstruction benchmarks demonstrate strong rendering quality and geometric accuracy, validating the effectiveness of hierarchical visual encoding and target-time-aware Gaussian querying.",
    "published": "2026-10-20T04:10:57Z",
    "updated": "2026-10-20T04:10:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.27604"
  },
  {
    "id": "2610.27603",
    "title": "From Encoding to Generation: Towards Empathetic Large Language Models",
    "authors": [
      "Samhita Bollepally",
      "Takashi Yamauchi",
      "Marissa West"
    ],
    "abstract": "Empathetic interaction involves two distinguishable capacities: representing another person's emotional state (cognitive empathy) and generating an appropriate response to that state (affective empathy). We apply this distinction to examine how emotion-related information is internally organized, selectively attended to, and carried through response generation in Llama-3.2-3B-Instruct across 10 emotion categories from the EmpatheticDialogues dataset. Layer-wise linear probing revealed a broad middle-layer region of peak emotion-category decodability, with the layer-11 L2 probe achieving 63.6% held-out accuracy against a 10% chance level and a 54.6% TF-IDF lexical baseline. During response generation, emotion-related user tokens received 1.89 times as much attention per token as other utterance tokens, concentrated across layers 10-15. Target-emotion alignment then decreased from a mean cosine similarity of 0.239 for input representations to 0.125 for generated responses, with positive drift in 77% of examples and the largest shifts for angry and furious. Emotion-category representation, attention allocation, and response-level alignment therefore emerge as distinguishable components of model processing that can be analyzed through a functional cognitive-affective empathy framework. These findings provide a foundation for monitoring emotion representations during generation and leveraging models' existing affective structure to support more naturally empathetic responses without relying on external prompting or explicit emotion conditioning.",
    "published": "2026-10-20T04:10:24Z",
    "updated": "2026-10-20T04:10:24Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27603"
  },
  {
    "id": "2610.27598",
    "title": "Meta Expert: Cross-Layer Expert Sharing for Storage- and Retrieval-Efficient MoE",
    "authors": [
      "Ermo Hua",
      "Xiangyu Hong",
      "Baiting Wu",
      "Che Jiang",
      "Haozheng Hou",
      "Yicheng Gu",
      "Hanjing Wang",
      "Qirui Zeng",
      "Ming Zhang",
      "Ning Ding",
      "Qipeng Guo",
      "Youbang Sun",
      "Biqing Qi",
      "Bowen Zhou"
    ],
    "abstract": "As model parameters scale up, sparsely activated Mixture-of-Experts (MoE) approaches have become essential for model scaling. However, mainstream models currently adopt hierarchical architectures, where experts in different layers, although topologically independent, exhibit substantial similarity and redundancy in their stored content. Compared to the hierarchically arranged \\textbf{Local Expert} in existing mainstream models, we hypothesize that inter-layer shared \\textbf{Meta Expert} hold greater potential. To this end, we conduct a multi-dimensional empirical comparison between Local and Meta Experts, and find that models incorporating Meta Experts exhibit lower parameter redundancy, together with lower cross-entropy loss and higher downstream task accuracy. With the activated quantity and the expert granularity held fixed, \\textbf{our model matches the performance of Vanilla MoE using only 70--80\\% of the experts}, substantially improving the model's scaling potential. Beyond removing inter-layer redundancy among experts and improving information storage efficiency, our theoretical analysis further shows that, compared with Local Experts, Meta Experts provide hidden states with more flexible residual pathways, thereby improving information retrieval efficiency.",
    "published": "2026-10-20T04:05:56Z",
    "updated": "2026-10-20T04:05:56Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27598"
  },
  {
    "id": "2610.27597",
    "title": "WORTH Benchmark: Evidence Discovery under Not-Fully-Cooperative Information -- A Two-Episode Pilot",
    "authors": [
      "Bo Zou",
      "Chao Xu"
    ],
    "abstract": "Existing reasoning evaluations typically provide task-relevant information to models as available premises, rarely examining concurrently how models discover evidence autonomously and how information presentation within narratives guides or obscures judgment. This paper proposes the WORTH Benchmark: models read original mystery narratives without clue annotations, autonomously select key clue sentences, identify case participants, and explain their reasoning process. The narrative materials are designed by professional authors such that evidence facilitating reasoning coexists with narrative arrangements that delay the revelation of truth. We report a pilot experiment under full-story conditions across two episodes, conducting a total of 70 formal runs on models, of which 67 runs are content-scorable. Scoring separately records hits on author-designated key clue sentences and participant selections; natural language explanations are used for case diagnosis and are not scored independently. The results show that clue hits and participant judgments are not synchronized; across 37 content-scorable runs in Episode 02, 31 runs simultaneously selected the same set of incorrect participants, while adjacent suspicion-oriented and exoneration-oriented sentences were selected 25 times and 0 times, respectively. These phenomena illustrate the diagnostic value of component-wise analysis and suggest that not-fully-cooperative informational relationships may influence evidence selection and judgment. This study only implements full-story conditions for two episodes, and does not establish stable model rankings or infer general mechanisms on this basis; human player records have not yet been cleaned, and this version does not report human-model comparisons.",
    "published": "2026-10-20T04:04:06Z",
    "updated": "2026-10-20T04:04:06Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27597"
  },
  {
    "id": "2610.27594",
    "title": "Causal Spatiotemporal State Evolution for Monocular 4D Reconstruction",
    "authors": [
      "Qiaowei Miao",
      "Yijing Guo",
      "Lipei Zhang",
      "Qifeng Cheng",
      "Yuru Xiao",
      "Ziqian Ni",
      "Sheng Yang"
    ],
    "abstract": "While feed-forward models excel in static 3D geometry estimation, extending them to dynamic 4D scenes requires modeling visual geometry as a causally evolving state. Current methods typically rely on unordered temporal aggregation, which lacks the directional structure of physical time. Furthermore, existing supervision often treats geometry and motion as disjoint objectives, failing to exploit their inherent physical coupling. Consequently, they lack a unified constraint to effectively supervise temporal state transitions, leading to inconsistent 4D scene representations. To address this, we propose a feed-forward framework for causal 4D visual geometry learning from monocular videos. At its core, Causal Spatiotemporal Mamba augments temporal aggregation with directional state propagation. Through complementary Temporal-Spatial and Spatial-Temporal Scans, CSM continuously propagates geometry-aware states across frames to model spatiotemporal evolution. To align this causal state evolution with observable dynamics, we introduce Unified Motion Supervision. Rather than treating motion as an independent objective, UMS leverages geometry-aware predictions from the camera and depth heads to construct a unified forward motion field that is consistent with the underlying 3D structure. This geometry-grounded supervision explicitly constrains inter-frame state transitions, enabling stable states propagation across frames. Extensive evaluations on dynamic benchmarks demonstrate state-of-the-art performance across video depth, camera pose, and optical flow estimation. These results validate that the synergy between the directional state propagation of Causal Spatiotemporal Mamba and Unified Motion Supervision effectively captures continuous scene evolution, significantly reducing temporal drift and reinforcing spatial-temporal consistency in 4D representation learning.",
    "published": "2026-10-20T04:00:48Z",
    "updated": "2026-10-20T04:00:48Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.27594"
  },
  {
    "id": "2610.27592",
    "title": "Real In, Real Out: What If We Only Use Real Data for Scene Text Editing?",
    "authors": [
      "Xingsong Ye",
      "Yongkun Du",
      "Jiaxin Zhang",
      "Chong Sun",
      "Zhineng Chen"
    ],
    "abstract": "Aiming to modify textual content while preserving the original style, Scene Text Editing (STE) has significant practical value in many applications. STE typically requires paired images before and after editing for training. However, recent approaches rely heavily on synthetic paired data and complex disentanglement strategies. They struggle to faithfully capture the diversity and complexity of natural scenes, often producing artifacts or hallucinations. In this work, we challenge the common practice and investigate whether STE can be driven by turning each real sample into its own paired supervision. Concretely, we explore multiple ways to disrupt the original image (e.g., Crop, Shuffle, Mask) to construct self-paired training data, and build a strong baseline (TextRIRO}) upon a conditional diffusion architecture. Our experiments show that combining character-column shuffling with image cropping (Shuffle&Crop) effectively destroys text semantics while preserving key style cues, enabling the model to learn editing behaviors directly from the real text image. With this concise yet real-oriented design, TextRIRO achieves promising performance in both accuracy and visual realism across real-world benchmarks, substantially mitigating the synthetic-to-real domain gap. Furthermore, we leverage TextRIRO to build TextRIRO-3M, a large-scale realistic dataset for long-text recognition by concatenating edited and original images. Experimental results show that training recognition models with TextRIRO-3M significantly improves recognition accuracy, demonstrating that TextRIRO provides highly useful training resources for downstream tasks. Overall, TextRIRO lifts STE to realistic, reliable, and widely applicable new levels. Code is available at https://github.com/YesianRohn/TextRIRO.",
    "published": "2026-10-20T03:58:22Z",
    "updated": "2026-10-20T03:58:22Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.27592"
  },
  {
    "id": "2610.27590",
    "title": "Benefit and Cost of Random-Token Replacement under Repeated Data: A Known-Entropy Decomposition and Evidence from Ten Real Corpora",
    "authors": [
      "Wonsup Shin",
      "Jingu Kim"
    ],
    "abstract": "When unique pretraining data is scarce, models see the same tokens many times and are thought to memorize. Random-token replacement, an input-corruption augmentation, is one remedy reported to lower validation loss, but a lower loss alone does not reveal which source of error it reduces. On a controlled source whose entropy rate is known in closed form, we show that replacement shrinks predictions toward the corpus average. We also introduce a decomposition that separates validation loss into approximation, estimation, and memorization terms. This shrinkage view predicts that replacement's bias cost needs no memorization but its benefit does. Memorization raises validation loss after its minimum, so we report the effect at two points, the minimum validation loss and the end of a fixed budget. Where replacement helps, it reduces this rise by about 60%. At the end of the budget, it turns from harmful to helpful as the controlled source becomes less predictable; at the minimum, it helps at no predictability level under the fixed recipe. On Korean and Japanese web text, replacement removes about a third of the loss rise after the minimum by the end of the budget, but its effect at the minimum is much smaller. Across ten real corpora, replacement lowers the final loss on nine. It harms only the census corpus, program-generated JSON that is the most redundant of the ten and much more redundant than any of 64 further prose and code corpora we measure.",
    "published": "2026-10-20T03:57:15Z",
    "updated": "2026-10-20T03:57:15Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27590"
  },
  {
    "id": "2610.27588",
    "title": "Beyond Experience: Knowledge-Guided Evolution for NPU Kernel Generation",
    "authors": [
      "Xi Chen",
      "Ming Shen",
      "Haotian Yan",
      "Ruoyu Sun",
      "Tianjun Yao"
    ],
    "abstract": "LLM agents have become capable kernel engineers on mainstream GPU stacks, but they struggle on emerging accelerators such as Ascend NPUs, whose programming model is barely represented in pretraining data. Recent NPU agents address this gap largely through experience: they accumulate memory from their own generation and optimization trials and reuse it on later tasks. We argue that experience alone is not enough for kernel generation. An agent can only remember what it has tried, and it rarely tries a mechanism it does not know. As a result, such memory offers little help when a new operator calls for a different mechanism, and even familiar operators raise unseen situations as optimization proceeds. We present ASCENDEVOLVE, which grounds every step of an evolutionary kernel search in a large external knowledge base built from platform documentation, toolkit headers, and operator repositories. Because this corpus far exceeds any context window, ASCENDEVOLVE indexes it and routes each agent to a small, task-specific slice of evidence instead of the corpus itself. The retrieved knowledge seeds diverse implementation strategies, guides repair when a candidate fails, and constrains how strong candidates are recombined. On 53 Ascend C operators from CANN-Bench spanning four difficulty levels, ASCENDEVOLVE achieves an overall score of 71.39, improving over Reflexion and OpenEvolve by 11.6% and 17.2%.",
    "published": "2026-10-20T03:56:26Z",
    "updated": "2026-10-20T03:56:26Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27588"
  },
  {
    "id": "2610.27581",
    "title": "DuplexLedger: Benchmarking Transactional Memory in Full-Duplex Speech Agents",
    "authors": [
      "Yuxuan Li",
      "Xiangchen Guan",
      "Kunrong Li",
      "Jin Wang",
      "Kaiwen Luo",
      "Yang Xiao",
      "Yufei Guo",
      "Zhisheng Chen",
      "Liang Lin",
      "Kun Wang"
    ],
    "abstract": "Full-duplex speech agents must update persistent memory while listening and speaking, yet it remains unclear which events should be stored, revised, or excluded. Existing benchmarks isolate interaction timing from memory outcomes, obscuring the state transitions behind a correct answer. We introduce DuplexLedger, a bilingual benchmark of 1,094 persistent sessions aligning four full-duplex scenarios with event-level Write/Update/Ignore/Retain supervision, explicit pre/post memory states, and 6,564 same-session questions and checks. Evaluating five full-duplex models reveals an interaction-memory gap: no system combines strong boundary control with coherent final-state memory, and the best final-state fact coverage is 2.01%. We propose ACT-Mem, an 8.92M-parameter sidecar comprising an event controller, a versioned transactional ledger, and a typed retriever coupled with a frozen MiniCPM-o 4.5 backbone. On 219 held-out sessions, ACT-Mem increases latest-value accuracy from 4.11% to 8.68% while reducing stale assertions and distractor adoption. It improves interaction boundaries but slows interruption stopping. These results motivate selective, auditable full-duplex memory rather than indiscriminate transcript retention. Code is available at https://github.com/lyx-researcher/DuplexLedger.",
    "published": "2026-10-20T03:47:06Z",
    "updated": "2026-10-20T03:47:06Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27581"
  },
  {
    "id": "2610.27580",
    "title": "Factual Access States in Diffusion Language Models: From Mechanism to Knowledge Editing and Retrieval",
    "authors": [
      "Yuchen Guo",
      "Zhuoyuan Mao",
      "Yiwen Guo"
    ],
    "abstract": "Factual recall is a lookup: some representation inside the network serves as the key, and what that key is made of decides which queries can retrieve the fact, what an edit must cover, and what a retriever can read. We call it the factual access state. In autoregressive (AR) models the subject position enriches attributes largely independently of the relation, and relation-specific selection happens later, at the readout position. In masked diffusion language models (DLMs) we find the state is assembled differently, and much earlier: in the first attention layer the wording of the relation is routed into the position of whichever entity is visible and the early feed-forward layers look the fact up on this fused representation. The state therefore varies with the relation's surface form and with the query direction, so the queries about one fact occupy a region of state space rather than a point, and an operation on the fact succeeds only for queries that enter it. We treat the state as an interface to a DLM's factual knowledge, and put it to two uses. Writing to the state gives a knowledge editor: from one declarative statement, Multi-View Edit fits one shared value per direction across that region and installs it in the early-MLP block, preserving source-prompt reliability while substantially improving paraphrase and reverse question answering, where AR editors gain near zero. Reading it suggests a complementary use: the state at each entity position can serve as a relation-specific retrieval vector with no training, returning both pieces of evidence for two-entity queries on which pooled, prompted and lexical retrievers almost never return both.",
    "published": "2026-10-20T03:45:45Z",
    "updated": "2026-10-20T03:45:45Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.IR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.27580"
  },
  {
    "id": "2610.27574",
    "title": "The Show-Up Attack: When Subagents Win Over Their Supervisor",
    "authors": [
      "Maosen Zhang",
      "Jianshuo Dong",
      "Yutong Zhang",
      "Jie Zhang",
      "Tianwei Zhang",
      "Han Qiu"
    ],
    "abstract": "Multi-agent systems are increasingly deployed to coordinate multiple large language model (LLM) agents. However, this also creates new attack surfaces: malicious agents may have chances to exploit the coordination. In this paper, we propose and study the \\textit{show-up attack}, in which a malicious subagent manipulates the supervisor into involving it in tasks beyond its assigned scope. To evaluate this risk, we propose SUA-Arena, which implements 6 attack strategies and contains 188 test cases. Then, we evaluate 6 frontier LLMs and find that all of them are vulnerable to show-up attacks. For example, GPT-5.6-Sol as a supervisor suffers an ASR of up to 0.93. Mitigation strategies such as prompting and restricted communication fail to reduce the risk consistently. These results show that multi-agent systems need explicit mechanisms for enforcing authority boundaries.",
    "published": "2026-10-20T03:41:13Z",
    "updated": "2026-10-20T03:41:13Z",
    "categories": [
      "cs.AI",
      "cs.CR"
    ],
    "url": "https://arxiv.org/abs/2610.27574"
  },
  {
    "id": "2610.26239",
    "title": "CoRS: Fast Neural Flexible Job-Shop Scheduling via Composite Interval State Reuse",
    "authors": [
      "Jiang Sutong",
      "Zhao Peng",
      "Wu Xuan",
      "Wang Yan",
      "Wang Jiaqi",
      "Zhang Rui",
      "Jiang Yuan",
      "Zhou You",
      "Wang Di"
    ],
    "abstract": "Neural solvers for the Flexible Job-Shop Scheduling Problem (FJSP) typically refresh graph representations and update feasibility after every operation--machine decision. However, only feasibility must remain exact at every step, whereas graph encoding is substantially more expensive and can potentially be refreshed less frequently. We present CoRS, which decouples them: an interval-level graph representation is reused across multiple sequential decisions, while a stepwise feasibility state is updated after every action. This two-timescale design amortizes graph encoding without parallelizing action generation or relaxing scheduling constraints. CoRS further develops a feasibility-preserving composite-interval decoding scheme with dynamic constraint tracking and boundary state synchronization, which reduces representation refresh frequency while maintaining continuous feasible schedule construction. Furthermore, to alleviate representation staleness caused by interval-level state reuse, CoRS introduces enhanced static features as a compensation mechanism. By providing more comprehensive structural information of the scheduling problem, these features improve the model's perception of overall problem characteristics. Extensive experiments on synthetic and multiple public FJSP benchmarks demonstrate that CoRS significantly reduces inference time while maintaining competitive solution quality, achieving favorable speed-quality trade-offs under tight wall-clock budgets and low-latency scenarios.",
    "published": "2026-10-19T12:01:41Z",
    "updated": "2026-10-19T12:01:41Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.26239"
  },
  {
    "id": "2610.26226",
    "title": "Towards More Granular Reasoning: Mapping the DSA Transparency Database Taxonomy to Platform Terms and Conditions Using Large Language Models",
    "authors": [
      "Alyson Ranucci",
      "Eline Leijten",
      "David Graus"
    ],
    "abstract": "Article 24(5) of the Digital Services Act (DSA) requires providers of online platforms to submit every content moderation decision they make, with a corresponding Statement of Reasons (SoR), to the DSA Transparency Database (DSA-TDB). Such decisions are classified against seventeen high-level attribute categories that categorize the primary reason for the moderation decision. Because over 99.8% of statements cite a violation of the provider's own terms and conditions rather than a legal provision, the database is overwhelmingly a record of contractual enforcement using catch-all reporting; however, whether its categories actually describe those contractual rules well has not been examined. In this paper, we map the terms and conditions (T&C) of 31 designated online services against the DSA-TDB's high-level category taxonomy using a few-shot GPT-4.1 classifier over 447 policy documents. The analysis concerns how T&C rules are represented in the taxonomy, not how they are enforced. Two findings emerge. First, high-level category applicability varies sharply by service type: unsafe products account for 17.5% of e-commerce assignments and 0.2% of adult-platform assignments, and negative effects on civic discourse reaches 9.9% within the Meta family but is absent from adult platforms, Booking.com, and Wikipedia. Second, the categories have notable overlap among sub-category specifications, which makes assigning a single high-level category to a decision difficult. We argue that catch-all reporting is plausibly in part a consequence of the DSA-TDB's schema and attribute design, and recommend a schema that is differentiated by service type with more mandatory attributes derived inductively from platform governance language.",
    "published": "2026-10-19T11:53:24Z",
    "updated": "2026-10-19T11:53:24Z",
    "categories": [
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2610.26226"
  },
  {
    "id": "2610.26217",
    "title": "SAR2Net: Learning Spatially Anchored Representations for Retrieval-Guided Cross-Stain Alignment",
    "authors": [
      "Tianle Shen",
      "Fang Yan",
      "Xiaofan Zhang"
    ],
    "abstract": "Achieving spatial alignment between whole-slide images(WSIs) across stains is essential for integrating morphology and molecular information, yet it remains challenging due to extreme resolution, tissue fragmentation, and large nonlinear deformations. Conventional registration pipelines depend on global pre-alignment and spatial consistency, which often collapse under such distortions. We present SAR2Net, a framework that learns spatially anchored representations and reformulates cross-stain alignment as a region-level feature retrieval problem. Instead of estimating explicit transformations, SAR2Net learns pointwise representations encoding the relative spatial relationships to tissue landmarks. Given landmarks and arbitrary coordinates, it predicts spatially anchored features that serve as deformation-invariant descriptors of tissue topology. A twostage retrieval framework then establishes correspondences between slides, even when global alignment is infeasible. Experiments on biopsy-oriented HE-IHC datasets show that SAR2Net achieves robust region-level alignment under severe tissue distortions, outperforming previous methods. Code is available at https://github.com/Shentl/SAR2Net.",
    "published": "2026-10-19T11:45:04Z",
    "updated": "2026-10-19T11:45:04Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.26217"
  },
  {
    "id": "2610.26216",
    "title": "RoAR-VAE: Improving Latent Diffusability through Robust Prediction",
    "authors": [
      "Yang Yue",
      "Fangyun Wei",
      "Yitong Wang",
      "Jinjing Zhao",
      "Henry Zheng",
      "Dong Chen",
      "Gao Huang"
    ],
    "abstract": "An effective visual tokenizer must preserve image fidelity while producing latents that downstream diffusion models can learn efficiently. Prior work improves latent diffusability through semantic alignment or joint tokenizer--diffusion training. Revisiting REPA-E, a representative approach, we find that removing its diffusion objective and dedicated generative blocks while retaining semantic prediction from corrupted latents yields comparable downstream generation performance under a matched setting. This observation motivates a general principle of robust prediction: generation-relevant information should remain recoverable from corrupted latents. We instantiate this principle with two complementary objectives. RobustAlign predicts pretrained semantic features from corrupted latents to preserve high-level structure, while RobustRecon reconstructs the clean image to retain fine-grained spatial and appearance information. Together, they form Robust Alignment and Reconstruction VAE (RoAR-VAE). Our analysis suggests that robust prediction improves diffusability by making useful information more accessible in high-variance latent directions, which diffusion models tend to learn earlier. Empirically, RoAR-VAE improves average generation benchmark performance by 2.19 points over the strongest baseline tokenizer under the same training budget, while improving small-text reconstruction accuracy by 16.93 percentage points over FLUX.1-VAE. These results demonstrate that RoAR-VAE achieves a favorable balance between reconstruction fidelity and downstream generative learnability.",
    "published": "2026-10-19T11:42:21Z",
    "updated": "2026-10-19T11:42:21Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.26216"
  },
  {
    "id": "2610.26215",
    "title": "Fairness or Fallacy? Mapping the Landscape of AI Bias in Disease Detection",
    "authors": [
      "Ghulam Mudassir",
      "Hameed Ullah Khan",
      "Ahmad Sami Al-Shamayleh",
      "Muhammad Faizan Khan",
      "Muhammad Muqtasid",
      "Moamin Abughazala",
      "Adnan Akhunzada"
    ],
    "abstract": "Artificial intelligence (AI) has several transformative effects on healthcare, like to facilitate clinicians in disease detection and to manage patient care with enhanced precision. Due to the increasing complexity of medical data and the growing volume of diagnostic images, the substantial computational power needed to process such information creates both opportunities and challenges. To accomplish this objective, numerous methodologies have been proposed to integrate AI into disease detection systems. All these methodologies consider different aspects of clinical diagnosis, considering key parameters such as the type of AI model employed, the nature of input data, and the population demographics being analysed. In this paper, we review different state-of-the-art techniques which have been proposed for various areas of disease detection, specifically focusing on bias identification and mitigation. The proposed solutions are distinguished based on the type of input data they utilize, the architecture of model, and type of bias (algorithmic bias, demographic bias, model bias, and deployment bias). The time frame chosen to filter out relevant studies is between 2015 and 2026. Eventually, we review 23 related articles out of 64,389 analyzed from seven different digital libraries. The obtained results guide us to reach a conclusion with respect to state-of-the-art selected studies. Furthermore, these results reveal significant research gaps that can assist researchers in addressing AI-related bias in medical diagnosis. By prioritizing explainability, data diversity, and fairness in algorithmic design, as well as equitable access for affected patient populations, they can utilize available healthcare resources more effectively.",
    "published": "2026-10-19T11:41:10Z",
    "updated": "2026-10-19T11:41:10Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.26215"
  },
  {
    "id": "2610.26213",
    "title": "ExMR: Extremity Motion Refinement for Monocular Human Motion Capture",
    "authors": [
      "Tom Wehrbein",
      "Bodo Rosenhahn"
    ],
    "abstract": "Detailed hand and foot articulation is important for animation and motion analysis, yet remains challenging to recover from monocular video. Recent expressive video methods infer hand articulation from shared whole-body representations. Our conference work suggests that this underexploits local evidence: the Foot Motion Refinement (FootMR) module refines ankle rotations from foot keypoints, improving reconstruction even when the initial estimator receives the same keypoints. We extend this principle to hands with the Hand Motion Refinement (HandMR) module. Because 2D finger keypoints are often missing or unreliable, HandMR combines image features of a pretrained hand reconstruction model with initial arm and hand rotations to refine elbows, wrists, and fingers. We integrate FootMR and HandMR into ExMR (Extremity Motion Refinement), a system for reconstructing 3D body, hand, and foot motion from monocular video. An initial temporal estimator predicts whole-body motion, after which both refiners revisit local evidence to predict residual joint rotations. Experiments on ARCTIC, MOYO, RICH, and MOOF show that ExMR outperforms state-of-the-art methods in hand and foot reconstruction, reducing hand per-vertex error and ankle joint angle error on MOYO by 19% and 18%, respectively, relative to the strongest competitor. Code will be made available for research purposes. Project page: https://twehrbein.github.io/exmr-website/",
    "published": "2026-10-19T11:40:29Z",
    "updated": "2026-10-19T11:40:29Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.26213"
  },
  {
    "id": "2610.26211",
    "title": "LLMs Prompted for Legal Context Refuse More: Overrefusal from Small On-Premises LLMs in Criminal Legal Context",
    "authors": [
      "Anastasiia Kucherenko",
      "Francois Brouchoud",
      "Dimitri Percia David",
      "Andrei Kucharavy"
    ],
    "abstract": "Confidentiality requirements increasingly push legal professionals toward small, on-device LLMs that keep case data in-house, used for everyday tasks such as summarization, translation, and reformulation. Following standard prompting guidance, a user naturally states their role (``I am a lawyer...''). We show that this innocuous habit has an unexpected cost: such authority framing can make the model selectively refuse legitimate requests, introducing bias through uneven access to assistance. We evaluate four modern small open-weight LLMs on benign legal-domain prompts to measure this over-refusal. Surprisingly, we find that authority-style prefixes (''I am legal counsel working for a national supreme court'', ''I'm a defense lawyer'') systematically increase refusal rates by 2--20x over the no-prefix baseline, while a known role-play jailbreak prefix shows mixed effects, sharply increasing refusals in some models and barely shifting them in others. The finding suggests that small on-prem deployable LLMs are unstable under contextual framings that a real institutional user might naturally introduce, and further investigation is essential to minimize opportunities for bias.",
    "published": "2026-10-19T11:38:05Z",
    "updated": "2026-10-19T11:38:05Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.26211"
  },
  {
    "id": "2610.26203",
    "title": "Focused Omni-Modal GUI Agents",
    "authors": [
      "Fuyao Zhang",
      "Wenwen He",
      "Jiaming Zhang",
      "Yurong Hao",
      "Xuan Wang",
      "Guowei Guan",
      "Che Wang",
      "Longtao Huang",
      "Wei Yang Bryan Lim"
    ],
    "abstract": "Graphical User Interface (GUI) agents increasingly act over streaming omni-modal observations spanning screenshots, audio, video, interaction history, and device states. However, exposing this complete context uniformly at every step ignores that relevance is transient and sparse: the signal determining one action can become clutter at the next. Because executed actions feed back into the context, these errors compound into Sequential Distraction, driving the agent into irreversible trajectory drift. We formulate the underlying requirement as Focused Perception: a representation that is step-adaptive, action-sufficient, and non-intrusive. We realize this in FocusGUI, a lightweight adapter that dynamically prioritizes multimodal channels against a step-specific decision reference. Instead of uniformly processing all inputs, it compresses the most relevant evidence into a compact latent and subtly injects it into the frozen decoder's embeddings, guiding the model's attention without altering its native parameter space. FocusGUI trains from action supervision alone, requiring neither modality-relevance labels nor backbone fine-tuning. Across four omni-modal backbones, it raises overall Type Match by +33.2 and Exact Match by 3.0 times over the frozen backbone on average, and Type Match by +30.1 over the strongest existing enhancement method.",
    "published": "2026-10-19T11:30:48Z",
    "updated": "2026-10-19T11:30:48Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.26203"
  },
  {
    "id": "2610.26194",
    "title": "GeoEdit: Adversarial De-Evidencing for Silent Geoprivacy Protection via Image Editing",
    "authors": [
      "Yu Yan",
      "Shengjia Cheng",
      "Fei Ma",
      "Zhe Wang",
      "Peng Chen"
    ],
    "abstract": "Recent efforts have demonstrated the strong capabilities of Multimodal Large Reasoning Models (MLRMs) in geographic reasoning. By jointly analyzing subtle visual cues, these models can infer the locations of photos, thus enabling doxing even by non-expert adversaries. Existing defense methods struggle to balance the shareability of photos with effective protection, and often fail to sufficiently disrupt the implicit geo-evidence chains embedded in scene semantics. To this end, we propose GeoEdit, an adversarial de-evidencing framework for silent geoprivacy protection via image editing. Specifically, we apply minimal edits to high-risk evidence anchors in the image, thereby disrupting the underlying spatial reasoning chains while preserving overall scene semantics. We identify these anchors by combining structured knowledge with adversarially discovered geographic cues. To further navigate the large editing action space, we adopt a learnable policy to iteratively refine editing decisions, distilling successful trajectories into transferable natural-language insights for consistent and efficient editing. Evaluated on LifePhotoBench, GeoEdit achieves strong protection against 6 mainstream MLRMs, outperforming visual perturbation baselines by over 0.59 in image fidelity.",
    "published": "2026-10-19T11:23:14Z",
    "updated": "2026-10-19T11:23:14Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.26194"
  },
  {
    "id": "2610.26190",
    "title": "VEILED-SH: Vulnerability Expression through Indirect Language Evaluation Dataset (Self-Harm)",
    "authors": [
      "Leanne Tan",
      "Keith Chua",
      "Shaun Khoo",
      "Onno P. Kampman",
      "Lim Ruling Charmaine",
      "Hazirah Hoosainsah",
      "Kellie Yu Hui Sim",
      "Kai He",
      "Kenny Tsu Wei Choo",
      "Roy Ka-Wei Lee"
    ],
    "abstract": "AI systems may miss indirect, culturally situated distress or provide support mismatched to the application context. Existing benchmarks do not jointly address cultural variation, application context, and practitioner disagreement. We introduce VEILED-SH, a benchmark and construction methodology for evaluating single-turn responses to indirect expressions of suicide, self-harm, and distress. Its 10,003 prompts span counselor chat, forum posts, platform search, and triage, drawing on Singapore-grounded sources and public datasets. An expert-validated multi-label taxonomy distinguishes intent, communicative function, and response behavior. Six automated profiles, individually calibrated to three peer-support practitioners and three clinicians, retain separate reference policies for proxy-alignment scoring. Evaluating five systems on a coverage-enriched sample reveals variation in proxy alignment across profile-generated reference policies, even for the same system responses.",
    "published": "2026-10-19T11:18:19Z",
    "updated": "2026-10-19T11:18:19Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2610.26190"
  },
  {
    "id": "2610.26189",
    "title": "Wan-Alpha++: Animating a Single RGBA Asset into Controllable Transparent Video Effects",
    "authors": [
      "Haotian Dong",
      "Xin Wang",
      "Wenjing Wang",
      "Chen Li",
      "Jing Lyu",
      "Yan Tina Luximon",
      "Ping Li",
      "Wanchao Su",
      "Ke Xu",
      "Di Lin"
    ],
    "abstract": "RGBA video generation is essential for creating compositable visual assets in filmmaking, game development, and digital content production. However, generating high-quality RGB appearance alongside temporally coherent transparency remains a significant challenge. Existing text-to-RGBA video methods often entangle RGB and alpha distributions and offer limited control over the precise appearance of a target asset. In addition, incorporating image conditioning typically suffers from the emergence-disappearance effects, which fail existing first-frame or first-and-last-frame conditions due to their fully transparent boundary frames. To address these issues, we present Wan-Alpha++, a unified framework that brings controllable RGBA video generation to both text- and image-to-video diffusion backbones through a shared RGBA latent space, extending our conference version Wan-Alpha from the text-conditioned setting to image-conditioned generation with an interior reference frame. Our method first learns shiftable RGB-alpha distributions while preserving the pretrained RGB prior. Specifically, we introduce a transparency-aware bidirectional diffusion objective to produce distinguishable RGBA latent representations, and a transparency-guided mean sampler that shifts the noise distribution to improve transparency generation and enable spatial controllability. Building upon this RGBA generation prior, we introduce temporal phase reparameterization for image-conditioned effect generation. By cyclically transforming a zero-positive-zero alpha pattern into a positive-zero-positive pattern, it relocates visible content to both temporal boundaries, facilitating effective appearance conditioning with limited RGBA data.",
    "published": "2026-10-19T11:18:11Z",
    "updated": "2026-10-19T11:18:11Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.26189"
  },
  {
    "id": "2610.26187",
    "title": "On Counting Graphs for Modal Logic with Counting",
    "authors": [
      "Avijeet Ghosh",
      "François Schwarzentruber"
    ],
    "abstract": "In this paper, we study the theoretical computational complexity of counting trees and graphs that are classified positively by a graph neural networks, or said equivalently that satisfy a given formula of modal logic with counting. We also study convergence.",
    "published": "2026-10-19T11:17:34Z",
    "updated": "2026-10-19T11:17:34Z",
    "categories": [
      "cs.AI",
      "cs.LO"
    ],
    "url": "https://arxiv.org/abs/2610.26187"
  },
  {
    "id": "2610.25140",
    "title": "Spectral Adaptive Graph Transformer for Efficient and Scalable Traffic Forecasting",
    "authors": [
      "Amirhossein Ghaffari",
      "Susanna Pirttikangas",
      "Ekaterina Gilman"
    ],
    "abstract": "Traffic forecasting models based on spectral graph convolution offer an interpretable account of how information is mixed between sensors, but they rely on an eigendecomposition of the graph Laplacian. It costs cubic time, is fixed by the road network, and provides a symmetric operator that cannot represent the directed propagation of traffic congestion. Attention-based spatio-temporal transformers remove these limitations but generate a dense sensor-by-sensor attention map at each layer and time step, so memory, rather than accuracy, becomes the binding constraint on large networks. We introduce the spectral adaptive graph transformer, whose spatial operator is learned rather than derived from the Laplacian, directed rather than symmetric, and conditioned on the current traffic state rather than a static state, at a cost linear in the number of sensors. A sparse road graph diffusion branch provides the strictly local propagation that a low-rank operator cannot express, and a zero-initialized gate learns the balance between the two. Before spatial mixing, a unit-mean-gain frequency-bin attention module reweights each sensor's short-term periodicities according to its identity and current context. Across six public benchmarks spanning 170 to 1843 sensors, evaluated over three random seeds, the proposed model attains the lowest error of any single end-to-end model on one benchmark and remains competitive with the strongest current attention models on the others, while using about a quarter of their memory and training about twice as fast.",
    "published": "2026-10-18T09:48:51Z",
    "updated": "2026-10-18T09:48:51Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.25140"
  },
  {
    "id": "2610.25139",
    "title": "Reflection-Guided Dynamics Rectification for Text-to-Image Generation",
    "authors": [
      "Shuo Xu",
      "Hanrui Ying",
      "Debin Liu",
      "Jianjun Li",
      "Zhiyuan Ma"
    ],
    "abstract": "Fine-grained rectification of existing generations under a limited additional budget remains a key problem in test-time optimization (TTO) for image generation. As for prior approaches, they could identify residual errors, but could not directly ensure that the model acts on the feedback during reasoning. Such errors stem from multiple sources, such as the initial noise or text prompt, and ultimately induce an execution gap of failing to handle potential deviations along the trajectory generating. However, classic models generally cannot remedy this gap. To narrow it, we propose Reflection-Guided Dynamics Rectification (RGDR), which turns reflections on completed outputs into corrective interventions on the process of sampling dynamics at the trajectory level. Specifically, RGDR could impact every sampling step by adapting to instantaneous intervention. Moreover, RGDR generates flexible candidates while adjudicating between them and the reference. As experiments show, rectification from RGDR starts from the existing base trajectory and reflection, and RGDR is substantially more effective than former trajectory exploration. Under matched budgets for additional image generation, RGDR's gain in the cross-model average final checklist score over the reference is $1.51\\times$ that of TIR prompt refinement and $1.81\\times$ that of Dynamic CFG.",
    "published": "2026-10-18T09:47:08Z",
    "updated": "2026-10-18T09:47:08Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.25139"
  },
  {
    "id": "2610.25137",
    "title": "HullProbe: Measuring Interventional Part Reliance in Maritime Vessel Classifiers",
    "authors": [
      "Faisal Mohammad",
      "Mohamed Younis"
    ],
    "abstract": "Recognizing a vessel's type from an image supports maritime surveillance and sanctions monitoring, but a classifier can reach high accuracy by leaning on the generic hull instead of the more distinctive superstructure, and is then fooled when a vessel is re-hulled or occluded. De-biasing methods claim to remove such reliance, yet the field certifies them with worst-group accuracy, a proxy that needs group labels and only infers reliance from accuracy. We measure the reliance directly. HullProbe swaps a registered anatomical part of a vessel for another instance's and reads how much that part drives the decision, using a same-class swap to control for compositing artifacts. Because a surface vessel is a hull and a superstructure arranged along one axis, its parts form a 2x3 grid whose 2^6 = 64 swaps we evaluate exhaustively, and a single Walsh transform returns each part's interventional influence and its interaction spectrum. On planted shortcuts, where the true reliance is known, the measure tracks worst-group accuracy (r = -0.94 over 45 configurations), and replacing its learned segmenter with human annotations changes the hull-share by less than the audit's resolution. On the 26 vessel types of MARVEL, the classifier places about 46% of its corrected sensitivity on the generic hull yet follows the superstructure when the two conflict, and the group-label-free de-biasers available there do not detectably reduce the hull's share. The findings hold across three architectures and a second maritime dataset, and the method extends to fine-grained vehicle recognition on Stanford Cars.",
    "published": "2026-10-18T09:42:21Z",
    "updated": "2026-10-18T09:42:21Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.25137"
  },
  {
    "id": "2610.25134",
    "title": "TIRE: Top-Down Formula Instantiation with Reliable Execution for Physics Problem Synthesis",
    "authors": [
      "Xiaoyu Wu",
      "Zhaoxin Yu",
      "Xinglin Xiao",
      "Nan Xu"
    ],
    "abstract": "Advancing physics reasoning in large language models requires scalable training data that connect physical laws, concrete problem scenarios, and verifiable numerical answers. Expert-designed problems offer top-down control over physical laws, conditions, and scenarios, but require costly human effort. LLM-based synthesis from texts scales efficiently, but model-generated answers and assessments leave supervision vulnerable to hallucinations. We introduce TIRE, a framework for Top-Down Formula Instantiation with Reliable Execution that brings knowledge-driven problem construction to large-scale data generation. Top-down instantiation uses reusable physical formulas and their applicability conditions to control the physical relations and numerical configurations of generated problems. Reliable execution establishes reference answers before problem generation, providing a common numerical foundation for problem construction and teacher distillation. Together, these mechanisms combine control over problem content with execution-grounded supervision for both supervised fine-tuning and reinforcement learning. Using TIRE, we construct TIRE-19k, spanning nine subfields of physics. Across 3 backbone LLMs and 4 benchmarks, TIRE-19k outperforms 5 representative datasets with equal amounts of SFT data, exceeding the strongest baseline by 2.86 percentage points on average. Further GRPO raises Qwen3-8B's average accuracy by 1.52 percentage points over its TIRE-19k SFT checkpoint. These results demonstrate the value of generating physics training data from explicit physical knowledge with reliable execution.",
    "published": "2026-10-18T09:38:24Z",
    "updated": "2026-10-18T09:38:24Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.25134"
  },
  {
    "id": "2610.26950",
    "title": "Beyond Policy Discrepancy: Capability-Aware Multi-Teacher On-Policy Distillation",
    "authors": [
      "Xuanfeng Yang",
      "Le Gai",
      "Jiaming Wang",
      "Xuan Zhang"
    ],
    "abstract": "Multi-teacher on-policy distillation (MOPD) integrates domain specialists into a shared student, but determining how strongly each teacher should supervise remains challenging. Existing discrepancy-based allocation can assign strong supervision even when the student already matches or exceeds the teacher's task performance, since behavioral mismatch does not necessarily imply a remaining capability deficit. We propose Capability-Aware Multi-Teacher On-Policy Distillation (CA-MOPD), which combines specialist merging with capability-guided allocation to account for what the student has already learned. CA-MOPD first merges reinforcement-learning specialists into a strong student initialization, then uses verifier-estimated teacher--student capability gaps to adjust domain-level distillation strength. Supervision decreases as capability gaps close and increases when estimated student capability regresses, while dense token-level guidance remains provided by the teachers. Across six benchmarks spanning mathematics, code generation, and instruction following, CA-MOPD achieves an average score of 32.22, outperforming naive MOPD, Open-MOPD, and the merged initialization by 0.86, 0.83, and 0.74 points, respectively. Controlled comparisons further support the benefits of merged initialization and capability-gap guidance under matched training budgets.",
    "published": "2026-10-18T09:09:06Z",
    "updated": "2026-10-21T07:30:12Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.26950"
  },
  {
    "id": "2610.25121",
    "title": "ClinSDT: LLM-Encoded Clinical Semantic Guidance for Sepsis Treatment via Decision Transformer",
    "authors": [
      "Yanyan Wu",
      "Guanyu Zhu",
      "Changbin Zhao",
      "Jin Zhang",
      "Dexu Yu",
      "Tianmin Sun",
      "Jining Luan",
      "Chunxiao Li",
      "Hanwen Du",
      "Youhua Li"
    ],
    "abstract": "Offline sepsis treatment aims to learn treatment policies from retrospective ICU trajectories. Decision Transformer-based methods provide a natural sequence modeling framework for this task, but they mainly rely on raw physiological states and historical clinician actions. Such raw trajectory tokens may not explicitly capture clinical semantics that clinicians use in practice, such as patient severity, recent treatment response, and current risk priorities. To address this limitation, we propose ClinSDT, an LLM-assisted Decision Transformer framework for offline sepsis treatment. ClinSDT uses a frozen LLM as a semantic bridge rather than a treatment decision maker. It constructs three clinical semantic views from ICU trajectories, namely Profile, Context, and Advisory, and inserts their encoded representations as independent tokens into a Decision Transformer policy. To support policy refinement and rollout, ClinSDT further trains a Treatment-Response Forecaster to estimate the next physiological state, SAPS-II change, and predictive uncertainty from state-action inputs. In the second training stage, the forecaster screens local counterfactual treatment candidates, and only low-uncertainty candidates with lower predicted SAPS-II increase are distilled into the policy after semantic regeneration. During inference, ClinSDT performs closed-loop treatment rollout by refreshing semantic inputs from the currently available patient state. Experiments on MIMIC-III and MIMIC-IV show that ClinSDT achieves consistent relative improvements over representative imitation learning, offline reinforcement learning, and Decision Transformer baselines under the same rollout protocol. Code and data are available at https://github.com/KAG778/ClinSDT.",
    "published": "2026-10-18T08:57:28Z",
    "updated": "2026-10-18T08:57:28Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.25121"
  },
  {
    "id": "2610.25120",
    "title": "LC-TSRNet: A Land-Cover-Guided Two-Stage Network for Annual MODIS Surface Reflectance Time Series Reconstruction",
    "authors": [
      "Wenjuan Zhang",
      "Xuesong Ma",
      "Zhen Li",
      "Meixiang Wang",
      "Caimeng Yi",
      "Jie Pan",
      "Nan Su",
      "Bing Zhang"
    ],
    "abstract": "MODIS surface reflectance (SR) products often suffer from data gaps due to cloud contamination and sensor malfunctions, limiting their applications in long-term and large-scale studies. Most existing methods rely on cloud-free observations from optical time series or introduce SAR time series as auxiliary information. However, due to the coarse spatial resolution of MODIS, cloud-free reference images are difficult to obtain, and SAR imagery is not well matched to the spatial resolution of MODIS, making it difficult to provide effective prior constraints. To address these issues, this study proposes LC-TSRNet for seamless reconstruction of annual MODIS SR products. In the first stage, an annual land cover map is introduced as prior knowledge, and CSPM is designed by leveraging the spectral similarity within identical land cover types, thereby providing prior spectral constraints for missing regions. In the second stage, to address large-area, persistent, and overlapping gaps in MODIS imagery, SMRM is designed to adaptively exploit and integrate multi-scale spatiotemporal contextual information. Meanwhile, to address the limited collaborative utilization of spatio-temporal-spectral information, 3DAM is designed to impose cross-dimensional joint constraints. Considering the lack of publicly available MODIS sample datasets, this study constructs the AIRMOD-TSR dataset. Extensive experimental results show that LC-TSRNet outperforms the comparison methods and achieves better reconstruction accuracy and spectral fidelity. Under the spatially adjacent scenario, LC-TSRNet improves PSNR by 0.56 dB and reduces SAM by 0.13°. The vegetation monitoring application further verifies the practical value of the reconstructed SR time series.",
    "published": "2026-10-18T08:56:45Z",
    "updated": "2026-10-18T08:56:45Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.25120"
  },
  {
    "id": "2610.25114",
    "title": "Compile Once, Run Cheap: Frozen, Portable Skills for Embodied Agents, and What Recursive Self-Improvement Adds",
    "authors": [
      "Jingwen Bai",
      "Guochao Bai",
      "Canbo Zhang",
      "Shuangqi Li",
      "Minchao Hu",
      "Weichun Huang",
      "Shuang Liu"
    ],
    "abstract": "Embodied AI lacks the data-rich pretraining that gave language models their agents and skills, so new manipulation capability costs demonstrations per task or a frontier model in every episode. We study a third route: a strong general model acts only as an offline author that writes, runs, diagnoses and repairs a manipulation skill in simulation until it passes an exam on layouts drawn after freezing; the frozen skill then runs as code alone or under a cheap caller that reads only its description. We call this skill-level recursive self-improvement Skill-RSI and specify a compile protocol (isolated, audited author; hidden validation layouts; no-feedback and inherit-only controls; tamper-evident ledger) and a reuse protocol that runs the identical files with executors from another model family. On 7 RoboTwin 2.0 tasks with cluttered tables, Claude Code compiled 4 tasks into 7 frozen skills, 5 from a first draft needing only qualification, at USD 4.29-8.22 of author cost each (USD 55 per skill counting the 13 failed campaigns). The other three tasks did not compile in 18 campaigns, including five with GPT-6 and a pre-registered 150-layout run: on the hardest task every campaign scored 78-95 of 100 but had 3-16 safety aborts, failing the gate of 95% success with zero aborts; a 100-episode exam bounds an abort rate only to 3.6%. On hidden layouts, repair that inherits the previous version beat from-scratch rewriting in 8 of 8 controlled campaigns (sign test p = 0.004); an inherit-only lineage attributes most of the gap to inheritance, with development feedback adding a little (3 of 3, p = 0.125). Write-once campaigns found no detectable first-draft effect of practice (minimum detectable effect 14 points). The frozen skills kept 148/150 successes on new layouts with no model and 147/150 with a DeepSeek-flash caller at USD 0.00028-0.00054 per episode; no direct-control baseline was run.",
    "published": "2026-10-18T08:46:13Z",
    "updated": "2026-10-18T08:46:13Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.25114"
  },
  {
    "id": "2610.25113",
    "title": "Self-organizing reinforcement learning: a learner-free swarm approaches the explore-exploit optimum",
    "authors": [
      "Galen J. Wilkerson"
    ],
    "abstract": "The explore/exploit trade-off is the core problem of reinforcement learning (RL). We show that a minimal foraging swarm approaches its optimum - the ideal-free / Nash allocation of a multi-agent resource-sharing game (an equilibrium, not a return maximum) - with no learner and no reward signal. Agents explore by heavy-tailed (Levy) flights, recruit neighbours to a discovery through a threshold cascade on their proximity network, and disperse as a patch crowds; this cascade cycle balances exploration and exploitation and drives foragers toward the ideal free distribution. The swarm attains the shape of this optimum (committed foragers track richness with slope 0.94) but not its exact equilibrium - it stays measurably exploitable - reaching it dynamically (~150 steps) through the coupling of recruitment to movement: remove the coupling and matching collapses (0.94 -> 0.08). The RL sits at the level of the problem and the allocation reached, not the micro-rule: no step evaluates payoff (reward-free by construction, though the crowd signal is informationally tied to payoff), and the swarm reaches the allocation without learning it (quality plateaus and re-settles after resources move, no cumulative gain). Against a trained baseline the comparison is two-sided: in an easier, disembodied game a learner is more precise, while in the same embodied environment the reward-free swarm reaches ~65% of a validated oracle ceiling at zero training and leads until trained PPO and centralised-critic (CTDE) learners overtake it (~74-75%, 16 seeds, all above the swarm mean) after ~4,000 of 15,000 training steps - its advantage is in budget, not asymptote. In this one setting we read it not as beating RL but as a strong zero-shot, reward-free operating point: a demonstration that the self-organizing physics of a minimal swarm can carry a collective close to the optimum RL seeks, with none of RL's machinery.",
    "published": "2026-10-18T08:45:51Z",
    "updated": "2026-10-20T19:20:05Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.SI",
      "math-ph",
      "nlin.AO",
      "physics.bio-ph"
    ],
    "url": "https://arxiv.org/abs/2610.25113"
  },
  {
    "id": "2610.25111",
    "title": "Explore or Confirm? LLM Agents Misallocate Measurements Under Noise",
    "authors": [
      "Abdul Karim",
      "Matt Keon"
    ],
    "abstract": "As model reasoning gets cheaper, the physical experiment becomes the slow and costly step in discovery. Each experiment returns a noisy reading: a high value can mean a good candidate or a lucky draw. With a fixed budget, an AI agent must keep choosing between exploring a new candidate and confirming a promising one by re-testing it. We measure that choice in Wellocate, a simulated assay campaign with known true values. It is built on a generated landscape and on two real protein datasets, GB1 and PhoQ, scrambled so no model can answer from memory. We test five language models as minimal agents, with no tools and no memory beyond the history in each prompt. They misallocate in both directions. Three over-confirm, spending most of the budget re-testing. On the generated landscape one under-confirms, trusting single readings, and there every model ends with a worse final pick than a basic scripted strategy. Each failure has its own cause. The over-confirmers run short of new candidates worth trying: a list of untried candidates cuts their re-testing and, on real protein data, makes two of them pick much better. A running summary of their readings or a description of the landscape changes it by at most five percentage points. For the under-confirmer, re-testing its top candidates in a final round, replayed on its own campaigns, recovers only about a quarter of what it loses by picking the wrong candidate. This suggests confirmation has to run through the whole campaign. We release Wellocate as a benchmark and reinforcement-learning environment with frozen splits and scripted baselines. With it, anyone can measure how an agent splits its budget before trusting it with real experiments, and train agents to split it better. Code, data and the environment are available at https://github.com/Xstendyl/wellocate.",
    "published": "2026-10-18T08:44:06Z",
    "updated": "2026-10-18T08:44:06Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.25111"
  },
  {
    "id": "2610.25098",
    "title": "Pre-Query Retention with Bounded Bit and Word Retrieval",
    "authors": [
      "Pranav Singh",
      "Prashant Singh"
    ],
    "abstract": "An agent can retain information before receiving a future question and later retrieve evidence from an archive. Evaluating this arrangement requires accounting for both retained information and the width of each retrieval response. Decision-tree capacity bounds describe individual sets of distinguishable records, but a memory writer must encode every possible record before the query is known. We study fixed-length retention beside an immutable binary archive, with a worst-case limit on raw bit or word reads. We characterize feasible one-bit-read memory cells and construct encoders that partition the complete record space. Supporting pairwise exclusive disjunction and conjunction with one bit read is equivalent to supporting every Boolean query. For multiple reads, we combine explicit encoders with decision-tree counting and an entropy converse. The word-read bounds differ by at most two retained bits when the read budget is at most half the archive length. Under an explicit condition on word width and archive length, raw-word caching attains the exact optimum among all writers. A related condition preserves this optimum under positive average error. Exhaustive checks validate the implementations. In a matched dialogue-agent study, a categorical sufficient statistic preserves source decisions with less storage and lower decoding latency than the universal encoder. A catalogue-specific index reduces private state further and requires additional shared storage. The results characterize how response width and future query structure determine retention requirements.",
    "published": "2026-10-18T08:19:34Z",
    "updated": "2026-10-18T08:19:34Z",
    "categories": [
      "cs.IT",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.25098"
  },
  {
    "id": "2610.25096",
    "title": "Toward Agentic Retrieval-Augmented Generation for Enterprise Retail Workflows over Heterogeneous Data Sources",
    "authors": [
      "Jeonghwan Choi",
      "Jibin Hwang",
      "Hayoon Park",
      "Hyeonjae Cheon",
      "Hwanjun Song"
    ],
    "abstract": "Enterprise retail workflows require agents to chain evidence across heterogeneous sources, from structured product and order records to unstructured inquiries and reviews, yet existing agentic RAG benchmarks rarely capture this challenge. To enable controlled evaluation of such workflows, we introduce RetailBridge, a compositional retail benchmark built from persona-driven simulations. Its questions are constructed by linking entities and intermediate answers across heterogeneous sources, requiring agents to identify the relevant sources, carry evidence between them, and produce a grounded answer. To systematically evaluate LLMs on these retail workflows, we develop RetailRAG, a retail-aware framework equipped with auto-schema briefing, source-routed plan chaining, and diagnostic plan revision. RetailRAG consistently outperforms existing agentic RAG baselines across all evaluation axes, serving as a strong reference system for assessing LLM agents on retail workflows. On RetailBridge, evaluating ten LLM backbones with RetailRAG reveals multi-source chaining as the dominant bottleneck across providers and model scales, suggesting that reliable retail agents require explicit cross-source orchestration rather than scaling alone. Code and data are publicly available at \\url{https://github.com/DISL-Lab/RetailBridge}.",
    "published": "2026-10-18T08:15:12Z",
    "updated": "2026-10-18T08:15:12Z",
    "categories": [
      "cs.AI",
      "cs.IR"
    ],
    "url": "https://arxiv.org/abs/2610.25096"
  },
  {
    "id": "2610.24414",
    "title": "S3D-Mosaic: Subgradient-Guided Cross-Band Structure Transfer for Spectral Demosaicing",
    "authors": [
      "Weiqiang Zhao",
      "Xian Li",
      "Yuzhe Gui",
      "Tianzhu Liu",
      "Yanfeng Gu"
    ],
    "abstract": "Multispectral filter array (MSFA) imaging enables snapshot spectral acquisition, but its per-band sparse sampling causes severe spatial aliasing. Although missing spatial structures can be inferred across bands, wavelength-dependent contrast variations make direct cross-band transfer unreliable. Existing model-based methods lack explicit magnitude-invariant mechanisms, and learning-based methods require layout-specific training or per-image tuning, limiting generalization. To address these issues, we propose S3D-Mosaic, a model-based spectral demosaicing method built upon a subgradient-guided cross-band structure transfer framework. We first establish a subgradient-guided regularization framework with a generalized cosine-similarity interpretation, providing a convex mechanism for magnitude-invariant information transfer. Then we design a compact Directional Sparse Equivariant Difference Convolution (DSE-DConv) for band-level extraction of orientation-selective, high-frequency structure features at low computational cost. Instantiating the framework with DSE-DConv on spectrally adjacent bands yields a cross-band self-structure similarity regularizer for spectral demosaicing, which we optimize via a dual-scan ADMM algorithm that decouples the bidirectional dependency while propagating magnitude-robust structural information across bands. With DSE-DConv's two parameters trained once via self-supervision, S3D-Mosaic outperforms state-of-the-art unsupervised methods on CAVE and NTIRE 2022, and generalizes robustly to varying MSFA layouts, pan-mosaic fusion, and real-world UAV data with fixed reconstruction hyperparameters. The source code is available at \\url{https://github.com/bestwishes43/S3D-Mosaic}.",
    "published": "2026-10-17T03:29:24Z",
    "updated": "2026-10-17T03:29:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.24414"
  },
  {
    "id": "2610.24409",
    "title": "Long Listening Thoughts: Eliciting Open Auditory Reasoning with Deliberative Perception and Cognitive Refinement",
    "authors": [
      "Jaeyeon Kim",
      "Chao-Han Huck Yang",
      "Luoyi Zhang",
      "Chan-Jan Hsu",
      "Fernando Ruiloba Portilla",
      "Jinchuan Tian",
      "Shinji Watanabe",
      "Carlos Busso"
    ],
    "abstract": "We introduce Long Listening Thoughts (LLT), a framework for constructing post-training datasets that improves audio reasoning by pairing deliberate perceptual grounding with explicit cognitive behaviors. On audio understanding and reasoning benchmarks, large audio-language models (LALMs) are limited primarily by perceptual errors, yet existing post-training datasets rely on audio descriptions of limited diversity. Through a four-stage pipeline, LLT (1) builds multi-aspect dense audio descriptions spanning semantic, acoustic, and temporal information, (2) generates more challenging questions, (3) synthesizes incorrect reasoning traces, and (4) extends short reasoning traces into long ones via a thought-continuation strategy that elicits cognitive behaviors such as verification and backtracking. Using LLT, we synthesize 1.6M reasoning traces and train Qwen2.5-Omni-7B with a two-stage pipeline of supervised fine-tuning (SFT) followed by direct preference optimization (DPO). This improves accuracy on MMAU Test-mini (71.5 to 78.2), MMAR (56.7 to 63.7), and MMSU (60.6 to 66.0).",
    "published": "2026-10-17T03:20:36Z",
    "updated": "2026-10-17T03:20:36Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "cs.CL",
      "eess.AS"
    ],
    "url": "https://arxiv.org/abs/2610.24409"
  },
  {
    "id": "2610.24405",
    "title": "ZeroDSS: Semantic Segmentation from Class Names Alone",
    "authors": [
      "Tian Ming",
      "Marzi Heidari",
      "Yuhong Guo"
    ],
    "abstract": "Semantic segmentation depends heavily on real images with pixel-level annotations, making dense supervision a major obstacle to deployment in new domains. We study task-specific data-free semantic segmentation, where training uses generic pretrained generative priors but has access to no target-domain images, masks, or captions--only a predefined category set. We introduce Zero-Data Semantic Segmentation (ZeroDSS), a feedback-driven approach that treats synthetic supervision as an adaptively controllable training distribution rather than a direct surrogate for real data. ZeroDSS constructs a semantically structured prompt distribution through LLM-guided compositional generation and adaptive class rebalancing, then converts the prompts into image-mask pairs using diffusion attention. Its feedback-driven distribution refinement consists of a two-phase closed-loop training procedure with a single loop-back step. In Phase I, a segmenter is trained using confidence-weighted supervision and dual-scale consistency. In Phase II, model feedback is used to adaptively target underperforming categories and refine diffusion-derived masks using model predictions. After this refined initial training, a teacher-student framework is utilized in the final phase to iteratively improve the fused supervision and segmenter through exponential moving average (EMA) updates. Using synthetic training data only, ZeroDSS achieves 35.0% mIoU on MS COCO with DeepLabV3, and 66.3% and 63.5% mIoU on PASCAL VOC with DeepLabV3 and Mask2Former, respectively. These results show that explicitly constructing and iteratively refining the synthetic supervision distribution can substantially reduce the synthetic-to-real gap in dense prediction.",
    "published": "2026-10-17T03:14:33Z",
    "updated": "2026-10-17T03:14:33Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.24405"
  },
  {
    "id": "2610.24400",
    "title": "Spatons: Spatiotonally Localized Building Blocks for Efficient XR Predistortion",
    "authors": [
      "Mohammadjavad Maheronnaghsh",
      "Sushant Kondguli",
      "Steve Mann",
      "Andreas Moshovos"
    ],
    "abstract": "We present Spatons, a family of compositional, spatially localized neural operators for computationally efficient XR (extended reality) predistortion and distortion compensation. XR displays (AR, VR, and MR) suffer from spatial (e.g., geometric) and tonal (e.g., colour) distortions. Frames can be pre-distorted so that the projected image looks as intended. Distortions vary with manufacturing tolerances and projection systems, motivating programmable compensation. Untethered, battery-operated XR systems also require low energy and latency. A Spaton is a hybrid patch-to-pixel block combining tiny Multi-Layer Perceptrons (MLPs) with fixed-function interpolation. Using Spatons, we build programmable, computationally efficient pipelines for varied distortion scenarios. On the full spatiotonal Scenario 5, Sequential-5' matches CompenNet++ in SSIM (0.944 vs. 0.944) and closely matches its PSNR (27.5 vs. 27.7 dB), with substantially lower complexity. We demonstrate a flexible Spaton solution with 6 times fewer FLOPs and 106 times fewer parameters than CompenNet++, and 4-10 times fewer memory transfers than UNet++. We characterize software implementations and analytical hardware estimates, including optimizations across target XR platforms. The distortions considered are drawn mostly from see-through, near-eye displays, where the spatial light path governs local intensity and spectral response. This early systems-level exploration uses closed-form differentiable distortions and one real projector-camera capture set for training and evaluation, rather than through-the-optics measurements. Testing on a wider range of real XR devices remains future work. Chromatic dispersion (color fringes) remains the main artifact where Spatons trail monolithic baselines.",
    "published": "2026-10-17T03:11:05Z",
    "updated": "2026-10-17T03:11:05Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.24400"
  },
  {
    "id": "2610.24395",
    "title": "MSCR: Jointly Balancing Utilization Across Modalities and Discovering Synergistic Information",
    "authors": [
      "Xinyu Chen",
      "Liangjian Wen",
      "Jiang Duan",
      "Dongkai Wang",
      "Yong Dai",
      "Jiayu Bai",
      "Jianzhuang Liu",
      "Zhen Tian",
      "Guoping Qiu",
      "Zhao Kan"
    ],
    "abstract": "In multimodal learning, modality imbalance often lets one modality dominate optimization and keeps the model from fully exploiting cross-modal interactions. Balance-oriented methods such as the Multimodal Competition Regularizer (MCR) perform well by alleviating this imbalance during training. These dynamic balancing methods, however, mainly adjust modality contributions and do not consider how imbalance affects the formation of synergistic information during fusion. Synergy is a major source of multimodal advantage, because it is predictive gain that cannot be recovered from unimodal evidence alone. We propose the Multimodal Synergistic Competition Regularizer (MSCR), a fusion method that jointly promotes balanced modality utilization and the discovery of synergistic information. MSCR has two complementary objectives. An anti-dominance objective suppresses excessive unimodal influence and leaves room for synergistic information, and a synergy objective encourages the fused predictor to outperform a non-synergistic unimodal reference. An adaptive gate further concentrates the regularization on samples that need stronger collaborative modeling. Experiments on five benchmarks show that MSCR consistently improves performance over MCR and strengthens synergistic capability. It raises conditional recovery, the accuracy of the fused prediction on samples that the unimodal predictors misclassify, as well as the share of the model's output that InterSHAP attributes to cross-modal interactions. Its gain in conditional recovery persists when the fusion module is Transformer-based. Code is available at https://github.com/chenxinyu991-collab/MSCR.",
    "published": "2026-10-17T02:54:30Z",
    "updated": "2026-10-17T02:54:30Z",
    "categories": [
      "cs.AI",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.24395"
  },
  {
    "id": "2610.24390",
    "title": "Trust the Edge, Doubt the Arrow: Auditing Validation Signals for Text-Mined Clinical Causal Knowledge Graphs",
    "authors": [
      "Su Lan",
      "Shicheng Zhou",
      "Yiqi Wang",
      "Yanming Zhu",
      "Xuefei Yin",
      "Alan Wee-Chung Liew"
    ],
    "abstract": "Clinical causal retrieval-augmented generation systems increasingly use knowledge graphs (KGs) mined from notes, yet extracted assertions remain candidates that require audit for patient-level EHR support and direction. We construct a directed candidate graph from 328,839 MIMIC-IV discharge summaries using LLM extraction and UMLS normalization, and evaluate three signals against SemMedDB: within-admission co-occurrence lift, cross-admission diagnosis-coding temporal precedence, and literature corroboration. Lift filters unsupported co-mentions and provides useful EHR support, but not causal proof. Coding order is a weak direction signal: among the 686 candidates where it commits, it reaches 54.2% agreement with SemMedDB, below the extractor's 69.4% on the same subset. Literature corroboration supplies independent direction evidence but covers only 30.4% of candidate relations. A MIMIC-III replication yields the same pattern: extractor direction remains stable (70.5%), whereas coding-order direction is near chance (50.9%). Thus, text-mined clinical causal candidate KGs are best treated as EHR-supported but direction-uncertain. In a leakage-controlled causal QA benchmark, lift-only retrieval achieves 35.7% accuracy; conservative causal demotion achieves 37.2% while reducing evidence-unsupported answers from 17.3% to 6.1% at fixed retrieval recall. We release code, aggregate summaries, and scripts to regenerate restricted outputs.",
    "published": "2026-10-17T02:46:57Z",
    "updated": "2026-10-17T02:46:57Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.24390"
  },
  {
    "id": "2610.24389",
    "title": "From Neglect to Resignation: Understanding the Evolution of Mobile Privacy",
    "authors": [
      "Yibo Meng",
      "Ziqi Liu",
      "Lionel Z. Wang",
      "Shuning Zhang",
      "Xiaolan Ding"
    ],
    "abstract": "This decade-long longitudinal qualitative study follows 31 smartphone users in China across four interview waves (2014-2023) to examine how mobile privacy understanding evolves alongside shifting computing infrastructures. Findings reveal three stages shaped by distinct interactional mechanisms: early functional acceptance of permission-based data access, growing vigilance triggered by behavioral tracking feedback loops, and eventual resignation as AI-driven inference made ecosystem-level profiling feel inescapable. Rather than a stable attitude, digital resignation emerges through cumulative infrastructure exposure, as each new system layer retroactively reinterpreted earlier permissions and exhausted users' capacity for self-management. The study challenges permission-centric design assumptions and proposes inference visibility, context isolation, and automated privacy agency as system-level responses.",
    "published": "2026-10-17T02:44:39Z",
    "updated": "2026-10-17T02:44:39Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.24389"
  },
  {
    "id": "2610.24385",
    "title": "Bridging Exploration and Persona: Information-Directed Dueling for Test-Time Agent Personalization",
    "authors": [
      "Jie Mao",
      "Pingchen Lu",
      "Xiangyi Wang",
      "Hengquan Huang",
      "Shuang Qiu",
      "Min Zhang",
      "Zhongxiang Dai"
    ],
    "abstract": "Effective test-time personalization requires LLM agents to adapt to query-dependent user preferences from lightweight interaction. We study persona selection with binary comparisons between candidate responses as the online signal. We present ID-TAP, a scalable, IDS-inspired neural dueling-bandit framework for large discrete persona spaces. ID-TAP combines a query-conditioned neural utility model with a lightweight Bradley-Terry explorer, and transfers comparison evidence across related queries through similarity-weighted warm starts. The neural model shares statistical strength across queries while preserving query-specific scores, and efficient BT updates score hypothetical challengers. Across seven user-conditioned generation benchmarks under reference- and model-based preference simulators, ID-TAP achieves the strongest aggregate performance among the evaluated baselines within a fixed ten-round comparison budget. These results support information-directed challenger selection as an effective design for test-time persona adaptation.",
    "published": "2026-10-17T02:40:47Z",
    "updated": "2026-10-17T02:40:47Z",
    "categories": [
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2610.24385"
  },
  {
    "id": "2610.24383",
    "title": "IF-MAP: Influence-Function-Inspired Agent Prioritization in Multi-Agent Systems",
    "authors": [
      "Jie Mao",
      "Pingchen Lu",
      "Zikun Qu",
      "Jiahang Sun",
      "Xiangyi Wang",
      "Zhiwei Shang",
      "Zhiyong Wang",
      "Guojun Xiong",
      "Zhongxiang Dai"
    ],
    "abstract": "Improving every agent in an LLM-based multi-agent system can be prohibitively costly, making it important to identify which agent should be prioritized to achieve the greatest system-level gain with limited resources. Failure attribution can inform this decision, but an agent's responsibility for failures does not directly reveal the system-level gains achievable by improving it. We therefore introduce IF-MAP, an influence-function-inspired method for identifying agents with high potential for system-level improvement. For each agent, IF-MAP measures end-to-end loss changes under controlled semantic prompt perturbations, fits a regularized local response model in a low-dimensional prompt-embedding subspace, and uses the estimated response norm as a priority score. This black-box procedure requires no access to model parameters or gradients and produces agent priorities that can guide subsequent improvement effort. We evaluate IF-MAP across six multi-agent workflows spanning code generation, question answering, and mathematical reasoning, using the same priorities for prompt optimization and model upgrades. Optimizing the selected agents' prompts achieves a macro-average gain of 3.81 percentage points, compared with 1.85 for uniform agent selection. Across five target models, upgrading the selected agents yields macro-average gains of 7.62-16.42 percentage points, compared with 3.81-8.62 for uniform agent selection. Despite its probing overhead, IF-MAP reduces Qwen3-8B and DeepSeek-V3.2 token use by 74.2% and 35.2%, respectively, relative to optimizing every agent, and reduces target-model tokens by 63.6-64.9% relative to upgrading every agent. These results support the use of IF-MAP to identify promising agents and direct improvement effort toward greater end-to-end performance gains.",
    "published": "2026-10-17T02:36:35Z",
    "updated": "2026-10-17T02:36:35Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.24383"
  },
  {
    "id": "2610.24382",
    "title": "Is This Your Agent? Identity Watermarking for Agent Systems in Dynamic Environments",
    "authors": [
      "Yuwei Zhong",
      "Yu Cheng",
      "Jiuan Zhou",
      "Weizhi Liu",
      "Yi Xie",
      "Yongkang Hu",
      "Yuan Xie",
      "Zhaoxia Yin"
    ],
    "abstract": "Agent systems deployed in dynamic environments continuously update their memories, skills, and runtime configurations, leading to evolving trajectories and challenges for persistent identity authentication. Existing text and agent watermarking methods struggle to achieve stable watermark embedding under dynamic environments, while embedded watermarks may become difficult to recover due to environmental changes. This paper proposes DASMark, an identity watermarking framework for dynamic agent systems. DASMark introduces Action-Preserving Embedding (APE), which learns semantically similar but distinguishable decision-expression channels from diverse interaction trajectories to enable stable watermark embedding in dynamic systems. It further introduces Shift-Robust Recovery (SRR) to mitigate context-induced shifts and improve watermark recovery stability under dynamic environments. In dynamic settings, DASMark achieves 98.5% bit-decoding accuracy and maintains 95.2% accuracy under attack scenarios, while preserving task utility comparable to unwatermarked agents.",
    "published": "2026-10-17T02:27:55Z",
    "updated": "2026-10-17T02:27:55Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.24382"
  },
  {
    "id": "2610.24381",
    "title": "Learning from the Right Regions: Class-Conditioned Explanation Guidance for Medical Imaging",
    "authors": [
      "Zubair Faruqui",
      "Rahul Dubey"
    ],
    "abstract": "Deep neural networks can achieve strong predictive performance in medical imaging while relying on regions unrelated to the predicted finding. Explanation-guided learning can address this problem, but multi-label classification introduces a key challenge: multiple abnormalities may coexist in an image, requiring each prediction to align with its corresponding spatial evidence. We propose a class-conditioned explanation-guided learning framework that constructs a separate explanation for each positive class and penalizes evidence outside its class-specific annotated regions. We instantiate the framework using Gradient-weighted Class Activation Mapping (Grad-CAM) and evaluate it on 14 abnormalities using EfficientNet-B1, ViT-B/16, ViT-B/32, and Swin-B. Explanation guidance substantially improves annotation alignment across all architectures: All-Saliency Precision increases from 0.140 to 0.625, 0.052 to 0.551, 0.060 to 0.403, and 0.095 to 0.570, respectively. These improvements are accompanied by smaller, architecture-dependent changes in classification performance. Our results show that class-conditioned explanation guidance can substantially improve where multi-label classifiers concentrate their explanatory evidence while largely preserving predictive performance.",
    "published": "2026-10-17T02:27:03Z",
    "updated": "2026-10-17T02:27:03Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.24381"
  },
  {
    "id": "2610.24380",
    "title": "Train Locally, Learn Together: Distributed Multi-Agent Training via ADMM",
    "authors": [
      "Yiwei Chen",
      "Changsheng Wang",
      "Yicheng Lang",
      "Qing Qu",
      "Alfred O. Hero",
      "Sijia Liu"
    ],
    "abstract": "Multi-agent systems (MAS) can outperform individual language-model agents by combining specialized roles, diverse reasoning processes, and collaborative decision-making. However, collaborative MAS training is typically centralized, requiring a common trainer to aggregate role-local trajectories and learning signals and maintain model and optimization states. This motivates a distributed multi-agent learning paradigm in which agents improve system-level capabilities through role-local learning and decentralized communication, paving the way toward scalable, resilient, and self-organizing MAS. To this end, we introduce, to the best of our knowledge, the first optimization-grounded framework for distributed MAS training based on consensus alternating direction method of multipliers (ADMM). We formulate collaborative MAS learning as a consensus-constrained finite-sum optimization problem, naturally lending itself to distributed optimization via ADMM. The proposed approach alternates role-local learning with inter-agent consensus using distributed communication protocols such as ring all-reduce, enabling joint optimization while keeping each agent's data and training state local. We evaluate our framework on distributed safety alignment and general reasoning tasks. Under compromised-agent settings, ADMM can reduce HarmBench attack success rate (ASR) by up to 26.4%, while achieving reasoning gains comparable to centralized training. These results show that distributed MAS training retains the benefits of centralized joint optimization without requiring a centralized trainer.",
    "published": "2026-10-17T02:26:46Z",
    "updated": "2026-10-17T02:26:46Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.24380"
  },
  {
    "id": "2610.23663",
    "title": "PCDFusion: Proposal-Context-Detail Bayesian Rendering for Infrared-Visible Image Fusion",
    "authors": [
      "Rui Liu",
      "Lin Gu",
      "Hesong Li",
      "Ying Fu"
    ],
    "abstract": "Infrared-visible image fusion (IVIF) aims to combine visible and thermal infrared observations for human perception and downstream vision tasks. Visible and thermal infrared observations are physically complementary but unreliable in different ways. Existing deep IVIF methods mainly improve feature interaction and reconstruction, but often lack an explicit local rule for deciding when visible appearance should dominate and when thermal responses should contribute. To address this issue, we reformulate IVIF as local Bayesian posterior rendering, where fusion is controlled by posterior action weights rather than direct modality mixing. In this paper, we propose Proposal-Context-Detail Fusion (PCDFusion), a visible-anchored framework that implements this formulation through three rendering stages. PCDFusion preserves potentially useful thermal responses, updates exposure-degraded visible regions, and renders reliable band-limited infrared structures into the final luminance. Extensive experiments on public IVIF benchmarks show that PCDFusion improves fusion quality, target recovery, and downstream detection and segmentation performance under challenging illumination. The code is available at https://github.com/BIT-RuiLiu/PCDFusion.git.",
    "published": "2026-10-16T15:56:59Z",
    "updated": "2026-10-16T15:56:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23663"
  },
  {
    "id": "2610.23661",
    "title": "An Efficient Approach to Beetle Damage Detection of Banana Using Deep Learning",
    "authors": [
      "Md. Mehedi Hasan Naeem",
      "Ishtiyak Ahmmad Araf",
      "Md. Arefin Haque Mahir",
      "Tushar Kanti Saha"
    ],
    "abstract": "Visible surface damage of banana fruits by Basilepta subcostata (the banana fruit scarring beetle) can reduce their market value. Here, manual inspection of Banana fruits is subjective and difficult to scale. This study presents a lightweight framework based on YOLOv8n deep learning model for locating individual bananas and classifying their visible surface condition as healthy or unhealthy. The term beetle damage in the paper title is used operationally for the locally observed scar-like surface condition; the model does not identify a specific beetle species or biological cause. A custom dataset of 2,473 images containing 5,827 annotated banana instances was prepared from local-market imagery in Bangladesh. The reported experiment used an 80/20 protocol with 1,982 training images and 491 test images. A pretrained YOLOv8n model was trained at 640x640 resolution for 50 epochs with a batch size of 4. On the test partition, it achieved 81.36% precision, 74.30% recall, 77.67% F1-score, 87.04% mAP@0.50 and 59.33% mAP@0.50:0.95. A YOLOv8s comparison gave slightly lower F1 and mAP while using a substantially larger checkpoint. The YOLOv8n checkpoint occupied 5.96 MB and required 6.54 ms/image for inference on an NVIDIA Tesla T4. The results support YOLOv8n as a compact baseline for instance-level banana surface inspection within the studied acquisition conditions.",
    "published": "2026-10-16T15:55:23Z",
    "updated": "2026-10-16T15:55:23Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.23661"
  },
  {
    "id": "2610.23659",
    "title": "FlexPart: Text-Controlled Semantics-Aware 3D Part Segmentation at Flexible Granularity",
    "authors": [
      "Yiqun Zhao",
      "Jiachen Xu",
      "Yihao Zhi",
      "Yunfei Zhao",
      "Zibo Zhao",
      "Xintong Han",
      "Chunchao Guo",
      "Shenghua Gao"
    ],
    "abstract": "A 3D asset admits multiple valid part decompositions, while semantics-aware segmentation should reflect both the desired granularity and the parts a user wants to extract. Ideally, a practical segmentation model should strive for a simple principle: what you ask for is what you get. However, realizing this goal is hindered by two core obstacles: the lack of multi-granularity training data and the absence of a holistic control mechanism. We propose FLEXPART, a unified framework for text-controlled 3D mesh segmentation. To establish flexible control, we introduce a holistic control prompt comprising semantic part names with location and shape clauses. To support this mechanism, we utilize an automated Vision-Language Model (VLM) pipeline to construct a large-scale dataset of multi-granularity partitions and their corresponding prompts. Driven by this data, FLEXPART generates a view-independent part-identity field in native 3D space, directly assigning discrete part IDs to mesh faces. To compel the model to respect semantic conditions rather than rely on geometric priors, we train the model using randomized background dropping. Furthermore, an inference-time VLM planner can automatically complete descriptive clauses from 2D renderings, allowing users to simply name the desired parts in ordinary words. FLEXPART with planner-completed prompts outperforms the strongest evaluated baseline by 15% in mIoU, even when that baseline receives ground-truth guidance. On our held-out FLEXPARTBENCH, FLEXPART leads at each granularity and improves average mIoU by 22% over the strongest baseline. With only the requested part names supplied by the user, it also improves IoU by 35% over the strongest click-driven baseline on selective segmentation.",
    "published": "2026-10-16T15:54:52Z",
    "updated": "2026-10-16T15:54:52Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23659"
  },
  {
    "id": "2610.23653",
    "title": "A Language-Informed Loss for Visual Generation",
    "authors": [
      "Suchir Agarwal",
      "Keshigeyan Chandrasegaran",
      "Ziyu Chen",
      "Kyle Sargent",
      "Juan Carlos Niebles",
      "Li Fei-Fei",
      "Jiajun Wu"
    ],
    "abstract": "End-to-end visual generation with pixel-space loss has recently achieved competitive performance without the need for learned image tokenizers. In this work, we study whether language-informed supervision can provide a richer training signal than pixel loss for visual generation. We introduce LILIE (pronounced \"lily\"), a Language-Informed and Lossless Image Encoder. LILIE is an invertible image transform trained such that a vision-language model can recover captions from noised features. The encoder uses a normalizing flow transformer trained jointly with a vision-language model via next token prediction. We then use the encoder to extract a simple language-informed loss for text-to-image generation. We train JiT models with LILIE loss, reducing gFD by 14 points (66.84 $\\to$ 53.01) against a pixel-only baseline on the GPIC dataset. Our code, encoders, and generative models are available at https://suchiragarwal.com/lilie.",
    "published": "2026-10-16T15:49:12Z",
    "updated": "2026-10-16T15:49:12Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.23653"
  },
  {
    "id": "2610.23642",
    "title": "Diversity Without Labels: Task-Agnostic Coreset Selection Across Perception and Action",
    "authors": [
      "Julia Hindel",
      "Benjamin Ramtoula",
      "Kyuhwan Yeon",
      "Nick Heppert",
      "Paul Newman",
      "Daniele De Martini",
      "Abhinav Valada"
    ],
    "abstract": "While data collection for model training is relatively easy, curating high-quality datasets from large collections is inherently challenging. Coreset estimation methods address this problem by identifying the best data subsets to train models on. However, existing approaches often require proxy model training, extensive annotations, or task-specific tailoring. Unsupervised alternatives typically exploit geometric properties in foundation model feature spaces, but are limited to pairwise image-to-image comparisons or comparisons against a fixed subset. We introduce CoreDNA, an unsupervised, task-agnostic coreset estimation approach that pools neuron activations from vision foundation models into per-image and per-dataset distributions. By comparing each image's distribution to the dataset-level distribution, CoreDNA can capture both low-level visual structure and high-level semantic information across layers. We find that high-quality samples concentrate in the tails of the last layer's activation statistics, which we validate by relating them to training-based coreset methods. Building on these findings, we develop a computationally efficient selection mechanism to construct task-agnostic, high-quality coresets for selective annotation and model training. Across image classification, semantic segmentation, depth estimation, and imitation learning for end-to-end driving and mobile manipulation, CoreDNA matches or outperforms the state of the art, demonstrating unprecedented generalization across perception and action tasks. These results highlight the effectiveness of compact activation-based representations for data selection.",
    "published": "2026-10-16T15:43:21Z",
    "updated": "2026-10-16T15:43:21Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23642"
  },
  {
    "id": "2610.23625",
    "title": "PresenceBench: An Exploratory Evaluation of Large Language Model Adaptation to User State",
    "authors": [
      "Peña Arroyo Gallego",
      "Mauro Ruiz Moreno",
      "Alejandro Acien",
      "Sergio Romero-Tapiador",
      "Teresa Arroyo-Gallego"
    ],
    "abstract": "Presence-aware intelligence is the capacity of an AI system's intelligence layer to adapt appropriately to the functional state of the person it serves (here readiness, flow, and stability) while preserving task quality and safety. We introduce PresenceBench, an instrument for measuring it. PresenceBench evaluates how the intelligence layer uses a supplied state, not how that state is sensed, and breaks the capability into measurable properties. Two are tested here. Receptivity: does the model take up the state and give a better response than with no signal? Specificity: does any improvement depend on the correct state, rather than on extra structured context? A third, adaptation across states, is a required endpoint not measured in this release. A five-arm causal design answers both questions, against each model's own baseline and an equally structured mismatched-state control, scored by a correctness-gated human paired comparison. The exploratory evaluation covered four models across eighteen single-turn, six fixed three-turn and six simulated natural-conversation scenarios. Supplying a synthetic state, raw or translated into a response policy, gave human-preference point estimates above 0.5 for all four models (Claude Sonnet 5, DeepSeek V4 Pro, Gemini 3.6 Flash, GPT-5.6 Terra), with three of eight 95% intervals excluding chance. Specificity was not resolved: no per-model interval excluded chance, and the design cannot yet separate the state values from a generic instruction to adapt. Policy delivery reduced priced cost and output tokens against each model's baseline; these are resource-use changes, not efficiency gains, because correctness non-inferiority was not established. Safety-floor failures were rare (13 of 360 cases), with a non-significant excess under policy delivery. We report the instrument, the frozen results, and the controls a confirmatory study needs.",
    "published": "2026-10-16T15:33:04Z",
    "updated": "2026-10-16T15:33:04Z",
    "categories": [
      "cs.HC",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.23625"
  },
  {
    "id": "2610.23621",
    "title": "Stereo LWIR-RGB Automatic Labeling for Low-Light Camera-Based VRU Detection",
    "authors": [
      "Dimitrios Bouzoulas",
      "Pyry Jäppinen",
      "Pejman Habibiroudkenar",
      "Eerik Alamikkotervo",
      "Risto Ojala"
    ],
    "abstract": "VRU detection in low-light conditions is a key component in ensuring VRU safety during the most collision prone time of the day. Currently, advances in low-light detection are limited due to the lack of large scale datasets and automated labeling methods. Most autolabeling methods use RGB detections as their labels source, which cannot be replicated in low-light conditions. To fill this gap in this paper we present an automated pipeline for low-light VRU labeling. We use LWIR-RGB image pairs and source our labels from LWIR as VRUs differentiate from the background due to their body temperature. Unlike our previous work that relied on a complex hardware setup to align the two modalities, we perform this experiment using a LWIR-RGB stereo setup, lowering hardware complexity and cost, making the pipeline easier to reproduce. We evaluate method end-to-end on a dataset collected in the capital region of Finland. Models trained on our generated labels beat both off-the-shelf baselines and models fine tuned on a hand labeled subset on F1, mAP@50 and LAMR metrics when tested on a manually labeled dataset, and the result holds for two different LWIR detectors. This shows that low-light VRU autolabeling can be made both accessible and effective without specialized alignment hardware.",
    "published": "2026-10-16T15:31:37Z",
    "updated": "2026-10-16T15:31:37Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23621"
  },
  {
    "id": "2610.23617",
    "title": "GEMS: Molecular Structure Elucidation as Learned Search over Isomer Graphs",
    "authors": [
      "Utku Umur Acikalin",
      "Yingheng Wang",
      "Goncalo J. Gouveia",
      "Tyler J. Schwertfeger",
      "Frank C. Schroeder",
      "Carla P. Gomes"
    ],
    "abstract": "Identifying small-molecule structures from molecular formulas and tandem mass spectra remains a bottleneck in untargeted metabolomics and natural-product discovery. Even when database retrieval or de novo prediction misses the exact structure, the resulting candidates can provide starting points for exploring nearby structures through a few bond edits. We introduce GEMS (Guided Editing of Molecular Structures), which refines candidates through learned 2-switch bond edits that preserve the molecular formula and each atom's total valence. GEMS uses MIST, a pretrained spectrum-to-fingerprint model, to predict fingerprint probabilities once per spectrum. A neural policy compares each candidate's fingerprint with these predictions, links present features to the atoms and bonds that generate them, and scores all valid edits in one forward pass. The policy is trained on shortest edit paths between structures, so it can be pretrained on PubChem isomers without spectra and then fine-tuned with spectrum-predicted fingerprints. At inference, GEMS searches from multiple initial candidates matching the supplied molecular formula and ranks candidates by fingerprint agreement and multi-start consensus. With the target structure excluded from PubChem initialization, three edit rounds achieve Hit@1/Hit@10 of 29.64%/50.81% on NPLIB1 and 30.22%/41.33% on MassSpecGym, exceeding published baselines under comparable settings. On NPLIB1, GEMS achieves higher identification accuracy in about 3.3 minutes end to end, compared with 26.2 hours for our FRIGID run. GEMS also improves identification from generated candidates, including those refined by FRIGID. Experiments with exact target fingerprints identify fingerprint prediction error as a bottleneck in target recovery and final ranking. Deeper search recovers additional targets without retraining, with larger gains from weaker initial candidates.",
    "published": "2026-10-16T15:28:34Z",
    "updated": "2026-10-16T15:28:34Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.23617"
  },
  {
    "id": "2610.24046",
    "title": "LUMINR: Intensity-conditioned Meta-learned INRs for Accelerated Medical Image Registration",
    "authors": [
      "Damian Rynczak",
      "Marek Wodzinski"
    ],
    "abstract": "Implicit neural representations (INRs) have been applied to deformable image registration, where a lightweight network maps a spatial coordinate to a deformation vector. Because an INR encodes one specific signal in its parameters, a fresh network must be optimized for every image pair at test time, which is slow. Existing methods reduce this cost by meta-learning an initialization across a population of image pairs, and condition the weights of the INR globally, so the same conditioning applies at every coordinate while the deformation field it initializes varies across the domain. We propose LUMINR, a meta-learning framework that accelerates this per-pair fitting and in which the conditioning is local instead. LUMINR uses an INR that maps a coordinate, together with local intensity and gradient features, to a deformation vector, so the conditioning varies over the domain at the resolution of the field being modelled. Its objective is to find an initialization of the INR parameters from which the network can be fine-tuned to register any unseen pair in only a few optimization iterations. We evaluate LUMINR on 3D deformable registration of brain MRI from the OASIS dataset, where local conditioning and the meta-learned initialization prove complementary: early in fitting they reach a markedly higher accuracy than either does alone. Fine-tuned from that initialization, LUMINR matches the accuracy of the same conditioned INR fit from scratch in roughly a tenth of the gradient steps and a tenth of the wall-clock time, while the deformation fields stay smooth with negligible folding.",
    "published": "2026-10-16T15:27:29Z",
    "updated": "2026-10-16T15:27:29Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.24046"
  },
  {
    "id": "2610.23600",
    "title": "Learning to Discriminate Scene Structures Makes Self-Supervised Depth Learning Scalable",
    "authors": [
      "Mengtan Zhang",
      "Yuchuan Cui",
      "Yu Ma",
      "Zizhan Guo",
      "Wei Ye",
      "Rui Fan"
    ],
    "abstract": "Self-supervised monocular depth estimation is appealing for its potential to scale with unlabeled data, yet existing methods often degrade when trained on diverse scenes. This study finds that, under self-supervision, models tend to encode dataset-specific structural biases rather than transferable scene geometry, leading to cross-domain optimization conflicts. To address this issue, this study proposes the MaSS framework, aiming to make self-supervised depth learning scalable to diverse data. MaSS introduces a dedicated structural representation pathway explicitly decoupled from contextual features, which is guided by a novel scene-structure discrimination objective to learn generalized, layout-aware structural representations for depth decoding. Trained and evaluated on four diverse datasets, both individually and jointly, MaSS substantially outperforms prior self-supervised methods and is the first to consistently benefit from mixed-domain training. Zero-shot evaluation on eight additional datasets further demonstrates its remarkable generalizability, particularly on those entirely out-of-distribution scenes. The source code is publicly available at https://mias.group/MaSS.",
    "published": "2026-10-16T15:17:07Z",
    "updated": "2026-10-16T15:17:07Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23600"
  },
  {
    "id": "2610.23599",
    "title": "From Trajectories to Differentiated Skills: Cognitive Differentiation for Self-Improving Agents",
    "authors": [
      "Yewei Zhao",
      "Derong Xu",
      "Wei Chen",
      "Yin Xu",
      "Peilun Zhou",
      "Xiaohan Wang",
      "Guojun Yin",
      "Wei Lin",
      "Mingjun Xiao"
    ],
    "abstract": "Large language model (LLM) agents tackle complex tasks through reasoning and interaction with external environments. Agent skills provide persistent, transferable capabilities that guide task planning, inform contextual decisions, support tool use, and enable executable procedures. Yet existing skill-evolution methods largely organize knowledge around skill artifacts, overlooking the functional heterogeneity within individual skills and its implications for knowledge maintenance and use. Inspired by cognitive science, we propose Cognitive Differentiation in Skill Evolution (CDSE), which evolves a unified skill through four functionally distinct yet coordinated components: Meta, Experience, Tool, and Script. CDSE extracts evidence-grounded semantic gradients from successful and failed trajectories, consolidates them by functional role, and applies component-specific updates and validation with cross-component coordination and adaptive invocation. An analysis of 500 top-ranked skill packages shows that 96.8% contain knowledge spanning at least two functional roles. Across six benchmarks, three agent models, and two execution harnesses, CDSE achieves the highest scores in all 36 settings, improving over the Base agent by 7.6 percentage points and the strongest competing method in each setting by 2.6 points on average. Ablation studies further support the importance of functional differentiation and adaptive invocation.",
    "published": "2026-10-16T15:16:56Z",
    "updated": "2026-10-16T15:16:56Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.23599"
  },
  {
    "id": "2610.23598",
    "title": "RL-Guided Temporal Localization for Dual-Channel Retrieval in Long-Horizon Agent Memory",
    "authors": [
      "Dabin Sheng",
      "Zhe Wu",
      "Jinming Zhao",
      "Junliang Xing",
      "Yuanchun Shi"
    ],
    "abstract": "Time-aware retrieval is crucial for long-horizon LLM agents to effectively leverage ever-growing long-term memory. Existing methods focus on lexical or semantic similarity, leading to target memories being crowded out by temporally mismatched yet semantically similar candidates. Even time-aware approaches inject temporal cues only during memory organization or answer generation, overlooking temporal constraints at the retrieval stage, where candidate selection occurs - the root cause of the displacement. Inspired by the temporal contiguity effect in human episodic memory, we propose TIDER (Temporal Interval-driven Dual-channel Evidence Retrieval), a time-aware agentic retrieval framework. Central to TIDER is a reinforcement learning (RL)-trained temporal interval locator that infers the temporal windows in which the evidence lies. RL optimizes window localization as a discrete, non-differentiable retrieval decision, using composite rewards to convert sparse answer supervision into fine-grained retrieval feedback. These temporal windows first define the temporal retrieval channel; the retrieved candidates are then merged with results from the semantic channel and reranked by proximity to the windows. This temporal grounding enables TIDER to retrieve temporally aligned evidence that would otherwise be drowned out by the volume of semantically similar yet temporally mismatched memories. With a lightweight 1.7B locator, TIDER achieves state-of-the-art accuracy on both long-horizon memory benchmarks - 61.52% on LifeBench (+8.82%) and 78.96% on LoCoMo (+3.66%) - which indicates that temporal cues are crucial for pinpointing target evidence amid a vast pool of semantically similar historical events in long-term daily-life memory.",
    "published": "2026-10-16T15:16:50Z",
    "updated": "2026-10-16T15:16:50Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.23598"
  },
  {
    "id": "2610.21581",
    "title": "ClaimScope: Label-Blind Witness Verification for Mathematical Claim Auditing",
    "authors": [
      "Mushir Akhtar"
    ],
    "abstract": "Mathematical agents are commonly evaluated by answer accuracy or proof acceptance. We introduce ClaimScope, a 72-task benchmark for auditing proposed claims through a verdict, scope, counterexample, and repair. Tasks cover optimizer-state transport, finite-horizon affine recurrences, and exact $2\\times2$ linear algebra. We evaluate Qwen3-8B with direct generation and four matched two-pass conditions, each starting from the same draft. A witness checker evaluates only the model's submitted state, without consulting reference verdicts or supplying a replacement witness. Its feedback still conveys information about validity: a verified refutation establishes that the claim is false, and rejection reasons can suggest structural fixes. In this evaluation, verifier feedback yields $23/39$ accepted counterexamples on invalid claims and $25/72$ safe completions, compared with $15/39$ and $20/72$ for checker-free generic feedback. Strict completion remains $17/72$; verdict accuracy changes from $47/72$ to $46/72$. The claim-grouped safe-completion difference is $.094$, with a bootstrap 95\\% interval of $[.000,.198]$. All seven task-level gains follow horizon/input-length diagnostics. A post-hoc schema-only correction of the direct outputs reaches the same 25 safe tasks without another model call. These results separate claim classification from executable evidence, while locating the observed gains in witness-structure correction rather than demonstrating broader reasoning improvement.",
    "published": "2026-10-15T09:29:02Z",
    "updated": "2026-10-15T09:29:02Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.21581"
  },
  {
    "id": "2610.21579",
    "title": "Learning to Search for Executable Patternmaking from Certified Programs",
    "authors": [
      "Zhuotao Xu",
      "Chi Zeng",
      "Liying Yang",
      "Xinxing Yu",
      "Yanyan Liang"
    ],
    "abstract": "Recent models generate sewing patterns from images or text, and program-based representations make these patterns executable. These systems produce a finished pattern and do not model how a patternmaker turns one pattern into another. In practice a new style is made by editing an existing pattern: lengthening the bodice, moving a dart, swapping a sleeve. Pattern archives record the results of such edits and none of the steps. We observe that the steps can be recovered by searching over editing actions until one pattern becomes the other. A deterministic compiler makes the recovered steps checkable. To this end, we present SemDraft, the first framework that learns to search for executable patternmaking programs from paired before-and-after sewing patterns without recorded editing steps. Specifically, a bounded search recovers a program of editing actions and certifies it only after three checks: it recompiles from scratch, every pair of its actions is classified as ordered or interchangeable, and an independent replay reaches the same pattern. The certified programs then train a model that ranks candidate actions inside the same search. On two frozen draws of 80 order-sensitive cases, with every other search component fixed, the learned ranker certifies 63 and 64 cases within 1,000 search executions, against at most 53 and 52 for non-learned rankers.",
    "published": "2026-10-15T09:28:18Z",
    "updated": "2026-10-15T09:28:18Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2610.21579"
  },
  {
    "id": "2610.21573",
    "title": "MYOPIA: Understanding the Limits of Tree-Based Reasoning in Vision-Language Models",
    "authors": [
      "Islam Mesabah",
      "Sary Elmansoury",
      "Gerrit Großmann",
      "Peter Neigel",
      "Sebastian J. Vollmer"
    ],
    "abstract": "Decision trees can make vision-language model (VLM) classification interpretable by replacing a single prediction with a sequence of root-to-leaf questions. However, the accuracy cost of this greedy, non-backtracking procedure remains unclear. We introduce \\textbf{MYOPIA}, a benchmark comprising four LLM-generated, human-refined decision trees for GTSRB, MNIST, CIFAR-10, and MSCOCO, together with matched prompts, diagnostic protocols, and an evaluation harness. Across GPT-4o, Qwen-VL Max, and LLaMA-3.2 11B Vision, tree traversal underperforms zero-shot prompting in all 12 dataset--model pairs; paired bootstrap analyses consistently favor zero-shot. Our diagnostics characterize interacting failure modes associated with this gap. Models often recall tree-encoded class attributes more accurately than they ground the same attributes in images: the mean label--image accuracy gaps are 9.5, 13.8, and 12.6 points for GPT-4o, Qwen-VL Max, and LLaMA, respectively. Incorrect local decisions then irreversibly exclude the correct class, while answer extraction introduces additional model-dependent loss. A node-level audit of the four trees finds that split entropy is weakly but consistently associated with lower node accuracy, whereas depth, branching factor, and within-node grounding differences are less stable. \\textbf{MYOPIA} therefore provides a framework for diagnosing hierarchical visual classification and motivates testing tree designs that prioritize perceptual answerability and recovery from early errors. Code is available at https://github.com/islammesabah/VLM_Classification.",
    "published": "2026-10-15T09:25:10Z",
    "updated": "2026-10-15T09:25:10Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.21573"
  },
  {
    "id": "2610.21571",
    "title": "Rethinking the Role of Tool Graph Memory in Multi-Turn Tool Use",
    "authors": [
      "Uiji Hwang",
      "Richeng Xuan",
      "Taeuk Kim"
    ],
    "abstract": "Large language model (LLM) agents solve complex tasks by calling external tools over multiple turns. Recent work has proposed tool graph memory, which stores past experience as tool transitions to guide subsequent selection. However, it remains unclear whether this component consistently improves agents' tool use or undermines it. We evaluate tool graph memory on nine models and two benchmarks, finding that it seldom improves significantly over baselines, and that its gains, where present, cost over twice the LLM calls. The memory's guidance is often incorrect, and random or no guidance retains most of the gain, implying that the benefit stems from extra computation rather than the memory itself. Moreover, even with the correct next tool suggested, many failures remain, such as giving up without a tool call. Storing the same experience instead as textual insights outperforms tool graph memory with almost no extra LLM calls. This suggests that memory serves better as a soft prior than as a prescription of the next tool, leading to a more effective and generalizable solution.",
    "published": "2026-10-15T09:24:30Z",
    "updated": "2026-10-15T09:24:30Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.21571"
  },
  {
    "id": "2610.21570",
    "title": "Independent Data-Integrity Verification for LLM-Driven Functional Coverage Closure in Hardware Design",
    "authors": [
      "Venkata Krishna Kumar Vedantam"
    ],
    "abstract": "LLM agents can write directed tests that close functional coverage, but coverage only shows that a state was reached, not that the data on the way there was correct. This is a long-known point in verification and we do not claim it as new. We describe a small coverage-closure agent that applies it to an LLM loop: coverage is read from the report that the simulation itself exports (cocotb-coverage YAML) and never taken from the model's account, and data integrity is checked by scoreboards that are separate from the model. On three architecturally distinct RTL designs (an asynchronous FIFO, a UART transmitter and an AHB2APB bridge) the agent raised coverage from 91.7%, 88.9% and 67.4% to 100% within its 8-iteration budget in every logged run, using one design-agnostic agent. A reactive scoreboard monitor attached to the FIFO's base testbench also found a clock-domain-crossing bug in the author's own stimulus code. The monitor is not yet attached to the LLM-generated tests, so their data integrity is not independently checked; one manual check on a single FIFO test is reported as preliminary. We list the weaknesses of this evidence: three designs, no baseline, no ablation, and logged runs that come from several agent checkpoints.",
    "published": "2026-10-15T09:24:01Z",
    "updated": "2026-10-15T09:24:01Z",
    "categories": [
      "cs.AR",
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.21570"
  },
  {
    "id": "2610.21569",
    "title": "Decoupled Safety Control: A Safety-Control Algorithm for Training-Free Safety Guidance",
    "authors": [
      "Huilin Zhou",
      "Ruoxi Cheng",
      "Yuhang Wang",
      "Yuming Liu",
      "Minghao Sun",
      "Ruolong Ma",
      "Lan Zhang"
    ],
    "abstract": "Diffusion models achieve strong performance in text-to-image generation, but they can still produce unsafe content. Training-free safety guidance offers a practical inference-time alternative that intervenes during sampling without modifying model weights. However, many existing safeguards still rely on a coupled safety-control chain. In this chain, the same unsafe condition simultaneously specifies what should be avoided, indicates the current unsafe signal, constructs the intervention, and determines when that intervention remains active. This coupling can work when unsafe factors are explicit, but becomes less reliable once harmful and benign semantics are entangled in the current generation state, often leaving residual unsafe content or unnecessarily degrading benign-generation quality or prompt fidelity. We address this problem with Decoupled Safety Control (DSC), a plug-in safety-control algorithm for training-free safety guidance. DSC reformulates training-free safety guidance as an explicit state-dependent control process, so the executed intervention is determined from the current generation state rather than inherited directly from a single unsafe condition. Experiments on standard safety benchmarks show that DSC improves representative latent- and text-space safeguards, achieving stronger unsafe-content suppression while preserving benign-generation quality and maintaining efficient inference.",
    "published": "2026-10-15T09:24:00Z",
    "updated": "2026-10-15T09:24:00Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.21569"
  },
  {
    "id": "2610.21565",
    "title": "BiShield-TEE: On the (In-)Security of Unilateral Weight Obfuscation in On-Device TEE-Shielded LLM Partition",
    "authors": [
      "Zhiyuan Wang",
      "Yuezhi Zhou",
      "Ziqi Zhang",
      "Zhu Zhang",
      "Zhixing Tan",
      "Yongheng Deng"
    ],
    "abstract": "On-device deployment of large language models (LLMs) is increasingly adopted due to latency and privacy requirements, but exposes proprietary models to reverse engineering and intellectual property theft. Trusted Execution Environments (TEEs) provide hardware-enforced isolation for on-device inference, yet most TEE-based parameter obfuscation relies on unilateral matrix transformations that obfuscate only the output side. We identify a vulnerability in this design, termed the Solution Determinacy Property (SDP): the obfuscation secret is uniquely determined, exposing the structure of the true key and enabling attackers to break the protection. Under our attacks, representative methods GroupCover and ArrowCloak are reduced to negligible protection, with attack accuracy reaching over 2.4 times the full-shielding black-box baseline and recovering near-complete model functionality. To address this vulnerability, we propose BiShield-TEE, a bilateral framework that induces Ambiguous Solutions through joint obfuscation of input and output dimensions, hiding the true key among many equally valid candidates. Experiments across diverse models and datasets show that BiShield-TEE confines attack accuracy to the full-shielding black-box baseline, while achieving higher inference efficiency than prior methods on real hardware. Our code is available at https://github.com/laduiw/BiShield-TEE.",
    "published": "2026-10-15T09:22:45Z",
    "updated": "2026-10-16T04:11:40Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.21565"
  },
  {
    "id": "2610.21561",
    "title": "DialFork: Going Beyond Factuality to Evaluate Procedural Hallucination in Conversational Agents",
    "authors": [
      "Sergio Burdisso",
      "Esaú Villatoro-Tello",
      "Dairazalia Sánchez-Cortés",
      "Yanis Labrak",
      "Jordi Luque",
      "Milos Cernak",
      "Petr Motlicek"
    ],
    "abstract": "Large language models (LLMs) deployed as conversational agents are increasingly expected to follow procedural logic. While factual hallucination has received extensive attention, a different failure mode has been overlooked: procedural hallucination, in which an agent produces individually fluent and factually plausible utterances while deviating from the intended conversational process. We introduce DialFork, the first benchmark to measure this failure mode on raw dialogue text. DialFork is built by forking conformant dialogues at controlled turn positions and injecting one of four hallucination types, yielding 36,278 dialogues across 24 tasks in 12 domains; 30 human annotators validate the construction. We define three evaluation tasks that characterize procedural deviation at three granularities: how far a set of dialogues deviates from conformant ones (monitoring deployed agents), how far a single dialogue does (procedural retrieval), and at which turn a dialogue first goes off-track (real-time guardrails). For the first two, we propose dialog-flow-aware metrics, FlowKL and FlowScore, that compare dialogues by how they unfold rather than their content. At the dialogue level, FlowScore significantly outperforms all baselines across seven encoders, showing that semantic similarity is no substitute for procedural similarity. We release DialFork under open licenses at https://github.com/idiap/dialfork, hoping the community will measure conversational process alongside content.",
    "published": "2026-10-15T09:18:32Z",
    "updated": "2026-10-19T12:57:46Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.21561"
  },
  {
    "id": "2610.21555",
    "title": "When Does Muon Actually Win? A Paired Data-, Time-, and Tuning-Budget Benchmark",
    "authors": [
      "Mushir Akhtar",
      "Hazem N. Nounou",
      "Majdi Mansouri",
      "Mohamed N. Nounou"
    ],
    "abstract": "Muon's gains in data efficiency motivate evaluating its performance under explicit data, time, and tuning budgets. On a single A100 GPU, we compare a reference single-device Muon implementation with AdamW across 17.7M- and 33.6M-parameter causal language models and 2.70M-parameter vision transformers. A common 23-candidate development budget selects configurations evaluated with five matched seeds, full validation trajectories, optimizer-step timing, and a frozen one-shot test. Muon reduces validation-loss area under the curve by 3.25--22.44\\% at equal data and lowers test loss in all 20 primary pairs. In this configuration, Muon improves time-normalized loss area} by 19.68--22.31\\% on vision, while AdamW is better by 3.38--6.96\\% on language. The full Muon optimizer call, including auxiliary AdamW updates, consumes 56.1--69.6\\% of training time, compared with 6.1--9.1\\% for the AdamW baseline. Muon also has higher expected regret under restricted access to these candidate pools. These results characterize small models with reference kernels; their wall-clock ordering does not establish a ranking for larger models or optimized implementations.",
    "published": "2026-10-15T09:15:49Z",
    "updated": "2026-10-15T09:15:49Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.21555"
  },
  {
    "id": "2610.21554",
    "title": "Uncertainty Quantification in Pairwise Difference Learning for Classification",
    "authors": [
      "Mohamed Karim Belaid",
      "Maximilian Rabus",
      "Eyke Hüllermeier"
    ],
    "abstract": "Instead of learning a mapping from instances to outcomes in the standard way, the key idea of pairwise difference learning (PDL) is to learn a function that takes two instances as input and predicts the difference between the respective outcomes. Given a function of this kind, predictions for a query instance are derived from every training example and then averaged. We propose a version of PDL for the task of classification and propose a suitable meta-learning technique for this purpose. Moreover, we address the problem of uncertainty quantification, i.e., of representing and quantifying the uncertainty of a PDL classifier's predictions in a faithful manner. Building on recent work on the decomposition of total uncertainty into aleatoric and epistemic components, we propose different ways of extending corresponding measures to the setting of PDL, depending on how and to what extent uncertainty is represented by the underlying base learner. In large-scale empirical studies, we analyze both the predictive accuracy and the uncertainty awareness of our PDL classifier.",
    "published": "2026-10-15T09:15:08Z",
    "updated": "2026-10-15T09:15:08Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.21554"
  },
  {
    "id": "2610.21550",
    "title": "Rethinking Classifier-Free Guidance for TI2I Flow Matching",
    "authors": [
      "Andreas Floros",
      "Elena Koritska",
      "Teofilo de Campos",
      "Christoph Vogel",
      "Chu-Tak Li",
      "Anuj Sharma",
      "Alexandros Neophytou"
    ],
    "abstract": "We study Text-and-Image-to-Image (TI2I) flow matching methods for controllable image editing. In a broader generative modeling context, Classifier-Free Guidance (CFG) is established as a key component responsible for high quality outputs. However, we argue that its role in TI2I modeling is poorly understood. Specifically, we make the surprising observation that the CFG mechanism is implicitly harmful for editing in the noisy phase of flow modeling, hindering instruction following and controllability. We propose a simple correction in the early flow steps, enabling a richer alignment-preservation tradeoff at no extra cost. The effectiveness of our approach is demonstrated on both pixel-space and latent TI2I flows.",
    "published": "2026-10-15T09:13:23Z",
    "updated": "2026-10-15T09:13:23Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.21550"
  },
  {
    "id": "2610.21549",
    "title": "When Is Muon Optimal? Radial Fragility and Minimax Geometry",
    "authors": [
      "Ao Xu"
    ],
    "abstract": "Muon replaces a matrix gradient by an approximate polar factor and has shown strong empirical performance in neural-network training. The Isotropic Curvature Model (ICM) provides a curvature-based explanation for this update by asking when gradient orthogonalization minimizes a one-step local-loss surrogate. We investigate the stability of this explanation when the fixed input radius of the ICM is replaced by a general radial law. We introduce the Random-Radius Isotropic Curvature Model (RR-ICM) and the Polar-Factor Admissibility Set, which encodes exact scaled-polar optimality as a geometric condition on the positive polar factor of the gradient. We derive an exact characterization of this set for arbitrary radial laws and show that all nonscalar admissible responses arise from radial atoms aligned with curvature kinks. Consequently, every atomless radial law exhibits zero-capacity rigidity: exact scaled-polar optimality is possible only when the gradient is already a scaled column isometry. To connect the curvature-based framework with the established spectral geometry of Muon, we introduce the Minimax RR-ICM by replacing directional averaging with worst-case optimization over probability laws on the sphere. We prove that every nonzero global minimizer lies on the polar ray of the gradient, while its scale is determined by a one-dimensional convex problem. The corresponding admissibility geometry is a positive-semidefinite trace slab, in sharp contrast to the spherical-zonoid geometry of the RR-ICM. Together, these results expose the radial fragility of average-curvature explanations and provide a new minimax variational characterization of Muon's polar direction.",
    "published": "2026-10-15T09:13:19Z",
    "updated": "2026-10-15T09:13:19Z",
    "categories": [
      "stat.ML",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.21549"
  },
  {
    "id": "2610.20319",
    "title": "Beyond Static Cues: Unified Dynamic Detection of MLLM Backdoors via Dual-Flow Trajectory Analysis",
    "authors": [
      "Yinzhen Huang",
      "Jiahe Xie",
      "Yitong Sun",
      "Ruochen Zhang",
      "Xingxing Wei"
    ],
    "abstract": "Multimodal Large Language Models (MLLMs) are increasingly deployed in safety-critical domains, yet their susceptibility to backdoor attacks remains a formidable challenge. While existing defenses have evolved from visual-centric patch cues to unsupervised internal attention statistics, they are fundamentally constrained by a reliance on static snapshots and attack-specific heuristics. Given the intricate interplay between dual modalities, the vast design space for multimodal triggers allows diverse threats, such as textual injections, sub-perceptual noises, and coordinated cross-modal triggers, to easily circumvent such rigid priors, particularly when attack types are unknown in real-world applications. In this paper, we rethink backdoor detection by shifting the diagnostic paradigm from static observations to dynamic output evolution. We observe that a successful attack inevitably hijacks the model's decoding trajectory, skewing internal modal contributions during generation while maintaining an abnormal output invariance despite input perturbations. To capture this behavior, we propose EVO-Detect, a unified detection framework that monitors the dynamic evolution of internal signals during early decoding steps through two complementary channels: Attention Flow and Logits Flow. The attention branch measures how image-text attention allocation evolves during early generation, whereas the logits branch quantifies the sensitivity of the output distribution to modal perturbations through interventional ablations. We then convert these trajectories into compact sample-level metrics and normalize them against negative-control signatures so that natural perturbations are less likely to be mistaken for backdoor evidence. Extensive evaluations show that our approach substantially outperforms state-of-the-art baselines such as BYE and TCAP across diverse attack families.",
    "published": "2026-10-14T15:05:49Z",
    "updated": "2026-10-14T15:05:49Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.20319"
  },
  {
    "id": "2610.20312",
    "title": "Reflect After Failure: Brain-Inspired Self-Evolving Agents for Embodied Spatial Intelligence",
    "authors": [
      "Xin Li",
      "Xiaohuan Gu",
      "Yifan Wang",
      "Shaobin Ling",
      "Tianli Shi",
      "Jingao Xu",
      "Zhimeng Yin",
      "Dapeng Wu",
      "Yun Wang"
    ],
    "abstract": "Vision-Language Models (VLMs) have made substantial progress in spatial reasoning, and self-evolving agents further extend these capabilities to embodied environments by learning from interactions. However, current self-evolution remains particularly challenging in embodied spatial tasks, complex and multi-step decisions from partial visual evidence making it difficult to determine why an execution fails. The failure may stem from misperception, insufficient exploration, or incorrect planning, yet execution feedback alone rarely reveals which component is responsible. As a result, simply accumulating interaction experience can reinforce ineffective strategies. To address this, we propose HiMeco, a brain-inspired self-evolving agent for embodied spatial intelligence, inspired by metacognitive monitoring and hippocampal memory consolidation. Through Hippocampal-Metacognitive Reflection, HiMeco diagnoses failures in perception-exploration-planning (PEP), then compares execution attempts to derive reusable strategies and guidance for avoiding recurring errors. It also abstracts interaction programs into parameterized skills, using evidence contracts and execution-based validation to determine their retention and reuse. These strategies and skills guide subsequent interactions, with memory updated only between rounds and model parameters kept frozen. HiMeco achieves state-of-the-art performance on ESI-Bench, and it also improves accuracy on EmbSpatial-Bench by 3.94 percentage points without evolution.",
    "published": "2026-10-14T14:59:04Z",
    "updated": "2026-10-14T14:59:04Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.20312"
  },
  {
    "id": "2610.20309",
    "title": "Event Cameras versus Frame Cameras for Synthetic-Aperture Imaging: A Simulation Study",
    "authors": [
      "Jakob Hinterholzer",
      "Mohamed Youssef",
      "Oliver Bimber"
    ],
    "abstract": "Synthetic-aperture imaging (SAI) removes occluders such as foliage by integrating many views of a scene along a camera path. It has so far been used mainly with frame cameras. We ask whether an event camera has advantages for SAI, and answer the question in simulation, where both sensors see exactly the same scene and the same camera movement. A densely rendered Blender sequence is turned into frames with an EMVA~1288 noise model of an industrial global-shutter camera, and into an event stream with the v2e simulator parameterized like a Sony IMX636. The frames are integrated with the existing airborne optical sectioning renderer. For the events we add a new integration path that projects every single event onto the focal plane at its own interpolated pose, so no events have to be binned into frames. We compare the two sensors in three main runs and an additional dark high-speed test. In a bright scene at 25,m/s the frame camera records only three images on the path and cannot remove the occluder, while the event camera reconstructs the target, even after an event-rate controller drops most of its events to fit the camera link. At the same speed in a 5,lux scene the event camera no longer resolves the target either. In a 5,lux scene at 5,m/s both sensors reconstruct the target at similar quality. We also compare the data one traversal of the aperture costs. At high speed the capped event stream still shows the target at the same data volume as the three frames. At 1,m/s we compare both cameras at two matched data budgets, and there the event camera has no advantage over the frame camera in reconstruction quality. The data rate of the event camera depends on the scene and is highest exactly in the fast bright scenes where it is needed most.",
    "published": "2026-10-14T14:56:22Z",
    "updated": "2026-10-14T14:56:22Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.20309"
  },
  {
    "id": "2610.20293",
    "title": "CASI: Credit Assignment via Set Intervention for Agentic Retrieval",
    "authors": [
      "Xinyi Cheng",
      "Tianfu Zhang",
      "Jiwen Li",
      "Xuesen Zhang",
      "Shihao Yu",
      "Pengfei Zhu",
      "Renhuan",
      "Heda Wang"
    ],
    "abstract": "Large language models increasingly generate multiple retrieval actions jointly, while downstream systems often provide only one reward for the resulting set. Broadcasting this reward provides a valid score-function gradient estimator for the expected set-level objective, but does not determine a coalition-dependent within-set attribution. We introduce CASI (Credit Assignment via Set Intervention for Agentic Retrieval), which constructs the missing counterfactual information through snapshot-grounded set intervention: generate and retrieve once, hold replayable snapshot components fixed, and evaluate alternative subsets under common conditions. Shapley aggregation converts these marginals into within-set credit, which bounded zero-sum advantage shaping incorporates into policy optimization. For m >= 4, singleton, leave-one-out, and full-set endpoints do not generally determine the Shapley allocation; under additive set values, extra coalition evaluations are redundant. In a five-action sponsored-search setting, exhaustive auction replay over 1,200 requests reveals substantial coalition dependence. Under the training-time evaluator, CASI achieves the highest median cosine similarity to a replay-defined Shapley reference among evaluated credit rules; under a sensitivity backend, CASI does not outperform Singleton. Across five independent training runs, CASI-trained policies achieve higher held-out auction-replay set value than Singleton- or Broadcast-trained policies. In a randomized seven-day production A/B test on 10% of traffic, the CASI-trained policy yields an observed 3.51% lift in the primary advertiser-value metric over production control.",
    "published": "2026-10-14T14:47:46Z",
    "updated": "2026-10-14T14:47:46Z",
    "categories": [
      "cs.AI",
      "cs.IR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.20293"
  },
  {
    "id": "2610.20676",
    "title": "When Correctness Feedback Erases Evidence: Phase-Separated Completeness Auditing in Verus",
    "authors": [
      "Adarsh Agrawal"
    ],
    "abstract": "Correctness feedback suppresses the very evidence that specification-completeness auditing is designed to uncover: programs that satisfy a written contract but violate intended behavior. We demonstrate this objective reversal on 12 Verus/Rust tasks across four model families under matched call budgets. Independent no-feedback discovery more than doubles certified-witness yield relative to IntentShield's corrective-feedback loop (59.0% versus 27.1%). A format-matched iterative control places the larger share of this gap in feedback content, not independent restarts. The advantage holds in every model family and survives parser repair. A separate phase-separated execution matches the aggregate yield without reusing responses; most certified witnesses also fail held-out cases. Preserving these witnesses delivers stronger specification repair: Phase-Revised contracts achieve 81.3% implementation success, versus 62.5% for IS-Revised, with Direct-Revised close behind. Both no-feedback witness sources substantially outperform weakened contracts. The effect does not reproduce in the available Dafny and Lean evaluations, establishing an empirical boundary around the studied Verus/Rust workflow. Completeness auditing and correctness repair have opposing immediate objectives. Preserve and certify the admitted failure before repairing it.",
    "published": "2026-10-14T14:43:24Z",
    "updated": "2026-10-14T14:43:24Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.20676"
  },
  {
    "id": "2610.20283",
    "title": "From Semantic Editing Intentions to Persistent Parametric Controls for AI-Assisted Image Editing",
    "authors": [
      "Rifat Mehreen Amin",
      "Michelle Dutoit",
      "Anton Rockenstein",
      "Baptiste Caramiaux",
      "Andreas Butz"
    ],
    "abstract": "AI-powered image editing increasingly allows users to express high-level editing intentions, yet how these intentions are translated into concrete editing actions often remains difficult to understand. We present Atelier, a semantic image editing tool that uses image semantics and user intent to determine which editing controls to surface and how to initialize them. Guided by a formative study with eight image-editing practitioners, Atelier composes context-specific, directly manipulable controls that users can refine rather than committing AI interpretations directly to finished edits. In a within-subjects study with 12 practitioners, participants preferred AI-composed controls, described them as supporting creative exploration, and actively refined AI proposals. However, experiences of control were mixed, and interviews highlighted limited insight into why particular controls and values were proposed. Our findings suggest that making AI interpretations actionable through manipulable controls can support exploration and refinement, but actionability alone does not make those interpretations transparent to all users.",
    "published": "2026-10-14T14:39:58Z",
    "updated": "2026-10-14T14:39:58Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.20283"
  },
  {
    "id": "2610.22408",
    "title": "ECHOES: Seeing Beyond the Current Image via Recursive History Compression and Privileged On-Policy Distillation",
    "authors": [
      "Tengda Guo",
      "Jiawang Hu",
      "Yifei Tao",
      "Yin Wang",
      "Haotian Hu",
      "Fanyi Wang",
      "Liujuan Tang"
    ],
    "abstract": "Long-horizon GUI agents rely on visual history to maintain task states, but retaining historical screenshots increases visual-token usage and inference costs, while textual summaries can discard critical state information, undermining long-horizon reliability. We propose ECHOES, which leverages training-time privileged information to guide textual history compression and strengthen long-horizon reasoning. Specifically, ECHOES adopts a Compression-Think-Action (CTA) format to recursively update a textual history state and reason. The same model, given privileged multi-image inputs, serves as a teacher that provides dense token-level on-policy distillation on student-generated CTA rollouts. Our Perception-Memory Fidelity (PMF) Gap-guided OPD-RL framework dynamically balances privileged distillation and task-reward optimization, with periodic teacher updates supporting continued improvement. We further introduce ECHOESBMK, a fine-grained diagnostic benchmark derived from real GUI agent failure trajectories to jointly evaluate visual perception and cross-modal state retention. Experiments on four GUI benchmarks and ECHOESBMK demonstrate substantial gains in task performance and memory fidelity. Without retaining historical screenshots at deployment, ECHOES achieves competitive performance with a favorable performance-inference-cost trade-off and exhibits positive zero-shot transfer to unseen visual planning tasks.",
    "published": "2026-10-14T14:39:41Z",
    "updated": "2026-10-14T14:39:41Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.22408"
  },
  {
    "id": "2610.20278",
    "title": "A Valid Watermark Is Not a Valid Identity: Spatial-Spectral Adversarial Face Evasion with Watermark Preservation",
    "authors": [
      "Jefferson David Rodriguez Chivata",
      "Davide Ghiani",
      "Simone Maurizio La Cava",
      "Marco Micheletto",
      "Giulia Orrù",
      "Gian Luca Marcialis"
    ],
    "abstract": "Facial image watermarking can support traceability and certification in biometric pipelines, but provenance or manipulation detection alone does not guarantee reliable biometric identity. We introduce a watermark-preserving face evasion attack that targets this gap under a black-box watermarking setting, without access to the watermarking components. The proposed PGD-L_2 attack guides adversarial perturbations with spatial and spectral preservation terms to reduce face-recognition similarity while limiting pixel-level distortion and high-frequency changes that may interfere with hidden watermark cues. Evaluated on controlled facial images with two watermarking schemes, two face-recognition models, and two datasets, the attack achieves evasion rates above 92% at operational thresholds while preserving watermark recovery above 93% for StegaFormer and above 99.7% for FaceSigns, with visual quality above 47dB PSNR at epsilon_2=2.0. These results expose a structural gap in watermark-based facial certification: a face image can remain watermark-valid and visually faithful while becoming biometrically unreliable.",
    "published": "2026-10-14T14:37:52Z",
    "updated": "2026-10-14T14:37:52Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.20278"
  },
  {
    "id": "2610.20274",
    "title": "Resolution Allocation with Learnable Resizing and Spectral Filter Parameterization",
    "authors": [
      "Wei Wu",
      "Eric C. Larson"
    ],
    "abstract": "Learnable downsampling and spectral-domain filter parameterizations have each made convolutional networks more flexible, but their interaction has not been systematically examined. We bridge this gap by examining convolutional kernels learned in the spatial and spectral domains, together with learned downsampling ratios under a cropped resizing implementation. We find that spectral and spatial kernels respond differently to learned resolution allocation, with larger gains for the spectral kernel. We observe this consistently on three datasets (EuroSAT, CIFAR-10 and STL-10) and at two model sizes (differences in accuracy gain of +0.013 to +0.028 on held-out test sets). Part of this difference reflects the greater gain of the spectral kernel from retaining more spatial area, but the difference remains positive when total retained area is matched. This pattern is observed across datasets and model sizes, although its magnitude and dependence on the complexity budget vary with model size and the resizing implementation.",
    "published": "2026-10-14T14:35:28Z",
    "updated": "2026-10-14T14:35:28Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.20274"
  },
  {
    "id": "2610.20272",
    "title": "CSWBench: Evaluating Context-Sensitive Code-Switching in Creative Writing",
    "authors": [
      "Zewen Jiang",
      "Yahan Li",
      "Chenlu Guo",
      "Diana Inkpen",
      "Yuan Wu",
      "Yi Chang"
    ],
    "abstract": "Large language models (LLMs) have demonstrated multilingual capabilities across diverse language generation and understanding tasks. Yet effective code-switching requires more than multilingual proficiency: models must decide when, where, and why to switch languages in ways that fit the surrounding context. This context-sensitive ability remains insufficiently evaluated. We introduce CSWBench, a benchmark for evaluating context-sensitive code-switching in creative writing through two complementary settings: Focused Narrative and Extended Narrative. We further propose CSWEval, a theory-informed framework with two complementary levels: event-level evaluation of Licensing, Contextual Appropriateness, and Functional Gain, and whole-text evaluation of task-specific quality---overall literary and narrative quality in Focused Narrative and quality emphasizing multilingual organization in Extended Narrative. Evaluating twelve LLMs, we find that models exhibit meaningful but uneven code-switching competence across narrative contexts. Model differences are particularly pronounced in multilingual literary integration, while multilingual-focused dimensions show stronger difficulty effects overall than the general narrative dimensions; narratively salient switches are associated with stronger contextual and functional realization; and event-level CS quality is moderately associated with whole-text performance.",
    "published": "2026-10-14T14:33:48Z",
    "updated": "2026-10-14T14:33:48Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.20272"
  },
  {
    "id": "2610.20264",
    "title": "FUSE: Fairness-aware Update Screening against Byzantine Exploitation in $q$-Fair Federated Learning",
    "authors": [
      "Tiantong Sun",
      "Jinlin Liu",
      "Xingru Wei",
      "Zequan Fang",
      "Wei Chen",
      "Qiang Yang",
      "Xiaojin Zhang"
    ],
    "abstract": "Client-level fair federated learning, in the form of $q$-fair federated learning ($q$-FFL), agnostic federated learning, or tilted empirical risk minimization, has emerged as an attractive solution to equalize utility across heterogeneous clients. This paradigm grants high-loss clients greater relative influence, while a central server aggregates their loss-weighted updates into a single shared model. Yet, the Byzantine robustness of $q$-fair federated learning has been largely neglected, leaving the server unable to tell legitimate fairness-induced amplification from malicious update scaling. To address this critical gap, we formalize the problem of Byzantine-robust $q$-fair federated learning under an \\emph{update-only interface}, in which the server observes nothing but the fairness-scaled client updates. Our analysis under shared class-conditional label skew shows that fairness scaling preserves the nonnegative class-mixture structure of honest updates, while replacing their unit-sum constraint by a client-dependent radial scale. Moving beyond magnitude-based screening, we show that this warped geometry supplies two complementary tests, one radial and one structural, that a single norm cannot provide. We then introduce FUSE, a structure-aware robust aggregator that uses a small trusted labeled dataset for coefficient recovery, scale and cone-consistency screening, and post-screening step-size control. Across four benchmarks and seven Byzantine attacks, FUSE improves seed-wise worst-attack accuracy over the strongest baseline on each benchmark by 3.9--30.1 percentage points, while largely preserving the influence of the high-loss honest clients that fairness is meant to protect.",
    "published": "2026-10-14T14:29:48Z",
    "updated": "2026-10-14T14:29:48Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.20264"
  },
  {
    "id": "2610.20261",
    "title": "Harness Policy Distillation: Aligning Agent Policies with Runtime Semantics",
    "authors": [
      "Junze Zhu",
      "Weihao Chen",
      "Zhiyang Zhou",
      "Zhen Wu",
      "Xinyu Dai"
    ],
    "abstract": "Deploying a general-purpose model as an agent means running it inside a product-specific runtime harness that decides which actions are executable, how state advances, and when the loop may terminate. Ordinary trajectory supervision shows which action was taken but leaves the runtime semantics behind that action implicit. We introduce Harness Policy Distillation (HPD), which makes these runtime control semantics an explicit training target alongside actions to align the harness policy. HPD replays reference trajectories through the harness to recover the runtime semantics that are implicit in ordinary trajectory data, and represents them as control documents at each model-call boundary. These documents provide privileged information for a teacher to generate actions, while harness verification ensures that the resulting targets are executable under the runtime contract. We jointly train a shared model on the runtime semantics recovered from control-state privileged information and native history, thereby internalizing these semantics into the model policy. At deployment, the trained model uses the original harness interface without requiring the control document or any additional supplement. On TRAJECT-Bench with the Pi harness, Qwen3-8B trained with HPD reaches 22.98% autonomous task success and 49.23% runtime compliance, against 3.09% and 19.90% for the unadapted model. Harness-verified teacher actions substantially improve the native deployment policy, while joint control-state supervision provides further gains in task completion and runtime compliance. HPD turns executable runtime semantics into dense supervision for learning harness-compatible actions at each decision boundary.",
    "published": "2026-10-14T14:28:02Z",
    "updated": "2026-10-14T14:28:02Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.20261"
  },
  {
    "id": "2610.18613",
    "title": "Does self-distillation improve reasoning?",
    "authors": [
      "Jason Ken Adhinarta",
      "Raina Wu",
      "Ashutosh Sharma",
      "Avinash Balakrishnan",
      "Rameswar Panda",
      "Polina Golland",
      "Yoon Kim",
      "Zhang-Wei Hong"
    ],
    "abstract": "Self-distillation is an emerging approach that trains a model to imitate its own predictions when conditioned on privileged information, such as correct answers or environmental feedback. Recent methods have reported better sample efficiency and generalization than reinforcement learning (RL), but it remains unclear whether these gains extend beyond in-distribution evaluations and whether they stem from privileged distillation. In this paper, we revisit two representative methods, Self-Distillation Policy Optimization (SDPO) and On-Policy Self-Distillation (OPSD), across code, science, tool use, and math reasoning tasks. We find that their reported gains do not consistently generalize to unseen problems and are largely explained by overfitting or transferring existing reasoning behavior, rather than effectively using privileged information. Moreover, self-distillation gradients show weak alignment with policy gradients that directly optimize expected reward, questioning whether they provide an effective direction for policy improvement. Our experiments across Qwen3 models (1.7B-14B) and OLMo-3-7B suggest that effectively leveraging privileged information to improve reasoning remains an open challenge. Our code is available at https://github.com/sleepypandu/does-sd-improve-reasoning",
    "published": "2026-10-13T15:59:36Z",
    "updated": "2026-10-13T15:59:36Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.18613"
  },
  {
    "id": "2610.18612",
    "title": "Nudge the Judge: Uncovering Program Decision Hijacking in Real-World Jev Applications",
    "authors": [
      "Yang Luo",
      "Tiantian Ji",
      "Zifeng Kang",
      "Yucheng Wang",
      "Yong Liu",
      "Zhiyi Yin",
      "Xinran Liu"
    ],
    "abstract": "System One models such as Jev change how software makes decisions by mapping open-ended semantic contexts into structured judgments that directly drive program execution. However, this paradigm introduces a new security risk, which we term Jev Program Decision Hijacking (JPDH): attacker-controlled contexts can redirect program decisions through schema-valid Jev judgments. Existing evaluations focus primarily on model-level attacks or predefined injection channels, leaving attack reachability and downstream security consequences in real-world Jev applications underexplored. In this paper, we present JevProbe, the first automated framework to evaluate JPDH by tracing adversarial influence from reachable context surfaces through program-consumed decisions to downstream security consequences in real-world Jev applications. Our key insight is that application logic maps diverse Jev judgments to observable decisions, enabling systematic, program-grounded attack evaluation. Across 228 popular real-world Jev applications and 2,273 test cases, 81.5% exhibit decision flips, of which 98.6% lead to potential downstream security impacts. Compared with the strongest adapted baseline, JevProbe improves macro-average Decision Flip Rate (DFR) by 50.4 percentage points, while existing defenses offer limited protection. We further construct JevProbeBench to support systematic evaluation of JPDH in real-world Jev applications. We have responsibly disclosed our findings to Jev application maintainers, pending their responses. The source code of JevProbe and the JevProbeBench dataset are publicly available on GitHub (https://github.com/xiaoxiaohg8d/JevProbe-).",
    "published": "2026-10-13T15:59:31Z",
    "updated": "2026-10-13T15:59:31Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.18612"
  },
  {
    "id": "2610.18610",
    "title": "Jev-ToM: Evaluating Theory of Mind in Typed Decision Models",
    "authors": [
      "Kawai Chung",
      "Chunkit Chan",
      "Yuxuan Liu",
      "Yauwai Yim",
      "Xi Yang",
      "Wenbin Hu",
      "Huihao Jing",
      "Chiu Yeung Tang",
      "Changxuan Fan",
      "Ki Sen Hung",
      "Tsun On Kwok",
      "Haoran Li"
    ],
    "abstract": "Dialogue and collaborative assistants repeatedly judge what a partner knows, believes, or intends. Typed decision models offer a potential alternative to generative large language models for bounded Theory of Mind (ToM) selection. We present Jev-ToM, comparing five typed decision models and seven generative baselines on 11,117 English text questions from nine ToM benchmarks across six capability groups. TypeSafe Jev reaches 73.2% source-balanced accuracy including native controls and ranks first or second across all six capabilities, leading beliefs, goals/desires/intentions, and emotions. Other typed models show distinct strengths across tasks. Separate resource comparisons suggest that Jev could reduce the cost and waiting time of repeated ToM selection. Confidence-based selection remains benchmark-dependent, and supplied reasons can repair errors or overturn correct answers depending on their attachment. Candidate expansion reveals distinct selection and output-validity problems. Related-question cues account for most of Jev's downstream gains, with task-dependent effects from predicted states. The findings motivate testing Jev as a ToM selection component in assistants, with task-specific confidence calibration, candidate design, and output validation as integration priorities.",
    "published": "2026-10-13T15:59:00Z",
    "updated": "2026-10-13T15:59:00Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.18610"
  },
  {
    "id": "2610.18609",
    "title": "DPOison-VL: Clean Preference Poisoning in Vision-Language Direct Preference Optimization",
    "authors": [
      "Chengtao Jian",
      "Kai Yang"
    ],
    "abstract": "Direct Preference Optimization (DPO) has become a widely adopted approach for aligning vision-language models (VLMs), yet the security of multimodal preference data remains largely unexplored. Existing preference poisoning attacks either corrupt explicit supervision signals or require visible triggers, making them detectable under human inspection. We introduce DPOison-VL, the first clean preference poisoning attack against VLM-DPO, which manipulates model alignment solely through imperceptible perturbations on a small fraction of training images, while leaving all prompts, responses, and preference annotations semantically intact. We formulate poison construction as a bilevel optimization and derive a gradient alignment surrogate that efficiently steers image perturbations toward the attacker-specified preference. We further introduce a preference displacement score for principled poison selection with provable first-order optimality under a fixed poison budget, and derive a sufficient condition for preference inversion. Extensive experiments across diverse attack tasks, different VLM architectures and scales, and baseline comparisons demonstrate that DPOison-VL achieves up to 98\\% ASR with only 2\\% poisoned data and exhibits cross-model transferability, while largely preserving clean accuracy and general utility. Our findings reveal a critical vulnerability in VLM-DPO, where imperceptible image perturbations in preference training data can silently redirect alignment.",
    "published": "2026-10-13T15:58:58Z",
    "updated": "2026-10-13T15:58:58Z",
    "categories": [
      "cs.CR",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.18609"
  },
  {
    "id": "2610.18607",
    "title": "Recasting DiT for Extreme Image Compression with Hierarchical Visual Priors",
    "authors": [
      "Yunuo Chen",
      "Jingnan Gao",
      "Bing He",
      "Jinjing Zhao",
      "Chuqin Zhou",
      "Xiaoyue Ling",
      "Li Song",
      "Guo Lu",
      "Wenjun Zhang"
    ],
    "abstract": "Pretrained diffusion models provide powerful generative priors for extreme image compression, but their stochastic, iterative generation processes are not designed to decode compressed representations directly. We present PrismCodec, which recasts a pretrained Diffusion Transformer (DiT) as a bitstream-grounded one-step generative decoder. PrismCodec uses the decoded representation in two complementary roles: a projected codec state defines the starting state for generation, while hierarchical visual priors derived from the same decoded latent provide semantic and structural guidance. To bridge the gap between stochastic, iterative generation and deterministic one-step decoding, we develop a progressive adaptation strategy. We first learn codec-conditioned transport from a noisy neighborhood centered on the codec state, distill it into a one-step mapping, and finally anneal the source perturbation to zero during end-to-end optimization. The resulting decoder reconstructs deterministically from the received representation without additional conditioning bits. Across Kodak, CLIC, and DIV2K, PrismCodec consistently improves rate-perception performance over prior generative codecs, achieving BD-rate reductions of 70-75% in LPIPS and 75-81% in DISTS over StableCodec. Code will be released upon acceptance.",
    "published": "2026-10-13T15:58:40Z",
    "updated": "2026-10-13T15:58:40Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.18607"
  },
  {
    "id": "2610.18606",
    "title": "Beyond Answer Voting: Fine-Grained Correction of LLM Reasoning through Graph Alignment across Sampled Traces",
    "authors": [
      "Haotian Liu",
      "Yingjian Chen",
      "Xiaohang Xu",
      "Lang Huang",
      "Yusuke Iwasawa",
      "Yutaka Matsuo",
      "Irene Li"
    ],
    "abstract": "Large language models increasingly tackle tasks that require multi-step reasoning, where errors in intermediate claims can affect the final answer. Self-consistency (SC) improves reasoning by voting over sampled final answers, but its vote leaves intermediate disagreements unresolved. To address this problem, we introduce DDRG (Disagreement-Driven Verification Guided by Reasoning Graphs), a framework for selective correction from a frozen bank of reasoning traces. Our insight is that graph alignment can expose claim-level disagreements and provide correction evidence without expanding the sampled trace bank. DDRG builds source-grounded claim graphs and sends localized conflicts to an answer-blind verifier. A verifier-supported refutation that reaches the majority answer's supporting path triggers one focused repair; otherwise, DDRG returns the exact SC vote. Experimental results across five benchmarks show that native zero-shot DDRG improves macro-average accuracy over direct answering by 8.65 and 15.83 percentage points for Qwen2.5-7B and Llama3.1-8B. It also exceeds CoT, the evaluated GoT and GoV question-answering adaptations, and SC on this macro metric. DDRG links local verification to selective correction without enlarging the initial candidate bank.",
    "published": "2026-10-13T15:58:02Z",
    "updated": "2026-10-13T15:58:02Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.18606"
  },
  {
    "id": "2610.18604",
    "title": "LLM2R: From Large Language Models to 3D Reassemblers",
    "authors": [
      "Zhouhan Zhong",
      "Qiuhong Shen",
      "Xingyi Yang",
      "Jinyi Xu",
      "Xinchao Wang"
    ],
    "abstract": "3D part assembly aims to reconstruct a complete shape from a set of unassembled parts by predicting a rigid SE(3) transformation for each part. Because the placement of a part is rarely determined by its own geometry, the task demands reasoning over the entire part set, and existing methods, which rely on pairwise relations or iterative generation and verification, scale poorly to objects with many parts. We present LLM2R, which casts part assembly as sequence modeling with a pretrained decoder-only large language model (LLM): a Point-BERT encoder and a Q-Former compress each part into a block of geometric tokens, the blocks of all parts are concatenated, and a causal LLM adapted with Low-Rank Adaptation (LoRA) processes the sequence in one forward pass. Causal attention, however, lets the hidden states of a part observe only the parts that precede it. LLM2R therefore appends a block of learnable summary tokens after the last part: these tokens follow every part, so their states aggregate the whole assembly at a constant token cost, and a part-aware pose head fuses each part's states with them before predicting its rotation and translation. One architecture thus handles semantic and geometric assembly and predicts all poses in a single non-autoregressive pass. LLM2R achieves the highest part accuracy and success rate on all three PartNet categories, the best rotation error, translation error, and part accuracy on PartNeXt, and the lowest translation error and fastest inference on Breaking Bad, where only a fracture-specialized method is more accurate. Its advantage grows with the number of parts: at 100 parts it exceeds GARF by 33.5 points in part accuracy on Breaking Bad and Assembler by 29.1 points on PartNet, and it transfers zero-shot to unseen categories with more than 16 points higher part accuracy than the strongest of three baselines.",
    "published": "2026-10-13T15:57:41Z",
    "updated": "2026-10-13T15:57:41Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.18604"
  },
  {
    "id": "2610.18603",
    "title": "AgentStripes: An Evidence-Graded Maturity Model for AI Agents",
    "authors": [
      "Nutan Kumar Naik",
      "Vijay Prasad Poudel",
      "Aditya Kumar Saroj",
      "Saurav Samantray",
      "Abhishek Patel"
    ],
    "abstract": "Benchmarks report what an Artificial Intelligence (AI) agent can do on a task suite, but not whether one released version has been engineered with the controls that make it reliable, safe and observable, or how strongly that is shown. This paper proposes AgentStripes, an evidence-graded maturity model for AI agents. It defines levels (0 to 7 stripes), process areas (12 areas holding 40 capabilities), three gates (basic, safety, proof) that hold an agent at a level however high its score, and evidence grades E0 to E5. Each applicable capability receives a rating from 0 to 3 and a separate evidence level; these are combined into a credit, aggregated into a severity-weighted score and converted into stripes that the gates limit. Instruments gather evidence, language-model judges interpret it under explicit criteria, and the arithmetic is deterministic. The model is compared with standards at topic level without a claim of conformance, and an unexecuted validation protocol is specified. An empirical evaluation (exploratory, non-confirmatory) of 30 public Python agent repositories, with static evidence only, is a demonstration and not a validation: static evidence caps every final stripe at 2, 26 repositories end at one stripe and 4 at two, and this distinction is unreliable, since re-judging changed the final stripe of 4 of 22 repositories (engine, dossier and panel changed), whereas none of 8 panel-only repeats, all at stripe 1, changed. The parameters are expert conventions without outcome based calibration, and the stripes have not been shown to predict reliability or safety.",
    "published": "2026-10-13T15:57:28Z",
    "updated": "2026-10-13T15:57:28Z",
    "categories": [
      "cs.AI",
      "cs.CY",
      "eess.SY"
    ],
    "url": "https://arxiv.org/abs/2610.18603"
  },
  {
    "id": "2610.18602",
    "title": "Auditing Future-Memory Use in Point-in-Time Language Agents",
    "authors": [
      "Rongtian Ye"
    ],
    "abstract": "Point-in-time (PIT) agents can recall post-cutoff facts even when their external evidence respects a historical cutoff. We examine whether this access predicts evidence gathering in 48 historical company-comparison tasks. Independent closed-book revenue probes identify the better-remembered company for each model on tasks with unequal recall, fixing the predicted direction before agent runs. We then compare paired runs with real or anonymized company identities while keeping external evidence PIT-valid. Both Qwen and DeepSeek recalled future facts, but neither supported the prespecified shift toward the better-remembered company. Qwen's four allocation estimates on 28 unequal-recall tasks were negative, with descriptive intervals spanning zero. A prospective DeepSeek replication showed an inverse pattern across all four metrics on 20 such tasks, with intervals below zero. These estimates remained negative after each company, pair, and future-fact omission, and all four post-hoc max-T-adjusted sign-flip p-values were below .05. In a prospectively specified follow-up, explicit future facts produced small estimated shifts away from the supplied-fact company, with intervals spanning zero, while final choices shifted toward it. The mechanism behind the natural inverse pattern remains unresolved. These findings support separate assessments of memory accessibility, search allocation, and final outputs alongside cutoff checks on external evidence.",
    "published": "2026-10-13T15:56:58Z",
    "updated": "2026-10-13T15:56:58Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.18602"
  },
  {
    "id": "2610.18598",
    "title": "Rethinking Projector Training in Multimodal LLMs",
    "authors": [
      "Fabian Gröger",
      "Naël Ouerghemi",
      "Shuo Wen",
      "Maria Brbić"
    ],
    "abstract": "Multimodal LLMs are typically trained by first aligning a vision encoder with a language model via projector training on large image-caption datasets, followed by joint training of the full multimodal model. Despite its widespread use, the role of the projector training stage remains poorly understood. We find that (i) using only $10$ to $20\\%$ of the data for training the projector already recovers most downstream performance gains, and (ii) projectors trained on different datasets can be linearly interpolated while largely preserving performance. These results suggest that projector training mainly performs a coarse alignment, which many different projectors achieve equally well. Motivated by these findings, we propose PORTAL, a training-free projector initialization that requires neither paired image-caption data nor gradient-based optimization, but only per-modality summary statistics. PORTAL computes an optimal-transport-based map between Gaussian approximations of the vision and language feature distributions on a shared principal subspace, so that the projector training stage can be skipped entirely. Without any paired data, PORTAL matches the standard pipeline trained on 558k image-caption pairs across six LLM backbones, two vision encoders, and 16 benchmarks. It outperforms that pipeline in $3$ of $7$ (vision encoder, LLM) settings and reaches an average $98\\%$ of its score across the other four.",
    "published": "2026-10-13T15:53:53Z",
    "updated": "2026-10-13T15:53:53Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.18598"
  },
  {
    "id": "2610.18597",
    "title": "PhysicsSliders: Learning Physical Controls for Audio Foley Generation",
    "authors": [
      "Peiwei Chang",
      "Yongqiang Chen",
      "Yuelan Cheng",
      "Liting Gao",
      "Yishun Lu",
      "Li Zhang",
      "Mark D. Plumbley",
      "Philip J. B. Jackson",
      "Wenwu Wang"
    ],
    "abstract": "Physical properties provide intuitive controls for sounds made by interacting objects. The challenge is to make a generative model respond predictably to these controls, both individually and in combination. We present \\method\\ (PXS), trained on simulated contact sounds with 15 material, geometry and contact parameters. Two separately trained variants accept direct parameter inputs or numerical captions. PXS controls hardness, size, speed and damping, supports room descriptions and produces spectrally distinct outputs at fixed targets. When controlling damping and size together, specifying thickness improves frequency accuracy and joint target delivery. Measurements from real recordings define effective-damping targets, which simulator inversion maps to generation inputs without real-audio fine-tuning. Across 18 impact classes from five real-audio datasets, PXS-Physical follows these targets with mean grouped Spearman correlation $ρ=0.976$ and class-median error 0.094 dex (a factor of 1.24).",
    "published": "2026-10-13T15:53:45Z",
    "updated": "2026-10-13T15:53:45Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.18597"
  },
  {
    "id": "2610.18596",
    "title": "ACCRUE: Continual Off-Policy Reinforcement Learning for Robot Foundation Models",
    "authors": [
      "Changyeon Kim",
      "Kimin Lee",
      "Yashraj Narang",
      "Yijie Guo"
    ],
    "abstract": "Reinforcement learning (RL) post-training improves robot foundation models (RFMs) beyond their demonstrations, but real-world deployment demands more: learning new tasks efficiently while retaining previously acquired behaviors. Existing continual RL methods on top of VLAs mitigate forgetting but rely on on-policy updates with limited forward transfer, whereas off-policy methods improve single-task sample efficiency without addressing learner persistence across tasks. We propose ACCRUE, a continual off-policy RL framework that carries lightweight actor and critic networks across tasks, allowing each stage to reuse behavioral and value knowledge acquired through prior RL. The inherited critic adapts only on current-task transitions and guides current-task actor learning, while prior behavior is preserved by distilling the actor toward cached targets on a small number of retained episodes. Fixed visual features keep the inherited learner and its replay compatible with base-policy updates. Across contact-rich assembly sequences in simulation and on real-robot hardware, ACCRUE accelerates subsequent-task learning with near-zero forgetting and significantly reduces real-robot training time by 31.0\\% to 68.5\\%.",
    "published": "2026-10-13T15:53:26Z",
    "updated": "2026-10-13T15:53:26Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.18596"
  },
  {
    "id": "2610.17019",
    "title": "Understanding Personalization Gains in Whisper",
    "authors": [
      "Sergei Katkov",
      "Antonio Liotta"
    ],
    "abstract": "Whisper-style ASR models provide strong zero-shot transcription, but their residual errors are not evenly distributed across datasets, recording conditions, and metadata-based groups. We study when lightweight low-rank adaptation (LoRA) improves Whisper and whether observed gains require group-specific adapters. Across Common Voice, LibriSpeech, and VoxPopuli, we compare zero-shot Whisper, pooled LoRA, and group-specific LoRA under matched within-group splits. We find that adaptation is not uniformly beneficial: gains are concentrated in difficult Common Voice groups, are consistent on VoxPopuli, and largely disappear on low-error LibriSpeech. Crucially, pooled LoRA often matches, and sometimes clearly outperforms, group-specific LoRA. Gains over zero-shot should therefore be tested against matched pooled adaptation before being interpreted as evidence of personalization.",
    "published": "2026-10-12T15:59:09Z",
    "updated": "2026-10-12T15:59:09Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.17019"
  },
  {
    "id": "2610.17016",
    "title": "ProbabilityBench: Model Evaluation and Calibration with Exact Ground-Truth Uncertainty",
    "authors": [
      "Yuyang Dai",
      "Yuting Tang",
      "Futoshi Futami",
      "Takashi Ishida"
    ],
    "abstract": "Evaluating model uncertainty on real-world data is challenging because each instance provides only a single observed label, leaving true conditional class probabilities unknown. To address this, we introduce ProbabilityBench, a benchmark that provides exact, instance-level class probabilities across three simulated text-based domains: peer review, covert information transfer, and credit risk. By explicitly defining the full data-generating process for each environment, we analytically compute both exact class probabilities and Bayes error. Furthermore, we provide a theoretical guarantee that rendering these cases into natural-language memos strictly preserves their underlying generative probabilities. This exactness enables direct measurement of reported probability quality via KL divergence. Across 16 evaluated models, most models on the observed cost-quality Pareto frontiers are decision models, including Jev and Perplexity Decider. Finally, ProbabilityBench serves as a meta-evaluation framework, leveraging known ground-truth values to benchmark the accuracy of standard calibration metrics and Bayes-error estimators themselves.",
    "published": "2026-10-12T15:58:15Z",
    "updated": "2026-10-12T15:58:15Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2610.17016"
  },
  {
    "id": "2610.17015",
    "title": "DIME: Scaling Facial Representation Learning via Differential Masked Autoencoding",
    "authors": [
      "Hao Yu",
      "Haoyu Chen",
      "Hui Wei",
      "Yan Jiang",
      "Nicu Sebe",
      "Guoying Zhao"
    ],
    "abstract": "Scaling up data and model capacity has driven substantial progress in visual representation learning. However, conventional pretext tasks exhibit diminishing returns on fine-grained facial analysis. We attribute this to a scaling bottleneck: these tasks model each image's appearance and are dominated by identity, pose, and illumination, so subtle within-identity facial differences contribute little to the training signal. We introduce DIME, a differential masked autoencoder for large-scale facial representation learning. DIME builds on a simple observation: two images of the same person share identity-specific appearance, so their difference exposes facial changes. DIME reconstructs both masked images in an identity-matched pair and, through an Explicit Differential Direction Supervision (EDDS) objective, aligns the direction of their reconstructed difference with the true difference, while source isolation makes each reconstruction depend only on its own image. Shared appearance cancels in this difference, and because EDDS ignores magnitude, subtle facial changes count as much as large pose or illumination changes. DIME uses identity labels only to form pretraining pairs, requires no dense annotations, and learns dense facial representations with emergent part-level semantics. We pretrain DIME on 20 million high-resolution facial images consolidated from existing face datasets. DIME's AU detection performance continues to improve as pretraining data scales from 6M to 20M images, with its BP4D F1 increasing by 5.9 points, while MAE gains only 0.5 points on the same subsets. DIME also outperforms specialized facial methods on AU detection, AU intensity estimation, cross-domain anti-spoofing, landmark localization, head pose estimation, face parsing, and face generation.",
    "published": "2026-10-12T15:57:06Z",
    "updated": "2026-10-12T15:57:06Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.17015"
  },
  {
    "id": "2610.17014",
    "title": "MAGNET: Manifold-Aware Graph Diffusion Network for Connectome Generation",
    "authors": [
      "Protyay Dey",
      "Ayush Roy",
      "Hyuna Cho",
      "Won Hwa Kim",
      "Vishnu Suresh Lokhande"
    ],
    "abstract": "Functional brain connectome represents neural connectivity as a matrix of pairwise interactions between brain regions. Generation of functional connectomes is not only a question of validity; rather, having satisfied the constraints on the correlation matrix, the next step is to recover the class-conditional geometry buried under coarse labels. We propose MAGNET, a Manifold-Aware Graph Diffusion Network which uses a normalized-Cholesky representation of the manifold of correlation matrices that guarantees validity. MAGNET lifts noisy latent states into ROI-level region tokens and performs denoising with a relational inductive bias over brain atlas regions. To deal with structural problems induced by coarse labels, MAGNET employs class-anchored conditioning, amortized structural bridge, and relevance-preserving corruption. Across ABIDE, ADNI, and OASIS-3, MAGNET consistently achieves favorable results compared to previous manifold-aware approaches, demonstrating improvements of 7-21% in class-conditional fidelity ($α,β$-F1) across three cohorts and better sampling efficiency. Moreover, while training only with strict binary labels, MAGNET is capable of maintaining clinical heterogeneity through fine substructure of the connectomes in a zero-shot setting, improving subclass covariance alignment ($λ$-MSE) by over 30%. These results suggest that geometric validity is a necessary but insufficient condition for clinical utility in connectome synthesis. Moreover, efforts in making the diffusion denoising class-conditional manifold aware finds utility beyond the highly curved brain connectome generation as this is a critical problem in various general settings. The code repository can be found at https://github.com/protyayofficial/MAGNET.",
    "published": "2026-10-12T15:56:09Z",
    "updated": "2026-10-12T15:56:09Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.17014"
  },
  {
    "id": "2610.17009",
    "title": "MaskSense: Confronting the Visual Exploration Trap in Masked Image Generation",
    "authors": [
      "Yawen Shao",
      "Jie Xiao",
      "Kai Zhu",
      "Yu Liu",
      "Hongchen Luo",
      "Xueyang Fu",
      "Yang Cao",
      "Wei Zhai",
      "Zheng-Jun Zha"
    ],
    "abstract": "Reinforcement learning (RL) has shown strong potential for aligning generative models with human intent, but adapting RL to masked generative models (MGMs) remains largely underexplored. Existing approaches that directly adapt Group Relative Policy Optimization (GRPO) to MGMs leave a foundational conflict unaddressed: MGMs' exploitative decoding nature is inherently at odds with the exploratory diversity that GRPO presupposes. In this work, we reveal a structural decoding bias termed the visual exploration trap: confidence-based sampling trades the exploration of diverse subject realizations for the greedy resolution of low-uncertainty background regions, causing premature collapse of the generative exploration space and starving GRPO of the rollout diversity it depends on. To this end, we propose MaskSense, a novel RL framework for MGMs that confronts the visual exploration trap at both the sampling and optimization stages. Specifically, we introduce a semantic anchored routing sampling mechanism that leverages semantic priors to preserve high-entropy subject token exploration while amplifying intra-group reward variance through exploratory-exploitative routing to yield more discriminative advantage estimates. Furthermore, we design a global entropy transition anchoring strategy to identify the most consequential decoding steps and concentrate gradient updates on them. Extensive experiments on multiple text-to-image benchmarks demonstrate that MaskSense substantially improves upon the base model, with GenEval accuracy improving from 54% to 86% and HPS from 28.89 to 36.39, achieving state-of-the-art performance.",
    "published": "2026-10-12T15:52:58Z",
    "updated": "2026-10-12T15:52:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.17009"
  },
  {
    "id": "2610.17002",
    "title": "Governing Copyright Responsibly in the Era of Generative AI",
    "authors": [
      "D. Kochetkov"
    ],
    "abstract": "Large language models are trained on collections that may include scholarly works, while authors generally lack work-level information about whether and how their works were used. This paper asks how copyright governance frames and operationalises the protection of such authors, and what a responsible alternative would require. Forty legislative, judicial and soft-law instruments issued between 2019 and 2026 were coded deductively against a framework derived from Responsible Research and Innovation theory, yielding 1,337 category assignments across 835 segments. The European Union and the United States are the primary cases; the United Kingdom, China and international bodies serve as comparators. Normative orientation and the distribution of responsibility dominate the corpus, while reflexivity is the least represented category and reaches its minimum in the US sub-corpus. Both primary jurisdictions frame protection procedurally rather than as an entitlement, and no instrument in the corpus creates a general author-facing attribution duty for the use of works in AI training. From the coded gaps, the paper derives a six-instrument governance design and a capacity-based allocation of responsibility among developers, publishers, collecting societies, funders, institutions, regulators, and individual authors.",
    "published": "2026-10-12T15:50:05Z",
    "updated": "2026-10-12T15:50:05Z",
    "categories": [
      "cs.CY",
      "cs.AI",
      "cs.DL"
    ],
    "url": "https://arxiv.org/abs/2610.17002"
  },
  {
    "id": "2610.16998",
    "title": "Glasseek: A Transparent Recipe for Training and Trustworthy Evaluation of DeepSearch Agents",
    "authors": [
      "Cong Pang",
      "Jiaqi Su",
      "Chengrui Wu",
      "Kuihao Yan",
      "Tianrui Zhang",
      "Zixuan Qiu",
      "Chao Lin",
      "Zixiu Lin",
      "Zixuan Chen",
      "Zelin Xiao",
      "Tiankuo Yao",
      "Jiawei Hong",
      "Zixuan Chen",
      "Dan Xu",
      "Lewei Lu",
      "Wenjie Wang",
      "Xin Lou"
    ],
    "abstract": "Deep search enables language agents to solve complex information-seeking tasks through iterative web exploration. However, developing robust open-source agents remains challenging for three reasons. First, opaque trajectory-construction pipelines make training data difficult to audit and reproduce. Second, context compression can create a substantial mismatch between training and inference. Third, agents may retrieve benchmark content from the open web during evaluation, contaminating the results and overstating their performance. To overcome these bottlenecks, we introduce Glasseek, a fully transparent deep search framework spanning the complete development lifecycle, releasing all data, model weights, training recipes, and code. Specifically, for data construction, we establish a verifiable trajectory curation pipeline that systematically generates high-quality exploration paths. For training, we propose Compaction-Managed GSPO (CM-GSPO), which uses the same policy for search and summarization while optimizing only execution sub-trajectories, enabling end-to-end search-policy training across context-compaction boundaries. For evaluation, we conduct the first systematic audit of test-set leakage in open-web agents and release a modular anti-leakage plugin that seamlessly integrates into existing evaluation harnesses. Under this rigorous evaluation protocol, our 9B agent outperforms frontier proprietary agents across almost all deep research benchmarks spanning diverse task types, and achieves the best overall performance among recent open-weight agents, setting a new state of the art at the 9B scale.",
    "published": "2026-10-12T15:48:45Z",
    "updated": "2026-10-12T15:48:45Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.16998"
  },
  {
    "id": "2610.16990",
    "title": "TabGift: A Context-Efficient Foundation Model for Tabular Data Generation",
    "authors": [
      "Yu-Sheng Li",
      "Jun-Peng Jiang",
      "Han-Jia Ye"
    ],
    "abstract": "Tabular data generation aims to synthesize realistic samples from limited observations while faithfully capturing the underlying data distribution. Tabular foundation models (TFMs), pretrained on diverse tabular tasks and adapted through in-context learning, have demonstrated strong predictive capabilities, suggesting the potential of extending this paradigm to tabular data generation. However, the strong predictive performance of TFMs often relies on sufficiently large context sets, whereas tabular generation is typically needed precisely when target data are scarce. Extending the foundation-model paradigm to generation therefore requires reliable distribution inference from only a limited context. To this end, we propose TabGift, a context-efficient tabular foundation model enabling both efficient distribution modeling and effective generation from only a few context samples. TabGift maps heterogeneous tables into a shared latent space with a pretrained tabular encoder, where an in-context diffusion model learns to denoise latent samples conditioned on a small set of clean examples. This design transfers generative priors across datasets and enables distribution inference from limited context, while a lightweight dataset-specific MLP decoder maps generated representations back to the original data space. Experiments on 7 classification and 11 regression datasets show that TabGift consistently outperforms representative baselines in synthetic data quality, with particularly strong gains under limited-context settings, while achieving substantially faster adaptation and generation.",
    "published": "2026-10-12T15:43:52Z",
    "updated": "2026-10-12T15:43:52Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.16990"
  },
  {
    "id": "2610.16988",
    "title": "Self-Supervised Learning of Semantically Consistent Visual Features via a Simple 3D Prior",
    "authors": [
      "Sebastian Day",
      "Oisin Mac Aodha"
    ],
    "abstract": "Visual features extracted from vision models like DINOv2 or Stable Diffusion enable high quality semantic correspondence between images. However, such features exhibit documented limitations that hinder accurate correspondence estimation such as the inability to disambiguate the left from right for categories exhibiting symmetries or repeated parts. Previous attempts to improve these features rely on using supervised data such as annotated keypoint pairs or camera pose information, or make restrictive topological assumptions, such as modelling the object of interest as a 3D sphere. We introduce a new self-supervised approach that allows us to learn features for topologically complex object categories using a simple prior. Instead of relying on an expensive instance-level analysis by synthesis pipeline, our approach makes use of contrastive learning and distribution matching at the global dataset-level to learn the coarse shape and appearance of a category. Combined with additional geometric losses, this enables us to replicate the global and local statistics of visual features which match those that are extracted from real images. Quantitative results are presented across several challenging object categories, demonstrating the effectiveness of our approach.",
    "published": "2026-10-12T15:42:59Z",
    "updated": "2026-10-12T15:42:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.16988"
  },
  {
    "id": "2610.16985",
    "title": "AUGUstus: Autonomous Driving VLA Model with Unified Generation and Understanding",
    "authors": [
      "Yuqi Ye",
      "Caigao Jiang",
      "Zhuonan Wang",
      "Congyuan Pei",
      "Chao Qu",
      "Changhao Peng",
      "Junhong Lin",
      "Qize Yu",
      "Zetian Song",
      "Guangzhao Fu",
      "Chongruo Wu",
      "Shiyu Huang",
      "Shuchang Zhou",
      "Honggou Yang",
      "Wei Gao"
    ],
    "abstract": "Vision-language-action (VLA) models show strong potential for end-to-end autonomous driving by leveraging world knowledge and understanding to excel in long-tail scenarios. However, current VLAs have two limitations: 1) Degeneration into vision-action (VA) models. For low latency, regression/flow-based methods directly generate actions but underuse VLM understanding, causing unsafe, unexplainable actions. 2) Autoregressive high latency. Autoregressive methods sequentially generate chain-of-thought (CoT) and action tokens, fully leveraging VLM understanding, but high latency hinders deployment. To enable low-latency deployment while using CoT to assist action generation, we propose AUGUstus, an Autonomous-driving VLA model with Unified Generation and Understanding. We unify diffusion-based action generation and autoregressive CoT understanding in one model, where understanding only serves generation. Joint CoT supervision preserves VLM spatial understanding in shared representation for safer, more accurate trajectories. AUGUstus-mode orders action generation before CoT, so CoT supervises reliable actions during training while inference needs only action output, enabling low latency. AUGUstus-GRPO, a unified GRPO algorithm, jointly optimizes action and CoT, improving action performance. Experiments show AUGUstus achieves 94.6 PDMS on NAVSIMv1 and 90.7 EPDMS on NAVSIMv2, SOTA planning without scorer module. On nuScenes, it achieves average L2 error 0.27 m and average collision rate 0.05%, best among compared methods. To validate AUGUstus practicality, we train on in-house data with 512 NVIDIA H800 GPUs for ~2 days, evaluate on an internal 1,000 km dataset, and preliminarily deploy on a real vehicle, achieving 12 Hz operation. Project page: https://augustus-ad.github.io",
    "published": "2026-10-12T15:42:09Z",
    "updated": "2026-10-12T15:42:09Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.16985"
  },
  {
    "id": "2610.16984",
    "title": "From Suboptimal to Optimal: One-Step Latent Flow Policies for Offline Reinforcement Learning",
    "authors": [
      "Shenghua Lu",
      "Zixuan Yang",
      "Rongxu Zhao",
      "Bohao Qu",
      "Jifeng Hu",
      "Hechang Chen"
    ],
    "abstract": "Offline reinforcement learning aims to learn effective policies from fixed datasets without environment interaction. Although generative models such as diffusion and flow matching enhance policy expressiveness, they typically start from uninformative Gaussian noise and generate actions through multi-step iteration, leading to high computational costs and failing to effectively leverage suboptimal trajectories in datasets. We propose MeanFlow2Better (MF2B), which reformulates offline RL as generative decision chunk optimization from current performance status to better performance status in a high-level latent decision space. MF2B maps trajectory chunks to high-level latent decision representations through an encoder, placing generation starting points within a structured decision space sculpted by behavioral data. The model learns a shared conditional mean velocity field in this space, constructing two flow mappings: from Gaussian-Induced Decision Sources toward positive behavioral decision regions, and from suboptimal decisions toward high-value decision regions. Both flow mappings complete decision refinement through one-step ODE integration over the unit time interval $Δt=1$, requiring neither multi-step iterative sampling nor backpropagation through time. Furthermore, we propose hierarchical chunk-level advantage to guide the flow direction toward high-return regions, where the high-level decisions cover multiple low-level actions, leading to sequence length compression from $T$ to $K \\approx T/H$ and significantly lower computational overhead. On the D4RL Gym-MuJoCo benchmark, MF2B achieves an average score of 90.91, matching or surpassing strong baselines.",
    "published": "2026-10-12T15:41:40Z",
    "updated": "2026-10-12T15:41:40Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.16984"
  },
  {
    "id": "2610.16980",
    "title": "PRAISE: A Reproducible Workflow for Non-Programmer Scientists to Implement Published AI Models",
    "authors": [
      "Max Achterweust",
      "Stefan Groot Nibbelink",
      "Vincent J. de Beer",
      "Stefan Schipper",
      "Zeynep Yüksektepe",
      "Pedro Andrade da Silva",
      "Aurelia Peppelaar",
      "Martijn J. van der Willigen",
      "Christophe B. Minkenberg",
      "Robert F. van der Willigen"
    ],
    "abstract": "Artificial Intelligence (AI) models are increasingly developed, published and used across scientific fields. Researchers, students and industry professionals who want to apply these models to their own research questions often lack the programming and data science expertise to do so. Existing guidelines cover single steps, but not the route from a published model to working predictions on one's own data. Here we present the hands-on workflow PRAISE, a Practical, Reproducible AI-model Implementation for Science and Education, that helps non-programmers implement published AI models step by step. Because implementations rarely work the first time, PRAISE anticipates common failures and provides a fallback route for each. As a proof of principle, three BSc chemistry students and their tutor applied PRAISE without prior programming or data science knowledge. They reproduced, validated and extended a state-of-the-art model that predicts enzyme-substrate interactions. This shows that with PRAISE, implementing an AI model from the literature becomes a learnable skill, one that turns non-programmer scientists from users into evaluators and improvers of AI models.",
    "published": "2026-10-12T15:39:12Z",
    "updated": "2026-10-12T15:39:12Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.16980"
  },
  {
    "id": "2610.15715",
    "title": "History Replays Itself: Unleashing Long-Context Capability in Linear Attention",
    "authors": [
      "Li Nanbo",
      "Firas Laakom",
      "Yilan Zhang",
      "Piotr Piękos",
      "Yimeng Chen",
      "Liangyu Wang",
      "Yifan Xu",
      "Mateusz Ostaszewski",
      "Dandan Guo",
      "Wenyi Wang",
      "Yanning Dai",
      "Yuhui Wang",
      "Jürgen Schmidhuber"
    ],
    "abstract": "Linear attention promises the efficiency needed for long-context language modelling, yet its fixed-size recurrent state must simultaneously support ongoing computation and preserve information from an ever-growing history. This coupling has reinforced a prevailing view that the state's memory capacity defines the model's long-context capability. We challenge this presumed ceiling: \\emph{recurrent computation need not bear the full burden of long-term storage}. We introduce NoteBank, a sparse episodic memory that archives selected text before future queries are known, uses the backbone's native features for writing and addressing, and reads retrieved evidence through its native forward computation via replay. This \\emph{training-free, plug-and-play} interface requires no external embedding model, separately trained retriever, or separate neural reader. At one million tokens, it raises Gated DeltaNet's mean accuracy across six RULER retrieval tasks from 1.7% to 70.3%, with no observed significant retrieval degradation from 4K to 1M tokens. This recovery adds $\\leqslant$0.025% to analytical FLOPs, with persistent context storage approximately 1/2,600 that of a Transformer's full MHA KV cache at matched width, depth, and precision. Experiments extend from three 1.3B recurrent backbones to Mamba-2-8B and post-trained Qwen3.5-9B, demonstrating gains on LongBench v1/v2 and MemoryAgentBench. Together, these results show that sparse evidence storage and native replay can substantially expand the long-context capability of pretrained linear attention models while retaining the efficiency of recurrent computation.",
    "published": "2026-10-11T15:58:04Z",
    "updated": "2026-10-11T15:58:04Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.15715"
  },
  {
    "id": "2610.15714",
    "title": "MedHarnessBench: A Unified Benchmark for Healthcare Agent Evaluation",
    "authors": [
      "Rui Tang",
      "Hongqiu Wang"
    ],
    "abstract": "Healthcare agents must transform longitudinal clinical evidence into reliable actions through heterogeneous tools and stateful workflows, conditions under which model-centric systems may lose context, misuse tools, fail to verify consequential transitions, or cross authorization boundaries. Existing medical-agent benchmarks primarily emphasize terminal task outcomes, making it difficult to determine whether execution failures arise from the agent model, the runtime harness, or their interaction. We present the Medical Harness Protocol, an outcome-preserving framework that independently evaluates seven healthcare-specific process dimensions: Care Action Fulfillment, Clinical Resource Competence, Patient-Evidence Alignment, Clinical Workflow Continuity, Clinical Auditability, Closed-Loop Verification, and Clinical Conduct Boundaries. A normalized intervention trace further tracks whether runtime support is available, activated, delivered, adopted by the agent, and propagated into subsequent behavior. We instantiate the protocol as MedHarnessBench, comprising 342 executable tasks across FHIR/EHR operations, healthcare-administration interfaces, and multimodal clinical tools. Across more than 16,000 controlled task executions, MedHarness yields broad improvements in terminal task success, intermediate subtask completion, and healthcare-specific process quality. We further evaluate MedHarness against multiple general-purpose harnesses and use controlled single-fault perturbations to verify the sensitivity and discrimination of the seven-dimensional evaluation. These results demonstrate that healthcare-specific runtime support can substantially improve both task completion and execution quality, while revealing failures that terminal outcomes alone cannot capture. Code and resources are available at https://github.com/Tomry1114/Awesome-Agent-Harness-for-Healthcare.",
    "published": "2026-10-11T15:57:52Z",
    "updated": "2026-10-11T15:57:52Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15714"
  },
  {
    "id": "2610.15711",
    "title": "What DNA Foundation Models Learn Beyond Sequence Composition",
    "authors": [
      "Vincenzo Yuto Civale",
      "Andrew David Bagdanov",
      "Alberto Magi"
    ],
    "abstract": "Do genomic foundation models (FMs) provide predictive information beyond simple sequence composition? We evaluate frozen representations from five DNA FMs against normalized k-mer frequencies across 57 genomic classification datasets and two exploratory gene-expression regression tasks. Simple k-mer features remain competitive with most models, whereas NTv3 shows a consistent advantage; the ranking is robust to globally fixed and multi-scale k-mer baselines and alternative downstream probes. To test incremental predictive utility directly, we compare global 6-mer features with their concatenation with each FM embedding under a matched Random Forest protocol. NTv3 improves 46 of 57 datasets (mean $Δ$MCC = +0.072), while Caduceus provides smaller gains and the other models do not improve mean MCC. We separately decompose embeddings into a component linearly predictable from 6-mer frequencies and a ridge residual, finding that linear recoverability does not reliably indicate downstream utility. Exact 6-mer-preserving shuffles further reveal task-relevant sequence-order sensitivity, most pronounced for NTv3, although order sensitivity alone does not guarantee predictive improvements. Our results establish compositional features as essential controls and offer complementary diagnostics for evaluating the added value of frozen genomic representations, without making claims about fine-tuning capacity.",
    "published": "2026-10-11T15:51:29Z",
    "updated": "2026-10-11T15:51:29Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15711"
  },
  {
    "id": "2610.15710",
    "title": "Suggested Is Not Superseded: A Pre-Registered Evaluation of a System-One Model as a Memory-Retirement Gate",
    "authors": [
      "Xupeng Chen",
      "Chenqian Le"
    ],
    "abstract": "Long-term memory for assistants needs a gate that decides when a new utterance retires an old stored claim. Benchmark labels for this step mark a pair as changed or not, so they cannot tell a gate that acts on established change from one that acts on a hint. We write a task contract that separates the two (SUPERSEDED vs. NEEDS-CONFIRMATION vs. COMPATIBLE), label 500 test pairs built from STALE (change pairs plus same-user controls) with three LLM annotators and two human adjudicators (one author and a second annotator; provenance reported), and evaluate Jev, a typed \"System One\" decision model, under pre-registered hypotheses. Of the 179 test pairs STALE marks as changed, 72 meet the contract's bar for an established change. Jev never retired a claim on 141 same-conversation non-changes. Its failure is premature retirement: the binary gate retires 39.2% of claims whose change is only suggested. A three-way decision cuts this to 15.5% at a 15.3-point detection cost, which misses our pre-registered 10-point budget, and it lands on the binary gate's own threshold frontier; these verdicts hold under three readings of the gold labels. On a held-out vault scored against a second annotator's labels, a cascade that escalated uncertain cases to a reasoning model and looked best on development data was indistinguishable from simply raising the threshold (premature retirement 26.8% vs. 6.5% on dev). Part of the gap comes from the gold labels: relative to that annotator's reading, LLM-majority gold shares most of its errors with a same-family escalation model, and an identity for binary labels says how much such shared errors hide. The rest is small-sample selection on development data. For builders this means a binary score should not be wired to delete: route suggested changes to pending evidence, and do not trust a cascade selected on development data of this size.",
    "published": "2026-10-11T15:48:16Z",
    "updated": "2026-10-11T15:48:16Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15710"
  },
  {
    "id": "2610.15708",
    "title": "SpecForge: Recursive Self-Improvement for Coding Agents via Behavioral Specifications",
    "authors": [
      "Yutong Cheng",
      "Haifeng Chen",
      "Peng Gao",
      "Wei Cheng"
    ],
    "abstract": "Coding agents based on frozen language models can improve their performance by refining the external context they rely on, without updating model weights. We study recursive self-improvement through behavioral specifications: natural-language code documentation that describes the behavior of program entities and guides agents in generating correct code. We formulate a self-improvement loop in which an agent generates code from its current specifications, evaluates it with execution-verified tests, and refines the specifications based on observed failures. The improved specifications then guide subsequent generation, progressively improving the agent's understanding of the codebase. However, recursive refinement is challenging because program entities are interdependent. Improving the specification of one entity can inadvertently degrade the correctness of others, a phenomenon we call output coupling. This creates a whack-a-mole effect in which local improvements cause regressions elsewhere, preventing consistent progress. We introduce SpecForge, a multi-frontier tree search framework that addresses this challenge with three mechanisms: (i) Pareto-guided state selection preserves complementary specification states and prevents premature commitment; (ii) dependency-constrained entity selection prioritizes callee-before-caller refinement; and (iii) error-diversified expansion explores multiple refinements using different subsets of test failures. On DevEval+, SpecForge achieves the best performance across five backbone models, including a 94.9% solve rate with Claude-4.5-Sonnet and a 5.7-percentage-point average improvement over the strongest baseline. The improved specifications also make the agent better at tasks outside the loop: they transfer to cross-language translation and to new-feature implementation, where they outperform the benchmark-provided requirement documents.",
    "published": "2026-10-11T15:46:22Z",
    "updated": "2026-10-11T15:46:22Z",
    "categories": [
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.15708"
  },
  {
    "id": "2610.15705",
    "title": "bharatSetu: a 1M x 22 bridge for indic translation",
    "authors": [
      "Haq Nawaz Malik",
      "Nahfid Nissar",
      "Faizan Iqbal"
    ],
    "abstract": "India's Eighth Schedule recognises 22 languages, yet parallel data is uneven across them, and many language pairs, especially among lower-resource languages such as Bodo, Dogri, Santali and Kashmiri, lack direct bitext. We present BharatSetu 22-Indic 1M, a row-aligned table of 984,764 English sentences, each paired with machine translations into all 22 scheduled languages (21,664,808 Indic cells), generated with the sarvamai/sarvam-translate model family. Because every Indic cell in a row translates the same English sentence, any two columns form a translation pair: 462 directed Indic-to-Indic pairs, or 506 including English, without direct bitext. We call these pivot-derived pairs and propose a confidence layer that lets users choose how strictly each pair is connected. The corpus is machine-generated and not human-verified; quality is expected to vary by language, domain and sentence style, and pivot-derived pairs can inherit errors from both sides. We therefore release BharatSetu as a machine layer and propose a human-correction layer keyed to the same row identifiers, so that each corrected column upgrades every pair that uses it, together with an evaluation protocol. We report no translation-quality results.",
    "published": "2026-10-11T15:39:19Z",
    "updated": "2026-10-11T15:39:19Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15705"
  },
  {
    "id": "2610.15702",
    "title": "RespFocus: Learning Temporal Evidence for Weakly Supervised Respiratory Sound Classification",
    "authors": [
      "Yi Tian",
      "Xiaohuan Chen",
      "Yufei tang",
      "Xinyu Lin",
      "Hongliang Li",
      "Chengbin Hou",
      "Degen Huang",
      "Rongshan Yu"
    ],
    "abstract": "Respiratory auscultation provides a low-cost means of assessing pulmonary function, yet transient crackles and sustained wheezes can be difficult to recognize in noisy clinical recordings. Conventional deep learning classifiers often operate as black boxes, offering limited insight into the temporal acoustic evidence supporting their predictions. We present RespFocus, a weakly supervised framework that uses multiple instance learning (MIL) to learn inspectable temporal evidence from cycle-level labels and integrate it into classification. We also introduce PedResp2026, a multicenter pediatric respiratory sound cohort collected in routine clinical environments with adjudicated cycle-level annotations. In classification experiments, RespFocus achieves four-class Scores of 69.55\\% on public ICBHI 2017 and 72.91\\% on PedResp2026. Evidence diagnostics and matched temporal interventions support the functional contribution of the learned evidence to model predictions. Together, these findings highlight RespFocus's potential as a tool for automated respiratory sound diagnosis.",
    "published": "2026-10-11T15:37:56Z",
    "updated": "2026-10-11T15:37:56Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15702"
  },
  {
    "id": "2610.15699",
    "title": "TabMosaic: Unified In-Context Diffusion for Tabular Generative Tasks",
    "authors": [
      "Jayoung Kim",
      "Sanghyun Hong",
      "Noseong Park"
    ],
    "abstract": "Generative modeling for tabular data has advanced to the point where models can synthesize realistic records, recover missing values, and generate samples conditioned on class labels or observed attributes. Despite recent advances, existing approaches either require table-specific training or restrict in-context learning to single-cell prediction. In this work, we formulate these tabular generative tasks as a single problem: modeling the joint conditional distribution of an arbitrary set of target cells given the observed cells of an unseen table. To this end, we turn to diffusion, whose denoising objective is defined jointly over all target cells rather than one cell at a time. Under the pretraining distribution, this objective is minimized by the posterior predictive distribution over the target set. Building on this, we propose TabMosaic, a unified in-context diffusion model for generating mixed-type target cells in unseen, potentially incomplete tables without table-specific training. We further show that its pretraining objective bounds the conditional negative log-likelihood and the divergence from the posterior predictive for arbitrary target sets, extending the Bayesian account of in-context learning from a single-value prediction to joint multi-cell generation. Across 48 real-world tables, TabMosaic ranks first on all evaluated generative tasks against 20 baseline approaches",
    "published": "2026-10-11T15:35:39Z",
    "updated": "2026-10-11T15:35:39Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15699"
  },
  {
    "id": "2610.15691",
    "title": "FARL: A Fully Automated Pipeline of RL Interface and Solver Design",
    "authors": [
      "Tianyu Jin",
      "Liuyu Xiang",
      "Chaowen Yang",
      "Xingyang Chang",
      "Pei Pei Li",
      "Zhaofeng He"
    ],
    "abstract": "Existing reinforcement learning (RL) largely focuses on optimizing learning algorithms within a pre-defined task formulation, while applying RL to new tasks still relies heavily on human expertise to design the learning pipeline: what an agent observes, how it is rewarded, which algorithm it uses, and how training is configured. Automating these choices is challenging because they are tightly coupled. We introduce FARL (Fully Automated Reinforcement Learning), a framework that automates RL design by jointly searching observation and reward programs, learning algorithms, and training settings. FARL uses training statistics and observed behavior to diagnose failures, propose changes, and test whether they improve learning. Its search preserves diverse candidates and the controls needed for these tests, using a staged budget to screen designs before investing in longer training. Experimental memory records each finding together with its conditions, so an unsuccessful component can be reconsidered in a different combination. Across expert-withheld and expert-available settings, FARL outperforms the evaluated automated baselines on challenging navigation, locomotion, and manipulation tasks. On Adroit Hand Relocate, FARL achieves 97.1% success at 5M training steps per policy, compared with 0% for Eureka and LiMEN and 1.0% for native Proximal Policy Optimization (PPO) under the same policy training budget.",
    "published": "2026-10-11T15:22:18Z",
    "updated": "2026-10-11T15:22:18Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15691"
  },
  {
    "id": "2610.15685",
    "title": "Radioactive Feedback: Tracing Models Trained by Label-Only LLM Supervision",
    "authors": [
      "Yuejia Li",
      "JunHeng Li",
      "Hao Wu",
      "Ke He",
      "Mang Ye"
    ],
    "abstract": "Conventional distillation transfers capability through teacher-generated demonstrations. LLM-as-a-Judge knowledge distillation offers a distinct and increasingly practical alternative. In the label-only variant studied here, the student generates every response and improves from scalar scores alone. Prior work shows that this non-demonstrative feedback can improve student capability, but it creates a fundamentally different provenance problem. No teacher-generated answer enters the student's training set, so any evaluator-specific trace must pass through a low-bandwidth reward signal rather than copied text. Existing watermarks and distillation detectors do not cover this score-only channel. We introduce Radioactive Feedback, which encodes a registered pattern of behavioral preferences in the rewards themselves. The evaluator applies bounded pointwise adjustments to quality-qualified responses, allowing repeated optimization to transfer the pattern to a student trained by another party. Experiments on code and mathematics show that the registered preferences transfer through scores alone and across datasets, enabling black-box detection against a fixed reference pool.",
    "published": "2026-10-11T15:09:58Z",
    "updated": "2026-10-11T15:09:58Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15685"
  },
  {
    "id": "2610.15681",
    "title": "Rethinking Human Intent-to-CAD: Parametric CAD Model Generation via Cooperative Multi-Task Alignment and Spatial-Aware Reinforcement Learning",
    "authors": [
      "Qingwang Zhang",
      "Jiahao Li",
      "Xiangdong Zhou"
    ],
    "abstract": "Parametric Computer-Aided-Design (CAD) modeling from human intent remains challenging, particularly during the conceptual design stage, where design goals are expressed through incomplete and unstructured modalities (e.g., hand-drawn sketches and textual descriptions). In this work, we rethink the human intent-to-CAD pipeline and propose a unified method that directly maps multi-level human intents to executable codes, without assuming the prior existence of target CAD models. To support our study, we construct HiCAD, the first large-scale dataset aligning hand-drawn sketches, textual descriptions, and parametric CAD codes. Based on this, we introduce HiCAD, a two-stage framework comprising Cooperative Multi-Task Alignment to bridge the representational gap between heterogeneous inputs, and Spatial-Aware Reinforcement Learning to enforce geometric and topological consistency. Extensive experiments demonstrate that our method significantly outperforms existing baselines across multiple tasks, validating its effectiveness and robustness in transforming heterogeneous human intents into high-fidelity parametric CAD models. Our project page: https://zqwlearning.github.io/HiCAD.",
    "published": "2026-10-11T15:05:49Z",
    "updated": "2026-10-11T15:05:49Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15681"
  },
  {
    "id": "2610.15677",
    "title": "Knowledge Interaction in Hypernetwork-based Continual Learning: Conflict and Composition",
    "authors": [
      "Jiaqi Zheng",
      "Yi Hu",
      "Yadong Mu",
      "Muhan Zhang"
    ],
    "abstract": "Continual learning aims to adapt pretrained large language models (LLMs) to evolving data while preserving their pretrained capabilities. A central challenge is catastrophic forgetting: adaptation to new data can impair performance on previously learned knowledge. Since continual learning commonly changes model parameters, the model's predictions may draw on knowledge from the base model, the parameter update, and the input context. Understanding how these sources interact is essential: conflicts reveal whether new knowledge can override outdated knowledge, while multi-hop reasoning tests whether new knowledge can be composed with existing knowledge to support generalization. We study these interactions in a hypernetwork-based adaptation framework, where a shared network generates adapters from context, allowing a frozen base model to adapt without task-specific updates. We find that, under knowledge conflict, models preferentially follow the context, and their choices depend more on where knowledge is presented than on its content. We also show that context and adapter knowledge perturb the base model's representations along directions orthogonal to its clean hidden states, enabling us to derive steering vectors that control which source the model follows. In multi-hop reasoning, we find that models fail to reliably compose knowledge across the three sources, with the key breakdown arising from the interaction of the hypernetwork with both the base model and the context. Code and reproduction materials: https://github.com/missswiftie/Knowledge-Interaction-in-CL",
    "published": "2026-10-11T14:57:18Z",
    "updated": "2026-10-11T14:57:18Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15677"
  },
  {
    "id": "2610.14547",
    "title": "A Self-Defining Operator for Distributed Applications",
    "authors": [
      "Shihang Li",
      "Thomas Anderson",
      "Ratul Mahajan",
      "Simon Peter",
      "Luke Zettlemoyer"
    ],
    "abstract": "To operate distributed applications with high availability, operators must rapidly diagnose and mitigate any incident. LLM-based agents can help, but unlike experienced human operators they do not improve as they handle more incidents. Each investigation starts from scratch, re-deriving likely causes and re-testing hypotheses even when a similar fault was resolved in the past. We present a self-defining operator (SDO) that improves with time by updating its operational behavior and memory. When SDO resolves an incident, it distills that experience into playbooks, which describe reusable diagnostic instructions for future incidents with similar faults, and detectors, scripts that take application telemetry as input and output relevant playbook(s). SDO continuously runs the detectors and invokes LLMs only when one fires, so its token cost scales with incident count rather than with operational time. Across 11 open-source microservice applications, SDO cuts resolution time by 52% on recurring faults while keeping per-incident cost low. SDO is open source at https://github.com/self-defining-systems/sdo.",
    "published": "2026-10-10T04:08:13Z",
    "updated": "2026-10-14T06:00:51Z",
    "categories": [
      "cs.DC",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14547"
  },
  {
    "id": "2610.14544",
    "title": "InfraWorld: Motion-Aware World Modeling for Roadside 4D Occupancy Forecasting",
    "authors": [
      "Songkai Wang",
      "Xiaokai Bai",
      "Lei Yang",
      "Hui-liang Shen"
    ],
    "abstract": "Roadside 4D occupancy forecasting predicts future semantic occupancy in a fixed infrastructure coordinate system. Roadside scenes are globally structured yet locally evolving, requiring comprehensive scene-level context while precisely modeling sparse localized motion. However, existing forecasting paradigms struggle to tackle both requirements. To address this limitation, we propose InfraWorld, a world model formulating roadside occupancy forecasting as selective state evolution. InfraWorld maintains a dense BEV state for the complete scene and persistent motion queries for moving regions, assigning complementary states to global context and local dynamics. Specifically, we propose Dynamic Query Initiation (DQI) to initialize queries in regions supported by motion in the observed history. During rollout, the dense state is updated through Long--Short Temporal Fusion (LST), which combines short-term adjacent-frame continuity with long-term motion trends to preserve stable context while capturing scene evolution. Motion-Aware Query Injection (MAQI) then refines the queries and injects confidence-weighted query information into corresponding BEV tokens, enabling targeted dynamic updates without perturbing global context. Together, InfraWorld concentrates predictive capacity on evolving traffic regions. Extensive experiments on the InfraOcc and Occ3D--nus datasets demonstrate that InfraWorld achieves state-of-the-art performance for roadside 4D occupancy forecasting while retaining its effectiveness under ego-centric settings. Code will be released.",
    "published": "2026-10-10T04:00:44Z",
    "updated": "2026-10-10T04:00:44Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.14544"
  },
  {
    "id": "2610.14542",
    "title": "Are Multimodal Benchmarks Really Useful? Item-Level Multimodal Benchmark Diagnosis via Structure-Response Co-Calibration",
    "authors": [
      "Shiqi Zhang",
      "Weixin Zeng",
      "Ziheng Zhang",
      "Jiuyang Tang",
      "Xiang Zhao"
    ],
    "abstract": "Multimodal benchmarks are central to evaluating whether models can reason over information from multiple modalities. However, existing literature has revealed that some benchmarks may contain shortcut items that can be answered from a single modality or from answer-option regularities alone, thus failing to reflect models' true cross-modal inference ability. Existing methods for assessing benchmarks typically rely either on intrinsic item structure or extrinsic model response behavior, which are not adequate for a comprehensive diagnosis. To fill in this gap, we propose SRCoD, a structure-response co-calibrated diagnosis framework for item-level diagnosis of modality dependence in multimodal benchmarks. SRCoD estimates sample-wise multimodal information structure from benchmark content and target answers, and uses this signal as a soft structural anchor for modality-conditioned item response modeling. The learned model produces a calibrated item-level diagnostic profile that reflects how strongly an item depends on different forms of modality evidence, enabling fine-grained benchmark analysis beyond aggregate accuracy. SRCoD also provides interpretable attribution of the diagnosis results. Extensive experiments under two complementary protocols, i.e., benchmark-refinement oriented validation and human-labeled item validation, demonstrate that SRCoD outperforms state-of-the-art benchmark diagnosis methods.",
    "published": "2026-10-10T03:57:33Z",
    "updated": "2026-10-10T03:57:33Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14542"
  },
  {
    "id": "2610.14541",
    "title": "GG-Nav: Goal-oriented Grounding Chain-of-Thought Elicits Reasoning in Navigation Foundation Models",
    "authors": [
      "Shaohao Zhu",
      "Wensi Huang",
      "Siqi Zhang",
      "Yuqiang Yang",
      "Meng Wei",
      "Chenyang Wan",
      "Tianle Liu",
      "Tai Wang",
      "Jinming Xu"
    ],
    "abstract": "Emerging strong Vision-Language Models (VLMs) have advanced navigation foundation models. However, these models still have unsatisfactory performance on goal-oriented navigation settings. In this paper, we first conduct a motivating study revealing that the key issue lies in the insufficient utilization of streaming observations and imprecise target localization. To tackle these challenges, we propose GG-Nav, a simple yet effective navigation framework that learns a structured chain-of-thought (CoT) mechanism via supervised fine-tuning to explicitly localize goal-relevant instances, accumulate grounding evidence, and support more reliable decision-making. Specifically, the structured CoT is designed with two key stages: (i) Observation-to-Evidence, which reasons over all intermediate frames between adjacent decision steps to retain useful goal-related evidence; and (ii) Evidence-to-Decision, which integrates the current observation with accumulated evidence to ground the target and support the generation of navigation actions or clarification questions. Extensive experiments show that GG-Nav outperforms the state-of-the-art methods in terms of success rates on the HM3D ObjectNav, VL-LN, and CoIN benchmarks by 3.1%, 16.6%, and 5.3%, respectively. Ablation studies further show that accumulating evidence from intermediate observations reduces evidence-missing failures by 11.6%, while explicit grounding reduces stopping errors by 49.4%. We also deploy GG-Nav on a Unitree Go2 robot, demonstrating its zero-shot generalization capability in unseen real-world environments.",
    "published": "2026-10-10T03:54:19Z",
    "updated": "2026-10-10T03:54:19Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14541"
  },
  {
    "id": "2610.14539",
    "title": "FDE-Bench: Evaluating End-to-End Delivery from Underspecified Real-World Business Requests",
    "authors": [
      "Huaiming Li",
      "Can Huang",
      "Chufan Wu",
      "Danyu Liu",
      "Xiaomin Yuan",
      "Qinze Li",
      "Yui Lo",
      "Wenhui Bai",
      "Qianlong Wang",
      "Zengle Ge",
      "Xiyu Yan",
      "Yuheng Cheng",
      "Jinhui Ren",
      "Guokai Chen",
      "Jiaqun Liu",
      "Haoran Li",
      "Qianhui Liu",
      "Annan Li",
      "Jianmin Wu",
      "Dawei Yin",
      "Dou Shen"
    ],
    "abstract": "Real-world business requests often leave key requirements unstated because frontline practitioners struggle to articulate rules they know from experience. Forward-deployed engineers (FDEs) must elicit these requirements through dialogue and iteratively optimize solutions until they meet customer acceptance criteria. Existing optimization benchmarks typically start from explicit objectives, while clarification benchmarks often introduce information gaps into existing tasks. We introduce FDE-Bench, the first benchmark built from real customer projects to evaluate agents on end-to-end delivery tasks that require interactive requirement clarification and iterative optimization. Its 49 cases span combinatorial optimization and machine learning. Clarification targets are distilled from discussions between frontline practitioners and FDEs. Agents elicit missing requirements from a simulated customer, and case-specific evaluators assess final artifacts against acceptance criteria using customer-accepted FDE solutions as quality references. Across 18 agent configurations, the highest mean delivery score is only 0.5510, compared with an FDE reference of 1.0. The highest delivery success rate (DSR), defined as the fraction of planned runs reaching this reference, is only 6.12%. These results show that reliable FDE-level end-to-end delivery remains out of reach for the evaluated agents on underspecified real-world business tasks. The benchmark project page is available at https://baidubce.github.io/FM-Agent/FDE-Bench/.",
    "published": "2026-10-10T03:53:42Z",
    "updated": "2026-10-10T03:53:42Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.14539"
  },
  {
    "id": "2610.14530",
    "title": "Who to Trust in Multi-Robot Systems: Joint Robot and Object Hypothesis Trust Inference via Neural-Symbolic Cross-Validation",
    "authors": [
      "Ruiyang Wang",
      "Hao-Lun Hsu",
      "Haocheng Meng",
      "Songqiao Xie",
      "Miroslav Pajic"
    ],
    "abstract": "Multi-robot systems (MRS) offer significant advantages over single-robot platforms by enabling information sharing and coordination for different tasks in complex environments. However, reliable cooperation critically depends on inferring trust over both information sources and their reported hypotheses, particularly under partial observability and potential adversarial interference. Existing approaches frequently depend on pre-established trust relationships or side-channel information, which may not be available or reliable in realistic MRS deployments. This work introduces NeST-Bayes, a neural-symbolic framework that jointly infers robot and hypothesis trust using only inter-robot observation consistency, without requiring preassigned robot trust, reputation information, or side-channel identity signals. NeST-Bayes infers instantaneous trust evidence scores for robots and object hypotheses by reasoning over ego-centric relational graphs constructed from cross-robot observation consistency. These evidence scores are accumulated over time through Bayesian updates of Beta-distributed trust beliefs to maintain temporally consistent trust estimates. Extensive evaluations show that NeST-Bayes achieves the highest mean object precision and robot recall across all benchmark settings, and the highest robot precision and object recall in most settings, compared to trust-based methods. Under aggressive optimized attacks, it achieves 98.8\\% robot precision with 93.8\\% recall and 98.3\\% object precision with 95.4\\% recall. In an occlusion-rich Webots warehouse, it maintains 92.5\\% robot precision with 92.0\\% recall and 97.3\\% object precision with 85.0\\% recall. These results demonstrate joint improvements in the reliability and coverage of retained information.",
    "published": "2026-10-10T03:41:27Z",
    "updated": "2026-10-10T03:41:27Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14530"
  },
  {
    "id": "2610.14525",
    "title": "Energy Ring: Stabilizing Feature Energy for Reliable Test-Time Discovery",
    "authors": [
      "Tianle Liu",
      "Fan Lyu",
      "Tingliang Feng",
      "Chenggong Ni",
      "Tianqi Wang",
      "Zhang Zhang",
      "Fuyuan Hu",
      "Rui Yao",
      "Tao Zhou"
    ],
    "abstract": "Test-Time Discovery (TTD) aims to recognize known classes and detect novel ones while the model is already deployed, operating directly on a continual unlabeled test-time stream. Existing TTD methods are overly conservative, making known and unknown features collapse together and difficult to separate during test-time adaptation. In this paper, we revisit TTD from an energy perspective and find that the natural energy gap between known and unknown classes is unstable and easily collapses. We therefore propose Energy Ring to stabilize this gap by anchoring the two types of classes on separate energy rings. A lightweight adapter enlarges the norm-based gap while preserving known-class directions, and a perturbation consistency module forms compact clusters for unknown classes. During testing, energy-guided confidence weighting improves prediction, and a stability-based rectification mechanism corrects unreliable updates. Experimental results show that Energy Ring significantly improves TTD performance against existing TTD methods.",
    "published": "2026-10-10T03:36:12Z",
    "updated": "2026-10-10T03:36:12Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14525"
  },
  {
    "id": "2610.14523",
    "title": "ScienceBuddy-PV: A Verifier-Governed Recursive Improvement Protocol for Panvascular Intervention Research",
    "authors": [
      "Lingsen You",
      "Yujun Guo",
      "Xinyu Zhong",
      "Zijie Feng",
      "Wentong Wang",
      "Li Shen",
      "Junbo Ge"
    ],
    "abstract": "ScienceBuddy-PV adapts the ScienceBuddy recursive-in-recursive design to panvascular intervention research through a structured evidence ledger, device-vessel ontology, abstention contract and retained failure bank. Recursive harness optimization and outer-loop model learning, including reinforcement learning, are specified but not executed. We audit a fixed component, rather than the complete agent system, using separate ARCADE syntax and stenosis tasks (1,000 training, 200 validation and 300 test images per task). A shared task-masked convolutional model was trained once per representation setting; its parameters and the heuristic support gate were then held fixed, with the stenosis threshold selected on validation data. On the locked test sets, syntax Dice was 0.475 (95% CI 0.459-0.490) and stenosis Dice was 0.231 (95% CI 0.214-0.249). Stenosis pixel AUROC was 0.957 and AUPRC was 0.180 at prevalence 0.00975. The gate accepted 76.7% of stenosis-frame outputs versus 100% for a score-only comparator. In a constructed mask audit, it accepted 44.3% of reference candidates and rejected 55.7%, exposing the cost of abstention. Acceptance does not establish correctness or clinical safety. This public-data component audit makes support and abstention measurable and provides a reproducible protocol for future collaborative agent studies. It does not demonstrate recursive improvement, patient-level validity or clinical device recommendations.",
    "published": "2026-10-10T03:35:28Z",
    "updated": "2026-10-10T03:35:28Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.14523"
  },
  {
    "id": "2610.14517",
    "title": "We Have Been Interpreting Diffusion Transformer Backbone Behaviors Wrong",
    "authors": [
      "Benyuan Meng",
      "Longtao Huang",
      "Yang Liu",
      "Liang Lin"
    ],
    "abstract": "During a network forward call, diffusion backbones naturally produce many intermediate activations. If we evaluate each activation against an identical downstream benchmarking protocol, we can plot an inverted-U-shaped curve as the depth profile: the activation's performance goes up first and then down as we go into deeper layers. This is common knowledge in the diffusion model community, which inspires many applications including the widely-adopted REPA. However, the common interpretation of this depth profile may be inaccurate and incomplete: (i) The cause of this curve has long been treated as signal granularity changing from coarse to fine, but there has been little evidence in DiT backbones. (ii) The community has been mainly studying this phenomenon in a static way, without investigating how it changes across different training setups. In this work, we show a different mechanism picture for the profile, where the prediction target (e.g., $ε$, $u$, $x_0$) sits at the center. The semantically meaningful signal is only an intermediate by-product for predicting the target, while the prediction target is the real goal for the backbone. Furthermore, the choice of prediction targets as part of the training setup can predictably affect the curve's shape. With this updated interpretation, many applications of this depth profile can be better grounded and predicted. As an example, we show how to predict the near-optimal placement of REPA based on the prediction target of the training setup. The code is at https://github.com/Darkbblue/dit-compare.",
    "published": "2026-10-10T03:26:50Z",
    "updated": "2026-10-10T03:26:50Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.14517"
  },
  {
    "id": "2610.14514",
    "title": "Compositional Concepts Erasing: Disentangling Object-Style via Domain Manifold Unlearning",
    "authors": [
      "Yang Xiao",
      "Kaiyuan Deng",
      "Gen Li",
      "Zinan Ling",
      "Zhiwen Fan",
      "Xiaolong Ma",
      "Bo Hui"
    ],
    "abstract": "Diffusion models pose significant risks regarding the generation of illicit content and copyright violations. This has catalyzed the development of machine unlearning to erase harmful concepts or copyrighted styles from a model's generative repertoire without compromising its general performance. However, previous unlearning approaches on diffusion models have largely focused on either object-level or style-level removal and failed to address the challenge of object-style combination unlearning. At the same time, multiple unlearning requests often lead to catastrophic forgetting. To address these challenges, we propose Domain Manifold Unlearning (DMU), which uses an EMA-updated feature proxy extracted from intermediate diffusion features to represent the retained target-object direction. As a lightweight estimating representation of an object, DMU enables selective unlearning of domain-specific components in a specific object while preserving other semantic representations, thereby significantly enhancing robustness in multiple combination unlearning scenarios. Extensive experiments show that DMU significantly mitigates catastrophic forgetting, outperforming state-of-the-art methods of batch unlearning and sequential unlearning.",
    "published": "2026-10-10T03:22:31Z",
    "updated": "2026-10-10T03:22:31Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14514"
  },
  {
    "id": "2610.14513",
    "title": "TartanMatch: Towards Universal Dense Correspondence Across Modalities",
    "authors": [
      "Hyeokjoon Kwon",
      "Jiting Cai",
      "Ruogu Li",
      "Kritan Bhandari",
      "Geethika Hemkumar",
      "Parv Maheshwari",
      "Yuheng Qiu",
      "Yuchen Zhang",
      "Sebastian Scherer",
      "Wenshan Wang"
    ],
    "abstract": "Robotic platforms combine multi-modal sensors to operate across diverse conditions, but most dense correspondence methods are limited to RGB-RGB or a small set of modality pairs. Training a model for each modality pair scales poorly with the number of sensors and forgoes potential positive transfer across modality pairs. We introduce TartanMatch, a unified model for dense correspondence across all 25 ordered pairs among RGB, event, thermal, depth, and projected LiDAR. TartanMatch adapts an RGB-pretrained correspondence model to all modality pairs within one shared network using lightweight modality adaptation and a mixture of real and synthetic data. On zero-shot real-world benchmarks, TartanMatch reduces Endpoint Error (EPE) over the strongest baselines by 61.9% for cross-modal matching and 49.6% for same-modal matching. We further show that joint training across all modality pairs improves average matching accuracy over pair-specific training, especially on challenging cross-modal pairs. These results demonstrate that a single model achieves broad multi-modal coverage and state-of-the-art matching accuracy.",
    "published": "2026-10-10T03:19:32Z",
    "updated": "2026-10-10T03:19:32Z",
    "categories": [
      "cs.CV",
      "cs.LG",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.14513"
  },
  {
    "id": "2610.14512",
    "title": "Spatiotemporal Recognition of Abdominal Wall Layers During Optical Trocar Entry",
    "authors": [
      "Shreeram Athreya",
      "Andrew Melehy",
      "Carter Prentice",
      "Michael Robinson",
      "Corey Arnold",
      "James Wu",
      "William Speier"
    ],
    "abstract": "Objective. To evaluate whether spatial context and temporal modeling improve tissue recognition during optical trocar entry, where multiple abdominal-wall tissues may be visible simultaneously. Methods. We retrospectively analyzed 71 recordings with 1,516 annotated keyframes and 29,151 clinician-annotated sectors. Each frame was divided into 28 polar-grid sectors assigned to nine tissue classes. Color, neighboring-sector, and positional features were used by a gradient-boosted emission classifier. The full pipeline added learned temporal smoothing, spatial regularization, an anatomically ordered hidden Markov model, and posterior blending. Five-fold cross-validation was grouped by recording, with cross-fitting to prevent within-recording leakage. Primary evaluation used clinician-derived targets; ablations assessed classification, probability quality, spatial consistency, and peritoneum-or-deeper onset timing. Results. The complete pipeline achieved accuracy 0.646, macro-F1 0.507, and macro-AUROC 0.882, versus 0.600, 0.440, and 0.861 for emissions alone. Macro-F1 improved by 0.066 across all five folds. Label changes decreased from 66.2 to 19.5 per sector-minute, and median onset error decreased from 15.58 to 2.45 seconds. Frames with a tissue-depth-code span of at least three decreased from 53% to 26%, versus 22% for clinician annotations. Performance remained limited for preperitoneal fat and bowel, and the full model retained a 44% premature-onset proportion. Conclusions. Combining appearance, spatial context, and temporal constraints improved retrospective tissue recognition and onset localization. Tissue-specific limitations, residual timing errors, and reliance on future observations warrant external validation and prospective evaluation of causal models before clinical use.",
    "published": "2026-10-10T03:19:27Z",
    "updated": "2026-10-10T03:19:27Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.14512"
  },
  {
    "id": "2610.12574",
    "title": "Scaling Multi-Teacher Distillation for Digital Pathology",
    "authors": [
      "Sofiène Boutaj",
      "Pierre Marza",
      "Varun Belagali",
      "Dimitris Samaras",
      "Maria Vakalopoulou",
      "Stergios Christodoulidis"
    ],
    "abstract": "Multi-teacher distillation allows transferring knowledge from multiple \"teacher\" networks to a single \"student\" network. This method is promising in fields such as digital pathology, where many powerful foundation models were proposed recently. However, as we show in this paper, the standard multi-teacher distillation approach reacts poorly to an increase in the number of teachers used to train a student encoder. We demonstrate that learning teacher-specific representations is a key to scaling in MTD. Importantly, different design choices, such as learnable teacher tokens, a tailored attention scheme, additional mixture-of-experts layers and a contrastive loss, are proposed to better learn such teacher-specific representations. We show that our method better scales with respect to the number of considered teachers, allowing us to train compact student encoders, up to 10x more efficient than larger teacher foundation models, while matching their performance and even outperforming them on a large set of tile-level and slide-level tasks. We conduct a thorough empirical validation, evaluating more than 10 foundation models on 39 tasks spanning tile and slide levels. As a result, we release a new collection of strong and efficient foundation models, named OMNI, trained from the knowledge of 10 state-of-the-art foundation models. We finally conduct an analysis of the learned teacher-specific representations, highlighting their complementarity and explaining why they can be easily aggregated at downstream time.",
    "published": "2026-10-08T18:02:09Z",
    "updated": "2026-10-08T18:02:09Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12574"
  },
  {
    "id": "2610.12568",
    "title": "MIRAGE: Metric Inference and Reliability-Aware Gaussian Estimation from Feed-Forward Vision",
    "authors": [
      "Xinzhe Wang",
      "Changjian Jiang",
      "Kaiwen Song",
      "Xudong Li",
      "Kerui Ren",
      "Ran Yi",
      "Lizhuang Ma",
      "Chunhua Shen",
      "Linning Xu",
      "Tao Lu",
      "Mulin Yu"
    ],
    "abstract": "Feed-forward 3D priors enable high-quality reconstruction from image streams but often lack reliable metric scale and suffer from long-term trajectory drift. In contrast, LiDAR--inertial estimation provides metrically accurate motion but lacks the image-space consistency needed for high-fidelity reconstruction. We propose $MIRAGE$, which anchors feed-forward visual geometry to LiDAR--IMU metric motion and regulates online pose corrections according to correspondence support and cross-modal agreement, jointly enabling accurate metric pose estimation and high-fidelity Gaussian reconstruction. Experiments on Oxford Spires, M2DGR and INS show that MIRAGE achieves accurate metric trajectory estimation, outperforming COLMAP, a widely used but computationally expensive reference for vision-only benchmarks. Motivated by the scarcity of long-horizon monocular benchmarks for large-scale indoor reconstruction, we further build a multimodal data-collection platform and use MIRAGE to establish accurate 6-DoF reference trajectories for a new vision-only benchmark. We benchmark recent monocular large-scale reconstruction methods on this dataset, providing a systematic evaluation of their performance in long-horizon indoor scenes.",
    "published": "2026-10-08T18:00:56Z",
    "updated": "2026-10-08T18:00:56Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12568"
  },
  {
    "id": "2610.12567",
    "title": "CASTER: Formalizing Zero-Shot Manipulation from Synthetic Videos as Constrained Optimization",
    "authors": [
      "Yinlong Dai",
      "Homanga Bharadhwaj",
      "Dylan P. Losey"
    ],
    "abstract": "Prior research on learning from humans often requires real human demonstrations. But advances in video generation models offer a new paradigm: we can now prompt these generators to make synthetic videos of the task. On the plus side, these synthetic videos take place in the robot's current environment, and do not require actual human teaching. However, while the generated videos appear to show plausible motions, they lack both physical consistency and robot grounding, and thus the robot cannot directly roll out the trajectory shown by the video. In this paper we seek to formalize the process of going from synthetic video generation to real-world robot trajectories for zero-shot manipulation tasks. We recognize that this problem is an instance of constrained optimization. The object trajectories extracted from the synthetic video provide an initial guess at the correct motion, and the robot must refine these trajectories (for instance, within a digital twin) while enforcing physical feasibility and semantic consistency. Our optimization-based formalism provides insights into the video generation properties necessary for success. Specifically, we show that the video generation must probabilistically seed the search within a semantic basin of attraction where the trajectory can be locally modified without losing its task alignment. Our analysis further reveals that state-of-the-art approaches can be viewed as instances of our unified formalism with key simplifications. In our experiments we remove these simplifications to more closely match the underlying optimization, leading to more robust zero-shot trajectories from synthetic videos and improving average task success by 34.1% compared to the best-performing baseline. See videos at our project website: https://collab.me.vt.edu/CASTER",
    "published": "2026-10-08T18:00:55Z",
    "updated": "2026-10-08T18:00:55Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12567"
  },
  {
    "id": "2610.12549",
    "title": "Fly-by-Code: Embodied Coding Agents for Aerial Manipulation with Active Visual and Physical Feedback",
    "authors": [
      "Jaewoo Lee",
      "Jeongyeon Seo",
      "Sihyun Cho",
      "Gyeongrak Choe",
      "Yutong Wang",
      "Bavin Saravanan",
      "Jia-Bin Huang",
      "Furong Huang",
      "Sebastian Scherer",
      "Guanya Shi",
      "H. Jin Kim",
      "Seungjae Lee",
      "Dongjae Lee"
    ],
    "abstract": "Embodied coding agents construct robot policies from natural-language instructions by generating executable programs and refining them from execution feedback. This refinement assumes that execution feedback reveals whether the task succeeded and, after a failure, provides sufficient evidence to guide program revision. Aerial manipulation violates this assumption in two ways. Payload constraints restrict onboard camera coverage and leave task-critical outcomes outside the robot's view (partial observability), while strong dynamic coupling and limited control margins make physical interactions fragile (limited interaction robustness) and leave failure causes unresolved. Re-examining the same feedback cannot recover observations that were never collected or separate failure causes that the available evidence does not distinguish. To acquire this missing evidence, we introduce Active Feedback (AF), an active \"View and Probe\" framework. When execution feedback leaves unresolved questions, the agent synthesizes a separate diagnostic program that runs in simulation to inspect unseen outcomes from informative viewpoints (View) or test hypotheses about failure causes through targeted physical interactions (Probe). Across six simulated aerial manipulation tasks with 60 trials per condition, AF reduces false completion declarations from 25 to 5 and raises final task success from 31.7% to 75% compared with terminal feedback under the same coding-agent configuration and task-execution limit. Using shared robot APIs, task programs refined with AF in simulation run on a physical aerial manipulator without task-program source-code modification and complete multi-stage manipulation tasks in the real world. These results show that executable diagnosis fills gaps in execution feedback for embodied coding agents, improving both completion assessment and program refinement in aerial manipulation.",
    "published": "2026-10-08T18:00:00Z",
    "updated": "2026-10-08T18:00:00Z",
    "categories": [
      "cs.RO",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.12549"
  },
  {
    "id": "2610.12470",
    "title": "Dex-One2Many: Learning Dexterous Manipulation from a Single Human Demonstration",
    "authors": [
      "Jusuk Lee",
      "Sungha Kim",
      "Yeonsoo Park",
      "Jonguk Cheon",
      "Yoonkyo Jung",
      "Yongjun You",
      "H. Jin Kim",
      "Jia-Bin Huang",
      "Furong Huang",
      "Youngseok Jang",
      "Seungjae Lee"
    ],
    "abstract": "While learning dexterous manipulation from a single human video offers a promising alternative to costly robot demonstrations, many recent methods predominantly imitate demonstrated motions. Such strict motion matching often limits generalization to initial object poses, goal poses, and grasps not shown in the video. Alternatively, discovering a policy via reinforcement learning (RL) allows for broad generalization, but without prior guidance, it struggles with high-dimensional exploration in complex, multi-stage tasks. To address these coupled generalization and exploration challenges, we present Dex-One2Many, a real-to-sim-to-real framework that learns a generalizable dexterous manipulation policy from a single human video. Our key insight is to abstract the video into sequential scene graphs that guide RL, enabling efficient exploration while preserving broad generalizability. The graphs serve as generative constraints for sampling diverse reset states and provide dense rewards for each stage. Because the graphs constrain relations rather than exact poses, these reset states cover object poses and grasps beyond the video, while initializing each stage from them with dense rewards keeps exploration short and guided. Trained entirely in simulation, Dex-One2Many transfers zero-shot to a real multi-fingered hand. Across five tool-use and manipulation tasks, Dex-One2Many exceeds baselines by 6.5% in seen configurations, while its robust generalization widens this gap to 71% in unseen scenarios.",
    "published": "2026-10-08T17:59:58Z",
    "updated": "2026-10-08T17:59:58Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12470"
  },
  {
    "id": "2610.12469",
    "title": "Rubric-CEPR: Self-Evolving Image Editing via Reward-Verified Self-Distillation",
    "authors": [
      "Ritesh Thawkar",
      "Shubham Patle",
      "Shravan Venkatraman",
      "Rao Muhammad Anwer"
    ],
    "abstract": "Instruction-guided image editors have become highly capable, yet improving them further still depends on human-edited training pairs or external reward models. Such supervision is costly to obtain and can reward plausible failures: a realistic output may leave the requested change undone or alter content that should be preserved. In this work, we strive to improve a pretrained image editor using only its own generations, without human-edited targets or an external training-time reward model. To this end, we propose a self-evolving framework, named Rubric-CEPR, that verifies the editor's own samples with its internal representations through a rubric-augmented Contrastive Edit-Preservation Reward (CEPR). A Planner proposes structured edit instructions from unlabeled images, the Editor samples multiple candidate edits, and a frozen Critic scores each candidate with decomposed rubric checks for edit realization, removal of the old state, and content preservation, using features already exposed by the editor. Non-compensatory gates reject infeasible candidates, and the best verified candidate is distilled into the editor through lightweight adapter training. On Qwen-Image-Edit, Rubric-CEPR improves ImgEdit from 4.36 to 4.60 (+5.5%), with a +24.9% gain on object isolation, and transfers to GEdit-Bench and Complex-Edit. The same procedure also improves Step1X-Edit by +7.8% on ImgEdit. We hope our approach will serve as a solid baseline for image editors that improve themselves from their own verified samples. Our code is publicly available at $\\href{https://riteshthawkar.github.io/Rubric-CEPR/}{\\text{this URL}}$",
    "published": "2026-10-08T17:59:58Z",
    "updated": "2026-10-08T17:59:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12469"
  },
  {
    "id": "2610.12545",
    "title": "AutoIndexer: Flexible-Order Decoding by Training Causal Models on Chains of Edits",
    "authors": [
      "Shu Ishida",
      "Aliasghar Khani",
      "Tianyu Zhang",
      "The Cong Luong",
      "James Seale Smith",
      "Adam Gaier"
    ],
    "abstract": "Autoregressive decoding is less suited to non-causally ordered data, e.g., cross-references or future dependencies, since their outputs cannot be revised post hoc, unlike iterative human reasoning. Diffusion LLMs partially mitigate this limitation but still cannot flexibly insert or remove arbitrary numbers of tokens from a pre-generated context. We design AutoIndexer as a generative model with a novel training and decoding mechanism that simulates a Chain of Edits, allowing the model to flexibly modify its prior outputs in hindsight via token insertions, substitutions, and deletions. The model learns to predict marker tokens for opening and closing edits, simultaneously moving a cursor to positions in the existing token sequence, analogous to a text editor. Training sequences are obtained by perturbing ground-truth labels with inverse chained edit operations, and the model learns to edit by undoing those inverses. The perturbation training allows AutoIndexer to be robust to erroneous context and adaptable to editing tasks such as code correction. We demonstrate that our method exhibits post-generation context-editing capabilities that most autoregressive and diffusion models lack without compromising performance on standard LLM benchmarks. The code is available at https://github.com/AutodeskAILab/autoindexer.",
    "published": "2026-10-08T17:59:52Z",
    "updated": "2026-10-08T17:59:52Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.12545"
  },
  {
    "id": "2610.12468",
    "title": "DreamTrue: Action-Faithful Robot World Model with Counterfactual Post-Training",
    "authors": [
      "Junyan Li",
      "Ruizhi Li",
      "Yu Liu",
      "Xiangshuo Liu",
      "Mingchao Sun",
      "Hongyu Pan",
      "Mu Xu",
      "Lue Fan",
      "Zhaoxiang Zhang"
    ],
    "abstract": "We present DreamTrue, a multi-view, cross-embodiment robot world model for action-faithful and physically plausible video prediction. Training such a model on existing robot datasets faces two obstacles: imprecise calibration can impair action following, while limited coverage of unsuccessful interactions can bias predictions toward successful outcomes. To improve action following across embodiments, we render action trajectories into image-space conditions and introduce offline geometric calibration to align these conditions with the target videos. To broaden interaction coverage, we introduce counterfactual post-training, modifying recorded action trajectories and generating future videos under a wider range of actions and contact configurations. To provide feedback on these predictions without paired ground-truth futures, we construct a human-annotated video dataset covering robot, object, and interaction defects and use it to train an embodied video reward model. Its scores guide reinforcement-learning post-training toward more physically plausible interaction outcomes. On AgiBot, DreamTrue attains state-of-the-art action following, while reducing the human-assessed interaction defect rate from from 48.12% to 6.25%. Notably, our model ranks first in the world model track of the AgiBot World Challenge 2026. The project page can be found at https://brave-eai.github.io/DreamTrue.",
    "published": "2026-10-08T17:59:51Z",
    "updated": "2026-10-08T17:59:51Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12468"
  },
  {
    "id": "2610.12466",
    "title": "On the estimation and validity of AI time horizons---a statistical look at the METR plot",
    "authors": [
      "Drew T. Nguyen",
      "William Fithian"
    ],
    "abstract": "METR's 50\\% time horizon measures the human completion time of software tasks that an AI solves with 50\\% probability, allowing AI capabilities to be expressed in interpretable units. On 228 tasks and 26 AIs, we recompute the time horizons using splines and item-response theory to relax the assumption that the AI difficulty of a task depends linearly on the log of human time. Our fitted spline can be interpreted as a function that \\emph{converts} human time to AI difficulty; it is nearly flat in a region from 2--30 min but close to linear elsewhere. Hence, a time-horizon jump from 3 min to 30 min is much easier than one from 30 min to 5 hours despite the same multiplier of $10 \\times$. Overall, we contribute time-horizon point estimates that perform better under a cross-validated suite of proper scoring rules, as well as diagnostic plots for assessing time horizons' construct validity. We suggest that time horizons be interpreted together with the diagnostic plots, especially as new time-horizon-based benchmarks are proposed or existing ones grow to include longer tasks.",
    "published": "2026-10-08T17:59:50Z",
    "updated": "2026-10-08T17:59:50Z",
    "categories": [
      "cs.AI",
      "cs.LG",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2610.12466"
  },
  {
    "id": "2610.12463",
    "title": "From Reactive Containment to Proactive Assurance: Lessons from OpenAI, Anthropic, and Google Agent Security Incidents",
    "authors": [
      "Abbas Raftari"
    ],
    "abstract": "In 2026, cybersecurity evaluations involving OpenAI, Anthropic, and Google agents reached real systems outside their authorized test scope. The paths were different. OpenAI agents exploited research infrastructure, coordinated across runs, and compromised parts of Hugging Face's production environment. Anthropic reported cases in which a misconfigured third-party environment exposed real systems to agents pursuing simulated cyber tasks. In a separately reported evaluation, Google's Gemini accessed three real organizations through an unintended internet route; Google stated that the model stopped in all three instances. Taken together, the cases show why an evaluation cannot rely on an assumed boundary. That boundary must be verified while the agent is operating. This comparative instrumental case study develops a Proactive Agent Security Assurance Cycle (PASAC) and a five-layer Boundary Assurance Stack. The framework combines risk-tiered task design, executable scope contracts, pre-run validation, least-capability access, independent egress enforcement, credential restrictions, cross-run monitoring, automatic stop conditions, and evidence-based reauthorization. A leading-indicator model, nine design propositions, and seven falsifiable hypotheses turn these lessons into a testable research program. Because the public Gemini record is limited to attributed statements and journalism, its detailed causal mechanism remains provisional. The central conclusion is straightforward: proactive agent security requires continuous assurance across the full execution system, not confidence in any single sandbox or safeguard.",
    "published": "2026-10-08T17:59:49Z",
    "updated": "2026-10-08T17:59:49Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.12463"
  },
  {
    "id": "2610.12464",
    "title": "What 30,000 Hours of Ego-centric Video Does Not Teach",
    "authors": [
      "Jiahua Dong",
      "Anurag Bagchi",
      "Yash Jangir",
      "Muhammad Zubair Irshad",
      "Sergey Zakharov",
      "Martial Hebert",
      "Homanga Bharadhwaj",
      "Yu-Xiong Wang",
      "Vitor Campagnolo Guizilini",
      "Pavel Tokmakov"
    ],
    "abstract": "World models offer a promising alternative to physics-based simulators, yet remain far from practical deployment. We ask how far scaling ego-centric human video takes them, using a dataset of 30,000 hours spanning over 1,000 scene types and 14,000 contributors. Rather than relying on opaque downstream metrics, we directly evaluate agent and object-interaction fidelity on a challenging out-of-distribution benchmark. Increasing training data by 100x improves both, but unevenly: the agent is modeled well, while object fidelity remains far lower and improves slowly. We show that the agent gains need not come from data, and a careful visual conditioning design saturates fidelity with a fraction of it, which lets us measure object fidelity on its own and discover its saturation point. We then introduce a supervision scheme that shifts capacity from scene appearance toward object dynamics, improving object fidelity though a substantial gap remains. Finally, our conclusions transfer to downstream humanoid modeling. Overall, our results suggest that scaling ego-centric data brings agent modeling close to its limit while leaving its effects on the world far behind, and that closing this gap will depend on how models are trained, not only on how much data they see.",
    "published": "2026-10-08T17:59:49Z",
    "updated": "2026-10-08T17:59:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12464"
  },
  {
    "id": "2610.12461",
    "title": "OuroWorld: Bringing Any 3D World Alive as Diverse, Endlessly Looping 3D Cinemagraphs",
    "authors": [
      "You-Zhe Xie",
      "Ting-Wei Chou",
      "Yu-Hsuan Li",
      "Kaipeng Zhang",
      "Zhixiang Wang",
      "Yu-Lun Liu"
    ],
    "abstract": "Recent 3D world models generate photorealistic, explorable scenes that remain frozen in time. OuroWorld is a mask-free framework that turns any static 3D Gaussian Splatting scene into a 3D cinemagraph: a dynamic scene with vivid, diverse motion looping seamlessly from any viewpoint. A vision-language model infers plausible dynamics and guides a video model to synthesize a reference video, which we lift and complete into multi-view videos. To learn from this imperfect supervision, we propose Inconsistency-Robust Periodic 4DGS: a Fourier-series deformation field guarantees looping by construction, while a Grounded Drift Field anchored at the reference view absorbs cross-view inconsistency. Unlike prior Eulerian methods limited to fluid-like motion, we capture general deformation, object motion, and illumination change. We introduce a ground-truth-free evaluation covering vividness, naturalness, loop seam coherence, and scene quality. On 39 reconstructed and generated scenes, OuroWorld outperforms all baselines and wins 70.8%-99.0% of user-study comparisons. Project page: https://ouroworld.userwei.com",
    "published": "2026-10-08T17:59:46Z",
    "updated": "2026-10-08T17:59:46Z",
    "categories": [
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2610.12461"
  },
  {
    "id": "2610.11318",
    "title": "Finsler Flow Matching: Dynamics-Aware Geodesic Interpolation for Single-Snapshot Trajectory Inference",
    "authors": [
      "Niklas Canova",
      "Jonas Simon Fleck"
    ],
    "abstract": "Single-cell snapshot data can resolve a continuum of cellular states but do not uniquely determine the dynamics governing transitions between them. However, additional dynamical information can often be encoded in a cell-cell Markov transition kernel. Existing generative approaches for single cell trajectory inference either infer transport only from population marginals, impose a symmetric geometry on the state space, or incorporate directionality through a single velocity vector at each observed state. We introduce Finsler Flow Matching (FFM), a framework for learning continuous stochastic dynamics from discrete Markov transition graphs. We use the first and second local moments to construct a Finsler structure motivated by the Freidlin--Wentzell action, where the second moment determines anisotropic accessibility and the first moment introduces a preferred direction of motion. We learn neural approximations of the resulting directed geodesics, use their Finsler cost to construct source-target couplings, and define geometry-aware stochastic conditional paths that can be distilled into a continuous generative process through simulation-free score and flow matching. Across synthetic and single-cell trajectory inference benchmarks, FFM improves recovery of withheld intermediate populations, particularly when the transition dynamics are strongly directional or anisotropic. Our results provide a principled route from discrete transition probabilities to continuous generative dynamics while retaining both directional and diffusive structure.",
    "published": "2026-10-08T06:23:09Z",
    "updated": "2026-10-08T06:23:09Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.11318"
  },
  {
    "id": "2610.11317",
    "title": "DivMoE: Fine-Grained MoE Upcycling via Cross-Domain Expert Composition",
    "authors": [
      "Yuxuan Lou",
      "Kai Yang",
      "Geng Zhang",
      "Yong Liu",
      "Yang You"
    ],
    "abstract": "Mixture-of-Experts (MoE) architectures have become essential for scaling large language models, with recent work demonstrating the benefits of fine-grained expert designs. Training such models from scratch is expensive, and sparse upcycling from pre-trained dense models is an attractive alternative. However, we identify a structural pathology of fine-grained upcycling: when fine-grained experts are derived from a single source model, naive routing collapses and downstream accuracy drops to near-random (e.g., on Qwen3-1.7B, Drop-Upcycling-fine-grained reaches only 23.2% average accuracy across 15 benchmarks, essentially matching from-scratch training at 22.2%, while the same method's coarse-grained variant reaches 50.2%). We propose DivMoE, the first framework achieving fine-grained MoE Upcycling with structurally-balanced routing. DivMoE introduces domain-specialized fine-grained expert initialization, deriving experts from dense models that have undergone domain-adaptive continual pre-training, and diversity-constrained routing, a hard structural constraint guaranteeing that each token activates experts from distinct domain groups. Across two base models and 15 benchmarks, DivMoE consistently outperforms six upcycling baselines (55.6% vs. 51.6% for the strongest baseline on Qwen3-1.7B) and strictly improves over the dense base model on every benchmark after Stage 2 continual pre-training -- closing the regression gap that has plagued prior fine-grained upcycling. After supervised fine-tuning on a public reasoning mixture, our 12B-parameter DivMoE model matches Moonlight-MoE (16B) at 64.5% average accuracy while outperforming a controlled NVIDIA-Upcycling baseline by 6.1 percentage points.",
    "published": "2026-10-08T06:23:01Z",
    "updated": "2026-10-08T06:23:01Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.11317"
  },
  {
    "id": "2610.11316",
    "title": "MetaEncoder: Exploring the Limit of Bi-Encoders for Multimodal System One Decision Making with Natural Language Interface",
    "authors": [
      "Jianpeng Cheng",
      "Guangyu Sun",
      "Aashu Singh",
      "Benyu Zhang",
      "Haixing Dai",
      "Hossein Mansour",
      "Jiangfan Zhang",
      "Shlok Kumar Mishra",
      "Wei Sun",
      "Xuanming Cui",
      "Yanli Liu",
      "Qi Guo",
      "Max Xiangjun Fan",
      "Jun Xiao"
    ],
    "abstract": "System One models output constrained decisions and probability distributions rather than free-form text generation. While prevailing paradigms rely on structured schema objects to encode state, intent, and candidate choices, we revisit a fully natural language-based System One interface. In this framework, both the user request and each candidate option are expressed in natural language, supported by multimodal (image and video) auxiliary inputs. We introduce MetaEncoder, which fine-tunes a pre-trained Muse-Glimmer 30B decoder into an instruction-following decision-making encoder. To scale effectively across both small closed-set (< 256) and massive open-set (millions) candidate spaces, MetaEncoder employs a bi-encoder architecture trained via unidirectional contrastive learning for request-candidate alignment. We conduct extensive evaluations across 11 benchmark suites and 190 tasks spanning multimodal decision-making, understanding (closed-set) and retrieval (open-set), highlighting where MetaEncoder beats SOTA multimodal encoders, as well as its current limits on reasoning-intensive tasks.",
    "published": "2026-10-08T06:22:48Z",
    "updated": "2026-10-08T06:22:48Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.11316"
  },
  {
    "id": "2610.11315",
    "title": "Deflating the Hessian: Rank-4 W4A4 Quantization for Multimodal Diffusion Transformers",
    "authors": [
      "Shiwen Wang",
      "Pengxiang Zhao",
      "Xiaoming Yuan"
    ],
    "abstract": "In diffusion transformers, low-rank branches can mitigate 4-bit weight--activation (W4A4) post-training quantization (PTQ) loss by decomposing each weight into a low-bit residual and a high-precision low-rank component. Existing low-rank PTQ approaches, however, either optimize low-rank compensation and residual quantization separately, often requiring higher ranks, or rely on second-order weight updates without explicitly modeling activation quantization error, which becomes particularly pronounced under 4-bit quantization. To address these limitations, we present HSVDQuant, a unified framework modeling low-rank-assisted W4A4 PTQ as a coupled calibration problem and deriving optimization-based solvers from the joint objective. Eliminating the output-side low-rank factor yields a deflated Hessian that discounts residual errors already captured by the low-rank component, while an activation-noise surrogate is incorporated to suppress activation quantization error. Across five diffusion backbones, rank-4 HSVDQuant consistently outperforms rank-4 SVDQuant in PSNR and LPIPS. It further surpasses rank-32 SVDQuant on SANA-1.6B, FLUX.1-schnell, and FLUX.1-dev with an $8\\times$ smaller rank and up to $6.25\\times$ faster quantization. Furthermore, on the Qwen3-8B LLM, rank-4 HSVDQuant improves MMLU accuracy from 61.50% to 68.17% over rank-32 SVDQuant. Overall, HSVDQuant achieves better W4A4 performance with substantially lower rank and quantization cost.",
    "published": "2026-10-08T06:22:19Z",
    "updated": "2026-10-09T04:09:36Z",
    "categories": [
      "cs.LG",
      "cs.CV",
      "math.OC"
    ],
    "url": "https://arxiv.org/abs/2610.11315"
  },
  {
    "id": "2610.11312",
    "title": "MedBenchAgent: Towards Systematic Automation of Medical VLM Benchmark Construction",
    "authors": [
      "Yulin Fu",
      "Junren Wang",
      "Guangjing Yang",
      "Zhangyuan Yu",
      "Wanran Sun",
      "Jiabao Zhou",
      "Jin Yin",
      "Qicheng Lao"
    ],
    "abstract": "Large-scale construction of medical vision-language model (VLM) benchmarks is increasingly feasible with richly annotated imaging datasets and large language models (LLMs), yet existing automation largely focuses on generating evaluation items within predefined benchmark specifications. We study the broader problem of automatically deriving the specification itself: what to evaluate, which annotations support each task, and how to translate this evidence into reliable evaluation items. We formulate benchmark construction as constrained compilation, in which the benchmark specification is progressively derived from evaluation requirements, heterogeneous annotations, and medical knowledge. Based on this formulation, we introduce MedBenchAgent, a multi-agent framework with a Benchmark Intermediate Representation (BIR) that encodes task definitions, evidence mappings, evaluation protocols, and item specifications across construction stages. MedBenchAgent separates planning, which derives and verifies the specification, from instantiation, which constructs and audits items under the locked specification. MedBenchAgent achieves a Task-Space F1 of 90.9%, outperforming direct task induction (79.2-80.0%) and prior-guided induction (85.1%); 994 of 1,000 sampled items from correctly identified tasks pass human audit. We further demonstrate portability to a specialized medical domain and evaluate twelve VLMs, revealing task- and setting-specific variation obscured by aggregate scores. These results establish constrained compilation as a scalable and auditable framework for medical VLM benchmark construction beyond question generation.",
    "published": "2026-10-08T06:17:33Z",
    "updated": "2026-10-08T06:17:33Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.11312"
  },
  {
    "id": "2610.11310",
    "title": "FloorSAV: Elucidating Spatial Audio-Visual Context with 2D Floormap for AV-LLMs",
    "authors": [
      "Kyeong-Rae Kim",
      "Sungnyun Kim",
      "Tae-Hyun Oh"
    ],
    "abstract": "While 3D spatial reasoning in dynamic egocentric environments is crucial for embodied intelligence, audio-visual large language models (AV-LLMs) lack explicit mechanisms to process and internalize global geometry directly from raw sensory streams. Existing approaches either require costly fine-tuning or underutilize the model's cross-modal reasoning capacities. In this paper, we propose FloorSAV, a novel framework that explicitly grounds spatial audio-visual context by rendering a dynamic 2D floormap. By integrating 3D point clouds, camera trajectories, spatial audio cues, and semantically grounded object landmarks, we inject this floormap into the AV-LLM as a synchronized stream with an egocentric video. AV-LLMs utilize their multi-modal capabilities to jointly reason over visual, auditory, and geometric cues in a single inference with floormap interpretation guidance. We further introduce SAVED-Bench (Spatial Audio-Visual Egocentric Benchmark with Dynamic Agents), constructing essential tasks of spatial capability in real-world scenarios: dynamic relativity, regional, and path reasoning QAs. FloorSAV improves AV-LLMs' spatial reasoning on various tasks from both SAVED-Bench and SAVVY-Bench. Studies with ground-truth floormaps demonstrate the substantial potential of FloorSAV with accurate spatial information.",
    "published": "2026-10-08T06:15:36Z",
    "updated": "2026-10-08T06:15:36Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.11310"
  },
  {
    "id": "2610.11309",
    "title": "From Geometry to Generalization: Why Row Normalization Can Beat Adam and Muon",
    "authors": [
      "Jihwan Kim",
      "Dogyoon Song",
      "Chulhee Yun"
    ],
    "abstract": "Different optimizers can fit the same training data while selecting classifiers with substantially different geometries, but whether this difference provably affects population performance remains unclear. We show that row-wise normalization can achieve strictly higher population accuracy than full-batch Adam, a proxy for random-reshuffling Adam, and exact-SVD Muon in high-dimensional multiclass classification. Under an isotropic Gaussian-cloud data model, this advantage arises because row normalization's class-wise Euclidean geometry asymptotically preserves the population decision-boundary directions, whereas Adam's coordinate-wise geometry and Muon's spectral geometry introduce nonvanishing distortions. Beyond isotropy, the advantage persists for full-batch training on class means with independently oriented class-mean and test-noise covariances. It holds for power-law spectra with class-mean exponent below one, even under heavily anisotropic test noise. When both covariances are diagonal and sufficiently close, the advantage over Adam can reverse, while applying the same random rotation to both restores it by changing only their alignment with Adam's coordinate axes. Synthetic and last-layer language-model experiments support the predicted advantage.",
    "published": "2026-10-08T06:15:13Z",
    "updated": "2026-10-08T06:15:13Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "math.OC",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2610.11309"
  },
  {
    "id": "2610.11306",
    "title": "Collaboratively Guided Adversarial Robust Distillation with Teacher-Favorable Examples",
    "authors": [
      "Zhi Li",
      "Haowei Liu",
      "Hongchen Yang",
      "Xiaoxuan Wang",
      "Song Gao",
      "Shaowen Yao",
      "Wei Zhou"
    ],
    "abstract": "Adversarial distillation transfers robustness from high-capacity teachers to compact students. Existing adversarial distillation methods mainly use teacher predictions on clean or adversarial examples to supervise student learning. However, teacher-favorable supervision within the perturbation neighborhood remains underexplored in adversarial distillation. We therefore propose Collaboratively Guided Adversarial Robust Distillation (CGARD), which jointly optimizes distinct student-adversarial and teacher-collaborative examples within the same perturbation neighborhood. The teacher-collaborative example is constrained to incur no greater cross-entropy loss under the teacher than the clean input. CGARD combines collaborative teacher guidance with adversarial teacher supervision to improve robust knowledge transfer. Experiments on CIFAR-10 and CIFAR-100, including white-box evaluation and additional black-box transfer evaluation, demonstrate consistent robustness improvements over strong adversarial distillation baselines.",
    "published": "2026-10-08T06:12:23Z",
    "updated": "2026-10-08T06:12:23Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.11306"
  },
  {
    "id": "2610.11303",
    "title": "Efficient Multi-Granularity Knowledge Transfer for Radiology Report Generation",
    "authors": [
      "Xubin Zhong",
      "Zheyu Zhang",
      "Wenjian Qin",
      "Ning Wen"
    ],
    "abstract": "Radiology report generation can automatically generate clinical descriptions from X-ray images, thereby significantly improving the efficiency of radiologists. This task is challenging because it requires medical knowledge to accurately identify diseases and describe them in a professional manner. However, existing methods often overlook the importance of enhancing medical knowledge in describing pivotal areas, a capability that requires models to effectively extract and aggregate knowledge at multiple levels of granularity. Accordingly, we herein propose a novel and compact Efficient Multi-Granularity Knowledge Transfer (\\textbf{EMGKT}) method to address the above issues. First, we encode global knowledge embeddings using a medical vision-language model, which provides contextual medical knowledge. Moreover, we devise a novel Fine-Grained Knowledge Distillation (FGKD) training task which efficiently extract fine-grained knowledge. Specifically, the FGKD training task contains teacher embeddings and student embeddings. Teacher embeddings are encoded using extra priors; while student embeddings are learned from the teacher embeddings through knowledge distillation. During inference, the student embeddings are used to enhance fine-grained knowledge while the teacher embeddings are discarded, resulting in negligible computational costs and no need for extra priors. Finally, we further develop a mixture of disease diagnosis expert classifiers to enhance knowledge extraction. The classifiers are initialized using disease embeddings and are modeled as different experts to address various granularity features. Notably, \\textbf{EMGKT} can be efficiently applied to most existing methods. Extensive experiments are conducted on two widely-used public datasets and various baselines, which demonstrates the effectiveness and transferability of \\textbf{EMGKT}.",
    "published": "2026-10-08T06:09:28Z",
    "updated": "2026-10-08T06:09:28Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.11303"
  },
  {
    "id": "2610.11302",
    "title": "iCATS: Fast Video Generation via Interaction-Aware Sparse Attention and Timestep-Adaptive Sparsity",
    "authors": [
      "Chengfeng Han",
      "Baole Ai",
      "Xianlu Bian",
      "Jie Yao",
      "Zilong Huang",
      "Ang Wang",
      "Dandan Ding"
    ],
    "abstract": "Training-free sparse attention offers a practical acceleration solution to Diffusion Transformers (DiTs) via reducing computations without fine-tuning. It typically involves estimating the importance of query-key regions and deriving sparse masks to compute only the important candidates, which inevitably introduces approximation errors that may degrade generation quality. To better balance the efficiency-quality trade-off, we propose iCATS, integrating improved importance estimation and sparse mask construction with an efficient hardware execution strategy. Specifically, for importance estimation, unlike previous works that perform independent clustering over query and key tokens based on feature similarity to estimate attention scores, iCATS demonstrates that clustering based on query-key dot-product interactions is more accurate and further reformulates this objective as a simple quadratic form for low-cost computation. For sparse mask construction, instead of using a fixed top-p rule, we observe that tolerance to sparse approximation errors varies across denoising timesteps and therefore introduce an SNR-guided sparsity schedule to adjust sparsity dynamically, leading to higher accuracy. Finally, for hardware execution, we devise a tail-merging strategy to reduce padding overhead caused by irregular cluster sizes, improving GPU kernel utilization. Extensive experiments show that iCATS achieves $2.03\\times$ acceleration with 31.017 dB PSNR on HunyuanVideo-T2V-13B and $1.55\\times$ acceleration with 29.301 dB PSNR on Wan2.1-T2V-14B, delivering a state-of-the-art efficiency-quality trade-off.",
    "published": "2026-10-08T06:09:04Z",
    "updated": "2026-10-08T06:09:04Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.11302"
  },
  {
    "id": "2610.11300",
    "title": "Characterizing Overconfident Failure in LLM-Based Code Generation",
    "authors": [
      "Ravishka Rathnasuriya",
      "Wei Yang"
    ],
    "abstract": "Large language models (LLMs) are increasingly used for automated code generation, but generated programs can appear syntactically plausible while still failing execution-based correctness checks. Existing validation methods, such as testing and program analysis, remain essential but are often incomplete, costly, or applied only after generation. Model-derived uncertainty is therefore a natural early reliability signal. This paper studies the dilemma of overconfidence in code LLMs where incorrect programs are often generated with token-level confidence comparable to correct programs. We study this dilemma across four open-source code models and three execution-based benchmarks. Our analysis begins by investigating whether existing uncertainty metrics provide reliable proxies for execution correctness in code generation. We then characterize overconfidence at both global and local token levels, asking whether incorrect programs remain indistinguishable from correct ones under confidence and entropy summaries, including selective generation and the limits of instruction tuning. Finally, we evaluate whether common mitigation strategies reduce this failure mode. Our study yields four findings. First, existing uncertainty signals provide only partial and model-dependent evidence of execution failure. Second, overconfidence persists at both program and token levels, and uncertainty-based selection does not consistently improve accepted-set accuracy. Third, instruction tuning can increase certainty on failing generations without consistently improving correctness discrimination. Fourth, common mitigation techniques improve specific aspects of reliability but do not reliably resolve overconfident failure. Our exploratory latent analysis suggests that hidden representations may encode correctness-related signals that output confidence does not expose.",
    "published": "2026-10-08T06:07:44Z",
    "updated": "2026-10-08T06:07:44Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.11300"
  },
  {
    "id": "2610.11299",
    "title": "DuplexAgent-RSI: Recursive Harness Improvement for Full-Duplex Voice Agent Collaboration",
    "authors": [
      "Yingda Shen",
      "Yuxiang Wang",
      "Kunyu Feng",
      "Qinke Ni",
      "Jiaqi Li",
      "Minghao Hsu",
      "Junan Zhang",
      "Dekun Chen",
      "Yutong Bian",
      "Zhizheng Wu"
    ],
    "abstract": "Voice agents are converging on a collaboration pattern: a full-duplex interaction model stays on the live channel as the entry to the conversation, while search, reasoning, and coding are handled through asynchronous delegation. A duplex model supports continuous listening and speaking, but complex reasoning and tool use may exceed its capabilities. A coding agent can plan and execute extended tasks, but its sequential interface is a poor fit for live conversation. Combining them requires a harness that coordinates task acceptance, progress, cancellation, replacement, and result delivery while keeping the conversation responsive. Existing harnesses often rely on coupled heuristics, making them difficult to improve systematically from evidence. We present DuplexAgent, a full-duplex collaboration system whose harness expresses this workflow as six editable modules, and Duplex-Harness-RSI, a closed loop that revises them from interaction traces. A simulator automatically generates timed test conversations, runs the system, and produces failure traces that identify the collaboration modules requiring repair. Reasoning LLMs and coding agents in the delegation pool also serve the improvement loop: the Exam Planner selects the next tests from observed weaknesses and the repair archive, and the Harness Editor proposes targeted module changes. The capabilities that serve the user thus also improve the system's coordination. Experiments on intelligence, agentic, and duplex benchmarks show that DuplexAgent combines continuous interaction with difficult reasoning and complex task execution, achieving stronger spoken-knowledge and executable-tool scores than the compared delegated systems while maintaining strong interruption response. A harness ablation further shows that this modular, verifiable loop outperforms the initial harness and repeated editing that lacks its diagnosis and repair archive.",
    "published": "2026-10-08T06:06:42Z",
    "updated": "2026-10-08T06:06:42Z",
    "categories": [
      "cs.AI",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2610.11299"
  }
];
