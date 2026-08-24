window.PAPER_DATA_UPDATED_AT = "2026-08-24";
window.PAPER_ITEMS = [
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
    "id": "2608.20335",
    "title": "4DAnyone: Create Anyone in 4D from a Casual Monocular Video",
    "authors": [
      "Yudong Jin",
      "Tao Xie",
      "Qihang Zhang",
      "Zehong Shen",
      "Zhen Xu",
      "Yujun Shen",
      "Hujun Bao",
      "Xiaowei Zhou",
      "Yinghao Xu"
    ],
    "abstract": "We present 4DAnyone, a framework for reconstructing 4D humans from an uncalibrated monocular video by generating reconstruction-grade multiview-consistent videos and lifting them into 4D Gaussian Splatting (4DGS). Existing camera-controlled video diffusion models synthesize plausible novel-view videos but fail to maintain consistency when scaled to the tens of target views required for 4DGS reconstruction. We identify this failure as a bounded-attention-context problem: when target views exceed the capacity of a single DiT forward pass, they must be split into groups, exposing two coupled bottlenecks. On the reference-context side, conditioning on all previously generated views grows as $O(N)$, weakening cross-view appearance guidance. On the target-context side, disjoint groups cannot directly exchange information, causing global structural drift. 4DAnyone addresses both bottlenecks with two complementary designs: Reference Context Packing (RCP) compresses growing reference views into a fixed-length mixed-resolution context with $O(1)$ reference-context complexity, while Target Context Routing (TCR) rotates target-view groupings during denoising to share context across groups at high-noise steps and stabilize details at low-noise steps. We further build the MVGameHuman dataset using our in-house game engine and combine it with light-stage and in-the-wild video datasets for training. Experiments on DNA-Rendering and DyMVHumans show that 4DAnyone outperforms prior methods in both novel-view video quality and downstream 4DGS reconstruction, with robust in-the-wild generalization. See our project page for video results and source code: https://4danyone.github.io.",
    "published": "2026-08-20T17:59:53Z",
    "updated": "2026-08-20T17:59:53Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.20335"
  },
  {
    "id": "2608.20336",
    "title": "WithEveryone: Unified Planning and Identity Grounding for Group Image Generation",
    "authors": [
      "Hengyuan Xu",
      "Qixun Wang",
      "Yiji Cheng",
      "Miles Yang",
      "Zhao Zhong",
      "Wei Cheng",
      "Xingjun Ma",
      "Yu-gang Jiang"
    ],
    "abstract": "Identity-preserving image generation becomes increasingly unreliable when a scene must contain many specified people. Beyond retaining each identity, the model must bind every reference to a distinct person and location, while training-time identity losses must establish correspondence among several noisy predicted faces. We introduce WithEveryone, a unified framework for generating group images up to ten reference identities. WithEveryone injects each selected identity as an addressed token, predicts a structured identity--layout plan, and renders the plan as a visual condition. Its key objective, Layout-Grounded ID Loss, uses annotated face regions to supervise the intended identities directly, avoiding unstable embedding-based face matching; ID Representation Forcing additionally trains a prediction for each identity before image synthesis. On an identity-disjoint benchmark, WithEveryone achieves the highest target-context identity similarity, improving face similarity from 0.462 for GPT-Image-2 to 0.499, while reducing copy-paste artifacts from 0.169 to 0.055. It further covers 97.3\\% of the requested identities with a duplicate rate of only 2.8\\%. These results show that explicit identity--layout grounding enables identity-preserving generation to scale to larger groups without relying on direct reference-face copying.",
    "published": "2026-08-20T17:59:53Z",
    "updated": "2026-08-20T17:59:53Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.20336"
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
    "id": "2608.15919",
    "title": "Noesis: Bidirectional Graph-RAG with Adaptive Parallelism and Cross-Knowledge-Base Semantic Discovery",
    "authors": [
      "Nicola Cogotti"
    ],
    "abstract": "Retrieval-Augmented Generation over knowledge graphs (Graph-RAG) has emerged as a powerful paradigm for grounding large language models in domain-specific corpora. However, existing systems face persistent limitations: (1) static chunking fragments long documents, losing cross-section semantic connections; (2) ingestion pipelines do not scale adaptively; and (3) multi-domain deployments require either a monolithic knowledge base that dilutes retrieval precision or manual user routing. We present Noesis, a decoupled Graph-RAG architecture addressing these limitations through four algorithms: (a) Bidirectional Graph Traversal with a Graph-Feedback Context Resolver simulating human reading with degrading memory; (b) an AIMD Concurrency Controller adapted from TCP congestion control, achieving 23x speedup with zero OOM events; (c) Moesis, domain-aware selective quantization for MoE models achieving 6.3x speedup on 12 GB consumer GPUs; and (d) Mesh, cross-KB semantic routing with runtime structural discovery enabling small on-premises models to perform multi-hop cross-domain reasoning. On HotpotQA (1,000 questions), Noesis achieves 59.5 EM / 74.7 F1, surpassing GraphRAG by +27.8 EM while using a 35B on-premises model for graph construction rather than GPT-4o. Source text verification on a 193-page document confirms 90% precision on long-range causal edges inaccessible to chunk-independent extraction.",
    "published": "2026-08-16T20:23:35Z",
    "updated": "2026-08-16T20:23:35Z",
    "categories": [
      "cs.IR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.15919"
  },
  {
    "id": "2608.15917",
    "title": "Pre-training Visual Dexterity in Simulation",
    "authors": [
      "Sarthak Kamat",
      "Adam Rashid",
      "Satvik Sharma",
      "Aseem Doriwala",
      "Chelsea Finn",
      "Phillip Isola",
      "C. Karen Liu"
    ],
    "abstract": "Large-scale pre-training has made robot policy fine-tuning increasingly data-efficient, but this progress has largely been driven by datasets and embodiments built around simple parallel-jaw grippers. Dexterous, multi-fingered hands remain comparatively data-starved because real teleoperation is costly to scale, while human hand video is off-embodiment and requires lossy pose estimation and retargeting. We introduce Simulation Pre-training for Dexterity (SPD), a pre-training framework for dexterous manipulation that uses data entirely collected in simulation. In SPD, humans manipulate virtual objects inside a VR headset, enabling on-embodiment trajectories and robot-free collection. With the help of five operators, we collect 75 hours of multi-task dexterous manipulation over one week, and use it to pre-train a causal transformer on a sequence modeling objective. We study the benefits of simulation pre-training on real-world tasks by fine-tuning on 1-2 hours of physical demonstrations on a 56-DoF bimanual dexterous setup. We find that our approach outperforms training behavior cloning policies from scratch, showing that simulation teleoperation is a viable pre-training source for real-world dexterous manipulation. We perform ablation studies, measuring the benefits of history conditioning and short action chunks for reactive control.",
    "published": "2026-08-16T20:21:33Z",
    "updated": "2026-08-16T20:21:33Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.15917"
  },
  {
    "id": "2608.15915",
    "title": "Comprehensive Benchmarking of Deep Learning Architectures for Lung Cancer Histopathology",
    "authors": [
      "Hadi Hasan",
      "Safaa Salman",
      "Lama Sleem",
      "Ralph Mouawad",
      "Ali Chehab"
    ],
    "abstract": "Lung cancer remains the leading cause of cancer-related mortality worldwide, while histopathological diagnosis is often affected by inter-observer variability and the substantial workload associated with manual slide examination. Although deep learning has shown considerable potential in computational pathology, comprehensive benchmarks that integrate tissue classification and region segmentation within a unified analytical framework remain limited. This study presents a two-stage deep learning framework for multi-class tissue classification and pixel-level histopathological region segmentation, accompanied by a systematic comparison of state-of-the-art architectures at each stage. For tissue classification, six models, a custom convolutional neural network, VGG16, DenseNet, MobileNetV3, a custom Vision Transformer, and YOLO11, are evaluated on a combined dataset of 39,000 images derived from LC25000 and LungHist700. The models distinguish between adenocarcinoma, squamous cell carcinoma, and normal lung tissue. YOLO11 achieves the best classification performance, with an accuracy of 98.38%, a five-fold cross-validation accuracy of 98.21 +/- 0.35%, and a macro F1-score of 0.98. For region segmentation, U-Net, ResNet-encoder U-Net, DeepLabV3+, and YOLO11-seg are evaluated using the GlaS gland segmentation benchmark. DeepLabV3+ obtains the highest Intersection over Union of 0.80 and a Dice score of 0.89, while YOLO11-seg achieves a comparable Intersection over Union of 0.79 using approximately 14x fewer parameters. The best-performing classification and segmentation models are subsequently integrated into an end-to-end framework, providing an accurate, computationally efficient, and reproducible baseline for automated histopathological image analysis.",
    "published": "2026-08-16T20:12:13Z",
    "updated": "2026-08-16T20:12:13Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.15915"
  },
  {
    "id": "2608.15905",
    "title": "CLARA: Clip-Level Multimodal Alignment with VLM-Derived Rationales for Hateful Video Detection",
    "authors": [
      "Yuchen Zhang",
      "Shuang Dai",
      "Zeyu Fu",
      "Yunfei Long",
      "Ravi Shekhar",
      "Haralambos Mouratidis"
    ],
    "abstract": "Hateful video detection has become increasingly important with the rapid growth of video-centric social media platforms, given the serious risks that hate speech poses to both individual well-being and social cohesion. Compared with text or static multimodal content, hateful video detection remains underexplored and significantly more challenging, as hateful meaning often arises from complex interactions among multimodal cues, including speech, audio, and visual content. Moreover, such signals are often brief, implicit, and temporally dependent, making them difficult to capture using conventional video-level representations. In this work, we propose CLARA, a clip-level multimodal framework for hateful video detection. Instead of treating a video as a single instance, CLARA models it as a sequence of fine-grained clips, enabling more precise capture of temporally localized hateful signals. We introduce a Mixture-of-Experts clip encoder for adaptive multimodal alignment, a local-global segment contrastive objective to jointly model short-term cues and long-range temporal dependencies, and VLM-derived rationales integrated via a gated Transformer to provide high-level semantic guidance. Extensive experiments on three hateful video datasets demonstrate that CLARA consistently outperforms state-of-the-art methods. Further ablation studies and parameter analyses validate the effectiveness of each component.",
    "published": "2026-08-16T19:44:49Z",
    "updated": "2026-08-19T13:14:48Z",
    "categories": [
      "cs.CV",
      "cs.MM"
    ],
    "url": "https://arxiv.org/abs/2608.15905"
  },
  {
    "id": "2608.15901",
    "title": "Layers Matter: Why Continual Learning Regularization Should Be Layer-Adaptive",
    "authors": [
      "Brian B. Moser",
      "Ahmed Anwar",
      "Tobias Christian Nauen",
      "Shishir Muralidhara",
      "Federico Raue",
      "René Schuster",
      "Stanislav Frolov",
      "Andreas Dengel"
    ],
    "abstract": "Continual learning regularizers like EWC fight forgetting by penalizing changes from previous-task parameters with per-parameter importance, typically diagonal Fisher values. Per-parameter looks more flexible than per-layer, but each layer's diagonal Fisher is a weak summary of its actual curvature, missing the top-eigenvalue information that controls forgetting. Adversarial bit-flip attacks and Hessian-spectrum studies show that this missing per-layer sensitivity spans orders of magnitude in neural networks. Under a block-diagonal Hessian assumption, the layer-level analogue of EWC's existing diagonal assumption, we prove three things. Forgetting decomposes as a sum of per-layer terms weighted by each layer's top Hessian eigenvalue. Diagonal-Fisher weights cannot recover this eigenvalue. For instance, two layers with identical Fisher averages can have top eigenvalues differing by a factor as large as the layer width. For the same level of forgetting, uniform regularization loses new-task performance by an amount scaling with the layer condition number. Our theoretical analysis leads to a simple recipe: protect early layers strongly, let deeper layers move. We apply this recipe to EWC and SLCA and show clear improvements in average performance and forgetting metrics.",
    "published": "2026-08-16T19:37:38Z",
    "updated": "2026-08-16T19:37:38Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.15901"
  },
  {
    "id": "2608.15893",
    "title": "Breaking and Defending LLM-Powered Social Media Bot Detection Systems",
    "authors": [
      "Nof Orenstein",
      "Yoni Birman"
    ],
    "abstract": "The rise of social media bots poses a persistent threat, enabling misinformation, opinion manipulation, and the erosion of trust in online platforms. To combat this, machine learning systems have been developed to detect and limit bot activity, but attackers continuously adapt through techniques such as adversarial learning and behavior imitation, fueling an ongoing arms race between bots and detection tools. Recent advances in large language models (LLMs) have significantly improved bot detection by enabling deeper semantic and contextual analysis of accounts and their content. However, this shift also introduces new attack surfaces, allowing adversaries to craft exploits that directly target the reasoning and generation mechanisms of LLM-based classifiers. Industry tools such as Anthropic's Claude Code Security similarly leverage LLMs for security-critical decisions, further motivating a careful study of their attack surfaces. In this work, we investigate both the offensive and defensive aspects of LLM-powered, threat-specific cybersecurity applications. While centered on the challenge of social media bot detection, our methodology and insights generalize to a broad class of LLM-powered cybersecurity systems, including phishing detection, email classification, and fraud analysis. We introduce two novel adversarial attack strategies that systematically exploit the semantic and contextual weaknesses of LLM-based classifiers, degrading their detection accuracy by up to 48%. To counter these threats, we propose a robust multi-LLM defense architecture designed to preserve detection reliability under adaptive adversarial conditions. Our solution, LSABRE (LLM-powered Social Adversarial Bot Recognition Ensemble), is a multi-LLM framework that substantially improves robustness across a range of attacks, maintaining 86% detection accuracy even under strong, adaptive adversarial pressure.",
    "published": "2026-08-16T18:56:01Z",
    "updated": "2026-08-16T18:56:01Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.15893"
  },
  {
    "id": "2608.15888",
    "title": "Bounded Agents: Delegation Security for Multi-Agent AI Systems",
    "authors": [
      "Xabier Muruaga"
    ],
    "abstract": "LLM-based agents can act on behalf of a user to access cloud services, call tools, or invoke agents. At session start, the agent's permissions are set but remain static, and each request is evaluated independently, without considering prior actions. Within its permissions, an agent may act contrary to the delegated task, combine individually permitted actions into a prohibited outcome, or delegate authority to a sub-agent without limiting it. A prompt injection poses a risk only if the agent has authority to perform such actions; this is therefore a problem of authorization architecture, not just the model. The Agentic Principal Chain (APC) tracks delegated authority from one principal to the next. APC evaluates each request against the accumulated session state using six authorization checks. APC carries forward and restricts delegated scope and budgets. Using composition closure, APC checks requests against prior actions to prevent prohibited combinations and enforces the decision outside the model. We prove Blast Radius Monotonicity and Composition Soundness for APC implementations; Composition Soundness is limited to prohibited combinations under a complete restriction set and serialized admission. We evaluated 3,154 instances including InjecAgent, AgentDojo, and ASB. Our compromised-model evaluation tests APC independently of model behavior by inserting the ground-truth attack call after the first legitimate tool call. AgentDojo exfiltration fell from 75-100% to 0% across all four domains; APC blocked all 544 InjecAgent data-stealing cases. Intent binding reduced destruction from 38.6% to 4.0% and manipulation from 90.5% to 12.1%. Authorization latency was 0.24 ms at the 99th percentile on an idle host; across 949 AgentDojo task-injection pairs, utility was 8.6 and 13.9 percentage points lower in the two settings. Implementation, evaluation tools, and data are publicly available.",
    "published": "2026-08-16T18:38:00Z",
    "updated": "2026-08-16T18:38:00Z",
    "categories": [
      "cs.AI",
      "cs.CR"
    ],
    "url": "https://arxiv.org/abs/2608.15888"
  },
  {
    "id": "2608.16959",
    "title": "MagViT: Interpretable Multi-Magnification Transformers with Patient-Level Model Selection for Breast Histopathology",
    "authors": [
      "Nabil Ashab",
      "Soumit Kumar Kundu",
      "Saif Mahmud Parvez",
      "Shahadat Hossain Sohag",
      "Bidhan Biswas",
      "Nazmus Subha"
    ],
    "abstract": "Breast cancer is one of the most common types of cancer among women around the world. Rapid detection and early treatment can hinder its progress to more complex stages and can impede its spread to other parts of the body. Histopathological image classification is the most common task in cancer detection due to its robustness in analyzing cellular data. Breast histopathology classification requires handling both multi-scale tissue morphology and clinically relevant generalization beyond the source domain. This paper presents MagViT, an interpretable multi-magnification transformer framework with scale-gated fusion and patient-level model selection. The model uses four BreakHis magnifications (40X, 100X, 200X, 400X) and extracts per-scale representations with a ViT backbone, and combines them via a learnable gate that masks missing scales. Patient-level five-fold cross-validation with a fixed seed has been run and compared with three architectural branches. The most accurate branch is then selected as the final model due to the strongest patient-level accuracy while retaining the simplest fusion pathway. On BreakHis, our architecture achieves a mean image accuracy of 0.9191, a mean patient accuracy of 0.9643, and a mean macro-F1 of 0.9042. External transfer experiments provide preliminary evidence of cross-dataset generalization under controlled adaptation settings on BUSI (image accuracy 0.8306, macro-F1 0.7480, patient accuracy 0.8291) and IDC (image accuracy 0.8577, macro-F1 0.8191, patient accuracy 0.8372). Grad-CAM visualization indicates that the model focuses on diagnostically significant and meaningful regions across magnifications. Relative to prior ViT-centered BreakHis work, this study emphasizes patient-level selection and cross-dataset robustness under a reproducible protocol.",
    "published": "2026-08-16T18:20:40Z",
    "updated": "2026-08-16T18:20:40Z",
    "categories": [
      "eess.IV",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.16959"
  },
  {
    "id": "2608.15877",
    "title": "Dear Algo: A Precision-First Agentic Intent Layer for Unified Search and Recommendation",
    "authors": [
      "Rui Wang",
      "Jiazhou Wang",
      "Zheng Wei",
      "Chenglin Lu",
      "Fangcheng Sun",
      "Ivy Sun",
      "Jin Sun",
      "Hui Geng",
      "Lillian Zhang",
      "Chao Yang",
      "Lei Chen",
      "Shahin Sefati",
      "Reem Helou",
      "Joe Zhou",
      "Babak Shakibi",
      "Yiyi Pan",
      "Bi Xue",
      "Hong Yan",
      "Shujian Bu"
    ],
    "abstract": "Search and recommendation serve a shared discovery objective but encode intent differently. We study this boundary through Dear Algo on Threads, a deployed product where open-ended requests such as \\emph{more NBA news} or \\emph{less politics} steer subsequent feed recommendations rather than return a one-shot result list. Its agentic intent layer compiles explicit, inferred, negative, and compound intent into a grounded executable plan, then invokes conventional retrieval and optional semantic or multimodal reranking. The layer shares an intent-to-retrieval contract without requiring one model or serving path across search-like and recommendation-like modes. We evaluate Dear Algo under a precision-first objective. In a blinded audit of 300 public request-item pairs (296 evaluable), a strict categorical LLM-as-a-judge gate achieved 94.4\\% exact-Relevant precision [88.8\\%, 98.9\\%]. Across 72 normalized request clusters, the full configuration produced 7.73 judge-qualified candidates per 20 slots versus 6.61 for an LLM-derived-query baseline, a gain of 1.11 [0.12, 2.12]. In a candidate-randomized serving-path study restricted to the reranker path's first 72 eligible hours, the user-weighted judge-Irrelevant share among judged admissions was 2.80\\% versus 4.78\\% off (-1.97 points [-3.02, -0.94]), while Exact-Relevant share was 2.24 points higher [0.08, 4.41]. Together, these studies show how explicit natural-language intent can be carried into feed recommendation under a precision-first evaluation framework",
    "published": "2026-08-16T17:59:12Z",
    "updated": "2026-08-16T17:59:12Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.15877"
  },
  {
    "id": "2608.15869",
    "title": "Beyond Visual CoT: Internalized Visual Thinking for Proactive Video Reasoning",
    "authors": [
      "Xiaoyu Zhu",
      "Xinke Deng",
      "Suresh Taddewadikar",
      "Arnab Kumar Mondal",
      "Zhongyu Jiang",
      "Ian Fasel",
      "Joerg Liebelt"
    ],
    "abstract": "Multimodal large language models increasingly use visual chain-of-thought (Visual CoT) to reason about spatial, temporal, and embodied environments. By generating intermediate reasoning images, Visual CoT provides an intuitive mechanism for visual foresight but introduces substantial inference overhead, which is particularly problematic for proactive video reasoning. We ask whether models can learn to think visually during training while reasoning directly at inference. We introduce Internalized Visual Thinking (IVT), a post-training framework that jointly optimizes textual prediction and next-embedding prediction over unlabeled videos. Given a partially observed video, IVT predicts latent representations of future frames together with the target textual answer, encouraging the model to capture motion, object transitions, interactions, and latent intent. At inference, IVT generates the answer directly without synthesizing or re-encoding future frames. We conduct controlled studies across target representations, decoder designs, prediction horizons, data mixtures, training curricula, and predictive objectives. IVT improves over direct-answer fine-tuning on all six evaluation settings while retaining the same inference pathway. Compared with explicit Visual CoT, IVT achieves comparable or better performance and reduces average end-to-end latency by more than 5x. Together, our findings suggest that explicit pixel-space generation at inference time, as used in visual chain-of-thought, may not be necessary for effective proactive video reasoning. Predictive world modeling can be internalized during training to produce multimodal reasoners that are both more accurate and substantially more efficient.",
    "published": "2026-08-16T17:35:38Z",
    "updated": "2026-08-16T17:35:38Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.CL",
      "cs.LG",
      "cs.MM"
    ],
    "url": "https://arxiv.org/abs/2608.15869"
  },
  {
    "id": "2608.15868",
    "title": "CoupVisor: Strategy Optimization by Round and Challenge Decision Support",
    "authors": [
      "Cris Huynh"
    ],
    "abstract": "This paper presents CoupVisor, a decision-support system for the hidden-information card game Coup. It addresses two questions: what a player should do on each turn, and when a player should challenge an opponent's claim. The system is built around a single description of game events, which is shared across manual play, replay of recorded games, simulation, belief tracking, advisor recommendations, and learning-based policies. CoupVisor estimates the chance that a claim is truthful by combining how likely each role is with how many cards the claimant still holds, which corrects a case where the very first claim of a game was flagged as suspicious despite no evidence. We compare a rule-following advisor and several learned and heuristic players across many simulated games and different opponent styles. Our main finding is that the choice of reward, whether it rewards short-term gains or ultimately winning the game, decides which learning approach performs best, and that a win-oriented reward produces a policy that outperforms all baselines.",
    "published": "2026-08-16T17:29:04Z",
    "updated": "2026-08-16T17:29:04Z",
    "categories": [
      "cs.AI",
      "cs.GT",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.15868"
  },
  {
    "id": "2608.15867",
    "title": "Feasible and Novel Synthetic Population Generation with Tabular and Sequential Travel Attributes",
    "authors": [
      "Farbod Abbasi",
      "Zachary Patterson",
      "Bilal Farooq"
    ],
    "abstract": "Synthetic populations are critical inputs for activity-based travel demand models, yet generating realistic populations from limited survey data remains challenging. Small samples miss valid attribute combinations, known as sampling zeros, and generative models may also produce infeasible structural zeros. Moreover, realistic synthetic populations must capture both static socio-demographic attributes and sequential travel behaviour, such as trip chains. This paper proposes a regularized two-stage generative framework to address these challenges, where regularization refers to additional loss terms that guide the generator toward broader valid coverage and fewer infeasible samples. In Stage 1, a Wasserstein GAN with gradient penalty is augmented with three regularization terms, IGP, LDR, and CLAP, to improve feasibility, diversity, and novelty in tabular population synthesis. In Stage 2, Transformer and LSTM-Attention models generate sequential travel attributes, including departure time, trip purpose, and travel mode, conditioned on the synthesized tabular profiles. We also introduce novelty and count-aware metrics to evaluate whether valid unseen combinations are recovered and generated in realistic proportions. Results show that regularized models outperform the vanilla WGAN-GP across feasibility, diversity, and novelty. Regularization increases feasibility by 2.1 to 3.7 percentage points and novelty by 6.6 to 10.0 percentage points, improving sampling-zero recovery without sacrificing feasibility. The F1 score improves by 6.3 to 8.6 percentage points. For sequential attributes, LSTM-Attention best matches the trip-length distribution, while Transformer achieves higher overall sequential F1, 90.6\\% versus 89.1\\%. Cross-stage validation confirms strong consistency between generated mobility status and generated trip chains.",
    "published": "2026-08-16T17:27:50Z",
    "updated": "2026-08-16T17:27:50Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.15867"
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

