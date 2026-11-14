window.PAPER_DATA_UPDATED_AT = "2026-11-14";
window.PAPER_ITEMS = [
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
  },
  {
    "id": "2611.03723",
    "title": "EMBERS: Empirically Motivated Robustness Testing of Deep Research Systems via Defect-Guided Fuzzing",
    "authors": [
      "Shuochuan Li",
      "Zan Wang",
      "Dong Wang",
      "Yuhang Jiang",
      "Huajin Cui",
      "Chen Zhang",
      "Gang Wang",
      "Junjie Chen"
    ],
    "abstract": "Deep Research (DR) systems extend large language models into autonomous agents that decompose complex information needs, iteratively search the web, and synthesize evidence to answer challenging questions. However, their multi-stage execution may introduce robustness risks, as variations in user questions or intermediate search inputs may propagate across research stages and lead to incorrect answers. Existing evaluations focus on task-solving capabilities or robustness against external evidence disturbances, leaving intrinsic weaknesses in DR execution insufficiently explored. Thus, we conduct an empirical study of 1,932 execution trajectories from three representative DR systems and identify nine recurring defect categories across subquestion formulation, online search, and final reasoning. Guided by these findings, we propose EMBERS, an empirically motivated, defect-guided fuzzing framework for robustness testing of DR systems. Starting from correctly answered seed questions, EMBERS generates stage-targeted test inputs using defect-guided mutation, web-search-assisted fidelity assurance, and diversity-aware seed maintenance. Experiments across 16 framework--model--dataset settings show that EMBERS achieves 3.21 times the failure-discovery throughput of the strongest baseline under identical testing budgets. Human and LLM-assisted evaluations demonstrate that most generated inputs preserve the original information need and necessary contextual constraints. Moreover, model fine-tuning experiments show consistent-answer performance improvement, highlighting their value for robustness testing and model improvement.",
    "published": "2026-11-01T06:27:23Z",
    "updated": "2026-11-01T06:27:23Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.03723"
  },
  {
    "id": "2611.01627",
    "title": "EgoMo3R: Joint Egocentric Motion and Scene Reconstruction",
    "authors": [
      "Chaitanya Patel",
      "Yusuke Kato",
      "Rin Takahira",
      "Kazuki Kozuka",
      "Juan Carlos Niebles",
      "Ehsan Adeli"
    ],
    "abstract": "Understanding holistic 3D human motion and the surrounding environment from egocentric video is fundamental for applications in AR/VR and robotics. Although these tasks are inherently coupled, existing methods treat them separately. In particular, egocentric motion reconstruction methods typically assume access to metric, gravity-aligned camera trajectories from specialized inertial sensors. Recovering such trajectories from monocular egocentric video remains a significant challenge due to rapid head movements and motion blur. We present EgoMo3R, a joint optimization framework that simultaneously reconstructs 3D human motion and scene geometry from casual egocentric video. It leverages the robustness of low-level visuo-geometric primitives, including monocular depth, optical flow, and point tracks, integrated with a diffusion-based human motion prior via first-order optimization. We propose an alternating optimization scheme that establishes a synergistic feedback loop: scene reconstruction provides physical grounding and trajectory conditioning for the motion prior, while the motion prior regularizes the camera trajectory and anchors the scene in a metric, gravity-aligned world frame. We evaluate EgoMo3R on the highly dynamic sequences of the EgoExo4D and Nymeria datasets and show that it outperforms specialized baselines in both 3D scene reconstruction and egocentric motion estimation.",
    "published": "2026-11-01T06:20:11Z",
    "updated": "2026-11-01T06:20:11Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.01627"
  },
  {
    "id": "2611.01626",
    "title": "Special and General Computational Aesthetics",
    "authors": [
      "Ganqing Luo",
      "Chuan Li",
      "Liaoruxing Zhang",
      "Xin Jin"
    ],
    "abstract": "Computational aesthetics is a field at the intersection of computer science, artificial intelligence, aesthetics, and other disciplines. As AI has developed, the field has formed relations of inclusion, intersection, or support with computational art, AI art, AI aesthetics, AI-generated content (AIGC), computational creativity, affective computing, and neuroaesthetics. Without distinguishing scope, objectives, and methods, it may be narrowed to image aesthetic quality assessment or expanded into an umbrella term for AI's involvement in art. We analyze its internal structure and its relations with neighboring concepts, and propose a two-level scope: special computational aesthetics (SCA) and general computational aesthetics (GCA). SCA centers on aesthetic measurement and aesthetic process modeling. The former primarily corresponds to \"Aesthetic Perception\": computationally identifying and representing aesthetic attributes and predicting human aesthetic evaluations; the latter primarily to \"Aesthetic Understanding\": computationally describing, testing, and explaining how human aesthetic perception and judgment are formed. GCA extends this core to include \"Aesthetic Generation,\" namely artistic generation guided by computational aesthetic models. Some computational aesthetic tasks can also use non-AI methods. Research in this scope using AI algorithms and models we define as AI aesthetics, which may involve the special core and the general extension. \"Aesthetic Generation\" intersects with AIGC, AI art, and computational creativity, but belongs to the general extension defined here only when computational aesthetic models substantively constrain, guide, or optimize artwork generation. We also draw on Feng Peng's discussion of the computability of beauty, aesthetic experience, and art as a theoretical reference for clarifying boundaries between computational aesthetics and related concepts.",
    "published": "2026-11-01T06:19:21Z",
    "updated": "2026-11-01T06:19:21Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.01626"
  },
  {
    "id": "2611.01620",
    "title": "Chain-of-Thought Oversight Requires Separate Evidence for Faithfulness and Monitorability",
    "authors": [
      "Sichao Li",
      "Sai Ma",
      "Xiyang Hu",
      "Chudi Zhong",
      "Tongliang Liu"
    ],
    "abstract": "A common assumption in chain-of-thought (CoT) oversight is that a visible reasoning trace makes model behavior easier to monitor. We argue that this assumption can conflate distinct properties along a chain linking a model's internal computation, reasoning artifacts, outputs, and monitor judgments. We identify four properties along this chain: reasoning visibility (whether a trace is accessible), mechanistic faithfulness (whether a trace reflects internal computation), mechanistic localizability (whether a compact causal mechanism can be isolated), and behavioral monitorability (whether a monitor can detect the target behavior). Two complementary case studies across three open-weight reasoning models show why these distinctions matter. In the security vulnerability reasoning study, probes and activation ablations provide evidence of internal representation and causal influence, but a monitor with access to the reference answer does not outperform the majority-class baseline in a held-out test. In authority-hint factual reasoning study, a monitor correctly distinguishes changed from unchanged answers, but seven mechanistic analyses do not isolate a compact causal mechanism. These results show that evidence for one claim does not establish the others. We therefore propose an evidential-chain reporting standard. Each claim carries a licensing statement that specifies its target property, access tier, and artifact, and labels each required link as supported, unsupported, or assumed. These assessments determine whether the conclusion is licensed, conditionally licensed, or not licensed.",
    "published": "2026-11-01T06:16:34Z",
    "updated": "2026-11-01T06:16:34Z",
    "categories": [
      "cs.AI",
      "cs.CR"
    ],
    "url": "https://arxiv.org/abs/2611.01620"
  },
  {
    "id": "2611.01617",
    "title": "Seeing What Matters, Verifying What Pays: Load-Adaptive Speculative Decoding for Vision-Language Models",
    "authors": [
      "Hong Nie",
      "Zhangchi Gao",
      "Yuqian Liang",
      "Jun Yu",
      "Bo Wang",
      "Jianqing Sun",
      "Shengping Liu"
    ],
    "abstract": "Speculative decoding accelerates vision-language model (VLM) inference without altering the output distribution, yet two factors limit its gains. Existing drafters either lack the image evidence required for visually grounded tokens or pay to condition on every visual token, although a short draft block typically depends on only a few image regions. Moreover, the value of verifying additional candidates varies with GPU load, so no fixed verification structure is efficient across serving conditions. We present Uni-LaSpec, a block-parallel speculative decoding framework that addresses both factors. To improve draft quality, Uni-LaSpec reuses the verifier's own attention: the query retained from the preceding verification ranks the cached, int8-quantized visual keys, and a cross-layer vote selects a few visual tokens that the drafter fuses through gated cross-attention. Acceptance-aware training further weights each draft position by its contribution to the accepted prefix. To allocate verification, a marginal-cost criterion selects the structure per request and per round: draft trees exploit idle verifier capacity under light load, whereas a dynamic head truncates linear drafts under heavy load. Across six VLMs from three model families and 17 text and multimodal benchmarks, selecting eight visual tokens retains at least 98.6% of the acceptance obtained from the full image at sub-millisecond selection cost. With greedy decoding at concurrency one, Uni-LaSpec achieves up to 5.11x text and 3.24x multimodal throughput over autoregressive decoding. Across six load levels and three GPU types, it outperforms autoregressive decoding in every setting and matches or exceeds the best fixed verification strategy in 123 of 144 settings; under bursty arrivals, it reduces mean end-to-end latency by 47.6% relative to linear verification.",
    "published": "2026-11-01T06:09:55Z",
    "updated": "2026-11-01T06:09:55Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01617"
  },
  {
    "id": "2611.01615",
    "title": "LLM-Enhanced Multimodal House Price Prediction using Structured, Textual, and Visual Features",
    "authors": [
      "Khandokar Md. Rahat Hossain",
      "Souvik Das",
      "Tahsina Hashem",
      "Mohammed Eunus Ali",
      "Tanzima Hashem"
    ],
    "abstract": "Accurate house price prediction is essential for real estate buyers, sellers, agents, and financial institutions. Traditional methods rely primarily on structured data, e.g., number of bedrooms, bathrooms, parkings, but they overlook rich contextual information embedded in textual descriptions and property photos. Previous deep learning approaches for house price prediction have fused multimodal data but they fall short to extract structured spatio-temporal and contextual features from texts and semantic visual information from images. In this paper, we introduce a novel multimodal framework that addresses these limitations by systematically integrating structured attributes, textual descriptions, and visual images of properties to achieve higher prediction accuracy while maintaining interpretability. We use a large language model to derive domain-specific spatio-temporal and contextual features from text, and an unsupervised vision-language approach to automatically group photos into meaningful classes like indoor, outdoor, mixed, or floorplan, that are commonly present in real-world house listings. These categories are created without manual labeling by aligning image clusters with carefully designed pseudo text prompts. We fuse all features into a unified representation and use an optimized regressor to predict prices. Experiments on a large real-world property dataset demonstrate that our method outperforms traditional methods and existing multimodal baselines. Ablation studies confirm that the novel textual feature extraction and categorized visual embeddings substantially contribute to more accurate and reliable price predictions.",
    "published": "2026-11-01T06:07:04Z",
    "updated": "2026-11-01T06:07:04Z",
    "categories": [
      "cs.LG",
      "cs.CL",
      "cs.CV",
      "cs.IR"
    ],
    "url": "https://arxiv.org/abs/2611.01615"
  },
  {
    "id": "2611.01612",
    "title": "Halal-NeSyNet: Clause-Scoped Neuro-Symbolic Cross-Attention for Automated Food Ingredient Auditing and Risk-Aware Halal Logistics Triage",
    "authors": [
      "Mochamad Rizal Fauzan",
      "Naila Nursyifa",
      "Irgi Surya"
    ],
    "abstract": "Verifying that a packaged food is Halal requires reading ingredient declarations and E-number additives before goods enter certified warehouses. Dual-origin additives such as E471, E422, E441 and E920 are Mushbooh (doubtful) unless a botanical, microbial or certified-Halal qualifier appears in the same ingredient clause, so a plant-based qualifier on one clause must not clear an unqualified additive in another. We call a failure to respect this scope cross-clause modifier confounding and build a benchmark of 3,199 items (277 Open Food Facts records and 2,922 template-generated clause-swap items, labelled by an explicit 50-code rule base rather than by a certification authority) with a 540-item counterfactual suite. We propose Halal-NeSyNet, which couples a DistilBERT encoder with a 16-dimensional rule-derived symbolic vector through cross-attention and gated fusion, trained with an asymmetric false-Halal risk loss. Over five seeds, text-only TF-IDF baselines reach 86.25-86.71 % accuracy with 13.42-21.73 % false-Halal leakage and 6.33-26.00 % counterfactual triad consistency, whereas Halal-NeSyNet reaches 97.04+/-0.34 % and 99.67+/-0.50 %. Gradient boosting given the same symbolic vector reaches 96.25+/-1.24 % (+0.59 points from Halal-NeSyNet, 95 % CI [-1.11, +2.28]), so most of the gain comes from clause-scoped symbolic features and not from the network, and the risk loss did not help. Holding out whole template families, text-only models fall to 61.91-78.35 %, Halal-NeSyNet to 90.87+/-11.76 % and logistic regression with the symbolic vector to 91.11+/-2.88 %, with far more spread for Halal-NeSyNet. A three-lane receiving simulation auto-clears 49.33 % of cargo at 0.76 % green-lane contamination. Because labels and features come from one rule engine and 91.3 % of the items are templated, the results measure fidelity to a rule policy, not religious certification.",
    "published": "2026-11-01T05:56:41Z",
    "updated": "2026-11-01T05:56:41Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.01612"
  },
  {
    "id": "2611.01607",
    "title": "NatureFusion: Rethinking Infrared and Visible Image Fusion as Natural Complementary Enhancement",
    "authors": [
      "Jianfeng Ding",
      "Linfeng Tang",
      "Hao Zhang",
      "Han Xu",
      "Xunpeng Yi",
      "Yibing Zhang",
      "Meiqi Gong",
      "Zhongyuan Wang",
      "Jiayi Ma"
    ],
    "abstract": "In the absence of ground truth, most existing infrared and visible image fusion methods pursue fidelity to the source images and directly superimpose two physically distinct modalities. As a result, salient infrared targets appear as bright patches of thermal radiation pasted onto the scene. These patches obscure the original color and texture of the targets, so the fused images look unnatural to human observers and deviate from the data distribution learned by vision models pretrained on visible images. Therefore, we redefine infrared and visible image fusion as natural complementary enhancement rather than source fidelity, and propose NatureFusion, which exploits cross-modal complementary cues to infer a clear and natural visible-style image from low-quality visible and infrared image pairs. Specifically, to address the lack of ground truth, we employ a generative foundation model as the teacher to directly generate visually natural fused images for supervision. Furthermore, to fully distill the teacher's generative capability while reducing computational cost, we fine-tune a pretrained generative model with conditional flow matching through a light-weight fusion adapter. Last but not least, to further improve downstream performance without sacrificing natural appearance, we freeze the fusion adapter and introduce a detector-supervised task adapter that strengthens the complementary contribution of infrared. Extensive comparisons with seven multi-modal fusion and seven single-modality enhancement methods demonstrate that NatureFusion generates visually natural fused images with the best perceptual quality. Detection and segmentation models pretrained on visible images achieve substantially higher accuracy on our fused images than on those of any competing method.",
    "published": "2026-11-01T05:52:10Z",
    "updated": "2026-11-01T05:52:10Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01607"
  },
  {
    "id": "2611.01605",
    "title": "MedNet and U$^2$-ViT: A Nested Vision Transformer Diffusion Framework for Diverse Medical Images Generation",
    "authors": [
      "Lakshmikar R. Polamreddy",
      "Jialu Li",
      "Youshan Zhang"
    ],
    "abstract": "The scarcity of diverse, high-quality medical images remains a significant bottleneck in advancing AI-driven medical diagnostics and treatment planning. Traditional datasets often suffer from class imbalances, limited disease coverage, and insufficient variations in imaging conditions - challenges that hinder the development of robust, generalizable models. To address this, we introduce MedNet, a large-scale, multi-modal text-to-image dataset spanning 61 disease categories with 160 classes, covering both humans and animals. We built this with images from trusted public repositories, ensuring data diversity, quality, and ethical compliance. Additionally, we propose U$^2$-ViT, a novel diffusion-based text-to-image generation architecture arranging Vision Transformers (ViTs) in a nested U-Net structure to enhance the generation of diverse, and high-fidelity medical images. Through extensive experiments, we demonstrate that our model achieves the best Fr'echet Inception Distance (FID) score compared to state-of-the-art models. The source code is available at https://github.com/LakshmikarPolamreddy/MedNet-U2-ViT.",
    "published": "2026-11-01T05:42:29Z",
    "updated": "2026-11-01T05:42:29Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01605"
  },
  {
    "id": "2611.01603",
    "title": "DyRadio: Spatiotemporal Diffusion for Dynamic Radio Map Reconstruction",
    "authors": [
      "Zhijie Fan",
      "Zhifeng Zhao",
      "Rongpeng Li"
    ],
    "abstract": "Accurate radio map (RM) reconstruction is essential for environment-aware wireless networks. Sampling-based methods, which infer radio conditions from sparse measurements, are widely adopted because they do not require explicit knowledge of transmitter configurations. However, in dynamic environments, time-varying propagation conditions cause RMs to evolve, complicating reconstruction from temporally distributed sparse observations. Although cross-frame observations provide complementary spatial information, their direct aggregation can introduce temporal state mismatch. Furthermore, unknown measurement noise adds to the reconstruction difficulties. To address these challenges, we propose DyRadio, a framework that integrates spatiotemporal RM reconstruction with unknown noise estimation. Specifically, a propagation-prior-guided, noise-conditioned spatiotemporal diffusion model (DM) jointly reconstructs consecutive RMs by capturing cross-frame dependencies, while adapting to measurement noise levels. To estimate the noise level, an iterative predictive likelihood method alternates between DM-based blind-area prediction and noise-level updates. The estimated noise level then conditions reconstruction of the complete RM sequence. Experimental results demonstrate superior reconstruction accuracy and robustness against measurement noise, with peak signal-to-noise ratio (PSNR) improvements of 1.18-5.75 dB over the best-performing baseline across all evaluated settings.",
    "published": "2026-11-01T05:39:31Z",
    "updated": "2026-11-01T05:39:31Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.01603"
  },
  {
    "id": "2611.01601",
    "title": "Accurate automated photo-identification of Near Eastern and European fire salamanders",
    "authors": [
      "Maayan Yesharim",
      "Hava Goldstein",
      "Gabi Kolodny",
      "Assaf Ben-Levy",
      "Tamar Kis-Papo",
      "Dor Gavish",
      "Rotem Vidan",
      "Nirit Lavie-Alon",
      "Olga Rybak",
      "Yoav Ram"
    ],
    "abstract": "Photo-identification underpins non-invasive capture-recapture monitoring of amphibians, but manual identification becomes slow and error-prone as reference libraries grow. Focusing on the Near Eastern fire salamander (Salamandra infraimmaculata), we developed a pipeline based on zero-shot local-feature matching (SuperPoint and LightGlue) without species-specific training and evaluated it on $2{,}440$ field photographs from Haifa and Tel Dan in northern Israel. We isolated the yellow spot pattern, scored image similarity by the number of high-confidence keypoint matches, which reduced a confound whereby many-spotted individuals accumulate spurious matches, and assigned identities across the database by two-tier clustering. Pipeline-assisted expert review corrected misidentifications, reducing the number of identities by almost a quarter. On held-out individuals, the pipeline ranked the correct individual first for $95.2\\%$ of queries and recovered identities with an ARI of $0.958$. Without modification, it reached $95.1\\%$ and $91.7\\%$ top-1 accuracy on two datasets of the European fire salamander (Salamandra salamandra) and recognised $93.7\\%$ of recaptures in one of them, compared with $38$-$77\\%$ for five established programs and $93.9\\%$ for visual inspection. Zero-shot local-feature matching thus offers amphibian monitoring a re-identification tool that needs no training data, transfers between related species, scales to databases of over a thousand individuals, and can audit existing databases before capture-recapture analysis.",
    "published": "2026-11-01T05:33:43Z",
    "updated": "2026-11-01T05:33:43Z",
    "categories": [
      "cs.CV",
      "q-bio.QM"
    ],
    "url": "https://arxiv.org/abs/2611.01601"
  },
  {
    "id": "2611.01600",
    "title": "SCOUT: Planning under Occlusion via Object-Centric World Model Rollouts",
    "authors": [
      "Amir Hossain Raj",
      "Xuesu Xiao"
    ],
    "abstract": "Robots manipulating in cluttered spaces must often plan from partial views where foreground objects occlude the target, surrounding geometry, and usable free space. Reactive policies often miss these hidden constraints, while exhaustive search becomes computationally prohibitive in dense clutter. We present SCOUT, an occlusion-aware planning framework that bridges high-level deliberation with grounded physical rollouts. SCOUT leverages an object-centric scene representation to reconstruct hidden geometry and derive a relational planning state capturing blocker hierarchies and accessibility corridors. To navigate the vast action space in clutter, an LLM proposes structured action candidates which are then rigorously evaluated via Monte Carlo Tree Search (MCTS) using a learned action-conditioned world model. Evaluations on 'Reveal' and 'Placement' tasks show that SCOUT outperforms Vision-Language-Action (VLA) policies, embodied agents, and 3D world models, with significant gains in long-horizon tasks requiring reasoning over occluded geometry. We further validate the framework's robustness through real-world robotic manipulation in a cluttered shelf environment.",
    "published": "2026-11-01T05:32:18Z",
    "updated": "2026-11-01T05:32:18Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01600"
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
  }
];
