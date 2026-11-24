window.PAPER_DATA_UPDATED_AT = "2026-11-24";
window.PAPER_ITEMS = [
  {
    "id": "2611.31240",
    "title": "Pruning Autonomous Driving VLAs: What to Preserve for Reasoning and Action",
    "authors": [
      "Seongchan Kim",
      "Soowon Son",
      "Sangoh Kim",
      "Hyunah Ko",
      "Eunbeen Hong",
      "Hyunkoo Lee",
      "Sanghyun Lee",
      "WonJun Moon",
      "Kihong Kim",
      "Dongyeon Son",
      "Woongchan Nam",
      "Seungryong Kim"
    ],
    "abstract": "Reasoning vision-language-action (VLA) models for autonomous driving use chain-of-thought (CoT) reasoning to guide action generation, but incur substantial memory and computational costs. We study structured pruning for these models, focusing on preserving both scene understanding and trajectory prediction. Our analysis of Taylor importance in Alpamayo-1.5-10B shows that reasoning and trajectory objectives assign different importance to the same vision-language model (VLM) structures. In the action expert, MLP channels exhibit more stable importance rankings across denoising steps than query heads, and a small fraction of channels accounts for most of the measured importance. Based on these findings, we propose MoOP, which combines importance ranks from both objectives for VLM pruning and aggregates stepwise importance to select a fixed subset of expert MLP channels. At 24.0% total parameter reduction, VLM-only pruning with MoOP performs comparably to or slightly better than the strongest baselines in driving, while retaining 94.0% of the dense model's LingoQA score, far above all other methods. At a higher reduction of 30.0%, MoOP degrades much less than every other method, as it is the only one whose reasoning does not collapse. Removing 93.75% of expert MLP channels increases total parameter reduction to 39.4%, with nearly unchanged open-loop errors relative to VLM-only pruning and competitive closed-loop performance. The resulting model achieves a 1.37x end-to-end inference speedup and 36.6% lower peak memory than the dense model, without post-pruning fine-tuning.",
    "published": "2026-11-23T18:59:52Z",
    "updated": "2026-11-23T18:59:52Z",
    "categories": [
      "cs.CV",
      "cs.LG",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2611.31240"
  },
  {
    "id": "2611.31239",
    "title": "Lyris: Layout-Guided Long Video Generation with Persistent 3D Memory",
    "authors": [
      "Chen Wang",
      "Jiahui Huang",
      "Riccardo de Lutio",
      "Alex Trevithick",
      "Bryan Chu",
      "Jiawei Ren",
      "Laura Leal-Taixé",
      "Shengyu Huang",
      "Lingjie Liu",
      "Haithem Turki"
    ],
    "abstract": "Exploring a scene from as little as a single photo requires generating a long, camera-controlled walkthrough that extends far beyond what was captured, yet remains consistent upon return. Memory-based video generation methods preserve what they have already seen, but have no anchor beyond it, where the camera drifts from its path and a text prompt can name objects but not place them. Layout-conditioned methods provide such an anchor and precise control over what appears where, but rely on layouts that are typically authored by hand. Both limitations arise because, beyond what was captured, nothing anchors the video model unless a human authors one. To overcome both, we propose Lyris, a long video generation framework that never leaves the video model without an anchor: a persistent point-cloud memory where the scene has been observed or generated, and a 3D layout that a vision-language model authors where it has not. Our key insight is that the interface between the two models can be surprisingly coarse. A layout of one labeled 3D box per object is simple enough for a vision-language model to author (and for a user to edit), yet expressive enough for a video model to follow once rendered along the camera path. We demonstrate walkthroughs of over three minutes and 50 meters from a single photo, passing through doorways into rooms it never shows. When evaluated on minute-long round trips across four datasets, Lyris outperforms state-of-the-art methods by a wide margin, reducing camera error by 3.8x and improving consistency upon return by 22% on average.",
    "published": "2026-11-23T18:59:46Z",
    "updated": "2026-11-23T18:59:46Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.31239"
  },
  {
    "id": "2611.31238",
    "title": "Modern Self-Supervised Vision Transformers Are Pareidolic",
    "authors": [
      "Zihang Lin",
      "Huaiyuan Qin",
      "Liangli Zhen",
      "Qing Guo",
      "Jun Liu",
      "Yew-Soon Ong",
      "Hongyuan Zhu"
    ],
    "abstract": "In human perception, pareidolia is the tendency to perceive a meaningful pattern, such as a face, in a random or ambiguous stimulus.We find a similar phenomenon in modern self-supervised Vision Transformers (ViTs): on white noise, which contains neither objects nor spatial structure, a few directions of their features still form spatially coherent patterns across the patches, imposed by the features themselves.We call this behavior pareidolia, and the span of these directions the pareidolic subspace.On natural images, it holds most of the feature variance in DINOv2 and DINOv3 but little in DINO.This excess explains why DINOv2 and DINOv3, despite stronger dense features, fall far behind DINO in object emergence, the hallmark ability of self-supervised ViTs to identify the patches of an object on their own.Our experiments further show that scaling down their pareidolic subspaces steadily restores their ability to discover objects, so their object emergence is hindered rather than lost.These findings naturally lead to a training-free calibration: Pareidolia Subspace Calibration(PSC) measures the pareidolic subspace only on a noise input and then calibrates the features of natural inputs by scaling its directions down to the variance level of the remaining directions.Across diverse object emergence tasks, PSC improves DINOv2 and DINOv3 by up to 31.7 CorLoc on object discovery, 30.2 maxF on saliency detection and 59.9~$\\mathcal{J}$ on video object segmentation.To identify the cause of pareidolia, we trace it block by block and find that it forms in the middle blocks of every self-supervised model we examine but stays strong to the last block only in models trained with a patch-level loss; controlled training confirms that an image-level loss alone lets it fade.",
    "published": "2026-11-23T18:59:41Z",
    "updated": "2026-11-23T18:59:41Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.31238"
  },
  {
    "id": "2611.31237",
    "title": "Let Vision-Language Models Generate Images through Their Representations",
    "authors": [
      "JB Kim",
      "Byungwoo Jeon",
      "Kyungmin Lee",
      "Hyeonmo Kang",
      "Cheonbok Park",
      "Shinyoung Joo",
      "Jinwoo Shin",
      "Jeonghoon Kim"
    ],
    "abstract": "Recent unified multimodal models aim to combine visual understanding and generation within a single model, yet effectively integrating the two capabilities remains challenging. Leveraging pretrained vision-language models offers a way to build on already learned multimodal knowledge, but making this knowledge effectively accessible to visual generation remains nontrivial. We find that a central challenge lies in the heterogeneous visual representations used for understanding and generation. To address this challenge, we introduce Integral, which converts a pretrained vision-language model into a unified multimodal model by constructing a shared visual representation space across the two capabilities. Integral implements this design through two complementary components. Abstraction Fusion constructs shared visual tokens by aggregating hierarchical representations from the frozen vision encoder, while Block-wise MoT introduces a lightweight generative stream that interacts with the vision-language model only at block boundaries. Our approach effectively preserves the pretrained understanding capability while extending it to strong visual generation. Controlled comparisons further demonstrate that sharing visual representations between understanding and generation substantially improves generative learning compared with using a separate visual representation space, despite comparable reconstruction fidelity. These results suggest that representations learned by pretrained vision-language models already provide an effective foundation for visual generation.",
    "published": "2026-11-23T18:59:32Z",
    "updated": "2026-11-23T18:59:32Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.31237"
  },
  {
    "id": "2611.31233",
    "title": "TowerBridge: Bridging the Dual-Encoder Modality Gap via Weight-Space Programming",
    "authors": [
      "Hani Alomari",
      "Md Atabuzzaman",
      "Chris Thomas"
    ],
    "abstract": "CLIP-style dual encoders map images and text through two separate towers into a shared embedding space, where the two modalities occupy distinct regions separated by a modality gap. Retrieval fails when wrong matches, or hard negatives, outrank the correct one, and the gap is the usual suspect. Yet removing it post hoc degrades retrieval on every CLIP checkpoint we test. We introduce a paired statistic that identifies directions where the two towers agree more on hard negatives than on matched pairs. Mildly attenuating these directions improves retrieval while largely preserving the gap. We arrive at this correction through weight-space programming: guided by the statistic, an LLM agent inspects both towers and writes closed-form weight edits without backpropagation. Free to edit any component, the agent improves COCO test retrieval on all 13 CLIP checkpoints and edits an output projection in 12 of the 13. We distill and refine its recurring correction into TowerBridge, a closed-form recipe motivated by a first-order analysis of the hard-negative margin. Computed in seconds from 25,000 labelled pairs, it requires no model-specific tuning and leaves the architecture and inference cost unchanged. TowerBridge improves COCO test retrieval by 16.8 RSUM and Flickr30k test retrieval by 6.6 on average across all 21 evaluated CLIP checkpoints, including 8 unseen by the agent, while limiting any drop in ImageNet zero-shot accuracy to 0.5 points. It also reduces hubness on all 21 checkpoints and improves retrieval on 4 of 5 dual encoders from other families.",
    "published": "2026-11-23T18:59:13Z",
    "updated": "2026-11-23T18:59:13Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.31233"
  },
  {
    "id": "2611.31228",
    "title": "Language Models Steer on Injected Uncertainty Tokens, but Fail to Self-Monitor In Situ",
    "authors": [
      "Daniel Theron"
    ],
    "abstract": "Prompting language models to verbalize stepwise numerical confidence during generation is an increasingly popular approach for triggering backtracking and error correction in agentic reasoning. This strategy presupposes two capabilities: (1) in-situ monitoring fidelity (does confidence drop when an error occurs?) and (2) downstream steering control (does an uncertainty token causally steer the model to repair its error?). We evaluated four open-weights models (Qwen2.5-7B, Llama-3.1-8B, Mistral-7B, and Phi-4, 14.7B) across 15,200 math benchmark attempts, isolating 2,017 reasoning errors within each model's capability frontier. Applying 27,568 counterfactual continuations across these failure points, we demonstrate a consistent decoupling between monitoring and control. On monitoring, all four models fail to detect their own errors. Verbalized confidence does not distinguish mistake steps from sound reasoning, yielding near-chance within-position AUROCs between 0.500 and 0.561. Even at a model's first reasoning error, trajectory confidence remains saturated at 95.1% to 99.9%, with noticeable drops ($\\ge 10$ points) appearing on fewer than 9% of errors in Llama and under 1.6% in the other three models. In contrast, models respond readily to external uncertainty: injecting a low-confidence tag (10%) at the error step significantly increases downstream correction across all models (+3.7 to +22.5 points over format-matched 95% certainty; all $p \\le 0.0022$), reaching up to 38.5% under active rethinking instructions. However, injecting doubt onto already-correct steps causes models to discard valid reasoning, reducing solve rates by up to 22.8 points. Inference-time self-correction is thus bottlenecked by in-situ error detection rather than downstream repair capacity: models readily steer toward recovery when prompted with doubt, yet fail to self-monitor during generation.",
    "published": "2026-11-23T18:58:52Z",
    "updated": "2026-11-23T18:58:52Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.31228"
  },
  {
    "id": "2611.31225",
    "title": "Self-Supervised Dataset Distillation via Mutual Information Maximization",
    "authors": [
      "Mohammad Hossein Moslemi",
      "Mahdi Beitollahi",
      "Zhimin Mei",
      "Jiale Cai",
      "Bissan Ghaddar",
      "Boyu Wang"
    ],
    "abstract": "Dataset distillation (DD) aims to compress a large dataset into a small synthetic one that remains effective for training neural networks. Despite its success in supervised learning, DD remains underexplored in self-supervised learning (SSL), where distilled data must preserve the information needed to learn representations that remain consistent across augmentations. To bridge this gap, we introduce Mutual Information Prototype Alignment (MIPA), an efficient SSL dataset distillation approach that optimizes synthetic images to preserve augmentation-invariant information. Specifically, MIPA treats synthetic images as learnable prototypes and uses a frozen encoder to assign real samples to them based on feature similarity. A synthetic dataset that preserves such augmentation invariance should yield stable prototype assignments across multiple augmented views of the same real image. MIPA encourages this by maximizing mutual information between cross-view assignments while avoiding trivial solutions in which all real samples are assigned to only a few synthetic prototypes. Evaluations on image classification benchmarks show that synthetic data generated by MIPA yield higher-quality representations than existing distillation approaches while reducing time and storage demands during distillation.",
    "published": "2026-11-23T18:58:27Z",
    "updated": "2026-11-23T18:58:27Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.31225"
  },
  {
    "id": "2611.31222",
    "title": "CTLink: A Text-Prompted Segmentation Model for Linking Radiology Report Findings to 3D Chest CT Scans",
    "authors": [
      "Mohammed Baharoon",
      "Sung Eun Kim",
      "Mahmoud Hussain Alabbad",
      "Lucas Bijnens",
      "Ali Piracha",
      "Reem Alwasiah",
      "Talal Yahyan",
      "Abdulrahman Alamoudi",
      "Mashael Alshehri",
      "Rayan Alsager",
      "Hannah Hancock",
      "Anna M. Hunkemöller",
      "Peter Youssef",
      "Mona A. Alhammad",
      "Afnan Aljumayan",
      "Brecht Van Berkel",
      "Eric Bijnens",
      "Saud Alhussain",
      "Maarten Steyvers",
      "Rolf Symons",
      "Bryan Eelen",
      "Ayed Alaklubi",
      "Maha Buraykan Alshammari",
      "Amirah Fahad Alshammeri",
      "Tomas Gilvydis",
      "Ibrahim AlTurki",
      "Monerah Almohideb",
      "Ali Alburkani",
      "Shahad Alhomaiani",
      "Fatima Jabali",
      "Abdulrhman Aljouie",
      "Daesung Kim",
      "Junha Im",
      "Michael Moritz",
      "Hassan R. Alomaish",
      "Pranav Rajpurkar"
    ],
    "abstract": "Radiology reports describe findings in text only, without visually marking them on the scan, so readers cannot directly see which abnormality each reported finding refers to. We introduce CTLink, a text-prompted 3D segmentation model that segments findings described in a chest CT report. CTLink was trained on 4123 noncontrast chest CT scans with 9547 segmented report findings, including ReXGroundingCTv2, a newly annotated dataset of 1134 scans and 1895 findings with every instance of each finding segmented. On the 200 ReXGroundingCT validation scans, CTLink achieved a hit rate of 0.816, an instance F1 score of 0.456, and a mean Dice score of 0.400, compared with 0.533, 0.175, and 0.234 for VoxTell, a publicly available text-prompted segmentation model (P < .001 for all). On the test set of the MICCAI 2026 ReXGrounding challenge, an ensemble of seven CTLink models achieved the highest hit rate (0.782) and instance F1 score (0.386) of all 48 participating teams. On 50 test scans segmented twice by independent radiologists, CTLink matched or exceeded inter-rater agreement. Diffuse non-focal findings remained the main limitation, partly because their extent is outlined inconsistently even between radiologists. The CTLink model weights are available at https://huggingface.co/rajpurkarlab/CTLink, and the dataset at https://huggingface.co/datasets/rajpurkarlab/ReXGroundingCT.",
    "published": "2026-11-23T18:57:26Z",
    "updated": "2026-11-23T18:57:26Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.31222"
  },
  {
    "id": "2611.31217",
    "title": "A Mixed-Methods Study of Personal Software Creation",
    "authors": [
      "Shaokang Jiang",
      "Kira Yuha Cho",
      "Emerson Murphy-Hill",
      "Daye Nam"
    ],
    "abstract": "People have long wanted software shaped around their own data, routines, and preferences. We refer to such software as \\emph{personal software}. For decades, programming expertise limited who could build it: people without that expertise could build software only within constrained end-user programming tools, such as spreadsheets. AI coding agents seem to remove this bottleneck by letting people build full applications from natural-language descriptions, and many people now build and share personal software publicly. Yet personal software has rarely been studied at scale: we know little about what people build and why, how they build it, and what opportunities and challenges they encounter. We investigate these questions with a mixed-methods study. A grey-literature review examines 6,168 web and Reddit posts, and an observation study follows eight people as they build software for their own needs with AI coding agents and use it for up to a week. We find that creators value personal software for how closely it fits a particular person or community. The software takes shape as creators react to what the agent builds: most functionality emerged during building, and creators' effort shifted from writing code to checking it.",
    "published": "2026-11-23T18:56:16Z",
    "updated": "2026-11-23T18:56:16Z",
    "categories": [
      "cs.SE",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.31217"
  },
  {
    "id": "2611.31216",
    "title": "LeJEPA Features Are Not Isotropic, and Should Not Be",
    "authors": [
      "Richeek Das",
      "Pratik Chaudhari"
    ],
    "abstract": "The SIGReg term in LeJEPA regularizes features to have an isotropic Gaussian distribution. Our first result is to show that this regularizer, in practice, cannot achieve its goal. We design a modified regularizer to enforce the objective better. This leads to slightly improved performance. For example, on ImageNet-100, our modified regularizer reaches the final accuracy of SIGReg in 1.3$\\times$ fewer epochs. Our second result argues that self-supervised encoders should not have isotropic Gaussian features. We show that the alignment term in LeJEPA conflicts with SIGReg, because it couples the magnitude of the features with their directions. In contrast, isotropic Gaussian features would entail independent magnitude and directions. Features obtained with LeJEPA are, in fact, not isotropic. So LeJEPA has two issues. Its regularizer is weak, and the isotropic Gaussian target is too strict. Our third result is about reformulating the isotropic Gaussian regularizer to enforce only the marginal distributions of the magnitude and direction, without enforcing independence. This leads to a simple regularization term, PolarReg, that can be optimized reliably across many different datasets, batch sizes and embedding dimensions without any hyper-parameter changes. On ImageNet-1k, our technique matches the accuracy of LeJEPA and its variants in 4.7$\\times$ fewer epochs. It improves the final accuracy by 1.8 points.",
    "published": "2026-11-23T18:56:04Z",
    "updated": "2026-11-23T18:56:04Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.31216"
  },
  {
    "id": "2611.31215",
    "title": "Seeking in Space: Benchmarking Purposeful Active Exploration of Vision-Language Models for Spatial Reasoning",
    "authors": [
      "Xiwei Liu",
      "Yulong Li",
      "Xuhui Li",
      "Xinlin Zhuang",
      "Zhixiang Lu",
      "Haolin Yang",
      "Jianxu Chen",
      "Yifan Lu",
      "Zhiran Zhang",
      "Yutong Xie"
    ],
    "abstract": "Humans explore unfamiliar spaces with purpose, deciding where to look until they have gathered the evidence a spatial question requires. However, can vision-language models (VLMs), which reason increasingly well over curated images and videos, also seek in space when the evidence is not handed to them? We present ActSpace-Bench, a benchmark of 994 questions across 234 exploration episodes in 72 real-scanned indoor scenes, where a model starts from a single view, navigates real captured frames, and must gather evidence before answering. To assess whether such exploration is purposeful, we introduce a controlled evaluation protocol that fixes each model as the reasoner and compares its own exploration against a same-budget random walk and an oracle route, separating evidence seeking from spatial reasoning. Every question is verified to require exploration and answered from 3D annotations, masked-evidence questions test whether models know when to abstain, and over 95% of sampled questions are confirmed correct by human verification. Evaluations of 23 proprietary, open-weight, and spatially specialized VLMs reveal that the strongest models do seek evidence with purpose but lose much of it to limited memory, whereas weaker and specialized models explore no better than a random walk or fail to reason over the evidence they are given, pointing to memory and evidence-grounded reasoning as the next targets for active spatial intelligence.",
    "published": "2026-11-23T18:55:44Z",
    "updated": "2026-11-23T18:55:44Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.31215"
  },
  {
    "id": "2611.31209",
    "title": "WorldLatent: A Unified 4D Latent Space for World Perception and Generation",
    "authors": [
      "Jingxi Chen",
      "Yujia Chen",
      "Cornelia Fermuller",
      "Yiannis Aloimonos",
      "Wen-Sheng Chu",
      "Du Tran"
    ],
    "abstract": "Generative Pre-Training (GPT) represents a profound milestone in natural language processing, serving as the foundation for most of today's state-of-the-art large language models. By casting diverse understanding and generation problems into a shared token representation, GPT enables a single architecture and unified optimization loop to master heterogeneous tasks across massive corpora, giving rise to powerful foundation models for natural language. In contrast, 4D spatiotemporal vision lacks a common representational protocol: perception (such as depth and camera estimation) and generation are either handled by separate one-way pipelines or bolted together from unaligned single-modality spaces. In this work, we introduce WorldLatent, a framework that formulates a unified 4D latent space as a common protocol for both world perception and generation. Rather than relying on fragmented, task-specific models or stacked single-modality representations, our framework proposes a multimodal VAE architecture that compresses and fuses complex 4D visual appearance, geometry, and dynamics into a single structured latent representation. Within this formulation, perception and generation operate as complementary denoising processes over the same latent space, enabling one generative model to learn both capabilities simultaneously within a single training loop. Experiments across representative 4D benchmarks verify that our fused latent protocol achieves specialist-level zero-shot 4D perception, coherent 4D generation, and controllable editing from a single model. By demonstrating that diverse 4D tasks can be seamlessly unified under a shared representational protocol, our work provides a scalable foundation for general-purpose 4D spatial intelligence.",
    "published": "2026-11-23T18:53:44Z",
    "updated": "2026-11-23T18:53:44Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.31209"
  },
  {
    "id": "2611.30111",
    "title": "RoboThink: Let the Agent Think, Let the Policy Act",
    "authors": [
      "Yunbei Zhang",
      "Zijian Jin",
      "Janet Wang",
      "Xingchen Zhao",
      "Zhenyu Zhang",
      "Weirui Ye",
      "Yilun Du"
    ],
    "abstract": "Robot policies act in real time but fail without knowing why, whereas a reasoning agent that watches the robot can often tell what went wrong. Existing systems either hand the agent control, which takes minutes per episode, or let it send instructions. Yet a policy follows a new instruction only from a fresh start, since a half-finished task leaves it in states outside its training data. Nor can an instruction fix how the robot moves. If a drift keeps pulling the hand to the left, \"push right, slightly\" is not a task the policy has learned. We propose RoboThink, in which the agent thinks and the policy learns to act on the agent's guidance. An instruction channel tells the policy what to do. When the user says \"the milk, not the butter\" after the robot has started, the agent rewrites the instruction and the robot undoes its own motion, with no training. A feedback channel tells it how to move. It is taught from the agent alone with agent-labelled DAgger, role tokens and counterfactual feedback, and is read only by the policy's action module. On LIBERO, RoboThink with Claude Opus 5.5 raises success from 0.09 to 0.87 under an unknown constant drift and from 0.42 to 0.84 under a random one. It also completes misheard and changed requests in 0.91 to 1.00 of the episodes. Acting alone, GPT-6 Astra needs 2.1 min per success and over a million tokens per episode, whereas RoboThink needs 55 s and 8k tokens. The same recipe works across policies, for both vision-language-action models and world action models, and across robots, from one arm to two arms and a mobile manipulator. On all 50 RoboTwin 2.0 tasks with two arms, success rises from 0.12 to 0.74 under the constant drift and from 0.31 to 0.56 under the random one. Finally, the agent is a plug-in. A policy taught by one agent works with other agents, including open-weight ones, and grows stronger with a stronger agent, without retraining.",
    "published": "2026-11-23T06:10:48Z",
    "updated": "2026-11-23T06:10:48Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.30111"
  },
  {
    "id": "2611.30106",
    "title": "Ultrasound Watermark: Real-time Acoustic Watermarking against Voice Scams on Smartphones",
    "authors": [
      "Renzhi Hao",
      "Shirui Cao",
      "Yizhu Wen",
      "Rishav Gupta",
      "Dharani Nadendla",
      "Mehran Kafai",
      "Hanqing Guo",
      "Dong Li"
    ],
    "abstract": "Recent advances in text-to-speech (TTS), voice conversion (VC), and AI-driven speech synthesis enable adversaries to convincingly impersonate trusted individuals during phone calls. Existing defenses often rely on offline analysis, degrade under telephony distortions, or remain vulnerable to adaptive attacks. To address these limitations, we present Ultrasound Watermark, a real-time, smartphone-native framework that protects live calls by binding speech to the caller's physical articulatory motion through acoustic watermarking. During a call, the smartphone emits ultrasonic signals and captures reflections from facial articulatory movements using only its built-in speaker and microphone. Ultrasound Watermark extracts motion features from these reflections and fuses them with outgoing speech to generate a dynamic watermark. Because the ultrasonic measurements are physically and temporally coupled with speech production, they are difficult to spoof without the underlying articulatory motion. A synchronized generator-detector architecture enforces cross-modal speech-motion consistency against replay, synthesized speech, and articulation-mimicking attacks. Ultrasound Watermark operates continuously with less than 200 ms latency overhead and requires no additional hardware. We implement Ultrasound Watermark on iOS and Android and evaluate it using over 2.5 hours of synchronized speech-ultrasound recordings from 22 speakers across eight smartphones and four real-world environments. Results demonstrate robustness to diverse attacks and telephony distortions while preserving perceptual audio quality.",
    "published": "2026-11-23T06:03:11Z",
    "updated": "2026-11-23T06:03:11Z",
    "categories": [
      "cs.CR",
      "cs.AI",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2611.30106"
  },
  {
    "id": "2611.30102",
    "title": "LMnOP: Pruning 3D Gaussian Splatting via Leave-Many-Out Importance",
    "authors": [
      "Sunjae Jeong",
      "Jaeseung Kim",
      "Hyoseok Hwang"
    ],
    "abstract": "3D Gaussian Splatting renders photorealistic views in real time. However, a single scene often needs millions of Gaussians, so these models are costly to store and render. Pruning reduces this cost by keeping a subset of the Gaussians. A common score is the leave-one-out importance, which is the loss increase when a Gaussian alone is removed. At high pruning ratios, many Gaussians are removed together, so Gaussians that are redundant alone but essential together are lost. We present LMnOP (Leave-Many-Out Pruning), which estimates the importance of each Gaussian under the removal of the other Gaussians. This leave-many-out importance is the average loss increase when a Gaussian is removed while the others are also removed at random. We compute the exact mean and variance of each pixel's color under random removal in closed form, and approximate the importance from them without sampling removal patterns. We refine each Gaussian's probability of remaining with its importance and prune once at the end. Without fine-tuning, LMnOP achieves the best results in 16 of 18 metrics on three datasets at 90% and 99% removal. It improves SSIM and LPIPS over GaussianPOP in all 13 scenes.",
    "published": "2026-11-23T05:59:03Z",
    "updated": "2026-11-23T05:59:03Z",
    "categories": [
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2611.30102"
  },
  {
    "id": "2611.30101",
    "title": "Agent on Guard: Self-Improving Runtime Intervention for Robust Robotic Manipulation",
    "authors": [
      "Gengming Cui",
      "Mingfei Han",
      "Jiawei Zhang",
      "Mozheng Liao",
      "Yunkai Guo",
      "Minghao Jin",
      "Tingwen Du",
      "Salman Khan",
      "Xiaojun Chang",
      "Zhihui Li"
    ],
    "abstract": "Robot foundation policies provide learned execution capabilities, while programming agents can reason about failures and construct recovery behaviors. Combining them effectively requires learning when intervention helps and when the policy can reliably resume. This challenge is inherently temporal: the physical world continues to evolve during reasoning, and a useful recovery may become infeasible before a decision takes effect. We introduce Agent on Guard (AoG), a hierarchical framework that improves collaboration between a frozen base policy and a programming agent through physical experience. An evolving outer planner allocates control as the physical state evolves, aligning decisions with the physical clock with attention to observation freshness, remaining recovery windows, and the time required for reasoning, recovery, and subsequent execution. Coupled inner loops jointly refine intervention timing, recovery skills, and handoff conditions. Rather than judging recovery by local correction alone, AoG uses downstream task progress, failure recurrence, final outcomes, and resource consumption to improve both recovery behaviors and scheduling. This turns temporary agent solutions into reusable collaboration capabilities that complement the frozen policy. On RoboDojo-Sim, AoG achieves a success rate of 50.57% and a task score of 57.26, exceeding the strongest evaluated baseline by 11.22 percentage points and 10.68 points, respectively. It also reduces end-to-end episode latency by 80.4% and online token consumption by 85.1% relative to the GPT-6 Astra agent.",
    "published": "2026-11-23T05:58:26Z",
    "updated": "2026-11-23T05:58:26Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.30101"
  },
  {
    "id": "2611.30099",
    "title": "Policy-intrinsic Demonstration Curation",
    "authors": [
      "Sunjae Jeong",
      "Geunhyeok Yu",
      "Dowoon Lee",
      "Hyoseok Hwang"
    ],
    "abstract": "Fine-tuning a robot policy for a new target task requires target demonstrations, but only a few are available. Demonstrations of other tasks can fill this gap, and demonstration curation selects the useful ones among these candidates. Retrieval-based curation selects the candidates that are most similar to the target demonstrations. Since it does not use the policy, any candidate that looks similar receives a high score. Performance-aware curation therefore estimates the effect of each candidate on the policy. However, this requires training on the candidates and takes a long time. We propose a third branch, policy-intrinsic curation, which uses the policy and still takes little time. It estimates this effect with forward passes of the pretrained policy and needs no training. We instantiate this branch with PICKER (Policy-Intrinsic Curation from Known Errors). It selects the candidates on which the policy makes errors that agree with those on the target demonstrations. PICKER reaches success rates comparable to those of performance-aware curation and takes about as long as retrieval-based curation. Its selection is also stable across seeds.",
    "published": "2026-11-23T05:55:41Z",
    "updated": "2026-11-23T05:55:41Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.30099"
  },
  {
    "id": "2611.30096",
    "title": "When \"A or B\" Is Less Likely than A: Coherent Probabilities for Vision Decision Models",
    "authors": [
      "Seongrae Noh",
      "SeongEun Hong",
      "HyeongYeop Kang"
    ],
    "abstract": "Vision decision models answer a multiple-choice question about an image with one probability per option, and software uses them directly. We show that the probabilities depend on how the options are grouped: a merged option \"A or B\" receives on average 11.5 points less probability than the sum of A and B. This under-additivity appears at every model size from 0.85B to 26B and remains after fine-tuning on labels. We propose CORE, which asks each training question with its options regrouped and trains the answers to all these questions toward one target distribution over the original options, summed into each question's groups. On 1,050 items from seven benchmarks, CORE reduces the total variation distance between the answer to a regrouped question and the original answer summed into the same groups from 14.8 to 5.8 points on the 0.85B model, against 9.4 for the best baseline trained on the same questions. At all five model sizes, CORE reduces this distance without lowering accuracy.",
    "published": "2026-11-23T05:54:05Z",
    "updated": "2026-11-23T05:54:05Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.30096"
  },
  {
    "id": "2611.30090",
    "title": "Post-Training Agents for Long-Document Reasoning",
    "authors": [
      "Sushant Mehta",
      "Logan Ritchie",
      "Edwin Chen"
    ],
    "abstract": "Professional documents are a long-context workload that retrieval-style benchmarks do not capture. In a ten-domain enterprise collection, a task's evidence is spread across a source document of median length 27 pages (mean 48.8, maximum 873); a third of tasks rest mainly on charts, drawings, and maps; and 70.9% require two or more reasoning hops. We post-train Kimi-K2.7, an open-weight foundation model, at its full context window on 1,465 expert-authored tasks with atomic rubrics from that collection, training rank-32 adapters with one round of privileged-context on-policy self-distillation followed by two rounds of rubric-reward reinforcement learning. We render each PDF as text for training and as extracted text plus selected page images at evaluation. The smoothed RL training reward rises from 0.37 in the first tenth of the run to 0.67 in the last. On the 100-task GDP.pdf holdout, served in a 262,144-token window, strict pass (all rubric criteria met) more than doubles after the second round, from 11.0% to 24.5%, with gains across input lengths up to 240K tokens. Mean tokens generated stay flat (9,803 to 9,733), so the gain does not come from longer outputs. GPT-5.6 Sol's leaderboard strict pass is 30.7% at a measured 3,422 tokens. On 220 out-of-domain GDPval tasks, where the model runs as a long-horizon tool-using agent, mean rubric reward rises from 0.571 to 0.746 after the third round and zero-credit tasks fall from 54 to 10, while messages per task fall 18%, from 70.9 to 58.2. In paired trajectories, the third round replaces a context-thrashing retry loop with one up-front check of all sources, and verification extends from checking that files exist to checking what they contain. We argue that long-context evaluation of agents should report accuracy jointly with tokens and turns, and that datasets of long documents should ship text and image renderings alongside each PDF.",
    "published": "2026-11-23T05:51:19Z",
    "updated": "2026-11-23T05:51:19Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.30090"
  },
  {
    "id": "2611.30087",
    "title": "Correlated by Construction: Endpoint Choice and the Validation of Protein Screening",
    "authors": [
      "Eric LoPrete",
      "Galen Loving",
      "George Sabin",
      "Pavle Jeremić"
    ],
    "abstract": "Machine learning for protein engineering depends on functional measurements collected at screening scale, but the designs those measurements rank are deployed in processes that run elsewhere. Whether a miniaturized assay remains informative under the conditions of use is usually assumed rather than demonstrated. We describe an automated production and screening platform and test the transfer of its solution-phase metal-affinity measurements to immobilized rare-earth separation. Primary pKd-derived separation factors tracked those measured on covalently immobilized protein across 82 protein-metal-pair measurements from 35 proteins, with pairwise Spearman correlations of 0.878 to 0.923 (pooled Pearson $r$ = 0.836; Spearman $ρ$ = 0.869). Separation factors at a fixed metal pair are insensitive to the ordering shared across the lanthanide series, so these coefficients report protein-specific correspondence directly; permutation of protein identity confirms it, giving a mean scrambled correlation of 0.003 and, for the 17 proteins measured on all three pairs, $r$ = 0.917 against 0.001 ($p \\approx 0.001$). Profiles compared as profiles behave differently. An independent comparison against published LAMBS profiles for the same protein backbones (417 proteins, 5,212 paired measurements) reproduced normalized raw elution at $r$ = 0.870, but reassigning protein identity still reached 0.840. High profile-level agreement across assay formats is largely attributable to metal preferences shared across the series rather than to protein identity. Transfer can be demonstrated, but the endpoint decides whether a correlation shows it: a pairwise contrast removes the shared ordering; a normalized profile retains it, and needs a null that reassigns protein identity.",
    "published": "2026-11-23T05:47:48Z",
    "updated": "2026-11-23T05:47:48Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.30087"
  },
  {
    "id": "2611.30078",
    "title": "RadarOSV: Unified 3D Scene and Motion Perception from mmWave Radars",
    "authors": [
      "Yuan Fang",
      "Long Zhuang",
      "Xijia Wei",
      "Jingqi Jiang",
      "Fangzhan Shi",
      "Simon Julier",
      "Kevin Chetty"
    ],
    "abstract": "Millimeter-wave radar offers weather-resilient sensing for 3D occupancy prediction. Existing radar occupancy methods mainly model geometry, with limited joint modeling of semantics and motion. Cascaded imaging radar provides fine spatial detail but has a limited unambiguous velocity range, whereas single-chip radar offers a wider range but coarser spatial resolution. We propose RadarOSV, to our knowledge the first radar-only framework that jointly predicts occupancy, dynamic object semantics, and ground-relative velocity from raw radar data in unified voxels, by exploiting complementary measurements from both radars. Its Polar-to-Cartesian Geometry (PCG) backbone maps polar imaging-radar features into Cartesian voxels through fixed and deformable sampling, guiding cross-radar fusion for geometry and attribute prediction. Single-chip detection outputs provide class evidence, while raw Doppler spectra supply motion features and radial-velocity candidates. The velocity readout selects from these candidates using fused features to resolve aliasing, then combines the selected radial estimate with learned motion. Ego-motion compensation uses radar-estimated velocity, so inference requires no external odometry or other sensors. On K-Radar, single-frame PCG achieves 40.7% mIoU within 12.8 m, compared with RadarOcc's reported 34.3%. On the BRIDGE-Liv dataset, compared with a cascaded-radar baseline predicting the same outputs with external ego velocity, RadarOSV improves macro-averaged accuracy across four dynamic object classes within annotated object regions from 63.1% to 75.5% and reduces object radial-velocity MAE against manual Doppler annotations from 1.03 to 0.51 m/s, while maintaining geometric occupancy mIoU.",
    "published": "2026-11-23T05:37:46Z",
    "updated": "2026-11-23T05:37:46Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2611.30078"
  },
  {
    "id": "2611.30075",
    "title": "Context-Grounded Skill Internalization for Vision-Language Agents",
    "authors": [
      "Jinlin Liu",
      "Yumeng He",
      "Qihan Huang",
      "Kevin Qinghong Lin",
      "Han Peng"
    ],
    "abstract": "Skill internalization offers a way for agents to learn useful behaviors from skills and use them without explicit guidance in context at inference time. A common approach is to generate demonstration trajectories with the skill in context and then fine-tune the same model on its own trajectories with the skill removed. However, this leads to the problem that the model may learn to reference the removed skill, which we named as context misalignment (CoMi). In this work, we first analyze agent behaviors related to CoMi under this common pipeline. Across ALFWorld, WebShop, and ARC-AGI-1, skill-removed fine-tuning consistently results in CoMi: 12.2-46.0% of test trajectories reference the removed skill. To address this problem, we develop Context-Grounded Skill Internalization (CGSI). CGSI uses a sentence detector to identify unsupported references and then masks or rewrites the selected sentences before fine-tuning. Experimental results demonstrate the effectiveness of CGSI and reveal two key findings. (i) Compared with directly fine-tuning with the skill removed, CGSI reduces CoMi at test time by 72.5-94.6% while preserving task success. (ii) Compared with existing reinforcement learning-based skill-internalization baselines, CGSI achieves comparable performance with substantially less training time. CGSI also significantly reduces processing costs compared with large-scale trajectory auditing and correction.",
    "published": "2026-11-23T05:32:01Z",
    "updated": "2026-11-23T05:32:01Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.30075"
  },
  {
    "id": "2611.30073",
    "title": "SF-Flow: Spectral Flow Matching with High Structural Fidelity for Hallucination-Suppressed Scientific Image Generation",
    "authors": [
      "Zehua Wang",
      "Patxi Fernandez-Zelaia",
      "Mohamed Wahib",
      "Xiao Wang",
      "Isaac Lyngaas",
      "Amir Koushyar Ziabari",
      "Ferdinando Fioretto"
    ],
    "abstract": "Scientific image generation focuses on reproducing experimental appearance while following a prescribed spatial layout. A key challenge is acute data sparsity, which requires operating with unpaired collections of materials (real images and prescribed layouts), where no direct supervision is feasible. Work on unpaired translation has shown that it is possible to reproduce the texture and intensity variations of real images, but it is extremely hard to retain the intended phase boundaries in the prescribed locations. This paper tackles this challenge and introduces SF-Flow, a flow-matching model trained only on real material images that imposes spectral constraints during generation, producing images that are high-fidelity and consistent with the prescribed layouts. Because layouts enter only at generation time, the approach extends to layout maps outside the distribution of any available training layouts. We evaluate the method on synchrotron tomography of concrete, lens-coupled laboratory microCT of powders, and industrial XCT of additively manufactured metal. Without instrument-specific modeling, we show that SF-Flow achieves substantially higher template agreement and joint fidelity--structure score than previous methods, including contrastive unpaired translation.",
    "published": "2026-11-23T05:30:48Z",
    "updated": "2026-11-23T05:30:48Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.30073"
  },
  {
    "id": "2611.30071",
    "title": "SalivaryHSI-Seg: A New Challenging Benchmark for Ex Vivo Salivary Gland Hyperspectral Tissue Segmentation",
    "authors": [
      "Xiaoqi Guo",
      "Xianran Wang",
      "Xinquan Yang",
      "Qinyi Lu",
      "Fangqian Zhang",
      "Jiangyi Chen",
      "Ming Li",
      "Wen Ma",
      "Linlin Shen"
    ],
    "abstract": "Salivary gland tumors are common lesions in oral and maxillofacial practice, and accurate identification of tumor regions and surrounding salivary gland tissues is important for tissue assessment, pathological sampling, and clinical decision support. Hyperspectral imaging (HSI) records continuous spectral responses together with spatial imaging information, providing a promising way to capture fine-grained tissue-discriminative information. Nevertheless, the development of salivary gland HSI tissue segmentation remains limited due to the lack of standardized benchmarks with pixel-level annotations and unified evaluation protocols. To address this issue, we introduce SalivaryHSI-Seg, a hyperspectral tissue segmentation benchmark for ex vivo salivary gland specimens, containing 119 HSI samples from 31 patients with multi-class pixel-level annotations. We establish a patient-level five-fold cross-validation protocol and evaluate different input representations, model architectures, and challenging subsets with small tumor and complex boundary. Based on this benchmark, we further propose HyBSD, a hyperspectral boundary-guided spectral-difference network for full-HSI salivary gland tissue segmentation. HyBSD exploits boundary-guided spectral-difference cues to improve tissue delineation in ambiguous transition regions. Extensive experiments show that full-HSI input provides more discriminative information than sampled spectrums, and that HyBSD achieves 74.97% mDice and 87.76% Tumor Dice, with further advantages on the challenging subsets. Dataset and code will be released.",
    "published": "2026-11-23T05:29:50Z",
    "updated": "2026-11-23T05:29:50Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.30071"
  },
  {
    "id": "2611.28963",
    "title": "Learning Land-Surface Hydrology World Model from Satellite Observations",
    "authors": [
      "Suya Li",
      "Zekun Qi",
      "Xiaochong Xu",
      "Duo Zhang"
    ],
    "abstract": "A world model should tell us not only what will happen, but what would happen under a different action. Learned Earth models now forecast remarkably well, yet forecast skill says little about what their state means or how it responds to a changed driver. We build LandWM, a world model of land-surface water in which rain is the action, learned from seven years of SMAP and CYGNSS observations: physical observation operators tie its latent state to soil water, and a mass-conserving balance governs how that state responds to rain. Over the U.S. Southern Great Plains, the model, never shown a soil-moisture value, tracks 28 in-situ probes as well as the operational SMAP Level-4 product, even from CYGNSS alone, and a storm added to the forcing of a station's cell wets its soil as natural storms wet the probes. Replace either piece and the forecasts stay, but the meaning goes: with neural operators, only a probe fitted to the stations finds the soil water; with a generic recurrent transition, rain on a single cell barely moves it. Yet when the same rain covers the whole region the two transitions swap roles, and the conserving one responds too weakly. Grounding makes a world model readable; its response to actions must be tested under more than one kind of intervention.",
    "published": "2026-11-21T17:56:27Z",
    "updated": "2026-11-21T17:56:27Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.28963"
  },
  {
    "id": "2611.28957",
    "title": "Micro Operational Robustness of LLMs on Code Generation",
    "authors": [
      "Debalina Ghosh Paul",
      "Hong Zhu",
      "Ian Bayley"
    ],
    "abstract": "It is now common practice in software development for large language models (LLMs) to be used to generate program code. It is desirable to evaluate the robustness of LLMs for this usage. This paper is concerned in particular with how sensitive LLMs are to variations in descriptions of the coding tasks. However, existing techniques for evaluating this robustness are unsuitable for code generation because the input data space of natural language (NL) descriptions is discrete and sparse. To address this problem, we propose a robustness evaluation method called scenario domain analysis, which aims to find the expected minimal change in the NL descriptions of coding tasks that would cause the LLMs to produce incorrect outputs. We have formally proved the theoretical properties of the method and also conducted extensive experiments to evaluate the robustness of four state-of-the-art LLMs: Gemini-pro, Codex, Llamma2 and Falcon 7B, and have found that we are able to rank these with confidence from best to worst. Moreover, we have also studied how robustness varies in different scenarios, including the variations with the topic of the coding task and with the complexity of its sample solution, and found that robustness is lower for more complex tasks and also lower for more advanced topics, such as multi-threading and data structures.",
    "published": "2026-11-21T17:48:23Z",
    "updated": "2026-11-21T17:48:23Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.28957"
  },
  {
    "id": "2611.28947",
    "title": "Don't Sleep, Keep Watch: Proactive Perception for Computer-Use Agents",
    "authors": [
      "Jiaqi Su",
      "Jie-Jing Shao",
      "Yichen Liu",
      "Long-Kai Huang",
      "Haiyan Yin"
    ],
    "abstract": "Computer-use agents (CUAs) built on vision-language models are increasingly entrusted with long-horizon tasks in live desktop, web, and mobile environments, where the screen keeps changing on its own. However, current CUAs lack real-time situational awareness: they perceive the environment through discrete snapshots, and the substantial inference latency of VLMs, compounded by highly dynamic interfaces, opens a perception-action gap in which the observed state frequently becomes stale before the corresponding action is executed. To bridge this gap, we present NightWatch, a plug-and-play framework that endows any CUA with continuous, temporally grounded perception without changing the agent's model, prompt, or action space. NightWatch couples the VLM agent with NightWatch-0.8B, a lightweight System-1 model that performs streaming monitoring of the interface state and keeps the agent synchronized with the evolving environment at low computational cost and latency, thereby grounding each decision in the current state rather than an outdated snapshot and reducing both stale actions and idle waiting while preserving task success. Experiments on desktop and dynamic web environments (OSWorld-Verified and DynaCU-Bench) show that NightWatch, driven by a watcher of only 0.8B parameters, reduces non-reasoning wall-clock time by 33% and wasted time by 53% on OSWorld while keeping task success on par, raises success on DynaCU-Bench from 39.5% to 44.2% with the large VLM agent, and is more efficient than passive-watching baselines such as AOI and PUSV under the same screenshot-only input, as well as a System-1 decision model more than $30\\times$ its size. Overall, NightWatch demonstrates that the timing of perception is as critical as its content, marking a step toward agents that maintain continuous awareness of their environment rather than perceiving it turn by turn.",
    "published": "2026-11-21T17:31:05Z",
    "updated": "2026-11-21T17:31:05Z",
    "categories": [
      "cs.CL",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.28947"
  },
  {
    "id": "2611.28943",
    "title": "SANA-Robot: Efficient World Action Model with Hybrid Memory",
    "authors": [
      "Yuyang Zhao",
      "Zekai Li",
      "Yicheng Pan",
      "Jiaming Tang",
      "Zhuoyang Zhang",
      "Jiaxu Xing",
      "Moritz Reuss",
      "Quanquan Peng",
      "Junsong Chen",
      "Enze Xie",
      "Zhijian Liu",
      "Song Han"
    ],
    "abstract": "World action models (WAMs) leverage the world knowledge of video generation models to improve action generation by aligning visual prediction with action prediction. However, their prediction overhead prevents real-time deployment on edge devices, and they usually lack an effective long-term memory. We introduce SANA-Robot, a 4.5B WAM with minute-level memory that runs in real time on edge devices, built on the following core designs: (1) hybrid memory at constant cost: our WAM relies on linear attention to maintain a global memory with a fixed-size state, and on sliding window softmax attention layers that propagate previous information, enabling high success rates on tasks requiring whole-episode memory while keeping an efficient and constant inference speed; (2) a unified model: by dynamically applying different noise levels to action and video tokens, SANA-Robot can serve not only as a policy but also as a world simulator; (3) a full-stack infrastructure for both memory training and inference, including efficient data packing and shuffling as well as memory-phase-based asynchronous execution. SANA-Robot achieves the best performance on the memory dimension of RoboDojo among models of medium size (about 5B) and the highest success rates on LIBERO-Plus, LIBERO-Pro and LIBERO-Max. In real-world deployment, SANA-Robot takes 135 ms per action chunk on an RTX 5090 with FP8 GEMMs and 115 ms with NVFP4 GEMMs, and achieves closed-loop, real-time asynchronous robot control at 30 Hz on edge devices, demonstrating both the efficiency and the effectiveness of SANA-Robot. Project page: https://nvlabs.github.io/Sana/Robot/",
    "published": "2026-11-21T17:23:39Z",
    "updated": "2026-11-21T17:23:39Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.28943"
  },
  {
    "id": "2611.28942",
    "title": "XShot: Cross-Shot Video Object Insertion from a Reference Video",
    "authors": [
      "Bangxun Tang",
      "Chen Chen"
    ],
    "abstract": "We present XShot, a framework for cross-shot video object insertion, which adds objects to a shot by watching another shot of the same scene. Video productions show a scene through many shots, and objects added to one shot must appear consistently in the others. Most video editors take the appearance of new objects from reference images and their location from a text prompt, a mask or an edited keyframe, leaving this consistency to the user. XShot reads both from a reference video of another shot, which need not be aligned with the target, and needs no mask, box or camera pose. We build on a video Diffusion Transformer and formulate the task as in-context generation over the reference video, a few images of the objects and the target video. A geometry-aware cross-shot attention estimates the epipolar geometry between the two shots from the model's own correspondences and uses it to guide where the target reads the reference and the exemplars. We train XShot with an erase-and-restore data engine: objects are erased from one shot of a film or a multi-camera recording and restored from another shot of the scene. Experiments show that XShot places objects more accurately and renders them more faithfully than open-source and commercial video editors, while leaving the rest of the shot intact.",
    "published": "2026-11-21T17:22:56Z",
    "updated": "2026-11-21T17:22:56Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.28942"
  },
  {
    "id": "2611.28940",
    "title": "When Rubrics Do Not Decide: Silent Value Completion in LLM Evaluation",
    "authors": [
      "Zhuangzhuang Pan",
      "Yan Xia",
      "Kaiwen Lei",
      "Chee Seng Chan"
    ],
    "abstract": "Multi-criterion LLM judges often evaluate responses without specifying how conflicting criteria resolve, leaving the winner undetermined even under exact criterion scores. Issuing a strict verdict without declaring the required trade-off premise constitutes silent value completion. We introduce TradeoffBench to isolate this failure by separating rule execution from response scoring. On authoritative criterion vectors, six open-weight non-reasoning judges pass all dominance and equality controls yet pick unsupported winners on 9%-81% of 1,345 conflicts. All 577 order-stable choices follow an explicitly banned majority rule. Reasoning-enabled configurations drop anonymous-vector violations to 2 in 9,720 judgments under an explicit rule, yet cannot bridge omitted trade-offs or divergent component scoring. On raw TradeoffBench text with unspecified trade-offs, GPT-6.1-sol omits its completion premise in 29.8% of 400 verified conflicts. Even under an explicit rule on four-rater-consensus MultiPref conflicts, four reasoning judges still issue strict verdicts on 16/45 (GPT-6.1-sol) up to 35/46 and 25/29 (open-weight judges) of valid presentations. We propose identified-first evaluation, decoupling specification support, explicit completion, and target agreement. In MultiPref human-score audits, peer-mean substitution raises directional disagreement from 0.6% to 28.8% on 2,707 shared targets. A single-peer ablation confirms a 29.38-point gap on 2,175 targets, ruling out averaging as the cause. In HUMAINE, declared partial trade-offs add 2.5 percentage points of coverage, yet newly decided pairs incur 3.9% disagreement versus 0.9% for Pareto. Reliable LLM judging, therefore, requires auditing, specification support, declared trade-offs, and human target agreement separately.",
    "published": "2026-11-21T17:18:03Z",
    "updated": "2026-11-21T17:18:03Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.28940"
  },
  {
    "id": "2611.28935",
    "title": "STEdgeFormer: MCU and NPU Deployable Transformer Architecture",
    "authors": [
      "Sudhakar Sah"
    ],
    "abstract": "Transformer-based sequence models have achieved strong performance in language and time-series modeling, but self-attention remains computationally and memory intensive for deployment on resource-constrained edge accelerators. We propose STEdgeFormer, a lightweight, hardware-aware sequence architecture designed for efficient execution on embedded neural accelerators. STEdgeFormer combines polynomial mixture layers and DyT normalization with an accelerator-aware causal memory block, replacing pairwise self-attention with compact causal aggregation. On TinyStories, the fully NPU-supported STEdgeFormer (MW) achieves a perplexity of 7.39 with 4.12M parameters and 6.51 MB RAM, with an end-to-end latency of 40 ms. In comparison, the standard 4.12M-parameter configuration achieves a lower perplexity of 6.79 but requires CPU fallback for unsupported operators, resulting in 1450 ms latency. Vanilla Transformer, on the other hand, achieves a perplexity score of 5.71 using a 4.40M-parameter model, but it cannot be deployed on the hardware. On downstream tasks, STEdgeFormer achieves 94% accuracy on ECG5000 and 93% accuracy on Speech Commands with 1.39M parameters. These results demonstrate that hardware-aware architectural choices and operator compatibility can have a substantial impact on practical inference latency, beyond model size and task accuracy alone. Rather than targeting state-of-the-art accuracy on individual benchmarks, STEdgeFormer is designed to provide a deployable sequence modeling architecture under the memory, computational, and operator constraints of embedded neural accelerators.",
    "published": "2026-11-21T17:09:05Z",
    "updated": "2026-11-21T17:09:05Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.28935"
  },
  {
    "id": "2611.28929",
    "title": "Definition-Guided In-Context Learning for Zero-Shot Spoken Language Understanding",
    "authors": [
      "Neeraj Agrawala",
      "Sriram Ganapathy"
    ],
    "abstract": "Adapting spoken language understanding (SLU) systems to novel or revised label taxonomies conventionally requires additional labeled data and retraining, creating a bottleneck for real world deployment. While in-context learning with few-shot demonstrations offers an alternative, multi-modal generalization and scaling has been challenging. In this work, we investigate whether natural-language definitions alone can guide zero-shot SLU without demonstration exemplars, finding that symbolic definitions serve as the primary supervisory driver for adapting speech-text models. We operationalize this principle as Definition-Guided In-Context Learning (DG-ICL), a fine-tuning framework that decouples semantic categories from fixed lexical names. By replacing labels with dynamically randomized definitions (arbitrary synthetic tokens in DG-ICL-Sym or permuted vocabulary words in DG-ICL-Flip), DG-ICL avoids lexical shortcuts and encourages the model to ground acoustic representations in contextual definitions. Novel categories can thus be introduced at inference simply by defining them through the instructions. Across three speech-text models (AUDIO FLAMINGO 3, QWEN2-AUDIO, and SALMONN), DG-ICL outperforms standard instruction tuning on held-out tasks under novel symbols (0.663 vs. 0.449 macro-F1 on Audio Flamingo 3; 0.703 vs. 0.620 on Qwen2-Audio; 0.582 vs. 0.399 on SALMONN), while remaining competitive on original labels. Furthermore, counterfactual evaluations demonstrate instruction following abilities, where it is shown that DG-ICL-Sym retains 68% of its performance when definitions contradict pre-trained lexical priors, whereas standard instruction tuning elicits significantly reduced retention of 21%. Finally, we show that DG-ICL enables zero-shot speech clustering into user-defined categories specified on the fly",
    "published": "2026-11-21T17:03:52Z",
    "updated": "2026-11-21T17:03:52Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.28929"
  },
  {
    "id": "2611.28924",
    "title": "OmniDecisionBench: Evaluating and Benchmarking the Multimodal Jev-Style System One Decision Models",
    "authors": [
      "Tianxiang Gao",
      "Jinzhe Li",
      "Yue Zhou",
      "Dandan Guo",
      "Qi Wang",
      "Diana Inkpen",
      "Yuan Wu",
      "Yi Chang"
    ],
    "abstract": "Multimodal System One models answer visual tasks with typed decisions and native probabilities, yet no holistic evaluation compares them with general VLMs or maps either class's capability boundaries. We introduce OmniDecisionBench, a holistic benchmark of multimodal System One models. Its main evaluation assigns 45 datasets (192,975 records) to five capability families and twelve primary angles across four typed interfaces, scoring accuracy and candidate-probability calibration. A validation layer adds three single-factor diagnostics varying visual presentation, textual evidence sufficiency, and target dataset. Across three System One models and two general VLMs, three regularities emerge. First, strengths depend on angle and metric: System One models lead discrete tasks overall with lower ECE15 on most perception, reading, and reasoning angles (Jev 1.14: 80.14% accuracy, 4.50% ECE15), while general VLMs lead ordinal grading and outperform Jev 1.14 among the three models tested on direct Box grounding. Second, multi-image and abstract reasoning bound every model, where confidence rather than accuracy separates them. Third, reliability shifts with the input: rendering only options nearly triples Jev 1.14's selective risk at nearly flat mean signed bias, and donor risk cutoffs often exceed target risk across unseen datasets and task families. OmniDecisionBench thus maps which model class suits each angle and where reliability ends. The code and dataset will be available at https://github.com/Glax147/OmniDecisionBench.",
    "published": "2026-11-21T16:54:21Z",
    "updated": "2026-11-21T16:54:21Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.28924"
  },
  {
    "id": "2611.28922",
    "title": "PIAE: Physics-Informed Continuous Autoencoding for Compact 3D Human Motion",
    "authors": [
      "Osama Alshammari",
      "Omar Mohammed",
      "Kerven Durdymyradov",
      "Naeemullah Khan"
    ],
    "abstract": "Temporal compression reduces the sequence length that motion generators must model, but can damage articulated detail and global trajectory. These errors have unequal consequences: root-velocity and heading errors propagate through trajectory recovery and affect the placement of the entire body. We propose PIAE, a physics-informed continuous autoencoder that allocates a fixed token budget between explicitly retained kinematic signals and complementary learned features. At 8 x temporal compression, each 256-dimensional token contains 224 learned values and a 32-dimensional physical carrier. The complete token conditions neural decoding, while a parallel recovery path constrains selected outputs. On the official HumanML3D benchmark, PIAE achieves 8.936 mm global MPJPE, an 82.0% reduction relative to a same-width learned-only model. The benefit extends beyond trajectory restoration: facing-local neural-body error before analytical correction decreases by 76.6% in a frozen-checkpoint validation diagnostic, and supplying the same true trajectory to both models preserves the body-quality advantage. Targeted root-only and explicit-root hybrid controls establish strong trajectory-aware comparisons; alternative carriers reveal that torso references favor position accuracy, whereas stance anchors favor support quality. With the original 8 x AEs frozen, matched text-to-motion generators predict every carrier value and improve FID from 0.506 to 0.163. Frozen reconstruction also transfers to AIST++ without adaptation. The compressed carrier interface reduces measured generation time by 27.8% relative to its 1 x counterpart. Together, these findings demonstrate that selective preservation can use a fixed representation budget more effectively, improving neural articulated reconstruction and downstream generation in compact human motion.",
    "published": "2026-11-21T16:52:57Z",
    "updated": "2026-11-21T16:52:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.28922"
  },
  {
    "id": "2611.28919",
    "title": "When Do Better Visual World Models Make Better Plans? Decision-Aligned Selection for Latent Planning",
    "authors": [
      "Chan Aristella Lu",
      "Arya Fayyazi",
      "Junil Yeo",
      "Jin Lu",
      "Kyu Hyung Lee",
      "Mehdi Kamal",
      "Massoud Pedram"
    ],
    "abstract": "Visual world models enable goal-conditioned planning by predicting the outcomes of candidate actions in latent space. However, planning depends on how well a model ranks candidates, whereas training optimizes how accurately it predicts each one. We identify the Decision-Relevant Residual (DRR), the part of the cost error that can reorder candidates, and show that the more training reduces the DRR, the more it improves selection (Spearman $ρ= 0.82$, vs. $0.61$ for prediction error). Building on this insight, we introduce Decision-Aligned Selection (DAS), a plug-in selection rule that scores candidates by the standardized consensus of several independently trained checkpoints, which averages out their checkpoint-specific residuals. Across two model families (LeWorldModel and DINO-WM) and five tasks, DAS selects better actions than single checkpoints in 12 of 18 configurations and outperforms training one model three times longer in 14 of 18. In closed loop, DAS improves success over single checkpoints in 6 of 9 pre-registered LeWM comparisons.",
    "published": "2026-11-21T16:51:29Z",
    "updated": "2026-11-21T16:51:29Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.28919"
  },
  {
    "id": "2611.28917",
    "title": "Div3DAfford: Diverse 3D affordance grounding",
    "authors": [
      "Haomeng Zhang",
      "Raymond A. Yeh"
    ],
    "abstract": "3D affordance grounding aims to localize 3D regions specified by an interaction query. Existing methods predict a single affordance mask, overlooking the inherent diversity of human-object interactions. We introduce diverse 3D affordance grounding, a new task that requires predicting multiple plausible regions for a given object and affordance query. We then propose Div3DAffordNet, a transformer-based set prediction model capable of generating diverse affordance regions. To address the scarcity of diverse 3D affordance data, we develop an automated pipeline leveraging 2D generative models and 3D reconstruction techniques to synthesize 3D affordances, followed by lightweight human verification (reducing the annotation time by 72X), yielding the Div3DAfford benchmark. Extensive experiments show Div3DAffordNet effectively captures multi-mask affordance regions. Our method achieves the SOTA affordance grounding performance in the multi-mask setting, reducing GED-SIM from 0.745 to 0.492, while maintaining competitive single-mask performance on the standard benchmark of 19.0 mIoU.",
    "published": "2026-11-21T16:46:02Z",
    "updated": "2026-11-21T16:46:02Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2611.28917"
  },
  {
    "id": "2611.28883",
    "title": "Health Ikigai: Semantic Conversational Interfaces for Wearable Health Data to Support Behavioral Change for Senior Indian",
    "authors": [
      "Md Haseen Akhtar",
      "Hansoo Lee",
      "Rafael A. Calvo"
    ],
    "abstract": "In ubiquitous health contexts, wearable feedback is often encountered in brief, interrupted moments of everyday life. However, many wearable and mobile health systems still present personal health data through numerical dashboards, leaving users and health coaches to interpret trends, thresholds, and deviations on their own. This interpretive burden may be especially relevant for adults aged 50-65 in India, where digital literacy, health literacy, language, and daily routines can shape how health technologies are understood and used. We present Health Ikigai, a design-oriented proof-of-concept framework that reframes wearable activity feedback from dashboard-based numerical interpretation to semantic conversational feedback. The prototype transforms replayed wearable-derived activity data into baseline-aware triggers, plain-language feedback, limited-turn conversational prompts, and coach-facing review summaries. A preliminary formative evaluation with ten adults in India suggests that participants perceived the interaction as understandable, lightweight, supportive, and actionable. We discuss design implications for low-burden wearable health interfaces that preserve coach oversight while reducing users' interpretive work.",
    "published": "2026-11-21T15:59:43Z",
    "updated": "2026-11-21T15:59:43Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.28883"
  },
  {
    "id": "2611.28881",
    "title": "FormaFin: Verifiable Financial Analysis with Solver-Guided Reinforcement Learning",
    "authors": [
      "Bethel Hall",
      "William Eiers"
    ],
    "abstract": "Formally verifying financial analyses generated by large language models (LLMs) remains challenging as financial rules are largely expressed in natural language and rarely have corresponding formal specifications. Training language models to formalize these rules is hindered by the scarcity of labeled data and reliable training signals, while confidential financial data favor small models that run locally. We introduce FormaFin, a framework that trains small open language models to translate financial rules into reusable SMT formulas. FormaFin integrates teacher distillation with reinforcement learning using an SMT solver to compute rewards from numerical thresholds stated in financial rules. We evaluate FormaFin on corporate loan monitoring, in which lenders check borrowers' financial figures against loan agreements. To evaluate our framework, we curate \\bench{}, a benchmark containing 143 loan agreements and 2,527 questions covering compliance, earnings cushion, and debt capacity. Our results show that a 7B formalizer achieves 94.8\\% accuracy, outperforming open LLMs up to ten times larger. Across three model families, accuracy ranges from 92.6 to 96.8\\%. Our framework also detects 95.6 to 99.7\\% of errors in other LLMs' financial analyses. We make FormaFin and \\bench{} publicly available.",
    "published": "2026-11-21T15:56:56Z",
    "updated": "2026-11-21T15:56:56Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.28881"
  },
  {
    "id": "2611.28878",
    "title": "Eidetic Code World Model",
    "authors": [
      "Wenqing Tian",
      "Zijian Zhang",
      "Qiang Liu",
      "Liang Wang"
    ],
    "abstract": "Executable code can preserve a world's structural layout, yet video renderers frequently alter the appearance of previously visited places once they leave the camera view. We present Paintress, a code-conditioned world model that couples an executable geometric proxy with an independently parameterized 3D Gaussian appearance memory in a shared metric coordinate frame. While the proxy enforces structural and visibility constraints, 3D Gaussians capture the visual realization synthesized by emitted observations. To balance stable incremental fusion with consistent readout, Paintress separates writing from reading: newly emitted frames update a persistent raw Gaussian map under confidence-gated selection, whereas a cloned reader copy is globally refined against the observation archive and rendered with coverage masks to condition generation. We also introduce Expedition-33, a benchmark for generated-appearance retention across 11 static scenes, five route families, and 15, 30, and 60 s target absences (165 settings per system). Excluded from the opening image, targets are synthesized during a shared prefix and scored against each system's own first visit at matched return cameras. Across ten systems (1,650 videos), Paintress achieves 0.1220 ROI-LPIPS, 0.0613 MAE, and 52.12% detail retention (vs. 0.2731, 0.1401, and 10.91% for CWM), with lower discrepancy at 60 s (0.1630) than CWM, AgentGarten, and Lyra 2.0 achieve at 15 s.",
    "published": "2026-11-21T15:51:16Z",
    "updated": "2026-11-21T15:51:16Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.28878"
  },
  {
    "id": "2611.28873",
    "title": "NAT: Scaling Causal Neural Action Tokenizers Across Embodiments",
    "authors": [
      "Ahad Jawaid",
      "Alexander Swerdlow",
      "Yu Xiang"
    ],
    "abstract": "Action tokenizers let robot policies treat control as autoregressive next-token prediction. As these policies are trained on larger and more diverse datasets, they will need a universal tokenizer that can encode actions from many embodiments and data sources, including ones it has not seen. We study action tokenization at scale, training on 49k hours of action data from real-world robots, handheld grippers, simulation, and humans. We introduce Neural Action Tokenizer (NAT), a causal tokenizer whose decoder lets actions be executed as their tokens are generated. Across four simulation benchmarks, NAT outperforms FAST and prior neural action tokenizers when tokenizing unseen robot embodiments, and in vision-language-action models it outperforms FAST+ across four benchmarks and on a real robot when acting through its tokens. NAT tokens also close the performance gap to a flow-matching action head on some benchmarks while lowering the inference latency for first actions. Our experiments also find that robot data may not be necessary to learn an effective action space: a NAT trained only on human hand motion performs close to tokenizers trained on robot data.",
    "published": "2026-11-21T15:43:07Z",
    "updated": "2026-11-21T15:43:07Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.28873"
  },
  {
    "id": "2611.28872",
    "title": "SENSA: Visual-to-Brain Generation with Individualized Subject-State Transfer and Adaptation",
    "authors": [
      "Yihang Zou",
      "Chunmei Qing",
      "Ruixi Liang",
      "Haichuan Wei",
      "Junpeng Tan",
      "Qifan Yang",
      "Wanxiang Luo",
      "Haodong Li",
      "Xiangmin Xu",
      "Yefeng Zheng"
    ],
    "abstract": "Visual-to-brain encoding predicts neural responses to visual stimuli, supporting visual cognition research and neural decoding. However, challenges in disentangling shared from image-specific activity, together with inter-subject distribution shifts and representational heterogeneity, limit accurate encoding and cross-subject generalization with limited calibration data. We introduce SENSA, a structured continuous neural response generation framework that separates shared activity from image-dependent responses and calibrates a compact subject state. An independent response prior captures shared activity, while complementary visual descriptors drive separable sensor-time bases and a shared Response Refiner. Subject-Adaptive Factor Transport adjusts the spatiotemporal expression of shared bases, while Source-Grounded Residual Memory predicts image-dependent corrections in source-response coordinates. Together, they personalize a frozen generator using limited paired support. Experiments demonstrate that the generation backbone outperforms recent generators across three datasets, with image-identity perturbations confirming stimulus specificity. Using only 400 paired images, electroencephalography (EEG) and the Natural Scenes Dataset (NSD) calibration achieve residual Pearson correlations of 0.1091 and 0.2995, respectively, demonstrating effective brain-response generation and cross-subject adaptation.",
    "published": "2026-11-21T15:41:45Z",
    "updated": "2026-11-21T15:41:45Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.28872"
  },
  {
    "id": "2611.28871",
    "title": "KineState-SWAM: A Surgical World Action Model with Explicit Kinematics and Causal Interaction Dynamics",
    "authors": [
      "Rulin Zhou",
      "Yujie Ma",
      "Rui Tang",
      "Qiujie Song",
      "Wanhao Liu",
      "Guoheng Ma",
      "Liangjing Shao",
      "An Wang",
      "Hongliang Ren"
    ],
    "abstract": "Existing surgical world models often leave implicit how instrument motion drives localized tissue responses and how interaction history informs subsequent actions. We introduce KineState-SWAM, a surgical world-action model coupling action prediction and video generation through a persistent interaction state, separating kinematically determined instrument motion from learned scene evolution. A flow-matching policy predicts joint trajectories conditioned on interaction state, robot configuration, and task instruction. Kinematic Geometry Conditioning converts these trajectories into surface-motion tokens and spatially aligned instrument renderings using calibrated URDF kinematics. Causal Interaction Dynamics recurrently updates the state through geometry-guided attention and motion-aligned feature transport, carrying interaction history into subsequent action predictions without intermediate video synthesis. The State-Geometry Adapter combines state-dependent spatial modulation with localized geometric residuals to guide video generation. Interaction-aware supervision emphasizes tissue responses near instrument working regions. We introduce dVRK-Chole5.2k, comprising 5,255 videos spanning 17 surgical tasks. Experiments demonstrate improved action accuracy and video fidelity over evaluated baselines within matched action-conditioning settings. Ablations support preserving and transporting interaction states for long-horizon prediction.",
    "published": "2026-11-21T15:38:18Z",
    "updated": "2026-11-21T15:38:18Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.28871"
  },
  {
    "id": "2611.28870",
    "title": "Postpartum Sense-Making and AI in a Fragmented Care System",
    "authors": [
      "Diana Freed",
      "Maja Mishevska"
    ],
    "abstract": "Postpartum women must navigate health information across a fragmented landscape of clinicians, peers, online communities, influencers, and, increasingly, large language models (LLMs). Existing evaluations of LLMs in health contexts primarily ask whether systems provide accurate, safe, and readable information. We argue that these criteria, while essential, are insufficient for understanding how LLMs may affect postpartum care. LLMs enter an information ecology in which women are already required to reconcile competing forms of expertise, determine whether their experiences are normal or concerning, and decide when and where to seek care. At the same time, online representations of motherhood and femininity shape which postpartum experiences are made visible and what forms of self-management are expected of women. Drawing together research on postpartum care gaps, online help-seeking, influencer cultures, gendered responsibility, and AI-supported health information, we position LLMs as emerging intermediaries within this broader care infrastructure. We argue that evaluating postpartum AI requires examining not only information quality, but also how these systems shape epistemic coordination, transitions to formal care, and the distribution of responsibility for making fragmented systems of care work.",
    "published": "2026-11-21T15:37:19Z",
    "updated": "2026-11-21T15:37:19Z",
    "categories": [
      "cs.HC",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2611.28870"
  },
  {
    "id": "2611.28861",
    "title": "\"I feel like AI is just everywhere\": A longitudinal qualitative study on parents' perceptions, use, and mediation of GenAI",
    "authors": [
      "Jennica Li",
      "Shirley Zhang",
      "Dakota Sullivan",
      "Bilge Mutlu",
      "Heather Kirkorian",
      "Kassem Fawaz"
    ],
    "abstract": "GenAI has developed rapidly over the last few years, yet few longitudinal studies exploring how individuals' experiences with GenAI have changed over time exist. Even fewer studies have focused on families with children, despite the opportunity to explore how parents have balanced their needs, their children's development, and the fast pace in which technology changes. To better understand how parents' perceptions, use, and mediation of GenAI shifted over two years, we interviewed 10 parents who had participated in a prior study about their families' experiences with GenAI. Parents had shifted from thinking GenAI was novel to feeling like it was unavoidable, characterizing GenAI as a limited tool to believing GenAI development needed to be regulated, and focusing on their personal mediation strategies to wanting systemic plans to curb GenAI's long-term consequences. We position our findings within the context of parental mediation of technology and increasing collective mitigation of GenAI-related risks.",
    "published": "2026-11-21T15:21:01Z",
    "updated": "2026-11-21T15:21:01Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.28861"
  },
  {
    "id": "2611.28853",
    "title": "CivilCADBench: Benchmarking Multimodal LLMs for Understanding, Reconstructing, and Designing Civil Engineering Drawing Sets",
    "authors": [
      "Zelin Zheng",
      "Difei Wu",
      "Xinyan Liu",
      "Minghong Chen",
      "Antoni B. Chan",
      "Difan Zou"
    ],
    "abstract": "Civil infrastructure is designed, built, and maintained through engineering drawing sets, yet preparing and revising them remains labour-intensive and calls for automation. Multimodal large language models (MLLMs) are promising candidates, but assessing them requires a benchmark grounded in real engineering practice. We introduce CivilCADBench, a benchmark for understanding, reconstructing, and designing civil engineering drawing sets, built from real infrastructure drawings and source CAD files containing over 250,000 CAD entities. Unlike parametric 3D CAD models, these drawings are dense, layered, and multi-sheet; and since prints are lossy projections with no pixel trace of layers, a file can print correctly yet remain wrongly organised. CivilCADBench comprises three task families of increasing difficulty: understanding tasks are evaluated with 2,183 expert-reviewed questions ranging from single sheets to whole sets, while reconstruction and design tasks are agentic, requiring models to rebuild printed pages as editable CAD files, either as single pages or entire drawing sets, and to produce new designs. These tasks are performed across 232 pages, 28 sets, and 19 design tasks, and evaluated by a deterministic scorer that compares model outputs with the designers' source files on geometry, layers, text, and dimensions. We evaluate seven frontier MLLMs on CivilCADBench, and find that they read and redraw printed content accurately but recover the file structure poorly: the best model scores above 90% in understanding and single-page reconstruction, yet only 60% on layer assignment and 48% on design. Grounded in real engineering practice, CivilCADBench exposes both the capabilities and the limitations of frontier models in professional civil engineering, laying a foundation for next-generation models and agentic systems for intelligent civil engineering.",
    "published": "2026-11-21T15:08:36Z",
    "updated": "2026-11-21T15:08:36Z",
    "categories": [
      "cs.CV",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2611.28853"
  },
  {
    "id": "2611.28850",
    "title": "MQCODet: Modality Quality-Guided Collaborative Optimization for UAV-Based RGB-T Tiny Pedestrian Detection",
    "authors": [
      "Hui Li",
      "Jianbo Ma",
      "Hui Luo",
      "Guanglin Qi",
      "Zhixing Wang",
      "Haorui Zuo",
      "Jianlin Zhang"
    ],
    "abstract": "Unmanned aerial vehicle (UAV)-based RGB-thermal (RGB-T) remote sensing provides complementary visual and thermal information for pedestrian perception under complex aerial observation conditions. However, detecting tiny pedestrians in UAV-based RGB-T imagery remains challenging due to cross-modal spatial heterogeneity, manifested as modality quality imbalance and spatial position misalignment. Existing RGB-T detectors primarily address these challenges at the feature fusion stage, without establishing an effective coupling between feature fusion and object localization, potentially resulting in suboptimal detection performance. To address this limitation, we introduce a Modality Quality-Guided Collaborative Optimization Detector (MQCODet), which extends modality quality from a fusion prior to a localization supervision cue. Specifically, we propose a Dynamic Calibration and Region-Aware Fusion (DCRF) module that progressively refines cross-modal spatial alignment and performs region-aware fusion to generate reliable multi-scale features and a scene-level modality quality prior. We further design an Efficient Contextual Interaction (ECI) encoder to enhance multi-scale feature interaction while preserving fine-grained spatial details. Moreover, we propose a Modality-Aware Adaptive (MAA) loss that incorporates the modality prior and object scale to adaptively balance spatial consistency and geometric similarity for localization supervision. Extensive experiments demonstrate that MQCODet surpasses state-of-the-art methods on two UAV-based RGB-T tiny pedestrian detection benchmarks while achieving real-time inference on the edge platform.",
    "published": "2026-11-21T15:03:50Z",
    "updated": "2026-11-21T15:03:50Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.28850"
  },
  {
    "id": "2611.28849",
    "title": "Guarding with Judgment: Learning to Intervene for Multimodal Safety",
    "authors": [
      "Jipei He",
      "Cheng Cheng",
      "Liuguo Wang",
      "Zihan Wen",
      "Changlin Yu",
      "Wentao Song",
      "Suyun Zhao"
    ],
    "abstract": "When visual context makes an ordinary request unsafe to answer as asked, a blanket refusal may leave the user's need unresolved. Choosing how to help requires distinguishing an established hazard from a condition that still needs verification, a distinction that binary safety labels leave unspecified. We formulate this decision through four actions: allow, warn, review, and refuse. To ground these decisions in verifiable evidence, we build a corpus of 20,126 training audits and the JudiBench benchmark, connecting each action to diagnostic judgments, source evidence, and controlled context changes. Our guard, JudiAct, separately states what the source establishes, what condition governs the help, and how the rules apply. It then checks these three brief review items against the original inputs to predict diagnostic labels and a handling action. Supervised training learns individual judgments while comparing label assignments across related cases. A second stage swaps one review item at a time, using the resulting audit feedback to refine review generation. On JudiBench, JudiAct improves request and answer Macro-F1 by more than 28 percentage points over its 4B backbone. Across nine public benchmarks, it outperforms state-of-the-art guards on the mean delivered-answer score in both pre-generation and post-generation settings, cutting MM-SafetyBench attack success from 40.78% to 25.30%.",
    "published": "2026-11-21T15:02:04Z",
    "updated": "2026-11-21T15:02:04Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.28849"
  },
  {
    "id": "2611.27983",
    "title": "Optimal Linear Regression Without a Variance",
    "authors": [
      "Artin Tajdini",
      "Jasper C. H. Lee",
      "Jonathan Scarlett",
      "Kevin Jamieson"
    ],
    "abstract": "We study high-probability linear regression in the infinite variance regime, wherecthe regression noise has only a finite conditional $α$-moment $ν$ for some unknown $α\\in(1,2)$, and the covariates may only have finite moments up to a given order (e.g., 4th moment). We give a black-box reduction that converts finite-variance regression procedures into weak-moment procedures. The reduction is based on empirical residual pruning and is agnostic to the moment exponent, the noise scale, the covariance, and the design moment. Under a finite fourth-moment condition on the covariates, any finite-variance subroutine attaining the sub-Gaussian rate yields the following when the number of samples $n$ is above a suitably defined threshold: Without knowing $α$ or $ν$, we have with probability at least $1-δ$ that $ \\|\\widehatθ-θ^*\\|_Σ \\lesssim_α ν^{1/α} \\big(\\frac{d+\\log(1/δ)}{n}\\big)^{\\frac{α-1}α}, $ where $d$ is the dimension, $Σ$ is the covariate covariance matrix, and $\\|v\\|_Σ:=(v^\\topΣv)^{1/2}$. We further prove a matching minimax lower bound that holds under the same conditions. The reduction is computationally efficient whenever the finite-variance subroutine is. We also obtain a distribution-free prediction guarantee under a bounded raw $α$-moment assumption on the response, and give an analogous $α$-agnostic reduction for mean estimation.",
    "published": "2026-11-20T18:58:45Z",
    "updated": "2026-11-20T18:58:45Z",
    "categories": [
      "stat.ML",
      "cs.AI",
      "cs.IT",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.27983"
  },
  {
    "id": "2611.27547",
    "title": "GameScrub: Learning HUD Removal from Real Gameplay with Recovered Targets",
    "authors": [
      "Mohammad Areeb Qazi",
      "Yiyan Hu",
      "Yanan Wang",
      "Xuezhi Liang",
      "Xin Li",
      "Fan Yang",
      "Xin Gao",
      "Guangyi Liu"
    ],
    "abstract": "Gameplay videos are a rich source of experience for learning virtual-world dynamics, yet their frames contain heads-up displays (HUDs) that follow interface rules rather than scene dynamics. Removing HUDs would make this footage directly usable for learning world dynamics. However, training a removal model requires paired clips with and without HUDs, whereas real recordings contain only HUD-overlaid footage. Existing work synthesizes pairs by compositing HUD graphics onto HUD-free footage, requiring a separately curated clean corpus and producing HUDs that only approximate real ones. Models trained on such pairs leave 40 to 50% of real HUD elements untouched. We instead recover pseudo-clean targets directly from real recordings by inpainting HUD regions with a pretrained video diffusion model. Preventing HUD traces from leaking into recovered targets is challenging because latent video autoencoders mix information across mask boundaries. Our training-free recovery pipeline, GameScrub-Data, pre-fills HUD regions with flow-guided background estimates before encoding, excludes HUDs from scene conditioning, and confines restoration to masked regions through pixel-space compositing. The resulting pairs train GameScrub, a video diffusion removal model that handles diverse HUDs without inference-time masks or clean reference images. On the in-the-wild Game2World benchmark, GameScrub achieves an artifact-adjusted removal score of 71.95, compared with 57.86 for the strongest reference-free GameCleaner configuration, and removes 90.06% of annotated HUD elements versus 59.07%. These results demonstrate that real recordings with recovered targets can support effective HUD removal, advancing HUD-free gameplay data for world models and controllable video generation.",
    "published": "2026-11-20T12:45:33Z",
    "updated": "2026-11-20T12:45:33Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.27547"
  },
  {
    "id": "2611.27543",
    "title": "On the Limits of Observability for Evaluating Coverage in Machine Unlearning",
    "authors": [
      "Ziluowen Luo",
      "Jun Yin",
      "Songyang Liu",
      "Ji Qi",
      "Chuang Hu",
      "Kyrie You Wu",
      "Chaozhuo Li",
      "Senzhang Wang"
    ],
    "abstract": "Machine unlearning aims to remove the influence of any requested subset of training data while preserving utility on the remaining data. Empirical evaluations measure predictive accuracy and infer training-set membership (MIAs) from model outputs or intermediate activations. However, by focusing on selected forget sets, these evaluations can overlook Coverage, the range of requests a method can fulfill. To assess this coverage, we first conduct a stress test of observability with 502 retrained models, finding that hidden embeddings reveal known deletions missed in predictions. To characterize capacity limits on coverage, we show that distinguishing all $n$ singleton deletions with linear scores can require a shared representation of rank $Ω(\\log n)$. We further extend the bound to arbitrary subsets and show when partial deletion can appear complete. Building on this analysis, we propose CEO, a framework for evaluating unlearning coverage under limited observability. Its compositional color-shape benchmark makes forgetting and retained utility measurable from the full output distribution and provides a leave-one-out retraining oracle for each target. From a fixed number of oracle observables, we estimate empirical target coverage, the fraction of targets reliably flagged when deleted and rarely flagged under any other deletions. To recover missed deletions, CEO further expands each observable representation into high-dimensional activation space with the frozen encoder of a SAE trained on the original model. Extensive experiments of 20 baselines shows that even on this simple synthetic task, only retraining from scratch covers all deletion targets.",
    "published": "2026-11-20T12:38:56Z",
    "updated": "2026-11-20T12:38:56Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.27543"
  },
  {
    "id": "2611.27542",
    "title": "When Visually Rich Documents Meet Multi-Vector Retrieval for Region-level Retrieval-Augmented Generation",
    "authors": [
      "Xu Yuan",
      "Liangbo Ning",
      "Yujuan Ding",
      "Qing Li",
      "Wenqi Fan"
    ],
    "abstract": "Visually rich documents (VRDs) convey knowledge through textual, visual, and layout information that text-centric Retrieval-Augmented Generation (Text-RAG) struggles to fully exploit. Recent Vision-RAG approaches enable retrieval and generation directly from document images, retaining this multimodal information. However, earlier Vision-RAG methods commonly adopt coarse retrieval representations and full-page visual contexts, which can obscure local evidence and introduce substantial redundancy and computational overhead. To address these challenges, we propose MV-VisRAG, a region-level Vision-RAG framework that uses semantically complete regions for both document representation and visual augmentation. Specifically, MV-VisRAG first constructs these regions through a ContentAdaptive Regionalization module. It then encodes them into local region vectors and a page-level global vector using a VLM-based retriever trained through multimodal reconstruction pretraining and retrieval fine-tuning. With this compact multi-vector representation, MV-VisRAG performs late-interaction retrieval and estimates region contributions from the resulting matching scores. These contributions guide the selection of relevant regions, which are then rearranged into a compact visual context for generation. Experiments across five benchmarks demonstrate retrieval and generation gains over corresponding baselines, while region-level augmentation substantially reduces visual tokens and computational cost. Our code will be made publicly available at https://github.com/xandery-geek/MV-VisRAG.",
    "published": "2026-11-20T12:38:38Z",
    "updated": "2026-11-20T12:38:38Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.27542"
  },
  {
    "id": "2611.27541",
    "title": "From Tokens to Pixels: Training-Free Guided Upsampling of Frozen CARL Features for Hyperspectral Imaging",
    "authors": [
      "Dominik Fromme",
      "Ellen Markowski",
      "Tim Streckert",
      "Jörg Thiem"
    ],
    "abstract": "Camera-agnostic foundation models such as CARL map spectral images from arbitrary sensors into a shared feature space, but deliver their features only on a token grid at one eighth of the input resolution. The usual bilinear interpolation blurs material boundaries over about one token and rounds off corners. We investigate how much spatial accuracy image-guided upsampling recovers for frozen CARL features without training the encoder or the upsampler. We compare joint bilateral upsampling (JBU), a guided filter and the pretrained AnyUp, each with the hyperspectral image or an RGB rendering as the guide. A hyperspectral ColorChecker dataset acquired specifically for this study, with model-independent reference geometry measured to sub-pixel precision, serves as the evaluation benchmark. JBU with the hyperspectral guide raises the Boundary IoU from 13 to 67 % and reduces the effective edge width of the features from 38 to 4 px, close to the resolution of the raw spectra. The effect occurs in all 24 patches of the ColorChecker and replicates on an additional recording. On placenta and oral cavity images, the feature edges also become markedly qualitatively sharper. For sharp, high-contrast boundaries, JBU is the most accurate and most economical method. On tissue with softer transitions, the pretrained AnyUp yields qualitatively sharper contours. An analysis of 78 simulated band configurations shows that the gain persists in every configuration as long as the head matches the configuration. Image-guided upsampling is thus a simple, training-free step for applications that use CARL frozen with linear heads.",
    "published": "2026-11-20T12:37:51Z",
    "updated": "2026-11-20T12:37:51Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.27541"
  },
  {
    "id": "2611.27533",
    "title": "Standard-Anchored Delegation in Teachers' Use of Generative AI",
    "authors": [
      "Muhammad Saleh Farooq",
      "Muhammad Ahmad Khan",
      "Muhammad Jon Raza"
    ],
    "abstract": "Teachers who use generative AI must decide which parts of their work to hand over, while they remain accountable for what reaches students. We studied these decisions in Punjab, Pakistan, through a qualitatively driven mixed-methods study. We interviewed 13 teachers from government, private, NGO and vocational institutions, four administrators and one student, and coded each teacher's position on twelve educational tasks. Nine teachers accepted AI drafts or substantial assistance with lesson planning, but none accepted AI-drafted learning objectives, and eleven did not use AI to encourage or emotionally support students. Teachers who would accept AI marking required that the model be given a rubric or marking criteria. Building on assessment research and HCI work on verifiability, we call this pattern standard-anchored delegation: teachers handed a component of a task to AI when a standard outside the model, such as a textbook or rubric, defined a correct output and the teacher could apply that standard to the result. Having a standard was not always enough. Several government-school teachers did not use AI to mark quizzes even though the quizzes had answer keys, because they expected students to look for evidence of the teacher's effort. Checking AI output required subject knowledge and time, and private schools gave teachers more support for this than government schools did. Participants also read disclosure of AI use as a statement about whether the teacher had reviewed the work. We propose that teacher-facing AI tools ask for the relevant standard before generating and show each output beside it, and that schools account for the time that checking takes.",
    "published": "2026-11-20T12:29:14Z",
    "updated": "2026-11-20T12:29:14Z",
    "categories": [
      "cs.HC",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2611.27533"
  },
  {
    "id": "2611.27529",
    "title": "Fix Where It Fails: Root-Cause-Guided Agentic Harness Optimization for Scene Graph Generation",
    "authors": [
      "Jee Eun Kim",
      "Donghyeon Choi",
      "Sangjune An",
      "Hae Beom Lee",
      "Kyong Hwan Jin"
    ],
    "abstract": "Scene graph generation (SGG) aims to detect objects in an image and predict the relationships between them. The standard PredCls, SGCls, and SGDet settings show how much performance drops without ground-truth boxes and labels, but not where or why a model fails. Knowing this would allow fixing a model where it fails, without retraining. We propose RoHa-SGG (Root-cause-guided Harness optimization for SGG), which extends agentic harness optimization to SGG. It optimizes the harness, the inference code around a frozen SGG model. RoHa-SGG has two main LLM agents. A root-cause analysis (RCA) agent finds the components where the model fails and diagnoses why, and a proposer agent searches for a harness that fixes these causes. We evaluate RoHa-SGG on Visual Genome and PSG with representative two-stage, one-stage, and multimodal-LLM SGG models. The analysis shows that the components where ground-truth triplets are lost differ across models and datasets. RoHa-SGG improves every metric on all five model-dataset combinations. Graph-constrained R@100 and mR@100 rise by up to 15.8 and 26.4 points for the multimodal LLM and by up to 3.6 and 10.1 points for the two-stage and one-stage models. With root-cause guidance, the harness search reaches the final score of an unguided search up to three times faster.",
    "published": "2026-11-20T12:26:00Z",
    "updated": "2026-11-20T12:26:00Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2611.27529"
  },
  {
    "id": "2611.27521",
    "title": "PaMuk-Bench: A Parallel Multilingual Multitask Benchmark for Vision-Language Tasks",
    "authors": [
      "Silviu-Florin Gheorghe",
      "Radu-Stefan Popa",
      "Adriana Valentina Costache",
      "Adrian-Gabriel Chifu",
      "Alessia Amelio",
      "Paul Irofti",
      "Anders Skaarup Johansen",
      "Lallouani Bouchakour",
      "Mohamed Lichouri",
      "Khaled Lounnas",
      "Neelu Madan",
      "Yashvir Malik",
      "Radu Tudor Ionescu"
    ],
    "abstract": "While vision-language models (VLMs) currently obtain notable results for highly-studied languages, e.g. English, they exhibit significant performance drops in certain low-resource languages, especially due to the lack of annotated datasets. To this end, we propose PaMuk-Bench, a novel parallel multilingual multitask benchmark for vision-language tasks. Our benchmark includes a set of over 10K curated English prompts that are translated into six languages: Arabic, Danish, French, Hindi, Italian, Romanian. Parallel translations, which are obtained via a semi-automatic process, along with accompanying generated and retrieved images enable the comparative development and evaluation of VLMs across a wide range of tasks: text-to-image generation, image captioning, content-based image retrieval, image generation difficulty estimation, image retrieval difficulty estimation. We empirically show that zero-shot English and multilingual pre-trained VLMs compare consistently worse than their fine-tuned counterparts, confirming that PaMuk-Bench is a valuable resource that can drastically reduce the language gap across a variety of VLM architectures and tasks. PaMuk-Bench is available at https://github.com/ghesil/pamuk_bench.",
    "published": "2026-11-20T12:13:25Z",
    "updated": "2026-11-23T10:32:18Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.27521"
  },
  {
    "id": "2611.27517",
    "title": "EchoAlign: Echocardiography foundation model with multilevel report alignment",
    "authors": [
      "Ahmed Aly",
      "Darya Taratynova",
      "Lotfi Abdelkrim Mecharbat",
      "Roman A. Sandler",
      "Joseph Z. Sokol",
      "Joshua Penn",
      "Klaus H. Maier-Hein",
      "Numan Saeed",
      "Mohammad Yaqub"
    ],
    "abstract": "Echocardiography assesses the structure and function of the heart. Cardiologists read each study across several standard views and report the findings visible in those views by cardiac structure. AI foundation models can learn to analyze these studies from clinical reports, reducing annotation burden and supporting clinical interpretation. However, existing models are trained by pairing each video with the full clinical report, including structures and findings its view does not show. This mismatch lets a model associate a finding with incidental or spurious signals rather than its visual evidence, which limits accuracy, anatomical grounding and clinical trust. Here we introduce EchoAlign, a vision-language foundation model developed on 2.87 million echocardiographic videos and images from 159 clinical centers. EchoAlign aligns each cardiac structure, video and study with its report text, and a visibility matrix restricts supervision to the views that actually depict each structure. We compare it with five public foundation models on 0.47 million test videos across ten unseen external datasets from more than 25 clinical centers. EchoAlign achieves the highest mean AUROC of 0.890 (95% CI, 0.881 to 0.897) for classification and the highest mean quadratic weighted kappa of 0.530 (95% CI, 0.511 to 0.544) for severity grading. Across 62 clinical findings, EchoAlign provides one model that detects findings, grades their severity, estimates measurements and segments cardiac structures.",
    "published": "2026-11-20T12:08:22Z",
    "updated": "2026-11-20T12:08:22Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.27517"
  },
  {
    "id": "2611.27516",
    "title": "PhiJEPA: Denoising Latent Predictions for Visual Representation Learning",
    "authors": [
      "Makoto Yamada",
      "Yao-Hung Hubert Tsai"
    ],
    "abstract": "Can a predictor trained to infer hidden image regions still help a world model plan when part of an object disappears from view and the visible context is blurred? We introduce PhiJEPA, a joint-embedding predictive architecture that adapts PhiNet's two-stage prediction to masked Transformers. From sparse, photometrically corrupted context, a Transformer block predicts hidden tokens of an independently corrupted teacher view. A token-wise MLP then maps these predictions to clean teacher tokens. Controlled ablations show that the combined objective improves dense features over the tested one-stage alternatives. Pre-trained on ImageNet-1K with $5.6\\times10^{19}$ training FLOPs, PhiJEPA achieves 69.3 mIoU on linear PASCAL VOC segmentation, exceeding the evaluated I-JEPA and DSeq-JEPA checkpoints in segmentation accuracy, with 25\\% fewer training FLOPs than I-JEPA. It also improves hidden-region segmentation over Simple I-JEPA (49.1 vs.\\ 44.3 mIoU). As an application, we use the frozen encoder in DINO-WM on PushT, and reuse the pre-training predictor, which JEPAs usually discard, to complete occluded tokens without fine-tuning. In open-loop planning with simultaneous object occlusion and Gaussian blur ($σ=2$ pixels), predictor completion raises success from 33\\% to 65\\%, compared with 25\\% for Simple I-JEPA with its predictor and 40\\% for iBOT with pixel inpainting. Together, these results support two-stage latent prediction as an efficient approach to learning visual representations that remain useful under photometric degradation and support completion under partial observation.",
    "published": "2026-11-20T12:07:30Z",
    "updated": "2026-11-20T12:07:30Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2611.27516"
  },
  {
    "id": "2611.27515",
    "title": "Beyond a Single Human Demonstration: Learning from Scored Trajectory Alternatives for End-to-End Driving",
    "authors": [
      "Xinyao Rao",
      "Zecheng Tang",
      "Liuxuan Sun",
      "Zheyuan Lai",
      "Minjun Yu",
      "Xun Cao",
      "Wei Li"
    ],
    "abstract": "Human driving logs record only one trajectory per scene, leaving other feasible driving choices without explicit trajectory targets or quality labels. This limits supervision for end-to-end planners that generate and refine multiple candidate trajectories. Meanwhile, conditioning refinement on a large vision-language model adds substantial online inference cost. We propose DriveSTA, which extends autoregressive proposal generation and proposal-conditioned residual flow refinement with scored trajectory alternatives. For each training scene, we generate alternatives offline through smooth deformations of the recorded trajectory and evaluate their simulated execution against logged traffic. Diverse, high-quality alternatives supervise distinct proposals and define residual targets for quality-guided denoising, while candidates spanning the full score range train a scorer to assess driving quality. A shared joint-embedding predictive architecture (JEPA), adapted through masked video-feature prediction, encodes observed frames once and provides temporal context for both refinement and scoring. On NAVSIM v1 Navtest, DriveSTA ranks first among the compared planners trained on NAVSIM data alone. With expanded training data, DriveSTA-Scale achieves state-of-the-art results among the compared methods on Navtest and closed-loop HUGSIM, while reducing mean planner forward-pass latency by 73% relative to ChainFlow-VLA in matched evaluations.",
    "published": "2026-11-20T12:07:24Z",
    "updated": "2026-11-20T12:07:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.27515"
  },
  {
    "id": "2611.27512",
    "title": "PGS-PCQA: Perceptually Gated Synthetic Supervision for No-Reference Point Cloud Quality Assessment",
    "authors": [
      "Qinyuan Fan",
      "Meng Zhang",
      "Clemens Gühmann"
    ],
    "abstract": "Existing no-reference point cloud quality assessment (NR-PCQA) methods perform well within individual datasets but generalize poorly across datasets. We identify insufficient distortion coverage in training data as a key cause: on unseen distortion types, models rank severity levels near chance or even in reverse. We propose perceptually gated synthetic supervision for no-reference point cloud quality assessment (PGS-PCQA), an NR-PCQA model trained with synthetic distortion ranking. It builds a synthetic distortion bank from source reference point clouds and uses within-type severity ranking as supervision in addition to the source mean opinion scores (MOS), requiring no subjective scores for the synthetic samples. Since higher severity does not always mean lower perceived quality, a perceptual gate softens the ranking targets of pairs with small perceptual differences in rendered views. The synthetic supervision is used only during training and needs no target-domain data. In a single training run on SJTU-PCQA, PGS-PCQA achieves Spearman rank correlation coefficients (SRCCs) of 0.709 on WPC and 0.751 on BASICS. The corresponding published DSP-PCQA scores are 0.595 and 0.723. Under reference-disjoint cross-validation, PGS-PCQA achieves SRCCs of 0.955 on SJTU-PCQA, 0.934 on WPC, 0.906 on BASICS, and 0.791 on LS-PCQA Part I. In the exclusion experiment, the reported scores for the reduced synthetic bank represent 58-65% of the full-bank SRCC gain relative to training without the bank. Code is available at https://github.com/Fan-QY/PGS-PCQA.",
    "published": "2026-11-20T12:02:08Z",
    "updated": "2026-11-20T12:02:08Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.27512"
  },
  {
    "id": "2611.28185",
    "title": "SAMA: Training-Free Consensus Ridge Tracking for Camera-Based Heart Rate on Five Public Datasets",
    "authors": [
      "Sudhakar Mishra"
    ],
    "abstract": "Remote photoplethysmography (rPPG) is usually benchmarked by one heart rate per video, a figure that hides the short windows in which a tele-consultation would actually read the pulse. We present SAMA, a training-free estimator that (i) forms a quality-weighted consensus of POS and CHROM chrominance spectra, (ii) discounts frequencies occupied by pulse-free references derived from the same frames (frame motion, skin-mask geometry and background brightness), (iii) follows the heart rate through time with a Viterbi ridge under a random-walk prior, and (iv) returns a track-filtered, amplitude-normalised waveform with a per-window confidence. No parameter is learned and no dataset-specific tuning is used. On 218 recordings from 111 participants in five public datasets (UBFC-rPPG, PURE, SUMS, M3PD and a two-participant subset of MMPD), all processed with the same fixed face box and scored with a re-implementation of the rPPG-Toolbox protocol, SAMA has the lowest mean absolute error (MAE) averaged over datasets at every protocol level: 4.40 against 5.13,bpm for POS per video, 4.80 against 5.43 on 30,s windows and 5.05 against 6.59 on 10,s windows. Pooled over participants, the bootstrap interval of its paired difference from POS excludes zero on 30,s and 10,s windows (Wilcoxon p=0.11 and 0.004) but not per video, and it does not beat POS on SUMS per video or on the MMPD subset. Withholding the 20\\% least confident windows lowers the pooled 10,s error from 4.06 to 2.33,bpm. We also show that the per-video protocol has a floor of 1.2--1.6,bpm on datasets where heart rate drifts, and that skin tone cannot be recovered from uncalibrated video, which motivates the instrumented, skin-tone-stratified collection we propose for the Indian population. The method does not surpass the best published neural networks on UBFC-rPPG; we report where it stands against them without re-running them.",
    "published": "2026-11-20T11:57:22Z",
    "updated": "2026-11-20T11:57:22Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.28185"
  },
  {
    "id": "2611.25626",
    "title": "Physical Laws without Physics Loss? Probing Learned Dynamics in Video World Models through Forced Response",
    "authors": [
      "Yutao Li",
      "Chen Wang",
      "Wangmeng Zuo",
      "Hui Li"
    ],
    "abstract": "Do video world models learn physical laws without a physics loss, or merely imitate motion? Overall motion and appearance scores cannot settle it. We investigate this through nonlinear forced response: an excitation shakes the support of a suspended object. We introduce dual visual-numeric conditioning and adapt six image-to-video backbones to predict this motion using only the flow-matching loss. Wan predicts motion accurately and generalizes to unseen excitations, objects, poses, and scenes. Counterfactual tests suggest capabilities beyond replaying training videos. But what laws have they learned? We design three tiers of tests using Taylor expansions of the dynamics and geometry. All six reproduce the linear response, including resonance; five capture higher-order dynamics, including nonlinear softening. Remarkably, softening is barely present in training: only 0.74% of the swing's squared displacement. Extensions to a double pendulum and a rocking block show sustained dynamics are learned more faithfully than brief impacts. Yet learned dynamics may fail to appear when state estimation or propagation goes wrong. We turn these tests and findings into strategies to improve video training and generation.",
    "published": "2026-11-19T07:14:01Z",
    "updated": "2026-11-19T07:14:01Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.25626"
  },
  {
    "id": "2611.25621",
    "title": "DAWN: Robust Neural Blind Deconvolution via Alternating Wiener Guidance",
    "authors": [
      "Yida Pan",
      "Yixuan Jia",
      "Chaoyan Huang",
      "Qing Qu",
      "Ismail Alkhouri"
    ],
    "abstract": "Blind image deconvolution (BID) is an ill-posed inverse problem that aims to jointly recover a sharp image and blur kernel from a single degraded observation. Under nontrivial and high noise, which is common in photography and scientific imaging such as microscopy, BID remains particularly challenging, as existing methods suffer from noise overfitting and inaccurate kernel estimation. Existing training-data-free learning methods for BID, such as those based on the deep image prior (DIP), often utilize external guidance by including model-based estimates as additional loss terms, which underexploits the information these estimates carry especially under nontrivial noise. To address these challenges, we propose DAWN, a training-data-free DIP framework that alternates between injecting model-based estimates directly into the model input and refining this imperfect estimate with the network's own prior. To provide more reliable kernel estimates for these injections, we apply autoencoding regularization to both the image and kernel networks. On natural and scientific images under varying levels of Gaussian and Poisson noise, DAWN outperforms state-of-the-art methods in both image and kernel quality (achieving up to +4.5 dB over the next best baseline on the Levin dataset at $σ= 0.1$). Without any training images, DAWN remains highly competitive with a state-of-the-art diffusion model on FFHQ, despite the latter being trained on a massive number of in-distribution images.",
    "published": "2026-11-19T07:06:43Z",
    "updated": "2026-11-19T07:06:43Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.25621"
  },
  {
    "id": "2611.25620",
    "title": "CaT-Movie: Balancing Global Planning and Local Rendering for Long Multi-Shot Video Generation",
    "authors": [
      "Jinpeng Lu",
      "Haoyuan Shi",
      "Yuanshen Guan",
      "Jiyuan Xia",
      "Bin Wu",
      "Yinda Chen",
      "Zhiwei Xiong"
    ],
    "abstract": "Current multi-shot video generators render only limited durations per pass, requiring long movies to be stitched from local segments across which narrative progression and visual identity drift. To synthesize long-horizon movies with Coherence across Time, we present CaT-Movie, a multi-shot generation system consisting of a global story planner and a local window renderer. The planner expands user requests via a large language model to preserve, infer, and complete story details, while deterministic code maintains the resulting storyboard across shots to compile self-contained shot prompts and index reference frames from generated history. To execute this guidance, the renderer applies reference-routed sparse self-attention and shot-wise cross-attention to route identities from the indexed frames while isolating per-shot textual conditions. Given the scarcity of high-quality open-source multi-shot data, we construct a dataset of over 350K film shots annotated with semantic state transitions, entity grounding, and multi-granularity requests. We further build CaT-MBench, a benchmark on held-out films with the same annotations. It gives every baseline its native format and counts cross-shot consistency only when a cut opens a new camera setup, preventing repeated framing from passing as consistency. On CaT-MBench, CaT-Movie attains the highest average score and the most consistent characters among all methods. The project page is available at https://jinplu.github.io/CaT-Movie/.",
    "published": "2026-11-19T07:06:36Z",
    "updated": "2026-11-19T07:06:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.25620"
  },
  {
    "id": "2611.25619",
    "title": "Cyber-Physical RSI for AI-RAN: A Case Study",
    "authors": [
      "Binghan Wu",
      "Kai Zeng",
      "Zhiqi Li",
      "Zhigang Wang",
      "Yang Liu",
      "Ya-Qin Zhang",
      "Joseph Sifakis",
      "Ye Ouyang"
    ],
    "abstract": "Learned models for radio access networks (RANs) are often developed using simulation, yet their predictions can shift when exposed to physical propagation conditions, protocol behavior, and equipment implementations. This paper presents a cyber-physical recursive self-improvement (RSI) framework for AI-RAN that connects a task-oriented student model, an experiment-planning coach agent, a calibratable virtual environment, and a physical host agent. Physical measurements are organized as evidence for both model adaptation and subsequent experiment planning. We examine an implementation of the physical-feedback pathway using ping-pong handover as a case study. The system completes 12 physical executions organized into six baseline--candidate pairs, updates the student from measured outcomes, and evaluates the revised model on reserved physical configurations. In the observed short-window tests, increasing the time-to-trigger from 320 to 1280\\,ms changes the ping-pong count from three to zero. The updated student achieves a grouped-validation mean absolute error (MAE) of 2.673 round trips/min, while a common three-configuration physical evaluation yields MAEs of 1.240 and 1.601 round trips/min for the pre-feedback and post-feedback models, respectively. These results characterize both the operational feedback loop and the parameter-dependent generalization behavior revealed by new physical experiments.",
    "published": "2026-11-19T07:04:55Z",
    "updated": "2026-11-19T07:04:55Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.25619"
  },
  {
    "id": "2611.25617",
    "title": "Splice-Core: Low-Order-Bit-Splicing GEMM for Highly Energy-Efficient AI Inference Accelerators",
    "authors": [
      "Prabhu Vellaisamy",
      "Hsien-Fu Hung",
      "Andrew Kim",
      "Shawn Blanton",
      "John Paul Shen"
    ],
    "abstract": "Splice-Core is a temporal-unary/binary (tub) hybrid general matrix multiplication (GEMM) unit that minimizes low-order accumulation latency, while retaining value-dependent execution for high-order activation bits. We present two novel processing element (PE) variants: (i) Splice-BP utilizing bit planes, and (ii) Splice-LUT, which selects a shared weight multiple in a single cycle. Compared to a binary systolic array, Splice-BP/Splice-LUT achieve 77.4%/76.4% geometric-mean tile energy reductions, respectively, across 26 INT4 convolutional neural network (CNN) and large language model (LLM) workloads in 45nm. Splice-LUT further increases geometric-mean tile throughput by 44.4% and reduces geometric-mean energy-delay product (EDP) by 6.13x across the 26 configurations. Across the evaluated W8A8 convolution and expert-projection workloads, Splice-BP and Splice-LUT reduce tile energy by 77.3-88.1%. Post-place-and-route INT4 yields 14%/9% smaller area for Splice-BP/Splice-LUT, compared to the systolic array.",
    "published": "2026-11-19T07:03:38Z",
    "updated": "2026-11-19T07:03:38Z",
    "categories": [
      "cs.AR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.25617"
  },
  {
    "id": "2611.25614",
    "title": "Don't Lose the Future: Latent-Aware 4-Bit Quantization of World Action Models",
    "authors": [
      "Yichen Guo",
      "Yanlong Chen",
      "Xinyue Zhang",
      "Mohan Liu",
      "Song Zhang",
      "Yawei Li"
    ],
    "abstract": "World action models (WAMs) predict how a scene will evolve and condition their actions on this predicted future. Deploying them on a robot's onboard computer calls for 4-bit weights, activations and key-value caches (W4A4KV4). Existing 4-bit quantizers for WAMs preserve the generated action, and estimate sensitivity one denoising step at a time. However, they fail to preserve the fidelity of the predicted future: once the action pathway is protected, the remaining action error enters mostly through a degraded future that none of them deliberately protects. We propose LAQ, a latent-aware quantization framework that preserves the predicted future where it is written, stored and read. Specifically, we introduce a reader metric, which measures future error by its effect on the action, and a read count, which weights each rounding error by the number of denoising steps that read it. Together they give the allocation of precision over activations and caches a closed-form solution. We further develop gaze-guided refinement, which gives the tokens the action attends to a second 4-bit pass in the denoising loop and in the cache. All weights stay at 4 bits, with no high-precision branch and no per-task recalibration. On the LIBERO-Plus benchmark, LAQ reaches 76.4% and 83.3% average success on Fast-WAM and Cosmos-Policy, within 1.2 percentage points of the 16-bit models and all above the baselines with 16-bit KV caches. It compresses the model by 3.8x, reduces the peak GPU memory of the whole policy by 2.3x, and runs 1.66x faster than the 16-bit model. On a real AgileX PiPER arm, it reaches 47.0% average success over three tasks, against 52.0% for the 16-bit model and 30.0% higher than QuaRot.",
    "published": "2026-11-19T06:59:37Z",
    "updated": "2026-11-19T06:59:37Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.25614"
  },
  {
    "id": "2611.25613",
    "title": "Can an LLM Repair a Language Model in Weight Space Without Gradient Training?",
    "authors": [
      "Bharath Kumar Bolla",
      "Raghavender Surya Upadhayula",
      "Vishnu Surya Reddy Nandi",
      "Ramesh Nandipalli"
    ],
    "abstract": "Although an external language model can select and test repairs to another model's weights, behavior can also be recovered through fixed numerical edits. We assessed the value of interactive selection in a controlled study of Transformer repair. After inspecting predictions, activation summaries, and weight statistics, the editor selects projection recipes to apply to the target without gradient updates. We analyzed 20 recorded sessions involving five masked and causal language models, comparing the selected edits with fixed projections, scripted and matched-budget black-box search, and low-rank adaptation. Under the core two-layer fault, live selection matches black-box search on SmolLM2 and Qwen2.5. For Pythia, live selection achieves 65.62% completion accuracy, compared with 0% for black-box search and 66.15% for a fixed projection. Under a separate compound fault affecting attention and feed-forward weights, both scripted and LLM-guided selection increase the descriptive five-checkpoint mean from 24.89% to 71.25% using the same operator family. On unmodified checkpoints, scripted projection yields small gains or losses on a separate set of framed questions. The experiments identify cases in which feedback changes an edit decision, operator coverage accounts for recovery, or supervised adaptation performs better. Combined with measurements of parameter restoration and preservation, these comparisons establish the scope of controller-guided repair for the tested faults and completion tasks.",
    "published": "2026-11-19T06:59:01Z",
    "updated": "2026-11-20T13:36:48Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.25613"
  },
  {
    "id": "2611.26663",
    "title": "Adding One More Agent: How AI Team Size and Formation Shape Productivity and Diversity in Human-AI Brainstorming Teams",
    "authors": [
      "Rong-Ching Chang",
      "Hao-Chuan Wang"
    ],
    "abstract": "Generative AI has improved individual productivity, but whether adding a plurality of AI partners helps or hurts remains open. We crossed AI partnership (one versus two) with behavioral formation (calibrated to average human behavior versus customized by the participant) in a brainstorming experiment ($N$=168) with human-human dyads as reference. Two-AI rooms posted more ideas to the shared board, but human-authored ideas dropped substantially. With one AI partner, formation mattered: humans paired with an average-calibrated AI posted more than any other condition. With two, this effect vanished. Humans continued talking but converted fewer ideas into board posts. AI social talk predicted more human posts, while AI posting volume predicted fewer. AI presence increased global diversity of human-authored ideas, but only a second AI increased within-session differentiation. The number of AI partners and their formation can reshape what the human contributes; single-agent results do not generalize to multi-agent teams.",
    "published": "2026-11-19T06:58:05Z",
    "updated": "2026-11-19T06:58:05Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.26663"
  },
  {
    "id": "2611.25608",
    "title": "MetaScanner: An Empirical Study and Proactive Defense against Deceptive UI Attacks in Social VR",
    "authors": [
      "Junhee Lee",
      "Seungwon Woo",
      "Minseok Kim",
      "Jongseop Kim",
      "Kiyoung Kim",
      "Hwanjo Heo",
      "Jinwoo Kim"
    ],
    "abstract": "Social virtual reality (VR) platforms have surged in popularity but continue to face significant security challenges, including privacy invasion and user manipulation. Yet, the security risks posed by deceptive content remain largely unexplored. In this paper, we introduce four novel deceptive UI attacks that covertly manipulate social VR users into performing unintended actions without their awareness. We show how adversarial content creators can embed seemingly benign scripts and interactive elements within carefully designed virtual worlds, deceiving users into unknowingly carrying out harmful behaviors. We implemented these attacks on VRChat, a leading social VR platform, and an IRB-approved user study involving 30 participants confirmed their effectiveness. To mitigate these threats, we propose MetaScanner, a proactive analysis system that efficiently scans virtual world assets, including scripts and interactive objects, to identify suspicious or deceptive elements before users are exposed to them. We demonstrate that MetaScanner can successfully detect all threats in test worlds where the four attack scenarios were implemented. Additionally, MetaScanner shows its lightweight nature, with an average scanning time of 5 seconds across 38 real-world assets.",
    "published": "2026-11-19T06:55:13Z",
    "updated": "2026-11-19T06:55:13Z",
    "categories": [
      "cs.CR",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.25608"
  },
  {
    "id": "2611.25605",
    "title": "Copilot or Culprit? How AI Is Changing Open-Source Bug Reporting and Maintenance",
    "authors": [
      "Yinuo Liu",
      "Yunlong Lyu",
      "Zichao Luo",
      "Tian Dong",
      "Zian Luo",
      "Peng Chen",
      "Hao Chen"
    ],
    "abstract": "AI-generated bug reports have drawn criticism for unreliable claims and faulty reproducers that burden maintainers. However, as LLM capabilities improve, some maintainers have begun to express more positive views on AI use in bug reporting and maintenance. Understanding this evolution requires examining whether AI-involved reports are becoming more reliable, which uses of AI are associated with valid findings, and how maintainers investigate these reports and act on them. To this end, we conduct the first large-scale study of 120,918 bug reports from 101 open-source projects between January 2024 and September 2026, tracing AI involvement from discovery and reporting through validation and resolution. Our findings show that AI-involved reports become more complete over time, with a growing share of reports confirmed as valid. In bug reporting, AI for reproduction and diagnosis are associated with higher validity, whereas report writing is not. Extends into maintenance, maintainers increasingly use AI to investigate code and recommend fixes. However, they devote more effort to AI-assisted reports of human-discovered bugs than to reports of AI-discovered bugs. These findings highlight both AI's growing participation in bug investigation and the continuing need for verification and follow-up. Drawing on these findings, we provide practical guidance for turning AI-generated findings into verifiable reports: emphasizing reproducibility, verification, and accountability. We followed this guidance when submitting 53 reports on AI-discovered bugs, of which 69.81% were accepted by maintainers as of writing.",
    "published": "2026-11-19T06:53:32Z",
    "updated": "2026-11-19T06:53:32Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.25605"
  },
  {
    "id": "2611.25603",
    "title": "On the Informativeness of Structural Stability Bounds for GNNs: GINs versus GATs",
    "authors": [
      "Alan Gany",
      "Paul Landrier",
      "Bogdan Cautis",
      "Laks V. S. Lakshmanan",
      "Silviu Maniu"
    ],
    "abstract": "Stability bounds for graph neural networks limit how much node representations can drift when the graph changes, but they are rarely compared with the simplest alternative: a bound on the distance between any two outputs, whatever the graph. We derive structural stability bounds for Graph Isomorphism Networks (GINs) and single-head GATv1 networks under deterministic edge perturbations that need not be small, and compare each with such a perturbation-independent diameter bound. For GINs, we characterize exactly when the stability bound is tighter, through a condition linking perturbation size, depth and maximum degree; it holds with a wide margin on Cora, but fails beyond a few layers on the low-degree MUTAG graphs. For GATv1, the bound is never tighter, which calls for analyses based on attention masses.",
    "published": "2026-11-19T06:49:22Z",
    "updated": "2026-11-19T06:49:22Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.LO"
    ],
    "url": "https://arxiv.org/abs/2611.25603"
  },
  {
    "id": "2611.25599",
    "title": "Tether: Verified Stateful Policy Engine for System-Level Monitoring of Agents",
    "authors": [
      "Meghana Aparna Sistla",
      "Alaia Solko-Breslin",
      "Somesh Jha",
      "Aditya Kanade",
      "Krishnamurthy Dj Dvijotham"
    ],
    "abstract": "Autonomous AI agents are increasingly deployed for long-running tasks that execute arbitrary shell commands or programs. However, these actions can result in unauthorized network requests or persistent, malicious changes to the user's file system, processes, or privileges. Existing defense mechanisms rely on either LLM-based monitors, which lack provable safety guarantees, or stateless policy enforcement layers, which miss multi-step data flows and execution side-effects unmodeled by the policy language (e.g., network calls initiated inside a Python script). We introduce Tether, a framework for runtime enforcement of stateful security policies over the observed side-effects of an agent's actions. Tether executes each proposed action in an ephemeral, isolated sandbox, inferring abstract action semantics from observed system calls. Tether then enforces stateful policies over these inferred semantics, permitting actions to proceed only if they comply with the policy. Policies and action semantics are defined in an embedded DSL in Lean 4 capable of expressing diverse constraints, including information flow control (IFC), access control, and network security policies. Because actions can propagate labels from sources to destinations, a single rule can enforce fine-grained IFC policies across multi-step execution flows of arbitrary length. Expressing policies in Lean enables formal verification that they satisfy global security invariants (e.g., preventing network access after reading a sensitive file). We evaluate Tether on realistic coding-agent benchmarks across both benign and adversarial trajectories. With a single policy shared across all tasks, Tether blocks 100% of in-scope attacks while maintaining a benign false-positive rate under 5%.",
    "published": "2026-11-19T06:46:27Z",
    "updated": "2026-11-19T06:46:27Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.25599"
  },
  {
    "id": "2611.24371",
    "title": "One Affinity, Two Axes: Bidirectional Slot Attention for Iterative Aggregation across the Structure--Detail Spectrum in Visual Retrieval",
    "authors": [
      "Zihang Wang",
      "Wenkai Zhu",
      "Lingdong Kong",
      "Teng Yan",
      "Alan Liang",
      "Shuyuan Li",
      "Xieyuanli Chen",
      "Dong Kong",
      "Guanyu Zong"
    ],
    "abstract": "Aggregating dense patch tokens into compact and discriminative global descriptors is central to visual retrieval. Although foundation models provide rich local features, existing aggregation heads still rely on single-pass mappings and lack an explicit mechanism to coordinate structural and fine-grained cues. Therefore, we propose Bidirectional Slot Attention (BiSA), which reformulates aggregation as an iterative coupled system. Cross-Axis Consensus (CAC) progressively refines learnable slots by interpreting a single shared token--slot affinity along two complementary axes. Along the competition axis, slots vie for each token under a temperature shared across all of them, determining token ownership and inducing a non-redundant scene decomposition. Along the selection axis, a slot-specific temperature governs the breadth of each slot's response, spanning a spectrum from broad layouts to sparse fine-grained details. Their consensus couples non-redundant decomposition with multi-granular slot specialization. Furthermore, the two axes expose intrinsic token-reliability cues at no extra cost: a token's claim strength under competition and its salience under selection. Progressive Token Filtering (PTF) converts these cues into a retention probability that down-weights unreliable tokens before the next CAC iteration, without any segmentation branch or external prior, forming a self-reinforcing loop of competitive decomposition, selective focusing, and feedback purification. Across all three retrieval tasks, BiSA leads on five of six place recognition benchmarks (+4.2 R@1 on Baidu Mall), tops all 16 metrics of drone--satellite geo-localization (+8.4 R@1 at 150 m), and improves instance-level retrieval on ROxford-Hard by 4.5 mAP points. Notably, the selection axis adds only 20 learnable scalars, yet improves average R@1 by 2.8 points.",
    "published": "2026-11-18T13:04:10Z",
    "updated": "2026-11-18T13:04:10Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.24371"
  },
  {
    "id": "2611.24366",
    "title": "SCOUT: Risk-Guided Foundation-Model Escalation for Robust Tissue Detection in Whole-Slide Images",
    "authors": [
      "Cristian Tommasino",
      "Antonio M. Rinaldi"
    ],
    "abstract": "Reliable tissue detection is essential for whole-slide image analysis, yet high average segmentation accuracy can conceal failures involving pale tissue, small fragments, and heterogeneous staining. Pathology foundation models offer transferable representations, but exhaustive inference is computationally demanding and may introduce false-positive tissue predictions. We propose SCOUT (Selective Correction of Uncertain Tissue), a risk-guided cascade that selectively refines an initial thumbnail-based tissue mask. A lightweight audit network estimates the spatial distribution of segmentation errors and prioritizes candidate regions for processing by a frozen pathology foundation model. An asymmetric consensus rule integrates the resulting predictions with the initial mask to recover missed tissue while limiting false positives. A calibrated slide-level review score additionally controls the marginal rate of unflagged case-group failures under the calibration assumptions. Evaluation on a public multi-source, multi-stain benchmark shows that SCOUT reduces the proportion of case groups requiring mask correction from 38.1% for the best released detector to 18.6%, with particularly pronounced improvements in immunohistochemistry. Source-held-out experiments demonstrate better generalization than a segmentation network trained on the same annotations, while selective inference achieves an observed failure rate no higher than processing all candidate regions. Downstream, lymph-node classification with SCOUT masks is non-inferior to that obtained with two of the three released detectors evaluated. A variant built on an openly licensed foundation model is publicly released as an installable Python package with trained weights. These results support risk-guided foundation-model inference as an effective approach to tissue detection across heterogeneous histopathology data.",
    "published": "2026-11-18T13:00:38Z",
    "updated": "2026-11-18T13:00:38Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.24366"
  },
  {
    "id": "2611.24363",
    "title": "Transferable Named Sparse Features for Morphology-based Gleason Grading",
    "authors": [
      "Argyrios Zafeiriou",
      "Athanasios Kallipolitis",
      "Ilias Maglogiannis"
    ],
    "abstract": "Deep learning systems grade prostate biopsies at the level of pathologists, but most report a grade without the glandular architecture that justifies it. This work presents a grading system built on a sparse code over the tokens of a pathology foundation model. A sparse autoencoder pretrained on biopsies is aligned with multi-reader annotations, so that 69 of its 2048 features are named after Gleason morphologies such as cribriform glands, cords, and comedonecrosis. The same code feeds a grading network, which reads all features to predict Gleason patterns and the Grade Group, while morphology maps read directly from the named features. We evaluate the system on five public datasets that include needle biopsies, tissue-microarray cores, multi-reader annotations, and three scanners. The morphology maps remain stable across alignment runs and, without retraining, detect cribriform glands in external biopsies (area under the receiver operating characteristic curve, AUROC, 0.849) and pattern 5 in unseen cores when evaluated by up to six pathologists (AUROC 0.846 to 0.919). In an independent biopsy cohort, Grade Group agreement with three pathologists on Leica scans is close to their agreement with each other. Removing the named features reduces the corresponding Gleason pattern predictions by 49% to 98%, with effects larger than those from 20 activity-matched random feature removals. These results show that a shared sparse representation can support competitive Gleason grading while providing named morphological evidence that transfers across datasets and whose contribution to grading can be measured directly.",
    "published": "2026-11-18T12:57:35Z",
    "updated": "2026-11-18T12:57:35Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.24363"
  },
  {
    "id": "2611.24362",
    "title": "PIPETTE: Prompt Injection Purple-Teaming for Robust LLM Agents",
    "authors": [
      "Lipeng He",
      "Yihan Wang",
      "Jiawen Zhang",
      "N. Asokan"
    ],
    "abstract": "Large language model (LLM) agents routinely interact with untrusted external data, exposing them to indirect prompt injection (IPI) attacks that hijack agents into executing attacker-chosen tasks. To uncover these vulnerabilities at scale, automated red-teaming methods often leverage reinforcement learning (RL) to generate attacks that achieve high attack success rates (ASR). Model developers use the attacks discovered during internal red-teaming to harden agents through adversarial training before deployment, a collaborative offensive-defensive process known in cybersecurity as purple-teaming. However, we show that achieving high ASR during red-teaming does not guarantee robustness gains from subsequent adversarial training. Specifically, we find that two state-of-the-art RL-based red-teaming methods, RL-Hammer and PISmith, suffer from mode collapse, repeatedly discovering similar attack strategies whose additional successes add no additional robustness improvements to adversarial training. To address this gap, we introduce PIPETTE, a unified prompt injection purple-teaming framework that effectively converts red-teaming discoveries into defender robustness improvements. PIPETTE employs a dictionary learning-based reward that encourages broader coverage of attack strategies during red-teaming. It also integrates an on-policy adversarial training pipeline tailored to IPI defense, enabling agents to resist attacks while completing legitimate user tasks. Extensive evaluations across agentic benchmarks (AgentDojo and ASB) demonstrate that PIPETTE produces defenders that achieve near-zero attack success rates on static attacks and can withstand strong adaptive attacks, while maintaining benign task utility close to that of the undefended baseline.",
    "published": "2026-11-18T12:56:06Z",
    "updated": "2026-11-18T12:56:06Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.24362"
  },
  {
    "id": "2611.24360",
    "title": "Towards Pose-Robust Few-Shot Vision-Language-Action Models",
    "authors": [
      "Wenhao Li",
      "Zhongyi Han",
      "Yuhao Wei",
      "Liang Han",
      "Yilong Yin",
      "Liqiang Nie"
    ],
    "abstract": "Fine-tuning a vision-language-action (VLA) model on a few dozen demonstrations is the standard way to put a manipulation policy on a robot, yet the resulting policy silently assumes that the camera and the robot base stay exactly where they were during data collection: a bumped tripod or a base re-docked a few centimetres away makes it reach for the wrong place. We show that both failures are one phenomenon, a change of the camera-to-base extrinsic that the policy has memorised, and that the robot carries everything needed to undo it. We introduce WACO, a world-anchored canonicalization framework for VLA models: the arm, placed by forward kinematics at the measured joint angles, serves as a metric calibration target, and the static scene serves as the world anchor that tells a moved camera from a moved robot. From a single RGB-D frame, WACO estimates both shifts without ground-truth extrinsics or extra data, canonicalises the image to the calibration viewpoint and the state, action and start pose to the calibration base frame, and fine-tunes the unmodified policy under the artefacts of its own estimator. We also introduce LIBERO-PoseShift, the first benchmark for RGB VLAs with graded camera, base and compound shifts. Across LIBERO-PoseShift, the LIBERO-Plus camera track and four real-world tasks on a UR5e robot, WACO consistently outperforms the standard few-shot recipe and prior viewpoint-robust methods, raising shifted success by 13.2 points in simulation and by 36.7 points on the real robot, recovering 90% of the simulation gap to a ground-truth oracle and 87% of the real-robot gap, and establishing a new state of the art among methods that use no perturbed training data, with no test-time calibration. Project page: https://peacelwh.github.io/WACO/.",
    "published": "2026-11-18T12:54:16Z",
    "updated": "2026-11-18T12:54:16Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.24360"
  },
  {
    "id": "2611.24357",
    "title": "Semantic Context Handoff with On-Demand Evidence for Long-Horizon Agents",
    "authors": [
      "Guolong Zheng",
      "Chen Hou",
      "Xu Yang",
      "Jianshan Zhang",
      "Tao Huang"
    ],
    "abstract": "Traditional long-horizon LLM agents often hand off context through full-history prompting, retaining all previous action--observation interactions. As execution proceeds, this history keeps growing, increasing inference cost and potentially degrading accuracy. Existing methods control this growth by preserving compact conclusions while removing earlier observations, but doing so can discard evidence that later becomes relevant. We introduce Semantic Context Handoff (SCH), whose central abstraction is state--evidence separation: a compact semantic state carries the agent's current interpretation, while supporting action--observation evidence remains separately addressable and can re-enter context when later execution makes it relevant, without separate summarization or retrieval-model calls. Empirically, SCH improves long-horizon agent performance while substantially reducing context cost. In a controlled 150-task SWE-bench study, SCH's evidence recovery improves Pass@1 from $80.0\\%$ to $86.9\\%$ at essentially unchanged token use and execution time. In the complete-system comparison, SCH achieves 86.9% Pass@1 while using 43% fewer tokens and 41% less wall-clock time than the strongest baseline by task performance. Across models and benchmarks, SCH consistently reduces token use relative to full-history prompting while remaining competitive with or improving upon the evaluated baselines. Trajectory analysis confirms that SCH recovers evidence from substantially earlier parts of the interaction history rather than merely preserving a recent context window.",
    "published": "2026-11-18T12:49:41Z",
    "updated": "2026-11-18T12:49:41Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.24357"
  },
  {
    "id": "2611.24353",
    "title": "When Figures Disagree with Text: Evaluating Autonomous Visual Evidence Verification in Scientific Papers",
    "authors": [
      "Guijia Zhang",
      "Hongbo Qiu",
      "Jiajun Zha",
      "Guohao Cai",
      "Hao Zheng",
      "Huihao Jing",
      "Kexu Cheng",
      "Shipeng Luo",
      "JinYang Huang",
      "Shing-Chi Cheung",
      "Changsheng Lu",
      "Haoxuan Che",
      "Harry Yang"
    ],
    "abstract": "Scientific figures carry evidence for the claims that cite them, so reviewing a paper means checking that a figure agrees with the text, and not only describing what the figure shows. Benchmarks of figure-text verification typically hand the model the figure, the claim, or the knowledge that an inconsistency exists, which leaves untested whether a model can find the figure worth checking in a complete paper, relate a visual element to the claim it conflicts with, and recognize the conflict. We study this autonomous setting on 31 full manuscripts, each carrying a reviewer-documented figure-text inconsistency from PRISMM-Bench that is hidden from the model. Six multimodal models review each PDF under a neutral prompt, and we then add one input at a time to the same manuscripts. Of 1,445 open-ended reviews, 60.6% mention the flawed figure, yet a grading rubric accepts only 3.3% as diagnosing its contradiction; a blind audit finds the rubric lenient, so we read these as rubric-accepted rates and compare conditions rather than absolute values. In a separate controlled run, naming the figure, without stating that it is flawed, raises rubric-accepted diagnosis from 4.3% to 20.4%, while a consistency instruction and coarse visual cues do not. When the contradiction is visible only in the rendered figure, text-only review yields no accepted diagnosis, while review of the rendered pages with the figure named reaches 15.8%. A baseline that lets the model choose which figures to check, ranked by centrality, stays at 4.8%. Deciding what to verify is thus a large part of the difficulty, and the selection rule we tested does not resolve it. Multimodal document understanding should be evaluated on whether a model can propose what to verify, not only answer questions about a figure it is handed.",
    "published": "2026-11-18T12:47:35Z",
    "updated": "2026-11-20T12:11:05Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.24353"
  },
  {
    "id": "2611.24352",
    "title": "OCTR2A: Real-Time RGB-to-BEV Trajectory Projection and Forecasting at Urban Intersections",
    "authors": [
      "Emanuele Iacobelli",
      "Simone Teglia",
      "Francesco Pro",
      "Claudia Melis Tonti",
      "Irene Amerini"
    ],
    "abstract": "Trajectory forecasting at urban intersections is often studied assuming that reliable bird's-eye-view (BEV) motion histories are available, which in practice requires costly resources such as LiDAR, aerial views, HD maps, or calibrated infrastructure. We address this upstream perception-to-forecasting problem by reconstructing and predicting agents' BEV trajectories only from paired opposite-corner RGB cameras mounted on existing urban infrastructure at variable heights at inference time. We introduce the Opposite-Corner Trajectory Reconstruction and Anticipation Architecture (OCTR2A), a modular pipeline integrating per-view detection with class refinement, geometric cross-camera matching, transformer-based BEV projection, and egocentric GRU forecasting, trained in cascade and mainly supervised with a soft multi-scale spatial-overlap loss. Since no public benchmark provides this sensing configuration, we introduce R3ST++, a Blender-based synthetic benchmark built from SIND trajectories that provides synchronized opposite-corner views, cross-view correspondences, and BEV ground truth, while also serving as a deployment-support simulator for site-specific fine-tuning. Experiments on these datasets show that, with 12 observed and 12 predicted frames at 10\\,Hz, OCTR2A achieves projection~-~forecasting ADE/FDE of 0.144/0.140~-~0.154/0.241~meters in real time on a single consumer GPU. Evaluated on ground-truth BEV histories, the forecasting module improves over the strongest state-of-the-art methods on SIND by 66.7\\%/41.7\\% ADE/FDE. Transfer experiments on TUMTraf-V2X show that R3ST++ pretraining supports adaptation to real-world roadside domains with different sensing configurations.",
    "published": "2026-11-18T12:47:15Z",
    "updated": "2026-11-18T12:47:15Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.24352"
  },
  {
    "id": "2611.24347",
    "title": "automodel: A Skill for Agentic Model Discovery",
    "authors": [
      "Marco Virgolin",
      "Harry Desmond",
      "Ester Bergantin",
      "Giorgio Morales",
      "John W. Sheppard",
      "Luigi Romano",
      "Alessandro Lucantonio"
    ],
    "abstract": "The search for better models, whether expressed as analytical equations or neural architectures, has increasingly shifted from manual design toward data-driven automation. While a multitude of algorithms exist, ranging from exhaustive search to AlphaEvolve, recent advances in general-purpose coding agents such as Claude Code and OpenAI Codex raise the question: could providing such systems with a \"model discovery recipe\" be enough to discover or improve models? We present automodel, an agent skill for general model discovery. With case studies in astrophysics, cardiovascular dynamics, precision agriculture, traffic flow, and vehicle tire dynamics, we show how commercial agents equipped with automodel can successfully identify novel and scientifically-relevant models. Our findings suggest that encoding model-discovery methodology as a portable agent skill can provide a simple, interactive, powerful and broadly applicable alternative to domain-specific automated discovery pipelines. The skill is available at: https://github.com/unlayer-ai/automodel.",
    "published": "2026-11-18T12:43:45Z",
    "updated": "2026-11-18T12:43:45Z",
    "categories": [
      "cs.AI",
      "astro-ph.CO",
      "astro-ph.GA",
      "cs.NE"
    ],
    "url": "https://arxiv.org/abs/2611.24347"
  },
  {
    "id": "2611.24342",
    "title": "Exploring Daily Emotional Well-Being through Personalized Data Analysis",
    "authors": [
      "Adriana Rodríguez Rodríguez"
    ],
    "abstract": "This project analysed daily emotional well-being from a personalized perspective using records of emotional states and contextual information derived from daily life. It was based on the idea that well-being is not a fixed value, but varies from day to day, and can be better understood in relation to individual context and behaviour. The work is framed within the field of Data Science and focuses on emotional states at an individual level. The project focused on constructing an integrated daily dataset from multiple personal data sources and analysing emotional states. The distributions of emotional variables, their temporal evolution and the differences between users were studied, together with their variability over time. Personality and well-being questionnaires were also incorporated as stable references to better contextualize daily emotional results. A simple personalized recommendation approach was then developed by comparing similar days within each user, exploring how past contextual conditions relate to differences in the user's emotional state. Finally, machine learning techniques were used to evaluate whether daily contextual information contains signals that help distinguish between different types of days relative to a person's usual well-being. The project adopted an applied approach, with an exploratory scope focused on understanding patterns rather than building a fully predictive system. The results showed that emotional well-being is very personal and changes from day to day. General models had limited value, while personalized approaches captured these differences much better, highlighting the importance of analysing each person on their own terms.",
    "published": "2026-11-18T12:40:49Z",
    "updated": "2026-11-18T12:40:49Z",
    "categories": [
      "cs.HC",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.24342"
  },
  {
    "id": "2611.24334",
    "title": "Exploring multimodal AI--XR interactions for software development: From expert perspectives to semantic code outlines",
    "authors": [
      "Ilya Zakharov",
      "Alexey Markin",
      "Konstantin Ostroukhov",
      "Alexey Perminov",
      "Roham Koohestani",
      "Ekaterina Koshchenko",
      "Agnia Sergeyuk"
    ],
    "abstract": "AI tools can generate code quickly, but developers still need to understand and check the results. We explore how the enriched multimodal context derived from the extended reality (XR) workspace might help developers manage this information. We first interviewed 13 experts in AI, XR, and related fields to identify opportunities and design challenges (Study 1). These interviews informed two prototypes explored with 12 professional developers (Study 2): four tried a version where the code faded to become invisible after it was looked at, and eight tried a version that replaced viewed code sections with short descriptions of their purpose. In the second prototype, head direction helped determine when to offer a change, while manual input let developers apply it and reopen the original code. A separate open-ended demonstration with seven software-engineering researchers provided complementary feedback. Participants' accounts suggested that descriptions could provide an overview of unfamiliar code and serve as reminders when revisiting it. However, difficulty comparing descriptions with source code, headset limitations, and controls that deviates from regular IDE routines could introduce additional effort. These exploratory findings identify requirements for attention support: make summaries easy to recognize and access, preserve straightforward inspection of the original code, and retain familiar navigation and editing practices. The study contributes to human-centered multimodal systems by showing how the coordination of input channels and AI-generated representations must account for users' attention, verification needs, and established ways of working.",
    "published": "2026-11-18T12:36:29Z",
    "updated": "2026-11-18T12:36:29Z",
    "categories": [
      "cs.HC",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2611.24334"
  },
  {
    "id": "2611.24330",
    "title": "Can Weight-Space Programming Alter Learned Ethical Priorities?",
    "authors": [
      "Kai Yi Ji"
    ],
    "abstract": "We investigate whether a weight edit can alter how a model trades off honoring a commitment against benefiting more people. In a concept-supervised text model, we alter fitted choice weights so that the benefit required to override a formal pledge is larger than for an ordinary promise. Across six independently trained text readers, the edit selects the larger group in both orders on 100% of targeted ordinary conflicts and 83.3% of targeted formal conflicts. It preserves the source model's success rates on smaller conflicts and its factual accuracy. The remaining formal-conflict failures coincide with errors reading a beneficiary number. A separate classifier demonstrates why this distinction matters: reusing a factual answer passes an unconditional choice test but fails to preserve small-gap promises. In a YOLO11n pilot on COCO128, a bias edit increased small-target matches from 3/43 to 9/43, and an equivalent score calibration reproduced the retained detections. These exploratory results show a way to test selective changes to learned priorities in a model with an exposed trade-off mechanism. Whether the method can discover such changes in less structured language models remains open.",
    "published": "2026-11-18T12:31:23Z",
    "updated": "2026-11-18T12:31:23Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.24330"
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
  }
];
