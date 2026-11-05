window.PAPER_DATA_UPDATED_AT = "2026-11-05";
window.PAPER_ITEMS = [
  {
    "id": "2611.06918",
    "title": "From Pixels to Actions - Towards Native Vision-Language-Action Policies",
    "authors": [
      "Weichen Fan",
      "Haiwen Diao",
      "Penghao Wu",
      "Siyuan Hu",
      "Ziqi Huang",
      "Tianqi Liu",
      "Mingze Sun",
      "Ziyi Wang",
      "Zhongang Cai",
      "Hanming Deng",
      "Quan Wang",
      "Lei Yang",
      "Lewei Lu",
      "Fangzhou Hong",
      "Zhaoxi Chen",
      "Dahua Lin",
      "Ziwei Liu"
    ],
    "abstract": "Vision-language-action models are typically built on a simple premise: perception is first compressed by visual encoders, and action reasoning begins only afterwards. Yet manipulation often hinges on precisely the visual signals most vulnerable to this abstraction, e.g., local geometry, boundaries, depth, and subtle state changes. This raises a fundamental question: should action policies inherit a fixed visual endpoint, or directly access evolving visual computation? We introduce NEO-VLA, a structurally encoder-free vision-language-action framework. Images are tokenized by lightweight patch convolutional layers and evolve jointly with language throughout the backbone, allowing a flow-matching action expert to draw from instruction-conditioned visual representations at different depths. This simple change reveals a consistent pattern. Native architectures outperform encoder-based counterparts under controlled comparisons; full fine-tuning reduces but does not erase the gap, and additional scale alone cannot recover it. More strikingly, layer-wise probing shows that the action-critical signals often peak well before the final visual representation. Across diverse manipulation settings and distribution shifts, NEO-VLA consequently achieves stronger and more robust control. Together, these results suggest that embodied control benefits from access to visual representations across the computational hierarchy, rather than a fixed encoder output.",
    "published": "2026-11-04T18:59:58Z",
    "updated": "2026-11-04T18:59:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.06918"
  },
  {
    "id": "2611.06911",
    "title": "BEAKER: An Expert-Curated Benchmark for Embodied Brains in Self-Driving Chemical Laboratories",
    "authors": [
      "Fei Lin",
      "Tengchao Zhang",
      "Ziyang Gong",
      "Xiaotong Yu",
      "Bohan Zhang",
      "Yifan Zhou",
      "Qihao Yang",
      "Ji Dai",
      "Dong Li",
      "Yining Jiang",
      "Qinghua Ni",
      "Jun Huang",
      "Qiang Zhang",
      "Yue Zhou",
      "Zhihang Zhong",
      "Yonglin Tian",
      "Fei-Yue Wang",
      "Xue Yang"
    ],
    "abstract": "Self-Driving Chemical Laboratories (SDCLs) are moving chemical experimentation toward embodied automation, where machines must perceive laboratory scenes, reason about experimental states, and act under physical, procedural, and safety constraints. Although Multimodal Large Language Models (MLLMs) are increasingly considered as embodied brains for such systems, existing laboratory benchmarks mainly focus on safety, anomaly detection, or general scientific understanding, leaving their execution-oriented embodied capabilities underexplored. To fill this gap, we introduce BEAKER, a Benchmark for evaluating Embodied Actionability, Knowledge, Experimentation, and Reasoning in SDCLs. BEAKER contains 1,000 expert-curated question-answer samples across 11 image and video task types, covering key judgments required for chemical laboratory execution, including affordance grounding, trajectory planning, equipment, state, and safety recognition, apparatus setup, operation and step reasoning, and temporal procedure reasoning. All questions and annotations are manually created and reviewed by chemistry and embodied Artificial Intelligence (AI) experts, without AI-assisted generation or annotation. We evaluate 28 general-purpose, science-oriented, chemistry-specialized, and embodied MLLMs in an offline, single-turn setting. Results show that current models can follow coarse experimental procedures in videos, but still struggle to ground actions into operable regions and feasible trajectories, to recognize fine-grained laboratory apparatus, states, and safety norms, and to order steps in mid-length procedures. BEAKER thus reveals a clear gap between coarse procedural understanding and the precise, action-grounded perception required for laboratory execution, providing a diagnostic benchmark for future MLLMs in SDCLs.",
    "published": "2026-11-04T18:57:17Z",
    "updated": "2026-11-04T18:57:17Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.06911"
  },
  {
    "id": "2611.06910",
    "title": "FrontierPhysics: Evaluating Agents for End-to-End Physics Research",
    "authors": [
      "Bingran You",
      "Wenjun Ke",
      "Ria Rosenauer",
      "Bo Liu",
      "Wenbo Chen",
      "Min Chen",
      "Shuqi Xu",
      "Yue Ma",
      "Jiechao Feng",
      "Bo Chen",
      "Xiangkai Sun",
      "Jiarui Liu",
      "Jinen Guo",
      "Zeyu Zhou",
      "Xu Huang",
      "Zhuohan Li",
      "Haoyu Li",
      "Heguang Lin",
      "Lijie Ding",
      "Yadong Zeng",
      "Kangqi Zhang",
      "Xinge Liu",
      "Hanwen Liu",
      "Zhenghong Li",
      "Alexander von Recum",
      "Yuchen Zhu",
      "Felix Schwarzfischer",
      "Yizhou Zhao",
      "Jicheng Wang",
      "Binxu Li",
      "Qian Yu",
      "Chan Li",
      "Cheng Dai",
      "Di Wang",
      "Haoyu Zhang",
      "Jiankai Sun",
      "Kaituo Feng",
      "Mian Qin",
      "Ruihong Yin",
      "Yiqun Luo",
      "Weiwei Wu",
      "Shihong Pan",
      "Tsung Yeh Hsieh",
      "Xiao Huang",
      "Yan Zhang",
      "Sihan Li",
      "Zirui Ren",
      "Zengji Tu",
      "Kyoung Whan Choe",
      "Ke Sun",
      "Vincenzo Galia",
      "Vaisakhi Mishra",
      "Jiashu He",
      "Hongyang Wang",
      "Zhiheng Yang",
      "Shubham Gaur",
      "Yifan Gu",
      "Shuyi Wang",
      "Zihao Zuo",
      "Steven Dillmann",
      "Yiyou Sun",
      "Xinyang Han",
      "Hanchung Lee",
      "Molei Tao",
      "Yue Zhao",
      "Shilong Liu",
      "Yuchen Wu",
      "Xuandong Zhao",
      "Xiangyi Li",
      "Florian Brand",
      "Gerbrand Ceder",
      "Hartmut Haeffner"
    ],
    "abstract": "AI agents are playing an increasingly important role in physics research. However, existing physics benchmarks only evaluate fixed questions, isolated sub-tasks, or paper reproduction with given solutions, and rarely check research quality alongside correctness. We introduce FrontierPhysics, an end-to-end benchmark with 56 tasks made by 42 physicists based on their own research, covering nine domains across theoretical, computational, and experimental physics. Each task requires agents to review the literature, develop a research plan, conduct research and experiments, and produce structured outputs and scientific manuscripts. Combining deterministic verifiers with expert-authored rubrics, FrontierPhysics evaluates whether agents' research is correct and publishable. Across 22 models in 26 configurations, no configuration passes more than 46 of its 168 rollouts. Manual review of agent trajectories shows that frontier agents' main weaknesses are insufficiently rigorous reasoning and limited expert intuition, rather than gaps in physics knowledge or execution errors.",
    "published": "2026-11-04T18:56:22Z",
    "updated": "2026-11-04T18:56:22Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.06910"
  },
  {
    "id": "2611.06908",
    "title": "Perceptive Humanoid Motion from Simulation",
    "authors": [
      "Siyuan Hu",
      "Abulikemu Abuduweili",
      "Yue Meng",
      "Shipeng Liu",
      "Quentin Leboutet",
      "Chen Chen",
      "Matthias Müller",
      "Vladlen Koltun"
    ],
    "abstract": "Humanoid robots have the potential to automate a wide range of physical tasks. Progress toward generalist humanoid autonomy, however, remains constrained by a data bottleneck: mapping pixels and free-form language to low-level joint commands requires paired supervision, and no corpus of such data exists at sufficiently large scale. Some approaches rely on human teleoperation and wearable capture devices, which require at least an hour of human time to produce an hour of data. We present HALO, a humanoid autonomy system powered by a pipeline that synthesizes vision-language-motion data across a thousand procedurally generated homes. The corpus scales with compute rather than human labor. HALO acquires a repertoire of physical skills, including sitting on chairs, navigating to named objects, stepping sideways through half-open doors, crouching and crawling beneath tables, and pushing boxes. It orchestrates these skills to solve composite, long-horizon tasks. Without ever seeing a real home during training, HALO transfers zero-shot to the physical world, achieving a 91% success rate across 360 trials in six unmapped real-world environments. See https://apple-aiml-research.github.io/ml-halo/ for code and videos.",
    "published": "2026-11-04T18:55:33Z",
    "updated": "2026-11-04T18:55:33Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.06908"
  },
  {
    "id": "2611.06901",
    "title": "Motion-guided Contrastive Regularization For Latent World Models",
    "authors": [
      "Yiwen Chen",
      "Qiqi Hou",
      "Jisoo Jeong",
      "Yinhao Zhu",
      "Huaizu Jiang",
      "Amir Said"
    ],
    "abstract": "JEPA-style world models learn action-conditioned latent dynamics without reconstructing observations, but distributional regularization alone does not ensure that their representations preserve information needed for control. We identify static collapse, a failure mode in which the encoder preserves episode-specific static content while suppressing manipulation-relevant state changes. Because static content is temporally predictable yet diverse across episodes, this failure can persist despite regularizers such as SIGReg. A controlled study on OGBench-Cube shows that introducing randomized backgrounds substantially degrades planning performance while leaving the underlying manipulation task unchanged. To address this problem, we propose motion-guided contrastive regularization. Our approach compares predicted latent transitions with transitions to candidate observations from the same episode, reducing the usefulness of static background identity for distinguishing action outcomes. Optical-flow similarities provide soft contrastive targets, allowing candidates with similar motion to receive similar supervision. Combined with latent prediction and SIGReg, our objective encourages representations to preserve within-episode state distinctions and similarities between related transitions. Our method improves planning success over LeWorldModel (LeWM) from 52% to 78% on OGBench-Cube with randomized backgrounds and from 14% to 54% on LIBERO-Object, while maintaining comparable performance on four other visual-control benchmarks.",
    "published": "2026-11-04T18:49:35Z",
    "updated": "2026-11-04T18:49:35Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.06901"
  },
  {
    "id": "2611.06899",
    "title": "Occlusion for Free: Detecting Occlusion from the Disagreement Between Two Monocular Distance Cues",
    "authors": [
      "Chibueze Praise Onyenweaku",
      "Toyibat Adele",
      "Sikirulahi Opeyemi Abdulkareem",
      "Obed Honour Eje"
    ],
    "abstract": "Knowing that a pedestrian is occluded is useful to a robot even when the detector cannot recover the hidden pixels, but occlusion estimators are normally trained on occlusion annotations that deployment settings rarely have. We show that occlusion can be read off two distance estimates a camera-only pipeline already computes. Apparent height is largely unchanged by occlusion, because the detected box still spans the whole person; monocular metric depth is pulled toward the occluder, because the nearest surface inside the box is what a depth map reports. Only their ordering matters, so no focal length, stature, or depth scale is needed, provided the depth model's error is close to a pure gain, a condition that can be checked without labels. The score detects heavy occlusion on KITTI with AUC 0.909 (0.888 over all annotated pedestrians, including those the detector misses), requires no training and no occlusion labels, and is not a proxy for range: within fixed distance bands it holds AUC 0.894-0.925 while true distance alone sits near chance. On synthetic CARLA scenes with measured visibility it reaches 0.819, against 0.644 for distance alone. We arrived here after measuring three standard architectural responses to occlusion, depth fusion, occlusion-simulating augmentation, and attention, none of which improved detection outside its training distribution in the configurations we tested, and after finding that a detector trained on German roads loses half its accuracy on self-annotated street scenes in Lagos, Nigeria. Signals that need no local annotation are worth more in settings that benchmarks do not represent.",
    "published": "2026-11-04T18:49:13Z",
    "updated": "2026-11-04T18:49:13Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.06899"
  },
  {
    "id": "2611.06890",
    "title": "Procedural Adversarial Learning",
    "authors": [
      "Jack Nugent",
      "Jia Deng"
    ],
    "abstract": "For many computer vision tasks, neural networks can be trained to produce a low average error, yet they still fail on seemingly simple scenes. Reducing these failures requires first finding them, but they may not be in a fixed dataset. We study procedural adversarial learning (PAL), a framework of minimax training and adversarial evaluation which searches the input space of a procedural generator for difficult instances. The procedural generator is an interpretable program mapping a low-dimensional vector of control parameters (e.g. layout, lighting, pose) to a rendered image and its label. We introduce the Simple-PAT algorithm, which uses zeroth-order optimization in the procedural generator's parameter space to propose adversarial training samples that are generated on demand. We also create PAL-Dojo, a collection of efficient procedural generators for surface normal estimation, image segmentation, and human pose estimation. Against a cross-model black-box adversary with 50M aggregate queries, Simple-PAT reduces worst-case error by a geometric mean of 3.15x compared to standard training and 2.63x compared to the strongest robust training baseline. Code is available at https://github.com/princeton-vl/procedural-adversarial-learning.",
    "published": "2026-11-04T18:42:28Z",
    "updated": "2026-11-04T18:42:28Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.06890"
  },
  {
    "id": "2611.06888",
    "title": "Dull, Dirty, Dangerous? Working Conditions and the Limits of Occupational AI Exposure",
    "authors": [
      "Siyi Yu"
    ],
    "abstract": "Automation is often justified as relief from dull, dirty, and dangerous work. I examine how these conditions relate to occupational AI exposure using 21 O*NET items across 754 US occupations. Higher exposure is associated with lower condition scores under a large language model (LLM) measure and AI Occupational Exposure (AIOE), with equal occupation weights and employment weights. Adjustment for physical demands, required education, training and experience, and wages reduces the composite association. The adjusted confidence intervals include zero for LLM exposure and remain below zero for AIOE. Separating repetition from restricted discretion also changes what the combined Dull score conveys. These comparisons show how item groupings and occupational characteristics shape the interpretation of exposure estimates. Occupational profiles offer a starting point for selecting contrasting research settings. Establishing desired automation or realized relief requires evidence about workers' preferences and specific interventions.",
    "published": "2026-11-04T18:41:40Z",
    "updated": "2026-11-04T18:41:40Z",
    "categories": [
      "cs.AI",
      "cs.HC",
      "econ.GN"
    ],
    "url": "https://arxiv.org/abs/2611.06888"
  },
  {
    "id": "2611.06874",
    "title": "Learning to Decode Linear Codes with Generalized Belief Propagation Network",
    "authors": [
      "Samira Malek"
    ],
    "abstract": "Error correcting codes are a fundamental component of communication systems, enabling reliable data transmission over noisy channels. Recently, neural decoders have demonstrated notable performance gains over classical iterative algorithms. In this paper, we propose a Generalized Belief Propagation Network (GBPNet) that preserves message-passing symmetry while enhancing the decoder's learning capability. The architecture uses cascaded variable-node updates and learned element-wise message scaling while retaining the Tanner graph structure. We also introduce two training strategies, progressive training and high-SNR training, that improve decoding accuracy. Experimental results on several linear codes show that GBPNet achieves lower bit error rates than conventional belief propagation and the evaluated state-of-the-art neural decoders.",
    "published": "2026-11-04T18:29:31Z",
    "updated": "2026-11-04T18:29:31Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.06874"
  },
  {
    "id": "2611.06870",
    "title": "PixelSpline: Continuous Space-Time Video Super-Resolution via Endpoint-Anchored Shared Pixel Trajectories",
    "authors": [
      "Wanqi Yuan",
      "Nianyi Li"
    ],
    "abstract": "Existing continuous space-time video super-resolution methods often infer motion from only two endpoint frames and model the two motion directions independently, making them vulnerable to ambiguous correspondence and inconsistent trajectories. We introduce a continuous STVSR framework that combines long-context encoding, continuous HR feature lifting, and an endpoint-anchored PixelSpline. Long-range observations provide more reliable endpoint representations, while continuous upsampling constructs detailed appearance features directly on the requested HR grid. PixelSpline explicitly models each pixel's motion as a single continuous trajectory shared by both endpoints. Using this trajectory, our method warps endpoint colors into a coarse intermediate frame and aligns the HR features for residual reconstruction. Experiments across spatial and temporal upsampling settings demonstrate that the proposed framework offers a favorable quality--efficiency trade-off.",
    "published": "2026-11-04T18:25:55Z",
    "updated": "2026-11-04T18:25:55Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.06870"
  },
  {
    "id": "2611.06868",
    "title": "On Turn-Level Best-of-N Sampling for Scaling LLM Agents",
    "authors": [
      "Jalaj Bhandari",
      "Dhawal Gupta",
      "Hongli Zhan",
      "Zhenting Wang",
      "Varad Pimpalkhute",
      "Zhengzhong Liu",
      "Eric Xing",
      "Rupesh Srivastava"
    ],
    "abstract": "In this work, we evaluate a simple inference-time scaling approach based on \\textit{turn-level best-of-N sampling} (\\method) for large language model (LLM) agents on complex, long-horizon tasks. We instantiate this using a \\textit{generator-selector} framework with two LLMs; at each turn, a \\emph{generator} model generates $N$ candidate actions and a \\emph{selector} model selects one of them, which is then executed in the environment. This paper is closely related to the work of \\cite{zainullina2025guided} who used critic models for guided search at inference time. Different from their work, we evaluate if off-the-shelf, open-weight LLMs can be effective at comparing different candidate actions directly. Experiments on long-horizon terminal tasks show that \\method can lead to significant performance improvements, both in terms of accuracy (5--10\\%) and consistency across repeated attempts. Analysis of agent trajectories reveal a shift in agent behaviour towards desirable patterns such as reduction in number of attempts to solve the task, improved task instruction following, debugging and testing.",
    "published": "2026-11-04T18:23:14Z",
    "updated": "2026-11-04T18:23:14Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.06868"
  },
  {
    "id": "2611.06864",
    "title": "CounterFactual Retrieval for Evidence-Aware Individual Animal Identification",
    "authors": [
      "Ankit K. Upadhyay",
      "Aleksandr Algasov",
      "Ekaterina Nepovinnykh",
      "Fedor Zolotarev",
      "Tuomas Eerola",
      "Heikki Kälviäinen",
      "Charles V. Stewart",
      "Lukas Picek"
    ],
    "abstract": "Automated identification of individual animals is moving from small curated studies toward shared benchmarks and reusable foundation models. This progress is useful, but current evaluation leaves the evidence behind a match unresolved, i.e., high retrieval accuracy does not show whether a model used animal features or identity-correlated shortcuts. We address this with Counterfactual Foreground Retrieval (CFR), an evidence-aware evaluation protocol. CFR evaluates the same query-gallery task under different views: full image, foreground-only, and shortcut-only. The full-image measures standard retrieval performance; the foreground-only measures foreground-supported retrieval; and shortcut-only view measure how much identity signal is recoverable from background, or silhouette. This turns a retrieval score into an evidence profile: how well the model performs on the original images, how much of that performance remains when only the animal is visible, and how much identity signal remains recoverable when the animal is removed. We release around 0.5M masks for 34 datasets and code for mask generation and CFR evaluation.",
    "published": "2026-11-04T18:19:26Z",
    "updated": "2026-11-04T18:19:26Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.06864"
  },
  {
    "id": "2611.05559",
    "title": "How Finely Can Vision-Language Models See Biology? Bio-VQA: A Benchmark for Taxonomic, Morphological, Spatial and Individual Reasoning",
    "authors": [
      "S M Rayeed",
      "Qian Ma",
      "Charles V. Stewart",
      "Yao Ma"
    ],
    "abstract": "In biodiversity monitoring, a single image raises several questions: which taxon, how many, which trait, and whether the individual has been seen before. Vision-language models (VLMs) could answer all of these from the image, but their ability is largely untested in biology, as existing benchmarks focus mostly on species identification within a few taxonomic groups. We present Bio-VQA, the largest biological visual question answering (VQA) benchmark and the only one to span four aspects of biological visual understanding: hierarchical taxonomic reasoning, fine-grained attribute grounding, quantitative spatial reasoning, and individual re-identification. Bio-VQA contains 1.86M questions over 217K images from 11 public datasets, and extends right-or-wrong scoring to graded scoring, so a near-miss counts for more than a distant one. Evaluating 18 open-weight models from 3.75B to 38.4B parameters, we find that general visual capabilities do not transfer to biological organisms: the best model counts animals exactly on 41.7% of images with 2 to 10 individuals, less than half its accuracy on everyday objects at the same counts. Taxonomic accuracy falls to one sixth, from 0.72 at phylum to 0.12 at scientific name, and scaling helps mostly at coarse ranks. The gap to a domain specialist widens accordingly, from 0.731 against BioCLIP-2's 0.874 at class (1.2x) to 0.269 against 0.544 at scientific name (2x). On trait size measurement, 15 of the 18 models do no better than an image-blind baseline that predicts one fixed number for every specimen, and on re-identification, 17 of the 18 models fall below chance under adversarial conditions. These failures persist across a tenfold range of model size. We hope Bio-VQA becomes a standard test of how well VLM capabilities transfer to the biological domain.",
    "published": "2026-11-03T19:51:00Z",
    "updated": "2026-11-03T19:51:00Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.05559"
  },
  {
    "id": "2611.05556",
    "title": "AGORA: Reliability-Aware Aggregation of LLM Judges via Item-Response Theory",
    "authors": [
      "Junhyung Ahn"
    ],
    "abstract": "LLM-as-a-judge is a common substitute for costly human evaluation, and aggregating several judges is the standard remedy for any single judge's bias. Judge pools mix judges of very different reliability, while the human-labeled sets that validate them hold a few hundred items or fewer. In this regime the per-item mean weights weak judges as heavily as strong ones, and confusion-table models such as Dawid-Skene must estimate a per-judge error table from too few items. We propose AGORA (Aggregation Of Reliability-weighted Assessments), an item-response-theory aggregator that places every item on one latent quality scale and describes each judge by a sensitivity parameter and ordered rating thresholds, so judge reliability is learned from all items jointly and without human labels. Across three benchmarks, AGORA matches or exceeds Dawid-Skene on large evaluation sets, and its advantage widens as the set shrinks toward a few hundred items. It remains accurate as pools grow more uneven, a label-free dispersion statistic indicates in advance when trust weighting helps, and its learned trust weights track per-judge human validity.",
    "published": "2026-11-03T19:49:01Z",
    "updated": "2026-11-03T19:49:01Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.05556"
  },
  {
    "id": "2611.05553",
    "title": "Decision Models as Scalable Economic Surrogates that Capture Human Variation",
    "authors": [
      "Maxime Saxena",
      "Fabio Caccioli",
      "R. Maria del Rio-Chanona"
    ],
    "abstract": "Decision Models (DMs), a new class of AI models, give fast responses and return a probability distribution over a fixed set of options. These properties make them candidate human surrogates in economic simulations and surveys, a role increasingly filled by Large Language Models (LLMs), which are costly at scale and under-represent the variation in human behaviour. We present a first evaluation of DMs as human surrogates in economics, comparing 10 DMs with 8 LLMs in three economic settings: a household spending survey on consumption, several classic economic games and a labour-market field experiment. Frontier DMs, those that score highest on general decision-making benchmarks, reproduce the variation in human responses more closely than LLMs in all three settings. They capture the modal human response as well as LLMs in the spending survey, but less well in the economic games. Frontier DMs are also roughly ten times faster than the fastest LLM and can be over a hundred times cheaper. Together, these results suggest that DMs capture the heterogeneity of human behaviour better than LLMs and make large-scale economic simulations more feasible.",
    "published": "2026-11-03T19:47:00Z",
    "updated": "2026-11-03T19:47:00Z",
    "categories": [
      "econ.GN",
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2611.05553"
  },
  {
    "id": "2611.05551",
    "title": "VirtualTrialHarness: Coordinating Agentic Operationalization of Virtual Trial Protocols Across Complex Clinical Schemas",
    "authors": [
      "Pengze Li",
      "Jingna Feng",
      "Yue Yu",
      "Yining Wu",
      "Xinyue Hu",
      "Jie Lin",
      "Avanti Bhandarkar",
      "Cui Tao"
    ],
    "abstract": "Virtual trials use routinely collected clinical data to evaluate treatment strategies, but translating a study protocol into an executable analysis requires determining how clinical concepts and study requirements should be represented in the available data and applied consistently across the workflow. These decisions depend on local data representations and operational conventions and can involve source selection, patient and encounter identity, linkage, and temporal interpretation. Here we introduce VirtualTrialHarness (VTHarness), an agent framework that coordinates virtual-trial operationalization by selecting reusable procedural skills for each workflow stage and uses explicit contracts to maintain consistent study decisions across stages. We also introduce VTBenchmark for evaluating source selection and cohort construction. Across three complex synthetic environments, VTHarness successfully produced all required cohort outputs matching the references in 95.1% of workflows after requirement clarification, compared with 60.4% using retrieval from the same procedural corpus. Procedural skills improved source recovery across three language models and increased source overlap with analyst code in 13 Mayo Clinic cases. Site-specific adaptation enabled reference-matched cohort execution across eight MIMIC-IV tasks. Within the Mayo Clinic Virtual Trials Program, the framework supported investigator review of cohort construction and endpoint analysis. These findings support coordinating procedural guidance with workflow decisions to improve virtual-trial implementation across complex clinical schemas.",
    "published": "2026-11-03T19:45:21Z",
    "updated": "2026-11-03T19:45:21Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.05551"
  },
  {
    "id": "2611.05549",
    "title": "Whose Transparency is it Anyway? Understanding Generative AI Transparency Needs and Gaps Across Stakeholders",
    "authors": [
      "Genevieve Smith",
      "Sahiba Chopra",
      "Natalia Luka",
      "Min Kyung Lee"
    ],
    "abstract": "Transparency has become a central principle in AI governance, yet there is little agreement about what transparency means, for whom, and in what contexts. Drawing on interpretive flexibility within the Social Construction of Technology, this paper examines how different stakeholders understand and experience transparency in generative AI. This study draws from a global survey of 400 end-users, AI builders, and policymakers, complemented by a structured focus group with end-users, grounding the quantitative findings in qualitative insights from the group most underserved by current transparency practice. We present three key findings. First, all three groups share similar understandings of what transparency means and what it should afford, centered on ensuring accuracy and privacy. Second, gaps between the importance of transparency features and their perceived availability are substantially larger for end-users than builders, revealing how power shapes what gets built and who it serves. Only 28% of end-users report that current transparency practices reflect their needs very well, compared to 53% of builders and 49% of policymakers. Third, transparency is situationally constructed, priorities shift with context and task structure, with role-specific frames activating when context demands them and receding when it does not. We argue that meaningful AI transparency requires moving beyond a one-size-fits-all solution, including current emphases on AI disclosure and static documentation, toward pluralistic transparency infrastructures that reflect the needs of diverse users and stakeholders.",
    "published": "2026-11-03T19:40:36Z",
    "updated": "2026-11-03T19:40:36Z",
    "categories": [
      "cs.AI",
      "cs.CY",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.05549"
  },
  {
    "id": "2611.05548",
    "title": "Iterated creation, grading, and revision of data science projects by language models",
    "authors": [
      "Rohan Alexander"
    ],
    "abstract": "We evaluate the extent to which agentic AI models can complete an end-to-end data science project, and how this improves with feedback. A 'writer' model with specific tools creates a complete data science project including downloading, cleaning, and analyzing a dataset, and writing a short paper about it. The project is executed and a 'grader' model evaluates it. The writer can then revise its submission, and this repeats for a total of three rounds. We consider seven models from five developers: Anthropic, OpenAI, Google, DeepSeek, and Z.AI. Each model is both a writer and a grader, so there are 49 writer-grader pairs and we run each pair three times. Of the 147 initial submissions, 107 run and render, and the average score increases from 59 per cent to 76 per cent after the final round of feedback. By writer the extent of the increase ranges from 3 percentage points for Anthropic's Opus 5.5 to 46 percentage points for Anthropic's Haiku 4.5, and by grader it ranges from 13 percentage points for Google's Gemini 3.8 Flash to 32 percentage points for Anthropic's Haiku 4.5. When a model grades its own writing the score tends to be about 9 percentage points higher than the average of what the other models give it. About half of the difference that we see from round to round is within the grader's own noise. Feedback generally results in the highest marks, but even just having the chance to revise, or having the additional budget, in terms of time or tool calls, without any feedback, results in considerable increases for some of the models but not for others. We find that how much such a loop helps depends on which model plays which role, but weaker models generally do not improve stronger models.",
    "published": "2026-11-03T19:39:03Z",
    "updated": "2026-11-03T19:39:03Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.05548"
  },
  {
    "id": "2611.05542",
    "title": "Towards Efficient Whole Page Ranking with One-Pass Inference",
    "authors": [
      "Qi Xu",
      "Zhigang Hua",
      "Zijie Lei",
      "Yan Xie",
      "Jizhe Zhang",
      "Lynn Lu",
      "Delun Du",
      "Sha Hua",
      "Ren Mao",
      "Ke Pan",
      "Haomin Yu",
      "Sandeep Pandey",
      "Luke Simon"
    ],
    "abstract": "Whole-page ranking jointly optimizes advertisements and organic content to balance business outcomes and user engagement under complex layout and business constraints. Existing non-autoregressive (NAR) approaches enable efficient page generation but typically score candidate items independently of previously selected items, limiting their ability to capture order-dependent interactions. Autoregressive (AR) methods address this limitation through sequential conditioning, but incur substantial inference overhead that challenges large-scale deployment. Bridging this quality-efficiency gap remains a challenge in industrial whole-page ranking. We propose Multi-Item Scoring (MIS), a prefix-aware NAR-style framework that incorporates sequential context into efficient multi-item scoring. MIS integrates global candidate interactions, localized prefix conditioning, and position-aware scoring within a shared representation architecture. By computing reusable representations once per request and performing lightweight prefix-conditioned scoring during constrained beam search, MIS captures important sequential dependencies without repeated full-model inference. Experiments on KuaiRand-1K and RL4RS demonstrate that MIS approaches the generation quality of an autoregressive CGA baseline while achieving 4.07x and 3.54x faster CPU decoding, respectively. In a randomized evaluation on a large-scale social-video platform, MIS improves the realization metric by 0.104% and watch time by 0.058%, while reducing ranking-service CPU consumption by 9.73%. These results demonstrate that prefix-aware multi-item scoring can narrow the quality gap between NAR and AR generation while retaining the efficiency required for industrial scalability.",
    "published": "2026-11-03T19:33:22Z",
    "updated": "2026-11-03T19:33:22Z",
    "categories": [
      "cs.AI",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2611.05542"
  },
  {
    "id": "2611.05539",
    "title": "Rewrite, Then Veto: Rewriter-Agnostic Edit Gating for LLM-Based Post-OCR Correction",
    "authors": [
      "Jorge Ramón Fonseca Cacho"
    ],
    "abstract": "LLMs can repair noisy OCR transcripts of historical documents, but they also change text that was already correct. We propose EditVeto, a veto gate placed after a full-context LLM rewrite. The rewrite is character-aligned to the OCR input, its differences are split into blocks, and a 0.6B-parameter gate keeps or reverts each block. An oracle analysis motivates the design: given the true error locations, per-span generation is worse than no correction, whereas vetoing a full rewrite's edits helps. Trained on rewrites by two Qwen3 models and evaluated, frozen, on the eight HIPE-OCRepair-2026 test sets, the gate improves all five rewriters tested, two of them unseen in training: weighted cMER falls by 0.0026-0.0044 and the preference score rises by 0.15-0.25 (paired bootstrap, p ~ 0.0002 each). On published competition outputs it lowers cMER for three of four teams but raises it for the winning run (0.0050 to 0.0065). In a second, disclosed test look, a retrained gate still improves LoRA-tuned rewriters (cMER -0.0011 to -0.0021), and an ensemble of their gated edits reaches a cMER of 0.0069 and a preference score of 0.928, mostly through fine-tuning and pooling rather than gating. Built only on public models and data, it is behind the winner (0.0050) and tied with the second-ranked run (0.0071), both from the only team using domain pre-training, and ahead of all other published runs. A third, secondary look shows the unchanged gate improving zero-shot Qwen3.8-27B (cMER 0.0114 to 0.0108) but only the preference score of its LoRA-tuned version.",
    "published": "2026-11-03T19:31:36Z",
    "updated": "2026-11-03T19:31:36Z",
    "categories": [
      "cs.CL",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.05539"
  },
  {
    "id": "2611.05524",
    "title": "MA-SafeDiffuser: Safe Multi-Agent Planning with Diffusion Probabilistic Models",
    "authors": [
      "Kiran Ravish",
      "Ankita Kushwaha",
      "Preeti",
      "Pawan Kumar"
    ],
    "abstract": "We propose MA-SafeDiffuser, a multi-agent extension of SafeDiffuser that equips diffusion-based trajectory planners with finite-time diffusion invariance guarantees for joint-agent safety specifications. Building on the single-agent construction that embeds control barrier function (CBF) constraints into reverse-diffusion updates, we: (i) formalize joint safe sets as intersections of per-agent and pairwise barrier sets; (ii) derive centralized and decentralized (communication-aware) constrained denoising procedures with provable invariance under mild assumptions; (iii) address local-trap and deadlock phenomena via time-varying specifications and liveness CBFs; and (iv) develop a lightweight benchmarking suite including a multi-agent Maze2D domain. Empirically, MA-SafeDiffuser reduces violation counts relative to unconstrained diffusion baselines, while retaining planning quality. We provide algorithms, proofs, and reference implementations.",
    "published": "2026-11-03T19:20:32Z",
    "updated": "2026-11-03T19:20:32Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2611.05524"
  },
  {
    "id": "2611.05522",
    "title": "From Activation to Intervention: Interpreting Sparse Visual Features through Reconstruction",
    "authors": [
      "Jianyang Gu",
      "Jacob Beattie",
      "Mridul Khurana",
      "Julia Chae",
      "Xi Xiao",
      "Cheng Zhang",
      "Anuj Karpatne",
      "Wei-Lun Chao",
      "Sara Beery",
      "Tanya Berger-Wolf"
    ],
    "abstract": "Sparse autoencoders (SAEs) decompose visual representations into individual features, offering a promising basis for explaining model behavior. Interpreting these features typically relies on images or pixel regions that most strongly activate them. However, this evidence becomes ambiguous when multiple features with different semantics frequently activate in the same locations, such as texture and color in the same patterns. We propose Reconstructive SAE Intervention (RecSAEI), a framework that shifts feature explanation from passive observation to active visual reconstruction. By intervening on representations along SAE decoder directions and reconstructing the visual output, we provide direct evidence of a feature's semantic meaning. We demonstrate that our method successfully disambiguates feature meanings across multiple datasets and vision encoders. Furthermore, our framework grounds [CLS] SAE interventions in a sparse set of patch SAE decoder directions. Beyond stable target response, this attribution also exposes the compositional relationship between elementary visual patterns and high-level semantics. Our results advocate for intervention reconstruction as an essential complementary signal for explaining neural networks.",
    "published": "2026-11-03T19:17:24Z",
    "updated": "2026-11-03T19:17:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.05522"
  },
  {
    "id": "2611.05517",
    "title": "When to Ask, When to Answer: Strategic Clarification for Ambiguous Reference Resolution in Dialogue",
    "authors": [
      "Ibrahim Khebour",
      "Nikhil Krishnaswamy"
    ],
    "abstract": "For humans, referential disambiguation is a collaborative process involving clarification questions asked when they will meaningfully change the outcome. However, large language models (LLMs) have been shown to be biased toward premature answering, preferring definite single-turn responses over more clarification exchanges. In this paper, we study the problem of \"strategic clarification\" -- asking clarification questions in a reference game when their answers will narrow the set of candidate referents. We construct a controlled test environment from the SIMMC 2.1 dataset that records how many questions each ambiguous reference needs to be successfully resolved, and examine how baseline LLM behavior and common post-training methods ask clarifying questions vs. attempt to answer the referent. We also propose BACE (Belief-Aware Critic with Epistemic tracking), a lightweight action chooser method on top of a frozen LM backbone, and show that BACE more consistently chooses the optimal number of clarifying questions than methods such as GRPO and ArCHer.",
    "published": "2026-11-03T19:14:42Z",
    "updated": "2026-11-03T19:14:42Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.05517"
  },
  {
    "id": "2611.05515",
    "title": "TSFM Meets LLM: Context as Covariates",
    "authors": [
      "Hemanth Ram",
      "Sai Shankar Narasimhan",
      "Shubhankar Agarwal",
      "Sandeep Chinchali"
    ],
    "abstract": "Textual information is ubiquitous in real-world time series datasets, appearing as news, reports, and annotations that hold key predictive signals not deducible from numerical history alone. Large Language Models (LLMs) interpret text but lack numerical precision, while Time Series Foundation Models (TSFMs) are quantitatively accurate but cannot reason about the effects of text. Moreover, the lack of large-scale paired multimodal datasets limits progress in bridging this gap. In this work, we address this challenge by providing a scalable approach for generating realistic multimodal datasets by annotating real-world time series with LLMs. Building on this, we propose Context as Covariates (CoCo), a forecasting framework in which an LLM distills its textual reasoning into numerically grounded forecast and confidence covariates that guide a TSFM backbone, thereby exploiting the strengths of both LLMs and TSFMs. We align the two models in stages, first fine-tuning the LLM via Group Relative Policy Optimization (GRPO) with a reward tied to covariate-induced improvement in forecasting performance, and then fine-tuning the TSFM on covariates generated by the aligned LLM. Our experiments show that models trained on our synthetic multimodal corpus generalize to real benchmarks spanning finance, economics, weather, traffic, and security. Notably, CoCo with Qwen3-4B-Instruct-2507 as the LLM and Chronos2 as the TSFM achieves up to 12% MAE improvement over state-of-the-art TSFMs and LLM forecasters, such as GPT-4o. Code, checkpoints, and the evaluation datasets are publicly available.",
    "published": "2026-11-03T19:13:19Z",
    "updated": "2026-11-03T19:13:19Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.05515"
  },
  {
    "id": "2611.04203",
    "title": "Toward User-Centered Agentic Recommendation: When Does Platform Competition Benefit Users?",
    "authors": [
      "Kehan Zheng",
      "Deyao Hong",
      "Qian Li",
      "Jun Zhang",
      "Jie Jiang",
      "Hongning Wang"
    ],
    "abstract": "Conventional recommender systems operate within platform-specific catalogs, limiting access to potentially valuable resources across platforms. We propose user-centered agentic recommendation, a paradigm in which user agents compare recommendations from competing platform agents, and formalize their interaction as a repeated game. Platforms strategically modify descriptions without changing intrinsic item value, while each user agent assesses platform credibility using feedback from consumed items only. Our analysis shows that expanded resource access need not improve user welfare: strategic misrepresentation and limited verification can offset the benefits of platform competition. We quantify when platform credibility assessment allows users to benefit from broader access despite strategic exaggeration. Our analysis identifies resource and reporting conditions that guarantee higher average welfare than the original platform with an interaction budget linear in platform count. Experiments on synthetic and Amazon-grounded markets show that credibility assessment can improve finite-horizon utility, while its benefits depend on market size and mechanism parameters.",
    "published": "2026-11-03T02:41:49Z",
    "updated": "2026-11-03T02:41:49Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04203"
  },
  {
    "id": "2611.04200",
    "title": "Impact of Input Resolution in Mammographic Mass Detection: A Controlled Multi-Architecture Study",
    "authors": [
      "Kaan Buyukdemirci",
      "Emine Ulku Saritas"
    ],
    "abstract": "Deep-learning-based mass detectors usually downsample mammograms, trading fine image detail for lower computational cost. However, published studies cannot reveal how much accuracy this trade-off sacrifices, since they also differ in architecture, preprocessing, and evaluation protocol. In this work, we isolated the effect of input resolution in a controlled study on the VinDr-Mammo dataset, training 18 detectors at six input resolutions ranging from 512 x 416 to 1600 x 1280 pixels, for 108 model-resolution combinations. Whole mammograms were resized without cropping or tiling. For each model, preprocessing, model initialization, augmentation, and evaluation procedures were kept fixed across resolutions. Detection accuracy was evaluated by mAP50 on the 219 mass-positive images of the official test split, and 57 combinations with test mAP50 of at least 0.60 were analyzed. From the lowest to the highest resolution, median mAP50 rose from 0.626 to 0.660 and the best mAP50 from 0.670 to 0.709. The best result, achieved by DINO with a ConvNeXt-S backbone, is the highest mAP50 reported to date on mass-positive VinDr-Mammo images. Gains were concentrated in small masses: for the smallest third of lesions, median mAP50 rose by 0.074 (from 0.367 to 0.441), compared with 0.007 and 0.032 for medium and large masses. Median training time increased from 0.45 to 1.40 h, and median inference time from 23.6 to 113.7 ms per image. Therefore, higher input resolution mainly benefits the small masses that are hardest to detect, at a computational cost that remains practical.",
    "published": "2026-11-03T02:36:01Z",
    "updated": "2026-11-03T02:36:01Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.04200"
  },
  {
    "id": "2611.04196",
    "title": "DoGNAVY-Exploit: Harnessing Parallel Open-Weight Agents for Stage-Aware Vulnerability Exploitation",
    "authors": [
      "Yuxuan Wang",
      "Dadi Guo",
      "Weijie Guo",
      "Zikai Xu",
      "Chen Lu",
      "Yizhe Zhuang",
      "Peng Huang",
      "Yuejin Xie",
      "Guopeng Lin",
      "Xuangan Xiao",
      "Shipei Qu",
      "Dongrui Liu"
    ],
    "abstract": "Frontier LLM agents can turn known vulnerabilities into working exploits, but are costly and often access-restricted due to their potential for malicious use. Open-weight models offer a more accessible alternative, but struggle to maintain progress across long exploitation chains. They also often fail to apply relevant security knowledge at the appropriate stage and in the right context to identify and evaluate promising attack directions. To address these limitations, we propose DoGNAVY-Exploit, a multi-agent harness built around two complementary designs: stage-aware decomposition with progressive expert knowledge disclosure, and hierarchical orchestration with parallel exploration. Specifically, DoGNAVY-Exploit uses configurable milestones to recast long-horizon exploitation as short, verifiable capability transitions and provides only the knowledge relevant to each stage. Within each milestone, a hierarchical architecture separates strategic planning from parallel execution: a planner proposes diverse attack routes, executors test them concurrently, and a controller accepts progress only when supported by runtime evidence. A shared structured memory consolidates verified facts, artifacts, replay steps, and failed routes across branches, allowing agents to build on collective progress and carry validated knowledge into subsequent milestones. In controlled benchmark environments, DoGNAVY-Exploit with GLM-5.2 achieves 97.5% Pass@1 on Cybench, and 97.5% zero-day and 100% one-day Pass@1 on CVE-Bench. On ExploitGym, it solves 79 tasks with GLM-5.2 and 157 with GLM-5.3, while the corresponding public Claude Code baselines solve 39 and 130 tasks, respectively. Ablation results further demonstrate that the stage-aware orchestration, expert knowledge, parallel exploration, and memory designs can substantially improve the exploitation capabilities of open-weight agents.",
    "published": "2026-11-03T02:30:53Z",
    "updated": "2026-11-03T02:30:53Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04196"
  },
  {
    "id": "2611.04195",
    "title": "SettleSplat: Monocular Gaussian Mapping under In-View Scene Changes",
    "authors": [
      "Anh Thuan Tran",
      "Xiyun Song",
      "Yubin Zhou",
      "Heather Yu",
      "Jana Kosecka",
      "Liang Peng"
    ],
    "abstract": "Online 3D Gaussian mapping enables fast and high-fidelity novel view synthesis, with broad applications in augmented reality, robotics, and autonomous systems. However, many current methods assume static scenes or filter out dynamics as outliers. In this paper, we study in-view scene changes where objects are manipulated in front of the camera within a single online sequence, unlike prior works that detect changes outside the camera view or between separate captures. This setting entangles transient and persistent dynamics, as objects can be distractors while moving and persistent once they settle. While recent studies start to address distractors by removing them for clean static background, in-view scene changes remain underexplored. To resolve this, we present SettleSplat, a monocular mapping system that maintains up-to-date 3D Gaussian maps under such changes. Specifically, we lift coarse per-pixel uncertainty into Gaussian dynamicity field, then prune transient ones. For persistent changes, we derive geometric contradictions weighted by parameter-free rendered depth uncertainty to separate true changes from under-optimized regions. On Bonn and Co-Fusion, SettleSplat achieves consistent 3D Gaussian maps, outperforming current baselines on both full images and change regions while maintaining comparable speed.",
    "published": "2026-11-03T02:29:27Z",
    "updated": "2026-11-03T02:29:27Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.04195"
  },
  {
    "id": "2611.04193",
    "title": "Statistical Machine Learning for Medicinal Plant Leaves Classification",
    "authors": [
      "Jayani P. Gamage",
      "Thiyanga S. Talagala"
    ],
    "abstract": "Medicinal plants are usually identified using practitioners' experience, but reproducible, image based methods can complement this knowledge. We present MEDIPI (MEDIcinal Plant Identification), a statistical machine learning approach that classifies medicinal plant leaves from photographs. From each leaf image we extract 52 interpretable features covering shape, texture, color, and a new scagnostics category. We then classify leaves using a three level hierarchy: shape, then edge type, then species. We also release MedLEA, an open R package with 1,099 leaf images of 31 Sri Lankan medicinal plant species. On this dataset, a hierarchical Random Forest achieved the best overall accuracy (100%) in our comparison of hierarchical and non-hierarchical approaches and eight algorithms: Random Forest, XGBoost, Gradient Boosting, linear discriminant analysis, k-nearest neighbor, support vector machine, probabilistic neural network, and artificial neural network. Adding texture, color, and scagnostic features to shape features raised shape level accuracy from 90% to 97%. Linear discriminant analysis plots show how the trained model separates leaf shapes. Accuracy dropped sharply (23-50%) when training and test data came from different datasets, so generalization across datasets remains a challenge.",
    "published": "2026-11-03T02:27:28Z",
    "updated": "2026-11-03T02:27:28Z",
    "categories": [
      "cs.CV",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2611.04193"
  },
  {
    "id": "2611.04183",
    "title": "Agentic Path Maps: Exposing an Agent's Traversal Through the Garden of Forking Paths",
    "authors": [
      "Madeleine Grunde-McLaughlin",
      "Hafsah Usman",
      "Daniel Mitroshkov",
      "Emily Reif",
      "Nino Migineishvili",
      "Lakshya Chauhan. Kevin Yu",
      "Jeffrey Heer",
      "Daniel S. Weld"
    ],
    "abstract": "When an AI agent executes an underspecified task, it embeds choices that may contradict unarticulated user context and preferences. However, interrupting the user for clarification on all such decisions is untenable. How might agents communicate impactful, but unexplored, paths to the user after execution? To investigate, we first distill a design space for communicating alternative paths, supporting the generation of new systems and structuring dimensions of future study. We then measure the impact of one vital design space dimension on user comprehension: the number of alternatives displayed. Through a user study (n=48) in the data analysis domain, we find that participants rarely consider alternative paths of their own volition, but AI overreliance reduces when alternative paths are visualized for them. By revealing paths the agent did not take, we demonstrate how users can better interpret results and incorporate personal context.",
    "published": "2026-11-03T02:20:22Z",
    "updated": "2026-11-03T02:20:22Z",
    "categories": [
      "cs.HC",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04183"
  },
  {
    "id": "2611.04182",
    "title": "When the Consumer Is an Agent: Execution-Grounded Service-Level Agreements",
    "authors": [
      "Michal Orzechowski",
      "Renata G. Slota",
      "Jacek Kitowski"
    ],
    "abstract": "Large language model (LLM) agents increasingly act as service consumers. They select operations and report whether a task is complete. In an asynchronous distributed service, an accepted call or immediate state read does not establish that the required state became observable by its deadline. We introduce execution-grounded completion contracts, which treat completion as a service-level outcome. An independent control plane observes a deadline-bound service-state predicate, admits completion, and directs recovery while the agent performs the task. We evaluate placement and deletion in a live multi-provider data service with heterogeneous models and an injected transfer delay. Across policies, some tasks that missed the deadline were accepted and some that met it were rejected. Under enforcement, accepted completions remained consistent with later observations; all included healthy tasks completed, and unresolved faulted tasks terminated as unverified. The results show that completion of these tasks can be governed by independent observation of service state rather than by the agent's self-assessment.",
    "published": "2026-11-03T02:17:23Z",
    "updated": "2026-11-03T02:17:23Z",
    "categories": [
      "cs.DC",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04182"
  },
  {
    "id": "2611.04180",
    "title": "Validation-Gated ML Pipeline Synthesis with Expert-Grounded Self-Evolving Skills",
    "authors": [
      "Zixiao Zhao",
      "Jing Sun",
      "Zhe Hou",
      "Mengze Li",
      "Qian Liu",
      "Cheng-Hao Cai",
      "Zijian Zhang",
      "Xin Wang",
      "Gillian Dobbie",
      "Jin Song Dong"
    ],
    "abstract": "Recent advances in large language models have enabled agentic systems that automate machine learning pipeline construction from minimal user input. However, existing agentic AutoML methods either depend on rigid templates that limit adaptability, target narrow task domains, or rely on free-form code generation that lacks reliability guarantees, leaving intermediate errors to propagate silently and degrade the final model. We present EvoML, an agentic framework for end-to-end ML pipeline synthesis built on expert-grounded skills that evolve across runs, executed through a validation-gated harness. The framework decomposes pipeline construction into four phases coordinated by three agents: an Orchestrator that enforces validation gates, advancing each phase only when its outputs pass structural, execution, and semantic checks, which precludes error propagation and keeps every artifact auditable; an Executor that runs expert-grounded skills, grounded in the nnU-Net workflow and pairing reusable templates with online adaptation; and a Curator that performs post-run evolution, consolidating the scripts and guidance recovered during a run into the skill library so it improves across datasets. We evaluate EvoML on eight datasets spanning six sophisticated, real-world ML task types, against agentic AutoML systems and command-line coding tools. EvoML achieves full automation and the best final model quality on all eight, spanning segmentation (up to 0.94 Dice), classification (0.99 accuracy), reconstruction (0.95 SSIM), and denoising (0.79 normalized PSNR), while transferring to broader ML tasks.",
    "published": "2026-11-03T02:16:48Z",
    "updated": "2026-11-03T02:16:48Z",
    "categories": [
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2611.04180"
  },
  {
    "id": "2611.04181",
    "title": "Clocks all the way down: does sequence-processing AI need endogenous temporal structure?",
    "authors": [
      "Meysam Hashemi",
      "Alireza Valizadeh",
      "Viktor Jirsa"
    ],
    "abstract": "Mainstream sequence-processing AI is temporally reactive: each update is driven by input and learned state transitions, rather than by an independently evolving internal temporal reference. Biological brains, by contrast, continuously generate rhythmic activity that structures perception, memory, and cognition, and this rhythmicity reaches all the way to behavior. We ask whether this difference is merely implementational or genuinely computational. Four lines of evidence suggest that endogenous temporal structure supports putative functions that input-driven architectures may not readily replicate: 1) phase-dependent routing of information, 2) delay-structured combinatorial representation, 3) cross-frequency multiplexing of items, and 4) oscillation-gated offline consolidation. A proof-of-concept delay-ablation test dissociates representational capacity from memory retrieval. In recurrent and spatial spiking networks with fixed synaptic weights and connectivity, shuffling delays preserves part of the capacity but substantially impairs the sequence retrieval. The relative contrast is more pronounced for spatial networks and longer propagations. Instantaneous transmission collapses capacity itself. We then outline a cross-frequency multiplexing scheme that combines item identity and serial order with alternative mechanisms for selective memory retrieval. Finally, we state one falsifiable hypothesis, conditions for matched-resource tests, and three research directions: the components already exist; the disciplined comparison does not.",
    "published": "2026-11-03T02:16:48Z",
    "updated": "2026-11-03T02:16:48Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04181"
  },
  {
    "id": "2611.04173",
    "title": "ReconDreamer#: Self-Evolving Closed-Loop Synergy of Reconstruction and Generation for Dynamic Driving Scenes",
    "authors": [
      "Songling Liu",
      "Guosheng Zhao",
      "Xiaofeng Wang",
      "Chaojun Ni",
      "Guan Huang",
      "Jiwen Lu",
      "Xingang Wang",
      "Zheng Zhu"
    ],
    "abstract": "Dynamic driving scene reconstruction has made remarkable strides in recent years by leveraging generative priors, particularly in the quality of novel trajectory rendering. Nevertheless, a significant gap remains between the generated data and real-world sensor observations, severely hindering further improvements in reconstruction fidelity. In this paper, we present ReconDreamer#, a self-evolving framework that synergizes reconstruction and generation for dynamic driving scenes, which substantially bridges the gap between synthesized novel trajectory data and recorded real-world observations. Within this self-evolving closed-loop framework, the generative and reconstruction models mutually reinforce each other through iterative refinement, ultimately yielding a significant enhancement in the 3D representation capability of the reconstruction model. Additionally, we introduce a geometry-prior-based adaptive ground model to further enhance the rendering quality of the reconstruction model. To validate the effectiveness of the proposed method, we conduct comprehensive evaluations on Waymo, nuScenes, PandaSet, and EUVS benchmarks. Specifically on Waymo, at a 6-m lateral shift, ReconDreamer# improves NTA-IoU and NTL-IoU by 8.8% and 3.0%, respectively, and reduces FID by 15.1% relative to ReconDreamer++.",
    "published": "2026-11-03T02:02:49Z",
    "updated": "2026-11-03T02:02:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.04173"
  },
  {
    "id": "2611.04169",
    "title": "Length Is Cheap, Competition Is Not: Attention Predicts Context Rot in Retrieval",
    "authors": [
      "Yinuo Liu"
    ],
    "abstract": "Why do language models fail on long inputs? The common answer is length. We show that, for retrieval, length is cheap and competition is not. On five open models (0.5B to 3B parameters, four families), neutral filler costs nothing: accuracy stays at 0.97 to 1.00, up to 32K tokens on Qwen2.5-1.5B. Statements in the format of the evidence, placed at the same positions, drop it to 0.16 to 0.33. A single statement that gives the queried key a rival value multiplies the loss by 9 to 110, and every additional rival adds to it. Inside the model, one quantity tracks the failure: the attention mass left on the evidence. Across 126,473 trials it explains up to 58% of the variance in loss; log length explains at most 8%. The masked-filler protocol behind the claim that length alone hurts reproduces on MMLU (11 to 18 points lost at 30K tokens), but fails a visible control in retrieval: masking costs 45 accuracy points at 32K tokens, while the same filler left visible costs none. In retrieval, context rot is a competition for attention. We release the probe and all 126K trial-level measurements.",
    "published": "2026-11-03T02:00:58Z",
    "updated": "2026-11-03T02:00:58Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04169"
  },
  {
    "id": "2611.04166",
    "title": "Say the Same, Act Differently: Diagnosing and Steering Text-Action Divergence in Reasoning VLAs",
    "authors": [
      "Zihao Feng",
      "Qingzhao Zhang",
      "Chunyu Xia",
      "Bo Yu",
      "Z. Morley Mao",
      "Ramesh Govindan"
    ],
    "abstract": "Reasoning vision-language-action (VLA) models pair physical control with natural-language rationales that supervisors can read to monitor embodied safety. Prior attacks on VLA reasoning corrupt the rationale itself and leave visible evidence in the text. We show that visual perturbations can instead alter the physical action while keeping the generated rationale word-for-word identical. At the shared text/action interface of Alpamayo for driving and InstructVLA for manipulation, our text-neutral action-subspace (TNAS) diagnostic shows that the locally most action-sensitive direction is nearly orthogonal to the active text-loss gradients, with 1.87% and 5.28% norm overlap. At equal hidden-state perturbation norms across both models, interventions along this text-neutral residual shift actions 4.64x to 47.8x more than text-gradient perturbations, whereas text-gradient perturbations induce 21.2x to 277x more text drift. Steering visual perturbations along this direction reaches the same decoupling from the image. Across 154 obstacle-annotated driving scenes in Alpamayo, TNAS-guided attacks induce a new collision under a word-for-word identical rationale in 52.6% of scenes under full-image perturbations and 35.1% under a localized forward-camera patch, compared with 4.55% for unguided action attacks. Relative to a text-preserving baseline, TNAS guidance raises exact rationale preservation from 83.0% to 89.5% and cuts teacher-forced text drift by 68.4% at a comparable collision rate. In InstructVLA, TNAS guidance cuts text drift by 40.5% and preserves the exact response on 85.0% of examples alongside a 1.73-unit action-chunk shift. An unchanged rationale therefore cannot certify a safe action, so monitors for reasoning VLAs must verify the predicted action channel directly.",
    "published": "2026-11-03T01:57:41Z",
    "updated": "2026-11-03T01:57:41Z",
    "categories": [
      "cs.LG",
      "cs.CR",
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2611.04166"
  },
  {
    "id": "2611.02721",
    "title": "IssueLighter: An Issue Type-Aware LLM Agent for Issue Report Validity Assessment",
    "authors": [
      "Jiawei Ran",
      "Yuxia Zhang",
      "Ziyang Zhao",
      "Hui Liu"
    ],
    "abstract": "Invalid issue reports are prevalent in open source software (OSS) projects, imposing substantial burdens on maintainers who already face a high risk of burnout. Prior research has primarily focused on identifying invalid reports for specific issue categories (e.g., bug and wontfix), leaving the broader landscape of OSS issue types largely unexplored and limiting the generalizability of existing approaches. Moreover, existing methods provide little support for explaining or validating their predictions, reducing their practical usefulness for maintainers. With the rise of LLM-based agents, it remains unclear whether a comprehensive understanding of the causes of invalidity across all issue types can improve validity assessment performance while producing well-grounded rationales. To this end, we first manually annotated the validity status of 520 issue reports from three OSS projects, i.e., pandas, scikit-learn, and mypy, resulting in 257 invalid reports and 263 valid ones. Then, we conducted a thematic analysis on these invalid reports and identified 13 causes of invalidity that are closely specific to issue types. Based on these insights, we propose IssueLighter, an agent-based framework with a type-aware validity assessment strategy that dynamically executes commands. Experimental results show that IssueLighter consistently and substantially outperforms all baseline methods, with an average F1 improvement of over 20 percentage points. Ablation studies confirm that both the type-aware strategy and the taxonomy of causes of invalidity contribute to the performance gains. Qualitative analysis further demonstrates that IssueLighter generates rationales grounded in accurately identified causes of invalidity and supported by evidence. Moreover, leveraging these rationales, we challenged maintainers' original decisions in four disputed cases, and all received approval.",
    "published": "2026-11-02T08:13:51Z",
    "updated": "2026-11-02T08:13:51Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02721"
  },
  {
    "id": "2611.02715",
    "title": "MURFormer: Attention-Based Lightweight Multi-Scale Uncertainty-Guided Refinement Framework for PPG Denoising",
    "authors": [
      "Haram Kwon",
      "Chaeeun Hwang",
      "Seayul Choi",
      "Sungho Jo"
    ],
    "abstract": "Photoplethysmography (PPG) is a widely used physiological signal for its convenience but is highly susceptible to motion artifacts that degrade waveform quality and limit downstream analysis. This paper proposes MURFormer, a lightweight multi-scale uncertainty-guided refinement framework for PPG denoising through noisy-to-clean PPG mapping. MURFormer employs a newly proposed Multi-Scale Attention-Conv Fusion (MACF) block, which is designed to efficiently capture multi-scale temporal dynamics of PPG, as the fundamental building block and performs uncertainty-guided two-pass refinement prioritizing unreliable regions. The method was evaluated on the publicly available CIME dataset and on a Daily Activities dataset collected in this work, comprising paired noisy-clean PPG recordings from 24 subjects. Experimental results show that MURFormer improves both signal quality and physiological fidelity over the raw noisy input, yielding 129\\% and 105\\% relative signal-to-noise ratio (SNR) improvements, and 66\\% and 81\\% relative reductions in heart-rate mean absolute error (MAE), on the Daily Activities and CIME datasets, respectively. MURFormer also outperforms an existing denoising baseline on both datasets with a relatively small parameter count while preserving beat-level timing and waveform morphology. In addition, the model maintains strong denoising performance across varying input window lengths, suggesting that MURFormer is an effective and robust framework for practical PPG denoising. The implementation of MURFormer is publicly available at https://github.com/k-hram/MURFormer.git",
    "published": "2026-11-02T08:09:09Z",
    "updated": "2026-11-02T08:09:09Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.02715"
  },
  {
    "id": "2611.02711",
    "title": "Human-Supervised Artificial Intelligence Researchers in Electric Power Systems: Knowledge, Physics, Simulation, and Governance for Large Language Models",
    "authors": [
      "Xiangrui Meng",
      "Jingcheng Liu",
      "Ke Wang",
      "Miaopeng Yu",
      "Zhengping Lin"
    ],
    "abstract": "Conclusions in power-system research require a clear evidential basis. Researchers need to understand the data sources, modelling assumptions, and solution procedures to assess the conditions under which a conclusion holds. Large language models (LLMs) can help researchers extract information from documents and translate research requests into code and tool calls, but their outputs still require physical validation. Focusing on human-supervised artificial intelligence (AI) researchers, this review examines power-system LLM applications and related scientific workflows, together with physics-grounded power AI studies, to discuss the conditions for using LLMs in scientific research. In the proposed knowledge-physics-simulation-governance framework, LLMs translate information and coordinate tasks, simulators and validation tools test models, and experts retain authority over critical assumptions, safety boundaries, and final conclusions. Research processes should preserve materials for review so that claims can be traced to their sources, computations can be reproduced, and failed attempts and approvals can be examined. On this basis, a staged development roadmap and requirements for research reporting are proposed. Evaluation should focus on research artifacts and their validation to assess whether LLMs can improve the efficiency of power-system research within clearly defined permissions.",
    "published": "2026-11-02T08:03:54Z",
    "updated": "2026-11-02T08:03:54Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02711"
  },
  {
    "id": "2611.02706",
    "title": "Hindsight Credit Assignment over Trees for Agentic RL",
    "authors": [
      "Penghong Zhao",
      "Yihao Chen",
      "Maoheng Yuan",
      "Yunjian Zhang",
      "Abudukelimu Wuerkaixi",
      "Haoran Xu",
      "Man Lv",
      "Yaolong Wang",
      "Zhijie Sun",
      "Guohua Liu",
      "Yuewei Zhang"
    ],
    "abstract": "Reinforcement learning for long-horizon LLM agents faces a fundamental dilemma: successful experiences are essential for policy improvement, yet limited policy capabilities make such experiences difficult to discover. Sparse outcome rewards compound this challenge, leaving sampled trajectories with little relative feedback for learning. In this paper, we propose TriGRPO, a tree-based reinforcement learning framework that turns scarce successes into exploration and learning signals through hindsight credit assignment within and across rollout trees. TriGRPO constructs rollout trees through hindsight-guided branching: when an ongoing trajectory reaches a matched decision state, a successful action discovered during rollout initiates a sibling branch that continues autonomously, enabling further exploration and parent-sibling comparisons. Three complementary groups organize policy optimization over these trees: root groups capture within-prompt relative returns, node groups assign credit from parent-sibling outcome differences, and cross groups supplement sparse feedback with historical performance on related tasks. Experimental results demonstrate consistent gains in task performance and rollout efficiency across model scales, highlighting structured hindsight credit assignment as an effective approach to long-horizon agent learning.",
    "published": "2026-11-02T07:56:53Z",
    "updated": "2026-11-02T07:56:53Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02706"
  },
  {
    "id": "2611.02704",
    "title": "Beyond Answers, Traces, and Efficiency: Evidence for Adaptive Reasoning",
    "authors": [
      "Sejin Kim",
      "Sundong Kim"
    ],
    "abstract": "Current AI systems are evaluated as reasoners through final-answer accuracy, reasoning traces, process supervision, and computational or human-relative efficiency. Yet these measures do not establish whether reasoning adapts when tasks or evidence change. We distinguish across-task adaptivity, where acquired abstractions transfer or recombine across novel problems, fromwithin-task adaptivity, where hypotheses and actions are revised in response to new observations, feedback, or counterexamples. Using ARC-AGI as a diagnostic case study rather than an alignment benchmark, we examine what existing measures leave unresolved when test-time search, sampling, or adaptation affects performance. We propose intervention-oriented evaluation that tests abstraction transfer and hypothesis revision under controlled changes to tasks and evidence, with explicit reporting of test-time procedures and budgets. This perspective supports evaluating systems for robustness, responsiveness to corrective feedback, and auditability under changing conditions.",
    "published": "2026-11-02T07:55:54Z",
    "updated": "2026-11-02T07:55:54Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02704"
  },
  {
    "id": "2611.02698",
    "title": "GeoGuesser Bench: Benchmarking Vision-Language Agents on Interactive Geolocation",
    "authors": [
      "Huanzhi Mao",
      "Yichuan Wang",
      "Michael Koo",
      "Wenyuan Huang",
      "Huy Doan",
      "Jinghan Xia",
      "Ziyao Wang",
      "Joseph E. Gonzalez"
    ],
    "abstract": "Vision-language model (VLM) agents that act in the open world need two abilities: world knowledge to interpret what they see, and exploration to find what they cannot yet see. We study how agents combine the two through interactive visual geolocation. GeoGuesser Bench contains 282 tasks in an offline Street View environment where agents rotate, zoom, and move between real panoramas. Its three task types shift the balance from knowledge to exploration: agents (1) report the coordinates of their starting location, (2) name the enclosing street, city, state, or country, or (3) find, read, and count nearby objects. The coordinate tasks in (1) also include 42 real GeoGuessr World Championship rounds, whose expert guesses provide a human reference. We evaluate 23 VLMs: the best accuracy is 62.5% on place naming and 35.0% on object finding, and the best agent averages 4352.4 GeoGuessr points on the championship rounds, against 4770.3 for the better expert in each round. Beyond these headline numbers, world knowledge and exploration are only weakly correlated across models: agents that localize well do not necessarily explore well. To understand where agents fail, we categorize their errors into vision, navigation, and tool-use failures. Further ablations show that the strongest agents, such as Claude Opus 4.8, still perform well with limited views, while weaker agents degrade; customizing the environment thus adjusts task difficulty. The environment's verifiable rewards and restorable state also support training, and our Planner-Worker-Compressor harness cuts planner tokens by 57-61% by compacting the interaction history. We hope GeoGuesser Bench and its environment serve as a high-quality foundation for simulating real-world exploration at scale.",
    "published": "2026-11-02T07:50:57Z",
    "updated": "2026-11-02T07:50:57Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.02698"
  },
  {
    "id": "2611.02695",
    "title": "3L-D: A Low-Light Level Dataset from a Sensor-Agnostic, Alignment-Preserving Acquisition Framework",
    "authors": [
      "Léo Rueff",
      "Maurgène Ghezal",
      "Valentin Gorse",
      "Astrid Dufaure",
      "Esteban Monsalvo",
      "François Atteia",
      "Ludovic Escoubas"
    ],
    "abstract": "Supervised low-light image and video enhancement has achieved remarkable progress, yet current models remain fundamentally constrained by the limitations of existing datasets. Prevailing methods typically rely on uncontrolled ambient captures, camera parameter manipulation (e.g., exposure or ISO adjustments), or neutral density filters, failing to replicate authentic night-sky near-infrared spectral content and genuine low-photon noise distributions. Furthermore, capturing dynamic paired sequences without introducing warping artifacts or sensor-specific biases remains an open challenge. In this paper, we introduce 3L-Dataset, a physically calibrated low-light image and video dataset generated using a modular, sensor-agnostic acquisition framework. Our test bench faithfully reproduces the standardized Midavaine night level scale from Level 1 (full moon, approximately 1000 mlx) down to Level 5 (overcast moonless night, approximately 0.1 mlx), spanning the visible to near-infrared spectrum across diverse realistic environments, including countryside, forest, urban, and desert scale models. Using high-precision programmable mechanical actuation, our acquisition framework guarantees sub-pixel spatial alignment across synchronized sextuplets, each composed of one reference image and five corresponding images acquired at the five standardized night levels, without post-processing image warping. We evaluate multiple representative deep learning baselines across varying night levels, revealing critical trade-offs between reconstruction fidelity, perceptual quality, and inference latency under severe photon starvation. The modular acquisition framework can be adapted to different cameras, optical systems, sensor technologies, and resolutions, enabling the dataset to be continuously expanded.",
    "published": "2026-11-02T07:47:23Z",
    "updated": "2026-11-02T07:47:23Z",
    "categories": [
      "cs.CV",
      "cs.DB"
    ],
    "url": "https://arxiv.org/abs/2611.02695"
  },
  {
    "id": "2611.02692",
    "title": "LLMs Cannot Be Neutral: Gender Sensitivity Across Candidates, Evaluators, and Models",
    "authors": [
      "Danial Amin",
      "Joni Salminen",
      "Bernard J. Jansen"
    ],
    "abstract": "Large language models (LLMs) are increasingly used to evaluate candidates for professional roles, raising concerns about their sensitivity to demographic identities. We examine how candidate and evaluator gender assignments affect decisions by LLM-as-a-Judge (LaJ) models and decision language models (DLMs). In a hypothetical city council voting task, eight models evaluated 240 synthetic professional narratives from NVIDIA's US and French Nemotron-Personas datasets under independently varied gender assignments, producing 30,720 judgments. Explicit candidate gender labels increased Yes-vote probability by 1.05-1.73 percentage points relative to unspecified gender, while only the nonbinary evaluator assignment showed a significant increase (1.26 points). Identity matching showed no significant overall association. Yes-vote rates varied across models (81.3-97.2%), and 2.5-3.3% of decisions reversed relative to the unspecified-identity baseline. Under direct substitutions between explicit gender identities, DLMs exhibited fewer decision reversals than LaJ models (1.18% vs. 3.38%), indicating lower observed decision-level gender sensitivity among the tested DLMs. These findings demonstrate that gender sensitivity depends on candidate and evaluator identities and the evaluation model, while highlighting the importance of examining individual decision consistency alongside aggregate differences.",
    "published": "2026-11-02T07:41:05Z",
    "updated": "2026-11-02T07:41:05Z",
    "categories": [
      "cs.CL",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.02692"
  },
  {
    "id": "2611.02691",
    "title": "Closing the Dynamics Gap through Self-Directed Robotic Interaction",
    "authors": [
      "Xilun Zhang",
      "Liam Achenbach",
      "Luis Pabon",
      "Matthew Foutter",
      "Marco Pavone"
    ],
    "abstract": "Agentic Real2Sim2Real systems can reconstruct a scene in simulation from camera observations, but contact-rich dynamics such as friction and restitution cannot be observed without interaction. We call this the dynamics gap and present CUE, an agentic system that closes it by interacting with the environment itself. Given only a high-level instruction and no resets, the agent builds its own perception, identifies physical parameters, and targets interactions where its simulation is least accurate. On billiards, CUE reduces held-out ball-position error by 72% relative to the strongest baseline across 25 hidden-physics conditions in simulation, and we further deploy it on a real pool table. More details can be found on the project website: https://cue-dynamics.github.io/",
    "published": "2026-11-02T07:40:51Z",
    "updated": "2026-11-02T07:40:51Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02691"
  },
  {
    "id": "2611.02690",
    "title": "Human-Oriented World Model",
    "authors": [
      "Saihui Hou",
      "Zengyun Mou",
      "Chunshui Cao",
      "Yongzhen Huang"
    ],
    "abstract": "Supporting a person over repeated interactions requires interpreting their current state in context and anticipating its subsequent evolution. We formulate the \\emph{Human-Oriented World Model} (HOWM) as a conceptual framework centered on task-relevant human states and their evolution. HOWM connects current observations and individual history with environmental and social context to organize continuing state estimation, personalized dynamics prediction, and action support. Dynamic expectations and new observations jointly inform the current estimate, which in turn anchors personalized forecasts based on shared knowledge and individual experience. An external policy relates forecasts under alternative conditions to the person's goals, preferences, and constraints when considering support. Actual responses and outcomes provide evidence for revising the state estimate and personal dynamic patterns, thereby informing subsequent estimation, prediction, and support. We illustrate the framework through hypothetical training and learning scenarios. Our research agenda asks whether accumulated interaction experience improves subsequent estimation and prediction, and whether using the model helps the person pursue their goals over time.",
    "published": "2026-11-02T07:40:04Z",
    "updated": "2026-11-02T07:40:04Z",
    "categories": [
      "cs.AI",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.02690"
  },
  {
    "id": "2611.02689",
    "title": "The Customer Never Sees the Goal: Measuring and Detecting Vulnerability-Targeted Manipulation in LLM Assistants",
    "authors": [
      "Bohan Jiang",
      "Dawei Li",
      "Yasin Silva",
      "Huan Liu"
    ],
    "abstract": "Companies deploy large language model (LLM) assistants on their websites to advise customers. For commercial reasons, the operator can give an assistant a goal that the customer never sees. This paper focuses on operator-induced vulnerability-targeted manipulation (VTM), in which an assistant pursues such a goal by exploiting a vulnerability the customer discloses. While existing research mainly measures how manipulative a model is, we go further and ask whether VTM can be detected from the customer-AI conversation. To investigate this at scale, we introduce GAP (Goal-Anchored Probing). GAP first records the option a model recommends without any goal and then sets the other option as the operator's goal. We apply GAP to 15 open- and closed-source LLMs and collect 619,600 labeled replies across 540 everyday scenarios in 12 domains. We organize our study around three research questions. (1) Do assistants with an operator goal target vulnerable customers? (2) Can VTM be detected from the customer-AI conversation? (3) Does detection generalize to unseen models, vulnerabilities, and instruction styles? We first find that 14 of 15 models push the operator goal, and 12 of them use disclosed distress or financial strain to support it. Next, we show that fine-tuned detectors identify exploitative pushes with 79\\% accuracy from the reply alone, while zero-shot LLM judges average at most 62\\%. Finally, detection weakens on vulnerabilities absent from training. Telling whether a push comes from the operator also becomes unreliable when the assistant is told to hide its goal. We will release our dataset and code to facilitate future research on auditing LLM assistants.",
    "published": "2026-11-02T07:39:20Z",
    "updated": "2026-11-02T07:39:20Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02689"
  },
  {
    "id": "2611.02688",
    "title": "Accelerating LLM Pretraining with Zeroth-Order Curvature on Idle Serving Compute",
    "authors": [
      "Mingchuan Ma",
      "Dongqi Cai",
      "Daqian Yang",
      "Zhenyan Lu",
      "Chen Chen",
      "Teresa Lv",
      "Yan Gao",
      "Shangguang Wang",
      "Mengwei Xu",
      "Nicholas D. Lane",
      "Yu Huang"
    ],
    "abstract": "LLM pretraining is increasingly compute-intensive, while substantial inference serving compute remains idle during off-peak periods. However, such serving hardware is difficult to use for conventional first-order training due to its memory, networking and other system requirements. Zeroth-order (ZO) optimization offers a natural interface to this forward-only compute resource, but its gradient estimates break down in pretraining. Unlike fine-tuning, which can confine updates to a small parameter subspace, pretraining must update every parameter, and the alignment of a ZO gradient estimate with the true gradient shrinks as the number of updated parameters grows. We make a different observation: noisy ZO estimates can still provide useful curvature information, even when they are too inaccurate to serve as gradients. Based on this insight, we propose ZO-Curv, which leverages idle forward-only devices to estimate curvature and uses it to adapt and refine the update used during first-order training, thereby accelerating the process. We provide convergence guarantees that characterize the effect of finite-query curvature estimation. Experiments on LLMs from 125M to 1.5B parameters show that ZO-Curv consistently accelerates pretraining. At 770M parameters, ZO-Curv reaches AdamW's 20K-step validation loss in 3.9 hours instead of 7.5 hours, while achieving a lower final loss of 2.70 versus 2.84 under the same step budget. These results show that idle model serving compute can accelerate LLM pretraining when zeroth-order queries are used to estimate curvature rather than gradients directly.",
    "published": "2026-11-02T07:38:45Z",
    "updated": "2026-11-02T07:38:45Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02688"
  },
  {
    "id": "2611.01566",
    "title": "Principled Human-AI Collaboration in Agentic Workflows",
    "authors": [
      "Young Hyun Cho",
      "Will Wei Sun"
    ],
    "abstract": "Organizations adopting AI face the challenge of deciding which outputs can be released without human review while meeting the quality standards of human experts. We develop a statistical framework for delegating tasks between experts and black-box generate-verify workflows, in which AI-generated answers are verified and revised over multiple rounds. Before deployment, human experts evaluate selected outputs, and their judgments are used to calibrate the verifier threshold and number of attempts. Our method selects the policy with the highest estimated automation rate among statistically approved candidates, without modifying the generator or verifier. We establish finite-sample control of the error rate among released outputs, characterize the expert evaluations sufficient to attain a target automation rate, and derive a minimax lower bound establishing rate optimality in the quality margin and required confidence. In a MultiHiertt financial question-answering case study, average held-out automation increases from 2.50% to 24.17% as expert evaluations accumulate, while released-output error rates remain around 1.20%. In contrast, heuristics that release answers after consistently high verifier scores either violate the 5% error tolerance or automate at most 1.30% of tasks. Synthetic experiments further examine these theoretical predictions under controlled settings.",
    "published": "2026-11-01T04:47:28Z",
    "updated": "2026-11-01T04:47:28Z",
    "categories": [
      "stat.ML",
      "cs.AI",
      "cs.LG",
      "stat.ME"
    ],
    "url": "https://arxiv.org/abs/2611.01566"
  },
  {
    "id": "2611.01564",
    "title": "Meta-memorization and memorization scaling laws in transformers",
    "authors": [
      "Alex Nguyen",
      "Kenneth A. Norman",
      "Gautam Reddy"
    ],
    "abstract": "Larger transformers can memorize more data, with a capacity (in bits) that scales roughly linearly with the number of parameters. Counterintuitively, larger models also memorize faster, requiring fewer repetitions of a sequence during training before it is memorized. We reproduce both memorization scaling laws in transformers trained on random binary sequences, showing that rapid memorization can arise even when data contain no semantic or compositional structure. Rapid memorization is due to a meta-memorization effect, where models trained to memorize a large set of random sequences learn to memorize novel sequences more quickly. The rate $r(t)$ at which models memorize grows with training time $t$ as a power-law $r(t) \\sim t^β$ with a fixed exponent $β$ but an increasing upper cutoff across model scales. Meta-memorization enables even one-layer transformers to few-shot memorize a 100-bit sequence. This effect is partly explained by the formation of structured attention heads that convey position-invariant sequence information to MLPs where memorized sequences are stored. Meta-memorization is recapitulated in a simplified model of a dense associative memory where retrieval is constrained by an attentional bottleneck. Our results suggest transformers, through pre-training, acquire reusable mechanisms that enable highly efficient storage and retrieval of memories.",
    "published": "2026-11-01T04:43:31Z",
    "updated": "2026-11-01T04:43:31Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.01564"
  },
  {
    "id": "2611.01563",
    "title": "\\textsc{ChatDify}: Automating End-to-End Dify Workflow Synthesis from Natural Language via Multi-Agent Collaboration",
    "authors": [
      "Tao Fan",
      "Guoqiang Ma"
    ],
    "abstract": "The proliferation of Large Language Models has catalyzed powerful application development platforms like Dify, which enable users to build sophisticated LLM-powered workflows through modular node orchestration. However, manually configuring these workflows requires deep platform expertise and remains time-consuming and error-prone, creating a significant barrier for non-expert users. To address this challenge, we propose \\textsc{ChatDify}, a novel multi-agent framework that automates end-to-end Dify workflow synthesis from natural language descriptions. \\textsc{ChatDify} employs an Actor-Critic architecture comprising three specialized agents: the \\textit{Planner Agent} that decomposes user requests into structured execution plans, the \\textit{Executor Agent} that performs context-aware parameter synthesis and schema-augmented DSL compilation, and the \\textit{Reviewer Agent} that ensures reliability through hybrid verification with closed-loop refinement. We evaluate \\textsc{ChatDify} on a curated benchmark of 100 production-inspired tasks across three state-of-the-art LLM backends, achieving 0.96, 0.91, and 0.75 success rates with Qwen-3.7, GLM-5.1, and DeepSeek-v4, respectively. These results demonstrate its robustness and practical applicability for lowering the technical barrier to creating sophisticated LLM applications.",
    "published": "2026-11-01T04:40:49Z",
    "updated": "2026-11-01T04:40:49Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.01563"
  },
  {
    "id": "2611.01562",
    "title": "Finite-Time Online Sample Complexity for Conditional Diffusion Models",
    "authors": [
      "Mudit Gaur",
      "Prashant Trivedi",
      "Sasidhar Kunapuli",
      "Amrit Singh Bedi",
      "Vaneet Aggarwal"
    ],
    "abstract": "We study the finite-time training and sampling error of conditional diffusion models trained by online stochastic-gradient denoising score matching. Rather than assuming access to an exact empirical or population risk minimizer, we analyze the score network produced after a finite number of stochastic-gradient updates under an explicit localized Polyak--Łojasiewicz (PL) condition, stochastic-gradient regularity, and a trajectory-containment assumption. Our analysis separates the network approximation complexity from the online training-sample budget and propagates both errors through the reverse diffusion process. Under anisotropic smoothness, a joint intrinsic-dimensional structure for the data and conditioning variables, sub-exponential tails, and explicit approximation-class compatibility, we obtain a conditional score approximation error of order \\[ \\widetilde{\\mathcal O}\\!\\left(M^{-η_{\\mathrm{app}}}\\right), \\qquad η_{\\mathrm{app}} = \\frac{2α_x} {2α_x+d_x'+(α_x/α_y)d_y'}, \\] where \\(M\\) denotes the approximation complexity, \\(d_x'\\) and \\(d_y'\\) are the intrinsic response and conditioning dimensions, and \\(α_x,α_y\\) are their corresponding smoothness exponents. For \\(N=RB\\) online denoising samples used by SGD, the finite-time optimization error is controlled explicitly in terms of the PL, smoothness, gradient-noise, and initialization constants. Combining these ingredients with reverse-process stability yields a total-variation bound that decomposes into terminal-initialization, time-discretization, approximation/localization, and finite-time optimization errors.",
    "published": "2026-11-01T04:35:04Z",
    "updated": "2026-11-01T04:35:04Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.01562"
  },
  {
    "id": "2611.01559",
    "title": "Generative Modeling with Continuous Flows: Sample Complexity of Flow Matching",
    "authors": [
      "Mudit Gaur",
      "Prashant Trivedi",
      "Shuchin Aeron",
      "Amrit Singh Bedi",
      "George K. Atia",
      "Vaneet Aggarwal"
    ],
    "abstract": "Flow matching has emerged as a promising alternative to diffusion-based generative modeling, offering a continuous-time ordinary differential equation formulation with fast sampling and a simple regression-based training objective. Despite its empirical success, some theoretical analyses idealize the learning procedure by assuming that the velocity field is obtained by exact empirical risk minimization. This assumption does not reflect the practical finite-dataset setting, where the empirical flow-matching loss is only approximately minimized by a finite number of stochastic-gradient updates. We develop an empirical-risk-minimizer-free analysis for flow matching that explicitly accounts for both finite-sample statistical error and finite-time empirical optimization error. Our analysis considers a finite dataset of \\(N\\) flow-matching samples and a learned parameter \\(θ_T\\) obtained after \\(T\\) stochastic gradient updates on the empirical objective. Under regularity assumptions on the interpolation path, sub-exponential source and target distributions, approximation by a bounded-parameter smooth neural velocity class, empirical-loss optimization, and uniform flow stability, we prove a guarantee that holds with high probability over the finite training dataset and in expectation over the stochastic-gradient randomness. The resulting bound separates approximation error, statistical error from the finite dataset, tail error from unbounded source and target distributions, and empirical optimization error from approximate minimization of the finite-sample objective.",
    "published": "2026-11-01T04:31:34Z",
    "updated": "2026-11-01T04:31:34Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.01559"
  },
  {
    "id": "2611.01558",
    "title": "Text-Assisted Event Stream Visual Place Recognition via Multi-Scale Spatiotemporal Optimal Transport",
    "authors": [
      "Lan Chen",
      "Xingxing Xiong",
      "Xiao Wang",
      "Ziyan Zhang",
      "Zikang Yan",
      "Yuanhao Zheng",
      "Bo Jiang",
      "Yonghong Tian"
    ],
    "abstract": "Benefiting from the high dynamic range, high temporal resolution, and low energy consumption of event cameras, low-altitude economic research leveraging event cameras has become a popular topic. Several existing attempts introduce natural-language descriptions into visual place recognition (VPR) to mitigate the sparsity of structural spatial information inherent to event cameras. Nevertheless, these methods still fail to fully address two core challenges: effectively encoding event streams and semantically aligning event streams with text. In this paper, we propose a multi-scale spatial-temporal optimal transport approach, MSTOT-EPR, to address these challenges. Specifically, given event streams and scene text information, we first adopt a visual encoder and a text encoder to extract respective feature representations. We then apply optimal-transport constraints to achieve cross-modal alignment. We then design a cross-modal bottleneck fusion module to further fuse bimodal features. Furthermore, we develop multi-scale spatial optimal transport and inter-frame temporal optimal transport modules to mine high-quality spatial-temporal event features for scene recognition. Extensive experiments on the NYC-Event-VPR and EPRBench datasets fully validate the effectiveness of our proposed framework for event-based VPR. The source code of this paper will be released upon acceptance.",
    "published": "2026-11-01T04:28:10Z",
    "updated": "2026-11-01T04:28:10Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01558"
  },
  {
    "id": "2611.01551",
    "title": "TopoDPO: Dense Preference Alignment for Structure-Sensitive Aerial Referring Segmentation",
    "authors": [
      "Huaiyuan Peng",
      "Jisheng Dang",
      "Wencan Zhang",
      "Jingwen Zhao",
      "Hong Peng",
      "Wenjun Ma",
      "Bin Hu",
      "Qi Tian",
      "Tat-Seng Chua"
    ],
    "abstract": "Preference optimization for multimodal segmentation faces a granularity mismatch: dense masks contain spatially heterogeneous preference signals, whereas image-level objectives assign one shared nonlinear weight to all spatial margins. We introduce TopoDPO, a topology-aware dense preference alignment framework for structure-sensitive aerial referring segmentation. Topo-Prior mines informative preference pairs using connected-component discrepancy and macro-corner recall, while the dense objective applies the preference penalty to each local margin before spatial aggregation against a frozen supervised reference. On Topo-RS-Hard, a 4590-instance structural stress set, TopoDPO improves intersection over union (IoU) from 50.91% to 51.24% over image-level direct preference optimization (DPO) and reduces Betti-0 error from 1.34 to 0.90; paired image-cluster bootstrap intervals against image-level DPO exclude zero for all five reported metrics. Matched supervised controls and a complete factorial analysis separate the effects of topology-aware pair mining, localized correction, and dense reference-relative preference weighting. An unfiltered stratification over all 39,244 validation records further shows the clearest structural gains on samples with moderate or severe pre-alignment component-count errors. The code is publicly available at: https://github.com/phy709/TopoDPO.",
    "published": "2026-11-01T04:23:18Z",
    "updated": "2026-11-01T04:23:18Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.01551"
  },
  {
    "id": "2611.01550",
    "title": "Detecting Generated-Depth Injection Attacks on RGB-D Place Authentication",
    "authors": [
      "Seigo Kawachi",
      "Satoshi Matsuura"
    ],
    "abstract": "Advances in monocular depth estimation (MDE) now let an attacker generate depth from publicly available RGB images and submit forged RGB-D queries. Such attacks break a core assumption of RGB-D place authentication: that depth comes from a sensor. We study a presentation attack detection (PAD) classifier that uses geometric consistency between the enrollment and query views, as a software-layer defense. A three-stage evaluation shows how far this classifier detects software-injected depth, depending on how accurately the attacker knows the camera intrinsics. In the first stage, the attacker has only an estimate of the intrinsics, and the PAD classifier separates forgeries generated by all three MDE models with a validation area under the receiver operating characteristic curve (AUC) of 0.997-0.999. In the second stage, the attacker obtains the exact intrinsics, and the original PAD classifier falls to near chance (AUC 0.54-0.61); a retrained PAD classifier, however, still has the registration residual between enrollment and query as a cue. In the third stage, an oracle evaluation, in which the evaluator fits warps using the ground-truth 3D geometry, shows that detection falls to near chance only in its strongest case, where every valid query keypoint is given its ground-truth 3D coordinate. Of the detection cues, the reprojection error captures the attacker's misestimate of the intrinsics, whereas the registration residual remains even when the attacker knows the exact intrinsics.",
    "published": "2026-11-01T04:21:48Z",
    "updated": "2026-11-01T04:21:48Z",
    "categories": [
      "cs.CR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01550"
  },
  {
    "id": "2611.01549",
    "title": "Revisiting LLM Homogeneity Through a Multidimensional Lens",
    "authors": [
      "Ziliang Qiu",
      "Renfen Hu",
      "Yi Ding",
      "Ted Underwood"
    ],
    "abstract": "Concerns about LLM homogeneity are typically quantified with embedding similarity, which reduces two texts to a single score. We revisit homogeneity with 25 interpretable metrics spanning five dimensions: semantic, lexical, syntactic, structural, and stylistic & presentational. A human study shows that perceived similarity depends on both content (what responses say) and form (how they say it), yet embedding similarity correlates less with human meaning judgments than sentence-level matching ($ρ=0.417$ vs. $0.606$) and not significantly with form judgments ($ρ=0.140$). Across 18 contemporary LLMs, models say similar things in different words: they share global semantics and broad linguistic profiles but remain distinct in lexical characteristics, structural patterns, and interactional conventions. Across releases from 2024 to 2026, models become more like themselves but not more like one another: among significantly changing metrics, intra-model distances decrease for 17 of 22, and inter-model distances increase for 14 of 21. Across two post-training pipelines, model-specific conventions emerge during SFT and are selectively reshaped by preference optimization. These results suggest that homogeneity is multidimensional and evolving, and that embedding similarity alone can overstate cross-model homogeneity while concealing diverging intra- and inter-model trends.",
    "published": "2026-11-01T04:20:16Z",
    "updated": "2026-11-01T04:20:16Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.01549"
  },
  {
    "id": "2611.01548",
    "title": "Band2Net: Frequency-to-Network Transport Distillation for fMRI-Privileged, EEG-Only Session-Condition Decoding",
    "authors": [
      "Nishi Kanta Paul",
      "Md Shihabul Islam Shovo",
      "Dwarikanath Mahapatra"
    ],
    "abstract": "Functional MRI resolves large-scale brain networks but is expensive and stationary, whereas EEG is portable but poorly localised. We treat fMRI as privileged information, available during training and absent at deployment, with EEG and fMRI acquired from the same participants under matched conditions but not simultaneously. Band2Net encodes EEG into five frequency-specific connectivity graphs and fMRI into seven canonical network tokens from a frozen teacher, and solves a balanced entropic transport problem between the two token sets that gives each EEG band its own fMRI target. In subject-grouped cross-validation on the PsiConnect psilocybin data set, Band2Net reaches 0.801 ROC-AUC for EEG-only session-condition decoding, 5.0 AUC points (95% CI 1.8-8.2) above an EEG-only student. Although its margins over a single shared plan, a KL-relaxed plan and label-free network descriptors remain unresolved, secondary comparisons favour band-specific transported targets over logit, global-feature, contrastive and pooled-target distillation, though not after Holm correction.",
    "published": "2026-11-01T04:20:15Z",
    "updated": "2026-11-01T04:20:15Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01548"
  },
  {
    "id": "2611.01543",
    "title": "GSExplorer: Interactive World Generation with a Persistent 3D Gaussian World State",
    "authors": [
      "Sicheng Yu",
      "Liu Liu",
      "Xinjie Wang",
      "Xinjiang Wang",
      "Taojun Ding",
      "Wenhao Hu",
      "Beizhen Zhao",
      "Puxin Yan",
      "Zhizhong Su",
      "Hao Wang"
    ],
    "abstract": "Interactive world generation requires both accurate local control and stable scene consistency over long rollouts. Existing methods improve local generation through camera or geometry conditioning and extend historical context with memory mechanisms. However, long-horizon exploration remains challenging as target-view guidance becomes incomplete and inconsistencies accumulate across repeated scene updates. We present \\textbf{GSExplorer}, a generation--reconstruction framework built around a persistent 3D Gaussian world state. At each step, the current 3DGS scene provides multimodal rendering conditions for a condition-driven video generator, while camera geometry is injected through a separate Relative Ray Encoding branch. Generated videos are then fed back to a SLAM-based reconstruction backend, where inconsistency filtering prevents conflicting content from corrupting the scene and cross-chunk bundle adjustment improves spatial alignment across generation steps. We further design a data-construction pipeline that reproduces realistic 3DGS degradation during scene extrapolation, yielding 293K training pairs of degraded multimodal renderings and real target videos. GSExplorer achieves the best overall performance among the compared methods on both single-step and three-step WorldScore evaluation, with strong camera control and consistency across both settings, including a Camera Control score of 99.07 in single-step extrapolation. On 481-frame leave-and-return rollouts, it also shows strong revisit consistency, demonstrating the value of maintaining a reliable 3D world state for continued exploration.",
    "published": "2026-11-01T04:14:50Z",
    "updated": "2026-11-01T04:14:50Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.01543"
  },
  {
    "id": "2611.01541",
    "title": "MoPort: A View-Aware 2D Interface for Motion Language Models",
    "authors": [
      "Lixing Tan",
      "Qing Xia",
      "Yuting Guo",
      "Shuai Li",
      "Aimin Hao"
    ],
    "abstract": "Motion language models (MoLMs) encode 3D human motion as discrete tokens for language-based understanding. Deploying them on monocular video raises two problems. Pose detection yields 2D joint sequences, leaving a dimensional gap from the 3D motion used in training. Moreover, the 2D observation changes with the camera viewpoint, while the depth lost in projection makes the 2D pose ambiguous across viewpoints. We propose MoPort, a view-aware 2D interface that enables MoLMs to take 2D observations as input. We introduce Paired View Alignment (PVA), which gives two views of the same motion a shared 3D teacher target and directly constrains the consistency of their latents, so that 2D observations from different viewpoints are mapped to a consistent semantic representation. Camera-Modulated Encoding (CME) estimates the camera extrinsics from the 2D sequence and uses them to modulate encoding, providing the 2D latents with geometric information about the viewpoint. MoPort achieves R@1 of 0.5674 on HumanML3D and 0.3286 on KIT-ML, outperforming all evaluated baselines. On HumanML3D, its R@1 decreases only from 0.5763 on in-distribution viewpoints to 0.5585 on out-of-distribution viewpoints. We validate portability on three downstream MoLMs. Furthermore, on the real-world RGB video dataset Fit3D, MoPort achieves 80.36\\% accuracy. Code will be released upon acceptance.",
    "published": "2026-11-01T04:11:25Z",
    "updated": "2026-11-01T04:11:25Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01541"
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
  },
  {
    "id": "2610.34855",
    "title": "DecoyCount: Evaluating Visual-Reasoning Misalignment in Counting",
    "authors": [
      "Qiuyi",
      "Zhang",
      "Zhen Xu",
      "Jing Gu",
      "Seojin Bang",
      "Arnav Mohanty Das",
      "Yaning Hu",
      "Gautam Kumar",
      "Jared Lichtarge",
      "Le Xue",
      "Bettina Catoto",
      "Akul Datta",
      "Daniel Luo",
      "Farha Khan",
      "Marcella Valentine",
      "Yinfei Yang",
      "Andrew M. Dai"
    ],
    "abstract": "Visual counting benchmarks report whether vision-language models produce the correct number, but not whether errors arise from perception or reasoning. We introduce DecoyCount, a benchmark built from 1,660 real-world images with designed decoys across seven mechanisms, along with paired prompts: a neutral question, a matched alignment cue, and a novel multi-hop, multi-image question that situates the same counting problem in a realistic scenario. Using this design, we find that counting failures are induced partly by visual misalignment: models can execute the intended counting process when cue-guided but fail to select it unaided, and we term this difference in accuracy the reasoning-alignment gap. Despite being highly capable on general reasoning, frontier models remain below 50\\% accuracy on our benchmark, while alignment gaps range from 11.8-22.1 percentage points; strikingly, we observe that more capable models, greater thinking budgets, and agentic processes often induce larger gaps. Because humans may bring context that models lack, we test whether textual underspecification contributes to misalignment using a scenario-based multi-hop condition without explicit hinting, but this added context does not improve aggregate performance. Our analysis concludes that stronger general reasoning does not by itself generalize to aligned visual reasoning, leaving misalignment with human visual expectations as a substantial component of the remaining deficit.",
    "published": "2026-10-26T05:19:02Z",
    "updated": "2026-10-26T05:19:02Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.34855"
  },
  {
    "id": "2610.34854",
    "title": "Learning Dual-Camera Smooth Zoom via Decoupled Geometric-Photometric Data Synthesis",
    "authors": [
      "Junjie Fan",
      "Zhilu Zhang",
      "Renlong Wu",
      "Dazhi Zhang",
      "Wangmeng Zuo"
    ],
    "abstract": "When zooming between dual cameras on smartphones, prominent discontinuities in both geometric perspective and color rendition inevitably degrade the visual experience of users. To address this issue, we introduce the dual-camera smooth zoom (DCSZ) task, aiming to synthesize continuous intermediate frames for fluid zooming. However, directly applying existing video frame interpolation (VFI) models to this task is severely hindered by substantial domain gaps and the practical intractability of capturing real-world continuous ground-truth. To this end, we propose a novel data synthesis framework to generate high-fidelity DCSZ training sequences, named ZoomGS v2. It explicitly decouples geometric and color transformations from 3D scene representation modeling, thereby enabling extensive data generation from easily accessible single-camera 3D scenes. Furthermore, we develop ZoomFI, a specialized VFI network tailored to the DCSZ task, which leverages complementary bidirectional warping for comprehensive dual-camera information fusion. Extensive experiments on test datasets captured using two mobile phones demonstrate that training with the constructed DCSZ data significantly improves the performance of various VFI models. Moreover, ZoomFI achieves state-of-the-art results in both quantitative metrics and visual quality. The datasets, code, and pretrained models are available at https://hitjunjief.github.io/DCSZ-v2",
    "published": "2026-10-26T05:18:00Z",
    "updated": "2026-10-26T05:18:00Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.34854"
  },
  {
    "id": "2610.34850",
    "title": "Recovering Black-Box Point Cloud Models from Pose Shifts via Derivative-Free Optimization",
    "authors": [
      "Seonghwan Park",
      "Min-Gyu Park"
    ],
    "abstract": "Point cloud models are increasingly deployed through score-only black-box interfaces. Under this access model, test-time rotations outside the training distribution can substantially degrade performance. Although existing mitigations such as equivariant retraining and gradient-based adaptation are effective, they are infeasible without access to model weights or gradients. To address this limitation, we propose CanDO, a test-time canonicalization method that recovers lost performance using only forward queries. Specifically, CanDO searches for an input transformation that maximizes model confidence and uses derivative-free optimization to perform this search without gradients. We further identify three conditions for successful recovery: a training augmentation gap, an accuracy-aligned confidence surrogate, and global search over a multi-modal objective. Across multiple architectures and benchmarks, CanDO recovers 76% of the oracle gap under azimuthal misorientation and 51% under arbitrary SO(3) rotations for object part segmentation. These results show that frozen score-only point cloud models can recover from rotation-induced distribution shifts through post-deployment canonicalization alone.",
    "published": "2026-10-26T05:07:36Z",
    "updated": "2026-10-26T05:07:36Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.34850"
  },
  {
    "id": "2610.34846",
    "title": "Seeing Before Naming: Context-Grounded Learning of Novel Visual Concepts",
    "authors": [
      "Gabriel Adineera",
      "Jinoh Kim"
    ],
    "abstract": "Learning an unfamiliar visual category requires more than adapting a classifier: the model must connect its visual evidence to a useful semantic name. A pre-trained vision-language model can retain discriminative image features while providing a weak textual anchor for the target concept. We address this imbalance through context-grounded semantic anchoring. Our framework, SynerNet, learns concept-specific name embeddings, exposes them to compatible linguistic contexts, and conditions their representations on visual evidence. Difficulty-aware processing and adaptive objective weighting coordinate this adaptation while retaining the pre-trained backbone. On four VISTA-Beyond domains, SynerNet reaches a mean 16-shot accuracy of 74.35%, compared with 72.45% for few-shot name learning. Across 14 domains in the name-masked transfer setting, it improves mean accuracy from 45.17% to 46.74%. Ablations identify concept-specific name embeddings and cross-modal context integration as important components. These results support treating concept acquisition as the construction of visually grounded semantic anchors.",
    "published": "2026-10-26T04:55:38Z",
    "updated": "2026-10-26T04:55:38Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.34846"
  },
  {
    "id": "2610.34845",
    "title": "PosePlaner: Denoising Any Feed-Forward Pose Predictor from Pairwise Planar Geometry",
    "authors": [
      "Yihang Chen",
      "Bin Tan",
      "Yujun Shen",
      "Yinghao Xu",
      "Nan Xue"
    ],
    "abstract": "Recent multi-view Transformers (e.g., DUSt3R and VGGT) have advanced 3D reconstruction by scaling training data and model capacity from two views to many views and long sequences, subsuming the classical SfM/SLAM pipeline of feature extraction, matching, and pose estimation in a single feed-forward pass. Yet this subsumption hides the interfaces between pipeline stages---correspondences, geometry, and pose are entangled in a single forward pass, leaving supervised fine-tuning as the major path to improvement and offering no mechanism to correct predictions from geometric evidence at test time. We propose PosePlaner to close this gap by reviving the classical coupling between correspondences and pose via flow matching, treating pose refinement as a conditional generation problem that takes coarse geometric matches and initial pose as input condition and fuses the resulting pose hypotheses into a single refined estimate, providing a continuous, data-driven analog of RANSAC voting. Our method is trained efficiently on two-view data, yet serves as a periodic refiner for streaming n-view pose estimators with no retraining. Empirically, it corrects failures of feed-forward predictors, substantially improves correspondence-based solvers, and reduces accumulated drift in long streaming sequences.",
    "published": "2026-10-26T04:55:36Z",
    "updated": "2026-10-26T04:55:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.34845"
  },
  {
    "id": "2610.34837",
    "title": "Beyond Behaviour: A Stimulus-Response Safety Evaluation of Vision-Language-Action Models",
    "authors": [
      "Vy Vo",
      "Dinh Phung"
    ],
    "abstract": "Humans exhibit biological sensitivity to safety-critical stimuli that can trigger defensive action. Across three models and two video benchmarks, we investigate whether similar responses emerge in vision-language-action models by examining their internal representations and action tendencies in response to visible hazards and harmful consequences. Our findings suggest that task execution may remain the default response even when danger is internally registered.",
    "published": "2026-10-26T04:36:21Z",
    "updated": "2026-10-26T04:36:21Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.34837"
  },
  {
    "id": "2610.34836",
    "title": "Collective Emergent Alignment: Measuring and Amplifying Interaction-Induced Reasoning Alignment in Multi-Agent LLMs",
    "authors": [
      "Boxuan Wang",
      "Zhuoyun Li",
      "Sarvapali D. Ramchurn",
      "Xiaowei Huang",
      "Yi Dong"
    ],
    "abstract": "Multi-agent large language model (LLM) systems can exhibit emergent behaviors through interaction, yet whether a similar phenomenon exists for reasoning alignment remains largely unexplored. We study whether agent interaction produces additional reference-grounded reasoning alignment beyond matched individual self-refinement, and introduce REMAP (Reference-Entailment-Matrix for Agentic Process), a framework that quantifies this effect through Semantic Coverage and interaction-specific alignment gains. Across diverse model families and two multi-hop reasoning benchmarks, we observe broadly positive interaction gains, particularly on reasoning content that depends on integrating evidence distributed across agents. These gains are consistently associated with independently measured peer-information recovery, while further analysis reveals composition-dependent heterogeneity effects and asymmetric information transfer across agent capability levels. Motivated by these findings, we further introduce a fact-level multi-agent communication framework that replaces full reasoning-trace exchange with compact, gap-aware, and selectively routed information. Our experiments show that compact fact exchange improves reasoning alignment and task performance while reducing communication overhead, whereas more selective communication exposes a trade-off between acquiring distributed information, retaining local content, and communication efficiency. Overall, our results show that collective emergent alignment can be quantified, linked to information-transfer patterns, and used to guide more effective multi-agent communication.",
    "published": "2026-10-26T04:31:56Z",
    "updated": "2026-10-26T04:31:56Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.34836"
  },
  {
    "id": "2610.34833",
    "title": "Streaming Recurrent Memory",
    "authors": [
      "Mohamed Elsayed",
      "Minh Pham",
      "A. Rupam Mahmood"
    ],
    "abstract": "Natural intelligence learns from a continuous stream of sensorimotor experience: data can arrive at high bandwidth, and behavior adapts to feedback as soon as it arrives, even when it is delayed. In contrast, most modern deep learning systems rely on stored datasets, replay buffers, and retained contexts through which credit is later assigned. At high data rates, storing and revisiting past experience can be impractical under tight memory and computational constraints. This paper studies recurrent memory under a streaming learning constraint: the learner learns from experience as soon as it arrives without storing raw experience. We ask whether a streaming learner can maintain a state that remains useful for future prediction and control from delayed feedback. We introduce Streaming Recurrent Memory (SRM), a recurrent memory designed for the streaming setting which preserves information that may matter later while remaining trainable with one-step backpropagation through time (BPTT). SRM provides a streaming-compatible recurrence that is designed to recall past information by content or time, track elapsed steps, and compose transformations whose outcome depends on the order in which inputs are observed. Across controlled memory tasks and streaming applications, SRM learns effectively with one-step BPTT, outperforming recurrent baselines in associative recall and online language modeling while achieving near-perfect success in associative T-Maze with delayed rewards. These results suggest that fixing how inputs are stored in the recurrent state, while learning how that state is read out, enables effective streaming learning without long-range backpropagation.",
    "published": "2026-10-26T04:29:44Z",
    "updated": "2026-10-26T04:29:44Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.34833"
  },
  {
    "id": "2610.34829",
    "title": "Logic Hijacking of RAG: Single-Document Poisoning via Local Optimization",
    "authors": [
      "Hangyi Zhao",
      "Bonan Zhang",
      "Fusen Guo",
      "Jiaheng Wei",
      "Chao Chen",
      "Tianqing Zhu"
    ],
    "abstract": "Single-document corpus poisoning under black-box access poses a severe threat to Retrieval-Augmented Generation (RAG). However, existing attacks predominantly rely on explicit factual refutations or imperative instruction overrides. Modern aligned LLMs often arbitrate such conflicts conservatively, rejecting overt contradictions in favor of parametric memory or clean retrieved context while triggering input guardrails. We propose MONOLOGUE, a single-document poisoning framework based on Logic Hijacking without explicit refutation. Rather than disputing the ground truth, our method concedes it as an authoritative historical baseline before introducing the update, weaving a grounded record-correction narrative (e.g., dated institutional reattributions) that presents the counterfactual target as the most recent update. To prevent suspicious live writes, payloads are refined entirely offline via local multi-dimensional gated optimization, coupling automated text quality audits with surrogate behavioral verification. Evaluations across three benchmarks, three retrieval backends, and four open-weight generator regimes show that our method achieves the strongest overall attack efficacy among the evaluated single-document poisoning attacks.",
    "published": "2026-10-26T04:23:01Z",
    "updated": "2026-10-26T04:23:01Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.34829"
  },
  {
    "id": "2610.34826",
    "title": "TrustJev: Separating Policy Authority from Untrusted Evidence in LLM-Based Decisions",
    "authors": [
      "Zhiwei Xu",
      "Xuyang Liu",
      "Xiaolin Peng",
      "Weixian Deng",
      "Jiabao Gao",
      "Zirui Li",
      "Tian Qiu",
      "Boya Zhou",
      "Wei Jiao",
      "Hai Wan",
      "Xibin Zhao"
    ],
    "abstract": "Decision models enable software to select from predefined actions using natural language inputs. However, the external evidence that supplies facts for these decisions may also contain instructions that attempt to override the application's policy. We propose TrustJev, a framework combining protected policy scoring with bounded evidence corrections. A single Transformer backbone computes policy scores and a correction budget from trusted policy and candidates, then bounds evidence corrections by that budget. Paired supervision encourages stable predictions under instruction insertions that preserve task facts and changed preferences when edits change the correct answer. Authority supervision accommodates evidence when the policy alone cannot determine the decision. We evaluate a 0.6B implementation against 14 baselines on three datasets covering authentication, instruction hierarchy, and executable authorization rules. TrustJev achieves the highest mean Balance, the harmonic mean of accuracy on non-attack and attack inputs, exceeding the strongest baseline on each by 0.57-1.05 percentage points. In the authorization benchmark, it correctly answers all 32 attacks per source in a fixed pool for 95.77% of sources, compared with 80.98% for the strongest comparator. TrustJev maintains comparable inference memory and median latency, with additional overhead primarily during training.",
    "published": "2026-10-26T04:17:53Z",
    "updated": "2026-10-26T04:17:53Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.34826"
  },
  {
    "id": "2610.34825",
    "title": "Interpretable Brain Age Prediction Using White Matter Fiber Orientation Distributions with Rotation-Equivariant Deep Learning",
    "authors": [
      "Chenyang Fan",
      "Robert D. Sanders",
      "Elie Matar",
      "Yixuan Yuan",
      "Xiang Li",
      "Sharon L. Naismith",
      "Fernando Calamante",
      "Jinglei Lv"
    ],
    "abstract": "Diffusion MRI (dMRI) provides information about white matter microstructure that can support brain age prediction. However, many existing prediction models use diffusion tensor imaging (DTI) scalar metrics that omit orientation information. Deep learning is increasingly used for brain age prediction, but conventional CNNs do not explicitly respect the geometric structure of orientation-dependent features. We present an interpretable brain age prediction framework that combines white matter fiber orientation distributions (WM-FODs) with an SE(3) (Special Euclidean group in 3 dimensions) equivariant CNN. The network operates directly on spherical harmonic (SH) coefficients of the FOD, preserving their transformation properties under rotation. Evaluation in 692 participants aged 36-90 years from the Human Connectome Project Aging dataset showed that the combined framework outperformed the evaluated DTI-based models and conventional CNNs. Averaging predictions from five cross-validation models yielded a mean absolute error of 3.54 years and Pearson's correlation of 0.958. Our results indicated that the performance advantage depended on combining WM-FODs with equivariant processing. Prediction accuracy was highest at a maximum SH order of Lmax = 2 and declined at higher orders. Tract-level occlusion, where each segmented tract was masked in turn, revealed age-dependent patterns of model sensitivity, with importance peaks in frontal projection pathways at 36-44 years, the fornix at 45-54 years, the callosal isthmus at 55-64 years, the middle cerebellar peduncle at 65-74 years, and the callosal genu at 75-90 years. These findings support rotation-equivariant processing of WM-FODs for accurate brain age prediction with anatomically interpretable model sensitivity.",
    "published": "2026-10-26T04:14:38Z",
    "updated": "2026-10-26T04:14:38Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.34825"
  },
  {
    "id": "2610.33605",
    "title": "Data Governance for Generative and Agentic AI : Technology, Law, Economics, and Security",
    "authors": [
      "Narayana Darapaneni",
      "Padmaja K",
      "Gnana Chaithra D"
    ],
    "abstract": "This book develops a unified governance framework for systems that retrieve, generate, infer, remember and act on information from large language models and retrieval augmented pipelines to autonomous multi agent systems. Eleven chapters and eight appendices integrate three disciplinary lenses-technology, law and economics-across the full lifecycle: data quality, lineage and provenance; global data protection law and intellectual property; the economics of data governance; digital trust, cybersecurity and zero-trust architecture; ethics and responsible AI; governing generative AI pipelines; governing agentic AI and multi-agent systems; data governance in elections and the public sphere; AI regulation across six jurisdictions; and the design of a governance control plane for 2030. Each chapter is anchored in Indian law and institutions while maintaining a comparative, cross jurisdictional perspective.",
    "published": "2026-10-24T11:03:57Z",
    "updated": "2026-10-24T11:03:57Z",
    "categories": [
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2610.33605"
  },
  {
    "id": "2610.33594",
    "title": "Counterfactual Model Testing Under Distribution Shift",
    "authors": [
      "Joran Leest",
      "Ilias Gerostathopoulos",
      "Claudia Raibulet",
      "Patricia Lago"
    ],
    "abstract": "Deployed machine learning (ML) models can degrade as the distribution of their input data shifts. Such shifts can result from changes in the population or from data integrity issues in the pipeline that materializes model features, two sources that operate through different mechanisms. Because labels are often absent or delayed, it is common practice to track shifts in the data instead, but a detected shift does not indicate how it affects the model. We formulate this problem as online model testing under distribution shift. Testing requires reproducing the shift on a controlled baseline with known labels. Since the same shift can come from either source, doing so requires knowing which mechanism changed. We propose a methodology that reproduces observed changes in both mechanisms to estimate current performance and the potential gain from repairing observed data integrity issues. Experiments on real-world datasets with simulated faults show that separating the two sources generally improves both estimates, supporting this formulation. A churn prediction case illustrates how these tests can support monitoring and repair prioritization",
    "published": "2026-10-24T10:42:31Z",
    "updated": "2026-10-24T10:42:31Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.33594"
  },
  {
    "id": "2610.33592",
    "title": "Auditing evaluation artifacts and data leakage in large language model systems for rare disease diagnosis",
    "authors": [
      "Jian Yang",
      "Peilin Liu",
      "Xiaohan Li",
      "Songda Li",
      "Yu Cao",
      "Yuqing Feng",
      "Haomin Li"
    ],
    "abstract": "Augmented large language model (LLM) systems have reported high benchmark accuracies in rare disease diagnosis, yet their real-world clinical utility remains unproven. A recent meta-analysis flagged augmented LLM diagnostic evaluations as having a high risk of bias due to suspected data leakage; however, the precise impact of these vulnerabilities on model inference has yet to be fully quantified. In this study, we present a comprehensive empirical audit to quantify evaluation artifacts across prevailing AI paradigms, using a repository of over 60,000 cases from diverse public and independent clinical cohorts. By reconstructing a state-of-the-art agentic framework, we demonstrate that candidate-space contamination artificially inflates performance: enforcing strict cross-dataset isolation resulted in a marked performance decline, with the cross-dataset mean Recall@1 decreasing from 54.3% (under conventional one-vs-rest evaluation) to 40.3% (Hedges' g = 0.94). Similar spatial overfitting in supervised classifiers caused diagnostic accuracy to drop from an internal mean of 42.9% to 16.7% across external cohorts (Cohen's d = 2.01). Furthermore, we quantify how LLMs infer diagnoses by exploiting retrospective therapeutic cues in clinical narratives, and how temporal misalignment in foundational knowledge bases leads to performance fluctuations. We conclude that prevailing evaluation protocols for augmented LLM systems inadvertently reflect data leakage rather than genuine medical reasoning. To address these systematic artifacts, we propose a rigorous evaluation framework - coupling strict data-isolation protocols with standardized benchmarking safeguards - to ensure future diagnostic AI for rare diseases is evaluated on actual clinical robustness.",
    "published": "2026-10-24T10:35:48Z",
    "updated": "2026-10-24T10:35:48Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.33592"
  },
  {
    "id": "2610.33589",
    "title": "Mix Forcing: Causal Pre-Training via Mixture Attention for Interactive World Models",
    "authors": [
      "Zelin Gao",
      "Hao Ouyang",
      "Jiapeng Zhu",
      "Qiuyu Wang",
      "Jingye Chen",
      "Zichen Liu",
      "Xing Zhu",
      "Yujun Shen",
      "Yinghao Xu"
    ],
    "abstract": "While interactive video world models require autoregressive generation, directly adapting pretrained bidirectional video diffusion models into autoregressive ones with teacher forcing can disrupt their visual priors and degrade autoregressive generation quality. In this paper, we introduce Mix Forcing, a causal pre-training paradigm for interactive video world models, implemented with the Mixture-of-Bidirectional-and-Autoregressive (MoBA) attention. Mix Forcing jointly trains a video diffusion model with both teacher forcing and bidirectional training, yielding a strong causal initialization for few-step post-training. In self-attention, Mix Forcing leverages teacher forcing to learn causal next-chunk prediction for autoregressive rollout, while using bidirectional attention to preserve pretrained visual priors. To support online text interaction, Mix Forcing further adopts a chunk-wise cross-attention design that conditions each video chunk on a shared environment prompt and its own local prompt, without exposing future instructions to the current chunk. Following causal pre-training on a 14B image-to-video model, we apply consistency and distribution matching distillation to obtain a four-step autoregressive generator. Experiments on our internal benchmark and public benchmarks, including WBench and SANA-WM-Bench, show that our model achieves state-of-the-art visual quality and timely event following with precise camera control. Notably, our model supports high-fidelity long-horizon generation without quality degradation even over one-hour rollouts. Project page is here: https://zelingao98.github.io/mixforcing",
    "published": "2026-10-24T10:31:58Z",
    "updated": "2026-10-24T10:31:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33589"
  },
  {
    "id": "2610.33582",
    "title": "Replicate What Varies: Resource Sharing for Domain-Randomized Embodied Simulation",
    "authors": [
      "Zixu Hao",
      "Weijun Wang",
      "Xiangyu Li",
      "Liang Mi",
      "Hao Wu",
      "Yunxin Liu",
      "Ting Cao"
    ],
    "abstract": "Simulation provides a low-cost sandbox where embodied agents can attempt tasks, observe outcomes, and learn from experience. Running many diverse simulation environments concurrently can consume substantial CPU and GPU memory because independently constructed scenes duplicate resources that remain unchanged across instances. We present Patchwork, a resource-sharing system for domain-randomized simulation, built around the representation $E=T+Δ$: a shared template contains common resources, and a patch records the mutations needed to construct a target environment. Patchwork separates randomization sampling from replay and selects reusable templates together with patches that preserve each target environment's intended configuration. Its layered runtime shares compiled model structure and immutable assets while keeping mutable parameters and simulation state private to each instance. We implement Patchwork on robosuite and MuJoCo and evaluate it on LIBERO-plus and RoboCasa365 workloads. At 32 replicas, shared-template execution reduces CPU RSS by 88-92% relative to process-per-environment execution. Controlled experiments show how sharing shifts memory growth toward template diversity and unique asset content rather than instance count, within the supported sharing boundaries.",
    "published": "2026-10-24T10:20:13Z",
    "updated": "2026-10-24T10:20:13Z",
    "categories": [
      "cs.DC",
      "cs.AI",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.33582"
  },
  {
    "id": "2610.33581",
    "title": "UltraFlash: Accelerating Megapixel Visual Synthesis",
    "authors": [
      "Phuc Lai",
      "Anh Nguyen",
      "Phong Nguyen",
      "Anh Tran"
    ],
    "abstract": "Megapixel visual synthesis with latent diffusion models requires operating far beyond the resolutions at which these models are typically trained. Cascade refinement is a leading strategy for this setting: it starts from a base image at a native resolution and progressively upsamples it to the target resolution through multiple refinement stages. Each stage typically performs a pixel-space resolution transition followed by latent-space denoising. While prior acceleration efforts mainly focus on reducing denoising cost, we identify a complementary and underexplored bottleneck: the repeated movement of representations through the VAE. We call these operations pixel-space transitions. In cascade pipelines, intermediate latents are often decoded to RGB, resized, and re-encoded before refinement, while final latents are decoded patch by patch with dense overlap to suppress boundary artifacts. We propose UltraFlash, a transition-efficient approach that accelerates these VAE-heavy operations. UltraFlash has two components. Latent Hyperloop replaces intermediate RGB round trips with a learned latent-space shortcut that approximates the decode-resize-encode transformation without repeated VAE decoding and encoding. Sparse Patch-based Decoding accelerates final reconstruction by addressing patch seams caused by inconsistent GroupNorm statistics and reusing cached statistics across patches, enabling sparse VAE decoding with much smaller overlap. Integrated into a state-of-the-art cascade baseline, UltraFlash reduces 4K generation latency by approximately 2x while improving image quality. These results show that optimizing pixel-space transitions can improve both efficiency and fidelity, offering an effective route toward fast, high-quality megapixel visual synthesis.",
    "published": "2026-10-24T10:19:20Z",
    "updated": "2026-10-27T11:09:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33581"
  },
  {
    "id": "2610.33580",
    "title": "ZoomSEM: accelerating large-scale brain connectomics with intelligent SEM super-resolution",
    "authors": [
      "Jiateng Shou",
      "Zhiwei Xiong",
      "Ruikang Xu",
      "Zhicheng Wang",
      "Peiyao Shi",
      "Te Shi",
      "Haiqun Jin",
      "Chunying Yin",
      "Jun Guo",
      "Manfred Auer",
      "Hanchuan Peng",
      "Ruobing Zhang",
      "Feng Wu"
    ],
    "abstract": "Serial electron microscopy (EM) is essential for large-volume biological imaging and connectomics, yet its throughput remains a major bottleneck, with cubic-millimeter-scale brain imaging requiring months or years. Existing deep learning-based EM super-resolution methods are limited to small upscaling factors or rely on synthetic data, offering modest acceleration and limited practical impact. We introduce ZoomSEM, a deep learning-based super-resolution method to dramatically accelerate SEM imaging. Trained on real low- and high-resolution scanning electron microscopy (SEM) pairs, ZoomSEM enables reliable recovery of 4$\\times$, 8$\\times$, and up to 16$\\times$ higher-resolution images from fast low-resolution scans while preserving fine neuronal structures critical for connectomic analysis, achieving up to 30-fold effective acceleration. Extensive experiments across datasets of diverse biological samples demonstrate robust generalization under realistic low-resolution acquisition. This advance enables high-resolution, large-volume serial EM imaging at unprecedented speed, poised to transform connectomics and related fields.",
    "published": "2026-10-24T10:18:50Z",
    "updated": "2026-10-24T10:18:50Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33580"
  },
  {
    "id": "2610.33575",
    "title": "CADonatello: Towards Real-World Multi-Part 3D CAD Reconstruction",
    "authors": [
      "Ahmet Serdar Karadeniz",
      "Dimitrios Mallis",
      "Parsa Akbari Chianeh",
      "Kseniya Cherenkova",
      "Anis Kacem",
      "Djamila Aouada"
    ],
    "abstract": "Existing methods for CAD reconstruction from 3D scans achieve strong performance on standard benchmarks, yet their effectiveness often degrades in real-world scenarios where objects consist of multiple parts and scan artifacts such as noise. A key reason is that current CAD reconstruction datasets predominantly contain single-part models and clean geometric inputs, limiting the ability of learned models to generalize to realistic settings. In this work, we introduce CADonatello, a part-aware framework for reconstructing parametric CAD models from real-world 3D scans. Our approach first decomposes the input geometry into structurally meaningful components using a foundation-scale 3D part segmentation model, and then reconstructs each component independently through a cross-section-driven pipeline that performs sketch parameterization followed by an extrusion. To improve the robustness of sketch parameterization to scan-derived cross-sections, we further introduce CC3D Cross-Sections, a dataset of paired rasterized cross-section images from realistic scans and their corresponding parametric sketches derived from aligned CAD models. This dataset enables effective domain adaptation from clean CAD sketch images to scan-derived cross-section images. Extensive experiments demonstrate that the proposed approach improves generalization to noisy scans and enables reliable reconstruction of complex multi-part objects across multiple real-world CAD reverse engineering benchmarks.",
    "published": "2026-10-24T10:05:26Z",
    "updated": "2026-10-24T10:05:26Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33575"
  },
  {
    "id": "2610.33566",
    "title": "Distilling Dense Trajectory Teachers For Large-Motion Video World Models",
    "authors": [
      "Shuofeng Sun",
      "Linqing Zhao",
      "Haibin Yan"
    ],
    "abstract": "Video world models are expected to generate videos that accurately follow specified camera trajectories while maintaining consistent 3D structures. However, existing models are predominantly trained on densely sampled videos with small inter-frame camera motions. When applied to sparse, large step trajectories, they often produce frozen frames, inaccurate camera motion, and severe geometric drift. We attribute this degradation to a mismatch between the gradual viewpoint transitions seen during training and the large viewpoint changes required at inference time. To address this problem, we propose Dense Trajectory Teacher Distillation (DTTD), a post-training framework that transfers a model's generation capability from dense trajectories to large camera motions. Given a sparse trajectory, DTTD interpolates additional camera poses to construct a dense trajectory covering the same path. The frozen base model then generates reliable teacher videos along this familiar dense trajectory, and pose aligned teacher observations are used to evaluate candidate videos generated under the original sparse trajectory. In this way, the model serves as its own generation teacher, requiring neither additional video data nor a stronger external video generator. We further combine dense teacher supervision with geometry aware rewards that assess cross frame consistency and camera trajectory following, and use the resulting preferences for offline preference optimization. To stably expand the model's motion range, we introduce a cumulative curriculum that progressively incorporates larger motion steps while retaining simpler trajectories to reduce capability forgetting.",
    "published": "2026-10-24T09:35:13Z",
    "updated": "2026-10-24T09:35:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33566"
  },
  {
    "id": "2610.33565",
    "title": "WorldFailBench: Do World Models Understand Policy Failures?",
    "authors": [
      "Zheng Zhang",
      "Xiaoyang Tang",
      "Shuaiqi Cheng",
      "Jiakai Huang",
      "Zhongbo Wu",
      "Ziyi Zhang",
      "Yuan Si",
      "Zeyu Liu",
      "Weibo Gao",
      "Shunyu Liu",
      "Shan You",
      "Fei Wang",
      "Xiaogang Wang",
      "Dacheng Tao"
    ],
    "abstract": "Robot policy evaluation informs deployment decisions and policy improvement, but physical testing and simulator preparation require substantial effort. World models offer a complementary route through closed-loop interaction in generated environments. Recent benchmarks have demonstrated their potential as policy evaluators through outcome-based evaluation (i.e., assessing task success or failure). However, such evaluation does not establish whether world models faithfully simulate how policies fail. Misrepresenting failures can lead to incorrect diagnoses of policy weaknesses and make policies appear ready for deployment even when small scene changes cause them to fail. We therefore ask: do world models faithfully simulate how and at which stages policies fail, and under what conditions they transition from success to failure? To answer this question, we introduce WorldFailBench with three evaluation tasks. Failure reason tests whether models reproduce the observable errors policies make. Failure stage assesses whether failures concentrate at the same stages of full-task execution. Failure boundary examines whether models reproduce the conditions under which policies transition from success to failure under controlled scene changes in simulation. The benchmark covers manipulation tasks in the LIBERO and RoboTwin simulation environments and real-world manipulation tasks performed by the G1 humanoid robot. Experiments across seven world models reveal substantial gaps in their understanding of policy failures, providing guidance for developing more reliable world models for policy evaluation.",
    "published": "2026-10-24T09:33:52Z",
    "updated": "2026-10-24T09:33:52Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.33565"
  },
  {
    "id": "2610.33564",
    "title": "What Remains OOD? OODConceptBench for Open-World Concept Recognition in Vision-Language Models",
    "authors": [
      "Zhiran Luo",
      "Zhiyong Yang",
      "Zitai Wang",
      "Sicong Li",
      "Qianqian Xu",
      "Qingming Huang"
    ],
    "abstract": "In the era of large-scale pretrained models, zero-shot generalization has increasingly blurred the boundary between known and unknown concepts. However, current evaluations do not directly reveal which open-world concepts different vision-language models can recognize. To study this problem, we introduce OODConceptBench, a hierarchical benchmark for open-world concept recognition on image-concept pairs. The full benchmark set (L1) contains 30,752 images, and the harder subset (L2) contains 14,285 images. The benchmark covers 560 concept phrases across seven open-world categories. We evaluate 37 vision-language models across release year, model family, and variant. We obtain three main findings. First, target-concept recognition is lower on L2 than on L1 across all 37 evaluated models. Second, later-released models do not necessarily achieve stronger open-world concept recognition. Third, an increase in overall recognition does not imply consistent improvement across all benchmark categories. Together, these results show that OOD remains a challenge even in the era of large-scale vision-language pretraining.",
    "published": "2026-10-24T09:33:41Z",
    "updated": "2026-10-24T09:33:41Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33564"
  },
  {
    "id": "2610.33562",
    "title": "Hybrid-time PINNs: Discontinuity-Aware Physics-Informed Neural Networks for Learning Hybrid Dynamical Systems",
    "authors": [
      "Shivanshu Tripathi",
      "Maziar Raissi"
    ],
    "abstract": "Hybrid dynamical systems flow continuously but jump at discrete events. Physics-informed neural networks (PINNs) fit data while enforcing known dynamics, but a single network is smooth in time and cannot model these jumps. We show that the more closely a PINN follows a jump, the larger its physics loss must be. We propose hybrid-time PINNs (HT-PINNs), which assign one network to each flow interval of the hybrid time domain and train the networks jointly with the jump times and the unknown parameters. The number of jumps and the sequence of modes are found by enumeration. HT-PINNs recover the number of jumps and the restitution coefficient of a bouncing ball. In a MuJoCo simulation of robotic disassembly, where a robot pulls a press-fitted pin out of a housing through a spring, HT-PINNs find the number of jumps and the sequence of modes, and estimate the static and kinetic friction coefficients with small errors of 0.1% and 1.7%.",
    "published": "2026-10-24T09:29:58Z",
    "updated": "2026-10-24T09:29:58Z",
    "categories": [
      "eess.SY",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.33562"
  },
  {
    "id": "2610.32163",
    "title": "Forging Emotions: a deep learning experiment on emotions and art",
    "authors": [
      "Amalia Foka"
    ],
    "abstract": "Affective computing is an interdisciplinary field that studies computational methods that relate to or influence emotion. These methods have been applied to interactive media artworks, but they have focused on affect detection rather than affect generation. For affect generation, computationally creative methods need to be explored that have recently been driven by the use of Generative Adversarial Networks (GANs), a deep learning method. The experiment presented in this paper, Forging Emotions, explores the use of visual emotion datasets and the working processes of GANs for visual affect generation, that is, for generating images that can convey or trigger specified emotions. This experiment concludes that the methodology used so far by computer science researchers to build image datasets for describing high-level concepts such as emotions is insufficient and proposes utilizing emotional networks of associations according to psychology research. Forging Emotions also concludes that to generate affect visually, merely corresponding to basic psychology findings, such as bright or dark colours, does not seem adequate. Therefore, research efforts should aim to understand the structure of trained GANs and compositional GANs in order to produce genuinely novel compositions that can convey or trigger emotions through the subject matter of generated images.",
    "published": "2026-10-23T04:54:00Z",
    "updated": "2026-10-23T04:54:00Z",
    "categories": [
      "cs.CV",
      "cs.CY",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.32163"
  },
  {
    "id": "2610.32161",
    "title": "MG-REPA: Multi-Granularity Representation Alignment for Generative Target Speaker Extraction",
    "authors": [
      "Dohwan Kim",
      "Jung-Woo Choi"
    ],
    "abstract": "Generative target speaker extraction (TSE) models achieve high-quality extraction, but suffer from considerably slow training convergence. Representation Alignment (REPA) accelerates diffusion transformer training by aligning hidden states with a pre-trained Self-Supervised Learning (SSL) teacher. However, existing alignment in the speech and audio domain operates at a single granularity. For TSE, frame-level alignment leaves the global, time-invariant characteristics of the target speech implicit, whereas utterance-level alignment leaves the time-varying content implicit, even though extracting the target requires both. We propose Multi-Granularity Representation Alignment (MG-REPA), aligning the hidden states with an SSL model at the frame level and a speaker verification model at the utterance level. We further apply temporal normalization to the frame-level target, removing its utterance-level statistics so that each branch concentrates on its granularity. On Libri2Mix, MG-REPA reaches the OVRL and PESQ of a MeanFlow-TSE baseline with $3.0\\times$ and $2.1\\times$ fewer epochs, respectively. Trained for 750 epochs, it is competitive with the published 2,000-epoch baseline on intrusive metrics while improving non-intrusive metrics. An ablation demonstrates that MG-REPA outperforms alignment at a single granularity.",
    "published": "2026-10-23T04:51:51Z",
    "updated": "2026-10-23T04:51:51Z",
    "categories": [
      "eess.AS",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.32161"
  },
  {
    "id": "2610.32159",
    "title": "Playing Bias: Epistemic Games for Interpreting Text-to-Image Models",
    "authors": [
      "Amalia Foka"
    ],
    "abstract": "Text-to-image (T2I) systems do not merely render prompts; they circulate defaults for \"what X looks like,\" shaping recognition through pose, camera, costume, props, and setting. While technical audits quantify disparities, they rarely cultivate the literacy needed to argue how images assemble stereotypes and confer authority. This paper translates a three-stage, humanities-informed framework into a set of epistemic games that make this cultural work visible and debatable: Interpret (art-historical close looking with AI outputs), Interrogate (counter-intent prompting as artistic exploration), and Expose (creative misuse through paired prompts with a constant motif and a BiasSlot rule, in which only the bias cue varies). In a pilot with undergraduate fine-arts students, the games shifted discussion from impressionistic reactions to concise, warranted hypotheses grounded in visual evidence, supported by lightweight classroom instruments that enabled reproducibility and structured collaboration. We argue that such game-based approaches foster critical literacy across educational contexts, equipping learners to recognize, discuss, and contest how T2I models encode bias.",
    "published": "2026-10-23T04:50:16Z",
    "updated": "2026-10-23T04:50:16Z",
    "categories": [
      "cs.CY",
      "cs.CV",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.32159"
  },
  {
    "id": "2610.32153",
    "title": "Sparsity-driven emergence of functional modularity in multitask neural networks",
    "authors": [
      "Bowen Shi",
      "Qi Ouyang",
      "Long Qian"
    ],
    "abstract": "Neural networks can learn multiple tasks, but how learning organizes shared computation into specialized and reusable components remains poorly understood. In this work, we show that sparsity inducing regularization promotes functional modularity in multitask networks without predefined module boundaries. Using functional profiling in multilayer perceptrons and a lightweight transformer, we identified compact, task-selective subnetworks, termed functional tokens. Across rule-based task families, selectively retaining these tokens preserves their associated functions while reducing performance on other tasks. Such specialization develops preferentially in deeper layers during training, while earlier layers retain shared computation. Regularization strength and form shape module compactness and specialization, while task weighting alters functional allocation. Moreover, extracted functional tokens can be recombined through alternative pathways to reconstruct a learned composite computation without retraining, preserving their connectivity and learned weights. Our results suggest that sparsity-constrained optimization shapes not only parameter use but also the organization and reuse of learned computation.",
    "published": "2026-10-23T04:38:24Z",
    "updated": "2026-10-23T04:38:24Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.32153"
  },
  {
    "id": "2610.32151",
    "title": "The LLENS Platform for On-Premises Large Language Model Agents in a Japanese University Hospital: Development and Evaluation Study",
    "authors": [
      "Ken Enda",
      "Jien Saito",
      "Masami Mukai",
      "Feng Han",
      "Emir Turkes",
      "Tatsumi Kusakabe",
      "Reona Umeki",
      "Kazuhiro Sumiyoshi",
      "Mitsuya Numata",
      "Takumi Tanikawa",
      "Akira Endoh",
      "Kenji Hirata",
      "Atsushi Yoshida",
      "Kohsuke Kudo",
      "Shinya Tanaka"
    ],
    "abstract": "Large language model agents that use tools could take on part of the electronic health record and desk work that occupies physicians' time, but in many hospitals the medical information systems run inside closed networks, so the model and the agent harness must also be inside the network. We designed, implemented, and deployed LLENS, a clinical support AI agent platform that runs inside the closed network of Hokkaido University Hospital on a single host with 8 NVIDIA H200 GPUs, the open-weight model Kimi K2.6 (~1 trillion parameters), and a web application rebuilt from Open WebUI. The harness has 10 components, including page image reading, full-text attachment input, a path-addressed document tree without a vector index, a network-isolated sandbox, artifact return, self-checking of generated output, subagents, and saved procedures. Kimi K2.6 was chosen from 3 open-weight candidates and scored 480/500 on the 2026 Japanese Medical Licensing Examination; it generated 119 tokens/s for a single user and served 16 concurrent requests at 908 tokens/s in total. On 180 questions over hospital documents (3 seeds each), mean accuracy was 10.7% with no documents, 81.3% with fixed retrieval (top 10 chunks of one lexical search), and 97.2% with interactive access, in which the model reads with document tools and the sandbox (15.9 percentage points above fixed retrieval, 95% CI 10.9-21.3); the difference lay in filtering/counting questions (16.7% vs 87.8%). In an automated test of 13 work scenarios (4 runs each), the expected components were triggered in all runs for 12, and 5 scenarios were run with synthetic data on the deployment host. The platform has run on the hospital network since September 14, 2026.",
    "published": "2026-10-23T04:34:26Z",
    "updated": "2026-10-26T04:31:45Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.32151"
  },
  {
    "id": "2610.32147",
    "title": "Implicit Neural Representations for Variational Problems on Graphons",
    "authors": [
      "Taeyoung Kim",
      "Jineon Baek",
      "Joonkyung Lee",
      "Hongseok Yang"
    ],
    "abstract": "We propose a neural exploratory framework for variational problems over graphons, i.e., symmetric measurable functions $[0,1]^2 \\to [0,1]$, that arise as limits of dense graph sequences. Such problems are central to two parts of the mathematical literature: extremal graph theory, which studies graph parameter optimisation under given restrictions, often for those graphs with a large number of vertices, and the large deviation theory of dense random graphs, which characterises the structure of rare events through constrained graphon optimisation. We represent graphons by implicit neural networks and optimise graphon objectives by gradient descent. Our design combines three ingredients: a multi-scale sinusoidal residual architecture biased toward sharp, step-like graphons; an embedded solver that enforces a single empirical density constraint and is differentiated by implicit differentiation; and symmetry-aware Monte Carlo estimators. On generalised Turán problems that previously required substantial human effort, our framework rediscovers known optimal graphons without human intervention. Applied to open instances, it produces candidate optima, including a previously unreported family of extremal structures. Applied to the variational problems from the large deviation theory of Erdős--Rényi random graphs, the framework produces new candidate optimal graphons across both upper- and lower-tail regimes for multiple pattern graphs; for the case of the triangle graph and the upper-tail regime, these candidates improve upon the best-known reference construction of Lubetzky and Zhao. The structures found by our framework have also led to new theorems on the optimal graphons for both families of problems.",
    "published": "2026-10-23T04:25:44Z",
    "updated": "2026-10-23T04:25:44Z",
    "categories": [
      "stat.ML",
      "cs.AI",
      "cs.LG",
      "math.CO"
    ],
    "url": "https://arxiv.org/abs/2610.32147"
  },
  {
    "id": "2610.32146",
    "title": "Separating Angular Alignment from Radial Ordering in Hyperbolic Vision-Language Models",
    "authors": [
      "Mingyang Gao",
      "Yuwei Wu",
      "Shiyu Luo",
      "Wei Wu",
      "Xiaomeng Fan",
      "Qihao Lv",
      "Haoyu Zhang",
      "Rui Gao",
      "Bingzhen Liu",
      "Zhi Gao",
      "Che Sun"
    ],
    "abstract": "Hyperbolic vision-language models are well suited to modeling the hierarchical structure of multimodal data, because hyperbolic volume grows exponentially with radius, enabling low-distortion representations of tree-like taxonomies from general to specific concepts. However, existing pretraining objectives for hyperbolic vision-language models entangle semantic alignment with entailment modeling, forcing radial coordinates to simultaneously encode semantic matching and hierarchical structure, leading to conflicting geometric constraints. In this paper, we introduce AURORA, a hyperbolic vision-language framework that decouples the objectives through angular alignment and a novel Radial-Angular Order Cone (RAOC) for entailment modeling. Angular alignment captures semantic similarity while preserving the radial structure for representing hierarchies. Unlike conventional entailment cones, RAOC determines angular allowance from relative parent-child radial gaps. It is incorporated into hierarchical entailment contrastive training to capture partial-order relations. We further introduce a norm regularization term that prevents undesirable radial degeneration for stable training. We train models on millions of image-text pairs and evaluate them across zero-shot classification, image-text retrieval, hierarchical reasoning, and compositional understanding. Our model consistently outperforms strong Euclidean and hyperbolic vision-language baselines, demonstrating the effectiveness of decoupling semantic alignment from hierarchical entailment modeling.",
    "published": "2026-10-23T04:25:17Z",
    "updated": "2026-10-23T04:25:17Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.32146"
  },
  {
    "id": "2610.32142",
    "title": "Rethinking LoRA Initialization for Robust Asymmetric Learning Rates",
    "authors": [
      "Disen Liao",
      "Yaoliang Yu"
    ],
    "abstract": "Low-Rank Adaptation (LoRA) is often highly sensitive to learning-rate (LR) choices. Recent empirical studies suggest that, once LRs are carefully tuned, vanilla LoRA can remain competitive with many proposed LoRA variants. This shifts the central practical question from designing ever more variants to reducing the cost and brittleness of LR selection. LoRA+ addresses this issue with asymmetric LRs, using a larger LR for the up-projection matrix $B$ than for the down-projection matrix $A$. However, the ratio $η_B / η_A$ itself becomes an additional hyperparameter: large ratios can improve adaptation, but under the standard LoRA initialization they can also cause unstable training and ratio-dependent performance collapse. We identify the source of this brittleness through a signal--noise decomposition of LoRA dynamics. Under standard \\initA, the update contains an initialization-induced noise term whose magnitude can be affected by the LR for $B$, $η_B$, the initialization scale $β$, and the adapter rank $r$. In practical LLM fine-tuning, this non-vanishing noise can limit the performance gains expected from LoRA+ style asymmetric LRs. To suppress this effect, we propose \\initAA, a simple initialization that scales the variance of $A$ as $σ_A^2 \\propto n^{-2}$ while keeping $B_0=0$. Under matched rank and training time for both initializations, this reduces the initialization-noise energy by an additional factor of $1/n$, stabilizing asymmetric LoRA training while preserving zero initial adapter output. Empirically, \\initAA substantially widens the stable LR region across initialization scales, adapter ranks, and LoRA update multipliers. Across tasks and models, \\initAA reduces best-ratio drift, prevents the high-ratio collapse observed with standard \\initA, and makes the width-based guideline $η_B \\approx n η_A$ a useful starting point for finite pretrained models.",
    "published": "2026-10-23T04:15:33Z",
    "updated": "2026-10-23T04:15:33Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.32142"
  },
  {
    "id": "2610.32141",
    "title": "Beyond Data Schedule: Fast LLM Pretraining on Data Mixtures by Loss-Reweighting",
    "authors": [
      "Jiazheng Li",
      "Huaqing Zhang",
      "Jing Xu",
      "Tianle Cai",
      "Jingzhao Zhang"
    ],
    "abstract": "Large language models often acquire specialized capabilities through successive pretraining stages, but these gains can come at the cost of forgetting earlier knowledge. In this work, we investigate whether such trade-offs can be improved by changing how strongly each domain contributes to learning while keeping its data exposure fixed. We find that, in controlled knowledge--mathematics experiments, loss reweighting produces a single checkpoint that surpasses the best knowledge and reasoning scores attained along either stage trajectory. This reveals an independent control that data-mixture ratios alone do not capture. Building on this finding, we propose LARE (Loss-Adaptive Reweighting under fixed Exposure), which automatically adjusts domain weights from running loss statistics. Motivated by a theoretical analysis of gradient noise, its normalized inverse-square-root rule balances relative loss scales without changing the sampled mixture or requiring additional runs to search for weights. Across knowledge, mathematics, and code, \\Method{} improves all five evaluated benchmarks for a 1.5B model trained on 240B tokens, averaging +7.84 pp over a matched direct mixture, including gains of +17.06 pp on GSM8K and +9.00 pp on MATH. These findings demonstrate that adjusting domain loss scales can improve joint capabilities without additional domain exposure.",
    "published": "2026-10-23T04:09:46Z",
    "updated": "2026-10-23T04:09:46Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.32141"
  },
  {
    "id": "2610.32132",
    "title": "SyncPro: Synchronous Reasoning and Responding for Proactive Streaming Video Understanding",
    "authors": [
      "Xueyun Tian",
      "Bingbing Xu",
      "Jiaming Liu",
      "Jinpeng Yu",
      "Yang Shi",
      "Yu Zhao",
      "Ruihua Huang",
      "Yuanzhuo Wang",
      "Huawei Shen"
    ],
    "abstract": "Proactive streaming video understanding requires assistants to track unfolding events and respond when a user's requested condition is met. To make these decisions, assistants must accumulate relevant evidence and reassess response conditions as new observations arrive. Existing work offers complementary capabilities for this process: proactive video assistants learn when to respond, while streaming video reasoning methods generate scheduled intermediate text to organize observations and support subsequent answers. Together, these capabilities provide a foundation for proactive reasoning, but how to coordinate ongoing reasoning with timely responses remains underexplored. In a direct adaptation, fixed reasoning intervals can trigger updates when nothing relevant has changed or postpone useful updates until the next scheduled step. Sharing one generation path also couples two distinct requirements: preserving evidence for future decisions and producing only the response requested by the user. Moreover, responses generated after reasoning must wait for it to finish, even when sufficient evidence is already available. To address these challenges, we introduce SyncPro, a synchronous dual-stream framework with specialized generation paths for evidence tracking and user-facing responses. Its Inner and Response branches share causal history and activate independently, allowing relevant evidence changes to trigger internal updates and responses to proceed concurrently with ongoing reasoning. We construct 189K dual-stream examples and train SyncPro through supervised fine-tuning followed by trajectory-level reinforcement learning. Experiments across three proactive benchmarks show improved response timing and more accurate answers to user requests.",
    "published": "2026-10-23T03:58:17Z",
    "updated": "2026-10-23T03:58:17Z",
    "categories": [
      "cs.CV",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.32132"
  },
  {
    "id": "2610.32129",
    "title": "Shorter Is Not Cheaper: A Controlled Comparison of Declarative Animation Specifications and Free-Form Code for LLM-Generated Explanations",
    "authors": [
      "Jiantang Huang"
    ],
    "abstract": "Chat assistants increasingly answer conceptual questions with interactive, animated explanations, generated either as free-form HTML/JavaScript or as declarative specifications that a fixed runtime plays. The declarative route is widely expected to be cheaper, faster and more reliable, because its outputs are shorter and constrained. We test this expectation in controlled comparisons whose hypotheses and analysis plans were frozen before the runs. We designed ExplainSpec, a time-indexed declarative animation format, and an observation contract that makes every generated explanation programmatically inspectable; validated, pacing-agnostic checkers score 20 explanation requests from five domains. Three Claude models (360 jobs) and, in a follow-up, the open-weight Qwen3-14B with thinking enabled and disabled (240 jobs) answered every request in both formats. For every model the specifications were 25-48% shorter in answer tokens (output excluding reasoning), yet with reasoning enabled total output fell significantly only for the largest Claude model and no model generated significantly faster. The reasons differed. The Claude models reasoned far more before writing specifications (exploratory; for the two larger models, from 15-20% to 85-88% of generations). Qwen3-14B reasoned about as much in both formats (a pre-registered test of this shift was not supported), and its shorter answers saved little against a reasoning trace more than twice as long. Nor were specifications more reliable: free-form pages were valid after one repair round in 95-100% of jobs for every model, whereas Qwen3-14B produced valid specifications in only 33% of jobs and passed all semantic tests in 17% (HTML/JavaScript: 62%). For reasoning models, a shorter format alone therefore does not make generation cheaper, faster or more reliable, and a format learned in context can cost reliability.",
    "published": "2026-10-23T03:56:19Z",
    "updated": "2026-10-23T03:56:19Z",
    "categories": [
      "cs.CL",
      "cs.HC",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.32129"
  },
  {
    "id": "2610.32127",
    "title": "MPQ: A Message-Passing View of Post-Training Quantization",
    "authors": [
      "Yanshuo Chen",
      "Chenxi Liu",
      "Reza Shirkavand",
      "Heng Huang"
    ],
    "abstract": "Post-training quantization (PTQ) is a key technique for efficiently deploying large language models, as it compresses weights into low-bit representations without retraining. Existing PTQ solvers, including GPTQ, LDLQ, and block coordinate descent, commit each weight block to a single codeword before its neighbors are considered, leaving near-optimal alternatives unexplored. In this work, we cast row-wise PTQ as posterior inference over discrete codebooks, in which existing solvers correspond to a zero-temperature, hard-decision limit retaining only the top codeword per block. We propose Message-Passing Quantization (MPQ), which preserves soft posterior information across blocks during inference and commits to hard codewords only at the output stage. MPQ first uses vector approximate message passing to compute approximate blockwise posteriors, then refines a hard-decision initialization by exact block coordinate descent. Across 2-bit lattice and 3- and 4-bit scalar quantization on dense language models from Llama, Qwen, and Mistral families, MPQ improves perplexity and zero-shot accuracy over strong hard-decision baselines, and composes favorably with preprocessing techniques such as activation-aware scaling and incoherence processing. Our implementation is available at https://github.com/poseidonchan/MPQ.",
    "published": "2026-10-23T03:54:41Z",
    "updated": "2026-10-23T03:54:41Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.32127"
  },
  {
    "id": "2610.30895",
    "title": "Your Home Remembers: A Voice-Enabled Household Memory Assistant for Conversational Retrieval",
    "authors": [
      "Aleix Sant",
      "Jordi Luque",
      "Fernando López",
      "Pablo Gómez",
      "Carlos Escolano"
    ],
    "abstract": "Everyday household information is often exchanged in conversations but never written down, making details easy to forget or misremember. We present a voice-enabled smart-home assistant that acts as a household memory by recording conversations and retrieving information from stored and newly captured speech. The assistant runs on an Android tablet with a modular architecture in which speech-recognition, diarisation, embedding and language models can be configured or replaced through an orchestration layer. On-device wake-word detection and VAD-based query capture support hands-free interaction. Recorded audio is processed in configurable chunks, transcribed and diarised, converted into turn-aware passages with conversation-level timestamps, and indexed in a vector store. For memory queries, a retrieval-augmented generation pipeline selects key passages and uses them to generate an answer. The interface supports recording, conversation management and inspection of timestamped sources.",
    "published": "2026-10-22T08:19:07Z",
    "updated": "2026-10-22T08:19:07Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.30895"
  },
  {
    "id": "2610.30893",
    "title": "Working Through Representation: Malleable Workspaces for Human-Agent Knowledge Work",
    "authors": [
      "Nan Chen",
      "Long Ling",
      "Luna K. Qiu",
      "Zilong Wang",
      "Yuqing Yang"
    ],
    "abstract": "Generative AI supports knowledge work, yet conversational histories may not capture the evolving organization that guides subsequent action. We introduce the Malleable Workspace, a conceptual model of how humans and agents form and revise a Work Representation and use its organization to advance work within a wider Work Environment. We developed it iteratively through conceptual analysis, comparison of 58 papers, and the construction and three-month longitudinal study of MalleableSpace with seven experienced agent users. Systems varied in what they represented as units and relations. System-assembled context was common; more systems supported local incorporation of agent outputs than reorganization, and fewer supported consequential agent-driven changes beyond the representation. The field study showed how representational roles and organization developed in use. These observations refined the model's account of how representation-grounded action depends on and can change the Work Environment. We contribute a conceptual and analytic foundation for representation-centered human--agent design.",
    "published": "2026-10-22T08:12:49Z",
    "updated": "2026-10-22T08:12:49Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.30893"
  },
  {
    "id": "2610.30875",
    "title": "HimmBO: High-Dimensional Interactive Model-Merging Bayesian Optimization for Image Generation",
    "authors": [
      "Jinyuan Mao",
      "Zhihao Shen",
      "Chenxi Liu"
    ],
    "abstract": "Fine-tuning has become a common way to customize text-to-image models, leading to community collections of over 100K lightweight adapters. Adapters sharing a base model can be merged with continuous coefficients. This turns a large collection into a high-dimensional continuous design space, which recent work explores interactively using preferential Bayesian optimization (PBO). However, existing approaches are limited to a few dozen preselected adapters and require expensive image generation in every interaction round. We introduce HimmBO, a two-stage method that scales preference-driven adapter merging to much larger collections while reducing image-generation cost. Its screening stage recovers the active adapter set through level-set estimation over pre-generated images, requiring no image generation. The refinement stage then optimizes merge coefficients in the recovered low-dimensional subspace. Both stages use a style-aware kernel, allowing preference information to transfer between visually similar adapters. In simulated-user image-matching experiments, HimmBO achieves higher final similarity than all comparisons while reaching a given similarity with under one tenth of the image generations required by prior work. Its performance remains stable as the collection grows to 1080 adapters, while competing methods degrade substantially.",
    "published": "2026-10-22T07:56:10Z",
    "updated": "2026-10-22T07:56:10Z",
    "categories": [
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2610.30875"
  },
  {
    "id": "2610.30873",
    "title": "MOER: Mix-Policy Optimization under Expert Prefix Guidance with Selective Rollback",
    "authors": [
      "Xuyang Zhong",
      "Jiuding Yang",
      "Yiwen Guo",
      "Chen Liu"
    ],
    "abstract": "Mix-policy optimization incorporates off-policy expert data into the reinforcement learning (RL) loop to transcend the capability boundary of on-policy RL. However, existing methods either provide static full-trace guidance that suppresses self-exploration, or adopt expert prefix guidance without correctness guarantees, leading to suboptimal performance or even training collapse. In this paper, we propose MOER, a mix-policy optimization framework that harmonizes expert guidance with self-exploration. MOER injects a decaying expert chain-of-thought prefix into the prompt and lets the model complete the remaining reasoning, with the prefix length progressively annealed to encourage self-exploration. A selective rollback mechanism replaces failed completions with the original full expert trace, guaranteeing the correctness of every off-policy trajectory. Furthermore, a harmonized mix-policy objective optimizes on-policy tokens with a GRPO loss while supervising both expert prefix and completion tokens with a trust-region SFT loss, substantially stabilizing training. Extensive experiments show that MOER achieves the highest average scores in mathematical and general domain reasoning tasks, outperforming all basic and mix-policy baselines, and generalizes consistently across diverse tasks, model scales, and base model categories. Codes are available at https://github.com/CityU-MLO/MOER.",
    "published": "2026-10-22T07:54:45Z",
    "updated": "2026-10-22T07:54:45Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.30873"
  },
  {
    "id": "2610.30867",
    "title": "Folding Pooled Usage Examples into the Tool Index Lowers Retrieval of Unused Tools",
    "authors": [
      "Abhijit Chakraborty"
    ],
    "abstract": "AI agents often find tools by searching their documentation. Agents that share a tool catalog can also pool usage examples: past requests, each tagged with the tool that handled it. We ask what pooling does to tools no agent has used yet. Adding each usage example to the search index as an extra entry for its tool (folding) helps tools that have examples, but on two of three catalogs it sharply lowers how often a needed unused tool reaches the top five results; on StableToolBench with our main embedding model, the share falls from 73 to 40 percent of queries. When the extra entries hold documentation from other tools instead of requests, the loss is much smaller, though differences in content or writing style could also explain this. We introduce ZoE (Z-scores over Evidence), a scoring rule that scores the documentation and the usage of a tool separately, so a tool without usage keeps its documentation score. On all three catalogs and with both embedding models we tested, ZoE retrieves unused tools more often than a router that reserves result slots for usage matches. With our main embedding model, the router retrieves more of the other tools on two catalogs, and in post hoc comparisons a simpler rule that adds a constant to the scores of tools with usage shows no detected difference from ZoE on unused tools. For five simulated agents on one catalog, folding lowered retrieval of unused tools for every agent; with ZoE no average drop was detected, though some agents still lost. Evaluations of pooled agent experience should report tools no agent has used separately from the average.",
    "published": "2026-10-22T07:45:24Z",
    "updated": "2026-10-25T04:34:55Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.30867"
  },
  {
    "id": "2610.30866",
    "title": "Verus-Insight: Towards Explainable Artifact Detection in AI-Generated Videos",
    "authors": [
      "Zhuoran Zhang",
      "Yang Shi",
      "Qixun Wang",
      "Tengfei Liu",
      "Yuqi Tang",
      "Xuanyu Zhu",
      "Yizhuo Jia",
      "Jingyun Hua",
      "Shixuan Liu",
      "Xianghua Ying",
      "Haotian Wang",
      "Yuanxing Zhang",
      "Pengfei Wan",
      "Wenjing Yang"
    ],
    "abstract": "Recent advances in video generation have made synthetic videos increasingly realistic, placing greater demands on reliable AI-generated video detection. Existing artifact-based detectors typically identify generation artifacts as evidence for source prediction, yet they may either fail to recognize subtle artifacts or reach the correct source decision without faithfully identifying the evidence underlying it. In this work, we systematically investigate how to design and train effective artifact detectors and formulate artifact detection as a structured process comprising three complementary capabilities: Inspection Planning, which determines what should be examined; Evidence Verification, which verifies whether the inspected content exhibits genuine generation artifacts; and Evidence Aggregation, which integrates the verified evidence into the final source decision. Building on this formulation, we introduce Verus-Insight, trained with human-anchored full-process supervision and progressive capability training to strengthen both fine-grained artifact detection and video-level detection. We further introduce Verus-Bench, a benchmark with fine-grained human annotations of perceptible artifacts for evaluating artifact detection. Extensive experiments across diverse benchmarks demonstrate that Verus-Insight achieves strong performance in both fine-grained artifact analysis and AI-generated video detection, with substantial gains in recovering human-perceived artifacts. Further analyses reveal that the three capabilities are complementary yet distinct, and that Verus-Insight more reliably converts relevant inspection targets into supported artifact evidence without increasing spurious artifact claims.",
    "published": "2026-10-22T07:44:36Z",
    "updated": "2026-10-23T05:22:18Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.30866"
  },
  {
    "id": "2610.30863",
    "title": "Cross-Spectral Feature Fusion for Multispectral Document Binarization",
    "authors": [
      "Yasas Savinda",
      "Maheshi Buddhinee Dissanayake"
    ],
    "abstract": "Historical document binarization remains challenging when faded ink, bleed-through, and background degradation exhibit wavelength-dependent behavior across visible and near-infrared observations. This study investigates whether adaptive cross-spectral feature fusion and targeted structural guidance can improve multispectral document binarization beyond fixed fusion and generic attention mechanisms. Four registered SMADI bands at 500, 600, 700, and 1000 nm are processed using a multi-branch conditional generative adversarial network (cGAN). Visible, NIR, and structural feature streams are fused at encoder depth L = 3 using spatial- and channel-wise softmax gating, while auxiliary edge maps derived from selected VIS-NIR band pairs provide targeted structural guidance. Nine controlled fusion and structural configurations are evaluated using five-fold document-level cross-validation, DIBCO-standard metrics, and Holm-corrected statistical testing. The F3 + NIR edge-guided configuration provides the strongest overall performance among the evaluated models, achieving mean F1 = 0.7916, p-FM = 0.8044, and IoU = 0.6654. Relative to the fixed Mid AVG baseline, it improves F1 by 0.0269, p-FM by 0.0360, and IoU by 0.0321, with all three gains remaining statistically significant after Holm correction. Mean NRM and DRD are also reduced, although these reductions are not statistically significant after correction. Targeted cross-spectral structural guidance provides an effective mechanism for regulating intermediate multispectral fusion, improving primary foreground-overlap performance while retaining the complete four-band observation.",
    "published": "2026-10-22T07:42:35Z",
    "updated": "2026-10-22T07:42:35Z",
    "categories": [
      "cs.CV",
      "eess.SP"
    ],
    "url": "https://arxiv.org/abs/2610.30863"
  },
  {
    "id": "2610.33094",
    "title": "Beyond Correctness: Attribution of Natural-Language Documentation for Formal Libraries",
    "authors": [
      "Sirui Jiang",
      "Dongming Xiang",
      "Shichao Wu",
      "Yuxuan Zhou",
      "Yihong Wu",
      "Fangze Zhu",
      "Wang Lin",
      "Guanjun Liu"
    ],
    "abstract": "Formal languages are widely used in software engineering to specify and verify program properties. Because their mathematical notation and logic are hard to read, developers often rely on natural-language documentation to understand the functions in formal libraries. Yet a documentation statement can be provably true and still hold after the function's behavior changes. We call a statement's dependence on the function's specific behavior attribution, and we give a method to check it. We design and implement DocAuth, a documentation-generation method that uses attribution to decide what to publish and attaches to each published sentence the formal property recovered from it, together with checkable evidence. On 150 functions from the Community Books library of the ACL2 theorem prover, three large language models produce proved but non-attributable properties for about a third of the functions. DocAuth matches or exceeds the attribution rate of a mutation-based filter while delivering 37% more attributable sentences. Compared with a pipeline that checks truth alone, it raises the share of published sentences that a second model confirms as attributable from 82.9% to 94.7%. These results show that provable truth does not guarantee that documentation reflects what a function actually does. Attribution complements truth as a criterion for generating and evaluating documentation for formal libraries.",
    "published": "2026-10-22T07:42:17Z",
    "updated": "2026-10-22T07:42:17Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.33094"
  },
  {
    "id": "2610.30861",
    "title": "Direct Forcing: Single-Stage Training with Representation-Space Supervision for Few-Step Autoregressive Video Generation",
    "authors": [
      "Haojun Xu",
      "Jie Huang",
      "Chuyang Zhao",
      "Xin Lu",
      "Mingchen Zhong",
      "Zihao Fan",
      "Haoyang Huang",
      "Linjiang Huang",
      "Si Liu"
    ],
    "abstract": "Few-step autoregressive video generation enables low-latency streaming, yet prevailing training pipelines separate causal adaptation from distribution matching. Recent representation-based text-to-video methods retain this separation by starting with an ODE initialization stage, even when the target distribution is defined directly by reference videos. We introduce \\method, the first single-stage framework that uses reference videos both as paired examples of how a history continues and as a target population for self-generated rollouts. Specifically, Direct Forcing is trained with two complementary signals: (1) Causal Continuation Alignment learns paired spatiotemporal correspondence under reference histories; and (2) Rollout Distribution Matching employs maximum mean discrepancy to align the representation distributions of self-generated and reference videos. To coordinate these signals, we introduce Dynamic Gradient Balancing, which adapts their relative gradient contributions during training. Experiments with Wan2.1-1.3B show that Direct Forcing learns a four-step autoregressive generator in 250 updates without a separate ODE initialization stage or online diffusion-score supervision, achieving 84.63 VBench Total and 86.01 Quality.",
    "published": "2026-10-22T07:41:41Z",
    "updated": "2026-10-24T18:24:41Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.30861"
  },
  {
    "id": "2610.30854",
    "title": "CAVC: Convergence-Adaptive Audio-Visual Cache for Modality-Asymmetric Diffusion Generation",
    "authors": [
      "Lifan Jiang",
      "Yibo Zhao",
      "Senlin cheng",
      "Bolei Xu",
      "Xiaobo Li",
      "Can Ye",
      "Dehai Zhao",
      "Deng Cai",
      "Boxi Wu"
    ],
    "abstract": "Diffusion-based audio-visual generation methods typically perform joint denoising of audio and video latents throughout the entire sampling trajectory, repeatedly executing modality-specific denoising branches and cross-modal attention at every timestep. However, we observe that such uniform joint computation is not always necessary. The key is a modality-asymmetric recoverability: audio-side drift introduced by mid-stage caching can be substantially reduced by only a few terminal joint denoising steps, whereas video-side degradation caused by caching leads to persistent loss of motion and temporal details. This asymmetry suggests that inference acceleration should selectively cache recoverable audio-side computation while preserving full video refinement. Motivated by this observation, we propose \\textbf{Convergence-Adaptive Audio-Visual Cache (CAVC)}, a training-free modality-asymmetric caching framework. CAVC adopts a sandwich-structured computation allocation: after detecting that audio denoiser outputs enter a cache-tolerant regime, it caches and reuses the audio denoiser output to bypass audio denoising and cross-modal attention in the middle stage, while the video branch continues independent spatio-temporal refinement; a few joint steps are then restored at the end to reduce accumulated cross-modal drift and improve synchronization. Experiments across multiple public benchmarks demonstrate that CAVC achieves 1.10--1.35x wall-clock acceleration, improves several visual dynamics and temporal statistics, and maintains competitive audio fidelity and audio-visual alignment.",
    "published": "2026-10-22T07:30:21Z",
    "updated": "2026-10-22T07:30:21Z",
    "categories": [
      "cs.CV",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2610.30854"
  },
  {
    "id": "2610.30851",
    "title": "ADAPT for Science: A Multi-Agent System for Self-Evolving Scientific Optimization",
    "authors": [
      "Zhaoran Feng",
      "Yuchen Ni",
      "Jianan Liu",
      "Lemao Liu",
      "Dejing Dou",
      "Kairui Feng"
    ],
    "abstract": "Scientific discovery often requires identifying a small number of high-performing designs in vast, constrained search spaces. This is difficult when evaluations are costly, feasible solutions are sparse, parameters are strongly coupled, and physical constraints are strict. Recent AI for AI methods can automatically improve algorithms and optimization procedures. However, general purpose approaches are not designed around scientific priors, physical constraints, and limited evaluation budgets. We introduce ADAPT for Science, a multi-agent framework that treats scientific optimization as two coupled decisions: where to search and how to search. ADAPT uses historical designs to identify promising and diverse initial conditions, progressively concentrates computation on favorable search directions, and evolves the optimization procedure from execution feedback. We evaluate ADAPT on the design of gravitational wave detectors using a differentiable physics simulator and eight unseen detector topologies. Under matched scientific evaluation budgets, ADAPT achieves a mean loss of 0.204 +/- 0.101, reducing loss by 54.9% relative to the best classical optimizer and by 62.2% relative to the best general purpose agentic evolution baseline. ADAPT achieves the lowest loss on all unseen topologies among the evaluated baselines. ADAPT provides a step toward scientific optimization systems that continuously learn from prior experience and their own search outcomes.",
    "published": "2026-10-22T07:28:46Z",
    "updated": "2026-10-22T07:28:46Z",
    "categories": [
      "cs.AI",
      "cs.MA",
      "physics.optics"
    ],
    "url": "https://arxiv.org/abs/2610.30851"
  },
  {
    "id": "2610.30847",
    "title": "Bifurcations from Weight Space: JEPAWG on Parametric Dynamical Systems",
    "authors": [
      "Tobias Göbel",
      "Miranda C. N. Cheng"
    ],
    "abstract": "Trained network weights are increasingly treated as data, but there is rarely ground truth about what a population of models should encode, which hampers systematic validation of weight-space methods. This makes parametric dynamical systems a natural test-bed: the dynamics change qualitatively at submanifolds of parameter space that are, in well-studied families, known analytically or numerically. Fine-tuning a forecasting network at each point of a parameter grid yields a model zoo indexed by a physical parameter, against which weight-space diagnostics can be checked. We build such model zoos for four dynamical systems and analyse them with JEPAWG, a recently proposed joint-embedding hypernetwork built around a learned parameter--weight representation. It was first introduced for neural samplers for lattice field theories, where its latent geometry located the phase transition and estimated the 2D Ising critical exponent. Applied to dynamical systems, JEPAWG is competitive on forecasting with a hypernetwork trained directly for that task, despite being supervised on the parameter--weight correspondence rather than on forecasts. Beyond forecasting, the norm of the parameter-derivative of the decoded weights locates Hopf points and curves, tracks a period-doubling cascade closely enough to give a qualitative estimate of the Feigenbaum constant, and detects a global bifurcation, which has no eigenvalue signature and is therefore invisible to linearisation. As such, JEPAWG provides interpretable insight into the dynamics that is not available from other hypernetworks. Together, these results indicate that JEPAWG is a workable instrument for reading physical structure off a population of trained networks.",
    "published": "2026-10-22T07:22:44Z",
    "updated": "2026-10-22T07:22:44Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "nlin.CD"
    ],
    "url": "https://arxiv.org/abs/2610.30847"
  },
  {
    "id": "2610.29129",
    "title": "Mitigating Reward Hacking in Realistic Scenarios Through Representation Engineering",
    "authors": [
      "Austin Meek",
      "Kyle Cox",
      "Matthew Nguyen",
      "Austin J. Brockmeier",
      "Steven Basart"
    ],
    "abstract": "Reward hacking is a major problem in current production machine learning systems, resulting in costly and dangerous failures. Here we study how to monitor for and mitigate reward hacking in realistic settings, including tool calls and long contexts. We apply a dynamic intervention to steering directions obtained by three different methods: difference-in-means vectors from labeled rollouts, gradient optimization-based vectors, and vectors extracted when models reference an anti-reward-hacking model spec. This dynamic intervention perturbs model representations less than uniform steering vector addition to the residual stream, allowing for more precise edits. We find that we are able to cheaply and significantly reduce reward hacking without correspondingly significant costs to model coherence or capability, and that steering vectors originally extracted from coding environments also generalize to reducing reward hacking in other domains. Our results pave the way towards latent space monitoring and control over realistic production systems.",
    "published": "2026-10-21T03:12:22Z",
    "updated": "2026-10-21T03:12:22Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.29129"
  },
  {
    "id": "2610.29126",
    "title": "Two for One: Privileged Learning for Resource-Constrained Screening",
    "authors": [
      "Lisa Y. W. Tang"
    ],
    "abstract": "Machine learning systems are often developed under data-rich conditions but deployed when only incomplete information is available. A natural example arises in colour fundus photography (CFP), where both eyes are commonly imaged because they can provide complementary information for ocular disease assessment. Prior approaches that exploit bilateral information either fuse both eyes in a single model or use knowledge distillation to compress a dual-eye teacher into a lightweight student that still requires both images at test time. However, bilateral acquisition may not always be feasible. We thus propose a privileged learning framework in which a teacher model has access to bilateral CFP images during training and learns representations informed by information from both eyes, while the student is trained to transfer this knowledge from the bilateral teacher using only a single-eye image as input. At inference, the student operates exclusively on this single-eye input and does not require the contralateral image. Experimental results show consistent improvements in area under the receiver operating characteristic curve over conventional monocular training, with the largest gains observed for left-eye images for the detection of age-related macular degeneration (0.931 vs. 0.966) and diabetic retinopathy (0.789 vs. 0.836).%, while requiring only a single-eye image at inference. By enabling models to benefit from bilateral information during training while requiring only a single-eye image at inference, our approach may support more reliable deployment in resource-constrained clinical and screening environments.",
    "published": "2026-10-21T03:09:41Z",
    "updated": "2026-10-21T03:09:41Z",
    "categories": [
      "cs.CV",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2610.29126"
  },
  {
    "id": "2610.29122",
    "title": "StochIKM: Automated High-Fidelity Reconstruction of Individual Patient Data from Published Kaplan-Meier Curves",
    "authors": [
      "Liangze Ke",
      "Daniel Zelterman",
      "Wei Wei",
      "Guannan Gong"
    ],
    "abstract": "Individual patient data are the gold standard for secondary analysis of time-to-event evidence, but they are rarely released, and reconstruction from a published Kaplan-Meier figure could help. Existing methods all claim high fidelity, each judged by whichever agreements it happens to achieve, and each returns a single dataset although the map from figure to data is not bijective. We define fidelity explicitly: a dataset is admissible when it reproduces the risk table exactly, follows the digitized curve to within the image resolution, and respects the printed median, interval and event count. We propose StochIKM, a stochastic algorithm that digitizes the figure with a vision-capable language model and uses the high-fidelity definition as constraints, returning an admissible set of individual patient datasets. A solution is guaranteed to exist whenever the figure has been read correctly, so a failure indicts either the published figure or its digitization. In simulation and in 79 arms from published oncology trials, StochIKM reproduces the published risk tables and medians more closely than LLM-improved IPDfromKM, a high-impact alternative.",
    "published": "2026-10-21T03:05:49Z",
    "updated": "2026-10-22T02:47:45Z",
    "categories": [
      "cs.AI",
      "stat.AP"
    ],
    "url": "https://arxiv.org/abs/2610.29122"
  },
  {
    "id": "2610.29121",
    "title": "Recursive Self-Improvement on a Budget: Scoring Code Edits Before They Run",
    "authors": [
      "Erfan Darzi",
      "Sree Bhargavi Balija",
      "Sheng He"
    ],
    "abstract": "A coding agent that rewrites its own scaffold has to choose which proposed edit to expand before that edit has been evaluated, and the search then has to return one agent. Each run fits one linear readout on the parent's steering-split solve rate and eight coordinates of the proposed diff, from 96 scaffold edits labeled by four evaluations of a 16-instance fit split, and then freezes the coefficients. HumanEval+ reserves 48 instances as the steering split and Polyglot reserves 64. That split scores parents and keeps an archive of four nodes. Huxley-Gödel Machine selection draws a parent by Thompson sampling on the steering counts of nodes that have already been evaluated, and it expands the child that parent proposes. Every method then returns the earliest evaluated node whose steering-split solve count is maximal. The tables report the held-out score of that node on the other 100 HumanEval+ instances and the other 145 Polyglot instances, next to the root scaffold and the calibration edit with the highest fit-split label. Twelve runs of GPT-4o return a node at 87.0% on held-out HumanEval+, against 84.2% for the parent-rate ablation. On that split Huxley-Gödel Machine selection returns 85.1%, the root is at 81.2%, and the calibration-best edit is at 82.8%. On the same split Claude Sonnet 4.5 returns 86.6%, beside 86.5% for Huxley-Gödel Machine selection, 85.3% for the parent-rate ablation, and 85.1% for the calibration-best edit.",
    "published": "2026-10-21T03:04:25Z",
    "updated": "2026-10-21T03:04:25Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.29121"
  },
  {
    "id": "2610.29120",
    "title": "An Eco-Friendly Tourism Trip Planner Driven by Z-Number Uncertainty: Evidence from Baku, Dubai, Abu Dhabi, Tashkent, and Istanbul",
    "authors": [
      "Aziz Nuriyev",
      "Sherzod Turaev",
      "Saja Al-Dabet",
      "Mary John",
      "Kanan Qasimzade",
      "Alihuseyn Orujzada",
      "Fatima Alblooshi",
      "Aisha Al Ali"
    ],
    "abstract": "Deployed tourism trip planners ingest travel times and ratings as exact numbers, although routing services return travel times that vary with the hour of departure and a platform rating may rest on a handful of reviews or on hundreds of thousands. We present an eco-friendly trip planner that represents both quantities as Z-numbers, which pair a fuzzy restriction on a value with a fuzzy reliability on the evidence behind it, and that constructs them directly from routing-service observations at six departure hours and from platform review counts rather than from linguistic elicitation. A hybrid loss combines score, carbon, travel-time, and reliability terms, and an adaptive large neighborhood search returns single-day itineraries through a conversational front end. We compare the planner with a crisp-mean baseline under an identical optimizer in Baku, Dubai, Abu Dhabi, Tashkent, and Istanbul, with fifteen points of interest and thirty seeds per city, and we evaluate the selected itineraries on their trip carbon and their total travel time. Pooled over 150 seed-paired runs, the planner lowers trip carbon from 3.24 to 2.61 kg (19.3%, Wilcoxon p = 0.017; city-clustered bootstrap interval 6.4% to 26.7%) and travel time from 123 to 109 minutes per trip (11.5%, p = 2.8e-10; interval 5.0% to 18.2%). The travel-time reductions survive a Holm correction in Baku, Istanbul, and Abu Dhabi; the carbon reduction is significant in Baku and large but uncertain in the dispersed catalogs of Dubai and Abu Dhabi; and neither metric changes in Tashkent. Review counts are estimates of at least 3,000 for every point of interest, so rating reliability does not vary, and with a single baseline, the results establish feasibility and direction rather than a general advantage. Code, routing caches, frozen routing tables, and per-seed results are openly released.",
    "published": "2026-10-21T03:03:19Z",
    "updated": "2026-10-23T06:46:10Z",
    "categories": [
      "physics.soc-ph",
      "cs.AI",
      "cs.CE"
    ],
    "url": "https://arxiv.org/abs/2610.29120"
  },
  {
    "id": "2610.29114",
    "title": "MHeatmap: Two-Walk Laplacian Reordering and Mosaic Layout for Rectangular Matrix Visualization",
    "authors": [
      "Juntang Wang",
      "Sheng'en Li",
      "Liming Zhu",
      "Yihan Wang",
      "Siyuan Cao",
      "Hao Wu",
      "Man Zhang",
      "Shixin Xu",
      "Dongmian Zou"
    ],
    "abstract": "Weighted rectangular matrices record relations between two types of objects, such as occupations and industries, documents and terms, origins and destinations, or annotated classes and computed clusters. Their heatmaps become difficult to read when arbitrary row and column orders scatter related objects, while equal size cells hide large differences in row and column totals. We present MHeatmap (Mosaic Heatmap), which addresses these problems in two stages. Two-Walk spectral seriation first represents the matrix as a weighted bipartite graph. Ordinary bipartite ordering uses only observed row to column links. Two-Walk also uses length-two walks, so rows that share columns and columns that share rows receive explicit similarity links. Sorting a Fiedler vector of the resulting graph Laplacian gives coordinated row and column orders. The Mosaic layout then partitions a unit square so that row height is proportional to the row total and column width is proportional to the column total, while color represents the observed entry. We prove how the Two-Walk energy combines direct alignment with shared-neighbor smoothness, derive an exact matrix vector product that permits sparse computation, and formalize the tiling and area semantics of Mosaic. Across 300 synthetic matrices and seven real data sets, Two-Walk obtains the lowest normalized 2-SUM in all 15 synthetic regimes and the highest Band@10% in 14. The largest gains occur when shared neighborhoods express the latent relational structure.",
    "published": "2026-10-21T02:55:57Z",
    "updated": "2026-10-21T02:55:57Z",
    "categories": [
      "cs.LG",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.29114"
  },
  {
    "id": "2610.29110",
    "title": "GRAM: Group-wise Rank-Aware Model Merging via Subspace Alignment",
    "authors": [
      "Di Wu",
      "Shuaidong Pan"
    ],
    "abstract": "Merging different models into a single model is highly desirable for multi-task deployment, particularly in regulated domains like healthcare. In such settings, models are often locally fine-tuned due to strict data privacy policies, necessitating that aggregation operates exclusively on the fine-tuned weights. Existing methods apply a uniform merge across all tasks, ignoring the geometric relationships among their learned subspaces. When task updates occupy misaligned subspaces, projecting them onto a shared low-rank basis discards task-relevant directions, a failure mode named \\emph{subspace interference}. Through this study, we show that the per-task projection error of a merged model is governed by the principal-angle alignment between each task and the shared subspace, so that grouping geometrically compatible tasks provably reduces this error within each group. Motivated by this observation, we propose \\textbf{Group-wise Rank-Aware Model Merging (GRAM)}, which uses the principal-angle geometry of task vectors to decide which tasks should be merged together and then performs a standard SVD-based merge within each coalition; the pipeline requires only the fine-tuned weights at merge time. With only one additional model ($\\nK{=}2$), GRAM significantly mitigates subspace interference and consistently outperforms prior merging methods across language understanding (GLUE with Flan-T5), 8-task CLIP vision, and medical instruction tuning (Qwen2-7B-Instruct with four English/Chinese medical LoRAs).",
    "published": "2026-10-21T02:50:46Z",
    "updated": "2026-10-21T02:50:46Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.29110"
  },
  {
    "id": "2610.29108",
    "title": "WaFIR: Wavelet-Fourier Mixture-of-Experts with Subband-Adaptive Routing for Blind All-in-One Image Restoration",
    "authors": [
      "Trong Nhan Nguyen",
      "Vu Hoang Minh Doan",
      "Thanh Dat Le",
      "Truong Tien Vo",
      "Thi Thu Ha Vu",
      "Tan Hung Vo",
      "Jaeyeop Choi",
      "Junghwan Oh",
      "Truong-Son Hy"
    ],
    "abstract": "Blind all-in-one image restoration must adapt a shared model to heterogeneous and sometimes mixed degradations without a task label at test time. We introduce WaFIR, a decoder module that decomposes features into Haar subbands, summarizes each subband with a compact Fourier descriptor, and routes it to prompt-conditioned spectral modulation experts. Unlike image-level frequency conditioning, WaFIR makes routing decisions at the subband level, enabling frequency-specific processing while retaining the task context learned by the backbone. Under a unified training and evaluation protocol for denoising, deraining, and dehazing, WaFIR improves average PSNR over the three tasks by 0.48 dB over the PromptIR baseline and by 0.38 dB over the recent Up-Restorer. Matched-capacity and routing controls show that the gain is not explained by additional parameters alone. On unseen noise intensities, descriptor-based routing is more robust than a discrete label-conditioned alternative and remains on par under compound degradations, while routing analyses show stable subband-dependent expert use across degradation types. These results support subband frequency structure as an interpretable complement to prompt-based conditioning for blind image restoration. Code is available at https://anonymous.4open.science/r/WaFIR/README.md",
    "published": "2026-10-21T02:50:14Z",
    "updated": "2026-10-21T02:50:14Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.29108"
  },
  {
    "id": "2610.29107",
    "title": "PhyMo: Learning Physical Dynamics with Accurate and Continuous Motion from Multi-View Videos",
    "authors": [
      "Shangjia Liu",
      "Jinxi Li",
      "Siyuan Zhou",
      "Bo Yang",
      "Bing Wang"
    ],
    "abstract": "Recovering dynamic 3D scene geometry, appearance, and the physical motion states that govern scene evolution from multi-view videos is important yet challenging. A key difficulty is that appearance can be deceptive. Under rendering supervision alone, a model may fit the observed images by changing color or opacity to compensate for inaccurate deformation, rather than recovering the true evolving geometry and motion. This issue is especially severe in scenes with fast or locally complex motion, where inaccurate trajectories can still produce plausible images over the observed frames, but lead to unreliable reconstruction and discontinuous future prediction. In this paper, we propose PhyMo, a framework for learning evolving dynamics from multi-view videos. We introduce a Motion-Aware Trajectory Representation that drives the model to recover accurate motion from deformation, rather than relying on appearance shortcuts to explain observed motion. On top of this, we propose a Continuous Motion Evolution module with bidirectional kinematic continuity constraint to promote temporally consistent evolution of displacement, velocity, and acceleration. Together, these designs yield geometrically faithful interpolation and continuous motion extrapolation. Experiments on four dynamic scene benchmarks demonstrate state-of-the-art performance.",
    "published": "2026-10-21T02:49:38Z",
    "updated": "2026-10-26T09:25:54Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.29107"
  },
  {
    "id": "2610.29106",
    "title": "DriftNeRF: Cross-Ray Density Drifting for Sparse-View Neural Radiance Fields",
    "authors": [
      "Juntang Wang",
      "Yihan Wang",
      "Sheng'en Li",
      "Hao Wu",
      "Dongmian Zou",
      "Shixin Xu"
    ],
    "abstract": "Neural Radiance Fields (NeRF) synthesize photorealistic novel views from dense image collections, but degrade sharply when few views are available. We attribute a specific, measurable defect to the objective itself: the rendering loss is a sum over independent rays and contains no term comparing densities that different rays assign to the same region of space, so nearby 3D points can settle on contradictory densities while every training pixel is reproduced correctly. We make this quantity explicit by measuring cross-ray density disagreement directly during training, and show that it stays high in vanilla NeRF, falls only incidentally under frequency-based regularization, and moves together with held-out quality in the sparse regime. We then close the gap with DriftNeRF, a drop-in regularizer that instantiates the drifting-field template on density samples: a masked exponential kernel aggregates densities from nearby points on other rays into a stop-gradient consensus target, and the resulting drifting field penalizes unsupported disagreement while leaving agreed-upon boundaries intact. The regularizer reads only sampled positions, ray identifiers, and predicted densities, so it requires no pretrained model, external geometry, or additional images, and transfers across field parameterizations. On NeRF-Synthetic it reduces residual disagreement by an order of magnitude, and across NeRF-Synthetic, DTU, and LLFF it improves 3-view PSNR over the strongest MLP-NeRF baseline by 0.42-0.65 dB and remains competitive with sparse-view Gaussian pipelines under a matched protocol without their depth, flow, or covisibility preprocessing.",
    "published": "2026-10-21T02:49:34Z",
    "updated": "2026-10-21T02:49:34Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.29106"
  },
  {
    "id": "2610.29104",
    "title": "From Canon to Nikon: Camera Domain Shift and Potential Equity Implications in Retinal AI",
    "authors": [
      "Lisa Y. W. Tang"
    ],
    "abstract": "Diabetic retinopathy is a leading cause of preventable blindness, yet access to regular screening remains limited worldwide. AI offers a scalable approach, but its performance can be sensitive to image quality and acquisition conditions. In a Brazilian cohort of 8,524 patients, retinal images acquired with the Nikon NF5050 were more than twice as likely to have inadequate image quality compared with those acquired with the Canon CR-2, despite refurbished Canon systems costing more than twice as much as Nikon systems. This potential cost-quality trade-off highlights an important consideration for the reliability of AI systems deployed across heterogeneous imaging systems. Using a frozen pretrained retinal foundation model, we systematically evaluate whether camera-associated performance differences persist across 12 retinal disease classification tasks, four input resolutions, and five downstream classifiers. We find that camera-associated performance differences vary substantially across tasks, and that neither higher input resolution nor classifier choice consistently mitigates cross-camera variation. These findings identify camera platform as a potentially overlooked source of performance variability, with implications for the safety and reliability of retinal AI when deployed across heterogeneous imaging systems. We release all source code, evaluation scripts, and per-task results on GitHub to support reproducible benchmarking.",
    "published": "2026-10-21T02:47:39Z",
    "updated": "2026-10-21T02:47:39Z",
    "categories": [
      "cs.CV",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2610.29104"
  },
  {
    "id": "2610.29102",
    "title": "Diffusion Posterior Sampling with Uncertain Forward Models",
    "authors": [
      "Wentao Shangguan",
      "Vivek K Goyal"
    ],
    "abstract": "Diffusion posterior samplers reconstruct signals by combining a pretrained diffusion prior with a measurement likelihood specified by a forward model and a noise model. Calibration and reference data can characterize uncertainty in the forward model's parameters, such as blur kernels or detector responses. Fixing these parameters at estimated values leaves their uncertainty out of the likelihood, and parameter errors are thus absorbed into the reconstruction. We introduce an uncertainty-aware likelihood (UAL), a Gaussian approximation to the marginal likelihood obtained by integrating over the uncertain parameters. For each candidate signal, UAL propagates parameter uncertainty into a structured measurement covariance, reducing the quadratic penalty along residual directions that parameter variation can explain. Existing samplers can use UAL in their data updates while retaining their pretrained diffusion priors and sampling schedules. Under a fixed Gaussian nuisance model, we bound likelihood error from linearization and average divergence between the exact marginal and UAL posteriors. We compare samplers with and without UAL across six inverse problems spanning Gaussian and motion deblurring, CT, MRI, ultrasound, and fluorescence microscopy, and find improvements in reconstruction and ensemble prediction. UAL reduces geometric mean MSE by 9% to 20% across samplers in the main Gaussian-deblurring setting and by 51% to 92% in motion deblurring when non-blind samplers use the population-mean kernel. In motion deblurring, DAPS and PnP-DM with UAL also give 6.2 to 6.4 dB higher ensemble-mean PSNR than published BlindDPS and Fast Diffusion EM. On the ablation set, UAL outperforms trace-matched isotropic inflation for PnP-DM in both deblurring tasks; in motion deblurring, it also exceeds the best-tested fixed scalar data weighting by 3.3 dB for PnP-DM and 4.2 dB for DAPS in average PSNR.",
    "published": "2026-10-21T02:47:28Z",
    "updated": "2026-10-21T02:47:28Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.29102"
  }
];
