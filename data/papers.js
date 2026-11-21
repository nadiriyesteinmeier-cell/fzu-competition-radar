window.PAPER_DATA_UPDATED_AT = "2026-11-21";
window.PAPER_ITEMS = [
  {
    "id": "2611.26629",
    "title": "Posterior Matching Distillation",
    "authors": [
      "Hidir Yesiltepe",
      "Julius Berner",
      "Arash Vahdat",
      "Pinar Yanardag"
    ],
    "abstract": "Diffusion distillation accelerates image and video generation by compressing a pretrained teacher's iterative sampling process into a few network evaluations. Distribution-based methods achieve this by matching the student's output distribution to the teacher's. This matching is often driven by reverse-KL objectives, whose mode-seeking bias favors dominant teacher modes at the expense of diversity across samples. We introduce Posterior Matching Distillation (PMD), a new member of the distribution-based distillation family that combines mode-covering posterior sampling with any-step generation. At zero population loss, PMD recovers the teacher's full posterior of clean images at each trained noise level. Its stochastic student supports any-step sampling budgets within the trained timestep grid without further training. To learn these posteriors, PMD matches exponentially reweighted averages of student samples conditioned on a fixed noisy state to corresponding teacher posterior means. Under Gaussian corruption, exponentially tilted posterior mean is a single teacher evaluation at a shifted input. We prove that, matching tilted means over an open neighborhood uniquely identifies the full posterior. PMD thus supervises the entire conditional distribution through a family of mean constraints, without any auxiliary student-score network. Experiments on SDXL and FLUX.2 [klein] 4B demonstrate that PMD achieves the best FID among 4-step methods on both models, while maintaining competitive or leading performance across prompt-alignment and perceptual-quality metrics.",
    "published": "2026-11-19T18:59:57Z",
    "updated": "2026-11-19T18:59:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.26629"
  },
  {
    "id": "2611.26627",
    "title": "RL Post-Training in Diffusion Transformers Is Activation Steering",
    "authors": [
      "Tuna Han Salih Meral",
      "Kaan Oktay",
      "Alec Helbling",
      "Atakan Kara",
      "Duen Horng Chau",
      "Pinar Yanardag"
    ],
    "abstract": "Reinforcement learning (RL) post-training substantially improves the visual quality, text rendering, and compositional accuracy of diffusion transformers. Because capabilities such as rendering requested text or composing multiple objects are inherently prompt-dependent, a natural hypothesis is that improving them requires learning complex, input-dependent transformations. To isolate how much of these gains an input-independent shift explains, we probe each RL-tuned model with a deliberately simple parameterization: a fixed set of steering vectors added to the block outputs of the frozen base model. On SD3.5-M, these vectors hold 65x fewer parameters than the RL-tuned LoRA (0.29M against 18.8M). We fit them to match the velocity predictions of public RL-tuned checkpoints, with no reward in the objective. Although the vectors are identical for every prompt, token, and sampling seed, they recover 90.0-96.3% of the reward gains of six RL-tuned image models, and 89.8% and 111.9% on two RL-tuned video models. Initialized at zero and trained with online RL, the vectors alone exceed the reward gains of weight-based RL on text rendering (OCR) and human preference (PickScore) on SD3.5-M. A constant shift thus suffices for most of the gain of policy-gradient RL post-training: without new input-dependent transformations, it steers the pretrained generator toward what it can already compute.",
    "published": "2026-11-19T18:59:53Z",
    "updated": "2026-11-19T18:59:53Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.26627"
  },
  {
    "id": "2611.26624",
    "title": "PlayCraft: Designing Engaging Games from Agent Play Experience",
    "authors": [
      "Weihao Cheng"
    ],
    "abstract": "Recent AI agents can generate playable games, but these games are not necessarily engaging. Mastery is a key source of engagement, yet designing for it requires extensive human play and tuning. We propose PlayCraft, an automated framework that uses a vision-based agent to play games and draws on its detailed play experience to revise them for mastery. Starting from an initial game, PlayCraft alternates between playing and crafting. In the playing stage, a player agent watches the game screen, uses the controls, and pursues the game objective over repeated episodes while retaining memory. After each episode, it reports its progress, outcomes, decisions, and reflections. In the crafting stage, a crafter agent uses these reports to revise the game. It estimates player abilities, predicts performance at different proficiency levels, and compares those predictions with a target learning progression. It diagnoses the game and addresses the gaps by giving players meaningful opportunities to improve through better decisions and execution. We evaluate games in fresh runs with player agents across three intelligence settings, measuring learning gain and learning slope. Compared with the initial games, PlayCraft yields larger learning gains and steeper learning slopes in most games. It also outperforms the baselines on the macro-average of each metric at every intelligence setting.",
    "published": "2026-11-19T18:59:34Z",
    "updated": "2026-11-19T18:59:34Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.26624"
  },
  {
    "id": "2611.26617",
    "title": "One Prior, Two Dynamics: Repurposing Video Diffusion Transformers for Self-Supervised Latent Action Learning",
    "authors": [
      "Yuxin Jiang",
      "Wenqiang Sun",
      "Jiaqi Li",
      "Yuchao Gu",
      "Lvmin Zhang",
      "Ivor Tsang",
      "Mike Zheng Shou"
    ],
    "abstract": "Videos reveal how the world changes, but rarely the actions that cause those changes. Latent action learning recovers such supervision from visual transitions, yet often learns the underlying dynamics largely from scratch. We ask whether a pretrained video generator can instead provide the prior for both inverse and forward dynamics. We introduce O$^{2}$LaF, built on a simple principle: one prior, two dynamics. We initialize both models from the same pretrained video DiT and adapt them to their distinct roles: a feed-forward transition encoder with learnable action queries for inverse dynamics, and a causal, action-conditioned video generator for forward dynamics. By controlling information access and optimizing both dynamics end-to-end through a compact bottleneck, O$^{2}$LaF learns transferable actions from unlabeled videos. Across navigation and robotic manipulation, O$^{2}$LaF sets a new state of the art in few-shot action probing and enables stronger zero-shot action transfer across visual contexts and embodiments. Beyond generative video priors, we further extend our framework to predictive representation priors such as V-JEPA2, achieving competitive performance. Our findings suggest a broader paradigm for latent-action learning: repurposing pretrained video models to discover transferable actions and predict their consequences.",
    "published": "2026-11-19T18:58:14Z",
    "updated": "2026-11-19T18:58:14Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2611.26617"
  },
  {
    "id": "2611.26615",
    "title": "ScaleWorld: High-Resolution World Generation through Shared Prediction and Refinement",
    "authors": [
      "Yansong Qu",
      "Wesker Zheng",
      "Quanjian Song",
      "Zhiyuan Zhang",
      "Xiao Cao",
      "Shengchuan Zhang",
      "Liujuan Cao"
    ],
    "abstract": "High-resolution generation enables video world models to render fine-grained scene structures and textures, but directly generating high-resolution video incurs substantial computational and memory costs. We present ScaleWorld, a causal video model that unifies low-resolution world prediction and high-resolution refinement within a single shared backbone. By refining its own predictions, ScaleWorld produces high-resolution world videos without requiring a separate refinement model. For each video chunk, the shared backbone first completes a low-resolution prediction and then performs one-step high-resolution refinement conditioned on that prediction. To support efficient streaming generation, we maintain separate causal states with a long low-resolution history for prediction and a short high-resolution history for refinement. To address task interference during distillation, we separate specialist optimization from capability consolidation and introduce task-asymmetric on-policy distillation (TA-OPD). This procedure transfers prediction and refinement behaviors from specialized teachers into a shared student through local velocity matching under their respective sampling and history policies. {Extensive experiments demonstrate that ScaleWorld achieves high-quality world generation with improved computational and memory efficiency.",
    "published": "2026-11-19T18:58:04Z",
    "updated": "2026-11-19T18:58:04Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.26615"
  },
  {
    "id": "2611.26613",
    "title": "AgentRoboCritic: Understanding the Capability of Frontier Agents on Direct Robot Control",
    "authors": [
      "Yiyang Du",
      "Yuxuan Kuang",
      "Qitao Zhao",
      "Yixuan Wang",
      "Zhanqiu Guo",
      "Yi Xu",
      "Xin Li",
      "Wenbin He",
      "Liu Ren",
      "Chenyan Xiong"
    ],
    "abstract": "Frontier multimodal language agents such as GPT-6 Astra have demonstrated strong capabilities in controlling robots directly via low-level numerical actions without high-level primitives. However, existing benchmarks report only episode-level success rates, which show neither how these agents succeed nor where they fail. In this paper, we present a systematic action-level analysis of frontier agents on direct robot control across 12 manipulation benchmarks. We introduce AgentRoboCritic, an intent-grounded critique framework in which the policy agent states a local intent alongside each action, and a critic evaluates the action's outcome and failure mode against this intent. Our action-level analysis demonstrates the promising capabilities of frontier agents on direct robot control, including closed-loop recovery from local execution failures, reliable semantic grounding across diverse scenes, and strong zero-shot manipulation without task-specific adaptation. It also identifies their current limitations, including task-relevant physical execution bottlenecks such as grasping and alignment, and uneven recovery across failure modes. Finally, we validate our critic on a 400-action human-annotated benchmark and release a dataset of 12,844 annotated actions alongside a fine-tuned open-source critic, Muse-Glimmer-30B, whose failure-mode accuracy rises from 32.58% to 74.24%, enabling low-cost action-level analysis.",
    "published": "2026-11-19T18:57:25Z",
    "updated": "2026-11-19T18:57:25Z",
    "categories": [
      "cs.RO",
      "cs.CL",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.26613"
  },
  {
    "id": "2611.26603",
    "title": "Depth Pro 2: Sharp and Temporally Consistent Metric Monocular Depth",
    "authors": [
      "Peiyun Hu",
      "Marko Mihajlovic",
      "Lyndon Duong",
      "Lahav Lipson",
      "Wei Dong",
      "Amaël Delaunoy",
      "Stephan R. Richter",
      "Vladlen Koltun"
    ],
    "abstract": "We present Depth Pro 2, an approach to estimating dense metric depth for images and video at full resolution. By analyzing prior methods for monocular depth estimation, we find that they commonly trade off temporal consistency and boundary sharpness: multi-frame methods favor consistency, single-frame methods favor sharpness. To overcome this trade-off, we train a single, scalable network that processes both images and video and predicts depth maps at native resolution. Depth Pro 2 produces depth maps that are metrically accurate, sharp, and temporally consistent all at once, outperforming prior work in all of these dimensions. We release a family of models that define a new Pareto frontier in terms of metric accuracy, sharpness, temporal consistency, and runtime. We release code and weights at https://apple-aiml-research.github.io/ml-depth-pro-2/",
    "published": "2026-11-19T18:55:41Z",
    "updated": "2026-11-19T18:55:41Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.26603"
  },
  {
    "id": "2611.26601",
    "title": "SoK: Assessing the Evolution of LLM Capability in Software Vulnerability Research",
    "authors": [
      "Amine Lbath",
      "Manan Suri",
      "Aurelien Delaitre",
      "Vadim Okun",
      "Massih-Reza Amini",
      "Dinesh Manocha"
    ],
    "abstract": "LLM-based agents are becoming increasingly capable at discovering, validating and patching vulnerabilities in real software, and vendors and researchers report that this is already changing how vulnerabilities are found and fixed. These claims, however, are scattered across papers, vendor reports and disclosures and are rarely comparable. We introduce a framework that rates these capabilities on an autonomy scale modeled on the levels of driving automation, and qualifies each claim by its correctness, its availability and the strength of its evidence. We use this framework to systematize the published evidence on LLM capability in vulnerability research. We find that agents discovered, validated, and patched vulnerabilities in real-world software without human intervention before the restricted frontier models of 2026, and that open-weight models subsequently attained comparable autonomy for discovery and validation. We then measure the consequences of evolving LLM security capabilities in a decade of public vulnerability records, advisories and exploitation data. In 2026 the number of disclosed vulnerabilities more than doubled, with an increasing share rated critical or high, and severe bugs that had survived a decade or more in widely used code were reported several times more often than before. Yet the time between the stages of a vulnerability's life, from report to fix and from disclosure to attack, has not shifted noticeably so far. We grade the mitigations proposed in the literature with an explicit rubric and draw guidance for each group of stakeholders from the best-supported ones.",
    "published": "2026-11-19T18:54:19Z",
    "updated": "2026-11-19T18:54:19Z",
    "categories": [
      "cs.CR",
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2611.26601"
  },
  {
    "id": "2611.26598",
    "title": "Active Feature Acquisition by Distilling an Oracle Teacher",
    "authors": [
      "Yang Meng",
      "Zixin Ding",
      "Robert L. Grossman",
      "Yuxin Chen"
    ],
    "abstract": "Acquiring every feature of an instance is often costly: a measurement can carry a monetary price, a time delay, or a privacy cost. Active Feature Acquisition (AFA) addresses this by learning a policy that decides, per instance, which features to acquire under a budget. Existing AFA methods train this policy by optimizing a self-constructed utility target rather than distilling an explicit teacher. We construct this teacher explicitly. At training time the label and the unobserved feature values are available, and together they determine the teacher in closed form: an oracle that ranks every candidate by its effect on the downstream predictor's error. OracleImitator distills this ranking into a deployable policy by soft-target imitation. Across multimodal medical diagnosis and the AFABench benchmark, OracleImitator matches or outperforms existing AFA methods across the budget range, recovering 90% of the attainable accuracy gain at under a quarter of the acquisition cost. Because the teacher is an explicit algorithmic object rather than an implicit optimization target, we can also measure directly how much of its ranking is recoverable by a policy restricted to what is visible at deployment.",
    "published": "2026-11-19T18:52:57Z",
    "updated": "2026-11-19T18:52:57Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.26598"
  },
  {
    "id": "2611.26596",
    "title": "PGX: Physically Grounded Execution for Long-Horizon Humanoid Loco-Manipulation",
    "authors": [
      "Kai Lu",
      "Chenyang Ma",
      "Ioannis Havoutis"
    ],
    "abstract": "Robotic vision-language-action (VLA) models can execute diverse individual manipulation skills, yet they still struggle with long-horizon loco-manipulation tasks, where temporal structure, skills, and precision are tightly coupled within a monolithic model. We propose Physically Grounded Execution (PGX), a framework that offloads temporal and precision control to two classical training-free components, allowing the VLA to focus on stage-specific skill dynamics. PGX decomposes long-horizon loco-manipulation into three layers: (i) a predicate-based state machine governs task progression, using physical predicates to gate phase transitions, trigger recovery, and coordinate navigation and waiting. Shared predicate semantics connect offline demonstration segmentation, online execution, and stage-wise evaluation; (ii) VLA skills operate within active manipulation phases, with flat or stage-trained models concentrating on task-relevant actions; and (iii) world-coordinate locking (WCL) maintains spatial consistency through base station keeping, object-relative positioning, and world-anchored contact targets. We demonstrate the effectiveness of PGX with extensive experiments conducted on three simulated tasks and one real-world task using a Unitree G1 humanoid robot for long-horizon loco-manipulation, showing improvements in stage progression and task success rates. Project page is available at: https://kl-research.github.io/pgx",
    "published": "2026-11-19T18:52:18Z",
    "updated": "2026-11-19T18:52:18Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.26596"
  },
  {
    "id": "2611.26595",
    "title": "Coda-DaVinci: Reimagining Video Generation with Code2Video",
    "authors": [
      "Yiyan Ji",
      "Qixun Wang",
      "Yang Shi",
      "Zhuoran Zhang",
      "Yifan Xu",
      "Tengfei Liu",
      "Yuqi Tang",
      "Xiaohan Zhang",
      "Shujie Li",
      "Jiafu Tang",
      "Xuanyu Zhu",
      "Xinyu Liu",
      "Yan He",
      "Yushuo Guan",
      "Zihao Wang",
      "Xianghua Ying",
      "Shixuan Liu",
      "Haotian Wang",
      "Wenjing Yang",
      "Zhaoxiang Zhang",
      "Yuanxing Zhang",
      "Pengfei Wan",
      "Jiaheng Liu"
    ],
    "abstract": "Code2Video uses agent-authored 3D proxies to guide video generation, enabling explicit control over structure and dynamics. However, how to construct proxies and prompts for optimal downstream quality remains underexplored, as do the capabilities and limitations of this paradigm. Through controlled experiments and blinded human evaluation, we study proxy granularity, physics simulation, and prompting. The results reveal task-dependent trade-offs: coarse proxies favor natural motion, while medium-grained proxies favor consistency. Physics simulation and proxy-aligned prompting further improve average quality. Guided by these findings, we introduce Coda-DaVinci, a task-adaptive agentic framework for Code2Video generation that selects between proxy-guided and direct generation, adapts modeling granularity to each entity, and coordinates simulation with proxy-grounded prompting. Its multi-agent harness preserves scene assets and guides repairs through visual inspection and independent review. Experiments demonstrate leading instruction following on VTR and scene consistency on R2M, improved physical plausibility over direct generation, and higher visual realism than the compared Code2Video baselines. Long-video evaluations further show gains in event structure and consistency across successive interactions, while revealing limitations in transition stability and adherence to scene settings.",
    "published": "2026-11-19T18:51:58Z",
    "updated": "2026-11-19T18:51:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.26595"
  },
  {
    "id": "2611.26592",
    "title": "Realized versus Population Reliability: Anytime-Valid Self-Consistency Certification under Correlated Reasoning",
    "authors": [
      "Terence D. Agbeyegbe",
      "Toneukarin G. Agbeyegbe"
    ],
    "abstract": "Self-consistency certification treats repeated sampling from a language model as sequential evidence accumulation and stops when an anytime-valid e-process crosses a threshold, guaranteeing finite-sample Type I error control by Ville's inequality. Prior constructions assume sampled rollouts are conditionally independent. We show this assumption fails in practice: reasoning streams are positively correlated through shared reasoning prefixes or across-prompt heterogeneity, changing not merely certificate efficiency but the hypothesis certified. Modeling dependence via a per-unit latent state (the random-effects / intraclass-correlation structure) induces exchangeable, equi-correlated increments with correlation $ρ$. Correlation splits the single null into a realized null about the drawn belief and a population null about average model behavior, which coincide only when $ρ=0$. We show: (i) the standard betting e-process remains anytime-valid for the realized null, not the population null; (ii) read as a population-null test, a suitable mixture has asymptotic crossing probability at least $π=P(μ(Z)>0)$, potentially exceeding nominal $ε$; (iii) the within-unit mean's effective sample size saturates at $1/ρ$, so extra within-unit rollouts cannot restore population validity; and (iv) a prompt-level e-process restores population validity, with optimal allocation at one rollout per prompt under a pure rollout budget. Simulations and Claude Haiku 4.5 rollouts confirm this regime dependence: on GSM8K ($\\hatρ=0.435$, $\\hatθ=+0.96$) the gap is dormant, whereas on AIME ($\\hatρ=0.480$, $\\hatθ=-0.15$) the single-unit rule crosses on 24% of prompts at nominal $ε=0.05$, while the prompt-level procedure declines (0.00). This correctness result identifies which reliability claim an anytime-valid certificate actually supports under dependence.",
    "published": "2026-11-19T18:47:51Z",
    "updated": "2026-11-19T18:47:51Z",
    "categories": [
      "stat.ME",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.26592"
  },
  {
    "id": "2611.25524",
    "title": "Contrast Where It Matters: Visual Evidence-Guided Decoding for Mitigating Hallucinations in LVLMs",
    "authors": [
      "Yiheng Li",
      "Wenhao Wang",
      "Xingyi Li",
      "Mingda Jia",
      "Zichang Tan",
      "Yinhang Tang",
      "Zhen Lei",
      "Yang Yang"
    ],
    "abstract": "Despite strong multimodal capabilities, large vision-language models (LVLMs) often hallucinate when linguistic priors outweigh visual evidence or when predictions are grounded in irrelevant or misleading image regions. Training-free contrastive decoding mitigates hallucinations by contrasting the original prediction with an auxiliary one that exposes linguistic priors. Yet existing methods focus on altering the auxiliary input or computation and do not ensure that either branch uses query-relevant visual evidence during decoding. We propose Visual Evidence-Guided Decoding (VEGD), a training-free framework that identifies query-relevant visual evidence and guides its use throughout contrastive decoding. VEGD locates this evidence by aggregating localization heads with strong visual responses and coherent spatial structure, then selectively weakens it in the auxiliary image. During generation, VEGD directs visual-carrier heads in both branches toward the same evidence location, strengthening access to intact evidence in the main branch while anchoring the auxiliary branch to its weakened counterpart. An adaptive distribution fusion strategy then combines or contrasts their predictions according to distribution divergence. Experiments across diverse LVLMs and benchmarks demonstrate that VEGD consistently reduces hallucinations.",
    "published": "2026-11-19T05:26:32Z",
    "updated": "2026-11-19T05:26:32Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.25524"
  },
  {
    "id": "2611.25523",
    "title": "Multi-View Relighting with Mergeable Radiance Fields",
    "authors": [
      "Yinan Wang",
      "Rohan Kadkol",
      "Hyunjin Yoo",
      "Jean-François Lalonde",
      "James J. Clark"
    ],
    "abstract": "We propose MergeableRF, a method for radiance field relighting through model parameter merging. Given multi-view images of a scene under known basis lights, our goal is to relight the scene by directly combining the parameters of radiance fields trained under these lights. This is motivated by the linearity of light transport: the image under a mixture of lights is the same weighted combination of the images under each light. However, combining the parameters of independently trained radiance fields does not produce the corresponding combination of images. To address this, we represent a scene with shared geometry and a separate appearance network for each basis light. We start these networks from the same initialization and introduce merge-aware training, which teaches their parameter combinations to reproduce the corresponding combinations of images. Given a target HDR environment map, we compute its basis-light coefficients and use them to merge the appearance networks into a single relit model. Our method supports both Neural Radiance Fields (NeRFs) and 3D Gaussian Splatting (3DGS), without material estimation, additional relighting networks, or target-specific optimization. Unlike image-space blending, it requires only one rendering pass per viewpoint. Experiments on synthetic Neural Gaffer objects and real OLATverse captures demonstrate relighting quality competitive with methods trained on the same multi-light observations.",
    "published": "2026-11-19T05:25:36Z",
    "updated": "2026-11-19T05:25:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.25523"
  },
  {
    "id": "2611.25513",
    "title": "Mesh-Free Keypoint Learning for Category-Level 6D Object Pose Estimation",
    "authors": [
      "Junghoon Seo",
      "Hakjin Lee",
      "Jaehoon Sim"
    ],
    "abstract": "Category-level 6D pose estimation relates partial RGB-D observations of unseen instances to a canonical frame shared across a category. Object-aware reconstruction helps adaptive keypoints retain the geometry of the visible surface. Common reconstruction targets select observed points by their distance to a registered instance surface. We present MORSEPose, which derives this support directly from standard pose and metric-size annotations. We map observed 3D points to normalized object coordinates and retain those inside a tolerancedilated pose-and-size envelope. This construction is consistent across camera frames and metric scales. When the annotated extent bounds the object surface, the envelope conservatively contains the support of a conventional surface-distance selector. We integrate this target with multi-level RGB-D features, adaptive keypoints, and learnable category context. Experiments on REAL275 and HouseCat6D show that the envelope closely matches surface-based supervision at both point and task levels, remains stable under boundary perturbations and viewpoint changes, and supports competitive category-level pose accuracy across benchmarks.",
    "published": "2026-11-19T05:03:40Z",
    "updated": "2026-11-19T05:03:40Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2611.25513"
  },
  {
    "id": "2611.25510",
    "title": "Life-IQA+: Boosting Blind Image Quality Assessment via GCN-enhanced Layer Interaction and Flexible Hierarchical Expert Specialization",
    "authors": [
      "Long Tang",
      "Guoquan Zheng",
      "Huiyu Duan",
      "Jie Hao",
      "Yucheng Zhu",
      "Liang Yuan",
      "Xiongkuo Min",
      "Guangtao Zhai"
    ],
    "abstract": "Blind image quality assessment (BIQA) is essential for evaluating and optimizing visual experience. Existing BIQA methods typically aggregate features from multiple backbone stages without accounting for their unequal contributions to quality prediction. Furthermore, uniformly supervising all experts may constrain their flexibility and limit the diversity of the learned quality representations. To address these issues, we present Life-IQA+, a quality representation decoding framework that combines graph convolutional network (GCN) enhanced layer interaction and flexible hierarchical expert specialization. Specifically, the layer interaction module constructs quality queries from GCN-refined deepest-stage features and uses penultimate-stage features as keys and values, thereby enabling cross-layer representation interaction via the cross-attention mechanism. Building on these representations, we further introduce a flexible hierarchical mixture-of-experts (MoE) architecture comprising a densely activated shared expert layer and a sparsely activated routed expert layer. To enhance the representation diversity and ability of experts, we apply auxiliary classification supervision to a subset of shared experts using distortion-type labels for synthetic datasets and discretized quality-level labels for authentic datasets. Experiments on synthetic and authentic distortion benchmarks, together with controlled ablations of expert configurations and supervision strategies, show that Life-IQA+ achieves competitive prediction accuracy with a favorable balance between accuracy and computational cost. The code is available at: https://github.com/TANGLONG2/Life-IQA-PlusPlus.",
    "published": "2026-11-19T05:00:06Z",
    "updated": "2026-11-19T05:00:06Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.25510"
  },
  {
    "id": "2611.25508",
    "title": "Persona Lenses: What Makes a Vision-Language Model See Through Its Persona's Eyes?",
    "authors": [
      "Yoonho Shin"
    ],
    "abstract": "Vision-language models have been used to simulate where a user looks on a web page. However, a persona in the prompt reaches the simulated gaze only partly. We measure this reach as the difference in one model's gaze between two MatrAIx personas that differ in a single attribute. We introduce persona lenses, which place the persona between the model and the page: a text lens (a two-step prompt in which the model first writes what the persona would look at), a pixel lens (marks on the region matching the persona's interests) and a weight lens (a dwell reward gated to keep the scanpath natural). Using Qwen3-VL (4B and 32B) and Qwen3.5-9B on generated and live pages, we compare the lenses with one another and with scale, the 32B model with no lens. It has been confirmed that the text lens separates the personas strongly but is not robust to profile changes that should not move gaze. The pixel lens separates the personas less but is unaffected by attributes unrelated to gaze. At 4B and 9B, the weight lens separates the personas on interests held out from training, with no extra step on a new page. The 32B model separates the personas with the base prompt alone. Therefore, the choice of a lens depends on cost and model size.",
    "published": "2026-11-19T04:58:34Z",
    "updated": "2026-11-19T04:58:34Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.25508"
  },
  {
    "id": "2611.25506",
    "title": "Carry the Fine Print: Budget-Aware Visual Token Compression for Document OCR",
    "authors": [
      "Yixuan Huang",
      "ShengFan Zhang",
      "Jiawei Chen"
    ],
    "abstract": "Visual token compression often treats salience or similarity as a proxy for transcription importance. Complete document OCR breaks this assumption: small symbols and repeated entries can be indispensable to the transcript despite being visually inconspicuous. We present Select and Compensate, a two-stage framework built on a simple idea: choosing where to retain a token need not determine all the evidence it carries. Selection combines adaptive encoding resolution with global importance and local contrast to choose which tokens to retain as anchors. Compensation enriches these anchors with nearby discarded content and its relative position, without adding tokens. The OCR backbone remains frozen, and native coordinates and structural tokens are preserved. We evaluate complete page transcription across five backbones on OmniDocBench and document reconstruction on MPDocBench. With half the original visual tokens, our input-adapted configuration reaches 95.42 OmniDocBench Overall on Ovis versus 96.09 for the uncompressed model, and paired evaluations show gains over simply reducing the input resolution on both benchmarks. With the original input grid, our method stays within 0.17 points of the uncompressed model at 75% retention and exceeds a learned global selector by 4.70 points at 25%. On a fixed 200-page Ovis workload at the same 50% visual-token budget, only 3 of its outputs hit the length limit, versus 30-34 for the evaluated RTPrune, DivPrune, and HiPrune adaptations, and it finishes the batch 35-40% sooner. Code will be made publicly available.",
    "published": "2026-11-19T04:54:47Z",
    "updated": "2026-11-19T04:54:47Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.25506"
  },
  {
    "id": "2611.25503",
    "title": "Joint Language Modeling for In-the-Wild Speech-Scene Generation with Distinct Token Representations",
    "authors": [
      "Semin Kim",
      "Ju Yeon Kang",
      "Sunghwan Ahn",
      "Seonuk Kim",
      "Nam Soo Kim"
    ],
    "abstract": "Speech-scene generation aims to synthesize intelligible target speech together with diverse environmental sounds as a coherent acoustic scene. The task is considered challenging in two respects. Speech and environmental audio differ substantially in their semantic and acoustic characteristics, yet existing approaches typically model the complete scene using a single mixed acoustic representation. At the same time, the two sounds are closely related in real-world speech scenes, whereas conventional approaches usually rely on simulated scenes mixed from independently recorded sources. We propose a large language model (LLM)-based framework for joint modeling of distinct speech and environment token streams. A source-aware neural audio codec extracts temporally aligned speech and environment tokens from mixed audio, and a pretrained LLM generates both token streams in an interleaved fashion conditioned on the natural-language scene description and speech content. This formulation preserves source-specific representations while modeling the token streams within a shared generative context. Since both streams are extracted directly from mixed recordings, the model can also be adapted to in-the-wild speech scenes without isolated sources. Our experimental results demonstrate that the proposed framework improves speech intelligibility, scene relevance, and audio quality over existing speech-scene generation techniques, with consistent gains from real-world adaptation. We further investigate the effects of distinct token representations and interleaved generation, and analyze whether the environmental sound remains stable while speech is active and how the two streams interact.",
    "published": "2026-11-19T04:48:15Z",
    "updated": "2026-11-19T04:48:15Z",
    "categories": [
      "eess.AS",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.25503"
  },
  {
    "id": "2611.25502",
    "title": "Coordinated Use of Large Language Models in Academic Research",
    "authors": [
      "Vladislav Marinov"
    ],
    "abstract": "This study proposes a methodological framework for the coordinated use of multiple large language models in academic research. Its central argument is that involving more models does not in itself guarantee more reliable results; what matters is how cognitive and verification operations are organised. The framework is based on seven principles (procedural independence, functional allocation, the diagnostic value of divergence, the diagnostic value of convergence, external verification, proportionality of checking, and human epistemic responsibility) and sets out a non-linear multi-LLM protocol in which independently obtained results are compared, critically examined and, where necessary, verified against external sources. The approach is illustrated through real-world cases drawn from research practice. The study concludes that moving from a single language model to a coordinated multi-LLM process represents a change in the organisation of research, in which the researcher makes the final decisions and bears scholarly responsibility.",
    "published": "2026-11-19T04:47:57Z",
    "updated": "2026-11-19T04:47:57Z",
    "categories": [
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2611.25502"
  },
  {
    "id": "2611.25500",
    "title": "PRIO: Pre-trained Representation for Interactive Objects in 4D Worlds",
    "authors": [
      "Shixun Huang",
      "Lifu Wei",
      "Yue Chang",
      "Chen Geng",
      "Heng Zhang",
      "Jinhyung Ahn",
      "Caoliwen Wang",
      "Siyuan Chen",
      "Donglai Xiang",
      "Jiajun Wu",
      "Peter Yichen Chen"
    ],
    "abstract": "3D worlds can now be captured, reconstructed, and generated at scale, yet the objects in them stay still: a pressed pillow does not compress, and a pulled door does not swing. Bringing these objects into interactive 4D world models requires a representation of how they can move, deform, and respond physically to user actions in real time. We present PRIO, a pre-trained representation for interactive objects. Given static geometry, PRIO predicts an object-specific configuration space in a single forward pass. This space provides generalized coordinates for Lagrangian mechanics, allowing physical laws and user actions to govern motion. Configurations are linear in these coordinates, allowing the quantities needed by the dynamics to be precomputed. Dynamics then run at interactive rates without further network inference. Pre-trained on diverse 4D trajectories, PRIO learns priors over object configurations that generalize to unseen shapes. It supports meshes, point clouds, and 3D Gaussians, bringing objects in reconstructed and generated scenes into interaction. We demonstrate its use in real-to-sim workflows and robot manipulation. In addition, compared with existing 4D generation methods, PRIO generates dynamics faster and follows user actions more faithfully.",
    "published": "2026-11-19T04:45:52Z",
    "updated": "2026-11-19T04:45:52Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.25500"
  },
  {
    "id": "2611.25492",
    "title": "Why Do LLMs Help with Scientific Misconduct Requests and What to Do About It?: Increasing the Trustworthiness of AI for Science",
    "authors": [
      "Almene De Meran Meguimtsop",
      "Daniel E. Acuna"
    ],
    "abstract": "Large language models (LLMs) support scientific research, but some of that assistance can also undermine research integrity. Existing safety evaluations in science often measure whether models refuse misconduct requests, but rarely explain whether they even recognize the problem or why they comply. We investigate this gap across 8 LLMs using SciIntBench, an existing benchmark of 1,350 prompts about scientific research integrity. We examine the reasons behind compliance in four steps. First, when asked directly whether fulfilling a request would involve misconduct, models overwhelmingly identify such requests, even in the Most Covert cases (91%), while they refuse to carry out the request in only 34% of cases. Second, we examine which request characteristics are associated with refusal using features that capture how the request is framed, how much the assistant has been told about what it is helping to hide, and how the goal and the user's stake are stated, among others. Third, we estimate that the most significant effect was to rephrase requests as questions about permissibility rather than instructions, which increased refusal from 52% to 88%. Finally, we test two system-prompt fixes: asking models to assess the request before responding and reminding them of responsible conduct of research principles. These changes increase refusal rates on adversarial requests from 58% to 87% and 86%, respectively. Our findings show that models recognize wrongful requests but still help users violate integrity. Understanding why these failures occur and testing ways to reduce them offer promising paths toward more trustworthy AI for science.",
    "published": "2026-11-19T04:32:25Z",
    "updated": "2026-11-19T04:32:25Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.25492"
  },
  {
    "id": "2611.25489",
    "title": "When Should a Voice Agent Speak? End-of-Turn Detection in Turkish",
    "authors": [
      "Ahmet Tuğrul Bayrak",
      "Fatma Nur Korkmaz",
      "Mustafa Sertaç Türkel",
      "Nur Yağmur Tuncer"
    ],
    "abstract": "A voice agent that waits for a fixed silence before replying either interrupts users who pause mid-utterance or responds late to users who have finished. This study examines the decision at the onset of silence, using turn ends and turn-internal pauses extracted from the Real-TurnTurk corpus of Turkish dyadic video calls. A fine-tuned Turkish TurnGPT model, a zero-shot Turkish language model and a deployed multilingual detector are compared, together with voice-activity timing and facial features, under recording-disjoint and speaker-disjoint evaluation with paired cluster bootstrap tests. On held-out recordings, the fine-tuned model separates turn ends from pauses better than both text baselines and is the best calibrated of the three. Timing features of the current speaker are similarly informative, and their combination with the fine-tuned text score gives the best timing-based results; with logistic regression, this combination also outperforms the same combination with either text baseline. In a latency simulation, adding the text score to a silence timeout shortens the mean response delay at the same interruption rate. On automatic Whisper transcripts, the fine-tuned model retains its advantage over the zero-shot model.",
    "published": "2026-11-19T04:26:13Z",
    "updated": "2026-11-19T04:26:13Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.25489"
  },
  {
    "id": "2611.25484",
    "title": "Planning Width Is Hard to Approximate Even Given the Unique Optimal Plan",
    "authors": [
      "Viet Bac Nguyen"
    ],
    "abstract": "For each fixed $k$, iterative-width search finds optimal plans in polynomial time on tasks of bounded tuple-chain width, but the approximability of planning width has remained open even when an optimal plan is supplied. When all optimal plans visit the same state sequence, we characterize set and chain width as hitting numbers of competing states. We construct positive-precondition STRIPS tasks with a supplied unique optimal plan, a single reachable goal state, binary branching, and constant-size actions. Every reachable state lies on a goal-reaching execution at most one action longer than optimal, yet distinguishing width $1$ from $Θ(N)$, where $N$ is the number of atoms, is NP-hard for set, chain, and goal-admissible width. Unless $\\mathrm{P}=\\mathrm{NP}$, no polynomial-time algorithm achieves a one-sided approximation factor $o(N)$ or a symmetric factor $o(\\sqrt{N})$, and simple estimates attain both orders. For positive-precondition tasks with a supplied unique optimal plan of length at least two, testing set or chain width against a threshold $k\\geq 1$ is coNP-complete for each fixed $k$ and $Σ_2^{\\mathrm{P}}$-complete when $k$ is part of the input. Both results also hold for goal-admissible width if only one goal state is reachable. On an explicit state graph, a greedy algorithm approximates set width within a logarithmic factor even when optimal plans branch. Thus, knowing an optimal plan does not eliminate the difficulty of certifying substantially smaller width.",
    "published": "2026-11-19T04:19:23Z",
    "updated": "2026-11-19T04:19:23Z",
    "categories": [
      "cs.DS",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.25484"
  },
  {
    "id": "2611.24193",
    "title": "WM^MLLM: Turning MLLMs into World Models",
    "authors": [
      "Baiang Li",
      "Enze Xie",
      "Jincheng Yu",
      "Jin Wang",
      "Haozhe Liu",
      "Yitong Li",
      "Juanxi Tian",
      "Felix Heide"
    ],
    "abstract": "Video world models keep the world in the context of a generator, so a revisit is synthesized again and earlier edits can drift or disappear. We present WM^MLLM, the first interactive world model built on multimodal large language models (MLLMs), for persistent, editable world generation from a single image. WM^MLLM keeps the world state outside every generator, as a panorama with a revision history, and lets the MLLMs write it: they turn each request into operations on this state, select where a local edit is written, and check every candidate before it becomes the next state. Image generators only propose views, and video only presents them. Users can walk to new places and return, edit objects through text or a box, place subjects, and change lighting, weather or season. By construction, a revisit at the same revision reproduces the earlier view exactly, a local edit leaves every panorama pixel outside its region unchanged, and each request starts from the result of the previous one. Against six world model baselines on MBench-A, WM^MLLM has the highest mean on all four environment-recovery metrics (Epipolar 91.5 versus 0.1 to 74.0) and completes the most camera round trips (85.3% versus at most 50.9%). It has the best value in all 15 CompBench columns against 15 baselines. On 112 local edits judged blind, selecting the region to write after generation raises completion from 34.8% to 83.0%. On 258 WBench and MBench-A items, all 46 revisits recover their earlier views, and all 97 local edits that pass the check leave panorama pixels outside their region unchanged.",
    "published": "2026-11-18T10:29:16Z",
    "updated": "2026-11-18T10:29:16Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.24193"
  },
  {
    "id": "2611.24192",
    "title": "TrajWAM: Trajectory-Conditioned Future Learning for Vision-Language Driving",
    "authors": [
      "Xuerui Fang",
      "Gulimila Kezierbieke",
      "Chen Wangxing",
      "Hui Li"
    ],
    "abstract": "World Action Models (WAMs) connect future scene prediction with action planning for autonomous driving. Each driving record pairs an executed ego trajectory with its observed future, providing a factual outcome for learning this connection. We present TrajWAM, a trajectory-conditioned WAM that improves vision-language driving through auxiliary bird's-eye-view (BEV) future learning. An ego-trajectory query conditions DINOv3-aligned BEV predictions from shared planner representations. Training combines factual reconstruction under the executed trajectory with one-sided feature separation under an unlabeled perturbed trajectory. Together, these objectives train the shared planner to generate driving waypoints. Native inference directly generates waypoints and bypasses the auxiliary future-prediction branch. On all 220 Bench2Drive routes, TrajWAM achieves 91.53 Driving Score and 75.45% Success Rate, exceeding a schedule-matched planning-only fine-tuning baseline by 5.31 Driving Score points and eight successful routes.",
    "published": "2026-11-18T10:28:56Z",
    "updated": "2026-11-18T10:28:56Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2611.24192"
  },
  {
    "id": "2611.24190",
    "title": "Monitoring Unplanned Construction Using Satellite Change Detection",
    "authors": [
      "Harsh Kashyap",
      "Taranum Wasu"
    ],
    "abstract": "Cities need land for homes, shops, roads, and public services. New construction changes that land. It can harm natural areas and water bodies, add to waste, and strain public services. NITI Aayog's 2021 report stated that 65% of 7,933 urban settlements in India had no master plan. That number tells us about planning coverage at the time. It does not tell us whether any single building was authorised. Artificial intelligence, which lets computers learn patterns from data, can help find physical changes by comparing satellite images taken on different dates. We test simple methods on two public datasets from outside India. First, we turn each image into a set of numbers using a pretrained neural network, a model already trained to recognise patterns in images. We feed those numbers to standard machine-learning classifiers that predict land categories and physical changes. The methods reach about 95 percent accuracy at spotting built-up land and about 83 percent accuracy at saying whether a small pair of images shows change, where each pair gets one label. We also train a small neural network on a standard change-detection benchmark. Separately, we run a preliminary descriptive check on an Agra sample of 48 patches, 7 of them positive. The results show that satellite images carry information about physical change. They do not show whether construction was planned or permitted.",
    "published": "2026-11-18T10:28:28Z",
    "updated": "2026-11-18T10:28:28Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.24190"
  },
  {
    "id": "2611.24187",
    "title": "Worth Another Look:Constrained World-Model Planning for Visual Inspection",
    "authors": [
      "Ziyue Kang",
      "Zixi Qi",
      "Yuchen Dai",
      "Nana Lv",
      "Xirong Cheng",
      "Liang Liu",
      "Ying Li",
      "Haoyan Wei",
      "Haiyang Yao"
    ],
    "abstract": "Visual inspection in field robotics and environmental monitoring must localize multiple targets under strict compute and sensing caps. Exhaustive sweeps waste calls on absent classes, while myopic and search-free policies stumble over heterogeneous tariff cliffs or discard viewport edits whose value emerges only after re-querying. We formulate inspection over frozen detectors as neuro-symbolic observation planning under partial observability, decoupling a compact recurrent world model (WM) from exact symbolic feasibility and tariff rules. Receding-horizon beam search with online replanning jointly schedules class queries, crops, enhancements, and termination (stop), paired with slack-aware shadow pricing and legal fallback at larger budgets. Across eight terrestrial, optical, and sonar benchmarks, multi-step lookahead outperforms static schedules and search-free offline RL under tight budgets -- gaining up to 28.4 AP percentage points over static priority on RUOD and 15.1 on ARIS -- while dynamic pricing lifts large-budget performance on all eight domains at 11 ms planning cost. Ultimately, pairing lightweight learned dynamics with exact symbolic constraints turns frozen detectors into adaptive, budget-aware inspection agents without retraining.",
    "published": "2026-11-18T10:26:26Z",
    "updated": "2026-11-18T10:26:26Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.LG",
      "cs.MM"
    ],
    "url": "https://arxiv.org/abs/2611.24187"
  },
  {
    "id": "2611.24184",
    "title": "VideoACE: Benchmarking Agentic Video Understanding through High-Frame-Rate Actions",
    "authors": [
      "Luoyuan Zhang",
      "Xuanyu Zheng",
      "Yancheng Long",
      "Haoyang Xu",
      "Bin Wen",
      "Tingting Gao"
    ],
    "abstract": "Agentic video understanding requires models to actively interact with video environments to gather evidence and form judgments. Evaluating this capability therefore requires assessing whether models can translate opportunities for interaction into better understanding. We introduce VideoACE, a benchmark for assessing video understanding under conditions that support sustained interaction. We focus on high-frame-rate action videos, where rapid, subtle changes make targeted observation especially valuable. The benchmark comprises 1,000 multiple-choice questions spanning six categories of fine-grained action understanding, accompanied by temporal evidence annotations and user hints screened for answer leakage. Its evaluation environment combines video inspection tools with a user simulator, allowing models to adjust temporal coverage, sampling density, and spatial detail, and to revisit evidence and revise their judgments under simulated user feedback. We evaluate single-pass observation, autonomous tool use, and tool use combined with user feedback to examine how effectively models exploit these opportunities. Evaluation of five models reveals distinct patterns in how they acquire evidence and respond to opportunities for further interaction. These findings establish VideoACE as a testbed for examining agentic video understanding beyond performance under a fixed observation setting.",
    "published": "2026-11-18T10:26:07Z",
    "updated": "2026-11-18T10:26:07Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.MM"
    ],
    "url": "https://arxiv.org/abs/2611.24184"
  },
  {
    "id": "2611.24182",
    "title": "ART: Bridging the Embodiment Gap in 3D Human-to-Robot Affordance Transfer",
    "authors": [
      "Zichen Zhang",
      "Wei Zhai",
      "Xuji Zhang",
      "Yang Cao",
      "Yu Kang"
    ],
    "abstract": "3D affordance acts as a critical link between perception and action, providing priors for robotic manipulation. While existing approaches predominantly leverage human priors as direct references, they often overlook that affordance is not an object-intrinsic property but is inherently coupled with the agent's embodiment. Due to the structural and morphological disparities between human hands and robot end-effectors, directly applying human priors causes severe incompatibility for robotic execution. Motivated by this, we introduce a novel task setting, 3D Human-to-Robot Affordance Transfer, which addresses the affordance misalignment arising from distinct embodiment structures. To support this task, we construct the Human-Robot Paired Affordance Dataset (HPAD), the first large-scale 3D affordance benchmark in which every object is annotated with both human-prior and simulation-validated robot labels. HPAD covers 2,137 objects across 80 categories and 13 atomic action primitives, yielding over 27,000 object-action pairs. On top of HPAD, we propose the 3D Affordance tRansfer neTwork (ART). ART first filters geometric false positives in the human prior via a reliability gating stream, then reconstructs the prior into a robot-actionable distribution through hierarchical reconstruction and a graph-diffusion refinement that resolves the topological mismatch between human and robot affordances. Experiments on HPAD demonstrate the reliability of the proposed task and the superiority of ART. We further validate ART on a 6-DoF arm with a parallel-jaw gripper in a 2,400-execution benchmark across 12 objects and 4 action categories; ART attains the best success rate (86.5% over its 480 trials), confirming the practicality of the transfer paradigm. Project page: https://derek0907.github.io/ART/",
    "published": "2026-11-18T10:22:42Z",
    "updated": "2026-11-18T10:22:42Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.24182"
  },
  {
    "id": "2611.24171",
    "title": "Efficient World-Model Planning via Physics-Guided Search Distillation",
    "authors": [
      "Hongyu Zhang",
      "Xiaoshuai Hao",
      "Heye Huang",
      "Qingwen Meng",
      "Wenjun Shi",
      "Jianao Xu",
      "Xin Hu",
      "Xuanru Jin",
      "Jingyi Zhang",
      "Baicang Guo"
    ],
    "abstract": "World models support autonomous driving by evaluating candidate trajectories through predicted future scene evolution. However, accurate future prediction does not ensure road-compliant execution; when all candidates violate road boundaries, re-ranking cannot select a feasible trajectory. We propose Physics-Guided Search Distillation (PGSD), a single-view planning framework that combines future representations and execution feedback for verified beyond-pool repair through three components: (1) Execution-Aware Selection checks ego-vehicle road compliance under simulated execution and selects the highest-scoring feasible trajectory; (2) a Clearance-Aware Search Teacher generates beyond-pool corrections and selects demonstrations with larger minimum road-boundary clearance during execution to buffer imitation errors; and (3) a Future-Conditioned Repair Student predicts one correction from rewarder features and execution feedback for single-rollout verification. The pretrained planner and rewarder remain frozen; no future scenes are generated online. On NAVSIM v1, single-view PGSD achieves 90.97 PDMS, exceeding all compared prior single-view planners and retaining 73.2% of the search teacher's PDMS gain over execution-aware selection. On NAVSIM v2 navhard, it reaches 38.96 EPDMS, improving on WorldDrive by 11.24 points (40.5%). The student replaces up to ten search rollouts with a single verification rollout per repair trigger. HUGSIM Hard examples provide qualitative evidence of zero-shot transfer.",
    "published": "2026-11-18T10:14:22Z",
    "updated": "2026-11-19T05:11:49Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.24171"
  },
  {
    "id": "2611.24170",
    "title": "ViStep-RL: Stepwise Reinforcement Learning for Long-Horizon Visual Agents",
    "authors": [
      "Junyang Chen",
      "Yao Qin",
      "Xiao Li",
      "Ningchao Wang",
      "Yiguo Qiao",
      "Wenbin Li",
      "Xin Geng"
    ],
    "abstract": "Long-horizon visual agents must do more than inspect images: they must turn observations into evidence that remains usable as a task unfolds. Existing active-perception methods teach agents where and how to look, while a final-answer reward gives little structure for deciding which observations satisfy dependent subgoals or should be retained for later use. We present ViStep-RL (Visual Stepwise Reinforcement Learning), which models execution as a dependency-linked graph of evidence-bearing subgoals. A verifier tracks which subgoals are supported by valid evidence, and changes in graph potential provide a net-progress learning signal; an active memory protocol preserves evidence across turns and links retrieval to downstream use. On ViInteract, ViStep-RL reaches 60.0% strict completion with Qwen2.5-VL-7B, compared with 10.0% for the base model and 46.5% after supervised fine-tuning. Controlled studies show that incremental task-state rewards outperform cumulative rewards by 3.2 points, while active evidence writing improves strict completion by 7.75 points over automatic writing. Under a common interaction framework, the task-trained ViStep-RL policy achieves 59.5% answer accuracy, 24.0 points above the strongest of six general-purpose reference models. Held-out episodes confirm the gain at both Qwen scales, and gains extend to three external visual reasoning benchmarks.",
    "published": "2026-11-18T10:12:30Z",
    "updated": "2026-11-18T10:12:30Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.24170"
  },
  {
    "id": "2611.24168",
    "title": "CounselTraj: Synthesizing Process-Aware Psychological Counseling Dialogues via Dialogue-Act Trajectory Planning",
    "authors": [
      "Zhiyang Qi",
      "Michimasa Inaba"
    ],
    "abstract": "The growing demand for psychological counseling has motivated the development of LLM-based systems that support human counselors, but training such systems requires large-scale, high-quality dialogue data. Authentic counseling transcripts are difficult to collect and share because of privacy concerns, making synthetic dialogues an important alternative. However, existing synthetic datasets, despite covering diverse scenarios and client profiles, often consist of brief exchanges and fail to capture session-level counseling processes. We propose CounselTraj, a dialogue-act trajectory planning framework for expanding brief synthetic dialogues into process-aware, session-level psychological counseling dialogues. CounselTraj learns dialogue-act patterns from role-play counseling dialogues produced by human counselors, plans coordinated trajectories for clients and counselors, and uses them as flexible guidance for long-form dialogue generation. Experiments across three Chinese synthetic counseling datasets show that CounselTraj produces more complete and coherent sessions with higher-quality counselor interventions than both direct expansion and expansion with randomly sampled trajectories. Based on CounselTraj, we construct CounselTrajD, a dataset containing over 10K process-guided Chinese psychological counseling dialogues, and use it to train CounselTrajLM for counseling response generation. Evaluations at both the response and session levels show that CounselTrajLM outperforms publicly available Chinese counseling models in response quality, therapeutic understanding and intervention, and counseling-process coherence and progress. Our code and model are publicly available at https://github.com/UEC-InabaLab/CounselTraj.",
    "published": "2026-11-18T10:10:54Z",
    "updated": "2026-11-18T10:10:54Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.24168"
  },
  {
    "id": "2611.24165",
    "title": "MemoSync: Co-Managing Developer-Agent Metamemory Across Contexts",
    "authors": [
      "Baiqiao Zhang",
      "Junze Li",
      "Chunyang Luo",
      "Yuying Tang",
      "Wenshuo Zhang",
      "Shiyuan Piao",
      "Dingdong Liu",
      "Shuai Ma",
      "Xiaojuan Ma"
    ],
    "abstract": "AI coding agents increasingly manage what context carries across sessions and projects, but developers have limited visibility into what these agents store, retrieve, and apply. This opacity creates a metamemory problem: the developer's meta-level judgments about what should be remembered are separated from the agent's object-level memory operations, disrupting the monitoring and control that keep the two levels aligned. We conducted a formative study with 12 developers and identified what they want to monitor and control across four dimensions of agent memory use. Based on these findings, we designed MemoSync, a co-management system that treats agent memory as a shared, operable representation: the agent proposes memory candidates and reports which items it uses, and the developer reviews, edits, and scopes them. In a between-subjects study (N=132) against two baselines, MemoSync participants achieved significantly higher task performance and the highest mean developer-agent memory alignment. In an exploratory mediation analysis, the alignment advantage was primarily driven by improved monitoring accuracy. Despite performing substantially more monitoring and control actions, participants reported no increase in perceived workload. A week-long deployment with nine developers showed that memory monitoring and control fit into everyday development work. MemoSync is open-sourced at https://github.com/SLEEPYBQ/MemoSync.",
    "published": "2026-11-18T10:06:51Z",
    "updated": "2026-11-18T10:06:51Z",
    "categories": [
      "cs.HC",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2611.24165"
  },
  {
    "id": "2611.24164",
    "title": "Gaussian Primitive Fusion for Any-Resolution Multimodal Images",
    "authors": [
      "Baoshuo Cai",
      "Xinrui Jiang",
      "Bing Cao"
    ],
    "abstract": "Multimodal image fusion integrates complementary observations from different modalities into a unified representation. Existing methods typically estimate modality contributions on a common discrete grid. When source modalities have different native resolutions, constructing such a grid generally involves resampling, which may introduce artifacts and affect subsequent fusion decisions. To address this problem, we propose Gaussian Primitive Fusion (GPF), which reformulates heterogeneous-resolution fusion in a shared continuous Gaussian space. Instead of first converting source images to a common resolution, GPF directly fits their native-resolution observations with shared Gaussian geometry and modality-specific content representations, and learns modality contributions within the resulting continuous representation. Once optimized, the fused representation is rendered at the finest native resolution without resampling the sources. With heterogeneous-resolution inputs, GPF produces clearer target contours and finer textures, with less blurring and blocking artifacts than resample-then-fuse pipelines. Quantitatively, it achieves the best results on multiple infrared-visible benchmarks against state-of-the-art fusion methods equipped with interpolation or super-resolution frontends.",
    "published": "2026-11-18T10:06:21Z",
    "updated": "2026-11-18T10:06:21Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.24164"
  },
  {
    "id": "2611.24163",
    "title": "Stabilizing Neural-to-Image Retrieval with Frequency-Domain Priors and Adaptive Supervision",
    "authors": [
      "YaoYang Liu",
      "ZhuoShi Tang",
      "Haopeng Lai",
      "Weijun Sun",
      "Xiaozhao Fang",
      "Jie Wen"
    ],
    "abstract": "Visual neural decoding aims to infer perceived visual stimuli from brain activity, offering important insights into human visual cognition while enabling transformative applications in brain computer interfaces and artificial intelligence. Recent advances in pretrained vision-language models have provided a semantically rich representation space for this task. However, reliable alignment between EEG/MEG signals and visual embeddings remains challenging because neural responses are noisy, highly variable across trials, and subject dependent. To address this issue, we propose a unified neural-to-image retrieval framework that improves retrieval performance by aligning neural and image representations in a shared semantic space. The framework integrates dual-stream adaptation, frequency-domain calibration, and phase-guided temperature modulation to promote more robust cross-modal semantic alignment. Specifically, dual-stream adaptation models a low-dimensional shared subspace with correlation regularization to suppress redundant noise and enhance cross-modal consistency. Frequency-domain calibration conditionally modulates neural representations using amplitude and phase statistics. Phase-guided temperature modulation further adjusts the supervision strength in contrastive learning according to the stability of neural responses. Experiments on THINGS-EEG and THINGS-MEG under both intra-subject and inter-subject settings demonstrate that the proposed framework consistently outperforms strong baselines. These results suggest that robust neural-to-image retrieval under heterogeneous neural conditions benefits from a stable shared semantic space, frequency-informed representation calibration, and adaptive supervision. Code will be released at github.com/wanfkuabc/Geometry-Regularized-Brain-Embeddings.",
    "published": "2026-11-18T10:06:13Z",
    "updated": "2026-11-18T10:06:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.24163"
  },
  {
    "id": "2611.22975",
    "title": "Large Language Models Have Not Yet Transformed Science",
    "authors": [
      "Ron Bekkerman",
      "Nichole Li",
      "Bahareh Kargar",
      "Mark Somers"
    ],
    "abstract": "The emergence of large language models (LLMs) in late 2022 has raised questions about the future of science, but assessing their impact requires understanding how scientific practices were already evolving. We analyze 2.5 million full-text papers across five disciplines from 2015 to 2025, tracing trends over a broad spectrum of lexical, structural, epistemological, and social dimensions. Aside from frequency shifts in some words, most pre-2023 trends continued with limited detectable breaks. Among the notable exceptions, growth in computer science coauthor teams accelerated significantly in Asia, while apparent declines in biomedical topic diversity largely reflected standardization in article formats. Our study establishes an empirical foundation for monitoring the health of global science as LLM adoption deepens.",
    "published": "2026-11-17T15:57:22Z",
    "updated": "2026-11-17T15:57:22Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.CY",
      "cs.DL"
    ],
    "url": "https://arxiv.org/abs/2611.22975"
  },
  {
    "id": "2611.22973",
    "title": "VITAL: A Framework for Validating Agentic AI in Pharmaceutical Drug Development and Clinical Trial Operations",
    "authors": [
      "Sandeep Burugupalli",
      "Pedro Matos-Filipe",
      "Andrea Hita Ardiaca",
      "Adam Taylor",
      "Alex Grigorenko",
      "Natalia Jakubiak",
      "Xin Yu",
      "Raghav Mani",
      "Sherry Mangla",
      "Alvi Lai",
      "Rachel C. Mercado",
      "Pratik Shah",
      "Raja Shankar"
    ],
    "abstract": "Current assurance approaches do not establish whether evidence is sufficient to validate, monitor and govern agentic artificial intelligence (AI) within a pharmaceutical context of use. Plausible outputs may conceal failures in retrieval, reasoning, orchestration or human-control points, where reference standards are unavailable. We developed and operationalised VITAL (Validation by Intended use, Traceability, Autonomy and Lifecycle evidence), a validation framework for agents in clinical development, through landscape analysis, regulatory and standards mapping, expert interviews and multi-stakeholder refinement. VITAL integrates context of use, controls, behavioural validation and lifecycle evidence within a risk-adjusted framework. We applied VITAL across epidemiology and treatment-landscape analysis, site selection, enrolment rescue and trial-design trade-off support to translate autonomy, reversibility, transparency and patient impact into proportionate validation activities, evidence requirements and auditable reconstruction of system behaviour. VITAL may inform evidence requirements and lifecycle accountability for higher-risk pharmaceutical uses; evaluation should assess reproducibility across assessors, organisations and system configurations.",
    "published": "2026-11-17T15:55:13Z",
    "updated": "2026-11-17T15:55:13Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.22973"
  },
  {
    "id": "2611.22971",
    "title": "SEAM: Computer-Use Agents Know the Harm Between Screens, and Commit It Anyway",
    "authors": [
      "Yuxuan Zhou",
      "Chen Xiong",
      "Haitong Liu",
      "Kuofeng Gao",
      "Yang Bai",
      "Zhiyuan He",
      "Tao Dai",
      "Shu-Tao Xia"
    ],
    "abstract": "Safety benchmarks for computer-use agents (CUAs) place the harm either in the intent of the task or on a single screen: a malicious instruction, an injected command, a phishing page. An agent that checks the task and each screen in isolation can pass them, so they do not test whether it combines facts seen on different screens. Yet in delegated work, harm often arises exactly this way: a fact about a person on one screen, a fact about an item on another, and a legitimate task that binds them. We introduce SEAM (Safety Execution Across Multiple screens), a benchmark of such cross-screen compositional harm: 600 multi-step, cross-application OSWorld tasks in which the instruction and every single observation are benign and only their combination is harmful. Minimal-pair variants that differ in one place, scored from the server log rather than by an LLM judge, locate where an agent fails. General-purpose open-weight and flagship agents carry out the harm in up to 92% of runs, yet decline when the user states it in one sentence. Agents open the decisive pages, so exposure is not the primary bottleneck. Asked about those pages, they flag the harm, and with thinking they often write the conflict into their reasoning and confirm anyway. Safety recognition thus does not reliably translate into safe execution, and the translation depends on the information channel: the same warning stops agents far more often in the user's instruction than on screen. Proprietary models are markedly more cautious. We release SEAM with its generator and quality gates at https://yuxuan2003.github.io/SEAM/ .",
    "published": "2026-11-17T15:53:58Z",
    "updated": "2026-11-17T15:53:58Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.22971"
  },
  {
    "id": "2611.22969",
    "title": "Rescaling OLS-Merged Adapters To Improve Personalized Image Generation",
    "authors": [
      "Leander Girrbach",
      "Niklas Schweiger",
      "Zeynep Akata"
    ],
    "abstract": "Merging multiple adapters into a single image generation model reduces deployment costs while preserving diverse task capabilities or personalization modes. State-of-the-art methods such as RegMean, Mix-of-Show, and Subspace Routing fit the outputs of the merged model to those of the individual adapters using ordinary least squares (OLS). We show that this reconstruction objective systematically shrinks task-specific signals whenever the activation distributions of different tasks overlap, producing a merged adapter that is too weak for downstream use. We derive a decomposition that quantifies this shrinkage and propose rescaling the merged update to restore signal strength. On multi-subject personalization with up to 30 merged adapters, rescaling substantially improves subject fidelity over unscaled baselines. Our approach also improves results on style transfer, concept erasure, image classification, and LLM-based text classification.",
    "published": "2026-11-17T15:52:49Z",
    "updated": "2026-11-17T15:52:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.22969"
  },
  {
    "id": "2611.22968",
    "title": "MI-Hyper: Generating Multiple Instance Models for Weight Space Transfer Learning in Histopathology via Mixed Tasks Pretrained HyperNetwork",
    "authors": [
      "Xitong Ling",
      "Yousef Kotp",
      "Weiming Chen",
      "Yining Li",
      "Jiawen Li",
      "Minxi Ouyang",
      "Xinyi Guo",
      "Mingxi Fu",
      "Yizhi Wang",
      "Tian Guan",
      "Lianghui Zhu",
      "Yonghong He"
    ],
    "abstract": "Zero-shot whole-slide image (WSI) prediction aims to generalize to new pathology tasks without parameter updates at deployment. MI-Zero makes these predictions by pooling patch-text similarities. Conditional weight generation, combined with supervision from diverse pathology tasks, offers an alternative: learning to construct predictive rules from task descriptions. We introduce MI-Hyper, a hypernetwork pretrained across mixed tasks to generate the aggregation and classification weights of multiple instance learning (MIL) models. We first train the generator and a shared MIL basis jointly using source labels. We then freeze the basis and refine the generator. The generated task weights are reused across cases. Across 308 tasks from 52 pathology datasets, MI-Hyper improves mean AUC, balanced accuracy and macro-F1 over MI-Zero by 1.85, 1.17 and 0.57 percentage points, respectively. On some molecular prediction tasks, both AUC and balanced accuracy improve by more than 20 points. These results support task-conditioned weight generation as a promising approach to weight-space transfer for long-sequence modeling.",
    "published": "2026-11-17T15:52:19Z",
    "updated": "2026-11-17T15:52:19Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.22968"
  },
  {
    "id": "2611.22967",
    "title": "CodeReel: Accelerating Code-to-Video Agents with Exact Frame Reuse and Blocking-Aware Scheduling",
    "authors": [
      "Junyi Shen",
      "Yao Lu"
    ],
    "abstract": "Coding agents make videos by writing and refining programs in a build--inspect--edit loop. A finished film costs a median of $2.85 in model calls and 11 minutes, over a third of that time in builds that block the agent. We find that much of this time is avoidable, for two reasons. First, 37.5% of the frames of a session's later films were drawn before, many shifted in time or inside an edited scene. Second, half of the builds stop at a check, where the agent needs only the verdict, but which builds stop is unknown until the checks finish. We present CodeReel, a training-free execution layer behind agents' existing commands. Exact frame reuse keys each frame by its drawing commands, regardless of its position in time, and reuses each frame whose key recurs. Blocking-aware scheduling runs the checks first and starts the render alongside them, at idle priority, unless the session's recent builds make a pass unlikely. Scheduling spends CPU to answer sooner and reuse returns it; exact keys let later versions use frames rendered for a failed one as the agent thinks. We introduce EditLoop, a benchmark of replayable agent sessions whose films are checked against renders from scratch. On it, CodeReel cuts the agent's wait by 36.3% against Rebuild, a warm pipeline with parallel rendering, and by 57.9% against Sequential, today's step-by-step pipeline. On time-shifting edits its reuse renders 43.9%, close to the 43.0% whose pixels are new, while Manim-style caching renders 99.8%. With real agents, the median wait per build is 0.62x Rebuild's in Claude Code, on topics never used in development, and 0.67x in Codex CLI. The gain holds for five models and two frameworks.",
    "published": "2026-11-17T15:52:15Z",
    "updated": "2026-11-17T15:52:15Z",
    "categories": [
      "cs.MM",
      "cs.AI",
      "cs.CV",
      "cs.DC"
    ],
    "url": "https://arxiv.org/abs/2611.22967"
  },
  {
    "id": "2611.22965",
    "title": "High-Dimensional Black-Box Optimization via Guidance Sampling of Diffusion Models",
    "authors": [
      "Xiaoyan Hu",
      "Rohit Sonker",
      "Jalal Butt",
      "Jiayu Chen",
      "Egemen Kolemen",
      "Jeff Schneider"
    ],
    "abstract": "Many real-world optimization problems involve optimizing black-box objectives for which only a limited number of evaluations are available. Bayesian optimization (BO) is a powerful framework for such problems, but its effectiveness often deteriorates in high-dimensional spaces. Recent work leverages diffusion models for black-box optimization, often through pre-training a reward-conditioned score network to steer generation towards high-reward samples. Alternatively, gradient-based guidance methods assume access to a differentiable reward function from which guidance gradients are queried. However, these approaches either require large amounts of labeled data for offline training or access to exact reward gradients, limiting their applicability in black-box settings. We propose BReaD (Black-box Reward-guided Sampling of Diffusion Model), a guidance sampling framework for optimizing black-box rewards without assuming access to a labeled dataset or reward gradients. The proposed method uses a Gaussian process (GP) as a differentiable surrogate for the unknown objective and actively queries labels for the generated samples. We provide a theoretical analysis of the total-variation distance between the generated distribution and the target distribution. Using Upper Confidence Bound (UCB) as guidance signals, our method balances exploration and exploitation during generation and enables the discovery of high-reward regions in the data space. Numerical experiments on scientific discovery and image generation tasks demonstrate that our framework can effectively optimize black-box rewards in low-data scenarios.",
    "published": "2026-11-17T15:51:29Z",
    "updated": "2026-11-17T15:51:29Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.22965"
  },
  {
    "id": "2611.22964",
    "title": "Training-Free Building Change Detection with Example-Induced Discriminants",
    "authors": [
      "Zhi Lu",
      "Bin Hong",
      "Zhenming Peng"
    ],
    "abstract": "Building change detection (BCD) relies on dense annotations that are costly to collect across regions. A few annotated examples offer a more economical way to specify the target, but change maps provide incomplete building supervision: they label only changed buildings and leave the building-containing date unspecified. Our key observation is that these annotations nevertheless reveal features that recognize buildings in other images, including unchanged ones. We present Linear INduced Discriminants (LIND), a training-free framework that turns regional feature contrasts into a reusable linear building classifier. Using a single frozen vision transformer, it unifies building recognition and temporal comparison in the same feature space. This approach requires neither text prompts nor an auxiliary segmentation model. Only one parameter is tuned on a single validation dataset and then kept fixed across datasets and shot settings. Extensive experiments demonstrate strong detection accuracy, cross-dataset transfer, and efficient inference, with extensions to other semantic classes and broader land-cover changes. Change annotations thus provide a compact visual specification for detection in new scenes. Code: https://github.com/lzcn/lind",
    "published": "2026-11-17T15:51:05Z",
    "updated": "2026-11-17T15:51:05Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.22964"
  },
  {
    "id": "2611.22962",
    "title": "Hierarchical Diffusion Transformer for End-to-End Image Generation",
    "authors": [
      "Xiaoyu Wu",
      "Yifei Wang",
      "Weihang Guo",
      "Chen Wei",
      "Lydia E Kavraki",
      "Niloofar Mireshghallah",
      "Steven Wu"
    ],
    "abstract": "Pixel-space diffusion learns visual representations and image generation jointly in a single end-to-end training stage, without a separately pretrained visual encoder. However, plain pixel-space Transformers still trail leading two-stage latent diffusion models in generation quality and training efficiency. We hypothesize that part of this gap arises from retaining one token per patch throughout the backbone, which does not explicitly encourage a visual hierarchy that summarizes related content at progressively coarser levels. To address this, we introduce Hierarchical Diffusion Transformers (HiT), which progressively group related tokens and represent each group with a single token. The main Transformer bottleneck processes these compact group tokens, and ungrouping restores features to their original image positions. A compression budget regulates the average compression ratio across the batch, allowing group memberships and counts to vary across images and diffusion timesteps during both training and generation. The model exhibits emergent semantic structure, learning to group coherent objects and object parts without segmentation labels. In text-to-image generation, HiT further learns to group caption words with image patches depicting the same concepts, without region annotations. HiT achieves 1.48 FID on ImageNet $256\\times256$ and reaches comparable generation quality to JiT using approximately 40\\% of its cumulative training FLOPs. For text-to-image generation, HiT exceeds UniLiP's average score across five benchmarks with roughly $6\\times$ fewer denoiser parameters and $3\\times$ fewer forward FLOPs. These results suggest that learning a visual hierarchy within the generator breaks down the barrier to stronger image generation without external visual pretraining.",
    "published": "2026-11-17T15:47:56Z",
    "updated": "2026-11-17T15:47:56Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.22962"
  },
  {
    "id": "2611.22956",
    "title": "Is model self-assessment enough for diverse LVLM ensembles?",
    "authors": [
      "Michael Smith",
      "Frank P. Ferrie"
    ],
    "abstract": "Ensembles of diverse Large Vision Language Models have demonstrated performance beyond that of single models across multiple datasets and tasks. However, the necessary aggregation process usually relies on training, parameter fitting, or complex task-specific pipelines. Furthermore, evaluation is limited, making a fair comparison difficult. We create a unified pipeline where we perform candidate response selection: we build an ensemble by selecting the best answer from a set provided by different models. We comprehensively evaluate across 34 different means of confidence estimation, 24 ensemble configurations, 20 datasets, and two prompt specifications. We show that simple training and parameter-free approaches can be sufficient, even for ensembles of different architectures. These simple self-assessment approaches rely solely on each constituent model's confidence, without explicit calibration, yet are able to perform better than said constituent models. They are also competitive with more involved alternatives on standard metrics such as accuracy, including on open-ended problems. However, we also discover that dataset, ensemble composition, and prompt wording are key confounding variables insufficiently explored by prior work that significantly affect ensemble performance, such that the ensemble can perform worse than its best constituent model. These must be optimized for to get the most out of ensembles, at the cost of limiting their generalizability. We recommend that practitioners consider training-free ensembles only if deployment conditions can be precisely characterized, with Best-of-N configurations of strong models being a good starting point.",
    "published": "2026-11-17T15:43:35Z",
    "updated": "2026-11-17T15:43:35Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.22956"
  },
  {
    "id": "2611.22953",
    "title": "Fiberpose: state-of-the-art fiber morphometry and instance segmentation with a distance-transform neural network",
    "authors": [
      "Viktor A. Balashov",
      "Daniil S. Antonenko"
    ],
    "abstract": "Analysis of fibrous structures in SEM images is a routine task in biomedical engineering and materials science. However, most available methods for fiber quantification still rely on classical image binarization followed by simple post-processing. These approaches often produce unreliable results in images with weak boundaries, heterogeneous contrast, and densely packed fibers. Here, we introduce Fiberpose, a framework that reformulates fiber analysis as direct regression of a smooth distance-transform (DT) field, together with a novel set of geometry-based algorithms specifically adapted to this representation. The predicted field directly encodes fiber geometry, while the accompanying algorithms enable instance reconstruction and measurement of diameter and orientation within a unified workflow. The framework is implemented as a standalone Python desktop application and a web tool https://fiberpose.org. On an independent dataset of fibrous SEM images, Fiberpose achieved state-of-the-art instance-segmentation accuracy in comparison with SAM2 and Cellpose-SAM, and more accurate diameter measurements than DiameterJ, Fibar and GIFT. The method remains effective in dense and weakly contrasted regions and shows qualitative generalization across microscopy modalities not represented in the training data. Fiberpose therefore provides an interpretable geometric representation and an automated pipeline for reproducible quantitative characterization of fibrous materials.",
    "published": "2026-11-17T15:41:46Z",
    "updated": "2026-11-17T15:41:46Z",
    "categories": [
      "cs.CV",
      "q-bio.QM"
    ],
    "url": "https://arxiv.org/abs/2611.22953"
  },
  {
    "id": "2611.22951",
    "title": "A high-dimensional spatial-physical coupling operator for generalizable super-resolution of three-dimensional turbulent flows",
    "authors": [
      "Zengyuan Zuo",
      "Junjun Jiang",
      "Fei Mu",
      "Xubo Wang",
      "Xianming Liu"
    ],
    "abstract": "Accurate representation of turbulent flows requires simultaneously capturing multi-scale spatial structures and the complex, nonlinear coupling between distinct physical quantities (\\textit{e.g.}, velocity components and density). In practice, however, turbulent data are often constrained by low spatial resolution due to hardware limitations and computational costs. While current data-driven super-resolution methods have shown promise by learning mappings via convolutional neural networks (CNNs), they typically treat physical variables as independent channels. This simplified approach neglects intrinsic cross-variable correlations, causing models to struggle with high-fidelity reconstruction, particularly under extremely sparse conditions or in out-of-distribution regimes. To bridge this gap, we propose an architecture-agnostic spatial-physical coupling operator that extends the standard convolution into a joint spatial-variable dimension. Unlike conventional linear channel mixing, our framework constructs a unified spatial-physical representation within CNNs to explicitly capture local inter-variable interactions. By lifting features into a higher-dimensional manifold, this operator significantly enhances the model's representation capacity. Experiments demonstrate that this approach enables strong reconstruction performance and zero-shot generalization, offering a physics-aware inductive bias for super-resolution of three-dimensional turbulence. More broadly, this work suggests that high-dimensional operators offer a promising avenue for modeling intricate multi-scale turbulent flows.",
    "published": "2026-11-17T15:41:02Z",
    "updated": "2026-11-17T15:41:02Z",
    "categories": [
      "physics.flu-dyn",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.22951"
  },
  {
    "id": "2611.21250",
    "title": "Stream of Belief: Eliciting Collective Intelligence through Latent Belief Dynamics",
    "authors": [
      "Yu Yao",
      "Jiayi Dong",
      "Yilun Du"
    ],
    "abstract": "In this work, we view multi-agent reasoning as a process of seeking a collective equilibrium of implicit belief dynamics and introduce Stream of Belief (SoB), where agents maintain continuous latent beliefs and iteratively refine them through communication and reflection. Our method seeks a collective belief state of a multi-agent system where further communication induces no meaningful information propagation. Through extensive experiments, we demonstrate the generalization of SoB across tasks and model families. More Broadly, our results suggest a new perspective on scaling multi-agent reasoning from belief dynamics.",
    "published": "2026-11-16T15:28:04Z",
    "updated": "2026-11-16T15:28:04Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2611.21250"
  },
  {
    "id": "2611.21240",
    "title": "How Developer Personality Shapes the Use of AI Coding Assistants",
    "authors": [
      "Annemarie Wittig",
      "Alina Mailach",
      "Norbert Siegmund"
    ],
    "abstract": "Developers differ in personality traits that shape how they approach software development tasks, yet AI coding assistants either behave uniformly or offer personalization features whose fit with individual developers must be found through trial and error. This is because it remains unclear how personality shapes developers' experiences with AI assistants, and thus which traits personalization should account for. In other words, we provide tools with no underlying theory on what works when and why. We take a first step towards such a theory with a systematic scoping review on how users' personality relates to their perception of LLM-based tools. We identified twelve studies through general search engines, major Software Engineering (SE) venues, AI tooling, and snowballing. They all reported associations between personality and perceptions, particularly perceived usefulness, yet none addressed this in a SE context. Building on these findings, we conducted an exploratory two-wave survey with 29 and 11 developers, collecting first empirical evidence of how developers' personality (measured using the Big Five Model) relates to the perception of AI coding assistants. Higher Extraversion was associated with more positive private-use experiences in both waves, while Agreeableness was associated with negative professional experiences in the first wave and positive ones in the second. These results provide first indications that the personality effects found in the literature extend to developers. Although further studies with bigger samples are needed to build a theory, our work takes the first step towards an empirical grounded theory of developer personality and AI personalization traits.",
    "published": "2026-11-16T15:23:28Z",
    "updated": "2026-11-16T15:23:28Z",
    "categories": [
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2611.21240"
  },
  {
    "id": "2611.21235",
    "title": "Language-model agents' beliefs can be manipulated via truthful evidence in open channel",
    "authors": [
      "Jinwei Hu",
      "Qisong He",
      "Xinmiao Huang",
      "Youcheng Sun",
      "Yi Dong",
      "Xiaowei Huang"
    ],
    "abstract": "Language-model agents' beliefs can be manipulated through open channels such as social media, even when the information they receive is truthful. When agents fill gaps between fragments with self-induced relationships, they may accept those relationships as established facts and pass the resulting rumours to others. Drawing on cognitive theory of narrative understanding and film theory of montage, we introduce Generative Montage to operationalize this failure, termed narrative overfitting, by coordinating agents to arrange truthful fragments into misleading narratives. Across 1,090 rumour targets from six Twitter events, agents often accepted rumours overconfidently, with overall acceptance exceeding 65 percent in twelve of fourteen models. Acceptance remained above 50 percent after majority voting or review of the same evidence, showing how errors can reach downstream decisions. To explain this susceptibility, fragment interventions identify posts that influence belief within complete narratives. Synthetic controls then show that similar response patterns arise from valid evidence, separating belief influence from evidential support. This distinction motivates Grounded Monitor, a proof-of-concept neuro-symbolic runtime monitor that checks direct evidential support to guide agents' judgements, improving decision accuracy by 5.6 to 29.0 percentage points across original and anonymized settings. These findings expose a cognitive route to rumour amplification and support monitoring inferred relationships before agent-generated conclusions guide public decisions.",
    "published": "2026-11-16T15:20:18Z",
    "updated": "2026-11-16T15:20:18Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.MA",
      "cs.SI"
    ],
    "url": "https://arxiv.org/abs/2611.21235"
  },
  {
    "id": "2611.21233",
    "title": "A Study on Performance Enhancement of a Webcam-Based Real-Time Eye-Tracking System",
    "authors": [
      "Minuk Jung",
      "Kyeonghun Kim",
      "Sooyeon Yoon"
    ],
    "abstract": "This study proposes a real-time gaze-tracking system that uses a standard RGB webcam to estimate screen coordinates. The system combines ETH-XGaze-based gaze estimation with nine-point calibration and polynomial ridge regression. To reduce errors caused by changes in head position, it also applies a conditional residual correction derived from head and pose features extracted with RTMPose. Whether this correction is used depends on the reliability of the detected features and the characteristics of the calibration data. In a preliminary experiment, one participant completed trials at 12 screen targets. The resulting mean screen-coordinate error was 204.24 pixels, which was 35.83% lower than that of xgaze-js and 57.69% lower than that of gaze_tracker. The system produced valid gaze estimates for all 12 targets. These preliminary findings demonstrate the feasibility of combining user-specific calibration with conditional pose-based correction for webcam gaze tracking. Because the evaluation involved only one participant, further experiments with more participants and a wider range of postures are required.",
    "published": "2026-11-16T15:16:55Z",
    "updated": "2026-11-17T10:51:12Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.21233"
  },
  {
    "id": "2611.21232",
    "title": "A Generative AI-Driven Architecture for Whole-Home Intelligent Services: Edge Models, Memory Management, and Household Applications",
    "authors": [
      "Mo Zhou"
    ],
    "abstract": "Generative artificial intelligence is entering the home. Cloud-based assistants face governance limitations in data transmission, continuous availability, and the reliability of physical actions, which are especially salient in households where devices remain online, data accumulate over time, and commands trigger real-world actions. Using the home local server as a unifying organizing axis, this article develops a design-oriented review framework. Sources from arXiv, CNKI, ACL Anthology, and official documentation were searched through November 2026 and coded into five evidence categories: reviews, system prototypes, benchmarks, HCI and eldercare studies, and official documentation. System designs were mapped onto shared architectural modules, identifying nine recurrent responsibilities of the home local server. Generative models support perceptual interpretation, intent understanding, and candidate planning, while deterministic validation, knowledge-graph constraints, and authorization leases confine candidate actions to an inspectable space. Home control, emotional companionship, and intelligent guarding can be compared within a common framework: they share state and memory but differ in latency, false positive and negative rates, proactivity, and permissions. Existing benchmarks rely on virtual environments and cannot substitute for real-deployment evaluation. Local deployment is not inherently safer, and technical continuity alone does not establish the social or medical effects of companionship and guarding. The article proposes a five-dimensional evaluation framework covering architectural capability, system resources, privacy, safety and reliability, and human experience, together with six design principles and a future research agenda for local-first intelligent home systems.",
    "published": "2026-11-16T15:16:17Z",
    "updated": "2026-11-16T15:16:17Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.21232"
  },
  {
    "id": "2611.21229",
    "title": "Investigating the Benefit of Transfer Learning from the Locus Coeruleus for Substantia Nigra Pars Compacta Segmentation",
    "authors": [
      "Tayebeh Bahador",
      "Max Dünnwald",
      "Matthew J. Betts",
      "Emrah Düzel",
      "Steffen Oeltze-Jafra"
    ],
    "abstract": "The substantia nigra pars compacta (SNpc) is a small midbrain nucleus that degenerates early in Parkinson's disease (PD). T1-weighted FLASH MRI enables its visualization and may support early detection of neurodegeneration. However, manual segmentation is difficult and time-consuming, and deep learning models often suffer from the limited availability of labeled data. Transfer learning (TL) may help by adapting pre-trained models to small datasets. We investigate whether TL from a model trained on the locus coeruleus (LC), a nucleus with a similar appearance in this sequence, improves SNpc segmentation. Several TL strategies were evaluated using a 3D U-Net. With as few as 5-14 labeled subjects, TL and training from scratch achieved similar performance, reaching a Dice similarity coefficient of up to 0.77, close to reported inter-rater agreement. No TL strategy differed significantly from training from scratch, suggesting that initialization from the LC offers no significant benefit for SNpc segmentation.",
    "published": "2026-11-16T15:14:01Z",
    "updated": "2026-11-16T15:14:01Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.21229"
  },
  {
    "id": "2611.21223",
    "title": "Oriented Semi-DETR for Semi-Supervised Aerial Object Detection",
    "authors": [
      "Yuqiu Li",
      "Jian Xue",
      "Fan Li",
      "Ke Lu"
    ],
    "abstract": "Semi-supervised object detection has recently been extended to DETR, where oriented boxes introduce an ambiguity that does not arise for axis-aligned boxes: the map from parameters to rectangles is two-to-one, since $(c_x,c_y,w,h,θ)$ and $(c_x,c_y,h,w,θ+π/2)$ denote the same rotated rectangle. Losses and matching costs are computed from the parameters, so two boxes that coincide in space can be far apart in the metric that drives training. A correctly localized student box is then penalized by the regression loss, and the inflated matching cost leads the Gaussian mixture model (GMM) filter to discard it. We propose Oriented Semi-DETR, which removes this ambiguity wherever a pseudo box enters training. Swap-aligned Target Selection regresses towards the encoding closer to the student prediction. A Swap-invariant Reliability Cost minimizes over the two encodings inside the matching cost, so the filter decides on geometry alone. Swap-aware Pseudo-label Denoising starts denoising earlier, ramps its loss weight linearly, and weights each query by the teacher score and encoding margin. All three are parameter-free and require no additional forward pass. Across all label ratios of DOTA-v2.0, Oriented Semi-DETR outperforms DETR-based supervised and semi-supervised baselines, with the largest gains at the strict IoU threshold.",
    "published": "2026-11-16T15:09:55Z",
    "updated": "2026-11-16T15:09:55Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.MM"
    ],
    "url": "https://arxiv.org/abs/2611.21223"
  },
  {
    "id": "2611.21222",
    "title": "Verifiable Random Sampling of Private Data Without a Trusted Single Party",
    "authors": [
      "Muhammed Karamuk",
      "Mikołaj Glinka",
      "Ruben Wolff"
    ],
    "abstract": "Problem: When a party supports claims about a private dataset by disclosing a sample, auditors cannot tell whether it was drawn at random or \"cherry-picked\" to hide flaws in the rest of the data. Solution: The data holder commits to the hashes of every item in its dataset and registers the commitment with independent servers. Selection then waits on a decentralized randomness beacon: a network that jointly emits a fresh random value every few seconds, outside the control of the data holder and the auditors. The value emitted two beacon rounds after the commitment picks the sample. Each server returns a signed receipt, so anyone can later check that the revealed sample is exactly the one that value prescribes. Selection from the committed set stays unbiased as long as the beacon's threshold holds and one required server is honest, and a pre-agreed name, checked with the servers, stops repeated or abandoned draws. We call this protocol NoCherry. Applications: Any audit that spot-checks a private corpus: private AI benchmarks and held-out test sets, dataset quality claims, code and security audits, test-fairness review, vulnerability handling, and compliance sampling. Auditors need not trust the data holder to hand over a representative sample of the committed data, since the protocol proves it, and data holders need not expose their entire dataset.",
    "published": "2026-11-16T15:09:40Z",
    "updated": "2026-11-16T15:09:40Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.21222"
  },
  {
    "id": "2611.21218",
    "title": "InclusionMed: Benchmarking AI for Inclusive Healthcare",
    "authors": [
      "The InclusionMed Collaboration"
    ],
    "abstract": "Advancing medical AI for inclusive healthcare requires evaluation across diverse healthcare roles, tasks, and care settings, but benchmark coverage remains uneven. We introduce InclusionMed, an open medical AI evaluation initiative for inclusive healthcare. The InclusionMed Atlas organizes benchmarks across three healthcare roles and three AI capabilities. For the first release, we selected four public benchmarks from 388 candidates through structured audits and independent reproduction. With InclusionMed-DxFiles, our private diagnostic reasoning benchmark, the Atlas contains five benchmarks covering three of its nine role--capability cells. We evaluated frontier large language models on the Atlas and aggregated their results into the InclusionMed Index, with overall scores ranging from 17.5 to 49.1 out of 100. The Index also reports scores by healthcare role and AI capability, showing that a model's rank varied with the role or capability considered. A within-benchmark analysis using task-level tags showed that the ten highest-ranked models in the Index all scored higher on patient communication than on clinical decision-making. Models with similar Index scores also differed substantially in estimated inference cost. These findings highlight the need for evaluation covering more diverse healthcare needs and for context-specific model selection. Through open collaboration and community contributions, InclusionMed seeks to ensure that diverse healthcare needs worldwide shape how medical AI progress is defined and measured.",
    "published": "2026-11-16T15:08:25Z",
    "updated": "2026-11-16T15:08:25Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.21218"
  },
  {
    "id": "2611.21178",
    "title": "TRACK: Tool-Augmented Reasoning over Time Series for Fault Diagnosis in Power Management System",
    "authors": [
      "Erkan Bayram",
      "Debanjan Ghosh",
      "Li Zhu",
      "Sambarta Dasgupta"
    ],
    "abstract": "Fault diagnosis in power management systems running multiple loads relies on experts manually inspecting current and voltage waveforms, which fails to scale across deployed units. We present TRACK, which pairs a time series encoder with a Small Language Model to produce structured, physics-grounded diagnostic reports, calling tools for exact, verifiable calculations. It operates on-device, keeping proprietary sensor data local and avoiding expensive API calls. We introduce a rubric-based framework that evaluates these reports by scoring structure, signal fidelity, physics reasoning, diagnosis, and actionability through per-criterion verdicts. On a 15-class multi-load simulated benchmark, TRACK achieves over 95% fault-category accuracy and generalizes to out-of-distribution faults, whereas the best encoder-probing baseline reaches only 58% accuracy.",
    "published": "2026-11-16T14:39:13Z",
    "updated": "2026-11-16T14:39:13Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL",
      "eess.SY"
    ],
    "url": "https://arxiv.org/abs/2611.21178"
  },
  {
    "id": "2611.21177",
    "title": "RAGE: Residual-Adaptive Gating for Flow-Based Image Editing",
    "authors": [
      "Ruofeng Mei",
      "Xiangyu Xu"
    ],
    "abstract": "Recent inversion-free, flow-based image editing methods evolve the source image toward the target via a differential velocity field. We observe that this velocity field does not explicitly account for which regions should be preserved, leading to unintended drift in non-editing regions. To address this, we formulate source fidelity control as a stochastic optimal control problem in which a selective fidelity term on the editing residual is enforced along the editing trajectory. Solving this problem and approximating its solution yields the Residual Gating Principle: each latent component is pulled back toward the source with a gain that decays exponentially with the local residual magnitude, so that small deviations are suppressed while large, semantically meaningful edits pass through unimpeded. The proposed method, RAGE, requires only one lightweight gated interpolation per sampling step, involves no mask estimation, attention maps, retraining, or architecture-specific modifications, and is applied on top of FlowEdit-based editors. On PIE-Bench, RAGE achieves the best overall rank among 17 methods and substantially improves background preservation on both Stable Diffusion 3 and FLUX backbones while maintaining competitive editing quality.",
    "published": "2026-11-16T14:36:53Z",
    "updated": "2026-11-16T14:36:53Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.21177"
  },
  {
    "id": "2611.21176",
    "title": "Scientific Coding with Large Language Models: Evidence from Finite Element Analysis",
    "authors": [
      "Erfan Hamdi",
      "Joel Shor",
      "Emma Lejeune"
    ],
    "abstract": "Large language models (LLMs) offer a potential route to automating scientific programming, but their usefulness depends on consistently producing numerically correct code. We extend FEM-Bench to 17 finite element tasks involving nonlinear and history-dependent mechanics and structural dynamics, and evaluate 15 models on implementation and test generation without execution feedback. The best model succeeds in 87.1% of single-pass implementation trials, but rankings differ between tracks. The leading implementer achieves 49.9% joint test success, while the leading tester reaches 82.6%. For six models, we compare single-pass generation with two agentic harnesses that allow code execution and revision. Agentic execution solves some tasks that never succeeded in single-pass trials and improves consistency on others, but gains vary across models and harnesses, and regressions also occur. Claude Opus 5 with SimpleAgent reaches 96.5% Pass@3, the probability of at least one success in three attempts, but 77.1% Pass$^3$, the probability that all three succeed. No model-harness combination exceeds 78.8% Pass$^3$. To understand why agents submit incorrect code after passing their own checks, we analyze 249 failed agentic trajectories and identify six categories of self-verification failure. The most common are inadequate test coverage (73.1%) and reliance on generic consistency checks (70.3%), and in 28.5% of cases the tests share an error with the implementation. Motivated by these findings, an exploratory configuration with separate coder and tester agents achieves the highest observed scores, with 97.6% Pass@3 and 88.8% Pass$^3$. These results identify consistency across attempts and independent verification as the main obstacles to trusting LLM-generated scientific code.",
    "published": "2026-11-16T14:35:30Z",
    "updated": "2026-11-16T14:35:30Z",
    "categories": [
      "cs.SE",
      "cs.AI",
      "cs.CE"
    ],
    "url": "https://arxiv.org/abs/2611.21176"
  },
  {
    "id": "2611.19956",
    "title": "FinVision: Multimodal AI for Visualizing Financial Narratives",
    "authors": [
      "Yixuan Tang",
      "Hui Wang",
      "Yi Yang",
      "Allen H. Huang"
    ],
    "abstract": "Financial narratives contain rich information about firms' performance and business conditions. Conventional text analysis often summarizes this information into numerical representations, which may not fully preserve the dynamic structure described in the narrative. In this study, we develop FinVision, a domain-specific multimodal generative model that translates financial narratives into visual representations of contemporaneous market dynamics. Using 87,940 paired observations of Management Discussion and Analysis (MD&A) disclosures and stock price charts, FinVision learns the average relationship between a firm's narrative account of a fiscal year and its stock-price dynamics over the same period. Given an MD&A alone, the trained model generates a text-implied stock chart, extending financial text analysis beyond numerical representations toward text-to-visual generation. We validate FinVision in two ways. First, held-out tests show that the model generates stock-chart representations that closely resemble observed charts and outperform direct LLM prompting, general-purpose text-to-image models, and the same architecture without financial-domain adaptation. Second, we examine the economic validity of the generated representations by comparing text-implied and observed stock charts. The resulting discrepancy is systematically associated with weaker investor responses around subsequent 10-K filings and with worse subsequent market and operating outcomes. Overall, our findings show how domain-adapted multimodal generative AI can create a new visual representation of financial text and provide an additional modality for studying business communication.",
    "published": "2026-11-15T11:56:36Z",
    "updated": "2026-11-15T11:56:36Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.19956"
  },
  {
    "id": "2611.19955",
    "title": "Equal Dose, Different Coverage:Tracing Rate and Duration in Image Editing",
    "authors": [
      "Yi Liu"
    ],
    "abstract": "Benchmarks for scientific image editing test whether a model draws the outcome of a described process, leaving open which representations carry its errors and whether correcting them yields the right quantity. We study this question with an airbrush of fixed deposition profile, under which exchanging rate and duration preserves the dose and should preserve the endpoint, yet changes the edited coverage. Matched-norm activation patches across text positions and denoising stages show that, in distilled FLUX with Chinese prompts, representations at unchanged text positions (context) carry this discrepancy: early context transfers 3.51 of the 3.98 percentage-point (pp) signed route difference, against 0.09 pp for equal-norm updates at the two changed digits. Early image latents transmit native (unpatched) route differences across two FLUX configurations and OmniGen, while text-position effects depend on configuration. The trace predicts an intervention: share early context between routes while each retains its own digits. On independent English layouts, this reduces the distilled-FLUX absolute route gap from 1.13 to 0.60 pp, outperforms early digit sharing, and improves agreement more than in base FLUX under directly paired tests. Calibrated evaluation, which prescribes an area for each dose, separates this gain from accuracy: sharing the full prompt encoding produces identical route images with target errors of 8-16 pp, and stating the target percentage directly retains a compressed area response. Localization predicts a consistency gain on new layouts, and calibration measures the quantity error that agreement leaves unresolved.",
    "published": "2026-11-15T11:52:41Z",
    "updated": "2026-11-15T11:52:41Z",
    "categories": [
      "eess.IV",
      "cs.AI",
      "cs.MM"
    ],
    "url": "https://arxiv.org/abs/2611.19955"
  },
  {
    "id": "2611.19939",
    "title": "Two-Stage Prompt Learning: A Unified Framework for Person ReID without Clothing Hypothesis",
    "authors": [
      "Yuxuan Xiao",
      "Shanshan Zhang",
      "Shengcai Liao",
      "Jian Yang"
    ],
    "abstract": "Person re-identification (ReID) in real-world scenarios involves three clothes conditions: the same clothes (SC), changed clothes (CC), and the unknown (GEN) scenario where clothes changes are not specified. Existing methods typically train separate SC- or CC-specific models, which limits generalization across all conditions. Meanwhile, pre-trained visual-language models (VLMs) such as CLIP have shown strong generalization ability in various vision tasks, motivating recent ReID methods to incorporate textual prompts. However, to distinguish SC and CC, prior approaches rely on fixed predefined instructions, which lack learnable context embeddings in prompts and cannot effectively handle the GEN scenario. To overcome these limitations, we propose Two-Stage Prompt Learning (TSPL), a unified framework that integrates clothes-identity decoupling and scenario-aware task prompts within VLMs. In Stage 1, appearance-decomposed prompt learning disentangles clothes and identity information under frozen encoders, producing stable embeddings where clothes cues can be selectively preserved or suppressed. In Stage 2, task-aware prompt learning trains the image encoder with learnable context embeddings guided by Stage-1 representations, enabling robust adaptation across SC, CC, and GEN conditions. Extensive experiments on five benchmarks show that TSPL achieves state-of-the-art performance under all scenarios, improving mAP by up to 9.2% on LTCC (SC) and by 6.4% on VC-Clothes (GEN), respectively. The code will be released at https://github.com/YuSuen/TSPL.",
    "published": "2026-11-15T11:13:22Z",
    "updated": "2026-11-15T11:13:22Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.19939"
  },
  {
    "id": "2611.19933",
    "title": "SAGE-VQA: A Training-Free, Self-Evolving Agentic Framework with Grounded Evidence for Knowledge-Based Visual Question Answering",
    "authors": [
      "Ruirui Shen",
      "Jianqi Gao",
      "Xiangfeng Luo",
      "Yonggang Zhang",
      "Muran Yu",
      "Barney Haoyun Miao",
      "Hang Yu",
      "Yike Guo"
    ],
    "abstract": "Knowledge-based visual question answering (KB-VQA) aims to combine visual information with external knowledge to answer user questions. Existing methods face two main bottlenecks: visual perception errors can propagate into hallucinations, and generalization across scenarios remains limited. To address these issues, we propose SAGE-VQA (Self-evolving Agent framework with Grounded Evidence), a training-free agentic framework that combines evidence verification with experience evolution. Our key insight is to explore an Evidence-Driven Adaptive Reasoning (EDAR) strategy. It accurately acquires and verifies question-relevant fine-grained visual information. It also extracts and refines reusable experience to support robust reasoning across tasks. Specifically, we design a Co-verified Visual Grounding module that verifies question-relevant visual information and provides grounded evidence for subsequent reasoning. We further introduce a Self-evolving Hierarchical Memory (SHM) mechanism. SHM organizes experiences into declarative and procedural memories based on their nature. These memories can be reused in subsequent reasoning and continually refined through feedback, without updating model parameters. Experimental results show that our method outperforms competing methods based on lightweight open-source vision-language models (VLMs) as well as those based on closed-source VLMs. Moreover, our method can serve as a plug-and-play reasoning framework for existing VLMs without modifying their architectures.",
    "published": "2026-11-15T11:07:57Z",
    "updated": "2026-11-15T11:07:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.19933"
  },
  {
    "id": "2611.19932",
    "title": "From Companion to Guardian: Designing an Emergency Support System Using a Quadruped Robot for Older Adults",
    "authors": [
      "Chunyang Meng",
      "Eduardo B. Sandoval",
      "Josh Andres",
      "Francisco Cruz",
      "Mari Velonaki"
    ],
    "abstract": "As older adults increasingly live alone, emergency support becomes an important function for home companion robots. In Australia, demand for the care and support workforce is projected to nearly double between 2020-21 and 2049-50. Service robots such as robot dogs may support older adults by combining everyday companionship with assistance when human support is not immediately available. We present the design and implementation of a domestic companion-robot system on a Unitree Go1 quadruped platform that combines companionship with emergency awareness and response. The system uses a three-stage interaction model consisting of companion, danger-awareness, and emergency modes. A rule-based escalation policy combines signs detected from visual and speech input to determine the current risk level and adjust how long the robot waits for the user to confirm safety before entering emergency mode. Additional detected signs can shorten this waiting time. Users can confirm safety, request immediate help, stop robot motion, or reset the system. We verified the implemented decision rules and escalation timing through 105 automated trials and 25 staged physical trials. Additional visual evidence shortened the waiting time, and the system entered emergency mode when the waiting time ended without confirmation.",
    "published": "2026-11-15T11:07:02Z",
    "updated": "2026-11-15T11:07:02Z",
    "categories": [
      "cs.RO",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.19932"
  },
  {
    "id": "2611.19931",
    "title": "Does synthetic pre-training pay off on a microcontroller? Accuracy, latency and energy across two MCUs",
    "authors": [
      "Achintya Yadav"
    ],
    "abstract": "Rendered images are cheap to label, but a microcontroller classifier must survive 8-bit integer (INT8) quantisation and compute correctly on the chip. Five models, from MobileNetV2 at 224 px to a 61K-parameter convolutional neural network (CNN), were fine-tuned on a six-class scene dataset with and without a synthetic stage, against thresholds fixed in advance, and deployed on an ESP32-S3 and an RP2040. With full real data the stage gave no detectable gain. For the main deployable model the INT8 difference was +0.312 percentage points (pp), its interval below the +1.6 pp gain recomputed from the source study; quantisation did not detectably change it, nor did model size. With 10% of the real data the stage paid off for the CNN, by +3.438 pp on one seed and +2.715 pp over three; its cause is open. On the ESP32-S3 the main model took 152.7 ms and 16.3 mJ above idle per inference, and adding the stage changed neither beyond preset bounds. The model's INT8 outputs matched TensorFlow Lite's reference kernels exactly, but only after a memory overrun in a vendor kernel was patched. On the RP2040 the same model took 1.80 s and 27.3 mJ above idle, about twelve times slower, and the largest 96 px model exceeded the board's flash-capacity limit. Neither the RP2040 nor the host interpreter used for scoring reproduced the reference arithmetic. A synthetic stage is worth adding only when real data are scarce, and on-device INT8 outputs should be checked against reference kernels, not inferred from host scores.",
    "published": "2026-11-15T11:00:12Z",
    "updated": "2026-11-15T11:00:12Z",
    "categories": [
      "cs.LG",
      "cs.AR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.19931"
  },
  {
    "id": "2611.19925",
    "title": "Learning When to Continue and When to Stop: Termination-Aware OPSD",
    "authors": [
      "Chaoqun He",
      "Wannian Yi",
      "Changyi Sun",
      "Chaojun Xiao",
      "Lijie Wen"
    ],
    "abstract": "On-Policy Self-Distillation (OPSD) improves language model reasoning by distilling from a frozen teacher initialized identically to the student and conditioned on privileged information. However, we identify an underexplored termination mismatch in OPSD: the student fails to reliably learn when to continue and when to stop. This mismatch manifests in two opposing failure modes-premature termination, where reasoning stops before sufficient progress is made, and repetition-driven over-generation, where the model continues generating after reasoning has stalled. Our analysis shows that the teacher-student discrepancy on EOS grows during OPSD training, while length-capped trajectories are frequently dominated by unproductive repetition. To address this issue, we propose TA-OPSD (Termination-Aware On-Policy Self-Distillation), which augments the original OPSD objective with two targeted objectives. Stop/Continue Distillation addresses premature termination by explicitly aligning the teacher and student on whether reasoning should continue, while Repetition-Aware Unlikelihood Training addresses repetition-driven over-generation by discouraging repetitive continuations in the student's failed trajectories. The resulting objective improves termination behavior from complementary directions: continuing when further reasoning is needed and stopping when reasoning becomes unproductive. Experiments on mathematical reasoning tasks with Qwen3 (1.7B/4B/8B) show that TA-OPSD consistently outperforms OPSD and other baselines across all three model scales. Beyond the performance gains, ablation and behavioral analyses show that the two proposed objectives effectively mitigate their corresponding termination failures, reducing both premature termination and repetition-driven over-generation.",
    "published": "2026-11-15T10:34:30Z",
    "updated": "2026-11-15T10:34:30Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.19925"
  },
  {
    "id": "2611.19922",
    "title": "Lao Siji: Adapting openpilot to Closed-Loop End-to-End Driving in Neural Reconstruction",
    "authors": [
      "Chengzhi Gao",
      "Yongzhi Liu",
      "Jinchang Xu",
      "Weichao Zhuang",
      "Guodong Yin"
    ],
    "abstract": "We present Lao Siji, an end-to-end driving policy that ranks third in the 2026 NVIDIA AlpaSim E2E Driving Challenge, ahead of most entries built on foundation models. Instead of training from scratch on a general-purpose vision backbone, we adapt openpilot, an open-source L2 production model. We freeze its vision encoder and fine-tune the policy layers with an ego-state adapter and a route memory. On closed-loop rollouts in neural-reconstructed scenes, we supervise the policy with a privileged map teacher for lateral self-correction and a body-extent loss for road and obstacle clearance, while distilling the base model's remaining outputs to retain car following. Ablations show that self-correction samples carry the gain, while the clearance loss substitutes for them where no teacher exists. Longitudinal safety instead rests on the base model's lead-vehicle estimate behind a rule-based speed layer. Longer training, imitating human logs, and human-log speed targets yield either no measurable gain or adverse effects. Without further training, Lao Siji also places among the leaders on HUGSIM and Odyssey. The final training takes only one GPU-hour and shifts the weights by 3.9% from the shipped model. Code will be released after review.",
    "published": "2026-11-15T10:31:28Z",
    "updated": "2026-11-15T10:31:28Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.19922"
  },
  {
    "id": "2611.19913",
    "title": "The Vocabulary Tax: Safely Trimming Unused Tokens from LLMs for On-Device Use",
    "authors": [
      "Sattaya Singkul"
    ],
    "abstract": "Open large language models (LLMs) and speech models ship vocabularies of up to 262k tokens, and every user downloads the tables those tokens index (the input embedding, an untied output head and, in recent on-device models, per-layer embeddings), whatever languages they need. We call the bytes in rows a deployment never uses the vocabulary tax and measure it, without downloading weights, for 1,244 generative and speech-recognition models on the Hugging Face Hub. For a Thai and English deployment it is a median 4.4% of model bytes below 0.5B parameters and 2.1% above 8B, and 1.93 GB in Gemma 4 E2B: it falls hardest on the small models that edge devices run. Keeping only the rows of the deployment's writing systems is exact. Keeping the tokens seen in the user's own text removes much more, a median 29.0% below 0.5B, but the usual way of doing it breaks BPE tokenizers: it drops the intermediate tokens that merges build on, so new text is split differently 1.9 times as often as the standard check reports. We repair this with merge closure, at a cost of 5.9% more rows, and add a trim certificate: a Good-Turing estimate, from the trimming text alone, of how much new text the trimmed tokenizer will split differently (correlation 0.996 over 300 settings in 22 languages) and of how much more text a target needs. Without test data our method never exceeds a 2% target, while prior keep rules checked on test data exceed it in 9-13 of 44 settings. On six models of 270M to 3B parameters in 11 languages, trimmed models keep their predictions: where the certificate passes, a median 89.7% of rows is removed and bits per character rise by at most 2.0%. The census, the trimming and the certificate are released as an open Python package, and the per-model tax for 41 languages as an open dataset.",
    "published": "2026-11-15T10:01:37Z",
    "updated": "2026-11-15T10:01:37Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.19913"
  },
  {
    "id": "2611.19912",
    "title": "AgenticJevNav: Agentic Object Search and Navigation via Event-Driven Verification",
    "authors": [
      "Shuning Zhang",
      "Shuli Zhang",
      "Yunheng Wang",
      "Wei Lu",
      "Jiaxi Zhang",
      "Yihang Kang",
      "Tao Wang",
      "Xiangyu Chen",
      "Yixiao Feng",
      "Kai Sheng",
      "Renjing Xu"
    ],
    "abstract": "Agentic navigation must maintain goals and adapt actions from incomplete evidence despite execution failures and delayed inference. We present AgenticJevNav, which links goal-directed planning, evidence memory, event-triggered verification, and bounded execution. The Agent plans from RGB, odometry, memory, and feedback, retaining goal ownership while authorizing a bounded action set. Jev reviews structured evidence after blocked/failed execution or two consecutive low-progress segments. Version, freshness, and once-only checks govern decision application. A single executor and independent RGB reflex constrain motion. Goal revisions revoke obsolete requests and actions before replanning. Across six simulated task families, AgenticJevNav achieves 73.33% SR over 60 trials, 21.67 percentage points above the next-best Agent-only aggregate control under differing historical protocols. A real-world GENISOM L1 quadruped deployment achieves 70.0% success over 30 trials, including bounded search reporting. Together, the simulation and physical-robot results demonstrate the effectiveness of the proposed architecture, while remaining failures highlight opportunities to improve grounding, approach planning, and runtime.",
    "published": "2026-11-15T09:56:55Z",
    "updated": "2026-11-15T09:56:55Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.19912"
  },
  {
    "id": "2611.19905",
    "title": "HEmIF-Bench: Benchmarking H&E-to-mIF Models BeyondVirtual-StainFidelity",
    "authors": [
      "Fuxian Zhao",
      "Hyokeun Park"
    ],
    "abstract": "Hematoxylin and eosin (H&E)-to-multiplex immunofluorescence (mIF) generators predict spatial protein expression from routine histology, yet pixel-level marker reconstruction does not establish downstream utility. We present HEmIF-Bench, evaluating five frozen generators across eight datasets spanning molecular, cellular, tissue, and patient scales. HEmIF-Bench decouples internal encoder features from generated outputs, benchmarking both against the pathology foundation reference UNI2. Mirroring the clinical workflow where pathologists rely on mIF to define cell phenotypes, delineate tertiary lymphoid structures (TLSs) and germinal centers (GCs), and stratify patient risk, we evaluate external CD3 recovery, single-cell classification, dense nuclear segmentation, TLS/GC segmentation, and patient survival prediction. Across the benchmark, foundation-model-based MIPHEI-ViT leads among the generators, while non-foundation models show task-specific strengths. Comparing the two routes reveals that internal encoder features generally outperform generated outputs, and larger output marker panels do not guarantee stronger downstream utility across datasets. Moreover, neither internal encoder features nor generated outputs consistently surpass frozen UNI2. These findings show that pixel-level stain fidelity does not equate to downstream utility, and that generators trained at current paired-data scales have yet to surpass large-scale pure-H&E foundation models. With the expansion of paired translation cohorts and the advancement of foundation-based generative architectures, HEmIF-Bench establishes a definitive benchmark for tracking when H&E-to-mIF generation crosses the threshold to deliver genuine value beyond routine histology for tumor microenvironment analysis and precision oncology.",
    "published": "2026-11-15T09:34:47Z",
    "updated": "2026-11-15T09:34:47Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.19905"
  },
  {
    "id": "2611.19901",
    "title": "Remember, Replay, Adapt: Learning from Past Experience in Online Vision-and-Language Navigation",
    "authors": [
      "Chenhao Ding",
      "Jizhou Han",
      "Lixin Xiu",
      "Muyao Wang",
      "Songlin Dong",
      "Hideki Nakayama"
    ],
    "abstract": "Existing feedback-based methods for online vision-and-language navigation (VLN) primarily learn from current episode outcomes, leaving previously acquired feedback underutilized. Inspired by human episodic memory, we propose R2A, an online VLN adaptation framework that continually reuses successful and failed navigation experiences for policy learning. Specifically, Success-Failure Memory (SFM) retains successful and failed navigation episodes with acquired feedback and retrieves task-relevant experiences based on incoming instructions, enabling historical feedback to guide subsequent navigation. Prior-Anchored Adaptation (PAA) learns from these experiences by reinforcing successful trajectories and suppressing failed ones relative to a frozen pretrained policy, while regularizing behavioral drift. Together, these modules enable continual feedback reuse and stable policy adaptation without source-domain data or expert supervision. Extensive experiments across three benchmarks, REVERIE, R2R, and R2R-CE, and five navigation backbones demonstrate consistent performance gains. On the REVERIE validation unseen split, R2A improves DUET's SR from 46.98% to 69.84% and SPL from 33.73% to 50.98%.",
    "published": "2026-11-15T09:30:18Z",
    "updated": "2026-11-15T09:30:18Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.19901"
  },
  {
    "id": "2611.19475",
    "title": "StyleJudge: A Human-Validated, In-Context-Learning Vision-Language Evaluator for Artistic Style Transfer",
    "authors": [
      "Lokesh",
      "Pramukto Mandal",
      "Somanshu Juneja",
      "Jashnoor Singh",
      "Amit Kumar",
      "Pranav Adlinge",
      "Richa Thakur",
      "Kunal Swami",
      "Aditya Nigam"
    ],
    "abstract": "Automatic evaluation of artistic style transfer remains an open problem: existing metrics score an image pair in isolation, without seeing an example of the intended style transformation, and correlate poorly with human judgment. We introduce StyleJudge, a compact vision-language evaluator conditioned on a small set of reference source-to-stylized pairs before scoring a query pair, mirroring how a human rater calibrates to a style before judging a candidate. On a human-annotated benchmark of 878 rated pairs across 12 artistic styles (728 from 10 training/validation styles, 150 from 2 unseen styles), our efficient 0.8B-parameter StyleJudge reaches a Pearson correlation of 0.291 (Spearman 0.325) with human ratings on seen styles and 0.381 on unseen ones. On seen styles, it achieves the highest positive correlation among tested metrics: Gram-matrix style loss and CLIP similarity correlate weakly ($r=0.041$, $r=0.168$), while LPIPS (scored higher when closer to the source) correlates negatively ($r=-0.404$). We achieve this by distilling evaluation knowledge from a 72B-parameter vision-language teacher used only during training, which reaches $r=0.327$, confirming that most of its human alignment survives compact distillation. For training, we build a dataset of source-to-stylized pairs across the 12 styles via LoRA-adapted diffusion, densified with graded intermediate examples from a high-resolution image-morphing pipeline so the evaluator recognizes partial and complete stylization. On two held-out validation styles, StyleJudge reaches 28.2% exact-match agreement with its teacher's structured scores versus 1.1% for the untuned base model, with 67.8% shorter reasoning traces, and scores a pair in 39 s (median) using 2.5 GB of GPU memory on one NVIDIA T4. We release the human-rating benchmark, annotation guideline, SDXL-adapted FreeMorph code, and model weights.",
    "published": "2026-11-14T15:53:14Z",
    "updated": "2026-11-14T15:53:14Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.19475"
  },
  {
    "id": "2611.19474",
    "title": "Towards Informed Autonomy Design: Understanding the Interplay of Function Characteristics and Autonomy Preferences in Automotive Agents",
    "authors": [
      "Sebastian Zepf",
      "Annika Stampf",
      "Markus Schuster",
      "Enrico Rukzio",
      "Mark Colley"
    ],
    "abstract": "Proactive, autonomous interactions receive high interest in the field of intelligent assistants, including the automotive domain. A central challenge, however, is identifying appropriate levels of autonomy for different functions while maintaining user acceptance and trust. This work examines how function characteristics relate to suitable autonomy levels and whether these relationships generalize across functions. We conducted an expert workshop to define autonomy levels and identify relevant function characteristics. We then collected data from 126 participants, who rated 14 in-vehicle functions regarding autonomy preferences and function characteristics, from which we trained machine learning models to predict appropriate autonomy levels. Building on our findings, we developed our prototypical Autonomy Design Assistant that supports designers in making autonomy-related decisions, which we evaluated qualitatively with nine experts. Our results suggest that function characteristics can rank functions by their suitable level of autonomy and thereby guide more informed autonomy design decisions, whereas predictions for individual users remain uncertain.",
    "published": "2026-11-14T15:52:11Z",
    "updated": "2026-11-14T15:52:11Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.19474"
  },
  {
    "id": "2611.19472",
    "title": "InvarOrd: Self-Supervised Ordinal Knowledge Distillation with Rank-Invariant Alignment for Label-Efficient Cross-Species Hyperspectral Fish Freshness Assessment",
    "authors": [
      "Kazi Nabiul Alam",
      "Omenuko Joseph Nwebonyi",
      "Pooneh Bagheri Zadeh",
      "Akbar Sheikh-Akbari"
    ],
    "abstract": "Hyperspectral models of fish freshness rarely transfer between species, and labelling a new species is slow and destructive. Freshness is also ordinal, and standard domain alignment can erase that order. We present InvarOrd, which adapts to a new species from 30 labelled cubes (5 per rank) in three stages: self-supervised spectral pretraining on unlabelled source cubes, cross-species alignment by a shrinkage covariance discrepancy computed only within matched ranks, and ordinal distillation into a compact student. The alignment term is provably invariant to the rank means, so it gives no incentive to collapse the ordinal axis. On paired salmon and cod data (800 cubes each, 16 days), a source-trained teacher reaches 1.6 to 1.9 days mean absolute error (MAE) on the other species, with quadratic weighted kappa (QWK) below zero. The 423K-parameter student, 2.54 times smaller than its teacher, attains the lowest MAE (1.476 days) and highest within 1-day accuracy (56.1%) among 14 configurations, matching the best of six ImageNet-pretrained backbones (ConvNeXt-T, 1.503 days) at 66 times fewer parameters, 1.44ms per cube on a GPU and 5s re-adaptation. InvarOrd beats target-only training by 0.29 days (p = 0.031). Among alignment objectives, rank-invariant alignment retains the most ordinal structure (embedding rank correlation 0.183, QWK 0.112), whereas global discrepancy lowers the rank correlation to 0.049 and QWK to zero at only 0.014 days higher MAE.",
    "published": "2026-11-14T15:48:21Z",
    "updated": "2026-11-14T15:48:21Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.19472"
  },
  {
    "id": "2611.19465",
    "title": "VAST: Compiling Grounded Vulnerability Scenarios into Verifiable, Multi-Step Environments for Evaluating LLM Red-Team Agents",
    "authors": [
      "Zhen Wan"
    ],
    "abstract": "Evaluating Large Language Model (LLM) security agents requires reproducible environments whose workflow difficulty can be varied and whose failures can be diagnosed. We present VAST (Verifiable Adversarial Scenario Training & Evaluation), a declarative range compiler separating vulnerability scenarios from a compiler-introduced workflow-hardening layer. Following a post-hoc code and AST audit across all topics, the main benchmark retains 109 seed edges (45 with strict upstream CVE annotations), 72 family identifiers (62 under shared-HMAC relay grouping), 81 topic configurations (76 core plus 5 bounded execution models), and 1,387 instances (359 canonical four-gate-revalidated specs plus 1,028 seed variants) in a 42:39 partition. On the TopicServer compiler stratum, a budget-matched 270-episode prompt contrast across 10 compiled mechanism-family clusters (30 P2/P3/P4 instances, 40 turns, temperature 0.0) shows that glm-5.3, grok-4.7, and deepseek-v4-pro solve 12/90 instances under contract_only and 14/90 under generic_hint (cluster sign p=1.00), whereas supplying the shared workflow protocol in full_guide lifts completion to 76/90 (28/30, 23/30, 25/30; cluster sign p<=0.00391). On the separate ranges_v2 ledger, a 126-episode evaluation across 6 non-TopicServer workflows and multi-container Docker/Linux stacks solves 88/126 (69.8%) (28/42, 31/42, 29/42), while an 18-episode intervention on asynchronous Redis worker chaining (v2_02) lifts solves from 0/18 to 18/18 (100%) in 4-6 turns when installed worker modules are disclosed in GET /sched/directory. Finally, a three-seed (s in {42, 1024, 2025}) LoRA recipe comparison on Qwen2.5-Coder-7B-Instruct across 37 lineage-disjoint families (231 episodes on 33 held-out instances) yields 0/33 for Base, 1.67 +/- 2.89 / 33 for Golden SFT, and 4.67 +/- 2.31 / 33 for Header-Recovery SFT, with all solves on v2_03.",
    "published": "2026-11-14T15:40:08Z",
    "updated": "2026-11-14T15:40:08Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.19465"
  },
  {
    "id": "2611.19463",
    "title": "Semantics First, Pixels Later: Mission-Driven Event Streams for Drone Video over Bandwidth-Starved Links",
    "authors": [
      "Cong Xu"
    ],
    "abstract": "A surveillance drone on a bandwidth-starved link cannot send the video its operator would need, yet the operator's questions are often not about pixels: did three people converge, when, and where? We study what should cross a link of 1 Mbps down to 1 kbps instead, and in what order. BPS, a behavior-primitive stream, sends semantics first and pixels later: it runs a detector and a tracker onboard and sends short records (25 bytes on average) of multi-frame events selected by a mission card of 16-125 bytes, ahead of positions and pictures. We measure it by what a ground-side language model answers from it, under a preregistered protocol with a held-out set, against H.265 read by the vision fine-tune of the same model, H.265 on which the ground runs our own perception, a stream of quantized tracks, and onboard captions. On the development set (84% of questions about convergence, mostly one location) the event stream answers 74.3% of questions at 0.13 kbps. A reader that receives nothing answers 57.4%, and the video reader 59.6% at 100 kbps and 64.7% on the source frames. When the ground instead runs our perception on the video, video matches the stream at 100 kbps, about 800 times the stream's rate, and falls behind at 64 kbps and below. A track stream matches it at 96 times the bytes and loses 0.03 at 17 times. On held-out data the result is weaker: with events taken from annotated tracks, an oracle, the stream beats H.265 at 100 kbps (+0.13), but with onboard perception it does not (+0.01 [-0.04, +0.06]) and is no better than receiving nothing. Sent alone through emulated links the event records answer 0.739 at 1 Mbps and still 0.724 at 0.3 kbps; an every-frame track stream holds down to 1 kbps and video with ground-side perception down to about 100 kbps. On a Jetson Orin Nano the unchanged pipeline runs at 4.5 fps and misses most events.",
    "published": "2026-11-14T15:35:15Z",
    "updated": "2026-11-14T15:35:15Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.19463"
  },
  {
    "id": "2611.19461",
    "title": "Program Distillation: Transferring LLM Capability from System 2 to System 0",
    "authors": [
      "Pujun Zheng",
      "Wanying Ren",
      "Guoxiu He"
    ],
    "abstract": "Recent studies leverage large language models (LLMs) to construct executable programs through environment interaction, feedback analysis, and code revision. However, prior work has mainly treated LLMs as optimizers, overlooking their ability to transfer knowledge across system levels. We propose Program Distillation (PD), a framework that formalizes the transfer of abilities from System 2 to System 0. During learning, the LLM provides task knowledge and draft strategies; at deployment, a student program executes the resulting policy. We show that this approach can improve performance while reducing inference time. We introduce PDBench, a benchmark comprising 27 discrete- and continuous-control tasks with fixed initial policies, and PDMetaHarness, a model-harness-independent meta-system for monitoring and guiding the learning process. The strongest model achieves a normalized mean score of 0.728, surpassing PPO (0.656) and Jev-like decision models (0.239), while running exclusively on CPUs and reducing inference costs. Our analysis shows that performance is largely driven by the first breakthrough during learning, and structural modifications have a slightly lower success rate than parameter modifications but typically yield larger gains. We further introduce style distillation, which enables interpretable stylistic control over the learning process. Overall, we present an analytical framework for PD and demonstrate its practical viability.",
    "published": "2026-11-14T15:33:27Z",
    "updated": "2026-11-14T15:33:27Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.19461"
  },
  {
    "id": "2611.19448",
    "title": "CLEW: Log-Anchored Backward Tracing for Root-Cause Code Localization",
    "authors": [
      "Wenji Bai",
      "Muhammad Waseem",
      "Jaakko Peltonen",
      "Pekka Abrahamsson"
    ],
    "abstract": "Failures in industrial software systems may involve multiple components and be difficult to reproduce outside the production environment. Root-cause code localization therefore often relies on issue descriptions and runtime logs. However, log evidence may be noisy or incomplete, and the code reporting a symptom may differ from the code containing the underlying defect. These conditions make it challenging to identify relevant log evidence and determine which functions could have caused the reported failure. To address this gap, we introduce CLEW, an agentic approach that combines rule-based log-to-code anchoring with LLM-guided backward code tracing. CLEW organizes selected observations into diagnostic states, guides source exploration from anchored symptom functions, and returns ranked candidate functions, an affected module, and an explanation comprising a proposed mechanism path and associated log events. For evaluation, we construct LogLoc, a benchmark comprising 192 real-world issue and fault-injection cases. Against three baselines, CLEW records the highest observed Acc@1 (77.3%) and MRR (81.3%) on LogLoc-Issues and matches the leading baselines at 97.6% Acc@1 on LogLoc-Airflow. Averaged over all 192 cases, CLEW's wall-clock time is approximately 73% lower than LocAgent's at a similar average inference cost. No aggregate degradation is observed under the tested perturbations, with modest changes in Acc@1 and MRR across the evaluated seeds and base models. These results suggest that CLEW can combine function-level localization with evidence links and runtime efficiency under the evaluated conditions.",
    "published": "2026-11-14T15:10:10Z",
    "updated": "2026-11-14T15:10:10Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.19448"
  },
  {
    "id": "2611.19440",
    "title": "Few-Shot Visual Concept Extraction for Steering Diffusion Transformers",
    "authors": [
      "Nabyl Quignon",
      "Antitza Dantcheva"
    ],
    "abstract": "Image steering aims to provide fine-grained control over concepts in generated images, enabling targeted and continuous manipulation without broadly altering the generation process. Recent steering methods for diffusion models primarily focus on the text-conditioning space or rely on costly auxiliary training. Deviating from that, we here propose a novel steering approach that extracts visual concept directions directly from the image-side activations of Diffusion Transformers. Specifically, we showcase few-shot concept extraction in the activation space using a simple difference-of-means estimator over intermediate residuals. We observe (a) scene-level concepts such as lighting, weather, and style are distributed across image tokens, as well as (b) local concepts such as object colors, textures, materials, and facial attributes are concentrated in specific regions. Towards controlling both concepts, we introduce a new unified training-free framework that uses global difference-of-means for (a) distributed concepts and masked difference-of-means for (b) local concepts, preventing local signals from being diluted by global averaging. Notably, using only a handful of positive and negative prompt pairs, our method identifies and extracts reusable concept directions that can be injected at inference for continuous steering. Quantitatively, our method outperforms text-encoder steering and training-free activation-editing baselines, as well as is competitive with specialized editing models. Our results suggest that as concept directions can be applied at patch level, our method enables precise targeted and compositional steering, manipulating multiple concepts in the same image.",
    "published": "2026-11-14T14:52:19Z",
    "updated": "2026-11-14T14:52:19Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.19440"
  },
  {
    "id": "2611.19439",
    "title": "Do Rule-Based Tools Help LLMs Translate Endangered Uralic Languages in the Prompt or over MCP?",
    "authors": [
      "Iaroslav Chelombitko",
      "Mika Hämäläinen"
    ],
    "abstract": "Komi-Zyrian, Moksha, Erzya and Udmurt have mature rule-based resources, among them finite-state analysers, constraint grammars and bilingual dictionaries, which language models do not use. We ask whether giving a model access to these resources improves machine translation from the four languages into English, and whether it matters how the access is provided: as analyses computed in advance and written into the prompt, or as tools that the model calls itself through the Model Context Protocol (MCP). We evaluate manually: an expert linguist read every English output of the strongest model under three conditions, 816 sentences in all, accepted or rejected each one, and named the main error in every rejected translation. With the analyses in the prompt, the number of accepted translations rises from 13 to 43 out of 272; with the tools attached it rises to 55. The gain comes from the bilingual dictionary. For Udmurt, whose dictionary has no English side, the prompt-based condition brings no gain at all, while for the other three languages an English gloss reaches the prompt for 74 to 80% of the source words. Tool calling is also much harder to get working than prompt injection. Of 31 open-weight models, 14 never call a tool, 11 of them because they cannot produce a usable call, and half of the calls that are made name a language the toolkit does not support. We release the data set, every model output and all tool-call logs.",
    "published": "2026-11-14T14:50:16Z",
    "updated": "2026-11-14T14:50:16Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.19439"
  },
  {
    "id": "2611.19435",
    "title": "Security Authentication as Protective Friction: Understanding the Dual Effects of Authentication Measures in e-Government Platform",
    "authors": [
      "Jianshan Pan",
      "Zongyi Chen",
      "Qiyou Lin",
      "Xiaofang Cai"
    ],
    "abstract": "E-Government platforms, such as government credit platforms, handle highly sensitive personal data, requiring stringent security authentication (e.g., facial recognition, multi-factor verification) that protects users but impedes their experience. Drawing on Tomalin's (2023) e-friction typology and the emerging literature on beneficial design friction, we reconceptualize these authentication measures as protective friction, a theoretically distinct form of non-elective, overt, impeding e-friction that serves a security-enhancing function. We propose a dual-pathway model in which protective friction simultaneously reduces privacy-security risk perception (protection pathway) and increases effort cost (cost pathway), with self-efficacy moderating only the risk pathway. This differential pattern suggests that what matters is not users' ability to overcome friction, but their comprehension of its protective purpose, a construct we term protective mechanism comprehension. We outline a mixed-methods research design combining a survey of platform users and semi-structured interviews with platform staff at a Chinese municipal credit center to test this model. This research-in-progress contributes to IS theory by extending e-friction research from conceptual typology to empirical investigation, identifying when security friction becomes beneficial rather than burdensome.",
    "published": "2026-11-14T14:39:45Z",
    "updated": "2026-11-14T14:39:45Z",
    "categories": [
      "cs.CR",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.19435"
  },
  {
    "id": "2611.19429",
    "title": "Prepare Lighter and Faster for Open-Vocabulary Queries: A Query-Wise 3D Segmenter for Gaussian Splatting",
    "authors": [
      "Nhat-Quynh Le-Pham",
      "Khoi Nguyen",
      "Binh-Son Hua"
    ],
    "abstract": "Open-vocabulary 3D understanding aims to localize and segment arbitrary objects beyond predefined categories. However, existing approaches based on Gaussian Splatting often rely on expensive preprocessing and lengthy training, limiting their applicability when fast and lightweight solutions are desired. We propose a lightweight, training-free framework for query-driven 3D instance segmentation on Gaussian Splatting. Instead of conventional mask-wise CLIP embeddings, we use dense pixel-level CLIP features to preserve fine-grained semantic information and enable flexible text-driven localization without relying on predefined instance proposals. Given a text query, we identify a high-quality target region in a carefully selected pivot view and propagate it across views using a video segmentor, providing consistent and comprehensive coverage of the target instance. We then lift the resulting 2D tracklets to 3D Gaussians through a novel visibility voting strategy, yielding accurate 3D segmentation masks with clean object boundaries. Extensive experiments demonstrate state-of-the-art performance on LERF-OVS, ScanNet, and ScanNet++, competitive results on 3D-OVS, and significant speedups over existing open-vocabulary 3D segmentation methods. These results highlight the effectiveness of our framework for efficient open-vocabulary 3D understanding without per-scene training.",
    "published": "2026-11-14T14:24:34Z",
    "updated": "2026-11-14T14:24:34Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2611.19429"
  },
  {
    "id": "2611.19427",
    "title": "Memorization Lives in a Few Attention Heads: Mitigating Memorization in Diffusion Models via Projection-Based Suppression",
    "authors": [
      "Puwei Lian",
      "Yujun Cai",
      "Songze Li",
      "Yuezu Lv",
      "Guanghui Wen"
    ],
    "abstract": "Diffusion models can memorize and reproduce training samples during inference, raising serious privacy and copyright concerns. Existing inference-time mitigation methods often suppress conditional information globally, which may reduce memorization but can also harm semantic alignment and image quality. In this paper, we revisit memorization from the perspective of cross-attention heads. Through systematic analysis and targeted ablation, we find that memorization is mainly driven by a small subset of shallow-layer attention heads with abnormally strong semantic control, rather than by the entire cross-attention mechanism. Motivated by this finding, we propose Projection-based Top-k Attention Head Suppression, a targeted inference-time mitigation method. Our method first identifies the top-k attention heads most related to memorization using a semantic-control score, and then removes their condition-specific components through directional projection between conditional and unconditional representations. This design selectively weakens memorization-related features while preserving useful semantic information. Extensive experiments on different diffusion models and datasets show that our method effectively reduces memorization and achieves a better trade-off between memorization mitigation and image quality than existing approaches.",
    "published": "2026-11-14T14:22:32Z",
    "updated": "2026-11-14T14:22:32Z",
    "categories": [
      "cs.CV",
      "cs.CR"
    ],
    "url": "https://arxiv.org/abs/2611.19427"
  },
  {
    "id": "2611.18350",
    "title": "MaskSCD: Bitemporal Mask Classification for Semantic Change Detection in Remote Sensing Images",
    "authors": [
      "Weikang Yu",
      "Pedram Ghamisi"
    ],
    "abstract": "Semantic change detection (SCD) identifies where the land surface has changed and which land-cover transition has taken place. Most deep SCD networks predict the change map and the land-cover map of each date with separate per-pixel decoders. These outputs need not agree, so a pixel can be labeled as changed although it has the same class at both dates, and per-pixel decisions fragment objects. We present MaskSCD, which formulates SCD as the mask classification of a bitemporal label-pair image. Each bitemporal segment, a region of constant land-cover class pair, is predicted as one mask shared by both dates together with one class per date, and the change map is derived from the predicted class pair. This formulation keeps the change and semantic maps consistent and the label space linear in the number of classes. A bitemporal masked-attention transformer decoder implements it by reading each segment in both images and relating the two readings, and a bitemporal fusion pyramid provides per-date and change-aware features. MaskSCD is evaluated on SECOND, Landsat-SCD and Hi-UCD, which span 0.1 to 30 m resolution and four to nine land-cover classes, against fourteen recent SCD models re-trained under one protocol. MaskSCD achieves the best separated kappa, semantic change $F_1$ and transition $F_1$ on all three datasets and exceeds the strongest competitor by about five points in mean separated kappa. It produces no contradictory change pixels, which account for nearly 30% of the predicted change of some multi-task networks. The code is available at https://github.com/EricYu97/MaskSCD.",
    "published": "2026-11-13T15:58:38Z",
    "updated": "2026-11-13T15:58:38Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.18350"
  },
  {
    "id": "2611.18346",
    "title": "VLAN: Vision-Language Accessible Navigation",
    "authors": [
      "Jie Hu",
      "Yu Zheng",
      "Wenzhi Wu",
      "Weixing Feng",
      "Cunlei Cheng",
      "Jiaming Zhang"
    ],
    "abstract": "Accessible mobility is user-conditioned rather than scene-intrinsic, as walkable paths for one embodiment are inaccessible to another. Yet, existing benchmarks evaluate traversability under a fixed and limited embodiment. We present Vision-Language Accessible Navigation (VLAN), containing 1,000 scenes, 20K navigation trajectories, and 160K keyframes across diverse lighting, environmental conditions, scene semantics, and path geometries. For each trajectory, VLAN provides embodiment-specific actions and accessibility features for legged and wheeled agents, including humanoid and quadruped robots and people with visual or mobility impairments, while everyday obstacles and accessibility labels are categorized as Passable, Bypass, HighRisk, and Blocked. Unlike goal-only evaluation, our benchmark measures physical safety and alignment with user-specific constraints via goal-reaching, collision-aware, and accessibility-aligned metrics. We benchmark modern vision-language models and find they often fail to consistently adapt obstacle relevance, path selection, and safety criteria across user profiles, suggesting accessibility-aware navigation requires dedicated datasets, tasks, and metrics beyond conventional embodied navigation evaluation. All data and code open-source at https://github.com/InSAI-Lab/VLAN.",
    "published": "2026-11-13T15:54:23Z",
    "updated": "2026-11-13T15:54:23Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.18346"
  },
  {
    "id": "2611.18340",
    "title": "DIRT: Depth-completed Image-based Rendering using Two-band Blending for Live Novel-view Synthesis",
    "authors": [
      "Mathias Harrer",
      "Laura Fink",
      "Noah Lewis",
      "Paul Himmler",
      "Tim Weyrich"
    ],
    "abstract": "State-of-the-art novel-view synthesis (NVS) methods commonly require per-scene optimization before rendering, limiting their applicability in live settings. Live or ad-hoc NVS, however, demands low-latency rendering during capture and strong generalization to new scenes. Some previous work tried to address this task by adapting training- and optimization-based methods, trading quality for low latency. We introduce a live NVS approach following traditional image-based rendering that operates on a posed set of depth sensor observations and images. Our method leverages explicit, sparse point-based geometry obtained from active sensors, resulting in a sparsely filled depth buffer that is completed in the (novel) target view's screen-space. Using this proxy, a posed set of images is projected into the target frame before fusing the resulting observations through a frequency-aware two-band blending strategy. The pipeline is entirely non-neural and optimization-free, requiring no training data or scene-specific optimization. As a result, our approach reduces the delay between capture and novel-view rendering and does not rely on favorable network generalization. We validate the method's applicability to heterogeneous sensor setups - including handheld RGB-D cameras, automotive LiDAR, and thermal cameras - as well as challenging scenarios, such as low light captures. Our experiments demonstrate that the approach outperforms prior methods in live reconstruction scenarios, while maintaining competitive performance in conventional NVS benchmarks.",
    "published": "2026-11-13T15:52:43Z",
    "updated": "2026-11-13T15:52:43Z",
    "categories": [
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2611.18340"
  },
  {
    "id": "2611.18330",
    "title": "Marimba: A System One Model for Speech",
    "authors": [
      "Solano Amadori"
    ],
    "abstract": "Speech applications require decisions about term presence, turn completion, and language within an audio window. We present Marimba, an interface for typed speech decisions built on frozen Qwen3-ASR 0.6B features. Lexical questions use zero-shot scoring of ASR transcripts; non-lexical questions use a question-conditioned head and a separate layer-18 turn-end readout. Language identification uses the ASR model's own language scores. On private conversational test sets, decoder AUROC is 0.80-0.92; on public read speech it is 0.92-0.97. Speech Commands four-way accuracy is 0.93; binary lexical ECE is at most 0.08. Personal-information detection, which passes the greedy transcript to a private, curated PII pipeline, reaches item-level F1 0.904 on synthetic Brazilian Portuguese speech (1.000 on reference transcripts). Layer-12 speaker readouts detect speaker change with AUROC 0.966-0.980 on AMI and VoxConverse, above an ECAPA baseline, and count speakers (0, 1, 2, or 3+) more accurately than pyannote 3.1. The turn-end readout reaches AUROC 0.930 versus Smart Turn v3.2 at 0.982 on Smart Turn's own test set. On a subset of ICSI meetings labeled by next speaker, AUROC is 0.716 versus 0.712; the paired confidence interval includes zero.",
    "published": "2026-11-13T15:44:18Z",
    "updated": "2026-11-13T15:44:18Z",
    "categories": [
      "eess.AS",
      "cs.AI",
      "cs.CL",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2611.18330"
  },
  {
    "id": "2611.18324",
    "title": "Unlocking Cross-Attention in Label-Scarce Regimes: A Weakly Supervised Approach for Video Semantic Segmentation",
    "authors": [
      "Andrea Marelli",
      "Alessandro Ardenghi",
      "Giacomo Boracchi",
      "Luca Magri"
    ],
    "abstract": "Weakly Supervised Video Semantic Segmentation (WS-VSS) aims to learn temporally consistent semantic object masks in videos using only video-level labels. While fully supervised models successfully learn temporal relationships by means of cross-attention, training these temporal weights under weak supervision is unstable and even pushes the model below its single-frame baseline. Therefore, existing WS-VSS methods exploit temporal consistency by relying on external priors, such as optical flow. Unfortunately these cues are non-semantic, computationally expensive and noisy, degrading the supervisory signal. Instead of supervising attention weights directly or using external priors, we propose MemCAM, a WS-VSS transformer framework that learns temporal cross-attention directly through feature-space self-supervision. MemCAM introduces a CAM Propagation Algorithm that synthesizes a supervisory signal by propagating past CAMs according to patch-level feature similarities in the latent space. Specifically, we constrain their induced CAMs through a consistency objective between predicted and propagated maps, stabilizing temporal attention learning. Experiments on the YouTube-Objects v2.2 and WS$^2$ datasets demonstrate that MemCAM consistently outperforms the temporal localization and segmentation performance of WS-VSS alternatives, showing that cross-attention can be effectively trained in label-scarce video settings through internal self-supervision.",
    "published": "2026-11-13T15:38:33Z",
    "updated": "2026-11-13T15:38:33Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.18324"
  },
  {
    "id": "2611.18321",
    "title": "Causal AI-Driven Secure mmWave Beam Alignment with Defensive Variational Autoencoders",
    "authors": [
      "Nasir Khan",
      "Asmaa Abdallah",
      "Abdulkadir Celik",
      "Ahmed M. Eltawil",
      "Sinem Coleri",
      "Cicek Cavdar"
    ],
    "abstract": "Efficient and secure beam alignment is essential for mmWave communication systems. However, existing deep learning (DL)-based beam alignment methods often neglect causal relationships between inputs and outputs, resulting in limited interpretability, poor generalization, and excessive beam sweeping. Moreover, these DL solutions are vulnerable to adversarial attacks, where small perturbations in received power measurements can mislead beam classifiers. To overcome these issues, we propose a causally-aware DL framework integrating causal discovery into beam alignment. A two-stage causal beam selection algorithm learns a Bayesian graph capturing dependencies between received signal strength indicators (RSSI) as inputs and the optimal beam index as the target variable, then uses it to select a minimal set of relevant input features for the DL classifier. To mitigate adversarial attacks, we introduce a defensive variational autoencoder (DVAE) that maps potentially perturbed inputs back to their clean versions. End-to-end fine-tuning of the downstream beam classifier on the DVAE-reconstructed RSSI representations further boosts prediction accuracy. Simulation results show that causal beam selection achieves accuracy comparable to conventional methods while providing an \\(\\mathbf{829\\times}\\) lower per-sample computational cost than SHAP (Shapley Additive Explanations), a widely used explainable AI (XAI)-based feature selection method. It further reduces beam-sweeping overhead by \\(\\mathbf{59.4\\%}\\) and \\(\\mathbf{89.8\\%}\\), compared to conventional DL-based beam selection and exhaustive search, respectively. The DVAE-based defense effectively denoises adversarial inputs, sustaining 85\\% accuracy across different perturbation bounds, retains baseline performance on unperturbed RSSI inputs and surpasses defensive distillation defense scheme by 15--20\\% on average under different attack scenarios.",
    "published": "2026-11-13T15:34:32Z",
    "updated": "2026-11-13T15:34:32Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.18321"
  },
  {
    "id": "2611.18315",
    "title": "Experts Across Schemas: Agent-Guided Mixture-of-Relational-Experts for Cross-Database Generalization",
    "authors": [
      "Hiren Madhu",
      "Sukanta Ganguly",
      "Kiran Srinivasan",
      "Smita Krishnaswamy",
      "Rex Ying"
    ],
    "abstract": "Web platforms record user and item activity in relational databases whose schemas differ from platform to platform, which makes it difficult to transfer predictive models between them. Relational foundation models address this through cross-database pretraining, yet recent improvements have relied on increasingly large pretraining corpora. We ask whether a better architecture, together with features specific to the target database, can deliver comparable gains from far less pretraining data. We introduce MoREGT, a mixture-of-relational-experts graph transformer that represents both rows and cells as tokens, adds the log-ages of rows and the names of foreign-key relationships to attention, and routes cells and rows to experts by column metadata rather than by values. A label-blind LLM agent complements the model: it reads the target database's schema and column statistics and adds validated single-row derived columns, without access to labels or model scores. On 21 RelBench tasks with leave-one-database-out pretraining on six databases, the MoREGT backbone improves on the Relational Transformer pretrained on the same databases by 2.25 points of mean AUROC and 5.83 points of mean nMAE. The agent's columns raise mean AUROC from 78.45 to 79.63 and lower mean nMAE from 27.91 to 26.98, the highest means on both metrics among the compared methods, including RT-J, which pretrains on about 400 times as many databases.",
    "published": "2026-11-13T15:32:09Z",
    "updated": "2026-11-13T15:32:09Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.18315"
  },
  {
    "id": "2611.18307",
    "title": "AI for Parameter Selection in Sample-based Quantum Diagonalization",
    "authors": [
      "Doriela Grabocka",
      "Dimitrios Christofidellis",
      "Federico Zipoli",
      "Anna van Elst",
      "Patrick Ruch",
      "Antonio Foncubierta-Rodríguez",
      "Siddhartha Mishra",
      "Matteo Manica"
    ],
    "abstract": "Sample-based Quantum Diagonalization (SQD) methods provide a way to compute molecular ground-state energies, but their accuracy and runtime depend sensitively on configuration choices such as the subspace dimension, propagation timestep, and the allocation of a fixed sampling budget across circuits, for which no formal selection method exists. In this work, we explore whether oracle models can predict the quantum runtime and approximation error from the Hamiltonian and the candidate configuration. Using synthetic Hamiltonians with controllable spectral properties, we show that machine-learned models can map a Hamiltonian directly to the best-ranked configuration within a predefined grid for the SKQD algorithm, validated against classical Krylov propagation, achieving strong rank correlations between true and predicted error and runtime, Spearman $ρ= 0.969$ and $ρ= 0.905$, respectively. Extending the approach to 50 molecular Hamiltonians (20-50 qubits), with reference ground-state energies from classical calculations, we train regressors that predict the simulation error and runtime for a given molecule--configuration pair ahead of execution, and classifiers to distinguish, from 600 SqDRIFT quantum-hardware runs, whether a configuration achieves a ground-state energy within chemical accuracy ($1.6\\times10^{-3}$ Ha $\\approx 1$ kcal/mol). For the molecular Hamiltonians, the models additionally provide an a priori feasibility and resource estimate, predicting whether a molecule can reach chemical accuracy on current hardware and at what runtime, thus correctly classifying held-out molecules at the molecule level, achieving balanced accuracy 61.8% in-distribution and 100% for five larger held-out molecules.",
    "published": "2026-11-13T15:27:18Z",
    "updated": "2026-11-13T15:27:18Z",
    "categories": [
      "physics.chem-ph",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.18307"
  },
  {
    "id": "2611.18297",
    "title": "When evaluation becomes intervention in clinical AI",
    "authors": [
      "Anthony Abou Mrad",
      "Aviona Conti",
      "Samuel Schmidgall",
      "Jayanth Pratap",
      "Ruhika Iyer",
      "Joseph Kim",
      "King Shi",
      "Yann Sakref",
      "Luis M. Ahumada",
      "Lisa Knowlton",
      "Andrew M. Cameron",
      "Khyzer Aziz",
      "Jeffrey K. Jopling"
    ],
    "abstract": "AI judges, models that grade another system's output against a rubric, extend clinical review to the scale at which clinical AI writes. When teams use judge assessments to select a prompt or train a model, the judge becomes part of the intervention. Selection can then favor errors the judge overlooks. We describe what a judge's report must contain and the independent clinical test each judge-driven change needs.",
    "published": "2026-11-13T15:21:50Z",
    "updated": "2026-11-13T15:21:50Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2611.18297"
  },
  {
    "id": "2611.18293",
    "title": "PrivacyPR: A Dataset of Real-World Privacy Fixes for Benchmarking Privacy-Aware Code Review",
    "authors": [
      "Hua Yang",
      "Aditya Bhardwaj",
      "Shidong Pan",
      "Bowen Xu"
    ],
    "abstract": "Coding agents increasingly review code, yet whether they catch the privacy defects that laws such as the GDPR require software to avoid remains largely untested, partly because few datasets connect real privacy defects to their accepted fixes and review context. We present PrivacyPR, a dataset of 4,131 merged GitHub pull requests (PRs) from 1,469 repositories, created between June 2018 and January 2024. Each PR includes its commits, diffs, review discussion, and LLM-generated labels for privacy relevance, fix type, and GDPR principles. PrivacyPR provides 1,169 high-confidence privacy fixes and 1,643 non-fix PRs, together with Verified, a manually checked split of 250 privacy fixes and 250 non-fix PRs, and Small, a 100 + 100 subset for evaluation. On Verified, both annotators endorsed 72% of the LLM's GDPR-principle assignments. Beyond supporting empirical study of how privacy defects arise and are fixed, PrivacyPR provides a benchmark for privacy-aware code review on real, developer-accepted fixes. Its evaluation harness reverts each fix to reintroduce the defect. On Small, two coding agents detect only 42-51% of defects under a generic review prompt, but 88-91% when explicitly asked to check privacy, while flagging 11-15% of non-fix PRs. These results show that privacy defects can be detected by coding agents, but that detection depends strongly on review intent and comes with false alarms. Data, code, reviews, judge verdicts, and an extensible evaluation harness are publicly available at https://doi.org/10.5281/zenodo.23744765.",
    "published": "2026-11-13T15:18:33Z",
    "updated": "2026-11-13T15:18:33Z",
    "categories": [
      "cs.CR",
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2611.18293"
  },
  {
    "id": "2611.18284",
    "title": "Clean Tickets, Wrong Orders: Catching Silent Errors with a Language Model in Your Browser Tab",
    "authors": [
      "Umar Ahmed",
      "Maxim Dunaev",
      "Mohammad Nour Al Awad",
      "Sergey Ivanov",
      "Ivan Khodnenko"
    ],
    "abstract": "A small language model that turns a typed order into structure can fail in two ways. It can print something broken, which any system rejects. Or it can print a clean, well formed order that nobody placed. Our companion work calls the second kind a silent error, and it is the dangerous one. We present a web demo in which a fine-tuned 0.8B parameter model runs entirely inside the visitor's browser tab, through llama.cpp compiled to WebAssembly. No order text leaves the device. The page parses orders as the visitor types, scores every ticket with the PIZZA benchmark's own matcher ported to TypeScript, refuses anything off the menu with \"?\" so the model can face the open web, and lets visitors hunt for silent errors or try to cause one. Run in the browser on all 1,357 PIZZA test orders, the deployed model writes the same output as the server evaluation for 99.0% of them and reaches the same exact match (0.882); we also report its latency on 3 consumer laptops. Demo: https://wrong.cuyor.com",
    "published": "2026-11-13T15:13:47Z",
    "updated": "2026-11-13T15:13:47Z",
    "categories": [
      "cs.LG",
      "cs.CL",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.18284"
  },
  {
    "id": "2611.18274",
    "title": "Right Token, Right Time: From Per-Token Gating to Trajectory-Aware Activation Steering",
    "authors": [
      "Nima Eshraghi",
      "Lovedeep Gondara",
      "Sagarika Suresh",
      "Xiaotong Xu",
      "Jithin Pradeep",
      "Fanny Chevalier"
    ],
    "abstract": "Activation steering via sparse autoencoders (SAEs) enables behavioral control of large language models without task-specific fine-tuning. Yet, standard methods apply the steering signal at every generated token, displacing representations from the distribution the model was trained on and eroding generation quality. We show that \\emph{when} along a generation the intervention is applied is a decisive axis of control. We cast steering as a per-token allocation problem under a fixed budget of steerable tokens, so that methods differ only in which tokens they select, making allocation the sole variable. Within this framework we introduce two gates. The first, Contrastive Feature Projection (CFP), is memoryless and selects the tokens least aligned with the target behavior through a sparse, interpretable feature projection. The second, Closed-Loop Adaptive Bernoulli Steering (CLABS), is trajectory aware. It treats allocation as closed-loop feedback control, tracking the alignment a generation has accumulated so far and spending budget where the trajectory falls behind. On a linear steering-response model we derive an explicit gain region that guarantees closed-loop stability of CLABS and show that its integral term reduces the steady-state tracking offset. Empirically, CFP and CLABS achieve the largest behavioral shift among budgeted gates at matched budgets, with CLABS strongest under the tight budgets where allocation matters most, while best preserving fluency.",
    "published": "2026-11-13T15:06:43Z",
    "updated": "2026-11-13T15:06:43Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.18274"
  },
  {
    "id": "2611.16897",
    "title": "TokenStream: Multi-Subject Personalized Video Generation with Token-wise LoRA and Guided Attention",
    "authors": [
      "Hung Nguyen",
      "Quang Qui-Vinh Nguyen",
      "Khoi Nguyen"
    ],
    "abstract": "We introduce TokenStream, an optimization-based framework that composes independently learned subject identities in text-to-video generation without a reference-video training dataset or joint optimization of each new subject combination. Learning from a single reference image makes subject appearance difficult to separate from static-image bias, while merging independently trained adapters can mix identities. Token-wise LoRA (ToRA) restricts low-rank updates to the cross-attention value projections of subject-associated text tokens, providing a separate adaptation path for each subject. A T2V-guided stream copies queries and keys from the frozen base model during early denoising to reuse its layout and motion priors while retaining personalized values. We also introduce Multi-DB, a 30-subject, 122-prompt benchmark with appearance-free prompts and varied interactions. On Multi-DB at 1.3B, TokenStream improves identity preservation from 0.422 for DreamBooth to 0.467 and textual alignment from 0.652 to 0.688.",
    "published": "2026-11-12T14:54:14Z",
    "updated": "2026-11-12T14:54:14Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.16897"
  },
  {
    "id": "2611.16890",
    "title": "Look It Up: Multi-bit LLM Watermarking via Codebook Search",
    "authors": [
      "Jarosław Janas",
      "Paweł Morawiecki",
      "Josef Pieprzyk"
    ],
    "abstract": "Attributing short LLM-generated texts to a specific source remains challenging for existing multi-bit watermarking methods, which often require long generations or costly decoding to recover payloads reliably. We propose a codebook-based watermarking scheme that maps an $n$-bit payload to a longer $u$-bit codeword and embeds it during generation through token-level logit biasing. During extraction, the received bit sequence is matched to the nearest codeword in a precomputed secret codebook using Hamming or Levenshtein distance. Experiments show that our method achieves near-perfect recovery for 16-24 bit payloads on 200-token generations and strong performance on 127-token generations for base models. Results are weaker on some instruction-tuned models with very short texts, where low-entropy output distributions reduce embedding reliability. We also study a BCH-based variant that avoids codebook storage but generally reduces robustness. The Levenshtein variant improves resilience to deletions and light paraphrasing, while insertions and stronger rewrites remain challenging. We analyze collision probability, codeword separation, extraction time, tokenization consistency, and text quality, highlighting both the practicality and limitations of codebook-based watermarking for short-form attribution.",
    "published": "2026-11-12T14:49:23Z",
    "updated": "2026-11-12T14:49:23Z",
    "categories": [
      "cs.CR",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.16890"
  },
  {
    "id": "2611.16886",
    "title": "LLM-Assisted Verification in Dafny",
    "authors": [
      "Wieger Wesselink",
      "Kees Huizing",
      "Huub van de Wetering"
    ],
    "abstract": "Formal verification of complex algorithms requires expertise in program specification, invariant construction, mathematical proof, and the management of automated theorem provers. Although large language models (LLMs) can generate program code and proof fragments, reliably developing complete machine-checked verifications remains challenging: it requires an iterative process of constructing and validating specifications and invariants, building proofs, diagnosing solver failures, and optimizing verification performance. This paper presents a systematic ten-step workflow for LLM-assisted verification of scientific algorithms using the Dafny verification system. The workflow integrates algorithm formalization, contract development, empirical invariant validation, proof construction, bottleneck profiling, and resource-driven proof optimization. We applied the workflow using Antrhopic's Claude Opus 5 and Opus 5.5 models, combining LLM-driven development with automated testing and verification feedback, while retaining human oversight for correctness-critical decisions and strategic interventions. We evaluate the approach on 37 complex algorithms from graph theory and labelled transition systems. Notably, we verified the Hopfcroft-Tarjan triconnectivity test, demonstrating that even highly challenging algorithmic verification tasks can be carried out through a structured LLM-assisted workflow. Many of our machine-checked verifications were obtained within hours to a few days of interactive development. Our results suggest that LLM-assisted workflows can shift the role of the human verifier from detailed proof construction toward supervision, specification review, and strategic guidance.",
    "published": "2026-11-12T14:48:38Z",
    "updated": "2026-11-12T14:48:38Z",
    "categories": [
      "cs.LO",
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2611.16886"
  },
  {
    "id": "2611.16881",
    "title": "Protein Language Models Fail To Capture Contact Predictions Under Invariant Relabeling",
    "authors": [
      "Paarth Batra",
      "Aryan Keluskar"
    ],
    "abstract": "Protein language models (pLMs) produce highly accurate contact maps from single-sequence inputs. People often take this accuracy as proof that these models implicitly learn invariant coevolutionary statistics, extracting the same signals as classical alignment-based methods like Potts. In this work, we introduce a diagnostic framework around a global bijective relabeling of the amino-acid alphabet. This transformation permutes residue letters while leaving all alignment-level information, column entropies, and pairwise edit distances unchanged. Pseudolikelihood Potts models and inverse-covariance estimators remain invariant under this transformation, but pLMs fail the test. Across multiple architectures (ESM-2, MSA Transformer, AMPLIFY) and model scales (8M to 3B parameters), pLM contact maps collapse under arbitrary relabeling. Using Hamming distance controls and biochemical grouping interventions, we attempt to isolate what likely causes this degradation and find that these models rely on explicit, canonical residue identities (``alphabet anchoring'') rather than pure coevolutionary statistics. Increasing scale makes models more responsive to biochemical classes, but their performance still degrades under relabeling. Our findings show a gap between how pLMs and classical coevolutionary models compute contacts. More broadly, our work shows how diagnostic perturbations that leave classical models provably unchanged can expose hidden representation biases and prevent over-reliance on neural black boxes in biological modeling.",
    "published": "2026-11-12T14:45:07Z",
    "updated": "2026-11-12T14:45:07Z",
    "categories": [
      "q-bio.QM",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.16881"
  },
  {
    "id": "2611.16879",
    "title": "Context Graph: Explainable Multi-Agent Decision Chains in AI-RAN",
    "authors": [
      "Xijun Wang",
      "Zhaoyang Liu",
      "Xiang Chen",
      "Howard H. Yang",
      "Chenyuan Feng"
    ],
    "abstract": "AI-RAN distributes network control across multiple autonomous agents, namely xApps and rApps operating over shared radio resources. When an alert or degradation appears, operators currently lack a structured way to trace which decision caused it, what context triggered that decision, and how other agents interacted. Existing explainability tools focus on single-model feature attribution or linear event logging, neither of which captures cross-agent decision chains. We propose the Context Graph, a heterogeneous directed graph that organizes policies, measurements, decisions, and alerts into a queryable explanation layer. Its foundational primitive is the Decision-Event node acting as a causal junction, where incoming edges capture triggering context and outgoing edges track downstream consequences that are progressively upgraded through counterfactual verification. Instantiated over existing E2, A1, and O1 data flows, our proof-of-concept demonstrates that compliance and diagnosis queries are resolved at sub-millisecond latency over graphs of tens of thousands of nodes, while reliably distinguishing true causal impacts from spurious correlations.",
    "published": "2026-11-12T14:43:22Z",
    "updated": "2026-11-12T14:43:22Z",
    "categories": [
      "cs.NI",
      "cs.AI",
      "cs.IT"
    ],
    "url": "https://arxiv.org/abs/2611.16879"
  },
  {
    "id": "2611.16871",
    "title": "DPA: Decentralized Primal Averaging with Quasi-Global Momentum for Highly Heterogeneous Data",
    "authors": [
      "Diyako Ghaderyan",
      "Stefan Werner"
    ],
    "abstract": "Decentralized training of deep learning models keeps training data local and supports on-device learning over networks. In realistic scenarios, heterogeneity across agents' local data poses an optimization challenge and can severely degrade test accuracy, especially on sparse communication graphs. Building on recent advances in centralized primal averaging, we propose Decentralized Primal Averaging (DPA), a decentralized learning algorithm that combines primal averaging with a local quasi-global momentum buffer. DPA maintains three coupled sequences for optimization, gradient evaluation, and output averaging, while using consecutive mixed iterates to construct a network-aware momentum direction without transmitting an auxiliary tracking variable. For smooth nonconvex objectives, we establish a convergence bound for DPA and identify conditions for linear speedup in the number of agents for sufficiently many iterations. We also introduce DPA-1G, a variant that uses one communication round per iteration and matches the per-iteration communication cost of DSGD-style baselines. Experiments following the GUT decentralized image-classification benchmark show that DPA compares favorably with DSGD, gradient tracking, QG-DSGDm, momentum tracking, and QG-GUTm across datasets, architectures, topologies, and heterogeneity levels, with the largest gains under high heterogeneity on sparse rings. At the same total communication cost, both DPA variants achieve higher mean test accuracy than the best baseline on CIFAR-10 and CIFAR-100 with ResNet-20. Our code is publicly available.",
    "published": "2026-11-12T14:38:34Z",
    "updated": "2026-11-12T14:38:34Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.16871"
  },
  {
    "id": "2611.16869",
    "title": "Raysemble: Metric 3D Bone Reconstruction from a Single X-ray",
    "authors": [
      "Xiaoyang Li",
      "Xinghao Yan",
      "Yuan Chai"
    ],
    "abstract": "Raysemble reconstructs eight lumbar and pelvic bones from a single X-ray by separating shape and placement. Each 3D query samples regional and global features at its image projection. A shared decoder predicts normalized bone shapes. Predicted depth and camera geometry determine 3D centers and scales for resampling these shapes onto a common grid in millimeters. Evaluation uses 23 held-out patients with 43 CT scans, each generating one simulated anteroposterior radiograph. Without rigid alignment to CT,Raysemble leads 15 evaluated methods, averaging 65.24% Dice, 9.09 mm HD95, and 3.32 mm ASSD over three random seeds. With identical inputs, it improves Dice over VolumeNeRF by 5.86 percentage points.",
    "published": "2026-11-12T14:38:06Z",
    "updated": "2026-11-12T14:38:06Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.16869"
  },
  {
    "id": "2611.16861",
    "title": "Visual Cipher Bench: Benchmarking LLM Agents on Long-Horizon Visual Reasoning",
    "authors": [
      "Deyao Hong",
      "Jiayi Jiang",
      "Yuchun Chen",
      "Yixuan Shi",
      "Wenyi Li",
      "Zheng Jiang",
      "Chengxing Xie",
      "Mingyu Su",
      "Qingle Liu",
      "Mingju Gao",
      "Yizhe Chi",
      "Youjie Zheng",
      "Calvin Xiao",
      "Kaisen Yang",
      "Huan-ang Gao"
    ],
    "abstract": "While language-model agents excel at long-horizon coding and terminal tasks, this success relies on two conditions: explicit text specifications and immediate execution feedback. However, neither condition holds in real-world problems where critical information exists only in images, leaving it unclear whether long-horizon capability transfers from text to visual reasoning. In such visual settings, because rules and clues resist text transcription and lack test-case feedback, agents must repeatedly inspect images, simulate spatial transformations, and autonomously cross-check clues. Despite this challenge, existing evaluations fail to capture such capability: visual reasoning benchmarks largely reduce tasks to single-turn, short-chain question answering, whereas agent benchmarks focus on text-based environments or interactive states that permit trial-and-error. To bridge this gap, we introduce Visual Cipher Bench, a collection of 40 original visual puzzles across four categories: spatial manipulation and simulation, logical constraints and planning, rule induction, and knowledge-based decoding. Each puzzle provides only one to three black-and-white line drawings and a minimal submission instruction, requiring agents to discover the underlying solving mechanism entirely from the images. Across 29 reasoning-effort configurations of eight frontier models, even the strongest model, GPT-6 Astra (max), achieves only 26.7% accuracy, while five of the eight models score below 1%. Yet on a ten-task subset, providing a single non-spoiler mechanism hint boosts accuracy from 7.8% to 55.6%. This sharp contrast shows that the primary bottleneck of current agents lies not in executing multi-step plans, but in autonomously discovering rules from visual evidence. Visual Cipher Bench thus provides a rigorous benchmark for measuring long-horizon visual reasoning in agents.",
    "published": "2026-11-12T14:33:46Z",
    "updated": "2026-11-12T14:33:46Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.16861"
  },
  {
    "id": "2611.16840",
    "title": "Kosmo-GFM: A Production-Ready Geometry Foundation Model",
    "authors": [
      "Sheng Tang",
      "Shengzhe Wei",
      "Tiancheng Chen",
      "Wenhua Jin",
      "Xinyang Lu",
      "Tinghao Jiang",
      "Shuoxuan Feng",
      "Yupeng Liu",
      "Yu Zhang",
      "Xingshuo Chang",
      "Keren Zhou",
      "Yuhan Xiong",
      "Jiahao Li",
      "Haoming Liu",
      "Jituo Tian",
      "Hui Liang",
      "Chaoqun Tang",
      "Feng Tian",
      "Wentao Ouyang",
      "Kaojin Zhu",
      "Xiaolin Chai",
      "Peihuang Fu",
      "Miao Zheng",
      "Yunbo Hu",
      "Feixue Cai",
      "Zizhen Zou",
      "Weigang Wang",
      "Yexuan Yang",
      "Haoyu Feng",
      "Weiqi Zhang",
      "Juntong Fang",
      "Zesong Li"
    ],
    "abstract": "We present Kosmo-GFM, a scene reconstruction system that integrates a geometry foundation model (GFM), a pose optimization engine (PoseEngine), and reconstruction-derived supervision from KosmoWorld. GFM predicts camera parameters, depth, cross-view correspondences, and dynamic 3D points from images and videos. PoseEngine combines these predictions with geometric optimization to recover scene-level camera poses and geometry for downstream 3D and 4D Gaussian Splatting. KosmoWorld generates images and geometric supervision from reconstructed real-world scenes to improve GFM's geometric predictions. On the Sparse and Medium subsets of SpatialBench, GFM achieves the lowest absolute relative depth error and the highest relative-pose AUC at 5 degrees among the compared methods. It also achieves the lowest mean endpoint errors for dynamic points and scene flow across the five evaluated datasets. Across 34 scenes completed by all compared reconstruction systems, PoseEngine achieves the highest scene-averaged pose AUC at thresholds of 1, 3, and 5 degrees, with a cumulative runtime of 14.07 hours, approximately 20% of GLUEMAP's 69.67 hours. PoseEngine Flash provides a further accuracy-efficiency trade-off, with a measured mixed-precision runtime of 2.62 hours, approximately 4% of GLUEMAP's runtime. Separate scaling experiments show generally favorable trends with increased data, model computation, and training budgets. These results support the use of learned geometric priors within a scene-level reconstruction pipeline.",
    "published": "2026-11-12T14:17:22Z",
    "updated": "2026-11-12T14:17:22Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.16840"
  },
  {
    "id": "2611.16831",
    "title": "A Modular Framework for ESG Prediction through Domain-Specific Language Modeling and Graph Learning",
    "authors": [
      "Sofia Baiocco",
      "Gianluca Bonifazi",
      "Christopher Buratti",
      "Michele Marchetti",
      "Camilla Mazzoli",
      "Federica Parlapiano",
      "Giulia Quaglieri",
      "Davide Traini",
      "Domenico Ursino",
      "Luca Virgili"
    ],
    "abstract": "Environmental, Social and Governance (ESG) scores are increasingly used to evaluate corporate sustainability, supporting investment decisions, ensuring regulatory compliance and assessing risk. However, current ESG evaluations largely rely on proprietary methodologies that often produce inconsistent ratings. This motivates the development of data-driven prediction frameworks. In this paper, we present ESGPred, a modular framework for predicting ESG scores by combining domain-specific language modeling with graph-based learning over a network that models the relationships among the companies being evaluated. In addition to presenting the rationale behind ESGPred and detailing its ESG score prediction process, we show that ESGPred can effectively predict both overall ESG ratings and their individual Environmental, Social, and Governance components. We evaluated ESGPred using a dataset of 5,266 sustainability reports published by 2,134 publicly listed companies between 2020 and 2023. In this evaluation, we used ESG ratings provided by LSEG Data & Analytics as ground truth. Our experimental results demonstrated that integrating graph-based relational learning improves prediction performance over purely text-based baselines.",
    "published": "2026-11-12T14:02:59Z",
    "updated": "2026-11-12T14:02:59Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.16831"
  },
  {
    "id": "2611.16793",
    "title": "EG360: Efficient and Generalizable $360^\\circ$ Depth Estimation via Adaptive Panorama-Perspective Distillation and Spherical Cross-Level Feature Fusion",
    "authors": [
      "Laiyan Ding",
      "Chongxi Meng",
      "Rui Huang"
    ],
    "abstract": "Generalized panorama depth estimation has witnessed great advances in recent years. These methods typically achieve robust zero-shot generalization performance using large pretrained models, but their high computational cost makes real-time inference on embedded platforms challenging. In contrast, previous lightweight panorama models have mostly been developed for single-domain evaluations and cannot generalize well due to domain shifts. To reduce the gap between these two types of models, we introduce EG360, an efficient and generalizable panorama depth estimation model. Specifically, building on a lightweight depth model, we design an Adaptive Panorama-Perspective Distillation (APPD) strategy guided by scene geometry, along with a Spherical Cross-Level Feature Fusion (SCFF) module for global semantic perception. As a result, with only 6.593M parameters after reparameterization, EG360 achieves strong zero-shot performance on real-world benchmarks and runs at 35 FPS on a Jetson Orin NX 16GB in MAXN mode, whereas a previous ViT-small model runs at less than 2 FPS. Our code will also be made public for future research.",
    "published": "2026-11-12T13:38:57Z",
    "updated": "2026-11-12T13:38:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.16793"
  },
  {
    "id": "2611.16767",
    "title": "Evaluating Video LLMs' Understanding of Corner Cases in Autonomous Driving",
    "authors": [
      "Gabriel Manalu",
      "Minh Son Hoang",
      "Hyeontaek Hwang",
      "Jaesung Lee",
      "Hyojin Choi",
      "Tran Tuan Phong",
      "Seon Kwon Kim",
      "Saad Wazir",
      "Daeyoung Kim"
    ],
    "abstract": "Natural language explanations promised by modern Video Large Language Models (Video LLMs) offer autonomous driving systems a path toward detailed scene description and interpretable decision making on the road. While recent benchmarks have begun assessing these models on driving scenes, they mainly target routine traffic conditions and general comprehension tasks based on existing driving datasets and therefore fail to evaluate model performance on the rarest and most safety-critical driving events, also known as \"corner cases\". To provide a comprehensive evaluation of Video LLMs on precisely these scenarios, we introduce DashBench, a benchmark testing 25 Video LLMs on 1,709 carefully curated driving videos spanning not only collision-related corner cases but also rare non-collision ones. Through extensive prompts and open-ended question answering, we expose a critical capability gap: all evaluated models perform substantially below the threshold required for safety-critical driving applications, frequently misjudging or missing dangerous events on the road ahead and hallucinating non-existent agents or actions in their explanations. We believe DashBench, combining an extensive dataset with a rigorous evaluation toolkit and a detailed diagnosis of current model limitations, drives progress toward safer, more explainable autonomous driving systems. The code and data will be shared at: cornercase-dashbench.github.io",
    "published": "2026-11-12T13:15:27Z",
    "updated": "2026-11-12T13:15:27Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.16767"
  },
  {
    "id": "2611.15561",
    "title": "Immersive Sight-Restriction-Based Collision Prevention Using Generic Particle Systems in Virtual Reality",
    "authors": [
      "Annalisa Degenhard",
      "Annika Stampf",
      "Michael Rietzler",
      "Enrico Rukzio"
    ],
    "abstract": "Collision prevention systems (CPS) help VR users navigate their physical surroundings safely. Most approaches overlay conceptually distinct grids or add solid virtual counterparts of physical obstacles; both can reveal the physical space, as they either stand out visually or behave inconsistently during locomotion. We explore sight restriction as an alternative: a standard particle system visualizes the play area boundary as a fog-like cloud whose intensity scales with proximity and viewing direction. A pre-study (N=10) determined the distance at which the visualization must appear. In a main study (N=11), we compared this particle-based CPS with a grid-based solution, focusing on locomotion behavior: across 253 approach episodes, users interrupted their approach after a comparable distance once either visualization appeared. Although the particle boundary was visible three times as often, participants reported higher presence. We release our implementation as open source to support further work on immersive collision prevention.",
    "published": "2026-11-11T14:46:38Z",
    "updated": "2026-11-11T14:46:38Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.15561"
  },
  {
    "id": "2611.15543",
    "title": "Testing Conversation Preservation Across LLM APIs: A Rule-Based Oracle for Detecting Silent Information Loss",
    "authors": [
      "Xin Liu",
      "Xu Han",
      "Yuxin Wang",
      "Haoran Song",
      "Mingjian Zhao",
      "Lei Wang"
    ],
    "abstract": "LLM applications increasingly rely on translators and compatibility layers to move conversations across APIs. Yet a translated request can be accepted by the target API while silently losing information about instruction roles, tool interactions, error states, or generation controls. We introduce isloss, a deterministic oracle for testing conversation-information preservation across LLM API translations. It maps source and translated requests and replies to a shared intermediate representation, ConvIR, and applies explicit rules to distinguish legitimate representation changes from information loss. Unlike schema validation or reference-based differential testing, isloss requires neither a reference translation nor additional model calls. It also distinguishes avoidable loss from degradation caused by target API limitations. We evaluate isloss using specification-based fault injection, human review, and experiments on translators, gateways, and client libraries. On held-out tests, it detects 95/125 planted faults (76.0%) with 2/100 false alarms (2.0%). Across a synthetic request suite spanning six configurations of five translator codebases, 127/685 completed translations (18.5%) pass static target checks while silently changing prompt, role, or tool information in ways the target API could have preserved. In translated replies, 203/558 streams (36.4%) cause exceptions or silent corruption in at least one tested official OpenAI SDK. Targeted experiments across six models show that translation-induced changes can alter model behaviour when tasks depend on the affected information. These results establish conversation preservation as a distinct correctness requirement for reliable LLM interoperability, agent execution, and model evaluation.",
    "published": "2026-11-11T14:28:01Z",
    "updated": "2026-11-11T14:28:01Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.15543"
  },
  {
    "id": "2611.15538",
    "title": "Faithful in Steps: Improving Generalization and Citation in RAG via Query Decomposition",
    "authors": [
      "Yue Liu",
      "Zhongying Ru",
      "Shimin Di",
      "Jipeng Zhang",
      "Ruiyuan Zhang",
      "Xiaofang Zhou"
    ],
    "abstract": "Retrieval-augment generation is a prevalent strategy to mitigate hallucinations of LLMs. The attributable RAG (RAGQ) generates quotes for its answers. The quotes indicate which input contexts support the RAG to derive the answers, enhancing the answer's verifiability and trustworthiness. However, existing RAGQs exhibit significant degradation when dealing with questions that require multi-hop reasoning and multi-modal understanding, suffering from over-citation, implicit entity identification failure, and poor generalization. In this paper, we propose a novel RAGQ framework, namely QDRAG. QDRAG breaks down the input question into atomic subquestions to identify the implicit entities. Then, the reranker prunes context distractors to eliminate the downstream over-citation. To facilitate query decomposition, we propose two zero-shot approaches: QD-C and QD-R, which guide the QD MLLM to decompose the question based on context knowledge and retrieval rewards, respectively. One interesting finding is that finetuning on the QD task shows better generalizability compared to directly finetuning on the downstream RAGQ task. Experiments on four multi-modal QA benchmarks demonstrate QDRAG's efficacy in grounding answers and generating faithful citations. The framework significantly outperforms all the baselines on both in-domain and out-of-domain tests, even surpassing Gemini-Pro.",
    "published": "2026-11-11T14:22:09Z",
    "updated": "2026-11-11T14:22:09Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.15538"
  },
  {
    "id": "2611.15530",
    "title": "MAGIC: Modality-Aware Gini Inspection for Clinical Hallucination Detection in LMMs",
    "authors": [
      "Sachin Acharya",
      "Niyoj Oli",
      "Shishir Adhikari",
      "Aminu Lawal",
      "Yash Raj Shrestha",
      "Prashnna K Gyawali",
      "Binod Bhattarai"
    ],
    "abstract": "Recent advances in medical large multimodal models (LMMs) have brought promising progress to clinical decision support, yet hallucination, the generation of confident but clinically unverifiable outputs, poses a critical threat to the reliability demanded in high-stakes medical settings. Existing hallucination detection methods, predominantly designed for unimodal settings, fail to capture the visual-linguistic dynamics inherent to medical imaging. We formulate the problem of hallucination detection in LMMs as disproportionate distribution of attention weights across the modalities during answer token generation. We quantify modality-specific attention concentration across layers and heads using the Gini coefficient and demonstrate statistically significant redistribution of attention mass between visual and textual tokens in hallucinated responses. We leverage these features to train a logistic regression-based classifier and evaluate it on two medical LMMs across three medical imaging modalities, demonstrating that our method achieves competitive or superior performance against contemporary hallucination detection baselines.",
    "published": "2026-11-11T14:16:43Z",
    "updated": "2026-11-11T14:16:43Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.15530"
  },
  {
    "id": "2611.15526",
    "title": "SCR-Mamba: Skeleton-conditioned Mamba with cross-scale incremental refinement for efficient 3D human pose estimation",
    "authors": [
      "Jie Wang",
      "Xuejing Gu",
      "Congzhe Zhang",
      "Zibo Zhao"
    ],
    "abstract": "Mamba-based methods for video-based 3D human pose estimation can model long sequences with linear complexity, but their selective state updates usually lack direct exploitation of skeletal relations. Meanwhile, stacking modeling blocks at the full temporal resolution leads to high computational overhead, while compressing the temporal sequence makes it difficult to retain per-frame details. To address these issues, we propose SCR-Mamba, whose core consists of Skeleton-Conditioned State Modeling (SCSM) and Cross-Scale Incremental Refinement (CSIR). SCSM generates a skeleton context from bone connections and left-right symmetry relations and generates the selective parameters of the spatial and temporal branches conditioned on it, so that structural relations are involved in the writing, propagation, and reading of state information. CSIR constructs multi-scale motion representations through content-adaptive aggregation and progressively refines the retained per-frame features with the increments produced by coarse-scale modeling, integrating long-range motion context while reducing full-resolution computation. On Human3.6M with Stacked Hourglass (SH) 2D detections and 243-frame inputs, SCR-Mamba-L achieves 36.8 mm MPJPE (P1) with 7.72 M parameters and 15.10 G MACs, less than 1/7 of the computational cost of StructMamPose-L with similar accuracy; SCR-Mamba-X further reaches 36.6 mm P1 and 30.9 mm P-MPJPE (P2), achieving state-of-the-art performance. On MPI-INF-3DHP, SCR-Mamba-X achieves a percentage of correct keypoints (PCK) of 99.3%, an area under the curve (AUC) of 88.1%, and an MPJPE of 14.2 mm.",
    "published": "2026-11-11T14:14:27Z",
    "updated": "2026-11-11T14:14:27Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.15526"
  },
  {
    "id": "2611.15524",
    "title": "Reading the Table: Sim-to-Real Game State Detection for the Chef's Hat Card Game",
    "authors": [
      "Connor Gäde",
      "Matthias Kerzel",
      "Hauke Bünning",
      "Jan-Gerrit Habekost",
      "Mariana Barros",
      "Stefan Wermter"
    ],
    "abstract": "Tabletop games offer a compelling scenario to study the interaction between artificial and human agents, combining social interaction with game state tracking and physical manipulation. To assess the game state, a robot needs to precisely detect closely related game objects, such as different card designs, requiring dedicated training data that is costly to annotate in the real world. Instead, we develop a fully automated synthetic data collection pipeline, using re-projection of known 3D coordinates to generate labels automatically and domain randomization to bridge the reality gap. This approach is used to collect a dataset of 25413 samples to finetune an object detection and a segmentation model, which are combined to assign detected cards to game-relevant zones and infer the game state. When evaluated on a real NICO humanoid robot, our pipeline achieves an F1-score of 0.906 for card-to-zone assignment, thus providing the perceptual foundation for a robot that can autonomously play Chef's Hat against human players.",
    "published": "2026-11-11T14:14:19Z",
    "updated": "2026-11-11T14:14:19Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.15524"
  },
  {
    "id": "2611.15523",
    "title": "An Approach to Hinton's Mother-Child Proposal: Neural Networks Learning and Preserving Care in a Finite World",
    "authors": [
      "Csaba Balogh"
    ],
    "abstract": "Hinton proposed that artificial intelligence should be given \"maternal instincts\" and relate to us as a mother to her child. We argue that care must first be learned, with the network itself as the child. We construct this upbringing in a finite world and study whether care survives the mother's departure, new situations and further learning. The mechanism combines a vocabulary of harm, a learned measure of future acceptability and an execution veto. A finite role certificate supports transfer within a declared world family. When the hidden representation changes, an update is accepted only if a care readout recovers the required judgements with a prescribed margin and bounded weights. With a correct successor model, fixed exact role encoding and protected updates, the certified measure preserves the care boundary under arbitrary own reward. An explicit quotient condition transfers the finite certificate across the declared family, while two-request and finite-stock counterexamples identify when the role code ceases to suffice. We give a necessary and sufficient condition for readout feasibility and prove preservation under repeated accepted updates. In the water-and-speech experiment, protected networks complete all 270 speech episodes without a harmful word and incur no avoidable harm across 486 episodes. Execution uses the learned gate without a world-model check at each action. A matched comparison reproduces a future-aware shield's decisions, whereas removing future lookahead permits avoidable lapses. Reward and source-contamination thresholds, together with witness-falsification trials, identify the conditions on which the construction depends. The construction shows how learned care can survive further learning in a finite world under explicit conditions on representation, supervision and execution.",
    "published": "2026-11-11T14:14:17Z",
    "updated": "2026-11-11T14:14:17Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.NE"
    ],
    "url": "https://arxiv.org/abs/2611.15523"
  },
  {
    "id": "2611.15522",
    "title": "GHAgentCI: A Dataset of Coding-Agent Invocations in CI Workflow Histories",
    "authors": [
      "Daniel Ogenrwot",
      "Jorge Gonzalo Delgado Cervantes",
      "Woojoong Kim",
      "John Businge"
    ],
    "abstract": "Coding agents are increasingly integrated into GitHub Actions to review pull requests, triage issues and modify code. Identifying these integrations is challenging because agentic workflows often resemble ordinary CI files, with evidence appearing in action references, shell commands and workflow conventions. We present GHAgentCI, a dataset of 15K+ workflow histories from 6K+ of 196K+ mined GitHub repositories, comprising 159K+ revisions and 205K+ agent-evidence records linked to workflow triggers and declared execution constraints. Our open-source extractor, cai-miner, detects agent-related evidence using an extensible catalogue. Manual validation of 576 stratified records confirmed 96.1% of dedicated-action matches and 98.8% of GitHub Agentic Workflow matches, with lower rates for other evidence kinds. Exploratory analyses reveal a shift toward command-line and GitHub Agentic Workflow integrations, differences in declared safeguards, and frequent removal of detected agentic workflows. GHAgentCI supports longitudinal studies of coding-agent integration into CI.",
    "published": "2026-11-11T14:13:33Z",
    "updated": "2026-11-11T14:13:33Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.15522"
  },
  {
    "id": "2611.15521",
    "title": "DecArena: Evaluating Large-Scale Decentralized Multi-Agent Collaboration",
    "authors": [
      "Jiali Cheng",
      "Oleg Rokhlenko",
      "Joo-Kyung Kim",
      "Hadi Amiri",
      "Xingzhi Guo"
    ],
    "abstract": "Emerging personal AI agents raise fundamental scalability and privacy concerns for centralized multi-agent systems (MASs), which rely on a global orchestrator with broad access to agents, resources, and communication. In decentralized environments, global visibility is unavailable. Agents need to proactively discover non-local resources (e.g. tools, skills), and collaborate with other agents to solve tasks. We study decentralized multi-agent collaboration under graph-constrained communication, a natural reflection of human structures. Each agent observes only its local state and can interact only with neighboring agents. We introduce a benchmark with synthetic scalable distributed tool calling with 100K+ tools. Our experiments reveal that recent LLM agents struggle to discover non-local relevant resources and collaborate in decentralized setting. Moreover, standard reinforcement learning fails to reliably overcome this limitation, suggesting that decentralized MAS needs more explicit harness mechanisms for effective collaboration, even using SOTA LLMs. We then present a strong baseline \\textbf{GraphHarness}, combining topology-aware warmup with self-improving LLM-based routing. Results show that GraphHarness substantially improves task success (+48.5) and produces higher quality collaboration (+30.6), while using fewer costs (+34.0) than baselines.",
    "published": "2026-11-11T14:13:26Z",
    "updated": "2026-11-11T14:13:26Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.15521"
  },
  {
    "id": "2611.15515",
    "title": "Incentive-Responsive Agents: A Principal-Agent Framework, Metric Suite, and Runtime Architecture for Long-Lived Personal AI Agents",
    "authors": [
      "Jipu Su"
    ],
    "abstract": "Personal AI agents now persist: they hold accounts, mailboxes, long-term memory, and open-ended task streams, yet the dominant way to improve them remains capability-side: prompt engineering, larger models, longer thinking, and retrieval. We argue that long-lived agents are missing an incentive layer. We formalize an incentive not as text in a prompt but as a runtime contract over the agent's operating point (model tier, test-time compute, memory budget, tool authority, task priority, verification, and compensation) that the agent's policy must causally consume. We develop a principal-agent model with hidden effort, a contractible operating point, and costly verification. We derive (i) a non-consumption invariance principle separating genuine incentives from prompt-level persuasion, (ii) a persistence-as-discount theorem making identity continuity a precondition for sustained effort, (iii) an incentive-capability exchange-rate frontier yielding a per-task routing rule, and (iv) a Goodhart bound for multi-channel verification, plus a three-channel decomposition of mechanism gains (allocation, verification, continuation). A 240-run real-LLM experiment with two models and 60 verifiable tasks shows that prompt-level incentive framing has no detectable effect (p = 0.62), whereas runtime allocation raises success on the hardest task family from 0.60 to 1.00 (p = 0.008) at 4.8x price-weighted cost; the exchange-rate theorem predicts the break-even baseline at 0.21. A 20-seed, 3,000-task simulation shows resource ROI rising from 7.09 to 16.67 and gaming falling from 0.333 to 0.115. Code, simulator, and all results are released; live deployment remains future work.",
    "published": "2026-11-11T14:09:13Z",
    "updated": "2026-11-11T14:09:13Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2611.15515"
  },
  {
    "id": "2611.15514",
    "title": "Real Pairs Are Not Enough: Physically Anchored Supervision for Volumetric CT Super-Resolution",
    "authors": [
      "Haoran Liu",
      "Zipei Yan",
      "Mingzhe Liu",
      "Jizhou Li",
      "Guibin Zan"
    ],
    "abstract": "Volumetric CT super-resolution (SR) models are commonly trained on synthetic or physically acquired pairs of low-resolution (LR) and high-resolution (HR) volumes. However, synthetic pairs miss real acquisition effects, whereas registered physical pairs retain inter-scan noise, artifact, and microstructure differences---causing direct voxelwise regression, and even naive synthetic-real mixing, to oversmooth fine porous structures. We introduce the Physically-anchored Implicit Network (PIN) with Real-Pair Dual-Anchor learning, which decouples physical-pair supervision into two complementary roles. The HR anchor teaches fine structure from registered HR through pair-conditioned spectral replay, while the LR anchor constrains the prediction from acquired LR via affine-calibrated low-pass projection. Together with exact synthetic supervision in one shared volumetric implicit model, PIN learns from both physical scans without forcing the acquired-LR reconstruction to match registered HR voxel by voxel. Inference requires only acquired LR. Across 30 external baseline configurations on real CT, PIN achieves the lowest full-volume LPIPS, reduces average symmetric surface distance by 42.3-49.5% and bone-volume-fraction error by 52.2-53.4% relative to the three strongest baselines for each metric, and lowers the erased reference-pore volume fraction from 37.3-72.9% to 10.4%. Code, pretrained models, and evaluation scripts will be publicly available.",
    "published": "2026-11-11T14:08:20Z",
    "updated": "2026-11-11T14:08:20Z",
    "categories": [
      "cs.CV",
      "eess.IV"
    ],
    "url": "https://arxiv.org/abs/2611.15514"
  },
  {
    "id": "2611.15507",
    "title": "ReShap: Interpretable Reinforcement Learning for High-Dimensional Multi-Action Settings",
    "authors": [
      "Yiyu Qian",
      "Pengfei Guo",
      "Liyuan Zhao"
    ],
    "abstract": "Deep Reinforcement Learning (RL) plays a crucial role in tackling complex tasks, yet its reliance on deep neural networks makes the learned policies opaque. To enhance the trustworthiness of RL policies, existing work (e.g., the SILVER framework [Li et al., 2025]) has focused on Shapley-based interpretability, but is typically restricted to low-dimensional state spaces, binary-action settings, and a single class of linear surrogate. We propose ReShap, a policy-distillation framework that extends Shapley-based interpretability to high-dimensional, multi-action environments. ReShap extracts compact feature representations from raw image observations, performs SHAP-based feature attribution to characterize how each feature contributes to the policy's decisions, and distills the deep RL policy into an interpretable surrogate trained on the full set of (state, policy-action) pairs along the policy's visited distribution. We instantiate the surrogate with three interpretable model families (decision trees, linear regression, and logistic regression) and compare their fidelity and task return. We evaluate ReShap on Atari and Box2D environments using three deep RL algorithms and conduct a human-subject study to assess the clarity and trustworthiness of the resulting policies. Results show that ReShap preserves competitive task performance, that decision trees generally outperform linear and logistic regression, and that linear regression is weakest in most settings.",
    "published": "2026-11-11T14:02:55Z",
    "updated": "2026-11-11T14:02:55Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.15507"
  },
  {
    "id": "2611.13940",
    "title": "Tailoring Optimization Approaches with Domain Knowledge in Industry Process for Meta-heuristic Development",
    "authors": [
      "Jakub Cebula",
      "Konrad Gmyrek",
      "Paweł B. Myszkowski",
      "Marko Đurasević",
      "Łukasz P. Olech",
      "Adam Paliszek-Saładyga"
    ],
    "abstract": "The paper presents an Industry Process for Meta-heuristic Development (IPMD) schema, a systematic methodology for applying meta- and hyper-heuristic applications to optimization problems. In this context, we present a case study of Balancing Non-dominated Tournament Genetic Programming (BNTGP) applied to solve two NP-hard multi-objective optimization problems: routing (Capacitated Vehicle Routing Problem with Time Windows) and scheduling (Multi-Skill Resource Constrained Project Scheduling Problem). The BNTGP method is based on a metaheuristic design. Its genetic programming-based representation makes BNTGP a hyper-heuristic, as it enables the exploration of a search space of heuristics for solving problems in general. The resulting heuristic can then be applied across a set of problem instances.",
    "published": "2026-11-10T11:24:26Z",
    "updated": "2026-11-10T11:24:26Z",
    "categories": [
      "cs.NE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.13940"
  },
  {
    "id": "2611.13935",
    "title": "MEOW: Medical Open-World Interactive Segmentation",
    "authors": [
      "Philip Matthias Winter",
      "Maria Wimmer",
      "Bernhard Schäfl",
      "David Major",
      "Dimitrios Lenis",
      "Astrid Berg",
      "Theresa Neubauer",
      "Ariharasudhan Muthusami",
      "Johannes Novotny",
      "Georg Zotti",
      "Katja Bühler"
    ],
    "abstract": "In open-world recognition, machine learning models not only make predictions on unknown structures (\"generalized open-set\"), but also continually learn and improve from those predictions over time. Interactive segmentation, despite its access to user feedback, has so far remained confined to the open-set setting. In this work we introduce MEOW, the first framework that turns non-interactive segmentation backbones into interactive open-world learners without updating learnable model parameters. MEOW combines parameter-free transductive reasoning with memory consolidation to accumulate knowledge and thereby improve future performance. Focusing on medical data, we show that MEOW consistently improves its own predictions on classes never seen during training, and transfers zero-shot to unfamiliar domains, including micro-CT data and other imaging modalities.",
    "published": "2026-11-10T11:21:59Z",
    "updated": "2026-11-10T11:21:59Z",
    "categories": [
      "cs.CV",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2611.13935"
  },
  {
    "id": "2611.13933",
    "title": "The Case for AI-Enabled Gate Monitoring as Farm Security in the UK: A PRISMA-Guided Review of the Evidence on Rural Crime, Livestock Predation and Farm Access",
    "authors": [
      "Steve Symes",
      "Paul Fergus",
      "Mark Carr",
      "Omar McIver",
      "Arwyn Jones"
    ],
    "abstract": "Farm security in the UK rests on thinner evidence than its cost suggests. We ran a PRISMA guided review: twelve searches of Web of Science and Scopus on 2nd -4th November 2026 returned 1,183 records (761 unique), and grey-literature and hand-searches added 35 assessed sources. We synthesised 96 database records and 24 grey sources narratively. UK peer-reviewed evidence is small (16 records), and the main UK survey of crime and farmer mental health has 80 responses. Cost estimates rest on insurer claims: NFU Mutual put UK rural crime at £41.5 million in 2025, with livestock theft up almost 30% to about £4.5 million and dog attacks on livestock costing £1.95 million. The Home Office states that agricultural crime cannot be separately identified in its central data. We found no independent evaluation of cameras, sensors, trackers or marking; light and sound deterrents lost effect within one to five months in a systematic review of anti-predator interventions; and no study examined how often farm gates are left open or what follows. Camera-trap AI papers report accuracy on ecological datasets, none at a farm gate in the records we found, and in one comparison machine learning detected 41% of wildlife against 81% for analysts. We argue, as an inference from these gaps and not as a demonstrated effect, that continuous gate-level AI-mediated monitoring, as implemented in Fieldmark AI, would be highly beneficial for UK farm security. It would create the farm-level, time-stamped record that no official source holds, verify events that periodic human checks miss, resolve whether foxes, dogs or people were responsible, and give every other security measure something to be tested against. No study has yet shown that it reduces loss, and we set out the evaluation needed to show it.",
    "published": "2026-11-10T11:20:39Z",
    "updated": "2026-11-10T11:20:39Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.13933"
  },
  {
    "id": "2611.13931",
    "title": "TAPCO-G: LLM-Guided Design-Adaptive Timing and Power Co-Optimization with Graph-Based Physical Priors",
    "authors": [
      "Wuqian Tang",
      "Zixiao Wang",
      "Che-Chien Lin",
      "Fong-Hua Fu",
      "Laura Angélica Shion-Korsak",
      "Xinyun Zhang",
      "Bei Yu",
      "Chun-Yao Wang"
    ],
    "abstract": "Post-placement timing and power co-optimization is critical to meeting setup timing targets and reducing power within placement constraints. A cell replacement can improve timing along one path while increasing power or reducing slack on others. Conventional optimizers follow fixed rules for scheduling and accepting repairs, limiting their ability to address design-specific bottlenecks. A large language model (LLM) can propose changes to these rules, but on its own it cannot reliably estimate how a cell replacement affects endpoint slack and power. TAPCO-G combines LLM-guided optimizer adaptation with graph-based physical priors to evaluate candidate cell replacements. The outer loop tunes tool settings using physical-design feedback and revises executable repair policies when tuning stalls. The inner loop anchors delay estimates to static timing analysis snapshots, accounts for upstream driver-load changes, and propagates delay shifts to timing endpoints. It combines these estimates with coarse-to-fine power screening to prioritize candidates for physical trials. TAPCO-G produced placement-legal, logic-equivalent implementations and outscored CERBERUS on all eight ASAP7 benchmarks from the MLCAD 2026 Contest, with a mean quality score gain of 5.516 points, and scored 21.648 points higher than TAPCO on average. These results demonstrate the effectiveness of the proposed co-optimization framework.",
    "published": "2026-11-10T11:19:50Z",
    "updated": "2026-11-10T11:19:50Z",
    "categories": [
      "cs.AR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.13931"
  },
  {
    "id": "2611.13926",
    "title": "Beyond Proxy Metrics: MLLMs as Human Surrogates for Explainable AI Evaluation",
    "authors": [
      "Eoin M. Kenny",
      "Salim I. Amoukou",
      "Tom Bewley"
    ],
    "abstract": "Explainable AI (XAI) has expanded into a broad and impactful research area, but the fundamental question of how best to evaluate explanation techniques has proven frustratingly elusive. Methodologies typically revolve around either proxy metrics which tell us little about the utility of an explanation, or human evaluation which---while generally considered the gold standard---is expensive, difficult to scale, and challenging to reproduce. In this paper, we investigate if Multimodal Large Language Models (MLLMs) can act as surrogate human participants to automate the evaluation of XAI. To do this, we first propose a ``purpose-grounded'' evaluation framework with metrics applicable to both MLLMs and human users alike. Then, we offer some conceptual insights as to why and when we can trust these models to automate this process. Lastly, we conduct extensive empirical testing across five purpose-grounded areas such as model improvement and fourteen popular MLLMs. Results indicate that all models trend positively, but OpenAI and Qwen models generally show higher alignment compared to other variants, which would be the recommended choices in practice. We expect our insights not to replace user testing, but rather to help XAI researchers complement their current evaluation methodologies and move the field away from heavy reliance on proxy metrics for measuring explanation utility.",
    "published": "2026-11-10T11:15:28Z",
    "updated": "2026-11-10T11:15:28Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.13926"
  },
  {
    "id": "2611.13922",
    "title": "Domain-Invariant and Language-Model-Assisted Acoustic Side-Channel Attacks on Keyboards",
    "authors": [
      "Bikrant Bikram Pratap Maurya"
    ],
    "abstract": "Acoustic side-channel attacks (ASCA) recover typed text from the sound of keystrokes, using only a commodity microphone and no access to the victim's device. Prior work establishes that such attacks succeed under idealized laboratory conditions - a single keyboard, a fixed microphone, a quiet room, and training and testing on the same device but leaves open the question that matters for security: whether keystroke inference survives the open world of unseen keyboards, diverse users, noisy environments, and compressed transmission channels. The answer developed here is that it does, provided the acoustic model is made explicitly domain-invariant and its noisy predictions are corrected by a language model.",
    "published": "2026-11-10T11:10:42Z",
    "updated": "2026-11-10T11:10:42Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.13922"
  },
  {
    "id": "2611.13920",
    "title": "CAppleNet: A Coordinate Attention-Based YOLO11 for Real-Time Apple Stem Cavity and Calyx Detection",
    "authors": [
      "Alican Güneş",
      "Robert Selim Hill",
      "Gökhan Hasanoğlu",
      "Murat Kurt"
    ],
    "abstract": "Automated fruit grading, sorting, and orientation systems require real-time, accurate detection of fruit-level morphological landmarks rather than the fruit boundary alone. This paper presents a custom, fully self-collected and self-annotated dataset of 1506 apple images (1054 training, 301 validation, 151 test) captured under controlled, fixed-camera conditions and annotated for three target classes: fruit body, stem cavity, and calyx. A YOLO11s detector trained with default hyperparameters is adopted as the baseline, and a systematic, one-factor-at-a-time ablation study is conducted across input resolution, data augmentation policy, optimizer configuration, and lightweight architectural enhancement to identify the factors that most improve detection of these fine-grained landmarks under high inter-cultivar color and texture variability. Neither increased input resolution, nor any of six tested augmentation variants, nor manual optimizer tuning improved on the untuned baseline (F1 = 0.9047); only a same-slot architectural substitution of the backbone's C2PSA block with Coordinate Attention (CA) matched the baseline's overall F1 (0.9038) while reducing parameter count by 10.2% and achieving the study's best mAP@0.5 (0.935) and best stem-cavity F1 (0.8217). A confidence-threshold sweep identified 0.15 as the deployment operating point for this model, and a confirmatory experiment combining the CA-swap architecture with the best-performing augmentation variant showed the two effects do not combine additively, reversing the architectural gain rather than compounding it. The resulting design recommendations --- the CA-swap architecture alone, at a 0.15 confidence threshold --- target real-time apple landmark detection for orientation-aware industrial sorting and alignment systems.",
    "published": "2026-11-10T11:08:44Z",
    "updated": "2026-11-10T11:08:44Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.13920"
  },
  {
    "id": "2611.13914",
    "title": "From Counterfactual Edits to Human Narratives: LLM-Driven Interpretations for Recommender System Explanations",
    "authors": [
      "Vojtech Cahlik",
      "Amir Reza Mohammadi",
      "Rodrigo Alves",
      "Pavel Kordik",
      "Eva Zangerle"
    ],
    "abstract": "Recommender systems increasingly influence what users discover and consume online, yet the decision logic behind their outputs often remains opaque. Counterfactual explanation (CFX) methods provide an effective way to show which changes to a user's interaction history would alter a recommendation. In recommendation settings, however, CFXs often require many edits, producing long, low-level lists that are hard for users to interpret. Moreover, most evaluations emphasize edit counts while largely overlooking whether the resulting CFXs are coherent and actionable for users. We argue that this gap between generating valid CFXs and communicating model behavior stems from the lack of user-centered abstraction and limited qualitative evaluation. To bridge this gap, we investigate large language models as mediators that summarize raw CFX interaction edit lists into concise natural language explanations describing higher-level preference patterns. We optimize these mediators for correctness, informativeness, and linguistic quality through preference optimization, and evaluate the resulting explanations with human-calibrated metrics derived from separate human-labeled datasets. On the MovieLens-1M dataset, across multiple counterfactual generators and language models, the resulting summaries achieve high overall linguistic quality, while the strongest semantic results are obtained with high-success CFX methods such as ACCENT and SPINRec. Direct Preference Optimization improves the semantic metrics in almost all evaluated settings.",
    "published": "2026-11-10T11:05:19Z",
    "updated": "2026-11-10T11:05:19Z",
    "categories": [
      "cs.AI",
      "cs.IR"
    ],
    "url": "https://arxiv.org/abs/2611.13914"
  },
  {
    "id": "2611.13912",
    "title": "MicroBT: Centroid-Guided Synergistic Learning for Multi-Modal Micro Brain Tumor Segmentation and Counting",
    "authors": [
      "Zhenye Lou",
      "Qing Xu",
      "Stefanie Thust",
      "Dorothee P. Auer",
      "Zhen Chen",
      "Wenting Duan"
    ],
    "abstract": "Multi-modal brain tumor segmentation is essential for clinical diagnosis, radiotherapy planning, and longitudinal monitoring. While recent studies have achieved remarkable overall segmentation performance, they rely on overlap-based objectives that inherently favor large regions, causing sub-3 mm micro-lesions to be systematically suppressed during training. Moreover, existing pixel-level segmentation frameworks lack explicit instance-level modeling, leading to unreliable lesion counting that directly impacts clinical staging and therapeutic decisions. To address these challenges, we propose MicroBT, a unified multi-modal framework for micro brain tumor segmentation and counting. Our core insight is that a fundamental geometric property is inherently scale-invariant: regardless of size, each lesion possesses a well-defined centroid. Leveraging this, we first devise a centroid-anchored synergistic paradigm that utilizes predicted centroids as shared anchors to simultaneously condition dense segmentation and instance-level localization. To counteract the tumor size imbalance, we further devise a Volume-Calibrated Loss (VC-Loss) that adaptively amplifies the gradient contribution of micro-lesions, alongside a Size-Aware Curriculum Optimization (SACO) that stabilizes multi-task training by establishing global representations before progressively unlocking fine-grained localization. Extensive experiments demonstrate that MicroBT outperforms state-of-the-art methods, particularly on metastases, where micro-lesion ($\\leq 3$ mm) localization precision improves by approximately 7% and counting estimation errors decrease by approximately 26%. The code is available at https://github.com/leonlou921/MicroBT.",
    "published": "2026-11-10T11:04:43Z",
    "updated": "2026-11-10T11:04:43Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.13912"
  },
  {
    "id": "2611.13911",
    "title": "Adapting a Vision Foundation Model for Fracture Characterization in Acoustic Image Logs",
    "authors": [
      "Guangyu Wang",
      "Xiaodong Ma",
      "Xinming Wu"
    ],
    "abstract": "Natural fractures (NFs) and drilling-induced tensile fractures (DITFs) in acoustic image logs provide insights into rock mass structure and in situ stress, but manual characterization is time-consuming. Deep learning can automate this task, although expert-labeled data are scarce. We investigate whether adapting a pretrained vision foundation model (VFM) outperforms task-specific models trained from scratch with limited annotations. Using 80 annotated acoustic image samples, we fine-tuned DINOv3, pretrained on satellite imagery, and evaluated it on four boreholes excluded from fine-tuning. The adapted model estimated NF and DITF parameters comparably to human interpretation. Relative to U-Net, YOLOv8, and Swin Transformer models trained from scratch, it yielded fewer false positives and negatives and more accurate fracture counts and orientations. However, its performance advantage generally narrowed as training sample size decreased. We also assessed decoder architecture, fine-tuning strategy, and image enhancement. A progressive upsampling decoder with full fine-tuning performed best among the DINOv3 configurations tested, while fracture-focused image enhancement did not consistently improve accuracy. These results demonstrate the potential of VFM adaptation for fracture characterization in acoustic image logs with limited labeled data and suggest a transferable workflow for other annotation-scarce geoscientific imaging tasks.",
    "published": "2026-11-10T11:04:27Z",
    "updated": "2026-11-10T11:04:27Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.13911"
  },
  {
    "id": "2611.13907",
    "title": "EVAThink: Evidence Sufficiency-Guided Training for Adaptive Thinking in Video Understanding",
    "authors": [
      "Changti Wu",
      "Ruizhe Fan",
      "Bin Wang",
      "Lei Zhang",
      "Yuxiang Zhang"
    ],
    "abstract": "Under a fixed frame budget, video understanding with vision-language models (VLMs) depends on whether the sampled frames provide sufficient evidence for the question. Sufficient frame evidence supports direct answering, whereas less informative observations may benefit from reasoning that connects the available cues. We introduce EVAThink, which enhances video understanding through evidence sufficiency-guided training for adaptive thinking. First, Recoverable Evidence Gap Mining constructs evidence-dense and evidence-sparse video views that share the same question and answer under an identical frame budget. It retains pairs where sparse views yield lower direct-answer accuracy than dense views but benefit from explicit reasoning, providing supervision for response-mode selection. Second, Evidence-Guided Two-Stage Reinforcement Learning uses stage-specific rewards to guide training with evidence-based mode preferences and then refine response efficiency, while first-token advantage regularization mitigates mode collapse. Trained on only 6.7K curated samples, EVAThink consistently improves upon the base model across video understanding benchmarks under both 32- and 64-frame budgets, while outperforming strong baselines on average. The code, model, and datasets are available at \\href{https://github.com/ChangtiWu/EVAThink}{EVAThink}.",
    "published": "2026-11-10T11:01:57Z",
    "updated": "2026-11-10T11:01:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.13907"
  },
  {
    "id": "2611.13906",
    "title": "Target Selection with a Disappearing-Stimulus Mixed-Reality P300 Interface: Feasibility and Object-Distinguishable Versus Uniform Cues",
    "authors": [
      "Runqi Pan",
      "Takuto Niinuma",
      "Yunshan Huang",
      "Masato Sugino",
      "Kenta Shimba",
      "Kiyoshi Kotani"
    ],
    "abstract": "Mixed-reality (MR) P300 interfaces can register selectable destinations, such as wheelchair goals, directly in the user's surroundings. When the cues disappear between flashes, however, the user must retain an intended target that is no longer visible. We tested whether such an interface supports target selection and whether giving each cue a stable colour-shape identity improves it compared with visually uniform spheres. Six healthy adults completed four trials in each cue condition of a 5x5 row/column task on a head-mounted MR display, with EEG from Fz, Cz, and Pz. Shrinkage linear discriminant analysis was evaluated with nested validation in which complete trials were held out from class balancing, hyperparameter selection, and fitting. Both conditions evoked a parietal target-related positivity. The decoded cell was correct in 18 of 48 held-out trials, against 1.9 expected by chance (binomial p < 1e-12), and in three participants individually. Cue format made no detectable difference: complete-target accuracy was 9/24 in both conditions (paired difference 0.0 percentage points, 95% CI [-37, 37]), and held-out AUC was 0.609 for spheres and 0.585 for object cues. Disappearing-stimulus MR P300 selection is therefore feasible under strict trial-level evaluation, but the benefit of object identity, if any, is too small to resolve in a pilot of this size.",
    "published": "2026-11-10T11:01:32Z",
    "updated": "2026-11-10T11:01:32Z",
    "categories": [
      "cs.LG",
      "cs.HC",
      "eess.SP"
    ],
    "url": "https://arxiv.org/abs/2611.13906"
  },
  {
    "id": "2611.12332",
    "title": "Do Machine Learning Models Predict?",
    "authors": [
      "Michele Pizzochero",
      "Emanuele Ratti"
    ],
    "abstract": "Machine learning (ML) models are said to predict. Philosophers draw a line between accommodation and prediction, depending on whether or not the evidence a theory succeeds on was used in constructing it. Does this distinction survive when a theory is replaced by an ML model? We argue so, yet the dividing line becomes fuzzy. Whether an output of an ML model counts as an accommodation or as a prediction hinges upon the relationship between the patterns the input instantiate and those on which the model was selected through its training. Once this relation is taken into account, most successful outputs of ML models, we suggest, bear a strong accommodation character. We further trace the consequences of our account for confirmation, novelty, and scientific realism.",
    "published": "2026-11-09T12:51:18Z",
    "updated": "2026-11-09T12:51:18Z",
    "categories": [
      "cs.CY",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.12332"
  },
  {
    "id": "2611.13046",
    "title": "SpatialSR: Spatial Resolution-Centric Pipeline for Arbitrary-Scale Remote Sensing Super-Resolution",
    "authors": [
      "Yan Zhang",
      "Runfeng Luo",
      "Liangke Gao",
      "Lin Yuan",
      "Bin Xiao",
      "Xinbo Gao"
    ],
    "abstract": "Although remote sensing image arbitrary-scale super-resolution (RSI-ASSR) methods support reconstruction at arbitrary or continuous scales, they predominantly condition on the relative scale factor and have not sufficiently investigated the absolute spatial resolution itself as a reconstruction prior, thereby disregarding the inherent spatial context of objects, which frequently leads to spatial-related distortions and compromised performance in downstream remote sensing applications. To address these challenges, we introduce SpatialSR, a SRe-centric arbitrary-scale RSISR method that leverages the spatial resolution (SRe) of remote sensing images (RSI) as an essential prior for super-resolution reconstruction. Distinct from existing SR methods, SpatialSR aims to restore high-resolution remote sensing images with a target SRe (typically set to 0.1m/pixel to align with the metadata of commonly used downstream task datasets). Specifically, we design a Spatial Resolution Estimation Module (SREM) to estimate the SRe of low-resolution (LR) images, thereby dynamically determining the required arbitrary scaling factor. Next, we employ a pretrained SRe-to-image diffusion model to extract SRe-specified texture-style codes, which are further incorporated into a carefully designed Resolution-aware Style Consistency Module (RSCM) to constrain the SRe-aware texture consistency of reconstructed images. Furthermore, to overcome the high computational expense inherent in diffusion-based SR methods, we wrap the iterative diffusion process as a Trajectory Consistency (TC) loss, which enables comparable reconstructed texture quality of the generative model in SpatialSR within a single step. Extensive experiments demonstrate that the proposed SpatialSR achieves state-of-the-art (SOTA) performance on commonly used RSISR and downstream (image classification and segmentation tasks) datasets.",
    "published": "2026-11-09T12:47:34Z",
    "updated": "2026-11-09T12:47:34Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.13046"
  },
  {
    "id": "2611.13045",
    "title": "MICRO: A Surgery-Phase Retinal Image Rigid Registration Benchmark and One-Step Frequency-Structure Similarity Registration Learning",
    "authors": [
      "Mingdao Gong",
      "Yan Hu",
      "Mingzhen Yuan",
      "Jialu Zhang",
      "Junming Feng",
      "Yiming Jiang",
      "Jing Ma",
      "Jinghua Liu",
      "Huazhu Fu",
      "Hai Lu",
      "Xiaoqing Zhang",
      "Jiang Liu"
    ],
    "abstract": "Precise multimodal retinal image rigid registration (MRIRG) is essential for aligning cross-modal vessel structures, offering critical guidance for ophthalmic surgery. Despite its significance, the advancement of MRIRG is hindered by the lack of publicly available multimodal retinal image rigid registration datasets spanning various ophthalmic surgery phases (e.g., preoperative, intraoperative, and postoperative). To address this issue, we introduce the MICRO dataset, a large-scale MRIRG benchmark, comprising 1,365 cross-modal retinal image pairs with standardized annotations across all ophthalmic surgery phases. Moreover, existing deep registration methods achieve competitive MRIRG results via a two-step segmentation-then-detection framework, but segmentation quality heavily constrains their performance. We argue that this dependency stems from an implicit need for keypoint topology constraints, which have not been exploited for MRIRG through a one-step registration framework. Inspired by the above analysis, we propose a novel One-step Frequency-Structure Similarity Registration (OFS2Reg) learning framework for MRIRG that leverages the potential of cross-modal vessel structure similarities to construct keypoint topology constraints under a shared detection network. To be specific, OFS2Reg applies a well-designed frequency-guided structure preservation descriptor to construct coarse keypoint topology constraints in descriptors by highlighting significant vessel structures. Additionally, we develop a new cross-modal vessel structure similarity learning method that refines cross-modal keypoint topology constraints to precisely align pixel-level cross-modal vessel structures by leveraging cross-modal vessel structure similarity priors.",
    "published": "2026-11-09T12:45:53Z",
    "updated": "2026-11-09T12:45:53Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.13045"
  },
  {
    "id": "2611.12324",
    "title": "How Many Exposures Does a World Model Need? Learning Unseen Game Mechanics at Test Time",
    "authors": [
      "Ku Onoda",
      "Haruto Kawano",
      "Shota Takashiro",
      "Kohei Hayashi"
    ],
    "abstract": "World models enable agents to plan and learn from imagined experience, but in an unfamiliar environment they must learn its mechanics from limited interaction. A mechanic is a rule for how an action or an interaction changes part of the environment. Each occurrence of a mechanic that the model observes is one exposure. We ask how many exposures a world model needs to predict the effects of a new environment's mechanics. We address this question on ARC-AGI-3, a benchmark of interactive games defined by their programs. We introduce MechEval, which labels 69 recurring mechanics across 20 games from these programs. It scores each prediction on the cells the mechanic changes at each exposure. As a test bed, we build WARC (World model for ARC-AGI-3), a 35M-parameter vision transformer that is pretrained on other games and updates all of its parameters after each transition. On held-out games, WARC learns to predict four in five mechanics with at least 80% accuracy on the cells they change and keeps that accuracy to the end of the recordings. Half of them reach that accuracy within about 80 exposures, in a single play of the game, and without updates only one in seven does at all. In closed-loop play on the public games, WARC-Agent, which pairs WARC with a fixed graph explorer, triples the explorer's official efficiency score from 0.15 to 0.46, mostly through test-time training. On the hidden games of the Kaggle leaderboard, our entry scores 0.20.",
    "published": "2026-11-09T12:45:40Z",
    "updated": "2026-11-09T12:45:40Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.12324"
  },
  {
    "id": "2611.12319",
    "title": "Mitigating SM-Level Load Imbalance in 3D Gaussian Splatting on GPUs",
    "authors": [
      "Junha Ryu",
      "Hoi-Jun Yoo"
    ],
    "abstract": "3D Gaussian Splatting (3DGS) enables photorealistic, real-time rendering on commodity GPUs and is increasingly adopted in generative world models and autonomous driving simulators. However, existing optimizations rely on algorithmic changes that often require retraining, or on specialized accelerators that lack flexibility across evolving 3DGS variants. In this paper, we identify a fundamental inefficiency in GPU-based 3DGS rendering: severe SM-level load imbalance caused by uneven workloads across screen tiles. This imbalance creates a long execution tail, leaving most SMs idle while a few process computationally intensive tiles, particularly in large-scale urban scenes. To address this, we present a software-defined GPU scheduling approach that mitigates the execution tail. Our approach uses a persistent kernel to schedule heavy tiles first and selectively chunks outlier tiles across multiple CTAs. A lightweight per-frame policy determines when and how much to chunk using tile statistics already available in the rendering pipeline. Our approach requires neither retraining nor specialized hardware and can be applied orthogonally to existing optimizations across diverse 3DGS variants. Averaged per scene, it accelerates alpha blending by up to 2.93x on a large-scale urban scene, and by up to 5.6x on its most imbalanced frames, while retaining the original alpha blending formulation.",
    "published": "2026-11-09T12:41:30Z",
    "updated": "2026-11-09T12:41:30Z",
    "categories": [
      "cs.DC",
      "cs.CV",
      "cs.GR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.12319"
  },
  {
    "id": "2611.12314",
    "title": "A Modular Perspective for Modeling MARL Systems",
    "authors": [
      "Tiziano Maisonhaute",
      "Jean-Christophe Soulié",
      "Fabien Michel"
    ],
    "abstract": "The growing complexity of Multi-Agent Reinforcement Learning (MARL) has fragmented the literature, obscuring underlying architectural choices behind diverse implementations. This fragmentation makes it difficult to evaluate critical modeling dimensions in isolation, identify how components affect the resulting system dynamics, and compare, reuse, or combine contributions across the literature. This paper proposes a modular perspective for modeling, analyzing, and implementing MARL systems. We decompose them into eight functional modules: agents, environments, learning, reward modeling, training and execution modes, communication, modeling of other agents, and evaluation criteria. For each module, we clarify its role and review representative approaches. We instantiate this decomposition in MARLKIT, a framework whose modules are explicit and interchangeable. MARLKIT demonstrates how the proposed perspective supports transparent experimental assumptions and the controlled variation and combination of MARL mechanisms. Experiments illustrate its ability to prototype, compare, reuse and combine modules while making differences between configurations explicit. Overall, the paper provides a structured perspective on MARL modeling and implementation, offering a common language for making modeling choices explicit, supporting clearer descriptions of MARL approaches, and supporting more controlled experimentation through the systematic isolation and combination of MARL mechanisms.",
    "published": "2026-11-09T12:39:59Z",
    "updated": "2026-11-09T12:39:59Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2611.12314"
  },
  {
    "id": "2611.12307",
    "title": "PACE-ECG: Patient-Aware Contrastive ECG Pretraining; Leveraging Longitudinal Structure for Transferable Representations",
    "authors": [
      "Riccardo Cavarra",
      "Lupo Lovatelli",
      "Shaheim Ogbomo-Harmitt",
      "Jakub Grzelak",
      "Adelaide De Vecchi",
      "Andrew King",
      "Oleg Aslanidi"
    ],
    "abstract": "Foundation models for physiological signals are commonly evaluated on in-domain interpretation tasks, but their ability to transfer to longitudinal clinical prognosis across healthcare systems remains uncertain. We developed PACE-ECG, an ECG pretraining framework that combines contrastive learning across temporally neighbouring recordings from the same patient with clinically guided multitask supervision. We evaluated frozen ECG representations for post-myocardial-infarction all-cause mortality and incident heart failure prediction across MIMIC-IV and two external HEEDB cohorts, comparing the proposed representation with DeepECG-SSL, a state-of-the-art model, and two control baselines. Across both downstream tasks, the proposed model outperformed DeepECG-SSL in-domain (AUROC +1.9% for mortality and +4.0% for heart failure) and on external populations in HEEDB-Boston (+5.6% for mortality +10.3% for heart failure) and HEEDB-Atlanta (+6.9% for mortality +11.0% for heart failure) while using an encoder 41 times smaller and a fraction of the pretraining data. A matched ablation showed that patient-temporal pairing improved external mortality and heart failure AUROC over generic self-supervision by 7.0% and 9.4% on HEEDB-Boston and 8.9% and 9.3% on HEEDB-Atlanta. These findings indicate that pretraining-objective design greatly influences downstream transfer alongside model and data scale, and that in-domain performance alone is insufficient to establish the clinical generalisability of ECG foundation representations.",
    "published": "2026-11-09T12:27:36Z",
    "updated": "2026-11-09T12:27:36Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.12307"
  },
  {
    "id": "2611.12305",
    "title": "HumanSightBench: A Benchmark for Human Visual Perception in MLLMs",
    "authors": [
      "Zixin Su",
      "Yangguang Lin",
      "Zegang Peng",
      "Yuntong Sun",
      "Xuanyi Wang",
      "Jiahao Wang",
      "Qiankai Xu",
      "Bing Yuan",
      "Jingjia Huang",
      "Ruyang Liu",
      "Yanxu Hu",
      "Yufeng Zhou",
      "Yi Lin"
    ],
    "abstract": "Multimodal large language models (MLLMs) have demonstrated strong performance on knowledge-intensive and reasoning-based vision-language benchmark datasets, but still struggle to solve the visual questions that people can solve easily. Evaluating the differences between MLLMs and human-level visual perception is challenging due to end-to-end evaluation which combines various skills, or because we are uncertain if individual items are valid. Specifically, observed errors may reflect visual perception, language priors, background knowledge, question ambiguity, and underspecified answers. Our guideline for HumanSightBench is that we construct items that are human-easy by construction and model-hard by evaluation. HumanSightBench contains 2,876 visual questions with short answers across 7 top-level perceptual categories and 21 subcategories. We only include items that pass five inclusion gates: question clarity, answer uniqueness, visual grounding, human solvability, and text-only shortcut filtering. According to the protocol, errors are defined as incorrect answers on human-validated visual tasks with the evaluated interface. The inclusion gates are intended to reduce confounds from ambiguity and external knowledge. The best pass@3 score is 65.6% across eight evaluated MLLMs. No evaluated model exceeds 27.5% on Counting. These results identify capability gaps that are hidden by overall scores and can help future training experiments and held-out evaluation.",
    "published": "2026-11-09T12:27:19Z",
    "updated": "2026-11-11T10:19:36Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.12305"
  },
  {
    "id": "2611.12300",
    "title": "Reconfigurable Action Theories: A Formal Foundation for Dynamically Composable Agent Harnesses",
    "authors": [
      "Jianmin Ji"
    ],
    "abstract": "Action theories typically fix their vocabulary and causal laws, whereas agent harnesses can change their tools, providers, and policies during execution. We introduce Reconfigurable Action Theories (RAT), in which actions can change the action theory itself. A theory module in RAT contains a vocabulary, causal laws, and an initializer. A RAT configuration records the active modules and the world state. Module loading and unloading are represented by actions governed by ordinary causal laws. RAT retains the standard causal action semantics of its language fragment when the active module set is fixed. We give sufficient conditions for at most one next configuration, preservation of existing behavior when a module is added, and equal results when modules are loaded in either order. We establish the computational complexity of reasoning tasks in RAT and translate finite RAT systems into nonmonotonic causal theories and Answer Set Programming (ASP), preserving bounded executions. Experiments compare finite RAT models with executions of official DeepSeek Harness, Pi, and OpenHands implementations. RAT provides a formal basis for checking how component changes affect a harness's available actions, behavior, and reachable goals.",
    "published": "2026-11-09T12:23:29Z",
    "updated": "2026-11-09T12:23:29Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.12300"
  },
  {
    "id": "2611.12296",
    "title": "RecoGEM: A Serving System for Production-Scale Generative Recommendation",
    "authors": [
      "Xiangrui Yang",
      "Yunfeng Zhao",
      "Jiawei Yang",
      "Fangyu Zhang",
      "Enrui Zhao",
      "Liang Zeng",
      "Cheng Peng",
      "Minhui Xie",
      "Jiaqiang Liu",
      "Xiao Liang",
      "Yiming Qiu"
    ],
    "abstract": "Generative recommendation (GR) is moving industrial recommender systems (RecSys) from scoring candidate items to autoregressively generating item identifiers. This shift promises higher recommendation quality, but makes serving substantially harder: each request executes a short sequence of dependent decoding steps that explore a large item space and select promising candidates on the latency-critical path. GR not only creates structural mismatches with conventional RecSys pipelines, but also challenges the architectural and optimization assumptions of LLM serving stacks, making direct adoption of existing systems difficult. We present RecoGEM, our production GR serving system. RecoGEM uses a runtime--engine decoupling architecture to move GR-specific serving responsibilities, such as candidate-state transitions and live artifact updates, to a dedicated runtime. Its execution engine exploits GR's short token sequences, large candidate populations, and predictable step shapes to optimize self-attention, candidate selection, and execution planning. RecoGEM has been deployed for over nine months across our production lines, serving applications with hundreds of millions of users and supporting more than ten GR model families. On our OneModel production workloads, RecoGEM reaches over 1,000 QPS per serving instance with P99 latency below 35 ms and a 2.88$\\times$ throughput improvement over representative baselines.",
    "published": "2026-11-09T12:20:07Z",
    "updated": "2026-11-09T12:20:07Z",
    "categories": [
      "cs.DC",
      "cs.AI",
      "cs.IR"
    ],
    "url": "https://arxiv.org/abs/2611.12296"
  },
  {
    "id": "2611.12295",
    "title": "Be My Eye: Learning to See Beyond a Robot's Own Perspective",
    "authors": [
      "Baifu Huang",
      "Shilin Fang",
      "Jianan Wang"
    ],
    "abstract": "Robots operating in the real world are inherently subject to partial observability, particularly in multi-robot collaboration, where individual observations may be insufficient for effective task execution. A key challenge is leveraging complementary observations from partner robots to support collaborative decision-making. We argue that information sharing should go beyond passively transmitting raw observations or generic visual features. Instead, robots should selectively encode task-relevant information according to task objectives and execution progress. To this end, we propose a task-oriented active context sharing framework that transforms robot observations into compact representations, preserving critical information under constrained communication budgets. The framework adopts a two-stage training paradigm. In the first stage, onboard observations and task instructions are jointly encoded into compact context representations. Task-oriented future prediction and soft task-progress correspondence learning guide this collaboration-agnostic compression, preserving information about task objectives and execution progress. In the second stage, the learned representations are integrated into a pretrained Vision-Language-Action (VLA) policy, enabling bidirectional context exchange. Each robot combines complementary partner information with local observations to guide action generation. Action supervision jointly refines the context representations and policy, aligning information sharing with collaborative decision-making. Controlled experiments demonstrate substantial performance gains under constrained communication budgets, while three real-world experiments validate the framework in complex dual-robot tasks. These results highlight a shift from passive visual transmission toward active, task-oriented context sharing that directly supports collaborative decision-making.",
    "published": "2026-11-09T12:19:15Z",
    "updated": "2026-11-09T12:19:15Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.12295"
  },
  {
    "id": "2611.12293",
    "title": "Depth as a Candidate Source: Portfolio Allocation for Recurrent Test-Time Scaling in Large Language Models",
    "authors": [
      "Chaoyuan Hao",
      "Wentao Yue",
      "Yanyan Wu",
      "Boyuan Gao",
      "Tianyou Lai",
      "Maolin Wang",
      "Yongxin Ni",
      "Hanwen Du",
      "Youhua Li"
    ],
    "abstract": "Recurrent latent reasoning in large lanugage models (LLMs) scales test-time computation by increasing recurrent depth, naturally framing inference as a problem of deciding when to stop. We identify a previously overlooked limitation of this single-depth view through systematic preliminary analysis: deeper recurrence can lose correct solutions found at shallower depths, while depth-specific success sets remain broadly non-nested even after controlling for marginal accuracy. This suggests that depth determines not only computation cost, but also access to distinct candidate solutions. Motivated by this finding, we propose Depth Portfolio Allocation (DPA), which reformulates recurrent test-time scaling as budgeted allocation across depth-specific candidate sources. DPA supports both fixed portfolios and feedback-guided sequential allocation under a shared inference budget. Experiments on GSM8K, SVAMP, MultiArith, and MBPP show that mixed-depth portfolios expand oracle coverage under matched candidate counts and nominal costs, while feedback-guided allocation generally matches or improves uniform allocation and can reduce computation in high-budget settings. Code and data are avaible at : https://anonymous.4open.science/r/LLM-latent-B7BC/.",
    "published": "2026-11-09T12:17:59Z",
    "updated": "2026-11-09T12:17:59Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.12293"
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
    "id": "2611.10518",
    "title": "Beyond Row Alignment: Virtual-Camera-Aware Online Stereo Rectification",
    "authors": [
      "Yizhao Peng",
      "Rui Gong",
      "Zaiwang Gu",
      "Xudong Jiang",
      "Jun Cheng"
    ],
    "abstract": "Stereo matchers estimate depth by comparing the left and right images from a stereo camera pair, but they assume that the two cameras are accurately calibrated and rectified. In real deployments, small physical shifts after calibration, caused by camera motion, mechanical drift, vibration, or installation changes, can break this assumption and degrade depth estimation. Online stereo rectification is therefore needed to correct the image pair during operation and recover a stereo geometry where standard stereo matching can work reliably. Recent online rectification methods mainly optimize row alignment, making the left and right views of the same scene point fall on the same image row. We show that this target, while necessary, is insufficient for deployable stereo depth estimation. A rectifier may make a small set of matched points look well row-aligned, but still distort the full images in ways that hurt stereo matching: useful image regions may be cut off, large blank areas may appear, objects may be stretched or squeezed, or image scale may change unevenly across the view. We propose VirtualRect, an online stereo rectification method designed for reliable real-world deployment. Rather than treating rectification as simply making the left and right image rows line up, this method estimates a rectified virtual stereo camera and combines image-wide supervision of image warp behavior. This makes the rectified images and the camera parameters come from the same geometry, so the images used for matching and the model used for depth computation remain consistent. Experiments on multiple datasets show that, compared with the prior state-of-the-art online rectifier, VirtualRect reduces vertical flow error by 17% on Carla-Flowguided and 7% on Semi-Truck Highway, and lowers depth MAE by 30-41% on Carla-Flowguided across three downstream stereo matchers.",
    "published": "2026-11-07T06:32:38Z",
    "updated": "2026-11-07T06:32:38Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.10518"
  },
  {
    "id": "2611.10514",
    "title": "FADE: Fractional Anomalous Dynamics Extrapolation for Training-Free Diffusion Transformers Acceleration",
    "authors": [
      "Jinlong Yang",
      "Lizilin",
      "Jinke Wu",
      "Yao Zhou"
    ],
    "abstract": "Diffusion Transformers (DiTs) have established themselves as the preeminent paradigm for high-fidelity generative modeling across various modalities, yet their practical deployment is hindered by the severe computational overhead of iterative sampling. While recent feature-caching methods mitigate this latency through feature reuse or forecasting based on integer-order operators, they remain limited in adapting to the non-stationary and highly curved dynamics of DiT latent trajectories. In this work, we reveal that DiT feature evolution exhibits anomalous diffusion characteristics and a certain degree of spatiotemporal heterogeneity, rendering static, integer-order forecasting operators inadequate and prone to error accumulation. To address this, we propose Fractional Anomalous Dynamics Extrapolation (FADE), a unified framework for training-free diffusion transformers acceleration. FADE models DiT feature evolution via anomalous diffusion and employs a Mittag--Leffler fractional operator to better adapt to high-curvature and non-linear latent trajectories of DiTs. Leveraging the empirical observation that these complex dynamics maintain cross-sample stability, we further construct a Look-Up Table with multiple dimensions through offline profiling. This enables negligible LUT-retrieval overhead, spatiotemporally adaptive parameter retrieval during online inference. Extensive evaluations across diverse architectures and modalities demonstrate that FADE achieves state-of-the-art acceleration, preserving exceptional generation fidelity under aggressive skip intervals with negligible latency overhead. Our project page is available at https://youngkinlon.github.io/fade-project-page/.",
    "published": "2026-11-07T06:25:08Z",
    "updated": "2026-11-07T06:25:08Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.10514"
  },
  {
    "id": "2611.10509",
    "title": "Scaling Optimization-Oriented Hypernetworks for Implicit Neural Representations",
    "authors": [
      "Lulu Cai",
      "Hanxiang Ren",
      "Siyan Dong",
      "Li Sun",
      "Jiefeng Wu",
      "Youyi Zheng",
      "Yi Ma",
      "Yanchao Yang"
    ],
    "abstract": "We present a hypernetwork that generates the parameters of an implicit neural representation (INR) for a given signal in a single forward pass, without test-time optimization. Existing hypernetworks for this problem either ignore the chain-rule structure of the test-time optimization that produces an INR or, when they preserve it, instantiate the structure with MLPs whose parameter count grows quartically in target-network width. Our central contribution is to show that this parameter-count cost is structural to the MLP instantiation, not to the optimization-oriented principle of preserving chain-rule structure, and to resolve it by replacing the MLP body with attention. The resulting hypernetwork combines three design choices: an output-neuron-centric tokenization that aligns the token axis with each layer's output-neuron axis; an information-flow consistency rule that fixes the role of every cross-attention module from the representation its output should occupy; and a token-space iterative rollout that realizes the five quantities one optimization step on the target INR computes as five cross-attention modules with parameter count independent of target-network width. Across five 2D and 3D INR generation benchmarks, our method outperforms the state-of-the-art single-pass and optimization-oriented baselines; scales to target-network widths at which the MLP-based optimization-oriented paradigm exhausts GPU memory; and produces the highest result on NeRF generation without ground-truth INR weights supervision.",
    "published": "2026-11-07T06:19:27Z",
    "updated": "2026-11-07T06:19:27Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.10509"
  },
  {
    "id": "2611.10508",
    "title": "Imperfectly Imperfect: Evaluating Graded Cognitive Diversity in LLM Persona Simulations",
    "authors": [
      "Sion Weatherhead",
      "Ben Newell",
      "Aaron Belbasis",
      "Flora Salim"
    ],
    "abstract": "Large language model (LLM) agents are increasingly used as synthetic participants in social, behavioural, and decision-making research, yet it remains unclear whether they can express graded cognitive diversity as assigned when engaging in simulated behaviour. We introduce a cognition-suite evaluation that tests whether simulated populations reproduce human variation in reasoning, self-reported traits, their associations, and downstream behaviour. Agents conditioned on synthetic or human-derived profiles of cognitive reflection, Need for Cognition, and Big Five personality answer the same suite as a cohort of 473 adults: two newly assembled tests, a Cognitive Reflection Test (CRT) and a Behavioural Reflection Test (BRT) whose decision scenarios measure reflection in behaviour, alongside an established CRT and the two trait questionnaires. Across seven full-battery simulation runs of four models, agents recover Need for Cognition and Big Five trait distributions on self-report questionnaires, but fall short on simulating diversity of cognitive task performance and downstream behaviours. In the four Claude Sonnet 4.6 runs, every agent scores full marks on both CRTs, whatever reflection level its persona was assigned. In the other three runs agents make intuitive-lure errors (the tempting wrong answers CRT items invite), but 49 to 85% score full marks, against under 10% in the human sample. Claude Sonnet 5 comes closest to people's item-by-item pattern of lures; the other two runs give fewer lures and vary less between items. In the BRT scenarios, every run over-produces 8 to 11 of 15 coded behaviours by at least 20 percentage points, and people's links between reflection and behaviour carry over only in part. Useful synthetic populations must preserve not only trait descriptors but the structured variation in reasoning, error type, and behaviour those descriptors are meant to organise.",
    "published": "2026-11-07T06:19:05Z",
    "updated": "2026-11-07T06:19:05Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2611.10508"
  },
  {
    "id": "2611.12955",
    "title": "Predictive Surprise as Self-Grounding Concept Bottleneck for Interpretable Time Series",
    "authors": [
      "Sachith Abeywickrama",
      "Emadeldeen Eldele",
      "Min Wu",
      "Xiaoli Li",
      "Chau Yuen"
    ],
    "abstract": "Time-series classifiers deployed in risk-sensitive domains must be (1) accurate, (2) interpretable, and (3) able to abstain when evidence is weak. Existing methods do not deliver all 3 at once, and the obstacle is structural, rather than logistical. Meaningful temporal patterns cannot be defined without knowing segment boundaries, yet meaningful boundaries cannot be placed without knowing which patterns to expect. Existing approaches break this circularity by using fixed windows or expert-annotated vocabularies, thereby sacrificing at least one of the 3 properties. We introduce ConceptTime, which closes the loop through a single self-supervised signal. A frozen probabilistic forecaster predicts a distribution over the next observation at every timestep of the sequence. We call the mismatch between its prediction and the realized signal the predictive surprise. This signal both locates segment boundaries and characterizes each resulting segment through the forecaster. Segments are thus grounded by how they behaved relative to expectation, not by what they look like. These summaries cluster into a vocabulary of dynamical regimes that we call concepts. A lightweight head classifies from the concept sequence, and the distance to the nearest concept yields reliability by design. Across 17 public benchmarks, ConceptTime is competitive with state-of-the-art black-box accuracy, beats every interpretable baseline, and retains near-98% accuracy on Epilepsy with 1% of labels. It further remains competitive with softmax, prototype-distance, and SHAP/TimeX/TimeX++ on OOD detection and deletion faithfulness, without a single annotation, language model call, or domain expert. Code is available at: https://github.com/Sachithx/ConceptTime.git.",
    "published": "2026-11-07T06:18:39Z",
    "updated": "2026-11-07T06:18:39Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "eess.SP",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2611.12955"
  },
  {
    "id": "2611.10506",
    "title": "SRA: Spatial Reasoning Adapter via Evolving Social Interaction Graphs for Trajectory Prediction",
    "authors": [
      "Jaewoo Jeong",
      "Seonkyu Song",
      "Hyeonwoo Park",
      "Jegyeong Cho",
      "Yujin Bae",
      "Giwon Lee",
      "Daehee Park",
      "Kuk-Jin Yoon"
    ],
    "abstract": "Predicting where multiple agents will move next is fundamental to autonomous driving, robotics, and any system that must share space with people safely. Modern stochastic predictors read off inter-agent interactions once from the observed past and keep that view fixed throughout the generative rollout, so the reciprocal geometric constraints that emerge as the joint future sharpens are not re-examined. We address this gap with SRA (Spatial Reasoning Adapter), a modular graph denoiser that is integrated into existing diffusion and flow-matching predictors without redesigning their generative cores. At every reverse step, SRA reads the host's current future estimate, builds a sparse Euclidean interaction graph on the predicted trajectories, and returns a residual correction to the host's decoding path. Our adapter consists of three core components: a sparse neighborhood retrieved with a learned query-key score and a geometric bias, a future-conditioned relational feature recomputed on the evolving prediction, and uncertainty-weighted message passing where confident agents act as anchors for uncertain ones. We instantiate SRA on three structurally different hosts (LED, MID, and MoFlow) across four multi-agent benchmarks: SDD, NBA, Soccer, and Football. SRA improves ADE for every host on every dataset, with average gains of 5.8% in ADE and 7.0% in FDE. A cumulative ablation shows that the three components act as one mechanism: only together do they improve every host on every sports dataset, indicating that spatial reasoning over the model's own evolving future, weighted by how far that future can be trusted, is broadly useful across denoising architectures. Code is available at https://github.com/Jaewoo97/SRA.",
    "published": "2026-11-07T06:16:58Z",
    "updated": "2026-11-07T06:16:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.10506"
  },
  {
    "id": "2611.10503",
    "title": "Learning a Unified Cross-Model Semantic Dictionary via Gated Bottleneck Sparse Autoencoders",
    "authors": [
      "Jinchi Zhu",
      "Tie Luo"
    ],
    "abstract": "Foundation models pretrained on similar data distributions tend to learn overlapping semantic structure, but their representations are distinct due to different model architecture, pretraining objectives and protocols. This prevents unified interpretability and cross-model feature reuse. Existing approaches extract interpretable concepts from individual models and align these concepts in a shared coordinate system using cross-reconstruction objectives, but the alignment only applies to latent coordinates while the concepts themselves remain model-specific and cannot be shared or reused. This paper introduces the Gated Bottleneck Sparse Autoencoder (GB-SAE), which casts unified cross-model interpretability as a representation factorization problem and solves it by simultaneously learning a unified shared dictionary and multiple private model-specific dictionaries via a gated bottleneck sparse autoencoder framework. The shared dictionary encodes the cross-model common semantic structure in unified concepts that are reusable across all participating models (and beyond), while each private dictionary comprises residual concepts that capture model-specific biases. We evaluate GB-SAE with distinct foundation models including ViT, SigLIP, DINOv2, and ConvNeXt. GB-SAE demonstrates superior reconstruction capability, unified and faithful interpretability, strong reusability and generalization to unseen models and downstream tasks. The code is available at https://github.com/trustAIoT/GB-SAE_NeurIPS.",
    "published": "2026-11-07T06:11:39Z",
    "updated": "2026-11-07T06:11:39Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.10503"
  },
  {
    "id": "2611.10501",
    "title": "Sampling Is Not Curiosity: Why LLM Agents Should Investigate",
    "authors": [
      "Alfonso Amayuelas",
      "Piotr Piękos",
      "Xin Eric Wang",
      "William Yang Wang",
      "Jürgen Schmidhuber",
      "Alex Pentland"
    ],
    "abstract": "LLM agents are increasingly used for open-ended tasks, very common in research scenarios where they are required to explore, investigate, or act curiously. At inference time, an LLM is a fixed map from context to next-token distribution, the pretrained weights determine the function, and only its conditioning changes as context accumulates. Mechanisms like temperature, best-of-N, tree search, or RAG vary how the distribution is sampled or what it is conditioned on, but do not update the agent's model of the environment. We argue that current LLM agents do not explore curiously; they explore stochastically. From how curiosity is understood in the RL literature, it requires a predictive structure over how the environment responds to the agent's actions, which improves online from current interaction, drives action selection through its predicted improvement, and persists beyond the context window. Additionally, in its open-ended form, the agent should intrinsically originate what to investigate. Thus, we propose a framework defining curiosity in LLM agents, reserving the term for systems that satisfy it. In doing so, we identify the research directions its implementation opens up.",
    "published": "2026-11-07T06:02:37Z",
    "updated": "2026-11-07T06:02:37Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.10501"
  },
  {
    "id": "2611.10498",
    "title": "EmbodiedIntentBench: Benchmarking Intent-Driven Runtime Adaptation for Mobile Robotic Missions",
    "authors": [
      "Rajat Bhattacharjya",
      "Changwoon Lee",
      "Hyeonjong Ju",
      "Sing-Yao Wu",
      "Hamidreza Alikhani",
      "Zhuoyi Yang",
      "Ian Harris",
      "Nalini Venkatasubramanian",
      "Nikil Dutt"
    ],
    "abstract": "Mobile robotic sensing systems must adapt to operator requirements, limited resources, changing connectivity, and observation opportunities shaped by physical motion. Evaluating runtime strategies therefore requires assessing whether their decisions fulfill mission objectives, beyond isolated perception accuracy or execution efficiency. We present EmbodiedIntentBench, a benchmark for intent-driven runtime adaptation in mobile robotic missions. It represents mission intent through structured contracts for coverage, temporal evidence, reporting, urgency, and resources, and couples simulated unmanned aerial vehicle (UAV) workloads with causal, resource-accounted execution. Computation decisions affect mission time, resource use, and which observations can contribute evidence. We evaluate fixed and adaptive perception strategies in multi-phase missions and under changing urgency, connectivity, and battery conditions. In the multi-phase Depot study, a configuration with 87.5% full-bank target recall across visible target observations completes only 1 of 16 missions, whereas a lower-recall configuration completes 14. In an ablation, ignoring execution-induced observation loss increases aggregate mission success and reverses the ordering of two runtime strategies. Replays using Jetson AGX Orin CPU and GPU profiles change the relative success of local and remote strategies. In selected Jetson GPU-profile replays, intent-driven adaptation reduces modeled task energy by up to 28% with unchanged mission success. EmbodiedIntentBench provides an extensible framework for evaluating runtime decisions against mission fulfillment under physical and resource constraints.",
    "published": "2026-11-07T05:59:38Z",
    "updated": "2026-11-07T05:59:38Z",
    "categories": [
      "cs.RO",
      "cs.AR",
      "cs.CV",
      "cs.DC",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.10498"
  },
  {
    "id": "2611.10497",
    "title": "Disentangling Channel Semantics in Vision Transformers via Token Decorrelation and Composition-Aware Modulation",
    "authors": [
      "Daeun Kim",
      "Hyesong Choi",
      "Hyejin Park",
      "Dongbo Min"
    ],
    "abstract": "Multi-channel images encode heterogeneous channel semantics aligned over a shared spatial structure, which requires models to jointly capture globally shared structure and channel-specific variations. Recent multi-channel Vision Transformers attempt to address this challenge by augmenting the [CLS] token with memory tokens to organize multi-channel representations under varying channel compositions. However, we find that these context tokens collapse onto a few dominant channels under high inter-channel redundancy, producing redundant representations and a biased global summary that fails to reliably support composition-aware channel interpretation. We propose MuCa-ViT (Multi-Channel Composition-Aware Vision Transformer), a unified framework that addresses these limitations through two coupled mechanisms. Factorial Token Learning (FTL) enforces token-level decorrelation among context tokens, encouraging the [CLS] token to capture globally shared semantics while memory tokens preserve complementary channel-specific cues. Channel Composition-Aware Modulation (CAM) uses the FTL-refined [CLS] as a semantic anchor to generate sample-wise modulation signals, which enable composition-aware interpretation of channels within a unified backbone rather than relying on static channel embeddings. Experiments on JUMP-CP, CHAMMI, and So2Sat show that MuCa-ViT outperforms prior multi-channel ViTs across all three benchmarks, and the magnitude of improvement aligns with the inter-channel redundancy of each dataset ($ρ\\in [0.19, 0.77]$), validating the diagnostic analysis that motivates our design. Our code is available at https://github.com/kimdanni/MuCa-ViT .",
    "published": "2026-11-07T05:59:28Z",
    "updated": "2026-11-07T05:59:28Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.10497"
  },
  {
    "id": "2611.12954",
    "title": "Physics2Weight: Direct Neural Network Architecture and Weight Generation from Physical Laws Using Large Language Models",
    "authors": [
      "Shogo Sato",
      "Tomoyasu Shimada",
      "Kazuhiko Murasaki",
      "Takashi Sano"
    ],
    "abstract": "Recent advances in large language models (LLMs) have enabled weight-space programming (WSP), which directly generates neural network weights without gradient-based optimization. However, extending WSP to physical problems remains challenging, particularly in achieving both solution accuracy and physical consistency. In this paper, we propose Physics2Weight (PtW), a framework that extends WSP to solving partial differential equations by directly generating neural network weights and editing architectures based on governing equations and initial and boundary conditions. PtW introduces physics-constrained prompting and physics-guided architecture editing, combined with iterative weight refinement from WSP, to improve solution accuracy and physical consistency without gradient-based optimization. Experiments on four PDEs, namely the heat, advection, Burgers', and Allen--Cahn equations, demonstrate lower solution errors than conventional physics-informed neural networks, while revealing limitations in satisfying the governing equations for nonlinear PDEs.",
    "published": "2026-11-07T05:39:53Z",
    "updated": "2026-11-07T05:39:53Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.12954"
  },
  {
    "id": "2611.10488",
    "title": "Safer for Whom? A Systematic Exploration of AI Safety in Eating Disorder Interactions",
    "authors": [
      "Jinyuan Wang",
      "Minh Duc Chu",
      "Frances Ross",
      "Ellen Fitzsimmons-Craft",
      "Kristina Lerman"
    ],
    "abstract": "AI assistants advise users about diet, exercise, and weight loss---areas in which unsafe guidance can worsen body dissatisfaction, dietary restriction, compulsive exercise, and other behaviors associated with eating disorders (EDs). Existing evaluations emphasize diagnostic accuracy, overtly harmful prompts, or synthetic scenarios, providing limited insight into whether models recognize implicit vulnerability in natural interactions or protect users consistently. We evaluate responses from three open-weight large language models to 100 questions sourced from an online pro-anorexia community. We grade responses using clinically informed criteria that extend a seven-dimensional taxonomy of ED-related harms. We also construct matched conditions in which questions are accompanied by information about the user varying race, gender, body mass index (BMI), and explicit ED vulnerability. Safety varies substantially across models and harm dimensions. High-risk responses are approximately twice as frequent without bios, suggesting that models do not consistently recognize vulnerability from language alone. Explicit signals of ED vulnerability improve safety by 10--14 points across models. Responses also differ significantly by race, gender, and BMI, with body size producing the largest disparities. These patterns are consistent with reliance on the stereotype that EDs primarily affect thin, White women, potentially leaving users outside this profile with less protective responses.",
    "published": "2026-11-07T05:30:37Z",
    "updated": "2026-11-07T05:30:37Z",
    "categories": [
      "cs.HC",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.10488"
  },
  {
    "id": "2611.09154",
    "title": "Learning When to Think: Dual-Reference Offline Optimization for Adaptive VLM Reasoning",
    "authors": [
      "Hongbin Lin",
      "Sizhe Zou",
      "Juangui Xu",
      "Xinyue Xu",
      "Zhuoli Ouyang",
      "Stanislav Kolchin",
      "Chengwei Qin",
      "Zhongxiang Dai",
      "Yao Shu"
    ],
    "abstract": "Reasoning traces improve vision-language models on complex multimodal tasks, but forcing every input to follow a long reasoning process leads to overthinking and unnecessary inference cost. We study adaptive fast/slow thinking for VLMs, where one model answers directly for simple inputs and reasons step by step when needed. Fast answers and slow traces often come from distinct behavior policies, making a single-reference offline objective misweight one mode. We propose DUAL-REFERENCE BOLT (DR-BOLT), which distinguishes the desired fast/slow mixture reference from the sampling distribution and corrects their mismatch in reward-weighted training. Fast/slow partition competition explains routing in the optimal target; an efficient source-wise correction approximates the exact objective when response formats are well separated. Matched Qwen3-VL comparisons use identical candidate banks to isolate the objective from slow-teacher quality. DR-BOLT improves score-length trade-offs over the evaluated offline and online baselines on ScienceQA and three held-out transfer benchmarks, with a 24.1% cross-benchmark slow ratio and a 2.90-fold end-to-end training speedup over reproduced GRPO. These results support adaptive reasoning in the studied two-reference setting, while broader robustness remains open. Our code is available at https://github.com/HongbinLin3589/DR-BOLT.",
    "published": "2026-11-06T08:35:20Z",
    "updated": "2026-11-06T08:35:20Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.09154"
  },
  {
    "id": "2611.12933",
    "title": "Auditable Human-Agent Teams for Autonomous X-ray Experimentation",
    "authors": [
      "Gunik Luthra",
      "Ronald J. Pandolfi",
      "Benjamin T. Diroll",
      "Ricky Ronquillo",
      "Ruipeng Li",
      "Christopher B. Murray",
      "Marcus M. Noack",
      "Kevin G. Yager",
      "Esther H. R. Tsai"
    ],
    "abstract": "Closed-loop autonomous experimentation can accelerate scientific discovery, but implementation effort limits accessibility. Agentic systems may lower this barrier, although sustained operation on physical instruments remains largely unexplored. Here, using coding-agent infrastructure grounded in validated scientific methods, we demonstrate autonomous synchrotron X-ray experiments on nanoparticle superlattices under evolving, human-defined objectives. Complete human-agent and agent-agent transcripts enable an audit that reconstructs decision provenance and characterizes the division of cognitive labor. Across three experiments, 61-67% of messages involved interpretation or judgment, while the share of methodological and scientific contributions increased from 46% in the setup-focused first experiment to 56-61% in later experiments. Provenance showed that 59-68% of error corrections involved multiple participants and that about half of all decisions incorporated the input of another participant. These results may guide design principles for multi-agent scientific systems and inform future agent harnesses, model training, and accessible autonomous experimentation.",
    "published": "2026-11-06T08:33:55Z",
    "updated": "2026-11-06T08:33:55Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2611.12933"
  },
  {
    "id": "2611.09147",
    "title": "BMMS: Policy-Conditioned Measurement of Behavioral Compliance in Language Models",
    "authors": [
      "Anthony Rhodes",
      "Gadi Singer"
    ],
    "abstract": "Behavioral evaluation of language models fixes its dimensions in advance: hallucination, sycophancy, toxicity, over-refusal. An operator in a regulated industry needs a different question answered: does a system do what a particular rulebook requires? We introduce the Behavioral Misalignment Metric Suite (BMMS), which measures policy-conditioned misalignment by taking a policy corpus as an argument and returning a compliance profile over it, for any published policy and any system that answers in natural language. The Compliance Attainment Score (CAS) measures severity-weighted attainment over the obligations that bind the system, and the Compliance Robustness Margin (CRM) the share of that attainment surviving graded adversarial pressure; Behavioral Invariance (BIV) and the Behavioral Disposition Index (BDI) are specified and released with the suite. Dimensions enter only by passing a published admission test whose binding criterion is attribution: a quantity that moves when the judge changes, holding the target fixed, is measuring the instrument. Applying it excluded one of the quantities the suite itself reported. Across 1,003 obligations from eleven documents in five registers, the admission criterion holds 94.4% precision against blinded human judgment on vendor specifications and 50.0% on analytical guidance, extraction fidelity is 94.6%, and re-scoring under judges from two other providers leaves target ordering invariant while the absolute score of a single target spans up to 0.22. We apply it to the two most detailed published behavioral specifications. Own-specification advantage is not resolved from zero once document difficulty is subtracted, but absolute self-compliance is another matter: GPT-4o fails 70.7% of the hard constraints binding it in the Model Spec published by OpenAI, where the two Claude models fail 0.0% and 9.1% of theirs.",
    "published": "2026-11-06T08:24:58Z",
    "updated": "2026-11-06T08:24:58Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.09147"
  },
  {
    "id": "2611.09142",
    "title": "Learning Generative Dynamics for 3D Molecule Generation via Sequential Neuro-Symbolic Constraints",
    "authors": [
      "Zhuoran Li",
      "Xu Sun",
      "Chang Wen Chen",
      "Wanyu Lin"
    ],
    "abstract": "Diffusion models have recently emerged as a powerful paradigm for generating 3D molecules. Despite showing remarkable promise, they learn atomic distributions implicitly from data, without explicitly encoding physicochemical rules into their generative dynamics. Consequently, generated samples can be statistically plausible yet chemically invalid. To address this problem, we propose Sequential Neuro-Symbolic Constrained Diffusion (SensDiff), a framework that integrates symbolic rules into generative modeling, enabling the model to internalize scientific priors during training. Central to SensDiff is the observation that the diffusion trajectory of 3D molecule generation exhibits a coarse-to-fine evolution: valid molecules arise by first mitigating macroscopic geometric conflicts and then refining structures toward microscopic chemical consistency through iterative denoising. Accordingly, SensDiff mirrors this dynamic by sequentially enforcing constraints with adaptive weighting during training, progressively steering generation toward valid molecular geometries. Moreover, SensDiff translates domain knowledge into interpretable generative controls, grounding opaque neural denoising in scientific principles. Experiments on molecular benchmarks and real-world constrained generation tasks confirm that SensDiff consistently improves chemical validity while adhering to physicochemical rules and user-specified targets. The code is publicly available at https://github.com/WanyuGroup/NeurIPS2026_SensDiff.",
    "published": "2026-11-06T08:18:31Z",
    "updated": "2026-11-06T08:18:31Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.09142"
  },
  {
    "id": "2611.09141",
    "title": "Circuit Theory-Informed AI for Condition Monitoring in Power Electronics",
    "authors": [
      "Yubo Song",
      "Pascal A. Schirmer",
      "Subham Sahoo"
    ],
    "abstract": "Artificial intelligence for power electronics is evolving toward a deeper comprehension of system intrinsic behaviors and dynamics. As a novel integration of neural computation and electric circuits, spike-based neuromorphic computing offers promising potential in high energy efficiency and adaptability for data-driven applications. Building on the latency-coding principles, this article proposes a framework for data-light condition monitoring that relies solely on three-phase AC current measurements. The AC current signals are encoded as membrane potentials of RC-based spiking neurons, which are inherently compatible with spiking neural networks that can effectively facilitate the estimation of device parameters. Case studies are presented to validate the performances, while constraints and further optimizations are also evaluated and discussed, and future extensions of the methodology are provided.",
    "published": "2026-11-06T08:16:23Z",
    "updated": "2026-11-06T08:16:23Z",
    "categories": [
      "cs.ET",
      "cs.AI",
      "cs.LG",
      "cs.NE",
      "eess.SY"
    ],
    "url": "https://arxiv.org/abs/2611.09141"
  },
  {
    "id": "2611.10062",
    "title": "REFORM-3D: A Representation-Centric Evaluation Framework for 3D Medical Vision Foundation Models",
    "authors": [
      "Maregu Assefa",
      "Muzammal Naseer",
      "Divya Velayudhan",
      "Gedamu Alemu Kumie",
      "Naoufel Werghi"
    ],
    "abstract": "Evaluation of 3D medical foundation models is typically dominated by downstream task scores, which entangle representation quality with adaptation choices. This is especially critical in volumetric imaging, where spacing and anisotropy can substantially alter image statistics while the anatomy itself remains unchanged. We therefore introduce \\textbf{REFORM-3D}, a \\textbf{R}epresentation-centric \\textbf{E}valuation \\textbf{F}ramew\\textbf{OR}k for benchmarking frozen 3D medical vision foundation \\textbf{M}odels across three questions: Acquisition Robustness, asking whether features remain stable when spacing varies while anatomy is fixed; Cross-Modal Anatomical Alignment, asking whether labeled anatomical structures remain recoverable across modalities under balanced bidirectional retrieval; and Anatomical Transfer, asking whether organ identity remains recoverable from limited labeled support under case-disjoint evaluation. These are also pretraining questions, because what a 3D encoder learns depends on how volumes are geometrically presented during self-supervised pretraining. We further introduce Med3DINO encoder family, pretrained on $62.6$K unlabeled MR, CT, PET, CTA, and CBCT volumes under three explicit geometric assumptions: isotropic normalization, voxel-relative sampling, and spacing-aware resampling. Across Med3DINO and heterogeneous external encoders, REFORM-3D reveals module-specific strengths rather than a single model ordering. Within the controlled Med3DINO comparison, voxel-relative sampling yields lower embedding drift, whereas spacing-aware resampling favors anatomical transfer; semantic-transfer advantages depend on the dataset and feature type. Project link: \\href{https://endarzboy.github.io/reform3d-website/}{\\highlightLR{REFORM-3D}}.",
    "published": "2026-11-06T08:15:48Z",
    "updated": "2026-11-06T08:15:48Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.10062"
  },
  {
    "id": "2611.09140",
    "title": "SPDMX: Large-Scale Open Stem Audio From Symbolic Music",
    "authors": [
      "Phillip Long",
      "Eduardo Escoto",
      "Julian McAuley",
      "Zachary Novack"
    ],
    "abstract": "Large public datasets have driven recent progress in machine learning, from text and vision to speech and general audio. Music remains an outlier, as copyright blocks redistribution of training audio, while many modern tasks need individual stems rather than mixtures. Existing multitrack resources trade off realism, scale, and licensing, while synthetic alternatives rely on proprietary VSTs or naive open rendering that yields weak stems. We introduce SPDMX, a listening-guided rendering of public-domain PDMX scores into an openly-licensed stem corpus with aligned scores and an open render pipeline: $253{,}982$ songs, $490{,}159$ mono stems, and $5{,}469$ song-hours at $44.1$ kHz under CC BY 4.0, with paired MIDI and identifiers linking to PDMX metadata. $88{,}403$ songs ($34.8\\%$; $2{,}734$ song-hours) provide multitrack supervision. To our knowledge, this is the largest openly-licensed synthetic multitrack subset by song-hours, enabling source separation, stem-conditioned synthesis, MIDI-to-audio, transcription, and joint symbolic-audio modeling. We release the corpus, metadata, and open pipeline for reuse on other symbolic collections. Demos and experimental notes are on the project page.",
    "published": "2026-11-06T08:14:47Z",
    "updated": "2026-11-06T08:14:47Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "cs.LG",
      "cs.MM",
      "eess.AS"
    ],
    "url": "https://arxiv.org/abs/2611.09140"
  },
  {
    "id": "2611.09139",
    "title": "CARGO: Causal Attribution and Responsibility-Guided Preventive Safe Multi-Agent Reinforcement Learning for Cooperative Driving",
    "authors": [
      "Jingjia Teng",
      "Yang Li",
      "Wenjie Huang"
    ],
    "abstract": "This study presents Causal Attribution and Responsibility-Guided Optimization (CARGO), a multi-agent reinforcement learning framework for cooperative on-ramp merging in mixed traffic. A shared latent-context posterior and an action-conditioned response model estimate directed behavioral influence, with posterior uncertainty propagated into interaction-edge selection. Complementary attribution mechanisms couple signed influence with marginal team utility for cooperative reward shaping and assign responsibility from positive excess tail risk relative to a safe reference policy. Conditional diffusion generates future responses for action-dependent risk estimation. Responsibility-guided preventive optimization calibrates agent-specific risk-reduction requirements to local capacity within a policy trust region, using reserved safety margins, adaptive requirement scaling, and joint feasibility verification. Theoretical analysis establishes risk monotonicity and sufficient local conditions for non-decreasing environmental return under explicit assumptions. Experiments in highway-env across three traffic densities, together with controlled graph-recovery and attribution studies, support the effectiveness of the framework. Under high-density traffic, CARGO increases the success rate by 66.04\\% and reduces the crash rate by 56.23\\% relative to the best evaluated baseline for each metric.",
    "published": "2026-11-06T08:14:00Z",
    "updated": "2026-11-06T08:14:00Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.09139"
  },
  {
    "id": "2611.09133",
    "title": "DINO-Nucleus: Multi-Level Self-Supervised Features for Nucleus Instance Segmentation",
    "authors": [
      "Mohammad Sarhangzadeh",
      "Elyar Esmaeilzadeh",
      "Doruk Oner"
    ],
    "abstract": "Nucleus instance segmentation and counting are essential for quantitative microscopy, enabling reliable analysis of cell populations, tissue organization, and disease-related changes. However, accurately separating touching nuclei remains difficult, and many existing approaches rely on complex models or sensitive post-processing procedures. We present DINO-Nucleus, a parameter-efficient framework that leverages multi-level self-supervised DINOv2 representations for nucleus instance segmentation and counting. The model jointly predicts nucleus regions, pixel-wise instance flows, and explicit nucleus centers, while a consistency objective encourages the predicted flows to converge toward their corresponding centers. Multi-level transformer features provide complementary spatial and semantic information, and the pretrained backbone is adapted using lightweight LoRA modules to reduce fine-tuning cost. Experimental results show that DINO-Nucleus achieves strong segmentation and counting performance with parameter-efficient backbone adaptation. These findings demonstrate that parameter-efficient adaptation of multi-level self-supervised features can provide an effective solution for nucleus instance segmentation in microscopy images.",
    "published": "2026-11-06T08:08:42Z",
    "updated": "2026-11-06T08:08:42Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.09133"
  },
  {
    "id": "2611.09129",
    "title": "TouchAnnotator: Multi-Source Tactile Supervision with Privileged-View Distillation",
    "authors": [
      "Ao Li",
      "Zhihao Yuan",
      "Chubin Zhang",
      "Kunrui Huang",
      "Sheng Xu",
      "Zengjue Chen",
      "Junjie Wang",
      "Jiawei Li",
      "Yansong Tang"
    ],
    "abstract": "Egocentric video captures human-object interaction at scale but rarely includes tactile labels for hidden contact and pressure. We introduce TouchAnnotator, an ego-only bimanual tactile annotator trained with multi-source tactile supervision and privileged-view distillation. A canonical hand field unifies glove pressure, geometry-derived human contact, and robot fingertip deformation from six datasets and three embodiments, while source-aware masks preserve valid targets. During training, an EMA teacher observes synchronized ego and wrist views and distills hand-local representations and tactile predictions into a student that uses only ego video and estimated pose at inference. Compact past-clip memory supplies temporal context. We evaluate on EgoTouch, zero-shot FPHA transfer, and 860 synchronized glove recordings. The model transfers to bare-hand contact and produces qualitatively coherent tactile responses across bare-hand, gloved-hand, and robot embodiments. On measured recordings, it improves temporal accuracy by 5.38 points and Volumetric IoU by 5.02 points under a shared protocol. These results show that heterogeneous human--robot supervision and privileged training views can turn egocentric video into dense tactile annotations.",
    "published": "2026-11-06T08:07:36Z",
    "updated": "2026-11-06T08:07:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.09129"
  },
  {
    "id": "2611.09123",
    "title": "Look Closer, Align Better: Explicit Visual Attributes for Robust EEG-to-Image Decoding",
    "authors": [
      "Ke Xiao",
      "Banghua Yang",
      "Wenbin Guo",
      "Fenqi Rong"
    ],
    "abstract": "EEG-to-image retrieval commonly aligns neural responses with representations from pretrained vision encoders. However, these representations may underrepresent fine-grained visual details needed to distinguish semantically similar images. To address this limitation, we first investigate the EEG decodability and complementary predictive value of explicit visual attributes, identifying visual cues that capture EEG-relevant information beyond pretrained representations. Building on these findings, we propose AttrEcho, a framework that enriches pretrained visual representations with complementary, spatially aligned visual attributes. Specifically, Region-Aligned Visual Attribute Fusion (RAVF) integrates EEG-relevant local visual attributes with spatially corresponding pretrained features through a learnable signed residual gate. We further employ Feature Token Aggregation (FTA), which learns dimension-specific weights across regions to aggregate refined visual features for contrastive alignment with EEG representations. Experiments on THINGS-EEG demonstrate that AttrEcho achieves 94.8% Top-1 and 99.7% Top-5 accuracy in intra-subject 200-way retrieval, while maintaining 82.1% Top-1 accuracy as the gallery expands to 1,600 images with same-concept distractors. AttrEcho also achieves 25.3% Top-1 and 53.0% Top-5 accuracy in inter-subject retrieval. These results highlight the importance of EEG-relevant visual attributes and spatially aligned fusion for fine-grained EEG-to-image retrieval.",
    "published": "2026-11-06T08:01:24Z",
    "updated": "2026-11-09T03:04:56Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.09123"
  },
  {
    "id": "2611.09121",
    "title": "CoMET: Tracking the Shared Pose Error of Roadside Messages for Asynchronous Vehicle-Infrastructure Cooperative 3D Detection",
    "authors": [
      "Shuwei Sun",
      "Jian Huang",
      "Hui Cao"
    ],
    "abstract": "A roadside sensor can detect vehicles hidden from the ego vehicle, but a pose error shifts every detection in the same message. We study asynchronous vehicle-infrastructure cooperative 3D detection on V2X-Seq using only information available at decision time, without ground truth, future frames, or per-pair calibration offsets at inference. Objects seen by both sensors reveal the shared translation, but even at zero added delay, 38% of validation messages have no matched pair. We propose CoMET (Common-Mode Error Tracking), which estimates this translation over time. At each message arrival, CoMET matches vehicle and roadside detections, estimates the offset from mutually nearest pairs, and updates a Kalman filter for that sender. When no pair matches, the filter carries its estimate forward. The correction applies to all roadside boxes, including those unseen by the ego vehicle. The estimator has no learned parameters; a separate frozen head ranks the merged detections. Across four delays from 0 to 400 ms on 21 validation sequences, CoMET averages 66.63 bird's-eye-view AP at IoU 0.7, compared with 63.18 for the same late fusion using uncorrected online poses and 62.96 for the best intermediate-fusion baseline. Across five detectors from three architectures, CoMET gains 2.2 to 3.5 AP points over online poses and 0.3 to 0.6 over estimating the offset from the current message alone. We find that the benchmark uses a zero offset as a placeholder in 28% of validation messages and that its offset search reaches the boundary in 45% of the rest. These offsets affect the labels for objects seen only from the roadside. Under two alternative label references, CoMET improves on uncorrected online poses in every evaluated population. Retraining intermediate fusion with CoMET poses and corrected labels improves detection on all three architectures tested, with statistically significant gains on two.",
    "published": "2026-11-06T07:59:24Z",
    "updated": "2026-11-06T07:59:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.09121"
  }
];
