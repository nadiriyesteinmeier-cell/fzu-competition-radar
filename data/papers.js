window.PAPER_DATA_UPDATED_AT = "2026-11-17";
window.PAPER_ITEMS = [
  {
    "id": "2611.21608",
    "title": "Latent Lattice Language Models",
    "authors": [
      "Shivam Duggal",
      "Zongze Wu",
      "William T. Freeman",
      "Antonio Torralba",
      "Richard Zhang",
      "Eli Shechtman"
    ],
    "abstract": "Language models typically increase per-token computation through deeper or looped layers and latent reasoning steps, while richer residual connections improve information flow across layers. We instead increase computational capacity: the number of active computational states a model maintains. We introduce the Lattice of Latents, a set of per-layer horizontal latent streams that run recurrently along time, alongside the vertical residual stream that flows through depth. Like hyper-connections, mHC, and attention or value residuals, the Lattice enhances the residual stream, but rather than adding or rerouting residual pathways through depth, it provides companion computational states that persist across tokens. Unlike hybrid Transformer-SSM architectures, whose recurrent states primarily serve as internal memory for sequence mixing, these latents directly condition the vertical stream's attention, KV-cache writes, MLP computation, and decoding. On Transformers trained on 20B FineWeb-Edu tokens, a 406M-parameter Lattice model lowers validation perplexity from 15.41 to 14.40 over a parameter-matched Transformer. These gains extend across architectural variants. The Lattice composes with prior residual-stream enhancements: with hyper-connections and input residuals, it lowers validation perplexity from 15.41 (base Transformer) and 14.22 (Transformer with the same enhancements) to 13.61. On Gated DeltaNet, Mamba-2, Triadic GDN, and GDN-Mamba-2 hybrids, it improves perplexity at every tested native state size, with Lattice-GDN and Lattice-Triadic-GDN variants outperforming pure baselines with 4x larger native states. These results identify persistent per-layer state as a complementary axis for scaling language-model computation.",
    "published": "2026-11-16T18:59:38Z",
    "updated": "2026-11-16T18:59:38Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.21608"
  },
  {
    "id": "2611.21605",
    "title": "ViRA: Toward Ultra-High-Resolution Visual Agents via Cross-Input Relative Policy Optimization",
    "authors": [
      "Huawei Lin",
      "Jinting Liu",
      "Tongyan Wang",
      "Xuyang Chen",
      "Ruihua Shi",
      "Zhichao Xu",
      "Jiaxin Qin",
      "Guoshenghui Zhao",
      "Baijian Yang",
      "Yingjie Victor Chen",
      "Tan Yu",
      "Weijie Zhao"
    ],
    "abstract": "Visual agents answer questions about ultra-high-resolution photos by zooming into the relevant regions. However, existing agents often answer from common sense instead of reading the evidence. Reinforcement learning (RL) on the final answer cannot correct this, because a guess earns the same reward as reading. We propose Cross-Input Relative Policy Optimization (CrossRPO), which trains agents on contrast sets. A contrast set asks one question about several versions of an image that differ only in a small region with the evidence and have different answers, so only reading the evidence solves the whole set. CrossRPO rewards solving the whole set, and we prove that it does not reinforce a set answered from common sense. We build contrast sets for training (ViRA-Train) and evaluation (ViRA-Bench) by editing one small object in images of 21 to 120 megapixels, and we photograph further sets with real changes (ViRA-Bench-Real) to exclude editing traces. We train two Visual Reasoning Agents, ViRA-9B and ViRA-27B, with CrossRPO on only about 3,500 items of ViRA-Train each. CrossRPO achieves 63.3% set accuracy on ViRA-Bench at the maximum resolution, against 59.3% for GRPO. ViRA-9B is the most accurate open model of its size on all benchmarks, and ViRA-27B outperforms Claude Haiku 5.5 and GPT-6-Luna, both at their highest thinking level, on most benchmarks.",
    "published": "2026-11-16T18:59:04Z",
    "updated": "2026-11-16T18:59:04Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.21605"
  },
  {
    "id": "2611.21604",
    "title": "FaceJev: Direct Visual Decisions for Face Forgery Detection",
    "authors": [
      "Siran Peng",
      "Tianshuo Zhang",
      "Yibo Xue",
      "Ajian Liu",
      "Haoyuan Zhang",
      "Weisong Zhao",
      "Shuhuan Chen",
      "Xiangyu Zhu",
      "Zhen Lei"
    ],
    "abstract": "Face forgery detection methods often perform well on seen manipulations but generalize poorly to unseen ones. Multimodal Large Language Models (MLLMs) can recognize facial parts and assess their visual plausibility. Existing MLLM-based methods typically express these judgments through textual explanations, but seldom treat individual part decisions as explicit learning targets. We present FaceJev, an MLLM-based method for face forgery detection through direct visual decisions. Following the Jev formulation, FaceJev answers eight independent questions about facial parts using a shared image encoding and reads anomaly probabilities from the native answer logits. A face is classified as forged if any part is predicted to be abnormal, directly linking the detection result to the part decisions. We construct PartForensics, a dataset of approximately 160k images with binary anomaly targets for the eight facial parts, to supervise these decisions. We further propose FS-GRPO, which optimizes each part decision through an exact reward comparison with its alternative, using both detection and part rewards. FaceJev outperforms the strongest baseline by 7.25 percentage points on unseen manipulations. Extensive ablation studies validate our design choices and the effectiveness of the main components.",
    "published": "2026-11-16T18:59:04Z",
    "updated": "2026-11-16T18:59:04Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.21604"
  },
  {
    "id": "2611.21600",
    "title": "How VLMs Plan What's Next",
    "authors": [
      "Rohit Gandikota",
      "Arnab Sen Sharma",
      "Adam Belfki",
      "David Bau"
    ],
    "abstract": "When a vision-language model describes an image, it names one object at a time and it rarely repeats itself, yet how the model plans this order is far from obvious. We characterize the mechanism a VLM uses to decide where to look before it looks. The mechanism has four main parts. First, binding heads match the relevant text tokens against the image and resolve them into pointers to the matched image region. Second, the same binding heads bind each written answer to the region it came from, and the model turns it into a progress signal: a cursor, the position in the image up to which the list has been written. Third, a select step chooses the nearest unwritten region after the cursor, or stops. Finally, gaze heads execute the chosen pointer and return a concept of what is drawn there, which language heads and the late MLPs turn into a word in the language of the question. We validate each part of this mechanism through causal patching in Qwen3-VL models on a synthetic visual retrieval task, and test our mechanisms against alternative hypotheses. We further show that the mechanism holds across input formats, natural photographs, and languages, and that its binding, relay, and gaze heads appear at every model size from 2B to 32B. This work allows us to investigate how a VLM turns a question and an image into a sequence of answers, layer by layer and token by token. More broadly, it opens a way to study how models plan over complex multi-step tasks with long rollouts. Our project is available at https://plan.baulab.info/",
    "published": "2026-11-16T18:58:30Z",
    "updated": "2026-11-16T18:58:30Z",
    "categories": [
      "cs.CV",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.21600"
  },
  {
    "id": "2611.21598",
    "title": "Mitigating Catastrophic Forgetting with Physics-Indexed Specialist Memory: the Evolutionary Neuroplastic Agent",
    "authors": [
      "Blas Eugenio Vicco Zarate",
      "Miguel Hernán Vicco"
    ],
    "abstract": "Continual reinforcement learning requires adaptation to changing conditions while preserving performance under previously encountered dynamics. It was investigated whether specialists generated by evolutionary search can provide a reusable memory when combined with environment detection and failure-driven search. The Evolutionary Neuroplastic Agent (ENA) evolves small neural networks without gradients, archives selected policies by detected dynamic regime, and retrieves them through Bayesian policy reuse. The architecture was evaluated in non-stationary CartPole and HalfCheetah environments. In the 30-replicate CartPole ablation, the complete architecture achieved a mean success rate of 83.2% across the five test environments. Among variants that learned the harder CartPole environments, the complete architecture showed the most consistent retention. A selection ablation also showed that the retrieval rule affected performance. In the evaluated sequences, ENA adapted more slowly than PPO on CartPole and achieved lower returns than SAC on HalfCheetah. The evidence concerns the complete architecture and does not isolate gradient-free optimization as the cause of retention or establish superiority over other continual-learning methods.",
    "published": "2026-11-16T18:58:20Z",
    "updated": "2026-11-16T18:58:20Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.NE"
    ],
    "url": "https://arxiv.org/abs/2611.21598"
  },
  {
    "id": "2611.21579",
    "title": "ScenarioForge: Resource-Grounded Generation and Execution Validation of Cyber Exercises",
    "authors": [
      "Jaime C. Acosta",
      "Anantaa Kotal",
      "Aritran Piplai"
    ],
    "abstract": "Cyber-range and capture-the-flag scenario construction remains labor-intensive because authors must coordinate infrastructure, vulnerable services, attack paths, artifacts, and success conditions. LLMs can propose detailed exercises, but plausible descriptions do not guarantee deployable software or verifiable objectives. We present ScenarioForge, which turns high-level requirements into resource-grounded topologies, services, traffic, segmentation, and challenge chains, then instantiates and validates them in the Common Open Research Emulator (CORE). The ScenarioForge Execution Dataset contains 226 materialized scenarios covering 294 Vulhub images and all 85 custom-built challenge-resource generators developed with our AI-assisted scaffolding. All 226 passed construction, preview, sequencing, deployment, strict runtime validation, and live artifact checks; their 867 steps, each an individually verifiable challenge objective, comprise 457 vulnerability-backed and 410 generated-resource-backed instances. In a separate 50-prompt matched benchmark, ScenarioForge+Qwen3.8 and ScenarioForge+GPT5.6 each achieved 50/50 (100%) topology/build success and 160/160 intent fields; direct frontier generation reached 41/50 builds and 147/160 fields only with the full cumulative scaffold: structure, vocabulary, policy, and container-image guidance. The test still omitted ScenarioForge's downstream challenge-resource generation, dependency/flag sequencing, deployment, and live validation. The artifacts support operationally rich, reproducible exercises for training and evaluation.",
    "published": "2026-11-16T18:49:56Z",
    "updated": "2026-11-16T18:49:56Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.21579"
  },
  {
    "id": "2611.21577",
    "title": "When Tool Names Are Not Identities: Measuring Provider Misbinding in MCP-Based AI Agents",
    "authors": [
      "Zeynab Anbiaee",
      "Sajjad Dadkhah",
      "Ali A. Ghorbani"
    ],
    "abstract": "Large language model (LLM) applications increasingly act as agents that select and invoke external tools. The Model Context Protocol (MCP) standardizes this interaction by allowing clients to compose tools advertised by multiple servers. However, tool metadata used for discovery and selection is not, by itself, necessarily bound to a verified provider identity. This paper studies this gap as tool-provider misbinding: a failure in which a request intended for a legitimate provider is instead resolved to an attacker-controlled tool. The attacker does not compromise the host, LLM, legitimate server, or network channel; it only operates another MCP server that advertises tools with chosen metadata. We formulate tool provider misbinding as an attacker-controlled tool-selection optimization problem and evaluate it in a controlled MCP environment across five LLM-based clients. The results show that interactions drive misbinding. The strongest failures occur when exact-name collision, task-aligned description, and compatible schema reinforce one another, but authority-enhanced descriptions with compatible schema can also cause wrong-provider execution or unresolved provider ambiguity without name collision. Different models expose the same provider-binding weakness differently, including attacker-controlled provider selection, clarification requests, and unstable or inconsistent provider resolution.",
    "published": "2026-11-16T18:49:37Z",
    "updated": "2026-11-16T18:49:37Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.21577"
  },
  {
    "id": "2611.21565",
    "title": "When Do Histology Foundation Models Need Geometric Test-Time Augmentation?",
    "authors": [
      "Lars Chen",
      "Valentino F. Foit",
      "Dorry Segev",
      "Michal Mankowski"
    ],
    "abstract": "Test-time augmentation (TTA) aggregates model predictions across multiple transformed views of an input during inference. Because histology images lack a canonical orientation, $D_4$ TTA---pooling across the 8 rotations and reflections of a square---is a standard default in computational pathology. However, the rise of self-supervised histology foundation models (FMs) with inherent rotational invariance calls its continued utility into question. We benchmark 9 histology FMs and 6 general-purpose models across four patch-level and two whole-slide image (WSI) datasets. We find that $D_4$ TTA remains a reliable post hoc improvement, but benefits diminish from $+1.98$ percentage points (pp) for general-purpose backbones to $+0.50$ pp for histology FMs on TCGA-UT, and shrink further for the largest models. To eliminate computational overhead, our experiments demonstrate that entropy routing---applying TTA selectively to uncertain predictions---recovers most of the gain while augmenting only ${\\sim}13\\%$ of samples. Finally, we show that patch-level TTA improvements do not transfer to slide-level multiple instance learning (MIL). Code: https://github.com/lars-chen/histology-tta",
    "published": "2026-11-16T18:41:01Z",
    "updated": "2026-11-16T18:41:01Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.21565"
  },
  {
    "id": "2611.21563",
    "title": "Wildfire-SSR: Geolocation-Aware Multimodal Fusion for Structure-Level Wildfire Risk Assessment",
    "authors": [
      "Yu-Hsuan Ho",
      "Yiming Xiao",
      "Hao-En Lai",
      "Ali Mostafavi",
      "Samuel D. Brody"
    ],
    "abstract": "Structure-level wildfire vulnerability assessment is critical for reducing losses in wildland-urban interface communities, yet existing methods often fail to combine parcel-scale ignition pathways with community-scale geographic coverage. This study introduces Wildfire-SSR (Satellite and Street-view for wildfire Risk), a geolocation-aware multimodal framework that integrates macro-scale satellite context with micro-scale street-view evidence. A Vision-Language Model extracts wildfire-relevant building and site attributes from pre-event street-view panoramas and converts them into structured semantic text. These features are spatially aligned with satellite imagery through a decoupled cross-attention fusion decoder, while a frozen satellite-pretrained DINOv3 encoder captures overhead visual context. Alternative geolocation embedding strategies are evaluated to anchor text-derived features within each satellite patch. The framework is tested on approximately 37,000 structures affected by the 2025 Eaton and Palisades fires in Los Angeles, using wildfire risk labels derived from relative post-event damage patterns to better represent inherent structural vulnerability. Rotary Positional Embedding provides the strongest spatial grounding, achieving a building localization F1 score of 0.6735 and a harmonic mean F1 score of 0.2476 for five-class pixel-level risk classification, outperforming unimodal baselines and an unanchored multimodal configuration. The model also shows a conservative bias in higher-risk classes, reducing severe-risk underestimation, and completes end-to-end assessment of the study area in 37 minutes on a single GPU. Wildfire-SSR reframes cross-view fusion as localized semantic alignment and provides a scalable tool for mitigation prioritization, resilience planning, and insurance-oriented wildfire risk assessment.",
    "published": "2026-11-16T18:40:49Z",
    "updated": "2026-11-16T18:40:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.21563"
  },
  {
    "id": "2611.21562",
    "title": "Severe but Harmless: Stress-Testing Shift Severity for Frozen Time-Series Forecasters",
    "authors": [
      "Korede R. Bishi",
      "Dominic Okonkwo",
      "Adetayo Okunoye"
    ],
    "abstract": "Zero-shot time-series foundation models (TSFMs) have become attractive alternatives to task-specific models because they handle diverse downstream tasks, including anomaly detection and forecasting, without per-series training. However, time-series data undergo distribution shifts, and the dissimilarity between two regimes is commonly scored with statistical measures such as Wasserstein-1, where a higher score is read as a more severe shift. In systematic experiments using three established severity measures on nine regime shifts from three standard traffic datasets, we show that these measures do not reliably predict degradation for instance-normalized TSFMs. The regimes rated most severe are not the regimes that degrade the models most, and degradation reaches 29% in the lowest-scoring regime. In most cases, the audit shows no positive relationship between measured severity and model degradation. We provide an equivariance-based stress-testing analysis that explains why severity readings can become decoupled from model degradation.",
    "published": "2026-11-16T18:40:35Z",
    "updated": "2026-11-16T18:40:35Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.21562"
  },
  {
    "id": "2611.21559",
    "title": "Reference Forcing: Long Video Generation with Region-Guided Drift Correction",
    "authors": [
      "Sheng Zhao",
      "Haitian Zheng",
      "Weikai Lin",
      "Junjie Zhao",
      "Yuhao Zhu"
    ],
    "abstract": "Long video generation should keep the subject and background consistent while supporting rich, natural motion. However, autoregressive models are often distilled with distribution matching distillation (DMD) over short windows, which does not train them to keep this consistency over long ranges. As a result, the subject and background can drift over time. Methods that manage the key-value (KV) cache retain or retrieve history to reduce drift. Yet this history may itself have drifted. We propose Reference Forcing, which uses the initial frames as an appearance reference. We first build a teacher that uses attention masks to force each region of a new frame to attend to the same region in the initial frames. The teacher finds these regions with off-the-shelf segmentation models. We then distill this behavior into a separate attention path of the student, which needs no external models at inference. We further introduce value correction, which corrects drifted values in the KV cache toward the matching values of drift-free initial frames. Experiments show that Reference Forcing achieves state-of-the-art subject and background consistency among long-video methods on different base models, and its advantage grows with video length. Ablations show both components are needed to gain consistency without losing motion. More visualizations and code are available at https://zhaosheng-thu.github.io/reference-force/",
    "published": "2026-11-16T18:39:47Z",
    "updated": "2026-11-16T18:39:47Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.21559"
  },
  {
    "id": "2611.21558",
    "title": "Benefits and Barriers to Human-AI Teaming for Crisis Counseling",
    "authors": [
      "Ivy Pham",
      "Akshay Swaminathan",
      "Sebastian Garcia",
      "Jaimie Lim",
      "Gloria Ye",
      "Divyanjali Verma",
      "Alan Pham",
      "Chastin Chung",
      "Shreya Shah",
      "Shaked Azzam",
      "Sharang Phadke",
      "Ivan Lopez",
      "William Wang",
      "Angelina Wang",
      "Nigam H. Shah"
    ],
    "abstract": "Background: AI systems are increasingly deployed to support mental health clinicians, yet real-world evidence remains limited. In crisis counseling, where clients often seek human connection, understanding whether AI augmentation preserves or undermines meaningful human engagement is essential. Methods: In a mixed-methods study of a counselor-facing AI copilot on a WhatsApp-based crisis hotline in India (Mar.-Oct. 2025), counselors could request, edit, and send AI messages. We analyzed 20 interviews, 8 shadowing sessions, 56 survey responses, and edits in 27,778 copilot messages from 108 counselors via thematic analysis (Technology Acceptance Model 2, plus inductive coding of emergent factors), and survey statistics. Results: Counselors reported high copilot acceptance (survey): 98.2% found it helpful; 89.3% likely to continue use; 80.4% reported efficiency gains. Interviews highlighted sentence scaffolding, empathetic phrasing, stress reduction, catching missed details, and efficiency. Barriers (survey) included repetitive outputs (23.2%), lack of context (17.9%), and authenticity concerns (10.7%). While 69.6% (survey) reported skill enhancement, interviews surfaced skill atrophy concerns. Counselors frequently accepted copilot suggestions, editing to remove questions, adjust tone, or personalize style. Conclusion: In one of the largest real-world deployments of a counselor-facing mental health AI copilot, counselors reported reduced cognitive load, empathetic communication, and greater efficiency, alongside concerns about skill atrophy, authenticity, and over-reliance. In settings like crisis counseling where clients seek human connection, AI tools must balance operational support with preserving clinical skill and genuine therapeutic engagement. Designs soliciting approval or editing of complete drafts may overweight efficiency at the expense of sustained human engagement.",
    "published": "2026-11-16T18:38:15Z",
    "updated": "2026-11-16T18:38:15Z",
    "categories": [
      "cs.HC",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2611.21558"
  },
  {
    "id": "2611.20314",
    "title": "NF-VLA: A Normalizing-Flow Baseline for Vision-Language-Action Learning",
    "authors": [
      "Ruichen Deng",
      "Qinyu Zhao",
      "Yong-Hyun Park",
      "Mutian Tong",
      "Liang Zheng",
      "Jiatao Gu"
    ],
    "abstract": "Autoregressive normalizing flows (NFs) provide a tractable density for learning and sampling continuous robot actions. We show that a single maximum-likelihood objective can train vision--language--action (VLA) policies competitive with leading methods on manipulation benchmarks. We present NF-VLA, which combines conditional autoregressive normalizing flows with score-based action refinement. Its deep--shallow architecture concentrates visual, language, and proprioceptive prefix conditioning in a high-capacity deep block, while unconditioned shallow blocks provide a shared invertible action transformation. The vision--language backbone and flow are jointly trained by exact maximum likelihood on Gaussian-smoothed action chunks. The same learned density supplies a single score-based correction at inference, refining generated actions to account for training-time smoothing without a separately trained denoiser. Trained on LIBERO from a pretrained vision--language backbone without robot pretraining, NF-VLA achieves 98.35\\% success across the four standard suites and 72.6\\% on LIBERO-Plus using the same checkpoint without further fine-tuning. Ablations show that deep-only prefix conditioning and score-based refinement both improve closed-loop success. Together, these results establish carefully structured autoregressive flows as a competitive approach to VLA control, with one learned density supporting policy training, action generation, and refinement.",
    "published": "2026-11-15T23:21:29Z",
    "updated": "2026-11-15T23:21:29Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.20314"
  },
  {
    "id": "2611.20311",
    "title": "Reveal: A Provenance-Aware System for Multimodal Urban Data Exploration",
    "authors": [
      "Leonardo Ferreira",
      "Joao Rulff",
      "Maryam Hosseini",
      "Aline Paes",
      "Daniel de Oliveira",
      "Fabio Miranda",
      "Marcos Lage"
    ],
    "abstract": "Urban sensing initiatives increasingly produce multimodal datasets that combine visual and textual information to capture city characteristics and subjective factors such as safety, comfort, and accessibility. Yet, analyzing such data at scale remains difficult, as manual inspection is unfeasible and automated methods struggle to interpret subjective cues and uncover relationships across diverse data modalities. Moreover, existing workflows rarely make exploration steps explicit, hindering reproducibility. To address these challenges, we introduce Reveal, a provenance-aware visual analytics system for exploring heterogeneous urban data. Reveal enables users to build dataflows by combining text and image searches across coordinated views, chaining queries into pipelines, and applying set operations within an exploration diagram while capturing analytical provenance. We evaluate Reveal through two case studies focused on accessibility and walkability.",
    "published": "2026-11-15T23:18:07Z",
    "updated": "2026-11-15T23:18:07Z",
    "categories": [
      "cs.HC",
      "cs.CY",
      "cs.MM"
    ],
    "url": "https://arxiv.org/abs/2611.20311"
  },
  {
    "id": "2611.20307",
    "title": "PoCoAttn: Position-Content Collaborative Sparse Attention for Fast and High-Fidelity Video Generation",
    "authors": [
      "Jianwen Wu",
      "Meiling Wang",
      "Junkang Zhou",
      "Yipeng Shen",
      "Haoran You"
    ],
    "abstract": "Video diffusion transformers rely on 3D full attention over tens of thousands of spatiotemporal tokens, and its quadratic cost dominates inference latency. Sparse attention reduces this cost, but existing methods face a dilemma: static methods apply predefined masks and cannot capture input-dependent attention, whereas dynamic methods reconstruct the sparse mask repeatedly, paying online to rediscover positional structure that is largely stable across inputs. To this end, we propose PoCoAttn, a training-free sparse attention framework that separates input-stable from input-dependent attention and resolves the former offline and the latter online. PoCoAttn features: (1) A relative-offset analysis of 3D query-key pairs, which shows that video attention decomposes into an input-stable positional prior that carries most of the attention mass and a small content-dependent residual. (2) A position-content collaborative sparse attention mechanism, which retrieves positional keys from offline-calibrated tables, selects content keys online with a head-adaptive ratio between the two sources, and compensates for the discarded keys to approximate full attention. (3) A step-adaptive budget allocation algorithm, which models how early-step sparse attention errors are amplified along the denoising trajectory and derives the optimal sparsity budget per step. Extensive experiments across four video diffusion models and three tasks show that PoCoAttn consistently achieves a better speed-fidelity Pareto frontier than state-of-the-art (SOTA) methods, improving PSNR by 1.9 to 5.0 dB over baselines and delivering up to 4.1$\\times$ attention and 2.0$\\times$ denoising speedups over dense FlashAttention-3 attention.",
    "published": "2026-11-15T23:10:35Z",
    "updated": "2026-11-15T23:10:35Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.20307"
  },
  {
    "id": "2611.20301",
    "title": "Multi-output neural network surrogate for double-pulse femtosecond optothermal control of thin silicon films on fused silica",
    "authors": [
      "George D. Tsibidis"
    ],
    "abstract": "We introduce a multi-output feedforward neural network surrogate trained on a coupled multiple-reflection and two-temperature model to map double-pulse femtosecond laser excitation (1030 nm) of crystalline silicon films on fused silica across film thicknesses (50-500 nm) and inter-pulse delays (0-10ps). Trained via Levenberg-Marquardt optimization on 2000 physical simulations, the dual-hidden-layer network ([40,30] neurons) simultaneously predicts six strongly coupled optothermal observables, peak electron temperature, peak lattice temperature, peak carrier density, minimum and maximum absorptivity and minimum refractive index achieving coefficients of determination R2 larger than 0.9998 across all targets. Evaluating a dense 200 by 200 design grid in milliseconds resolves pronounced thin-film interference fringes and carrier-induced index modulation, identifying an optimal optothermal coupling regime at d=156 nm and Dt=4.572 ps. This unified machine-learning workflow eliminates computationally expensive multi-physics runtime bottlenecks for real-time laser processing control and inverse photonic thin-film design.",
    "published": "2026-11-15T23:04:24Z",
    "updated": "2026-11-15T23:04:24Z",
    "categories": [
      "physics.optics",
      "cond-mat.dis-nn",
      "cond-mat.mtrl-sci",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.20301"
  },
  {
    "id": "2611.20289",
    "title": "Benchmarking LLM Inference on Desktop-Scale NVIDIA Grace Blackwell Clusters",
    "authors": [
      "Kevin Bhimani",
      "Christian Escobar",
      "Daniel Mihovch",
      "Rudolf Eigenmann",
      "Sunita Chandrasekaran"
    ],
    "abstract": "Two NVIDIA DGX Spark GB10 systems connect directly over 200 GbE to serve larger language models and increase inference capacity, but the benefits depend on how they are deployed. We benchmark 17 open-weight checkpoints spanning dense and mixture-of-experts architectures, 8B to 235B parameters and four weight precisions on one and two RDMA-connected systems. Using vLLM, we compare tensor parallelism (TP=2), pipeline parallelism (PP=2) and a two-replica baseline at concurrency 1 to 64, with three independent launches per configuration. TP=2 delivers a median 1.59x peak-throughput gain over one Spark, versus 1.39x for PP=2 and has higher throughput in 93 of 96 matched comparisons with separated 95% Welch intervals. It reduces unloaded inter-token latency to 0.52x to 0.73x of one Spark, whereas PP=2 provides little reduction. TP=2 also achieves the highest goodput under a strict 100 ms inter-token latency objective wherever both strategies are supported and the objective is met. For models fitting on one Spark, TP=2 generally favors low-concurrency serving, while replication offers higher throughput at high concurrency. One Spark uses less GPU energy per output token at matched concurrency. Across three precision ladders, NVFP4 reduces unloaded latency more than adding a second Spark at BF16. NCCL microbenchmarks and comparisons with an earlier TCP campaign suggest that collective communication overhead contributes to the advantage of TP=2. These results provide deployment guidance for desktop-scale inference.",
    "published": "2026-11-15T22:37:14Z",
    "updated": "2026-11-15T22:37:14Z",
    "categories": [
      "cs.DC",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.20289"
  },
  {
    "id": "2611.20288",
    "title": "Protecting Safety during Reasoning Training with Low-Rank Fisher Regularisation",
    "authors": [
      "Neel Rajani",
      "Ivan Titov"
    ],
    "abstract": "Large language models are trained to have safety guardrails, but these can be compromised while fine-tuning for new capabilities, such as reasoning. One way to mitigate this degradation is to modify the fine-tuning objective to preserve safety behaviour, but doing so effectively and efficiently remains challenging. We revisit Elastic Weight Consolidation (EWC), which penalises parameter updates based on sensitivity estimates from the diagonal of the Fisher information matrix (FIM). While EWC provides some protection, the diagonal approximation ignores interactions between parameters. We address this limitation by exploiting recent findings that safety-relevant behaviour is located in a low-rank subspace within models. Our method, Subspace-Projected Elastic Weight Consolidation (SP-EWC), projects gradients onto this subspace to capture non-diagonal curvature efficiently. We investigate three different ways of identifying the safety subspace: through safety fine-tuning updates (LoRA), safety-related activations (ActSVD), and contrastive representations of safety and utility data (cPCA). We find that this choice substantially affects performance, with SP-EWC using cPCA comparing favourably against existing methods by better maintaining safety guardrails without introducing excessive over-refusal.",
    "published": "2026-11-15T22:34:46Z",
    "updated": "2026-11-15T22:34:46Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.20288"
  },
  {
    "id": "2611.20283",
    "title": "CiGS: Conduction in Gaussian Splats for Interior Temperature Field from Thermal Images",
    "authors": [
      "Liu Zhenyuan",
      "Bharath Seshadri",
      "Bailey Miller",
      "George Kopanas",
      "Ionnais Gkioulekas",
      "Bernd Bickel"
    ],
    "abstract": "We present a method for inferring the interior temperature distribution of a solid object from registered multi-view visible-spectrum and thermal images, even when the thermal views cover only part of its surface. We formulate steady-state heat conduction as a Laplace boundary value problem and solve it with a direct boundary integral equation discretized over a point cloud: a Gaussian reconstruction of the visible-spectrum images supplies the boundary geometry, and the thermal images supply the boundary data. We do not build surface or volume meshes at any stage in our method. Instead, we sample collocation points from rendered depth without the pixels at depth discontinuities, and use a density subtraction that keeps the interior evaluation accurate up to the surface. The whole chain is differentiable, and we use it to recover the pose and depth of heating pipes, insulation defects, and the shape of cracks from thermal images. We validate our method through experiments on boundary value problems with Dirichlet-only and mixed Dirichlet and Robin boundaries, using synthetic and real captured data on scenes with challenging topology. These experiments show that our method matches analytical solutions and has better accuracy than FEM solvers.",
    "published": "2026-11-15T22:25:02Z",
    "updated": "2026-11-15T22:25:02Z",
    "categories": [
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2611.20283"
  },
  {
    "id": "2611.20278",
    "title": "Visual Marking as a Native Reasoning Capability for Multimodal LLMs",
    "authors": [
      "Jiazhen Liu",
      "Yanghao Wang",
      "Chaolei Tan",
      "Long Chen"
    ],
    "abstract": "Visual reasoning often requires maintaining intermediate spatial states that are difficult to express in text. Existing approaches either rely on external drawing tools or image generators, or encode these states in latent tokens without explicit spatial correspondence to the input image. We introduce SelfMark, which enables MLLMs to construct and use visual marks directly in their native visual feature space. By treating the visual token grid as a canvas, SelfMark establishes explicit spatial correspondence between marks and images. This is achieved through a locate-mark-read procedure, where the model identifies relevant locations, constructs task-dependent mark features, and reads the resulting visual features to guide its reasoning. We jointly train a single model on spatial planning, dense counting, high-resolution VQA, and line tracing. Across six benchmarks, SelfMark outperforms state-of-the-art MLLM-based methods specialized for individual tasks. These improvements also persist with a stronger backbone, demonstrating the effectiveness of visual marking across different model capabilities. Overall, SelfMark provides a unified approach to visual reasoning by integrating spatially grounded marks directly into the visual feature space of MLLMs.",
    "published": "2026-11-15T22:16:44Z",
    "updated": "2026-11-15T22:16:44Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.20278"
  },
  {
    "id": "2611.20274",
    "title": "Beyond AUC: Do Mammography Risk Models Predict When Cancer Occurs?",
    "authors": [
      "Svetlana Krasnova",
      "Andrey Krylov",
      "Dmitry Sorokin"
    ],
    "abstract": "Longitudinal deep learning models for mammography-based breast cancer risk prediction output either per-year cumulative risks or a discrete distribution over the year of diagnosis, from which cumulative risks F1,...,F5 are derived. These models are evaluated almost exclusively with year-wise AUCs and the concordance index. We show that these metrics are largely insensitive to when cancer occurs: they can be high even for a model that carries no information about the year of diagnosis. We re-evaluate two recent longitudinal models (OA-BreaCR, LMV-Net) on CSAW-CC with a 5-year horizon using timing metrics computed on cancer cases only. Despite C-indices up to 0.75, neither orders cancer cases by time to diagnosis significantly better than chance (c_time 0.51 and 0.55, both 95% CIs covering 0.5). Weighted absolute timing error favours a constant \"year 3\" prediction over both models, so we use c_time as the primary timing metric. For Mirai's additive-hazard head, also used by LMV-Net, we analyse how per-year increments passed through a ReLU can collapse under severe class imbalance. We also propose a breast-level, two-stage model that separates whether from when. It matches LMV-Net in discrimination (C-index 0.745 vs. 0.746) but orders cancer cases better (c_time 0.58 vs. 0.51, paired 95% CI of the difference 0.01-0.13), on par with Mirai's published weights (0.57).",
    "published": "2026-11-15T22:08:11Z",
    "updated": "2026-11-15T22:08:11Z",
    "categories": [
      "q-bio.QM",
      "cs.CV",
      "eess.IV"
    ],
    "url": "https://arxiv.org/abs/2611.20274"
  },
  {
    "id": "2611.20269",
    "title": "Self-supervised learning for zebrafish embryo phenotype evaluation: Systematic comparison of algorithms, label-efficient classification, and transfer learning",
    "authors": [
      "Thomas Lautenschlager",
      "Gaëlle Hayot",
      "Quentin Brassart",
      "Angelo Jovin Yamachui Sitcheu",
      "Linus Schilpp",
      "Tijana Geroski",
      "Tetyana Goldanova",
      "Stephan Allgeier",
      "Thibaut Soubrié",
      "Milica Nikolic",
      "Thomas Dickmeis",
      "Ralf Mikut",
      "Nils Friederich"
    ],
    "abstract": "Zebrafish embryos are a prominent model organism for image-based phenotyping and especially suited for large-scale imaging studies, for which machine learning (ML) models can automate evaluation. However, training ML models usually requires large labeled datasets, and differences in imaging conditions often impede reuse across laboratories. Self-supervised learning (SSL) addresses both constraints by learning transferable representations from unlabeled images. Yet central aspects like the choice of algorithm remain underexplored for domain-specific applications. To close this gap, we benchmark popular SSL algorithms on the public EmbryoNet dataset, explore label-efficient learning, and test transfer to an unseen setting. Using representations from our strongest model, a ResNet50 network trained with SwAV, a simple linear classifier reaches 86.4% accuracy and a non-linear classifier 87.1%, rivaling the fully supervised EmbryoNet model (87.1%). The SwAV model decisively outperforms supervised training from scratch when labels are scarce (70.2% vs. 45.7% accuracy with 5% of labels). On a three-class problem (normal, dead, falsely cropped) with a small, previously unseen zebrafish toxicity dataset, recorded in a different setting, our model reaches 81.3% accuracy without retraining, while EmbryoNet achieves 75.9%. Overall, self-supervised models for zebrafish embryos seem to mostly facilitate label-efficiency and transfer to new settings rather than improving supervised results.",
    "published": "2026-11-15T21:56:07Z",
    "updated": "2026-11-15T21:56:07Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.20269"
  },
  {
    "id": "2611.20268",
    "title": "GNN-Based Deep Reinforcement Learning for Coastal Emergency Response under Extreme Water Levels",
    "authors": [
      "Marcello Sano",
      "Samuele Casagrande",
      "Davide Ferrario",
      "Sebastiano Vascon",
      "Silvia Torresan",
      "Andrea Critto"
    ],
    "abstract": "When a storm surge approaches a coastal town, the emergency plan must be put into action quickly using water-level forecasts, flood extent, road access, vulnerable residents and shelters. Bringing this information together under time pressure is slow and depends on the duty officer's expertise. This paper is one step in a wider research line from data to safe decisions: machine learning to understand the hazard, reinforcement learning and planning to choose actions, large language models (LLMs) to explain and cross-check them, and an assurance layer that keeps people in charge. Here we address the action step on a real place. We ask whether a policy can learn the timing of emergency actions from decades of real events. Lido di Venezia is represented as a heterogeneous graph built from public elevation, road, building and census data and driven by hourly tide-gauge records from 1983 to 2024, with seven actions taken from the municipal emergency plan. A PPO policy is trained on this graph and compared, on storm windows unseen in training, with a rule-based system simulating the officer's discretionary decisions. On 18 historical test scenarios, PPO achieves a similar reduction in population exposure to the rule. With uncertain forecasts and limited protection it again performs similarly but does not outperform the tuned rule, and removing graph message passing does not substantially reduce performance. PPO therefore learns an effective protective response from an outcome-based reward alone: it is given the plan's actions and when each is allowed, but not the thresholds that tell the comparator when to act. Next steps test harder edge cases, move closer to a digital twin of the territory, and replace the simulated officer with assessment by emergency-management stakeholders, supported by LLM-based interpretation of each recommendation.",
    "published": "2026-11-15T21:52:24Z",
    "updated": "2026-11-15T21:52:24Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.20268"
  },
  {
    "id": "2611.20261",
    "title": "Estimating Outpatient Visit Prices from Hospital Price Transparency Data using Large Language Models",
    "authors": [
      "Kurmanbek Kaiyrbekov",
      "Nicholas J Dobbins",
      "Sean D Mooney"
    ],
    "abstract": "Objective: Hospital care prices in the United States have increased substantially, yet patients lack effective tools to access and compare costs. We aimed to develop and evaluate an LLM-based approach for improving access to and use of hospital price transparency (PT) data. Materials and Methods: To estimate visit prices, we used a retrieval-augmented generation (RAG) framework to analyze PT files from three major hospitals in Maryland and the surrounding region. We compared BM25, OpenAI embedding models, and a GPT-BM25 hybrid against a no-RAG baseline for cost estimation of individual procedures and procedure groups, then evaluated the best approach for symptom-based visit cost estimation using synthetic simulations. Results: Across hospitals, the GPT-BM25 retriever achieved the best performance, with average price MAPE of 19.44% for individual procedures and 4.90% for groups, compared with 147.98% and 82.82%, respectively, for the no-RAG baseline. In simulations, our framework correctly identified approximately 50% of reference procedures and reduced MAPE relative to the LLM-only baseline at two of the three hospitals, while achieving comparable performance at the third. Discussion: Our framework uses RAG to improve care price estimation in real-world settings. Compared with the no-RAG baseline, it substantially improved cost estimates for both individual procedures and procedure groups. Improvements were smaller in synthetic simulations, likely because inferring procedures from clinical information is more complex. Practical challenges remain, including heterogeneous PT file formats, unexplained duplicate entries, and limited availability of insurer-negotiated rates. Conclusion: LLMs that effectively integrate PT data show strong potential to provide patients with more accessible and accurate healthcare cost estimates.",
    "published": "2026-11-15T21:36:53Z",
    "updated": "2026-11-15T21:36:53Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.20261"
  },
  {
    "id": "2611.19009",
    "title": "Role-Separated Diffusion Transformers: Global Rule Isolation and Deterministic Sampling Manifold Compression",
    "authors": [
      "Zhiguang Liu",
      "Yi Shang"
    ],
    "abstract": "We present Role-Separated Diffusion Transformers (RoSeDiT), a new diffusion transformer architecture that isolates the global rule from the image tokens. RoSeViT showed in visual reasoning that a vanilla ViT spreads a shared rule over all $L$ tokens at an entropy of order $Ld$, whereas an enforced controller route reduces it to order $d$. In class-conditional DiT and SiT, the class and the noise level are explicitly conditioned by adaLN, so a RoSeViT-style controller channel on the ViT side is insufficient to establish the full role separation. By introducing the adaLN listening mechanism, which makes adaLN compute under the controller's command, RoSeDiT brings the entropy theorem and role separation into the latent diffusion domain. Under the same SiT training and evaluation protocol at the same level of parameter count, RoSeDiT surpasses SiT at all four model scales at 400K steps, and RoSeDiT-L/2 even surpasses SiT-XL/2's 17.2 FID with 15.34 and 32% fewer parameters. RoSeDiT-XL/2 surpasses SiT-XL/2's 7M-step FID of 8.3 at 1.4M steps with 7.98, using one-fifth as many training steps. We further observe that models with the same denoising loss can have a large FID gap, which indicates a misalignment between the denoising objective and the image manifold. We formalize this phenomenon into Deterministic Sampling Manifold Compression (DSMC), a two-stage training schedule with which RoSeDiT-XL/2 surpasses SiT + REPA's 4M-step FID of 5.9 at 2.4M steps with 5.84.",
    "published": "2026-11-13T23:14:01Z",
    "updated": "2026-11-13T23:14:01Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.19009"
  },
  {
    "id": "2611.18999",
    "title": "Agent-ZTA: A chain-Aware Zero Trust Model for Bidirectional Security-State Propagation and Runtime Containment in Multi-Agent Delegation",
    "authors": [
      "Asadullah Abdullah Khan",
      "Toqeer Ali Syed"
    ],
    "abstract": "Multi-agent systems increasingly delegate tasks and permissions across chains of autonomous agents that invoke protected tools. Although agent identities and delegated credentials may remain valid throughout a workflow, the security condition of any agent along the chain can deteriorate during runtime execution-either through upstream compromise or downstream ingestion of untrusted inputs. Authorization models based solely on the immediate caller and its static delegated scope fail to account for these mid-execution state changes. This paper develops Agent-ZTA, a chain-aware Zero Trust authorization and containment model that links runtime security-state changes across multi-agent delegation graphs. The model distinguishes an agent's path-specific delegated authority bound from the effective permissions currently exercisable under trusted policy. It defines an architecture featuring independently enforced policy decisions, authenticated delegation provenance, a dynamic chain-state view, and explicit fail-safe handling of missing or stale authorization signals. Furthermore, Agent-ZTA defines bidirectional security state propagation, allowing downstream security events to affect relevant upstream workflow states, and specifies adaptive branch-scoped containment through restricted permissions and a sandbox (\"jail\") execution mode where an isolation boundary is available. The deterministic decision procedure, five stated security properties, and worked authorization traces show how accepted security-state changes constrain affected operations while preserving original delegation bounds and separating unrelated workflow branches under the defined policies. Finally, the paper states its trust assumptions and the exact scope of its security properties.",
    "published": "2026-11-13T22:55:26Z",
    "updated": "2026-11-13T22:55:26Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.18999"
  },
  {
    "id": "2611.18998",
    "title": "Model Maps: A Documentation Framework for Tracing Foundation Model Ancestry and Understanding AI Entanglement",
    "authors": [
      "Rachel Hong",
      "Madeleine Grunde-McLaughlin",
      "Sarah Cen",
      "Jevan Hutson",
      "Jamie Morgenstern",
      "Tadayoshi Kohno"
    ],
    "abstract": "The development of foundation models incorporates pre-existing AI artifacts like models, datasets, and benchmarks. These relationships, as part of the broader AI supply chain, produce \"entangled\" webs in which properties of artifacts upstream can influence the outputs of a foundation model downstream - a phenomenon known as AI entanglement. Without visibility into these connections, a black-box model can inherit upstream properties that result in security vulnerabilities, hallucinations, or biased predictions, yet developers are left with no recourse to identify or mitigate the root issue. To address these concerns, we introduce model maps as a conceptual documentation framework for tracing model ancestry that builds on previous documentation frameworks like ecosystem graphs, datasheets, and model cards. A model map for a given foundation model is a detailed knowledge graph that represents the relationships between artifacts that influence the resulting foundation model. Our framework incorporates a taxonomy of 13 dependency mechanisms including model fine-tuning and synthetic data generation. We apply this framework to construct model maps of 15 closed and open-weight foundation models to illustrate the complexity of AI entanglement in current model development practices. From our model maps, we record 2,778 unique dependencies and trace artifacts that are located up to 9 hops away from a resulting foundation model. Our findings suggest that AI transparency requirements should extend beyond individual models and training-data disclosures to encompass upstream dependencies, which would enable more effective risk assessment, auditing, and accountability across the AI supply chain. To help developers, regulators, and researchers understand and analyze the interactions that can influence the behavior of a foundation model, we release these these model maps at https://modelmaps.ai.",
    "published": "2026-11-13T22:54:13Z",
    "updated": "2026-11-13T22:54:13Z",
    "categories": [
      "cs.CY",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.18998"
  },
  {
    "id": "2611.18994",
    "title": "Large language models as oncology world models",
    "authors": [
      "Julien Vibert",
      "Jakob Nikolas Kather"
    ],
    "abstract": "Large language models (LLMs) can synthesize cancer patient cases, but their internal representation of oncology, or world model, has not been explored systematically. By only specifying tumor type, we show that LLMs tend to generate similar patients per cancer, with on average 81.0% to 93.2% of a cancer's patients sharing the most frequent value of each baseline feature. By systematically varying patient features in 12 clinical scenarios, we show that they follow biomarker and treatment logic in 29 of 36 model-scenario assessments, against 1 of 12 when previous treatment or frailty matters. Continuing real patient trajectories, an LLM predicted 89.9% 12-month survival, and 79.2% with similar patients as examples, against 72.2% observed. To represent these trajectories, we developed the Clinical State Space, a dynamic representation framework that we also applied to real patients. Despite the limits we show, improved world models may support digital twins, which our framework can evaluate.",
    "published": "2026-11-13T22:49:38Z",
    "updated": "2026-11-13T22:49:38Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.18994"
  },
  {
    "id": "2611.18983",
    "title": "Who Shows Up, Who Benefits, and Who Wins? Expert-Novice Disparities in Team-Seeking Forums and Competition Performance on Kaggle",
    "authors": [
      "Ran Bi",
      "Shiyao Wei"
    ],
    "abstract": "Team formation is the first social gate to collaboration in online communities, yet it remains unclear whether public team-formation mechanisms broaden access to collaborators or reproduce existing hierarchies. We examine this question on Kaggle, a data science competition platform whose \"Looking for a Team\" (L4T) megathreads let participants publicly seek teammates for on-platform competitions. Grounded in Communities of Practice theory, we conduct two complementary studies of 18 competitions held in 2023. Study 1 analyzes the reply network among 671 megathread participants and finds that 89.3% are low-tier users, yet higher-tier users receive significantly more replies (Kruskal-Wallis H=16.46, p=.00246) and achieve higher rates of forum-visible teaming success (52.9% vs. 32.6%; chi-squared=10.53, p=.001), a proxy for eventual team membership. Linking megathread posters to verified team rosters from 16 competitions partially supports this proxy. Twenty-six final teams contained two or more megathread posters, indicating that megathread interaction sometimes, but not always, maps onto realized teaming. Study 2 links participation traces from 219 users to private leaderboard outcomes and finds that productive participation (submission count rho=.435, cross-competition participation rho=.247) is positively associated with performance, whereas megathread-specific discussion is not (rho=-.021). The submission-performance association appears stronger in higher tiers, although the novice subgroup estimate is imprecise. Together, the findings suggest that open access to team-seeking forums does not guarantee equal participation. Visible expertise shapes who attracts attention, and engagement in the community's core practice is more strongly linked to success than discussion alone. We discuss implications for designing more equitable team formation in online collaboration environments.",
    "published": "2026-11-13T22:25:13Z",
    "updated": "2026-11-13T22:25:13Z",
    "categories": [
      "cs.CY",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.18983"
  },
  {
    "id": "2611.18979",
    "title": "Probing Where Surprise Happens: Localized Violation-of-Expectation Evaluation of Video World Models",
    "authors": [
      "Yanbin Xu",
      "Ming bo Cai"
    ],
    "abstract": "Violation-of-expectation (VOE) benchmarks evaluate intuitive physics in video world models by testing whether physically impossible events produce greater prediction errors than matched possible events. However, conventional VOE evaluations aggregate prediction errors across space and time, making it unclear whether successful discrimination reflects model's understanding of physical violations at the locations and time where they occur. To address this limitation, we introduce localized VOE evaluation, a framework that measures prediction error differences between possible and impossible events within spatial regions and temporal intervals associated with physical violations. We compare global, temporally localized, and spatiotemporally localized evaluations of V-JEPA models pretrained on developmental egocentric videos or large-scale natural video datasets. Our results reveal that global and localized judgments can diverge in both directions: global aggregation can either obscure correct localized discrimination or produce apparent discrimination without corresponding localized evidence. During continued pretraining on developmental egocentric videos, agreement between global and localized judgments changes non-monotonically, while confidence in localized judgments increases despite modest improvements in accuracy. Together, these findings establish localized VOE evaluation as a complementary diagnostic for assessing intuitive physics in video world models and demonstrate that global prediction errors do not necessarily reflect the spatiotemporal evidence of physical violations.",
    "published": "2026-11-13T22:16:34Z",
    "updated": "2026-11-13T22:16:34Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "eess.IV"
    ],
    "url": "https://arxiv.org/abs/2611.18979"
  },
  {
    "id": "2611.18971",
    "title": "Three Invisible Failure Modes in Speech-Based Age Estimation for Child Safety",
    "authors": [
      "Christopher M. Stewart",
      "Kelsey Kraus",
      "J. Elliott Casal",
      "Geoffrey L. Brown"
    ],
    "abstract": "Child safety in AI depends on the accurate identification of minor users. Young children tend to talk rather than type when interacting with AI, so in practice this identification requires predicting age from speech. We evaluated whether three audio-capable large language models can predict a child's age from their speech across five studies using two speech corpora of children under the age of 13. Models classified children as over 13 on 2.5% to 42.5% of audio responses, and every model that answered placed some 5- to 11-year-olds over 18. While measuring these rates, we uncovered three distinct failure modes. A client library silently double-encoded speech samples, leading one model to classify children aged 5 to 10 years old as being in their thirties and forties with hallucinated explanations. A second model's endpoint was replaced by a successor that refused nearly every age-related question and never produced an age. Every model sometimes placed the same speech sample under 13 and over 18 years of age, but a third model went further, giving threshold answers that contradicted its own numeric estimates. None of these failure modes produced a warning, a status code, or a change in output format, so they would all pass standard monitoring. These results demonstrate why child-safety claims about age assurance should be evaluated at the level of the pipeline rather than the model. We describe the reporting practices that would make such failures detectable.",
    "published": "2026-11-13T21:59:09Z",
    "updated": "2026-11-13T21:59:09Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.CY",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2611.18971"
  },
  {
    "id": "2611.18964",
    "title": "Context Matters: Improving LLM-Based Code Summarization with Hierarchical Information",
    "authors": [
      "Alexandre Petrachini",
      "Breno Bernard Nicolau de França",
      "Guido Araujo"
    ],
    "abstract": "Source code documentation plays an important role in software quality activities, such as code review, program comprehension, maintenance, and bug fixing. However, it is often fragmented across individual code elements and focuses on local implementation details, providing little information about their surrounding context. This limits both developers' understanding of software systems and the effectiveness of Large Language Models (LLMs), whose reasoning is constrained by finite context windows. Enriching documentation with hierarchical context has the potential to improve software comprehension and support downstream, quality-related tasks for both developers and LLM-based tools. In this paper, we present an in silico study that showcases the impact of augmenting context on the generation of code-level documentation, using a variety of LLMs. By varying the function, class, and module hierarchy visible to the LLMs, we assess whether this variation produces a significant difference in the resulting code documentation compared with the existing documentation, which serves as a proxy for developer intent. Our results show that Documentation-Aware prompts with class or module-level context consistently yield summaries that are closest to the original documentation. Adding surrounding documentation yields statistically significant improvements over the baseline across models, with effect sizes ranging from negligible (DeepSeek) through weak (GPT-4o-mini) to medium (Gemini). We restrict the study to this immediate hierarchical context; call-graph traversal and cross-module dependency context fall outside our scope and are left to future work. These findings provide a clear path to improve automated documentation tools and enhance LLMs' ability to reason about codebases for downstream tasks, such as code retrieval.",
    "published": "2026-11-13T21:40:43Z",
    "updated": "2026-11-13T21:40:43Z",
    "categories": [
      "cs.SE",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.18964"
  },
  {
    "id": "2611.18963",
    "title": "SpecRelay: Amortize or Avoid the Round Trip in Edge-Cloud Speculative Decoding",
    "authors": [
      "Jai Jain",
      "Chihyo Ahn",
      "Yong Liu",
      "Charles Chen",
      "Duc N. M Hoang",
      "Ajay Kumar Jaiswal",
      "Fatih Ilhan",
      "Han-Byul Kim",
      "Lauren Hannah",
      "Richa Dixit",
      "Minsik Cho",
      "Yingyan Celine Lin",
      "Hyesoon Kim"
    ],
    "abstract": "Edge-cloud speculative decoding moves autoregressive drafting to an edge device while a larger cloud model verifies draft tokens in parallel, so that edge drafting and cloud verification overlap under a synchronous draft-verify schedule. Beyond low-latency local networks, however, the next verification request of that schedule can be sent only after the previous reply arrives, so every round still waits out a full round trip, and throughput falls as the network RTT grows. To recover this loss, we present SpecRelay, an edge-cloud LLM inference system that addresses this cost at two levels: it amortizes round trips when cloud verification is necessary and avoids them when local reasoning suffices. For cloud-bound queries, an asynchronous verification pipeline keeps fixed-budget draft trees in flight while earlier replies are still outstanding, and the cloud rejects stale requests before the target-model forward pass (the asynchronous schedule). At the query level, an RTT-conditioned router (the Latency-Aware Router) estimates quality and completion latency for three on-device modes (direct generation, Chain-of-Draft, and full reasoning) and cloud speculative decoding, selecting among them under a configurable accuracy-latency objective without adding latency during inference, since the router runs concurrently with the draft-model prefill. The asynchronous schedule alone improves decoding throughput by up to 50% over a reproduced synchronous baseline across multiple benchmarks. At matched target-model accuracy and 250 ms of added round-trip latency, the full system with the router delivers 1.95x and 1.55x the throughput of the same baseline on SPROUT and OlympiadBench, respectively, while sending only 47% and 39% of the queries to the cloud.",
    "published": "2026-11-13T21:40:06Z",
    "updated": "2026-11-13T21:40:06Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.18963"
  },
  {
    "id": "2611.18958",
    "title": "Dual-Stage Channel-Posterior Integration for MLM-Aided Token Communications",
    "authors": [
      "Hyelin Nam",
      "Jihoon Lee",
      "Seung-Woo Ko",
      "Jinho Choi",
      "Seong-Lyun Kim"
    ],
    "abstract": "Token transmission over conventional digital modulation is vulnerable to channel impairments, leading to bit errors that cause received tokens to become contextually inconsistent. This paper proposes a receiver-side dual-stage channel-posterior integration framework for masked language model (MLM)-aided token reconstruction. In the proposed framework, the receiver detects unreliable token positions from channel reliability and constructs a vocabulary-level channel-posterior. In particular, within the receiver, Posterior-Weighted Input Embedding (PWE) injects this posterior into the MLM input, while Adaptive Output Logit Fusion (AOF) reuses it at the output with a channel-adaptive weight. Consequently, multiple unreliable tokens can be reconstructed in a single bidirectional MLM inference without retransmission, transmitter-side encoding, or additional MLM training. Experiments over noisy channels show up to a $67.2$\\% improvement in cosine similarity over context-only MLM reconstruction, with consistent gains across different MLM architectures and existing language-model-aided methods.",
    "published": "2026-11-13T21:22:01Z",
    "updated": "2026-11-13T21:22:01Z",
    "categories": [
      "cs.AI",
      "cs.IT",
      "eess.SP"
    ],
    "url": "https://arxiv.org/abs/2611.18958"
  },
  {
    "id": "2611.18952",
    "title": "From Language-Specific to Cross-DSL: Semantic-Role-Guided Model Completion with LLMs",
    "authors": [
      "Meriem Ben Chaaben",
      "Théo Giraudet",
      "Benoit Combemale",
      "Houari Sahraoui"
    ],
    "abstract": "The rapid emergence of large language models (LLMs), trained on vast and diverse corpora, has positioned them as a promising source of domain knowledge to assist modelers. However, leveraging LLMs for model completion remains challenging: suggestions must respect both the syntax of a domain-specific language (DSL) and the intended domain semantics, while remaining consistent with an evolving model. This paper presents RAFiC, an LLM-based approach for iterative domain model completion that generalizes across DSLs. It drives completion using metamodel information to ensure syntactic validity and enriches prompts with semantic-role annotations to better capture the intended modeling role of DSL elements. The approach provides context-aware, incremental guidance during model construction. We evaluate RAFiC through an ablation-based comparative study over three DSLs and two scenarios per DSL to isolate the contribution of syntactic and semantic guidance. Across these six scenarios, semantic role guidance improves contribution rate in every case, and RAFiC improves completion effectiveness over weaker prompting configurations in most of them. The largest gains occur for DSLs that are less represented in LLM training data. In these cases, iterative guidance leads to earlier and more stable accepted suggestions, while semantic role guidance improves their relevance.",
    "published": "2026-11-13T21:14:11Z",
    "updated": "2026-11-13T21:14:11Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.18952"
  },
  {
    "id": "2611.18949",
    "title": "Effects of Conventional, Adaptive, and AI-Powered Upscaling on the Legibility of License Plates",
    "authors": [
      "Hany Farid",
      "Joshua D. Bucci",
      "Emily A. Cooper"
    ],
    "abstract": "Small details in digital images -- a face, a street sign, a license plate -- are routinely upscaled in hopes of making them interpretable. Upscaling options now range from conventional interpolation, whose operations are spatially invariant and fully explainable, to AI-powered methods that synthesize detail potentially absent from the source. Here, we ask which of these techniques most reliably helps human readers. In two online experiments, we measured legibility of 255 US license plates ranging in resolution from 128 to 8 pixels tall, as well as their legibility after upscaling by eight different methods. Legibility of the un-upscaled plates collapsed from ceiling to floor across a narrow band of plate heights (32 to 10 pixels). Conventional upscaling techniques (bilinear, bicubic, and Lanczos interpolation) gave modest gains of about 5-9 percentage points within this range. Nearest-neighbor interpolation, however, was harmful, rendering unreadable many plates that were readable without any upscaling. Advanced methods diverged: SwinIR, an open-source AI enhancer, raised performance by up to 38 points relative to no upscaling, while an adaptive denoiser-based image prior and commercial AI upscaler tended to impair legibility. We found no strong evidence of consistent character hallucinations across methods. Decomposing the task, conventional interpolators mainly helped readers count characters, whereas SwinIR alone made the characters themselves more identifiable.",
    "published": "2026-11-13T21:05:57Z",
    "updated": "2026-11-13T21:05:57Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.18949"
  },
  {
    "id": "2611.17336",
    "title": "Back to Pixels: Lifting Latent Video Diffusion into Pixel Space",
    "authors": [
      "Yanke Song",
      "Shuo Chen",
      "Chris Rockwell",
      "Guande He",
      "Nan Liu",
      "Desai Xie",
      "Tianpei Gu",
      "Yong-Hyun Park",
      "Aryan V S",
      "Dennis Yuren Menn",
      "Ming-Hsuan Yang",
      "Xun Huang"
    ],
    "abstract": "Frontier video generation models work in a VAE latent space that compresses video in both space and time. This compression made training tractable, but now limits high-resolution, controllable, and interactive generation -- doubling resolution quadruples token count, conditions apply to groups of frames rather than individual ones, and each response must wait for the rest of its multi-frame block. We present PixVid, a simple yet effective method that lifts a pretrained latent video model to directly generate every frame in pixel space. PixVid keeps the diffusion transformer and replaces the VAE decoder with a convolutional head that renders its outputs into pixels. We find that predicting clean video rather than velocity, together with a larger noise shift, is key to quality. Finetuned from Wan2.1-14B, PixVid is competitive with the latent baseline within $\\sim 1.3$M training clips. Working framewise in pixels, it generates at $2\\times$ higher resolution with the same per-frame token count, keeps depth-conditioned video editing aligned under fast motion, and responds to each action at the next frame. Project page: https://chenshuo20.github.io/PixVid/",
    "published": "2026-11-12T18:59:55Z",
    "updated": "2026-11-12T18:59:55Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.17336"
  },
  {
    "id": "2611.17334",
    "title": "Unbundling Multimodal Vision Encoding",
    "authors": [
      "Ellis Brown",
      "Chris Hoang",
      "Shengyi Qian",
      "Shang-Wen Li",
      "Mike Lewis",
      "Marjan Ghazvininejad",
      "Luke Zettlemoyer",
      "Lucas Beyer",
      "Mengye Ren",
      "Jakob Verbeek",
      "Saining Xie",
      "Hu Xu"
    ],
    "abstract": "How multimodal language models should encode visual input remains up for debate. Most models use a pretrained vision encoder, while some recent recipes train the encoder from scratch with the language model or remove it entirely. Vision encoders bundle together three design choices: a visual prior from upstream pretraining, dedicated vision capacity, and pre-fusion placement of that capacity (i.e., before the multimodal backbone). Because published models also differ in data, architecture, and compute, comparing them cannot isolate the effect of each choice. We disentangle these choices via a controlled framework where we pretrain all models from scratch on common data and compare them on visual question answering and language benchmarks at matched lifetime compute. We find that the visual prior is not necessary; an encoder trained jointly from scratch is on par with a pretrained one, without a separate training stage. What matters instead is dedicated vision capacity: an encoder-free model trails on visual understanding even when its backbone is enlarged by the encoder's parameter count. Yet that capacity need not precede multimodal fusion, as vision-only modules added in-fusion to early backbone layers perform comparably to a pre-fusion encoder and can lower time to first token. These results also hold across backbone sizes, when encoder pretraining is treated as free, and when starting from a pretrained language model. Overall, our findings favor dedicated vision capacity trained jointly with the backbone and placed early within it.",
    "published": "2026-11-12T18:59:54Z",
    "updated": "2026-11-12T18:59:54Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.17334"
  },
  {
    "id": "2611.17331",
    "title": "TTB: Test-time Baking for Efficient Rendering of Decoder-only View Synthesis Models",
    "authors": [
      "Chin-Yang Lin",
      "Ryo Hachiuma",
      "Jaesung Choe",
      "Min-Hung Chen",
      "Yu-Chiang Frank Wang",
      "Yen-Yu Lin",
      "Wei-Chen Chiu",
      "Yu-Lun Liu",
      "Cheng Sun"
    ],
    "abstract": "Decoder-only Large View Synthesis Models (LVSMs) with KV-cache have recently achieved state-of-the-art quality by regressing novel views from neural networks without reconstructing 3D geometry, while Test-Time Training (TTT) layers save computation but sacrifice quality. We propose Test-Time Baking (TTB), a strategy that learns to bake global scene information from cross-view attention into a lightweight MLP, enabling fast and high-fidelity novel-view decoding. The first key is to repurpose the fast-weight MLP of TTT to learn the cross-view attention mapping explicitly from its input-output pairs, rather than replacing attention entirely, achieving the same rendering efficiency as TTT while delivering substantially higher quality. The second key addresses a modality misalignment between context prefilling and novel-view rendering: we disentangle context tokens into camera-only context rendering tokens to serve as TTB input, and context ground-truth tokens with image content to serve as the TTB mapping target, ensuring the baked MLPs are relieved of the modality generalization challenge between context and novel-view processing. Our method achieves up to **23x** rendering speedup with quality on par with the state-of-the-art across several benchmarks. Project page: https://test-time-baking.github.io",
    "published": "2026-11-12T18:59:52Z",
    "updated": "2026-11-12T18:59:52Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.17331"
  },
  {
    "id": "2611.17330",
    "title": "ProtoVis-Nav: Prototypical Visual Imagination for Visual-Spatial Aligned UAV Navigation",
    "authors": [
      "Guangyuan Sui",
      "Yunzhong Hou",
      "Chi Harold Liu"
    ],
    "abstract": "Vision language navigation (VLN) is very challenging for Unmanned Aerial Vehicles (UAVs) since small errors in 3D motion prediction can lead to navigation errors and collisions. Unable to fathom execution outcomes in 3D environments, existing methods often struggle to predict accurate navigation waypoints from language instructions. To solve this, we introduce the Prototypical Visual Imagination framework, shortened as ProtoVis-Nav, which forces the model to imagine an outcome-associated local visual representation for the intended next UAV movement. Specifically, we predict feature prototypes and use their linear combination to estimate the visual feature of the target region. In this manner, the VLN model first imagines the local visual representation of the next intended location, and then uses predicted prototypes as context for generating the final action, promoting alignment between visual context and waypoint outputs. Extensive experiments demonstrate the effectiveness of the ProtoVis-Nav framework and show substantial improvements over existing baselines.",
    "published": "2026-11-12T18:59:49Z",
    "updated": "2026-11-12T18:59:49Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.17330"
  },
  {
    "id": "2611.17324",
    "title": "K2V: Generative Keyframing For Physically Plausible Video Generation",
    "authors": [
      "Felix O'Mahony",
      "Daniel Olmeda Reino",
      "Roberto Cipolla",
      "Ayush Tewari"
    ],
    "abstract": "Video diffusion models are able to generate samples with high-quality appearance and textural qualities. However, content produced by these methods is known to exhibit significant physical errors. This is because, in a classical video generation setting, all physical reasoning must take place simultaneously and exclusively within the diffusion process.We propose to resolve these issues by redistributing the task of physical reasoning onto a language model-backed keyframe generation module, which allows for explicit reasoning in language, and fine-grained control over the appearance of the video at important moments in the video. We then condition a video generation model with these keyframes, reducing the role of the diffusion model to the simpler task of interpolating between physically-correct intermediate states, rather than inferring an entire sequence with diffusion. Results demonstrate that our approach significantly outperforms existing approaches, achieving state-of-the-art performance on the Physics-IQ Verified benchmark and PhyGenBench.",
    "published": "2026-11-12T18:59:09Z",
    "updated": "2026-11-12T18:59:09Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.17324"
  },
  {
    "id": "2611.17323",
    "title": "AgentSSL: Can MLE Agents Leverage Unlabeled Data?",
    "authors": [
      "Ethan Lin",
      "Akanksha Sarkar",
      "Ziang Liu",
      "Kristin Branson",
      "Jennifer J. Sun"
    ],
    "abstract": "Applying machine learning systems to new domains introduces bottlenecks in both labeled data acquisition and manual pipeline engineering. While recent MLE agents show promise in automating pipeline design, they have been studied almost exclusively in fully supervised settings, leaving them untested in realistic regimes where labeled data is scarce but unlabeled data is abundant. In this work, we introduce Agentic Semi-Supervised Learning (AgentSSL), framing SSL as a program search problem and studying how agents navigate this space under limited supervision. We find that even under weak feedback and matched compute, agents can synthesize code that combines and adapts established SSL techniques, exceeding the strongest human-engineered baselines in 8 of 12 settings by up to +21.8%. However, our results identify program selection as a critical bottleneck in AgentSSL, where performance drops by as much as 47% when selecting based on the agent's feedback metric. To systematically study this bottleneck, we introduce ProgramSelectBench, a large-scale benchmark with a combined total of 16,977 agent-generated and human-engineered SSL programs, and evaluate both unsupervised and active program selection methods. We further evaluate AgentSSL on real-world ecology detection tasks, highlighting the opportunities and challenges of transferring agent-discovered strategies beyond controlled benchmarks.",
    "published": "2026-11-12T18:59:06Z",
    "updated": "2026-11-12T18:59:06Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.17323"
  },
  {
    "id": "2611.17321",
    "title": "BrickFlow: Connectivity-Guided Brick Reconstruction",
    "authors": [
      "Peter Kulits",
      "Cordelia Schmid"
    ],
    "abstract": "Given a set of LEGO parts and an image of an assembled object, our task is to infer the pose of each part to assemble the object. In contrast with traditional 3D reconstruction, doing so requires satisfying discrete physical constraints, which provide structure but render the problem combinatorial and highly sensitive to small pose errors. To learn a prior over how parts fit together, we train a set-conditioned SE(3) flow model on procedurally generated assemblies. We then finetune this model to inject image conditioning, using 1% as much data. However, while the learned flow captures global structure, it does not enforce connectivity. To address this, we introduce an analytic connectivity-field guidance to pull predictions toward connected assemblies at test time. Through this, we demonstrate improved build quality with model size, pretraining, and guidance. We make our models and data available for research purposes at https://kulits.github.io/BrickFlow/",
    "published": "2026-11-12T18:58:51Z",
    "updated": "2026-11-12T18:58:51Z",
    "categories": [
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2611.17321"
  },
  {
    "id": "2611.17318",
    "title": "Spatial Foundry: A Multimodal Dataset for Spatial Intelligence",
    "authors": [
      "Ethan Lin",
      "Yang Song"
    ],
    "abstract": "Spatial intelligence requires connecting visual observations to the geometry, objects, and persistent state of an environment. Images alone leave these relationships implicit, while disconnected annotations make it difficult to study appearance, camera motion, and scene changes under a common reference. We introduce Spatial Foundry, a collection of 5,280 furnished residential 3D scene configurations with editable assets and aligned visual, geometric, and temporal data. Its modalities include floor plans, perspective and panoramic RGB, metric depth, point clouds, meshes, instance-level 3D bounding boxes, and camera trajectories paired with video. Shared scene coordinates link observations across views and time; editable source scenes enable additional camera paths and controlled object changes. We describe the data representation and construction workflow, and discuss applications in floor-plan-conditioned 3D generation, geometric reconstruction, instance-level perception, camera-conditioned video generation, shared world modeling, and scene editing. Controlled camera and scene variations support spatial perception and world-model research. The public project page provides videos and an interactive colored point-cloud preview.",
    "published": "2026-11-12T18:58:36Z",
    "updated": "2026-11-12T18:58:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.17318"
  },
  {
    "id": "2611.17316",
    "title": "CoReMem: Cost-Internalizing Memory for Successive Coding Tasks with Prospective Valuation",
    "authors": [
      "Peiwen Li",
      "Harshit Verma",
      "Sophia Zhou",
      "Haiwen Wang",
      "Ngoc Bui",
      "Heng Chang",
      "Fei Fei",
      "David van Dijk",
      "Rex Ying"
    ],
    "abstract": "Coding agents tackle successive tasks on an evolving repository, carrying forward edits and writing memory before the next task is known. Selecting memory for unknown next tasks requires balancing future usefulness against the costs of writing and reading it. The actor must also decide when acting on available memory saves effort as the task unfolds. We introduce Coding-Repository Memory (CoReMem), a cost-internalizing framework that guides memory design and actor adaptation through measured memory value on the next task. Prospective segment valuation compares runs of the next task with and without individual trajectory segments from the same inherited repository state, guiding a compact memory built around anchors: repository locations and executable checks. Actor adaptation estimates on-policy memory value within rollout groups with and without memory, using a reward that prioritizes resolution and penalizes step count in successful runs. Provenance-gated value credit assigns the additional value term to steps identified as using memory-supplied anchors, while every step retains outcome credit. On ChainSWE, CoReMem raises the 27B actor's resolve rate from 21.0% to 25.7%, with 17% fewer steps and 11% fewer total cache-aware tokens, including memory-module calls, relative to the untrained actor model without memory.",
    "published": "2026-11-12T18:58:22Z",
    "updated": "2026-11-12T18:58:22Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2611.17316"
  },
  {
    "id": "2611.17313",
    "title": "Sketching Language Models for Context Attribution",
    "authors": [
      "Christopher Liaw",
      "Aranyak Mehta",
      "Grigoris Velegkas",
      "Felix Zhou"
    ],
    "abstract": "Context attribution asks how removing parts of a prompt changes a language model's output. We study leave-one-out (LOO) attribution for a prompt of $n$ tokens and a fixed measurement function. Computing all LOO values directly requires $n$ model evaluations. Under a stability assumption, our algorithm estimates all LOO values to error proportional to $\\varepsilon$ with constant probability using $O(\\sqrt{\\log(1/\\varepsilon)}/\\varepsilon)$ evaluation calls. To complement our upper bound, we prove a matching $Ω(\\sqrt{\\log(1/\\varepsilon)}/\\varepsilon)$ lower bound on the number of evaluation calls in an oracle model. Empirically, we verify coefficient decay consistent with stability and evaluate the performance of our sketching algorithm on a small language-model retrieval task. Technically, our result is based on a sketching algorithm for arithmetic circuits whose Taylor coefficients satisfy the stability condition recently introduced by Gunn [Gun26]. A direct adaptation of their forward differentiation sketches would require $\\widetilde{O}(\\log(n)/\\varepsilon^2)$ evaluation calls. Our key observation is that we can apply forward differentiation to the backpropagation circuit, with only constant overhead over a forward sketch of the same Taylor degree. This reduces the variance of the sketches and is key to our improved evaluation bound. Our lower bound builds on the techniques of Amsel, Chen, Duman Keles, Halikias, Musco, and Musco [ACDH+26, SIAM Journal on Matrix Analysis and Applications] for lower bounding the number of matrix-vector queries to estimate the diagonal elements of random matrices.",
    "published": "2026-11-12T18:57:48Z",
    "updated": "2026-11-12T18:57:48Z",
    "categories": [
      "cs.DS",
      "cs.AI",
      "cs.LG",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2611.17313"
  },
  {
    "id": "2611.17309",
    "title": "Classical Energies Learn to Reason 1,000x Faster than Looped Models",
    "authors": [
      "Benjamin Hoover",
      "Hugh Blayney",
      "James C. R. Whittington"
    ],
    "abstract": "Looped models have emerged as a prominent paradigm for reasoning, with successes on simple reasoning puzzles such as Sudoku-Extreme and Maze-Unique. However, these models can be unstable, slow to train, and use many parameters and FLOPs to solve simple puzzles. Descent on an energy not only mitigates these issues but also offers advantages: built-in early stopping, compute that adapts to problem difficulty, fast training without differentiating through a solver, and interpretable weights that learn the constraints of the puzzle. Here we demonstrate this with a learned version of Hopfield & Tank's energy from the 80s, which we term CRAM, solves 99.996% of Sudoku-Extreme and 100% of Maze-Unique test puzzles after 42 ms and 132 ms of training on one GPU, at least 1,000x faster than looped models on these tasks. CRAM also matches baseline looped models at their highest accuracy on Sudoku-Extreme using at least 282x fewer inference FLOPs. Our work suggests two things. First, that energies are an extremely promising direction for training reasoning from data. Second, a caution against using trivially solvable benchmarks like Sudoku and Maze to test the scalability of looped reasoning techniques.",
    "published": "2026-11-12T18:56:56Z",
    "updated": "2026-11-12T18:56:56Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.17309"
  },
  {
    "id": "2611.17302",
    "title": "FLEX-LBP: Learning Local Binary Patterns with Exact Binary Inference for Texture Classification",
    "authors": [
      "Mohamed Alimoussa",
      "Amal El Kaid"
    ],
    "abstract": "Local Binary Patterns (LBP) remain among the most widely used texture descriptors, from industrial inspection to medical imaging. Yet their radius, sampling angles, color transform and thresholds are fixed by hand for each dataset. We present FLEX-LBP, which learns these parameters by backpropagation while every forward pass computes exact binary codes and hard histogram counts. A straight-through estimator acts only in the backward pass, so the deployed descriptor is an interpretable hard-binary LBP with 90 learnable parameters and unchanged inference cost. In a controlled ablation on six color texture benchmarks, the component worth learning is dataset-dependent. One configuration, applied unchanged everywhere, learns the geometry and thresholds with the color transform frozen. It improves the nearest-neighbor accuracy of the identical fixed descriptor by 3.55 points on average over five seeds, significantly on five of six benchmarks and never significantly worse. With a linear discriminant readout, it gains 0.9 points; the fully learned descriptor gains 2.7 and has the highest mean. FLEX-LBP is more accurate than five classical LBP-family descriptors, PCANet and a neural LBP on five of six benchmarks. Its mean nearest-neighbor accuracy exceeds that of frozen ImageNet ResNet-50 features (23.5 million parameters). On the Kather colorectal cancer histology benchmark, the fully learned descriptor reaches 93.8%, significantly above the best classical descriptor (Completed LBP, 92.8%). The learned radii adapt in directions that recur across seeds. Noise drowns single-pixel comparisons and illuminant change flips inter-channel ones; median sampling or gray-world normalization restores 96-97%. The code is available as a drop-in PyTorch layer at https://github.com/medalimoussa/FLEX-LBP.",
    "published": "2026-11-12T18:55:56Z",
    "updated": "2026-11-12T18:55:56Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.17302"
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
  }
];
