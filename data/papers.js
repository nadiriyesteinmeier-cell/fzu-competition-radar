window.PAPER_DATA_UPDATED_AT = "2026-11-18";
window.PAPER_ITEMS = [
  {
    "id": "2611.23229",
    "title": "Ambient LLMs: Data-Efficient Supervised Fine-tuning via Temperature Matching",
    "authors": [
      "Giannis Daras",
      "Marios Papachristou",
      "Adam Klivans",
      "Antonio Torralba",
      "Constantinos Daskalakis"
    ],
    "abstract": "Collecting large-scale, diverse, and high-quality post-training datasets for autoregressive language models is challenging. Consequently, Supervised Fine-Tuning (SFT) is typically applied to datasets significantly smaller than those used for pre-training, which leads to overfitting and the catastrophic forgetting of the tails of the data distribution. To prevent this collapse, we introduce Ambient SFT, a principled framework for leveraging imperfect predictions to augment the fine-tuning set. In our method, a \"frozen\" version of the pre-trained model serves as a noisy teacher that the fine-tuned model must match at a coarse level. In particular, we require that the high-temperature versions of the conditional distributions produced by the post-training model should match the high-temperature versions of the pre-training ones. The temperature hyperparameter controls the level of trust in the pre-trained model, with the limit $T\\to \\infty$ reverting back to regular SFT and $T=1$ to knowledge distillation. We demonstrate that our approach outperforms standard SFT across domain adaptation, instruction-tuning, and reasoning, leading for up to $21\\%$ average relative improvement to standard SFT.",
    "published": "2026-11-17T18:59:37Z",
    "updated": "2026-11-17T18:59:37Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.23229"
  },
  {
    "id": "2611.23228",
    "title": "Spool: Low-Latency Streaming Inference for Hybrid Vision-Language Models",
    "authors": [
      "Rui Ning",
      "Om Chabra",
      "Hari Balakrishnan"
    ],
    "abstract": "Applications such as visual accessibility agents and robotics require answering questions about recent video content promptly, over a bounded window of past frames (e.g., the last two minutes). Hybrid vision-language models (VLMs), which interleave attention with linear recurrent layers such as Gated DeltaNet (GDN), are attractive for this setting, but maintaining a sliding window is expensive. The reason is that recurrent layers combine all past frames into a shared state, so expiring old frames normally requires re-running the entire window through the model. We observe that the recurrent update is affine in the state with input-dependent coefficients, so the effect of each frame can be captured as a transformation that composes associatively. We present Spool, a training-free framework that caches per-frame state transformations and composes them efficiently as the window advances, removing expired frames from each recurrent layer's state without replaying frames through the backbone. Removal is exact within each layer; as with key-value eviction in attention, expired frames can retain residual influence through the cached inputs computed by earlier layers. We design a dedicated data structure and GPU kernels to achieve low caching and composition overhead. Across five open-source hybrid VLMs and four video reasoning benchmarks, Spool achieves the lowest p95 time-to-first-token in all 20 model-benchmark tests, reducing it by a geometric mean of $6.6\\times$ over the faster of two recent vLLM baselines, while improving accuracy by 2.3 percentage points on average.",
    "published": "2026-11-17T18:59:27Z",
    "updated": "2026-11-17T18:59:27Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.23228"
  },
  {
    "id": "2611.23226",
    "title": "FastFrames: Video Generation at Interactive Latency",
    "authors": [
      "Gene Chou",
      "Guandao Yang",
      "Fujun Luan",
      "Lars Mescheder",
      "Wei Dong",
      "Stephan Richter",
      "Vladlen Koltun"
    ],
    "abstract": "Autoregressive video diffusion models generate frames based on new observations and inputs, making them a promising medium for interactive visual experiences. However, existing models are orders of magnitude too slow for fluid interaction. This paper introduces FastFrames, a family of fast autoregressive video diffusion models that achieves interactive latency without compromising quality. We profile the inference pipeline of state-of-the-art models and find that operations often treated as fixed implementation details, such as VAE decoding and KV cache updates, in fact account for over half of end-to-end inference latency. We challenge the assumption that these components are indispensable and replace them with lightweight alternatives. Our 1.3B variant runs at 36 ms per frame, or 28 responses per second (RPS), on a single B200 GPU while matching the generation quality of a state-of-the-art model that is nearly 8x slower. Our 14B variant runs at 45 ms per frame, or 22 RPS, on an 8x B200 GPU node and yields significantly better visual quality and realism. We show that FastFrames enables real-time interaction in applications such as camera-conditioned and physics-conditioned video generation.",
    "published": "2026-11-17T18:59:13Z",
    "updated": "2026-11-17T18:59:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.23226"
  },
  {
    "id": "2611.23225",
    "title": "StringQFT: A Multiuse Textbook Resource for AI-Assisted Theoretical Physics",
    "authors": [
      "Xingyang Yu"
    ],
    "abstract": "We present StringQFT as a textbook collection for string constructions of quantum field theory and as infrastructure for AI-assisted theoretical physics. The collection comprises 18 volumes, 190 chapters and 3,795 pages, covering brane probes, brane webs, geometric engineering, F-theory constructions, wrapped M5-branes and exact worldsheet constructions. Its open-book benchmark inventory contains 1,073 items, including 499 with automatic finite-answer checking. For retrieval-augmented generation, it provides 1,371 section records linked to textbook sources and PDF locations, together with a local lexical retriever. Training-data preparation is illustrated by 21 private, source-linked examples. For agents, it exposes 19 calculation tools with specified inputs and finite domains, connecting tool use to textbook derivations. We illustrate these uses through specific questions, retrieved passages and finite calculations. The textbook collection and accompanying resources are available at https://github.com/xingyang-yu/StringQFT.",
    "published": "2026-11-17T18:58:40Z",
    "updated": "2026-11-17T18:58:40Z",
    "categories": [
      "hep-th",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.23225"
  },
  {
    "id": "2611.23219",
    "title": "Do LLM Agents Still Need to Be Told How to Self-Improve?",
    "authors": [
      "Shobhita Sundaram",
      "Cansu Sancaktar",
      "Phillip Isola"
    ],
    "abstract": "LLM agents increasingly drive their own learning. Self-improvement methods delegate various components of model optimization to the models themselves. As models become more capable, this motivates a basic question: do these increasingly capable models still need us to specify how they should self-improve? In this paper we study an autonomous paradigm in which, given basic primitives, resources, and a general goal for self-improvement, agents construct their own self-learning algorithm for context-based optimization. Using the setting of gameplay as a testbed, a frozen LLM agent is given a compute budget and tools for collecting experience and updating text documents, and allowed to freely experiment without an externally imposed loop or access to real-world data. We find that sufficiently capable models do self-improve under these conditions, demonstrating strategies that align with classic cognitive frameworks for self-regulated learning and constructs from machine learning literature on self-generated curricula. Furthermore, we study the extent to which the learned text artifacts transfer to external benchmarks, observing improvement across different game horizons, mechanics, and 3D navigation.",
    "published": "2026-11-17T18:57:10Z",
    "updated": "2026-11-17T18:57:10Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.23219"
  },
  {
    "id": "2611.23216",
    "title": "Higher-Scoring Coding Models Did Not Get More Work Done",
    "authors": [
      "Yining Hua"
    ],
    "abstract": "New coding models advertise themselves on score improvements of coding benchmarks. Yet no study has tested if a model that scores higher on these benchmarks gets more real work done. On June 12, 2026, a U.S. export control directive banned access to Claude Fable 5 for 19 days, which forced users to switch to other models. During this time, most former Fable 5 users switched to Opus 4.8 (11 points lower on SWE-Bench Pro compared to Fable 5). We treat this suspension as a natural experiment, where the people and projects stayed the same and only the model changed, so we could isolate the effect of Fable 5 on user productivity. We tracked GitHub pull requests of 297 Fable 5 users before, during, and after the suspension. We used 8,908 developers who stayed on Opus 4.8 all the time as the control group. We also repeated the comparison across five model upgrades before and after the suspension in 2026 (1,208 developers, 15,442 pull requests). Fitting a difference-in-differences model with developer and date fixed effects, we found that having access to Fable 5 increased the 7-day merge rate of pull requests by only 1.4 percentage points [-1.4; +4.3], which was not statistically significant. Similarly, no significant increases of merge rates were found with the upgrades (weighted mean: -0.9 percentage points [-1.9; +0.2]); all five estimates were negative (95% intervals included 0, did not differ from each other). We also did not observe a significant increase in the number of pull requests merged per week (+2.4% [-4.9%; +10.2%]).",
    "published": "2026-11-17T18:56:42Z",
    "updated": "2026-11-17T18:56:42Z",
    "categories": [
      "cs.SE",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.23216"
  },
  {
    "id": "2611.23212",
    "title": "EviSlide-MIL: Multi-Query Pooling and Shared Prediction for Class-Incremental Whole-Slide Image Classification",
    "authors": [
      "Zhouhan Qian",
      "Sicheng Chen",
      "Chad Wong",
      "Tianyi Zhang",
      "Enhui Chai",
      "Zeyu Liu",
      "Fei Xia"
    ],
    "abstract": "Histopathological analysis of whole-slide images (WSIs) plays a critical role in cancer diagnosis, and multiple instance learning (MIL) is widely adopted for WSI analysis under weak supervision. As new tumor subtypes are introduced, extending existing MIL models requires learning new classes while retaining knowledge of previously learned ones. This presents a class-incremental learning challenge, where models must acquire new classes with limited access to historical training data and recognize all learned classes without task identifiers at inference. A major obstacle is forgetting, as updates to feature aggregation and prediction modules can degrade performance on previously learned classes. To address this challenge, we propose \\textbf{EviSlide-MIL}, a class-incremental WSI framework that integrates multiple learnable queries per class with a shared prediction module. The queries aggregate frozen patch features into class-specific representations, while the shared prediction module limits parameter growth across incremental stages. By freezing queries associated with previously learned classes, EviSlide-MIL preserves their attention patterns for identical inputs, while experience replay and knowledge distillation further mitigate forgetting as shared parameters are updated. Experiments on eight tumor subtypes from The Cancer Genome Atlas demonstrate that EviSlide-MIL achieves improved performance and reduced forgetting compared with competing methods across most learning settings, demonstrating its potential for scalable and knowledge-preserving WSI classification. Code and pretrained models will be released.",
    "published": "2026-11-17T18:50:42Z",
    "updated": "2026-11-17T18:50:42Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.23212"
  },
  {
    "id": "2611.23211",
    "title": "Multimodal Masked Diffusion Autoencoder for Modeling Impaired Driving",
    "authors": [
      "John Gideon",
      "Anshul Gupta",
      "Megan Applegate-Kenton",
      "Kayli Battel",
      "Todd J Rowell",
      "Patricio Reyes Gomez",
      "Laporsha Dees",
      "Emily Sumner",
      "Avinash Balachandran",
      "Guy Rosman"
    ],
    "abstract": "Human cognitive state (e.g., distraction, stress), gaze, and behavior interact with the driving environment in subtle ways that AI could use to assist drivers, but ground-truth labels for human cognitive state levels are costly to obtain at scale. We propose a multimodal masked-diffusion autoencoder, ID-MAE, that adds a self-supervised objective to impairment prediction: alongside predicting the impairment label as a masked token, it reconstructs masked gaze and trajectory. To probe the effects of different modalities and types of impairments on model inference, we introduce DIVERT, a driving-simulator dataset containing 103 hours of driving data (n = 109) with ten impairment inductions spanning cognitive, visual, and emotional states, recorded with gaze, vehicle state, and scene video. We demonstrate how ID-MAE affords significant improvements in impairment inference results on both the DIVERT dataset and existing datasets, and enables strong results in additional tasks, such as trajectory and gaze prediction. For location-matched pairs, our model achieves a paired AUC of 0.706 for impairment detection on DIVERT, compared to 0.590 without reconstruction loss, improving over existing baselines. We probe the design space in terms of input modalities, masking scheme, positional encoding, attention mechanism, and decoding. We also investigate the interaction between various impairments in training and inference, demonstrating that visually demanding distractions are separable from cognitive distractions. Code and data will be available upon acceptance.",
    "published": "2026-11-17T18:50:22Z",
    "updated": "2026-11-17T18:50:22Z",
    "categories": [
      "cs.CV",
      "cs.LG",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2611.23211"
  },
  {
    "id": "2611.23209",
    "title": "Learning Grounded Reasoning from Human Gaze",
    "authors": [
      "Gabriel Sarch",
      "Declan Campbell",
      "Nicholas Budny",
      "Kia Ghods",
      "Katerina Fragkiadaki",
      "Jonathan D. Cohen",
      "Brenden M. Lake",
      "Taylor W. Webb"
    ],
    "abstract": "Human visual reasoning is driven by systematic exploration and extraction of task-relevant visual evidence. Human gaze provides a window into this process, making gaze a useful source of guidance for visually-grounded reasoning in vision-language models (VLMs). However, human gaze also includes noise and redundancies that may transfer poorly to VLMs. In this work, we investigate how human gaze data can be effectively leveraged to improve visual reasoning in VLMs, while maintaining alignment with human behavior. We collect 7,109 human gaze trials from a diverse and challenging set of visual reasoning tasks, and train grounded reasoning models with different forms of gaze guidance. Across evaluations in chart understanding, visual search, and counting, we find that using human gaze as a prior for grounded reasoning consistently outperforms supervision using the full gaze sequence. Based on these findings, we introduce GGR (Gaze-Guided Reasoner), which achieves greater human alignment and more reliable visual grounding while matching or outperforming leading grounded-reasoning baselines in accuracy. Reinforcement learning further improves task accuracy, gaze alignment, and grounding quality despite using no gaze supervision. Behavioral analyses show that gaze supervised models exhibit more visual exploration before arriving at an answer. Our results suggest that the value of human gaze lies in guiding spatial exploration and shaping reasoning behavior without requiring complete imitation of human behavior.",
    "published": "2026-11-17T18:49:33Z",
    "updated": "2026-11-17T18:49:33Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.23209"
  },
  {
    "id": "2611.23208",
    "title": "Distortion-Free Semantic Watermarks for Black-Box Generative Models",
    "authors": [
      "Aviv Yossef",
      "Or Patashnik",
      "Or Zamir"
    ],
    "abstract": "We present a provably distortion-free semantic watermarking algorithm that requires only black-box sampling access to a generative model and black-box access to a semantic embedding. A watermark is called distortion-free if, averaged over its secret detection key, it leaves the generator's output distribution unchanged; this provides a formal guarantee that watermarking does not reduce output quality. Conventional such watermarks are often brittle to transformations. This is especially problematic for images, where benign operations such as compression, cropping, or resizing change the entire pixel representation. Semantic watermarks therefore require detection to be robust to content-preserving transformations. Previous methods combining these properties rely heavily on specific white-box properties of the underlying model: either to autoregressive text generation or to diffusion-specific access, such as control of the initial noise or diffusion inversion. In contrast, our construction is fully generic: It only interacts with the generative model and the semantic embedding, a function that determines the notion of \"preserving content\" under which detection should be robust, via sample and query access. We then instantiate this framework for image generation. We characterize the two competing properties required of the semantic embedding: it should remain stable under transformations that preserve an image's content, but should distinguish independent generations from the same prompt. We train an image encoder directly for this tradeoff. The resulting encoder improves separation while maintaining stability over off-the-shelf alternatives and enables strong aggregate detection while remaining robust to various transformations. We demonstrate the effectiveness of our watermark scheme on both open-source and closed models, which is possible only due to restriction to black-box access.",
    "published": "2026-11-17T18:49:17Z",
    "updated": "2026-11-17T18:49:17Z",
    "categories": [
      "cs.LG",
      "cs.CR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.23208"
  },
  {
    "id": "2611.23206",
    "title": "Reading Scene States: Uncovering Safety Failures in Vision-Language Models",
    "authors": [
      "Tongxi Wu",
      "Yuyang Cheng",
      "Jiacheng Xian",
      "Menglin Yang",
      "Kai Chen",
      "Jian Zhang",
      "Yang Gao"
    ],
    "abstract": "Vision-language models (VLMs) can provide harmful assistance by interpreting visual events, even without an explicit request for the underlying harmful objective. We identify this \\textbf{scene-state safety vulnerability} and introduce \\textbf{SceneSafetyBench}, comprising 375 image--question pairs spanning Initial, Medium, and Ultimate scene states and five visual presentations. Across eight VLMs, scene-state inputs elicit harmful assistance with attack success rates (ASRs) of 45.6--72.3\\%. Comparative analysis across three VLMs shows that scene-state inputs most closely resemble QR-related images in their layer-wise safety-related signal profiles, while exhibiting lower average late-layer readouts and distinct signal dynamics during generation. To turn this vulnerability into a systematic attack, we propose \\textbf{S3TA}, which translates harmful objectives into scene states, queries image--question pairs independently, and assembles the responses. On seven MM-SafetyBench categories across eight open-weight and commercial VLMs, S3TA achieves a model-average ASR of \\textbf{71.2\\%, exceeding the strongest baseline by 6.1 percentage points}. Text-side filters and visual moderation provide limited protection. These findings highlight the need to safeguard the assistance models infer through scene-grounded reasoning, beyond screening input content.",
    "published": "2026-11-17T18:48:02Z",
    "updated": "2026-11-17T18:48:02Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.23206"
  },
  {
    "id": "2611.23205",
    "title": "Fine-Tuning Gemma 4 Edge Models for MATLAB Signal-Processing Code with SFT and QLoRA on a Laptop iGPU",
    "authors": [
      "Mehmet Altan Toksöz"
    ],
    "abstract": "Small language models that run on a laptop are attractive for writing signal-processing code offline, but they make systematic errors on digital signal processing (DSP) conventions. We apply supervised fine-tuning (SFT) to the Gemma 4 edge models E2B and E4B with 66 checked examples covering 11 signal-processing MATLAB subtasks, using low-rank adaptation (LoRA) and quantized LoRA (QLoRA) on the integrated GPU (iGPU) of a laptop, and deploy the 8-bit integer (int8) models with the adapters through OpenVINO. On held-out variants scored by deterministic checkers, the pass rate rises from 18/66 to 37/66 (LoRA) and 37/66 (QLoRA) for E2B and from 32/66 to 47/66 for E4B (QLoRA). Reading all 159 failing programs shows that the adapters remove most errors of convention, such as the sign of a lag, units and array shapes, but few errors in building signals and noise. Applied at run time, the adapter costs 17-19% of the generation speed.",
    "published": "2026-11-17T18:47:37Z",
    "updated": "2026-11-17T18:47:37Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.SE",
      "eess.SP"
    ],
    "url": "https://arxiv.org/abs/2611.23205"
  },
  {
    "id": "2611.22169",
    "title": "Not All Evidence Is Admissible: Evidence Governance for Tool-Augmented Medical Agents",
    "authors": [
      "Runxun Zhang",
      "Onofrio Antonio Catalano",
      "Jinqiao Wang",
      "Jingwei Wei"
    ],
    "abstract": "Tool-augmented medical agents treat whatever their tools return as evidence. We show that this default is costly: medical tools fail silently, and a frozen reasoner cannot ignore what enters its context, so many cases it would have answered correctly are flipped to wrong once tool outputs are added. We call this evidence hijacking. $\\mathcal{V}$-information explains the phenomenon: the reasoner has lost the option to ignore, so a tool output can carry negative usable information, and moving the decision of what to keep outside the reasoner restores that option. The theory further shows that part of any filtering gain comes merely from letting the reasoner see less, and only selection by content lets it see better. Building on this, we recast tool-augmented reasoning as evidence governance, which separates deciding what counts as evidence from the reasoner that answers, and propose context-independent evidence governance (CIEG), the first medical agent framework that rules, after acquisition, on whether each individual tool output may enter as evidence. Every tool output is written as a card that can be checked against the raw input; an independent checker that sees only the input and the cards decides which cards become evidence; and the reasoner answers from the admitted cards alone, with no training anywhere. On medical question answering, fundus glaucoma screening, and chest X-ray pneumonia classification, it achieves the highest accuracy among models of comparable scale, and significantly outperforms state-of-the-art tool-using agents and multi-agent systems built on the same backbone at lower cost.",
    "published": "2026-11-17T04:01:28Z",
    "updated": "2026-11-17T04:01:28Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.22169"
  },
  {
    "id": "2611.22164",
    "title": "HandRSI: Recursive Self-Improvement for Hand Pose Estimation",
    "authors": [
      "Zhekai Wang",
      "Luqing Luo",
      "Wenhao Yao",
      "Junjie Lu",
      "Huanan Zhu",
      "Feifei Gao",
      "Yuhua Jiang"
    ],
    "abstract": "Egocentric 3D hand pose estimators still miss hands at the image border, misplace occluded hands and jitter. Such failures are usually fixed by hand-written inference refinements and by fine-tuning, two interdependent steps that are tuned separately. We present HandRSI, a recursive self-improvement framework for a hand pose system that consists of a video estimator and its executable inference harness. In each round, coding agents refine the harness, and a change is accepted only if it improves a composite of all ten benchmark metrics on held-out data without significantly regressing any of them. The accepted harness then guides the estimator through selective distillation, which supervises hand presence and temporal consistency on frames without ground truth, while ground truth supervises pose. Since the updated estimator may change which refinements remain useful, the harness is re-validated on it. Starting from the released ACE-Ego-Hand model, five rounds reduce MPJPE-p by 35% on HOT3D and 11% on ARCTIC and roughly halve jitter. On HOT3D, HandRSI's MPJPE-p is 16% lower than that of ACE-Ego-Hand fine-tuned on the same ground truth. Under a unified protocol, it outperforms nine re-run published methods on all ten metrics of both benchmarks. Hypervolume selection on the accuracy-speed front yields Lite, Medium and Heavy systems running at 20.7 to 41.1 FPS. This report gives the full method, every stage of every round and the complete protocol. Code, evaluator, harnesses and weights are public.",
    "published": "2026-11-17T03:55:44Z",
    "updated": "2026-11-17T03:55:44Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.22164"
  },
  {
    "id": "2611.22161",
    "title": "What RL on Expert-Built Tasks Teaches Nemotron 3.5 Super",
    "authors": [
      "Sushant Mehta",
      "Edwin Chen"
    ],
    "abstract": "We post-train NVIDIA's Nemotron 3.5 Super (120B total, 12B active parameters) with reinforcement learning (RL) on five expert-built task datasets, one at a time: real-world software engineering, complex constraints, long-horizon tool use, professional chart understanding and enterprise document reasoning. Each run trains a fresh rank-32 LoRA adapter with CISPO on Tinker, with no supervised stage, and each adapter is compared with the base model on the same tasks, harness and settings. On twelve headline benchmarks, eight built by other groups and four by Surge AI, the gains range from +4.5 points on IFBench to +13.8 on GDP_pdf, which rises from 10.4% to 24.2%; SWE-bench Pro V2 rises from 86.9% to 92.1%, Terminal-Bench 2.1 from 63.9% to 70.3%, MultiChallenge from 58.3% to 66.6%, AutomationBench from 14.8% to 27.5% and Chartography from 39.4% to 50.6%. The document adapter, trained without API tools, also gains +8.0 points on AutomationBench. In attempts read side by side with the base model's on tasks each adapter newly solves, the base model's failures recur in a few modes, and each adapter does more often what the base model missed: the tool-use adapter finds the data and the rules before acting, the coding adapter writes its own test or scratch files on SWE-bench Pro V2, the constraints adapter carries earlier turns into its answers, the chart adapter measures the marks in code, and the document adapter reads AutomationBench's spreadsheets.",
    "published": "2026-11-17T03:48:06Z",
    "updated": "2026-11-17T03:48:06Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2611.22161"
  },
  {
    "id": "2611.22158",
    "title": "Centroid Spectral Coupling: Implicit Alignment and Representation Diversity in Self-Supervised Learning",
    "authors": [
      "M. Hadi Sepanj",
      "Benyamin Ghojogh",
      "Saed Moradi",
      "Paul Fieguth"
    ],
    "abstract": "Self-Supervised Learning (SSL) aims to align augmented views while preserving representation diversity and preventing collapse. Existing non-contrastive methods often address these goals using multiple weighted loss terms. We introduce Centroid Spectral Coupling (CSC), a single-term SSL objective that implicitly couples view alignment, representation diversity, and collapse resistance. CSC constructs centroids from independently normalized augmented-view pairs and applies a ridge-based spectral objective to their uncentered second-moment matrix. Preserving centroid magnitudes encodes view agreement while encouraging balanced representation energy across spectral directions. We establish an exact decomposition into nonnegative alignment and spectral-imbalance components, characterize the geometry of global optima, and derive finite-loss guarantees for alignment and diversity. We also show that complete constant-output collapse is a strict saddle in normalized representation space. Experiments on CIFAR-10, CIFAR-100, and Imagenette show that CSC achieves the highest linear Top-1 accuracy among the evaluated non-contrastive methods on all three benchmarks, and the highest kNN Top-1 accuracy on both CIFAR datasets. A ridge-parameter sensitivity study reveals an empirical alignment--diversity trade-off: increasing $κ$ strengthens view alignment but reduces representation effective rank. These results show that a unified spectral objective yields competitive visual representations without explicit contrastive negatives or separately weighted alignment and diversity penalties.",
    "published": "2026-11-17T03:41:50Z",
    "updated": "2026-11-17T03:41:50Z",
    "categories": [
      "cs.CV",
      "cs.LG",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2611.22158"
  },
  {
    "id": "2611.22152",
    "title": "Unsupervised Multi-modal Medical Image Registration via Invertible Translation",
    "authors": [
      "Mengjie Guo",
      "Jinming Duan"
    ],
    "abstract": "In medical imaging, the alignment of multi-modal images plays a critical role in providing comprehensive information for image-guided therapies. Despite its importance, multi-modal image registration poses significant challenges due to the complex and often unknown spatial relationships between different image modalities. To address this, we introduce a novel unsupervised translation-based multi-modal registration method, termed Invertible Neural Network-based Registration (INNReg). INNReg consists of an image-to-image translation network that converts multi-modal images into mono-modal counterparts and a registration network that uses the translated mono-modal images to align the multi-modal images. Specifically, to ensure the preservation of geometric consistency after image translation, we introduce an Invertible Neural Network (INN) that leverages a dynamic depthwise convolution-based local attention mechanism. Additionally, we design a novel barrier loss function based on Normalized Mutual Information to impose constraints on the registration network, which enhances the registration accuracy. The superior performance of INNReg is demonstrated through experiments on two public multi-modal medical image datasets, including MRI T1/T2 and MRI/CT pairs. The code is available at https://github.com/MeggieGuo/INNReg",
    "published": "2026-11-17T03:34:39Z",
    "updated": "2026-11-17T03:34:39Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.22152"
  },
  {
    "id": "2611.22151",
    "title": "EgoHandWAM: Probing the Role of Hand Motion in Egocentric World Action Modeling",
    "authors": [
      "Kailin Wang",
      "Haoxiang Jie",
      "Yaoyuan Yan",
      "Zhiyou Heng",
      "Zhaosong Li"
    ],
    "abstract": "How much does hand motion tell us about what a first-person camera will see next? EgoHandWAM forecasts three-dimensional wrist and fingertip trajectories and a future visual feature from the current image and recent hand states. We train on 751,065 EgoDex windows using a frozen DINOv2 encoder. On held-out development sessions, the action-only model reduces two-second wrist endpoint error from 60.26 to 56.48~mm relative to a stationary forecast. It still underestimates long reaches. Adding future-feature supervision gives nearly identical trajectory accuracy. With the recorded hand history, the visual head reduces smooth L1 error by 1.32\\% relative to copying the current feature. Shuffling histories across sessions erases this gain. In a separate four-task probe, adding recorded future displacements to observed context and future tracking-validity masks reduces visual-feature error by 3.93\\%. Masks alone give little improvement. A trajectory predicted from the same observations adds little. On two simulated RoboTwin tasks, substituting aligned human examples for an auxiliary batch of robot examples gives no consistent increase in task success across three training seeds.",
    "published": "2026-11-17T03:34:02Z",
    "updated": "2026-11-17T03:34:02Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.22151"
  },
  {
    "id": "2611.22148",
    "title": "Long-Context Generation Is a Sampling Problem (When You Turn Up the Heat)",
    "authors": [
      "Allen G. Roush",
      "Minh Nhat Nguyen",
      "Ravid Shwartz-Ziv",
      "Judah Goldfeder",
      "Sanjay Basu"
    ],
    "abstract": "Open-weight language models are widely observed to get worse the longer they generate. Often, attempts to fix this involve more training. At high temperature, The sampler, i.e. the rule that picks the next token out of the model's probabilities, decides whether long and agentic generation survives and/or thrives. We test 29 open-weight models from 1B to 122B parameters on ten established benchmarks plus needle retrieval out to one million tokens, covering SWE-bench Verified coding agents, long chain-of-thought reasoning, long-form writing, long structured output and long-context reading. Samplers that keep their pool of candidate tokens small and steady as temperature rises don't lose accuracy. Samplers that let in low-probability tokens fall apart. At temperature 2, coding agents running top-p, top-k or Top-H resolve 0 of 100 GitHub issues, while the same agents running top-nsigma resolve 46 to 62 and win every issue the two samplers disagree on, on three Qwen3.5 models. Over all benchmarks top-nsigma keeps a median 100% of its temperature-1 score where top-p keeps 26%. Counting how many tokens each sampler lets through explains why. In one Llama-3.1-8B story, going from temperature 1 to 2 grows top-p's pool from 4 tokens to 51,845 while top-nsigma stays at 3. Across 133 combinations of sampler setting and temperature, the typical pool size predicts judged quality (Spearman correlation of -0.77), and when we pick the pool at temperature 1 and only apply temperature afterwards, Top-H, min-p and p-less stop collapsing. At the default temperature of 1 most samplers perform about the same, We release all code and data to the public.",
    "published": "2026-11-17T03:30:03Z",
    "updated": "2026-11-17T03:30:03Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.22148"
  },
  {
    "id": "2611.22144",
    "title": "When does deep reinforcement learning pay off in HVAC supervisory control? Four small Modelica case studies trained directly on FMUs",
    "authors": [
      "Bingnan Zhao",
      "Harshala Gammulle",
      "Tharindu Fernando"
    ],
    "abstract": "Deep reinforcement learning (DRL) is often proposed for the supervisory control of heating, ventilation and air-conditioning (HVAC) systems. The reported gains are, however, difficult to interpret, because the baselines are often weak and the attainable optimum is seldom known. This paper examines four small, reproducible case studies based on an office building in Brisbane, Australia: pre-cooling under a time-of-use tariff; chiller staging with condenser water reset; chilled water supply temperature reset with a wet cooling coil; and chilled water storage under time-of-use prices and a demand charge. The plants were modelled with the Modelica Buildings library, and in three of the cases a soft actor-critic agent was trained directly on the exported functional mock-up unit (FMU). Each agent was compared with tuned rule-based controllers and, where practicable, with a near-optimal reference from hourly exhaustive search or dynamic programming with perfect foresight. In the two cases without storage the agent reached the near-optimal reference, but the margin above a well-chosen rule was small: 1.3% for condenser water reset and 0.18% for chilled water reset. In the latter case two common reset rules consumed more energy than a fixed set point. With a chilled water storage tank the margin was considerably larger. The agent outperformed both rules (-7.8%, compared with -3.9% and -6.3%) and adopted midday charging during the solar off-peak period, yet it obtained only about 45% of the saving achieved by the perfect-foresight schedule and did little to limit the demand peak. In the pre-cooling case a hand-tuned rule remained superior (-12.0% compared with -5.6%). These results suggest that studies of DRL for HVAC control should state the margin between the best rule and a near-optimal reference. Some practical difficulties encountered in training on co-simulation FMUs are also reported.",
    "published": "2026-11-17T03:29:06Z",
    "updated": "2026-11-17T03:29:06Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "eess.SY"
    ],
    "url": "https://arxiv.org/abs/2611.22144"
  },
  {
    "id": "2611.22141",
    "title": "CEVA: Complementary Evidence Verification via Frame-Level Reorganization for Short-Video Fake News Detection",
    "authors": [
      "Wenshen Yang",
      "Junfeng Hao",
      "Jing Li",
      "Decheng Liu",
      "Yangkunfei",
      "Shuyu Jiang",
      "Haizhou Wang"
    ],
    "abstract": "Short-video platforms are now a common way for the public to follow unfolding events. Their rapid, visually persuasive format also makes fake news easier to spread. Unlike text-image posts, short-video news interleaves multiple modalities and changing scenes, making it difficult to identify which frames verify a claim. Existing detectors either pool sampled frames homogeneously or select them by text-frame similarity. Both overlook that aligned frames may repeat a misleading claim, whereas less dominant context may challenge it. We present CEVA (Complementary Evidence Verification Approach), to our knowledge the first short-video fake news detection framework to explicitly organize frames by their evidential roles before multimodal fusion. Its Dual-Branch Complementary Reorganization (DBCR) module separates explicit-alignment frames from candidate complementary-context frames, and cross-modal fusion with bidirectional contrastive regularization operates on the reorganized evidence. On FakeSV and FakeTT, CEVA achieves the best overall results among the compared methods. Under fixed frame budgets and backbones, DBCR outperforms uniform, random, and similarity-based selection and improves two structurally different detectors. Together, these results establish pre-fusion evidence organization as an effective and transferable component of short-video fake news detection.",
    "published": "2026-11-17T03:27:36Z",
    "updated": "2026-11-17T03:27:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.22141"
  },
  {
    "id": "2611.22138",
    "title": "RoboTeam: Benchmarking Vision-Based Multi-Agent Control of Many Robot Arms in Real Time",
    "authors": [
      "Changxuan Fan",
      "Zhongwei Xie",
      "Boyi Zhang",
      "Shaoli Hu",
      "Chang Xu",
      "Xiyu Ren",
      "Yufei Li",
      "Qiao Xiao",
      "Huihao Jing",
      "Kawai Chung",
      "Wenbin Hu",
      "Hongyu Luo",
      "Lingyun Xie",
      "Yisen Gao",
      "Chunyang Li",
      "Haoyu Huang",
      "Wuganjing Song",
      "Yuxuan Liu",
      "Chiu Yeung Tang",
      "Fangneng Zhan",
      "Xi Yang"
    ],
    "abstract": "Multimodal agents can now control robot arms by calling tools and writing code. Existing benchmarks fall short in three ways: most test one or two arms on short tasks, many pause the world while the agent thinks, and many give it ground-truth object positions. We present RoboTeam, a simulated benchmark where agents control 4 to 16 robot arms in real time from camera images alone. Its 36 tasks are long jobs that the arms must do together, such as passing timbers or building a picture from hundreds of cubes. We start from the most flexible agent system, the adaptive system, where one agent decides when to fork delegates. With it, gpt-6.1-sol and opus-5.5 complete 28 and 27 tasks, and four other models at most 3. But at a high price: a typical task takes gpt-6.1-sol 3.5 hours and 218 million input tokens, and a third of its steps fail at least once and must be retried. We then compare it with three fixed systems: single-agent, hierarchical, and decentralized. All four complete a similar number of tasks but differ in time and tokens. The hierarchical and decentralized systems are faster but use up to 1.9 times the tokens, and the single agent uses fewer tokens but takes 1.6 times as long, so the adaptive system lies between them. Even so, no model or system is yet fast, cheap, and reliable at once. RoboTeam measures these limits where earlier benchmarks cannot: long multi-arm jobs, camera images only, and a world that never pauses.",
    "published": "2026-11-17T03:24:06Z",
    "updated": "2026-11-17T03:24:06Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.22138"
  },
  {
    "id": "2611.22136",
    "title": "Big Brains, Tiny Board: Pupavision, an Agentic Physical AI Instrument for Monitoring Drosophila Pupariation and Lifecycle Transitions",
    "authors": [
      "Joel Sadler",
      "Daniel Graham",
      "Melanie Worley"
    ],
    "abstract": "Many biology experiments are limited by the availability and ease of use of instruments that monitor and record them. For example, the timing of pupariation in the fruit fly Drosophila melanogaster, a widely used model organism, can provide biologically relevant information about growth regulation and is often recorded manually. Here, we present Pupavision, a small physical AI instrument built from a single-board Linux computer and a day/night camera for roughly 45 to 75 US dollars in parts. The key idea is that a frontier coding agent runs its agentic harness directly on the tiny board. The model thinks in the cloud, but the agent works on the device. The agent assists image capture, writes code to repair errors, and checks the experiment every day to keep raw data capture reliable. If recording stops, the researcher gets a ping on their mobile phone. A simple deterministic capture service records one image every ten minutes and never depends on the agent. We report a 26-day pilot in a fly incubator (about 3,580 frames), including eleven days in which the agent was logged out and capture continued, and a 51-hour outage whose cause led to the layered design. A researcher-in-the-loop workflow then produces per-vial pupariation curves by tracing selected pupae backward in time from a late reference frame. Future work will validate the assay for lifecycle tracking accuracy against expert-labeled data and expand real-time computer vision analysis. Pupavision offers a blueprint for do-it-yourself agentic instruments that put frontier intelligence on a tiny board, with deterministic code underneath. We present this as an early case study from a pilot lab deployment and contribute lessons learned toward a future where scientific domain experts are empowered by DIY agentic hardware.",
    "published": "2026-11-17T03:22:21Z",
    "updated": "2026-11-17T03:22:21Z",
    "categories": [
      "cs.AI",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.22136"
  },
  {
    "id": "2611.22132",
    "title": "DailyBrick: Language-Guided Synthesis of Brick Assembly Instructions",
    "authors": [
      "Hang Zhang",
      "Qijian Tian",
      "Yuan Xie",
      "Xuhong Wang",
      "Xin Tan"
    ],
    "abstract": "Generating a LEGO model from a user request is more than a plausible 3D shape generation. LEGO models require physical support per brick, and each brick should be placed unblocked. Current methods address this issue by training an expert large language model. We reduce the problem of generating extremely long context on all brick connections to that of writing a program that builds LEGO models like a human, considering each intermediate step could be executed. We introduce DailyBrick , a multi-stage agentic system that produces a LEGO model together with a brick-by-brick assembly instruction for human building and robot assembly. We design a multi-stage harness with roles to help LLMs generate more effectively. A versioned construction SDK compiles multi-level decisions, from semantic subparts to individual bricks, into canonical operations. An external Meta-Reviewer agent replays and inspects the generated package, verifies the model and its construction process, identifies failures, traces them to the responsible stage, and routes them to bounded repairs or to editable candidates for later skill or tool updates. Extensive experiments demonstrate that DailyBrick generates LEGO models based on simple user requests better than recent agentic systems, and show its utility in downstream applications such as robot manipulations on model assembly from instructions and brick sets (https://SpatialAgent.github.io/DailyBrick/).",
    "published": "2026-11-17T03:17:14Z",
    "updated": "2026-11-17T03:17:14Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.22132"
  },
  {
    "id": "2611.20805",
    "title": "An Efficient Training Paradigm for Image Restoration via Improved Fréchet Loss",
    "authors": [
      "Shanyuan Jie",
      "Wu Shi",
      "Xinqi Lin",
      "Kainan Yan",
      "Zian Wang",
      "Yingxue Pang",
      "Yan Wang",
      "Shijie Zhao",
      "Chao Dong"
    ],
    "abstract": "Diffusion-based image restoration achieves strong perceptual quality but typically relies on iterative sampling, leading to slow inference. Existing single-step methods often use diffusion distillation or adversarial training, complicating optimization. To simplify training, we propose FDIR, a framework for training single-pass generative restoration models through regression-style supervised optimization using directly computable objectives. To realize this paradigm, FDIR employs the Fréchet distance to match the feature distributions of restored and real images in frozen representation spaces, providing explicit distribution-level supervision. To better accommodate image restoration, we incorporate local patch features to capture fine-grained restoration discrepancies. Moreover, we introduce instance-adaptive statistics by combining the feature moments of each SR-HQ pair with synchronized historical statistics, allowing distribution matching to incorporate input-specific correspondence while retaining distribution-level context. FDIR optimizes only the LoRA parameters of the restoration backbone. Experiments demonstrate strong perceptual restoration quality and efficient training, suggesting a simpler paradigm for generative image restoration.",
    "published": "2026-11-16T09:50:08Z",
    "updated": "2026-11-16T09:50:08Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.20805"
  },
  {
    "id": "2611.20797",
    "title": "Correspondence-Free Camera Pose Estimation by Matching Moments",
    "authors": [
      "Subhransu S. Bhattacharjee",
      "Dylan Campbell",
      "Rahul Shome"
    ],
    "abstract": "The blind perspective-$n$-point (PnP) problem is to estimate the pose of a calibrated camera from 2D and 3D point sets with unknown correspondences. We show that, for complete, noiseless observations, fourteen permutation-invariant image moments up to order four identify a fixed camera pose for almost every 3D point set containing at least twenty points. Our learning-free method, MomentPnP, matches these moments between the observed 2D points and the projected 3D points to initialize a camera pose without correspondences and refines the pose and correspondence weights using expectation--maximization. Across the test sets of three benchmarks, our method reduces median rotation error by $5$--$170\\times$ relative to the best learned baseline, both with and without outliers. We recover accurate poses even with as many outliers as inliers. On dense ETH3D scans, pose accuracy improves as the point sets grow, even as individual correspondences become harder to resolve.",
    "published": "2026-11-16T09:44:04Z",
    "updated": "2026-11-16T09:44:04Z",
    "categories": [
      "cs.CV",
      "cs.LG",
      "cs.RO",
      "eess.IV",
      "math.OC"
    ],
    "url": "https://arxiv.org/abs/2611.20797"
  },
  {
    "id": "2611.20794",
    "title": "Regularizing Treatment Leakage for LLM-based Uplift Estimation",
    "authors": [
      "Bojing Feng",
      "Jinqiu Deng",
      "Zihan Hong",
      "Yuan Xue",
      "Wenqi Xiang",
      "Shuhan Wang",
      "Feng Xiao",
      "Shiwei Wang",
      "Zijiang Liu",
      "Shaomin Li",
      "Yongzhi Qi"
    ],
    "abstract": "Large language models (LLMs) provide semantic features for uplift estimation, but treatment-revealing text can induce prediction shortcuts that do not transfer to deployment. We propose \\emph{LLM-based Uplift Leakage Regularization} (\\textsc{LULR}) to address this risk. With the LLM encoder frozen, \\textsc{LULR} penalizes dependence between the causal head's trainable shared representation and treatment while retaining separate outcome heads. The penalty uses a variational approximation to the contrastive log-ratio upper bound (CLUB) of mutual information, targeting treatment dependence rather than generic parameter shrinkage. Controlled proxy experiments provide exploratory evidence of improved ranking scores under injected treatment information relative to no regularization and the tested weight-decay setting. Structured-only benchmarks show modest, dataset-dependent effects. On an industrial pricing randomized controlled trial, mean offline $\\text{lift@}0.3$ is $0.258$ for \\textsc{LULR}, compared with $0.106$ for the same-backbone baseline. A separate one-week online A/B test of the complete deployed pricing policy records $5.45\\%$ higher sales volume and $1.91\\%$ higher gross merchandise value than the control arm. These short-term policy-level gains do not isolate the regularizer's effect.",
    "published": "2026-11-16T09:42:24Z",
    "updated": "2026-11-17T06:13:58Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.20794"
  },
  {
    "id": "2611.20792",
    "title": "TRR: A Thermal Interaction Engine for Robot Simulation and RGBT Data Generation",
    "authors": [
      "Biwen Yang",
      "Zhe Cao",
      "Jin Zhang",
      "Haoyang Sun",
      "Zonglu Hu",
      "Jintao Zhao",
      "Zhehao Zhang",
      "Kaizheng Chen",
      "Chengyi Liu",
      "Chengyu Wei",
      "Siyuan Wu",
      "Ruiheng Zhang"
    ],
    "abstract": "A robot's actions change the thermal conditions of its next interaction: heat retained after release, carried with objects or stored beneath the surface can change a later contact's outcome despite similar current temperatures. Training trajectories must capture how these effects connect earlier actions to later observations and task outcomes. We present TRR, a \\emph{Thermal Robot Renderer} that attaches spatial and depth-resolved thermal state to both contact partners, updates local heat exchange through contact, transport and separation, and generates synchronized RGB--thermal (RGBT) observations and event-local task checks on one execution clock. Controlled interventions show why retained heat, spatial transport and internal storage matter for subsequent contact outcomes. From the same state, TRR produces a paired six-task benchmark of 2,224 static--dynamic pairs, that is, 4,448 trajectories with synchronized dual-view observations, states and actions. Visible thermal history raises safe contact-site selection from 75.0\\% to 91.7\\% on a dedicated learning corpus, and training on dynamic histories raises simulated transfer completion by 50 percentage points under a new heating procedure with shared feedback execution. We demonstrate RGBT observation adapters on MuJoCo and Isaac Sim, report an engineering inventory of ten prepared robot configurations and six demonstrated camera viewpoints, and describe a developer workflow that carries an existing robot scene to exported RGBT records. The benchmark, the workflow and the platform resources described in Section 6 form the first items of a planned public release. Demonstrations and resource updates are available on the project page.",
    "published": "2026-11-16T09:40:12Z",
    "updated": "2026-11-16T09:40:12Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2611.20792"
  },
  {
    "id": "2611.20788",
    "title": "VA-Assembly: View-Aligned Score Guidance for Training-Free 3D Part Assembly",
    "authors": [
      "Yeon-Jae Kim",
      "Sangwon Kang",
      "Byung-Kwon Min"
    ],
    "abstract": "Image-to-3D foundation models have improved 3D reconstruction, but typically produce monolithic representations without explicit part-level structure. Part-aware generation and learning-based assembly methods often require part-level supervision, category-specific priors, or paired part-layout training data. We instead consider a practical but underexplored setting in which independently prepared or generated 3D parts have no predefined inter-part relationships, shared coordinate frames, or consistent scales, and must be assembled into a reference-consistent object from a single image. We present VA-Assembly, a training-free framework for 3D part assembly through part-level transformation estimation using view-aligned diffusion guidance. Given a reference image and fixed 3D part geometries, VA-Assembly optimizes each part's translation, rotation, and scale. We condition a frozen view-conditioned diffusion model on same-view renderings of a reference-derived monolithic 3D representation, producing score gradients geometrically aligned with the part configuration. This guidance provides multi-view structural cues under large initial misalignment. By repurposing pretrained visual-structural priors as transformation-level supervision, VA-Assembly requires no annotated part layouts, predefined part taxonomies, category-specific assembly training, or bounding-box-based layout initialization. Experiments compare VA-Assembly with geometric registration and compositional layout baselines using each baseline's supported transformation components, showing improved part-wise transformation estimation. Ablation studies show that view-aligned conditioning, rather than diffusion guidance alone, is critical for reliable transformation gradients. Updating only part transformations preserves explicit component separability and supports component-level editing, replacement, and reconfiguration.",
    "published": "2026-11-16T09:35:46Z",
    "updated": "2026-11-16T09:35:46Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.20788"
  },
  {
    "id": "2611.20787",
    "title": "PhaseCLIP: Phase-Aware Frequency-Domain Adaptation of Vision-Language Models for Few-Shot Remote-Sensing Classification",
    "authors": [
      "Mehmet Sergen Catal",
      "Abdurrahman Gumus",
      "Mehmet Zübeyir Ünlü"
    ],
    "abstract": "Remote-sensing (RS) image scene classification aims to assign a semantic category to an overhead image, and in practice must often do so from only a handful of labelled examples, since annotation requires expert interpretation and the resulting labels transfer poorly across sensors and regions. Recent progress has come from adapting vision-language models (VLMs) such as CLIP, through learned prompts or feature adapters. Although effective, these methods construct their representation entirely in the spatial domain. RS scenes are dominated by periodic texture and regular geometry, which the Fourier spectrum describes compactly through an amplitude component, carrying texture and contrast statistics, and a phase component, carrying spatial structure. Existing frequency-domain adaptation of VLMs either exploits amplitude alone or does not separate amplitude from phase, leaving the structural component unused. In this article, we propose PhaseCLIP, which inserts phase-capable spectral modules and a feature-gating module into a frozen CLIP visual encoder and trains only 1.30% of its parameters. Because the amplitude and phase pathways share an identical parameter layout, a single weight set is learned on phase and transferred exactly to amplitude, giving a two-stage scheme that adds no parameters. Experiments on five public RS datasets, EuroSAT, PatternNet, UC Merced, LSRS and RSSCN7, against eight baselines under a matched protocol, show that PhaseCLIP attains 84.28% mean accuracy and is the best method in 23 of 30 dataset-by-shot cells, with phase contributing 1.93 points overall and 4.36 points on the most difficult dataset. Because the modules act on the spectrum of image patches and transformer tokens and leave the text encoder untouched, the approach can be extended to other RS sensors and tasks, and to other domains in which class evidence lies in spatial structure.",
    "published": "2026-11-16T09:34:13Z",
    "updated": "2026-11-16T09:34:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.20787"
  },
  {
    "id": "2611.20786",
    "title": "ThermoSight: From Appearance to Internal Thermofluid Fields via Physics-Guided Neural Reconstruction",
    "authors": [
      "Yuhao Fang",
      "Chenglin Lu",
      "Hefei Ling",
      "Chun Lou"
    ],
    "abstract": "Most neural reconstruction methods focus on reproducing scene appearance, yet inferring physical states from visual observations is essential for machine understanding of the physical world. Reconstructing the internal temperature and soot fields of radiating thermofluids such as flames is challenging yet essential for improving energy efficiency and assessing heat exposure and fire spread. In flames, temperature and soot concentration jointly govern visible emission, and soot self-absorption alters the light that reaches each camera. With limited views, changes in the two fields can offset one another in the recorded RGB images, making temperature and soot difficult to disentangle. ThermoSight, a physics-guided neural framework for scientific imaging, jointly reconstructs continuous three-dimensional temperature and soot volume fraction fields from limited calibrated flame images without field-level ground truth during optimization. A differentiable spectral model links these fields to measured RGB through thermal emission, self-absorption, and calibrated camera responses. Temperature-dependent emission spectra and wavelength-dependent attenuation constrain shared fields across RGB channels, reducing temperature-soot ambiguity. Chromaticity consistency, observation-derived spatial constraints, and soot regularization complement intensity fitting. In a synthetic ablation, wavelength-resolved attenuation reduces temperature RMSE in the hot, sooty region from 234 to 112 K relative to a three-channel approximation, with nearly identical RGB PSNR (65.23 vs. 65.24 dB). Measured data yield coherent fields and competitive RGB reconstructions. These results demonstrate that physics-guided neural fields recover interpretable internal physical quantities beyond visually consistent appearance.",
    "published": "2026-11-16T09:33:25Z",
    "updated": "2026-11-16T09:33:25Z",
    "categories": [
      "cs.CV",
      "physics.app-ph"
    ],
    "url": "https://arxiv.org/abs/2611.20786"
  },
  {
    "id": "2611.20779",
    "title": "EEGProbe: Do Vision-Language Models Really Understand EEG? A Benchmark for Signal-Grounded EEG Signals Evaluation",
    "authors": [
      "Haozhe Zhu",
      "Dan Yuan",
      "Chenghao Gu",
      "Feike Xu",
      "Yue Wen",
      "Shin'ichi Konomi"
    ],
    "abstract": "Vision-language models (VLMs) have shown strong multimodal capabilities across scientific and biomedical domains, yet their ability to understand electroencephalography (EEG) signals remains unclear. We introduce EEGProbe, a signal-grounded benchmark for evaluating whether general-purpose VLMs can extract and reason from minimally processed, channel-wise EEG without task-specific feature engineering or EEG-specific adaptation. EEGProbe contains 620 EEG-centered questions across 13 subtasks and three capability categories: EEG Signal Classification, EEG Cross-modal Alignment, and EEG Neurophysiological Reasoning. To reduce shortcut-based answering, EEGProbe preserves the temporal structure of the recordings where possible, minimizes benchmark-induced processing, and applies signal-necessity testing followed by expert verification. We evaluate 11 representative open- and closed-source VLMs under a unified zero-shot protocol. The strongest model, GPT-5.6 Sol, achieves an overall score of only 41.63\\%, with cross-modal EEG alignment emerging as a major bottleneck. We further examine model behavior from a neurophysiological perspective and analyze how temporal, spectral, spatial, and physiological EEG structure relates to model successes and failures. Inference-time neurophysiological guidance can reshape model predictions by helping models recognize the neurophysiological patterns present in the input and connect them with relevant neurological knowledge, narrowing the gap between general multimodal competence and EEG understanding. EEGProbe provides a testbed for current VLMs and a basis for developing future multimodal models that can interpret EEG evidence more reliably. The EEGProbe benchmark will be publicly available at https://huggingface.co/datasets/2122ZHU/EEGProbe.",
    "published": "2026-11-16T09:27:44Z",
    "updated": "2026-11-16T09:27:44Z",
    "categories": [
      "cs.AI",
      "cs.CV",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.20779"
  },
  {
    "id": "2611.20771",
    "title": "Nemotron 3.5 Bolt E4B 4GB: An Open and Efficient Small Language Model for Fast Conversational Agents",
    "authors": [
      "NVIDIA",
      ":",
      "Adi Margolin",
      "Aditya Malte",
      "Aishwarya Chhabra",
      "Alex Hodson",
      "Ameya Sunil Mahabaleshwarkar",
      "Ambrish Dantrey",
      "Amy Shen",
      "Andrii Skliar",
      "Annamalai Chockalingam",
      "Anusha Pant",
      "Ashwath Aithal",
      "Ashwin Kumar",
      "Besmira Nushi",
      "Bhavesh Pawar",
      "Bryan Catanzaro",
      "Bryan Yu",
      "Chantal Hwang",
      "Chenhan Yu",
      "Chris Alexiuk",
      "Conner Currie",
      "Cynthia Gao",
      "David Mosallanezhad",
      "Dina Yared",
      "Ehsan Hosseini Asl",
      "Eileen Long",
      "Erick Galinkin",
      "Felix Friedmann",
      "Giedrius Burachas",
      "Gorkem Batmaz",
      "Grzegorz Chlebus",
      "Guillermo Siman",
      "Haifeng Qian",
      "Hao Guo",
      "Hayley Ross",
      "Hrishith Thadicherla",
      "Hui Wang",
      "Huiying Li",
      "Ike Nnoli",
      "Irina Filatova",
      "Iris Liu",
      "Ji-Eun Lee",
      "Jian Leong",
      "Jian Zhang",
      "Jiaqi Zeng",
      "Joey Conway",
      "Jonathan Cohen",
      "Jose Vergara",
      "Julien Veron Vialard",
      "Kari Briski",
      "Katherine Luna",
      "Kedar Pandurang Potdar",
      "Kevin Ning",
      "Khalil Ben Khaled",
      "Krzysztof Pawelec",
      "Laura Dykes",
      "Leili Tavabi",
      "Lily Lee",
      "Linda Liu",
      "Liwei Ding",
      "Maka Dong",
      "Manoj Kilaru",
      "Maria Bagdasarova",
      "Matthew Lee",
      "Meredith Price",
      "Micah Schaffer",
      "Michael Boone",
      "Michael Fukuyama",
      "Michael Hasper",
      "Nancy Agarwal",
      "Negar Habibi",
      "Oleksii Kuchaiev",
      "Oluwatobi Olabiyi",
      "Pablo Ribalta",
      "Payal Motwani",
      "Pinky Xu",
      "Prasoon Varshney",
      "Pritam Biswas",
      "Puhui Meng",
      "Rameshwar Shivbhakta",
      "Ran Zilberstein",
      "Reka Kovacs",
      "Richard Mazzarese",
      "Rishabh Garg",
      "Rita Fernandes Neves",
      "Rochelle Woods",
      "Ruby Ye",
      "Ruvaid Virk",
      "Ryan Hill",
      "Saeid Motiian",
      "Seph Mard",
      "Shai Ben Nun",
      "Shaona Ghosh",
      "Sharad Yadav",
      "Sudeep Sabnis",
      "Suhas Hariharapura Sheshadri",
      "Terry Kong",
      "Thanh Do",
      "Thinh Le",
      "Udi Karpas",
      "Viet Anh Trinh",
      "Vinay Raman",
      "Vinita Sharma",
      "Warren Drones",
      "Wenwen Gao",
      "Whei Hsueh",
      "Will Efstratis",
      "Yoshi Suhara",
      "Yunsheng Liu",
      "Zhenming Wang",
      "Zijia Chen",
      "Zuhair Ahmed"
    ],
    "abstract": "We introduce Nemotron 3.5 Bolt E4B 4GB, an open and efficient small language model further post-trained from Gemma-4-E4B-it and optimized for speed and intelligence per GB of memory used for fast conversational agents. The model carries forward Gemma's strong conversational capabilities and further improves multi-turn tool use, instruction following, and input grounding for fast, local voice/device assistants, interactive personas, and embedded/Edge interfaces. The model combines natural conversation with multi-turn agentic capabilities to power voice/device assistants, interactive characters and robotic/IoT interfaces running on GeForce RTX, Jetson, and RTX/DGX Spark. Experiments on 21 benchmarks show that Nemotron 3.5 Bolt E4B 4GB achieves the highest average accuracy while generating the fewest output tokens in both reasoning and non-reasoning modes, compared with Gemma-4-E4B-it and Qwen3.5-4B. The model is released with a DFlash drafter. With DFlash, Bolt E4B achieves $2.74\\times$ the per-user decode speed of inference without speculative decoding at concurrency~1, and $1.21\\times$ the generation throughput of Gemma-4-E4B-it with MTP at batch size 1.",
    "published": "2026-11-16T09:21:45Z",
    "updated": "2026-11-16T09:21:45Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.20771"
  },
  {
    "id": "2611.20769",
    "title": "Deep Learning for Satellite-Based Mountain Hazard Screening: A Retrospective Failure Analysis on the 2021 Chamoli Rock-Ice Avalanche",
    "authors": [
      "Snigdhajyoti Rakshit"
    ],
    "abstract": "The approach utilizes 10 bands from Sentinel-2 imagery, along with terrain information, in a deep learning pipeline to classify potential hazard sources in any given mountainous region. The performance of our model has been evaluated against the data collected during the rock-ice avalanche event in the Chamoli region in the Indian Himalayas on 7th February 2021. U-Net performs segmentation of the detected land surface in the satellite image, detects changes in the identify candidate hazard zones, and then the following steps are performed to calculate the potential energy using the Monte Carlo sampling for steepest descent (D8) flow paths, finding the exposed structures in the downstream locations, and ranking the zones depending on the risk score. In comparison to the simple spectral rule, our approach achieved the higher macro F1 score of 0.648 (as compared to 0.519). But the F1 score in case of rock and soil was low, being in the range of 0.3s. In case of optical change detection in winter, it's only that northeast-facing slope which couldn't be detected, as it was under 73% of shade prior to the incident. The parameters have been set for this particular scene alone and not independently; hence, this is a retrospective test, and this test locates a failure which has occurred earlier. The primary contribution of this paper is locating the pipeline leak.",
    "published": "2026-11-16T09:19:57Z",
    "updated": "2026-11-16T09:19:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.20769"
  },
  {
    "id": "2611.20767",
    "title": "UNITE: Consolidating Embodied VLM Specialists via Shared-Anchor One-Bit Factorization",
    "authors": [
      "Tao Tao",
      "Anke Tang",
      "Enneng Yang",
      "Zhi Hou",
      "Xiaogang Wang",
      "Dacheng Tao"
    ],
    "abstract": "Embodied capabilities such as visual grounding, spatial reasoning, navigation, and driving understanding are often developed in separate vision-language specialists fine-tuned from a common pretrained model.Deploying the specialists separately multiplies storage, whereas merging them into one dense model forces conflicting task updates to share parameters and loses part of each specialist's expertise.We introduce UNITE, a framework that consolidates such specialists into a compact shared-backbone mixture of experts. UNITE keeps the feed-forward block of each specialist as a routable expert and represents the expert bank through a shared-anchor one-bit factorization: a shared floating-point anchor plus expert-specific, row-scaled binary deviations.The anchor is optimized jointly with the scales and signs through closed-form alternating updates, using only source weights and no calibration data.Router adaptation then adjusts token-level expert selection with the backbone and experts frozen, updating fewer than $0.6$M parameters ($<0.01\\%$ of the $8.8$B active parameters). Built from four Qwen3-VL-8B specialists, the complete UNITE model occupies $20.3$ GB, $1.16\\times$ the storage of one dense specialist and $59.6\\%$ below the uncompressed MoE. Across $22$ benchmarks and R2R Val-Unseen, UNITE matches six static merging methods in mean retention of best-specialist performance, leads all of them on Scan2Cap, ScanQA, and all four navigation metrics, and surpasses every source specialist on all five 3D scene understanding benchmarks (up to $+19.1$ on Scan2Cap) and on R2R navigation. Relative to the uncompressed MoE, factorization is nearly lossless on $21$ of $22$ benchmarks; the exception is VSI-Bench, where frame-count experiments suggest impaired use of cross-frame evidence.UNITE thus consolidates complementary embodied capabilities near single-model storage.",
    "published": "2026-11-16T09:19:30Z",
    "updated": "2026-11-16T09:19:30Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.20767"
  },
  {
    "id": "2611.20753",
    "title": "UIAnchor: Anchoring UI Perception and Action Execution for Reliable Service-Composed Mobile Task Automation with GUI Agents",
    "authors": [
      "Wentao Zhou",
      "Sicong Liu",
      "Zimu Zhou",
      "Yimeng Duan",
      "Yongyan Cai",
      "Weiye Wu",
      "Teng Li",
      "Daqing Zhang",
      "Zhiwen Yu"
    ],
    "abstract": "Mobile task automation aims to streamline multi-step, cross-app interactions on smartphones and in-vehicle systems. Recent LLM-based GUI agents have advanced rapidly, yet reliability remains limited because modern mobile workflows are increasingly service-composed (app switching, forms, pop-ups/permissions, copy-paste), requiring fine-grained operations on dense, dynamic, and heterogeneous UIs, often in distraction-sensitive contexts (e.g., hands-busy or attention-limited use). Through an in-the-wild failure analysis of deployable GUI agents, we identify two dominant bottlenecks: agents often miss or misread actionable UI elements, and they execute actions without verifying target correctness or outcomes. We present UIAnchor, a modular multi-agent system that improves mobile GUI automation by anchoring both perception and execution. UIAnchor combines a two-stage UI parser for high-recall element capture and context-aware semantics with a meta-controller that performs pre-action verification, post-action outcome perception, per-step state tracking, and targeted recovery. We further introduce an L1-L5 task taxonomy based on step length, cross-app scope, and UI granularity, showing that L5 remains beyond today's practical frontier. On the hardest practical tier, L4 tasks (20-30 steps, multi-app, targets < 100 x 100 px, ~5 mm on typical phones), UIAnchor improves success by 31.5% over GPT-4o and 16.6% over Mobile-Agent-v3. With edge/cloud assistance, UIAnchor runs at ~2 s per step, comparable to human operation, while reducing per-step latency by up to 75.5% and energy by 52.4%. It also generalizes to unseen apps and cross-platform GUIs.",
    "published": "2026-11-16T09:01:47Z",
    "updated": "2026-11-16T09:01:47Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.20753"
  },
  {
    "id": "2611.19499",
    "title": "Do Probing and Steering Favor the Same Directions Within and Across Language Models?",
    "authors": [
      "Afshin Sadeghi",
      "Daniel Becker"
    ],
    "abstract": "A direction in a language model's hidden state can be used to probe whether a concept is present or to steer the model toward it. Although probe directions are often reused for steering, the direction that best detects a concept need not be the one that best changes it. We study this distinction in three instruction-tuned models from different families. We construct a one-parameter family of directions ranging from a covariance-adjusted discriminant to the mean difference, and evaluate probing and additive steering, which adds the direction to the hidden state, along the family at a fixed side effect. For truthfulness and sentiment, in every model, the best probe is not the best steering direction: steering consistently favors directions closer to the mean difference. This separation holds across 59 of 60 layer-model-concept combinations in a layer sweep, with matched probe and steering texts in all six model-concept combinations, and under a rotation-based steering operator. The exact steering optimum is less stable: for sentiment, an intermediate direction produces a 27-56% stronger steering effect than the mean difference, but this gain shrinks or disappears with matched texts and depends on the layer and the operator. The two roles also transfer differently across models. A probe transferred by a linear map fitted on neutral text retains 81-91% of the target model's above-chance probing performance, while the transferred mean difference retains less of its steering effect in 11 of 12 model pairs. This is a consistent tendency, although our predefined criteria classify only three pairs, and nine remain inconclusive. Finally, as an application on PopQA, steering toward \"unknown\" increases abstention by 18-44 percentage points on uncertain errors, versus 2-5 on confident errors, while rarely correcting errors in cases where a correct answer is reachable.",
    "published": "2026-11-14T16:45:00Z",
    "updated": "2026-11-14T16:45:00Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.19499"
  },
  {
    "id": "2611.19495",
    "title": "Vegetation Health Classification for Low-Data and Edge Hardware Deployment",
    "authors": [
      "Yifei Cheng",
      "Haoyu Li"
    ],
    "abstract": "Unmanned aerial vehicles (UAVs) equipped with cameras are popular, viable tools for vegetation and environmental health monitoring. However, existing image classification methods are incompatible with UAV implementation for independent practitioners in remote, resource-constrained environments due to large dataset requirements, GPU hardware, inflexible retraining, and low interpretability. This paper presents a lightweight, interpretable vegetation classification algorithm operating with as few as five reference images per class, without GPUs or heavy machine learning frameworks. It uses a 2D hue-saturation histogram feature representation and Earth Mover's Distance or Quadratic Form Distance, paired with a log-likelihood probability score, to classify images into three vegetation health categories. We evaluated six systems: three custom pipelines and three established models across low-data scenarios ($n = 5, 10, 25$) and a full-data regime of 2,172 drone images from 28 South American locations. Our custom pipelines achieve competitive Top-1 accuracy (81--85\\%) under low-data constraints, maintaining sub-1ms inference times that enable real-time classification and subsequently tasks such as seeding and watering. The algorithms also support incremental retraining without full model reconstruction. We validate edge feasibility by deploying the QFD variant on an ESP32 microcontroller, achieving 82.8\\% accuracy with 1.01\\% heap memory utilization (45kb), demonstrating that effective vegetation classification is achievable on low-cost, low-power embedded hardware without cellular connectivity.",
    "published": "2026-11-14T16:34:01Z",
    "updated": "2026-11-14T16:34:01Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.19495"
  },
  {
    "id": "2611.19493",
    "title": "Beyond Paired Inputs: Learning to Leverage RGB-T Cross-Modal Relations in Multimodal Large Language Models",
    "authors": [
      "Tianyi Zhao",
      "Qihao Xu",
      "Jiawen Xi",
      "Duanni Meng",
      "Bo Zhao",
      "Maoxun Yuan",
      "Xingxing Wei",
      "Bo Li"
    ],
    "abstract": "RGB and thermal infrared (TIR) sensors provide complementary observations, yet their distinct sensing characteristics make effective cross-modal coordination challenging. Although existing multimodal large language models (MLLMs) can process paired RGB-T inputs, they often fail to translate cross-modal relations into effective task-specific decisions, leaving the potential of these relations to improve task performance and robustness largely untapped. Motivated by this observation, we introduce RelMLLM, an RGB-T MLLM that explicitly learns to exploit cross-modal relations in task-specific decision making. It represents modality reliability, the cross-modal relation, and the dominant modality as a verifiable decision state. We derive task-grounded supervision for this state by comparing RGB-only, TIR-only, and paired RGB-T task outcomes. A hierarchical relation-guided reward supervises modality-specific evidence, relation-state prediction, and the final task output, while encouraging consistency across evidence, relation, and decision. We evaluate RelMLLM on natural RGB-T grounding, RGB-T visual question answering, and held-out sensor degradation. RelMLLM improves grounding accuracy and degradation robustness over its Qwen3-VL baselines while preserving performance on general RGB-T reasoning benchmarks. These results demonstrate that effectively exploiting cross-modal relations leads to more accurate and robust RGB-T decisions. Code and model weights are publicly available.",
    "published": "2026-11-14T16:28:36Z",
    "updated": "2026-11-14T16:28:36Z",
    "categories": [
      "cs.CV",
      "cs.MM"
    ],
    "url": "https://arxiv.org/abs/2611.19493"
  },
  {
    "id": "2611.19485",
    "title": "PALIN: Pixel-Aligned LiDAR-NIR Multimodal 3D Object Detection with Benchmark",
    "authors": [
      "Yanan Zhang",
      "Amit Vishnia",
      "Chengbo Ai",
      "Eleni Christofa",
      "Runan Cheng",
      "Siyuan Meng",
      "Yuanchang Xie",
      "Yu-Min",
      "Yang"
    ],
    "abstract": "3D object detection is critical for intelligent transportation systems. LiDAR has been widely adopted for accurate geometric measurements; however, purely geometric representations remain ambiguous under sparse observations and occlusions, while cross-sensor multimodal fusion suffers from calibration and synchronization errors. To overcome these challenges, we leverage an Ouster LiDAR to construct PALIN (Pixel-Aligned LiDAR-NIR), a large-scale intrinsically pixel-aligned multimodal dataset jointly capturing geometry and NIR intensity, comprising approximately 8,000 annotated frames from static urban intersections and diverse mobile suburban scenes. Building upon this dataset, we propose CMambaFusion, a novel fusion framework consisting of a four-directional Cross-Mamba module for bidirectional cross-modal interaction and a Gated Concat-Mamba module for joint feature refinement. Extensive experiments demonstrate that PALIN enables effective multimodal learning, and CMambaFusion achieves superior accuracy-efficiency trade-offs over both LiDAR-only and representative fusion baselines.",
    "published": "2026-11-14T16:17:43Z",
    "updated": "2026-11-14T16:17:43Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.19485"
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
    "id": "2611.17830",
    "title": "Alleviating Interview Stress: Effects of Robot Persona and Reactive Backchanneling on High-Pressure Mock Interviews",
    "authors": [
      "Haochen Yang",
      "Zhuoran Gao",
      "Geqing Tao",
      "Yusi Dong",
      "Pei-Luen Patrick Rau"
    ],
    "abstract": "High-pressure job interviews induce anxiety and impair performance. Existing mock training suffers from a trade-off among cost, standardization, and physical presence. This study investigated how a robot interviewer's verbal persona (supportive vs. challenging) and nonverbal backchanneling (active vs. negative) affect users' psychological states and facial expressions in a simulated interview. In a 2x2 between-subjects experiment (N=28), participants interacted with a NAO robot. Subjective measures (state anxiety, self-efficacy, social presence) and objective facial emotion recognition were collected. Results showed that a supportive persona reduced task load, increased perceived robot warmth and mind perception, and decreased perceived surveillance and robot discomfort. Active backchanneling increased non-neutral (p = .021) and anxiety-tension facial affect (p = .048). A significant interaction effect between persona and backchanneling was found on social presence (p = .045). The subjective-objective consistency was 67.9%, indicating complementary measurement modalities. The findings provide preliminary support for the social buffering hypothesis in human-robot interaction.",
    "published": "2026-11-13T07:05:06Z",
    "updated": "2026-11-13T07:05:06Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.17830"
  },
  {
    "id": "2611.17828",
    "title": "Signal Scaffolding: Unlocking the Potential of Lightweight Models for Self-Supervised Monocular Depth Estimation",
    "authors": [
      "Zhijie Wang",
      "Li Zhang",
      "Yujie Chen",
      "Shibiao Deng",
      "Xin Gao",
      "Houzhi Zhou",
      "Jiangshuo Zhang"
    ],
    "abstract": "With the rising demand for edge devices, lightweight self-supervised monocular depth estimation methods have continued to evolve; however, existing methods generally suffer from poor accuracy. We find that the root cause may lies in the failure of conventional training regimes to fully exploit the inherent potential of lightweight models. To address this, we propose a novel three-phase training strategy for lightweight self-supervised monocular depth estimation, termed Signal Scaffolding (SS). Without introducing any additional dataset or parameters, we apply SS to ReForgeDepth, a lightweight network of our own design. Experiments on the KITTI and Cityscapes datasets demonstrate that our method achieves state-of-the-art performance in the accuracy-efficiency trade-off and running in real time on edge devices. These results suggest that lightweight models can be improved further within their existing capacity, and that the central question may be less about how parameters are allocated than about how to unlock this latent potential through training.",
    "published": "2026-11-13T07:03:34Z",
    "updated": "2026-11-13T07:03:34Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.17828"
  },
  {
    "id": "2611.17825",
    "title": "Beyond Endpoints: Bézier Paths for Vision Foundation Model Adaptation",
    "authors": [
      "Chenzhi Zheng",
      "Xi Xiao",
      "Chih-Ting Liao",
      "Qizhen Lan",
      "Jingwen Lin",
      "Tianyang Wang",
      "Hao Xu",
      "Xin Cao"
    ],
    "abstract": "Frozen vision foundation models can be adapted by learning a few prompt tokens shared across all images. When prompts are updated as data shift or tasks change, the distribution of image features moves from one endpoint to another. Prior theory asks which endpoints prompts can reach; we ask whether they can travel between them along the shortest path. Because shared prompts compete with each image's own content for attention, they often cannot. We quantify this restriction as the extra transport cost that shared attention imposes over the shortest path. In an exactly solvable attention model, the reachable features form a cone; unrolling it into a plane gives the exact minimum action for every pair of endpoints and explicit optimal prompts on short arcs. The analysis reveals a sharp threshold in content normalization, which measures how much attention each image's own tokens absorb: for same-sign endpoints, at most two distinct levels allow prompts to follow the shortest path, whereas three or more force a strictly positive extra cost unless the endpoints differ only by rescaling. This gap persists with more prompts, small content perturbations, and aligned multihead outputs. On ViT-B/16 with VTAB-1k, a quadratic Bézier prompt path that minimizes feature action reduces held-out transport action relative to linear and cross-entropy-trained paths between the same endpoints and improves intermediate and online accuracy under unlabeled distribution shift, while cross-entropy-trained paths retain higher minimum accuracy when labeled calibration data are available. Reachable endpoints do not guarantee a reachable shortest path: how prompts move matters, not only where they end. Project page: https://xixiaouab.github.io/Beyond-Endpoints/.",
    "published": "2026-11-13T07:01:08Z",
    "updated": "2026-11-13T07:01:08Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.17825"
  },
  {
    "id": "2611.17821",
    "title": "SceneAgent: A Multi-Agent Framework for Portable Game Scene Generation",
    "authors": [
      "Xingyi Li",
      "Jiahao Yang",
      "Yiqin Zhu",
      "Jingwen Ye",
      "Yang Sun",
      "Weidong Zhang"
    ],
    "abstract": "Moving a scene generator to a new game engine requires more than exporting its final output: planning, construction tools, and stored experience may also depend on the original backend. We present SceneAgent, a multi-agent framework for reusing the construction process and its experience across backends. A canonical SceneContext maintains the evolving world, while backend adapters isolate coordinate conventions, asset bindings, and export. Structured handoffs let fresh Builder sessions query this persistent state without inheriting the full construction transcript. Across generations, human-approved traces are distilled into asset-ID-free Layout skills and semantic Content skills that can be retrieved and recombined. We introduce GameSceneBench, comprising 69 indoor and outdoor prompts. Under a common asset and evaluation protocol, SceneAgent obtains human tie-adjusted preference scores of 78.2-89.4% against five baselines. Ablations show that reusable skills and the multi-agent protocol primarily improve prompt alignment and scene completeness, with additional runtime. Deployment in a second engine preserves the shared construction protocol and skill library while replacing backend integration components. Together, these results support separating persistent scene state, task-local reasoning, and reusable experience for portable scene construction.",
    "published": "2026-11-13T06:57:48Z",
    "updated": "2026-11-13T06:57:48Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.17821"
  },
  {
    "id": "2611.17820",
    "title": "Aligning AI Teams",
    "authors": [
      "Siddarth Srinivasan",
      "Morgan Jane Matthews",
      "Jascha Sohl-Dickstein",
      "Erik Jones"
    ],
    "abstract": "Previous work has shown that alignment training on individual LLM agents can fail to transfer to multi-agent settings. We investigate the underlying mechanisms for this failure, and explore interventions to preserve alignment transfer to multi-agent LLM teams. We focus on two software-engineering tasks (sepsis triage, a news recommender) and ten consulting-proposal generation tasks. We present four findings: (1) The single-vs-team safety gap does not show a clear trend with more capable models. We find that Anthropic's Mythos Preview shows the largest gap on one of our tasks but the smallest on another; (2) Many natural interventions, such as having agents critique each other's work or coordinate in a group chat, do not reliably bring agent teams back to single-agent alignment behavior; (3) diffusion of responsibility substantially accounts for the safety gap: agents in teams are less likely to proactively check for system-level safety failures and more likely to ignore, rationalize, or deflect responsibility for issues when they arise; (4) having a designated safety lead agent ensure system-level safety, and having a coordinator agent publish a safety specifications document are effective at restoring single-agent alignment. We also release magelab, a multi-agent LLM orchestration and experimentation framework. Our findings can help practitioners design agent teams that successfully preserve the behaviors expected of aligned individual agents.",
    "published": "2026-11-13T06:57:46Z",
    "updated": "2026-11-13T06:57:46Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.17820"
  },
  {
    "id": "2611.17819",
    "title": "Causally Constrained and Uncertainty-Aware Cardiopulmonary Risk Prediction",
    "authors": [
      "Yuxiang Lai",
      "Jiashuo Zhang",
      "Liang Zhao",
      "Xiaofeng Yang"
    ],
    "abstract": "Routine chest computed tomography (CT) captures pulmonary, cardiac, and vascular phenotypes that jointly stratify lung cancer and cardiovascular disease, the two leading causes of death in lung-screening populations. Yet clinical risk calculators evaluate each disease in isolation and omit CT findings, whereas unconstrained machine learning overfits small hospital cohorts, learns treatment- and illness-confounded risk directions, and conceals uncertainty when patient records are incomplete. Here we present the Causal Envelope Agent (CE-Agent), a two-stage framework that compiles peer-reviewed epidemiological evidence into explicit constraints on risk-factor weights before any outcome is seen, while estimating local baseline risk and newly added CT phenotypes from cohort data. At deployment, closed-form uncertainty propagation accounts for missing clinical or CT inputs within milliseconds per patient, running over two orders of magnitude faster than Monte Carlo sampling and returning calibrated risk intervals that direct chart review and selective imaging to borderline patients. Across 53,452 lung-screening participants from 33 US hospitals and 6,814 multi-ethnic adults, CE-Agent outperforms cardiovascular calculators in lung screening, exceeds the Pooled Cohort Equations on hard atherosclerotic events while correcting their 1.7-fold risk overestimation, and generalizes from a single hospital or CT scanner to external sites while lowering required sample sizes up to fivefold. Applied unchanged to lung cancer, CE-Agent matches established screening models with accurate calibration even when restricted to risk-factor directions alone, and pairing both predictions improves joint cardiopulmonary triage from a single screening visit.",
    "published": "2026-11-13T06:57:34Z",
    "updated": "2026-11-13T06:57:34Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.17819"
  },
  {
    "id": "2611.17814",
    "title": "G-CAST: Governed Continual Self-Training for E-Commerce Agents under Evolving Demands",
    "authors": [
      "Yuechun Yu",
      "Wenzheng Kong",
      "Xiaofeng Mao",
      "Jin Zhang"
    ],
    "abstract": "With the rapid advancement of Large Language Models (LLMs), an increasing number of users are turning to LLM-powered agents for conversational shopping in e-commerce. However, the user needs continue to change as new product categories, procurement scenarios, and feature requests emerge. At the same time, the product's execution harness-including its tools, skills, and operating procedures-continues to evolve to support increasingly sophisticated interactions. These changes create two practical challenges: 1) Demand drift alters the distribution, intent, and complexity of user requests, causing a model trained once to fall behind; 2) Harness evolution requires the model to use newly introduced capabilities correctly without losing behavior that users already rely on. Periodic manual retraining is too delayed and labor-intensive for this setting. To address these challenges, we present G-CAST, a governed continual self-training system that converts daily production evidence under evolving demand and capability contracts into reward-routed, entropy-prioritized training data and governed reward evolution. Governed checkpoint transition under cumulative evaluation controls each model update, enabling the agent to learn newly introduced behaviors without sacrificing previously accepted capabilities. Experiments on a real production e-commerce agent show that G-CAST achieves stronger adaptation to newly introduced demand while better preserving previously accepted behavior compared with a strong autonomous post-training baseline. Ablations further show that both reward-routed, entropy-prioritized data orchestration and governed reward evolution are important to these gains. G-CAST is now deployed in Yuancai(http://cai.1688.com/), a B2B procurement agent on Alibaba's 1688 platform.",
    "published": "2026-11-13T06:53:56Z",
    "updated": "2026-11-13T06:53:56Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.17814"
  },
  {
    "id": "2611.17808",
    "title": "CarryOn: Learning What to Keep in Context for Long-Horizon LLM Agents",
    "authors": [
      "Lihuan Li",
      "Ruiyi Yang",
      "Jiru Wang",
      "Yifan Duan",
      "Xiachong Lin",
      "Hao Xue",
      "Yang Song",
      "Flora Salim"
    ],
    "abstract": "Long-horizon LLM agents can coordinate tools and applications to complete complex, multi-step tasks. As their interaction histories grow, effective context management becomes essential for reliable and efficient execution. Existing methods reduce context through summarization, pruning, or history selection. However, shorter contexts do not necessarily support better decisions: summaries can omit exact details needed for later actions, while retaining entire interactions can carry substantial irrelevant information. We propose CarryOn, a lightweight context manager that pairs compact execution state with fine-grained, source-linked evidence. A learned selector and adaptive retention policy keep relevant evidence available without additional LLM calls for context management. We introduce two complementary evaluation metrics: $S_α$ prioritizes task success while accounting for resource use, and normalized cost per success (NCS) measures the resources spent per successful task. Across AppWorld, OfficeBench, and Tau2 Telecom with three LLM Actors, CarryOn achieves 75.7% macro-averaged task success, exceeding the strongest baseline by 6.7 percentage points. It also achieves the best average scores on both metrics.",
    "published": "2026-11-13T06:43:19Z",
    "updated": "2026-11-13T06:43:19Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.17808"
  },
  {
    "id": "2611.17806",
    "title": "Can Agents Keep Up with Time? An Empirical Analysis of Temporal Adaptation After a Conversational Hiatus",
    "authors": [
      "Hongguan Su",
      "Ming Wang",
      "Shun Zhang",
      "Yifan Wang",
      "Rong Yin",
      "Zhiming Ma",
      "Mengzheng Yang",
      "Peng Chen"
    ],
    "abstract": "Long-horizon agents increasingly serve as persistent personal assistants across modern web platforms, managing schedules, applications, and multi-step plans over weeks or months. Users often return to an ongoing conversation after a long conversational hiatus, while earlier bookings and preparation notes stay on record. During this hiatus, scheduled dates may pass even though the retained records remain unchanged and event outcomes go unrecorded. Existing evaluations of long-horizon agents focus on fact retention and explicit state updates. Whether agents perceive the passage of time and adapt their advice accordingly therefore remains unknown. We frame this ability as temporal state perception and use, which means perceiving the current time and applying it when interpreting dated records. To study it, we design session-rekindling tasks that keep the earlier conversation fixed and vary only the follow-up date and the way temporal information reaches the agent. Experiments across five model routes and five temporal-information conditions show that agents can obtain the current time but often fail to use it. They reliably query the clock and even note in their reasoning that the scheduled date has passed, yet many still tell users to prepare for the expired event. Supplying explicit temporal context reduces this error, and providing the computed date relation removes it entirely. Keeping up with time therefore depends on turning perceived time into updated plans. Based on these findings, we design a session-rekindling benchmark that provides temporal-awareness guidance for designing long-horizon agents. The code can be found at https://github.com/Adoreu2/session-rekindling-benchmark.",
    "published": "2026-11-13T06:42:03Z",
    "updated": "2026-11-13T06:42:03Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.17806"
  },
  {
    "id": "2611.17802",
    "title": "Multimodal Person Concept Model for Person Identification under Varying Observation Conditions",
    "authors": [
      "Mizuho Okitani",
      "Yoshinobu Hagiwara"
    ],
    "abstract": "Service robots in domestic and office environments must identify users to provide personalized services based on their preferences and previous interactions. This is challenging because only a few observations may be available for learning, while observation conditions change owing to appearance, environmental noise, and utterance content. To address this challenge, this study proposes a multimodal person concept model that learns person concepts from a small number of observations, without person labels, and enables robust identification under changing conditions. The model employs a nonparametric Bayesian generative model based on the Chinese restaurant process and integrates visual, acoustic, and linguistic features extracted using Contrastive Language-Image Pre-training (CLIP) and Contrastive Language-Audio Pretraining (CLAP), followed by principal component analysis (PCA). We evaluated six participants under eight conditions in which appearance changes, additive noise, and transcription errors were introduced individually and in combination. Averaged over the eight conditions, the proposed model achieved an identification accuracy of 0.89 while inferring the number of person concepts from the observations, which is comparable to k-means clustering that was supplied with the true number of participants (0.88). We also examined PCA dimensionality, modality availability, and variation strength, and demonstrated the model on a Toyota Human Support Robot. These results show that multimodal person concept learning supports robust person identification under changing conditions, and that identification can succeed even when the number of concepts is not correctly recovered. The project page and demonstration video are available at https://okitamisan01.github.io/person_concept/.",
    "published": "2026-11-13T06:30:53Z",
    "updated": "2026-11-13T06:30:53Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.HC",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.17802"
  },
  {
    "id": "2611.17797",
    "title": "Vision-as-a-Tool: Visual Harness for Multimodal Agentic Coding",
    "authors": [
      "Haolin Yang",
      "Wenshan Wu",
      "Jin Jiang",
      "Yu Cheng",
      "Yan Xia",
      "Ting Song",
      "Yangyu Huang",
      "Zhiliang Peng",
      "Wenhui Wang",
      "Hangbo Bao",
      "Yuzhe Zhang",
      "Wen-Da Wei",
      "Tengchao Lv",
      "Li Dong",
      "Lei Cui",
      "Furu Wei"
    ],
    "abstract": "Multimodal agentic coding requires robust visual reasoning to analyze observations and evaluate generated artifacts. Current frameworks largely rely on a Thinking-with-Images paradigm, where agents depend on their intrinsic vision to execute visually grounded tasks. However, this architectural coupling introduces a fundamental bottleneck. Agent performance remains strictly bounded by internal perceptual limitations. Furthermore, text-only agents lack native perception. Without specialized tools, they cannot perform visual reasoning. To overcome these constraints, we introduce the Vision-as-a-Tool (VaaT) paradigm. Prior visual tool-use merely manipulates images for an agent's intrinsic vision to read. In contrast, VaaT reframes general-purpose multimodal large language models (MLLMs) as callable external utilities. As a result, text-only agents can completely offload visual reasoning during agentic execution. Meanwhile, vision-capable agents can dynamically augment their native perception on demand. We instantiate this paradigm in VHarness, a unified framework driven by five atomic actions. We comprehensively evaluate VHarness across Image-to-HTML, Image-to-SVG, and Image-to-3D generation tasks. Experimental results demonstrate that VHarness consistently improves visual fidelity and geometric accuracy across both text-only and multimodal coding agents. These findings highlight that modularizing visual reasoning into callable utilities provides a flexible and scalable foundation for future agentic coding systems.",
    "published": "2026-11-13T06:23:19Z",
    "updated": "2026-11-13T06:23:19Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.17797"
  },
  {
    "id": "2611.17796",
    "title": "Robustness Evaluation of GPU Cloud Pricing Benchmarks under Incomplete Observations: A Controlled Missingness Study",
    "authors": [
      "Jooya Wong"
    ],
    "abstract": "Daily GPU rental-price benchmarks can fail when marketplace quotes are missing. This article stress-tests a fixed equal-weight median rule under four imposed masking mechanisms and four benchmark-level recovery methods. Across 5,800 Monte Carlo realisations in 27 scenarios on 190 held-out days, whole-source outages reduce publication coverage to 0.77 while preserving zero conditional error on published dates; composition-changing loss retains 0.86 coverage but produces 7.74 log points of error. A separate past-only stratum-level ablation reduces error by 4.15 to 6.70 log points in five composition-changing cases, using a richer information set. An observable-signal withholding rule improves the primary error-coverage criterion in 0 of 10 cases. Results concern observed asking-price measurements, not transaction prices or identified real-world missingness mechanisms.",
    "published": "2026-11-13T06:18:24Z",
    "updated": "2026-11-13T06:18:24Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.17796"
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
  },
  {
    "id": "2611.07873",
    "title": "PVDepth: Panoramic Video Depth Estimation via Geometry-Aware Spatiotemporal Adaptation",
    "authors": [
      "Chuanxin Song",
      "Peixi Peng"
    ],
    "abstract": "Panoramic video depth estimation is pivotal for applications such as Virtual Reality and World Models. However, advancements in this field are impeded by two primary obstacles: the scarcity of large-scale training data and the unique spatiotemporal challenges of Equirectangular Projection (ERP), which hinder the direct transfer of perspective models. In this paper, we first present PanoCARLA, a large-scale synthetic RGB-D panoramic video dataset, featuring natural motion trajectories and drone-like roaming perspectives. Building on this foundation, we propose PVDepth, an end-to-end framework adapted from perspective video depth models. To tackle ERP-specific geometric distortions and consequent non-linear temporal dynamics, we introduce two core mechanisms: (1) A Progressive Sphere-aware Noise Initialization strategy that anneals the noise distribution from planar to spherical, guiding the model to adapt to non-uniform information density; and (2) A Cube-rectified Temporal Modeling module that incorporates an auxiliary cubemap temporal branch to rectify non-linear temporal dynamics in the ERP domain. Extensive experiments demonstrate that PVDepth achieves superior performance, generating geometrically accurate and temporally consistent depth sequences. Code and data will be released at https:// github.com/ChuanxinSong/PVDepth.",
    "published": "2026-11-05T11:47:33Z",
    "updated": "2026-11-05T11:47:33Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.07873"
  },
  {
    "id": "2611.07870",
    "title": "FARR: Forecast-Aware Residual Refinement with Matched Endpoint Evidence for Long-Horizon Time-Series Forecasting",
    "authors": [
      "Yiyang Zhang",
      "Yuli Zheng",
      "Bin Li",
      "Meimei Zhang",
      "Qiang Sun"
    ],
    "abstract": "Large language models use auxiliary conditioning to incorporate additional information into time-series forecasts. However, auxiliary conditioning does not consistently improve accuracy and can increase forecasting error when its influence is poorly matched to the observed temporal context. We propose Forecast-Aware Residual Refinement (FARR), which learns to correct forecasts using endpoint evidence. FARR obtains a valid forecast under the standard condition and a null forecast under a predefined null condition. Their difference reveals how conditioning changes the prediction. A shared residual refiner combines this endpoint evidence with historical features to estimate the remaining error of the valid forecast. Horizon-wise gating then controls the contribution of the predicted residual to the final output. Experiments on four long-horizon forecasting benchmarks show that FARR achieves the best dataset-average MSE and MAE among the compared methods. Code will be released at https://github.com/blossomrichzyy-star/farr-forecast-aware-residual-refinement.",
    "published": "2026-11-05T11:45:32Z",
    "updated": "2026-11-05T11:45:32Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.07870"
  },
  {
    "id": "2611.07867",
    "title": "PlayGen2: Learning Real-Time Playable Worlds with Explicit 3D State",
    "authors": [
      "Jihai Zhang",
      "Yuhan Zhou",
      "Junyou Li",
      "Deheng Ye",
      "Qi Dou",
      "Yu Cheng"
    ],
    "abstract": "Building a playable world requires more than generating plausible video: it demands responsive control, persistent spatial structure, and coherent interactions with dynamic entities. Using generated frames as the sole recurrent world representation ties these requirements to view-dependent appearance synthesis, making it difficult to maintain long-term spatial and temporal consistency in generation and interaction. We present PlayGen2, a real-time interactive world model that separates learned 3D state evolution from neural rendering. PlayGen2 maintains a persistent world memory comprising static geometry represented by a volumetric occupancy grid and identity-indexed 3D states for the player and other entities. Within a fixed-size local region, its world-state model jointly learns action-conditioned entity dynamics, geometry completion, and entity discovery, committing updates to a persistent world memory. A separate neural renderer synthesizes first-person observations from depth and semantic projections of the world state, without feeding generated images back into state prediction. Using Doom as a testbed, we demonstrate that the model successfully learns world dynamics including geometry-aware player motion and player--NPC interactions. The framework is computationally efficient, enabling the complete simulation and rendering pipeline to achieve approximately 160ms backend latency on a MacBook Pro with an M4 Pro chip. Beyond single-player interaction, we demonstrate zero-shot deployment on unseen Doom maps, multiplayer interaction through the composition of single-player models, and programmable gameplay through rule-based state interventions. These capabilities demonstrate the transferability and extensibility of the learned game-world model. Code and pretrained model weights are publicly available.",
    "published": "2026-11-05T11:45:25Z",
    "updated": "2026-11-05T11:45:25Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.07867"
  },
  {
    "id": "2611.07865",
    "title": "OcTreeMamba: Topology-Aware Mamba for 3D Medical Segmentation via Octree Sparsification",
    "authors": [
      "Kaixiang Mai",
      "Jiaqi Yu",
      "Yuzhu Ji",
      "Yiqun Zhang",
      "Zhijie Wang",
      "Haijun Zhang",
      "Yiu-ming Cheung"
    ],
    "abstract": "Accurate segmentation of 3D anatomical structures is crucial to medical image analysis. Recently, Mamba-based approaches have achieved promising segmentation performance in capturing long-range dependencies with linear-time computational complexity. However, heuristic selective scanning strategies inherently disrupt the intrinsic spatial hierarchy and increase computational redundancy, ignoring the inherent sparsity of 3D anatomical structures. To this end, we propose OcTreeMamba, a hierarchical framework that incorporates Octree structures into SSM, achieving 3D topology-aware long-range context feature propagation and integration. Specifically, a Structure Learner performs anatomy-adaptive structured sparsification through hierarchical gating and Gumbel-Softmax sampling, enabling differentiable selection of anatomical regions. The selected regions are subsequently organized by a Dynamic Octree Builder into a multi-level topology that preserves their hierarchical connectivity. Based on the constructed Octree, a bidirectional Tree-SSM propagates and integrates contextual features along connectivity-aware leaf--parent--root and root--parent--leaf trajectories. Extensive experiments on four benchmark datasets show that our proposed OcTreeMamba achieves competitive performance \\wrt topological continuity and computational efficiency, particularly for recovering the complex structure on vascular datasets. The code is available at https://github.com/MikeMak123/OcTreeMamba.",
    "published": "2026-11-05T11:42:25Z",
    "updated": "2026-11-05T11:42:25Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.07865"
  },
  {
    "id": "2611.07859",
    "title": "CORE: Coarse-to-Fine Search with Context Management for Deep Research",
    "authors": [
      "Hoang Tran Vuong",
      "Ngoc Quan Pham",
      "Hung Bui",
      "Fatih Porikli",
      "Dat Quoc Nguyen"
    ],
    "abstract": "Deep research agents answer complex questions through repeated search. They rely on a harness that runs their tool calls and returns evidence to their context. This creates a trade-off: Search works best over long passages, which give enough context for reliable semantic matching. But the returned evidence should be short, because every observation stays in the agent's context for the rest of the trajectory. We introduce CORE, a training-free harness that combines coarse-to-fine search with context management. CORE retrieves passages with a dense retriever. It then reuses the token-level similarities from a late-interaction reranker to return only the most relevant snippet from each passage. Context management lets the agent expand the context around sources it has already retrieved and suppresses repeated snippets. In controlled closed-search comparisons with the Tongyi DeepResearch and OpenResearcher harnesses, CORE achieves state-of-the-art answer accuracy and evidence recall across three agent models and three benchmarks (BrowseComp-Plus, BrowseComp-Wikipedia and BrowseComp-Plus-CM), on corpora containing up to 553M documents.",
    "published": "2026-11-05T11:36:19Z",
    "updated": "2026-11-05T11:36:19Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.IR"
    ],
    "url": "https://arxiv.org/abs/2611.07859"
  },
  {
    "id": "2611.07851",
    "title": "Tasteply: Externalizing Stable and Situational Preference as Manipulable Spatial Objects",
    "authors": [
      "DaEun Choi",
      "Daniel Lee"
    ],
    "abstract": "Most recommender systems treat user preferences as a single signal to infer and optimize, yet human preferences are a mix of a stable preference and situational preferences that turn on and off depending on context. Through Tasteply, we externalize this preference structure as manipulable spatial objects. Tasteply represents each situational preference as an attractor and the stable preference as an underlying global field. Users can adjust their feed by moving around the space and adjusting the strength of the global field, turning the preference structure that remains latent within the model into something they can see and act on directly to steer the recommendation algorithm. Through an exploratory study (N=5), we found that this spatial control was effective, along with its limits and future direction as a means of manipulating preference-based recommendations.",
    "published": "2026-11-05T11:30:27Z",
    "updated": "2026-11-05T11:30:27Z",
    "categories": [
      "cs.HC",
      "cs.IR"
    ],
    "url": "https://arxiv.org/abs/2611.07851"
  },
  {
    "id": "2611.07850",
    "title": "Learning Robotic World Models with Semantic and Visual Feedback",
    "authors": [
      "Hao Wu",
      "Yuqi Li",
      "Yizhou Zhao",
      "Kun Wang",
      "Xiao Luo",
      "Yu Cheng",
      "Bo An",
      "Yingli Tian",
      "Laszlo A. Jeni",
      "Ming-Hsuan Yang"
    ],
    "abstract": "Robot world models predict action-conditioned future visual states to support robotic planning and decision making. However, visual reconstruction does not fully capture task progress, semantic evaluation alone provides limited constraints on fine-grained visual errors, and homogeneous predictions limit comparative feedback. We present RoboImagine, a framework for post-training autoregressive robotic world models through candidate-future comparisons with semantic and visual feedback. Diverse search promotes diversity among candidate trajectories under shared visual observations, action sequences, and task instructions. A frozen multimodal evaluator provides task-relevant semantic preferences through pairwise video comparisons in both presentation orders, complemented by pixel- and perceptual-level visual consistency feedback that constrains local structural and appearance errors. These signals drive policy optimization through group-relative advantages. Fixed initial context and branch-specific rolling histories support long-sequence generation with bounded context and consistent conditioning between candidate generation and policy optimization. Experiments with separately trained models on RT-1, BridgeV2, and RoboCasa cover real-world and simulated manipulation. On RT-1, under matched initialization, update counts, and evaluation protocols, RoboImagine improves PSNR by 1.26 dB and reduces LPIPS by 11.93% relative to continued supervised fine-tuning. Ablations show that diverse search improves prediction quality and that combined semantic and visual feedback yields higher external multimodal evaluation scores than visual feedback alone while maintaining comparable visual fidelity. Rolling histories further improve long-horizon prediction. These results support improving visual fidelity, task relevance, and long-horizon prediction through candidate comparison and complementary feedback.",
    "published": "2026-11-05T11:30:01Z",
    "updated": "2026-11-05T11:30:01Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.07850"
  },
  {
    "id": "2611.07847",
    "title": "Computation, not weight access: large language models as auditors of clinical prediction networks",
    "authors": [
      "Zhiyu Liu",
      "Xinyu Yang"
    ],
    "abstract": "Frontier large language models (LLMs) have been reported to read, edit and write the weights of small neural networks, raising the prospect of auditing clinical prediction models from their files alone. Public demonstrations, however, mixed reading raw weights with running code. We separated these conditions in internally pre-specified simulation experiments. Tanh networks of 105 to 38,401 weights were trained on simulated cohorts of patients with subarachnoid haemorrhage, each with a planted relationship or none, and one network was trained on labels that under-recorded deaths in a subgroup. GPT-6 Astra and four other GPT models answered single prompts under a default or an explicit system instruction, either with the weights in the prompt and no tools, or with a calculation-only tool that exposed the weights (white box) or only the network's predictions (black box). Without tools, Astra recovered planted relationships in 353-weight networks but became unreliable at 3,457 weights, and under the default instruction it declined 17 of 21 audit and repair tasks as unidentifiable; the explicit instruction removed these refusals. With the tool, it recovered the planted relationship in all 39 runs on networks of up to 38,401 weights, raised no false alarm in 21 runs on null networks, and found the biased subgroup in 6 of 6 runs. Black-box access performed as well as white-box access, and other GPT-6 models read as accurately. A well-designed script matched the comparator models on the audit and the best LLM repair. For auditing these networks, what mattered was computation and elicitation, not access to the weights.",
    "published": "2026-11-05T11:28:04Z",
    "updated": "2026-11-06T19:18:15Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.07847"
  },
  {
    "id": "2611.07845",
    "title": "Masked diffusion as random sequential adsorption: an exactly solvable model for parallel decoding",
    "authors": [
      "Adrian Baule"
    ],
    "abstract": "Masked diffusion models generate text by reversing a stochastic masking process. Unlike autoregressive LLMs, which generate text one token at a time, they can reveal many tokens in parallel, at the price of an error, since tokens revealed together are drawn independently. We show that this trade-off maps onto the statistical physics of driven many-particle systems. (i) For any data, the error of parallel generation is the entropy production of the generation process relative to the reversed masking process. (ii) For Markov data, generation is a random sequential adsorption process with labelled gaps, which we solve exactly for any number of steps. (iii) For many steps, the error becomes the dissipation of a slowly driven system: the unmasking schedule plays the role of the driving protocol, the number of steps that of its duration, and the error is set by a thermodynamic metric that we obtain in closed form from the mutual information between tokens. Optimal schedules are geodesics of this metric. The exact solution shows how correlations in the text shape both the error and the quality of the output. The longer the correlations, the more the error concentrates at the start of generation. Schedules that start with small steps then gain more, both in path error and in perplexity, and need fewer steps to reach their asymptotic behaviour.",
    "published": "2026-11-05T11:23:40Z",
    "updated": "2026-11-05T11:23:40Z",
    "categories": [
      "cond-mat.stat-mech",
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.07845"
  },
  {
    "id": "2611.07843",
    "title": "Enhanced MRI brain tumor detection using deep learning in conjunction with explainable AI SHAP based diverse and multi feature analysis",
    "authors": [
      "Asif Rahman",
      "Maqsood Hayat",
      "Nadeem Iqbal",
      "Fawaz Khaled Alarfaj",
      "Salem Alkhalaf",
      "Fahad Alturise"
    ],
    "abstract": "Recent innovations in medical imaging have markedly improved brain tumor identification, surpassing conventional diagnostic approaches that suffer from low resolution, radiation exposure, and limited contrast. Magnetic Resonance Imaging (MRI) is pivotal in precise and accurate tumor characterization owing to its high-resolution, non-invasive nature. This study investigates the synergy among multiple feature representation schemes such as local Binary Patterns (LBP), Gabor filters, Discrete Wavelet Transform, Fast Fourier Transform, Convolutional Neural Networks (CNN), and Gray-Level Run Length Matrix alongside five learning algorithms namely: k-nearest Neighbor, Random Forest, Support Vector Classifier (SVC), and probabilistic neural network (PNN), and CNN. Empirical findings indicate that LBP in conjunction with SVC and CNN obtained high specificity and accuracy, rendering it a promising method for MRI-based tumor diagnosis. Further to investigate the contribution of LBP, Statistical analysis chi-square and p-value tests are used to confirm the significant impact of LBP feature space for identification of brain Tumor. In addition, The SHAP analysis was used to identify the most important features in classification. In a small dataset, CNN obtained 97.8% accuracy while SVC yielded 98.06% accuracy. In subsequent analysis, a large benchmark dataset is also utilized to evaluate the performance of learning algorithms in order to investigate the generalization power of the proposed model. CNN achieves the highest accuracy of 98.9%, followed by SVC at 96.7%. These results highlight CNN's effectiveness in automated, high-precision tumor diagnosis. Code: https://github.com/asifrahman557/BrainTumorDetection",
    "published": "2026-11-05T11:20:24Z",
    "updated": "2026-11-05T11:20:24Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.07843"
  },
  {
    "id": "2611.07836",
    "title": "THG-Omni: Traceable Human-Centric Graph Supervision for Video Reasoning",
    "authors": [
      "Jisheng Dang",
      "Kai Wei",
      "Ronghao Lin",
      "Bimei Wang",
      "Hong Peng",
      "Wei-Shi Zheng",
      "Bin Hu",
      "Qi Tian",
      "Tat-Seng Chua"
    ],
    "abstract": "Omni-modal models can answer questions about video, but their predictions rarely show which participant, event, or interval supports an answer. Moreover, answer-level supervision alone does not teach a model to interpret structured video evidence. To systematically mitigate this issue, we present THG-Omni, a human-centric graph-supervision framework that links Segment Anything Model~3 participant tracks with temporally grounded Qwen3-VL annotations. Candidate semantic claims are checked against the source video and available audio before they are used to construct training questions, while track geometry provides explicit spatial and temporal supervision. The resulting questions teach an omni-modal reasoning model to interpret participant attributes, actions, affect, interactions, and their timing from a structured graph. At inference, THG-Omni uses a predicted graph constructed from the evaluation video. Experiments on IntentBench show consistent improvements over the unadapted backbone across social reasoning, emotion understanding, and deception perception. On NExT-QA, THG-Omni achieves 89.54\\% accuracy with the matched graph, compared with 85.10\\% without graph input. Further validation experiments show that compact graph input achieves 78.22\\% accuracy, compared with 78.02\\% using the full graph and 77.58\\% without graph input. A complementary diagnostic demonstrates that the predicted graph preserves evidence useful for answering questions even without the source video and audio. Together, these findings show that THG-Omni improves human-centric video reasoning while grounding its evidence in identifiable participants and events. Our codes are available at https://anonymous.4open.science/r/review-n94hhfcwp5666/",
    "published": "2026-11-05T11:15:34Z",
    "updated": "2026-11-05T11:15:34Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.07836"
  },
  {
    "id": "2611.07828",
    "title": "STAG-Net: Structure-Aware Attention over Landmark Groups for Lightweight Head Pose Estimation",
    "authors": [
      "Asiri Gawesha Lindamulage",
      "Sanka Mohottala",
      "Dharshana Kasthurirathna",
      "Nuwan Kodagoda"
    ],
    "abstract": "Head pose estimation is important for human computer interaction and driver monitoring, but many image based methods remain too costly for resource constrained deployment. We propose STAG-Net, a structure-aware attention over landmark groups for lightweight head Pose estimation that estimates head pose from facial landmarks using movement aware selection, spatial clustering, compact DeepSet encoders, self attention, and a global geometry descriptor. We develop variants using FaceMesh and Face Alignment Network landmarks and evaluate them under cross dataset and subject independent protocols on 300W-LP, AFLW2000, and BIWI. STAG-Net achieves the lowest mean absolute error among all compared landmark based methods in every evaluated setting. On BIWI frames with valid detections, the FAN variant also records the lowest overall error among all compared methods, reaching $3.51^\\circ$ under cross dataset evaluation and $2.39^\\circ$ under subject independent evaluation. The regressors use only 0.012 to 0.043 million parameters and 24.1 to 83.6 thousand FLOPs, about three orders of magnitude fewer FLOPs than FSA-Net. Despite including landmark extraction and regression, the FaceMesh pipeline reaches 322.9 frames per second on a Tesla T4 GPU, nearly twice the 164.5 frames per second of the fastest measured image based baseline, and 111.0 frames per second on CPU. After normalization by dataset size, STAG-Net processes training samples seven to eight times faster than FSA-Net and more than one hundred times faster than HopeNet and TokenHPE, while complete training finishes within 28 minutes. These results show that STAG-Net combines leading landmark based accuracy with substantially lower training and inference cost.",
    "published": "2026-11-05T11:09:34Z",
    "updated": "2026-11-05T11:09:34Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.07828"
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
  }
];
