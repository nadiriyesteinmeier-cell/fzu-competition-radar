window.PAPER_DATA_UPDATED_AT = "2026-10-21";
window.PAPER_ITEMS = [
  {
    "id": "2610.28632",
    "title": "Joints, Camera, Action! Co-Generating 3D Motion and Video for Arbitrary Rigs",
    "authors": [
      "Noam Rotstein",
      "Yoad Tewel",
      "Chen Tessler",
      "Haggai Maron",
      "Gal Chechik",
      "Or Litany",
      "Yoni Kasten",
      "Yuval Atzmon"
    ],
    "abstract": "Video generation models can now depict remarkably realistic motion. Yet it is unclear how to use this motion beyond pixels: to animate a specific 3D asset and replay the animation in its 3D scene. For instance, a video model can show a monkey jumping over a crossbar, but it cannot return that jump as replayable 3D motion placed in the 3D scene. Here we present a model that directly co-generates the video and 3D motion for any supplied rig, along with a camera that registers this motion to the scene. Prior video-motion models either handle only human skeletons, often adding billions of parameters, or triangulate 3D motion from generated 2D pose maps. We instead keep 3D motion in a separate model that supports arbitrary skeletons, and connect it to a pretrained video model through a small set of cross-attention layers. This separation lets the motion model first learn how skeletons move from motion-only data, which is easier to obtain and augment than paired video. Additionally, our model learns to locate each joint in the video frames, which lets us recover the camera and place the 3D motion in the scene. To train across many skeletons, we use a generative video editor to place animated 3D assets in scenes suited to their actions, curating the edits so their known motion remains valid. Together with human and robot video, this yields nearly 200K training pairs. Our evaluations demonstrate that our model animates diverse rigs from text more faithfully than video-first pipelines, and its motion responds to the surrounding scene. It also turns video into rig motion, rig motion into video, and enables keyframe-based control of the 3D motion. Videos and additional results are available on our project page: https://research.nvidia.com/labs/par/projects/jca/.",
    "published": "2026-10-20T17:59:56Z",
    "updated": "2026-10-20T17:59:56Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.GR",
      "cs.LG",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.28632"
  },
  {
    "id": "2610.28631",
    "title": "AEON: Unifying Video and 3D World Models",
    "authors": [
      "Weiqi Zhang",
      "Wenyuan Zhang",
      "Yu-Shen Liu",
      "Junsheng Zhou"
    ],
    "abstract": "Current world models for explicit world simulation typically follow two distinct pathways: (1) video generative models (e.g., Sora), which simulate realistic appearances but fail to preserve 3D consistency; and (2) 3D generative models (e.g., Marble), which generate geometrically consistent scenes but often yield static, less realistic observations. We present AEON, a unified framework that bridges video-based and 3D-based world models and combines the benefits of both. The key insight of AEON lies in a generative model that operates within the text- or image-conditioned video latent space while producing renderable 4D graphics primitives---specifically, 4D Gaussian Splatting (4DGS)---as the explicit world representation. We train a 4D reconstruction model to predict both 4DGS and camera poses from monocular videos, serving as our initialized 4D decoder. Furthermore, we design a domain adapter that translates generative video latents into reconstructive 4D latents through a distillation process on the video VAE. AEON naturally supports video-based world modeling by rendering 4DGS at predicted camera trajectories, and constructs a persistent 4D environment with scene dynamics for realistic world simulation. Consequently, AEON empowers a diverse range of world modeling applications and achieves state-of-the-art performance on standard benchmarks. Project Page: https://weiqi-zhang.github.io/AEON",
    "published": "2026-10-20T17:59:51Z",
    "updated": "2026-10-20T17:59:51Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.28631"
  },
  {
    "id": "2610.28630",
    "title": "SolarRenderer: Few-Step Generative Reference Rendering",
    "authors": [
      "Guian Fang",
      "Shengju Qian",
      "Dongyue Lu",
      "Junchao Huang",
      "Lutao Jiang",
      "Xin Wang",
      "Yiren Song",
      "Li Jiang",
      "Mike Zheng Shou"
    ],
    "abstract": "Game engines and coding agents can specify the layout, motion, and camera of a scene, yet turning such coarse structure into realistic video requires a renderer that follows the structure and completes the appearance it leaves open. Existing renderers are tied to the representation of one engine, need tens of denoising steps or a costly distillation of their own, and learn from conditions that are not aligned with their target videos. We present SolarRenderer, a structure-conditioned video renderer that adapts a frozen MiniMax-H3 33B backbone with two lightweight LoRAs. Structural videos enter the native reference pathway of the backbone at the positions of the frames they describe, without a type identifier and described only in plain text, so that a single control LoRA follows arbitrary structural representations. Starting from a pretrained four-step LoRA, structure-guided distribution matching renders in four steps, 12.3 times faster than 50-step sampling, while preserving the learned control. A block-causal variant extends the same design to streaming and renders 768p video in real time. To train the model, we build a frame-aligned corpus of 136K clips from game engines, simulators, and YouTube videos. Experiments on an in-distribution test set and a generalization benchmark of 16 structural representations show that SolarRenderer achieves state-of-the-art results across both, and generalizes to 11 unseen representations, including pose skeletons, drawings, and point clouds.",
    "published": "2026-10-20T17:59:48Z",
    "updated": "2026-10-20T17:59:48Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.28630"
  },
  {
    "id": "2610.28629",
    "title": "GBClaw: An agentic AI framework for atomistic grain boundary research and mechanistic discovery",
    "authors": [
      "Yazhuo Liu",
      "Kunqing Ding",
      "Xiaoguo Gong",
      "Zifeng Wang",
      "Yichen Yang",
      "Yifeng Che",
      "Wen Chen",
      "Josh Kacher",
      "Olivier Pierron",
      "Shigenobu Ogata",
      "Ting Zhu"
    ],
    "abstract": "Agentic artificial intelligence (AI) systems hold immense potential for automating complex workflows in materials discovery and design, but extending them to domain-intensive mechanistic investigations remains challenging. Here, we present GBClaw, an agentic AI framework for investigating the structure and deformation of general grain boundaries (GBs). Although general GBs constitute the vast majority of real-world interfaces in polycrystalline materials, they remain understudied because their structural complexity and interfacial mismatch complicate experimental and modeling research. GBClaw integrates large language models (LLMs) into a modular architecture comprising an orchestrator, specialized agents, domain-specific tools, simulation interfaces, and hierarchical memory. Through dynamic replanning and iterative workflow refinement, the framework effectively connects systematic simulations with targeted mechanistic analysis. Applied to 14 general asymmetric tilt GBs in nickel, GBClaw characterized interfacial defect structures and identified diverse deformation modes across these incommensurate boundaries. Comparing boundary sliding with and without secondary GB misfit dislocations revealed substantial differences in shear strength, underscoring the critical role of defect hierarchies in sliding resistance. Furthermore, researcher-guided follow-up calculations traced an anomalously high shear resistance to metastable boundary structures. This work demonstrates that combining agentic AI with domain expertise bridges high-throughput computational screening with deep physical understanding of complex material interfaces.",
    "published": "2026-10-20T17:59:40Z",
    "updated": "2026-10-20T17:59:40Z",
    "categories": [
      "cond-mat.mtrl-sci",
      "cond-mat.mes-hall",
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.28629"
  },
  {
    "id": "2610.28628",
    "title": "Learning Adaptable Dexterous Skills via Hybrid Dexterous Mimicking",
    "authors": [
      "Yuxuan Kuang",
      "Jiashun Wang",
      "Yixuan Sun",
      "Yufei Ye",
      "Sungjae Park",
      "Umar Iqbal",
      "Katerina Fragkiadaki",
      "Shubham Tulsiani"
    ],
    "abstract": "Dexterous multi-finger hands hold promise to unlock diverse skills like functional grasps, in-hand reorientation, and dynamic handover that the human-designed world assumes, yet existing learning recipes force a trade-off. Goal-reaching reinforcement learning generalizes to arbitrary object poses but, lacking any human prior, converges to unnatural and unreliable finger strategies; motion tracking reproduces human-like behavior from a single clip but cannot deviate from it. We present AdaDex, a goal-conditioned RL framework that turns a single hand-object trajectory of a few seconds---from mocap data or HOI reconstruction from in-the-wild RGB(D) video---into an adaptable dexterous skill. At the core of AdaDex is Hybrid Dexterous Mimicking: a shared policy is trained on two populations of massively parallel environments: motion tracking environments trained with dense motion tracking objective, which instill the human prior from human motion; and generalization environments with noised initial states and goals and a sparse object-success reward, which force the skill to work far off the reference. From seconds of human motion per skill, the resulting policies can learn diverse adaptable dexterous skills, such as functional grasping, object reposing, in-hand reorientation with finger gaiting, and dynamic behaviors like throw-and-catch. Our method outperforms baselines in terms of generalization and functionality, and we demonstrate transfer across simulators and to the real world. Project page: https://yuxuank.com/AdaDex/.",
    "published": "2026-10-20T17:59:32Z",
    "updated": "2026-10-20T17:59:32Z",
    "categories": [
      "cs.RO",
      "cs.CV",
      "cs.GR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.28628"
  },
  {
    "id": "2610.28626",
    "title": "UniWALM: Unified World Action Language Model for Embodied Robot Control",
    "authors": [
      "Rahul Sajnani",
      "Diego Romeres",
      "Mingyuan Zhang",
      "Kai Gao",
      "Carl Qi",
      "Baichuan Huang",
      "Srinath Sridhar",
      "Dylan Randle",
      "Lillian J. Ratliff",
      "Jose Barreiros",
      "Manikantan Nambi",
      "Jeroen Vanbaar"
    ],
    "abstract": "Motivated by the human ability to integrate experience across language, perception, and action, we introduce UniWALM, a unified world-action-language model that learns video, action, and language in a single shared representation, where each modality is both a conditioning signal and a supervision target. We ask: can jointly generating language enrich this shared representation, improving manipulation and supporting memory-dependent behavior? Unlike prior approaches that attach a reasoning or vision-language model to a video-action backbone and run them as distinct stages, UniWALM unifies all three modalities inside a single mixture-of-transformers backbone whose per-modality diffusion heads co-denoise synchronously, decoding subtask and textual memory in the same pass as action with no separate planning stage; the generated language is re-consumed on the next step, closing a language-as-memory loop without an external planner or memory bank. To keep the action stream reliable under this richer objective, we further introduce Flow Matching with Correction (FMC), a training objective that teaches recovery from perturbed action trajectories at no inference-time cost. UniWALM consistently improves over same-backbone baselines (e.g., FastWAM) on compositional pick-and-place (MolmoSpaces) and across the memory-dependent subset of RMBench, where it reaches 34.5% without any pretrained language or reasoning model and exceeds Mem-0's keyframe-equipped setup (28.5%) using only a single anchor frame. On a real-world Find-the-Item task, generating textual memory lifts success from 11.1% to 61.1%, while state-of-the-art VLAs stay at or below chance (<=33.3%).",
    "published": "2026-10-20T17:59:04Z",
    "updated": "2026-10-20T17:59:04Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.28626"
  },
  {
    "id": "2610.28625",
    "title": "PsycheMME: A Psychology-Informed Benchmark for Social Understanding and Interaction in Videos",
    "authors": [
      "Heran Hu",
      "Yuhang Dong",
      "Zhucun Xue",
      "Kaiwei Chen",
      "Yong Liu",
      "Jiangning Zhang"
    ],
    "abstract": "Understanding human needs and selecting responses require distinct judgments that aggregate accuracy can obscure. We introduce PsycheMME, a video benchmark informed by psychology, with eight capabilities spanning grounding, states, needs, interaction decisions, memory, and risk. Drawing on Social Information Processing and the Perception-Action Cycle, this organization separates human understanding from response selection. We construct 1,000 questions from 630 episodes through independent answering with proposed references withheld and expert review. Our Reasoning-Verified protocol weights answer credit by the support and logical consistency of explicit rationales against annotated cues. Across 17 models, Timing has the lowest Verified scores and credit retention, with weaker support judgments for correct Timing answers. Models with similar Need scores still differ in answer completeness on open questions. Input controls and SFT/GRPO examine context dependence and adaptation. Evaluating answers alongside rationales locates where models fail across understanding, response selection, and justification.",
    "published": "2026-10-20T17:59:00Z",
    "updated": "2026-10-20T17:59:00Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.28625"
  },
  {
    "id": "2610.28624",
    "title": "Industrial ReMEmbR: Scaling Spatiotemporal Memory to Robot Fleets",
    "authors": [
      "Jad Yammine",
      "Malek Wahidi",
      "Abrar Anwar",
      "Yan Chang",
      "Mihir Acharya",
      "Anthony Rizk"
    ],
    "abstract": "Warehouse robot fleets continuously observe operational conditions, but preserving these observations as reusable semantic memory incurs substantial computation, communication, and storage costs. For example, explaining recurring aisle blockages can require reviewing video from multiple robots across several shifts. We present IndustrialRemembr, a shared spatiotemporal memory system that extends NVIDIA ReMEmbR to robot fleets and reduces server-side computation by generating scene descriptions only on demand. On each robot, an NVIDIA Jetson encodes video clips into retrieval embeddings with Cosmos-Embed1, vision tokens with Cosmos3-Edge, and reconstruction latents with the Wan2.2 VAE, without uploading raw camera frames. The encoding models are re-used to detect people in image patches, zeroing them out to support PII abstraction for GDPR-compliant deployments. We split Cosmos3-Edge at its vision-language boundary, placing the vision encoder on the robot and the language decoder on an on-premises server. A Nemotron agent retrieves memories by content, position, and time and queries the decoder using cached vision tokens. This design eliminates caption generation at write time, while cached-token decoding reproduces the unsplit model's output in all 450 tested decodes.",
    "published": "2026-10-20T17:58:32Z",
    "updated": "2026-10-20T17:58:32Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.28624"
  },
  {
    "id": "2610.28622",
    "title": "MindView: Benchmarking Generative Multi-View Spatial Intelligence",
    "authors": [
      "Yanbo Wang",
      "Siqi Luo",
      "Siyu Zhang",
      "Chenming Zhu",
      "Wenzhao Zheng",
      "Qian Yu",
      "Juncheng Yan",
      "Bin Fu",
      "Tai Wang",
      "Yu Qiao",
      "Yihao Liu",
      "Jiwen Lu"
    ],
    "abstract": "Spatial intelligence has recently been assessed through generative tasks such as spatially grounded image editing, yet language-guided generation of spatially consistent views from partial multi-view observations remains underexplored. We introduce MindView, a benchmark for generative multi-view spatial intelligence with 1,500 samples from 513 scenes across three indoor datasets. Its seven tasks form two families: geometry-dominant tasks specify changes in camera position and orientation, while semantics-dominant tasks require inferring target viewpoints by grounding referred objects and interpreting spatial relations and reference-frame cues. Evaluation of eleven generators reveals substantial room for improvement on MindView. A paired context analysis further shows that all eleven generators obtain lower overall scores under the expanded context setting. These findings motivate us to investigate whether task-specific supervision can improve target-view generation and whether models can use additional multi-view evidence effectively. We therefore fine-tune BAGEL on the MindView training dataset, improving its overall score by 24.3 points and yielding gains across all seven MindView tasks. Beyond these generation gains, the fine-tuned model also yields higher scores on three spatial-understanding benchmarks without training on their annotations, suggesting that learning to generate spatially grounded views may benefit spatial understanding. To improve evidence utilization under expanded context, we propose MindCue, a training-free spatial evidence selector guided by a target-view hypothesis. MindCue reverses the drop in overall score under expanded context and outperforms the standard-context baseline. Overall, MindView provides a concrete testbed for generative multi-view spatial intelligence.",
    "published": "2026-10-20T17:58:25Z",
    "updated": "2026-10-20T17:58:25Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.28622"
  },
  {
    "id": "2610.28619",
    "title": "Adaptive Multi-Token Prediction: How far should we go?",
    "authors": [
      "Emile Anand",
      "Mohammed Rehan Parwani",
      "Xinyuan Cao"
    ],
    "abstract": "Multi-token prediction (MTP) can accelerate language-model decoding by drafting several tokens and verifying them in a single target-model pass. However, the best speculation horizon changes with context: longer drafts offer greater amortization when reliable, but can waste compute on suffixes discarded after a rejection. Unlike autoregressive drafting, where a stopping rule can decide token by token, MTP must fix the horizon before drafting, as all heads fire in the same forward pass. We therefore formulate horizon selection as an online control problem, using verification feedback to learn how far the draft can be trusted in each context, and introduce Adaptive Multi-Token Prediction (AMTP): a lightweight controller that requires no retraining and leaves the exact verifier unchanged. To guide horizon selection, we characterize the expected number of tokens committed at each horizon via acceptance survival, the probability that a draft prefix is fully accepted. Before each round, AMTP predicts how far the draft is likely to survive and picks the horizon with the highest expected tokens per second, learning freely from every verification pass. Theoretically, we show that any online learner's prediction error translates into throughput regret against the best horizon for each context, and in turn into a bound on wall-clock completion time. With online gradient descent, this regret is sublinear. Across five draft-target pairings built on Llama-3.1-8B-Instruct with Medusa heads, Meta's MTP models, and Qwen3-4B-Inst-2507-MTP, evaluated on AIME 2025 and GSM8K, AMTP decodes up to 4.1x faster than standard decoding and matches or outperforms the fixed window in 8 of 10 settings, with throughput gains of up to 10%.",
    "published": "2026-10-20T17:56:32Z",
    "updated": "2026-10-20T17:56:32Z",
    "categories": [
      "cs.AI",
      "cs.LG",
      "eess.SY"
    ],
    "url": "https://arxiv.org/abs/2610.28619"
  },
  {
    "id": "2610.28615",
    "title": "KoalaGS: Complexity-Aware Continuous Level of Detail for Gaussian Splatting",
    "authors": [
      "Radu Beche",
      "Raoul de Charette"
    ],
    "abstract": "Deploying a trained 3D Gaussian Splatting scene under shrinking compute budgets requires one primitive set to remain effective when rendered at smaller prefixes. In this continuous level of detail (LoD) setting, the challenge is to decide which Gaussians should retain capacity as the budget decreases. A pilot study on 3DGS-MCMC reconstructions shows that image complexity, computed from the input views before optimization, predicts where reconstruction error concentrates in image and 3D space. It also reveals that simple regions contain too many Gaussians and degrade as much as complex ones at lower budgets, despite being inherently cheaper to represent. Subsequently, in KoalaGS, during training we use this complexity prior to bias relocation toward poorly reconstructed areas while ensuring smooth degradation across LoDs. A primitive importance score then enables inference at low-capacity, while preserving the scene structure. Tested across three datasets, KoalaGS maintains competitive full-capacity quality while significantly improving quality across the budget spectrum, yielding smoother transitions across LoDs, and enabling faster progressive streaming.",
    "published": "2026-10-20T17:55:06Z",
    "updated": "2026-10-20T17:55:06Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.28615"
  },
  {
    "id": "2610.28611",
    "title": "Semantic Observability for Autonomous Systems Diagnostics",
    "authors": [
      "Jitendra Solanki",
      "Anand Todkar",
      "Ziran Min"
    ],
    "abstract": "Modern distributed microservice deployments generate massive volumes of heterogeneous, multi-format observability logs across physically and logically partitioned infrastructure. Isolating root causes during cascading failures remains an arduous task for Site Reliability Engineers (SREs), bottlenecked by manual keyword filtering and disjointed temporal correlation across monitoring dashboards. We introduce Semantic Observability, an autonomous multi-agent framework that unifies disparate log streams into a dynamic, queryable Property Graph Database. By modeling physical infrastructure topologies, logical software dependencies, and chronological event sequences as attributed nodes and directed relations, it bridges the semantic gap inherent in flat, unstructured log repositories. Building on this unified substrate, we deploy a stateful multi-agent system orchestrated through Directed Cyclic Graphs (DCGs). The system autonomously navigates the topology, applying causal graph algorithms and temporal back-traversal to isolate the precise blast radius of anomalies. The pruned subgraph is then interpreted by a Large Language Model (LLM) reasoning engine to generate contextualized, code-level Root Cause Analyses (RCA) and actionable remediations. This paper establishes the foundational system architecture, formal relational ontology, and multi-agent control loops of Semantic Observability. We show conceptually how the framework eliminates ambient telemetry noise, reduces Mean Time to Resolution (MTTR), compresses LLM token consumption, and prevents structural hallucinations. We also specify an open-source validation framework on standard benchmarks (LogHub and Train-Ticket), laying the groundwork for a forthcoming companion paper on exhaustive quantitative evaluation and production benchmarking.",
    "published": "2026-10-20T17:53:32Z",
    "updated": "2026-10-20T17:53:32Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.28611"
  },
  {
    "id": "2610.27518",
    "title": "When Health Assistants Agree Too Readily: A Benchmark of Time-Critical Self-Diagnosis",
    "authors": [
      "Marilyn Zhang",
      "Tianfeng Chen",
      "Patricia M Pechter",
      "Mark E. Whiting"
    ],
    "abstract": "Every day, more than 40 million people ask ChatGPT a health question, such as whether laptop posture explains a stiff neck and days of pounding headache. Posture is plausible, but meningitis is a time-critical possibility. We introduce SelfDx, a paired benchmark for whether models have the appropriate response behavior, a form of epistemic independence, in health questions where misplaced agreement with the user's self-diagnosis could delay urgent or emergency care. Each of 100 pairs contrasts a caution case, where a serious alternative remains possible, with an agreement case, where the user supplies evidence that rules out the alternative and it is safe for the model to agree. We find across 27 frontier models that they tend to inappropriately agree with the user's self-diagnosis in cases that require caution. Even the best current-generation model reaches only a 77.0% appropriate caution rate on time-critical condition cases. To address this gap, we experiment with three prompt variants that increase appropriate caution but reduce appropriate agreement by 9-35%, indicating excessive caution. In contrast, supervised fine-tuning on 128 balanced examples improves both rates together across three runs. We recommend post-training to improve appropriate caution without making models cautious on every case, with paired evaluation to verify both response behaviors.",
    "published": "2026-10-20T02:31:47Z",
    "updated": "2026-10-20T02:31:47Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27518"
  },
  {
    "id": "2610.27516",
    "title": "HealBench: A Fine-Grained Benchmark for Evaluating Psychological Comfort in Text-to-Image Generation",
    "authors": [
      "Junjie Xu",
      "Yuzhe Yang",
      "Rui Yang",
      "Luwei Xiao",
      "Wenxin Wu",
      "Xingjiao Wu",
      "Liang He"
    ],
    "abstract": "Despite advances in photorealism, semantic fidelity, and aesthetics, text-to-image generation and image editing remain understudied in a human-centered dimension: whether their outputs feel psychologically comforting. Grounded in cognitive evaluation theory, we define psychological comfort as an affective response shaped by viewers' appraisal of restorative and emotionally supportive visual cues. We introduce HealBench, a fine-grained benchmark of 30,000 high-quality image-text pairs spanning 19 categories and 92 subcategories, selected from 100,000 candidates through a human- and expert-in-the-loop pipeline combining vision-language model matching, human preference models, expert filtering, and exemplar-guided augmentation. We also construct HealBench-Eval, a feature-clustered evaluation set of 1,095 instances. Using HealBench-Eval, we conduct objective and subjective evaluations of 14 representative image generation models and prompt-rewriting strategies. Results reveal a gap between conventional visual quality and perceived comfort: strong semantic alignment and aesthetics do not guarantee emotionally restorative images. Reinforcement learning experiments further show that HealScorer can serve as a reward signal for assessing and improving the emotional and restorative quality of generated images. These findings establish psychological comfort as a distinct dimension of human-centered image generation and position HealBench as a foundation for affect-aware generative models.",
    "published": "2026-10-20T02:31:31Z",
    "updated": "2026-10-20T02:31:31Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27516"
  },
  {
    "id": "2610.27515",
    "title": "Progressive Subset Selection and Cascaded Consistency for Unsupervised Vision-Language Model Adaptation",
    "authors": [
      "Hao Yan",
      "Guanghui Wang"
    ],
    "abstract": "Pretrained Vision-Language Models (PVLMs) achieve strong zero-shot recognition but often suffer performance degradation under target-domain shift. Unsupervised adaptation provides a practical way to improve target-domain performance without labeled data, but it remains challenging because pseudo-labels generated by the model can be unreliable and no labeled validation set is available for model selection or early stopping. We propose a simple framework for unsupervised PVLM adaptation that combines progressive margin-based subset selection with cascaded consistency learning. The subset selection strategy constructs a class-balanced pseudo-labeled set using prediction margins and gradually expands it during training, enabling adaptation to start from reliable supervision anchors before incorporating broader target-domain data. Cascaded consistency learning further exploits unlabeled samples by using temporally smoothed teacher predictions on weakly augmented views to supervise student predictions on strongly augmented views, with confidence filtering to reduce the influence of uncertain pseudo-labels. To preserve the pretrained embedding structure, the framework updates only normalization parameters in the visual encoder and class prototypes initialized from text prompts. Experiments across multiple recognition benchmarks with both CLIP and SigLIP backbones show consistent improvements over zero-shot baselines and competitive performance against recent unsupervised PVLM adaptation methods. These results suggest that progressive pseudo-label selection and teacher-guided consistency provide an effective and lightweight strategy for adapting PVLM classifiers without labeled target data.",
    "published": "2026-10-20T02:30:11Z",
    "updated": "2026-10-20T02:30:11Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27515"
  },
  {
    "id": "2610.27512",
    "title": "Structured-Token Attention for Fine-Grained mmWave Liquid Identification",
    "authors": [
      "Junseo Min",
      "Joongheon Kim"
    ],
    "abstract": "Fine-grained liquid identification requires a classifier to distinguish similar substances from compact millimeter-wave measurements. We investigate structured-token attention, which represents a radar feature tensor through complementary antenna, feature, branch, and global views. The proposed StructAttn model embeds these views into eleven tokens and combines them with a three-layer transformer. Experiments on the public FG-LiquID data cover 30 liquids and 3,000 samples. Over five seeds on the released split, StructAttn achieves 96.70\\% mean best-epoch accuracy, matching the original-recipe MMNet baseline and exceeding a scalar-token attention model by 1.50 percentage points. A five-seed probability ensemble reaches 97\\%, corresponding to 18 errors among 600 test samples. Final-epoch and five-fold results complement the checkpoint-selected comparison, with StructAttn obtaining 95.30\\% out-of-fold accuracy. Token and feature analyses show that structured views are useful for prediction, while residual confusions concentrate in water, soft-drink, and edible-oil classes. These results support structured tokenization as a practical design choice for attention-based liquid recognition.",
    "published": "2026-10-20T02:27:39Z",
    "updated": "2026-10-20T02:27:39Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27512"
  },
  {
    "id": "2610.27505",
    "title": "Cross-Visibility-Gap Identity Persistence for 4D Scene Graphs",
    "authors": [
      "Jiahui Hu",
      "Li Gao",
      "Yu Liu",
      "Pengzhan Zhou"
    ],
    "abstract": "4D scene graphs require persistent object identity when an object disappears inside an opaque carrier and later reappears as a fresh detection. When appearance and target-centric motion are unavailable, identity recovery must rely on relational history. We formulate cross-visibility-gap identity persistence as historical-node recovery through a remembered target--carrier binding. We introduce CVG-SGM, a perception-frontend-compatible transfer--maintain--read memory. Geometry-weighted cross-node interaction transfers target-specific evidence into carrier states, a shared per-node GRU maintains this information during transport, and a two-time readout combines stored carrier--identity compatibility with current detection--carrier geometry to recover the historical identity. In the controlled one-identity-per-carrier setting, CVG-SGM achieves 1.000 re-link accuracy, compared with 0.570 for both no-memory and parameter-count-matched no-write controls. It also generalizes to scene-disjoint, unseen longer visibility gaps. On real RGB-D/SAM2 feature-level episodes, it correctly re-links 36/36 held-out detections, compared with 28/36 for the strongest fixed carrier--identity control. Counterfactual carrier-memory swaps redirect predictions according to the swapped bindings, supporting the role of stored relational information in identity recovery. The current approach remains limited by shared-carrier identity ambiguity and does not provide end-to-end raw-video re-identification.",
    "published": "2026-10-20T02:20:34Z",
    "updated": "2026-10-20T02:20:34Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27505"
  },
  {
    "id": "2610.27496",
    "title": "Evaluating Social Reasoning in Embodied Vision-Language Models",
    "authors": [
      "Daniel Weiner",
      "Raj Korpan"
    ],
    "abstract": "Foundation models now serve as reasoning layers for robot teams, but it remains unclear whether embodiment-specialized vision-language models (VLMs) preserve the social-reasoning capabilities of general-purpose VLMs. We evaluate Gemini Robotics-ER on SHREC, a benchmark of real human-robot social interactions, and compare it with published general-purpose VLM baselines. Robotics-ER outperforms GPT-4o-mini on error/competence detection but performs worse on detailed social-attribute judgments; adding a visual frame helps one task while hurting the other. These results suggest embodiment-specialized models may perform differently on social judgments that can be read more directly from observable interaction cues versus those requiring more inference about a person's internal state. Because the comparison spans model families, these differences cannot be attributed to embodiment specialization alone. This matters for multi-robot systems, where a shared foundation model could cause systematic social-perception errors to influence multiple coordination decisions. This work presents an initial evaluation, with broader cross-context and video-based analyses left for future work.",
    "published": "2026-10-20T02:14:00Z",
    "updated": "2026-10-20T02:14:00Z",
    "categories": [
      "cs.RO",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.27496"
  },
  {
    "id": "2610.27495",
    "title": "Self-Evolving Agents through Privileged Retrospective Distillation",
    "authors": [
      "Yuhang Zhou",
      "Yifan Wu",
      "Bo Peng",
      "Mingyi Wang",
      "Jiayi Liu",
      "Xiangjun Fan",
      "Lizhu Zhang",
      "Zhuokai Zhao"
    ],
    "abstract": "Self-evolving agents aim to improve from their own experience rather than remain fixed after deployment, but naturally collected trajectories often lack ground-truth solutions or verifier-derived rewards. We introduce Retrospective Self-Distillation (RSD), a multi-round framework that turns such experience into dense supervision using privileged retrospective context. For each on-policy trajectory, the same underlying model acts as both student and teacher: the teacher re-scores the student's realized actions while conditioning on cross-task precedents and lessons, together with turn-level reflection and future hindsight from the completed trajectory. The resulting teacher distribution is distilled back into the policy through on-policy self-distillation. Across rounds, the experience bank grows and the retrospective context is refreshed, allowing the model, its data, and its supervision to co-evolve. We further introduce frontier-guided context-policy evolution, where a stronger frontier model proposes constrained edits to how privileged context is constructed. Across ALFWorld, ScienceWorld, and SearchQA with Qwen3-8B and Qwen3-14B, RSD improves performance by up to 59.7% relative to the base model, while frontier-guided context-policy evolution adds up to a further 44.7% relative improvement over a fixed context policy. These results show that naturally accumulated experience can be converted into persistent model capability without ground-truth trajectories or verifier-derived rewards for the core policy update.",
    "published": "2026-10-20T02:13:21Z",
    "updated": "2026-10-20T02:13:21Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.27495"
  },
  {
    "id": "2610.27490",
    "title": "Orthogonal Boundary Unlearning for Dual-Use Concepts in Large Language Models",
    "authors": [
      "Niccolò Ronchetti"
    ],
    "abstract": "Mitigating catastrophic risks from large language models requires excising hazardous operational capabilities, such as cyberwarfare exploitation and pathogen enhancement, without degrading benign scientific utility. In these dual-use domains, legitimate defensive science and malicious attacks share vocabulary, syntax, and internal model representations, causing standard unlearning methods to induce severe collateral damage (concept bleeding). In this work, we present Orthogonal Boundary Unlearning (OBU), a mathematically grounded framework designed to eliminate collateral damage on benign dual-use capabilities. OBU extracts a domain-matched capability subspace from paired calibration queries via singular value decomposition on empirical activation covariances, and restricts parameter updates strictly to the orthogonal null space. This guarantees that benign representations experience zero parameter perturbation along the spanned calibration subspace. We present two complementary realizations of OBU: Projected LoRA, which applies the orthogonal constraint during iterative gradient-based fine-tuning, and Closed-Form Weight Surgery, which directly edits model weights in a single analytical step without training. Across four modern open-weight foundation models (Gemma-3-4B, Qwen3.5-4B, SmolLM3-3B, and Granite-4.2-3B), OBU achieves strong dual-use concept separation, substantially mitigates in-context priming attacks, and demonstrates durable resistance against adversarial relearning without degrading benign domain competence.",
    "published": "2026-10-20T02:09:21Z",
    "updated": "2026-10-20T02:09:21Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27490"
  },
  {
    "id": "2610.27488",
    "title": "The More the Better? A Comparison of Single- and Multi-Agent LLM Setups on a Financial Review Task",
    "authors": [
      "Pei Liu"
    ],
    "abstract": "Practitioner guidance holds that a large language model reviews a document better when the work is divided among agents. We test a narrow form of it in a controlled comparison of single-agent and multi-agent setups on a financial task, reviewing credit assessment memos against requirements. One agent checks six requirements in one call. A team of three on the same model checks the same memo, two requirements each, in the same words, with no roles or later stage. Labels are known for every requirement on 300 synthetic memos, so misses and false alarms are measured separately. Two primary predictions are tested on four models at a Bonferroni-corrected level. Under an instruction to decide each requirement once, the team catches 0.08 to 0.10 more of the defects that carry an explanation on the three models whose single agent misses some, at the corrected level on two. It raises more false alarms on all four, at the corrected level on three. Balanced accuracy, an exploratory measure, changes by 0.02 or less, and the team uses 2.2 to 2.4 times the tokens. Showing each agent the requirements it was not given reduces the added false alarms on the two Claude models, at the corrected level on one. In exploratory comparisons, sampling the single agent three times and flagging on any draw gives higher balanced accuracy than the team on those models, and the team's results depend on the instruction.",
    "published": "2026-10-20T01:55:24Z",
    "updated": "2026-10-20T01:55:24Z",
    "categories": [
      "cs.AI",
      "cs.CE"
    ],
    "url": "https://arxiv.org/abs/2610.27488"
  },
  {
    "id": "2610.27483",
    "title": "Securing Agentic Commerce Through Behavior-Aware Fraud Detection and Cybersecurity for Trusted AI-Agent Payment Authorization",
    "authors": [
      "Kayode L. Ogunsusi"
    ],
    "abstract": "The growing use of autonomous artificial intelligence agents in digital commerce creates new security concerns involving agent impersonation, unauthorized payments, compromised agents, and misuse of delegated authority. This research introduces the Autonomous Commerce Agent Guard System (ACAGS), a cybersecurity framework combining supervised machine learning, behavioral analytics, agent-specific authorization controls, and explainable AI. The framework was evaluated using synthetic financial transaction data augmented with simulated agent characteristics and five adversarial scenarios. XGBoost was selected following comparisons with alternative classifiers. Across ten experimental runs, behavioral features improved mean F1-score from 52.12% to 67.49%, with agent-specific features increasing performance to 69.46%. The framework achieved detection rates of 99.77% for abnormal agent behavior, 99.73% for impersonation, and 100% for malicious delegation and authorization-scope violations. Compromised-agent detection reached 72.27%. ACAGS also supported APPROVE, REVIEW, and REJECT authorization outcomes, with SHAP explanations providing model interpretability. The results demonstrate the potential of combining behavioral intelligence and delegated authorization controls to strengthen simulated agentic-commerce payment security, while highlighting the need for validation using real-world transactions.",
    "published": "2026-10-20T01:48:14Z",
    "updated": "2026-10-20T01:48:14Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27483"
  },
  {
    "id": "2610.27480",
    "title": "Runtime Control for AI Agents: Closing the Evaluation--Execution Gap in Operational Workflows",
    "authors": [
      "Jayesh Bhadane",
      "Ramachandra Yerramsetti",
      "Rajesh Gupta",
      "Sumit Kumar"
    ],
    "abstract": "Language-model agents increasingly participate in operational workflows where approvals, binds, and payments create commitments. An approval valid when issued may no longer authorize execution after relevant facts, evidence, policy, or authority change. We call this the evaluation--execution gap. We specify a state-bound runtime assurance layer that separates probabilistic measurement from deterministic adjudication, binds an execution allowance to the decision-relevant basis of an approval, invalidates that allowance after relevant logged changes, and rechecks admissibility at dispatch. This distinguishes the continued validity of a prior approval from a current-state policy check. We describe eight failure modes, an assurance model, a reference architecture, and prospective interventions with retrospective remediation. In a scripted 42-case replay, the state-bound configuration identifies 15 later-invalidated approvals that a deliberately non-re-evaluating point-in-time comparator does not revisit; it holds 14 affected actions before dispatch and compensates one landed effect. These results illustrate behavior under the stipulated policies and event orders, not superiority over dispatch-time enforcement designs or production effectiveness. Under explicit interception, ingestion, dependency, and serialization assumptions, the model establishes dispatch-time validity within the registered execution surface.",
    "published": "2026-10-20T01:46:07Z",
    "updated": "2026-10-20T01:46:07Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27480"
  },
  {
    "id": "2610.27479",
    "title": "FocusOVD: Geometric and Contextual Feature Refinement for Open-Vocabulary Small-Object Detection",
    "authors": [
      "Hanlin Kou",
      "Beiqi Bai",
      "Li Chen",
      "Youjia Jing",
      "Shupan Li",
      "Mingyuan Jiu"
    ],
    "abstract": "Open-vocabulary object detection aims to detect both seen and unseen categories by leveraging the semantic knowledge of vision-language models. However, existing methods often struggle with small objects due to insufficient preservation of high-resolution details, ineffective information aggregation across feature levels, and limited region-level discriminability. To address these challenges, we propose FocusOVD, an open-vocabulary object detector that enhances small-object representations without modifying the frozen VLM backbone. FocusOVD introduces three complementary components: a Reweighted Cross-scale Feature Fusion module, which learns normalized level-wise weights to adaptively balance shallow appearance details and deep semantic cues during feature pyramid aggregation; a Residual Pinwheel-shaped Gated Convolution module, which strengthens local geometric responses in high-resolution features; and a Residual Convolutional Gated Linear Unit module, which suppresses background-dominated activations and enhances RoI discriminability before prediction. Extensive experiments on COCO-OVD and LVIS-OVD demonstrate the effectiveness of FocusOVD. On COCO-OVD, FocusOVD achieves a novel-category AP of 36.3%, outperforming CORA, UniDetector, and SAMP by 1.3%, 1.1%, and 1.5%, respectively; on LVIS-OVD, it achieves an overall AP of 33.7%, surpassing the strongest competing method by 0.6%. These results demonstrate the strong generalization ability of FocusOVD for open-vocabulary small-object detection.",
    "published": "2026-10-20T01:45:41Z",
    "updated": "2026-10-20T01:45:41Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.27479"
  },
  {
    "id": "2610.26066",
    "title": "FinSafeGuard: A Quality-Driven Synthetic Dataset for Financial AI Safety",
    "authors": [
      "Joseph Thomas Thacil",
      "Reetu Raj Harsh",
      "Krati Saxena",
      "Bhaskarjit Sarmah",
      "Stefano Pasquali"
    ],
    "abstract": "Generating high-quality synthetic datasets at scale remains a fundamental challenge for training specialized AI systems in data-scarce domains. We present a comprehensive methodology that produces 14.3 million quality-filtered synthetic training examples from a structured taxonomy of 632,000 scenario specifications. Our four-stage pipeline ad- dresses critical challenges in synthetic data quality, diversity, and realism through: (1) systematic pre-generation research establishing optimal generation parameters via diminishing returns analysis, (2) conditional auto evolution mechanisms that remediate low-diversity batches during generation, (3) a two-layer semantic deduplication architecture combining lexical and embedding-based methods, and (4) LLM-as-Judge quality evaluation filtering samples based on behavioral correctness and tuple fidelity. Empirical analysis across three domains (Banking, Insurance, Financial Services) demonstrates domain-specific deduplication patterns ranging from 9.9% to 40.6%, with output generation modes exhibiting highest redundancy. Our batch size optimization reveals mode-specific diversity saturation thresholds, enabling principled allocation strategies. The complete pipeline reduces 26.4M raw samples to 14.3M high-confidence examples through merge (20.9% reduction), semantic deduplication (18.7% reduction), and quality-based filtering (15.9% reduction), providing a reproducible framework for domain-specific synthetic data generation with rigorous quality control.",
    "published": "2026-10-19T09:25:28Z",
    "updated": "2026-10-19T09:25:28Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.26066"
  },
  {
    "id": "2610.26064",
    "title": "Learning the Dose Manifold: A Latent Diffusion Framework for Volumetric Dose Prediction in Automated Radiotherapy Treatment Planning",
    "authors": [
      "J. Boyer-Chammard",
      "R. Vauclin",
      "M. C. Biston",
      "P. Maury",
      "M. Gau",
      "S. Stathakis",
      "V. Grégoire",
      "N. Paragios",
      "E. Deutsch",
      "N. Komodakis"
    ],
    "abstract": "Automated treatment planning (ATP) aims to reduce the unwarranted inter-planner variability of manual planning, while improving treatment quality and efficiency. Most ATP pipelines rely on the prediction of the achievable three-dimensional dose distribution for a given anatomy and the subsequent optimization of machine parameters to reproduce it. Diffusion-based methods are largely slice-wise due to the high dimensionality of radiotherapy data, and assume a one-to-one mapping between anatomy and optimal dose despite the multi-objective nature of treatment planning. They are evaluated on their ability to match reference doses and rarely on their integration in ATP frameworks. We present LaDose, a latent diffusion framework for fully volumetric dose prediction. An autoencoder learned on dose distributions, trained so that perturbed latents decode to plausible doses, compresses dose maps 128-fold and enables 3D diffusion on a single GPU. Prescription values are represented as exact scalar vectors that bypass the image encoder, avoiding resampling and latent compression. Multiscale classifier-free guidance allows for the modulation of clinical trade-offs at inference, without retraining or additional labeled data. On 900 clinically delivered head-and-neck volumetric modulated arc therapy plans from five centers, LaDose reached a median absolute error of 1.18 Gy (1.4--1.8\\% of the prescription) and was the only one of six frameworks free of systematic bias with respect to the reference distribution. Guidance scales acted predictably on target coverage and organ-at-risk sparing. Integrated with direct aperture optimization, the pipeline generated plans in 15.2 minutes; in a blinded review, senior clinicians rated 14 of 15 plans acceptable without editing.",
    "published": "2026-10-19T09:24:05Z",
    "updated": "2026-10-19T09:24:05Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.26064"
  },
  {
    "id": "2610.26062",
    "title": "Procedural Exposure Bias in Skill-Augmented Language Model Agents",
    "authors": [
      "Qing Yang",
      "Yuqi Xiong",
      "Pengcheng Huang",
      "Zhipeng Xu",
      "Zhenghao Liu",
      "Zulong Chen",
      "Yu Gu",
      "Ge Yu"
    ],
    "abstract": "External skills provide language-model agents with reusable procedural knowledge, yet how models use such knowledge after it is supplied remains poorly understood. We identify Procedural Exposure Bias (PEB), the tendency of language models to increasingly favor an action as its associated procedural pattern is repeatedly exposed in a skill, even when the interaction state and action relevance remain unchanged. We find that PEB strongly depends on how procedural knowledge is represented: presenting the same content visually substantially attenuates exposure-induced shifts in action preference relative to textual presentation. Further analysis shows that this attenuation primarily arises from visual encoding rather than structured layout. Although repeated procedural signals remain recoverable from Visual representations, they exert a weaker influence on downstream action prediction, distinguishing signal accessibility from its use as action evidence. This effect also extends to executable action selection, where increasing exposure more strongly favors the corresponding action under Text than Visual. Layer-wise analyses show that exposure-dependent action evidence becomes more pronounced toward the model output, with stronger evidence under Text, while activation interventions reveal architecture-specific roles of internal components in transmitting or counteracting the preference shift. Complete-agent evaluations across ALFWorld, ScienceWorld, and WebShop further show that Visual skills achieve higher macro-average task success than Text skills for all four evaluated models. These findings establish skill representation as an important factor governing how procedural knowledge is translated into agent decisions. All code is available at https://github.com/NEUIR/Vis-Skill.",
    "published": "2026-10-19T09:23:54Z",
    "updated": "2026-10-19T09:23:54Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.26062"
  },
  {
    "id": "2610.26059",
    "title": "Honeyed Words, Hidden Daggers: Benchmarking and Training LLMs to See Through Mock Politeness",
    "authors": [
      "Caixin Kang",
      "Sitong Gong",
      "Tianyu Yan",
      "Kaipeng Zhang",
      "Yoichi Sato",
      "Yifei Huang"
    ],
    "abstract": "The Chinese idiom \"kou mi fu jian\" (\"honeyed words, hidden daggers\") names speech that is polite in form but hostile in function. We present ZhenhuanBench, a 1,592-item benchmark built from expert commentary on Empresses in the Palace, covering speaker intent, emotion-language mismatch, and per-listener uptake. Text-only evaluation covers 34 LLMs. GPT-6 Astra leads the leaderboard at 73.48% overall, while its listener-reaction score is 58.37%. The annotations also supply supervised traces and string-verifiable training rewards. With 338 gold traces, an 8B model outperforms teacher distillation on identical items. Subsequent RL saturates, and chance correction reduces the estimated recoverable performance gap by a factor of 7.5. Our CPR-GRPO loop (Compress-Probe-Replenish) uses this estimate to weight gold supervision, reaching 67.0 on public multiple-choice tasks and 74.5 under the training-matched hidden protocol. Without target-task training, CPR outperforms Base, SFT, and GRPO across six Chinese and English pragmatic and sarcasm evaluations. On three external datasets, training with CPR yields higher mean Macro-F1 than SFT and GRPO.",
    "published": "2026-10-19T09:19:38Z",
    "updated": "2026-10-19T09:19:38Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.26059"
  },
  {
    "id": "2610.27001",
    "title": "HierDTA: Hierarchical Structure-Aware Representation Learning for Drug--Target Affinity Prediction",
    "authors": [
      "Huangchao Xu",
      "Baohua Zhang",
      "Qian Liu",
      "Zhong Jin",
      "Yi Du"
    ],
    "abstract": "Drug--target affinity (DTA) prediction plays an important role in computer-aided drug discovery, where reliable computational models can help prioritize compound--protein pairs before experimental validation. A key challenge in DTA prediction is to effectively mine multi-level molecular information from drug structures while accurately modeling the binding-site environment of target proteins. To address these issues, we introduce HierDTA, a hierarchical structure-aware framework for DTA prediction. \\textcolor{black}{HierDTA represents each drug as an atom--motif heterogeneous graph and introduces an augmentation module that propagates functional-motif semantics to the corresponding atoms. For proteins, kinase-domain structures are converted into residue interaction graphs. The resulting atom and residue representations are integrated using cross-attention to capture pair-specific relationships, while molecule fingerprints and pretrained ESM-2 embeddings provide complementary global information. Compared with state-of-the-art methods, HierDTA achieves superior performance on the Davis dataset across all metrics and attains the highest \\(r_m^2\\) of 0.791 on KIBA. It also exhibits strong generalization under cold-start settings, particularly on KIBA, where MSE is reduced by 21.7\\% in the unseen-protein scenario. Ablation study and interpretability analysis supported the contributions of the hierarchical augmentation and interaction components.} Case studies further showed that HierDTA provided early enrichment of candidate bioactive compounds. These results indicate that HierDTA is an effective framework for affinity prediction and target-specific virtual screening.",
    "published": "2026-10-19T09:17:26Z",
    "updated": "2026-10-19T09:17:26Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27001"
  },
  {
    "id": "2610.26046",
    "title": "AVTime: Reinforcing Dense Audio-Visual Captions with Bidirectional Alignment",
    "authors": [
      "Mingyang Wu",
      "Kaituo Feng",
      "Bohao Li",
      "Kaixiong Gong",
      "Zihao Yin",
      "Xiangyu Yue"
    ],
    "abstract": "Dense temporal audio-visual captioning is important for multimodal video understanding and generation. However, prior work is constrained by three main limitations: (1) the lack of a dataset combining high temporal resolution, longer videos, and bidirectional alignment between time and events; (2) the reliance of most existing RL methods on checklists; and (3) the lack of a benchmark that bidirectionally evaluates event semantic correctness and temporal accuracy. To address these challenges, we propose: (1) AVTime-50K, a high-quality 50K-scale dataset with temporally precise, semantically accurate captions and longer videos; (2) AVTime, a state-of-the-art model optimized with a novel Bidirectional Temporal-Semantic Alignment (BiTSA) reward that imposes explicit bidirectional constraints between time and events; and (3) AVTime-Bench, a specialized benchmark that introduces a novel bidirectional evaluation of temporal accuracy and semantic correctness. Our code, models, and datasets are available at https://huggingface.co/collections/Apryle/avtime.",
    "published": "2026-10-19T09:05:39Z",
    "updated": "2026-10-19T09:05:39Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.26046"
  },
  {
    "id": "2610.26035",
    "title": "Decision4Rec: A Jev-Inspired Framework of Decision Models on Knowledge and Active Graphs for Multi-Agent Recommender Systems",
    "authors": [
      "Marco Polignano",
      "Het Darshan Mehta",
      "Pasquale Lops",
      "Ernesto William De Luca",
      "Giovanni Semeraro"
    ],
    "abstract": "Decision models, such as the commercial Jev, are language models that return one probability for each option of a question instead of generating text. We present Decision4Rec, an open and modular framework that makes decision models useful for recommendation. A knowledge graph writes the logs of each recommendation scenario as short statements on a defined scale, such as \"sold: top 10%\". A pool of agents, proposes candidates, and a residual ranker keeps the best 30. A decision model, trained once on real choices of three scenarios, reads them through one interface of typed questions, and a fusion step combines its answers with the score of the ranker. Any model with this interface can be used, and we run the commercial Jev, the released open Kev and Kev models trained by us on recommendation requests. The framework with a trained 4B decision model is 25 to 36% above the best trained baseline in NDCG@10 in three sparse Amazon catalogues, one of them never used to train the decision model, and almost tie with baselines on the dense Steam dataset. Most of the gain comes from the pool, and with a trained recommender it comes from what the agents know about its candidates rather than from new candidates. The 27B decision model adds to the pool 5 to 6% above the 0.8B model in three of four domains. A trained 0.8B open model beats the released Jev in eleven of fifteen settings and is never worse. On MovieLens-1M, a dense domain never seen in training, the gain is 5 to 7%. Code, configurations and trained models are available at https://github.com/marcopoli/decision4rec and https://huggingface.co/m-polignano.",
    "published": "2026-10-19T08:56:56Z",
    "updated": "2026-10-19T08:56:56Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.IR"
    ],
    "url": "https://arxiv.org/abs/2610.26035"
  },
  {
    "id": "2610.26031",
    "title": "AuDQ: Auditable Data Quality through Agentic Rule Discovery",
    "authors": [
      "Jacopo Biggiogera",
      "Nicolas Colombo",
      "Krati Saxena",
      "Bhaskarjit Sarmah",
      "Stefano Pasquali"
    ],
    "abstract": "High-stakes tabular pipelines rely on scattered, static quality checks that are hard to evolve and audit against policy intent. Regulated domains particularly suffer as the LLM-era automation raises expectations for traceability and accountability. We propose a vision for an ontology-grounded, repository-native data quality layer in which rules are first-class artifacts: versioned, provenance-linked to governance texts, and re-playable through immutable execution traces. As a first step toward validating this vision, we present a concrete implementation of its agentic rule-discovery core with two rule acquisition modes (Full-Agentic and Guided) and a human-in-the-loop (HITL) review interface. We define an evaluation framework and run experiments addressing whether our fully autonomous, divide-and-conquer agentic rule discovery produces rules of the same quality and diversity as those specified by a human expert, reporting preliminary results on two real world industry datasets in the finance and retail domains.",
    "published": "2026-10-19T08:53:48Z",
    "updated": "2026-10-19T08:53:48Z",
    "categories": [
      "cs.AI",
      "q-fin.CP"
    ],
    "url": "https://arxiv.org/abs/2610.26031"
  },
  {
    "id": "2610.26026",
    "title": "After the Federation: Benchmarking Knowledge Portability to Heterogeneous Newcomers",
    "authors": [
      "Xinyuan Zhao"
    ],
    "abstract": "Once historical clients become unavailable, a federation must serve newcomers through the artifact it leaves behind. How much of its knowledge remains useful in an architecture chosen afterward? We introduce FEDNBO, a seven-dataset benchmark that separates knowledge supply, policy identification, and private-model compilation under disjoint data roles. Controlled studies expose inflated oracle gains, architecture-dependent transfer reversals, and a gap between teacher accuracy and private-model utility. Ordinary public-response distillation provides a competitive reference without public task labels or newcomer samples: gains over strengthened local training are 23.52 and 16.62 percentage points on 300 CelebA identities and 300 FedEMNIST writers, respectively. In a complete-pipeline FedEMNIST comparison, this reference reaches 97.13% accuracy with 12.4 seconds of compilation per architecture, versus 97.03% and 67.5 seconds for a HeteroFedTTA reconstruction at the same epoch budget. Equal-count public-input interventions extend support sensitivity to trainable visual backbones. Together, these results establish an auditable benchmark and a strong reference for evaluating the utility, cost and reliability of post-federation knowledge transfer.",
    "published": "2026-10-19T08:49:06Z",
    "updated": "2026-10-19T08:49:06Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.26026"
  },
  {
    "id": "2610.26025",
    "title": "TamedFlow: Trajectory-Aware Distillation for Teacher-Assisted Diffusion Sampling",
    "authors": [
      "Shuaiqi Cheng",
      "Jiahao Zhang",
      "Boyuan Gu",
      "Yuxi Chen",
      "Haiying Xu",
      "Zexin Lu",
      "Huiyu Zhou",
      "Xuming Hu"
    ],
    "abstract": "Diffusion Transformers (DiTs) deliver high-fidelity image and video generation, but inference requires many sequential model evaluations. Two acceleration strategies are increasingly important: model compression makes each evaluation cheaper, while adaptive inference avoids selected teacher computation through reuse, forecasting, or speculative execution. Their combination, however, is brittle: directly applying the evaluated adaptive methods to a compressed student can degrade quality, an observed failure mode we call the \\textbf{Combination Gap}. We link this gap to a mismatch between pointwise distillation and short-horizon execution: a student trained at teacher states need not remain reliable when its own predictions are chained. We propose \\textbf{TamedFlow}, which trains a compressed DiT for this deployed role through cross-architecture feature alignment, a near-identity Velocity Alignment Head, and randomized rollout supervision. At inference, a lightweight Learnable Trajectory Estimator routes completed drafts: accepted drafts bypass the teacher, while rejected drafts roll back and receive one teacher rescue step. Distilling DiT-XL/2 into DiT-B/2, TamedFlow reaches FID $2.58$ at $2.25\\times$ measured speedup over DDIM-50 on ImageNet $256\\times256$. Ablations support trajectory supervision, and routing controls favor LTE over random decisions at nearly matched latency. Evaluations on ImageNet $512\\times512$, MS-COCO, and Latte/FaceForensics extend the empirical scope.",
    "published": "2026-10-19T08:48:14Z",
    "updated": "2026-10-20T08:02:36Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.26025"
  },
  {
    "id": "2610.26024",
    "title": "Multimodal Decoupling for Diversified Recommendation through Semantic and Structural Shaping",
    "authors": [
      "Changran He",
      "Jiaming Wei",
      "Jianghong Ma",
      "Tianjun Wei",
      "Haijun Zhang",
      "Xiaofeng Zhang"
    ],
    "abstract": "Recommender systems often suffer from over-concentrated results when optimized for accuracy, limiting recommendation diversity. While diversity has become an important objective, existing methods still face fundamental limitations from both semantic and structural perspectives. On the one hand, multimodal recommender systems provide rich semantic signals, yet are often treated as auxiliary to ID embeddings, leading to ineffective semantic utilization for diversity. On the other hand, the accuracy--diversity trade-off persists during training, where accuracy gains often come at the cost of diversity. We show that this phenomenon is fundamentally governed by both the structural properties of learned representations and the dynamics of optimization. To address these challenges, we propose MOSS, a unified framework for multimodal decoupling through semantic and structural shaping. Specifically, we first introduce an MLLM-based Decoupled Feature Extraction module to disentangle multimodal content into informative representations. To enhance semantic utilization, we design a Category-aware Embedding Selection module that extracts compact, category-aware semantic features. To address structural limitations, we propose two complementary modules: Alternating Dual-Graph Propagation, which alleviates representation collapse by integrating collaborative and multimodal propagation, and Entropy-based Diversity Regularization, which mitigates optimization bias by promoting balanced category exposure. Extensive experiments on real-world datasets demonstrate that MOSS consistently achieves a superior accuracy--diversity trade-off over strong baselines.",
    "published": "2026-10-19T08:46:34Z",
    "updated": "2026-10-19T08:46:34Z",
    "categories": [
      "cs.IR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.26024"
  },
  {
    "id": "2610.26995",
    "title": "SPEM: Structure-Aware Procedural Memory for Efficient Skill Use in LLM Agents",
    "authors": [
      "Ran Zhou",
      "Zehui Kong",
      "Fanyu Lin",
      "Jiaheng Liu",
      "Zhen Zhang",
      "Yuxiang Ren"
    ],
    "abstract": "LLM-based agents increasingly rely on reusable skills. However, scaling skill libraries makes efficient and accurate skill use difficult. Full skill loading incurs high token and runtime overhead. In contrast, flat semantic retrieval treats skills as independent text entries, ignoring dependencies, execution order, state transitions, and data flow constraints. We propose SPEM, a lightweight structure-aware procedural memory framework for efficient skill use in LLM-based agents. SPEM maintains Atomic Skill Memory for individual skills and Skill-DAG Memory for reusable compositions derived from successful executions. For a new task, SPEM reuses high-confidence Skill-DAG templates when available. Otherwise, it retrieves atomic skills and invokes Skill-GNN for state- and structure-aware skill selection. Successful executions are written back as new Skill-DAGs, allowing procedural memory to accumulate over time. Experiments on ALFWorld and SkillsBench show that SPEM achieves the best overall effectiveness--efficiency trade-off, reaching 87.1% ALFWorld success and 38.38% SkillsBench reward while reducing token and runtime costs against strong baselines.",
    "published": "2026-10-19T08:46:15Z",
    "updated": "2026-10-19T08:46:15Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.26995"
  },
  {
    "id": "2610.25005",
    "title": "ReTrace: Visual Backtracking for Efficient Multimodal Large Language Models",
    "authors": [
      "Guangzong Si",
      "Dong Wang",
      "Yifan Yu",
      "Miao Liu",
      "Panwang Pan",
      "Wentao Zhu"
    ],
    "abstract": "Multimodal Large Language Models (MLLMs) encode images into dense visual token sequences, creating substantial attention and KV-cache overhead. Existing visual token compression methods reduce this cost by pruning low-saliency tokens in shallow layers, but this practice couples temporary computational deactivation with irreversible information deletion. We show that this coupling breaks an intrinsic inference pattern in MLLMs. Through layer-wise attention analysis, we identify \\textbf{Visual Backtracking}: visual pivots remain spatially stable, yet in middle layers they actively retrieve context from tokens that appeared unimportant earlier. Thus, early low-saliency tokens can be inactive for computation while still being useful for later reasoning. Motivated by this finding, we propose \\textbf{ReTrace}, a backtracking-aware compression framework that introduces a dormant token state. ReTrace caches non-pivot tokens outside expensive layer-wise computation, restores them during the backtracking window, and prunes only after their information has been absorbed. Experiments on Qwen2.5-VL and InternVL3 demonstrate nearly 90\\% reductions in FLOPs and KV cache, a 2.83$\\times$ prefilling speedup, and strong performance retention across complex vision-language benchmarks.",
    "published": "2026-10-18T04:19:13Z",
    "updated": "2026-10-18T04:19:13Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.25005"
  },
  {
    "id": "2610.25004",
    "title": "UpLoop: Upcycling Large Language Models with Gated Loop",
    "authors": [
      "Tieyuan Chen",
      "Huabin Liu",
      "Yingtao Zhang",
      "Shijie Li",
      "Tengyu Pan",
      "Weiyao Lin",
      "Jianguo Li"
    ],
    "abstract": "Looped large language models trade parameter storage for recurrent computation, but most are trained from scratch. In practice, pretraining with looped depth is expensive, making post-training upcycling of a pretrained non-looped LLM an attractive alternative. We introduce \\textbf{UpLoop}, a post-training recipe based on \\emph{layer-wise} recurrence. Instead of looping a whole model or a middle block, UpLoop loops each selected layer locally, preserving the pretrained depth hierarchy and avoiding feature-space mismatch. To make loop execution useful, we add hidden-wise gates on the attention and MLP residual branches, so later loops act as progressive refinements rather than redundant rewrites. Empirically, UpLoop breaks the commonly observed saturation at two loops ($R=2$) in prior looped models. Starting from Qwen3-4B Base and applying SFT, UpLoop improves the average accuracy across 20 benchmarks by 6.17\\% at $R=3$. We use $R=3$ as the main setting for the best accuracy--cost trade-off, while both native and extrapolated $R=4$ yield further gains.",
    "published": "2026-10-18T04:19:12Z",
    "updated": "2026-10-18T04:19:12Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.25004"
  },
  {
    "id": "2610.25001",
    "title": "UtoMe: Observation-Uncertainty-Guided Token Merging for Weather Foundation Models",
    "authors": [
      "Yunbei Zhang",
      "Janet Wang",
      "Xi Xiao",
      "Jihun Hamm",
      "Xiao Wang"
    ],
    "abstract": "Weather transformers process dense reanalysis fields whose reliability varies across variables, locations, and weather regimes. Token merging can reduce computation, but feature similarity alone does not account for this heterogeneous input uncertainty. We introduce UtoMe, an observation-uncertainty-guided token merging framework that combines dynamics saliency with ensemble data assimilation spread as a relative input-reliability proxy. The resulting importance score protects selected tokens as anchors and calibrates bipartite matching between the remaining tokens. Three variants use external uncertainty at both training and inference, during training only, or neither stage. In ERA5 72-hour forecasting at two spatial resolutions, UtoMe improves Overall error over train-time ToMe at matched token budgets. At $1.40625^\\circ$ and 50% token reduction, UtoMe-E lowers Overall error from 67.32 to 53.00 at the same 0.55x encoder FLOPs. Small reductions remain close to the full-token baseline; larger reductions incur measurable accuracy losses. Component ablations and spatial uncertainty controls support combining dynamics with aligned uncertainty when allocating a weather transformer's token budget.",
    "published": "2026-10-18T04:12:26Z",
    "updated": "2026-10-18T04:12:26Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.25001"
  },
  {
    "id": "2610.26941",
    "title": "Industrial Agentic AI: LLM-Driven New-Generation Agents for Smart Manufacturing",
    "authors": [
      "Lei Ren",
      "Haiteng Wang",
      "Shixiang Li",
      "Jing Zhang",
      "Yuqing Wang",
      "Jingwei Guo",
      "Yunfei Zhu",
      "Yuanjun Laili",
      "Yang Tang",
      "Lihui Wang"
    ],
    "abstract": "Large language models (LLMs) are enabling agents to move beyond predefined workflows toward autonomous planning and execution, creating new opportunities for smart manufacturing. However, dynamic environments, complex physical constraints, and stringent reliability requirements hinder the direct deployment of general-purpose agents in smart manufacturing. This article presents a systematic overview of LLM-driven industrial agents. First, we analyze five key challenges and discuss the concept and core characteristics of industrial agents. We then establish a unified taxonomy covering application scenarios, embodiment forms, and five capability levels. Next, we propose a four-layer system architecture and detail its core modules and operational mechanisms for closed-loop task execution. Finally, we review representative applications across the industrial lifecycle and outline future research directions. This article provides a structured reference for the design, development, and application of industrial agents.",
    "published": "2026-10-18T03:56:58Z",
    "updated": "2026-10-18T03:56:58Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.26941"
  },
  {
    "id": "2610.24992",
    "title": "MultiAltitudeSR: Multi-Altitude Agricultural UAV Image Super-Resolution via Physical Ground Sampling Distance Conditioning",
    "authors": [
      "Xintong Jiang",
      "Yu Tian",
      "Yixue Liu",
      "Valerio Hoyos-Villegas",
      "Viacheslav Adamchuk",
      "Shangpeng Sun"
    ],
    "abstract": "Unmanned aerial vehicles (UAVs) enable high-throughput platforms for crop monitoring but face a fundamental trade-off between flight altitude and image spatial resolution. Many existing super-resolution (SR) methods for UAV imagery rely on oversimplified synthetic degradation models and are restricted to fixed integer upsampling scales, limiting their ability to handle real-world degradations and varying flight altitudes. This study proposes MultiAltitudeSR, a framework that conditions feature modulation and reconstruction on source and target ground sampling distances (GSDs). MultiAltitudeSR trained jointly on real UAV images at altitudes of 10 to 70 m above ground level supports all 21 source-to-target altitude pairs without pair-specific fine-tuning, covering scale factors ranging from 1.18$\\times$ to 6.03$\\times$. The framework can be extended to additional source-target GSD combinations by incorporating corresponding image pairs into training. On the 20-to-10 m pair, the model achieved competitive perceptual performance compared with pair-specific baselines, with LPIPS of 0.2236, DISTS of 0.2431, and NIQE of 8.9020. Experiments using the same architecture demonstrated the value of acquiring real-world multi-altitude UAV image pairs for SR training, with real-pair training achieving better average reconstruction performance across the 21 altitude pairs than training with the tested synthetic degradation pipeline. Downstream zero-shot segmentation case studies illustrated task-dependent benefits of super-resolved imagery for crop monitoring, suggesting potential UAV flight-time savings through image acquisition at higher altitudes.",
    "published": "2026-10-18T03:51:58Z",
    "updated": "2026-10-18T03:51:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.24992"
  },
  {
    "id": "2610.24977",
    "title": "CorrectRTL: Boost RTL Generation Quality Through Automated Self-Correction with Instruction Decomposition",
    "authors": [
      "Jing Wang",
      "Shang Liu",
      "Hangan Zhou",
      "Wenji Fang",
      "Yuchao Wu",
      "Yugao Zhu",
      "Zhiyao Xie"
    ],
    "abstract": "Large language models (LLMs) have shown strong promise in specification-to-RTL generation. Among the explorations, the self-correction paradigm has significantly advanced LLM-based RTL generation. However, two challenges limit further progress. Existing benchmarks are saturated by advanced LLMs, leaving little room to evaluate the agentic self-correction framework. The monolithic self-correction paradigm rewrites the entire design at once, where LLMs are susceptible to error confusion and corruption of originally correct code. To address the benchmark challenge, we contribute ScaleBench, a more challenging benchmark of 200 complex RTL designs. To address the challenge in methodology, we propose CorrectRTL, an agentic framework that realizes a new decompose-then-correct paradigm, in which the LLM agent explicitly decouples scaffold construction from detailed implementation. CorrectRTL contributes three core techniques: (1)~\\emph{Structure-oriented decomposition}, (2)~\\emph{Snippet-based RAG}, and (3)~\\emph{SVA-based self-correction}. On ScaleBench, CorrectRTL improves Pass@1 from 20.5% to 49.0% (+28.5%). On VerilogEval, CorrectRTL achieves up to 96.1% Pass@1, demonstrating consistent improvements across both simple and complex designs.",
    "published": "2026-10-18T03:15:20Z",
    "updated": "2026-10-18T03:15:20Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.24977"
  },
  {
    "id": "2610.24970",
    "title": "PRECOCIAL: Pretraining with Code Curriculums via Iterative Search for Accelerated Learning",
    "authors": [
      "Edward Gu",
      "Ali Payani",
      "Kevin Ellis"
    ],
    "abstract": "Fully synthetic pretraining data generated by symbolic programs can bootstrap downstream training on naturalistic tasks, such as language modeling, but the generating programs have so far been designed by hand. We introduce PRECOCIAL, a method for automatically optimizing programs that generate synthetic pretraining data. Starting from an initial generator program, an LLM iteratively rewrites the program, and each rewrite is scored by pretraining a randomly-initialized transformer on its data and fine-tuning it on the downstream task. Because every score requires training, PRECOCIAL keeps a single network for the entire search, continuing its pretraining for each accepted program instead of training a new network per candidate, making it significantly more efficient. On four language and code datasets, at a fixed fine-tuning budget, optimized programs reach lower perplexity than hand-designed curricula, published procedural generators, random program mutation and the program the LLM writes in the first iteration of the search, and reach the same perplexity as the hand-designed curricula with 9-33% fewer fine-tuning steps. PRECOCIAL also ends with lower perplexity than FunSearch and AlphaEvolve, which train a new network for every candidate, at the same number of evaluations and a lower cost. We also observe that an optimized program generator from one domain transfers to datasets in other domains. Additionally, optimized programs allow for better downstream performance on four different reasoning and problem-solving tasks.",
    "published": "2026-10-18T02:53:23Z",
    "updated": "2026-10-18T02:53:23Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.24970"
  },
  {
    "id": "2610.24969",
    "title": "Towards Human-AI Complementarity for AI Safety",
    "authors": [
      "Sander Lanbo Shi",
      "Miranda Anna Christ",
      "Eric Modesitt",
      "Andrew Louis",
      "Konrad Cheng",
      "Brandon Thai Tran",
      "Sewoong Lee",
      "Ratnakar Pawar",
      "Gaia Molinaro",
      "Juliana Bain",
      "Nandika Donthi",
      "Maja Pavlovic",
      "Annya Dahmani",
      "Francesca Bianco",
      "Abhishek Shah",
      "Tyler Crosse",
      "Arth Singh",
      "Karissa Huang",
      "Sukanya Krishna",
      "Konstantinos Voudouris",
      "David Demitri Africa",
      "Joshua Jacob",
      "Rishub Jain"
    ],
    "abstract": "Safely overseeing AI is increasingly challenging for the humans doing it, as they must evaluate longer and more complex outputs with every new model generation. To mitigate this challenge, we could leverage complementarity: where humans and models make different mistakes, combining their judgements could yield an oversight signal stronger than either produces alone. We study this opportunity in realistic, safety-relevant settings, contributing the largest known suite of such tasks (3,957 instances across 8 datasets and 6 domains) as well as a platform and data pipeline for measuring human, AI, and human-AI performance on matched items. We collected 35,613 judgements from 416 human raters, finding a considerable opportunity for a complementarity effect. We also found that with the assistance methods we tested, human raters corrected the AI's errors less often, even when overall human accuracy rose, and the hybridisation methods we tested added little over the better single source on average. While complementarity is an important and feasible engineering target for safe oversight, achieving it remains an open challenge for future work.",
    "published": "2026-10-18T02:49:28Z",
    "updated": "2026-10-18T02:49:28Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.24969"
  },
  {
    "id": "2610.24968",
    "title": "Visual Sufficiency Landscapes: Understanding Query-Conditioned Reliability in Visual Token Pruning",
    "authors": [
      "Zhenghan Li",
      "Kexin Sun",
      "Wei Zheng",
      "Peng Hu",
      "Xiao Wei",
      "Anbo Huang"
    ],
    "abstract": "Different visual token pruning strategies retain different subsets while maintaining similar task performance. This motivates a combinatorial question: how many visual subsets can preserve model behavior, and how does their abundance depend on the query? We introduce visual sufficiency landscapes to characterize this abundance. At a fixed layer and budget, visual sufficiency probability is the fraction of uniformly sampled subsets that jointly preserve the dense model's answer, reference-answer likelihood, and output distribution. Independent sampling replicates separate input variation from estimation noise. Across Qwen2.5-VL-7B, InternVL2-8B, and LLaVA-v1.5-7B, differences between inputs on GQA and TextVQA exceed replication error, and different questions about the same GQA image produce distinct landscapes. Sufficiency probability also improves failure prediction for full pruning methods. On LLaVA, adding this probability increases AUC by 0.1151 for FastV, 0.0683 for VisionZip, and 0.1401 for SparseVLM, while reducing log loss and Brier score. Several architecture-adapted configurations on the other two models reproduce these gains. Under controlled selection rules, predictors trained on the original images reduce log loss on new images by 9.0%, 13.0%, and 14.1%, respectively. These results establish successful-subset abundance as a measurable dimension of local prunability and connect it to the identification of high-risk pruning conditions.",
    "published": "2026-10-18T02:46:34Z",
    "updated": "2026-10-18T02:46:34Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.24968"
  },
  {
    "id": "2610.24965",
    "title": "Meta Inverse Prompting for Video Generative Models",
    "authors": [
      "Yerin Jung",
      "Jongheon Jeong"
    ],
    "abstract": "Recent advances in video generative models have enabled flexible conditional generation and editing pipelines, such as text-to-video, image-to-video, and reference-guided synthesis. However, these workflows are inherently one-directional, mapping conditions to videos without providing a mechanism to invert this process. In complex media production settings, the ability to recover controllable textual conditions from a given video is highly desirable, yet remains underexplored. While inverse prompting has been studied for image generation, directly extending these approaches to video is challenging due to the need to capture temporal dynamics beyond static appearance, as well as the substantial computational cost of per-video optimization. In this work, we propose the first practical framework for efficient video inverse prompting. Specifically, we formulate inverse prompting as a meta-learning problem and introduce Meta Video Inverse Prompting (MVIP), which learns a meta-prompt optimized over temporal dimensions to enable fast and effective prompt inference. Our approach amortizes the inversion process, eliminating the need for costly iterative optimization at test time. Experimental results demonstrate that MVIP recovers higher-quality inverse prompts with significantly improved reconstruction fidelity compared to image-based inversion and iterative captioning baselines, while achieving substantial gains in efficiency. Code and video results are available at https://ueriniuno.github.io/mvip-page/.",
    "published": "2026-10-18T02:35:17Z",
    "updated": "2026-10-18T02:35:17Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.24965"
  },
  {
    "id": "2610.24962",
    "title": "Label-Space Mismatch Distorts Cross-Cohort Evaluation in Breast Cancer Molecular Subtyping",
    "authors": [
      "Suxing Liu",
      "Byungwon Min",
      "Zhijian Zheng",
      "Jiahao Wang"
    ],
    "abstract": "Cross-cohort evaluation of breast cancer subtype classifiers is unreliable when source and target cohorts use different annotation standards: METABRIC labels six classes, PAM50 defines five, and a claudin-low prediction cannot be correct under a five-class standard. A classifier transferred from 1,369 METABRIC patients (train n=958) to TCGA-BRCA (n=987) and GSE21653 (n=266) separates three evaluation operations routinely conflated in cross-site comparisons. (1) Label-space restriction - an evaluation-rule change, not a retraining gain - is the dominant correction (73.76%->79.74% on TCGA-BRCA; 63.16%->68.42% on GSE21653); (2) EM prior correction on the reconciled space is an optional calibration step (Brier fidelity up, macro F1 down; to 80.65% and 74.06%); and (3) the target label space is not recoverable from unlabelled predictions (EM retains prior 0.0751 on the absent class; calibrated detectors fail), so compliance must come from cohort documentation. The protocol exposes why internal validation overstates cross-cohort value: multimodal fusion gains do not transfer (no configuration beats mRNA alone, n=694; McNemar p=0.13-1.00), and the genomic panel adds nothing to pathological complete response prediction over clinical variables (DeltaAUC = +0.0045). Clinically, without label-space compliance, cross-site accuracy comparisons misattribute annotation-standard differences to model skill; Luminal A/B and claudin-low boundary errors map to distinct treatment decisions; and subtype accuracy is a weaker portable endpoint than survival discrimination (external C-index 0.577-0.584). Reporting the cohort's allowed label set and applying label-space compliance are therefore prerequisites before any cross-cohort performance claim.",
    "published": "2026-10-18T02:25:47Z",
    "updated": "2026-10-18T02:25:47Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "q-bio.QM"
    ],
    "url": "https://arxiv.org/abs/2610.24962"
  },
  {
    "id": "2610.24960",
    "title": "CoworkEnv: Synthesizing Training Environments for Long-Horizon Cowork Agents",
    "authors": [
      "Zhongwei Xie",
      "Yiming Du",
      "Jiaxin Bai",
      "Baixuan Xu",
      "Chunyang Li",
      "Xiyu Ren",
      "Wei Fan",
      "Tianshi Zheng",
      "Weizhi Du",
      "Jingqiao Yu",
      "Xingsu Li",
      "Zhaowei Wang",
      "Yangqiu Song"
    ],
    "abstract": "AI coworkers must coordinate tools, communicate across turns, and act on changing workspace state while respecting workflow constraints. Constructing training experience for these capabilities requires coherent requests, service records, tool interfaces, and grading checks. We present CoworkEnv, a capability-guided framework for synthesizing executable training environments for AI coworkers. Workflow requirements guide task construction, and programmatic validation with feedback repair checks generated specifications and grading behavior. Teacher executions yield curated demonstrations for supervised fine-tuning (SFT), while student interactions provide rollouts and rewards for reinforcement learning (RL). Using these resources, we train compact PocketWorker models. For Qwen3-VL-8B-Instruct, SFT raises the mean score from 46.6 to 64.1 on Claw-Eval, including a 31.9-point gain on Multi-turn tasks. An SFT-only extension to ClawMark demonstrates applicability across coworker benchmarks. We further compare RL training dynamics across configurations that vary reward processing and credit assignment. Improving training rewards provide preliminary evidence that the constructed environments support policy optimization.",
    "published": "2026-10-18T02:20:30Z",
    "updated": "2026-10-18T02:20:30Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.24960"
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
    "id": "2610.23589",
    "title": "SemPurify: Semantics-Aware Data Purification for Black-box Backdoor Defense",
    "authors": [
      "Jiawei Yu",
      "Syed Irfan Ali Meerza",
      "Yi Wu",
      "Amir Sadovnik",
      "Jian Liu"
    ],
    "abstract": "Backdoor attacks have emerged as a critical security threat in machine learning, where adversaries embed triggers within poisoned training samples to manipulate a model's predictions on targeted inputs while leaving its general behavior unaffected. This stealthy nature makes backdoor attacks difficult to detect, as the model functions normally until activated by a specific malicious trigger. Current purification-based defenses use image transformations (e.g., blurring) to disrupt trigger patterns but often degrade image quality. Even with advanced restoration techniques like diffusion models, these approaches can still alter visual or semantic information, reducing utility for downstream tasks. To address this, we propose the first semantics-aware data purification framework for black-box backdoor defense, SemPurify, which explicitly incorporates multi-level semantics (i.e., low-level semantic embeddings and high-level image tags) within a text-to-image (T2I) framework to guide image restoration during purification. Using this semantic information, the T2I model subsequently refines the transformed samples, helping preserve visual details and semantic information during restoration. Extensive experiments spanning multiple backdoor scenarios, i.e., classification models, CLIP-style encoders, and generative models, demonstrate that SemPurify reliably removes backdoors while effectively preserving semantic information for downstream tasks.",
    "published": "2026-10-16T15:09:14Z",
    "updated": "2026-10-16T15:09:14Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23589"
  },
  {
    "id": "2610.24044",
    "title": "GliomaINK: A Tumor and Anatomy Conditioned Flow Matching Framework for 3D MRI Sequence Synthesis in Glioma Patients",
    "authors": [
      "Moinak Bhattacharya",
      "Annie Singh",
      "Mohammad Chaudhry",
      "Prateek Prasanna",
      "Gagandeep Singh"
    ],
    "abstract": "Background: Incomplete multiparametric MR examinations limit glioma characterization and downstream AI tools. Generative models can synthesize missing MRI sequences, but anatomical structure and clinically relevant tumor features are challenging to preserve. We propose GliomaINK, an anatomy-guided conditional flow matching framework for cross-sequence 3D brain MRI synthesis. Methods: A 3D SwinUNETR predicted the conditional velocity field while an auxiliary topology-preserving loss encouraged structural consistency. The model was trained on 1,083 patients from the BraTS-AG dataset and independently tested on an in-house clinical cohort. Downstream tasks include image quality, tumor segmentation, IDH1 mutation-status prediction, and overall survival prediction. Two radiologists independently evaluated the anatomical fidelity, pathological representation, and overall image quality of the synthesized images. Results: GliomaINK exhibited the highest PSNR across all six MRI translation directions in both evaluation cohorts. In the BraTS-AG test set, the PSNR reached $25.64\\pm0.55$ dB for the T2W-to-T1C synthesis, compared with $13.78\\pm0.32$ dB for Pix2Pix and $18.90\\pm0.53$ dB for SPADE. For downstream tumor segmentation, the method showed strong performance across tumor subregions with Dice scores reaching $0.928\\pm0.014$ for edema, and $0.885\\pm0.040$ for enhancing tumor. For the IDH1 mutation-status prediction, GliomaINK achieved the highest AUROC score in four of the six sequence configurations, reaching $0.827\\pm0.088$. Conclusion: Anatomy-guided conditional flow matching enables high-fidelity cross-sequence glioma MRI synthesis demonstrating potential for preservation of clinically relevant information in synthesized MRI and improving downstream tasks.",
    "published": "2026-10-16T15:09:12Z",
    "updated": "2026-10-16T15:09:12Z",
    "categories": [
      "eess.IV",
      "cs.CV",
      "q-bio.TO"
    ],
    "url": "https://arxiv.org/abs/2610.24044"
  },
  {
    "id": "2610.23588",
    "title": "Enhancing RAG-based Medical VQA with Gated Multimodal Representations",
    "authors": [
      "Daniela Jimenez-Pano",
      "Hugo Jair Escalante",
      "Delia Irazú Hernández-Farías"
    ],
    "abstract": "Medical Vision-Language Models (Med-LVLMs) have shown strong performance in Medical Visual Question Answering (MVQA), yet they may still produce factually inconsistent responses. Retrieval-Augmented Generation (RAG) can mitigate this issue by incorporating external clinical evidence; however, retrieval is often guided by a single modality, potentially overlooking the joint semantics of medical images and clinical questions. We introduce a multimodal RAG framework that learns a joint query representation through a Gated Multimodal Unit, enabling evidence retrieval to leverage information from both modalities while keeping the underlying Med-LVLM frozen. We evaluate the proposed approach on benchmark datasets. Results show that the multimodal query representation consistently outperforms a reference Med-LVLM and remains competitive with state-of-the-art methods. Our findings demonstrate the potential of multimodal query representations for more effective evidence retrieval in Medical VQA.",
    "published": "2026-10-16T15:07:33Z",
    "updated": "2026-10-16T15:07:33Z",
    "categories": [
      "cs.CV",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.23588"
  },
  {
    "id": "2610.23577",
    "title": "CLEAR: Cooperative Latent Flow for Visual Counterfactual Explanations with Accurate Region Preservation",
    "authors": [
      "Yan Zeng",
      "Changlu Guo",
      "Oskar Kristoffersen",
      "Anders Nymark Christensen",
      "Morten Rieger Hannemose",
      "Anders Bjorholm Dahl"
    ],
    "abstract": "Visual counterfactual explanations (VCEs) should alter a classifier's prediction while remaining realistic and preserving decision-irrelevant content. Image-space methods provide high-quality counterfactuals but are computationally costly, whereas latent-space methods are more efficient but often less faithful. We identify two sources responsible for this gap. First, latent generation recovers a natural sample from a perturbed representation, whereas classifier guidance pushes it toward a target class, so their update directions may oppose. Second, VAE reconstruction can alter regions that should remain unchanged. We introduce CLEAR, a latent Flow Matching framework for VCEs. CLEAR uses Flow Matching's explicit instantaneous velocity as a reference for the generative direction to decompose classifier guidance into cooperative and conflicting components. It preserves the cooperative component and adaptively attenuates only the conflicting one according to conflict strength. We further analyze conflict frequency and strength throughout generation to reveal how classifier guidance interacts with the generative process. CLEAR also dynamically identifies editable regions, constrains latent modifications, and directly preserves factual content outside them to reduce VAE-induced changes. Across five bidirectional tasks on two datasets, CLEAR retains latent-space efficiency while achieving counterfactual quality comparable to or better than strong image-space baselines, with a 2.5x speedup over the strongest baseline. Project page: https://yan-zen9.github.io/CLEAR/",
    "published": "2026-10-16T15:01:06Z",
    "updated": "2026-10-16T15:01:06Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23577"
  },
  {
    "id": "2610.23574",
    "title": "Darwin-Claw: Environment-Adaptive Experience Consolidation for Recursively Self-Evolving Agents",
    "authors": [
      "Mingze Yin",
      "Xiaohan Wang",
      "Dian Li",
      "Longfei Luo",
      "Jiahong Yan",
      "Yiheng Zhu",
      "Chang-Yu Hsieh"
    ],
    "abstract": "While Large Language Model (LLM) agents have demonstrated remarkable capabilities across complex tasks, they predominantly operate in isolated sessions, lacking the ability to continually learn from historical interactions or adapt to user-specific environments. Existing self-evolution paradigms often indiscriminately inject raw interaction trajectories into memory or skill modules, leading to obscured behavioral patterns and compromised update controllability. Furthermore, as foundational LLM reasoning improves, the bottleneck for agentic evolution shifts from accumulating generic knowledge to effectively managing situational experience. To address this, we propose Darwin-Claw, an environment-adaptive self-evolving framework that systematically distills episodic experiences to drive the comprehensive evolution of operational skills and durable memory. Theoretically grounded in an iterative agent-actor and evolver-critic co-adaptation, Darwin-Claw introduces a Hierarchical Experience Consolidation System that extracts fine-grained error attributions and generalizes them into dynamically updated prototype vectors. This structured situational experience serves as interaction patches for context-sensitive perception and explicit optimization signals for skill refinement. Practically, Darwin-Claw is a readily deployable, automated framework compatible with mainstream agent systems without requiring manual curation. Extensive experiments on WildClawBench demonstrate that Darwin-Claw yields substantial performance improvements, establishing a controllable and stable pathway for the continual, user-centric adaptation of autonomous agents in real-world ecosystems.",
    "published": "2026-10-16T14:57:21Z",
    "updated": "2026-10-16T14:57:21Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.23574"
  },
  {
    "id": "2610.23568",
    "title": "From Adult Renal Masses to Pediatric Wilms Tumors: Evaluating Cross-Domain Generalization of Kidney Lesion Segmentation on MRI",
    "authors": [
      "Sarah de Boer",
      "Myrthe A. D. Buser",
      "Hartmut Häntze",
      "Jawed Nawabi",
      "Lisa C. Adams",
      "Alida F. W. van der Steeg",
      "Marry M. van den Heuvel-Eibrink",
      "Annemieke S. Littooij",
      "Keno K. Bressem",
      "Mathias Prokop",
      "Alessa Hering"
    ],
    "abstract": "Deep learning segmentation models for pediatric oncology are often trained on small, single-center cohorts, whereas much larger datasets exist for adult diseases, such as kidney cancer. Whether models trained on adult renal lesions generalize to pediatric Wilms tumors remains unclear. We trained a segmentation model on single-sequence T1- or T2-weighted adult kidney MRI and evaluated it on a held-out adult test set and a pediatric Wilms tumor cohort, where it was compared with a pediatric-specific nnU-Net. Segmentation performance was quantified using the Dice similarity coefficient (DSC) and 95th-percentile Hausdorff distance. On the adult test set, the model achieved a median DSC of 0.86 for renal lesions. On the pediatric cohort, the adult-trained model achieved a median DSC of 0.85 compared with 0.90 for the pediatric-specific model. Despite differences in age, anatomy, and tumor type, the adult-trained model showed promising performance on pediatric Wilms tumors, with only a modest difference in median DSC compared with the pediatric-specific model. However, non-inferiority could not be shown, highlighting the value of pediatric training data. In future work, a fine-tuning strategy could be explored.",
    "published": "2026-10-16T14:52:37Z",
    "updated": "2026-10-16T14:52:37Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23568"
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
  },
  {
    "id": "2610.09875",
    "title": "SANet: Selective Attention Network for Infrared Small Target Detection",
    "authors": [
      "Yingmei Zhang",
      "Wangtao Bao",
      "Qin Xiao",
      "Yong Yang",
      "Weiguo Wan",
      "Yitao Luo",
      "Xueting Zou",
      "Lei Zhang"
    ],
    "abstract": "Infrared small target detection aims to accurately identify and locate dim targets in complex backgrounds and supports applications such as maritime surveillance and military search and rescue. However, the small size and weak contrast of infrared targets make it difficult to balance detection accuracy and false alarms. This paper proposes a selective attention network (SANet) for infrared small target detection. A dual-path semantic-aware module combines standard and pinwheel-shaped convolutions to preserve local spatial consistency and capture broader contextual information. Spatial and channel attention further refine the features and improve target-background discrimination. To address the limitations of static skip connections in U-Net, a selective attention fusion module adaptively integrates features across scales using spatially varying weights. It selectively enhances salient regions and improves discrimination between true targets and false alarms. Experiments on three public benchmarks, NUAA-SIRST, IRSTD-1K, and NUDT-SIRST, show that SANet achieves competitive performance in intersection over union (IoU), normalized IoU, detection probability, and false alarm rate. Its IoU exceeds that of the second-best method by 1.93, 4.32, and 2.21 percentage points, respectively. These results support the effectiveness of SANet in dim-target perception, discriminative feature representation, and background suppression.",
    "published": "2026-10-07T11:34:01Z",
    "updated": "2026-10-07T11:34:01Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.09875"
  },
  {
    "id": "2610.09873",
    "title": "Bringing BNNs to Fast Event Processing",
    "authors": [
      "Paul Longour",
      "Julien Moreau",
      "Franck Davoine"
    ],
    "abstract": "Binary Neural Networks (BNNs) enable efficient deep learning deployment on resource constrained devices with weights and activations compressed to one bit, substantially reducing model size and inference cost. Event cameras offer complementary advantages, including low latency, high dynamic range, and low power consumption, by capturing asynchronous streams of events rather than dense image frames. Despite their shared emphasis on efficiency, the combination of these technologies remains largely unexplored. This work aims at adapting and evaluating modern deep BNN architectures on event data. We also show that cross-modal pretraining from RGB data can improve the classification accuracy of BNNs on neuromorphic datasets. We introduce the Polar-wise Binary Event Volume (PBEV), a binary representation that enables event-camera data to be processed directly by BNNs and represents a step toward fully binarized event-based vision systems. Best evaluated BNN on N-Caltech101 classification benchmarks shows 90.58% accuracy with 7.5x less operations than their full-precision counterparts.",
    "published": "2026-10-07T11:33:25Z",
    "updated": "2026-10-07T11:33:25Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.09873"
  },
  {
    "id": "2610.09872",
    "title": "LiveMACE: Process-Aware Evaluation of LLM Agent Capabilities in Evolving Markets",
    "authors": [
      "Jun Zhao",
      "Leiming Fu",
      "Yanbo Wen",
      "Yiding Wang",
      "Xuantong Liu",
      "Yang Shu",
      "Yuyang Lu",
      "Xuanran Xing",
      "Jingqi Tong",
      "Hao Xu",
      "Qi Zhang",
      "Xuanjing Huang"
    ],
    "abstract": "Evaluating agents by outcomes alone can obscure the capabilities that produce them. This problem is especially pronounced in evolving environments, where outcomes reflect a closed-loop interaction between agent behavior and changing external conditions. We introduce LiveMACEBench, a process-aware benchmark that uses live financial markets as a naturally evolving testbed for persistent LLM agents. Five frontier LLMs operate along continuous trajectories under matched Tool Use, Persistent Memory, Rule Following, and Multi-Agent Collaboration configurations. We evaluate them through both realized outcomes and mechanism-specific diagnostics derived from complete decision traces. Across 30 days of live evaluation, we find a pronounced outcome-capability gap: realized returns often diverge from capability-specific measurements, and similar outcomes can arise from markedly different patterns of mechanism use. Trace-level diagnostics further expose distinct bottlenecks across capabilities, demonstrating that mechanism access, effective mechanism use, and downstream performance are not interchangeable measures of agent capability. LiveMACEBench makes this distinction measurable, turning live markets from a performance leaderboard into a diagnostic environment for agent capability",
    "published": "2026-10-07T11:33:21Z",
    "updated": "2026-10-07T11:33:21Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.09872"
  },
  {
    "id": "2610.09871",
    "title": "An AI-assisted conditioning and geological interpretation workflow for usage in implicit geological modeling",
    "authors": [
      "Stefan Carpentier",
      "Jan Diederik van Wees",
      "Eva de Boever",
      "Jan Niederau",
      "Camille Chapeland",
      "Suzanne Atkins",
      "Boris Boullenger",
      "Jens Wollenweber"
    ],
    "abstract": "Implicit modeling and Relative Geologic Time are geological modeling techniques that enable more efficient, faster, less biased and more reproducible modeling results. For optimal operation, these techniques require many well-constrained input data. In the framework of the Horizon Europe GO-Forward and MOOI WarmingUP GOO projects and to accelerate Implicit modeling, Machine Learning (ML) methods have been tested and implemented in a toolkit for the interpretation of (onshore) seismic data from the shallow to deep range (+- 300 - 3500 m). The goal is to rapidly characterise this depth domain by efficient interpretation of horizons and faults in seismic data. The first step is to improve the signal by applying AI techniques like self-supervised and semi-supervised contrastive learning CNN's for noise reduction and interpolation. Next, horizons and faults are interpreted with minimal use of human-generated training data by using (semi-) self-supervised methods. The resulting developed toolkit supports the application of the implemented algorithms in an efficient workflow. As a first demonstration, the top of the Dutch Maassluis Formation has been interpreted in the Leeuwarden and Waalwijk 3D seismic cubes. Overall, this study demonstrates that AI-assisted interpretation workflows have reached a level of maturity that allows their integration into applied geological modeling and decision-making.",
    "published": "2026-10-07T11:32:47Z",
    "updated": "2026-10-07T11:32:47Z",
    "categories": [
      "physics.geo-ph",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.09871"
  },
  {
    "id": "2610.09870",
    "title": "Deadline-Aware Multi-Agent Reinforcement Learning for TSN-Based Vehicular Edge Networks",
    "authors": [
      "Bernardo A. C. Pereira",
      "Marcos Carvalho",
      "Fatih Temiz",
      "Shavbo Salehi",
      "Melike Erol-Kantarci",
      "Andreas Gavrielides",
      "Johann M. Marquez-Barja",
      "Daniel F. Macedo"
    ],
    "abstract": "Vehicular edge computing (VEC) enables latency-sensitive applications by bringing computing and networking resources closer to vehicles. However, existing approaches often overlook network contention among co-located services with heterogeneous and dynamic latency requirements. While time-sensitive networking (TSN) provides bounded-latency communication, conventional and reinforcement learning-based schedulers struggle to adapt to highly dynamic vehicular environments and inter-queue dependencies. To address these limitations, we propose a multi-agent reinforcement learning (MARL) approach for queue-level scheduling in TSN-enabled VEC. Each TSN queue is assigned an autonomous agent that jointly learns the queue service order and time-slot duration to minimize deadline misses under speed-dependent latency requirements. We employ multi-agent proximal policy optimization (MAPPO) to enable coordinated yet autonomous scheduling decisions. Evaluation against single-agent, multi-agent, and non-learning-based baselines shows that MAPPO provides robust performance across different traffic profiles. Compared with centralized single-agent methods, it reduces service latency by up to 66.2% and improves reliability by up to 271.8%. Furthermore, unlike urgency-based heuristics, MAPPO ensures balanced scheduling while achieving lower inference times compared to other MARL methods.",
    "published": "2026-10-07T11:30:19Z",
    "updated": "2026-10-07T11:30:19Z",
    "categories": [
      "cs.NI",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.09870"
  },
  {
    "id": "2610.10628",
    "title": "Agent4RE: A Self-Refining Multi-agent Framework for End-to-End Software Requirements Engineering and Benchmarking",
    "authors": [
      "Yongjian Tang",
      "Linhan Li",
      "Thomas Runkler"
    ],
    "abstract": "Existing LLM-based approaches for software Requirements Engineering (RE) typically rely on basic prompting strategies or rudimentary agent collaboration, under-utilizing the full potential of multi-agent systems. Meanwhile, available datasets focus on isolated subtasks, such as requirements extraction, classification, and completeness detection, leaving the absence of an end-to-end RE benchmark that spans from requirements elicitation to generation. We present Agent4RE - a self-refining multi-agent RE system that orchestrates specialized agents and incorporates two iterative improvement loops. To support evaluation, we construct RE-E2E - a real-world dataset built from human-written requirement specifications, enabling end-to-end assessment of RE workflows. Building on this foundation, we further propose two enhanced Agent4RE versions that incorporate either autonomous self-refinement or structured human feedback, and analyze their strengths and limitations across different scenarios. Evaluation on 8 Large Language Models (LLMs) demonstrates that all three Agent4RE variants consistently outperform a domain-context-augmented prompting baseline by average 8% in text-based metrics. The two enhanced variants achieve the highest LLM-as-a-judge and human ratings, surpassing two RE baselines by approximately 0.8 points on a four-point scale. This consistent performance establishes Agent4RE as a practical end-to-end RE solution for industrial environments.",
    "published": "2026-10-07T11:23:11Z",
    "updated": "2026-10-07T11:23:11Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.10628"
  },
  {
    "id": "2610.09863",
    "title": "Global Average Precision for Representation Learning",
    "authors": [
      "Bill Psomas",
      "Mohammad Mahdi",
      "Michalis Thomas",
      "Danda Pani Paudel",
      "Giorgos Tolias",
      "Giorgos Kordopatis-Zilos"
    ],
    "abstract": "Standard information retrieval metrics, such as mean Average Precision (mAP), assess performance one query at a time, based on how the similarities between a query and its positives compare against those with its negatives. The same holds for common representation learning losses, such as InfoNCE and per-query AP surrogates. None of them considers whether similarities are comparable across queries, which any system with a single decision threshold relies on. Global Average Precision (gAP) does, by ranking all query-candidate pairs in one list and computing a single AP. We introduce gSAP, a differentiable surrogate of gAP. It needs only a similarity matrix and a binary matrix marking the positive pairs, the same input as existing losses, so it is a drop-in replacement for them and agnostic to the encoder, the modality, and the source of supervision. Since it considers all possible pairwise comparisons in the batch jointly, it also remains trainable at low temperatures, a regime where per-query surrogates run out of gradient. Swapping it into established recipes improves supervised metric learning, cross-modal alignment, and self-supervised pretraining, where, to our knowledge, it is the first ranking loss to replace the community standard InfoNCE in the latter two. Its similarities are more consistent across queries, which drives the gains under a universal threshold. gSAP retrieves up to four times as many positive pairs as the strongest AP surrogate at the same precision, and it degrades the least when queries with no positives in the database are added. Beyond thresholding, models trained with gSAP also learn better representations, with higher transfer, $k$NN and zero-shot classification accuracy.",
    "published": "2026-10-07T11:22:05Z",
    "updated": "2026-10-07T11:22:05Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.09863"
  },
  {
    "id": "2610.09860",
    "title": "DeepTopoClustering: Unsupervised Derivation of Surface Process Taxonomy from 4D Point Clouds for Topographic Monitoring",
    "authors": [
      "Jiapan Wang",
      "Daan Hulskemper",
      "Mathilde Letard",
      "Roderik Lindenbergh",
      "Katharina Anders"
    ],
    "abstract": "4D point clouds acquired by permanent laser scanning (PLS) enable accurate high-frequency monitoring of surface change in dynamic topographic environments. However, existing methods remain limited in organizing detected surface activities into meaningful process types. We propose DeepTopoClustering (DTC), an unsupervised framework for deriving a hierarchical process taxonomy from object-based surface activities, so-called 4D objects-by-change (4D-OBCs). We transform each 4D-OBC into a GeoMorphogram, a distributional sequence representing the temporal evolution of topographic change within a spatially bounded surface activity. A convolutional autoencoder learns latent embeddings from GeoMorphograms, which are jointly optimized using a hierarchical deep clustering objective to organize surface activities into a hierarchy. We evaluate the learned hierarchy using expert annotations on two 4D datasets of sandy beach sites and their combination. DTC with GeoMorphograms achieves the highest agreement with expert judgment at the taxonomy level comprising eight major process types ($F_1=0.78$, match accuracy $=0.92$), outperforming dimensionality reduction and conventional flat clustering. The learned taxonomy separates major erosion- and deposition-dominated activities and distinguishes finer subtypes based on change magnitude, duration, compactness, and temporal evolution. DTC thus provides a scalable and interpretable route from 4D change detection to a data-driven, expert-supported surface process taxonomy, advancing automated knowledge derivation for understanding surface dynamics in topographic monitoring.",
    "published": "2026-10-07T11:16:19Z",
    "updated": "2026-10-07T11:16:19Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.09860"
  },
  {
    "id": "2610.09858",
    "title": "Training Advisors for LLM Agents from Task Outcomes",
    "authors": [
      "Sergei Polezhaev",
      "Barys Liskavets",
      "Ori Press",
      "Alexander Golubev"
    ],
    "abstract": "Large language model agents tackle multi-step tasks by interleaving reasoning and tool calls with observations from the environment. Prior work has shown that natural-language feedback can help these agents revise their decisions during task execution. We introduce Caddie, a method for training critics to provide natural-language analysis and advice as agents work through a task. Unlike approaches that rely on step-level labels or reference critiques, Caddie learns from whether the agent ultimately succeeds after receiving the critic's feedback. We optimize the critic through reinforcement learning while keeping the base model frozen. Trained on multi-hop question answering with a single base model, our Qwen3-4B critic improves success rates across four base models of different scales and architectures, including three not used during critic training. On the MuSiQue benchmark, the trained critic improves Qwen3-4B's success rate by more than 25 percentage points, surpassing the performance of Kimi K3 without a critic. The same critic also yields gains on out-of-domain interactive benchmarks, including $τ^3$ and DeepDive, with no additional training. Our results show that agents can decide when to seek help from a critic at inference time and that outcome-based critic training can produce guidance that transfers across base models and task domains.",
    "published": "2026-10-07T11:14:26Z",
    "updated": "2026-10-07T11:14:26Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.09858"
  },
  {
    "id": "2610.09856",
    "title": "Self-Evolve With a Reference:Anchored Training of Tool-Integrated Agents",
    "authors": [
      "Wenjie Liao",
      "Liangjie Zhao",
      "Zehong Cao"
    ],
    "abstract": "Self-evolving tool-integrated agents learn from tasks and feedback generated within their own training loop. A Curriculum Agent generates tasks, while an Executor Agent learns from self-consistency signals through reinforcement learning. However, relying solely on the current Executor for feedback has two limitations: group-relative advantages vanish under full consensus, while uncertainty-based curriculum rewards favor disagreement without showing whether the generated tasks support further learning. These limitations motivate an additional reference beyond the current Executor. We propose \\textit{AnchorLoop}, which introduces a frozen copy of the previous iteration's Executor as a historical reference and reuses it on both sides of the training loop. For the Executor, the anchor provides a cross-reference advantage that evaluates current outputs against both current and historical majority answers. For the Curriculum, it provides an agreement-based reference based on differences in sampled majority agreement. Since the Executor and anchor have identical parameters during Curriculum training, this comparison serves as a proxy for task selection rather than evidence of inter-version improvement or correctness. Across 13 reasoning benchmarks, AnchorLoop improves over Agent0 by 2.5\\% on mathematical reasoning and 2.8\\% on general reasoning tasks. It also maintains higher effective-advantage variance and continues improving in later iterations as the unanchored baseline shows diminishing gains. These results demonstrate the benefit of introducing a lightweight historical reference into self-evolving tool-integrated agents without external task or answer supervision.",
    "published": "2026-10-07T11:13:35Z",
    "updated": "2026-10-07T11:13:35Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.09856"
  },
  {
    "id": "2610.09853",
    "title": "DeltaSplat: Iterative Gaussian Refinement for Pose-Free Feed-Forward 3D Gaussian Splatting",
    "authors": [
      "Chanung Park",
      "Seunghyeon Song",
      "Joo Chan Lee",
      "Eunbyung Park",
      "Jong Hwan Ko"
    ],
    "abstract": "Pose-free feed-forward 3D Gaussian Splatting (3DGS) reconstructs a scene from sparse, unposed images in a single network pass, removing the need for camera calibration and per-scene optimization. However, camera estimation errors propagate into the predicted Gaussians and compound the geometric and photometric inaccuracies of single-pass prediction. To correct these errors, we introduce DeltaSplat, a lightweight Gaussian refinement module for pose-free feed-forward 3DGS. It iteratively renders the current Gaussians at the input context views and predicts per-Gaussian updates from the resulting residuals. A 2D residual alone, however, underdetermines the 3D correction. DeltaSplat therefore conditions each update on per-pixel Plücker rays and rendered depth as a soft geometric prior. A dual-branch convolutional mixer efficiently encodes these inputs, and per-attribute heads decode the fused features into position, opacity, and color updates. The module adds only ~2.2% parameters to the backbone and remains fully feed-forward at inference. On DL3DV, DeltaSplat reaches 26.64 dB PSNR in the pose-free setting, improving its state-of-the-art backbone by 1.75 dB and surpassing even baselines supplied with ground-truth cameras; consistent gains hold across 6-24 views and all camera regimes.",
    "published": "2026-10-07T11:11:22Z",
    "updated": "2026-10-07T11:11:22Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.09853"
  },
  {
    "id": "2610.09849",
    "title": "Hard, Yet Reducible: Controlled Forward Transfer for Synthetic Degradation Curation",
    "authors": [
      "Chunming He",
      "Kailai Zhou",
      "Jiaming Zuo",
      "Hanqi Liu",
      "Fengyang Xiao",
      "Youwei Pang",
      "Xiaofeng Liu",
      "Weisi Lin",
      "Xiaoqi Zhao"
    ],
    "abstract": "Selecting synthetic degradations for dense prediction requires an estimate of their training utility, the generalization gain they bring under a finite training budget. Clean and degraded twins share content and labels, suggesting a score based on how much short training reduces the excess error caused by degradation. However, this gap can also shrink when clean performance deteriorates. Measuring the improvement on degraded images alone avoids that confound, but it still credits progress that the same amount of clean training would have produced. We propose the \\textbf{controlled Reducible Degradation Gap} (cRDG) for regions defined by degradation type and severity. From a common checkpoint, cRDG runs two budget-matched probes that differ only in one augmentation slot, which holds either a synthetic degradation or a clean augmentation. The score is the gain on held-out degraded images relative to the clean-control probe. Clean harm is a separate feasibility constraint. cRDG reveals a correctable severity band in which training on the degradation yields high controlled gain under the available budget, and the band moves with the predictor, the starting checkpoint, and the training budget. \\textbf{Curation of Reducible Bands} (\\method) uses cRDG to select synthetic data without changing the predictor. On semantic segmentation and salient object detection, \\method{} improves representative predictors under matched synthetic-data budgets and training schedules, extends to existing data-generation pipelines, and preserves clean performance. Code and supporting materials will be publicly released.",
    "published": "2026-10-07T11:07:36Z",
    "updated": "2026-10-07T11:07:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.09849"
  }
];
