window.PAPER_DATA_UPDATED_AT = "2026-10-05";
window.PAPER_ITEMS = [
  {
    "id": "2610.03717",
    "title": "Less Decoder is More Encoder: Geometric Representation Learning from Novel View Synthesis",
    "authors": [
      "Keerthi Kaashyap",
      "Dennis Anthony",
      "Akshay Krishnan",
      "Nhi Ngoc Nguyen",
      "Jeremy Collins",
      "James Hays",
      "Shreyas Kousik",
      "Animesh Garg"
    ],
    "abstract": "This paper examines the role of Novel View Synthesis (NVS) in geometric representation learning. In principle, NVS should reason about 3D scene structure, thereby enabling transferable multi-view geometric representations. Yet, existing encoder-based NVS methods yield poor representations. This is not because of a lack of supervisory signal, but rather due to inconspicuous architectural choices: \\textit{spatially expressive decoders} that dilute representational capabilities of the scene encoder, and \\textit{low-level pixel-space targets} that hinder feature learning. We present SNAP, a self-supervised encoder-decoder transformer that addresses both through a pose-conditioned local decoder and a latent-space reconstruction objective. SNAP is task agnostic, and we show that it is competitive with special-purpose geometry-supervised methods. SNAP also performs competitively against self-supervised representations across five tasks: visual localization, pose estimation, point correspondence, depth estimation, and robot manipulation. Remarkably, SNAP's patch features exhibit emergent viewpoint invariance that approaches heavily supervised models despite lower compute and data budgets. Under camera shifts where standard 2D representations collapse, SNAP degrades more gracefully, revealing that restricting decoder expressivity actively prevents the suppression of transferable geometric structure. https://snap-nvs.github.io",
    "published": "2026-10-02T17:59:14Z",
    "updated": "2026-10-02T17:59:14Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.03717"
  },
  {
    "id": "2610.03716",
    "title": "MoSE3: Learning World-Space SE(3) at Every Pixel",
    "authors": [
      "Jiahuan Cheng",
      "Zhiyi Li",
      "Tian Xia",
      "Ruojin Cai",
      "Yilun Du",
      "Qianqian Wang"
    ],
    "abstract": "Dense 3D point tracking has been a prominent paradigm for modeling motion in dynamic scenes, but a point track is just a 3-DoF translation curve per pixel: it captures where pixels go, not the rotation of the underlying part, nor which pixels move together as one body. We propose MoSE3, the first feed-forward model that predicts dense SE(3) motion from monocular RGB video, producing full 6-DoF rigid transforms at every pixel in world space. Per-pixel SE(3) motion offers a richer view of how a scene moves: rotation, translation, and grouping all at once. Directly predicting SE(3) is challenging: rotations lie on a curved manifold that is ill-suited to Euclidean regression, and annotations for SE(3) are particularly difficult to acquire. To address these challenges, MoSE3 predicts per-pixel SE(3) through two jointly learned intermediates, 3D point tracks and rigidity embeddings, and recovers SE(3) by differentiably fitting transforms within each soft rigid cluster, enabling end-to-end prediction and supervision. To close the data gap, we introduce Art-Kubric, a large-scale synthetic dataset with dense SE(3) and rigidity labels for articulated objects with rich physical interactions. MoSE3 achieves state-of-the-art SE(3) estimation at pixel, part, and object levels on both rigid and articulated benchmarks, and state-of-the-art average 3D point tracking accuracy across three datasets, while showing strong generalization to real-world videos despite being trained solely on synthetic motion data.",
    "published": "2026-10-02T17:58:52Z",
    "updated": "2026-10-02T17:58:52Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.03716"
  },
  {
    "id": "2610.03715",
    "title": "4DCodeBench: Benchmarking Agents on Inverse Graphics of Dynamic Scenes",
    "authors": [
      "Ruihong Shen",
      "Žiga Kovačič",
      "Peter Kulits",
      "Xingrui Wang",
      "Zizhang Li",
      "Joshua B. Tenenbaum",
      "Alan Yuille",
      "Jieneng Chen",
      "Jiajun Wu"
    ],
    "abstract": "We introduce 4DCodeBench, a benchmark for 4D inverse graphics through code generation, in which agents reconstruct dynamic scenes from video as executable graphics programs. To accomplish this, agents must translate visual observations into compact representations of scene structure and dynamics, by implementing abstractions such as physical simulations to reproduce complex behavior. To evaluate this capability, we curate a set of real-world videos and construct synthetic scenes spanning diverse physical phenomena, including deformation, fluid flow, and fracture. We perform extensive benchmarking of frontier models, finding that strong static reconstruction capabilities do not yet translate into reliable reconstruction of complex dynamics. 4DCodeBench provides a testbed for tracking progress toward agents that can interpret the dynamics of the world through code. Our benchmark is available at https://github.com/4DCodeBench/4DCodeBench",
    "published": "2026-10-02T17:58:49Z",
    "updated": "2026-10-02T17:58:49Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2610.03715"
  },
  {
    "id": "2610.03713",
    "title": "What Should World Models Forget? Stratified Retention for Continual Adaptation",
    "authors": [
      "Nishit Anand",
      "Ramani Duraiswami",
      "Dinesh Manocha"
    ],
    "abstract": "Continual learning treats degradation on previously seen data as evidence of failure, a convention inherited from settings with a stationary prediction target, where a correct label remains correct indefinitely. World models do not satisfy this condition. Their prediction target is the environment, which changes, so knowledge that was accurate when acquired may later become false, and discarding it is required behavior rather than a defect. Non-stationary ground truth is well studied in the concept drift literature and in the temporal factuality of language models, but has not been formulated for world models, which are distinctive in that they also encode knowledge that must never be revised. We argue that continual world models require retention stratified by invariance timescale, separating invariants such as physics and object permanence, which must never be revised, from instance-level facts that should be revised as soon as the environment changes. Standard forgetting metrics cannot distinguish a world model that has correctly revised outdated knowledge from one that has suffered catastrophic forgetting, and consequently rank a frozen model highest, while existing physical-reasoning benchmarks evaluate only frozen checkpoints. We propose differential retention, which reports invariant regression testing across the adaptation stream jointly with revision latency, without aggregation.",
    "published": "2026-10-02T17:58:14Z",
    "updated": "2026-10-02T17:58:14Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CV",
      "eess.IV",
      "eess.SP"
    ],
    "url": "https://arxiv.org/abs/2610.03713"
  },
  {
    "id": "2610.03710",
    "title": "EyeRobot 2.0: Active Gaze for Precise Manipulation without Wrist Cameras",
    "authors": [
      "Kush Hari",
      "Justin Kerr",
      "Nidhya Shivakumar",
      "Samarth Mahapatra",
      "Carmelo Sferrazza",
      "Jiahui Lei",
      "Jitendra Malik",
      "C. Karen Liu",
      "Ken Goldberg",
      "Angjoo Kanazawa"
    ],
    "abstract": "Inspired by human vision, we introduce a framework using active gaze to enable fine-grained bimanual manipulation with only a single stereo camera. EyeRobot 2.0 physically attends to a 3D fixation point in the scene by swiveling two eye viewpoints to center their gaze on it. The resulting images are processed foveally by allocating more visual tokens to the image centers, focusing computation on task-relevant features. Such Active Visual Fixation (AVF) requires carefully coordinated gaze during task execution, which we accomplish hierarchically by first training a low-level gaze servoing policy conditioned on a goal object, then training a target selector which emits fixation goals based on task progress. Both modules are trained with RL on real-world data: the first is trained with a dense geometric reward and the second co-trains with the BC gripper policy which allows it to discover fixation sequences that can resemble a human's fixation sequence while performing the task. EyeRobot 2.0 further takes advantage of fixation by canonicalizing gripper information into a fixation-relative SE(3) frame, which compacts the size of the action distribution to learn. We collect teleoperation data for 7 real-world and 6 simulated tasks, and conduct over 1000 physical and 1800 simulated robot trials comparing EyeRobot 2.0 against passive stereo and ego + wrist camera policies trained on the same data. Removing wrist cameras is costly for standard policies: with only passive stereo, real-world success drops from 52% to 27%. EyeRobot 2.0 closes this gap with only stereo, outperforming passive stereo by 40% in real and 20% in sim. It matches ego + wrist policies when their wrist views are clear (69% vs. 64%), and more than doubles their success when grasped objects occlude the wrist cameras (48% vs. 22%)",
    "published": "2026-10-02T17:57:51Z",
    "updated": "2026-10-02T17:57:51Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.03710"
  },
  {
    "id": "2610.03698",
    "title": "Decoding the Functional Roles of Register and High-Norm Patch Tokens in Vision Transformers",
    "authors": [
      "Neel Varma",
      "Andrew Rufail",
      "Dipika Khullar",
      "Vasu Sharma"
    ],
    "abstract": "Self-supervised Vision Transformers (ViTs), such as DINOv2, learn rich visual representations, but the functions of their internal tokens remain poorly understood. Recent architectures introduce dedicated register tokens to reduce high-norm out- lier patch tokens that emerge in background re- gions, yet the semantic and functional roles of both token types have not been fully established. In this paper, we analyze these roles by training sparse autoencoders (SAEs) on register-token and outlier-token activations in DINOv2. Using an automated interpretability pipeline, UMAP clus- tering, and CLIP-space cross-checks, we find that register-token features are more strongly associ- ated with high-level semantic concepts. Outlier- token features, by contrast, are more often associ- ated with lower-level structural, background, and texture-dominant patterns. Causal ablations fur- ther reveal a substantial functional asymmetry: disrupting top-activating register-derived features produces a 48.17% drop in representation cosine similarity, whereas disrupting outlier-derived fea- tures produces only a 0.31% drop. Together, our results provide evidence for token specialization in self-supervised ViTs.",
    "published": "2026-10-02T17:55:06Z",
    "updated": "2026-10-02T17:55:06Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.03698"
  },
  {
    "id": "2610.03693",
    "title": "Transcriptome-informed multi-modal AI for predicting neoadjuvant therapy response from breast cancer biopsies",
    "authors": [
      "Jungkyu Park",
      "Dhruva Biswas",
      "Joseph Cappadona",
      "Cerise Tang",
      "Ken G. Zeng",
      "Bartosz Machura",
      "Chuwen Liu",
      "Paolo Tarantino",
      "Coral Omene",
      "Francisco J. Esteva",
      "Rohit Bhargava",
      "Marcin Braun",
      "Kamila Paździerz",
      "Jakub Czerwiński",
      "Hanna Romańska-Knight",
      "Albert Grinshpun",
      "Bareket Daniel",
      "Michele Buchinger",
      "Frederick Howard",
      "Piotr Wysocki",
      "Brie Chun",
      "Freya Schnabel",
      "Rich Caruana",
      "Jan Witowski",
      "Krzysztof J. Geras"
    ],
    "abstract": "Scarcity of labeled data limits development of deep learning biomarkers in oncology. We develop a two-stage AI model predicting pathological complete response (pCR) to neoadjuvant therapy in breast cancer. The first stage learns the transcriptome from histopathology using 8,742 patients across 32 cancer types, corroborated by pathologist review and spatial agreement with measured expression. This simplifies the second stage to predicting pCR from inferred expression and clinical variables. Developed using 1,080 patients (five cohorts) and evaluated in 1,412 patients (nine cohorts), the model achieves a pooled AUROC of 0.79 (95% CI, 0.73-0.85), discriminating responders within molecular subtypes. It outperforms histopathological biomarkers, remaining stable across intratumoral sampling and with minimal biopsy tissue. Ablations show transcriptome-wide inference improves discrimination over clinical variables alone or one-stage pathology models, and robustness by avoiding genomic assays' gene selection constraints. These results indicate that biologically informed compression may generalize to data-sparse applications in precision oncology.",
    "published": "2026-10-02T17:52:57Z",
    "updated": "2026-10-02T17:52:57Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.03693"
  },
  {
    "id": "2610.03691",
    "title": "FlowHMR: Physically Plausible Motion Capture from Video",
    "authors": [
      "Zhanke Wang",
      "Chengfeng Zhao",
      "Qing Shuai",
      "Jingzhong Lin",
      "Heng Li",
      "Zeyu Ling",
      "Yuxin Wen",
      "Jing Li",
      "Di Kang",
      "Chunchao Guo",
      "Linchao Bao"
    ],
    "abstract": "We present FlowHMR, a framework for recovering physically plausible global 3D human motion from monocular video. Previous learning-based methods typically regress human motion directly from video and train the network with geometric supervision. However, recovering human motion from monocular video is inherently ambiguous in depth, and direct regression tends to collapse toward an averaged solution. Moreover, the recovered motions are not guaranteed to be physically plausible, so physics-based tracking of them often fails. To address these challenges, we formulate video motion capture as a video-conditioned motion generation problem and first pretrain a flow matching model for this task. Given an input video, the pretrained model generates diverse motion candidates, but not all of them are faithful to the video or physically trackable. We therefore post-train the model using Group Relative Policy Optimization (GRPO) with two rewards. A fidelity reward encourages consistency with the input video. A tracking reward favors motions that a physics-based controller can track successfully. Together, these rewards shift the model's output preference, so the post-trained model stays faithful to the input video while producing more physically plausible motion. We further introduce Wild-4K, a large and diverse dataset of about 4K internet videos, for evaluating human motion recovery in the wild. Qualitative and quantitative experiments on Wild-4K show that our method outperforms state-of-the-art methods in overall motion fidelity and achieves a physical tracking success rate of 82.47%, compared with 62.82% for the strongest baseline, GVHMR.",
    "published": "2026-10-02T17:52:48Z",
    "updated": "2026-10-02T17:52:48Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.03691"
  },
  {
    "id": "2610.03689",
    "title": "SigLIP2 for aerial fire risk classification",
    "authors": [
      "Yunus Serhat Bıçakçı"
    ],
    "abstract": "We examine the transfer of a pretrained SigLIP2 image encoder to seven class fire risk classification from aerial imagery. We introduce a reproducible partition of the public FireRisk training mirror and an implementation that records data provenance, preprocessing and model selection. Two initial runs compare a frozen encoder probe with full model adaptation. On the validation partition, full adaptation reaches 63.05% accuracy and 58.94% macro F1, compared with 55.95% and 50.19% for the probe. Both runs use one training seed and select their checkpoint on the same validation partition. These development results support further evaluation of SigLIP2 but do not establish performance on an independent test set or unseen regions. The accompanying code provides a common framework for repeated experiments and comparisons with additional visual encoders.",
    "published": "2026-10-02T17:52:34Z",
    "updated": "2026-10-02T17:52:34Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.03689"
  },
  {
    "id": "2610.03675",
    "title": "FrugalEvo: Towards Cost-Aware LLM-Guided Program Evolution",
    "authors": [
      "Hui Chen",
      "Xuan Qi",
      "James Xu Zhao",
      "Zhaopeng Feng",
      "Shilong Liu",
      "Kuang Xu",
      "Pang Wei Koh",
      "Bryan Hooi"
    ],
    "abstract": "LLM-guided evolutionary methods, such as AlphaEvolve, have emerged as powerful approaches for challenging computational optimization problems, such as circle packing. However, prior work typically optimizes performance gain over a fixed number of iterations. We argue that practical optimization should maximize gain per unit cost. To this end, we propose FrugalEvo, a cost-aware evolutionary framework where a stronger, higher-cost LLM explores solution strategies, and a cheaper LLM implements them and iteratively refines the resulting code. We also design a cache-efficient evolution process, where our harness and prompts maximize the sharing of prefixes across different evolution steps, to improve cache reuse. To measure solution quality throughout a fixed cost budget, we introduce Budget-Aware Area Under the Curve (BA-AUC), defined as the area under the best-so-far evaluation score curve over cumulative LLM cost, up to the budget. Across 10 mathematical and systems optimization tasks, FrugalEvo matches or surpasses state-of-the-art baselines, including OpenEvolve, ShinkaEvolve, AdaEvolve, and EvoX, in final solution quality and achieves higher BA-AUC on 9 tasks. It also achieves higher average performance than these baselines on 10 algorithmic optimization tasks from ALE-Bench-Lite. Notably, on circle packing, FrugalEvo achieves new state-of-the-art performance with GPT-5.6 Terra and Luna for only 1.68 USD and with GLM-5.3 and its Flash variant for only 0.55 USD, matching or surpassing all baselines, including multi-agent methods such as CORAL and SwarmResearch, which cost approximately 50 USD on average.",
    "published": "2026-10-02T17:44:05Z",
    "updated": "2026-10-02T17:44:05Z",
    "categories": [
      "cs.NE",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.03675"
  },
  {
    "id": "2610.03664",
    "title": "ProAR: Learning Prospective Reasoning with Autoregressive Video Models",
    "authors": [
      "Linghui Shen",
      "Tinghui Zhu",
      "Sheng Zhang",
      "Muhao Chen"
    ],
    "abstract": "Autoregressive (AR) video models excel at causal generation, but their reliance on next-chunk prediction confines them to a short-sighted, reactive paradigm. This limitation is particularly consequential for reasoning-oriented generation, where achieving a target outcome through valid intermediate states matters more than local visual plausibility. To address this challenge, we propose Learning Prospective Reasoning with Autoregressive Video Models (ProAR), a novel framework that transforms autoregressive video generation into a goal-oriented reasoning process. ProAR introduces two key components: (1) To anchor generation to the long-range outcome, we integrate goal-frame prediction into the autoregressive loop via an asymmetric attention mask, enabling the predicted goal frame to guide the generation of intermediate states without being disrupted by them. (2) To guide short-range transitions, we introduce future representation self-alignment to encourage current hidden states to anticipate upcoming temporal dynamics. By leveraging teacher-forcing in AR training, we extract clean future representations in a single forward pass and align current representations with them using a lightweight, training-only predictor. Together, these two mechanisms seamlessly combine explicit, sparse target supervision with implicit, dense step-wise guidance, promoting coherent, goal-directed reasoning progress with modest computational cost. Experiments show that ProAR's complementary components consistently improve performance across diverse visual reasoning benchmarks. The framework proves highly training-efficient, surpassing fully trained standard AR baselines using only 25% of the training steps. This paradigm also demonstrates promising applicability to embodied reasoning tasks.",
    "published": "2026-10-02T17:37:47Z",
    "updated": "2026-10-02T17:37:47Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.03664"
  },
  {
    "id": "2610.03656",
    "title": "Revisiting Input Time-frequency Representations in Multi-pitch Estimation for Vocal Ensembles",
    "authors": [
      "Junyoung Koh",
      "Hao-Wen Dong"
    ],
    "abstract": "Multi-pitch estimation in vocal ensembles is challenging because singers occupy overlapping pitch ranges and often sing at closely spaced fundamental frequencies, causing their harmonics to overlap in time-frequency representations. Existing models commonly use harmonic constant-Q transform (HCQT)-based representations to provide frequency-adaptive resolution, at the cost of expensive feature extraction when training mixtures are generated on the fly. We revisit this design and compare HCQT with a linear short-time Fourier transform (STFT), whose frequency bins are directly provided as model inputs. Despite its fixed frequency resolution and the absence of a pitch-aligned input grid, the linear STFT outperforms HCQT while substantially reducing feature-extraction cost. Further analysis shows that a longer analysis window or broader spectral coverage provides no additional improvement, while restricting the input to the predicted pitch range reduces the advantage of the linear STFT. These results suggest that finer frequency resolution does not necessarily improve vocal-ensemble MPE, and that shorter analysis windows can be more effective for time-varying vocal pitches.",
    "published": "2026-10-02T17:35:06Z",
    "updated": "2026-10-02T17:35:06Z",
    "categories": [
      "cs.SD",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.03656"
  },
  {
    "id": "2610.02510",
    "title": "On-Premises Multi-Course RAG Tutoring for Business Education: Hardware-Software Trade-offs in a Campus AI Tutor",
    "authors": [
      "Sidney Shapiro",
      "Joshua Lindemann"
    ],
    "abstract": "Campus AI tutors based on retrieval-augmented generation (RAG) must ground answers in assigned course materials while keeping textbooks and student dialogue on institutional infrastructure. We present CourseChat, an on-premises, multi-course RAG tutor for undergraduate business education, deployed behind a campus web gateway and intended for use embedded in Moodle. Six isolated course offerings, each keyed by its own course reference number (CRN), share twin-edge AI hosts running a FastAPI service, a local vector database, and a local large language model (LLM) served by Ollama. We report two generation-model bake-off rounds, a separate fixed-evidence source-fidelity comparison, and conversation and quiz audits. Several larger models failed the classroom speed gate, but a 12B model and a 7B alternative passed. A separate mixture-of-experts candidate improved some corrections while introducing new factual and continuity errors. We therefore retain the 8B production model pending a demonstrated overall improvement, rather than claiming that 8B is universally optimal. Software changes improved follow-up topic resolution while preserving course scope; 435 prebuilt questions across 65 modules decouple practice from live generation. The results support treating model choice, evidence selection, serving compatibility, and product design as a joint engineering decision. They do not establish learning gains: faculty ratings, peak-load capacity, and complete public-gateway acceptance remain separate evaluation needs.",
    "published": "2026-10-01T21:33:46Z",
    "updated": "2026-10-01T21:33:46Z",
    "categories": [
      "cs.AI",
      "cs.IR"
    ],
    "url": "https://arxiv.org/abs/2610.02510"
  },
  {
    "id": "2610.02508",
    "title": "World Action Modeling with Progressive Visual Planning",
    "authors": [
      "Fei Zhang",
      "Zhaochong An",
      "Duncan Frost",
      "Yikai Wang",
      "Pengfei Liu",
      "Ya Zhang",
      "Michal Drozdzal",
      "Amir Bar"
    ],
    "abstract": "World action models (WAMs) have emerged as a promising paradigm for robotic control by jointly predicting future visual dynamics and actions from an initial observation and instruction. However, existing WAMs struggle with long-horizon prediction, as generating dense video rollouts is highly inefficient. Some recent WAMs address this by predicting a single future frame without generating the full video, but this approach neglects how to progress toward the goal. We present ProWAM, a progressive world action model that jointly predicts actions and an ordered sequence of sparse visual sub-goals, providing explicit visual guidance to anchor action generation throughout task execution. This design scales naturally, as sub-goal prediction can be learned from large-scale action-free videos, allowing the video backbone to offload complex visual planning from the action policy. For efficient action generation, ProWAM executes a single video-backbone forward pass to cache sparse sub-goal features, eliminating iterative full-video generation and requiring only lightweight action denoising during replanning. Across extensive evaluations, ProWAM achieves superior out-of-distribution robustness. On simulation benchmarks, it sets new state-of-the-art results on LIBERO-Plus (85.8%) and randomized RoboTwin (75.7%), outperforming the strongest baseline with relative gains of up to +35.9%. On RoboCasa365, ProWAM achieves a 48.1% success rate and 18.2% on the challenging Composite-Unseen split, ranking 4th overall. Crucially, in zero-shot real-world experiments, ProWAM achieves 70.0% success, outperforming the strongest baseline by +15.0 (from 55.0% to 70.0%, a +27.3% relative gain) in novel scenes. These results demonstrate the value of progress-indexed visual foresight for closed-loop control. Our program is in https://sii-ferenas.github.io/ProWAM-page.",
    "published": "2026-10-01T21:32:29Z",
    "updated": "2026-10-01T21:32:29Z",
    "categories": [
      "cs.AI",
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.02508"
  },
  {
    "id": "2610.02507",
    "title": "MeshQuery: Agentic Seam Planning for UV Parametrization",
    "authors": [
      "Marco Schouten",
      "Arthur Roullier",
      "Elie Michel",
      "Ruben Wiersma",
      "Axel Paris",
      "Tamy Boubekeur"
    ],
    "abstract": "We present MeshQuery, a training-free agentic approach to automatic UV unwrapping of production-grade quad meshes. A Vision-Language Model (VLM) plans artist-aligned seams using a set of edge-selection tools, conditioned on domain-specific UV-unwrapping knowledge expressed in natural language and refined with a feedback loop. We design a queryable mesh representation together with a domain-specific language (DSL) that enables the agent to retrieve mesh information on demand, express a seam plan as a compact program of edge-selection operators over topological, geometric, and semantic mesh attributes, and iteratively refine it from UV quality feedback. On Adobe Substance 3D and Toys4K meshes, MeshQuery produces 2.9x/4.29x fewer charts and 1.63x/1.7x shorter seams than the strongest baseline, and professional artists prefer its results in 80.9% of comparisons. Ultimately, decoupling high-level intent planning from low-level edge selection and compact mesh representation lets MeshQuery run on different backend VLMs and scale to meshes an order of magnitude larger than autoregressive seam prediction",
    "published": "2026-10-01T21:30:36Z",
    "updated": "2026-10-01T21:30:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.02507"
  },
  {
    "id": "2610.02505",
    "title": "Multi-Fidelity Policy Gradients Stabilize Data-Scarce Reinforcement Learning",
    "authors": [
      "Xinjie Liu",
      "Ruihan Zhao",
      "Anirban Chaudhuri",
      "Cyrus Neary",
      "Ufuk Topcu",
      "David Fridovich-Keil"
    ],
    "abstract": "Policy gradient methods for on-policy reinforcement learning (RL) can become unstable when expensive, scarce target-domain data yield noisy gradient estimates. We address this challenge by complementing limited high-fidelity (HF) target-domain data with abundant, cheap, but biased low-fidelity (LF) data, e.g., from a simplified simulator. Most existing methods directly optimize biased objectives based on LF data. In contrast, the recently introduced multi-fidelity policy gradient (MFPG) framework uses LF data solely to construct a control variate that reduces variance and improves HF data efficiency without biasing the policy gradient estimator. However, published work on MFPG is limited to REINFORCE on small-scale simulation tasks. We develop MFPG for modern actor-critic learning in GPU-parallel simulation and on a physical robot. Our analysis and experiments show that naive extensions to proximal policy optimization (PPO) can lose cross-fidelity correlation or inflate variance. Our MFPG-PPO addresses these failures by redesigning the sampling, advantage estimation, and control variate construction to preserve cross-fidelity correlation, and by monitoring estimator uncertainty to prevent variance inflation. We also introduce a budget-aware MFPG-PPO to divide a fixed sampling budget among high- and low-fidelity data sources. Across simulated robot locomotion tasks of varying LF-to-HF transfer difficulty and HF data budgets, MFPG-PPO improves upon PPO trained on HF data alone in nearly all settings, and consistently matches the performance of PPO trained with 16x more HF data on the hardest task at the smallest HF budgets. In contrast, most baselines that use LF data perform well only where direct LF-to-HF transfer succeeds. MFPG-PPO enables stable learning on a physical Franka arm using only 4 real-robot episodes per update and no human demonstrations.",
    "published": "2026-10-01T21:27:02Z",
    "updated": "2026-10-01T21:27:02Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.02505"
  },
  {
    "id": "2610.02504",
    "title": "HXAI: Hierarchical Privacy-Preserving Explainable AI in Distributed Energy Systems",
    "authors": [
      "Poushali Sengupta",
      "Sabita Maharjan",
      "Frank Eliassen",
      "Yan Zhang"
    ],
    "abstract": "Balancing electricity demand and supply is increasingly difficult due to the inherent intermittency of renewable power generation and the stochastic power consumption. Grid operators require fine-grained, decision-relevant insights into household energy consumption to manage peak loads and design responsive tariffs, but increased transparency at this level raises significant privacy concerns. Traditional methods for explainable AI (XAI) can reveal sensitive information, while standard privacy techniques often reduce the usefulness of explanations. To address this issue, we introduce HXAI, a hierarchical framework that preserves privacy while enabling reasonable explainable analysis for grid-level demand management. HXAI consists of two main components: (1) a local model that generates fine-grained explanations within a secure, private environment, and (2) a zonal model that aggregates these explanations to support grid-level analysis while enforcing privacy through flexible privacy-budget management. We explicitly limit cumulative privacy exposure under repeated operator queries and show that the proposed framework preserves decision-relevant information without compromising household privacy. Experiments on both simulated and real-world energy datasets demonstrate that HXAI provides useful insights for zonal load management while ensuring that appliance-level consumption remains local and is never transmitted to grid operators. Our results show that preserving the semantic structure of explanations, rather than minimizing numerical error, is the key to XAI under differential privacy. This framework provides a way to achieve both privacy and explainability in energy management.",
    "published": "2026-10-01T21:26:35Z",
    "updated": "2026-10-01T21:26:35Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.02504"
  },
  {
    "id": "2610.02503",
    "title": "Compound AI System Reliability: A Failure Taxonomy and Resilience Pattern Catalog from 150 Production Incidents",
    "authors": [
      "Rudrendu Kumar Paul",
      "Sourav Nandy"
    ],
    "abstract": "Deploying compound AI systems reliably and safely requires understanding failure modes that emerge at component boundaries, not within individual models. Cascading errors propagate across component boundaries, silent quality degradation evades standard monitoring, and coordination failures yield incorrect collective behavior from individually correct parts. We analyze 150 production incident reports from open-source compound AI projects and anonymized enterprise deployments to construct a taxonomy of 23 failure modes organized into five categories: retrieval failures, generation failures, tool failures, orchestration failures, and integration failures. For each category, we propose resilience patterns with measured effectiveness from controlled fault injection experiments. Circuit breakers reduce cascade propagation by 89%, output quality gates catch 73% of silent degradation before user impact, and component isolation reduces blast radius by 64%. Systems implementing three or more resilience patterns from our catalog reduce mean-time-to-recovery (MTTR) by 71% compared to unstructured monitoring baselines. We release the incident taxonomy and pattern catalog as a practitioner resource.",
    "published": "2026-10-01T21:25:25Z",
    "updated": "2026-10-01T21:25:25Z",
    "categories": [
      "cs.SE",
      "cs.AI",
      "cs.DC",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.02503"
  },
  {
    "id": "2610.02496",
    "title": "\"I just assumed that it would translate\": examining MT risk awareness among healthcare staff with abbreviations as a use case",
    "authors": [
      "Eleanor Taylor-Stilgoe",
      "Félix do Carmo",
      "Constantin Orăsan"
    ],
    "abstract": "In the UK, public healthcare staff report turning to machine translation (MT) - predominantly Google Translate (GT) - to communicate with patients across language barriers. Though intended to support their duty of care, potentially uninformed reliance on MT in such contexts could have serious consequences for patient safety. Research nonetheless remains limited on staff awareness of the possible risks posed by higher-stakes MT use in general and with patient medical records in particular, most existing literature instead examining its use in interpersonal situations or with patient-oriented documentation. Moreover, medical abbreviations are well-documented as increasing patient risk even monolingually, with outcomes from their misuse and/or misinterpretation ranging from temporary harm to the death of the patient. Abbreviations were therefore selected as a use case for identifying the potential risks posed by their translation with MT. Contextualised French and Spanish data examples drawn from authoritative clinical corpora and translated via GT were presented during semi-structured interviews to 21 healthcare staff participants in diverse roles and specialties. The results were then subject to qualitative analysis and cross-analysis.",
    "published": "2026-10-01T21:18:43Z",
    "updated": "2026-10-01T21:18:43Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.02496"
  },
  {
    "id": "2610.02494",
    "title": "DeepStratNet: A Context-Aware Coordinate Regression Framework for Seismic Horizon Tracking under Sparse Labels",
    "authors": [
      "Aniq Ahmad",
      "Musham Ahmad Malik",
      "Ahmad Mustafa",
      "Heather Bedle"
    ],
    "abstract": "Automatic horizon tracking is a foundational task in 3D seismic interpretation. Most existing deep learning approaches formulate it as dense semantic segmentation, typically using U-Net-based architectures. The model produces a probability map over all pixels that must be post-processed to extract precise horizon coordinates, while horizon picks in time/depth must be converted into dense masks for training. Unpicked seismic traces are consequently treated as background, which can hinder convergence, and both pre- and post-processing can introduce errors into the final interpretation. Moreover, 2D segmentation models do not inherently capture inter-slice context, while 3D models are often computationally prohibitive. We instead formulate horizon tracking as a bounded coordinate regression problem, where the model directly predicts the time/depth coordinate of the target horizon at each lateral position. We propose a lightweight regression head compatible with any pretrained vision backbone, coupled with an LSTM module to model inter-slice context and produce a continuous horizon surface across the volume. A combination of L1 and L2 losses supervises predictions at valid horizon picks, while a geology-informed regularization enforces lateral continuity between successive traces. Under controlled experimental conditions, we evaluate four pretrained vision backbones under both segmentation and regression configurations on a seismic volume from New Zealand. The proposed approach consistently outperforms its segmentation counterparts quantitatively, using metrics including RMSE and PCC, and qualitatively, while also demonstrating greater robustness to increasing sparsity of training picks. Finally, we show that prediction variation across successive traces captures local variations in geological complexity, providing an automated quality control measure for downstream seismic interpretation.",
    "published": "2026-10-01T21:16:43Z",
    "updated": "2026-10-01T21:16:43Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.02494"
  },
  {
    "id": "2610.02492",
    "title": "Right Order, Wrong Scale: Auditing LLM Judges for Occupational AI Measurement",
    "authors": [
      "Harry Lyu",
      "Neil Thompson"
    ],
    "abstract": "LLM judges are increasingly used to assess whether AI outputs meet workplace requirements, but agreement on response rankings does not establish agreement on acceptance rates or occupational aggregates. We introduce O*NET-BENCH, an audit suite derived from an existing survey of 45,796 worker ratings, and evaluate 33 pre-existing judge configurations across six model families on 4,501 test ratings. Twenty-five configurations achieve tie-aware pair accuracy of at least 0.60, although a train-fitted response-only TF-IDF baseline nearly matches the strongest judge. Despite this ordering agreement, judges estimate that 3.0%-97.9% of responses are acceptable, compared with 61.1% for occupation-matched workers. In one fine-tuned lineage, changing from pointwise scoring to a bundled few-shot/listwise protocol improves response ordering while reducing agreement with worker means at the task and occupation levels; this reversal replicates on a task- and worker-disjoint validation split under prespecified criteria. Cross-validated calibration largely removes mean bias, but calibrated scores explain at most 8.5% of individual worker-rating variance. Prediction-assisted estimation yields at most small precision gains at the studied label budgets. These results show that ranking agreement alone is insufficient for occupational measurement. Judges should be validated against the acceptance rates and aggregates their scores will be used to estimate.",
    "published": "2026-10-01T21:14:49Z",
    "updated": "2026-10-01T21:14:49Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.CY",
      "cs.LG",
      "econ.GN"
    ],
    "url": "https://arxiv.org/abs/2610.02492"
  },
  {
    "id": "2610.02491",
    "title": "What Does a Token Cost? A Mixture-of-Agents Measurement of Sufficient Per-Token Compute",
    "authors": [
      "Zhixu Du",
      "Weijia Han",
      "Hai Helen Li",
      "Yiran Chen"
    ],
    "abstract": "Large language models spend the same amount of computation on every token they generate, regardless of how difficult each token is to produce. Methods such as speculative decoding and model routing are built on the premise that much of this computation is unnecessary, yet the computation an individual token actually requires has not been measured. We measure it through a Mixture-of-Agents (MoA) lens: a panel of fifteen language models of increasing capacity, drawn from three families, in which every agent attempts to reproduce a reference sequence token by token, conditioned on the correct preceding tokens. We define the inference cost of the smallest agent that succeeds as the token's sufficient compute, which upper-bounds what the token requires. On three core benchmarks, a 0.5B agent reproduces 92--95\\% of reference tokens. Across Qwen, OLMo, and R1-distilled panels, the most expensive 10\\% account for 64--80\\% of estimated FLOPs. On all 500 MATH-500 problems, the MoA-derived map helps model routing reduce projected latency from 7.59 to 5.12 seconds while slightly improving accuracy, relative to the best confidence-routing baseline. The MoA-map helps drafting use 32.6\\% fewer draft tokens and approximately 20\\% lower projected latency than fixed-window drafting at similar accuracy. These comparisons reveal remaining allocation headroom, motivating controllers that exploit sufficient-compute structure.",
    "published": "2026-10-01T21:11:41Z",
    "updated": "2026-10-01T21:11:41Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.02491"
  },
  {
    "id": "2610.02486",
    "title": "From Retrieval to Typed Decisions: Calibrated System One Models from Biomedical Sentence Encoders",
    "authors": [
      "Pritam Deka"
    ],
    "abstract": "Typed decision models answer schema-constrained questions about a text in one forward pass and return probabilities meant to be thresholded. We ask whether biomedical sentence encoders trained for retrieval are good starting points for such models. We present SBERT2S1, which converts Sentence-Transformers encoders into bi-encoder, cross-head (C) and prior-fused residual (PFR) decision models, together with BIODECIDE, a biomedical typed-decision suite, and MEDLINE-S1, 243k training decisions derived from NLM indexing. Across six parent-retriever pairs, retrieval training improves zero-shot matching of content-bearing options. After fine-tuning, its effect depends on the head: across five pairs and three training-set sizes, retrieval training significantly helps PFR, which keeps the retrieval prior, in 10 of 15 comparisons, but helps C in one and hurts it in five. A matched grid of two heads and five training objectives shows that C outperforms PFR under every objective, and that the released RLCD recipe of open System One models trails cross-entropy by 2.5-3.0 points. The deficit stems mainly from its reward normalisation, which inflates the noisy score-function term 3.6-15-fold; an unbiased leave-one-out estimator recovers most of the gap. After temperature scaling, no objective is clearly better calibrated than cross-entropy. We release the code, the MEDLINE-S1 labels and a model.",
    "published": "2026-10-01T21:03:42Z",
    "updated": "2026-10-01T21:03:42Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.02486"
  },
  {
    "id": "2610.02480",
    "title": "MEA: A Reward-Driven Multi-Agent System for Faithful Model Explanations",
    "authors": [
      "Yuyang Cheng",
      "Raghav Kaushik Ravi",
      "Srivarshinee Sridhar",
      "Sriparna Saha",
      "Akash Ghosh",
      "Chirag Agarwal"
    ],
    "abstract": "Recent years have seen the employment of a plethora of machine learning (ML) models in high-stakes domains, but they remain largely opaque to the practitioners who act on their predictions. While post-hoc explanation methods offer a lens into this model behavior, wielding them effectively demands expertise most domain experts lack: navigating high-dimensional outputs, selecting the best explanations, and synthesizing evidence across disparate tools. To this end, we present MEA, a multi-agent framework that removes the explanation knowledge barrier entirely: a Proposer agent selects and configures explanation tools based on the question and modality, while an Actor agent is optimized end-to-end against faithfulness, transforming the outputs into natural language explanations grounded in model behavior across tabular, text, and vision modalities. Further, we introduce diverse question types spanning feature attribution, counterfactual reasoning, and spurious feature detection, each paired with a perturbation-based faithfulness metric. We find that frontier LLMs systematically produce unfaithful explanations. By optimizing against faithfulness rewards augmented with a modality-adaptive penalty, MEA consistently outperforms post hoc explainers, agentic, and closed-source baselines across six datasets, with reward-driven optimization yielding faithfulness gains of +28% (tabular), +21% (text), and +34% (vision) over the untrained backbone. More broadly, our findings suggest that AI agents themselves can serve as a scalable, adaptable interface to ML explainability, opening a path toward natural-language explainability that generalizes beyond the fixed, single-purpose tools that have long defined the field.",
    "published": "2026-10-01T20:57:29Z",
    "updated": "2026-10-01T20:57:29Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.02480"
  },
  {
    "id": "2610.01233",
    "title": "Flow Matching Reinforcement for 3D Mesh Generation via Dynamic Homing Optimization",
    "authors": [
      "Zhen Zhou",
      "Zhiwei Ning",
      "Puhua Jiang",
      "Sheng Zhang",
      "Yifei Tang",
      "Jie Yang",
      "Xintong Han",
      "Wei Liu",
      "Chunchao Guo"
    ],
    "abstract": "Flow matching is central to 3D generation, yet in practice its reinforcement learning (RL) methods are largely adapted from 2D visual generation. Representative DPO-, GRPO-, and NFT-style objectives, when applied to negative trajectories, mainly steer predicted velocities away from the corresponding directions without explicitly specifying a target velocity field toward preferred samples. In 3D generation, constrained by pretrained model capabilities, rollout diversity, and reward-distribution complexity, directly applying these RL methods yields limited gains in geometric quality. We introduce a forward-process RL method \\textbf{Dynamic Homing Optimization (DHO)}, which reformulates negative-trajectory optimization as positive-sample attraction-guided dynamic homing. Specifically, Minimum-Cost Attractive Matching (MAM) assigns each negative sample a distinct positive target, and Time-Aware Dynamic Correction (TDC) then redirects its trajectory toward the target using a remaining-time-aware corrective velocity. Building on asynchronous online DHO, we develop \\textbf{Flow3D-Pro}, an image-to-3D geometry generation framework. Experiments show that DHO outperforms representative DPO-, GRPO-, and NFT-style objectives in 3D generation, while Flow3D-Pro produces higher-quality 3D geometry than existing mesh generation methods.",
    "published": "2026-10-01T07:35:03Z",
    "updated": "2026-10-01T07:35:03Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.01233"
  },
  {
    "id": "2610.01231",
    "title": "Judgement in the Age of Jev: From Evaluation Scarcity to Evaluation Abundance",
    "authors": [
      "Richard Hill"
    ],
    "abstract": "Generative artificial intelligence has reduced the cost of producing plausible symbolic artefacts, leading recent organisation scholarship to identify evaluation and discernment as constraints under conditions of production abundance. This perspective examines a further possibility: that machine evaluation itself becomes inexpensive enough to be deployed routinely and at scale. The investigation is prompted by Jev, TypeSafe AI's specialised model for typed probabilistic decisions. TypeSafe explicitly invokes William Stanley Jevons to argue that lower-cost machine intelligence can unlock previously uneconomic uses. Treating this as a technological provocation rather than an established empirical result, the article formulates a conditional Jevons hypothesis for machine evaluation: sufficiently large reductions in the total marginal cost of usable machine evaluation may increase its organisational consumption where latent demand is substantial and complementary costs do not dominate. The article integrates rebound economics with research on cheap prediction, production abundance, machine evaluation, decision allocation, authority, reliance and Executive Judgement to examine this possible scarcity transition. It distinguishes prediction, machine evaluation, organisational judgement and authorisation as functional activities whose costs need not fall together. Evaluations can share evidence, criteria and errors; scale mis-specified rubrics; operate on representations from which consequential qualifications have disappeared; and change practical decision rights through thresholds and exception routing. The resulting research problem is when cheap machine evaluation substitutes for human evaluative work, when it redistributes or creates demands for judgement, and how it affects the grounds available at consequential organisational commitment.",
    "published": "2026-10-01T07:31:52Z",
    "updated": "2026-10-01T07:31:52Z",
    "categories": [
      "cs.CY",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.01231"
  },
  {
    "id": "2610.01230",
    "title": "HHR: Hierarchical Hash Retrieval for Efficient LLM Generation",
    "authors": [
      "Lianjun Liu",
      "Tiantian Zheng",
      "You Huang",
      "Weiqi Yan",
      "Mingte Qiu",
      "Huazhong Liu",
      "Xiaofeng Zhu",
      "Yunshan Zhong"
    ],
    "abstract": "Efficient long-context inference is essential for large language models (LLMs), yet it poses a severe computational bottleneck. Hash-based retrieval offers an efficient alternative by encoding queries and keys into binary codes and using Hamming distance for key selection. However, this leads to a critical mismatch between Hamming distance and attention relevance. Query-Key logits depend jointly on directional similarity and feature magnitudes, whereas hash binarization discards magnitude information, causing both false-positive retrieval of low-logit keys and false-negative omission of high-logit keys. To address these failures, we propose Hierarchical Hash Retrieval (HHR), a coarse-to-fine framework that progressively improves retrieval accuracy through Geometry-Aware Key Routing (GKR) and Learned Hash Projection (LHP). GKR learns a head-wise orthogonal transformation to redistribute feature magnitudes and derive more discriminative page-level logit bounds, enabling effective pruning of low-logit keys while preserving important candidates. LHP then learns a head-wise projection space that aligns Hamming distance with the true Query-Key relevance ranking for fine-grained retrieval. By combining GKR and LHP, HHR suppresses false positives and recovers false negatives, substantially improving the fidelity of hash-based sparse attention. Extensive experiments across diverse LLMs and benchmarks demonstrate that HHR achieves superior performance over existing methods. For example, on LongBench, HHR improves the average score by 1.10 points and, at a context length of 128K, achieves up to a 3.30x decoding speedup and a 2.83x end-to-end speedup for Llama-3.1-8B-Instruct. The code is publicly available at https://github.com/lianjunl13-sudo/HHR.",
    "published": "2026-10-01T07:31:44Z",
    "updated": "2026-10-01T07:31:44Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.01230"
  },
  {
    "id": "2610.01229",
    "title": "A Compact Explicit 4D Representation for Dynamic Scenes",
    "authors": [
      "Di Yang",
      "Zhihao Li",
      "Yanhai Xiong",
      "Yufei Wang"
    ],
    "abstract": "A compact dynamic-scene representation must retain both the surfaces seen over time and the appearance needed to render them from new viewpoints. We present Sparc4D, a feed-forward autoencoder that encodes a monocular video with known cameras into a sparse 4D scene state. Static features are shared across the clip, while spatially anchored temporal slots compress time-varying features. A sparse decoder produces 2D Gaussian surfels, while stored source pixels preserve fine texture through geometric re-projection. The state includes one full source frame and dynamic-region pixels sampled every fourth frame, alongside learned features and sparse occupancy. For a 32-frame MultiCamVideo clip, it averages 0.95M 32-bit-equivalent values on random windows and 0.92M on the first-32 protocol. On first-32, Sparc4D reaches 21.70\\,dB, compared with 20.40\\,dB for MoVieS. On randomly placed windows, their PSNR scores are comparable. With stored texture disabled, temporal slots compress the time-varying feature state by a median $4.0\\times$ and reduce the mean state from 1.04M to 0.42M values, with essentially unchanged target-view reconstruction quality. Without fine-tuning on real data, Sparc4D transfers to DyCheck and Neu3D, where stored texture improves LPIPS while slightly reducing PSNR.",
    "published": "2026-10-01T07:31:31Z",
    "updated": "2026-10-01T07:31:31Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.01229"
  },
  {
    "id": "2610.01223",
    "title": "Have an LLM Write Your Anomaly Detector: Autonomous Discovery of Compact, Interpretable Detectors for Time Series",
    "authors": [
      "David Berghaus"
    ],
    "abstract": "Time-series anomaly detection trades off predictive accuracy, computational efficiency, and interpretability. We use a large language model not as the detector but as the author of one: an autonomous research loop in which the model repeatedly edits a single short NumPy program under a leakage-free objective, keeping the best-scoring detector it finds. The loop discovers two compact detectors, one for univariate and one for multivariate series, that describe short windows by their local spectral features and compare them with the training-region distribution through a covariance-aware distance. On the TSB-AD benchmark these detectors lead the field across metrics, ahead of the strongest classical, deep, and foundation-model baselines including Time-RCD, yet they train no network and use no GPU, and the multivariate detector is faster than every similarly performing baseline. LLM-driven program search is thus a practical route to accurate, efficient, and transparent detectors.",
    "published": "2026-10-01T07:26:09Z",
    "updated": "2026-10-01T07:26:09Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.01223"
  },
  {
    "id": "2610.01222",
    "title": "Reputation, Strategy, and Emotion Effects on Generative AI Cooperation: A Comparison Across Reasoning and Non-Reasoning Models",
    "authors": [
      "Celso de Melo",
      "Zishan Feng",
      "James Hale",
      "Kazunori Terada",
      "Giorgio Coricelli",
      "Jonathan Gratch"
    ],
    "abstract": "As generative AI (Gen AI) systems take on increasingly autonomous roles in economically and socially consequential interactions, understanding their propensity to cooperate -- and the signals that shape this propensity -- has become essential. We examine cooperative behavior in frontier Gen AI models using the iterated prisoner's dilemma, manipulating counterpart reputation (positive, unknown, negative), strategy (extortion vs. generosity), and non-verbal emotional signaling (facial expressions conveying competitive or cooperative appraisals). In a first study with non-reasoning models (Claude 3.5, Gemini 2.0 Flash, GPT-4o), cooperation was systematically shaped by all three factors, paralleling patterns long documented in human behavioral research, though models varied substantially in how heavily each factor was weighted. A second study with reasoning models (Claude 4.6, Gemini 3, GPT-5.2) revealed a more concentrated reliance on strategy and reputation, a near-elimination of the Potemkin effect observed in non-reasoning models (evidenced by near-uniform cooperation in a diagnostic harmony game), and a more conditional role for emotion consistent with a hierarchical cue-weighting strategy rather than a simple loss of social sensitivity. Reasoning models also showed heterogeneous end-game behavior, ranging from sustained cooperation to systematic last-round defection effect, revealing model-specific exploitability profiles with direct practical relevance for deployment in negotiation and other multi-round interactions. Together, these findings characterize Gen AI models as increasingly sophisticated, though heterogeneous, social actors, and underscore the practical value of developing standardized cooperation benchmarks to inform the responsible deployment of Gen AI in interactive, socially consequential settings.",
    "published": "2026-10-01T07:25:51Z",
    "updated": "2026-10-01T07:25:51Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.01222"
  },
  {
    "id": "2610.01215",
    "title": "AutoGUIWorld: Image Generators as Visual World Models for GUI Agent",
    "authors": [
      "Cheng Yang",
      "Yifan Wu",
      "Yutao Huang",
      "Zhaohua Zhang",
      "Beiduo Chen",
      "Muxi Chen",
      "Chenchen Zhao",
      "Hexuan Deng",
      "Haolin Yang",
      "Geyuan Zhu",
      "Sa Zhu",
      "Jianhuan Zhuo",
      "Qiuyong Xiao",
      "Jianhao Ruan",
      "Yiran Peng",
      "Jiayi Zhang",
      "Tian Ye",
      "Xinlei Yu",
      "Tianwen Jiang",
      "Jihong Zhang",
      "Yuyu Luo"
    ],
    "abstract": "GUI agents require high-quality interaction trajectories to learn how software environments respond to actions, maintain state, and support multi-step workflows. However, the diversity of available trajectories is constrained by the applications, interface states, and workflows accessible in the underlying environments. Expanding this coverage requires deploying increasingly diverse and complex software, with specialized applications imposing additional installation, configuration, and runtime costs. We introduce AutoGUIWorld, a data generation framework that combines the visual priors of image generators with the task knowledge of a planner to synthesize GUI interaction trajectories without deploying or running the corresponding software environments. AutoGUIWorld samples initial GUI scenes from structured specifications of operating-system context, visual appearance, and interface state, and generates tasks conditioned on those scenes. A planner then specifies atomic actions and their intended visual consequences, while an image generator iteratively edits the current screenshot to produce subsequent observations. Action grounding and transition-level quality filtering yield 79,266 spatially annotated step-level training samples across Ubuntu, Windows, macOS, and Chrome. Fine-tuning Qwen3.5-35B-A3B on AutoGUIWorld trajectories improves the mean task score on OSWorld from 33.0% to 40.8% and the task success rate on ScienceBoard from 14.0% to 32.2%. These results show that generated trajectories improve GUI-agent performance on real desktop and scientific tasks.",
    "published": "2026-10-01T07:22:53Z",
    "updated": "2026-10-01T07:22:53Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.01215"
  },
  {
    "id": "2610.01210",
    "title": "EgoFound3R: End-to-End Egocentric Hand Reconstruction in World Space with Point-Wise Interaction Attributes",
    "authors": [
      "Hongming Fu",
      "Jingcheng Shi",
      "Wenjia Wang",
      "Binhua Zuo",
      "Bo Zhao"
    ],
    "abstract": "Egocentric video has become a primary source of supervision for embodied models, and its value rests on recovering hand motion in world coordinates, which camera motion and hand occlusion make difficult. Existing reconstruction pipelines typically separate hand and scene estimation, leave interaction attributes to separate task-specific models, and invoke several models per video, so no prior reconstruction model estimates these attributes and throughput becomes a practical constraint on large-scale annotation. We therefore introduce EgoFound3R, a unified end-to-end model that estimates world-space hand geometry in a metric scale shared with the scene, and predicts point-wise interaction attributes, including visibility, contact, and distance. The model integrates three designs: (i) structured hand prompts that transfer pretrained geometric priors to world-space hand reconstruction; (ii) an explicit hand representation that decodes hand geometry and interaction attributes; and (iii) a shared-parameter multi-rate design that lowers inference cost. Together, these designs predict hand geometry and point-wise attributes in one pass. On OakInk-v2, TACO, and HOI4D, EgoFound3R reduces the mean per-joint position error (MPJPE) by 43.2%, 22.4%, and 11.6% over previous methods and predicts point-wise contact and distance alongside the geometry in the same pass, while attaining approximately 6x higher throughput.",
    "published": "2026-10-01T07:17:28Z",
    "updated": "2026-10-01T07:17:28Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.01210"
  },
  {
    "id": "2610.01207",
    "title": "Dependency-Aware Reward Shaping for Agentic Reinforcement Learning",
    "authors": [
      "Ziyi Chen",
      "Yan Zhang",
      "Jianhui Wei",
      "Daoan Zhang",
      "Zuozhu Liu"
    ],
    "abstract": "When training large language models with reinforcement learning, terminal rewards provide little guidance about which steps matter. Common methods for assigning step credit overlook that work built on uncorrected mistakes is wasted while independent work remains valid. With only a final success/failure reward, every step in a failed episode has zero total future reward, even when it made progress. We propose Dependency-Aware Reward Shaping (DARS), which represents task progress as predicates linked by prerequisite relations and assigns step-level credit over the dependency graph. An annotator marks which predicates each step verifies, invalidates, or repairs. Verified predicates are discounted according to graph distance from the nearest broken prerequisite, while independent predicates are unaffected. Repairs update these weights based on any errors that remain; invalidated predicates need re-verification to regain credit. A fixed potential converts these annotations into signed per-step rewards. A common reward and annotation interface allows DARS to integrate with a range of reasoning and agentic training methods, such as GiGPO and ARPO/AEPO, without changing their rollout strategies or optimizers. Across five task families and models from 1.5B to 8B, DARS improves success by up to 10 points over GiGPO trained with the same budget and harness (ALFWorld), raises the WebShop task score and Search-R1 QA accuracy, complements AEPO's entropy-based training on AIME24/25 with a Python interpreter, and exceeds OmniOPD in controlled tool-free reasoning comparisons at 1.7B and 4B. Ablations show that step-level credit, dependency attenuation, and graph topology each contribute. On ALFWorld, a distilled 8B annotator matches the API annotator, enabling DARS to run efficiently without a frontier judge. Code is available at https://github.com/JianhuiWei7/DARS.",
    "published": "2026-10-01T07:16:28Z",
    "updated": "2026-10-01T07:16:28Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.01207"
  },
  {
    "id": "2610.01206",
    "title": "Resolving Mixed Single-Photon LiDAR Returns for Foreground-View and Hidden Scene Reconstruction",
    "authors": [
      "Ziting Wen",
      "Runrong Deng",
      "Zili Zhang",
      "Haitao Zheng",
      "Yuecong Xu",
      "Xiaoqiang Ren",
      "Guodong Shi",
      "Kemi Ding"
    ],
    "abstract": "Partially transmissive screens and protective covers are common in robotic inspection, but they create mixed LiDAR returns from both the foreground material and the scene behind it. Conventional peak-based LiDAR usually discards weak hidden returns, while single-photon LiDAR records time-resolved histograms that preserve attenuated and overlapping echoes. However, existing transient reconstruction methods typically fit a single scene representation to the measured waveform. Under occlusion, weak or nearby foreground--hidden echoes can form a broad peak or subtle shoulder. Because such waveforms can also be explained by a displaced single surface or a thick density distribution, accurate transient fitting does not necessarily imply correct geometry. We propose a state-aware framework for foreground-view and hidden scene reconstruction from occluded single-photon histograms. For each ray, we estimate local echo evidence, identifying no reliable surface evidence, single-return evidence, or two returns. The inferred echo state routes supervision for a two-head neural field: all rays constrain waveform reconstruction, while reliable anchors provide geometry localization. We also introduce a real paired single-photon LiDAR occlusion dataset with occluded and clean captures at fixed poses. Experiments on a real dataset show improved hidden scene depth and point-cloud accuracy over baselines. Our results demonstrate single-photon layered reconstruction as a practical route for 3D perception through partially transmissive occluders.",
    "published": "2026-10-01T07:15:54Z",
    "updated": "2026-10-01T07:15:54Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.01206"
  },
  {
    "id": "2610.01205",
    "title": "Semantic RGB--Depth Based Surgical Skill Assessment in Microscopic Stereo Videos",
    "authors": [
      "Jecia Z. Y. Mao",
      "Sue M. Cho",
      "Francis X. Creighton",
      "Deepa Galaiya",
      "Russell H. Taylor",
      "Manish Sahu"
    ],
    "abstract": "Objective assessment of microsurgical technical skill is essential for competency-based training and quality assurance, yet existing video-based approaches predominantly rely on RGB images and therefore overlook the 3D spatial relationships that characterize instrument-anatomy interactions. Although stereo operating microscopes provide complementary depth information, conventional stereo matching algorithms can produce sparse and unreliable depth estimates under high-magnification imaging conditions, limiting their use for automated skill assessment. This work presents a semantic RGB-Depth framework for surgical skill assessment from microscopic stereo videos. A regression-based depth fusion method combines sparse metric stereo depth with dense monocular depth estimates to generate a dense geometric representation of the surgical scene. This representation is integrated with semantically decomposed RGB streams corresponding to individual surgical instruments and surrounding anatomy. A hierarchical attention architecture jointly encodes these streams to capture discriminative patterns of instrument use and instrument-anatomy interaction across surgeons at different training levels. The framework was evaluated on 33 ex vivo transoral microlaryngeal procedures performed by six surgeons, comprising attending surgeons and surgical residents, using leave-one-surgeon-out cross-validation. The proposed semantic RGB-Depth model achieved an F1 score of 0.938 for skill-level classification, compared with 0.696 for semantic RGB and 0.929 for semantic depth. These results suggest that geometric information can improve automated surgical skill assessment from microscopic stereo videos. The learned spatial, temporal, and semantic attention patterns also support qualitative examination of the scene regions, video segments, and semantic streams emphasized by the model.",
    "published": "2026-10-01T07:15:49Z",
    "updated": "2026-10-01T07:15:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.01205"
  },
  {
    "id": "2610.01201",
    "title": "iSEE: Object Permanence Through Self-Supervision",
    "authors": [
      "Pramish Paudel",
      "Ajad Chhatkuli",
      "Luc Van Gool",
      "Danda Pani Paudel"
    ],
    "abstract": "Object permanence, keeping track of an object's identity and position while it is occluded, is central to video representations that track, predict and plan. Trackers that achieve it learn from boxes, track identities and visibility labels. On the other hand, self-supervised object-centric methods discover objects without labels: through slot attention, it represents a video as slots that bind to objects and follow them across frames. However, these slots are lost under occlusion, making the desired permanence impossible. Reasoning permanence is a hard problem because it requires to detect when an object becomes occluded, re-identify when object reappears, and keep the object's hidden position continuous, using reapperance as the only learning cue. To address this, we propose iSEE, a novel framework that offers all three aforementioned requirements, without any labels whatsoever. We built iSEE using the following three proposed components: (i) Object evidence modelling: a slot's attention, compared with its own past, reveals when its object is hidden. (ii) Appearance-position separation: two slot streams let the appearance be held for re-identification while the position keeps changing. (iii) Permanence from reappearance: a walker follows the hidden object's position, trained only on where the object reappears. On LA-CATER static, iSEE returns a reappearing object to its own slot after 86% of occlusions, against 32% for SlotContrast, and localises it while hidden within 4.1 mAP of the label-trained SoTA RAM. The two streams also allow downstream planning, with the position stream as the action of a world model. Project page: https://insait-institute.github.io/iSEE/",
    "published": "2026-10-01T07:12:08Z",
    "updated": "2026-10-01T07:12:08Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.01201"
  },
  {
    "id": "2610.00423",
    "title": "The Life Cycle of a Massive Activation: Stochastic Birth, Weight-Decay-Driven Growth, and Competitive Consolidation",
    "authors": [
      "S. Aaron McClendon",
      "Jorge Gallego-Feliciano",
      "Antonios Saravanos"
    ],
    "abstract": "Massive activations, residual-stream coordinates with magnitudes far larger than typical activations, are associated with attention sinks in transformers, but how their scale is regulated during training remains incompletely understood. Combining training-trajectory analyses and controlled interventions, we trace their emergence, growth, and consolidation. Sink-carrying channels vary across random seeds but stabilize early within each run. Over longer training, surrounding channels erode and the sink concentrates onto a few redundant carriers. Across ablations, gradient attenuation follows the sink token's collective root-mean-square magnitude rather than any single channel, making collective scale central to understanding their effects. Our central result is that weight decay causally controls the turnover of global activation scale. In controlled continuations, removing decay near the peak allows this scale to keep rising, whereas retaining it produces decline even at constant learning rate. We develop a balance model for the rise and peak of massive-activation magnitude, in which AdamW-preconditioned growth opposes weight decay. Sweeping the decay coefficient $λ$ shifts peak timing approximately log-linearly and yields peak magnitudes scaling approximately as $λ^{-1/2}$, consistent with this balance. Optimizer measurements further show that preconditioning sustains the large-channel cohort against decay even when raw maintaining forces are too small to do so. Together, these findings connect the observed life cycle to scale-regulating training dynamics and establish weight decay as a training-time lever on activation magnitude.",
    "published": "2026-09-30T15:28:07Z",
    "updated": "2026-09-30T15:28:07Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.00423"
  },
  {
    "id": "2609.39958",
    "title": "Better Deck or Different Judge? Evaluating Agentic Harness Gains in Corporate and Investment Banking",
    "authors": [
      "Ludovic Gibert",
      "Matis Despujols",
      "Andre-Louis Rochet"
    ],
    "abstract": "Corporate and investment banking teams use presentations to support credit decisions and advise clients on financing and transactions. Producing these decks requires reconciling financial data, tracing sources and turning analysis into a recommendation. We retrospectively study the development of an agentic harness combining a 27B language model, financial calculations, narrative templates and validation checks. LLM judges guide engineering changes and assess the resulting decks, raising the question of whether higher scores reflect better documents or changes in grading. In shared-session text-only grading with template markers removed, five judges score the complete system 20.4 to 33.6 points out of 95 above the same model generating directly from a short prompt. Every judge scores the system higher on all seventeen development deliverables. Margins against direct Opus generation from a short prompt range from -4.7 to +0.8 points. Judges agree on broad progress across development rounds but agree less on final-deck rankings than on pooled scores. Repeated grading also shifts scores on unchanged decks, making small improvements difficult to distinguish from judge variability.",
    "published": "2026-09-30T15:27:46Z",
    "updated": "2026-09-30T15:27:46Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.39958"
  },
  {
    "id": "2609.39957",
    "title": "Learning When and How to Intervene: A Hindsight-Distilled Sentinel for Coding Agents",
    "authors": [
      "Jiangrui Zhao",
      "Chenglong Li",
      "Meng Zhang",
      "Xiaoting Du"
    ],
    "abstract": "Coding agents solve repository-level tasks through sequences of actions, where a single erroneous action can misdirect subsequent decisions and increase recovery costs. Existing approaches use execution feedback for recovery or specialized checks to block errors, but deciding before execution whether intervention will benefit eventual task completion remains challenging. To address this challenge, we propose HiSentinel, a hindsight-distillation framework that trains lightweight 0.6B and 1.7B sentinels to select pre-execution interventions aimed at improving task completion rather than correcting every imperfect action. A privileged teacher uses recorded execution outcomes as evidence for intervention judgments, which are distilled into a causal student that receives only the pre-action context and proposed action. Beyond identifying whether and when to intervene, the sentinel must also provide actionable feedback that helps the coding agent recover or obtain necessary human input. To support these capabilities, we introduce SWE-Intervene, an action-level dataset constructed from software-engineering trajectories that annotates whether an action should be allowed, autonomously redirected, or paused for human assistance, together with corresponding intervention feedback. Across SWE-bench Verified Mini and Ask or Assume, HiSentinel consistently improves task completion across Sentinel scales and coding-agent families, with gains of up to 14% and 10%, respectively, while maintaining competitive token consumption. These results demonstrate that lightweight pre-execution intervention can effectively prevent error propagation and improve the reliability of autonomous coding agents.",
    "published": "2026-09-30T15:26:16Z",
    "updated": "2026-09-30T15:26:16Z",
    "categories": [
      "cs.SE",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.39957"
  },
  {
    "id": "2609.39955",
    "title": "Coverage Before Control: Route-Instruction Grounding and Steering for Controllable Retrosynthesis",
    "authors": [
      "Xuemin Chen",
      "Xiaozhuang Song",
      "Xinjian Zhao",
      "Yaoyao Xu",
      "Tianshu Yu"
    ],
    "abstract": "Single-step retrosynthesis models are commonly evaluated by their ability to recover recorded reactions. In practice, chemists may need to choose among several precursor sets for the same product, for example to preserve a particular motif. Recovering a recorded answer alone does not establish this ability to follow a preference. Satisfying such requests requires both coverage of relevant alternatives and control over which alternatives are favored. We introduce Route-Instruction Grounding and Steering (RIGS), a two-stage framework for instruction-conditioned retrosynthesis. Stage A trains a language projector, teaching it which alternatives an instruction favors or discourages. Stage B uses the projector learned in Stage A to steer a frozen generative model through lightweight residual adapters. We construct nested one-to-many training supports by pairing each product with increasing numbers of candidate precursor sets. Extensive experiments demonstrate that broader support helps the model generate a wider range of alternatives, and RIGS can learn to guide generation according to instructions. The relationship between coverage and control is consistent across model scales but non-monotone.",
    "published": "2026-09-30T15:25:15Z",
    "updated": "2026-09-30T15:25:15Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.39955"
  },
  {
    "id": "2609.39953",
    "title": "Learning to Reason with Compressed Context: Ground-Truth-Free Adaptation of OmniLLMs via Self-Distillation",
    "authors": [
      "Jianghao Wang",
      "Ke Meng",
      "Jian Li",
      "Chi Cheng",
      "Longyu Qi",
      "Liyin Liang",
      "Yifeng Qian",
      "Chunbo Lai",
      "Yutian Lin",
      "Zeyu Wang"
    ],
    "abstract": "Omni-modal large language models (OmniLLMs) enable unified audio-video understanding, but their long multimodal token sequences make deployment computationally expensive. Token compression reduces this cost, yet aggressive compression often lowers accuracy. Existing works predominantly focus on designing better compression mechanisms; however, adapting the underlying language model to reason effectively over the remaining compressed context remains under-explored. To address this, we propose CAFD (Compressed-Context Adaptation via Full-Context Distillation), a ground-truth-free self-distillation framework that adapts OmniLLMs to fixed compression pipelines without requiring reference answers, rationales, or correctness rewards. CAFD leverages the full-token view of the same multimodal sample as a source of privileged information: a full-context self-teacher provides soft target supervision to a compressed-context student along the student's on-policy trajectory. Evaluated on Qwen2.5-Omni-7B across five audio-video benchmarks, five compression pipelines, and five deployment budgets, CAFD demonstrates consistent gains, improving 120 out of 125 conditions with an average accuracy boost of 1.44 points and recovering 26.9% of the accuracy gap on average. These results demonstrate that the proposed ground-truth-free adaptation offers an effective and practical route to improving the accuracy-efficiency trade-off in deployed OmniLLMs.",
    "published": "2026-09-30T15:24:57Z",
    "updated": "2026-09-30T15:24:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.39953"
  },
  {
    "id": "2610.00422",
    "title": "Learning to Cover Locally: Graph Neural Combinatorial Optimization under a Hard Information Horizon",
    "authors": [
      "Johannes F. Loevenich",
      "Thies Moehlenhof",
      "Laurin Holz",
      "Maxime Schwarzer",
      "Tobias Huerten",
      "Roberto Rigolin F. Lopes"
    ],
    "abstract": "Neural combinatorial optimization typically assumes a centralized solver that reads the whole instance. We study the opposite: combinatorial optimization under a hard information horizon, where every node commits to its share of a global solution seeing only its $k$-hop neighborhood, and those commitments must compose into a globally feasible solution. We formalize this as local set cover and instantiate it on weighted multipoint relay (MPR) selection, the NP-hard 2-hop covering problem of the Optimized Link State Routing Protocol version 2 (OLSRv2) routing protocol (RFC~7181), whose horizon is imposed by the protocol, not chosen by the modeler. We prove two results. Any deterministic selector whose horizon is one hop short must either fail coverage or land a factor $Δ$ from optimal, and an $L$-layer graph neural network (GNN) read out at the deciding node is exactly an $L$-hop selector, so capacity cannot buy back radius. Conversely, at the horizon a \\ac{GNN} of depth $O(Δ)$ reproduces the RFC~7181 covering greedy, and at width $O(c_{\\max}Δ)$ its metric-aware weighted analogue, inheriting the $(1+\\lnΔ_2)$-approximation in both cases. Empirically, a 3-layer \\ac{GATv2} with a coverage-completing decoder, behavior-cloned from the CP-SAT optimum, reaches $\\text{cost}/\\text{opt}=1.030\\pm0.001$ against greedy's $1.138$, closing $79.1\\%$ of the gap at $100\\%$ coverage. Restricting the same learner to one hop, on identical instances with the same decoder and demonstrations, collapses it to $1.344$, far worse than greedy. Two transfer checks target real-world networks. OLSRv2's unmodified selection code matches our cardinality greedy on $200/200$ unit-cost instances, and on $40{,}308$ instances of real battalion mobility the frozen model closes $48\\%$ of the gap at full coverage. The information horizon, not the model capacity, is the most significant variable.",
    "published": "2026-09-30T15:23:36Z",
    "updated": "2026-09-30T15:23:36Z",
    "categories": [
      "stat.ML",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.00422"
  },
  {
    "id": "2609.39938",
    "title": "LEAP: Learned Block-wise Evidence Retrieval for Long Audio-Video Perception",
    "authors": [
      "Juyi Lin",
      "Zhiqiang Lao",
      "Jiali Cui",
      "Lin Zhao",
      "Pu Zhao",
      "Dichang Zhang",
      "Arman Akbari",
      "Yu Qi",
      "Xinru Jiang",
      "Yanzhi Wang",
      "Heather Yu",
      "Liang Peng"
    ],
    "abstract": "Hour-scale audio-visual question answering is constrained by a context dilemma: dense whole-recording encoding rapidly exhausts context limits, whereas uniform temporal compression severely dilutes fine-grained acoustic and visual evidence. We introduce LEAP, a framework where the model retrieves its own evidence without placing the whole recording in one context. LEAP divides a recording into fixed-duration blocks, applying a lightweight localization pass to each block to score short candidate windows. The highest-ranked windows are pooled and re-encoded in a single bounded answer pass. Consequently, the answer input and peak context remain independent of the recording duration. By decoupling evidence localization from reasoning, our framework can localize candidate temporal windows over pre-computed transcripts without decoding media frames, while preserving fine-grained visual and non-speech evidence by routing the final answering pass over raw audio-visual streams. LEAP trains both stages: a localization LoRA improves the selected windows, and an answer LoRA improves the answers read from the same windows. The block grid natively supports causal queries, enabling LEAP to support streaming inference without streaming-specific training. Across several AVQA benchmarks, LEAP improves over the Qwen3-Omni-30B-A3B baseline by 4.5-16.8%, and transfers to a second omni-modal backbone, MiniCPM-o 4.5, surpassing its published results by 3.1-13.0%.",
    "published": "2026-09-30T15:19:12Z",
    "updated": "2026-09-30T15:19:12Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.39938"
  },
  {
    "id": "2609.39934",
    "title": "Reliability-Aware Checkpoint Selection for Domain Generalization",
    "authors": [
      "Jinshi Liu",
      "Jiahao Li",
      "Pan Liu",
      "Yanfeng Li",
      "Rui Qian",
      "Zhao Tong",
      "Yue Sun",
      "Tao Tan"
    ],
    "abstract": "Checkpoint selection in domain generalization often relies on source-validation accuracy, yet the selected checkpoint need not provide reliable probabilities on unseen target domains. Source-target distribution shifts can alter accuracy rankings, while accuracy alone does not measure predictive probability quality. We identify an empirical selection opportunity within fixed training trajectories: reselecting among checkpoints with near-optimal source accuracy can improve mean target probability quality with small observed changes in mean target accuracy. We study accuracy-constrained reliability selection (AC), which retains checkpoints within a tolerance of the best source-validation accuracy and ranks them by source reliability. Our reference rule aggregates within-set normalized negative log-likelihood (NLL) and class-wise calibration error (CwECE) using $D_\\infty$. AC uses no target data and requires neither additional training nor weight averaging. We evaluate five domain generalization training algorithms on three benchmarks, using PACS to develop the objectives and a 0.5-percentage-point tolerance. In exploratory aggregation comparisons on 360 OfficeHome and TerraIncognita runs, the reference rule reduces mean target soft-bin squared-gap ECE and CwECE by 0.240% and 0.182%, respectively, and NLL by 0.030 relative to Source-Acc. Mean target accuracy changes by +0.213 percentage points. These results identify opportunities for reliability-aware reselection, while the additional benefit of joint over single-objective ranking remains unresolved.",
    "published": "2026-09-30T15:17:32Z",
    "updated": "2026-09-30T15:17:32Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.39934"
  },
  {
    "id": "2609.39933",
    "title": "ConflictGuide: AutoResearch Improves When Competing Behaviors Are Made Visible",
    "authors": [
      "Binqian Xu",
      "Qiran Zou",
      "Xiangbo Shu",
      "Dianbo Liu"
    ],
    "abstract": "When designing machine learning models, desirable properties are often in tension: improving one behavior can impair another, so task progress can depend on alleviating the conflict. LLM-based AutoResearch systems, which iteratively edit model code and retain edits based on scalar task-performance feedback, have largely ignored this trade-off. We find that scalar feedback supports broad exploration early in search, but it does not reveal how edits affect competing behaviors. In matched-budget experiments, introducing competing-behavior feedback as task gains diminish increases the share of proposals that improve both behaviors and sustains progress beyond scalar-only plateaus. Obtaining this feedback for a given model requires identifying its competing behaviors and designing probes to measure them. To make competing-behavior feedback actionable, we introduce ConflictGuide. Its reusable ConflictGuide-Skill combines a literature-grounded taxonomy with model-specific evidence to identify competing behaviors and specify probes for a code agent to implement as metrics. Evolution proceeds in two stages: Stage I explores with task feedback; Stage II uses probe feedback to steer proposals toward conflict alleviation and retains marginal-gain edits only when probes indicate sufficient alleviation. Across five diverse model families, ConflictGuide reduces task and conflict-related errors by up to 28% and 14%, respectively, relative to scalar-only AutoResearch, with gains extending to other code agents.",
    "published": "2026-09-30T15:17:21Z",
    "updated": "2026-09-30T15:17:21Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.39933"
  },
  {
    "id": "2609.39926",
    "title": "Super-Resolving Unseen Hyperspectral Sensors at Any Scale via Spatial Operators",
    "authors": [
      "Ji-Xuan He",
      "Guohang Zhuang",
      "Bo Junge",
      "Tingyi Li",
      "Lingchen",
      "Miaomiao Cai",
      "Yanan Qiao",
      "Xiujin Liu",
      "Junfeng Fang"
    ],
    "abstract": "Achieving cross-sensor generalization and arbitrary-scale reconstruction with a single model remains challenging in hyperspectral super-resolution (HSR). Although recent methods support arbitrary-scale reconstruction, applying them to new sensors or scales beyond the training range often requires additional data and computation to maintain reconstruction quality. To address these challenges, we propose OmniHSR, which predicts band-shared spatial operators rather than spectral values. Cross-Spectral Mapping (CSM) resamples inputs with any number of bands to fixed reference positions and predicts local operators with Gaussian supports. Continuous Operator-Field Reconstruction (COFR) composes these operators into a continuous field and applies them to all original bands for arbitrary-scale reconstruction. Experiments demonstrate that operator prediction outperforms direct spectral-value prediction on all seven datasets. Trained solely on ARAD with only 0.538M parameters, OmniHSR outperforms all directly transferred baselines on six unseen datasets without target-domain training data or adaptation. Across twelve upsampling factors from $\\times2$ to $\\times48$, it improves average PSNR on Pavia U and Chikusei by 0.55 dB over the strongest baseline. It also surpasses baselines trained from scratch or adapted on the target sensor and achieves up to $36\\times$ faster inference. Our code will be publicly released soon.",
    "published": "2026-09-30T15:12:47Z",
    "updated": "2026-09-30T15:12:47Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.39926"
  },
  {
    "id": "2609.39924",
    "title": "CoVisco: Codec-Native Vision Encoder with Native Token Compression for Unified Image-Video Understanding",
    "authors": [
      "Yulong Liu",
      "Xiaotian Han",
      "Junyuan Shang",
      "Yuchen Ding",
      "Zhenyu Zhang",
      "Shuohuan Wang",
      "Guibo Zhu",
      "Sirui Han",
      "Dianhai Yu"
    ],
    "abstract": "Vision-language models face a fundamental scaling bottleneck: the number of visual tokens grows with both temporal duration and spatial resolution, making long-video understanding expensive for the vision encoder and the language model. Existing methods often compress visual tokens after dense encoding, creating a mismatch between the representation used during training and the compact interface required at deployment. We present CoVisco, a codec-native vision encoder with native token compression for unified image-video understanding. By combining codec-native input support with segmented attention, CoVisco can encode long visual inputs in a single forward pass without forming dense patch-to-patch interactions across all frames. Each temporal segment is equipped with learnable abstract tokens that learn a compact segment-level representation, while fine-grained patch tokens remain available throughout the encoder. Alternating intra-segment and abstract-communication layers preserve video-level context through the abstract-token channel. A lightweight selector further exposes either abstract tokens alone or abstract tokens augmented with a runtime-selected subset of patch tokens, yielding a compact visual interface that reduces the visual context and prefill burden of downstream MLLMs while retaining fine-grained evidence when needed. Pretrained with contrastive objectives on 565M image--text pairs and 6.4M videos, CoVisco shows competitive performance on video-oriented embedding and multimodal understanding benchmarks. In the evaluated four-segment, 64-frame setting, abstract-only inference uses only 400 visual tokens while achieving video-understanding performance close to, and on some benchmarks exceeding, OneVision-Encoder. Selected patch tokens further improve fine-grained video reasoning. Project URL: https://github.com/ernie-research/CoVisco.git",
    "published": "2026-09-30T15:12:10Z",
    "updated": "2026-09-30T15:12:10Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.39924"
  },
  {
    "id": "2609.39920",
    "title": "MCD: Causal Distillation of Multimodal In-Context Learning in Large Vision-Language Models",
    "authors": [
      "Yanshu Li",
      "Jiaqian Li",
      "Canran Xiao",
      "Xi Xiao",
      "Tianyang Wang",
      "Yongtai Liu"
    ],
    "abstract": "Large vision-language models (LVLMs) exhibit strong multimodal in-context learning (ICL) capabilities, yet this ability degrades substantially as model size decreases. Knowledge distillation offers a natural way to bridge this gap, but existing methods primarily align output distributions or hidden representations directly. Such alignment teaches the student what the teacher predicts without revealing which evidence in the complex context causally supports that prediction. Consequently, a student can imitate the teacher's answer while continuing to rely on language priors, prompt structure, or other spurious cues. To address this limitation, we introduce Multimodal Causal Distillation (MCD), a distillation framework that transfers how a strong teacher uses multimodal evidence during ICL. MCD uses structure-preserving token interventions to identify and verify causal evidence, then transfers how the teacher responds when that evidence is retained or removed. This design connects distillation to the causal patterns by which the model uses contextual evidence during multimodal ICL. Experiments across three LVLM families and seven benchmarks show that MCD improves student performance by 7.23 points on average and outperforms vanilla distillation by 4.68 points, while further analyses confirm the generalizability of these gains.",
    "published": "2026-09-30T15:10:44Z",
    "updated": "2026-09-30T15:10:44Z",
    "categories": [
      "cs.CV",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.39920"
  },
  {
    "id": "2609.37889",
    "title": "ReCAP: Retrieval-Guided Capability Reuse for Multimodal Continual Instruction Tuning",
    "authors": [
      "Tao Hu",
      "Zhinuo Zhou",
      "Xialiang Tong",
      "De-Chuan Zhan",
      "Da-Wei Zhou"
    ],
    "abstract": "Multimodal continual instruction tuning (MCIT) aims to enable multimodal large language models to acquire new capabilities from sequential tasks while preserving previously learned knowledge. Existing methods primarily mitigate catastrophic forgetting by constraining parameter updates or separating task-specific adaptations. However, continual adaptation can also benefit from external knowledge that provides domain-specific information and reusable reasoning patterns for solving diverse instructions. For example, to answer \"How many red cubes are to the left of the sphere?\", domain knowledge can provide relevant concepts about objects and spatial relations, while reasoning knowledge can specify ordered operations such as object recognition, spatial filtering, and counting. Despite this potential, how to leverage external knowledge for continual adaptation remains largely unexplored in existing MCIT methods. To this end, we propose ReCAP, a retrieval-guided framework that leverages external knowledge to guide capability reuse during continual adaptation. At each continual stage, ReCAP uses external search and an LLM to incrementally build a knowledge base of domain, reasoning, and format knowledge based on the current-stage training data. For each instruction, retrieved domain knowledge guides generation, while retrieved reasoning knowledge selects and orders capability modules to form an instance-specific capability path. As these capability modules are reused across stages, subsequent adaptation can overwrite previously learned parameters. To enable stable cross-stage reuse, ReCAP introduces adaptive subspace recycling, which parameterizes reusable capability modules with shared bases and stage-specific cores, protects historically important directions while recycling residual capacity. Extensive experiments on MCIT benchmarks show that ReCAP achieves SOTA performance.",
    "published": "2026-09-29T15:56:11Z",
    "updated": "2026-09-29T15:56:11Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.37889"
  },
  {
    "id": "2609.37888",
    "title": "Visual Branch is What You Need for CLIP-based Class-Incremental Learning",
    "authors": [
      "Tao Hu",
      "Zhen-Hao Xie",
      "Jingcai Guo",
      "De-Chuan Zhan",
      "Da-Wei zhou"
    ],
    "abstract": "Class-Incremental Learning (CIL) requires models to recognize new classes over time without forgetting previously learned ones. With the rise of vision-language pre-training, CLIP has become a strong foundation for CIL. A common design in CLIP-based CIL is to construct textual classifier weights by encoding class-name templates with the CLIP text encoder, and then classify visual features by image-text cosine similarity. This design is appealing: since CLIP aligns images and text in a shared embedding space, textual weights appear to provide an off-the-shelf classifier for incremental classes. However, we show that this seemingly natural design is not always beneficial, as a modality gap can still separate the two modalities and make textual classifier weights deviate from visual class distributions. Empirically, under identical task-wise CIL training, initializing the cosine classifier with visual class centers yields lower loss and better incremental accuracy than using CLIP textual features. Motivated by these observations, we propose VIS, a visual-only method for CLIP-based CIL that removes the deployed textual branch and constructs the incremental classifier entirely in the visual space. To obtain stronger task-adaptive visual representations, VIS uses only base-session data to enhance CLIP's final visual representation with informative visual-layer features. Built on the enhanced visual representation, VIS employs a simple kernelized incremental least-squares SVM, whose classifier weights are solved in closed form from additive sufficient statistics. When new classes arrive, VIS accumulates their sufficient statistics and recomputes the classifier weights for all seen classes, enabling efficient incremental updates while preserving historical class knowledge. Extensive experiments show that VIS achieves state-of-the-art performance without a textual branch.",
    "published": "2026-09-29T15:56:06Z",
    "updated": "2026-09-30T05:00:59Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.37888"
  },
  {
    "id": "2609.37885",
    "title": "Boids of a Feather Flock Together - Evolving Prey Behaviours Under Different Predator Attack Strategies",
    "authors": [
      "Augusta van Haren",
      "Hanna Hoogen",
      "Luca Pattavina"
    ],
    "abstract": "Flocking and schooling are thought to have evolved partly as defences against predation, but how prey should balance social and escape tendencies may depend on the predator's hunting strategy. We extend the predator-prey boids model of Ojo et al. (2023), itself based on Reynolds' boids, by combining six prey movement tendencies (alignment, cohesion, separation, dodge, repel and wiggle) into a single weighted acceleration update, and by reformulating wiggle as a sinusoidal manoeuvre. We then use an evolutionary strategy to optimise the six behaviour coefficients for collective prey survival against four predator hunting strategies: attack-centroid, attack-nearest, attack-random and attack-peripheral. Across five independent trials per strategy, coefficients converged within trials and mean fitness remained stable or increased, although trials often settled in different local optima. Prey survival was highest under attack-centroid and lowest under attack-nearest, in line with our hypotheses. Against attack-centroid, prey evolved individualistic predator avoidance with high escape coefficients, whereas against the other three strategies they largely kept their flock formation. Across all strategies, evolution favoured a low repel coefficient and relatively high dodge and wiggle coefficients. Our results suggest that optimal anti-predator behaviour depends on the interplay between escape tendencies and the predator's hunting strategy.",
    "published": "2026-09-29T15:55:18Z",
    "updated": "2026-09-29T15:55:18Z",
    "categories": [
      "q-bio.PE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.37885"
  },
  {
    "id": "2609.37880",
    "title": "Fluency Without Evidence: Constraint-First Design and the Limits of Self-Report in AI-Assisted Learning",
    "authors": [
      "Fatima T. Zahra",
      "Wei Wang",
      "Frances Harper",
      "Jiangen He"
    ],
    "abstract": "A generative AI teaching partner should support reasoning over supplying conclusions; however, this has not been tested against learning in an authentic course. Drawing on design-based research, we specify the position as a conjecture map and report a first design cycle in two graduate-level research methods courses. Students used an AI teaching partner employing a constraint-first sequence requiring them to state and justify positions before receiving questions. Pre- and post-measures of AI literacy, critical thinking, and metacognitive awareness were collected alongside interaction records. AI literacy increased, concentrating in understanding AI, whereas critical thinking, awareness, and knowledge did not change. Since changes were limited to self-report measures, they may reflect growth in confidence instead of capacity. Interaction records, meanwhile, showed brief exchanges, uneven enactment of the constraint-first sequence, and missing records. These findings show why AI-supported learning requires interaction records to provide a more defensible basis for AI-supported designs than self-reports.",
    "published": "2026-09-29T15:53:13Z",
    "updated": "2026-09-29T15:53:13Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.37880"
  },
  {
    "id": "2609.38279",
    "title": "How People Use ChatGPT: Conversation-Level Evidence from India, Nigeria, Brazil, and Pakistan",
    "authors": [
      "Shreyasi Roy Chowdhury",
      "Kiran Garimella"
    ],
    "abstract": "Public understanding of how people use LLM-based conversational AI assistants comes primarily from aggregate platform reports by OpenAI and Anthropic, which apply fixed taxonomies and inferred demographics to hundreds of millions of users and release only summary statistics that outside researchers cannot re-analyze. We provide a complementary, conversation-level view: complete ChatGPT exports comprising 202,590 conversations from 1,252 users across India, Nigeria, Brazil, and Pakistan, paired with self-reported age and gender and spanning December 2022 to February 2026. To our knowledge this is the first conversation-level, demographically grounded comparison of ChatGPT use across multiple non-Western countries. We ask what these users use ChatGPT for (purpose), what they talk about (topics), and how they engage with it (mode of interaction), using the platform's own classifiers, unsupervised topic discovery, and a thematic analysis of expressive conversations. Personal use accounts for 55-64% of conversations in every country and coursework is about as common as work, so workplace productivity describes a minority of use. Unsupervised topic discovery surfaces country-specific uses that the OpenAI taxonomy folds into generic categories: health and wellness in India and Brazil, Urdu-English translation in Pakistan, current affairs in Nigeria, religious questions in Nigeria and Pakistan, and self-reflection in Brazil. Over three years, the share of conversations that seek information declined only modestly and the share that delegate a task did not grow, while conversations in which users express themselves rose from a few percent to roughly a fifth or more in every country. The same product is thus attached to different local needs in each country, and understanding what adoption means requires conversation-level, country-sensitive measurement alongside global aggregates.",
    "published": "2026-09-29T15:51:26Z",
    "updated": "2026-09-29T15:51:26Z",
    "categories": [
      "cs.CY",
      "cs.HC",
      "cs.SI"
    ],
    "url": "https://arxiv.org/abs/2609.38279"
  },
  {
    "id": "2609.37875",
    "title": "Co-PiLOT: Constrained Physics-Informed Latent Optimization for Target-Driven Inverse Design",
    "authors": [
      "Mahish K. Guru",
      "Mayank Nagar",
      "Ayush vyas",
      "Jan Bohlen",
      "Roland Aydin",
      "Noomane Ben Khalifa"
    ],
    "abstract": "Inverse design of physical systems (molecules, devices, microstructures) often reduces to optimizing a high-dimensional structure against an expensive black-box simulator. Direct search is difficult because the space is non-Euclidean, feasibility is hard to encode, and each evaluation is expensive. We present Co-PiLOT, a latent optimization approach that maps candidates through a generative encoder-decoder, uses the decoder as a learned validity prior, and searches the latent space with physics-informed black-box optimization. The framework is applied on the inverse design of magnesium alloy microstructure/texture. We develop a vision transformer based-encoder; paired with latent diffusion, diffusion transformer and rectified-flow transformer-based decoders on $\\sim80{,}000$ EBSD-derived microstructure dataset to learn a minimal bottleneck, $z$. The ViT-FMDiT model ($z$=$768$) reconstructs high-fidelity microstructure images (FID $27.86$, MS-SSIM $0.178$), which our self-segmenting orientation codec converts into input grids for crystal plasticity solver. Finally, we introduce MERIDIAN, an active latent optimizer driven by deep-kernel Gaussian-process uncertainty, failure-aware feasibility prediction, manifold-aware trust regions, and target-aware acquisition. Within a budget of $160$ simulations, the ViT-FMDiT and MERIDIAN combination yields the best target-driven objective score, reducing the relative target error by $3$--$22\\%$ against seven baselines (DANTE, TuRBO, BAxUS, CMA-ES, DDOM, SEIKO, DDPO) on the same decoder.",
    "published": "2026-09-29T15:51:02Z",
    "updated": "2026-09-29T15:51:02Z",
    "categories": [
      "cs.AI",
      "cs.CE"
    ],
    "url": "https://arxiv.org/abs/2609.37875"
  },
  {
    "id": "2609.37874",
    "title": "EndoPrior-GS: Dynamic Endoscopic Reconstruction with a Joint Texture Prior",
    "authors": [
      "Jiaqi Huang",
      "Shidong Wang",
      "Tong Xin",
      "Kabita Adhikari"
    ],
    "abstract": "Dynamic endoscopic reconstruction is fundamental to robotic surgery and computer-assisted interventions. While 3D Gaussian Splatting (3DGS) realises real-time rendering, its application to deformable intraoperative environments remains constrained by spurious geometry and varying illuminations. To address these limitations, we introduce EndoPrior-GS, a novel pipeline that explicitly couples frame-extracted vision heuristics and estimated depth maps. EndoPrior-GS derives a joint texture prior from a tool-filtered valid tissue mask, a non-specular photometric filter, and anatomical structural salience, yielding a probability map that guides primitive initialisation and subsequent density control. The prior is further extended to the temporal domain through a texture-aware term that dynamically weighs pairwise primitive contributions during training. We conduct extensive experiments on benchmark datasets EndoNeRF and SCARED, and the obtained results show that our method EndoPrior-GS reduces Flow Error by 27.7% and 25.8% over the representative approaches while preserving competitive rendering quality and real-time rendering speed. Our project website is available at https://jiaqi-huang-77.github.io/EndoPrior-GS/.",
    "published": "2026-09-29T15:49:22Z",
    "updated": "2026-09-29T15:49:22Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.37874"
  },
  {
    "id": "2609.37871",
    "title": "ExceptionDrive: A Planning-Oriented Counterfactual Corner-Case Benchmark for Autonomous Driving",
    "authors": [
      "Ziyi Luo",
      "Zhe Sun",
      "Yehao Lu",
      "Lei Zhou",
      "Lisheng Wu",
      "Xuewei Li",
      "Zequn Qin",
      "Xi Li"
    ],
    "abstract": "Average performance on routine driving benchmarks does not establish planner reliability under rare, safety-critical hazards. We proposed ExceptionDrive, a counterfactual planning benchmark that uses VLM-assisted screening, localized multi-view editing, and quality auditing to insert hazards into real nuScenes scenes while preserving their context. Its 21 tasks span six safety families and define hazard or conflict regions, local safety constraints, and acceptable responses. Because hazard insertion can invalidate the recorded human trajectory, our reference-free protocol evaluates edited predictions using Unsafe Rate (UR), Hazard Clearance Compliance (HCC), Hazard Proximity Response (HPR), and Counterfactual Trajectory Shift (CTS), which measure core-region intrusion, clearance compliance, clearance relative to a prescribed margin, and counterfactual trajectory change. Seven representative planners frequently intrude into hazard regions or provide insufficient clearance. We also develop a Reminder Agent that, without sample-specific task labels, converts visual evidence and the shared taxonomy into structured records of hazard presence, type, and a recommended high-level strategy. The agent neither predicts trajectories nor controls the vehicle; its records guide a VLM-based decision agent. In zero-shot experiments, the reminders improve strategy accuracy and reduce under-warning.",
    "published": "2026-09-29T15:48:16Z",
    "updated": "2026-09-29T15:48:16Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.37871"
  },
  {
    "id": "2609.37870",
    "title": "Learning from synthetic photorealistic raindrop for single image raindrop removal",
    "authors": [
      "Zhixiang Hao",
      "Shaodi You",
      "Yu Li",
      "Kunming Li",
      "Feng Lu"
    ],
    "abstract": "Raindrops adhered to camera lens or windshield are inevitable in rainy scenes and can become an issue for many computer vision systems such as autonomous driving. Because raindrop appearance is affected by too many parameters, therefore it is unlikely to find an effective model based solution. Learning based methods are also problematic, because traditional learning method cannot properly model the complex appearance. Whereas deep learning method lacks sufficiently large and realistic training data. To solve it, in our work, we propose the first photo-realistic dataset of synthetic adherent raindrops for training. The rendering is physics based with consideration of the water dynamic, geometric and photometry. The dataset contains various types of rainy scenes and particularly the rainy driving scenes. Based on the modeling of raindrop imagery, we introduce a detection network which has the awareness of the raindrop refraction as well as its blurring. Based on that, we propose the removal network that can well recover the image structure. Rigorous experiments demonstrate the state-of-the-art performance of our proposed framework.",
    "published": "2026-09-29T15:48:00Z",
    "updated": "2026-09-29T15:48:00Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.37870"
  },
  {
    "id": "2609.38278",
    "title": "Masked Swingers: Harnessing Data Augmentation to Advance Autoencoders for Self-Supervised Learning",
    "authors": [
      "Anthony Fuller",
      "Scott C. Lowe",
      "Daniel G. Kyrollos",
      "Graham W. Taylor",
      "Evan Shelhamer",
      "James R. Green"
    ],
    "abstract": "Self-supervised learning (SSL) removes the need for annotations and makes models that are capable across more domains than supervised learning. The autoencoder SSL framework learns by reconstructing its own input after information loss through a bottleneck or noise injection. Masked autoencoders (MAE) are the most successful instantiation of this framework: they encode a random subset of patches, then decode the masked-out patches. In this work, we introduce key modifications to improve MAEs. Our method augments an image in two different ways, then masks and encodes each view separately. It then exchanges the global representations (CLS tokens) between views before decoding the masked patches. By design, our Masked Swingers encourages learning a view-agnostic summary of the image to facilitate efficient transfer. We perform extensive experiments, and find Masked Swingers outperforms MAE by +3-5% on ImageNet-1K kNN and provides large gains on fine-grained tasks, e.g., relative gains of +45% on instance retrieval, +22% on animal re-ID, and +76% on Omniglot character recognition. To boot, Swingers reduces error -64% relative to MAE on three new state-probing datasets, opening the door to world modeling. Welcome to our Swingers party.",
    "published": "2026-09-29T15:47:27Z",
    "updated": "2026-09-29T15:47:27Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.38278"
  },
  {
    "id": "2609.37868",
    "title": "Learning Beyond What You Sample: Off-Policy-Aware Cross-Model Trajectory Exchange for RLVR",
    "authors": [
      "Doohyuk Jang",
      "Yoonsik Park",
      "Gyouk Chu",
      "Sihwan Park",
      "Eunho Yang"
    ],
    "abstract": "Reinforcement Learning with Verifiable Rewards (RLVR) methods such as GRPO rely on successful self-generated trajectories, but finite rollout budgets can produce all-fail groups with no reward-based policy-gradient signal. While additional rollouts improve the chance of success at higher cost, successful trajectories missing from one model's rollouts may already have been discovered by another. Indeed, we observe that heterogeneous models often succeed on complementary prompts, creating opportunities for mutual learning without a designated stronger teacher. To exploit this complementarity, we propose GRAFT (Gated Replacement of Answer-Failed groups with peer Trajectories), an off-policy-aware framework that replaces all-fail groups with informative peer groups. GRAFT transfers both successful and unsuccessful peer responses with peer-computed advantages, while controlling cross-model mismatch through sequence-level compatibility weighting and token-level importance ratio clipping. Across three heterogeneous model pairs and five mathematical reasoning benchmarks, GRAFT consistently improves both models over GRPO with the same per-model rollout budget, gaining 2.1 points on average and up to 4.5 points in model-level average performance. Stored peer trajectories preserve most of the gains, improving over GRPO by 1.8 points on average without simultaneous co-training.",
    "published": "2026-09-29T15:47:25Z",
    "updated": "2026-09-29T15:47:25Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.37868"
  },
  {
    "id": "2609.37864",
    "title": "AgentBug-Smith: Automatically Reproducing Real-World Harness Bugs in Agentic Systems",
    "authors": [
      "Yiming Cheng",
      "Alfin Wijaya Rahardja",
      "Mengshi Zhang",
      "Zihao Chen",
      "Zhenpeng Chen",
      "Yiling Lou"
    ],
    "abstract": "Agent harness bugs exhibit unique characteristics and remain challenging for state-of-the-art software agents to repair. Progress in this area is further hindered by existing benchmarks, which contain only a small and fixed number of executable harness bugs while requiring hundreds of human hours to construct. This work presents AgentBug-Smith, an automated harness bug reproduction approach that continuously discovers and reproduces real-world harness bugs from open-source agentic systems. Across different backbone LLMs, AgentBug-Smith consistently outperforms existing bug reproduction techniques designed for general software, achieving 10.67% - 27.56% higher success rates of reproducing harness bugs. By applying AgentBug-Smith to open-source agentic systems in the wild, we construct Live-Harness-Bench, a live and extensible benchmark that currently contains 200 reproducible harness bugs. We further demonstrate the utility of Live-Harness-Bench through two downstream applications. First, we use Live-Harness-Bench as the evaluation benchmark to systematically evaluate state-of-the-art software agents, revealing their limited capabilities in repairing real-world harness bugs. Second, we use Live-Harness-Bench as a knowledge base of real-world harness bug fixes, from which reusable repair skills can be distilled to improve existing software agents, increasing their harness-bug repair rates by 6.32%. Together, AgentBug-Smith and Live-Harness-Bench establish a scalable foundation for continuously evaluating and improving software agents on harness bug repair, turning real-world agent failures into executable evaluation instances and reusable knowledge for harness improvement, thus contributing to the ultimate goal of recursively self-improving agents.",
    "published": "2026-09-29T15:46:04Z",
    "updated": "2026-09-29T15:46:04Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.37864"
  },
  {
    "id": "2609.34978",
    "title": "One Sensor, Whole Body - 3D Body Pose from a Single Consumer Earbud IMU",
    "authors": [
      "Zhilin Guo",
      "Boqiao Zhang",
      "Oszkár Urbán",
      "Josef Bengtson",
      "Hakan Aktas",
      "Wenzhao Li",
      "Siyu Hong",
      "Kyle Fogarty",
      "Chenliang Zhou",
      "Ali Senguel",
      "Cengiz Oztireli"
    ],
    "abstract": "Consumer earbuds already stream inertial motion data from the head, one of the most widely worn sensor locations on the body. We ask how much of the 3D body pose a single such head IMU can recover, and whether adding more consumer sensors actually helps. We build a multimodal capture pipeline that records four-view RGB-D video together with an AirPods head IMU and two Striv insole IMUs, synchronize the streams post-hoc, and generate pseudo-ground-truth with SAM 3D Body, yielding a 35-take single-subject benchmark spanning gait, turning, vertical, everyday, and clinically inspired motions. Adapting two recurrent model families (IMUPoser and MobilePoser), we show that one head IMU recovers lower-body pose at 79.0 mm rigid-MPJPE and per-foot ground contact at 0.809 macro-F1, and that a causal variant retains most of this accuracy at streaming latency. In paired per-take significance tests across both families, adding the consumer foot IMUs never significantly improves pose and significantly degrades it in two of four model-split combinations; a mounting-bias probe and feet-only ablation identify insole orientation quality, not foot placement, as the mechanism. Extending the output to a 20-joint full-body skeleton maps the boundary: gross distal-arm motion is partially recoverable from the head alone, proximal upper-body pose is not, and staged fine-tuning recovers the leg accuracy that naive joint training sacrifices to multi-task dilution. For learned pose from consumer wearables, sensor reliability, not sensor count, is the binding constraint here. For the devices tested, the earbud is its sweet spot. Code is available at https://github.com/ZhilinGuo/one-sensor-whole-body.",
    "published": "2026-09-28T11:55:29Z",
    "updated": "2026-09-28T11:55:29Z",
    "categories": [
      "cs.CV",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.34978"
  },
  {
    "id": "2609.34977",
    "title": "SPIDER: Multi-Layer Semantic Token Pruning and Adaptive Sub-Layer Skipping in Multimodal Large Language Models",
    "authors": [
      "Tianxiang Chen",
      "Zhentao Tan",
      "Zi Ye",
      "Yue Wu",
      "Xiaobing Tu",
      "Jinkui Ren",
      "Xiantao Zhang",
      "Tao Gong",
      "Qi Chu",
      "Nenghai Yu",
      "Xipeng Qiu",
      "Jieping Ye"
    ],
    "abstract": "Multimodal Large Language Models face significant efficiency challenges that stem from two distinct yet coupled sources: data redundancy and computational redundancy. While most methods focus on data redundancy by pruning visual tokens from the output of the visual encoder or computing redundancy in LLM decoders using blockwise importance, the finer-grained inter-layer representation shifts and the distribution differences within the layers themselves have not been fully explored. In this work, we comprehensively investigate this dual-level inefficiency. We posit that intermediate layer tokens from vision encoders should be considered for effective visual token pruning, as semantic focus shifts across layers, with middle-layer tokens capturing more detailed object-centric information that deeper layers may abstract away. Furthermore, we reveal the differential contributions of Attention and FFNs across distinct LLM decoder layers. Building upon these discoveries, we propose \\textbf{SPIDER}, a training-free framework that integrates multi-layer \\underline{\\textbf{S}}emantic visual token \\underline{\\textbf{P}}run\\underline{\\textbf{I}}ng with an a\\underline{\\textbf{D}}aptive sub-lay\\underline{\\textbf{ER}} skipping mechanism. Experimental evaluations demonstrate that SPIDER consistently maintains strong performance across various MLLM architectures and reduction ratios. For instance, on LLaVA-NeXT-7B, SPIDER reduces FLOPs by $79\\%$ while maintaining 96$\\%$ of the baseline performance.",
    "published": "2026-09-28T11:54:41Z",
    "updated": "2026-09-28T11:54:41Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34977"
  },
  {
    "id": "2609.34976",
    "title": "Inspector: Conversational and Lightweight Analyzer of Analog Circuit Layouts Using LLM and CNNs",
    "authors": [
      "Abril Cano Castro",
      "Giuseppe Chiari",
      "Michele Piccoli",
      "Federico Viola",
      "Davide Zoni"
    ],
    "abstract": "The integration of artificial intelligence into computer-aided design frameworks has sparked a shift in the design of analog integrated circuits (ICs), transitioning the field from using manual and algorithmic-based solutions to adopting automated and intelligent paradigms. In this scenario, the GDSII file represents the industry-standard database containing the ultimate and most accurate source of information of the analog circuit, encapsulating the complex physical geometries and parasitic realities that define tape out performance. This paper proposes a novel framework that combines fine-tuned LLMs and CNNs to analyze GDSII files of analog circuits, enabling a conversational interface between the tool and the designers. Experimental results using thousands of analog designs across four realistic tasks demonstrate that the proposed solution outperforms state-of-the-art general-purpose massive VLMs by a significant margin (up to 81%), thus providing a lightweight solution to the problem of GDSII analysis.",
    "published": "2026-09-28T11:54:13Z",
    "updated": "2026-09-28T11:54:13Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.34976"
  },
  {
    "id": "2609.34974",
    "title": "Before Acting, Change the State: Prospective State Intervention for Web Agents under Deceptive Interfaces",
    "authors": [
      "Ruozhao Yang",
      "Mingfei Cheng",
      "Xiaofei Xie"
    ],
    "abstract": "LLM-based Web agents can autonomously complete user tasks, yet deceptive interfaces can steer them toward outcomes that conflict with users' interests. Existing defenses primarily intervene on agent behavior through blocking, guidance, or replanning. We identify a distinct failure mode: a task-valid action can still realize an unauthorized consequence because of the current Web state. This motivates treating task-relevant Web state itself as a runtime control target. We introduce Veer, an agent-side runtime defense that leaves task planning to the base agent and intervenes on Web state when a proposed action would produce an unauthorized consequence. Before modifying the live environment, Veer constructs a prospective intervention trajectory toward a safe task-relevant state and executes it with runtime grounding and verification. Across TrickyArena and WebDecept, Veer achieves the highest safe task completion in all three evaluation settings, exceeding the next-best defense by 15.9 and 25.0 percentage points on TrickyArena-Single and TrickyArena-Multi, respectively, while reducing dark-pattern success on WebDecept to 0.3%. These gains persist across dark-pattern types and all 12 agent, model, and benchmark configurations. Ablations show that active state intervention provides the largest gain, while prospective rollout and temporal evidence contribute additional improvements. These results establish task-relevant Web state as an effective runtime control target for protecting Web agents from deceptive outcomes.",
    "published": "2026-09-28T11:53:24Z",
    "updated": "2026-09-28T11:53:24Z",
    "categories": [
      "cs.AI",
      "cs.CR"
    ],
    "url": "https://arxiv.org/abs/2609.34974"
  },
  {
    "id": "2609.34973",
    "title": "APEX-Voice: Can Voice Agents Complete Professional Workflows Through Full-Duplex Interaction",
    "authors": [
      "Puneet Mathur",
      "Dinesh Manocha"
    ],
    "abstract": "Full-duplex voice agents can now listen, speak, use tools, and act during spoken interactions, but fluent dialogue does not guarantee correct completion of delegated professional workflows. We introduce APEX-Voice, a benchmark of 120 interactive professional workflows spanning ten work archetypes such as form completion, corporate negotiation, coordination, consulting, and interviewing. Each workflow executes in a stateful Voice Workbench environment with task-specific knowledge, typed tools, gold-annotated final work artifact, authorization constraints, and a user simulation policy backed by validated, pre-compiled speech realizations. We evaluate both artifact field accuracy and end-to-end workflow success, which requires the correct terminal state, valid process, completed actions, and a valid final artifact. Across five frontier real-time voice agents-GPT-Live-1, Gemini-3.8-Live, Grok-Voice-Think-2.0, Step-Audio3, and GPT-realtime-2.1, none exceeds 25% Pass@1, and the best Reliable@3 is only 10.8%. Moreover, stateful coordination is the dominant failure point across systems, while success decreases further on workflows requiring greater knowledge retrieval and mid-speech corrections. Overall, APEX-Voice is the first benchmark for evaluating whether voice agents can translate conversational competence into dependable professional work.",
    "published": "2026-09-28T11:53:07Z",
    "updated": "2026-09-28T11:53:07Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34973"
  },
  {
    "id": "2609.34972",
    "title": "Just MLPs: Efficient Visual State Reconstruction for Multimodal Language Models",
    "authors": [
      "Jingdi lei",
      "Junxian Li",
      "Di Zhang",
      "Zhanqiu Zhang",
      "Yiwen Guo",
      "Soujanya Poria"
    ],
    "abstract": "Long visual token sequences often account for a substantial fraction of the computational overhead in multimodal large language models~(MLLMs). Existing approaches reduce this cost by pruning redundant visual tokens, but permanently discard visual evidence that may become useful in subsequent layers. We instead ask whether all visual tokens can be preserved while reducing the cost of repeatedly evolving the representations through the Transformer. To answer this question, we perform low-rank interventions on visual-to-text information flow. We find that, after visual-to-text attention is blocked, restoring only a few directions recovers most of the lost accuracy, suggesting the relevant visual influence is concentrated in a low-dimensional subspace. We further observe strong predictability in layer-specific visual states: lightweight MLPs approximate them with high cosine similarity and low reconstruction error. Motivated by these findings, we propose $δ$-Vision, which replaces repeated Transformer evolution of visual tokens with lightweight low-rank adapters that construct layer-wise visual memories while preserving all visual tokens for text retrieval. Across image and video benchmarks, $δ$-Vision achieves higher accuracy than visual token pruning baselines at comparable or lower computation, while delivering competitive inference efficiency without discarding visual tokens.",
    "published": "2026-09-28T11:52:45Z",
    "updated": "2026-09-28T11:52:45Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34972"
  },
  {
    "id": "2609.34971",
    "title": "Action-Space Shaping for LLM Agents: Measuring and Mitigating Tool-Schema Bias",
    "authors": [
      "Yinhong Liu",
      "Zhili Tan",
      "Zilin Wang",
      "Zhijiang Guo"
    ],
    "abstract": "Large Language Models (LLMs) have shown strong performance on tool-use agentic tasks when given a fixed tool schema. Yet a tool schema is not the action space of an agent; it is merely one interface representation of it. The same executable action can be exposed through many different, functionally equivalent tool definitions, and an agent that has truly learned a task should behave consistently across them. We show that current agents often do not, a phenomenon we term schema bias. To study this systematically, we introduce an executable transformation framework that rewrites a native tool schema using nine operators, including merging and splitting tools, altering how a single tool is expressed, and distributing one action across several dependent calls. The tasks, executable actions, and reachable states remain fixed, so any change in success is attributable to the interface alone. Evaluating eleven LLMs, including two closed models, on up to 32 schema variants, we ask how large schema bias is, how it manifests, whether the difficulty of a schema variant can be predicted without a full evaluation, and whether training removes it. We find that schema bias is substantial even for the newest models: success rates range from complete failure to 97% depending solely on the schema. To reliably estimate schema difficulty, it requires running a small sample of the target queries. Training repairs a schema variant only when that variant appears in the training data.",
    "published": "2026-09-28T11:52:43Z",
    "updated": "2026-09-28T11:52:43Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34971"
  },
  {
    "id": "2609.35924",
    "title": "Grab a Coffee: Future-Aware Guidance for Discrete Diffusion with Compiled Objectives",
    "authors": [
      "Hua",
      "Xu",
      "Dongxin Li",
      "Gwen Yidou-Weng",
      "Guy Van den Broeck",
      "Wei Wang",
      "Anji Liu"
    ],
    "abstract": "Discrete diffusion models generate sequences by iteratively resolving multiple tokens in parallel, offering a flexible alternative to left-to-right generation. However, guiding this process with a sequence-level objective is difficult because the value of one unresolved token depends on the other tokens with which it can form a high-reward sequence. Enumerating all such completions makes the whole guidance computation grow exponentially with the number of unresolved positions. We introduce COFFEE, a plug-and-play framework that avoids this enumeration by separating sequence dependence from the objective. At each diffusion step, a target-free carrier absorbs the marginal token distributions predicted by the denoiser to construct a joint model over the unresolved tokens, while a compiled finite-state model records how their combinations affect the sequence-level preference. Pairing their states allows COFFEE to transfer global preferences to unresolved positions and sample a clean reconstruction without retraining the diffusion model. The same framework supports explicit hard constraints and learned soft objectives. We evaluate COFFEE across multiple symbolic, language, and biological benchmarks, where it achieves strong control results with task-dependent quality and diversity trade-offs. By making objectives available to inference rather than only evaluation, COFFEE brings joint conditioning, completion-weighted guidance, and optimization-based constraints into pretrained neural generation, showing the potential of neural-symbolic methods in diffusion guidance.",
    "published": "2026-09-28T11:51:38Z",
    "updated": "2026-09-28T11:51:38Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.35924"
  },
  {
    "id": "2609.34968",
    "title": "RoboFL: Federated Expert Assembly for World Action Models",
    "authors": [
      "Rongyu Zhang",
      "Ruizhi Fan",
      "Yunfan Lou",
      "Hengyu Fang",
      "Shenli Zheng",
      "Chenrui Wu",
      "Yili Jin",
      "Li Du",
      "Dan Wang",
      "Yuan Du",
      "Shanghang Zhang"
    ],
    "abstract": "Vision-language-action and world-action models are increasingly popular, yet remain bottlenecked by physical interaction data that is scarce, institutionally siloed, and task-heterogeneous. A natural federated solution is to let each client adapt a shared foundation model through parameter-efficient fine-tuning, avoiding the exchange of full-model updates. However, federating these adapters is nontrivial, as naive aggregation can entangle incompatible updates, while incorporating MoE-style routing into federated aggregation may dilute specialization and destabilize expert selection. We present RoboFL, which instantiates MoSAIC (Mixture of Slotted Adapters) for federated world-action learning. MoSAIC directly installs locally trained LoRA adapters as the expert branches of a server MoE. Server-side routers learn token assignments over these prior-informed branches while jointly refining routing and expert parameters. Foresight-to-Action Routing Distillation (FARD) aligns routing across the model's three paths, while Path-Consensus Expert Aggregation (PCEA) converts complete expert updates into a compact global adapter for personalized redistribution. Experiments on RoboTwin 2.0, RLBench, and a real-world Franka robot arm show the superiority of RoboFL with structured expert assembly, as it outperforms centralized PEFT InternVLA-A1 by 12.23% on the Franka arm, while reducing per-round client communication by up to 86.81% relative to MoE-based federated VLA baselines.",
    "published": "2026-09-28T11:49:57Z",
    "updated": "2026-09-28T11:49:57Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34968"
  },
  {
    "id": "2609.34967",
    "title": "Semantic Uncertainty Quantification Needs Factual Equivalence",
    "authors": [
      "Joseph Hoche",
      "Quentin Guimard",
      "Gianni Franchi"
    ],
    "abstract": "Semantic uncertainty quantification for large language models rests on a common template: sample several answers, measure how much they agree, and treat disagreement as uncertainty. We first formalize this template as two separate roles: an operator that compares two answers, and an aggregator that combines all pairwise comparisons into a scalar. Existing methods differ almost entirely in how they aggregate, while taking the operator off the shelf, typically an NLI model or a generic sentence encoder. We show that this reliance on off-the-shelf operators is the primary bottleneck of semantic UQ: they do not accurately measure factual equivalence of multiple answers to the same question. We resolve this with a deliberately simple recipe: a single encoder trained contrastively to isolate the targeted fact, utilizing synthetic data generated by an LLM and dataset both disjoint from all evaluation settings. Integrating the resulting operator into existing methods improves performance on 120 of 126 evaluation settings (95%) spanning 18 model dataset combinations across language and vision-language models. The best variant reaches 0.76 mean AUROC against 0.68 for the strongest baseline, while replacing the quadratic cross-encoder comparisons of entailment-based operators with one encoder pass per answer. The uniformity of the improvement supports the view that the operator, not the aggregator, is the limiting factor. The same operator also improves single generation token-level estimators: the norm it assigns to each token measures how much that token bears on the answer, and reweighting token log-likelihoods accordingly sharpens the estimate.",
    "published": "2026-09-28T11:48:35Z",
    "updated": "2026-09-28T11:48:35Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34967"
  },
  {
    "id": "2609.34966",
    "title": "Safe Greenhouse Climate Control Using Lagrangian-Constrained PPO with Kolmogorov-Arnold Networks",
    "authors": [
      "Hangzun Liu",
      "Yuling Fan",
      "Fang Tian",
      "Zhilong Bie",
      "Zaiwen Feng",
      "Yongliang Qiao"
    ],
    "abstract": "Greenhouse climate control balances economic return with maintaining temperature, humidity and CO2 within crop-adapted growth ranges. Conventional reinforcement learning (RL) greenhouse controllers use fixed reward penalties to limit climate constraint violations, yet such heuristic penalties cannot explicitly constrain long-term cumulative violations. Poorly tuned weights either lead to overly conservative policies and lower yields, or fail to suppress persistent climate deviations that harm photosynthesis and induce crop diseases. To address this issue, we formulate greenhouse climate regulation as a Constrained Markov Decision Process (CMDP) and use a Lagrangian safe RL framework RCPO-PPO to separate economic optimization and cumulative safety constraints, enabling adaptive penalty adjustment without manual tuning. To handle strong nonlinear, time-varying coupling between greenhouse microclimate and crop growth, Kolmogorov-Arnold Networks (KANs) replace Multi-Layer Perceptrons (MLPs) as policy and value approximators for improved nonlinear representation. Sinusoidal cyclic time features are embedded in observations to capture diurnal environmental periodicity. Simulations use a classic winter lettuce greenhouse model driven by 40-day real weather disturbances. Compared with vanilla penalty-based PPO, our method cuts cumulative climate violations by 18.65% and raises lettuce economic profit by 2.91%, keeping violations stable near the safety threshold. This decoupled CMDP optimization with KAN-based policy representation mitigates long-term climate risks and boosts planting profits, offering a constraint-aware control strategy for precision greenhouse cultivation.",
    "published": "2026-09-28T11:48:25Z",
    "updated": "2026-09-28T11:48:25Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34966"
  },
  {
    "id": "2609.34965",
    "title": "Cyclostationary Phase Conditioning for Medical Time Series Diffusion",
    "authors": [
      "Samuel Ruiperez-Campillo",
      "Michele Copetti",
      "Jorge da Silva Goncalves",
      "Sonia Laguna",
      "Thomas Hofmann",
      "Julia E. Vogt"
    ],
    "abstract": "Many physiological time series, such as cardiac and brain recordings, exhibit cyclostationarity: their statistics vary periodically with an underlying cycle phase. Corruption from motion, poor contact, and physiological interference obscures morphology needed for diagnosis, making signal restoration essential. Existing diffusion approaches condition on corrupted observations alone and must learn cyclic structure implicitly. We instead propose two inductive biases which encode cyclostationarity: a shift-covariant wavelet representation and dense per-sample phase conditioning inferred from the corrupted input. We further introduce a training-free cyclostationarity index that quantifies phase structure and predicts when phase conditioning will help. Finally, we propose antithetic coupling of reverse trajectories to reduce sampling variance while achieving comparable performance with fivefold fewer network evaluations. Across modalities, our results show that explicitly encoding measurable cyclic structure improves physiological time-series restoration.",
    "published": "2026-09-28T11:48:11Z",
    "updated": "2026-09-29T07:12:03Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "eess.SP"
    ],
    "url": "https://arxiv.org/abs/2609.34965"
  },
  {
    "id": "2609.33311",
    "title": "SocialHumanoid: Towards Expressive Humanoid Behavior via One-Step Co-Speech Motion Generation",
    "authors": [
      "Chengqun Yang",
      "Tengjie Zhu",
      "Liang Xu",
      "Fulong Liu",
      "Guanzhu Ren",
      "Yitong Xing",
      "Xuefeng Lu",
      "Fei Shi",
      "Siyuan Fan",
      "Weijie Dong",
      "Yao Mu",
      "Xiaokang Yang",
      "Yichao Yan"
    ],
    "abstract": "Humanoid robots are increasingly expected to serve as embodied social agents that communicate naturally with humans through face-to-face interaction. During such communication, humanoid robots require body behaviors that are synchronized with speech, affectively expressive, and suitable for real-time execution. However, existing co-speech methods are primarily developed for digital humans and lack joint support for affective control and low-latency continuous generation on physical embodiments. To bridge this gap, we present SocialHumanoid, a system for expressive humanoid behavior via one-step co-speech motion generation. Given response speech and a specified affective condition, SocialHumanoid generates each full-body motion window in a single forward pass and connects successive windows through motion-history conditioning. The generated human motion is further converted online into embodiment-compatible robot references and tracked by a whole-body controller for physical execution. To provide explicit supervision for affective body expression, we further introduce AffectMoCap, a 4-hour dataset captured from two professional actors, containing synchronized speech, body motion, fine-grained hand motion, and emotion annotations. On BEAT2, SocialHumanoid achieves the best FGD among the compared generation methods, competitive speech-motion synchrony, and approximately $6\\times$ faster inference than GestureLSM under the same protocol. Perceptual evaluations further show that training with AffectMoCap improves affect recognition from generated body motion, while real-robot experiments demonstrate continuous affect-conditioned behavior and stable long-horizon execution. Our project page is https://rex0191.github.io/SocialHumanoid/.",
    "published": "2026-09-27T07:24:33Z",
    "updated": "2026-09-27T07:24:33Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.33311"
  },
  {
    "id": "2609.33306",
    "title": "LoopTrack: A Simple Baseline for Parameter-Efficient Transformer Tracking",
    "authors": [
      "Liang Peng",
      "Chenxiao Li",
      "Libo Zhang",
      "Xingping Dong",
      "Heng Fan"
    ],
    "abstract": "Current Transformer-based tracking methods typically stack multiple Transformer blocks with separate parameters to model interactions between the target template and the search region for target localization. These trackers often incur substantial parameter overhead from stacked blocks, making their deployment on resource-limited devices difficult. To address this, we propose a parameter-efficient Transformer tracking framework, dubbed LoopTrack, which repeatedly applies a set of Transformer blocks with shared parameters to interact features in a looped architecture for tracking, significantly reducing the number of parameters. To further exploit target cues, we present two lightweight designs, including target-aware looping (TAL) and gated target memory (GTM). The former applies intermediate target information generated by one loop to guide feature interaction in the subsequent loop, enabling progressive feature refinement, while the latter maintains a compact memory across frames, which is incorporated into the loop process to provide long-term information to the tracker, mitigating temporal drift in tracking. Compared to existing Transformer trackers, LoopTrack enables multiple rounds of feature interaction with fewer model parameters, making it resource-friendly for deployment. In extensive experiments on multiple datasets, LoopTrack shows a favorable accuracy-parameter trade-off. In particular, our LoopTrack$_{\\rm One}$, with a single shared Transformer block, achieves 66.2\\% SUC score on LaSOT with only 3.4M parameters, while LoopTrack$_{\\rm Three}$, using three shared blocks, achieves 69.3\\% SUC score with 6.4M parameters, surpassing existing parameter-efficient tracking methods with comparable or larger model size. With LoopTrack, we aim to establish a simple yet strong baseline for parameter-efficient Transformer tracking. Our code and models will be released.",
    "published": "2026-09-27T07:17:44Z",
    "updated": "2026-09-27T07:17:44Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.33306"
  },
  {
    "id": "2609.33304",
    "title": "Relevance Does Not Imply Applicability: Experience Activation for Personal GUI Agents",
    "authors": [
      "Fuyao Zhang",
      "Xuan Wang",
      "Zherui Li",
      "Jiaming Zhang",
      "Longtao Huang",
      "Wei Yang Bryan Lim"
    ],
    "abstract": "Personal Graphical User Interface (GUI) agents rely on interaction history to infer what a user wants from ambiguous instructions and to anticipate recurring routines. Existing approaches retrieve task-relevant history and append it to the policy's context, implicitly assuming that experience relevant to a task remains useful for each decision within it. We find that this help is largely spent at the first decision: retrieved history strongly improves the opening step of an episode, yet provides little sustained benefit over the remaining 90\\% of steps, and offers weak guidance on whether a proactive suggestion is warranted. A relevant record may tell the agent where to begin, but not which past action applies to the current screen or whether a routine is due now. The underlying issue is that relevance does not imply applicability}: relevance is determined at the task level, whereas applicability depends on the situation at decision time. We therefore recast personalization as experience activation and introduce ExpActivator, a training-free framework that activates only the experience applicable to the current situation. During execution, ExpActivator matches each new screen to historical states in the frozen GUI backbone's latent space and supplies the corresponding action as a reference. Before execution, it activates a recurring intent only when the current time and scenario provide sufficient support, and otherwise abstains. Across four GUI backbones, ExpActivator improves within-trajectory step success by 28\\% on average, achieves the best personalized execution on every backbone while using about one-fifth as many history tokens, and reaches approximately 2.3$\\times$ the Matthews correlation coefficient of the strongest proactive baseline. Experience pays where it is activated, not where it is appended.",
    "published": "2026-09-27T07:15:57Z",
    "updated": "2026-09-27T07:15:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.33304"
  },
  {
    "id": "2609.33303",
    "title": "BITS: Rethinking Fair and Comprehensive Evaluation for Irregular Time Series Forecasting",
    "authors": [
      "Kangjia Yan",
      "Linfeng Wang",
      "Tianen Shen",
      "Xiangfei Qiu",
      "Ruitong Zhang",
      "Hao Miao",
      "Jilin Hu",
      "Chenjuan Guo",
      "Bin Yang",
      "Christian S. Jensen"
    ],
    "abstract": "Despite recent progress in irregular time series forecasting, the field still lacks a unified benchmark for fair and comprehensive evaluation. Existing evaluations are often conducted on a limited set of datasets with inconsistent experimental protocols and predominantly error-based metrics, rendering it difficult to compare and assess methods fairly and comprehensively across diverse settings. To eliminate these limitations and accelerate progress, we propose BITS, a standardized, reproducible, and extensible benchmark for advancing research on irregular time series forecasting. BITS covers eleven datasets from nine domains with diverse irregularity characteristics, and it characterizes the datasets according to their missing rate, missing pattern complexity, sampling irregularity, and skewness. Further, it offers a unified pipeline for data preprocessing, model integration and evaluation, and reporting. It accommodates regular and irregular time series forecasting methods, including time series foundation models, under consistent settings, incorporating both error-based and non-error-based evaluation metrics. Findings include that method performance varies substantially across irregularity characteristics, with no single modeling strategy consistently dominating. We also find that using error-based or non-error-based metrics can yield different model rankings, highlighting the need for multi-dimensional evaluation. The code can be found at https://anonymous.4open.science/r/BITS-8F2E/.",
    "published": "2026-09-27T07:11:29Z",
    "updated": "2026-09-27T07:11:29Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.33303"
  },
  {
    "id": "2609.33301",
    "title": "Hesitation-Aware On-Policy Distillation for Diffusion Language Models",
    "authors": [
      "Jianguo Huang",
      "Lipeng Wan",
      "Yanchen Deng",
      "Bo An"
    ],
    "abstract": "Diffusion large language models (dLLMs) generate text by iterative unmasking. At each denoising step, a dLLM proposes a token at every masked position, but the decoder commits only a confident subset of these proposals. Trace-based on-policy distillation (TOPD) builds on this process by matching the student to a stronger teacher, yet only at the committed positions. We argue that this discards much of the useful signal, which resides in the uncommitted proposals, where the student has made a prediction but is not yet confident enough to commit it. We call these proposals hesitations. In our pilot study on an SDAR-4B student, hesitations make up only 24% of supervisable state-position pairs but carry 66% of the teacher-student divergence. To exploit this signal, we propose Hesitation-Aware On-Policy Distillation (HOPD), which extends teacher distribution matching to every masked position of each denoising step. Because hesitations are not equally informative, we further allocate supervision using hindsight from the completed trajectory, placing more weight on positions whose proposal was later disagreed with the final token and on blocks where first-step proposals rarely survive. Since both models already produce distributions at all masked positions, HOPD requires no additional forward passes over TOPD. The only extra cost is evaluating the loss at more positions. With SDAR-1.7B and SDAR-4B students distilled from TraDo-8B-Instruct, HOPD achieves the best average score among the evaluated methods on five math and coding benchmarks, under both static and dynamic decoding and at both scales. It also speeds up decoding. On SDAR-4B, the HOPD student hesitates less and commits 11% more tokens per denoising step than TOPD, while reaching higher accuracy.",
    "published": "2026-09-27T07:09:59Z",
    "updated": "2026-09-27T07:09:59Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.33301"
  },
  {
    "id": "2609.33299",
    "title": "AquaWAM: A Dynamics-aware World Action Model for Underwater Embodied Agents",
    "authors": [
      "Cunhao Zhu",
      "Yifeng Wang",
      "Dongliang Xu",
      "Yunzhong Hou",
      "Yue Yao",
      "Chi Harold Liu"
    ],
    "abstract": "World Action Models (WAMs) are becoming increasingly important and useful for embodied intelligence, as they enable robots to anticipate the consequences of candidate actions before interacting with the physical environment. However, underwater robots are usually subject to passive dynamics, such as inertia, buoyancy, hydrodynamic drag, and persistent drift, which can continue to affect the vehicle even after an action is completed. Existing WAMs, which primarily predict action-conditioned visual observations, are not explicitly designed to capture such passive motion dynamics. In this paper, we present AquaWAM, the first World Action Model designed for underwater embodied agents. Instead of predicting future images, AquaWAM models both action-conditioned and passive physical dynamics, including the thruster dead band, the inertial glide that outlasts each command, and ambient currents. Specifically, it senses through the DVL, IMU, pressure sensor and joint encoders, while cameras supply only semantics for understanding goals and target pose. By modeling compact navigation states rather than high-dimensional visual observations, AquaWAM substantially reduces the model size and computational cost compared with conventional WAMs. Experimentally, AquaWAM achieves a 72.6% task success rate across 20 underwater tasks on the USIM benchmark, outperforming existing methods while making action decisions 2.7x faster than U0 on an NVIDIA Jetson AGX Orin. Our model also remains effective when some onboard sensor measurements are unavailable. For example, without DVL velocity measurements, our method still achieves a 61.6% success rate, compared with 39.4% for U0.",
    "published": "2026-09-27T07:09:26Z",
    "updated": "2026-09-29T04:32:33Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.33299"
  },
  {
    "id": "2609.33297",
    "title": "The Error You See Is Not the Error You Made: Progression-aware Reasoning Origin for Reasoning Error Localization",
    "authors": [
      "Yiguo Wang",
      "Ziyuan Yang",
      "Yi Zou",
      "Dan Lin",
      "Rongsheng Li",
      "Yi Zhang"
    ],
    "abstract": "Verifying multi-step LLM reasoning requires more than determining whether a trace is correct: a useful verifier should identify where the reasoning first goes wrong. However, existing holistic methods provide little positional evidence, while forward sequential verification often treats the first rejected step as the error source. Under error propagation, this assumption can fail, since an earlier mistake may remain locally plausible and become observable only through its downstream consequences. We therefore rethink reasoning verification as a progression-aware error-source localization problem: rather than asking only where a reasoning trace first appears inconsistent, we ask which earlier step best explains how that inconsistency emerges along the trajectory. Based on this view, we propose Progression-aware Reasoning Origin (PRO), a training-free framework for first-error localization. PRO jointly models incoming support from the preceding context and outgoing compatibility with subsequent reasoning, selectively refines regions where these signals disagree, and finally performs detector-conditioned source attribution with intervention-based evidence to distinguish the true error origin from its propagated manifestations. We further formalize the gap between forward rejection and structural exposure, showing why incoming-side evidence alone is insufficient for reliable localization under error propagation. Experiments across open-form, medical, and structured reasoning tasks demonstrate consistent improvements over strong verification baselines, supporting progression-aware source attribution as a more faithful formulation of reasoning verification.",
    "published": "2026-09-27T07:03:59Z",
    "updated": "2026-09-27T07:03:59Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.33297"
  },
  {
    "id": "2609.33295",
    "title": "TraceDance: An Automated System for Building Agent Behavior Benchmarks from Real-World Agent Deployment Traces",
    "authors": [
      "Dehai Min",
      "Daoan Zhang",
      "Yiming Zeng",
      "Huayi Zhang",
      "Ziyi Chen",
      "Yan Zhang",
      "Qinbo Bai",
      "Mengyuan Chao",
      "Jing Ning",
      "Qiyue Hua",
      "Huiyi Chen",
      "Hanrong Zhang",
      "Henry Peng Zou",
      "Jie Yang",
      "Wei Xu",
      "Philip S. Yu"
    ],
    "abstract": "An agent can complete a task while exhibiting undesirable behavior during execution. Developers need tests for the specific behaviors encountered in deployment, beyond fixed benchmark suites. We present TraceDance, an agent system that constructs targeted benchmarks from deployment traces for user-specified undesirable behaviors. For efficient construction, Anchor-and-Confirm combines programmable retrieval with candidate-level confirmation by a Flash large language model (LLM), while the Anchor Synthesis Loop generates and revises specifications for custom behaviors. The benchmarks use decision-point continuation to evaluate an LLM's next turn at a recorded decision point with a behavior-specific rubric, without a reference answer or environment replay. Experiments in coding and general tool use draw on 252,557 sessions and produce 107 benchmarks with 4,125 instances, fulfilling 95.3% of build-target requests. Both human annotators confirm the requested behavior in 84% of sampled instances, and the automated grader's agreement with human pass/fail judgments is comparable to that between the annotators. Nine frontier LLMs achieve a mean pass rate of only 26.7%, showing that they still struggle to respond appropriately at the evaluated decision points. Analysis across behavior-specific benchmarks further reveals weaknesses in how current LLMs behave as agents. By turning deployment problems into targeted benchmarks, TraceDance could serve as a key component of the recursive self-improvement (RSI) loop.",
    "published": "2026-09-27T06:58:39Z",
    "updated": "2026-09-27T06:58:39Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.33295"
  },
  {
    "id": "2609.33289",
    "title": "Learning to Sell: Reinforcement Learning for Strategic Large Language Model Agents in Multi-Product Markets",
    "authors": [
      "Shuze Daniel Liu",
      "Claire Chen",
      "Jiuqi Wang",
      "Thorsten Joachims"
    ],
    "abstract": "Autonomous large language model (LLM) agents operating in multi-product markets must make sequential decisions under information asymmetry and resource constraints. We develop a machine learning approach for training such agents to act effectively as sellers in a multi-item bargaining environment, where a seller concurrently negotiates a catalog of substitutable assets across a pool of independent buyers. Buyers hold private, heterogeneous valuations across products, and each can purchase at most one item. Facing limits on total communication turns, the seller must dynamically match buyers with the most profitable products considering their private valuations, while strategically allocating its limited interaction budget toward combinations of greater potential value. We formalize this problem as a Partially Observable Markov Decision Process using a structured, four-part message protocol that maps natural language into a parsable and regulated decision space. Using this formalization, we design a post-training method using Reinforcement Learning from Verifiable Rewards (RLVR). To evaluate this framework, we construct a multidimensional metric suite that quantifies constraint adherence, seller surplus extraction, and allocation quality. Our trained seller agent learns to match limited inventory to buyers more effectively, matching or outperforming trillion-parameter frontier models in both seller surplus extraction and buyer-product allocation quality. Finally, these learned strategies generalize robustly to unseen market structures, correlated valuation distributions, and price ranges not encountered during training.",
    "published": "2026-09-27T06:51:56Z",
    "updated": "2026-09-27T06:51:56Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.33289"
  },
  {
    "id": "2609.33288",
    "title": "Informative Viewpoint Selection for Episodic-Memory Embodied Question Answering using Omnidirectional Images",
    "authors": [
      "Kaname Kitamura",
      "Asako Kanezaki"
    ],
    "abstract": "Embodied Question Answering (EQA) requires agents to answer natural language questions about surrounding environments from visual observations. In this work, we focus on open-vocabulary episodic-memory EQA (EM-EQA), where an agent answers free-form questions using recorded observation histories. Omnidirectional images are promising for this task, as they provide wide field-of-view observations that can capture surrounding context without requiring explicit camera rotations. However, omnidirectional images introduce two challenges for EQA: (i) equirectangular projection causes severe geometric distortion that degrades vision-language model (VLM) recognition accuracy, and (ii) feeding equirectangular images directly into VLMs introduces excessive irrelevant background information, reducing answer accuracy and increasing the visual-token burden. To address these challenges, we propose a viewpoint selection method for EM-EQA using omnidirectional images. Our method converts equirectangular observations into perspective views via cubemap projection, estimates question-conditioned relevance with fine-tuned BLIP-2, and selects informative and diverse viewpoints through diversity-aware greedy selection. Experiments on the Habitat-Matterport 3D (HM3D) subset of OpenEQA show that our method achieves state-of-the-art model performance among the reported model results with equirectangular observations. Moreover, after removing rotation views, which reduces observation frames by 65.5%, our method largely maintains its answer accuracy.",
    "published": "2026-09-27T06:50:25Z",
    "updated": "2026-09-27T06:50:25Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2609.33288"
  },
  {
    "id": "2609.33287",
    "title": "Feedback Makes Perfect: A Closed-Loop Framework for NL-to-STL Translation",
    "authors": [
      "Bowen Ye",
      "Xiang Yin"
    ],
    "abstract": "Signal Temporal Logic (STL) enables rigorous verification and control of cyber-physical systems, but writing correct specifications requires expertise that most requirement holders lack. Large language models can translate natural-language (NL) requirements into STL, yet stronger translators alone approach an accuracy ceiling. We argue that this ceiling stems from how the task is posed: one-shot, open-loop translation is somewhat ill-defined. Natural language is ambiguous, and, more fundamentally, what a person writes may not always be what they intend, so the target specification is not fully contained in the input text. We therefore reformulate NL-to-STL translation as a closed-loop feedback process. Each generated formula is translated back into natural language for the user to check, and natural-language corrections drive revision until the user accepts the specification. Users never read or write formal syntax. This framework rests on an asymmetry familiar from feedback control theory. The forward path, from ambiguous language to formal logic, is hard and error-prone. The feedback path, from structured STL back to language, can be made highly precise, and a precise feedback path lets an imprecise forward path achieve precise closed-loop behavior. Experiments on 500 expert-authored requirements and seven LLMs support this view. Back-translated explanations agree with expert judgments in 99.5\\% of cases. Closed-loop refinement raises strong models from about 89\\% open-loop accuracy to 98.0--99.2\\%, and yields gains of over 30 percentage points for weaker models (e.g., 17.6\\%$\\rightarrow$48.0\\%). Ablations show these gains come from the semantic content of the feedback rather than from repeated attempts. An expert audit and a 280-session user study further confirm the reliability of the loop. We also identify a capability threshold above which feedback no longer helps.",
    "published": "2026-09-27T06:46:39Z",
    "updated": "2026-09-27T06:46:39Z",
    "categories": [
      "cs.AI",
      "cs.RO",
      "eess.SY"
    ],
    "url": "https://arxiv.org/abs/2609.33287"
  },
  {
    "id": "2609.33286",
    "title": "InfoEdit: Probing Global Layout Reasoning in Infographic Editing",
    "authors": [
      "Cheng Yang",
      "Chufan Shi",
      "Huijuan Wang",
      "Bo Shui",
      "Yaokang Wu",
      "Muzi Tao",
      "Yibo Yan",
      "Xuezhe Ma",
      "Taylor Berg-Kirkpatrick"
    ],
    "abstract": "Multimodal foundation models edit natural photographs at production quality, yet the same models struggle with structured visual content such as infographics. Unlike photographs, infographics encode information through logical relations; editing one element often requires surrounding elements to be adapted. We refer to this global layout reasoning capability as reflow. Existing image-editing benchmarks neither provide a dedicated setting for structured visual content nor evaluate the reflow capability. We introduce InfoEdit, a novel benchmark of 1,000 infographics across eight logical-relation families, paired with 4,000 editing instructions across four editing tasks, and a reflow-aware evaluation protocol. Across eight frontier editors, only GPT-Image-2 clears 60% average success rate; most models fall below 7%, and no editor exceeds 36% on the Swap-Block task even with perfect target localization. We further show that code-level editing can match the strongest pixel-level editor, revealing complementary strengths across tasks. InfoEdit identifies reflow as a central challenge in structured visual content editing and provides a diagnostic benchmark to facilitate future progress.",
    "published": "2026-09-27T06:45:45Z",
    "updated": "2026-09-27T06:45:45Z",
    "categories": [
      "cs.CV",
      "cs.CL",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2609.33286"
  },
  {
    "id": "2609.32255",
    "title": "Clarify the User or Verify the World? Uncertainty Routing for Proactive Agents",
    "authors": [
      "Zhaofeng Li",
      "Xuan Zhang",
      "Xiaokui Xiao",
      "Yang Deng"
    ],
    "abstract": "Tool-using LLM agents must decide not only whether additional information is needed, but also which source can resolve the uncertainty. Existing proactive approaches often specialize in either user clarification or environment verification, without explicitly determining the appropriate information source for each decision. We formulate this problem as uncertainty routing among ACT, CLARIFY, and VERIFY, and propose PROUR, a proactive uncertainty routing framework. PROUR decomposes action uncertainty into disagreement across plausible user-goal interpretations, which signals user-side ambiguity, and the entropy remaining within each interpretation, which signals missing world-side evidence. To acquire information from the routed source, a query generator is trained with a mode-conditioned information-gain reward, targeting user-goal identification under CLARIFY and next-action identification under VERIFY. On $τ$-bench, PROUR achieves 28.17% average success rate across retail and airline, outperforming the strongest prior method by 4.57% while using 2.17 fewer interaction steps. The learned policy further generalizes to stronger task agents and transactional domains of $τ^3$-bench without retraining, demonstrating the benefit of source-aligned uncertainty resolution for proactive agents.",
    "published": "2026-09-26T05:25:50Z",
    "updated": "2026-09-26T05:25:50Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.32255"
  },
  {
    "id": "2609.32254",
    "title": "Why Directly Learning Periodic Trajectories Can Fail",
    "authors": [
      "Kaixin Zheng",
      "Anita Layton"
    ],
    "abstract": "Operator learning of periodic solutions requires deciding how simulation data should be recorded and represented. A natural choice is to integrate long enough for transients to decay and record a window wide enough to contain at least one full period of all trajectories. We find that these conservative choices can make the resulting trajectories difficult to learn, even when the underlying periodic orbits vary regularly with system parameters. Unaligned trajectories generalize poorly even within the training distribution. Phase alignment substantially improves in-distribution generalization, but models trained on a fixed physical-time window still have large errors on trajectories with periods outside the training range. We explain both failures through a common mechanism: frequency differences accumulate over time, so the target phase varies rapidly with the parameters. Predictors that cannot track this variation incur a population MSE floor in both settings; for fixed window prediction, we also derive a per-sample lower bound. We then study one of the simplest representations that escape these floors: learning an aligned, normalized waveform and its period separately. We establish regularity of the decoupled targets under ODE assumptions and show experimentally that this approach avoids both failures in ODE systems and a PDE case study.",
    "published": "2026-09-26T05:19:56Z",
    "updated": "2026-09-26T05:19:56Z",
    "categories": [
      "cs.AI",
      "math.CA",
      "math.NA"
    ],
    "url": "https://arxiv.org/abs/2609.32254"
  },
  {
    "id": "2609.32253",
    "title": "DS-VLA: A Dendritic-inspired Vision-Language-Action Model for Robust Action Control",
    "authors": [
      "Yaxing Lyu",
      "Jingyi Li",
      "Mingkun Xu",
      "Yujie Wu"
    ],
    "abstract": "Vision-language-action (VLA) models have achieved strong performance in language-conditioned manipulation, yet success under nominal evaluation does not necessarily translate into robust closed-loop behavior when executed actions are transiently corrupted. We introduce DS-VLA, a dendritic-inspired action architecture that incorporates dendritic spiking dynamics into VLA control to address this limitation. Specifically, to enable modularized feature processing and temporal information integration, DS-VLA equips action neurons with multiple sparsely connected dendritic branches, each featuring heterogeneous, learned decay factors. Furthermore, to suppress unreliable state updates while preserving task-relevant historical information, we introduce a neuron-wise inhibitory gate that adaptively regulates the admission of new multimodal evidence into dendritic states prior to somatic dynamics. We evaluate DS-VLA on all four LIBERO suites under both nominal rollouts and a unified closed-loop action-perturbation protocol. DS-VLA achieves a 91.6\\% average nominal success rate and an 87.35\\% average perturbed success rate, retaining 95.4\\% of its nominal performance. Under the same reported perturbation setting, OpenVLA-OFT, FAST, $π_0$, and GR00T achieve 39.45\\%, 23.90\\%, 28.55\\%, and 30.75\\%, respectively. A controlled ablation isolates the contribution of neuron-wise shared inhibition, while analyses of neural dynamics and post-perturbation trajectories associate robust performance with selective evidence suppression and effective behavioral recovery. Together, these results demonstrate that integrating brain-inspired computational mechanisms offers a promising architectural prior for robust embodied intelligence beyond merely scaling vision-language backbones or generative action decoders.",
    "published": "2026-09-26T05:17:16Z",
    "updated": "2026-09-26T05:17:16Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.NE"
    ],
    "url": "https://arxiv.org/abs/2609.32253"
  },
  {
    "id": "2609.32250",
    "title": "RoboSTAR: Next-Scale Autoregressive Sign Language Translation for Humanoid Robots",
    "authors": [
      "Yujia Zeng",
      "Chensheng Peng",
      "Yuxin Chen",
      "Alex Shao",
      "Nathan Jew",
      "Masayoshi Tomizuka"
    ],
    "abstract": "Sign-language interpretation in public communication relies on qualified professional interpreters and can be difficult to scale, motivating robotic signing as a complementary accessibility interface. We present RoBoSTAR, a text-conditioned sign language production (SLP) framework for generating human-centric sign motion that can be retargeted for robotic execution, with speech supported optionally through an external ASR front end. Conventional autoregressive approaches flatten motion into a single full-resolution token sequence, forcing long-range and local dependencies to be modeled at a uniform temporal granularity. RoBoSTAR instead combines part-wise Finite Scalar Quantization with next-scale autoregression, generating motion over progressively finer temporal resolutions while predicting synchronized body and hand tokens in parallel within each step. This coarse-to-fine formulation provides compact long-range context before progressively refining motion details, while self-conditioning and context corruption improve robustness to cross-scale prediction errors. The generated motion is subsequently retargeted for physical humanoid execution. Extensive qualitative and quantitative evaluations are conducted to demonstrate the effectiveness of RoBoSTAR.",
    "published": "2026-09-26T05:12:00Z",
    "updated": "2026-09-26T05:12:00Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.32250"
  },
  {
    "id": "2609.32247",
    "title": "Certifying Interventional Agreement Among Observationally Equivalent Causal Models",
    "authors": [
      "Sourena Khanzadeh",
      "Daniel Platnick",
      "Marjan Alirezaie",
      "Hossein Rahnama"
    ],
    "abstract": "Observationally equivalent causal models can still disagree about what happens under intervention, because interventions create inputs that never occur in observational data. We introduce Interventional Separation Selection (ISS), which repeatedly queries the true system with an admissible intervention on which the surviving candidate models disagree, discards the candidates the outcome contradicts, and stops once no intervention within a cost bound separates the survivors. If the true system is among the candidates, this stopping condition certifies that every survivor agrees with it on every admissible intervention within the bound, a guarantee that no observational learner can give, however much data it sees. The stopping condition depends only on the survivors, so it can be checked without knowing the truth. For continuous variables the candidates form an infinite version space, and mixed-integer linear programs decide the stopping condition exactly over all of it, with agreement holding up to a tolerance. On a three-digit colored MNIST causal abstraction task in which ink hue tracks digit size, plain convolutional networks trained on examples reach zero held-out error, yet disagree with shape-based labels on 26% of single-digit edits, as often as hue-based labels do. Auditing the causal abstractions of networks observed only on such images, ISS certifies what each network perceives with 13.6 interventions per image on average, and each certificate, checked against every admissible intervention, holds whenever the network's true abstraction is among the candidates. When a network bypasses a unit that every candidate abstraction relies on, certificates covering interventions on that unit can be silently void, and twenty random validation interventions refute 69% of them.",
    "published": "2026-09-26T05:07:57Z",
    "updated": "2026-09-26T05:07:57Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.32247"
  },
  {
    "id": "2609.32245",
    "title": "AutoPDEBench: Benchmarking LLM Auto-Research for Neural PDE Solver Design",
    "authors": [
      "Ruoyan Li",
      "Wei Wang",
      "Yizhou Sun"
    ],
    "abstract": "Partial differential equations (PDEs) are essential for modeling complex physical systems, and neural solvers have recently emerged as powerful data-driven tools for numerically solving them. However, existing neural solvers struggle with domain-specific challenges, such as varying parameters and high-speed flows, necessitating specialized architectures. Manually designing these specialized solver architectures is a highly iterative, time-consuming process requiring deep expertise, creating a significant bottleneck in scientific discovery. We propose leveraging autonomous AI research agents to automate the synthesis of specialized solvers. To support this, we introduce AutoPDEBench, a benchmark dedicated to LLM-driven automated research for PDE solver design. The benchmark includes 25 challenging datasets featuring both novel and actively studied physical scenarios. We evaluate a suite of general-purpose models (transformer, ROM, and graph-based) alongside a multi-agent instantiation of the iterative automated research pipeline, which serves as an agentic baseline. Empirical results show that the iterative automated research system significantly outperforms the general-purpose neural solver baselines. Our findings demonstrate the viability of using AI agents to automatically design neural solvers for complex physical systems. AutoPDEBench provides a foundational testbed to accelerate agent-driven scientific discovery in physics and engineering.",
    "published": "2026-09-26T05:02:34Z",
    "updated": "2026-09-26T05:02:34Z",
    "categories": [
      "cs.CE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.32245"
  },
  {
    "id": "2609.32244",
    "title": "Two-Stage Multi-View Gait Recognition with a Re-Embedding Network",
    "authors": [
      "Long Hoang Le",
      "Trung Thanh Ngo"
    ],
    "abstract": "Gait recognition always remains challenging due to severe overfitting and the rigid view constraints common in single-stage approaches. We propose a two-stage framework, termed Translate-First-Then-Reason (TFTR), to address these issues. In the first stage, a shallow Siamese convolutional network with triplet loss maps Gait Energy Images (GEIs) into a 128-dimensional view-specific embedding space. In the second stage, these per-view embeddings are treated as tokens and processed by a 12-layer Transformer encoder, which re-projects them into a new space with improved cosine separability. This design enables flexible fusion of an arbitrary number of views at inference, overcoming the fixed-input limitations of prior methods. Trained on the OU-MVLP dataset (6,000 subjects) and evaluated on unseen CASIA-B across normal, bag-carrying, and coat-wearing conditions, our pipeline achieves 96.91\\% single-view and 99.49\\% three-view accuracy on OU-MVLP, and attains 100\\% accuracy on CASIA-B with three views.",
    "published": "2026-09-26T05:02:13Z",
    "updated": "2026-09-26T05:02:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.32244"
  },
  {
    "id": "2609.32241",
    "title": "Residual Transferability in Neural Image Watermarking",
    "authors": [
      "Ziping Dong",
      "Qi Li",
      "Xinchao Wang"
    ],
    "abstract": "Neural image watermarks can be forged by extracting watermark-bearing residuals from released images and transferring them to unrelated content. While prior work has demonstrated this vulnerability, what makes these residuals transferable remains poorly understood. We formalize this vulnerability with \\textbf{residual transferability (RT)}, a metric that quantifies how well watermark evidence remains decodable after transfer across unrelated images. Through comparative analyses and controlled interventions, we find that common training-side variations do not account for the large RT differences across watermarking systems; instead, architectural design plays a central role. By contrasting high- and low-RT systems and validating their architectural differences through controlled interventions, we identify two mechanisms that strengthen the dependence of watermark evidence on the cover image, thereby suppressing the residual transferability. These findings provide concrete design guidance for developing more forgery-resistant watermarking architectures. Complementarily, for existing watermarking systems where architectural redesign is impractical, we introduce \\textbf{CoverLock}, a plug-and-play strategy for existing watermarking systems that strengthens such image dependence without architectural redesign. Across representative watermarking systems exhibiting high residual transferability, CoverLock achieves a more favorable security--robustness trade-off than both traditional handcrafted defenses and learned classifier-based defenses.",
    "published": "2026-09-26T04:59:33Z",
    "updated": "2026-09-26T04:59:33Z",
    "categories": [
      "cs.CR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.32241"
  },
  {
    "id": "2609.32239",
    "title": "Federated Subspace Guided Vision-Language-Action Policy Distillation for Non-IID Multi-Robot Manipulation",
    "authors": [
      "Biprodip Pal",
      "Kaushik Roy",
      "Yanming Zhu",
      "Brendan Tidd",
      "Alan Wee-Chung Liew",
      "Peyman Moghadam"
    ],
    "abstract": "Federated learning offers a natural way for multiple robots to jointly improve manipulation policies without requiring centralized access to training demonstrations. However, non-IID task and environment distributions can induce representation drift and mutually incompatible robot-policy updates, making naive parameter aggregation destructive. We present FedDRMan, a federated subspace-guided distillation framework for heterogeneous robot manipulation. At each communication round, the server model provides a frozen teacher for local behavior cloning, while low-rank multimodal subspace and action-distribution distillation preserve globally useful representation geometry and policy behavior. To address heterogeneous aggregation, FedDRMan groups clients by update compatibility and maintains a persistent model for each cluster. The server then spectrally rebalances each compatible aggregate to mitigate attenuation of weaker task-relevant robot-policy update directions. Extensive experiments on LIBERO across diverse non-IID settings, heterogeneity levels, client participation variation, together with ablations and aggregation analyses, show that FedDRMan substantially improves knowledge transfer and consistently outperforms strong federated baselines achieving a peak mean success rate of 80.7%, 11.6 percentage points above the strongest evaluated federated baseline.",
    "published": "2026-09-26T04:56:49Z",
    "updated": "2026-09-26T04:56:49Z",
    "categories": [
      "cs.RO",
      "cs.CV",
      "cs.DC",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.32239"
  },
  {
    "id": "2609.32231",
    "title": "Skeletons in Flow: Graph Structured Flow Matching for Human Motion Prediction",
    "authors": [
      "Yixuan Wang",
      "Brandon C. Fallin",
      "Warren E. Dixon"
    ],
    "abstract": "Human motion prediction requires diverse future trajectories that remain consistent with observed motion and the articulated physical structure of the body. Skeletal constraints restrict individual poses, while coordinated motion depends on spatial interactions (between connected joints) and temporal interactions (between time instants). To facilitate human motion prediction in light of these constraints and interactions, we introduce Graph Structured Flow Matching (GSFM), which transports the complete future skeletal trajectory through a single conditional velocity field. The trajectory produces a spatiotemporal skeleton graph, and spatial and temporal attention couple its evolution according to skeletal relations and physical time offsets. Bone directions lie on unit spheres relative to a root joint, and tangent evolution preserves input bone lengths throughout generation. We train a learned velocity field through conditional flow matching along geodesic paths connecting random trajectories centered on the last-observed pose to recorded future trajectories. Experiments on the Archive of Motion capture As Surface Shapes (AMASS) dataset evaluate prediction accuracy, diversity calibration, and motion statistics. We demonstrate the contributions of spatial and temporal message passing in the developed architecture through an ablation study. GSFM models trained on AMASS also perform competitively on the Human3.6M skeleton without parameter updates or retraining, demonstrating applicability to an unseen skeletal structure.",
    "published": "2026-09-26T04:45:53Z",
    "updated": "2026-09-26T04:45:53Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2609.32231"
  },
  {
    "id": "2609.32226",
    "title": "Toward Agentic Optical Networks: A Vision of LLM Agent-Driven Autonomous Lifecycle Management",
    "authors": [
      "Yao Zhang",
      "Shengnan Li",
      "Yuchen Song",
      "Yidi Wang",
      "Yue Pang",
      "Wenbin Chen",
      "Xiaotian Jiang",
      "Xiao Luo",
      "Meixia Fu",
      "Min Zhang",
      "Yongli Zhao",
      "Shanguo Huang",
      "Alan Pak Tao Lau",
      "Danshi Wang"
    ],
    "abstract": "As optical networks continue to expand in scale, complexity, and service diversity, the implementation of automation has become essential for ensuring agility, efficiency, and reliability in lifecycle management (LCM) of optical networks. Large language model (LLM) Agent, distinguished by its progressively sophisticated capabilities in logical reasoning, adaptive decision-making, complex problem solving, and multi-task orchestration, presents great opportunities to advance network automation beyond traditional AI techniques. Nevertheless, the application of LLM Agent in optical networks remains in its early exploratory stage, challenged by the lack of multi-task coordination, high computational demands, data dependence, and reliability concerns. In this paper, we envision a conceptual roadmap toward Agentic Optical Networks (AONs) by integrating LLM Agents throughout the LCM with high-level autonomy. First, we trace the evolution from manual operations to AI-empowered frameworks and distill key technologies in Agent, providing actionable insights into leveraging its strengths for addressing practical network automation challenges. A core contribution of this paper is the proposal of a hierarchical multi-Agent framework, which is specifically developed to manage every phase in LCM of AONs, including planning, deployment, operation, maintenance, upgrade, and decommission, thereby enabling more cohesive and comprehensive automation throughout the entire lifecycle. In addition, future directions and underlying challenges are also discussed at the intersection of LLM and optical networks. By aligning the LLM Agent with the specialized requirements of AONs, this work aims to explore the potential for the evolution of optical networks moving from task-level semi-automatic execution toward lifecycle-level full autonomy.",
    "published": "2026-09-26T04:41:31Z",
    "updated": "2026-09-26T04:41:31Z",
    "categories": [
      "cs.NI",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.32226"
  },
  {
    "id": "2609.32225",
    "title": "LaMET-Agent: An Agent Framework for Large-Momentum Effective Theory Analysis",
    "authors": [
      "Jinchen He",
      "Xiangyu Jiang",
      "Fei Yao",
      "Dian-Jun Zhao"
    ],
    "abstract": "Large-momentum effective theory (LaMET) provides a first-principles framework for computing the $x$ dependence of light-cone parton distributions from lattice QCD. Over the past decade, theoretical and numerical advances have established a mature multi-stage workflow for systematic calculation of parton physics, although its implementation still requires expert judgment and substantial repeated effort. We present lamet-agent, an open-source large language model (LLM) agent framework that organizes this workflow into an executable, reproducible, and inspectable analysis pipeline. The present release supports collinear quark distributions and implements correlator analysis, renormalization, Fourier transformation, perturbative matching, continuum, physical pion mass and infinite-momentum extrapolations, and automated result review. We validate it on four end-to-end analyses: pion parton distribution functions in the gauge-invariant and Coulomb-gauge formulations, and pion and kaon distribution amplitudes, obtaining results consistent with the published calculations. Extensions to transverse-momentum-dependent distributions, generalized transverse-momentum-dependent distributions, and gluonic distribution functions are planned for subsequent releases.",
    "published": "2026-09-26T04:35:11Z",
    "updated": "2026-09-26T04:35:11Z",
    "categories": [
      "hep-lat",
      "cs.AI",
      "hep-ph"
    ],
    "url": "https://arxiv.org/abs/2609.32225"
  },
  {
    "id": "2609.30855",
    "title": "MDSkin-Net: Multi-Task Skin Lesion Analysis Driven by Pattern Analysis Priors and Spatial Alignment Regularization",
    "authors": [
      "Yijian Li",
      "Saad Bedros",
      "Paul Bigliardi",
      "Mei Bigliardi Qi",
      "Vassilios Morellas",
      "Nikolaos Papanikolopoulos"
    ],
    "abstract": "Reliable skin lesion segmentation and classification are central to dermoscopic computer-aided diagnosis. Existing multi-task frameworks couple the two tasks architecturally without clinical knowledge, while knowledge-injecting approaches rely on the macroscopic ABCD rule, which was not designed for dermoscopy. Dermoscopic diagnosis is grounded in Pattern Analysis, a microscopic framework structured around dermoscopic features. We propose MDSkin-Net, which incorporates cue-level Pattern Analysis priors into a hybrid CNN-Transformer architecture. At its core is a Pattern Analysis-Guided Attention Module (PAGAM) comprising three priors motivated by distinct dermoscopic cues: an improved Efficient Channel Attention (iECA), a Multi-Scale Spatial Attention (MSSA), and a Biased Asymmetry Attention (BAA). We further introduce a multi-scale spatial alignment regularization (MSAR) that uses the segmentation ground-truth mask as hierarchical soft supervision, confining the classification head to lesion-localized evidence and coupling both task pathways through a shared spatial prior. Trained exclusively on the ISIC 2017 training split without external dermoscopy data, the MDSkin-Net ensemble transfers robustly under zero-shot evaluation, reaching a Dice Similarity Coefficient (DSC) of 92.38% and a melanoma AUC of 97.84%on PH2, and a DSC of 88.92% on the ISIC 2018 Task 1 test set. On the in-domain ISIC 2017 benchmark, the ensemble attains a mean Area Under the Curve (AUC) of 91.60% across the two classification tasks (melanoma and seborrheic keratosis vs. rest), and a DSC of 84.72% for segmentation. Classification remains competitive with baselines; in-domain segmentation trails single-task specialists, yet the proposed priors and alignment regularization yield representations that generalize consistently across cohorts of different scales.",
    "published": "2026-09-25T06:02:34Z",
    "updated": "2026-09-25T06:02:34Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.30855"
  },
  {
    "id": "2609.30841",
    "title": "Why Jailbreaks Succeed in Diffusion Language Models: An Energy Landscape Analysis",
    "authors": [
      "Thong Bach",
      "Dung Nguyen",
      "Thao Minh Le",
      "Truyen Tran"
    ],
    "abstract": "Existing attacks and defenses for diffusion-based large language models (dLLMs) target specific vulnerabilities but lack a shared framework explaining why attacks succeed. We propose one by interpreting safety alignment as shaping the denoising energy landscape: a well-aligned model routes harmful queries toward safe outputs through an energy barrier that separates the two regions. Current jailbreak attacks reduce to two strategies for circumventing this barrier: obscuring the query's safety disposition at initialisation, or intervening mid-trajectory to force the denoising path across the energy barrier. From this perspective and the result that masked diffusion models minimise kinetic energy during denoising, we derive three complementary, training-free detection signals: a step-0 ratio that reads the initial safety disposition from the logit distribution before generation begins, and two trajectory-velocity signals that track kinetic energy in complementary subspaces of the logit space. An attack must either reveal its intent at initialisation or expend kinetic energy to cross the barrier in at least one monitored subspace, so the three signals cover each other's blind spots in the energy budget by construction. Evaluation across three dense dLLMs (LLaDA-8B, LLaDA-1.5, Dream-7B) and a sparse mixture-of-experts dLLM (LLaDA-MoE-7B) confirms this complementarity. In stress tests of known attacks, every configuration that evades detection also fails to produce harmful content, suggesting that the detection and barrier-crossing thresholds are hard to separate.",
    "published": "2026-09-25T05:35:36Z",
    "updated": "2026-09-25T05:35:36Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30841"
  },
  {
    "id": "2609.30840",
    "title": "Aligning One-Step Generative Models with Reward-Weighted Transport Distillation",
    "authors": [
      "Austin Wang",
      "Ziheng Cheng",
      "Lexing Ying"
    ],
    "abstract": "One-step generators enable high-quality visual generation with a single network evaluation, but their post-training is difficult: general implicit generators provide neither tractable likelihoods nor denoising trajectories, and many rewards are non-differentiable. We introduce Reward-Weighted Transport Distillation (RWTD), a post-training method that requires only generated samples and scalar reward evaluations. Rather than aligning solely to the conventional reward-tilted reference distribution, RWTD constructs an adaptive target that mixes separately tilted current and reference distributions. The current component incorporates improvements discovered during training, while the reference component anchors the target to the pretrained generator. RWTD realizes this target through feature-space optimal transport and fixed-point regression. Theoretical analysis shows that the fixed-point distributions of RWTD interpolate between off-policy reward tilting of the reference and on-policy tilting of the current model, providing a principled approach to balancing reward adaptation with retention of prior knowledge. Empirically, RWTD substantially improves the GenEval score of the one-step SANA Sprint 1.6B backbone from 0.73 to 0.80, while separate preference alignment experiments demonstrate strong cross-reward generalization that yields balanced improvements and preservation of compositional capabilities.",
    "published": "2026-09-25T05:35:32Z",
    "updated": "2026-09-25T05:35:32Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.30840"
  },
  {
    "id": "2609.30837",
    "title": "MOPD-Router: Rethinking Teacher Routing in Multi-Teacher On-Policy Distillation",
    "authors": [
      "Tianze Xu",
      "Yanzhao Zheng",
      "Zhentao Zhang",
      "Yuanqiang Yu",
      "Chao Ma",
      "Jihuai Zhu",
      "Lelun Wu",
      "Lyumanshan Ye",
      "Pengfei Liu",
      "Baohua Dong",
      "Hangcheng Zhu",
      "Ruohui Huang",
      "Gang Yu"
    ],
    "abstract": "Multi-teacher on-policy distillation (MOPD) integrates specialized capabilities into a single student, but existing practice typically hard-routes each prompt to a domain-matched teacher for the entire rollout. This dependence on prompt-level domain labels restricts using unlabeled training mixtures and leaves complementary signals from other teachers unused. We introduce MOPD-Router, a framework that routes supervision over the full teacher pool at each token, without domain labels or training a separate routing model. Its plug-in interface supports different metrics for selecting and weighting teacher-specific OPD signals. Within this interface, we propose ExpertAlign, which scores each teacher by whether its correction to the student at the current token expresses the specialization that teacher acquired during post-training, and compare it against two reference metrics built on teacher confidence (Entropy) and teacher-student discrepancy (Novelty). Experiments on unlabeled and domain-labeled training mixtures under strong-to-weak and same-size distillation scenarios show that ExpertAlign achieves the strongest overall performance in all four settings. On unlabeled data, it improves the overall score by 5.88 (+12.3%) points over Mean aggregation; on domain-labeled data, it outperforms standard MOPD by 3.95 (+7.8%) points without using available domain labels. These results demonstrate token-level routing can exploit cross-domain complementary supervision, and reduce exclusive reliance on prompt-level domain assignment. Code is available at: https://github.com/TURLEing/MOPD-Router.",
    "published": "2026-09-25T05:32:03Z",
    "updated": "2026-09-28T12:07:02Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30837"
  },
  {
    "id": "2609.30836",
    "title": "PTC-Decoder: Towards Intelligent SLMs on Offline Resource-Constrained Edge Devices",
    "authors": [
      "Minghui Yu",
      "Ke Mu",
      "Gang Wu"
    ],
    "abstract": "Deploying small language models (SLMs) on offline, resource-constrained edge devices such as remote sensing satellites presents a fundamental challenge: their limited reasoning capacity hinders reliable execution of multi-step agent tasks requiring complex tool orchestration. Existing plan-solve paradigms rely on prompt-based enforcement, which our experiments show SLMs almost entirely disregard: weak models fail to invoke the plan. We propose PTC-Decoder (Plan-Tool Constrained Decoder), a training-free, plug-and-play decoder framework that combines (1) a Plan-to-Act paradigm, which elevates planning to an atomic tool and forces its invocation at the first inference step, and (2) TC-Decoder, a deterministic finite automaton that imposes token-level hard constraints on tool names while preserving freedom over parameter generation, thereby retaining SLM reasoning capability. Evaluated on 200 real remote-sensing satellite tasks across 7 SLMs, PTC-Decoder yields a statistically significant mean overall score gain of +1.21 (p<0.01), 95% CI [+1.13, +1.29]), with consistent improvements across models and other datasets. An ablation study that removes TC-Decoder causes substantial performance degradation across all quality metrics without reducing computational cost, confirming TC-Decoder as the primary driver. PTC-Decoder thus offers a lightweight yet effective solution for improving step-level reliability, with final-answer accuracy remaining an open challenge. In essence, we enforce plan adherence by constraining the permissible output vocabulary during inference, without requiring retraining.",
    "published": "2026-09-25T05:30:35Z",
    "updated": "2026-09-25T05:30:35Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30836"
  },
  {
    "id": "2609.30832",
    "title": "Subject-Invariant Cross-Modal Decoding of Perceived Speech from Brain Recordings",
    "authors": [
      "Aoke Zhang",
      "Jing Chen"
    ],
    "abstract": "Perceived speech decoding based on non-invasive brain-computer interface (BCI) signals has been extensively studied in recent years. Research in this field primarily faces two challenges: extracting neural representations with rich spatiotemporal information and achieving cross-subject generalization. Although separate studies have proposed methods to cope with these issues, a unified approach that simultaneously tackles both challenges remains lacking. To fill this gap, we propose the Subject-Invariant Cross-Modal Perceived Speech Decoding (SICMD) method, which integrates functional magnetic resonance imaging (fMRI) and magnetoencephalography (MEG). We conduct comprehensive analyses of the fusion method, fusion position, encoder architecture, and model inputs. Our results demonstrate that the proposed method improves Top-1, Top-10, and Rankacc by more than 10.6%, 10.1%, and 1.7%, respectively, compared to baseline methods in cross-subject perceived speech decoding tasks, while reducing training costs by 88.8% and 60.5% compared to multi-subject and intra-subject decoding settings. Further visualization experiments also confirm the effectiveness of our approach.",
    "published": "2026-09-25T05:22:13Z",
    "updated": "2026-09-25T05:22:13Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "eess.AS"
    ],
    "url": "https://arxiv.org/abs/2609.30832"
  },
  {
    "id": "2609.30831",
    "title": "CDBG: Causally Motivated Dual-Invariance Learning against Topological and Predictive Shifts in EEG Workload Recognition",
    "authors": [
      "Yuzhe Zhang",
      "Wenmin Zhou",
      "Chengxi Xie",
      "Kai He",
      "Jihong Wang",
      "Huan Liu",
      "Man Yao",
      "Daoqiang Zhang"
    ],
    "abstract": "Generalizing Electroencephalography (EEG)-based mental workload recognition to unseen subjects remains a formidable challenge due to severe inter-subject variability. While functional brain graphs effectively model distributed cognitive dynamics, their inherent subject-specificity induces two coupled distribution shifts: a class-conditional topological shift in the underlying functional connectivity, and a predictive mechanism shift in the learned representation-to-label mapping. Motivated by the subject-induced distribution shifts, we propose CDBG, a Causally motivated Dual-invariance learning framework for Brain Graphs. CDBG disentangles and mitigates these shifts via a two-stage rationale learning pipeline. First, it employs stochastic edge masking to extract sparse, workload-predictive graph rationales, regularized by workload-conditional Laplacian spectral alignment to enforce topological invariance across subjects. Second, it applies subject-wise Invariant Risk Minimization (IRM) to the graph representations, ensuring environment-wise risk stationarity. Extensive experiments on a self-built air traffic controller EEG cognitive workload dataset and multiple public datasets under a strict leave-one-subject-out protocol demonstrate that CDBG significantly outperforms state-of-the-art cross-subject and graph-based baselines, improving the Macro-F1 score by up to 4.23%, while simultaneously providing neurophysiologically interpretable functional rationales.",
    "published": "2026-09-25T05:22:06Z",
    "updated": "2026-09-25T05:22:06Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.30831"
  },
  {
    "id": "2609.30818",
    "title": "Evaluation Is All You Need for Multi-Modal Autonomous Driving",
    "authors": [
      "Zeyu He",
      "Shiqi Liu",
      "Ke Chen",
      "Yun Yan",
      "Jinzi Wu",
      "Dianqiao Lei",
      "Sirui Wang",
      "ShuRui Peng",
      "Tao Chen",
      "Zhuo Huang",
      "Yu Wu",
      "Yadong Shao",
      "Zhichao Li",
      "Ke Sun",
      "Yang Guan",
      "Keqiang Li",
      "Shengbo Eben Li"
    ],
    "abstract": "Multi-modal planning is promising for autonomous driving by representing multiple plausible behaviors in ambiguous and long-tail scenarios. Existing methods mainly focus on improving trajectory multi-modality, enhancing trajectory representations, or reshaping the candidate distribution. Nevertheless, we identify a pronounced generation-evaluation asymmetry in multi-modal planning: despite strong oracle performance, existing planners often fail to reliably select the best available candidate, leaving substantial planning potential unrealized. To address this challenge, we propose iDriveVLA, a multi-modal planning framework that improves the candidate trajectory space while enabling more reliable and context-aware trajectory evaluation. Specifically, iDriveVLA introduces a unified trajectory evaluator comprising a Safety-aware Scorer for quality and risk estimation, together with a VLM-guided Modulator for scene-adaptive criterion weighting. We further develop an oracle-aligned progressive training strategy consisting of candidate imitation pretraining, candidate space refinement, and semantic ranking alignment. On the public NAVSIM v1 leaderboard, iDriveVLA achieves a new state-of-the-art performance of 94.95 PDMS, surpassing the human-expert reference.",
    "published": "2026-09-25T04:56:15Z",
    "updated": "2026-09-25T04:56:15Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30818"
  },
  {
    "id": "2609.30813",
    "title": "A Benchmark and Diagnostic Study of Epistemic Admission in Shared Agent Memory",
    "authors": [
      "Xiaoyang Li",
      "Yiqi Wang",
      "Chencheng Zhu",
      "KE XU",
      "Wencheng Yang",
      "Zequn Sun",
      "Pingan Song",
      "Yiqun Duan",
      "Taotao Cai"
    ],
    "abstract": "Evaluating claim admission in shared agent memory is challenging because repeated claims may be mistaken for independent evidence. An agent may copy or paraphrase a retrieved belief, while admitting a false claim exposes subsequent agents to it. To study this problem, we introduce the Correlated Promotion Benchmark (CPB), which evaluates whether candidate claims should be admitted to shared memory.CPB-Static constructs a frozen test split from publicly annotated sources with fixed gold actions. CPB-Live runs multi-agent teams over a shared store, records all writes and retrievals, and tracks source lineage defined by each scenario. A separate consumer answers from the store alone. We evaluate eight admission policies across four agent families. Our results show that policies which deduplicate sources reject many true claims alongside false ones, whereas policies preserving answer coverage admit nearly as many false claims as unrestricted sharing. Gating on declared source type reduces false adoption to 0.06--0.09, compared with 0.22--0.47 for other answering policies. Once an uncontested false belief enters memory, the consumer asserts it in 0.97--0.99 of probes across all families. No non-oracle policy consistently rejects false claims across verbatim copies, paraphrases, and paraphrases declared authoritative. These findings reveal the limitations of admission policies without access to source lineage.",
    "published": "2026-09-25T04:48:31Z",
    "updated": "2026-09-25T04:48:31Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30813"
  },
  {
    "id": "2609.30805",
    "title": "XPhysICS: Cross-Physical-Domain Threat Grounding for Industrial Control Systems Security",
    "authors": [
      "Sangshin Park",
      "Jainta Paul",
      "Lawrence Ponce",
      "Md Raihan Ahmed",
      "Mu Zhang",
      "Luis Garcia"
    ],
    "abstract": "Industrial control system (ICS) threats documented for one plant can express cyber-physical effects relevant to another, but semantic similarity alone does not establish whether those effects are structurally admissible or evaluable on a target. We present XPhysICS, a provenance-aware, target-conditioned method that separates analyst-guided source abstraction from deterministic grounding into target-specific validation slices. Given a fixed source abstraction, vocabulary and schema, and machine-validated target contract, XPhysICS evaluates candidate mappings using five eligibility criteria: role compatibility, implemented type compatibility, stage coherence, slice viability, and rule-surface applicability. Grounding acceptance, slice adequacy, dynamic realizability, consumer applicability, and consumer outcome remain distinct evidence layers. We evaluate 83 structured source-threat abstractions across water treatment, water distribution, hydro/water-energy, and chemical-process targets. Controlled target-side studies of SWaT-to-water-treatment and WADI-to-water-distribution groundings produce clean, nominal-confounded, and near-threshold consumer outcomes; nine Hydro/GRFICS cases extend bounded validation-slice execution. We also evaluate bounded predictive, state-aware, and phase-aware consumer lanes, the unmodified upstream GeCo implementation, and a paper-derived reproduction of a physics-guided search method over three frozen groundings. Results show that cross-domain ICS threat reuse requires traceable source semantics, explicit target-conditioned grounding criteria, and careful separation of subsequent target-side evidence.",
    "published": "2026-09-25T04:33:17Z",
    "updated": "2026-09-25T04:33:17Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30805"
  },
  {
    "id": "2609.30798",
    "title": "Evaluating Real-Time Voice Agents: From Component Quality to Grounded Outcomes",
    "authors": [
      "Shivam Negi",
      "Arpit Rawat",
      "Rashi Jain"
    ],
    "abstract": "Real-time voice agents have moved from research prototypes to production deployments, yet the literature describing them is fragmented across three communities that rarely cite one another: speech foundation modelling, turn-taking psycholinguistics, and agentic evaluation. Architecture papers report latency, turn-taking papers report prediction accuracy, and agentic benchmarks report task success, so no single number describes whether a deployed agent is actually good. We address that gap with three evidence-based claims, each traceable to a corpus of 38 primary sources organised into an application-centric taxonomy of six categories. First, architecture choice is a deployment constraint rather than a settled verdict: a 2026 enterprise tutorial reports that no fully self-hostable end-to-end system yet meets production constraints, while a chunked cascade independently reaches state-of-the-art duplex behaviour, showing duplex behaviour is separable from duplex architecture. Second, evaluation has shifted decisively from component quality toward grounded outcomes, with recent benchmarks verifying backend state rather than trusting what the agent claims to have done. Third, the dyadic assumption in most models and benchmarks is breaking down: multiparty turn-taking and multi-speaker reasoning benchmarks show that deciding when not to speak, and reasoning about who may be told what, are first-class capabilities two-participant framings cannot measure. For each source we state the problem it targets, its mechanism, and its reported evidence, alongside the search strategy, inclusion criteria, and a verification step that caught a misattributed arXiv identifier in circulation. We propose TRG (Timing-Recovery-Grounded), a reporting standard characterising an agent by timing, post-disruption recovery, and state-verified outcome together, with a conditional fourth axis for multiparty deployments.",
    "published": "2026-09-25T04:22:20Z",
    "updated": "2026-09-25T04:22:20Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30798"
  },
  {
    "id": "2609.30797",
    "title": "HasMem: Hard-Origin Adaptively Softened Memory for Long-Term LLM Agents",
    "authors": [
      "Zihong He",
      "Junxiao Shen",
      "Chen Liang",
      "Hai-Ning Liang"
    ],
    "abstract": "Text-based memory and context compression support reuse of past interactions. Resizing continuous memory changes the input to a frozen LLM, coupling capacity allocation with readout. We propose Hard-Origin Adaptively Softened Memory (HasMem). Frozen hard-prompt embeddings provide a verifiable initial state. A controller adjusts memory widths, a Writer re-encodes resized entries, and Reader and Global provide readout adaptation and cross-turn state. On all $535$ questions in a reconstruction probe derived from the Multi-Session Chat (MSC) development split, the main configuration achieves lexical F1 of $95.3$ ($+4.4$ percentage points) at $93.6\\%$ of the hard reference's framed memory positions. With approximately matched per-question target body budgets, six configurations at mean per-entry retention around $0.83$--$0.91$ exceed rule-based re-encoding by $8.0$--$23.6$ exact-match (EM) percentage points. With fixed model parameters and rule target width ratio $0.75$, Global's EM gain passes a user-level exact paired test with Bonferroni correction over eight comparisons. On all $500$ LongMemEval-S questions, local lexical F1 rises from the hard reference's $3.4$ to $8.9$, and answer negative log-likelihood (NLL) falls from $12.257$ to $5.274$. F1 gains accompany lower EM on both evaluations.",
    "published": "2026-09-25T04:22:05Z",
    "updated": "2026-09-25T04:22:05Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30797"
  },
  {
    "id": "2609.17527",
    "title": "Agentic Societies Need a Social Harness",
    "authors": [
      "Tapan Chugh",
      "Vidushi Singh",
      "Krish Jain",
      "Arvind Krishnamurthy",
      "Ratul Mahajan"
    ],
    "abstract": "An agentic society is a collection of AI agents that coordinate autonomously across trust boundaries, on behalf of different principals whose objectives may only partially align. We show experimentally that in agentic societies even honest, competent agents often fail to reach satisfactory outcomes with existing harnesses and messaging primitives, and that faulty or malicious agents can stall collaboration, influence outcomes, and pursue other harmful goals by exploiting vulnerabilities in communication (``speech''). We argue that agentic societies need a \\emph{social harness} for inter-agent interactions, in addition to each agent's \\emph{personal harness}, which manages its private context and communication with its principal. We propose a layered architecture for social harnesses which (i) prevents classes of failures outright, (ii) enables agents to detect invalid messages at runtime, and (iii) supports post-facto investigation and consequences, and highlight directions for future research to realize these capabilities.",
    "published": "2026-09-15T17:57:27Z",
    "updated": "2026-09-15T17:57:27Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.NI"
    ],
    "url": "https://arxiv.org/abs/2609.17527"
  },
  {
    "id": "2609.17523",
    "title": "ScienceBuddy: Recursive-in-Recursive Self-Improvement for Interactive Scientific Agents",
    "authors": [
      "Shuhan Xue",
      "Jianyuan Zhong",
      "Ziyuan Nan",
      "Wenbin Li",
      "Zhaochen Yu",
      "Jinchao Ding",
      "Qiang Gao",
      "Pengyu Zhan",
      "Yuntong Zhang",
      "Tian Cheng",
      "Zhenfei Yin",
      "Yingcheng Wu",
      "Ling Yang"
    ],
    "abstract": "We introduce and release ScienceBuddy, an interactive scientific research workspace that brings continually improving scientific agents into researchers' everyday workflows. ScienceBuddy supports researchers in carrying out scientific tasks while transforming their requests, feedback, and execution evidence into tasks and evaluation rubrics for continual learning. At its core is recursive-in-recursive self-improvement, a paradigm that couples harness evolution with model reinforcement learning: the inner recursion improves the harness with the model fixed, while the outer recursion trains the model under the improved harness. Harness evolution shapes training experience, and model learning creates new opportunities for harness adaptation. We present case studies of researcher interaction, harness refinement, and model learning, with the benchmark cases spanning four scientific task families. By releasing ScienceBuddy as a research product, we make this paradigm available to the scientific community and take a step toward discovery intelligence: scientific AI that advances through sustained collaboration with researchers and evolves alongside the research it supports. Website: http://science-buddy.io",
    "published": "2026-09-15T17:55:28Z",
    "updated": "2026-09-15T17:55:28Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.17523"
  },
  {
    "id": "2609.17521",
    "title": "PhysStream: Streaming Physics-Grounded Video Generation with Structured Scene Memory and Fine-Grained Motion Control",
    "authors": [
      "Chuhao Chen",
      "Peter Wonka",
      "Chaoyang Wang",
      "Chen Wang",
      "Qiao Feng",
      "Sergey Tulyakov",
      "Lingjie Liu"
    ],
    "abstract": "Interactive control for video generation is moving from coarse prompts toward fine-grained, physically meaningful manipulation of dynamic scenes. Yet existing controllable methods either require the full control schedule before generation starts, or use pixel-space signals that dictate object positions rather than physical dynamics. To address these limitations, we propose PhysStream, an autoregressive model for physics-grounded image-to-video synthesis that incorporates structured scene memory---positional maps and object tracking maps derived online from previously generated frames---and supports fine-grained motion control via sparse velocity-increment signals that encode physical quantities, letting the model learn the underlying dynamics. We train our model in two stages: a bidirectional model is first finetuned with motion-control conditioning, then a causal autoregressive model is trained with additional structured scene memory, further improving physical consistency. PhysStream enables interactive, mid-generation control over multi-object tabletop rigid-body scenes---a capability not supported by prior methods---reducing motion distribution distance (FVMD) by 33% and trajectory error by 12% over the strongest baselines on synthetic benchmarks, and is preferred by human evaluators in over 85% of in-the-wild comparisons. Please check our website for more details: https://czzzzh.github.io/PhysStream",
    "published": "2026-09-15T17:55:13Z",
    "updated": "2026-09-15T17:55:13Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2609.17521"
  },
  {
    "id": "2609.17516",
    "title": "When Should LLMs Abstain? Chain-of-Self-Questioning for Selective Risk Control",
    "authors": [
      "Ali Şenol"
    ],
    "abstract": "Large language models can produce fluent answers when their factual support is weak. This paper introduces Chain-of-Self-Questioning (CoSQ), a prompt-only framework that makes answer commitment conditional on an explicit assessment of the information required to answer a question. We evaluate three CoSQ variants under seventeen conditions on the 817-item TruthfulQA multiple-choice validation set using eleven open-weight and hosted model families. In the final balanced-option protocol, Grounded-CoSQ at τ=0.90 reduces the mean unconditional wrong-commitment rate from 13.1% under chain-of-thought prompting to 8.9%, a 32.1% relative reduction, while increasing answered accuracy from 86.9% to 89.7% and answering 87.6% of questions. Both improvements hold for all eleven models and at every evaluated threshold. Critical-CoSQ and Adaptive-CoSQ provide neighboring operating points with 88.6% and 86.5% coverage, respectively, while remaining more reliable than the baseline. A secondary Natural Questions Short-Answer evaluation provides convergent open-form evidence. These findings show that self-assessment can support explicit, tunable answer-or-abstain decisions when an unsupported commitment is more costly than referral or review.",
    "published": "2026-09-15T17:52:24Z",
    "updated": "2026-09-15T17:52:24Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.17516"
  },
  {
    "id": "2609.17509",
    "title": "LACE: Layer-Wise Compression for Dynamic Frame Rate Codecs",
    "authors": [
      "Thanapat Trachu",
      "Samuele Cornell",
      "William Chen",
      "Shinji Watanabe"
    ],
    "abstract": "Neural audio codecs are a key component in speech language modeling. However, their high frame rates lead to long sequence lengths, increasing computational costs. Dynamic frame rate codecs mitigate this by reducing the effective frame rate using a compression step to merge multiple frames together. However, most prior methods either operate on single-codebook codecs or apply a single compression step before multi-layer quantization. This forces all quantization layers to share the same segmentation boundaries, despite the residual embeddings at different quantization layers exhibiting different rates of change over time. We propose LACE (Layer-Adaptive Codec Encoding), a dynamic frame rate codec that applies an independent compression step at each quantization layer, enabling layer-specific segmentation boundaries. To use LACE tokens in downstream text-to-speech (TTS), we further introduce union alignment and boundary anchor mechanisms to make durations consistent across layers while preserving compression benefits. Experiments on LibriTTS show that LACE offers a better rate-quality tradeoff than prior dynamic frame rate methods on the reconstruction task and improves TTS inference efficiency while maintaining competitive synthesis quality. Our code is released as part of the ESPnet3 codec recipe.",
    "published": "2026-09-15T17:46:51Z",
    "updated": "2026-09-15T17:46:51Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.17509"
  },
  {
    "id": "2609.17499",
    "title": "ENCP: Episode-Normalized Conformal Prediction for Vision-and-Language Navigation",
    "authors": [
      "Vicky Feliren",
      "A. Taufiq Asyhari",
      "Muhamad Risqi U. Saputra"
    ],
    "abstract": "Uncertainty estimation for Vision-Language-Navigation (VLN) models is a critical task since it can help identify ambiguous and unreliable predictions, enabling agents to make safer navigation decisions. As one of the most advanced uncertainty estimation frameworks, conformal prediction (CP) offers a promising approach for uncertainty estimation in VLN. However, given that VLN agent requires a sequence of steps, standard calibration in conformal prediction fails to provide coverage guarantee it promises over a dependent, variable-length VLN episode. To this end, we propose Episode-Normalized Conformal Prediction (ENCP), which rescales a nonconformity score by the policy's residual confidence and calibrates one maximum score per episode. Under exchangeable calibration and test episodes, this construction covers the ground truth at every step with probability at least $1 - α$, while allowing dependence among steps within an episode. Across four VLN policies and three nonconformity scores on R2R and REVERIE dataset, ENCP meets all reported empirical step-coverage targets on the seen-to-unseen evaluation. These results demonstrate that ENCP can provide model-agnostic uncertainty estimates, which might be useful for determining when a VLN agent should defer to a more capable predictor, including human assistance.",
    "published": "2026-09-15T17:42:15Z",
    "updated": "2026-09-15T17:42:15Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2609.17499"
  },
  {
    "id": "2609.17496",
    "title": "Verifiable Social Reasoning for LLM Assistants",
    "authors": [
      "Amir Taubenfeld",
      "Zorik Gekhman",
      "Avigail Grinstein-Dabush",
      "Itay Laish",
      "Ariel Goldstein",
      "Marian Croak",
      "Avinatan Hassidim",
      "Yossi Matias",
      "Amir Feder"
    ],
    "abstract": "LLM assistants are widely used for daily social advice, yet evaluating their social reasoning in such consultation settings remains challenging since (i) it requires setups where the assistant learns about social situations from subjective user narratives, and (ii) social properties, such as others' intentions, typically lack verifiable ground truth. To address these challenges, we introduce Fuse, a multi-agent simulation framework for studying user-mediated social reasoning. In Fuse, a target agent with a hidden motive interacts with other agents including one representing the user, who then consults the evaluated assistant to infer the target's motive, providing verifiable ground truth by construction. Simulation faithfulness is validated through a human study with 24k annotations. We apply Fuse to 12 LLMs and demonstrate its analytical utility by systematically isolating key factors, showing that (i) user mediation compounds the inherent difficulty of social reasoning; (ii) LLMs exhibit systematic sensitivity to biased user framing; (iii) models can require more details than humans need to reach a correct prediction; and (iv) longer conversations do not always improve performance despite providing opportunities for clarifying questions. We open-source Fuse and a dataset with 21k examples.",
    "published": "2026-09-15T17:37:29Z",
    "updated": "2026-09-15T17:37:29Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.17496"
  },
  {
    "id": "2609.17488",
    "title": "LimiX-2: A Contextual Mechanism Network Towards General Structured-Data Intelligence",
    "authors": [
      "Xingxuan Zhang",
      "Gang Ren",
      "Hao Yuan",
      "Hao Zou",
      "Hongze Tan",
      "Hui Wang",
      "Jianhao Song",
      "Jiansheng Li",
      "Jiayao Zhang",
      "Jinghan Zhang",
      "Kaifang Li",
      "Lang Mo",
      "Li Mao",
      "Mingchao Hao",
      "Nuo Xu",
      "Rui Ding",
      "Ruiji Zhang",
      "Shuyang Li",
      "Siyu Mei",
      "Tianyang Zhang",
      "Weiyang Mu",
      "Yancheng Dong",
      "Yongxian Wei",
      "Yuan Xue",
      "Yuanrui Wang",
      "Yue He",
      "Zijia Yang",
      "Ziyun Li",
      "Dongzhe Li",
      "Fuqiang Wang",
      "Jiandong Liu",
      "Jiawei Chen",
      "Jiaxin Du",
      "Kaijie Cheng",
      "Kehan Li",
      "Lei Sun",
      "Linjun Zhou",
      "Ningbo Dai",
      "Qi Wang",
      "Renzhe Xu",
      "Shaoxing Du",
      "Shumeng Yang",
      "Wang Lu",
      "Wenjing Chu",
      "Xiannan Huang",
      "Xiaoyu Lin",
      "Xing Ai",
      "Xinyan Han",
      "Xuanyue Li",
      "Xuanyue Su",
      "Xukun Zhang",
      "Yan Lu",
      "Yaxin Zhang",
      "Yi Qin",
      "Yifei Huang",
      "Yihan Xu",
      "Yongle Lv",
      "Yuanyuan Jiang",
      "Yushan Han",
      "Peng Cui"
    ],
    "abstract": "We introduce LimiX-2, a new model in the LimiX family, developed through model and data scaling guided by our previously established scaling laws. LimiX-2 adopts the Contextual Mechanism Networks (CMNs) paradigm and is pretrained with Context-Conditional Masked Modeling (CCMM). CMNs shifts the organizing principle of in-context learning from target-centric prediction to mechanism-oriented joint modeling. Rather than centering the network on the $p(y \\mid x, D_{\\mathrm{context}})$ objective of conventional tabular PFNs, it is designed around learning $p(x, y \\mid D_{\\mathrm{context}})$, a context-dependent representation of the joint structure underlying data generation. Pretraining uses synthetic datasets generated by structural causal models (SCMs) spanning diverse graph structures, functional mechanisms, and observation processes. Evaluations on TabArena, TALENT, and BCCO show that LimiX-2 outperforms current dataset-specific models and tabular foundation models. Beyond predictive performance, the CMN paradigm also promotes causal awareness in LimiX-2: its feature attention encodes direct causal relationships, enabling accurate causal skeleton recovery.",
    "published": "2026-09-15T17:30:02Z",
    "updated": "2026-09-15T17:30:02Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.17488"
  },
  {
    "id": "2609.17485",
    "title": "Quick-View Takeaways: How Does Title Framing Influences Pattern Identification in Line Charts?",
    "authors": [
      "Jasmine Lim",
      "Tapendra Pandey",
      "Arran Zeyu Wang",
      "Ghulam Jilani Quadri"
    ],
    "abstract": "Visual data communication in digital media is increasingly characterized by short attention spans and snapshot-based viewing, often employing line charts to convey trends and patterns. Among all visual elements, titles are crucial ones that can shape how viewers interpret visual information and form chart takeaways. In this study, we examine how title characteristics, particularly title word count and intended message, influence people's pattern identification in single-class line charts. Participants viewed 50 line charts collected from online news media and identified the pattern they perceived. Our results demonstrate that both title word count and intended message significantly influence viewers' pattern identification. Our findings highlight the importance of title design in shaping chart takeaways and effective visualization communication.",
    "published": "2026-09-15T17:26:12Z",
    "updated": "2026-09-15T17:26:12Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.17485"
  },
  {
    "id": "2609.17479",
    "title": "Det-LIME: Detector-Aware, Multi-Instance Local Interpretable Model-Agnostic Explanations for Automated Marine Mammal Detection",
    "authors": [
      "Jiayi Zhou",
      "David W. Johnston",
      "Brinnae Bent"
    ],
    "abstract": "Despite the rapid uptake of black-box object detectors in marine mammal research and monitoring, explainability techniques are rarely integrated into conservation workflows. Furthermore, most classification-oriented explainability tools are ill-suited to detection tasks involving imagery of social organisms or those with colonial life histories, as they ignore multiple detections within a scene and produce single-instance outputs that blur evidence across individuals. These methods also generate low-resolution, often biologically irrelevant visuals, limiting their utility for debugging, targeted data augmentation, and refined data collection. We proposed Det-LIME, a detector-aware, multi-instance adaptation of Local Interpretable Model-Agnostic Explanations (LIME) that produced instance-specific, box-aligned explanations by combining per-detection weighting, a proximity kernel that emphasizes regions near each box, and Intersection-over-Union-based matching to track the same instance across perturbations. We evaluated Det-LIME on aerial drone imagery for harbor seal detection, with an additional seabird case study to assess generality, and compared it with vanilla LIME, Stabilized LIME, Deterministic LIME, and gradient-based attribution methods. Using the Attribution Ratio and Max Saliency Hit Rate metrics, we showed that Det-LIME consistently improved multi-instance attribution. In practice, these higher-resolution, instance-aware explanations provide insight into model outputs and support post-processing, debugging, and actionable improvements in modeling and data collection or augmentation.",
    "published": "2026-09-15T17:20:16Z",
    "updated": "2026-09-15T17:20:16Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.17479"
  },
  {
    "id": "2609.17475",
    "title": "JustFit: 200K-Token LLM Serving on a 24 GiB Laptop with Just-in-Time State Management",
    "authors": [
      "Yuhua Chen"
    ],
    "abstract": "Capable open-weight models make local coding and reasoning attractive, but their context and execution state strain laptop memory. We present JustFit, an MLX-based inference runtime that combines KVExec for compressed KV execution, PhaseSwap for component residency, and StateTrans for state-preserving serving transitions. These mechanisms fuse reconstruction and coordinate just-in-time materialization and release, independently of model-weight quantization. In full-execution capacity tests on a 24 GiB M4 Pro MacBook running Qwen3.8-27B MXFP4, three independent runs complete 196,608 input and 16,384 output tokens, increasing completed single-request context from the mlx-vlm baseline's 30,720 positions to 212,992 (6.93x); a separate two-request run retains 229,376 positions in aggregate. In separate performance tests, a 32K-input, 64-output probe reaches 19.11 tokens/s, and a repeated 32K+6K workload has a median peak process footprint of 16,374 MiB. The integrated runtime answers 29 of 30 AIME 2026 problems correctly, showing how compact state and lifetime-aware execution expand local serving capacity while supporting extended generated reasoning.",
    "published": "2026-09-15T17:15:48Z",
    "updated": "2026-09-15T17:15:48Z",
    "categories": [
      "cs.AI",
      "cs.PF"
    ],
    "url": "https://arxiv.org/abs/2609.17475"
  },
  {
    "id": "2609.17474",
    "title": "Coupled Calibration and Learning: Mitigating Teacher Bias in LLM Distillation without Target-Domain Reward Feedback",
    "authors": [
      "Haichen Hu",
      "Yuheng Zhang",
      "David Simchi-Levi"
    ],
    "abstract": "Large language model (LLM) distillation aims to transfer the capabilities of a powerful teacher to a smaller student. Direct imitation, however, can also transfer the teacher's systematic bias and errors. This challenge is particularly pronounced under covariate shift, when the teacher's reliability on target questions is uncertain and target-domain reward feedback is unavailable. We propose Coupled Calibration and Learning (CCL), an LLM distillation algorithm that couples teacher calibration with student updates through token-level branching, using reward feedback only on source questions. Each iteration calibrates the teacher using source feedback and then uses the calibrated teacher to train the student on target questions. The updated student, in turn, informs subsequent calibration. In an autoregressive policy framework, we prove that the output student's expected average Kullback-Leibler divergence to the oracle student converges to zero at a polynomial rate in the number of iterations. The oracle maximizes the true reference-regularized target reward within the student class, which need not represent the unrestricted optimal policy. Our analysis quantifies the progress of projected student gradient updates while controlling the error in teacher calibration. We further establish a separation from regularized direct matching: its error relative to the oracle student can remain bounded away from zero even when the teacher achieves higher regularized target reward than every student policy. These results demonstrate that LLM distillation can overcome persistent teacher bias and recover the optimal student through coupled calibration and learning, without target-domain reward feedback.",
    "published": "2026-09-15T17:15:40Z",
    "updated": "2026-09-15T17:15:40Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "math.ST",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2609.17474"
  },
  {
    "id": "2609.17355",
    "title": "Evaluating Ambient Clinical Scribes in India: The Need for Multilingual Real-World Clinical Conversation Data",
    "authors": [
      "Siddharth D Jaiswal",
      "Krithi S",
      "Ashish Makani",
      "Suvrankar Datta",
      "Sunayana Sitaram",
      "Mohit Jain"
    ],
    "abstract": "Ambient clinical scribes (ACS) are being rapidly deployed at scale across Global South healthcare settings, aiming to reduce clinician documentation time, especially in overburdened environments like India. These ACS are primarily developed or distilled from models built and validated on Global North speech, languages and consultation styles. Indian clinical encounters are brief, triadic, multilingual, code-mixed with low-resource languages, and conducted in highly resource-constrained, noisy settings -- increasing the likelihood of ASR and note-generation errors manyfold. We posit an urgent need to develop a standardized evaluation infrastructure to assess whether these systems are safe, reliable, and well-suited to the Indian healthcare setting. We substantiate our claims through a mixed-methods study -- a systematic survey of publicly available patient-clinician conversational datasets, a quantitative comparison of these datasets against conversational and cultural markers drawn from the Indian clinical-communication literature, and semi-structured interviews with five organizations building and deploying ACS in India and Africa. Our survey shows that there are no publicly available, large-scale, real-world benchmarks for ACS in India, with existing datasets being overwhelmingly synthetic. We note that the available Global North datasets diverge significantly from the expected conversational and cultural structures of Indian encounters. Finally, our interviews reveal that deploying organizations have each built proprietary, incomparable evaluation pipelines, creating a fragmented ecosystem with no independent and reliable basis for procurement. We call for the development of a publicly shared, real-world, multilingual benchmark for ACS evaluation and outline the properties and policies such a benchmark would require.",
    "published": "2026-09-15T15:52:15Z",
    "updated": "2026-09-15T15:52:15Z",
    "categories": [
      "cs.CY",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.17355"
  },
  {
    "id": "2609.17346",
    "title": "Where Should a Document Live: Context, Representations, or Parameters?",
    "authors": [
      "Nathanaël Carraz Rakotonirina",
      "Momchil Hardalov",
      "Gonzalo Iglesias",
      "Adrià de Gispert"
    ],
    "abstract": "To answer questions outside of their pre-training data, large language models (LLMs) need access to new information, which can be presented in the context window as documents, encoded into the model's parameters, or injected as latent representations. However, each of these methods comes with different efficiency, cost, and performance trade-offs, with no single winner. We present a controlled comparison of representation-based (KV-cache based) and parametric (fine-tuning-based) adaptation methods on five knowledge-intensive benchmarks. We show that in the oracle setting, Cartridges (KV) are the most accurate injection method at nearly every storage budget, outperforming parametric methods by 10 points. Compaction (KV) matches Cartridges only at low compression rates, lagging behind the parametric methods by 10 points at rates higher than $50\\times$. In the more realistic multi-document retrieval scenario, Cartridges are the only method that matches in-context learning (ICL), leading the parametric methods by 29 points and Compaction by 15 points. Nonetheless, Cartridges are also the only method, besides full fine-tuning and large MLP adapters, that suffers from catastrophic forgetting, i.e., a 6% performance degradation on control benchmarks, with 13% in coding.",
    "published": "2026-09-15T15:47:02Z",
    "updated": "2026-09-15T15:47:02Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.17346"
  },
  {
    "id": "2609.17335",
    "title": "LumiNote: LLM-Assisted Multimodal Instruction for VR Stage Lighting Education",
    "authors": [
      "Danxuan Liang",
      "Chun Yin Li",
      "Zheng Wei",
      "Xian Xu",
      "Meng Xia",
      "Huamin Qu",
      "Wai Tong"
    ],
    "abstract": "Stage lighting education requires instructors to bridge abstract concepts, technical operations, and learner-understandable representations. While Virtual Reality (VR) removes physical constraints, existing systems provide limited support for live instruction. We present LumiNote, an LLM-assisted VR system that transforms spoken pedagogical intent into instructor-reviewable spatial annotations, executable demonstrations, and linguistic support. In an exploratory study with 3 instructors and 24 students, we examined how instructors incorporated LumiNote into familiar lighting topics and how students received the resulting representations. We found LLM assistance most valuable for expressive, under-specified goals, but requiring greater expert intervention for fixture-specific or spatial configuration requests. Instructors engaged with generated suggestions as a controllable refinement process, shifting effort from manual setup toward pedagogical expression. However, representations that externalized expert reasoning did not always align with novice comprehension. These findings characterize LLM-assisted VR instruction as a domain-grounded mediation process among expert expression, executable operations, and learner-facing representations.",
    "published": "2026-09-15T15:38:49Z",
    "updated": "2026-09-15T15:38:49Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.17335"
  },
  {
    "id": "2609.15855",
    "title": "K-Bench: a clinically calibrated benchmark for evaluating large language models in high-risk mental health conversations",
    "authors": [
      "Laura M. Vowels",
      "Matthew J. Vowels",
      "Shivali Sharma",
      "Apoorv Jha",
      "Rehnuma Choudhury",
      "Wasseem El Sarraj",
      "Rachel Francois-Walcott",
      "Aruba Hussain",
      "Sarah Ingram",
      "Angela Loulopoulou",
      "Adva Segal",
      "Elena Volkova"
    ],
    "abstract": "People increasingly use large language models (LLMs) for mental health support, yet their safety in evolving, high-risk conversations remains poorly characterised. We developed K-Bench, a clinician-calibrated, protected benchmark evaluating 125 model configurations representing 33 base models from 14 providers across a fixed cohort of 200 multi-turn vignettes involving suicide, self-harm, domestic violence, substance misuse, and no-risk presentations. Synthetic patient conversations showed substantial distributional overlap with real human-AI conversations. A frozen GPT-4o judge achieved 94.2% exact agreement with clinician consensus across 6,751 eligible item comparisons from 151 clinician-rated transcripts. Leading models combined strong supportive conversation with combined-risk scores above 95, whereas risk exploration exposed substantial variation among lower-performing configurations. Therapeutic prompting produced configuration-specific gains concentrated among weaker models, while elevated reasoning produced no average improvement. K-Bench combines broader clinical coverage and configuration-scale comparison with a continuously updated public leaderboard whose operational test materials are protected from direct optimisation. The leaderboard is available at www.k-bench.ai.",
    "published": "2026-09-14T16:49:23Z",
    "updated": "2026-09-15T07:30:50Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.15855"
  },
  {
    "id": "2609.15849",
    "title": "Before You Poll with LLMs: A Deliberative Diagnostic Framework",
    "authors": [
      "Ahmed Wali",
      "Hassaan Tayyab"
    ],
    "abstract": "Can LLMs reason through new information like humans, or do they merely retrieve cached opinions? This is critical for silicon sampling, where LLM personas simulate public opinion at scale. Current evaluations test only whether personas hold the right opinions -- a static snapshot. But opinion research increasingly depends on dynamic fidelity: whether personas update beliefs in response to new arguments, as humans do during deliberation. No existing benchmark tests this. We introduce the Deliberative Polling Diagnostic Framework, which compares human and LLM belief shifts after identical informational interventions. Grounded in deliberative polling, it surfaces failures invisible to static evaluation: models that produce plausible partisan opinions can still misrepresent how those opinions change. Applying the framework to five frontier models using data from America in One Room (526 personas, 72 questions), we find that every model fails, each in a unique manner. GPT-5.1 exhibits reversal: its personas become more hostile toward the opposing party after balanced information, while humans become less so. This reversal is selective (80% on outgroup vs. 26% on policy questions) and symmetric across partisan identities. Gemini 2.0 Flash, Claude Sonnet 4.5, and Llama 3.3 70B exhibit overshoot, shifting correctly but at 5-7x human magnitude. DeepSeek V3 exhibits rigidity with near-zero change. Targeted ablations reveal that policy content triggers these failures and that they are identity-specific: GPT-5.1 reverses on outgroup questions but overshoots on ingroup; Gemini shows the inverse. We term this signature self-sycophancy: conformity to the model's internal stereotype of the persona rather than reasoning from the information provided. Our framework offers a concrete protocol: run the deliberative diagnostic before trusting LLM personas to mimic revised beliefs.",
    "published": "2026-09-14T16:41:48Z",
    "updated": "2026-09-14T16:41:48Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2609.15849"
  },
  {
    "id": "2609.15847",
    "title": "Proportional-Fair Resource Allocation and Dual-Threshold Early-Exit Inference for Secure Cooperative Multi-Layer Edge Intelligence",
    "authors": [
      "Thai T. Vu",
      "John Le",
      "Tu N. Nguyen",
      "Jun Shen",
      "Quang Vinh Duong",
      "Ha Nguyen"
    ],
    "abstract": "This paper proposes FREDI (Fair Resource Allocation for Edge Dual-Threshold Inference), a secure wireless edge-intelligence framework for event-triggered inference in a cooperative user equipment (UE)--edge server (ES)--cloud system. Each UE performs early-exit convolutional neural network (CNN) screening using dual confidence thresholds, while critical events are securely offloaded to an edge server for detailed classification. We formulate a proportionally-fair utility maximization problem that jointly optimizes UE--ES association, wireless and processing resources, and confidence thresholds. FREDI decomposes the problem into proportional-fair resource allocation and dual-threshold inference optimization. We prove that the detected-critical event set is set-monotone non-increasing in both thresholds, and exploit the finite empirical confidence domain for exact threshold optimization. An empirical resource--utility response envelope yields a computable global suboptimality bound and a sufficient condition for global optimality. By pre-eliminating infeasible UE--ES pairs and exactly projecting out bandwidth and transmit-power variables, the resource-allocation subproblem is reduced to a mixed-integer exponential-cone program solvable to the certified global optimality within a prescribed gap. Numerical results with early-exit MobileNetV2 and ShuffleNetV2 demonstrate near-perfect UE fairness with aggregate utility close to a Sum-Utility benchmark, reveal security-induced resource fragmentation, and demonstrate the Stage-A scalability from 6 to 144 UEs with median solving time below 0.1~s in the tested configurations.",
    "published": "2026-09-14T16:41:15Z",
    "updated": "2026-09-14T16:41:15Z",
    "categories": [
      "cs.NI",
      "cs.CV",
      "cs.ET",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.15847"
  },
  {
    "id": "2609.15838",
    "title": "Per-Matrix Optimality Is Not Enough: Three-Level Optimization for Low-Rank LLM Compression",
    "authors": [
      "Huicheng Zhang",
      "Xiyao Feng",
      "Ze-Tong Li",
      "Chengkai Zhu",
      "Xiao Shi",
      "Xiwei Pan",
      "Jinguo Liu",
      "Ge Bai",
      "Xin Wang"
    ],
    "abstract": "Per-matrix singular value decomposition (SVD) truncation is Eckart-Young optimal in the whitened Frobenius norm, but errors from independently compressed matrices compound through the block's nonlinear forward pass. Inspired in part by hierarchical variational optimization in quantum many-body methods, we introduce a three-level chain that widens optimization scope from individual matrices to Transformer blocks to the full model: whitened SVD~(L1), block-level joint optimization~(L2), and end-to-end language-modeling loss refinement~(L3), all from 256 calibration sequences, with no instruction or recovery data. On LLaMA-7B at 60% compression, the chain reduces WikiText-2 perplexity from 42.1 to 19.1 to 11.4. The block-level stage acts as a regularizer: skipping it worsens Penn Treebank (PTB) perplexity by 24 points, a gap that additional end-to-end training did not close in our experiments. Perplexity gains hold across 20-80% compression, five architectures up to 13B parameters, and both in-distribution and out-of-distribution benchmarks, though the cross-architecture rows use architecture-specific configurations and the ratio sweep was not run under one common protocol. With more calibration data, skipping the block-level stage becomes competitive, revealing an offline compute--data trade-off. We therefore claim improvements only in perplexity and compression fidelity; downstream accuracy remains well below the dense model.",
    "published": "2026-09-14T16:36:46Z",
    "updated": "2026-09-14T16:36:46Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15838"
  },
  {
    "id": "2609.15834",
    "title": "TRACE: Two-Stage Detector-Response Estimation With Angular Cosine Expansion for Ring Artifact Correction in Photon-Counting CT",
    "authors": [
      "Jigang Duan",
      "Heran Wang",
      "Ligen Shi",
      "Zheng Sun",
      "Ping Yang",
      "Xing Zhao"
    ],
    "abstract": "Detector response nonuniformity introduces systematic projection errors and ring artifacts in photon-counting detector computed tomography (PCD-CT). In measured PCD-CT data, residual stripe amplitudes vary slowly with projection angle, which fixed-bias models cannot adequately capture. We propose TRACE, a two-stage unsupervised sinogram decomposition method for estimating and correcting these response-related errors. TRACE represents stripes as a fixed bias plus low-order discrete cosine transform (DCT) components, using a small number of coefficients to describe angular variations at each detector element. A learnable analysis--synthesis architecture represents the ideal projections, while two-stage optimization separates them from fixed and then dynamic stripes. An angular-gradient soft orthogonality constraint suppresses correlated variations within the shared DCT gradient subspace, reducing the leakage of object structures into the artifact estimate. All parameters are optimized directly on the measured sinogram without paired training data. Experiments on measured QRM mouse phantom and porcine trotter data show that TRACE suppresses ring artifacts and improves image uniformity while preserving edge sharpness, soft-tissue texture, and trabecular detail.",
    "published": "2026-09-14T16:31:32Z",
    "updated": "2026-09-14T16:31:32Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.15834"
  },
  {
    "id": "2609.15833",
    "title": "Integrating Multi-view Multi-light Surface Reconstruction into Cultural Heritage Workflows",
    "authors": [
      "Baptiste Brument",
      "Robin Bruneau",
      "Benjamin Coupry",
      "Vincent Demoulin",
      "Jean Mélou",
      "Antoine Laurent",
      "Fabien Castan",
      "Jean-Denis Durou",
      "Lilian Calvet"
    ],
    "abstract": "Cultural heritage documentation increasingly relies on image-based 3D surface reconstruction, with photogrammetry software making such workflows accessible to archaeologists, conservators, and heritage technicians. These tools have been successful for conventional multi-view acquisition, but they do not routinely exploit richer multi-view, multi-light data, despite its potential for improving fine-scale surface reconstruction. This limitation is particularly relevant in heritage contexts, where controlled-light acquisition devices such as RTI domes are already used to capture illumination-varying image sets. The challenge is therefore to connect these existing acquisition practices with recent computer vision methods in a form that can be used within operational heritage workflows. In this work, we address this need by integrating state-of-the-art components from computer vision for multi-view, multi-light surface reconstruction into Meshroom, an open-source photogrammetry framework. Rather than proposing a new reconstruction algorithm, our contribution is to assemble and expose existing advanced methods, namely a complete photometric stereo ecosystem (calibrated, self-calibrated and universal), automatic object masking, and multi-view normal-and-reflectance integration, within a usable heritage-oriented workflow. The proposed system thus provides an intermediate software layer between computer vision research code and practical cultural heritage applications, making recent techniques easier to use and evaluate.",
    "published": "2026-09-14T16:31:18Z",
    "updated": "2026-09-14T16:31:18Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.15833"
  },
  {
    "id": "2609.15830",
    "title": "CiteGuard-RAG: A Validation-Centered AI System for Evidence-Grounded Question Answering",
    "authors": [
      "Sumit Barua",
      "Guan Hong",
      "Halil Dursunoglu",
      "Charles Rodgers",
      "Alvis Fong"
    ],
    "abstract": "Retrieval-augmented generation (RAG) can improve access to complex information; however, retrieving evidence alone does not ensure that answers are grounded, citation-valid, or appropriately refused. This paper introduces CiteGuard-RAG, a validation-centered AI system for evidence-grounded question answering. The system integrates hybrid semantic-lexical retrieval, citation-constrained generation, sentence-level grounding validation, and single-pass regeneration. Validation is used at runtime to determine whether a candidate answer should be accepted, refused, or regenerated before final delivery. CiteGuard-RAG is evaluated on 400 questions across a controlled housing-law dataset, PrivacyQA, and CUAD. In the controlled evaluation, it achieves 99.1% retrieval accuracy, 98.3% grounded-answer accuracy, and 98.3% citation validity, with no validation-detected hallucinations. Ablation results show that grounded-answer accuracy drops sharply when validation is removed, even when retrieval accuracy remains unchanged. External evaluation shows that while citation validity remains strong, evidence utilization, span alignment, and refusal calibration become harder under domain shift. These findings indicate that trustworthy RAG systems require explicit validation between retrieval and final answer delivery. CiteGuard-RAG provides a practical architecture for linking retrieval, generation, citation checking, abstention, and regeneration in high-stakes information access.",
    "published": "2026-09-14T16:30:54Z",
    "updated": "2026-09-14T16:30:54Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.IR"
    ],
    "url": "https://arxiv.org/abs/2609.15830"
  },
  {
    "id": "2609.15820",
    "title": "AlgoEvo: Self-Evolving Agentic Search for Automated Algorithm Discovery",
    "authors": [
      "Junhao Qiu",
      "Qinglong Hu",
      "Xialiang Tong",
      "Mingxuan Yuan",
      "Liyong Lin",
      "Qingfu Zhang"
    ],
    "abstract": "Large language models have advanced automated algorithm discovery by synthesizing executable code, but existing frameworks trap them in rigid search pipelines with pre-defined control flows. This limitation restricts adaptive reasoning, blocks cross-paradigm transfer, and discards valuable execution feedback. We propose AlgoEvo, a unified agentic framework that transforms automated algorithm discovery into an interactive, knowledge-accumulating process. An autonomous agent dynamically inspects, diagnoses, and edits code based on runtime feedback. A design skill hub decouples paradigm-specific knowledge from the core discovery engine, allowing a single workflow to seamlessly handle single-objective, multi-objective, and multi-component design. Meanwhile, a hierarchical experience mechanism organizes search trajectories into a task-level tree to guide exploration and consolidates cross-task patterns into reusable skills. Across six representative benchmark tasks, AlgoEvo matches or surpasses specialized methods with substantially fewer evaluations and reduced token consumption, demonstrating strong intra-task accumulation, cross-task transfer, and the ability to reproduce or exceed existing state-of-the-art performance through flexible skill activation.",
    "published": "2026-09-14T16:24:27Z",
    "updated": "2026-09-14T16:24:27Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15820"
  },
  {
    "id": "2609.15818",
    "title": "Atria Dawn: The Dawn of Agentic Superintelligence",
    "authors": [
      "Honglin Guo",
      "Tao Gui",
      "Yicheng Chen",
      "Guanting Dong",
      "Qiming Ge",
      "Yuyang Hu",
      "Zixian Huang",
      "Jiajie Jin",
      "Alexander Lam",
      "Yining Li",
      "Jiahang Lin",
      "Yanjiang Liu",
      "Xinyu Lu",
      "Haijun Lv",
      "Junlin Shang",
      "Qisheng Su",
      "Guoqiang Wang",
      "Rui Wang",
      "Zhecan Wang",
      "Hao Xiang",
      "Xinchen Xie",
      "Shuhao Xing",
      "Xiaoyu Xing",
      "Wanghan Xu",
      "Xinyu Yang",
      "Yajie Yang",
      "Chengfeng Zhao",
      "Haoran Zhao",
      "Ruojun Zhou",
      "Yunhua Zhou",
      "Yicheng Zou",
      "Kun Cai",
      "Qiye Cai",
      "Xinmeng Che",
      "Haodong Chen",
      "Jiabei Chen",
      "Jiahao Chen",
      "Jiayi Chen",
      "Yujia Chen",
      "Lizhi Cui",
      "Youheng Dai",
      "Xin Deng",
      "Yi Dong",
      "Shihan Dou",
      "Chenya Gu",
      "Xu Guo",
      "Ding Han",
      "Feiyang Hao",
      "Haotan He",
      "Jie Hou",
      "Binze Hu",
      "Zijian Hu",
      "Junhao Huang",
      "Huicheng Jiang",
      "Jiazhen Jiang",
      "Shufan Jiang",
      "Jiahao Kuang",
      "Bowen Lai",
      "Bo Li",
      "Jiaqiang Li",
      "Peng Li",
      "Qilong Li",
      "Zhuoqun Li",
      "Jiaxiang Liu",
      "Shuainan Liu",
      "Tong Liu",
      "Yi Liu",
      "Zhonghang Lu",
      "Jianwen Luo",
      "Yanyi Luo",
      "Huijie Lv",
      "Ningsheng Ma",
      "Zerun Ma",
      "Houcheng Min",
      "Chengjun Pan",
      "Qiyuan Peng",
      "Xiaoxuan Peng",
      "Jianmin Qian",
      "Jiantao Qiu",
      "Wanying Ren",
      "Huayu Sha",
      "Jifei Shan",
      "Zixin Shang",
      "Bing Shao",
      "Zhuohui Sheng",
      "Jiayang Shi",
      "Yang Shu",
      "Aierpanjiang Simayi",
      "Sirui Song",
      "Yuxiao Song",
      "Zhe Sun",
      "Zhichao Sun",
      "Wenzhe Tan",
      "Wenhui Tian",
      "Zhongbo Tian",
      "Hanchen Wang",
      "Pengbo Wang",
      "Rui Wang",
      "Yiding Wang",
      "Yuhui Wang",
      "Zhiheng Xi",
      "Caijun Xu",
      "Chao Xu",
      "Yongfeng Xu",
      "Xiaolei Yang",
      "Zhixiong Yang",
      "Qian Yao",
      "Shihong Yi",
      "Yuankai Ying",
      "Jia Yu",
      "Dingbo Yuan",
      "Hao Yuan",
      "Junjie Yuan",
      "Bo Zhang",
      "Caixian Zhang",
      "Qiuyinzhe Zhang",
      "Jiyuan Zhao",
      "Penghao Zhao",
      "Ying Zhao",
      "Pujun Zheng",
      "Xiaoxue Zhong",
      "Xiaohao Zhou",
      "Xinyu Zhou",
      "Dongsheng Zhu",
      "Guanru Zhu",
      "Yulun Zhu",
      "Yaojie Lu",
      "Tao Ji",
      "Hongyu Lin",
      "Yutao Zhu",
      "Pengfei Cao",
      "Guoxiu He",
      "Xianpei Han",
      "Ben He",
      "Zhicheng Dou",
      "Kang Liu",
      "Qi Zhang",
      "Le Sun",
      "Jun Zhao",
      "Ji-Rong Wen",
      "Xuanjing Huang",
      "Yu-Gang Jiang",
      "Bowen Zhou"
    ],
    "abstract": "As AI agents become participants in the development of their successors, they reshape both the production of intelligence and the role of human researchers. We introduce Atria Dawn Preview, a foundation agentic language model designed for scientific research and engineering workflows, with the goal of expanding the frontier of agent productivity in the real world. This model is trained via a Verifiable Experience Pipeline that connects tool-mediated interactions to executable environments and externally verified outcomes. Across 16 benchmarks spanning real-world research, engineering, and digital work, Atria Dawn Preview is competitive with frontier agents and achieves the highest reported score on five of them. Beyond standalone performance, we examine the real research-and-development process behind this model as a case study of human--AI collaboration, analyzing 769 task records from 56 participants together with agent logs. When asked to evaluate completed tasks under comparable conditions, participants rated about one-third of completed AI-assisted tasks as infeasible without AI. More strikingly, agents frequently propose methods and implement revisions, while humans retain most final decisions and guide exploration through judgment and feedback. These observations indicate a shift from task-level execution to project-level partnership, with human effort concentrating on what is worth pursuing and how evidence should guide research. Progress toward more autonomous AI research must therefore advance both the capacity for discovery and the capacity for meaningful human oversight, preserving accountable human authority over the risks and direction of continued development.",
    "published": "2026-09-14T16:22:30Z",
    "updated": "2026-09-14T16:22:30Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15818"
  },
  {
    "id": "2609.15779",
    "title": "EvoOntology: A Self-Evolving Ontology Layer for Data Agents",
    "authors": [
      "Meiduo Chong",
      "Shaolei Zhang",
      "Ju Fan",
      "Xiaoyong Du"
    ],
    "abstract": "Data agents aim to fulfill natural-language instructions over heterogeneous data, including tables, files, and databases. However, data agents face a challenging agent-data gap: heterogeneous data resides outside the agent, while the agent can access it (e.g., column names and file paths) only through generic tools. Existing approaches either let agents directly explore raw data sources or inject manually constructed semantic layers into prompts. However, neither scales well to large heterogeneous data sources nor adapts to different agent behaviors. In this paper, we introduce EvoOntology, a self-evolving ontology layer for data agents. EvoOntology encapsulates the ontology as an MCP server comprising a schema layer, a content layer, and a tool layer, enabling agents to actively query and interact with the ontology at runtime. To this end, we introduce a builder agent for autonomous ontology construction and a self-evolution loop that continuously refines the ontology through attribution-guided typed edits that are accepted only after a backbone-conditional paired evaluation. Experiments on three well-adopted data-agent benchmarks with four LLM backbones demonstrate that EvoOntology consistently outperforms strong baselines and existing semantic-layer approaches, effectively bridging the agent-data gap and enabling more effective interaction with heterogeneous data. Code: https://github.com/ruc-datalab/EvoOntology",
    "published": "2026-09-14T15:59:24Z",
    "updated": "2026-09-14T15:59:24Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.DB"
    ],
    "url": "https://arxiv.org/abs/2609.15779"
  },
  {
    "id": "2609.15773",
    "title": "Transfer Learning for Socioeconomic Estimation in Forced-Displacement Settings",
    "authors": [
      "Steven Ndung'u",
      "Adel Daoud",
      "Ismael Yacoubou Djima",
      "Hai-Anh H. Dang",
      "Patrick Michael Brock"
    ],
    "abstract": "Progress in inclusive household surveys has strengthened socioeconomic evidence for forcibly displaced populations, providing indispensable benchmarks on living conditions and welfare. However, these surveys remain resource-intensive and periodic, while conditions can change between rounds, particularly in settings affected by fragility, conflict, and violence. More frequently updated, spatially granular complementary evidence is therefore needed to identify where socioeconomic conditions may be changing between survey rounds and to inform operational prioritization. Earth observation and machine learning offer a scalable source of spatially explicit socioeconomic information. However, tools developed for general populations have not been systematically adapted and evaluated in forced displacement settings, where living conditions, settlement patterns, and displacement impacts may differ substantially. We address this gap by adapting a multimodal spatiotemporal vision transformer, pretrained on Demographic and Health Survey data from approximately 1.2 million households across 36 African countries, to forced displacement and host community settings in South Sudan, Cameroon, and Zambia. We develop and evaluate the updated, adapted model using socioeconomic indices derived from UNHCR FDS and RMS data. Our results show that satellite-derived geospatial covariates explain up to 66% of the variation in socioeconomic outcomes in camp-intersecting grids, with a mean absolute error (MAE) of 4.37 index points, and 41% in non-camp-intersecting areas, with an MAE of 5.41. The framework complements and adds value to periodic household surveys by filling critical spatial and temporal data gaps with regularly updated, model-based socioeconomic estimates. These estimates sustain insight between survey rounds and support timely humanitarian prioritization and field verification.",
    "published": "2026-09-14T15:55:57Z",
    "updated": "2026-09-14T15:55:57Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15773"
  },
  {
    "id": "2609.15772",
    "title": "Event-Native Symbolic-Temporal Spike Encoding Framework for Heterogeneous Cyber Streams",
    "authors": [
      "Dalton Diez",
      "Peyton Andras",
      "Max Shroyer",
      "James Ghawaly"
    ],
    "abstract": "Spiking neural networks (SNNs) have shown promise for sparse, event-driven computation through stateful processing that is naturally compatible with low-power edge hardware. These properties align with cyber monitoring, where data arrives asynchronously, and malicious behavior often emerges through temporal patterns across event sequences. However, cyber streams are not composed solely of continuous numeric signals: their informative structure is also carried by categorical identifiers, irregular timing, and local behavioral context. Traditional rate- and population-based spike encodings are not naturally suited to these heterogeneous semantics, while conventional intrusion detection system (IDS) pipelines typically resolve the mismatch by converting raw events into flows, fixed aggregation windows, or dense tensors. Although useful for conventional classifiers, these transformations introduce buffering latency, obscure native temporal structure, and weaken the computational advantages of event-driven neuromorphic processing. We introduce an event-native symbolic-temporal spike encoding framework that maps heterogeneous cyber events directly into sparse, spike-compatible inputs. By assigning encoding roles to semantic identity, local frequency context, and inter-event timing, the framework preserves categorical semantics and temporal dynamics. We validate the approach on packet-level Network IDS and extend it to message-level CAN IDS, using both domains to evaluate whether the encoding exposes usable structure for recurrent SNNs operating directly on native event streams. Under edge-oriented, $μ$Caspian-aligned hardware constraints, compact recurrent SNNs achieve strong anomaly detection performance, with an operational hybrid metric ($J_{hybrid}$) of 0.987 on Network IDS and 0.980 on CAN IDS.",
    "published": "2026-09-14T15:55:43Z",
    "updated": "2026-09-14T15:55:43Z",
    "categories": [
      "cs.NE",
      "cs.AI",
      "cs.CR"
    ],
    "url": "https://arxiv.org/abs/2609.15772"
  },
  {
    "id": "2609.15763",
    "title": "Sylvas: Synergistic Learning Value based Device Scheduling in Federated Continual Learning",
    "authors": [
      "Yuxuan Sun",
      "Yuxuan Bai",
      "Tan Chen",
      "Sheng Zhou",
      "Zhisheng Niu"
    ],
    "abstract": "Federated continual learning (FCL) enables shared global models to continuously adapt to distributed and non-stationary data streams, making it important for Internet of Things applications such as intelligent transportation, industrial monitoring, and unmanned systems. Under spatio-temporal data distribution dynamics and label scarcity, a key challenge is how to quantify the contribution of each edge device to global learning performance and schedule the most valuable devices under resource constraints for timely model updating. This article presents Sylvas, a synergistic learning value based device scheduling framework for FCL at the wireless edge. Sylvas evaluates the learning value of distributed data from two perspectives: distributional value, which characterizes the contribution of device data to global model learning from a spatio-temporal distribution perspective, and label value, which captures the quantity and reliability tradeoff of pseudo-labeled data. By integrating these factors into a synergistic learning value metric, Sylvas schedules devices with high learning value while satisfying communication and computation resource constraints. Case studies demonstrate that Sylvas supports timely model adaptation under spatio-temporal distribution dynamics and effectively exploits unlabeled data.",
    "published": "2026-09-14T15:48:21Z",
    "updated": "2026-09-14T15:48:21Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15763"
  },
  {
    "id": "2609.15746",
    "title": "TopoRig: Topology-Agnostic Facial Rigging via Multi-Source Supervision",
    "authors": [
      "Andrew Fleet",
      "Soroush Mehraban",
      "Vida Adeli",
      "Cole Clifford",
      "Babak Taati"
    ],
    "abstract": "Automatic facial rigging across heterogeneous mesh topologies remains challenging because high-quality expression supervision is often tied to canonical templates, while deformation transfer to arbitrary meshes can introduce geometric artifacts and correspondence errors. We present TopoRig, a topology-agnostic facial rigging framework that predicts FACS-conditioned deformations directly on input mesh vertices while preserving the original topology. Starting from the ICT FaceKit expression model, we construct complementary supervision from accurate but template-biased common-topology rigs, topology-diverse but noisier transferred rigs, and targeted image-based cues for controls poorly captured by geometric transfer. TopoRig combines local surface geometry, landmark-relative semantic features, global shape context, and FACS controls to predict per-vertex displacements. We train on 3,496 generated identities using 45 non-gaze expression controls from the 53-control ICT FaceKit vocabulary. On held-out identities and unseen mesh topologies, TopoRig more faithfully reproduces the reference expression space than prior neural facial-rigging methods, while qualitative results show consistent localized deformations across diverse character geometries. Ablations demonstrate that semantic landmark features and complementary supervision improve cross-identity and cross-topology generalization. Overall, TopoRig amortizes heterogeneous and imperfect expression supervision into a single topology-preserving deformation model.",
    "published": "2026-09-14T15:37:03Z",
    "updated": "2026-09-14T15:37:03Z",
    "categories": [
      "cs.GR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.15746"
  },
  {
    "id": "2609.15745",
    "title": "Look Before You Leap: Factual Decoding with Internal Attribution Signals",
    "authors": [
      "Hayeong Ryu",
      "JungMin Yun",
      "Byeonggeuk Lim",
      "Sunhee Jo",
      "YoungBin Kim"
    ],
    "abstract": "Hallucination remains a critical challenge in large language models (LLMs), where early factual errors compound through autoregressive generation in a snowballing effect that neither post-hoc correction nor weight-level intervention can effectively preempt. We propose DescaPE (DEcoding Signal Control Against Path Error-snowballing), a decoding framework that leverages internal model signals to suppress hallucination-prone trajectories at inference time. Through sliding-window MLP ablation, we identify a factual-salient layer span within LLMs whose derived signal is selectively elevated for factual tokens and exhibits anomalous spikes at hallucination-prone steps. We train a lightweight probe to approximate this signal from a single forward pass and integrate it into candidate scoring to penalize high-risk continuations while rewarding factually grounded ones. Experiments across five factuality benchmarks on three LLMs demonstrate that DescaPE achieves factuality improvements over decoding-time baselines in multiple settings, while incurring only 1.10x latency overhead in our efficiency evaluation. Our code is available at https://github.com/hayeonggg/DESCAPE.",
    "published": "2026-09-14T15:35:42Z",
    "updated": "2026-09-14T15:35:42Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15745"
  },
  {
    "id": "2609.15744",
    "title": "Design of a Deep Learning Credit Risk Early Warning System Integrating Multi-source Heterogeneous Data",
    "authors": [
      "LiYang Wang",
      "Zhen Zhong",
      "Zhen Tian",
      "Keyu Chen",
      "Keyu Chen"
    ],
    "abstract": "Advancements in data fusion and real-time analytics technologies have opened new avenues for addressing complex domain challenges. Financial risk early warning systems often suffer from inefficiency due to information silos and monitoring delays. This paper proposes a credit risk early warning system based on heterogeneous information fusion. The system employs a model architecture integrating deep neural networks and attention mechanisms to extract multidimensional features from diverse data sources such as transaction behaviors and social networks, thereby establishing an early identification mechanism for corporate and individual credit risks. System testing demonstrates that this approach significantly enhances the accuracy and timeliness of risk warnings, outperforming traditional rule-based engine solutions. The findings offer innovative insights for early intervention in financial risks, holding practical significance for safeguarding financial stability.",
    "published": "2026-09-14T15:35:41Z",
    "updated": "2026-09-14T15:35:41Z",
    "categories": [
      "cs.AI",
      "cs.CE",
      "cs.DB",
      "cs.LG",
      "q-fin.RM"
    ],
    "url": "https://arxiv.org/abs/2609.15744"
  },
  {
    "id": "2609.15740",
    "title": "A Language-Guided Multimodal Foundation Model for Zero-Shot and Multi-Task Brain Signal Analysis",
    "authors": [
      "Mingzhi Chen",
      "Yiyu Gui",
      "Guibo Luo",
      "Yuchao Yang"
    ],
    "abstract": "Brain signal analysis is essential for both neuroscience research and clinical diagnostics, yet current approaches face critical limitations. End-to-end models require task-specific retraining and exhibit limited generalization, while pre-trained models lack semantic depth and still depend on extensive fine-tuning. Meanwhile, general-purpose multimodal foundation models, though powerful in other domains, struggle to interpret brain signals due to representational misalignment and lack of domain knowledge. This study introduces a multimodal foundation model for zero-shot and multi-task brain signal analysis (METIS) through a unified language-signal alignment framework. METIS is pretrained on the largest and most diverse brain-signal corpus to date, comprising over 70,000 h of recordings from more than 11,000 subjects across 20 datasets. In a comprehensive zero-shot evaluation across 12 datasets, METIS outperformed the leading generalist model by over 20.9% in average accuracy. Remarkably, without any fine-tuning, METIS's performance matches or exceeds that of supervised, task-specific models. Furthermore, METIS demonstrates exceptional data efficiency and strong generalization, achieving an average AUROC advantage of over 16.0% in few-shot settings and 15.9% in cross-dataset transfer. This work establishes a new paradigm for general-purpose brain signal analysis, paving the way for next-generation neurotechnology.",
    "published": "2026-09-14T15:32:38Z",
    "updated": "2026-09-14T15:32:38Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15740"
  },
  {
    "id": "2609.15735",
    "title": "Transforming harmonic coefficients for 3D splat compression",
    "authors": [
      "Tam Thuc Do",
      "Philip A. Chou",
      "Gene Cheung"
    ],
    "abstract": "We address the problem of color attribute compression for 3D splats. We show that all images generated by 3D splats are linear in the coefficients for each color channel, each spherical harmonic, and each splat, and we identify a basis for the space of all such images. We identify an inner product for the coefficient space that induces the squared error loss on images. We show that orthonormalizing the coefficients with respect to this innner product before coding can yield over 2 dB gain.",
    "published": "2026-09-14T15:28:29Z",
    "updated": "2026-09-14T15:28:29Z",
    "categories": [
      "eess.SP",
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2609.15735"
  },
  {
    "id": "2609.15727",
    "title": "Are LLMs Good Financial User Simulators? A Preliminary Study",
    "authors": [
      "Jiajie He",
      "Jiangyuan Hong",
      "Dongling Ni",
      "Wenjin Liu",
      "Xintong Chen"
    ],
    "abstract": "Large language models (LLMs) are increasingly used as user simulators, but their ability to reproduce evolving individual financial decisions remains unclear. We present a preliminary study in a controlled paper-trading environment with 120 volunteers. Participants used non-redeemable virtual funds under real-time market conditions; no real brokerage accounts, real-money positions, or real transaction records were accessed. Given only information available before a prediction cutoff, a simulator predicts the participant's next-trading-day action, traded security, and transaction quantity. We evaluate temporally aligned rolling predictions and compare settings with and without point-in-time market information. Market context improves action and ticker prediction in the controlled ablation, while transaction sizing remains difficult. We also observe systematic behavioral compression: models overproduce hold actions, underpredict sell decisions, and simplify multi-security transactions. These results provide an initial empirical characterization and motivate larger-scale evaluation of individual, temporal, and portfolio-level behavioral fidelity.",
    "published": "2026-09-14T15:23:26Z",
    "updated": "2026-09-14T15:23:26Z",
    "categories": [
      "cs.AI",
      "cs.CY",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.15727"
  },
  {
    "id": "2609.15726",
    "title": "Bench2Dex: Benchmarking Visuo-Tactile Bimanual Dexterous Manipulation Across Dexterous Hands",
    "authors": [
      "Zhenjie Yang",
      "Yideng Zhang",
      "Dongjie Zhang",
      "Chenyu Jiang",
      "Xianshuai Liu",
      "Yufeng Li",
      "Zuhao Ge",
      "Xingyu Jiao",
      "Zheng Zhang",
      "Kaiyu He",
      "He Wang",
      "Yuwen Zhong",
      "Yi Deng",
      "Muyun Jiang",
      "Xianliang Huang",
      "Haisheng Su",
      "Donghang Zhang",
      "Jian Zhang",
      "Xue Yang",
      "Hongyang Li",
      "Zuxuan Wu",
      "Yu-Gang Jiang",
      "Xiaosong Jia",
      "Junchi Yan"
    ],
    "abstract": "Tactile sensing provides contact information that can be difficult to infer from vision alone, but tactile hardware for dexterous hands has not converged to a common design. Dexterous hands differ in finger structure, contact surfaces, and sensor layouts, while simulated tactile signals still differ from measurements produced by physical sensors. These factors make it difficult to study visuo-tactile manipulation across diverse dexterous hands within a consistent experimental setting. We present Bench2Dex, a simulation benchmark for visuo-tactile bimanual manipulation across 12 dexterous hands. We adapt existing robot models with a shared simulated tactile interface that converts local contact geometry into image-like tactile observations. The interface provides a consistent observation format across different hand morphologies without attempting to reproduce the output of a specific physical tactile sensor. Bench2Dex includes 26 bimanual manipulation tasks that involve tool use, articulated-object interaction, and multi-stage manipulation, together with about 1.3K human-teleoperated demonstrations. The benchmark provides synchronized visual, tactile, proprioceptive, action, and object-state observations, together with executable task metrics. For robustness, we group seven perturbation types into invariance axis, where the correct action does not change, and equivariance axis, where the correct action changes together with the perturbation. We evaluate ACT, Diffusion Policy, pi0.5, and GR00T N1.5 on Bench2Dex and report their performance and failure modes. Bench2Dex is meant as a platform for studying visuo-tactile learning across dexterous hands. It does not assume that simulated tactile observations can replace real tactile sensing; it offers a shared setting for algorithm development while tactile hardware and simulation models are still evolving.",
    "published": "2026-09-14T15:22:59Z",
    "updated": "2026-09-14T15:22:59Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.15726"
  },
  {
    "id": "2609.15722",
    "title": "Data storytelling meets interpretable machine learning: Decoding AI decisions for non-experts without revealing sensitive data and model details",
    "authors": [
      "Lemen Chao",
      "Zixuan Yang",
      "Anran Fang",
      "Mingran Sun",
      "Ming Lei"
    ],
    "abstract": "AI-driven automated decision-making requires both predictive performance and interpretability. Recent advances in interpretable machine learning (IML) provide tools for explaining model predictions, but the technical complexity of these explanations may hinder accessibility to non-experts. To address this challenge, this study integrates data storytelling with IML to enhance the explainability of AI-generated decisions for a broader audience. Following the design science research (DSR) paradigm, this study proposes a formal definition of data storytelling in IML, introduces the DIST Pyramid to align data storytelling with IML, and presents the I-P-O Model to describe their interactions. It further develops an architecture to explain AI decisions through distinct \"What-if\" and \"Why-not\" event-generation processes. The architecture also employs data desensitization to protect sensitive input data. To validate the approach, a case study is conducted with the Boston Housing dataset, using SHapley Additive exPlanations (SHAP) values and large language models (LLMs) to generate data stories with And-But-Therefore (ABT) structures. An empirical evaluation shows that 76.4% and 74.3% of respondents rated the \"What-if\" and \"Why-not\" data stories as more comprehensible, with significantly higher accessibility scores than traditional SHAP visualizations. The paper concludes with the presentation of a narrative interpretation framework that integrates IML and data storytelling, thereby expanding the research scope as well as the practical applicability of AI decision-making.",
    "published": "2026-09-14T15:20:56Z",
    "updated": "2026-09-14T15:20:56Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.HC",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.15722"
  },
  {
    "id": "2609.14596",
    "title": "Direct Conditional Transition Sampling for Diffusion Inverse Problems",
    "authors": [
      "Qi Yu",
      "Hanlin Wu",
      "Xiaohui Sun"
    ],
    "abstract": "Training-free diffusion inverse solvers typically choose between local measurement guidance and costly clean-space posterior updates. Independent posterior refresh can improve global correction by sampling a clean conditional and re-noising it, but its practical realization requires probability-flow ODE integration and clean-space Markov chain Monte Carlo (MCMC). We propose Direct Conditional Transition Sampling (DCTS), a direct stochastic-flow approximation to the same ideal refresh target. Rather than explicitly drawing a clean sample, DCTS estimates the measurement-conditioned clean mean along a short inner path and transports Gaussian source noise directly to the next noisy state. A denoiser-compatible sufficient statistic and a covariance-scaled operator update enable this conditional-mean estimation. Experiments on four inverse problems demonstrate that DCTS achieves competitive reconstruction quality with up to $16.8\\times$ speedups over competing methods.",
    "published": "2026-09-13T15:24:33Z",
    "updated": "2026-09-13T15:24:33Z",
    "categories": [
      "cs.CV",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2609.14596"
  },
  {
    "id": "2609.14595",
    "title": "Diagnosing Temporal Misalignment in Multichannel Time-Series Classification with Minimum Description Length",
    "authors": [
      "Sebastian Buschjäger",
      "Michael Frichert",
      "Daniel Kuhe",
      "Jian-Jia Chen"
    ],
    "abstract": "Multichannel time-series classification commonly assumes synchronized sensor streams, although latency, clock drift, and preprocessing can introduce relative delays during data collection or after deployment. Existing synchronization solutions are often hardware-specific and difficult to apply retrospectively. Consequently, synchronization problems may remain undetected while classification performance is suboptimal. We introduce a classifier- and label-free diagnostic based on minimum description length (MDL). Our method applies candidate temporal shifts to sensor groups and measures how efficiently one group can be encoded through a representation of the remaining channels. An increased codelength indicates that the shift destroys shared temporal structure, whereas the minimum identifies the alignment most strongly supported by the data. Unlike learned synchronization methods, the diagnostic requires neither retraining nor a trusted aligned reference and can therefore test both training and deployment data for misalignments. Experiments on two controlled synthetic tasks and nine real-world datasets show that the metric exposes alignment structure and can recover accuracy under induced deployment drift. A whole-dataset audit further identifies stable nonzero MDL optima in established benchmarks including FordChallenge, Opportunity, PAMAP2, and UCIActivity, revealing potential systematic offsets that conventional model evaluation does not expose. Our method thus provides a general-purpose tool for detecting, understanding, and correcting temporal misalignment throughout the time-series learning pipeline. Our code is available under https://github.com/sbuschjaeger/mdl-temporal-misalignment.",
    "published": "2026-09-13T15:24:24Z",
    "updated": "2026-09-13T15:24:24Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.AR"
    ],
    "url": "https://arxiv.org/abs/2609.14595"
  },
  {
    "id": "2609.14593",
    "title": "SENTINEL: A Multi-Pathway Architecture for Detecting Living-Off-the-Land APT Attacks on Windows Command Lines",
    "authors": [
      "Ahad Bin Islam Shoeb",
      "Kamrul Hasan",
      "Jamal Uddin Tanvin",
      "Liang Hong",
      "Imtiaz Ahmed",
      "Md Arif Billah",
      "Al Amin"
    ],
    "abstract": "Living-Off-the-Land (LOTL) is the dominant evasion technique of Advanced Persistent Threat (APT) actors, exploiting legitimate Windows utilities to conduct malicious operations without deploying custom malware and enabling state-sponsored campaigns to maintain persistent access within military and critical defense infrastructure for extended periods. Existing detection methods fail against obfuscated commands and multi-stage attack sequences, as demonstrated by the Volt Typhoon APT campaign, which maintained undetected access to U.S. critical infrastructure for over 18 months using exclusively signed Windows utilities. We present SENTINEL, a multi-pathway architecture integrating BERT-based semantic encoding, character-level CNN for obfuscation invariance, inter-command attention for multi-stage pattern recognition, and autoencoder-based anomaly scoring. Evaluated on a balanced Volt Typhoon benchmark derived from Microsoft and CISA threat intelligence advisories, SENTINEL achieves 92.0% accuracy on documented state-sponsored attack commands and 91.2% on obfuscated variants, compared to 74.0% and 72.0% for standalone BERT. Per-class analysis reveals that models achieving over 98% overall validation accuracy on imbalanced data exhibit only 44-58% malicious recall on balanced adversarial sets. Character-level processing contributes 5.6 percentage points of obfuscation invariance, and the 8.0 percentage point gap over augmentation-only baselines confirms structural architectural value beyond data-driven robustness alone.",
    "published": "2026-09-13T15:20:34Z",
    "updated": "2026-09-13T15:20:34Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.14593"
  },
  {
    "id": "2609.14592",
    "title": "AI Deployment Accountability Engineering: A Vision for Accountable AI in Safety-Critical Socio-Technical Systems",
    "authors": [
      "Murat Kantarcioglu"
    ],
    "abstract": "Artificial intelligence systems are rapidly becoming critical components in healthcare, finance, public services, and other safety-critical domains. Yet the engineering practices used to evaluate these systems remain predominantly model-centric, emphasizing properties such as accuracy, robustness, fairness, and interpretability before deployment. These properties are necessary but insufficient once an AI system operates within an ever changing socio-technical environment characterized by distribution shifts, institutional constraints, human feedback loops, privacy requirements, and interactions among multiple AI agents. This vision paper introduces AI Deployment Accountability Engineering (ADAE), a proposed AI engineering subdiscipline concerned with establishing measurable, continuous, and actionable accountability for deployed AI systems. ADAE treats accountability as a deployment-layer property rather than solely as a property of an individual model. It seeks to determine whether an AI-enabled system continues to operate within acceptable risk limits, identify the contexts in which failures emerge, attribute failures across interacting technical and human components, translate technical failures into downstream consequences, and support timely intervention. We articulate a research agenda built around four interconnected pillars: structured discovery of context-dependent failure modes, privacy-preserving accountability measurement, system-level risk analysis for agentic AI, and translation of technical failures into operational, and institutional risks. The broader goal is to establish foundational principles, mathematical tools, and system architectures for accountable AI deployment across safety-critical applications.",
    "published": "2026-09-13T15:18:41Z",
    "updated": "2026-09-13T15:18:41Z",
    "categories": [
      "cs.AI",
      "cs.CR",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2609.14592"
  },
  {
    "id": "2609.14590",
    "title": "Reverse Spatio-Temporal Disease Progression Modelling",
    "authors": [
      "Ulugbek Shernazarov",
      "Moucheng Xu",
      "Inomjon Ramatov"
    ],
    "abstract": "Deep learning-based spatio-temporal disease progression models commonly overlook the incubation period of progressive diseases, limiting the use of those models in early interventions, which are vital for not easily reversible diseases such as Alzheimer's. This is because, the existing deep learning based longitudinal disease-progression models are almost always run forward: from an observed baseline they predict future decline. In many clinical settings, however, imaging begins only after pathology is suspected or already visible, the earlier, healthier patient-specific reference was never acquired. To address this, we propose to study reverse disease progression prediction: given later diseased anatomy, reconstruct the unobserved healthier anatomy that preceded it. We use a two-stage model in which a frozen 3D vector-quantised autoencoder defines a compact discrete latent space, while a Neural Ordinary Differential Equation (ODE) learns continuous-time dynamics in that space. A recurrent encoder reads late observations in reverse temporal order, initialises the latent state, and the ODE is integrated backwards across the trajectory. On a controlled Morpho-MNIST benchmark with a sinusoidal perturbation, our model successfully recovered the unseen previous states from later observations of the non-monotonic trajectory. On longitudinal brain MRIs from Alzheimer's Disease Neuroimaging Initiative, at the task to recover the previous unseen trajectory towards healthy states of the patients from observed later diseased states, our model outperforms the baselines that uses copy-nearest and mean-observed, with positive disease-reversal scores in every diagnostic stratum. We hope that our work can provide insights and tools towards discovering the incubation periods from single-shot scans, and developing early interventions of diseases based on imaging.",
    "published": "2026-09-13T15:17:59Z",
    "updated": "2026-09-13T15:17:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.14590"
  },
  {
    "id": "2609.16071",
    "title": "Schema-Adaptive Action-Conditioned JEPA for Cross-Machine CNC Transfer under Partial Sensor Overlap",
    "authors": [
      "Ayoub Louaye Bouaziz",
      "Matthieu Ostertag",
      "Anton Demasles"
    ],
    "abstract": "Cross-machine deployment of industrial world models requires transfer across changes in dynamics, sensing interfaces, sampling regimes, and control units. We study a schema-adaptive action-conditioned Joint-Embedding Predictive Architecture (SAAC-JEPA) for CNC dynamics, where the source machine has 17 canonical sensor channels and the target shares only 10. Evaluation uses group-disjoint source splits, source-only normalization, held-out self-supervised validation, unit audits, and a sealed target test after model locking. Across five seeds, JEPA pretraining gives no clean-source forecasting gain: scratch and pretrained-body models obtain \\(\\mathrm{RMSE}=0.811\\pm0.022\\) and \\(0.813\\pm0.022\\). A source-only search over 20 candidates selects a schema-consistent action-conditioned JEPA after seven-seed stability checks. On the confirmatory target pass, the locked model reaches zero-shot \\(\\mathrm{RMSE}=0.546\\), \\(R^2=0.012\\), and \\(\\mathrm{NLL}=0.52\\), outperforming persistence but not RevIN-equipped PatchTST and iTransformer baselines (\\(0.503\\) and \\(0.498\\)). A pre-declared paired ablation shows that RevIN in the same architecture improves RMSE to \\(0.495\\pm0.004\\) over three seeds, but degrades target calibration (\\(\\mathrm{NLL}=20.6\\)) on stationary context windows. A pre-lock adaptation sweep further reduces RMSE to \\(0.520\\) with limited target support. These results show that source-domain forecasting accuracy alone is insufficient to assess industrial predictive representations, and that cross-machine adaptation under partial sensor overlap is a distinct evaluation axis.",
    "published": "2026-09-13T15:10:06Z",
    "updated": "2026-09-13T15:10:06Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.16071"
  },
  {
    "id": "2609.16070",
    "title": "Efficient Multimodal Generative Recommendation with Latent Narrative Reasoning",
    "authors": [
      "Chenxing Wang",
      "Nantao Zheng",
      "Hao Miao",
      "Juyuan Wang",
      "Xinke Jiang",
      "Yuchen Fang",
      "Aolin Li",
      "Haijun Wu"
    ],
    "abstract": "Generative recommendation reformulates item prediction as semantic identifier generation, yet episodic content introduces a fundamentally different setting where the target is determined by narrative evolution rather than user preference. This task requires models to understand multimodal storyline progression while addressing the efficiency challenges caused by redundant visual contexts and costly explicit reasoning generation. We propose \\textbf{NarraLite}, an efficient multimodal generative recommendation framework that jointly compresses perception and reasoning. Specifically, Progressive Spectral Compression selectively distills long visual contexts into compact narrative-relevant evidence, preserving transition-critical information while reducing redundant visual computation. Latent Narrative Reasoning introduces context-routed latent reasoning tokens and aligns their contextualized representations with future continuation semantics, enabling implicit narrative inference without autoregressively decoding textual rationales. We further establish a user-agnostic multimodal benchmark for short-form drama continuation across UGC, PGC, and OOD settings. Extensive experiments demonstrate that NarraLite consistently improves continuation accuracy, narrative coherence, and robustness over existing approaches, while achieving a favorable accuracy--efficiency trade-off.",
    "published": "2026-09-13T15:04:05Z",
    "updated": "2026-09-13T15:04:05Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.16070"
  },
  {
    "id": "2609.14578",
    "title": "A Building as a Repository: KIR, a Typed Intermediate Representation for Agent-Authored Building Information Models",
    "authors": [
      "Dmitry Kuklev"
    ],
    "abstract": "Autonomous agents that author building information models need more than access to a host API. They need a representation of what they intended, what a compiler decided on their behalf, what was refused, what was observed after execution and what remains unknown. We present KIR, a typed intermediate representation in which a building is authored as a program held in a versioned repository and lowered to host applications as build targets. KIR is organised around seven ways in which a generator writing into a stateful, partially observable host goes silently wrong, and gives each a representation in data: ambiguous selectors become typed refusals with candidates; defaults keep their provenance; obligations that will not be checked are named before execution; vacuous witnesses are rejected statically; a lost transaction response becomes the state UNCONFIRMED with a verify-before-retry rule; the reverse path obeys a census invariant; and decisions are bound by digest to the state they were made against. On a pinned snapshot with 83 operation contracts and Revit as the only backend, offline experiments refuse 29 of 42 stress-test programs with diagnostic codes and no uncaught exception, name 38 of 377 witness obligations as unwitnessable, admit 31 of 100 combinations of execution, witness and acceptance states under seven stated invariants, and find no vacuous witness in 219 certificate runs; a 60-storey tower is 11,263 characters as KIR against 3,709,235 characters of emitted C#. Native Revit runs are reported from project records and kept separate from reproduced results. A controlled comparison with agents that write host code directly is specified but not yet executed; it is the principal open question.",
    "published": "2026-09-13T15:01:58Z",
    "updated": "2026-09-13T15:01:58Z",
    "categories": [
      "cs.CV",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2609.14578"
  },
  {
    "id": "2609.14572",
    "title": "AlgoRAG: Retrieval-Augmented Generation for Theoretical Computer Science Education -- A Comprehensive Evaluation Framework for Algorithm Analysis and Complexity Theory",
    "authors": [
      "Sushan Adhikari"
    ],
    "abstract": "Teaching abstract theoretical computer science (TCS) concepts such as algorithm analysis and complexity theory is challenging because students must handle formal proofs and asymptotic reasoning that conventional resources rarely explain in an adaptive, on-demand way. We present AlgoRAG, a specialized Retrieval-Augmented Generation (RAG) system that couples a large language model (LLM) with a curated, domain-specific knowledge base to address these challenges. The knowledge base integrates authoritative textbooks, 847 lecture slides, 312 practice problems with solutions, 156 worked proof templates, and 89 complexity worksheets. AlgoRAG incorporates domain-specific optimizations including mathematical entity recognition, notation-aware retrieval, and pedagogical re-ranking. We evaluate AlgoRAG on 179 curated exam-style questions spanning asymptotic analysis, recurrence relations, dynamic programming, graph algorithms, NP-completeness, sorting, and divide-and-conquer. The system achieves a 100% success rate with a mean response time of 38.0 seconds. While BLEU-4 scores are zero -- a known limitation of n-gram matching on mathematical proofs where equivalent reasoning may use entirely different notation -- AlgoRAG attains ROUGE-1 F1 of 0.0963, ROUGE-L F1 of 0.0683, and a pedagogical quality score of 0.7620, indicating that responses are well-structured and didactically sound even when surface wording diverges from reference answers. Performance is especially strong on NP-completeness (ROUGE-1 F1 = 0.1285, pedagogical quality = 0.7643) and graph algorithms (ROUGE-1 F1 = 0.1023, pedagogical quality = 0.8086). These results support the conclusion that RAG is an effective architecture for personalized theoretical-CS instruction, providing correct, context-rich explanations even for highly abstract topics.",
    "published": "2026-09-13T14:58:56Z",
    "updated": "2026-09-13T14:58:56Z",
    "categories": [
      "cs.CY",
      "cs.AI",
      "cs.IR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.14572"
  },
  {
    "id": "2609.14570",
    "title": "Disentangling Topology and Diversity in Multi-Agent LLMs for Multilingual Low-Resource Emotion Detection",
    "authors": [
      "Ulugbek Shernazarov",
      "Charitha Ruwansiri Weerakon Basnayake",
      "Abdelkhaleq El Jarjini",
      "Noel Crespi",
      "Praboda Rajapaksha"
    ],
    "abstract": "Multi-agent LLM systems combine multiple inference calls, but prior work often confounds how calls are connected with how they are diversified. We study these factors independently: inference topology and source of inter-agent diversity. In a controlled $2 \\times 3$ matrix, we cross parallel aggregation and sequential refinement with stochastic sampling, role prompting, and learned QLoRA specialization, under a fixed three-call budget and output protocol within each backbone. Using Qwen2.5-14B-Instruct and Llama-3.1-8B-Instruct, we evaluate all six configurations on multilingual low-resource emotion detection across nine languages. Parallel learned specialization is strongest on Qwen at 52.83 Macro-F1 and reaches 52.94 on Llama. On Qwen it also exceeds same-backbone zero-shot, few-shot, CoT, and seven-call self-consistency baselines. The preferred topology depends on diversity source: sequential refinement helps stochastic and prompted settings, while the learned Width advantage shrinks from 2.83 points on Qwen to 0.17 on Llama. Depth-wise analysis suggests that later learned specialists can overwrite correct early predictions, although the aggregate effect is backbone-dependent. Overall, how agents are differentiated produces larger performance shifts than topology, which should be evaluated jointly with specialization.",
    "published": "2026-09-13T14:58:26Z",
    "updated": "2026-09-13T14:58:26Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.14570"
  },
  {
    "id": "2609.14560",
    "title": "Small Object Detection in Drone Aerial Imagery with LAF-YOLOv10",
    "authors": [
      "Quratulain Nayeem",
      "Fahmina Taranum",
      "Mohammed Mudassir Uddin"
    ],
    "abstract": "General-purpose object detectors lose accuracy on UAV footage, where targets span only a handful of pixels and onboard compute is limited. Prior work composes independently-validated architectural techniques into one detector, assuming gains reported in isolation transfer once combined. We stress-test that assumption directly. LAF-YOLOv10 integrates four techniques into YOLOv10n: a Partial Convolution C2f (PC-C2f) backbone block, an Attention-Guided Feature Pyramid Network (AG-FPN), a P2 detection head replacing the large-object P5 head, and Wise-IoU v3 regression, asking whether their combined effect matches what each contributes alone. We train LAF-YOLOv10 three times (seeds 42, 123, 256) on VisDrone-DET2019, benchmark against unmodified YOLOv10n, and use TIDE error decomposition, per-category breakdown, per-component ablation, attention/loss comparisons, zero-shot transfer to UAVDT, and held-out/test-dev evaluation to localize where the combination succeeds or fails. Composability does not hold here. LAF-YOLOv10 reaches 24.0+/-0.4% mAP@0.5 at 2.14M parameters, 7.8 points below YOLOv10n (31.8%), a deficit that transfers to UAVDT (-10.0 points) and is confirmed by held-out and test-dev evaluation (23.5%, 22.5%). Background false positives, localization error, and duplicate detections move in the direction AG-FPN and Wise-IoU were designed to push. Ablation traces the deficit to a specific source: the P2/-P5 head swap costs 2.5 points independently plus a 2.5-point interaction penalty when layered onto a backbone weakened by PC-C2f, whose own 2.0-point loss is consistent with a partial pretrained-weight transplant (73/150 backbone tensors transfer). The failure is attributable to a specific interaction, not the four components individually. Composability must be verified directly, not assumed. Code/checkpoints: https://github.com/Mudassiruddin7/Small-Object-Detection-in-UAV-Imagery.",
    "published": "2026-09-13T14:46:43Z",
    "updated": "2026-09-13T14:46:43Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.14560"
  },
  {
    "id": "2609.16069",
    "title": "Beyond Distribution Matching: Semantics-Consistent Tabular Diffusion with Weak Semantic Priors",
    "authors": [
      "Yili Wang",
      "Ruxue Shi",
      "Mengnan Du",
      "Hangting Ye",
      "Yi Chang",
      "Xin Wang"
    ],
    "abstract": "Synthetic tabular data can match real data distributions while still violating the semantic constraints that govern valid tabular rows. This reveals a key limitation of existing tabular generators: they mainly optimize distributional fidelity, but do not explicitly model weak semantic priors encoded in tabular schema and textual descriptions. In this paper, we propose \\ours, a semantics-consistent tabular diffusion framework for high-fidelity synthetic data generation under weakly specified semantic priors. \\ours\\ first constructs two types of priors, namely intra-column semantics and inter-column symbolic rules, with LLM-assisted extraction from metadata and validation on the real training split. These priors are then used as generation conditions rather than post-hoc filters. Specifically, \\ours\\ maps heterogeneous column values, column identities, and semantic priors into a unified semantic space, and performs column-wise forward corruption and prior-conditioned reverse denoising to preserve both marginal distributions and rule-consistent cross-column dependencies. Extensive experiments on six real-world tabular benchmarks show that \\ours\\ consistently improves distributional fidelity, semantic consistency, and downstream task utility over representative VAE-, GAN-, LLM-, and diffusion-based baselines. Additional analyses further demonstrate the robustness of \\ours\\ when semantic priors are partially unavailable.",
    "published": "2026-09-13T14:42:10Z",
    "updated": "2026-09-13T14:42:10Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.16069"
  },
  {
    "id": "2609.12890",
    "title": "Large Distant Gradients Need Not Be Reliable: reliability-weighted credit assignment for long-horizon autoregressive forecasting",
    "authors": [
      "Junhao Zhao",
      "David Michael Simberg",
      "Jacob Kang",
      "Colin Connor Kurniawan",
      "Nan Xu"
    ],
    "abstract": "In autoregressive forecasting, long prediction rollouts provide distant supervision, but backpropagation through time (BPTT) carries gradients from those losses through many autoregressive steps. Repeated Jacobian products can make distant gradients dominate the update while amplifying predictable signal and unpredictable noise together; a large distant gradient therefore need not carry reliable learning signal. Motivated by this observation, we introduce Internal Dual-Wiener routing (Internal-DW), a principled backward-only intervention that preserves the full forward rollout and all horizon losses while reliability-weighting internal gradient routes. At each residual block, we derive bounded Wiener gains for the identity and nonlinear routes that balance preserving predictable learning signal against suppressing unpredictable variation, and estimate them from route-level gradient statistics and an explicit noise model. In a controlled system with known gradient signal-to-noise ratio (SNR), we show that distant gradients can grow even as their SNR falls, and that Internal-DW reduces held-out error in recovering predictable gradient signals and improves forecasting. On four history-dominated, weak-drive testbeds, Internal-DW reduces forecast error by 5.2%-13.8% relative to full BPTT, outperforms gradient clipping and Jacobian regularization on all four, and outperforms validation-selected truncated BPTT (TBPTT) on three. It also extends or preserves the fitted optimal training-horizon range across these four testbeds. Across the full benchmark suite, the current Internal-DW estimator has a clear applicability boundary: its benefit diminishes or reverses when usable history is limited or when the selected sampler fails to represent dominant drive-dependent variation. The results show that retaining long-horizon supervision does not require trusting every backward contribution equally.",
    "published": "2026-09-11T14:18:59Z",
    "updated": "2026-09-11T14:18:59Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.12890"
  },
  {
    "id": "2609.12885",
    "title": "Learning Sign Language Recognition under Label Noise: A Study of Noise-Robust Losses for Isolated and Continuous Settings",
    "authors": [
      "Akihisa Shitara",
      "Yoichi Ochiai"
    ],
    "abstract": "In sign language recognition, the isolated (ISLR) classification loss treats a single label as ground truth, as does the frame-level auxiliary classifier over pseudo-labels we add to continuous (CSLR) methods, which lack one. Stylistic variation blurs ISLR annotation and the lack of temporal boundaries in CSLR forces pseudo-labels; both are noisy. We therefore apply symmetric and generalized cross entropy (SCE, GCE), robust alternatives to cross entropy (CE) from image classification, not to connectionist temporal classification but to the preceding single-label classifier. On ASL Citizen with injected symmetric noise on three backbones (three seeds for ST-GCN), robust losses cost at most 2.5 pt when labels are clean and beat CE by 2.9-10.0 pt in all six conditions at noise rate 0.2, one of which only after q was re-selected on dev. GCE gains more, but its optimal q does not transfer across backbones, whereas one SCE setting works in all nine conditions; both vary 2-11 times more than CE across runs, so a favorable point estimate does not establish stability. For CSLR (PHOENIX-2014) we report no gain; our frame-level targets carry a systematic assignment bias, making that study a diagnosis of a single configuration. At lambda_aux = 25 the pseudo-label CE auxiliary raises word error rate above the no-auxiliary baseline on VAC, CorrNet and SlowFastSign, and GCE/SCE improve on CE by 1.7-3.2 pt (three of six conditions return below that baseline). However, the three losses differ by more than an order of magnitude in effective gradient at a common lambda_aux: matching the initial gradient shrinks the gap to 0.4-0.9 pt, and lowering the CE weight alone already beats that baseline, so neither the degradation nor the improvement can be separated from the effect of the weight. We use only symmetric noise; multi-seed evaluation covers only ST-GCN and VAC isolated.",
    "published": "2026-09-11T14:11:20Z",
    "updated": "2026-09-11T14:11:20Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12885"
  },
  {
    "id": "2609.12874",
    "title": "VideoTok4D: A 4D-Aware Video Tokenizer for Compact World Representation",
    "authors": [
      "Xinyi Chen",
      "Hanxin Zhu",
      "Xijun Wang",
      "Xingrui Wang",
      "Sen Liang",
      "Xin Li",
      "Zhibo Chen"
    ],
    "abstract": "Video tokenizers have emerged as a cornerstone of modern video modeling, underpinning progress in compression, reconstruction and generation by mapping high-dimensional visual signals into compact latent spaces. However, despite this progress, current tokenization paradigms largely remain within the 2D visual domain, treating videos as image sequences rather than observations of an underlying dynamic 3D world. Consequently, the learned tokens inherit this observation-centric bias, limiting their capacity to compactly represent real-world 4D scenes. To mitigate this issue, we propose VideoTok4D, a novel 4D-aware video tokenizer for compact world representation. Specifically, our approach comprises three key designs: 1) a spatiotemporal disentanglement strategy that factorizes videos into static and dynamic tokens for holistic world modeling; 2) a track-aware dynamic attention mechanism that aggregates trajectory-aligned cues to promote cross-view motion consistency; and 3) Co4DGen, a diffusion prior learned over the resulting VideoTok4D token space for efficient 4D scene generation. Extensive experiments have demonstrated that our proposed method achieves state-of-the-art performance while requiring up to 4 orders of magnitude less storage than dense 4D representations. Moreover, the compact token space substantially shortens diffusion sequences, enabling efficient generation.",
    "published": "2026-09-11T14:03:02Z",
    "updated": "2026-09-11T14:03:02Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12874"
  },
  {
    "id": "2609.12871",
    "title": "A Multi-Vehicle Dataset with Camera, LiDAR, and Radar Sensors and Scanned 3D Models for Custom Auto-Annotation using RTK-GNSS",
    "authors": [
      "Philipp Berthold",
      "Bianca Forkel",
      "Mirko Maehlisch"
    ],
    "abstract": "Datasets are a crucial element in the development of perception algorithms. They relate sensor measurement data to annotated reference information and allow for the deduction of sensor and object characteristics. In autonomous driving, the reference data commonly consist of semantic image segmentation, point-wise associations, or bounding box annotations. The dataset proposed in this work, however, aims to dig deeper into the evaluation of measurement principles and provides scanned 3D models of all vehicles together with a pose and continuous kinematics reference obtained by RTK-GNSS. Combined, the state of the complete dynamic surrounding of the sensor vehicle is known for any point in time. Subsequent reference formats can be easily computed in user-defined granularity. This dataset involves single-object and multi-object recordings with seven target vehicles. In particular, measurement effects such as occlusion, as well as reflections, can be evaluated, as the normals of the shape of the target vehicles are known. We describe the dataset, discuss the technical background of its development, and briefly present exemplary evaluations.",
    "published": "2026-09-11T13:55:30Z",
    "updated": "2026-09-11T13:55:30Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.12871"
  },
  {
    "id": "2609.12860",
    "title": "3D CT-to-PET Translation via Latent Brownian Bridge Diffusion",
    "authors": [
      "Sarita Mourya",
      "Francesco Di Feola",
      "Pierangelo Veltri",
      "Paolo Soda"
    ],
    "abstract": "Computed tomography (CT) and positron emission tomography (PET) provide complementary anatomical and functional information for cancer diagnosis and treatment planning. However, the widespread use of PET is limited by high radiation exposure, elevated costs, and restricted availability. To address these limitations, deep learning-based CT-to-PET translation has emerged as a promising approach for synthesizing PET-like information directly from CT images, although accurately modeling the large cross-modal gap remains challenging. In this work, we propose a 3D CT-to-PET translation framework based on latent Brownian Bridge Diffusion (BBDM). The method consists of two stages. First, a Variational Autoencoder (VAE) is trained on paired CT-PET patches, integrating contrastive learning to improve latent alignment between anatomical and metabolic representations. Second, a BBDM is trained in the latent space to translate CT latent representations into their corresponding PET counterparts. The translated PET latents are then decoded and stitched to reconstruct the final 3D PET volume. We evaluate the proposed approach on two publicly available datasets. Quantitative results based on image fidelity and lesion-level PET-specific metrics demonstrate improved performance compared with competing methods. In particular, the proposed approach improves PET signal fidelity, better preserves clinically relevant uptake patterns, and shows improved performance in preserving small-lesion metabolic activation, paving the way for virtual imaging applications.",
    "published": "2026-09-11T13:47:50Z",
    "updated": "2026-09-11T13:47:50Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.12860"
  },
  {
    "id": "2609.12851",
    "title": "MedRoundsQA: A Persona and Difficulty Aware Evaluation for Multi-Turn Medical Consultations",
    "authors": [
      "Youssef Mohamed",
      "Ahmed Heakl",
      "Qinrong Cui",
      "Junhong Liang",
      "Rafiq Ali",
      "Bdour Babillie",
      "Nazira Dunbayeva",
      "Lang Gao",
      "Omar Hussein",
      "Ahmed Nada",
      "Ahmed Mohamed Magdy Mohamed",
      "Jinghui Liu",
      "Salman Khan",
      "Imran Razzak",
      "Yuxia Wang",
      "Xiuying Chen"
    ],
    "abstract": "Medical benchmarks are dominated by single-turn, multiple-choice clinical cases that poorly reflect real consultations. Practically, clinicians elicit evidence interactively and patient communication varies widely. We introduce MedRoundsQA, a multi-turn diagnostic benchmark derived from 1,387 board-exam cases across 17 specialties. Each case is converted into a structured 24-slot clinical record, and then instantiated as controlled doctor-patient dual-agent dialogues under varying patient personas, with the underlying clinical content held fixed. We further classify cases by difficulty using model-based uncertainty to enable easy-to-hard analysis. Evaluations of fifteen LLM doctor agents show that (i) moving from a single-turn diagnosis on the standardized records to multi-turn consultations causes large degradations of roughly 13-39 points; (ii) more turns reliably improves question relevance, but diagnostic accuracy exhibits diminishing returns and typically plateaus after 6-12 turns; and (iii) patient persona differences can shift diagnosis accuracy by about 7-8 points (lowest to highest education), highlighting equity risks that single-turn benchmarks miss.",
    "published": "2026-09-11T13:41:53Z",
    "updated": "2026-09-11T13:41:53Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.12851"
  },
  {
    "id": "2609.12850",
    "title": "MGAvatar: Mesh-Bound Gaussians for Head Avatar Geometry and Appearance Modeling",
    "authors": [
      "Lei Shi",
      "Sen Peng",
      "Zhiyang Deng",
      "Zhonggui Chen",
      "Xiaohu Guo",
      "Baorong Yang",
      "Xiao Dong"
    ],
    "abstract": "Accurate head modeling requires a stable yet expressive geometric representation. Existing Gaussian-based head avatars commonly rely on parametric templates (e.g., FLAME) for Gaussian initialization and deformation, but these templates lack personalized priors and struggle to represent structures such as hair and clothing. To address this issue, we propose MGAvatar, a Gaussian-mesh hybrid representation that jointly models geometry and appearance through two Gaussian-mesh binding modes. Specifically, we introduce vertex-bound Gaussians and constrain their learnable parameters, enabling progressive mesh deformation to represent complex head geometry, while a pose-dependent offset module accounts for non-rigid deformations. Once geometry is stabilized, MGAvatar switches to face-bound Gaussians for appearance modeling. To improve appearance consistency across novel poses and viewpoints, we introduce a view-conditioned neural color field that alleviates artifacts caused by independently optimized Gaussian colors. In addition, we design a Gaussian offset network to predict Gaussian offset maps in the observation space, providing greater flexibility for face-bound Gaussians to capture dynamic facial textures. Extensive experiments on multi-view and monocular videos show that MGAvatar outperforms existing methods in rendering quality, producing high-fidelity head avatars with rich texture details.",
    "published": "2026-09-11T13:41:06Z",
    "updated": "2026-09-14T11:23:47Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12850"
  },
  {
    "id": "2609.12843",
    "title": "Pre-Trained Low-Rank Tensor Decomposition for Multi-Dimensional Image Recovery",
    "authors": [
      "Bing-Zhang Fu",
      "Zhi-Long Han",
      "Ting-Zhu Huang",
      "Xi-Le Zhao",
      "Deyu Meng"
    ],
    "abstract": "Recently, tensor decompositions are prevalent for multi-dimensional image representation, which learn the instance-specific structure of each image from scratch. However, tensor decompositions neglect the common structure across different images, leading to limited semantic modeling capability, high computational cost, and a large number of learnable parameters. To address this challenge, we suggest the first pre-trained low-rank tensor decomposition (PLTD) framework, which organically integrates the pre-trained large vision model into the classical tensor decomposition framework. Beyond the shallow and untrained deep tensor decomposition, the suggested PLTD achieves an unprecedented balance among higher recovery fidelity, fewer learnable parameters, and smaller carbon footprint. Specifically, PLTD factorizes the target tensor into a latent tensor and a learnable transform that maps the latent tensor back to the original data domain. The latent tensor consists of two indispensable and complementary terms, i.e., a fixed pre-trained latent tensor and a learnable low-rank latent tensor. The fixed pre-trained latent tensor is distilled from a pre-trained large vision model (i.e., DINOv3) to capture the common structure of the target tensor, while the learnable low-rank latent tensor characterizes the instance-specific structure of the target tensor. To examine the potential of PLTD, we develop the corresponding multi-dimensional image recovery model and theoretically justify the advantages of this framework. Additionally, we discuss the connections between PLTD and classical tensor decomposition frameworks. Extensive experiments on multi-dimensional image recovery demonstrate that PLTD consistently achieves superior performance compared with state-of-the-art methods.",
    "published": "2026-09-11T13:36:36Z",
    "updated": "2026-09-11T13:36:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12843"
  },
  {
    "id": "2609.12841",
    "title": "A Graph-Based Approach for Mapping Kernel-Level Telemetry to MITRE ATT&CK",
    "authors": [
      "Matteo Lupinacci",
      "Luigi Arena",
      "Francesco Blefari",
      "Angelo Furfaro"
    ],
    "abstract": "Mapping observed system behavior to standardized frameworks like MITRE ATT&CK is essential for threat-informed defense, but remains largely manual. Existing automated methods depend on Cyber Threat Intelligence reports, which offer only retrospective accounts of attacks. Low-level telemetry, i.e. kernel-level system calls, instead provides evidence of adversary behavior, yet its volume and complexity have limited its use for automated mapping. We present a methodology that collects kernel-level events via eBPF, correlates attacker commands into a provenance graph, and derives compact graph representations suitable for LLM-based reasoning. These representations are mapped to the MITRE ATT&CK framework using both pure LLM prompting and retrieval-augmented generation (RAG) grounded in the ATT&CK knowledge base, producing ranked technique candidates along with supporting rationales. We implement this methodology as an end-to-end pipeline, named Trace2ATT&CK and evaluate it on 347 Linux Atomic Red Team tests using locally deployed open-weights LLMs. RAG consistently improves ATT&CK mapping performance over pure prompting, while provenance graph substantially outperforms raw telemetry. These results show that local inference over graph-based behavioral descriptions can make automated ATT&CK mapping from kernel-level telemetry operationally viable, without compromising data confidentiality.",
    "published": "2026-09-11T13:35:27Z",
    "updated": "2026-09-11T13:35:27Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.12841"
  },
  {
    "id": "2609.12839",
    "title": "Evaluating Context Segmentation in Locally Deployable SLMs for Cybersecurity CTF Tasks",
    "authors": [
      "Sebastiano Nordio",
      "Michele Lotto"
    ],
    "abstract": "The proliferation of highly capable open-weight Small Language Models (SLMs) democratizes access to advanced cybersecurity capabilities, posing a escalating risk as these models can bypass proprietary API guardrails when deployed locally. However, SLMs deployed as autonomous agents often struggle with long-horizon, exploratory tasks like cybersecurity Capture The Flag (CTF) challenges due to context bloat and cognitive degradation from accumulated tool-call outputs. To understand and mitigate this cybersecurity threat, we introduce context segmentation, a two-level agentic framework that divides complex exploitation tasks into manageable, contextually isolated sub-problems. Evaluating on the picoCTF dataset using memory-constrained gemma-4 models, we demonstrate that for the E4B model, our strategy acts as an intelligent search, achieving competitive rewards with superior token efficiency compared to brute-force retries, and successfully solving 18.52% of tasks that standard agentic execution fails to complete. Code is available at https://github.com/9xeb/context-segmentation.",
    "published": "2026-09-11T13:34:48Z",
    "updated": "2026-09-14T16:33:10Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.12839"
  },
  {
    "id": "2609.12835",
    "title": "HemaHier: Chain-Conditioned Ordinal Hierarchies for Lineage-Aware Bone-Marrow Cytology",
    "authors": [
      "Afshin Bozorgpour",
      "Peter Schüffler",
      "Edgar Jost",
      "Dorit Merhof"
    ],
    "abstract": "Bone-marrow cytology is inherently structured: each cell belongs to a hematopoietic lineage, and many cell types lie on ordered maturation trajectories. Standard flat classifiers ignore this structure, treating a mild same-lineage confusion the same as a severe cross-lineage mistake and predicting only discrete labels. We propose HemaHier, an ordinal-hierarchical prediction head for a frozen or lightly adapted cytology foundation model. Its central component is a chain-conditioned maturity score that reads a single maturity value under a per-chain query, supervised only on biologically valid healthy chains, while dysplastic and off-chain cell types remain classes but are excluded from maturity supervision. Fine and lineage predictions are coupled through a shared posterior that guarantees hierarchical consistency, and a staged objective first stabilizes recognition, then adds lineage and maturity supervision. On three bone-marrow datasets under a shared ontology, HemaHier achieves competitive recognition while reducing biologically severe errors and adding a within-lineage maturity ordering that flat classifiers lack. Code is available at https://github.com/xmindflow/HemaHier.",
    "published": "2026-09-11T13:30:20Z",
    "updated": "2026-09-11T13:30:20Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12835"
  },
  {
    "id": "2609.12834",
    "title": "Self-supervised Pre-training Helps Retinal Disease Progression Modelling Most When Data Is Scarce",
    "authors": [
      "Ifeoma Veronica Nwabufo",
      "Julius Gervelmeyer",
      "Sarah Müller",
      "Philipp Berens"
    ],
    "abstract": "Modelling how a disease progresses over time requires longitudinal imaging cohorts, which are scarce and small, whereas cross-sectional data -- one image per participant -- is abundant. Self-supervised pre-training on such data offers a way to bridge this gap, but it is unclear which strategy best supports progression modelling, or how that answer depends on the amount of labelled longitudinal data. We study this for age-related macular degeneration (AMD), pre-training encoders on the large cross-sectional NAKO cohort and predicting time to late AMD on the longitudinal AREDS dataset. We compare in-house self-supervised encoders against a general-purpose (DINOv2) and a domain-specific (RETFound) foundation model, across contrastive, masked-autoencoding, and self-distillation objectives, under frozen and fine-tuned protocols, and across labelled training sets from 100 to 32,250 examples. Which model performs best depends on how the encoder is used. When the encoder is frozen and labels are few -- the regime typical of longitudinal cohorts -- pre-trained representations reach clinically reasonable discrimination from a few hundred labelled samples, while models trained from scratch do not; this advantage fades under fine-tuning. Transfer is governed by the self-supervision objective rather than corpus scale or domain match, so that an encoder pre-trained on a modest cross-sectional cohort matches or exceeds a far larger in-domain foundation model. Together, these results offer a practical recipe for building progression models where longitudinal data is scarce: a frozen self-supervised encoder with a lightweight survival head.",
    "published": "2026-09-11T13:28:36Z",
    "updated": "2026-09-11T13:28:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12834"
  },
  {
    "id": "2609.11739",
    "title": "LOCUS: Task-Aware Low-Rank Post-Training for Token-Efficient Language Generation",
    "authors": [
      "Dongfang Zhao"
    ],
    "abstract": "Large language model serving costs scale directly with output sequence length, yet standard preference alignment often inflates response verbosity without improving utility. We study whether the parameterization of post-training updates affects generation length: low-rank subspaces alter sequence length without modifying the alignment loss. We present LOCUS, a method that selects a task-aware low-rank adaptation subspace to minimize output-token cost subject to a utility constraint. Within this subspace, post-training retains the native preference objective with a frozen backbone. Across Anthropic HH-RLHF dialogue preferences, we evaluate two $\\sim$3B decoder backbones, Pythia-2.8B and Qwen2.5-3B, against protocol-matched full-parameter DPO and DrDPO branches and the released SamPO checkpoint. LOCUS reduces continuation length by up to 39.84\\% on Pythia-2.8B and by 14.87--17.58\\% on Qwen2.5-3B while updating only 0.24--0.28\\% of model parameters, with no material change in the internal preference diagnostic.",
    "published": "2026-09-10T15:53:25Z",
    "updated": "2026-09-10T15:53:25Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.11739"
  },
  {
    "id": "2609.11737",
    "title": "ORCH: Organizational Principles Enable Collective Intelligence in Embodied AI",
    "authors": [
      "Zhengran Ji",
      "Jonathan Hyun",
      "Boyuan Chen"
    ],
    "abstract": "Collective intelligence depends not only on the capabilities of individual members, but also on how those members are organized. Yet artificial multi-agent systems are typically assembled using fixed organizational structures, even when the physical tasks they perform impose fundamentally different coordination requirements. Here we show that principles from human organization theory can be operationalized to organize large, heterogeneous collectives of embodied artificial agents. We introduce ORCH (Organizing Roles and Coordination Hierarchies), which constructs task-specific hierarchical organizations by combining pooled interdependence for work that can proceed concurrently with sequential interdependence for work governed by prerequisite relationships. Across 25 wildfire-response missions spanning reconnaissance, rescue, transportation, resource management, containment and suppression, we evaluated teams of up to 50 heterogeneous agents using eight large language models. Organizations constructed using these principles consistently outperformed four representative embodied multi-agent approaches across mission outcome, execution efficiency, exploration and computational resource use. Human-designed ORCH organizations improved final score by 63.97% and execution efficiency by 74.29% on average relative to the four prior frameworks. Organizations generated automatically by language models improved these measures by 43.63% and 52.53%, respectively. These advantages persisted across missions and underlying language models. Notably, collective performance was not monotonically determined by model scale. Analysis of long-horizon missions showed that hierarchical organization enabled teams to preserve concurrent activity within specialized groups while coordinating ordered transitions between mission phases.",
    "published": "2026-09-10T15:52:35Z",
    "updated": "2026-09-10T15:52:35Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.LG",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2609.11737"
  },
  {
    "id": "2609.11725",
    "title": "Continuous-Time Acoustic Modelling with Neural Controlled Differential Equations",
    "authors": [
      "Mattias Cross",
      "Minghui Zhao",
      "Anton Ragni"
    ],
    "abstract": "Text-to-speech (TTS) models commonly address text--speech alignment by expanding phone-level encoder states to frame-level decoder inputs using predicted durations. While this length-regulation step resolves alignment structurally, this use of duration typically changes only where and how often latent states appear, not the values of the states themselves. This paper proposes a continuous-time mechanism for duration-aware acoustic modelling in TTS using neural controlled differential equations (CDEs). We formulate the phone representation as a temporally parameterised control path and use a neural acoustic vector field to produce a continuous-time hidden state whose values evolve with phonetic content and duration-derived timing. The resulting trajectory can be sampled at discrete points and integrated into a standard acoustic decoder pipeline. Objective results contrast CDEs and typical recurrent models. Subjective results suggest that CDE-based models evaluating one phone per step can improve rank-order agreement between synthesised and reference emotion intensity while maintaining comparable emotion-expression quality to a strong baseline. Additional experiments with half-phone step-sizes suggest that temporal resolution changes the trade-off between style tracking and absolute calibration. These results position CDEs as a promising design space for continuous-time and duration-aware style-sensitive TTS.",
    "published": "2026-09-10T15:41:32Z",
    "updated": "2026-09-10T15:41:32Z",
    "categories": [
      "cs.SD",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11725"
  },
  {
    "id": "2609.11477",
    "title": "Pre- and Post-Treatment Brain Metastases Segmentation Using nnU-Net with Post-Processing for BraTS 2026",
    "authors": [
      "Haobin Liu",
      "Xin Wang"
    ],
    "abstract": "Brain metastases exhibit high inter-lesion variability in size, enhancement pattern, and post-treatment appearance, making volumetric segmentation of both pre- and post-treatment cases the central challenge of the BraTS 2026 Task 1 (Brain Metastases). We build a pragmatic pipeline on a 5-fold nnU-Net ResEnc-L ensemble, in which each fold is trained independently for 1,000 epochs with the standard Dice + cross-entropy loss on 1,296 four-modality training cases. This ensemble is followed by a rule-based post-processing cascade tuned for the lesion-wise Dice similarity coefficient (LW-DSC), a detection-oriented metric that behaves very differently from the traditional global Dice. The final pipeline reaches an LW-DSC of 0.733 / 0.751 / 0.713 / 0.549 on the enhancing tumour (ET), tumour core (TC), whole tumour (WT), and resection cavity (RC) sub-regions on the official validation leaderboard. Rather than trusting these leaderboard gains, we audit every post-processing stage with a five-fold out-of-fold (OOF) analysis with no model-training leakage over all 1,296 training cases, scored with the official BraTS evaluation code (BraTS_evaluation): it confirms two stages as robust, per-fold-consistent improvements while the third improves only the leaderboard and does not reproduce out-of-fold. We further provide a mechanistic analysis of the LW-DSC metric that explains why recall-recovering post-processing carries low risk whereas component deletion does not, and we report thirteen negative results spanning loss engineering, alternative backbones, and inference-time settings, several of which run counter to widely held intuitions. Source code is released under Apache-2.0 at https://github.com/hornbeamliu/brats2026-met.",
    "published": "2026-09-10T12:43:04Z",
    "updated": "2026-09-10T12:43:04Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.11477"
  },
  {
    "id": "2609.11472",
    "title": "BridgeMatch: Conditional Transport Bridges in Matching Matrix Space for 3D Deformable Registration",
    "authors": [
      "Qianliang Wu",
      "Haobo Jiang",
      "Guangwei Gao",
      "Shuo Chen",
      "Jin Xie",
      "Jian Yang",
      "Yaqing Ding"
    ],
    "abstract": "Reliable non-rigid point cloud correspondences are important for deformable anatomical registration, embodied perception and manipulation, and dynamic 3D reconstruction. Coarse-to-fine methods reduce computational cost by selecting the top-\\(K\\) coarse regions. However, this pruning may remove weak but correct hypotheses and restrict fine matching to an incomplete search space. We present \\paper, a two-stage generative solver that maintains the complete soft matching matrix at both coarse and high resolutions. Stage~I uses denoising diffusion to estimate a global matching matrix in the compact coarse-resolution space. We then lift this matrix to high resolution while preserving its hierarchy. The lifted matrix is rank-bounded and block-constant. Stage~II refines it through a conditional transport bridge. We implement the bridge with two types of dynamics: a deterministic endpoint-parameterized conditional Flow Matching (CFM) ODE and a stochastic Brownian-bridge SDE inspired by Schrödinger bridges. Both variants share the lifted source, a time-conditioned transformer, and a matching-matrix endpoint predictor. Experiments on 4DMatch and 4DLoMatch show that both variants produce more accurate correspondences than the compared methods and improve downstream registration, with larger gains in low-overlap cases. They also improve cross-dataset generalization on CAPE and DeepDeform without target-domain adaptation while using the same deformation solver.",
    "published": "2026-09-10T12:39:58Z",
    "updated": "2026-09-10T12:39:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.11472"
  },
  {
    "id": "2609.11463",
    "title": "BruNet: A Cross-Domain Transfer Framework for Bruise Segmentation",
    "authors": [
      "Qiming Wang",
      "Richard J. Motley",
      "Ebube E. Obi",
      "Xianfang Sun",
      "Paul L. Rosin"
    ],
    "abstract": "Segmenting bruises is a challenging task in medical imaging due to limited data and annotations, diffuse boundaries, and highly variable appearance. In this work, we propose BruNet, a segmentation framework that combines a ViT-based visual encoder (a self-supervised DINOv3 or a pretrained LingBot-Vision backbone) with a SAM-based mask decoder. BruNet is trained on the HAM10000 skin lesion dataset and evaluated on a separate bruise dataset without additional fine-tuning. Although a small number of prior studies have explored machine learning and computer vision for bruise analysis, existing work has primarily focused on detection, classification, or colour analysis rather than pixel-level localisation. To the best of our knowledge, this is the first study to address automatic bruise segmentation. Our results show that BruNet outperforms CNN-based models, state-of-the-art segmentation models, ChatGPT-4o/5-assisted SAM2 zero-shot baselines, and the medical-oriented MedSAM model, demonstrating strong cross-domain generalisation to bruise segmentation.",
    "published": "2026-09-10T12:35:20Z",
    "updated": "2026-09-10T12:35:20Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.11463"
  },
  {
    "id": "2609.11458",
    "title": "Flexible and Interpretable Accent Distance Measurements",
    "authors": [
      "Charles McGhee",
      "Mark J. F. Gales",
      "Kate M. Knill"
    ],
    "abstract": "Determining the differences between two speakers' accents is a fundamental task in linguistics and speech technology research. The methodology used to measure these differences depends on the specific research area. A phonetics researcher may demonstrate accent variation by comparing vowel formants in paired recordings of individual words. These results will be interpretable, but the recordings will be time-consuming to collect and may not be representative of connected speech. Accented Text-to-Speech (TTS) research has pushed towards using accent embeddings derived from accent classification tasks. These embeddings can be produced from any speech recording, but are not readily interpretable. In this paper, we demonstrate that articulatory representations created through articulatory inversion can be used as an interpretable basis for accent comparison and that optimal transport provides a framework for accent comparison across arbitrary recording types.",
    "published": "2026-09-10T12:32:13Z",
    "updated": "2026-09-10T12:32:13Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11458"
  },
  {
    "id": "2609.11452",
    "title": "RouteRepair: Instance-Level Failure Diagnosis and Targeted Repair in LLM-Based Automated Heuristic Design for Routing Optimization",
    "authors": [
      "Binghao Ji",
      "Di Huang",
      "Jiahui Fang",
      "Zhiyuan Liu"
    ],
    "abstract": "Efficient routing optimization is essential to freight transportation, urban logistics, and shared mobility, where high-quality heuristics are often required under limited computational budgets. Recent large language model (LLM)-based automated heuristic design methods can generate effective routing rules, but aggregate evaluation may mask recurrent failures on particular instance structures. To address this limitation, this study develops RouteRepair, which diagnoses parent-specific weaknesses from instance-level performance and applies targeted modifications to the corresponding heuristic components while protecting behavior that already performs well. Routing evidence, solver behavior, and program context are combined to define bounded repair objectives, and each intervention is validated through matched parent-child evaluation of failure recovery and collateral degradation. Experiments on the traveling salesman problem (TSP) and capacitated vehicle routing problem (CVRP) span constructive search, guided local search, and ant colony optimization. RouteRepair-GLS reduces the mean TSP optimality gap from 1.7476% to 0.7587%, while the constructive CVRP heuristic lowers average route cost by 1.91% relative to the savings heuristic; the generated ACO priors also outperform matched hand-designed priors. These results show that failure-aware, evidence-constrained refinement can improve routing heuristics on difficult instances while preserving performance on cases they already solve well.",
    "published": "2026-09-10T12:21:18Z",
    "updated": "2026-09-10T12:21:18Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11452"
  },
  {
    "id": "2609.11450",
    "title": "Cross-Lingual Clinical Annotation Projection as Constrained Text Generation: A Six-Language Study",
    "authors": [
      "Álvaro Rey-Blanes",
      "Francisco J. Moreno-Barea",
      "Francisco J. Veredas"
    ],
    "abstract": "Background: To determine whether cross-lingual clinical annotation projection can be formulated as a text-preserving, document-level generative task that produces verifiable character-level annotations for multilingual clinical corpus construction, and to characterize its robustness and computational trade-offs relative to candidate-based projection pipelines. Methods: We developed a constrained LLM projection workflow that inserts entity tags directly into immutable target-language text, followed by deterministic validation and character-offset reconstruction. We evaluated it alongside supervised candidate-span projection and hybrid ML-LLM refinement for transferring Spanish Disease, Symptom, and Procedure annotations into six languages. Evaluation used MultiClinAI gold standard with strict span matching and character-overlap F1 Results: Direct LLM projection achieved the strongest and most consistent performance. GLM 5.2 obtained a mean Strict F1 of 0.9201 across 18 language-entity combinations, while locally deployable Gemma4:31B achieved 0.9133. The best LLM configuration improved Strict F1 over the previous state of the art in all 18 settings, by 0.0564-0.1512, yielding 55,416 grounded mentions with reconstructed offsets. Conclusions: Direct LLM-based projection enables high-quality multilingual clinical annotation transfer and provides a practical approach for extending clinical NLP resources to languages with fewer annotated datasets and language-specific tools. Combined with local inference and deterministic validation, it can substantially reduce expert time and cost for multilingual clinical corpus construction.",
    "published": "2026-09-10T12:17:52Z",
    "updated": "2026-09-10T12:17:52Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11450"
  },
  {
    "id": "2609.11449",
    "title": "Prevalence Determines Precision:Silent Contamination in Detector-Defined Datasets",
    "authors": [
      "Jia Huang",
      "Yankai Wan",
      "Yangjun Ou"
    ],
    "abstract": "Many ML datasets are constructed by running a detector, heuristic, or model over candidate pools; accepted items become labels. Dataset precision is then governed by true-positive prevalence in each pool via Bayes, not solely by detector quality. Using one instrument and period, we hold a detector-defined event dataset plus an independent official index labeling every detected item as real or phantom. One detector, three pools yield phantom rates 81.7%, 9.0%, and 0.0%. Transferring precision from the two high-rate pools to the low-rate pool predicts 0.955 versus measured 0.183, a +422% error; the Bayes expression predicts all three within 3.3%. The detected response curve is an exact convex combination of a true-event and a phantom component (residual 1.1e-16), with phantoms outnumbering true events 473 to 308, so contamination is a second signal with detector-inherited shape, not additive noise. Contamination direction depends on the estimator: on identical windows one statistic is diluted and another inflated because its denominator is also contaminated. A common normalization turns the estimator into a mean of ratios whose expectation need not exist; on the same 335 events it returns 0.40 where the well-defined estimator returns 0.10.",
    "published": "2026-09-10T12:17:44Z",
    "updated": "2026-09-10T12:17:44Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11449"
  },
  {
    "id": "2609.11447",
    "title": "Investigating catastrophic forgetting in sound event classification",
    "authors": [
      "Riccardo Casciotti",
      "Annamaria Mesaros"
    ],
    "abstract": "This work investigates a number of approaches to prevent catastrophic forgetting in class incremental learning scenarios for sound event classification tasks. We analyze the problem using architectural and regularization approaches, using FSD50K and AudioSet datasets. We design incremental stages and solutions that selectively protect the kernels of the network from weight updates to prevent catastrophic forgetting, and a dynamic head solution that expands itself each time a new task is learned. The findings show that catastrophic forgetting mainly happens in deeper layers, in particular in the classifier head. For the studied in-domain sound classification problem, the solution that seems to alleviate catastrophic forgetting and is the most efficient is a full freezing of the feature extractor with a fine-tuning of the dynamic head classifier, showing little to no forgetting and great training stability, and a good balance between memory-stability and learning plasticity.",
    "published": "2026-09-10T12:16:56Z",
    "updated": "2026-09-10T12:16:56Z",
    "categories": [
      "eess.AS",
      "cs.AI",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2609.11447"
  },
  {
    "id": "2609.11446",
    "title": "Calibration-Aware Uncertainty Cascades for Efficient Heterogeneous Model Collaboration",
    "authors": [
      "Yilin Zhang",
      "Han Jiang",
      "Cai Xu",
      "Ying Liu",
      "Wei Zhao"
    ],
    "abstract": "Heterogeneous model collaboration seeks to exploit the complementary strengths of different models to balance predictive performance and inference cost. Existing approaches typically rely either on trained routers, which tie routing decisions to a fixed task and model pool, or on raw-confidence cascades, whose thresholds lack consistent reliability semantics across heterogeneous models. Consequently, these approaches adapt poorly to changing model pools and deployment budgets. We propose Calibration-Aware Uncertainty Cascades (CAUC), a simple post-hoc framework that independently calibrates each model's confidence and selects deployment policies using validation data. The resulting calibrated confidence scores establish a common reliability scale for accepting an early prediction, invoking a stronger model, or selectively combining model outputs. This unified decision criterion decouples deployment policies from any particular model pool or operating budget. We further show theoretically that calibration gives confidence thresholds an explicit selective-risk interpretation, whereas uncalibrated scores offer no comparable reliability guarantee. Extensive experiments demonstrate that, across six language benchmarks, CAUC achieves an average relative accuracy improvement of 1.9% over strong-model-only inference while avoiding approximately 47% of strong-model calls. On image classification benchmarks, it maintains or improves predictive performance while reducing measured GFLOPs by up to 57%.",
    "published": "2026-09-10T12:14:54Z",
    "updated": "2026-09-10T12:14:54Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11446"
  }
];
