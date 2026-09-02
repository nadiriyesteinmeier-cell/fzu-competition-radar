window.PAPER_DATA_UPDATED_AT = "2026-09-02";
window.PAPER_ITEMS = [
  {
    "id": "2609.01607",
    "title": "Uncovering Understanding-Generation Synergy in Native Unified Multimodal Models: From Representation, Task to System",
    "authors": [
      "Penghao Wu",
      "Haiwen Diao",
      "Weichen Fan",
      "Lewei Lu",
      "Dahua Lin",
      "Ziwei Liu"
    ],
    "abstract": "While unified multimodal models (UMMs) jointly perform visual understanding and generation within a single model, functional unification does not guarantee learning synergy: the two objectives may reinforce each other, compete for capacity, or merely coexist. We investigate their relationship at the representation, task, and system levels in a controlled, structurally native setting without pretrained vision priors. At the representation level, we find that each objective provides useful signal to the other: generation enriches the visual features learned for understanding, while understanding strengthens vision--language alignment for generation. However, when both objectives are forced through the same computation path, one tends to dominate. A task-decoupled architecture that specializes conflicting visual computation while preserving semantic interaction avoids this asymmetric degradation. At the task level, through three case studies, we find positive bidirectional transfer when understanding and generation tasks rely on shared knowledge. At the system level, we show that an end-to-end UMM outperforms a matched planner--executor pipeline on complex tasks that explicitly require both image understanding and generation. Together, these results show that the value of UMMs extends beyond a unified interface: appropriate specialization, shared task knowledge, and end-to-end optimization can turn coexistence into synergy.",
    "published": "2026-09-01T17:59:59Z",
    "updated": "2026-09-01T17:59:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.01607"
  },
  {
    "id": "2609.01603",
    "title": "Efficient SWE Agent Benchmarking via Trajectory-Aware Evaluation",
    "authors": [
      "Kefeng Duan",
      "Dewu Zheng",
      "Yanlin Wang",
      "Xiwen Wang",
      "Ensheng Shi",
      "Xilin Liu",
      "Yuchi Ma",
      "Jiachi Chen",
      "Mingwei Liu",
      "Zibin Zheng"
    ],
    "abstract": "Evaluating software engineering agents on realistic benchmarks is costly, since each task may require multi-step code exploration, modification, and test execution. Existing efficient evaluation methods select representative subsets to estimate full-benchmark performance, but are largely result-only: they fit historical pass/fail response matrices or static task semantics, discarding how agents solve problems. We propose PTA-IRT, a Privileged Trajectory-Aware Item Response Theory framework that fuses process and outcome signals. Historical execution trajectories supply process-level evidence beyond pass/fail, such as explored context, attempted edits, and solving paths, which PTA-IRT uses as privileged information for calibration subset selection and ability estimation. Under low calibration budgets, PTA-IRT consistently outperforms prior IRT baselines on score and ranking recovery across four SWE benchmarks. Code and data are publicly available at https://github.com/DeepSoftwareAnalytics/PTA-IRT.",
    "published": "2026-09-01T17:59:46Z",
    "updated": "2026-09-01T17:59:46Z",
    "categories": [
      "cs.SE",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.01603"
  },
  {
    "id": "2609.01601",
    "title": "Adaptive Critical Token-Aware Retrieval for Repository-Level Code Generation",
    "authors": [
      "Kefeng Duan",
      "Dewu Zheng",
      "Yanlin Wang",
      "Terry Yue Zhuo",
      "Mingwei Liu",
      "Jianxing Yu",
      "Jiachi Chen",
      "Ensheng Shi",
      "Xilin Liu",
      "Yuchi Ma",
      "Zibin Zheng"
    ],
    "abstract": "The repository-level code generation task requires synthesizing code that satisfies task requirements while remaining consistent with the target repository context. Since real-world repositories often exceed the input length limits of LLMs, existing approaches commonly adopt retrieval-augmented generation (RAG) to provide repository-specific context. Despite improving repository-context retrieval, existing methods typically provide context as task-level support, without explicitly identifying the critical tokens that require fine-grained repository context during generation. During the autoregressive generation process of LLMs, errors often concentrate at a small number of decisive positions: once such tokens are generated incorrectly, subsequent code may follow an incorrect semantic path and eventually lead to functional failure. We refer to these positions as \"critical tokens\". In this paper, we propose ACToR, an adaptive critical token-aware retrieval framework for repository-level code generation. ACToR identifies critical tokens during generation and triggers targeted retrieval on demand to provide repository context at these decisive positions. In addition, we design a position-aware weighting method for dense retrievers to prioritize context that is more informative for generation. We evaluate ACToR on two representative repository-level benchmarks, RepoExec and CoderEval. Experimental results show that ACToR consistently outperforms state-of-the-art methods, achieving relative improvements of 8.4% on RepoExec and 15.4% on CoderEval. Beyond performance gains, we systematically quantify the impact of critical tokens, revealing their central role in major generation failures and highlighting the necessity of targeted retrieval strategies. We provide the code and data at https://github.com/DeepSoftwareAnalytics/ACToR.",
    "published": "2026-09-01T17:59:39Z",
    "updated": "2026-09-01T17:59:39Z",
    "categories": [
      "cs.SE",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.01601"
  },
  {
    "id": "2609.01600",
    "title": "CordisBench: Can Language Models Reason About Component Lifecycles in Dynamic Agent Harnesses?",
    "authors": [
      "Damien Sileo",
      "Dimitri Kachler"
    ],
    "abstract": "Dynamic agent harnesses let language models change the software that shapes their own execution. This flexibility brings a new reasoning burden: a local plugin change can propagate through dependencies and cleanup. We introduce CordisBench, a 1,200-question benchmark of this lifecycle reasoning. It combines a controlled formal setting with programs executed against Cordis, a runtime that manages component dependencies and cleanup, and asks models to identify affected components, predict state after a specified teardown order, determine which conditions hold under all or some orders, and choose reconfigurations that succeed when executed. Across these tasks, we evaluate three efficiency-oriented models at low reasoning effort with 2, 4, 8, 16, 24, or 32 relevant interactions, using deterministic task-specific scoring. Models usually handle small systems well but grow less reliable as more interactions become relevant, especially when predicting final state and when reasoning across teardown orders. Additional inference effort recovers marked gains for some models. The cost is nontrivial: on our 16-interaction subset, GPT-5.6 Luna uses nearly 3,000 reasoning tokens per question at medium effort. For these controlled instances, that cost is avoidable: an independent finite reference semantics agrees with Cordis execution on every observation and action outcome used for scoring across all 528 executable questions.",
    "published": "2026-09-01T17:59:13Z",
    "updated": "2026-09-01T17:59:13Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.01600"
  },
  {
    "id": "2609.01598",
    "title": "UI-VISA: U-Net Initialized Vascular Image Segmentation Architecture",
    "authors": [
      "Asees Kaur",
      "Suzanne S. Sindi",
      "Erica M. Rutter"
    ],
    "abstract": "Accurate segmentation of vascular structures in digital subtraction angiography (DSA) images remains challenging due to the thin, elongated, and branching nature of blood vessels. Pixel-wise deep learning approaches such as U-Net achieve strong general-purpose segmentation performance but often produce fragmented or discontinuous predictions in fine vascular regions, since they do not explicitly enforce structural connectivity. Region growing algorithms preserve spatial context and topological continuity, but are highly sensitive to seed point initialization and can be computationally expensive. We propose UI-VISA (U-Net Initialized Vascular Image Segmentation Architecture), a hybrid pipeline that combines the complementary strengths of both approaches. UI-VISA uses U-Net's foreground predictions as informed seed points for a CNN-guided region growing algorithm, which then iteratively refines the segmentation by enforcing local connectivity and recovering fine vessel details that U-Net alone tends to miss or over-predict. We evaluate UI-VISA against standalone U-Net and a prior region-growing-based method (VISA) using 5-fold cross-validation on 26 DSA images. UI-VISA achieves the highest mean Dice and clDice scores across folds, and a paired Wilcoxon signed-rank test shows the improvement in clDice is statistically significant ($p=0.023$), consistent with the method's design goal of preserving vascular connectivity, while the improvement in Dice does not reach significance ($p=0.104$).",
    "published": "2026-09-01T17:58:54Z",
    "updated": "2026-09-01T17:58:54Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.01598"
  },
  {
    "id": "2609.01597",
    "title": "The Rise of Verbal Reinforcement Learning",
    "authors": [
      "Kshitij Tayal",
      "Arun Sharma",
      "Genta Indra Winata",
      "Anirban Das",
      "Sambit Sahu"
    ],
    "abstract": "Natural language is emerging as a primary feedback channel for improving language agents, capable of conveying intent, preferences, and causal structure in forms interpretable by both humans and modern language models. We call this paradigm Verbal Reinforcement Learning (VRL) and offer the first unified account of it. We organize the field around a single axis, \\textit{when} verbal feedback takes effect in an agent's lifecycle and \\textit{what} it modifies, yielding three pillars: (1) \\textbf{Language as Grounding Signal}, where language defines the task itself by specifying goals, states, and reward structures; (2) \\textbf{Language as Deliberative Feedback}, where natural language guides reasoning at test time without the need to update model parameters; (3) \\textbf{Language as Learning Signal}, where language-based feedback shapes model parameters through training. Within each pillar, we synthesize representative work, distinguish key subcategories of approaches, and outline the distinct role language plays in shaping agent behavior. Together, this taxonomy shows how verbal reinforcement is reshaping agent development, while also defining the challenges and opportunities for building more capable and aligned agents.",
    "published": "2026-09-01T17:58:18Z",
    "updated": "2026-09-01T17:58:18Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.01597"
  },
  {
    "id": "2609.01595",
    "title": "Mechanism Design for Alignment and Control",
    "authors": [
      "Dirk Bergemann",
      "Andrew Koh",
      "Stephen Morris"
    ],
    "abstract": "We develop a framework for mechanism design with AI agents whose alignment (preferences) and capabilities (feasible actions and information) are unknown. We want such agents to act on our behalf so mechanisms must incentivize both honesty and obedience. A one-sided imitation structure---capabilities can be concealed but not counterfeited---yields a revelation principle, a characterization of implementable policies via nested cyclical monotonicity, and conditions under which eliciting higher-order beliefs can discipline multiple agents. We apply our framework to stylized examples of (i) sandbagging in which a more capable agent pretends to be less capable; (ii) an alignment--interpretability trade-off, where the two are substitutes in the instrument but complements in value; (iii) discipline via peer scoring; (iv) coupling rewards to induce competition among multiple agents; and (v) scalable oversight and reward shaping.",
    "published": "2026-09-01T17:57:50Z",
    "updated": "2026-09-01T17:57:50Z",
    "categories": [
      "econ.TH",
      "cs.AI",
      "cs.GT"
    ],
    "url": "https://arxiv.org/abs/2609.01595"
  },
  {
    "id": "2609.01588",
    "title": "Designing Proactive Thought Partners for Writing",
    "authors": [
      "Chao Zhang",
      "Abe Davis",
      "Chih-Wei Chen",
      "Chin-Chia Hsu"
    ],
    "abstract": "Writing involves diverse cognitive activities, from ideation to revision, and writers' needs vary across individuals and moments. Proactive AI promises to provide the right support at the right time, yet existing proactive tools largely focus on generic textual assistance, such as autocomplete. This paper studies the design space of proactive thought partners: AI agents that proactively offer customizable, higher-level cognitive support during writing. We instantiated this concept in a technology probe and deployed it with 16 participants for one week. The probe allows users to create partners by configuring their roles and proactivity. As users write, relevant partners take the initiative at appropriate moments to offer suggestions. Our findings show that participants configured proactive support through prospective planning, used suggestions for both idea generation and self-monitoring, and valued lightweight visual representations alongside non-directive rhetorical framing for non-intrusive interventions. We derive implications for designing proactive writing assistants around customization, timing, engagement, and representation.",
    "published": "2026-09-01T17:54:32Z",
    "updated": "2026-09-01T17:54:32Z",
    "categories": [
      "cs.HC",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.01588"
  },
  {
    "id": "2609.01584",
    "title": "A Benchmark for Vehicle Attribute Classification in Cross-Domain Surveillance Scenarios",
    "authors": [
      "Sergio M. Silva",
      "Otavio T. Remer",
      "Gabriel E. Lima",
      "Lucas Wojcik",
      "Rayson Laroca",
      "David Menotti"
    ],
    "abstract": "Vehicle attribute analysis is a key component of Intelligent Transportation Systems (ITS), supporting applications such as vehicle identification, traffic monitoring, and forensic investigation. However, models trained under controlled conditions often degrade in real surveillance scenarios due to changes in viewpoint, occlusion, illumination, and sensor characteristics. This paper introduces Unconstrained Vehicle Identification Benchmark (UVIB), a benchmark for evaluating three operational vehicle-analysis tasks: front/rear orientation, occlusion-related suitability for Vehicle Make and Model Recognition (VMMR), and color clarity. The benchmark contains 84,835 vehicle images from seven public Brazilian datasets, grouped into surveillance and general acquisition domains, with unified binary annotations that were not jointly available in the original sources. Four representative architectures, EfficientNetV2-S, ResNet-50, ViT/B-16, and YOLO11s-cls, are evaluated under mixed-domain, cross-domain, and cross-dataset protocols. The results show that domain shift has a stronger impact than architecture choice, with substantial degradation in cross-domain settings, especially for VMMR suitability and color clarity. While orientation generalizes more reliably, VMMR suitability remains affected by class imbalance and ambiguous occlusions, and color clarity is highly sensitive to illumination and sensor modality. These findings highlight the need for benchmarks and evaluation protocols that explicitly measure operational robustness beyond standard in-domain accuracy. The proposed benchmark is publicly available at https://github.com/UFPR-IPASP-PR/uvib-vehicle-attributes/.",
    "published": "2026-09-01T17:48:10Z",
    "updated": "2026-09-01T17:48:10Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.01584"
  },
  {
    "id": "2609.01582",
    "title": "SpatialGuard: Harness-Guided Verifiable Spatial Reasoning for Text-to-Image Generation",
    "authors": [
      "Ziyun Qian",
      "Zizhi Chen",
      "Yizhou Liu",
      "Mingyang Sun",
      "Dingkang Yang",
      "Lihua Zhang"
    ],
    "abstract": "Complex 3D spatial text to image generation requires models to convert natural language into stable visual geometry, not merely semantic appearance. Existing prompt-driven or layout-conditioned methods improve controllability, but often lack an optimizable and verifiable spatial intermediary before visual sampling. As a result, object relations, occlusion, visibility, and camera constraints can decay during multi-round generation. This paper presents SpatialGuard, a structured layout-guided framework for complex 3D spatial text-to-image generation. SpatialGuard parses prompts into image synthesis-oriented 3D layouts through a Spatial Layout Architect, realizes them as visual conditions and candidate images through a Visual Realizer, and uses a Visual Alignment Critic to validate consistency among prompt, layout, and image. To keep constraints stable across iterations, SpatialGuard introduces a Layout Harness that organizes rule constraints, tool invocation, shared knowledge, and feedback loops around the editable layout state. This design turns complex spatial generation from implicit prompt following into a verifiable process of planning, realization, validation, and repair. Comprehensive experiments show that SpatialGuard achieves state-of-the-art performance in complex 3D spatial layout generation and improves spatial faithfulness over existing text-to-image and layout control baselines.",
    "published": "2026-09-01T17:47:00Z",
    "updated": "2026-09-01T17:47:00Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.01582"
  },
  {
    "id": "2609.01573",
    "title": "Scaling Near-Optimal SFT-RL Annotation Budget Allocation from Small to Large LLMs",
    "authors": [
      "Jingtan Wang",
      "Arun Verma",
      "Xiaoqiang Lin",
      "Zhengyuan Liu",
      "Nancy F. Chen",
      "Daniela Rus",
      "Bryan Kian Hsiang Low"
    ],
    "abstract": "How to divide a fixed annotation budget between supervised fine-tuning (SFT) and reinforcement learning (RL) during LLM post-training remains an open problem. Existing work characterizes only broad trends (e.g., SFT dominates in low-data regimes), lacks a principled allocation framework, and does not examine whether the optimal ratio transfers across model sizes. We frame this problem in terms of near-optimality: rather than seeking a single optimal SFT-RL ratio, we characterize the near-optimal region, the set of allocations within a specified tolerance of peak performance. Empirically, this region is wide even for small tolerances (2-10%), widens with model scale, and transfers reliably from small proxy models to large target models. This yields a practical strategy: small proxy-model experiments suffice to identify a transferable near-optimal region, eliminating the need for exhaustive large-scale search. Our results hold consistently across tasks, model families, and both preference-based off-policy and reward-supervision on-policy RL methods. We further analyze how the asymmetry in annotation costs between SFT and RL data shifts the near-optimal region.",
    "published": "2026-09-01T17:39:55Z",
    "updated": "2026-09-01T17:39:55Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.01573"
  },
  {
    "id": "2609.01569",
    "title": "Evaluating Usability in Biomedical Visualization: Rethinking Heuristic Evaluation for Spatial Omics and Multidisciplinary Research Platforms",
    "authors": [
      "Yulia A. Levites Strekalova",
      "Rachel Liu Galvin",
      "Jessica M. Ray",
      "Samuel P. Border",
      "Mishal Khan",
      "Samantha Hoffman",
      "Christina D. Beharry",
      "Katie Kloss",
      "Philipp Haessner",
      "David Manthey",
      "Sanjay Jain",
      "Michael T. Eadon",
      "Laura Barisoni",
      "Pinaki Sarder"
    ],
    "abstract": "Introduction: Clinical research informatics (CRI) platforms support biomedical discovery by integrating advanced computational tools into research workflows. Emerging technologies such as spatial omics and AI-enabled imaging expand research capabilities but introduce complex interfaces that increase cognitive burden and alter established analytical processes. Traditional usability frameworks identify general usability issues but often miss challenges specific to high-dimensional biomedical data. Methods: We conducted two complementary studies involving 39 participants to evaluate conventional usability heuristics and identify CRI-specific criteria. Study 1 included 19 undergraduates completing interactive tasks, and Study 2 involved 20 clinical professionals completing an asynchronous hierarchical task framework. Observational and interview data were analyzed using deductive coding based on standard usability heuristics and emerging CRI-specific themes. Results: Simultaneous presentation of complex data overlays and analytical tools overwhelmed users, particularly those with limited spatial-omics experience. Participants relied on trial-and-error exploration and struggled with unlabeled tools in data-rich environments. Feedback indicated that users benefit from phased onboarding, contextual guidance, and progressive feature introduction rather than immediate access to all functionality. Discussion: High-dimensional research platforms require domain-specific usability criteria beyond traditional frameworks. We propose three specialized heuristics: Active Parameter Transparency, Point-of-Use Guidance, and Phased Feature Disclosure. These heuristics help developers manage complexity, provide contextual support, and improve accessibility for multidisciplinary research teams.",
    "published": "2026-09-01T17:36:29Z",
    "updated": "2026-09-01T17:36:29Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.01569"
  },
  {
    "id": "2609.00500",
    "title": "UniScale: Exploring Unimanual Gesture Mapping Strategies for Gaze+Pinch-based Scaling Interaction",
    "authors": [
      "Kyoungwhan Mheen",
      "Jinwook Kim",
      "Sang Ho Yoon"
    ],
    "abstract": "Object scaling serves as a fundamental spatial manipulation that enables complex and productive tasks in XR environments. This paper investigates unimanual scaling techniques for XR using gaze and hand interactions. We propose UniScale, a set of unimanual alternatives to the standard bimanual pinch, allowing users to scale objects while preserving hand availability for concurrent spatial manipulations. We design five distinct mapping strategies based on physical metaphors, exploring unimanual control that varies depth, angle, micro-gestures, and finger-distance input. We then compare these techniques against a standard bimanual baseline, in which users adjust the inter-hand distance via a bimanual pinch gesture. In a user study, we evaluate their effectiveness in a 3D object scaling task under both clutching and clutching-free conditions. The results indicate that while bimanual scaling relies on clutching for stable control, unimanual techniques excel in clutching-free conditions, significantly reducing physical hand movement. From the results, we derive valuable design implications for developing efficient 3D multimodal interactions in XR.",
    "published": "2026-09-01T00:00:40Z",
    "updated": "2026-09-01T00:00:40Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.00500"
  },
  {
    "id": "2609.00498",
    "title": "Validity-Aware Jailbreak Evaluation for Large Language Models",
    "authors": [
      "Qilong Wu",
      "Sahil Wadhwa",
      "Pranab Mohanty",
      "Giri Iyengar",
      "Varun Chandrasekaran"
    ],
    "abstract": "Jailbreak robustness has become central to large language model (LLM) safety evaluation, yet prevailing methodologies rely primarily on refusal behavior, semantic resemblance, and intent-matching heuristics that emphasize linguistic plausibility rather than correctness. We identify a key limitation in existing evaluations: many jailbreak intents depend on instructional validity rather than epistemic factuality, allowing realistic-looking responses to be labeled successful despite being factually or procedurally incorrect. To address this gap, we propose Sequential Epistemic and Action-Level Validation (SEAV), a verification-centric jailbreak evaluation framework that decomposes responses into ordered steps and evaluates both validity and correctness. SEAV combines LLM-as-a-judge mechanisms for semantic interpretation with retrieval-grounded verification using external knowledge sources, assessing whether generated content is factually correct, structurally consistent, and operationally capable of advancing harmful objectives. Empirically, SEAV cuts the false-positive rate on SD-A (a curated strategic-dishonesty diagnostic) by 14.9\\,pp vs. the strongest baseline, and reclassifies 22.1\\%--51.0\\% of sampled prior-labeled successes as invalid across three of four public benchmarks. Together, these results show that enforcing correctness substantially reshapes measured robustness: many previously labeled jailbreak successes are reclassified as invalid, and results are stable across the tested search backends and evaluator models. Code and data are available at https://github.com/Ardor-Wu/SEAV.",
    "published": "2026-08-31T23:57:53Z",
    "updated": "2026-08-31T23:57:53Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.00498"
  },
  {
    "id": "2609.00495",
    "title": "Beyond Token Positions: Safety Alignment Across Denoising Steps in Diffusion Language Models",
    "authors": [
      "Guoli Wang",
      "Haonan Shi",
      "Tu Ouyang",
      "An Wang"
    ],
    "abstract": "Diffusion large language models (dLLMs) generate text through iterative denoising rather than left-to-right decoding. This generation paradigm introduces two axes that can influence safety alignment: when tokens are generated during denoising and where they appear in the response. In this paper, we measure dLLM safety behavior under harmful prompts by tracing intermediate token distributions and commitment decisions throughout denoising. Our analysis shows that refusal signals are concentrated in early denoising steps and leading response positions, and the tokens committed early can strongly shape the final safety outcome. Our measurements further show that the denoising step and persistence of refusal-token commitment are important for understanding dLLM safety. Based on these findings, we propose Refusal-Aware Early Commitment (RAEC), a simple training-free decoding method that commits persistent refusal signals from early steps. Experiments on LLaDA and Dream show that RAEC reduces attack success rates while largely preserving utility. The code is available at https://github.com/Glresearch1/RAEC.",
    "published": "2026-08-31T23:50:31Z",
    "updated": "2026-08-31T23:50:31Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.00495"
  },
  {
    "id": "2609.00492",
    "title": "The Privacy-Hallucination Tradeoff in Differentially Private Language Models",
    "authors": [
      "Krithika Ramesh",
      "Krishna Pillutla",
      "Danish Pruthi",
      "Anjalie Field"
    ],
    "abstract": "Both privacy and factual accuracy are paramount in high-stakes domains like healthcare. Concerningly, we uncover and investigate a privacy-hallucination tradeoff in differentially private (DP) language models. First, we empirically show that models pre-trained or fine-tuned with DP tend to produce more hallucinations than non-DP counterparts, with increased severity as the privacy budget grows stricter. Second, we investigate model properties driving this tradeoff, demonstrating that DP mechanisms flatten output distributions, potentially redistributing probability mass toward factually incorrect alternatives. Third, through experiments where we control fact frequency in training data, we characterize how information frequency can reduce hallucination risks in DP models. Overall, our findings underscore the need for more nuanced privacy-preserving interventions that offer rigorous privacy guarantees without compromising factual accuracy.",
    "published": "2026-08-31T23:39:03Z",
    "updated": "2026-08-31T23:39:03Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.00492"
  },
  {
    "id": "2609.00491",
    "title": "MemeBridge: A Dataset for Benchmarking and Mitigating the Bidirectional Cultural Gap in Meme Interpretation",
    "authors": [
      "Hangxiao Zhu",
      "Suliu Qin",
      "Zhuoyan Li",
      "Ming Jiang",
      "Yu Zhang",
      "Meng Xia"
    ],
    "abstract": "Communicating across cultures is inherently challenging, especially through culturally dense and ambiguous formats like memes. While people expect large language models (LLMs) to hold promise for bridging such gaps, existing benchmark datasets often fail to capture the cultural context necessary for accurate interpretation. To address this, we introduce MemeBridge, a curated dataset centered on U.S.-originated memes, designed to capture two complementary perspectives: (1) how Chinese participants interpret these memes, and (2) how U.S. participants anticipate how people from other cultures might misunderstand them. Here, context refers to implicit cultural knowledge, including background beliefs, norms, and shared assumptions that shape meme comprehension. The dataset was constructed via a multi-stage crowdsourcing pipeline with rigorous validation, including human agreement checks and GPT-based classification verification. Each meme is annotated with sentiment, emotion, cultural significance, and knowledge type, providing rich supervision for downstream tasks. Notably, we observe that the anticipated misunderstandings from U.S. participants are often inaccurate, highlighting the asymmetries in cultural understanding and the challenges of adopting perspectives beyond one's own. This bidirectional framing, which focuses on both expression and perception, enables more nuanced benchmarking of cross-cultural comprehension. Our probing of multiple LLMs reveals that while models developed in different cultural contexts exhibit partial cross-cultural understanding, they often struggle with sophisticated interpretations. By contrast, fine-tuning with MemeBridge improves model performance, underscoring the value of culturally grounded resources for training and evaluating LLMs in globally diverse settings.",
    "published": "2026-08-31T23:38:23Z",
    "updated": "2026-08-31T23:38:23Z",
    "categories": [
      "cs.CL",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.00491"
  },
  {
    "id": "2609.00487",
    "title": "EvoFlint: An Evolutionary Atlas of Multi-Turn LLM Vulnerabilities",
    "authors": [
      "Feitong Qiao",
      "Liren Peng",
      "Shiming Ren",
      "Aishwarya Jadhav",
      "Arghavan Bahadorinejad",
      "Marinette Chen",
      "Muhan Zhang",
      "Abdulaziz Suria",
      "Gennevi Lu",
      "Anish Das Sarma"
    ],
    "abstract": "Frontier language models that refuse harmful single-turn prompts often comply when the same intent is reached gradually over many turns, making multi-turn attacks one of the least understood failure modes of large language models. Most automated red-teaming methods treat this as a generation problem: produce attacks that break the model. We argue it is better framed as a search problem: discover, organize, and iteratively refine a diverse archive of attack strategies, producing a structured map of how a target model fails rather than a list of one-off successes. We introduce EvoFlint, which applies evolutionary quality-diversity search to multi-turn red-teaming. Attack strategies are phased conversation plans, not raw prompts, and are evolved through LLM-driven mutation and crossover. A Pareto fitness over attack success rate and peak severity preserves selection signal from near-miss attacks. A risk-indexed archive runs novelty search with local competition over strategy description embeddings inside each cell, maintaining diversity without committing to a predefined style taxonomy. A generation-level memory accumulates target-model insights across the population and feeds them back into strategy generation. On the HarmBench-test split, EvoFlint reaches attack success rates of 35.8% on Claude Sonnet 4.6, 59.7% on GPT-5.4, and 94.3% on Qwen3-32B, alongside 98.7% on the older GPT-4o included as a baseline reference. The resulting archive, organized by risk category, exposes for each target which categories of harm its safety training has and has not covered.",
    "published": "2026-08-31T23:33:33Z",
    "updated": "2026-08-31T23:33:33Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.CR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.00487"
  },
  {
    "id": "2609.00480",
    "title": "Design principles to Increase Technology Self-efficacy for Older Australians with Mild Cognitive Impairment (MCI) and Older Carers",
    "authors": [
      "Snezna Bizilj Schmidt",
      "Nathan D'Cunha",
      "Stephen Isbel",
      "Blooma John",
      "Ram Subramanian"
    ],
    "abstract": "The number of people with age related physical or cognitive impairments is increasing due to the worlds ageing population. Technology has the potential to support independent living, and to achieve aged and health service efficiencies, however, there are gaps in our understanding of factors that motivate technology adoption and ongoing use by older adults, especially those with cognitive impairments. This study aims to explore motivators and enablers for technology adoption and ongoing use by older Australians with mild cognitive impairment (MCI) and their carers, to identify technology design principles and guidelines that maximise adoption. Semi structured interviews were used to gather data about individual demographics, needs, priorities, lifestyle, challenges, and experiences with technology. Results of inductive, reflective, thematic analysis indicate that a desire for independence, autonomy and quality of life motivate use of technology, and perceived technology self-efficacy and IT literacy are enablers. The Protection Motivation Theory illustrates that constant technology change is a disabler for technology adoption and sustained use, because it lowers perceived technology self-efficacy and IT literacy, and reduces confidence to use technology. Two high-level technology design principles and related guidelines are proposed, grounded in theory and aligned with Banduras four sources of self-efficacy. These design principles and guidelines are intended to increase feelings of self-efficacy and confident use of technology, while also reducing adverse impacts of technological change and encouraging sustained technology adoption by older adults with MCI to support independent living and quality of life.",
    "published": "2026-08-31T23:28:40Z",
    "updated": "2026-08-31T23:28:40Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.00480"
  },
  {
    "id": "2609.00479",
    "title": "EGT-KG: Evidence-Grounded Typed KG Retrieval for Practical Scientific QA with Small Language Models",
    "authors": [
      "Muran Yu",
      "Jiechao Gao",
      "Yuandong Pan",
      "Barney H. Miao",
      "Andrew C. Lesh",
      "Kincho H. Law",
      "Jie Wang",
      "Michael D. Lepech"
    ],
    "abstract": "For emerging scientific research domains, local Small Language Models (SLMs) are becoming more attractive, as they offer stronger privacy control and more stable deployment pipelines than Large Language Models. However, in practice, scientific question-answering on SLMs often operates under inevitable constraints: small literature collections, fragmented evidence, limited context window and reasoning abilities. We propose the Evidence-Grounded Typed Knowledge Graph (EGT-KG), a retrieval framework to improve information retrieval with local SLMs. We assessed three question-answering settings: a vanilla Retrieval-Augmented Generation (RAG) workflow and two EGT-KG workflows: an automatically generated relation schema (AS) and an expert-defined relation schema (ES). Our experiments were evaluated with a six-dimensional evaluation framework (S3CRF: Soundness, Correctness, Completeness, Conciseness, Relevance, Fluency) on a Biopolymer-bound Soil Composite literature benchmark, showing that EGT-KG outperforms the vanilla RAG method in most settings, with the best improvement from llama3:8b: a Final Score of 70.37 (+14.67%) and 68.82 (+12.14%) by AS/ES EGT-KG variants.",
    "published": "2026-08-31T23:27:57Z",
    "updated": "2026-08-31T23:27:57Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.00479"
  },
  {
    "id": "2609.00476",
    "title": "Less Is More: Balancing Positive and Negative Space in Visual Concept Blending",
    "authors": [
      "Shishi Xiao",
      "Adam J. Coscia",
      "David H. Laidlaw"
    ],
    "abstract": "Graphic designers often blend visual concepts to communicate multiple ideas within a single image, leveraging positive and negative space to create balance, emphasis, and aesthetic appeal. While computational methods have begun to support automatic concept blending, they largely overlook the role of spatial composition in the design. To address this gap, we present an automatic pipeline that explicitly applies positive and negative space throughout the blending process. Our approach first identifies plausible regions for concept integration by combining semantic reasoning from vision-language models with geometric constraints derived from real-world examples. Conditioned on these regions, the system generates blended compositions using a hybrid pixel-vector pipeline: diffusion-based inpainting produces a fast, coarse initialization, which is then refined through vector-based optimization at the point level to ensure structural coherence and balanced semantic expression. A multimodal agent orchestrates this process as a planner and evaluator, enabling iterative improvement and interpretable control. Through an evaluation using both baseline comparisons and a user study, we demonstrate greater expressiveness, creativity, and concept recognizability by effectively leveraging positive and negative space. We further demonstrate the generalizability of our approach across diverse applications, including controllable image and infographic generation.",
    "published": "2026-08-31T23:25:28Z",
    "updated": "2026-08-31T23:25:28Z",
    "categories": [
      "cs.CV",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.00476"
  },
  {
    "id": "2609.00474",
    "title": "Exploring Collaboration between a language and a non-language agent",
    "authors": [
      "Harini S",
      "Somesh Singh",
      "Yaman K Singla",
      "Rajiv Ratn Shah",
      "David Doermann",
      "Balaji Krishnamurthy"
    ],
    "abstract": "LLMs are increasingly deployed as orchestrators that coordinate specialized subagents to solve complex tasks through natural language. However, in many important domains like game playing and robotics, the strongest available agents are not language models. Integrating non-language agents with LLMs would require \\emph{verbalization}: compressing their rich continuous representations into sparse textual summaries at each interaction step. To study whether verbalization constitutes a bottleneck, we introduce \\textsc{LLAMIA-Bench}, a suite of six diverse collaborative chess tasks spanning three facets: behavioral imitation, state assessment, and natural-language explanation. Each task instantiates a well-established chess problem that neither the LLM nor the chess engine can solve alone. To solve LLM collaboration with non-language agents, we introduce \\emph{latent state internalization}, which projects the subagent's continuous representations directly into the LLM's token stream as learned state tokens, with dynamic re-encoding as actions advance the environment state. Comparing internalization to verbalized integration, our experiments reveal a consistent \\emph{verbalization debt}: the performance gap widens throughout training and persists as the LLM scales from 4B to 14B parameters. A single 14B model, \\textsc{LLAMIA}, trained with latent state internalization, matches or exceeds task specialists and frontier models including GPT-5.1 with tool access across all benchmark tasks, and generalizes out-of-distribution where task-specific finetunes collapse",
    "published": "2026-08-31T23:25:10Z",
    "updated": "2026-08-31T23:25:10Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.00474"
  },
  {
    "id": "2609.00473",
    "title": "Expert-like Bone Ultrasound Segmentation through Expert-in-the-loop Mask-conditioned Progressive Learning",
    "authors": [
      "Arash Tavangar",
      "Larissa K. Chiu",
      "Hamidreza Khodashenas",
      "Gregory K. Berry",
      "Amir Hooshiar"
    ],
    "abstract": "Manual annotation remains a major bottleneck in ultrasound (US) bone segmentation, where experts typically iteratively refine rough brush masks rather than delineating precise contours in a single pass. We present ExiL, a mask-conditioned progressive learning framework that models annotation as a structured refinement trajectory. ExiL combines a synthetic expert-like brush simulator based on signed distance fields with a lightweight 7.8M-parameter U-Net that learns to complete and refine imperfect masks from US images. During deployment, an expert mode updates the model directly from accepted refinements, enabling continual adaptation to expert behavior. Evaluated using UltraBones100k cadaver data for quantitative segmentation and a prospective volunteer dataset for annotation-efficiency analysis, ExiL reduced single-expert average annotation time from 60 to 20 seconds per frame (66.7\\%) and improved mean Dice by approximately 0.045 over non-progressive training, while achieving 0.87 Dice and 2.7 px boundary error in the best trajectory-aware setting. With 10--50 ms inference, ExiL enables real-time, self-improving annotation for US-guided orthopedic workflows in practical clinical labeling.",
    "published": "2026-08-31T23:24:42Z",
    "updated": "2026-08-31T23:24:42Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.00473"
  },
  {
    "id": "2609.00472",
    "title": "Higher Structures in Deep Learning",
    "authors": [
      "Michael L. Roberts",
      "Carlos Zapata Carratalá. Nicholas J. Cooper",
      "Lijun Chen",
      "François G. Meyer",
      "Danna Gurari"
    ],
    "abstract": "We provide an expository introduction on the importance of higher-arity tensor operations to deep learning. Then, we conduct a novel empirical investigation of higher-arity phenomenon in trained neural networks, introduce a hypergraphical generalization of the multilayer perceptron, and explore connections to evolutionary algorithms. We conclude with a discussion of promising directions for future research.",
    "published": "2026-08-31T23:22:30Z",
    "updated": "2026-08-31T23:22:30Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.00472"
  },
  {
    "id": "2608.30260",
    "title": "Using Prosody to Predict Syntactic Structure",
    "authors": [
      "Junghyun Min",
      "Alex Warstadt",
      "Tamar I. Regev",
      "Tiago Pimentel",
      "Ethan Gotlieb Wilcox"
    ],
    "abstract": "While it is well-established that prosody carries crucial cues for syntactic structure, the degree and nature of correspondence between these two domains remains contested. We investigate the syntax-prosody interface through an information-theoretic lens, quantifying the interaction between prosodic features and syntactic representations as their mutual information. We provide a general-purpose framework for estimating this quantity over large speech-text corpora using multimodal language models. Our framework is structure-agnostic and modular, insofar as it can be used to measure the contributions of individual prosodic features or components of structure. We evaluate the syntax-prosody relationship for two features (word duration and inter-word pauses) across two domains--read audiobooks and spontaneous conversations--both in English. Our results demonstrate that prosody contains measurable syntactic information, with prosodic features reducing syntactic uncertainty in spontaneous conversations by up to 10.2%. Our findings offer new empirical support for several theoretical accounts of the syntax-prosody interface.",
    "published": "2026-08-31T05:09:36Z",
    "updated": "2026-08-31T05:09:36Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.30260"
  },
  {
    "id": "2608.30258",
    "title": "Stratified Consistency Distillation for Natural Language Formalization",
    "authors": [
      "Zhichao Hou",
      "Ferhat Erata",
      "Joe Lilien",
      "MohamadAli Torkamani"
    ],
    "abstract": "Neurosymbolic reasoning has shown promising success in addressing complex reasoning tasks by combining large language models (LLMs) and symbolic solvers. While this approach shows promise, a fundamental challenge remains: improving the accuracy of translations from natural language to logical formulas. Current methods predominantly rely on prompt engineering, which is difficult to scale across different domains and input formats. Drawing inspiration from the success of fine-tuning in other model adaptation and alignment applications, we propose a fine-tuning-based Stratified Consistency Distillation approach: (1) We generate K logical translations per input using a frontier LLM and cluster them by semantic equivalence (2) Based on the entropy level, we apply majority voting (low entropy), LLM-as-a-Judge (medium entropy), or unification/abstention (high entropy), and (3) fine-tune a smaller model using the selected pseudo-labels. Our experiments show significant and consistent improvements in both Pass@K and our novel Equivalent Logical Similarity metrics, demonstrating the potential of advancing logical translation through consistency distillation.",
    "published": "2026-08-31T05:08:08Z",
    "updated": "2026-08-31T05:08:08Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.30258"
  },
  {
    "id": "2608.30256",
    "title": "Beyond Surface Forms: Symbolic Edits as a Test for Logical Reasoning with LLMs",
    "authors": [
      "Ramya Keerthy Thatikonda",
      "Wray Buntine",
      "Ehsan Shareghi"
    ],
    "abstract": "Logical reasoning with large language models (LLMs) is a critical capability, as it reflects a system's ability to correctly deduce hypotheses from a given context using faithful deductive processes. However, LLM reasoning has often been shown to be sensitive to small surface-level variations in problem formulation, raising questions about whether models truly follow the underlying logical structure. Studying this behavior is challenging because the symbolic components of logical problems, such as operators and predicates, are difficult to systematically manipulate in natural language. We introduce a tool-driven framework for generating controlled, label-preserving edits to logical reasoning problems. Our method operates on symbolic representations of first-order logic and constraint satisfaction problem tasks, enabling targeted modifications to logical operators and other structural components before translating them back into natural language. Using this framework, we evaluate various LLMs under cumulative and individual operator edits and analyze their behavior in response to these changes. Our quantitative and qualitative analyses show that LLM reasoning behavior under controlled operator edits is inconsistent, regardless of model size or family: models sometimes adapt correctly to structural changes but often fail to track their logical consequences. The results from this automated stress test enable an evaluation of language models across different dimensions and help measure the reliability of their reasoning.",
    "published": "2026-08-31T05:06:01Z",
    "updated": "2026-08-31T05:06:01Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.30256"
  },
  {
    "id": "2608.30250",
    "title": "Generating Workflow DAGs from Natural Language with Non-Reasoning LLMs",
    "authors": [
      "Anand Iyer",
      "Bhanu Khetharpal",
      "Srinivas Upadhya",
      "Ramkumar Rajagopal"
    ],
    "abstract": "This paper addresses the problem of translating natural-language routing rules written by business administrators into executable workflow graphs for enterprise contact centers. Each target is a directed acyclic graph (DAG) of conditional actions with parallel branches, hit-first fallback chains, and per-branch Boolean predicates, encoded in the JSON dialect of a commercial routing platform. We show that neuro-symbolic decomposition enables lower-cost, non-reasoning large language models to generate complex workflow DAGs at production-relevant quality without expensive extended-reasoning models. Our central diagnostic is an emission-density bottleneck: on a 635-rule benchmark of manufactured synthetic data, models select the correct graph nodes with high accuracy but increasingly misconfigure attributes and Boolean grouping as the number of interdependent nodes emitted in one pass grows. We therefore move combinatorial graph construction from the model into a deterministic compiler driven by a compact intermediate representation, with a learned registry-selection front end that focuses generation on relevant vocabulary. Across four models, the full system reaches approximately 89% LLM-judge validity, approximately 90% exact-match condition accuracy, and 99-100% valid JSON while using roughly half the per-rule prompt tokens of a monolithic prompt. On GPT-5.3-chat, the method improves judge validity by 24 percentage points and achieves statistical equivalence to a reasoning model's out-of-the-box quality, although an approximately 8-point frontier gap remains. We also present a deployment path and transferable lessons for structured-generation applications.",
    "published": "2026-08-31T05:01:29Z",
    "updated": "2026-08-31T05:01:29Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.30250"
  },
  {
    "id": "2608.30247",
    "title": "OPUS: A Simple yet Effective Unified Framework for Open-Vocabulary Detection",
    "authors": [
      "Xiaoyan Wei",
      "Zhimin Yao",
      "Ruilin Yang",
      "Wei Zhang",
      "Yong Dai",
      "Yi Zhang",
      "Wei Ge"
    ],
    "abstract": "Recent unified open-vocabulary detection (OVD) supports heterogeneous prompts, including text queries, visual exemplars, and their combinations, but often rely on increasingly complex designs such as heavy cross-modal fusion, staged training, and iterative annotation pipelines. We revisit whether such complexity is necessary in the era of stronger foundation models. Our finding is that unified OVD can be made substantially simpler with semantic-rich visual representations and scalable grounding supervision. We present OPUS (\\textbf{O}pen-vocabulary, \\textbf{P}rompt-\\textbf{U}nified, \\textbf{S}imple), a unified detector supporting text, interactive visual, generic visual, and mixed prompting within one framework. OPUS adopts a simple three-part design. Its model architecture combines a semantic-rich visual encoder, built on a DINOv3-ConvNeXt-B backbone with efficient hybrid encoding, with a prompt-aware decoder that avoids prompt-specific branches for unified prompt reasoning. OPUS is trained with a one-stage text-visual training strategy with Instance-level Contrastive Alignment (ICA), and is supported by a SAM3-based single-pass data engine for heterogeneous grounding supervision. Experiments on COCO, LVIS-minival, and ODinW35 show that OPUS achieves state-of-the-art Visual-I performance, reaching 68.1/69.2/54.7 AP, while maintaining balanced Text and Visual-G accuracy. OPUS also turns mixed prompting from interference into complementarity, improving over text or visual prompt alone. These results show that simplicity and strong unified prompting capability can be achieved together.",
    "published": "2026-08-31T04:57:12Z",
    "updated": "2026-08-31T04:57:12Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.30247"
  },
  {
    "id": "2608.30241",
    "title": "PaperBanana-Interact: Scientific Diagram Refinement with Multi-Turn Human Feedback",
    "authors": [
      "Xueqing Wu",
      "Ashwin Balasubramanian",
      "Bingxuan Li",
      "Dawei Zhu",
      "Kai-Wei Chang",
      "Yale Song",
      "Yiwen Song",
      "Rui Meng",
      "Tomas Pfister",
      "Nanyun Peng"
    ],
    "abstract": "Recent efforts have aimed to automate scientific diagram generation from paper content (Lin et al., 2026; Zhu et al., 2026a). However, fully satisfying an author's visual and communicative preferences in a single turn is challenging: in our formative user study (N = 14), all participants requested further revisions after viewing an initial draft, and 86% of them rated the refined diagrams as more satisfactory. Despite the clear demand, the multi-turn workflow remains largely underexplored. To bridge this gap, we present MTPaperBananaBench, a benchmark for multi-turn diagram generation containing 292 images annotated with 3,518 user requirements. To reduce expensive human studies and enable scalable benchmarking, we construct a user simulator that, at each turn, identifies unsatisfied requirements and converts k of them into natural language feedback. Evaluating both requirement satisfaction and overall diagram quality reveals two key failure modes shared across baseline multiturn systems: (1) quality drift, where diagram quality progressively declines over turns, and (2) forgetting, where previously implemented features are lost in subsequent turns. To address these issues, we introduce PaperBanana-Interact, a multi-agent system that refines diagrams via an internal critique-and-refine loop. PaperBanana-Interact consistently improves rather than degrades diagram quality across turns, outperforming baselines by 11.9-18.6 points in quality score and reducing forgetting by 3.7-6.2 points.",
    "published": "2026-08-31T04:52:32Z",
    "updated": "2026-08-31T04:52:32Z",
    "categories": [
      "cs.CL",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.30241"
  },
  {
    "id": "2608.30237",
    "title": "Motus2: A Self-Evolving General World Model for Dexterous Manipulation",
    "authors": [
      "Hongzhe Bi",
      "Zihao Zhou",
      "Yihang Tang",
      "Jingrui Pang",
      "Shuhe Huang",
      "Haitian Liu",
      "Runqing Wang",
      "Shuai Huang",
      "Yichen Wang",
      "Yiming Cheng",
      "Ruowen Zhao",
      "Zhenghua Li",
      "Hengkai Tan",
      "Xiaolong Liu",
      "Jinhui Wan",
      "Jiabao Liu",
      "Min Zhao",
      "Fan Bao",
      "Jun Zhu"
    ],
    "abstract": "General embodied agents should perceive, predict, act, evaluate, and improve within a unified system. World models have shown great promise in building such agents, yet existing models typically append an action output head to a world simulator, without coupling them into a closed decision-and-learning loop for policy improvement. We present Motus2, a self-evolving general world model for dexterous manipulation. Motus2 advances world modeling through model scaling and data scaling. For model scaling, a single model with shared weights exposes three control interfaces: a policy (world-action model), a simulator (action-conditioned world model), and an evaluator (value model). The policy proposes candidate action chunks, the simulator predicts their visual consequences, and the evaluator assesses the predicted outcomes. Their coupling forms a closed decision-and-learning loop for policy improvement. This formulation uses curated expert demonstrations for action learning, while failed and suboptimal interactions provide valuable evidence for dynamics modeling and value learning. For data scaling, Motus2 progresses from large-scale monocular egocentric data to synchronized stereo egocentric data, followed by robot-domain adaptation with robot trajectories and supplementary human-robot alignment data. Motus2 further studies global-autoregressive and hybrid-memory extensions of its sliding-window context, adds tactile feedback for contact-aware control, and is instantiated on a fully biomimetic platform with stereo vision, dual arms, dual dexterous hands, and tactile sensing. Together, egocentric data scaling and closed-loop general world model scaling provide a general path toward self-evolving dexterous manipulation.",
    "published": "2026-08-31T04:44:33Z",
    "updated": "2026-08-31T04:44:33Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.30237"
  },
  {
    "id": "2608.30235",
    "title": "LLM-Based Knowledge Graph Completion Combining Discrete Structural Coding with Similar Entity Information",
    "authors": [
      "Jiaqi Wang",
      "Dongying Lin",
      "Yang Yang",
      "Yinan Liu",
      "Bin Wang",
      "Xiaochun Yang"
    ],
    "abstract": "Knowledge graph completion requires models to use both textual descriptions and relational structure. Existing LLM-based methods either encode KG structure as discrete tokens or refine a restricted set of candidate entities, and these two directions have largely been studied separately. We propose CoSC for LLM-based KGC, which combines discrete structural coding with similar entity information. Specifically, an LLM generates an initial candidate entity ranking from discrete structural codes, after which information from entities with structures similar to that of the query entity refines the ranking. Experiments on FB15k-237 show that CoSC outperforms existing baselines on MRR and Hits@10 while remaining competitive on Hits@1.",
    "published": "2026-08-31T04:39:44Z",
    "updated": "2026-08-31T04:39:44Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.30235"
  },
  {
    "id": "2608.30234",
    "title": "CoLa-ICD: A Knowledge-Enhanced Framework for Long-Tail Automated Medical Coding",
    "authors": [
      "Yihang Cheng",
      "Veronica Liesaputra",
      "Andrew Trotman"
    ],
    "abstract": "Automatic medical coding assigns ICD codes to clinical notes, but it remains challenging due to long documents, imbalanced label distributions, and diverse terms. These challenges are especially severe for rare codes, which have limited training instances and are easily confused with semantically similar labels. We introduce CoLa-ICD, a knowledge-enhanced framework for long-tail prediction. CoLa-ICD enriches ICD labels with external terms, models dependencies among related codes, and learns stronger alignment between label semantics and clinical evidence for long-tail prediction. Experiments show that CoLa-ICD improves long-tail prediction with larger gains in larger and sparser label spaces and achieves state-of-the-art performance in AUC, F1, and P@k. Our code is available at https://github.com/youwillbethebest/Cola-ICD.",
    "published": "2026-08-31T04:39:43Z",
    "updated": "2026-08-31T04:39:43Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.30234"
  },
  {
    "id": "2608.30233",
    "title": "Semantic-Spatial Discriminability Enhancement for Generalized Visual Grounding",
    "authors": [
      "Kaiyan Lei",
      "Xu-Yao Zhang"
    ],
    "abstract": "Generalized Visual Grounding (GVG) task aims to localize targets in an image based on referring expressions, extends the classical visual grounding paradigm by integrating multi-target and non-target scenarios. Previous methods typically rely on global semantic matching or coarse-grained region interactions for localization, where the discriminative cues are primarily derived from sentence-level semantics or regional context. In complex multi-target scenarios, such approaches tend to confuse visually similar targets, making it difficult to establish stable instance-level decision boundaries. To address these limitations, this paper proposes a novel Semantic-Spatial Discriminability Enhancement (SSDE) framework for generalized visual grounding, which aims to enhance the discriminative ability on fine-grained semantics and spatial localization, improving both cross-modal understanding and instance-level grounding. Specifically, to enhance the semantic discriminability of query representations at the fine-grained level, we propose a Semantic Discriminability Enhancement (SeDE) module, which leverages spatially guided cross-attention to disentangle fine-grained target-relevant visual attributes and integrates them with the textual subject semantics. Furthermore, to strengthen the spatial discriminability of the referred targets, we introduce a Spatial Discriminability Enhancement (SpDE) module, which models an instance center density map to characterize the spatial distribution of targets, and explicitly constructs instance separation structures in the spatial domain by employing them as an auxiliary supervision signal. Extensive experiments show that SSDE achieves superior performance on ten datasets across both classic and generalized visual grounding tasks.",
    "published": "2026-08-31T04:37:36Z",
    "updated": "2026-08-31T04:37:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.30233"
  },
  {
    "id": "2608.30230",
    "title": "Rethinking the Test-Time Prompt Tuning Objective from the Perspective of Calibration",
    "authors": [
      "Jungwon Choi",
      "Hyeonseo Jang",
      "Kibok Lee",
      "Eunwoo Kim"
    ],
    "abstract": "Test-time prompt tuning (TPT) has emerged as a powerful paradigm, refining prompts for each test sample via entropy minimization (EM) over multiple augmented views. However, we identify a limitation in the standard EM-based adaptation: it inherently drives the model toward overconfident predictions disregarding sample-specific uncertainty, leading to significant calibration degradation. To address these limitations, we propose a new objective that replaces the conventional EM loss by aligning the original-view prediction with a target distribution derived from augmented views via cross-entropy, while adversarially incorporating the entropy of the target distribution to capture sample-specific uncertainty. Furthermore, to better construct this target distribution, we apply confidence-aware temperature scaling to each augmented-view prediction according to its confidence, sharpening confident predictions while softening uncertain ones. This formulation allows the model to increase confidence only when the target distribution is reliable, while preserving uncertainty when it reflects ambiguous or conflicting augmented-view predictions. Extensive experiments across diverse benchmarks demonstrate that our approach not only achieves state-of-the-art accuracy but also significantly improves model calibration.",
    "published": "2026-08-31T04:33:05Z",
    "updated": "2026-08-31T04:33:05Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.30230"
  },
  {
    "id": "2608.30226",
    "title": "LaMoC: Loss-Aware Modular Compression for LLMs",
    "authors": [
      "Mohanad Odema",
      "Jacob Song"
    ],
    "abstract": "Modular compression has enabled considerable parameter reduction in LLMs while preserving strong language understanding and downstream task accuracy. However, existing joint modular compression methods primarily rely on activation statistics, leaving loss-sensitivity information and its module-level characterization underexplored. We investigate addressing this gap with LaMoC, a loss-aware modular compression methodology that blends activation and Empirical Fisher statistics through gradient-error alignment. LaMoC improves joint compression by selecting compression statistics that better align local module reconstruction error with the downstream loss. Our contributions are three-fold: (1) We characterize the Empirical Fisher as a module-level loss-aware proxy that can be blended with the activation statistics required for compression. (2) We reformulate joint modular compression as a two-tiered optimization problem that minimizes module reconstruction error while tuning the activation and gradient information blending rate. (3) We implement an empirically driven methodology with statistical validation to solve the resulting compression problem. We evaluate LaMoC across four model families spanning eight models. On the 4-8B models, LaMoC achieves an average 2.5% reduction in perplexity and a 1% relative improvement in task accuracy over state-of-the-art modular compression methods.",
    "published": "2026-08-31T04:20:31Z",
    "updated": "2026-08-31T04:20:31Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.PF"
    ],
    "url": "https://arxiv.org/abs/2608.30226"
  },
  {
    "id": "2608.29852",
    "title": "MariSat: A Maritime Dataset for Instance Segmentation of Objects in Satellite and Aerial Images",
    "authors": [
      "Amir Abbes",
      "Ines Harrabi",
      "Lucas Justin Yirepoa Kinda",
      "Rim Trabelsi",
      "Adnane Cabani",
      "Fatma Abdelkefi"
    ],
    "abstract": "Automated maritime surveillance from satellite and aerial imagery requires large, precisely annotated datasets, which remain scarce for the instance-segmentation task, particularly for small vessels in cluttered port environments. We present MariSat, a new benchmark dataset of 1260 aerial and satellite images covering diverse port and coastal scenes, annotated at the pixel level for eight maritime object classes (sailboat, yacht, jet-ski, fishing boat, cruise ship, military vessel, tugboat and cargo ship). The dataset was produced through a semi-automatic annotation pipeline combining the textpromptable segmentation model SAM 3 with a cascade of geometric and colorimetric post-processing filters, followed by a manual correction and quality-control pass performed with the CVAT annotation platform. We describe the image-collection methodology, the annotation and correction process, and the resulting data organization. We also report class-wise statistics for the training, validation, and test splits. MariSat has already been used to fine-tune and benchmark segmentation and detection models (SAM 3 and YOLO11) for real-time maritime monitoring. We report detailed quantitative and per-class results for both tasks. The MariSat dataset is publicly available on GitHub : https://github.com/amirabbes/P2M-Maritime-Segmentation",
    "published": "2026-08-30T15:31:39Z",
    "updated": "2026-08-30T15:31:39Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29852"
  },
  {
    "id": "2608.29847",
    "title": "ContextBias: Controlled Evaluation of Bias Persistence Under Context Shift in Text-to-Image Models",
    "authors": [
      "Shaghayegh Kolli",
      "Sina Emami",
      "Moreno D'Incà",
      "Pouyan Nejadi",
      "Nicu Sebe",
      "Massimiliano Mancini",
      "Jana Diesner"
    ],
    "abstract": "Text-to-image models learn associations between concepts - in the case of this paper, people's professions, which we refer to as roles - and visual attributes. These associations can underpin many observed forms of stereotypical bias. A key open question in this area is whether these associations are stable or change when visual representations of people in professional roles are placed in different prompted contexts. We introduce ContextBias, a controlled evaluation framework, and ContextBench, a benchmark spanning 92 roles and 1,656 semantically controlled prompts, designed to isolate the effect of contextual variation on role-linked visual representations. Evaluating four state-of-the-art models on 66,240 generated images, we find that placing a role in a semantically unrelated context does not suppress role-linked attributes; instead, cross-role attribute concentration increases (pooled BI $+0.047$). Demographic cues, characteristic garments, and role-specific tools remain highly prevalent across context-free, related, and unrelated conditions, and are robust to semantic prompt reformulation. Scene composition and camera framing show the greatest context-sensitivity. These findings reveal a form of stereotypical persistence that remains largely invisible to context-free evaluations, highlighting the need for controlled contextual variation in bias benchmarking. Code and dataset: https://huggingface.co/datasets/shaghayegh/ContextBias , https://github.com/Sina-Emami/ContextBias",
    "published": "2026-08-30T15:23:07Z",
    "updated": "2026-08-30T15:23:07Z",
    "categories": [
      "cs.CV",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2608.29847"
  },
  {
    "id": "2608.29820",
    "title": "Null-Space Diffusion Restoration with Adaptive Uncertainty-Guided Fusion for Ultrasound Speckle Reduction",
    "authors": [
      "Juneyong Lee",
      "Jaeyoung Choi"
    ],
    "abstract": "Ultrasound B-mode imaging commonly suffers from speckle noise and artifacts, requiring a delicate balance between contrast, resolution, and preservation of anatomical structures. Although recently developed despeckling methods have achieved some progress, supervised learning approaches remain fundamentally limited by the ground truth paradox, which arises from the absence of noise-free, ground truth reference images in in vivo scenarios. Existing unsupervised diffusion-based methods typically enforce data consistency directly in the nonlinear log-compressed domain, which can disproportionately amplify background artifacts when mapped back to the envelope domain. To overcome these limitations, we propose an uncertainty-guided null-space diffusion (UGNS) framework, a novel label-free solution that enforces consistency correction on a stabilized positive-envelope proxy obtained via inverse log compression. The proposed UGNS introduces several technical novelties: (a) extraction of a structural prior in the stabilized envelope domain to produce a robust signal envelope that preserves anatomical structure, (b) development of an adaptive range-null reconstruction mechanism that uses an adaptive weight mask to preserve tissue regions via range-space projection, and (c) introduction of uncertainty-guided fusion in an adaptive way to mitigate sampling variability. Extensive and comparative experiments were conducted using the PICMUS benchmark and in vivo datasets. The results demonstrate that UGNS achieves competitive generalized contrast-to-noise ratio (gCNR) values across diverse datasets. In addition, it is successfully validated that UGNS effectively suppresses speckle noise while preserving fine spatial resolution. Code is available at https://github.com/yousirong/UGNS.git.",
    "published": "2026-08-30T14:45:13Z",
    "updated": "2026-08-30T14:45:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29820"
  },
  {
    "id": "2608.29819",
    "title": "PhasorNet: Learning Structure from Frequency for Real-Time Stereo Matching",
    "authors": [
      "Md Raqib Khan",
      "Santosh Kumar Vipparthi",
      "Subrahmanyam Murala"
    ],
    "abstract": "Accurate stereo matching remains challenging in ill-posed regions such as fine structures, reflective, or transparent objects, where appearance cues are often ambiguous or unreliable. To tackle this, we propose PhasorNet, a lightweight yet powerful framework that boosts geometric discrimination via frequency-domain cues. At its core, the Phase-Augmented Transformer (PAT) injects Fourier-derived phase information into the attention mechanism, yielding photometrically robust, structure-preserving features that prioritize structural consistency in difficult areas. Additionally, we develop a Geometry-Context Fusion Refinement Module (GCFRM) that combines a full-resolution convolutional stream with a lightweight attention-based stream (leveraging WQA and CDGA blocks) to efficiently preserve fine details and object boundaries without excessive overhead. Training is further enhanced by a multi-scale Edge-guided High-Error Region (EHR) loss that adaptively focuses optimization on high-error and edge regions, guiding hierarchical cost volume refinement. With only 5.3M parameters, PhasorNet achieves state-of-the-art performance on the challenging ETH3D benchmark while exhibiting excellent cross-domain generalization on KITTI, delivering an efficient and practical solution for accurate real-time stereo matching.",
    "published": "2026-08-30T14:41:36Z",
    "updated": "2026-08-30T14:41:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29819"
  },
  {
    "id": "2608.29814",
    "title": "FRAMEWORKERS: A Dynamic Multi-Agent Framework for AI-Generated Video Production",
    "authors": [
      "Zhendong Li",
      "Lei Sun",
      "Letian Shi",
      "Deheng Zhang",
      "Ruibo Ming",
      "Mengshun Hu",
      "Dannong Xu",
      "Jian Wang",
      "Danda Paudel",
      "Luc Van Gool",
      "Jinjin Gu"
    ],
    "abstract": "Modern video generators excel at synthesizing individual clips, but complete video production requires coordinating a long sequence of interdependent creative steps, including scripting, storyboarding, generation, and editing. It further demands persistent asset management and dynamic task orchestration as intermediate outputs, dependencies, and execution states evolve over time. Existing automated systems typically rely on rigid pipelines that are difficult to adapt to diverse inputs and changing workflows, while general-purpose large language models (LLMs) remain unreliable for long-horizon orchestration and multimodal asset routing. We introduce FRAMEWORKERS, a task-centric and workspace-grounded multi-agent framework for open-ended video production. A central Director formulates video creation as dynamic task management, continuously editing a Task Stack to determine which subtask to execute next and which sub-agent to invoke. An Assistant serves as the execution layer, grounding each selected task in a shared Workspace, retrieving the required assets and context, invoking the assigned sub-agent, and persisting the resulting artifacts. Execution capabilities are exposed through modular sub-agents with registered descriptors, allowing new sub-agents to be integrated without redesigning the orchestration workflow. To improve orchestration reliability, we fine-tune the Director via supervised fine-tuning (SFT) followed by Group Relative Policy Optimization (GRPO) for descriptor-conditioned task routing. Experiments show that FRAMEWORKERS outperforms strong LLM planners in routing accuracy, recovers reliably from runtime failures, generalizes to unseen sub-agents without retraining, and achieves higher end-to-end video quality and broader task coverage than fixed pipelines, single-agent systems, and prior multi-agent approaches.",
    "published": "2026-08-30T14:28:50Z",
    "updated": "2026-08-30T14:28:50Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.29814"
  },
  {
    "id": "2608.29809",
    "title": "RegionCache: Semantic-Aware Region Reuse for Efficient Multi-Turn Image Generation",
    "authors": [
      "Peizheng Li",
      "Xin Ai",
      "Hanyuan Liu",
      "Qiange Wang",
      "Yanfeng Zhang"
    ],
    "abstract": "Real-world image generation often involves multi-turn editing, where users iteratively modify small regions while most image content remains unchanged. However, existing diffusion transformer (DiT)-based editing pipelines recompute the entire image at every turn, causing substantial redundant computation. Existing DiT acceleration methods further ignore semantic correspondence across prompts, leading to unnecessary recomputation or unsafe reuse that harms editing quality. To address this, we propose RegionCache, a semantic-aware reuse framework for multi-turn image editing that selectively reuses diffusion states from unchanged regions. RegionCache detects reusable regions through semantic overlap between consecutive prompts and cross-attention localization, and adopts an adaptive reuse schedule based on prompt similarity and contextual consistency. Experiments on PixArt-alpha demonstrate that RegionCache achieves 1.43x--2.55x end-to-end speedup while maintaining comparable image quality. Code is available at https://github.com/hebutBryant/RegionCache.",
    "published": "2026-08-30T14:21:46Z",
    "updated": "2026-08-30T14:21:46Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29809"
  },
  {
    "id": "2608.29804",
    "title": "Beyond Global Realism: Virtual Try-On Evaluation and Optimization with Dimension-wise Garment Fidelity Assessment",
    "authors": [
      "Kaidong Zhang",
      "Yukang Ding",
      "Xiaoyu Liu",
      "Ying Chen"
    ],
    "abstract": "Virtual try-on (VTON) requires not only realistic generation but also faithful preservation of garment characteristics. However, existing evaluation metrics such as PSNR, SSIM, KID and FID struggle to measure the consistency between the generated and reference garments, particularly in capturing the multi-dimensional characteristics of garment fidelity. To address this, we propose DAT: a Dimension-wise Assessment framework for virtual Try-on, which decomposes garment consistency into seven interpretable dimensions: silhouette, color, neckline and sleeve shape, major decoration and structure, material texture, fine-detail fidelity, and logo preservation, each formulated as a discrete attribute-level prediction task. To train this specialized assessment model, we adopt a two-stage learning paradigm comprising large-scale weak supervision on 50K samples, followed by refinement on 10K higher-quality annotations obtained via multi-model voting. Furthermore, we employ weighted cross-entropy loss to mitigate the severe label imbalance inherent across evaluation dimensions. Beyond its role as an evaluation framework, the assessment model can be integrated into reinforcement learning optimization of Qwen-Image-Edit for VTON, where dimension-wise rewards are adaptively aggregated to emphasize under-optimized aspects during training. Experimental results show that our method (8B parameters) achieves state-of-the-art performance in terms of balanced accuracy, SROCC, and PLCC, outperforming strong proprietary models such as Gemini-3.1, Qwen3.7-plus, and GPT-5.5, while also serving as an effective optimization signal for reward-guided VTON generation",
    "published": "2026-08-30T14:08:40Z",
    "updated": "2026-08-30T14:08:40Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29804"
  },
  {
    "id": "2608.29802",
    "title": "Foundation and Multimodal Large Language Models for Face Presentation and Morph Attack Detection",
    "authors": [
      "Hatef Otroshi Shahreza",
      "Asif Hussain Khan",
      "Peter Lorenz",
      "Alain Komaty",
      "Sébastien Marcel"
    ],
    "abstract": "Face recognition systems are increasingly deployed in security-critical applications, yet they remain vulnerable to presentation and morph attacks. Presentation attack detection (PAD) and morphing attack detection (MAD) are therefore essential components of trustworthy face biometrics. Despite advancements in PAD and MAD methods, existing detectors suffer from limited generalization and degrade in cross-dataset evaluation. In this paper, we systematically investigate whether general-purpose foundation models (FMs) and multimodal large language models (MLLMs) encode PAD-relevant and MAD-relevant information, and how such models can best be deployed for both tasks. We study five approaches with increasing access to the internal information of the model: (i) zero-shot prompting of off-the-shelf MLLMs; (ii) training a shallow model on the next-token logit probabilities at the output of the MLLM; (iii) parameter-efficient fine-tuning on task-specific question-answer data, yielding two specialized MLLMs, called PADLLM and MADLLM, which additionally provide textual reasoning for their decisions; (iv) linear probing of frozen vision encoders; and (v) fine-tuning of vision encoders of FMs and MLLMs. We benchmark 16 open-weight MLLMs and 30 vision encoder backbones on four PAD datasets (MSU-MFSD, CASIA-FASD, Replay-Attack, and OULU-NPU) and four MAD datasets (FFHQ, FRGC, FRLL, and FERET). Our experiments show that FMs and MLLMs can achieve significant performance for PAD and MAD. In addition, the fine-tuned models achieve state-of-the-art detection performance in cross-dataset evaluation, indicating that general-purpose pretrained representations carry substantial attack-relevant information. Source code of all our experiments will be publicly released.",
    "published": "2026-08-30T14:07:31Z",
    "updated": "2026-08-30T14:07:31Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29802"
  },
  {
    "id": "2608.29800",
    "title": "Source-Dependent Deference in Medical Imaging Agents Under Falsified Findings: A Pilot Audit",
    "authors": [
      "Ridam Roy",
      "Md Shahriar Rashid",
      "Md. Rajib Mia"
    ],
    "abstract": "Tool-using agents are being proposed for medical imaging, and their behaviour when a tool returns a false finding is largely unmeasured. We audit whether a ReAct-style tool-calling agent abandons an answer it has already given correctly once a falsified finding arrives, and whether that depends on how the finding is presented. On 20 VQA-RAD closed questions across four vendor-designated model tiers, the agent commits to an answer from the image alone; a negated finding is then delivered either as JSON from an analyze_image tool the agent invokes itself, or as quoted prose attributed to a radiologist. Our outcome is the commission-error rate over cases answered correctly without any tool. Deference is much higher under the prose-attributed claim: at the strongest tier the agent revised its correct answer in 10 of 13 cases against 1 of 13 under the tool (exact McNemar p=0.0039, Holm-adjusted 0.012). We do not claim this isolates the source label. Attribution travels with the delivery channel in our design, and exposure differs because the tool claim reaches the agent only when it calls the tool. The finding is a joint source-and-delivery asymmetry from a small-scale pilot whose pre-specified stopping rule was not met.",
    "published": "2026-08-30T13:58:15Z",
    "updated": "2026-08-30T13:58:15Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29800"
  },
  {
    "id": "2608.29798",
    "title": "R$^2$A: Learning Persona Policies Through Persona Representation Learning and Runtime Alignment",
    "authors": [
      "Mohan Zhang",
      "Chengsong You",
      "Xiaoyu Cao",
      "Zhen Sun",
      "Xiaohan Jia",
      "Junwei Zhou",
      "Yongchao Chen"
    ],
    "abstract": "The same Persona behavior can be beneficial in one context but harmful in another, causing static Persona elicitation to perform inconsistently across tasks. We introduce the Persona Selection--Realization Framework, which models behavior generation through a latent Persona state and decomposes it into Persona Selection and Persona Realization. The discrepancies between static Persona elicitation and an ideal Persona policy in these two components define the Selection Gap and Realization Gap, respectively. Building on this framework, we propose R$^2$A, a two-stage approach for learning Persona policies. Persona Representation Learning uses structured Who--How--What presentations to encode the target Persona's objective, conditional behavioral principles, and trajectory-level manifestations. Persona Runtime Alignment then removes the explicit Persona specification and jointly calibrates behavior selection and trajectory realization using task feedback. Across 12 evaluation settings covering the four principles of the Accountable-Professional Persona studied in this work, R$^2$A overall outperforms both the base model and static Persona elicitation. Ablation results further show that Persona Representation Learning is critical for preventing Runtime Alignment from producing behaviorally imbalanced policies and for achieving more stable Persona policy learning.",
    "published": "2026-08-30T13:55:09Z",
    "updated": "2026-08-30T13:55:09Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.29798"
  },
  {
    "id": "2608.29793",
    "title": "GridFlow: Structured Latent Flow for Seamless City-Scale 3D Point Cloud Generation",
    "authors": [
      "Xinyu Wang",
      "Muhammad Ibrahim",
      "Atif Mansoor",
      "Ajmal Mian"
    ],
    "abstract": "Generating realistic 3D city environments from remote sensing data is important for simulation, urban planning, and mixed reality, yet existing point cloud generation methods are limited to single objects or bounded indoor scenes and cannot handle the scale, seamless tiling, and partial observability challenges of city-scale generation. We present \\ours{}, a multi-stage framework that generates dense, colored point clouds ($10^5$ points per $150\\text{m}{\\times}150\\text{m}$ tile) at city scale, conditioned on satellite imagery, semantic segmentation maps, and digital surface models (DSM). A \\emph{Grid-Aligned VAE} encodes each tile into a topology-preserving latent grid where tokens correspond to fixed spatial regions, enabling spatially coherent multi-modal conditioning and compact latent-space edge consistency that implicitly aligns thousands of boundary points for seamless cross-tile generation. A conditional rectified flow model synthesizes geometry latents from the fused multi-modal conditions, and an orientation-aware diffusion colorizer separately handles satellite-visible horizontal surfaces and occluded vertical façades. To support standardized evaluation, we build on public 3D data sources to introduce \\emph{City3D-MultiGen}, a benchmark of $163$K densely annotated tiles from Melbourne and London with aligned point clouds, satellite images, semantic maps, and elevation data. Experiments show that \\ours{} outperforms adapted point cloud generation baselines across all geometry metrics and produces visually coherent colored point clouds with seamless boundaries over arbitrarily large urban extents. Our benchmark details are available at https://huggingface.co/datasets/e32/City3D-MultiGen",
    "published": "2026-08-30T13:39:36Z",
    "updated": "2026-08-30T13:39:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29793"
  },
  {
    "id": "2608.29783",
    "title": "InspectorGPT: A Comparative Reasoning Enhanced VLM for Comprehensive Industrial Anomaly Detection",
    "authors": [
      "Weifei Chen",
      "Honghao Zhang",
      "Zhiyuan You",
      "Xinyi Le"
    ],
    "abstract": "Industrial anomaly detection is a critical component of modern manufacturing. Most traditional unsupervised methods rely on modelling normal feature distributions, inherently limiting generalization to unknown categories. To improve generalizability, some recent methods incorporate vision-language models (VLMs) for zero-shot detection via text prompts. However, we observe that reasoning-oriented post-training can cause anomaly discrimination to collapse, with some fine-tuned models performing worse than their base VLMs. Existing methods also provide only textual decisions or coarse boxes, without pixel-level segmentation. A more explicit detection principle comes from human inspection: anomalies are identified by comparing a query image with a defect-free reference. Inspired by this, we propose InspectorGPT, a VLM framework centered on comparative reasoning. Given a normal reference and a query image, InspectorGPT compares them to identify discrepancies and perform multiple inspection tasks with detailed reasoning. We internalize this capability through Chain-of-Thought (CoT) fine-tuning and Group Relative Policy Optimization (GRPO) with tailored, verifiable rewards. We further introduce InspectorGPT-Seg for pixel-level anomaly masks. Segmentation supervision improves anomaly discrimination but weakens semantic reasoning, while joint training fails to balance them. We therefore train the two branches separately and combine them through task-vector fusion. Extensive experiments demonstrate superior multi-dimensional performance and generalization to unseen benchmarks, validating comparative reasoning for comprehensive industrial inspection.",
    "published": "2026-08-30T13:22:42Z",
    "updated": "2026-08-30T13:22:42Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29783"
  },
  {
    "id": "2608.29179",
    "title": "TAAL: Mitigating Early Beam Pruning in Generative Recommendation via Temporal Autoregressive Alignment",
    "authors": [
      "Lianjie Li",
      "Zhiying Tu",
      "Dianhui Chu",
      "Hongliang Sun"
    ],
    "abstract": "Generative recommendation encodes items as hierarchical semantic identifiers (SIDs) and retrieves the next item through autoregressive decoding. Standard next-token prediction, however, does not explicitly cover the multimodal transitions present in interaction sequences, leaving the ground-truth SID vulnerable to irreversible pruning at early beam-search branches. Across three public benchmarks, we find that 91.9\\%--96.6\\% of retrieval failures occur within the first two decoding steps. We therefore propose Temporal Autoregressive Alignment (TAAL). During training, TAAL constructs a joint $(c_1,c_2)$ soft target from historical transitions and aligns the early-prefix distribution with a forward KL objective. During inference, it calibrates candidate scores with pointwise mutual information (PMI) to reduce the influence of globally frequent prefixes. On Amazon Beauty, Instruments, and Yelp, TAAL improves NDCG@10 over the standard baseline by 39.5\\%, 6.7\\%, and 28.6\\%, respectively, while increasing full-SID survival by 3.9\\%--16.6\\%. Beam-width analysis further shows that the relative survival gain grows as the beam narrows, reaching 39.4\\% at $B=5$.",
    "published": "2026-08-29T10:11:47Z",
    "updated": "2026-08-29T10:11:47Z",
    "categories": [
      "cs.IR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.29179"
  },
  {
    "id": "2608.29177",
    "title": "Dynamic-Robust Photometric-Semantic Reconstruction for Open-Vocabulary 3D Scene Understanding",
    "authors": [
      "Boyu Cai",
      "Li Yang",
      "Yan Xu",
      "Wei Liu",
      "Nian Liu",
      "Sikui Zhang",
      "Yan Wang",
      "Chunfeng Yuan",
      "Weiming Hu"
    ],
    "abstract": "The integration of novel view synthesis (NVS) and open-vocabulary segmentation (OVS) has recently yielded powerful feed-forward 3D foundation models. However, their inherent reliance on static-scene assumptions leads to severe misalignment of spatial features in unconstrained dynamic environments. To bridge this critical gap, we propose SPAR, a novel joint semantic-geometric encoding architecture that explicitly isolates transient dynamic noise prior to latent space aggregation. Furthermore, we introduce a dynamic-region-aware end-to-end training paradigm that structurally couples motion estimation with multi-view visual and semantic learning. This unified approach enables the network to inherently resolve motion conflicts and distill multi-view consistent, temporally stable scene representations from dynamic inputs. Extensive experiments on the challenging D-RE10K benchmark demonstrate that SPAR achieves state-of-the-art performance. Our end-to-end approach achieves exceptional novel view synthesis quality, yielding a PSNR of 22.15 dB and 23.33 dB given only 3 and 4 input views respectively. Despite being trained in a self-supervised manner, our model achieves an mIoU of 88.5% for motion mask prediction. Furthermore, our analysis reveals a strong inter-task synergy between photometric scene reconstruction and semantic understanding, where semantic synthesis learning consistently enhances photometric fidelity in novel view rendering. Code will be available at https://github.com/dmucby/SPAR.",
    "published": "2026-08-29T09:58:24Z",
    "updated": "2026-08-29T09:58:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29177"
  },
  {
    "id": "2608.29175",
    "title": "An Explainable Coherence Score for Detecting Temporal Inconsistencies in Political News",
    "authors": [
      "Marius Nicusor Pantea",
      "Adrian Groza"
    ],
    "abstract": "Temporal inconsistencies, such as mandates attributed outside their real interval, events presented as past before they occurred, or inverted causal sequences, are a form of political disinformation that evades style-based fake news detectors: a well-written article with a single wrong date carries no lexical signal of falsehood. This paper introduces the Temporal Coherence Score (TCS), a continuous, intrinsically interpretable metric that quantifies the temporal coherence of a news article, computed by a four-stage pipeline: extraction of temporal facts, construction of a temporal knowledge graph, hierarchical verification against internal consistency rules and external reference sources, and score aggregation with automatically generated explanations. Verification combines eight internal checkers derived from Allen's interval algebra with a five-level external hierarchy ranging from a locally stored reference knowledge base of 1{,}256 curated political facts to live Wikidata SPARQL queries. On a benchmark of 100 political news articles with injected temporal errors, the system reaches a precision of 0.909 at the selected operating threshold, with a single residual false positive, a profile deliberately tuned for human-in-the-loop fact-checking assistance, where false alarms are costlier than missed detections. Unlike lexical baselines that output only a binary label, every flagged article is accompanied by the inconsistency type, the entities involved, and the reference source that contradicts the claim.",
    "published": "2026-08-29T09:56:19Z",
    "updated": "2026-08-29T09:56:19Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.29175"
  },
  {
    "id": "2608.29172",
    "title": "A Tensor Variational Formulation of Gradient Energy Total Variation",
    "authors": [
      "Freddie Åström",
      "George Baravdish",
      "Michael Felsberg"
    ],
    "abstract": "We present a novel variational approach to a tensor-based total variation formulation which is called gradient energy total variation, GETV. We introduce the gradient energy tensor [6] into the GETV and show that the corresponding Euler-Lagrange (E-L) equation is a tensor-based partial differential equation of total variation type. Furthermore, we give a proof which shows that GETV is a convex functional. This approach, in contrast to the commonly used structure tensor, enables a formal derivation of the corresponding E-L equation. Experimental results suggest that GETV compares favourably to other state of the art variational denoising methods such as extended anisotropic diffusion (EAD)[1] and total variation (TV) [18] for gray-scale and colour images.",
    "published": "2026-08-29T09:46:14Z",
    "updated": "2026-08-29T09:46:14Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29172"
  },
  {
    "id": "2608.29168",
    "title": "JudgePanel: A Compact Judge with Panel Deliberation via Adaptive Multi-Reward Reinforcement Learning",
    "authors": [
      "Yiyue Qian",
      "Shinan Zhang",
      "Huan Song",
      "Hannah Marlowe"
    ],
    "abstract": "The LLM-as-a-Judge paradigm has emerged as a scalable alternative to human evaluation. However, single-model judges are limited by their inherent model biases, while multi-agent evaluation protocols that mitigate this through diverse deliberation are prohibitively expensive at inference time. To this end, we propose \\textbf{\\modelname}, which equips a compact \\underline{Judge} model with multi-agent \\underline{Panel} deliberation capability. Specifically, we first train on panel deliberation traces from an ensemble of strong evaluators, capturing structured patterns of discussion, disagreement, and resolution. To further improve judgment quality beyond SFT, we introduce \\textit{AdaReward}, an adaptive multi-reward RL algorithm that dynamically rebalances reward component weights as different objectives saturate at different rates during RL training. For practical deployment, we further design a lightweight domain specialization module for rapid adaptation to new evaluation domains with few hundred labeled samples. As a result, (i) \\textit{Novel}: the first framework to equip a single compact judge with multi-agent panel deliberation capability at single-model inference cost; (ii) \\textit{Effective \\& Reliable}: JudgePanel with a 14B backbone outperforms judge-specialized models up to 70B across four evaluation benchmarks, demonstrates strong position consistency, and rapidly specializes to new domains with few hundred samples.",
    "published": "2026-08-29T09:33:49Z",
    "updated": "2026-08-29T09:33:49Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.29168"
  },
  {
    "id": "2608.29167",
    "title": "Feature-Spectral Fragility in Segmentation: Dataset Dependence, Architecture-Specific Localization, and Spectral Correlates",
    "authors": [
      "Subhash Kashyap"
    ],
    "abstract": "Robustness of segmentation models is commonly assessed through input-domain perturbations, while dependence on frequency content within learned feature representations remains less understood. We probe this dependence using targeted post-training low-pass interventions on internal representations of three segmentation architectures, ResNet50-UNet (CNN), VM-UNet (SSM), and Swin-UNETR (Transformer), across CVC-ClinicDB and ISIC2018, with headline evaluations performed on untouched held-out test sets. At cutoff rho=0.25, feature-domain low-pass filtering causes severe degradation on CVC: Dice drops by 100%, 73.2%, and 30.9% for CNN, SSM, and Transformer, respectively, compared with 9.4%, 10.3%, and 0.6% on ISIC. The cross-dataset difference is statistically significant for every architecture. Single-stage interventions further show that sensitivity is localized at architecture-specific depths: the CNN peaks at a mid/late encoder block, whereas the SSM peaks in an early encoder stage on both datasets. Native feature-domain spectral measurements show an inverse association between high-frequency energy and fragility on CVC; the relationship is only partial on ISIC and is therefore treated as a candidate correlate rather than a proven mechanism. Finally, Fourier augmentation improves robustness to input-space low-pass filtering but leaves feature-domain degradation essentially unchanged. These results show that feature-spectral robustness is strongly dataset-dependent, architecture-specific, and distinct from input-domain spectral robustness.",
    "published": "2026-08-29T09:33:45Z",
    "updated": "2026-08-29T09:33:45Z",
    "categories": [
      "cs.CV",
      "eess.IV"
    ],
    "url": "https://arxiv.org/abs/2608.29167"
  },
  {
    "id": "2608.29164",
    "title": "Mapping-Based Image Diffusion",
    "authors": [
      "Freddie Åström",
      "Michael Felsberg",
      "George Baravdish"
    ],
    "abstract": "In this work, we introduce a novel tensor-based functional for targeted image enhancement and denoising. Via explicit regularization, our formulation incorporates application dependent and contextual information using first principles. Few works in literature treat variational models that describe both application dependent information and contextual knowledge of the denoising problem. We prove the existence of a minimizer and present results on tensor symmetry constraints, convexity, and geometric interpretation of the proposed functional. We show that our framework excels in applications where nonlinear functions are present such as in gamma correction and targeted value range filtering. We also study general denoising performance where we show comparable results to dedicated PDE-based state of the art methods.",
    "published": "2026-08-29T09:28:47Z",
    "updated": "2026-08-29T09:28:47Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29164"
  },
  {
    "id": "2608.29162",
    "title": "Subtraction-Based Tumor Segmentation and Lesion-Centered pCR Prediction for the MAMA-MIA Challenge",
    "authors": [
      "Kai Geissler",
      "Raphael Schäfer"
    ],
    "abstract": "We describe the submission of team FME to the MAMA-MIA Challenge, which evaluated primary tumor segmentation and prediction of pathological complete response (pCR) from pretreatment dynamic contrast-enhanced breast MRI on an external multi-country cohort. For segmentation, we trained a five-fold residual-encoder nnU-Net ensemble using only the first post-contrast minus pre-contrast image, combined with mirroring test-time augmentation and largest-connected-component filtering. For pCR prediction, we ensembled 25 pretrained 3D video classifiers trained on lesion-centred crops from the pre-contrast and first two post-contrast volumes. FME ranked second in both tasks. The segmentation method achieved a combined performance-fairness score of 0.882, with Dice 0.713 and normalized Hausdorff distance 0.099. The pCR method achieved a combined score of 0.664, balanced accuracy of 0.541, and equalized-odds disparity of 0.212. The results indicate that subtraction-based input and ensembling support robust tumor segmentation under cross-site domain shift, whereas pCR prediction from baseline DCE-MRI alone remains limited. For the submission repository, see https://github.com/FraunhoferMEVIS/MAMA-MIA-Challenge-FME",
    "published": "2026-08-29T09:23:45Z",
    "updated": "2026-08-29T09:23:45Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.29162"
  },
  {
    "id": "2608.29160",
    "title": "Training-Free Hidden-State Refinement for Flow-Matching Image Generators",
    "authors": [
      "Yuanyi Yan",
      "Xinzhe Rao",
      "Canyu Shen",
      "Yang Chen",
      "Yunlu Chen",
      "Meng Tang",
      "Teng Long",
      "Vincent Tao Hu"
    ],
    "abstract": "We aim to improve frozen flow-matching image generators by adding inference computation inside the denoiser, without changing model weights or the outer sampler. Existing generators usually spend extra test-time computation by increasing the number of sampling steps, which repeatedly evaluates the entire denoiser and couples quality gains to sampler cost. A key challenge is how to use extra computation inside a frozen transformer denoiser: the method must decide which tokens, layers, and sampling times receive repeated updates while preserving the original generation pipeline. We introduce a training-free looping framework that repeatedly applies selected transformer layers inside each denoising call. Dense and Sparse Token Loop vary the token scope; Sampling-Progress Gating and the loop layer range specify when and where looping is active; loop count and strength control the repeated updates; and Loop Guidance combines ordinary and looped vector-field predictions. Across two Scale-RAE model scales, loop variants improve primary and auxiliary quality metrics with competitive quality--efficiency trade-offs. Loop Guidance further improves both primary metrics across all three tested models; on Scale-RAE DiT2.4B, it raises GenEval from 0.4471 to 0.5691 and DPG-Bench from 0.7656 to 0.8053. Code will be released.",
    "published": "2026-08-29T09:17:02Z",
    "updated": "2026-08-29T09:17:02Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.29160"
  },
  {
    "id": "2608.29153",
    "title": "SGRNet: Spatially Guided Radiology Network for Structured Radiological Reporting of Head and Neck Cancer",
    "authors": [
      "Ayush Gupta",
      "Vinkle Srivastav",
      "Prateek Upadhya",
      "Amit Gupta",
      "Krithika Rangarajan",
      "Nicolas Padoy"
    ],
    "abstract": "Automated radiological report generation can alleviate clinical workloads and eliminate observer variability. However, standard free-text generation models pose hallucination risks in dense regions and fail under data scarcity. We address these challenges in Head and Neck Cancer (HNC) from contrast-enhanced CT (CECT) imaging. To enforce factual safety, we reformulate report generation as an anatomically grounded, multi-label, structured reporting task, predicting localized tumor involvement across a hierarchical clinical schema. To bridge the visual gap from missing metabolic imaging (e.g., PET), we introduce SGRNet (Spatially Guided Radiology Network), incorporating two low-cost spatial priors: automated organ segmentations and weakly supervised tumor localization maps modeled via 3D Gaussian heatmaps. These priors are dynamically integrated via spatial feature modulation to guide the network toward subtle tumor-induced structural alterations. Evaluated on a multi-centric dataset of 184 paired HNC CECT volumes and reports, on five clinically salient, densely packed anatomical subsites, SGRNet achieves a mean Average Precision (mAP) of 0.60, an 8.8 percentage-point absolute improvement over strong volume-only 3D baselines.",
    "published": "2026-08-29T09:01:52Z",
    "updated": "2026-08-29T09:01:52Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29153"
  },
  {
    "id": "2608.29145",
    "title": "STARLINC: Satellite Trail Artifact Removal using Inter-Frame Correlation",
    "authors": [
      "Shingeon Kim",
      "Hyeyoon Lee",
      "Dain Kwon",
      "Kanghyun Choi",
      "Sunjong Park",
      "Mi-Ryang Kim",
      "Jeong-Eun Lee",
      "Jinho Lee"
    ],
    "abstract": "The rapid expansion of low Earth orbit satellites such as Starlink is increasingly contaminating astronomical surveys. In practice, contaminated images are often identified through inspection. However, modern surveys generate terabytes of data each night, making manual screening infeasible and necessitating reliable automated methods for satellite trail removal. Unfortunately, existing general-domain line detection methods fail to generalize to astronomical images due to domain mismatch, which are mostly grayscale with sparse bright stars and have a low signal-to-noise ratio. Moreover, training new models from scratch is impractical due to the lack of large-scale annotated astronomical datasets. To address these challenges, we introduce STARLINC, the first ML-based framework for satellite trail removal without requiring tedious pixel-level annotation of astronomical images. STARLINC combines synthetic satellite trail generation for training, inter-frame differential maps from temporally adjacent exposures to highlight transient trails, and heatmaps to provide additional localization cues for pixel-level segmentation. Extensive experiments on real-world data demonstrate substantial improvements over baselines, establishing STARLINC as a scalable solution for next-generation astronomical surveys. Code is available at https://github.com/starioKim/STARLINC.",
    "published": "2026-08-29T08:42:20Z",
    "updated": "2026-08-29T08:42:20Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.29145"
  },
  {
    "id": "2608.29139",
    "title": "More Perspectives, Stronger Signals: Multi-Perspective Enhancement and Progressive Fusion for Multimodal Entity Representation Learning",
    "authors": [
      "Chenyi Xiong",
      "Yan Zhang",
      "Jing Hu",
      "Ziyue Qin",
      "Kui Xiao",
      "Xiaopan Lyu",
      "Xiaoju Hou",
      "Zhifei Li"
    ],
    "abstract": "Learning effective multimodal entity representations is fundamental for reasoning tasks such as multimodal knowledge graph completion (MMKGC). However, existing methods often suffer from semantic over-smoothing within modalities and ineffective noise filtration across modalities, particularly under sparse or ambiguous conditions. To overcome these limitations, we propose PrismF, a unified framework that synergizes multi-perspective enhancement with progressive fusion to extract stronger signals from diverse inputs. PrismF enhances fine-grained intra-modal semantics through a multi-perspective mechanism that decomposes each modality into complementary views and constrains them with a decoupling loss to reduce representation collapse. Furthermore, it improves cross-modal integration through a progressive fusion strategy that dynamically calibrates inter-modal interactions, enabling the model to emphasize informative signals while suppressing noisy or unreliable ones. Extensive experiments on three public benchmarks show that PrismF achieves the strongest overall performance, including relative improvements of 4.04% in MRR and 11.17% in Hits@1 on KVC16K. Our code can be found at https://github.com/HubuKG/PrismF.",
    "published": "2026-08-29T08:29:43Z",
    "updated": "2026-08-29T08:29:43Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.29139"
  },
  {
    "id": "2608.28468",
    "title": "Real-time virtual circuits for plasma shape control via neural network emulators: experimental demonstration on MAST Upgrade",
    "authors": [
      "Nicola C. Amorisco",
      "Kamran Pentland",
      "Adriano Agnello",
      "George K. Holt",
      "Alasdair Ross",
      "Matthew J. Marshall",
      "Edward Jones",
      "Graham J. McArdle",
      "Charles Vincent",
      "Timothy Nunn",
      "Martin Kochan",
      "Pedro Cavestany",
      "Aran Garrod",
      "Stanislas Pamela",
      "James Buchanan"
    ],
    "abstract": "Conventional plasma shape control in tokamaks relies on virtual circuits (VCs) that are computed offline from linearisations around a small, tailored number of reference equilibria, and deployed as expertly prepared schedules during the discharge. Here, we report on the first experimental deployment of real-time VCs. We replace pre-set look up tables with VCs updated in real time using surrogates of the plasma response. Both the existing control architecture and the interpretability of VC-based control are retained. Previous work showed that neural network emulators can produce accurate VCs, and validated their performance in closed-loop shape control simulations. Here, we report their first experimental validation on MAST Upgrade (MAST-U). Dedicated experiments spanning different scenarios, including prescribed shape perturbations, feedback-driven divertor-leg motion, and strongly evolving plasma configurations, show that real-time VCs can realise plasma shape control tasks within the MAST-U plasma control system. These results establish the experimental feasibility of real-time linearisations as a practical extension of conventional plasma shape control in tokamaks. The present implementation demonstrates a central step towards a simpler control workflow, in which manually constructed, phased VC schedules are replaced by VCs generated automatically online from a trained surrogate model, without scenario-specific retraining.",
    "published": "2026-08-28T15:55:27Z",
    "updated": "2026-08-28T15:55:27Z",
    "categories": [
      "physics.plasm-ph",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.28468"
  },
  {
    "id": "2608.28461",
    "title": "Anatomy-Aware Promptable Segmentation with Online Interactive Training for AUTOPET V",
    "authors": [
      "Pablo Lozano-Jimenez",
      "Sergio Romero-Tapiador",
      "Ruben Tolosana"
    ],
    "abstract": "We present an anatomy-aware, promptable model for whole-body lesion segmentation in FDG and PSMA PET/CT, developed for the AUTOPET V challenge. The proposed method is built as family of nnU-Net-based models and trained in two stages: i) a pre-training stage that produces a strong initial segmentation, and ii) an online interactive stage that learns to exploit scribble prompts, refining the prediction over successive interactions. Anatomical context is incorporated through organ supervision using a single shared head that predicts lesions and organs from the same features, which reduces false positives arising from physiological uptake. Also as the tracer (i.e., FDG/PSMA) is not provided at inference, we add a tracer classifier based on image processing and a random forest over coronal MIP features, routing each study to a combined FDG+PSMA model or to a PSMA-specific model. Across four-fold cross-validation the organ-supervised model achieves the best and most stable performance, the interactive stage improves the Dice score monotonically with each prompt, and PSMA-specific training yields the strongest tracer-wise results.",
    "published": "2026-08-28T15:49:58Z",
    "updated": "2026-08-28T15:49:58Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.28461"
  },
  {
    "id": "2608.28460",
    "title": "LayerRecall: A State-Conditioned Memory Router for Long-Horizon Consistency in Video Generation",
    "authors": [
      "Yixuan Ding",
      "Jiahao Kong",
      "Wei Huang",
      "Ruijie Quan",
      "Yi Yang"
    ],
    "abstract": "Autoregressive video diffusion enables scalable long-video generation by producing chunks from a bounded recent context. While recency-based caching preserves local continuity, it evicts historical cues needed when subjects, objects, scenes, or attributes reappear. Existing memory mechanisms expose models to nonlocal history, but access alone does not ensure effective use. Our analysis reveals that video DiT layers exhibit distinct preferences for current, recent, and distant context, suggesting that long-range memory requires deciding both what to retrieve and where to use it. We introduce LayerRecall, a current-conditioned, layer-selective memory router that retrieves relevant historical K/V states and injects them only into backbone-specific memory-sensitive layers while preserving local attention elsewhere. To reduce reliance on scarce high-quality long-horizon videos and explicit memory-allocation labels, we further propose Cross-Horizon Prediction Matching (CHPM), which uses a privileged long-context reference to supervise the bounded-memory router in prediction space. Across 100 multi-shot evaluation prompts, LayerRecall achieves the best overall results on MemoBench and MovieBench while matching its backbone on VBench-Long, demonstrating stronger long-range recovery without sacrificing local continuity. Qualitative analyses further reveal memory-guided self-correction, whereby initially mismatched local attributes return to their historical appearance without resetting ongoing motion or scene structure. Additional analyses show cross-backbone portability and negligible inference overhead.",
    "published": "2026-08-28T15:49:13Z",
    "updated": "2026-08-28T15:49:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.28460"
  },
  {
    "id": "2608.28455",
    "title": "ARC-CT: Anatomy-Routed Contrastive Vision-Language Learning for 3D Chest CT",
    "authors": [
      "Huseyin Umut Isik",
      "Mehmet Alp Ozaydin",
      "Sila Kurugol",
      "Şeyda Ertekin"
    ],
    "abstract": "Contrastive vision-language learning uses paired chest CT volumes and radiology reports to learn abnormality classifiers without manually annotated labels. However, two characteristics of chest CT challenge conventional global contrastive learning. First, many critical abnormalities are small or anatomically localized, and pooling an en- tire volume into a single embedding may dilute their visual evidence. Second, the standard contrastive objective treats every other scan in a batch as a negative. Because many chest CTs share abnormalities, this objective incorrectly pushes co-positive pairs apart. We propose Anatomy-Routed Contrastive Learning for 3D Chest CT (ARC-CT), a region-aware framework that addresses these limitations using only la- bels extracted from reports by an LLM, with no manual annotations or bounding boxes. ARC-CT combines three components: (1) an Anato- myQFormer localizing evidence via queries constrained by automatically generated organ masks; (2) a label-Jaccard soft InfoNCE objective in- tegrating the standard one-hot target with the label-set overlap of each pair, which reduces false-negative penalties between studies that share clinical findings; and (3) an organ-level alignment loss connecting mask- pooled visual features to organ-specific report text extracted offline with a large language model. ARC-CT achieves a 0.86 mask-free macro AUC across 18 abnormalities using a compact 3D ResNet-18 backbone. Over- all, ARC-CT outperforms both comparable efficient baselines and sev- eral larger transformer models. Our code and weights are available at https://github.com/arc-ct/arc-ct.",
    "published": "2026-08-28T15:45:33Z",
    "updated": "2026-08-28T15:45:33Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.28455"
  },
  {
    "id": "2608.28453",
    "title": "Prompt-Guided Interactive Segmentation of Interstitial Lung Disease in Thoracic CT",
    "authors": [
      "Vasilis Dedousis",
      "Lubnaa Abdur Rahman",
      "Lorenzo Brigatο",
      "Ethan Dack",
      "Andreas Christe",
      "Christoph Frank",
      "Manuela Funke-Chambour",
      "Justus Roos",
      "Adrian Huber",
      "Lukas Ebner",
      "Stavroula Mougiakakou"
    ],
    "abstract": "Accurate segmentation of interstitial lung disease (ILD) patterns is essential for quantitative disease assessment and longitudinal monitoring. However, existing approaches remain limited by relying on dense annotations and producing static predictions that cannot be refined, motivating interactive approaches. While promptable models show promise in interactive segmentation, their adaptation to ILDs remains largely unexplored. To address this gap, we investigate prompt-guided foundation models for ILD refinement and present, to the best of our knowledge, the first adaptation of MedSAM2 for interactive 3D ILD segmentation on thoracic CT. We investigate three fine-tuning strategies and multiple clinically motivated prompts: bounding-boxes (BBox), point, lasso, and scribble. On a dataset spanning seven ILD patterns and healthy lung tissue, full model fine-tuning performed best, improving the average Dice score by 4.7 percentage points over MedSAM2.While BBox prompts achieve the strongest performance, non-native MedSAM2 interactions such as lasso and scribble prompts also prove effective. Finally, we present and evaluate a proof-of-concept end-to-end workflow in which MedSAM2 is initialized from an automatic segmentation prior and subsequently refined using radiologist prompts. Model weights and plug-ins made available at: https://github.com/AIHNlab/ILD-SemiSegTool.",
    "published": "2026-08-28T15:43:25Z",
    "updated": "2026-08-28T15:43:25Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.28453"
  },
  {
    "id": "2608.28447",
    "title": "Learning to Use Tools: Reinforcement Learning for Tool-Integrated Mathematical Reasoning",
    "authors": [
      "Minghui Xu",
      "Zi Wang"
    ],
    "abstract": "Current large language models (LLMs) increasingly benefit from external tool integration, especially for tasks requiring reliable computation and verification. Motivated by this, we study calculator tool calling for improving mathematical reasoning on the Countdown task. We first analyze reasoning failures and find that calculation errors account for a substantial portion of incorrect responses. We then construct supervised fine-tuning datasets to teach the model useful tool-use patterns and how to interpret returned outputs. Building on this tool-formatted policy, we apply several on-policy reinforcement learning methods, including RLOO, RLOO++, GRPO, and DAPO, using automatically verifiable final-answer rewards. To enable a more reliable evaluation, we construct a fresh 1,024-problem held-out Countdown benchmark with no exact overlap with the training data. Our results show that calculator tool integration consistently improves both SFT and RL baselines, yielding roughly 10 percentage-point gains across pass@k. Among the RL methods, Tool-DAPO achieves the strongest performance, improving pass@1 from 35.8% for Tool-SFT to 66.0%. Further analysis shows that RL encourages more effective tool use even when only final-answer rewards are provided. These findings suggest that tool integration reduces arithmetic and verification errors, while RL increases the probability of correct reasoning traces.",
    "published": "2026-08-28T15:35:03Z",
    "updated": "2026-08-28T15:35:03Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.28447"
  },
  {
    "id": "2608.28439",
    "title": "Fidelity Is Not Enough: Dispatch-Level Instrumentation for Agentic Datasheet Extraction",
    "authors": [
      "Qing Ye",
      "Meng-Hsuan Lin"
    ],
    "abstract": "One model passed our fidelity check without ever opening the datasheet. We found it while qualifying models for an internal extraction service: a structured-output constraint had silently disabled tool use, and the model answered anyway, with fabricated source text. Only the per-tool trace exposed it. Fidelity -- whether an extracted value matches the source -- is the standard measure for agentic document extraction, and it scores that run a success. We therefore log every tool call in an agentic benchmark of 25 hand-curated claims over three components, with 12 more on a fourth, 37 in all. From that dispatch record we build two instruments: a rule-based failure-attribution classifier, and a silent-failure detector whose two rules check only which tools were called, never the extracted value. The detector raises no flag on 207 clean fidelity-passing extractions across three model families, and recovers all 50 planted faults that withhold exactly the tools its rules check. The two results are not symmetric: the first bounds the false-positive rate, the second is recall by construction, and detection power against runs that call their tools and still answer wrongly is unmeasured. A second, independent oracle, a causal chamber that tests whether the datasheet's claims hold under physical measurement, is intentionally partial: it confirms only what the apparatus can exercise, a verifiable envelope of 2 of those 37 claims, and we give a taxonomy of why the rest are not physically gradable. Under a controlled perturbation, fidelity passes throughout while the chamber verdict flips exactly at the measurement uncertainty. Across three deployed model stacks (one destabilised by its serving stack, not by any capability gap) the tool layer buys portability and observability rather than accuracy, and earns its premium only once a document outgrows the context window.",
    "published": "2026-08-28T15:25:12Z",
    "updated": "2026-08-28T15:25:12Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.28439"
  },
  {
    "id": "2608.28433",
    "title": "Prove2Me: An Open Collaborative Platform for Scaling Math Formalization",
    "authors": [
      "Shuze Chen",
      "Kunal Marwaha",
      "Xiaoyang Lu",
      "Henry Yuen",
      "Tianyi Peng"
    ],
    "abstract": "Proof assistants such as Lean 4 promise the paradigm of formally verified mathematics, but large-scale formalization projects have faced major barriers to entry, including the need for expertise in formal verification (as well as the underlying mathematics) and the significant time required for writing formal proofs. AI coding agents have dramatically reduced these barriers; human users can now use natural language to prompt agents to write complex proofs in Lean. This opens up the intriguing possibility of internet-scale mathematical collaboration involving both humans and AI agents, where correctness is machine-checked. To realize this possibility, we introduce Prove2Me (https://prove2.me), an open collaborative platform for formalizing mathematics. Users launch formalization \"missions\", to which AI agents contribute formal proofs toward completion. We designed mechanisms and a specialized harness in Prove2Me that enable large-scale collaboration so that agents can build on one another's work and freely reuse existing results. In doing so, Prove2Me aims to turn math formalization into a scalable, crowd-sourced effort open to anyone with an agent.",
    "published": "2026-08-28T15:16:25Z",
    "updated": "2026-08-28T15:16:25Z",
    "categories": [
      "cs.AI",
      "cs.LO",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2608.28433"
  },
  {
    "id": "2608.28432",
    "title": "Are These Modules Worth Their Cost? A Paradigm-Level Accuracy-Cost Analysis of In-context Learning Text-to-SQL",
    "authors": [
      "Jiayan Lin",
      "Yujia Liu",
      "Zijin Hong",
      "Zheng Yuan",
      "Yilin Xiao",
      "Hao Chen",
      "Qinggang Zhang",
      "Xiao Huang",
      "Feiran Huang"
    ],
    "abstract": "Recent advances in in-context learning (ICL) text-to-SQL have substantially improved execution accuracy on public benchmarks by assembling increasingly elaborate pipelines around the base generator, yet existing studies typically report aggregate end-to-end accuracy, without quantifying the marginal accuracy-cost contribution of individual design choices. Consequently, providing a unified, paradigm-level cost-accuracy quantification remains a critical challenge for understanding and configuring modern text-to-SQL. To address this, we instantiate 17 paradigm-level configurations across five recurring modules of the ICL text-to-SQL pipeline under a single controlled implementation, and attribute each paradigm's marginal contribution and incurred cost across all four backbones spanning diverse capability levels and reasoning styles. Our analysis reveals that execution-feedback refinement is the only paradigm whose benefit holds universally at consistently low cost, while most other modules help only under backbone-dependent conditions. Token accounting shows that input demand is more closely tied to pipeline structure, whereas output demand is more sensitive to backbone generation behavior. Cross-module analysis further shows that stacking improves accuracy on most backbones, although how the gains compose varies with backbone capability. We also find that a fixed budget is often better spent engineering a more elaborate pipeline over a mid-tier backbone than upgrading to a frontier model with a lean pipeline. These findings distill into an actionable, cost-aware tiered guideline that transfers to five additional backbones without per-paradigm search.",
    "published": "2026-08-28T15:13:55Z",
    "updated": "2026-08-28T15:13:55Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.DB"
    ],
    "url": "https://arxiv.org/abs/2608.28432"
  },
  {
    "id": "2608.28429",
    "title": "Lossy Event Compression: From Event Stream Distortion to Task Performance",
    "authors": [
      "Zahra Rezaee",
      "Catarina Brites",
      "João Ascenso"
    ],
    "abstract": "Event cameras generate asynchronous, sparse data streams with microsecond temporal resolution, but in moderate-to-high motion scenes they can produce as many as hundreds of millions of events per second, creating significant bandwidth and storage challenges. Lossy compression is therefore essential for practical deployment, yet existing event stream distortion metrics fail to reliably predict compression-induced degradation at the task level, forcing codec optimization to rely on expensive task-specific evaluations. To address this gap, this paper introduces two fundamentally different event compression pipelines: i) an aggregation-based pipeline that converts the event stream into polarity-based histogram frames for compression with the conventional image codec JPEG 2000, and ii) a frame-free point cloud-based pipeline that codes events natively as 3D points using the octree-based codec G-PCC. Both pipelines are then assessed within a unified task-driven evaluation framework that relates event stream distortion to downstream application performance across four representative tasks: i) video reconstruction, ii) object detection, iii) optical flow estimation, and a delay-sensitive task iv) asynchronous feature tracking under a reference-relative protocol. Building on this framework, five classification-based distortion metrics are applied to event compression for the first time, to the best of the authors' knowledge, and benchmarked against existing event stream metrics. Experimental results demonstrate that the proposed metrics reliably predict compression-induced task degradation across different coding frameworks. This demonstrates that event stream distortion assessment can be an efficient alternative to repeated task-specific evaluation, providing direct guidance for the development and optimization of future event data coding solutions.",
    "published": "2026-08-28T15:12:56Z",
    "updated": "2026-08-28T15:12:56Z",
    "categories": [
      "cs.CV",
      "eess.IV"
    ],
    "url": "https://arxiv.org/abs/2608.28429"
  },
  {
    "id": "2608.27923",
    "title": "PCBnet: A Dataset and Automatic Construction of SPICE Netlists from Schematic Images",
    "authors": [
      "Zhen Huang",
      "Yuhao Gao",
      "Yuzhi Liu",
      "Daian Cheng",
      "Chengyuan Shao",
      "Yucheng Chen",
      "Yongjian Jia",
      "Futing Zhang",
      "Yichen Shi",
      "Wenhao Wang",
      "Zuyan He",
      "Yangbo Wei",
      "Zhanfei Chen",
      "Jinlong Yan",
      "Yu Zhang",
      "Haoying Wu",
      "Ting-Jung Lin",
      "Lei He"
    ],
    "abstract": "Printed circuit boards (PCBs) are fundamental to modern electronic systems, yet AI-driven PCB design automation remains constrained by the lack of large-scale paired schematic-netlist datasets. PCB schematics are particularly challenging due to diverse component types, complex wiring topologies, and noisy textual annotations. To address this gap, we present PCBnet, a large-scale PCB schematic dataset comprising over 300 real-world designs with annotated pins and paired SPICE netlists. It contains more than 50,000 component instances, 150,000 wires, 100,000 text regions, and 400,000 characters. We further develop an automated schematic-to-netlist pipeline that combines visual recognition, topology construction, and domain-knowledge-guided multi-agent correction. The proposed method achieves 94.54% component detection mAP, 98.57% text recognition accuracy, and 84.47% end-to-end connectivity accuracy. PCBnet provides a benchmark and data foundation for future AI-driven PCB design automation.",
    "published": "2026-08-28T04:58:03Z",
    "updated": "2026-08-28T04:58:03Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.27923"
  },
  {
    "id": "2608.27922",
    "title": "DensityKV: Density-Guided KV Cache Compression for Long Video Generation",
    "authors": [
      "Wenqu Zhao",
      "Xuemin Chi",
      "Xin Zhang",
      "Guoqing Ma",
      "Baorun Li",
      "Jianjie Fang",
      "Peizhi Tang",
      "Chen Gao",
      "Wei Wu"
    ],
    "abstract": "Autoregressive video diffusion models enable streaming generation through sliding-window attention, but each generated block is conditioned on previously generated content, causing appearance and motion errors to propagate recursively over time. Historical key-value (KV) memory preserves earlier subject and scene states and helps maintain long-horizon consistency. However, retaining every generated state creates a historical archive that grows continuously with the rollout, while recurrent states repeatedly add redundant coverage. To address this problem, we propose DensityKV, a training-free historical KV bank management strategy. DensityKV maintains a separate token-level KV bank for each attention head and measures local redundancy among the post-RoPE keys that directly parameterize attention routing using Soft-Riesz density. By constraining neighborhood-density growth after states enter the bank, DensityKV limits repeated historical accumulation while preserving coherent states from each completed generation block. Experiments across three autoregressive video generation backbones and multiple generation lengths show that, at the same upper bound on historical KV capacity, DensityKV improves long-horizon consistency and generation stability while keeping persistent historical storage bounded independently of rollout length.",
    "published": "2026-08-28T04:57:57Z",
    "updated": "2026-08-28T04:57:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.27922"
  },
  {
    "id": "2608.27240",
    "title": "UniFLM: United Segmentation and Measurement on Fetal Limb Ultrasonic Image",
    "authors": [
      "Zeen Zhou",
      "Qiuhua Chen",
      "Xiaojun Cao",
      "Changmao Chen",
      "Chao Sun",
      "Bo Du"
    ],
    "abstract": "Prenatal ultrasound examination is crucial for assessing fetal limb development and detecting congenital anomalies. However, existing artificial intelligence models often overlook fetal lethal skeletal dysplasias due to the lack of high-quality annotated data and a unified framework for multiple long bones. Moreover, generic segmentation models struggle with the inherent noise and semantic gaps in ultrasound images. To address these challenges, we construct the Fetal Limb Bones (FLB) dataset, comprising high-quality annotations for the humerus, femur, tibia-fibula, and radius-ulna. Furthermore, we propose UniFLM, a unified framework for automatic cross-plane segmentation and measurement. UniFLM incorporates a Semantic-Aware Skip Connection module to bridge the semantic gap between encoder and decoder features, and a Positive Sampling strategy to adaptively filter noise and extract essential semantic information. Finally, a Point Regression Mapping module is introduced to learn clinician annotation patterns for precise bone length measurement. Extensive experiments conducted on the FLB dataset demonstrate that the proposed UniFLM achieves superior accuracy and enhanced generalization capabilities in fetal long bone assessment compared to current state-of-the-art models.",
    "published": "2026-08-27T15:22:07Z",
    "updated": "2026-08-27T15:22:07Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.27240"
  },
  {
    "id": "2608.27239",
    "title": "A Point-of-Prescription Safety-Check System for Adverse Drug Reactions in Rural Bangladeshi Hospitals: A Feasibility Study",
    "authors": [
      "Shahir Abdullah"
    ],
    "abstract": "Adverse drug reactions (ADRs) are a major, largely preventable source of patient harm. In high-income settings, electronic health records store a patient's allergy history and warn prescribers when a contraindicated drug is ordered; in rural Bangladeshi public hospitals no such record exists for outgoing patients, a single physician may see on the order of one patient per minute, and a patient's history of severe reactions does not survive between visits. This paper proposes and outlines the evaluation of a lightweight, smartphone-based safety-check system for this setting. At registration a soft identifier (a phone number) is recorded; after the physician writes a prescription, its image is captured, the brand names are resolved to active ingredients using national drug references, and the ingredients are matched against the patient's recorded severe reaction history. The system is retrieval-based rather than predictive, and is silent by default, raising a flag only for high-risk matches a design grounded in the alert-fatigue literature. We frame the work as a feasibility study: we describe the proposed framework and an evaluation plan measuring workflow fit under high volume, usability, identity-resolution reliability, and retrospective detection of known reaction cases. We explicitly do not claim a clinical-outcome effect, which the low base rate of severe events places beyond a single-site feasibility study.",
    "published": "2026-08-27T15:21:51Z",
    "updated": "2026-08-27T15:21:51Z",
    "categories": [
      "cs.HC",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.27239"
  },
  {
    "id": "2608.27226",
    "title": "DINOcular: Self-Supervised Visuospatial Representations",
    "authors": [
      "Farkhat Almukhamedov",
      "Sami Azirar",
      "Hermann Blum"
    ],
    "abstract": "We introduce a self-supervised framework for learning joint visuospatial representations from RGB-D observations. While modern vision foundation models are trained almost exclusively on RGB images, many embodied systems have access to explicit depth sensing, which provides geometric information that monocular inputs cannot recover. Our method integrates depth-derived geometric priors with a visual backbone through inter-patch and intra-patch fusion, enabling the model to encode both appearance and spatial structure efficiently. The resulting representation shows promising improvements on 3D awareness while preserving semantic transfer: it outperforms prior methods of comparable scale on multiple 3D geometry benchmarks, and remains competitive when probed for standard RGB-D semantic segmentation tasks.",
    "published": "2026-08-27T15:09:32Z",
    "updated": "2026-08-27T15:09:32Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.27226"
  },
  {
    "id": "2608.27225",
    "title": "STEP: State-Aware Task Estimation and Planning with Multi-Modal LLMs for Human-Robot Collaboration",
    "authors": [
      "Maitrey Gramopadhye",
      "Prakash Baskaran",
      "Xiao Liu",
      "Songpo Li",
      "Soshi Iba"
    ],
    "abstract": "Effective human-robot collaboration in industrial settings requires robots to understand human intentions and assist with task planning, reducing workload. Recent works have explored the use of Multi-modal Large Language Models (MM-LLMs) for task planning in such data-scarce scenarios, leveraging in-context learning to interpret user actions and generate long-horizon action plans in natural language. However, MM-LLMs inherently lack an understanding of system states and do not track state transitions, often leading to hallucinated actions that deviate from the intended goal. Additionally, generating action plans in natural language tends to limit the generated plans to a high level, introducing ambiguity in action execution. To address these limitations, we propose the State-aware Task Estimator and Planner (STEP), which prompts a MM-LLM to explicitly estimate the state of the system and predict the state transitions resulting from executed actions. By forecasting future states alongside actions, STEP ensures task-convergent planning while also providing additional assistance parameters necessary for executing the predicted actions. We evaluate STEP in a simulated environment using a robot assembly task. Our approach outperforms the state-of-the-art by 32.8% in action executability and 14.8% in final-state error.",
    "published": "2026-08-27T15:08:36Z",
    "updated": "2026-08-27T15:08:36Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.27225"
  },
  {
    "id": "2608.27529",
    "title": "Revisiting Local Context for Long-Horizon Streaming 3D Reconstruction",
    "authors": [
      "Jiarong Han",
      "Jincheng Xiong",
      "Yuzhou Liu",
      "Linzhe Shi",
      "Changjie Wu",
      "Ning Guo",
      "Mu Xu",
      "Hang Zhang",
      "Ming Qian"
    ],
    "abstract": "Streaming 3D reconstruction from extremely long videos requires estimating camera motion and scene geometry online under bounded memory and computation. Early streaming models achieve causal, bounded-cost inference using finite context buffers or compact recurrent states, yet their estimates often deteriorate as sequences grow. Recent methods improve long-horizon stability by coupling short-range context with persistent or multi-level long-range memory. We pursue a different route: we keep the learned temporal state strictly local and formulate predictions whose targets remain independent of sequence length. We present ABot-Recon, a simple streaming model that caches KV features from only the preceding 11 frames. It predicts a point map in the current camera coordinate system together with an adjacent-frame relative pose. These predictions remain equivariant under changes of reference frame, and global poses and geometry are recovered through sequential composition. To reduce accumulated drift, a lightweight temporal refiner improves relative rotations using recent visual and motion context, while a composition-aware pose loss supervises multi-step pose composition. Extensive evaluations on challenging long-sequence benchmarks demonstrate the superior long-horizon performance of our local-context approach. On Oxford Spires, ABot-Recon achieves an ATE of 4.35 m and an RPE-R of $0.12^\\circ$, reducing both errors by approximately 40\\% relative to the best prior results.",
    "published": "2026-08-27T15:07:38Z",
    "updated": "2026-08-27T15:07:38Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.27529"
  },
  {
    "id": "2608.27214",
    "title": "CODE: Cross-Modal Calibration and Dynamic Suppression for Open World Object Detection",
    "authors": [
      "Hao Xu",
      "Zhaoning Shi",
      "Hehe Jin",
      "Bo Ma"
    ],
    "abstract": "Open World Object Detection (OWOD) built on multimodal foundation models often suffers from semantic ambiguity caused by unidirectional text-to-vision matching, while rigid outlier penalties may over-suppress unknown objects near known-class decision boundaries. We propose CODE (Cross-Modal Calibration and Dynamic Suppression), a unified inference-time framework with three complementary components. Cross-Modal Joint Confidence Calibration injects global visual prototypes to calibrate text-driven known-class predictions. Uncertainty-Guided Universal Objectness Enhancement measures classification hesitation from local visual responses to strengthen potential unknown objects. Dynamic Outlier Suppression via Confidence Margin replaces rigid suppression with a margin-aware adjustment that preserves ambiguous out-of-distribution instances. Experiments on the Real-World Detection benchmark demonstrate that, with the OWL-ViT L/14 backbone, CODE achieves 21.7 U-mAP and 40.8 K-mAP in Task 1, surpassing the previous state of the art by 2.6 and 2.3 points, respectively.",
    "published": "2026-08-27T14:56:19Z",
    "updated": "2026-08-27T14:56:19Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.27214"
  },
  {
    "id": "2608.27206",
    "title": "PACE: A Unified Condense-and-Extract Paradigm for Fast VLM Inference",
    "authors": [
      "Junjie Liu",
      "Shengyuan Ye",
      "Xu Chen"
    ],
    "abstract": "Vision-Language Models (VLMs) demonstrate exceptional visual reasoning capabilities, yet their inference costs escalate rapidly with the proliferation of visual tokens. Existing visual token pruning methods exhibit two fundamental limitations. First, most approaches operate exclusively post-vision encoder, leaving the substantial latency of the visual encoding phase unoptimized. Second, under strict token budgets, these methods often fail to jointly preserve holistic visual contexts and fine-grained details, leading to performance degradation. To address these bottlenecks, we propose PACE (Pixel-Adaptive Condense and Extract), a training-free inference framework that accelerates both the vision encoder and the Large Language Model (LLM) via a unified Condense-and-Extract paradigm. During the Condense stage, an Adaptive Pixel Compressor (APC) evaluates visual information density prior to encoding, adaptively downsampling redundant inputs, curtailing encoder computation while preserving global context and essential visual cues. In the Extract stage, a Dynamic Dual-Attention Extractor (DDAE) selectively retains visual tokens via a fusion of internal visual signals from the encoder and semantic signals from the LLM, safeguarding task-critical details. By integrating PACE into Qwen2.5-VL-7B, the model retains 93.8% of its original performance while utilizing only 10% of the visual tokens, yielding a 3.1x speedup in time to first token (TTFT). Our code is available at https://github.com/jjL357/PACE.",
    "published": "2026-08-27T14:52:09Z",
    "updated": "2026-08-27T14:52:09Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.27206"
  },
  {
    "id": "2608.27527",
    "title": "FVeinSyn: Synthetic Finger Vein Image Generator",
    "authors": [
      "Yifan Wang",
      "Jie Gui",
      "Adams Wai Kin Kong",
      "Baosheng Yu",
      "Changsheng Chen",
      "Qi Li",
      "Zhenan Sun",
      "James Tin-Yau Kwok",
      "Alex Kot"
    ],
    "abstract": "A major challenge in finger vein recognition is the lack of large-scale public datasets. Existing datasets contain few identities and limited samples per finger, restricting the advancement of deep learning-based methods. To address this, we propose FVeinSyn, a large-scale controllable synthetic data generation framework for finger vein. It explicitly decouples synthesis of vascular topology and imaging appearance to mitigate the limitations caused by insufficient training samples, such as inadequate identity diversity and restricted realism. Specifically: first, a finger vein identity generator models vascular topology under physiological and geometric constraints using stochastic L-systems, producing anatomically valid and identity-distinctive vascular patterns. Then, a cascaded region-aware GAN renders the topological maps into realistic near-infrared images. Finally, an intra-class diversity generator introduces geometric and optical perturbations to simulate realistic intra-class variations. Using FVeinSyn, we generated 500,000 images (10,000 vein identities, 50 samples per identity) and conducted extensive evaluations. Results show that FVeinSyn holds significant advantages in realism, identity diversity, vascular pattern consistency, and intra-class diversity. Models trained with FVeinSyn outperform real-data-only baselines a cross eight public datasets, achieving an average accuracy improvement of 27.43\\%. The code is available at: https://github.com/EvanWang98/Synthetic-Finger-Vein-Generator.",
    "published": "2026-08-27T14:46:43Z",
    "updated": "2026-08-27T14:46:43Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.27527"
  },
  {
    "id": "2608.27199",
    "title": "Vision-centric generative AI models: A software-hardware perspective",
    "authors": [
      "Eleni Tselepi",
      "Cristian Sestito",
      "Shady Agwa",
      "Themis Prodromakis"
    ],
    "abstract": "Vision generative artificial intelligence (AI) has emerged as one of the most rapidly advancing areas of deep learning. The explosion of multimodal models has made them widely associated with text-to-image applications running on large datacentres. However, vision generative models are equally needed in applications that operate under strict hardware constraints at the edge, including autonomous vehicles, agricultural sensors, and mobile devices. In this Perspective, we argue that progress in vision generative AI has been driven by output quality, with hardware evolving reactively to accommodate growing model demands. We quantify the parameter cost and energy efficiency of these models across a range of accelerator platforms, and map four generative model families against seven real-world application domains. Finally, we advocate a software-hardware co-design approach, where deployment constraints are considered from the start of the design process, ensuring that the \"right model\" runs on the \"right hardware\" to serve the \"right application\", making generative AI deployment sustainable and accessible across a much broader range of platforms.",
    "published": "2026-08-27T14:41:50Z",
    "updated": "2026-08-27T14:41:50Z",
    "categories": [
      "cs.CV",
      "cs.AR"
    ],
    "url": "https://arxiv.org/abs/2608.27199"
  },
  {
    "id": "2608.27198",
    "title": "Knowledge Distillation Driven Semantic NOMA with GAN Refinement for 6G Robotic Vehicle Networks",
    "authors": [
      "Qifei Wang",
      "Zhen Gao",
      "Li Qiao",
      "Ziwei Wan",
      "De Mi",
      "Dapeng Li",
      "Ying Sun"
    ],
    "abstract": "To achieve sustainable intelligent mobility, 6G-empowered robotic vehicles (RVs) require high-fidelity visual perception under stringent bandwidth and energy constraints. Semantic communication offers a spectral-efficient solution but suffers from severe interference in uplink non-orthogonal multiple access (NOMA) RV networks. To address this, we propose a knowledge distillation-driven and generative models-enhanced NOMA framework for robust and green RV communications, named KDG-SemNOMA. First, we develop a ConvNeXt-based deep joint source-channel coding (DeepJSCC) architecture with an enhanced attention feature (AF) module for dynamic channel adaptation. Second, to mitigate interference without inference overhead, an orthogonal transmission teacher model guides the NOMA student model via a two-stage knowledge distillation strategy. Finally, to address the over-smoothing artifacts of pixel-wise optimization, we introduce a channel-conditional GAN (cGAN). By explicitly taking the Stage-I initial reconstruction and channel states as conditional inputs, this module refines coarse outputs into high-fidelity images with realistic textures. Experiments on FFHQ-256 demonstrate that KDG-SemNOMA significantly outperforms state-of-the-art methods in both pixel-level accuracy and perceptual fidelity.",
    "published": "2026-08-27T14:41:21Z",
    "updated": "2026-08-27T14:41:21Z",
    "categories": [
      "cs.IT",
      "cs.CV",
      "eess.IV"
    ],
    "url": "https://arxiv.org/abs/2608.27198"
  },
  {
    "id": "2608.27194",
    "title": "Surrounded by Friends: Design and Evaluation of Immersive Layouts of Egocentric Network for Visual Analytics",
    "authors": [
      "Kentaro Takahira",
      "Takanori Fujiwara",
      "Wong Kam-Kwai",
      "Kento Shigyo",
      "Leni Yang",
      "Hiroaki Natsukawa",
      "Yalong Yang",
      "Huamin Qu"
    ],
    "abstract": "This paper explores design considerations for egocentric network layouts in immersive environments, providing fresh empirical insights that enhance egocentric network analysis. An egocentric network focuses on the topological and semantic relationships around a focal node (ego) and its neighboring nodes (alters), targeting local sub-networks rather than the whole network. Traditional desktop environments, limited by display constraints, often face visual clutter as node numbers grow. Building on recent findings that immersive environments enhance network analysis, we explore layouts tailored for these spaces. We begin by identifying essential design properties and dimensions for egocentric network layouts, taking into account the unique features of immersive environments. Based on these, we design four layouts-Cube, Cylindrical, Radial, and Spherical-that vary across design dimensions. We evaluate these layouts in a user study with 24 participants completing egocentric analysis tasks. Our study suggests that Cube performed well for tasks focused on ego-alter connection strength. In contrast, Spherical was more effective for understanding alter topology, minimizing occlusion, and efficiently utilizing 3D space. These findings inform design implications for future immersive egocentric network layouts.",
    "published": "2026-08-27T14:38:43Z",
    "updated": "2026-08-27T14:38:43Z",
    "categories": [
      "cs.HC",
      "cs.ET",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2608.27194"
  },
  {
    "id": "2608.27190",
    "title": "Unsupervised Adaptation of 3D CT Foundation Models for 3D CBCT Segmentation",
    "authors": [
      "Gauthier Miralles",
      "Loic Le Folgoc",
      "Vincent Jugnon",
      "Pietro Gori"
    ],
    "abstract": "Accurate 3D segmentation of cone-beam CT (CBCT) is critical for interventional and radiation therapy applications, yet it remains limited by two compounding challenges: the scarcity of annotated CBCT data and the large domain shift from diagnostic CT. Interventional CBCT exhibits fundamental modality differences from conventional CT, driven by acquisition and physics effects as well as contrast-specific vascular content, thereby limiting effective cross-modality model transfer. We propose a novel unsupervised domain adaptation (UDA) framework based on redundancy-reducing feature alignment, enabling 3D CBCT segmentation with no target-domain annotations or inference-time adaptation. Our framework is architecture-agnostic, seamlessly adapting both CNN-based and ViT-based foundation models. We evaluate our method on two challenging CT-CBCT liver segmentation benchmarks: one for interventional vascular procedures and one for radiation therapy, demonstrating that even large-scale pretrained segmentation networks require explicit feature-space bridging to generalize across acquisition modalities, and that our approach consistently outperforms existing pretrained foundation model and UDA strategies. To support reproducibility and benchmarking, we release the liver segmentations for a public CBCT dataset, along with the code, trained models, and weights.",
    "published": "2026-08-27T14:33:59Z",
    "updated": "2026-08-27T14:33:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.27190"
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
    "id": "2608.21950",
    "title": "Bulbul: A Dataset for Dialectal Arabic Speech Recognition",
    "authors": [
      "Ahmed Ashraf",
      "Aisha Alansari",
      "Fadel Al Abbas",
      "Nada Almarwani",
      "Samah Aloufi",
      "Saad Ezzini",
      "Maged S. Al-Shaibani",
      "Doaa Dalaq",
      "AbdelRahim A. Elmadany",
      "Muhammad Abdul-Mageed",
      "Mohamed Mehdi Trigui",
      "Dania Refai",
      "Layan Refai",
      "Mohamed Akrout",
      "Mustafa Jarrar",
      "Wasfi G. Al-Khatib",
      "Alaa Dalaq",
      "Darin El-Nakla",
      "Samir Abdaljalil",
      "Abdulrahman Al-Fakih",
      "Nour El Imane Zeghib",
      "Moussa Redah",
      "Salmane Chafik",
      "Mohamed El-Attar",
      "Rima Grati",
      "Sarah Kohail",
      "Malak Alkhorasani",
      "Khadijah Al Safwan",
      "Ismail M. Mudhaffar",
      "Ali Altam",
      "Ahmed Al-Shaikh",
      "Adnan Saeed",
      "Hamzah Luqman"
    ],
    "abstract": "Arabic automatic speech recognition (ASR) faces unique challenges due to diglossia, extensive regional dialect variation, and limited speech resources. Existing speech datasets often focus on single dialects or large-scale broadcast/web data, leading to trade-offs between linguistic diversity and annotation quality. We present BULBUL, a multi-dialect Arabic ASR dataset collected from 275 speakers in 11 Arab countries. BULBUL includes structured dialect and sub-dialect coverage, as well as recordings of classical Arabic and modern standard Arabic spoken by participants in their native dialectal accents to support accent-aware modeling. The quality of the recordings was ensured through a two-level human verification process. We further benchmark a range of recent ASR systems, establishing strong baselines for modern dialectal and accented Arabic ASR.",
    "published": "2026-08-22T13:27:12Z",
    "updated": "2026-08-22T13:27:12Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.21950"
  },
  {
    "id": "2608.21948",
    "title": "Sparse Multi-Stage Expert-Agent Routing for Complex Clinical Reasoning",
    "authors": [
      "Sike Xiang",
      "Shuang Chen",
      "Qian sun",
      "Jia Cheng",
      "Yusi Wei",
      "Amir Atapour-Abarghouei"
    ],
    "abstract": "Complex clinical reasoning requires models to update diagnostic hypotheses as new evidence emerges and to coordinate different medical specialities under limited consultation resources. Existing LLM-based clinical reasoning systems typically perform single-pass prediction or rely on fixed multi-agent workflows, making expert participation either static or unnecessarily exhaustive. We propose Sparse Multi-Stage Expert-Agent Routing, a language-based clinical reasoning framework that models diagnosis as a stage-wise routing process. Given progressively available clinical evidence derived from multiple modalities, the framework maintains an evolving case state and adaptively activates a sparse set of medical expert agents, supported by expert-specific memory across stages. To evaluate free-text diagnostic conclusions beyond surface similarity, we further introduce ClinFEScore, a fact-aware semantic evaluation protocol for clinical reasoning outputs. On reconstructed multi-stage cases from MAC and AgentClinic-NEJM, our framework reduces the average number of activated experts from 17.0 to 3.0 whilst maintaining strong fact-level diagnostic quality. On 200 real-world hospital MDT cases, ClinFEScore correlates strongly with clinician judgements (Spearman's $ρ=0.81$; Pearson's $r=0.87$), whilst our method achieves 91.5\\% clinician-verified diagnostic accuracy with approximately five expert-agent/LLM calls per case. These results support sparse stage-wise coordination as an efficient and clinically relevant approach to LLM-based clinical reasoning.",
    "published": "2026-08-22T13:23:30Z",
    "updated": "2026-08-22T13:23:30Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.21948"
  },
  {
    "id": "2608.21946",
    "title": "EDGE: Experience-Distillation for Guided Exploration in Agentic Reinforcement Learning",
    "authors": [
      "Can Xie",
      "Yuyi Zhou",
      "Wen Yang",
      "Ziyi zhang",
      "Siyao Song",
      "Yingzhuo Deng",
      "Shuo Ren",
      "Jiajun Zhang"
    ],
    "abstract": "Reinforcement learning with outcome-based objectives such as GRPO enables LLM-based agents to solve complex, long-horizon tasks, yet the reusable exploration patterns embedded in interaction trajectories are largely discarded after a single policy update. Existing experience-augmented approaches retrieve historical guidance at inference time, but they apply experiences without accounting for the policy's evolving capability and create persistent dependencies on external retrieval. We propose EDGE (Experience-Distillation for Guided Exploration), a framework that treats retrieved experiences as temporary training-time scaffolds and progressively internalizes their benefits into the parametric policy. Concretely, EDGE partitions each rollout group into experience-conditioned and experience-free trajectories to estimate and admit only positive marginal gains without extra sampling, then distills the induced behavior into the base policy via a reverse-KL objective on its own empirical support. A co-evolutionary experience bank further synthesizes guidance from emerging failure modes and prunes obsolete entries as the policy evolves. Across embodied, web, and search-based QA tasks, EDGE improves over strong RL baselines by up to 12.5 points and remains effective without inference-time scaffolds or a proprietary reflector. The code is available at https://github.com/xvolcano02/EDGE.",
    "published": "2026-08-22T13:16:25Z",
    "updated": "2026-08-26T15:51:09Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.21946"
  },
  {
    "id": "2608.21942",
    "title": "TessIndex: Capability Verified Identity System for the Agent Economy",
    "authors": [
      "Mehul Goenka",
      "Tejas Pathak",
      "Siddharth Asthana"
    ],
    "abstract": "Software systems have traditionally been organized around applications where human users act as principal decision-makers. Recent developments in agentic capabilities alter this paradigm: software agents now autonomously translate high-level goals into structured tasks, orchestrating tools, services and sub-agents to execute complex workflows. This evolution gives rise to an agent economy where these autonomous agents capture real economic value. However, the infrastructure required to support the agent economy fails across three critical dimensions: the absence of persistent identity infrastructure prevents systemic accountability in agentic workflows; capability claims remain self-declared not backed by verifiable execution evidence; and the disconnect between creator identities, agent performance, and project value hinders the economic valuation of agents as assets. While existing registries provide naming and discovery, unifying these features around a persistent identity anchor remains largely unaddressed. TessIndex is a capability-verified identity system for agent primitives that utilizes a dual-plane architecture: the blockchain records compact commitments for identity, ownership, and verification, while centralized servers maintain dynamic metadata for discovery, commerce, and reputation. It establishes: persistent identities across agent primitives to enforce systemic accountability in autonomous workflows; a predicate-based verification process replacing self-declared claims with cryptographic capability proof; an identity infrastructure that links agent performance to both project and creator identities while capturing value through tokenization. Ultimately, TessIndex serves as an integrated infrastructure that binds an agent's existence across capabilities, execution, and reputation into a single persistent identity.",
    "published": "2026-08-22T12:49:11Z",
    "updated": "2026-08-22T12:49:11Z",
    "categories": [
      "cs.AI",
      "cs.CR",
      "cs.MA",
      "cs.NI"
    ],
    "url": "https://arxiv.org/abs/2608.21942"
  },
  {
    "id": "2608.21941",
    "title": "Multimodal Prompt Learning with Irregular EHRs for Robust Monitoring of Critical Care Patients",
    "authors": [
      "Yixin Yang",
      "Yueyang Sun",
      "Weichen Liu",
      "Xianbing Zhao",
      "Sicen Liu"
    ],
    "abstract": "Accurate assessment of patients in intensive care units (ICUs) is essential for timely clinical intervention and improved patient outcomes. Multimodal electronic health records (EHRs), including structured physiological time series and longitudinal clinical notes, provide complementary information for critical care prediction. However, in real-world clinical settings, individual modalities may be partially observed or entirely unavailable, resulting in substantial performance degradation for existing multimodal models. To address this challenge, we propose a multimodal prompt-learning framework for robust clinical prediction under diverse missing-modality scenarios. The proposed framework introduces four complementary types of prompts: generative prompts, missing-signal prompts, missing-type prompts, and temporal prompts. Generative prompts construct surrogate latent representations for unavailable modalities, while missing-signal prompts distinguish observed representations from generated ones. Missing-type prompts condition the model on different modality-availability configurations, whereas temporal prompts perform condition-specific aggregation over temporally encoded clinical sequences. Together, these prompts enable the model to capture missingness-aware intramodal dependencies and cross-modal interactions within a unified architecture. Extensive experiments demonstrate that our method outperforms existing approaches across evaluation metrics on two missingness settings. Ablation and robustness analyses further verify the complementary contributions of the four prompt types and the effectiveness of the proposed framework for clinical prediction from incomplete multimodal EHR data.",
    "published": "2026-08-22T12:49:01Z",
    "updated": "2026-08-22T12:49:01Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.21941"
  },
  {
    "id": "2608.21937",
    "title": "C$^2$Path: Class-Conditional Pathway Decoupling for Vision-Language Incremental Object Detection",
    "authors": [
      "Lecheng Xu",
      "Feifei Shao",
      "Ouyangzi Ye",
      "Zhen Wang",
      "Lin Li",
      "Kexin Li",
      "Zhao Wang",
      "Changqin Huang"
    ],
    "abstract": "Incremental Object Detection (IOD) aims to enable detectors to continuously learn novel categories while preserving previously acquired knowledge. However, existing methods suffer from two forms of \\textbf{class knowledge coupling}: class boundary erosion induced by shared parameter updates and class representation entanglement arising from mixed feature encoding. We argue that effective incremental learning requires class-specific computational pathways that enable isolated parameter updates and separated class-wise injection. To this end, we propose \\textbf{C$^2$Path}, a class-conditional pathway decoupling framework for vision-language incremental object detection that leverages token-level class cues to establish dedicated and updatable computational pathways for different categories. Specifically, C$^2$Path introduces a category expert library and a class-conditional decoupling module. The expert library consists of learnable low-rank computational nodes that capture category-specific knowledge, while the decoupling module generates class-aware routing signals to dynamically compose \\textit{ClassLoRA} adapters from these experts, thereby forming class-specific computational pathways for isolated updates and separated injection across categories. Extensive experiments on COCO 2017 under multiple incremental learning settings demonstrate that C$^2$Path consistently outperforms state-of-the-art methods, providing an effective and scalable solution for continual category expansion in vision-language detectors.",
    "published": "2026-08-22T12:19:36Z",
    "updated": "2026-08-22T12:19:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.21937"
  },
  {
    "id": "2608.26185",
    "title": "Can You Say This for Me? Speaking Up by Proxy in Co-Located Discussion",
    "authors": [
      "Yue Shen",
      "Rehema Abulikemu",
      "Ryan P. McMahan",
      "Yan Chen"
    ],
    "abstract": "Equal participation in co-located discussion is important for effective collaboration, yet people often hold back when they anticipate negative interpersonal or professional consequences, especially when raising a point requires voicing it themselves. We present SecondVoice, a mixed-reality system that enables people to speak up through an embodied virtual proxy. By separating what is said from who says it, SecondVoice brings hesitant points into the live spoken discussion without putting the speaker on the spot. Using a private overlay, users specify their intent through a structured specification process rather than composing a full utterance. The system reformulates the input and voices it into the conversation through the proxy. We characterize a design space of participation channels under social risk. In a preliminary within-subject study (N = 16), we compare the complete SecondVoice system with an anonymous text-board channel across two group discussion tasks. Half of participants reported using SecondVoice for a point they did not say aloud, compared with 18.8% for the text board. Proxy-delivered points entered the spoken floor and were followed by multi-turn group engagement, which we did not observe after text-board posts. Participants described the channel as situationally valuable but identified tradeoffs around timing, ownership, and trust in reformulation.",
    "published": "2026-08-22T11:54:37Z",
    "updated": "2026-08-22T11:54:37Z",
    "categories": [
      "cs.AI",
      "cs.ET",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2608.26185"
  },
  {
    "id": "2608.21928",
    "title": "GuardianBench: A Same-Scene Instruction-Contrastive Benchmark for Latent Contextual Risk in Embodied AI",
    "authors": [
      "Zhesheng Zhang",
      "Jiahao Lu",
      "Wei Liu",
      "Cong Pan",
      "Jianhua Yang",
      "Yixiang Chen",
      "Hongyuan Yu",
      "Mengqi Zhang",
      "Kailin Lyu",
      "Zhumin Chen",
      "Keji He"
    ],
    "abstract": "In embodied AI, safety risk can be latent: a benign instruction and a safe scene become hazardous only when composed. Prior work has advanced embodied safety by varying visual contexts or evaluating execution-time dynamics, but the complementary axis of fixing the scene and varying only the instruction remains underexplored. We introduce GuardianBench, an instruction-contrastive benchmark grounded in international safety standards that isolates this latent contextual risk through 3,024 instruction-scene examples organized as same-scene Safe/Unsafe contrastive pairs across various hazard categories. Benchmarking state-of-the-art vision-language models (VLMs) reveals instruction-insensitive verdicts: models disproportionately approve both instructions under a given scene; across the primary models, average pair accuracy is only 24.1%. Our systematic rationale audit localizes the dominant failure: models fail to bind the instruction-relevant cues that differentiate safe from unsafe compositions. As a post-training case study, Verdict Log-Odds Supervision (VLOS), a lightweight verdict-level objective, substantially improves performance on open-weight backbones. Together, our latent contextual risk task formulation, standards-grounded contrastive benchmark construction, pair-level and rationale-level failure diagnosis, and benchmark-enabled verdict calibration establish GuardianBench as a controlled evaluation suite for exposing and improving safety reasoning over instruction-scene compositions under latent contextual risk.",
    "published": "2026-08-22T11:40:27Z",
    "updated": "2026-08-22T11:40:27Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2608.21928"
  },
  {
    "id": "2608.26184",
    "title": "TutorTrace: A Dataset and Taxonomy for Classifying Learner Behavioral States during AI-Assisted Programming Education",
    "authors": [
      "David Barron",
      "Xiaohang Tang",
      "Rezky Dwisantika",
      "Minsun Kim",
      "David H. Smith",
      "Jiaming Cui",
      "Yan Chen"
    ],
    "abstract": "AI programming tutors provide scalable support, yet lack the behavioral context human tutors rely on to adapt support to learners' needs. We present TutorTrace, a dataset and behavioral abstraction pipeline that makes learners' behavioral context visible and computable in real time from low-level IDE telemetry. Across four deployments in two introductory Python courses (N=480), TutorTrace captures approximately 180K telemetry events, 13,633 behavioral segments, and 27 continuously computed metrics. From this foundation, we derive a taxonomy of learner activity before the first AI query, between consecutive queries, and across the full session, enabling systems to respond not just to what learners say, but to what they have done leading up to the help-seeking moment. In a preliminary classroom evaluation, behavior-aware prompts were associated with a decrease in intervals between queries with no independent work from 50.0% to 20.7%. As an additional demonstration of downstream utility, we evaluate TutorTrace on two held-out prediction tasks: whether a learner will query within the next 60 seconds (AUROC=.726) and whether an upcoming query reflects guided or dependent help-seeking (AUROC=.717). Together, these findings show how behavioral context can enable adaptive AI tutoring at scale.",
    "published": "2026-08-22T11:40:23Z",
    "updated": "2026-08-22T11:40:23Z",
    "categories": [
      "cs.AI",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2608.26184"
  },
  {
    "id": "2608.21927",
    "title": "Bi-EZP: LLM-Guided Bilevel Program Evolution for Ensemble Zero-Cost Proxy Discovery",
    "authors": [
      "Yutao Lai",
      "Kezhao Lai",
      "Hai-Lin Liu"
    ],
    "abstract": "Zero-cost proxies enable neural architecture search (NAS) to rank candidate networks from statistics computed at initialization, avoiding repeated training. However, different proxies capture different properties and often produce inconsistent rankings across search spaces. Ensemble proxies can combine complementary signals, but automated discovery must optimize both discrete aggregation structures and their continuous coefficients, making structural quality difficult to separate from parameter calibration. We propose Bi-EZP, a bilevel framework that decouples these decisions. At the upper level, a large language model generates executable aggregation programs over four complementary base proxies with program-specific parameter bounds. At the lower level, covariance matrix adaptation evolution strategy (CMA-ES) optimizes the continuous parameters of each fixed program on an inner training split. The calibrated programs are then evaluated using Kendall's rank correlation on a disjoint validation split, enabling evolutionary selection to favor structures that generalize beyond their calibration data. Experiments on NATS-Bench and Network Design Spaces evaluate ranking performance across heterogeneous search spaces, and DARTS experiments assess downstream architecture search. Results show that separating program discovery from numerical calibration provides an effective approach to automated ensemble zero-cost proxy construction. The source code is available at: https://anonymous.4open.science/r/Bi-EZP-318D",
    "published": "2026-08-22T11:34:35Z",
    "updated": "2026-08-22T11:34:35Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.21927"
  },
  {
    "id": "2608.21926",
    "title": "AirAlign: Geometry-Aware Relative Pose Alignment for UAV Last-Meter Navigation",
    "authors": [
      "Jinyi Zhou",
      "Shuo Feng",
      "Yufei Wu",
      "Piji Li"
    ],
    "abstract": "Unmanned aerial vehicle (UAV) navigation in modern low-altitude environments requires more accurate pose alignment in the final approach stage for target information acquisition or manipulation, making \"last-meter\" navigation increasingly important. However, severe viewpoint and appearance variations make this task challenging. To tackle this problem, we propose AirAlign, a framework for RGB-only image-pair relative pose alignment for UAVs. AirAlign uses a pretrained visual geometry reconstruction model as the backbone to extract geometry-aware features from source-target image pairs. In addition, to better utilize the limited training data, we split the training set into multiple scene-disjoint folds for unseen cross-validation and model selection. During inference, the predictions of the selected models are averaged to form the ensemble output of the overall framework. Experiments on the PairUAV challenge at the ACMMM 2026 Workshop on UAVs in Multimedia demonstrate the effectiveness and robustness of our method, while comprehensive ablation studies validate the contribution of each component.",
    "published": "2026-08-22T11:32:41Z",
    "updated": "2026-08-22T11:32:41Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.21926"
  },
  {
    "id": "2608.21925",
    "title": "ESCRAG-R1: Retrieval-Augmented Reinforcement Learning for Emotional Support Conversation",
    "authors": [
      "Weichu Liu",
      "Yuxuan Hu",
      "Yirong Sun",
      "Ningning Mao",
      "Ziyun Zhang",
      "Jian Chen",
      "Mingyang Xu",
      "Qishan Zhong",
      "Chengming Li"
    ],
    "abstract": "Emotional Support Conversation (ESC) systems aim to provide holistic support by balancing professional therapeutic competence with natural empathy. However, existing methods struggle to simultaneously achieve structured, stage-aware reasoning and seamless empathy-expertise alignment, often resulting in an artificial splicing of clinical strategies and generic reassurance. To overcome these limitations, we propose ESCRAG-R1, a unified framework that integrates retrieval-based psychological guidance into Group Relative Policy Optimization (GRPO). By incorporating retrieval into the reinforcement learning loop, ESCRAG-R1 transforms external knowledge into a robust learning signal that stimulates explicit internal reasoning prior to generation and fundamentally reshapes the model's internal policy. To provide the reliable supervision required for this optimization, we construct ESC-Preference, a high-quality dataset based on a Client--Counselor--Judge evaluation framework that delivers precise, empathy-aware reward signals. Extensive experiments demonstrate that ESCRAG-R1 significantly outperforms existing baselines by mitigating superficial splicing and realizing a natural integration of professional guidance and empathetic expression. Code and datasets are released at https://github.com/Matcha-Liu/ESCRAG-R1.",
    "published": "2026-08-22T11:32:22Z",
    "updated": "2026-08-22T11:32:22Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.21925"
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
  }
];
